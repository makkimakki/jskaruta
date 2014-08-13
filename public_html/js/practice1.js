var Practice1 = function() {
  this.controller = null;
  this.current_jinchi = 1;

  var self = this;

  this.init = function(controller) {
    this.controller = controller;
    document.getElementById('game').style['display'] = 'block';
    self.controller.cover.fadein(fadein_spec);
  };

  this.start = function() {
    document.getElementById('k129').addEventListener('click', self.flyKaruta);
  };

  this.flyKaruta = function() {
    this.className = 'karuta rrotate';
    var id = this.id;
    setTimeout(function() { document.getElementById(id).className = 'karuta'; }, 2000);
  };

  this.toNextJinchi = function() {

  };

  this.toPrevJinchi = function() {

  };

  this.chnageJinchiLight = function(jinchi_id) {

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

