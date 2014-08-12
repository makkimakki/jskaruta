var AnimationController = function() {
  this.fps = 20;
  this.counter = 0;
  this.queue = {};

  var self = this;

  this.addObj = function (obj) {
    this.queue[obj.id] = obj;
  };

  this.start = function() {
    this.stepToNext();
  };

  this.stepToNext = function() {
    this.counter++;

    for (var id in self.queue) {
      var ao = self.queue[id];
      ao.stepToNext(this.counter);
    }
  };

  this.removeObj = function (id) {
    delete this.queue[id];
    if (DEBUG) {
      alert(Object.keys(this.queue).length);
    }
  };

  this.removeAllObjs = function (id) {
    for (var key in this.queue) {
      if (this.queue.hasOwnProperty(key)){
        delete this.queue[key];
      }
    }
  };

  this.isAnimating = function() {
    if (Object.keys(this.queue).length > 0) {
      return 1;
    }
    return 0;
  };
}

var BaseAnimationObj = function(id) {
  this.id = id;
  this.stepToNext = function(counter) {};
}

