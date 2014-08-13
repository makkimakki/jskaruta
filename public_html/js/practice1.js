var Practice1 = function() {
  this.controller = null;

  var self = this;

  this.init = function(controller) {
    this.controller = controller;
    document.getElementById('game').style['display'] = 'block';
    self.controller.cover.fadein(fadein_spec);
  };

  this.start = function() {
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
    next_secnods: 1,
    next: function() {
      document.getElementById('game').style['display'] = 'none';
      self.controller.finishPhase(this.next_phase);
    }
  };
};

