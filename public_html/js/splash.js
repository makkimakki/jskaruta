var Splash = function() {
  this.controller = null;

  var self = this;

  this.init = function(controller) {
    this.controller = controller;
    document.getElementById('splash').style['display'] = 'block';
    self.controller.cover.fadein(fadein_spec);
  };

  this.start = function() {
    if (!self.controller.finished_phase_list['splash']) {
      document.getElementById('p1_btn').addEventListener('click', self.toP1);
      document.getElementById('kimariji_btn').addEventListener('click', self.toKimariji);
      document.getElementById('usage_btn').addEventListener('click', self.toUsage);
    }
  };

  this.toP1 = function() {
    self.toNextPhase('practice1');
  };

  this.toP2 = function() {
    self.toNextPhase('practice2');
  };

  this.toStats = function() {
    self.toNextPhase('stats');
  };

  this.toKimariji = function() {
    self.toNextPhase('kimariji');
  };

  this.toUsage = function() {
    self.toNextPhase('usage');
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
      document.getElementById('splash').style['display'] = 'none';
      self.controller.finishPhase(this.next_phase);
    }
  };
};

