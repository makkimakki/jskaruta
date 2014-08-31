const C = {
  RESULT_CORRECT: 1,
  RESULT_EARLY_TOUCHED: 2,
  RESULT_WRONG_TOUCHED: 3,
  RESULT_KARAFUDA: 4,
  RESULT_RIVAL_GOT: 5,
};

var KarutaRecorder = {
  record_list: {},
  start_mtimestamp: null,
  end_mtimestamp: null,

  correct_point: 10,
  karafuda_through_point: 2,
  otetsuki_point: -5,
  point_msec: 10000,
  time_bonus_rate: 1,

  init: function() {
    this.record_list = {};
    this.start_mtimestamp = null;
    this.end_mtimestamp = null;
  },

  setStartMTimestamp: function(mtimestamp) {
    this.start_mtimestamp = mtimestamp;
  },

  setEndMTimestamp: function(mtimestamp) {
    this.end_mtimestamp = mtimestamp;
  },

  getStartMTimestamp: function(mtimestamp) {
    return this.start_mtimestamp;
  },

  getEndMTimestamp: function(mtimestamp) {
    return this.end_mtimestamp;
  },

  setCorrect: function(yomi_order, uta_no, board_id, row, col) {
    if (!this.record_list[yomi_order]) {
      this.record_list[yomi_order] = {};
    }
    if (!this.record_list[yomi_order]['correct']) {
      this.record_list[yomi_order]['correct'] = {};
    }
    this.record_list[yomi_order]['correct']['yomi_order'] = yomi_order;
    this.record_list[yomi_order]['correct']['uta_no'] = uta_no;
    this.record_list[yomi_order]['correct']['board_id'] = board_id;
    this.record_list[yomi_order]['correct']['row'] = row;
    this.record_list[yomi_order]['correct']['col'] = col;
  },
  /*
    result_no: 1=correct, 2=early_touched, 3=wrong_touched, 4=karafuda, 5=rival_got
  */
  setResult: function(yomi_order, result_no, response_msec, uta_no, board_id, row, col) {
    if (!this.record_list[yomi_order]) {
      this.record_list[yomi_order] = {};
    }
    if (!this.record_list[yomi_order]['result']) {
      this.record_list[yomi_order]['result'] = {};
    }
    this.record_list[yomi_order]['result']['yomi_order'] = yomi_order;
    this.record_list[yomi_order]['result']['result_no'] = result_no;
    this.record_list[yomi_order]['result']['response_msec'] = response_msec;
    this.record_list[yomi_order]['result']['uta_no'] = uta_no;
    this.record_list[yomi_order]['result']['board_id'] = board_id;
    this.record_list[yomi_order]['result']['row'] = row;
    this.record_list[yomi_order]['result']['col'] = col;
  },

  getResultStr: function(result_no) {
    var str_list = {
      1: '正解',
      2: 'お手つき',
      3: 'お手つき',
      4: '空札',
      5: '敵正解'
    };
    return str_list[result_no];
  },

  getRecordArray: function() {
    var ret = [];

    for (var i = 0; i < 100; i++) {
      if (this.record_list[i]) {
        ret[ret.length] = this.record_list[i];
        continue;
      }
      break;
    }
    return ret;
  },

  getSortedRecordArray: function(kind, desc_flag) {
    var arr = this.getRecordArray();
    var self = this;

    if (desc_flag) desc_flag = 1;
    else           desc_flag = 0;


    if (kind == 'yomi_order') {
      if (desc_flag) arr.sort(function(a, b) { return self.orderByYomiOrder(a, b, 1); });
      else           arr.sort(function(a, b) { return self.orderByYomiOrder(a, b, 0); });

    } else if (kind == 'result_no') {
      if (desc_flag) arr.sort(function(a, b) { return self.orderByResultNo(a, b, 1); });
      else           arr.sort(function(a, b) { return self.orderByResultNo(a, b, 0); });

    } else if (kind == 'response_time') {
      if (desc_flag) arr.sort(function(a, b) { return self.orderByResponseTime(a, b, 1); });
      else           arr.sort(function(a, b) { return self.orderByResponseTime(a, b, 0); });

    } else {
      if (desc_flag) arr.sort(function(a, b) { return self.orderByUtaNo(a, b, 1); });
      else           arr.sort(function(a, b) { return self.orderByUtaNo(a, b, 0); });
    }

    return arr;
  },

  //早い順がasc
  orderByYomiOrder:  function(a, b, desc_flag) {
    var pm = 1;
    if (desc_flag) pm = -1;
 
    if (a.correct.yomi_order * pm < b.correct.yomi_order * pm) return -1;
    return 1;
  },
  //小さい順がasc
  orderByUtaNo: function(a, b, desc_flag) {
    var pm = 1;
    if (desc_flag) pm = -1;

    if (a.correct.uta_no * pm < b.correct.uta_no * pm) return -1;
    return 1; 
  },
  //正解かどうか、反応時間が早い順、歌番号順がasc
  orderByResultNo: function(a, b, desc_flag) {
    var pm = 1;
    if (desc_flag) pm = -1;

    //正解順のチェック
    if (a.result.result_no != b.result.result_no) {
      if (a.result_no == 1) return -1 * pm;
      if (b.result_no == 1) return  1 * pm;
      if (a.result_no == 4) return -1 * pm;
      if (b.result_no == 4) return  1 * pm;
      if (a.result.result_no * pm < b.result.result_no * pm) return -1;
      if (a.result.result_no * pm > b.result.result_no * pm) return 1;
    }

    //結果が同じ時
    //正解か空札の時は反応時間が早い順
    if (a.result.result_no == 1 || a.result_result) {
      if (a.result.response_msec * pm < b.result.response_msec * pm) return -1;
      if (a.result.response_msec * pm > b.result.response_msec * pm) return 1;
    }
    //あとは歌番号順
    if (a.correct.uta_no * pm < b.correct.uta_no * pm) return -1;
    return 1;
  },
  //正解もしくは空札か、反応時間が早い順、歌番号順がasc
  orderByResponseTime: function(a, b, desc_flag) {
    var pm = 1;
    if (desc_flag) pm = -1;

    if (a.result.result_no == 1 || a.result.result_no == 4) {
      if (b.result.result_no == 1 || b.result.result_no == 4) {
        //反応時間を比較
        if (a.result.response_msec * pm < b.result.response_msec * pm) return -1;
        if (a.result.response_msec * pm > b.result.response_msec * pm) return 1;
      } else {
        return -1 * pm;
      }
    } else {
      if (b.result.result_no == 1 || b.result.result_no == 4) {
        return 1 * pm;
      } else {
        if (a.result.result_no * pm < b.result.result_no * pm) return -1;
        if (a.result.result_no * pm > b.result.result_no * pm) return 1;
      }
    }
    //歌番号比較
    if (a.correct.uta_no * pm < b.correct.uta_no * pm) return -1;
    return 1;
  },

  getRecord: function(yomi_order) {
    return this.record_list[yomi_order];
  },
  getResultObj: function() {
    var ret = {
      correct:  0,
      correctS: 0,
      through:  0, 
      throughS: 0,
      wrong:    0,
      wrongS:   0,
      time:     0,
      res:      0,
      resS:     0,
      totalS:   0
    };

    var r;
    var rl = this.record_list;
    var res_msec_sum = 0;
    var res_point_msec = 0;

    for (var i in rl) {
      if (rl.hasOwnProperty(i)) {
        r = rl[i]['result'];

        switch (r['result_no']) {
          case C.RESULT_CORRECT:
            ret.correct++;
            res_msec_sum += r.response_msec;
            if (r.response_msec < this.point_msec) {
              res_point_msec += this.point_msec - r.response_msec;
            }
            break;

          case C.RESULT_EARLY_TOUCHED:
          case C.RESULT_WRONG_TOUCHED:
            ret.wrong++;
            break;

          case C.RESULT_KARAFUDA:
            ret.through++;
            break;
        }
      }
    }
    var tobj = NumberUtil.convertSecondsToMS(Math.round((this.end_mtimestamp - this.start_mtimestamp)/1000));

    ret.correctS = ret.correct * this.correct_point;
    ret.throughS = ret.through * this.karafuda_through_point;
    ret.wrongS   = ret.wrong * this.otetsuki_point;
    ret.res      = Math.round(res_msec_sum / ret.correct) / 1000;
    ret.resS     = Math.round(res_point_msec * this.time_bonus_rate / 1000);
    ret.time     = tobj.string;
    ret.totalS   = ret.correctS + ret.throughS + ret.wrongS + ret.resS;

    return ret;
  }
};

var ScoreBoard = {
  correct_obj: null,
  wrong_obj: null,
  correct_count: 0,
  wrong_count: 0,
  init: function() {
    this.initObj();
    this.reset();
    this.setCorrect();
    this.setWrong();
  },
  initObj: function() {
    this.correct_obj = document.getElementById('correctCount');
    this.wrong_obj = document.getElementById('wrongCount');
  },
  reset: function() {
    this.correct_count = 0;
    this.wrong_count = 0;
    this.setCorrect();
    this.setWrong();
  },
  addCorrect: function() {
    this.correct_count++;
    this.setCorrect();
  },
  addWrong: function() {
    this.wrong_count++;
    this.setWrong();
  },
  setCorrect: function(count) {
    if (isNaN(count)) {
      count = this.correct_count;
    }
    this.correct_obj.innerHTML = this.correct_count;
  },
  setWrong: function(count) {
    if (isNaN(count)) {
      count = this.wrong_count;
    }
    this.wrong_obj.innerHTML = this.wrong_count;
  }
};
