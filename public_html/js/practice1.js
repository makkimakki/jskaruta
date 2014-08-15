var Practice1 = function() {
  this.controller = null;
  this.current_jinchi = 1;

  /*
    practice_status
    1: 練習開始前
    2: 歌詠み中(詠み始め前)
    3: 歌詠み中
    4: 札タッチ後、結果のダイアログ表示中
    5: 札タッチお手つき後、正解確認中
    6: 練習終了
   */
  const PS_BEFORE_GAME = 1;
  const PS_BEFORE_READING = 2;
  const PS_READING = 3;
  const PS_TOUCHED = 4;
  const PS_CONFIRM_ANSWER = 5;
  const PS_FINISHED = 6;  
  this.practice_status = PS_BEFORE_GAME;

  //animatingが1の時は入力を受け付けない
  this.is_animating = 0;

  this.jobjs = {
    1: document.getElementById('karutaArea1'),
    2: document.getElementById('karutaArea2'),
    3: document.getElementById('karutaArea3'),
    4: document.getElementById('karutaArea4')
  };
  //jinchi light, jinchi button
  this.jlobj = document.getElementById('jinchiLight');
  this.jbobjs = {
    next: document.getElementById('nexta_btn'),
    prev: document.getElementById('preva_btn')
  };

  var self = this;

  this.init = function(controller) {
    this.controller = controller;
    document.getElementById('game').style['display'] = 'block';
    KarutaBoard.init('practice1');
    self.controller.cover.fadein(fadein_spec);
  };

  this.start = function() {
    //イベントリスナーの準備
    self.setKarutaClickListeners();
    self.jbobjs.next.addEventListener('click', self.toNextJinchi);
    self.jbobjs.prev.addEventListener('click', self.toPrevJinchi);

    UtayomiController.init();
    MoonTimer.initObjs();

    /*
    UtayomiController.startYomi();
    setTimeout(function() { UtayomiController.eraseAndDisplayAll(); }, 2000);
    MoonTimer.initObjs();
    MoonTimer.startTimer();
    */

    //self.controller.dialog.init("お手つき！\n第98番 作者は従二位家隆\n(じゅうにいいえたか)です。");
    //setTimeout(function(){ self.controller.dialog.open(); }, 3000);
  };

  this.setKarutaClickListeners = function() {
    var uta_no_list = KarutaBoard.getInitialUtaNoList();
    var objs = KarutaBoard.getObjs();

    for (var i = 1; i <= 4; i++) {
      for (var j = 0; j < uta_no_list[i].length; j++) {
        for (var k = 0; k < uta_no_list[i][j].length; k++) {
          if (uta_no_list[i][j][k]) {
            objs[i][j][k]['obj1'].addEventListener('click', self.executeKarutaClick);
          }
        }
      }
    }
  };

  this.karutaclick_specs = {};
  this.karutaclick_specs[PS_BEFORE_GAME] = {
    next: function() {
      self.is_animating = 0;
      self.setStatus(PS_BEFORE_READING);
      setTimeout(function() {
        self.setStatus(PS_READING);
        UtayomiController.startYomi();
        MoonTimer.startTimer();
      }, 800);
    }
  };
  this.karutaclick_specs[PS_BEFORE_READING] = {
    next: function(obj) {
      self.is_animating = 0;
      self.setStatus(PS_TOUCHED);
      //ダイアログ表示
      var author = KarutaUtil.getAuthor(obj.karuta_uta_no);
      self.controller.dialog.init(
        "お手つき！札がまだ詠まれていません！\n"+
        "第"+String(obj.karuta_uta_no)+"番 作者は"+author.kanji+"\n"+
        "("+author.yomi+")です。",
        self.dialog_specs[PS_BEFORE_READING]['btn1'],
        self.dialog_specs[PS_BEFORE_READING]['btn2']
      );
      self.controller.dialog.open();
    }
  };
  this.karutaclick_specs[PS_READING] = {
    next: function(obj) {
      self.is_animating = 0;
      self.setStatus(PS_TOUCHED);
      //ダイアログ表示

    }
  };

  this.dialog_specs = {};
  this.dialog_specs[PS_BEFORE_READING] = {
    btn1: {
      label: '次に進む',
      execute: function() {
        MoonTimer.reset();
        UtayomiController.stepToNext();
        self.setStatus(PS_BEFORE_READING);
        setTimeout(function() {
          self.setStatus(PS_READING);
          UtayomiController.startYomi();
          MoonTimer.startTimer();
        }, 1000);
      }
    },
    btn2: {
      label: '正解を確認',
      execute: function() {
      }
    },
  };

  this.setStatus = function(status_id) {
    self.practice_status = status_id;
  };

  this.executeKarutaClick = function() {
    if (self.is_animating) return;

    var obj = this;

    if (self.practice_status == PS_BEFORE_GAME) {
      //画面をホワイトアウトさせて戻してから練習開始。
      self.is_animating = 1;
      //陣地を1の位置に戻すの忘れてたので、とりあえずホワイトアウト中に戻す。。
      setTimeout(function() { self.setJinchi(1); }, 1000);
      self.controller.cover.whiteOutAndIn(self.karutaclick_specs[self.practice_status]);
      return;
    }
    if (self.practice_status == PS_BEFORE_READING) {
      //かるた飛ばし後、結果を記録してお手つきのダイアログ表示
      self.is_animating = 1;
      MoonTimer.stopTimer();
      UtayomiController.eraseAndDisplayAll();
      KarutaBoard.flyKaruta(obj, self.karutaclick_specs[self.practice_status]);
      return;
    }
    if (self.practice_status == PS_READING) {
      //かるた飛ばし後、結果を記録して結果のダイアログ表示
      self.is_animating = 1;
      MoonTimer.stopTimer();
      UtayomiController.eraseAndDisplayAll();
      KarutaBoard.flyKaruta(obj, self.karutaclick_specs[self.practice_status]);
      return;
    }
    if (self.practice_status == PS_TOUCHED) {
      //何もしない
      return;
    }
    if (self.practice_status == PS_CONFIRM_ANSWER) {
      //正解札だったらかるた飛ばし後、次へ進むダイアログを表示
      return;
    }
    if (self.practice_status == PS_FINISHED) {
      //何もしない
      return;
    }
  };

/*
  this.flyKaruta = function() {
    this.style['z-index'] = '100';
    this.className = 'karuta rrotate';
    var obj = this;
    setTimeout(function() {
      obj.className = 'karuta';
      console.log(obj.karuta_uta_no);
    }, 2000);
  };
*/

  this.toNextJinchi = function() {
    if (self.is_animating) return;
    if (self.practice_status == PS_TOUCHED) return;

    var next_jinchi = (self.current_jinchi) % 4 + 1;
    self.setJinchi(next_jinchi);
  };

  this.toPrevJinchi = function() {
    if (self.is_animating) return;
    if (self.practice_status == PS_TOUCHED) return;

    var next_jinchi = (self.current_jinchi + 2) % 4 + 1;
    self.setJinchi(next_jinchi);
  };

  this.setJinchi = function(jinchi_id) {
    self.jobjs[self.current_jinchi].style['display'] = 'none';
    self.jobjs[jinchi_id].style['display'] = 'block';
    self.current_jinchi = jinchi_id;
    self.setJinchiLight(jinchi_id);
  };

  this.setJinchiLight = function(jinchi_id) {
    self.jlobj.style['left'] = String((jinchi_id - 1) * 25)+'px';
  };

  this.toNextPhase = function(next_phase) {
    fadeout_spec.next_phase = next_phase;
    self.controller.cover.fadeout(fadeout_spec);
  };

  var fadein_spec = {
    next_seconds: 1,
    next: function() {
      self.start();  
    }
  };

  var fadeout_spec = {
    next_secnods: 1,
    next: function() {
      document.getElementById('game').style['display'] = 'none';
      self.controller.finishPhase(this.next_phase);
    }
  };

};
