var NumberUtil = {

  //指定の桁の数字を１つ取り出す
  //引数1: 数字 引数2:取り出す桁番号(1=1の位, 2=10の位...)
  getKetaNumber: function(num, keta) {
    if (keta < 1) return null;
    var i = 1;
    for (var k = 1; k <= keta; k++) {
      i *= 10;
    }
    var j = i / 10;
    var amari1 = num % i;
    var amari2 = amari1 % j;
    return (amari1 - amari2) / j;
  },
  getRandomInt: function(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
  },
  convertSecondsToMS: function(seconds) {
    var ret = {};
    ret.seconds = seconds % 60;
    ret.minutes = (seconds - ret.seconds) / 60;
    ret.string  = String(ret.minutes);
    if (ret.seconds == 0) {
      ret.string = ret.string+':00';
    } else if (ret.seconds < 10) {
      ret.string = ret.string+':0'+String(ret.seconds);
    } else {
      ret.string = ret.string+':'+String(ret.seconds);
    }
    return ret;
  }
};

var DeviceUtil = {
  isIOS: function(){
    var ua = navigator.userAgent;
    return (ua.match(/iPad/i) || ua.match(/iPhone/i)) ? true : false;
  },
  isAndroid: function(){
    var ua = navigator.userAgent;
    return ua.match(/Android/i) ? true : false;
  },
  getIOSVersion: function(){
    if (!this.isIOS()) return null;
    var ua = navigator.userAgent;
    var uaindex = ua.indexOf('OS ');

    return ua.substr(uaindex + 3, 3).replace('_', '.').charAt(0);
  }
}

var ArrayUtil = {
  getRandomArray: function(arr) {
    var tmp_arr = arr.slice(0);
    var new_arr = new Array(arr.length);

    for (var i = 0; i < arr.length; i++) {
      var rnd = NumberUtil.getRandomInt(0, tmp_arr.length - 1);
      new_arr[i] = tmp_arr[rnd];
      tmp_arr.splice(rnd, 1);
    }
    return new_arr;
  }
};

function getTimestamp() {
  return Math.round(new Date().getTime() / 1000);
}

function getMTimestamp() {
  return new Date().getTime();
}
function getPxs() {
  var base_tate = 600;
  var base_yoko = 1200;
  var yoko = window.innerWidth;
  var tate = window.innerHeight;
  var ret = {};

  if (yoko <= tate) {
    base_yoko = 600;

    ret.yoko = base_yoko;
    ret.tate = Math.round(tate * base_yoko / yoko);
    ret.zoom = yoko / base_yoko;
    return ret;
  }

  if (yoko >= 2 * tate) {
    ret.tate = base_tate;
    ret.yoko = Math.round(yoko * base_tate / tate);
    ret.zoom = tate / base_tate;
  } else {
    ret.yoko = base_yoko;
    ret.tate = Math.round(tate * base_yoko / yoko);
    ret.zoom = yoko / base_yoko;
  }
  return ret;
}

function adjustLayout() {
  var yoko = window.innerWidth;
  var tate = window.innerHeight;
  var pxs = getPxs();

  //alert(String(yoko)+'x'+String(tate));

/*
  adjust_count++;
  if (tate >= 1200 && adjust_count < 5) {
    if (!prev_tate) prev_tate = tate;
    if (prev_tate == tate && same_tate_count < 4) {
      same_tate_count++;
      setTimeout(adjustLayout, 1000);
      return;
    }
  }
*/
  var list = [
    'load',
    'splash',
    'game',
    'result',
    'stats',
    'kimariji',
    'usage'
  ];

  var obj;

  for (var i = 0; i < list.length; i++) {
    obj = document.getElementById(list[i]);
    obj.style.width = '1200px';
    obj.style.height = '600px';
    if (pxs.tate > 600) {
      obj.style.top = String(Math.round((pxs.tate - 600)/2))+'px';
    }
    if (pxs.yoko > 1200) {
      obj.style.left = String(Math.round((pxs.yoko - 1200)/2))+'px';
    }
  } 
  //alert('w:'+String(pxs.yoko)+' h:'+String(pxs.tate));

  if (tate > yoko) {
    alert('画面を横にしてアクセスし直して下さい');
  }

  document.getElementsByTagName('html')[0].style.zoom = pxs.zoom;
}

var scroll = {
  first_finish: 0,
  prohibitScroll: function() {
    var elm = null;
    var elm_h = null;
    var tate_px = null;
    var margin = 3;

    //elm_hは、中身のコンテンツの長さ - 枠の長さ

    if (event.target.className.search('touchtd') >= 0) {
      console.log(document.getElementById('rDetailTableArea').scrollTop);
      return;
    }

    switch (event.target.className) {
      default:
        event.preventDefault();
        return;
    }


    //androidの場合、制御をあきらめる。
    if (DeviceUtil.isAndroid()) {
      return;

    } else if (DeviceUtil.getIOSVersion() == 6) {
      elm_h -= 17;
    }

/*
    if (elm_h > margin * 1) {
      if (elm.scrollTop > elm_h - margin) {
        elm.scrollTop = elm_h - margin - 1;
        event.preventDefault();
      } else if (elm.scrollTop < margin || !this.first_finish) {
        elm.scrollTop = margin + 1;
        this.first_finish = 1;
        event.preventDefault();
      }
      return;
    }
*/
  }
}
