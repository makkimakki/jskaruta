var Cover = function() {
  this.obj = document.getElementById('cover');
  this.next_seconds = 1;

  var self = this;

  this.fadein = function(spec) {
    var next_seconds = spec.next_seconds;
    if (!next_seconds) {
      next_seconds = self.next_seconds;
    }

    //fadeinする前は、下記2つのスタイルになっているはず。 
    //self.obj.style['opacity'] = 1;
    //self.obj.style['z-index'] = 100;

    setTimeout(function(){ self.obj.className = 'all_fadein'; }, 100);
    setTimeout(function(){ self.fadein_finish(spec); }, next_seconds * 1000 + 100);
  };

  this.fadein_finish = function(spec) {
    self.obj.style['display'] = 'none';
    self.obj.style['z-index'] = 0;
    self.obj.className = '';
    spec.next();
  }

  this.fadeout = function(spec) {
    var next_seconds = spec.next_seconds;
    if (!next_seconds) {
      next_seconds = self.next_seconds;
    }

    self.obj.style['opacity'] = 0;
    self.obj.style['z-index'] = 100;
    self.obj.style['display'] = 'block';
    self.obj.className = 'all_fadeout';
    setTimeout(function(){ self.fadeout_finish(spec); }, next_seconds * 1000);
  };

  this.fadeout_finish = function(spec) {
    self.obj.style['opacity'] = 1;
    self.obj.className = '';
    spec.next();
  };

  this.whiteOutAndIn = function(spec) {
    self.obj.style['opacity'] = 0;
    self.obj.style['z-index'] = 100;
    self.obj.style['display'] = 'block';
    self.obj.className = 'whiteoutandin';
    setTimeout(function() {
      self.obj.style['opacity'] = 0;
      self.obj.style['z-index'] = 1;
      self.obj.style['display'] = 'none';
      self.obj.className = '';
      if (spec) {
        spec.next();
      }
    }, 2000);
  };

  this.prepareDialogDisplay = function() {
    self.obj.style['opacity'] = 0;
    self.obj.style['z-index'] = 100;
    self.obj.style['display'] = 'block';
    self.obj.className = 'fadeinfordialog';
  };

  this.execAfterDialogDisapper = function() {
    self.obj.style['opacity'] = 0;
    self.obj.style['z-index'] = 1;
    self.obj.style['display'] = 'none';
    self.obj.className = '';
  }
}
