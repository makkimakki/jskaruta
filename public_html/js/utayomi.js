var Utayomi = {
  /*
    yomi_status
    0: not reading
    1: reading
    2: stopping
  */
  yomi_status: 0,
  uta_no: null,
  yomi_list: null,
  start_mtimestamp: null,
  past_msec: null,
  read_msec: 250,
  pause_msec: 600,
  long_pause_msec: 1200,
  prev_char: {
    key1: null,
    key2: null
  },
  objs: null,
  uta_all_obj: null,

  initObjs: function() {
    this.uta_all_obj = document.getElementById('utaAll');
    this.objs = {
      uta1: [
        document.getElementById('u11'), 
        document.getElementById('u12'), 
        document.getElementById('u13'), 
        document.getElementById('u14'), 
        document.getElementById('u15'), 
        document.getElementById('u16'), 
      ],
      uta2: [
        document.getElementById('u21'), 
        document.getElementById('u22'), 
        document.getElementById('u23'), 
        document.getElementById('u24'), 
        document.getElementById('u25'), 
        document.getElementById('u26'), 
        document.getElementById('u27'), 
        document.getElementById('u28'), 
      ],
      uta3: [
        document.getElementById('u31'), 
        document.getElementById('u32'), 
        document.getElementById('u33'), 
        document.getElementById('u34'), 
        document.getElementById('u35'), 
        document.getElementById('u36'), 
      ],
      uta4: [
        document.getElementById('u41'), 
        document.getElementById('u42'), 
        document.getElementById('u43'), 
        document.getElementById('u44'), 
        document.getElementById('u45'), 
        document.getElementById('u46'), 
        document.getElementById('u47'), 
        document.getElementById('u48'), 
      ],
      uta5: [
        document.getElementById('u51'), 
        document.getElementById('u52'), 
        document.getElementById('u53'), 
        document.getElementById('u54'), 
        document.getElementById('u55'), 
        document.getElementById('u56'), 
        document.getElementById('u57'), 
        document.getElementById('u58'), 
      ]
    };
  },
  startYomi: function(uta_no) {
    //TODO: ここであらかじめすべての文字をopacity 0でセットしておいた方がよさそう。
    this.uta_no = uta_no;
    this.yomi_list = KarutaUtil.getYomi(uta_no);
    this.yomi_status = 1;
    this.start_mtimestamp = getMTimestamp();
    this.readNextChar();  
  },
  stopYomi: function() {
    var mtimestamp = getMTimestamp();
    this.yomi_status = 2;
    this.past_msec = mtimestamp - this.start_mtimestamp;
  },
  reset: function() {
    this.yomi_status = 0;
    this.uta_no = null;
    this.yomi_list = null;
    this.start_mtimestamp = null;
    this.past_msec = null;
    this.prev_char.key1 = null;
    this.prev_char.key2 = null;
    this.eraseUtaDisplay();
  },

  readNextChar: function() {
    var self = this;

    if (
      this.yomi_status != 1
      || !this.uta_no
      || !this.yomi_list
    ) {
      console.log(this.yomi_status);
      console.log(this.uta_no);
      console.log(this.yomi_list);
      return;
    }

    var keys = this.getNextCharKey();
    
    if (!keys) return;

    this.prev_char.key1 = keys.key1;
    this.prev_char.key2 = keys.key2;

    this.objs[keys.key1][keys.key2].className = 'vsfadein';
    this.objs[keys.key1][keys.key2].innerHTML = this.yomi_list[keys.key1][keys.key2];

    var next_keys = this.getNextCharKey();
    var wait_msec;

    if (!next_keys) return;
    if (next_keys.key1 != this.prev_char.key1) {
      if (next_keys.key1 == 'uta4') {
        wait_msec = this.long_pause_msec;
      } else {
        wait_msec = this.pause_msec;
      }
    } else {
      wait_msec = this.read_msec;
    }
    setTimeout(function(){ self.readNextChar(); }, wait_msec);
  },

  getNextCharKey: function() {
    var ret = {};

    if (!this.prev_char.key1) {
      ret.key1 = 'uta1';
      ret.key2 = 0;
      return ret;
    }

    //文字数チェック
    var length = this.yomi_list[this.prev_char.key1].length;
    if (this.prev_char.key2 >= length -1) {
      if (this.prev_char.key1 == 'uta5') {
        return false;
      } else {
        ret.key1 = 'uta'+String(parseInt(this.prev_char.key1.substr(3, 1))+1);
        ret.key2 = 0;
      }
    } else {
      ret.key1 = this.prev_char.key1;
      ret.key2 = this.prev_char.key2 + 1;
    }
    return ret;
  },

  eraseAndDisplayAll: function() {
    this.yomi_status = 2;
    this.uta_all_obj.className = 'lfadeout';

    var self = this;

    setTimeout(function() {
      self.resetPrevChar();
      var keys = self.getNextCharKey();
      var counter = 0;

      while (keys && counter < 100) {
        self.objs[keys.key1][keys.key2].innerHTML = self.yomi_list[keys.key1][keys.key2];
        self.objs[keys.key1][keys.key2].className = '';
        self.prev_char.key1 = keys.key1;
        self.prev_char.key2 = keys.key2;
        keys = self.getNextCharKey();
        counter++;
      }
      self.uta_all_obj.className = 'lfadein';
    }, 900);
  },

  resetPrevChar: function() {
    this.prev_char.key1 = null;
    this.prev_char.key2 = null;
  },

  eraseUtaDisplay: function() {
    var i, j, max_j;
    for (i = 1; i <= 5; i++) {
      if (i == 1 || i == 3) {
        max_j = 6;
      } else {
        max_j = 8;
      }
      for (j = 0; j < max_j; j++) {
        this.objs['uta'+String(i)][j].innerHTML = '';
        this.objs['uta'+String(i)][j].className = '';
      }
    }
  }
};


var UtayomiController = {
  utayomi: Utayomi,
  current_no: null,
  length: null,
  yomi_order_list: null,

  init: function() {
    this.utayomi.initObjs();
    this.utayomi.reset();
    this.current_no = 0;

    var length = 1;

    //1〜100を並び替えた配列を作る
    var arr = new Array(length);
    for (var i = 0; i < length; i++) {
      arr[i] = i + 1;
    }
    //this.yomi_order_list = [1, 2, 3];
    this.yomi_order_list = ArrayUtil.getRandomArray(arr);
    this.length = this.yomi_order_list.length;
  },
  stepToNext: function() {
    this.utayomi.reset();

    if (this.current_no < this.length - 1) {
      this.current_no++;
      return this.current_no;
    }
    return false;
  },
  getCurrentNo: function() {
    return this.current_no;
  },
  getCurrentUtaNo: function() {
    return this.yomi_order_list[this.current_no];
  },
  startYomi: function() {
    this.utayomi.startYomi(this.yomi_order_list[this.current_no]);
  },
  stopYomi: function() {
    this.utayomi.stopYomi();
  },
  eraseAndDisplayAll: function() {
    this.utayomi.eraseAndDisplayAll();
  },
  erase: function() {
    this.utayomi.eraseUtaDisplay();
  },
  isLast: function() {
    if (this.current_no == this.length - 1) return 1;
    return 0;
  }
};

