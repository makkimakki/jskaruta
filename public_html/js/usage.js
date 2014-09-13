var Usage = function() {
  this.controller = null;
  this.page_no = 1;
  this.next_page = null;
  this.is_animating = 0;

  this.u = {};
  this.u[1] = document.getElementById('u1Scr');
  this.u[2] = document.getElementById('u2Scr');
  this.u[3] = document.getElementById('u3Scr');
  this.u[4] = document.getElementById('u4Scr');

  var self = this;

  this.init = function(controller) {
    this.controller = controller;
    document.getElementById('usage').style['display'] = 'block';
    self.controller.cover.fadein(fadein_spec);
  };

  this.start = function() {
    //if (!self.controller.finished_phase_list['usage']) {
    document.getElementById('uprev_btn').addEventListener('click', self.prevPage);
    document.getElementById('unext_btn').addEventListener('click', self.nextPage);
    document.getElementById('utop_btn').addEventListener('click', self.gotoTop);
    //}
  };

  this.gotoTop = function() {
    if (self.is_animating) return;

    document.getElementById('uprev_btn').removeEventListener('click', self.prevPage);
    document.getElementById('unext_btn').removeEventListener('click', self.nextPage);
    document.getElementById('utop_btn').removeEventListener('click', self.gotoTop);
    self.controller.cover.fadeout(fadeout_spec);
  };

  this.nextPage = function() {
    self.pageMove(1);
  };

  this.prevPage = function() {
    self.pageMove(-1);
  };

  this.pageMove = function(np) {
    if (self.is_animating) return;
    if (np != 1) {
      np = -1;
    }
    self.next_page = (self.page_no + 3 + np) % 4 + 1;
    self.is_animating = 1;
    self.u[self.page_no].className = 'sfadeout';

    setTimeout(function() {
      self.u[self.page_no].style['display'] = 'none';
      self.u[self.page_no].className = '';
      self.u[self.next_page].style['display'] = 'block';
      self.u[self.next_page].className = 'sfadein';

      setTimeout(function() {
        self.is_animating = 0;
        self.page_no = self.next_page;
        self.next_page = null;
      }, 200);
    }, 200);
  }

  var fadein_spec = {
    next_seconds: 1,
    next: function() {
      self.start();  
    }
  };

  var fadeout_spec = {
    next: function() {
      document.getElementById('usage').style['display'] = 'none';
      self.u[self.page_no].style['display'] = 'none';
      self.page_no = 1;
      self.u[self.page_no].style['display'] = 'block';
      self.controller.finishPhase();
    }
  };
};
