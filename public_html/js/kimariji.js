var Kimariji = function() {
  this.controller = null;
  this.next_page = null;
  this.is_animating = 0;
  this.current_tab = null;
  this.current_order_no = null;
  this.screen_touched = null;
  this.fisrt_touch_x = null;
  this.prev_touch_x = null;
  this.flip_border_x = null;

  this.slidein_msec = 200;

  this.aiueo_list     = KarutaUtil.getAiueoList();
  this.uta_order_list = null;
  this.kimariji_list  = KarutaUtil.getKimarijiList();

  this.list_scr_obj   = document.getElementById('kListScr');
  this.detail_scr_obj = document.getElementById('kDetailScr');
  this.list_area_obj  = document.getElementById('kListArea');
  this.list_obj       = document.getElementById('kList');

  this.touch_obj = document.getElementById('kDetailTouch');

  this.btn_objs = {
    klist1: document.getElementById('klist_btn1'),
    klist2: document.getElementById('klist_btn2')
  };

  this.detail_objs = {
    1: {
      scr:       document.getElementById('kDetail1'),
      kimariji:  document.getElementById('kd1Kimariji'),
      torifuda1: document.getElementById('kd1ShimoKana1'),
      torifuda2: document.getElementById('kd1ShimoKana2'),
      uta_no:    document.getElementById('kd1UtaNo'),
      kkami:     document.getElementById('kd1kdUta1'),
      kshimo:    document.getElementById('kd1kdUta2'),
      author:    document.getElementById('kd1Author'),
      yauthor1:  document.getElementById('kd1AuthorKana1'),
      yauthor2:  document.getElementById('kd1AuthorKana2'),
    },
    2: {
      scr:       document.getElementById('kDetail2'),
      kimariji:  document.getElementById('kd2Kimariji'),
      torifuda1: document.getElementById('kd2ShimoKana1'),
      torifuda2: document.getElementById('kd2ShimoKana2'),
      uta_no:    document.getElementById('kd2UtaNo'),
      kkami:     document.getElementById('kd2kdUta1'),
      kshimo:    document.getElementById('kd2kdUta2'),
      author:    document.getElementById('kd2Author'),
      yauthor1:  document.getElementById('kd2AuthorKana1'),
      yauthor2:  document.getElementById('kd2AuthorKana2'),
    }
  };

  this.tab_objs = {
    a: document.getElementById('aTab'),
    k: document.getElementById('kTab'),
    s: document.getElementById('sTab'),
    t: document.getElementById('tTab'),
    n: document.getElementById('nTab'),
    h: document.getElementById('hTab'),
    m: document.getElementById('mTab'),
    y: document.getElementById('yTab'),
    w: document.getElementById('wTab')
  };

  var self = this;

  this.init = function(controller) {
    this.controller = controller;

    self.screen_touched = null;
    self.first_touch_x = null;
    self.prev_touch_x = null;

    var key;

    for (key in self.tab_objs) {
      self.tab_objs[key].aiueo_id = key;
      self.tab_objs[key].addEventListener('click', self.tabSelectExecute);
    }
    for (key in self.aiueo_list) {
      if (key == 'a') self.uta_order_list = self.aiueo_list[key];
      else            self.uta_order_list = self.uta_order_list.concat(self.aiueo_list[key]);
    }
    
    self.list_scr_obj.style['display'] = 'block';
    self.list_scr_obj.style['z-index'] = '1';
    self.detail_scr_obj.style['display'] = 'none';
    self.detail_scr_obj.style['z-index'] = '2';
    self.setSelectedTab('a');
    self.current_order_no = null;

    self.btn_objs.klist1.addEventListener('click', self.goToList);
    self.btn_objs.klist2.addEventListener('click', self.goToList);

    self.flip_border_x = Math.round(window.innerWidth * 0.1);

    self.touch_obj.addEventListener('touchstart',  self.execTouchStart);
    self.touch_obj.addEventListener('touchmove',   self.execTouchMove);
    self.touch_obj.addEventListener('touchend',    self.execTouchEnd);
    self.touch_obj.addEventListener('touchcancel', self.execTouchCancel);

    document.getElementById('kimariji').style['display'] = 'block';
    self.setListTable('a');
    self.controller.cover.fadein(fadein_spec);
  };

  this.start = function() {
  };

  this.execTouchStart = function(e) {
    self.screen_touched = 1;
    self.first_touch_x = e.touches[0].pageX;
    self.prev_touch_x = null;
  };

  this.execTouchMove = function(e) {
    self.prev_touch_x = e.touches[0].pageX;
  };

  this.execTouchEnd = function(e) {
    self.screen_touched = 0;

    if (self.first_touch_x) {
      if (self.prev_touch_x - self.first_touch_x >= self.flip_border_x) {
        self.goToNext();
      } else if (self.prev_touch_x && self.first_touch_x - self.prev_touch_x >= self.flip_border_x) {
        self.goToPrev();
      }
    }
    self.first_touch_x = null;
    self.prev_touch_x = null;
  };

  this.execTouchCancel = function(e) {
    self.screen_touched = 0;
    self.first_touch_x = null;
    self.prev_touch_x = null;
  };

  this.setSelectedTab = function(aiueo_id) {
    for (var key in self.tab_objs) {
      if (key == aiueo_id) {
        self.setSelectedStyle(self.tab_objs[key]);
      } else {
        self.setNotSelectedStyle(self.tab_objs[key]);
      }
    }
    self.current_tab = aiueo_id;
  };

  this.setSelectedList = function(aiueo_id) {
    self.list_obj.innerHTML= '';
  };

  this.setSelectedStyle = function(obj) {
    obj.style['background'] = 'rgba(255, 190, 0, 1)';
    obj.style['color'] = '#ffffff';
  };

  this.setNotSelectedStyle = function(obj) {
    var key = obj.aiueo_id;
    switch (key) {
      case 'a':
      case 's':
      case 'n':
      case 'm':
      case 'w':
        obj.style['background'] = 'rgba(230, 230, 230, 1)';
        break;

      case 'k':
      case 't':
      case 'h':
      case 'y':
        obj.style['background'] = 'rgba(240, 240, 240, 1)';
        break;
    }
    obj.style['color'] = '#000000';
  }

  this.tabSelectExecute = function() {
    var aiueo_id = this.aiueo_id;
    self.setSelectedTab(aiueo_id);
    self.setListTable(aiueo_id);
  };

  this.setListTable = function(aiueo_id) {
    self.list_obj.innerHTML = '';
    var row = self.list_obj.insertRow(0);
    var c = self.aiueo_list[aiueo_id].length;
    var cells = new Array(c);
    var uta_no;
    var count = 0;

    for (var key in self.aiueo_list) {
      if (key == aiueo_id) break;
      count += self.aiueo_list[key].length;
    }

    for (var i = c - 1; i >= 0; i--) {
      uta_no = self.aiueo_list[aiueo_id][i];
      cells[i] = row.insertCell(c - 1 - i);
      cells[i].innerHTML = self.kimariji_list[uta_no].split('').join('<br />');
      cells[i].className = 'touchtd';
      cells[i].uta_no = uta_no;
      cells[i].order_no = count + i;
      cells[i].detail_no = (count + i) % 2 + 1;
      cells[i].addEventListener('click', self.goToDetail);
    }
    self.list_obj.style['width'] = String(100 * c)+'px';

    if (c <= 11) {
      self.list_obj.style['position'] = 'absolute';
      self.list_obj.style['rigth'] = '0';
      self.list_obj.style['border-left'] = 'solid 1px #aaaaaa';
    } else {
      self.list_obj.style['position'] = 'relative';
      self.list_area_obj.scrollLeft = 4000;
      self.list_obj.style['border-left'] = '';
    }
  };

  this.goToDetail = function() {
    var uta_no = this.uta_no;
    self.current_order_no = this.order_no;
    self.setDetail(this.detail_no, uta_no);
    self.detail_objs[this.detail_no].scr.style['z-index'] = 2;
    self.detail_objs[this.detail_no].scr.style['display'] = 'block';
    self.detail_objs[this.detail_no % 2 + 1].scr.style['z-index'] = 1;
    self.detail_objs[this.detail_no % 2 + 1].scr.style['display'] = 'none';
    self.detail_scr_obj.style['display'] = 'block';
    self.detail_scr_obj.className = 'commonScr leftin';
    setTimeout(function(){
      self.detail_scr_obj.className = 'commonScr';
      self.list_scr_obj.style['display'] = 'none';
    }, self.slidein_msec);
    //setTimeout(function() { self.goToPrev(); }, 3000);
  };

  this.goToNext = function() {
    var next_order_no = (self.current_order_no + 1) % 100;
    var next_uta_no = self.uta_order_list[next_order_no];
    self.setDetail((next_order_no) % 2 + 1, next_uta_no);
    self.detail_objs[(next_order_no) % 2 + 1].scr.style['display'] = 'block';
    self.detail_objs[(next_order_no + 1) % 2 + 1].scr.className = 'rightout';
    setTimeout(function() {
      self.detail_objs[(next_order_no + 1) % 2 + 1].scr.style['display'] = 'none';
      self.detail_objs[(next_order_no + 1) % 2 + 1].scr.className = '';
      self.detail_objs[(next_order_no + 1) % 2 + 1].scr.style['z-index'] = '1';
      self.detail_objs[(next_order_no) % 2 + 1].scr.style['z-index'] = '2';
      self.current_order_no = next_order_no;
    }, self.slidein_msec);
  };

  this.goToPrev = function() {
    var prev_order_no = (self.current_order_no + 99) % 100;
    var prev_uta_no = self.uta_order_list[prev_order_no];
    self.setDetail((prev_order_no) % 2 + 1, prev_uta_no);
    self.detail_objs[(prev_order_no) % 2 + 1].scr.style['display'] = 'block';
    self.detail_objs[(prev_order_no + 1) % 2 + 1].scr.className = 'leftout';
    setTimeout(function() {
      self.detail_objs[(prev_order_no + 1) % 2 + 1].scr.style['display'] = 'none';
      self.detail_objs[(prev_order_no + 1) % 2 + 1].scr.className = '';
      self.detail_objs[(prev_order_no + 1) % 2 + 1].scr.style['z-index'] = '1';
      self.detail_objs[(prev_order_no) % 2 + 1].scr.style['z-index'] = '2';
      self.current_order_no = prev_order_no;
    }, self.slidein_msec);
  };

  this.setDetail = function(scr_no, uta_no) {
    var data = KarutaUtil.getDataForKimarijiDetail(uta_no);

    self.detail_objs[scr_no].kimariji.innerHTML  = data.kimariji.split('').join('<br />');
    self.detail_objs[scr_no].torifuda1.innerHTML = data.torifuda1.split('').join('<br />');
    self.detail_objs[scr_no].torifuda2.innerHTML = data.torifuda2.split('').join('<br />');
    self.detail_objs[scr_no].uta_no.innerHTML    = data.kuta_no.split('').join('<br />');
    self.detail_objs[scr_no].kkami.innerHTML     = data.kkami.split('').join('<br />');
    self.detail_objs[scr_no].kshimo.innerHTML    = data.kshimo.split('').join('<br />');
    self.detail_objs[scr_no].author.innerHTML    = data.author.split('').join('<br />');
    self.detail_objs[scr_no].yauthor1.innerHTML  = data.yauthor.substr(0, 18).split('').join('<br />');
    self.detail_objs[scr_no].yauthor2.innerHTML  = data.yauthor.substr(18).split('').join('<br />');
  };


  this.goToList = function() {
    self.list_scr_obj.style['display'] = 'block';
    self.detail_scr_obj.className = 'commonScr leftout';
    setTimeout(function() {
      self.detail_scr_obj.style['display'] = 'none';
      self.detail_scr_obj.className = 'commonScr';
    }, self.slidein_msec);
  };

  this.goToTop = function() {
    if (self.is_animating) return;
    self.controller.cover.fadeout(fadeout_spec);
  };

  var fadein_spec = {
    next_seconds: 1,
    next: function() {
      self.start();  
    }
  };

  var fadeout_spec = {
    next: function() {
      document.getElementById('kimariji').style['display'] = 'none';
      for (var key in self.tab_objs) {
        self.tab_objs[key].removeEventListener('click', self.tabSelectExecute);
      }
      self.controller.finishPhase();
    }
  };
};
