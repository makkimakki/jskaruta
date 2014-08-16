var Dialog = function() {
  this.width  = 400;
  this.height = 200;
  this.max_width  = 800;
  this.max_height = 500;
  this.min_width  = 400;
  this.min_height = 200;
  this.btn_area_height = 100;

  this.msg_margin_w  = 60;
  this.msg_margin_h  = 30;
  this.btn_margin  = 10;

  this.font_size   = 40;
  this.line_height = 44;

  this.obj      = document.getElementById('dialog');
  this.msg_area = document.getElementById('dMsgArea');
  this.msg_obj  = document.getElementById('dMsg');
  this.btn1     = document.getElementById('d1_btn');
  this.btn2     = document.getElementById('d2_btn');

  this.btn1_spec = null;
  this.btn2_spec = null;

  this.cover = null;

  var self = this;

  this.linkToCover = function(cover_obj) {
    this.cover = cover_obj;
  };

  this.init = function(msg, btn1_spec, btn2_spec) {
    self.setMessage(msg);
    self.resetBtns();

    if (btn1_spec) {
      self.setBtn1(btn1_spec);
    }
    if (btn2_spec) {
      self.setBtn2(btn2_spec);
    }
    self.setBtnSize();
  };

  this.setMessage = function(msg) {
    self.setSizeFromMsg(msg);
    self.msg_obj.innerHTML = msg.split("\n").join('<br />');
  };

  this.resetBtns = function() {
    self.btn1_spec = null;
    self.btn2_spec = null;
  };

  this.setBtn1 = function(spec) {
    self.btn1.innerHTML = spec.label;
    self.btn1_spec = spec;
  };

  this.setBtn2 = function(spec) {
    self.btn2.innerHTML = spec.label;
    self.btn2_spec = spec;
  };

  this.open = function() {
    self.cover.prepareDialogDisplay();
    self.obj.style['display'] = 'block';
    self.obj.className = 'dialogdisplay';

    self.btn1.addEventListener('click', self.btn1Execute);
    if (self.btn2_spec) {
      self.btn2.addEventListener('click', self.btn2Execute);
    }
  };

  this.close = function(spec){
    self.obj.className = 'dialogdisapper';
    self.cover.obj.className = 'fadeoutfordialog';
    setTimeout(function(){
      self.cover.execAfterDialogDisapper();
      self.obj.style['display'] = 'none';
      if (spec) {
        spec.execute();
      }
    }, 100);
  };

  this.btn1Execute = function() {
    this.removeEventListener('click', arguments.callee);
    self.close(self.btn1_spec); 
  };

  this.btn2Execute = function() {
    this.removeEventListener('click', arguments.callee);
    self.close(self.btn2_spec);
  };

  this.setSizeFromMsg = function(msg) {
    var wh = self.getMsgSize(msg);
    //右側のスペースは余りがちなので、マージンを短めにする。
    self.width = wh.width + 1.5 * self.msg_margin_w;
    self.height = wh.height + 2 * self.msg_margin_h + self.btn_area_height;

    var mwh = self.getMargins(self.width, self.height);

    self.msg_area.style['width']  = String(self.width)+'px';
    self.msg_area.style['height'] = String(self.height - self.btn_area_height)+'px';
    self.msg_obj.style['width']  = String(wh.width)+'px';
    self.msg_obj.style['height']  = String(wh.height)+'px';
    self.msg_obj.style['left'] = String(self.msg_margin_w)+'px';
    self.msg_obj.style['top']  = String(self.msg_margin_h)+'px';
    self.obj.style['width']  = String(self.width)+'px';
    self.obj.style['height'] = String(self.height)+'px';
    self.obj.style['left']   = String(mwh.width)+'px';
    self.obj.style['top']    = String(mwh.height)+'px';

  };

  this.setBtnSize = function() {
    var btn_width;

    if (!self.btn2_spec) {
      btn_width = Math.round(self.width / 2);
      self.btn1.style['width']   = String(btn_width)+'px';
      self.btn1.style['top']     = String(self.btn_margin)+'px';
      self.btn1.style['left']    = String(Math.round(btn_width / 2))+'px';
      self.btn2.style['display'] = 'none';
      return;
    }

    btn_width = Math.round((self.width - 3 * self.btn_margin) / 2);
    self.btn1.style['width']   = String(btn_width)+'px';
    self.btn1.style['top']     = String(self.btn_margin)+'px';
    self.btn1.style['left']    = String(self.btn_margin)+'px';
    self.btn2.style['display'] = 'block';
    self.btn2.style['width']   = String(btn_width)+'px';
    self.btn2.style['top']     = String(self.btn_margin)+'px';
    self.btn2.style['right']   = String(self.btn_margin)+'px';
  };

  this.getMargins = function(w, h) {
    var ret = {};
    var pxs = getPxs();
    ret.width  = Math.round((pxs.yoko - w) / 2);
    ret.height = Math.round((pxs.tate - h) / 2);
    return ret;
  };

  this.getMsgSize = function(msg) {
    var mlist = msg.split("\n");
    var mw = 0;
    var w = 0;
    //１行の最大文字数
    var mc = 19;
    var lc = mlist.length;
    var ret = {};

    for (var i = 0; i < mlist.length; i++) {
      if (mlist[i].length > mc) {
        mw = self.max_width;
        lc++;
        continue;
      }
      //w = mlist[i].length * self.font_size + (self.msg_margin_w) * 2;
      w = mlist[i].length * self.font_size;
      if (w > mw) {
        mw = w;
      }
    }
    if (mw < self.min_width) {
      mw = self.min_width;
    }

    //+40は文字が全部全角だとあふれることがあるので、追加
    ret.width = mw + 40;
    ret.height = self.line_height * lc;

    return ret;
  }

  this.getLineWidth = function(str) {
    return self.msg_margin_w * 2 + str.length;
  }
};
