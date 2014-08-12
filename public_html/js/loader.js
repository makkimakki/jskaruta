var Loader = function() {
  this.srcs = {
    'image': [
    ],
    'sound': {
    }
  };

  this.total_count = 0;
  this.loaded_count = 0;

  this.objs = {
    'image': {},
    'sound': {}
  };

  this.controller = null;

  var self = this;

  this.init = function(controller) {
    this.controller = controller;
    this.total_count = Object.keys(this.srcs.image).length + Object.keys(this.srcs.sound).length;

    for (var type in this.srcs) if (this.srcs.hasOwnProperty(type)){
      for (var key in this.srcs[type]) if (this.srcs[type].hasOwnProperty(key)) {
        this.loadSrc(type, key);
      }
    }
    this.update();
  };

  this.loadSrc = function(type, key) {
    var e = '';

    if (type == 'image') {
      this.objs[type][key] = new Image();
      this.objs[type][key].src = this.srcs[type][key];
      e = 'load';

      this.objs[type][key].addEventListener(e, function() {
        self.loaded_count++;
        self.update();
      });

    } else if (type == 'sound') {
      $.ajax({
        url: this.srcs[type][key],
        dataType: "text",
        cache: false,
        success: function(data) {
          self.loaded_count++;
          self.objs[type][key] = new Audio(self.srcs[type][key]);
          self.update();
        },
        error: function(data) {
        }
      });
    }
  };

  this.update = function() {
    //var percentage = this.loaded_count / this.total_count;
    //とりあえず
    var percentage = 1;

    if (percentage == 1) {
      //フェードアウトして終了
      self.controller.cover.fadeout(fadeout_spec);
    }
  };

  var fadeout_spec = {
    next_seconds: 1,
    next: function() {
      document.getElementById('load').style['display'] = 'none';
      self.controller.finishPhase();
    }
  }
};

