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
  }
};


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

  adjust_count++;
/*
  if (tate >= 1200 && adjust_count < 5) {
    if (!prev_tate) prev_tate = tate;
    if (prev_tate == tate && same_tate_count < 4) {
      same_tate_count++;
      setTimeout(adjustLayout, 1000);
      return;
    }
  }
*/
  alert(pxs.zoom);
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
    switch (event.target.className) {
      case 'tpolicyP':
        return;
        break;

      case 'voiceBtnL':
      case 'voiceBtn':
      case 'toMainArea':
        tate_px = getTatePx();
        elm = document.getElementById('voiceScroll');
        elm_h = 1140 - (tate_px - 88);
        break;

      case 'pIntro':
      case 'pDigit':
      case 'pSRank':
      case 'pRank':
      case 'pList':
      case 'presentBtn':
        tate_px = getTatePx();
        elm = document.getElementById('presentScroll');
        elm_h = 1222 - (tate_px - 88);
        break;

      case 'uScrollCover':
      case 'polScrollCover':
        tate_px = getTatePx();
        elm_h = 2058 - (tate_px - 88);

        if (event.target.className == 'uScrollCover') {
          elm = document.getElementById('usageScroll');
        } else {
          elm = document.getElementById('polScroll');
        }
        break;

      default:
        event.preventDefault();
        return;
    }

    //androidの場合、制御をあきらめる。
    if (TALUtility.isAndroid()) {
      return;

    } else if (TALUtility.getIOSVersion() == 6) {
      elm_h -= 17;
    }


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
  }
}
