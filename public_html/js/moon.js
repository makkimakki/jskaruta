var MoonTimer = {
  /*
    timer_status
    0: not started
    1: moving
    2: temporary stopped
  */
  timer_status: 0,
  max_msec: 10000,
  past_msec: 0,
  start_mtimestamp: null,
  interval_msec: 100,
  objs: {
    left: null,
    right: null
  },

  initObjs: function() {
    this.objs.left = document.getElementById('leftM');
    this.objs.right = document.getElementById('rightM');
  },

  startTimer: function(add_msec) {
    if (this.timer_status == 1) return;

    var self = this;

    if (this.timer_status == 0) {
      this.drawMoonByPercent(1);
    }
    this.start_mtimestamp = getMTimestamp();
    if (add_msec) {
      this.past_msec += add_msec;
    }
    this.timer_status = 1;
    setTimeout(function() { self.drawMoonByTimer(); }, this.interval_msec);
  },

  stopTimer: function() {
    var mtimestamp = getMTimeStamp();
    var add_msec = mtimestamp - this.start_mtimestamp;
    this.past_msec += add_msec;
    this.start_mtimestamp = 0;
    this.timer_status = 2;
  },

  reset: function() {
    this.past_msec = 0;
    this.start_timestamp = null;
  },

  drawMoonByTimer: function() {
    if (!this.objs.left) return;
    if (this.timer_status != 1) return;

    var self = this;
    var total_msec = 0;

    if (this.start_mtimestamp) {
      total_msec = getMTimestamp() - this.start_mtimestamp + this.past_msec;
    }

    var rate = (this.max_msec - total_msec) / this.max_msec;
    this.drawMoonByPercent(rate);
    setTimeout(function(){ self.drawMoonByTimer(); }, this.interval_msec);
  },

  /*
    percentは1が満月、0が新月
   */
  drawMoonByPercent: function(percent) {
    if (percent < 0) percent = 0;

    //percentを100%を0ラジアン、0%をπラジアンとして変換
    var r = this.convertPercentToR(percent);
    var new_percent = (Math.cos(r) + 1) / 2;

    if (new_percent >= 0.5) {
      this.objs.left.style['display'] = 'none';
      var right_px = Math.round(51 * (new_percent - 0.5) / 0.5);

      if (right_px) {
        this.objs.right.style['left'] = '50px';
        this.objs.right.style['width'] = String(right_px)+'px';
        this.objs.right.style['border-radius'] = '0 '+String(right_px - 1)+'px '+String(right_px - 1)+'px 0 / 0 50px 50px 0';
        this.objs.right.style['display'] = 'block';
      } else {
        this.objs.right.style['display'] = 'none';
      }
    }
    if (new_percent <= 0.5) {
      this.objs.right.style['display'] = 'none';
      var left_px = Math.round(52 * (0.5 - new_percent) / 0.5);

      if (left_px) {
        this.objs.left.style['right'] = '49px';
        this.objs.left.style['width'] = String(left_px)+'px';
        this.objs.left.style['border-radius'] = String(left_px - 1)+'px 0 0 '+String(left_px - 1)+'px / 50px 0 0 50px';
        this.objs.left.style['display'] = 'block';
      } else {
        this.objs.left.style['display'] = 'none';
      }
    }
  },
  convertPercentToR: function(percent) {
    return (1 - percent) * Math.PI;
  }
};
