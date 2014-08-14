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
    document.getElementById('k101').addEventListener('click', self.flyKaruta);
    KarutaBoard.init('practice1');

    Utayomi.initObjs();
    Utayomi.eraseUtaDisplay();
    Utayomi.startYomi(1);

    MoonTimer.initObjs();
    MoonTimer.startTimer();

    document.getElementById('cover').style['z-index'] = '100';
    document.getElementById('cover').style['display'] = 'block';
    document.getElementById('cover').style['background'] = 'rgba(0, 0, 0, 0.6)';
    document.getElementById('dialog').style['display'] = 'block';
    //document.getElementById('dialog').className = 'dialogdisplay';
  };

  this.flyKaruta = function() {
    this.style['z-index'] = '100';
    this.className = 'karuta rrotate';
    var id = this.id;
    setTimeout(function() {
      document.getElementById(id).className = 'karuta';
    }, 2000);
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

