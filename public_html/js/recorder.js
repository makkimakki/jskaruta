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

  setCorrect: function(yomi_order, uta_no, board_id, row, col) {
    if (!this.record_list[yomi_order]) {
      this.record_list[yomi_order] = {};
    }
    if (!this.record_list[yomi_order]['correct']) {
      this.record_list[yomi_order]['correct'] = {};
    }
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
    this.record_list[yomi_order]['result']['result_no'] = result_no;
    this.record_list[yomi_order]['result']['response_msec'] = response_msec;
    this.record_list[yomi_order]['result']['uta_no'] = uta_no;
    this.record_list[yomi_order]['result']['board_id'] = board_id;
    this.record_list[yomi_order]['result']['row'] = row;
    this.record_list[yomi_order]['result']['col'] = col;
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
    ret.res      = Math.round(res_msec_sum * ret.correct) / 1000;
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
