var Practice2 = function() {
  this.controller = null;
  this.current_jinchi = 1;
  this.bg_color = '#000055';

  /*
    practice_status
    1: 練習開始前
    2: 歌詠み中(詠み始め前)
    3: 歌詠み中
    4: 札タッチ後、結果のダイアログ表示中
    5: 札タッチお手つき後、正解確認中
    6: 練習終了
   */
  const PS_BEFORE_GAME    = 1;
  const PS_BEFORE_READING = 2;
  const PS_READING        = 3;
  const PS_TOUCHED        = 4;
  const PS_CONFIRM_ANSWER = 5;
  const PS_FINISHED       = 6;  
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
    self.controller = controller;
    self.is_animating = 0;
    self.setStatus(PS_BEFORE_GAME);
    self.resetJinchi();
    UtayomiController.init();
    MoonTimer.initObjs();
    MoonTimer.reset();
    document.getElementById('game').style['display'] = 'block';
    document.body.style['background-color'] = self.bg_color;
    KarutaBoard.init('practice1');
    KarutaRecorder.init();
    ScoreBoard.init();
    self.controller.cover.fadein(fadein_spec);
  };

  this.start = function() {
    //イベントリスナーの準備
    self.setKarutaClickListeners();
    self.jbobjs.next.addEventListener('click', self.toNextJinchi);
    self.jbobjs.prev.addEventListener('click', self.toPrevJinchi);
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

  this.removeClickListeners = function() {
    var uta_no_list = KarutaBoard.getInitialUtaNoList();
    var objs = KarutaBoard.getObjs();
    for (var i = 1; i <= 4; i++) {
      for (var j = 0; j < uta_no_list[i].length; j++) {
        for (var k = 0; k < uta_no_list[i][j].length; k++) {
          if (uta_no_list[i][j][k]) {
            objs[i][j][k]['obj1'].removeEventListener('click', self.executeKarutaClick);
          }
        }
      }
    }
    self.jbobjs.next.removeEventListener('click', self.toNextJinchi);
    self.jbobjs.prev.removeEventListener('click', self.toPrevJinchi);
  };

  this.karutaclick_specs = {};
  this.karutaclick_specs[PS_BEFORE_GAME] = {
    next: function() {
      self.recordCurrentCorrect();
      self.is_animating = 0;
      self.setStatus(PS_BEFORE_READING);
      setTimeout(function() {
        self.setStatus(PS_READING);
        UtayomiController.startYomi();
        MoonTimer.startTimer();
        KarutaRecorder.setStartMTimestamp(MoonTimer.getStartMTimestamp());
      }, 800);
    }
  };
  this.karutaclick_specs[PS_BEFORE_READING] = {
    next: function(obj) {
      //結果を記録
      var result_no = C.RESULT_EARLY_TOUCHED;
      var answer_no = obj.karuta_uta_no;
      var correct_no = UtayomiController.getCurrentUtaNo();
      var author = KarutaUtil.getAuthor(correct_no);
      self.controller.dialog.init(
        "お手つき！札がまだ詠まれていません！\n"+
        "第"+String(correct_no)+"番 作者は"+author.kanji+"\n"+
        "("+author.yomi+")です。",
        self.dialog_specs[PS_BEFORE_READING]['btn1'],
        self.dialog_specs[PS_BEFORE_READING]['btn2']
      );

      self.recordCurrentResult(result_no, answer_no);

      self.is_animating = 0;
      self.setStatus(PS_TOUCHED);
      self.controller.dialog.open();
    }
  };
  this.karutaclick_specs[PS_READING] = {
    next: function(obj) {
      //結果を記録
      var result_no;
      var answer_no  = obj.karuta_uta_no;
      var correct_no = UtayomiController.getCurrentUtaNo();
      var author     = KarutaUtil.getAuthor(correct_no);

      if (answer_no == UtayomiController.getCurrentUtaNo()) {
        result_no = C.RESULT_CORRECT;
        self.controller.dialog.init(
          "正解！\n"+
          "第"+String(correct_no)+"番 作者は"+author.kanji+"\n"+
          "("+author.yomi+")です。",
          self.dialog_specs[PS_READING]['btn1']
        );
      } else {
        result_no = C.RESULT_WRONG_TOUCHED;
        self.controller.dialog.init(
          "お手つき！\n"+
          "第"+String(correct_no)+"番 作者は"+author.kanji+"\n"+
          "("+author.yomi+")です。",
          self.dialog_specs[PS_READING]['btn1'],
          self.dialog_specs[PS_READING]['btn2']
        );
      }
      self.recordCurrentResult(result_no, answer_no);

      self.is_animating = 0;
      self.setStatus(PS_TOUCHED);
      self.controller.dialog.open();
    }
  };
  this.karutaclick_specs[PS_CONFIRM_ANSWER] = {
    next: function(obj) {
      //練習終了のメッセージ：練習終了です。お疲れ様でした！　結果を見る

      //次の歌がない時
      if (UtayomiController.isLast()) {
       self.setStatus(PS_FINISHED);
       KarutaRecorder.setEndMTimestamp(MoonTimer.getStopMTimestamp());

       //終了ダイアログを開いて終了へ
       self.controller.dialog.init(
         "練習終了です。お疲れ様でした！",
         self.dialog_specs[PS_FINISHED]['btn1']
       );
       self.controller.dialog.open();
       return;
      }
      //次の歌がある時
      self.controller.dialog.init(
        "次の歌にすすみます。",
        self.dialog_specs[PS_CONFIRM_ANSWER]['btn1']
      );
      self.is_animating = 0;
      self.setStatus(PS_TOUCHED);
      self.controller.dialog.open();
    }
  };
  

  this.dialog_specs = {};
  this.dialog_specs[PS_BEFORE_READING] = {
    btn1: {
      label: '次に進む',
      execute: function() {
        //正解札を取り除き、お手つきした時はタッチした札を元の場所に戻す。
        var current_no = UtayomiController.getCurrentNo();
        var rec = KarutaRecorder.getRecord(current_no);

        if (rec.correct.uta_no != rec.result.uta_no) {
          KarutaBoard.restoreObj(rec.result.uta_no);  
        }
        KarutaBoard.removeObj(rec.correct.uta_no);

        //次の歌がない時
        if (UtayomiController.isLast()) {
          self.setStatus(PS_FINISHED);
          MoonTimer.reset();

          //終了ダイアログを開いて終了へ
          self.controller.dialog.init(
            "練習終了です。お疲れ様でした！",
            self.dialog_specs[PS_FINISHED]['btn1']
          );
          self.controller.dialog.open();
          return;
        }
        //次の歌がある時
        MoonTimer.reset();
        UtayomiController.stepToNext();
        self.recordCurrentCorrect();
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
        //正解の取り札がある陣地に移動して、正解札を光らせ、practice_statusをPS_CONFIRM_ANSWERにする。
        var current_no = UtayomiController.getCurrentNo();
        var rec = KarutaRecorder.getRecord(current_no);

        //タッチした札と正解札が同じだったら、札を元の位置に戻す。
        if (rec.result.uta_no == rec.correct.uta_no) {
          KarutaBoard.restoreObj(rec.result.uta_no);  
        }
        //正解札のある陣地に移動
        if (self.current_jinchi != rec.correct.board_id) {
          self.setJinchi(rec.correct.board_id);
        }
        KarutaBoard.startFlash(rec.correct.uta_no);
        self.setStatus(PS_CONFIRM_ANSWER);

        //flash_objにイベントリスナーを設置し、次へ進めるようにする。
        var obj = KarutaBoard.getObj(rec.correct.uta_no);
        var flash_obj = KarutaBoard.getFlashObj(rec.correct.board_id);
        flash_obj.addEventListener('click', function(e) {
          KarutaBoard.stopFlash(obj.obj1.karuta_uta_no);
          flash_obj.removeEventListener('click', arguments.callee);
          self.is_animating = 1;
          KarutaBoard.flyKaruta(obj.obj1, self.karutaclick_specs[PS_CONFIRM_ANSWER]);
        });
      }
    },
  };
  this.dialog_specs[PS_READING] = this.dialog_specs[PS_BEFORE_READING];
  this.dialog_specs[PS_CONFIRM_ANSWER] = {};
  this.dialog_specs[PS_CONFIRM_ANSWER]['btn1'] = this.dialog_specs[PS_BEFORE_READING]['btn1'];
  this.dialog_specs[PS_FINISHED] = {
    btn1: {
      label: '結果を見る',
      execute: function() {
        //practice1を終了し、resultに遷移する
        self.toNextPhase('result');
      }
    }
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
      if (!KarutaRecorder.getStartMTimestamp()) {
        KarutaRecorder.setStartMTimestamp(getMTimestamp());
      }
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
      //正解札だったらかるた飛ばし後、次へ進むダイアログを表示だが、正解札でも実際にクリックされるのはflash_objなので、何もしない。
      return;
    }
    if (self.practice_status == PS_FINISHED) {
      //何もしない
      return;
    }
  };

  this.toNextJinchi = function() {
    if (self.is_animating) return;
    if (self.practice_status == PS_TOUCHED) return;
    if (self.practice_status == PS_CONFIRM_ANSWER) return;

    var next_jinchi = (self.current_jinchi) % 4 + 1;
    self.setJinchi(next_jinchi);
  };

  this.toPrevJinchi = function() {
    if (self.is_animating) return;
    if (self.practice_status == PS_TOUCHED) return;
    if (self.practice_status == PS_CONFIRM_ANSWER) return;

    var next_jinchi = (self.current_jinchi + 2) % 4 + 1;
    self.setJinchi(next_jinchi);
  };

  this.setJinchi = function(jinchi_id) {
    self.jobjs[self.current_jinchi].style['display'] = 'none';
    self.jobjs[jinchi_id].style['display'] = 'block';
    self.current_jinchi = jinchi_id;
    self.setJinchiLight(jinchi_id);
  };
  this.resetJinchi = function() {
    for (var i = 2; i <= 4; i++) {
      self.jobjs[i].style['display'] = 'none';
    }
    self.setJinchi(1);
  }

  this.setJinchiLight = function(jinchi_id) {
    self.jlobj.style['left'] = String((jinchi_id - 1) * 25)+'px';
  };

  this.recordCurrentCorrect = function() {
    var current_no = UtayomiController.getCurrentNo();
    var uta_no = UtayomiController.getCurrentUtaNo();
    var pos = KarutaBoard.getOriginalRowCol(uta_no);
    KarutaRecorder.setCorrect(current_no, uta_no, pos.board_id, pos.row, pos.col);
  };

  this.recordCurrentResult = function(result_no, answer_uta_no) {
    var current_no = UtayomiController.getCurrentNo();
    var pos = KarutaBoard.getOriginalRowCol(answer_uta_no);
    var msec = MoonTimer.getMsec();
    KarutaRecorder.setResult(current_no, result_no, msec, answer_uta_no, pos.board_id, pos.row, pos.col);

    if (result_no == C.RESULT_CORRECT) {
      ScoreBoard.addCorrect();
    } else {
      ScoreBoard.addWrong();
    }

    if (UtayomiController.isLast()) {
      KarutaRecorder.setEndMTimestamp(MoonTimer.getStopMTimestamp());
    }
  }

  this.toNextPhase = function(next_phase) {
    self.removeClickListeners();
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
      document.body.style['background-color'] = '#FFFFFF';
      self.controller.finishPhase(this.next_phase);
    }
  };
};
