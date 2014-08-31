var Result = function() {
  this.controller = null;
  this.screen_id = 1;

  this.current_order = {
    kind: 'yomi_order',
    desc: 0
  };

  this.scroll_obj = document.getElementById('rDetailTableArea');
  this.scol_objs = {};

  this.rc_btn = document.getElementById('rc_btn');

  this.scr_objs = {
    1: document.getElementById('r1Scr'),
    2: document.getElementById('r2Scr')
  };

  this.objs = {
    correct: {
      td:  document.getElementById('correctTd'),
      std: document.getElementById('correctSTd')
    },
    through: {
      td:  document.getElementById('throughTd'),
      std: document.getElementById('throughSTd')
    },
    wrong: {
      td:  document.getElementById('wrongTd'),
      std: document.getElementById('wrongSTd')
    },
    time: {
      td:  document.getElementById('timeTd'),
      std: null
    },
    res: {
      td:  document.getElementById('resTd'),
      std: document.getElementById('resSTd')
    },
    total: {
      td:  null,
      std: document.getElementById('totalSTd')
    }
  }; 

  var self = this;

  this.init = function(controller) {
    this.controller = controller;
    document.getElementById('result').style['display'] = 'block';
    self.setResult();
    self.setRDetailTable('yomi_order', 0);
    self.controller.cover.fadein(fadein_spec);
  };

  this.start = function() {
    if (!self.controller.finished_phase_list['result']) {
      document.getElementById('r_retry_btn').addEventListener('click', self.toRetry);
      document.getElementById('r_top_btn').addEventListener('click', self.toTop);
      document.getElementById('rc_btn').addEventListener('click', self.changeScr);
    }
  };

  this.setScolObjs = function() {
    self.scol_objs.yomi_order    = document.getElementById('scol_yo');
    self.scol_objs.result_no     = document.getElementById('scol_rn');
    self.scol_objs.response_time = document.getElementById('scol_rt');
    self.scol_objs.uta_no        = document.getElementById('scol_un');

    self.scol_objs.yomi_order.sort_kind    = 'yomi_order';
    self.scol_objs.result_no.sort_kind     = 'result_no';
    self.scol_objs.response_time.sort_kind = 'response_time';
    self.scol_objs.uta_no.sort_kind        = 'uta_no';

    self.scol_objs.yomi_order.addEventListener('click', self.sortExecute, false);
    self.scol_objs.result_no.addEventListener('click', self.sortExecute, false);
    self.scol_objs.response_time.addEventListener('click', self.sortExecute, false);
    self.scol_objs.uta_no.addEventListener('click', self.sortExecute, false);
  };

  this.sortExecute = function() {
    var kind = this.sort_kind;
    var desc = self.current_order.desc;

    if (kind != self.current_order.kind) {
      desc = 0;
    } else {
      desc = (desc + 1) % 2;
    }
    self.current_order.kind = kind;
    self.current_order.desc = desc;
    self.setRDetailTable(kind, desc);

    self.scroll_obj.scrollTop = 0;
  };

  this.setResult = function() {
    var res = KarutaRecorder.getResultObj();
    self.objs.correct.td.innerHTML  = String(res.correct)+'枚';
    self.objs.correct.std.innerHTML = String(res.correctS)+'点';
    self.objs.through.td.innerHTML  = String(res.through)+'枚';
    self.objs.through.std.innerHTML = String(res.throughS)+'点';
    self.objs.wrong.td.innerHTML    = String(res.wrong)+'回';
    self.objs.wrong.std.innerHTML   = String(res.wrongS)+'点';
    self.objs.time.td.innerHTML     = res.time;
    if (res.res) {
      self.objs.res.td.innerHTML = String(res.res)+'秒';
    } else {
      self.objs.res.td.innerHTML = '- 秒';
    }
    self.objs.res.std.innerHTML   = String(res.resS)+'点';
    self.objs.total.std.innerHTML = String(res.totalS)+'点';
  };

  this.setRDetailTable = function(order_kind, desc) {
    if (desc) desc = 1;
    else      desc = 0;

    var arr = KarutaRecorder.getSortedRecordArray(order_kind, desc);
    var t = document.getElementById("rDetailTable");
    var row1, row2;
    var cell1, cell2, cell3, cell4;
    var uta;

    t.innerHTML = '<tr class="titleTr"><td class="tds" id="scol_yo">詠み順</td><td class="tds" id="scol_rn">結果</td><td class="tdl" id="scol_rt">反応時間</td><td class="tds" id="scol_un">歌番号</td></tr>';
    self.setScolObjs();

    for (var i = 0; i < arr.length; i++) {
      row1 = t.insertRow(2 * i + 1);
      row2 = t.insertRow(2 * i + 2);
      cell1 = row1.insertCell(0);
      cell2 = row1.insertCell(1);
      cell3 = row1.insertCell(2);
      cell4 = row1.insertCell(3);

      cell1.className = 'touchtd';
      cell2.className = 'touchtd';
      cell3.className = 'touchtd';
      cell4.className = 'touchtd';

      cell1.innerHTML = String(arr[i]['correct']['yomi_order']+1);

      if (arr[i]['result']['result_no'] == 1) {
        cell2.innerHTML = '<span class="fblue">'+KarutaRecorder.getResultStr(arr[i]['result']['result_no'])+'</span>';
        cell3.innerHTML = String(arr[i]['result']['response_msec'] / 1000)+'秒';
        row1.className = 'rw';
        row2.className = 'rw';
      } else {
        cell2.innerHTML = '<span class="fred">'+KarutaRecorder.getResultStr(arr[i]['result']['result_no'])+'</span>';
        cell3.innerHTML = 'ー';
        row1.className = 'rr';
        row2.className = 'rr';
      }
      cell4.innerHTML = String(arr[i]['correct']['uta_no'])+'番';

      uta = KarutaUtil.getKanjiUta(arr[i]['correct']['uta_no']);
      cell1 = row2.insertCell(0);
      cell1.innerHTML = uta.kami+' '+uta.shimo;
      cell1.setAttribute('colspan', '4');
      cell1.className = 'touchtd utatd';
    }
  };


  this.changeScr = function() {
    if (self.screen_id == 1) {
      self.setRDetailTable('yomi_order', 0);
      self.scr_objs[1].style['display'] = 'none';
      self.scr_objs[2].style['display'] = 'block';
      //scrollTopの変更は対象が表示されていないと効かないので、display変更後に行う。
      self.scroll_obj.scrollTop = 0;
      self.rc_btn.innerHTML = '結果概要';
    } else {
      self.scr_objs[2].style['display'] = 'none';
      self.scr_objs[1].style['display'] = 'block';
      self.rc_btn.innerHTML = '結果詳細';
    }
    self.screen_id = self.screen_id % 2 + 1;
  };

  this.toRetry = function() {
    self.toNextPhase('practice1');
  };

  this.toTop = function() {
    self.toNextPhase('splash');
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
    next_phase: null,
    next_secnods: 1,
    next: function() {
      document.getElementById('result').style['display'] = 'none';
      self.controller.finishPhase(this.next_phase);
    }
  };
};

