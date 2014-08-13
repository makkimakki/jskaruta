var Controller = function() {
  var self = this;

  this.tate_px;
  this.yoko_px;

  this.animating_process = 0;

  this.phase_list = {
    1:  'load',
    2:  'splash',
    3:  'practice1',
    4:  'practice2',
    5:  'result',
    6:  'stats',
    7:  'usage',
  };

  this.finished_phase_list = {
    'load': 0,
    'splash': 0,
    'practice1': 0,
    'practice2': 0,
    'result': 0,
    'stats': 0,
    'usage': 0
  };

  this.current_phase = 'load';
  this.prev_phase = null;
  this.phase_obj = null;

  this.loaded_objs = null;

  this.user = null;

  this.cover = null;

  //AnimationController
  this.ac = null;

  this.sound_enabled = 1;


  this.initAndStart = function() {
    var pxs = getPxs();
    self.tate_px = pxs.tate;
    self.yoko_px = pxs.yoko;
    self.cover = new Cover();
    //self.user = new User();
    self.ac = new AnimationController();
    //self.user.init();

    self.startPhase();
  };

  this.changePhase = function(next_phase) {
    self.prev_phase = self.current_phase;
    self.current_phase = next_phase;
  };

  this.startPhase = function() {
    switch (self.current_phase) {
      case 'load':
        self.phase_obj = new Loader();
        self.phase_obj.init(self);
        break;

      case 'splash':
        self.phase_obj = new Splash();
        self.phase_obj.init(self);
        break;

      case 'practice1':
        self.phase_obj = new Practice1();
        self.phase_obj.init(self);
        break;

      case 'usage':
        self.phase_obj = new Usage();
        self.phase_obj.init(self);
        break;

      default:
        break;
    }
  };

  this.finishPhase = function(set_next_phase) {
    if (DEBUG) {
      alert(self.current_phase+' phase finished!');
    }
    var next_phase = '';

    switch (self.current_phase) {
      case 'load':
        next_phase = 'splash';
        break;

      case 'splash':
        if (set_next_phase == 'practice1' 
          || set_next_phase == 'practice2'
          || set_next_phase == 'stats'
          || set_next_phase == 'usage'
        ) {
          next_phase = set_next_phase;
        } 
        break;

      case 'usage':
        if (set_next_phase == 'splash') {
          next_phase = set_next_phase;
        }
        break;
    }

    self.finished_phase_list[self.current_phase] = 1;

    if (next_phase) {
      self.changePhase(next_phase);
      self.startPhase();
    }
  };

  this.animation = function() {
    this.animating_process++;
    if (this.animating_process > 1) {
      this.animating_process--;
      return;
    }
    if (!self.ac.isAnimating()) {
      this.animating_process--;
      return;
    }
    self.ac.stepToNext();
    setTimeout(function(){
      self.animating_process--;
      self.animation(); }, 1000 / self.ac.fps); 
  }

  this.isFinishedPhase = function(phase) {
    if (!phase) {
      phase = self.current_phase;
    }
    if (self.finished_phase_list[phase]) {
      return 1;
    }
    return 0;
  }
}

