
// Lazyload for Application Module
var lazyload = {
  threshold: 100

  , getPos = function(ele) {
    var pos = {
      x: 0,
      y: 0
    };

    while (ele.offsetParent) {
      pos.x += ele.offsetLeft;
      pos.y += ele.offsetTop;
      ele = ele.offsetParent;
    }
    return pos;
  }

  , getViewport = function() {
    var html = document.documentElement;
    return {
      w: (T.browser.ie || !self.innerWidth) ? html.clientWidth : self.innerWidth,
      h: (T.browser.ie || !self.innerHeight) ? html.clientHeight : self.innerHeight
    }
  }

  // 滚动条在Y轴上的滚动距离
  , getScrollHeight = function() {
    var doc = document,
      html = doc.documentElement,
      bd = doc.body;
    return Math.max(window.pageYOffset || 0, html.scrollTop, bd.scrollTop);
  };

  , inView: function(ele) {
    var top = M.getPos(ele).y
      , viewVal = M.getViewport().h
      , scrollVal = M.getScrollHeight();

    if (top <= scrollVal + viewVal + this.threshold) {
      return true;
    }

    return false;
  }

  , downloadPic: function(o, url) {
    var tmp = new Image();
    tmp.onload = function() {
      o.src = url;
    };
    tmp.src = url;
  }

  , init: function() {
    var img = document.getElementsByClassName('thumb');
    for (var i = 0, len = img.length; i < len; i++) {
      var o = img[i];
      if (!this.inView(o) || o.isLoaded) continue;
      o.isLoaded = true;
      this.downloadPic(o, o.getAttribute('data-src'));
    }
  }
};


function scriptDomElement(u) {
  var s = document.createElement('script')
    , h = document.getElementsByTagName('head')[0];
  s.src = u;
  s.async = true;
  h && h.insertBefore(s, h.firstChild);
}