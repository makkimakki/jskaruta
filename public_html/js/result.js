var Result = function() {
  this.controller = null;

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
    self.controller.cover.fadein(fadein_spec);
  };

  this.start = function() {
    if (!self.controller.finished_phase_list['result']) {
      document.getElementById('r_retry_btn').addEventListener('click', self.toRetry);
      document.getElementById('r_top_btn').addEventListener('click', self.toTop);
    }
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
    self.objs.res.td.innerHTML      = String(res.res)+'秒';
    self.objs.res.std.innerHTML     = String(res.resS)+'点';
    self.objs.total.std.innerHTML   = String(res.totalS)+'点';
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

