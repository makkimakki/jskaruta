var KarutaBoard = {
  /*
    mode
    'practice1'
    'practice2'
  */
  mode: null,
  /*
    practice1の時
    {
      1: [
        0(row): [
          0(col): 
          1:
          ....
          9:
        ],
        1: [...],
        2: [...]
      ],
      2: [ ... ],
      3: [ ... ],
      4: [ ... ]
    }
  */
  objs: {},
  flash_objs: {},
  initial_uta_no_list: {},

  init: function(mode) {
    if (mode == 'practice1') {
      this.mode = mode;
      this.initForPractice1();
    }
  },

  initForPractice1: function() {
    this.mode = 'practice1';
    this.objs = {};
    this.initial_uta_no_list = {
      1: [
        [  30,  71,  19,  75,  93,  39,  64,  21,  53,  78],
        [  70,  27,  58,  56,  26,  82,  84,  29,null,null],
        [null,null,null,null,null,null,null,null,null,null]
      ],
      2: [
        [  72,  86,  59,  67,  17,  87,  48,  57,  36,  76],
        [  61,  54,  68,  13,  65,  91,   2,   5,  51,  33],
        [  89,  10,   6,  42,null,null,null,null,null,null]
      ],
      3: [
        [  81,  69,  37,  73,  50,   3,  32,  55, 100,  52],
        [  90,  85,  74,  35,  66,  92,  47,  41,  63,  25],
        [  11,  38,  28,  44,  49,   4,  96,  94,null,null]
      ],
      4: [
        [  60,  16,  34,   7,  98,  14,  80,  45,  20,  88],
        [  43,  22,  40,  24,  79,  97,  83,  46,  18,  31],
        [  62,   8,  99,  15,   1,  95,  23,   9,  77,  12]
      ]
    };

    for (var i = 1; i <= 4; i++) {
      this.objs[i] = new Array(3);
      for (var j = 0; j < 3; j++) {
        this.objs[i][j] = new Array(10);
        for (var k = 0; k < 10; k++) {
          this.initKarutaObj(i, j, k);
        }
      }
      this.flash_objs[i] = document.getElementById('kf'+String(i));
      this.flash_objs[i].is_flashing = 0;
    }
  },
  initKarutaObj: function(board_id, row, col) {
    var base_obj_id = String(board_id)+String(row)+String(col);
    var uta_no = this.initial_uta_no_list[board_id][row][col];

    this.objs[board_id][row][col] = {
      obj1: document.getElementById('k'+base_obj_id),
      obj2: document.getElementById('k'+base_obj_id+'s')
    };

    var pos = this.getKarutaPos(board_id, row, col);
    this.objs[board_id][row][col]['obj1']['karuta_uta_no'] = uta_no;
    this.objs[board_id][row][col]['obj1'].className = 'karuta';
    this.objs[board_id][row][col]['obj1'].style['top'] = String(pos.top)+'px';
    this.objs[board_id][row][col]['obj1'].style['left'] = String(pos.left)+'px';
    this.objs[board_id][row][col]['obj1'].style['display'] = 'block';

    if (uta_no) {
      this.objs[board_id][row][col]['obj2'].innerHTML = KarutaUtil.getTorifudaHtml(uta_no);
    } else {
      this.objs[board_id][row][col]['obj2'].style.display = 'none';
      this.objs[board_id][row][col]['obj2'].innerHTML = '';
    }
  },
  getOriginalRowCol: function(uta_no) {
    for (var i = 1; i <= 4; i++) {
      for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 10; k++) {
          if (this.initial_uta_no_list[i][j][k] == uta_no) {
            var ret = {};
            ret.board_id = i;
            ret.row = j;
            ret.col = k;
            return ret;
          }
        }
      }
    }
  },

  getKarutaPos: function(board_id, row, col) {
    var base_left = 17;
    var base_top = 35;
    var space = 5;
    //かるたサイズ
    var w = 100;
    var h = 140;
    var ret = {};
    var is_player_side;

    if (this.mode == 'practice1') {
      is_player_side = 1;
    }

    if (!is_player_side) {
      //TODO: 実戦練習の時に実装
      //...
    }

    ret.left = base_left + (w + space) * col;
    ret.top = base_top + (h + space) * row;

    return ret;
  },

  flyKaruta: function(obj, spec) {
    obj.style['z-index'] = 100;
    //TODO: 飛ばすアニメーションをたくさん用意
    obj.className = 'karuta rrotate';
    setTimeout(function() {
      obj.style['z-index'] = 1;
      spec.next(obj);
    }, 2000);
  },
  startFlash: function(uta_no) {
    var rc  = this.getOriginalRowCol(uta_no);
    var pos = this.getKarutaPos(rc.board_id, rc.row, rc.col);

    this.flash_objs[rc.board_id].style['left'] = String(pos.left)+'px';
    this.flash_objs[rc.board_id].style['top']  = String(pos.top)+'px';
    this.flash_objs[rc.board_id].style['display'] = 'block';
    this.flash_objs[rc.board_id].className = 'flash';
    //this.flash_objs[rc.board_id].style['background-color'] = '#F00';
    this.flash_objs[rc.board_id].style['z-index'] = '3';
    this.flash_objs[rc.board_id].is_flashing = 1;

    console.log(this.flash_objs[rc.board_id].style);
    console.log(this.flash_objs[rc.board_id]);
  },
  stopFlash: function(uta_no) {
    var rc  = this.getOriginalRowCol(uta_no);

    this.flash_objs[rc.board_id].style['display'] = 'none';
    this.flash_objs[rc.board_id].style['z-index'] = '1';
    this.flash_objs[rc.board_id].className  = '';
    this.flash_objs[rc.board_id].is_flashing = 0;
  },
  getInitialUtaNoList: function() {
    return this.initial_uta_no_list;
  },
  getObjs: function() {
    return this.objs;
  },
  getObj: function(uta_no) {
    var rc = this.getOriginalRowCol(uta_no);
    console.log(rc);
    return this.objs[rc.board_id][rc.row][rc.col];
  },
  getFlashObj: function(board_id) {
    return this.flash_objs[board_id];
  },
  restoreObj: function(uta_no) {
    var obj = this.getObj(uta_no);
    obj.obj1.className = 'karuta';
    obj.obj1.style['z-index'] = 1;
  },
  removeObj: function(uta_no) {
    var obj = this.getObj(uta_no);
    obj.obj1.className = 'karuta';
    obj.obj1.style['display'] = 'none';
  }
};

