var KarutaRecorder = {
  record_list: {},

  init: function() {
    this.record_list = {};
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
  }
};
