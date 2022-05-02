/*!
 * ====================================================
 * Kity Minder Core - v1.4.50 - 2020-12-02
 * https://github.com/fex-team/kityminder-core
 * GitHub: https://github.com/fex-team/kityminder-core.git 
 * Copyright (c) 2020 Baidu FEX; Licensed BSD-3-Clause
 * ====================================================
 */
!function() {
  function a(a2) {
    b.r([c[a2]]);
  }
  var b = { r: function(a2) {
    if (b[a2].inited)
      return b[a2].value;
    if (typeof b[a2].value != "function")
      return b[a2].inited = true, b[a2].value;
    var c2 = { exports: {} }, d = b[a2].value(null, c2.exports, c2);
    if (b[a2].inited = true, b[a2].value = d, d !== void 0)
      return d;
    for (var e in c2.exports)
      if (c2.exports.hasOwnProperty(e))
        return b[a2].inited = true, b[a2].value = c2.exports, c2.exports;
  } };
  b[0] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(11), g = new e.Marker().pipe(function() {
      var a3 = 7, b2 = new e.Circle(a3 - 1);
      this.addShape(b2), this.setRef(a3 - 1, 0).setViewBox(-a3, -a3, a3 + a3, a3 + a3).setWidth(a3).setHeight(a3), this.dot = b2, this.node.setAttribute("markerUnits", "userSpaceOnUse");
    });
    f.register("arc", function(a3, b2, c3, d2, f2) {
      var h, i, j, k = a3.getLayoutBox(), l = b2.getLayoutBox(), m = Math.abs, n = [], o = k.x > l.x ? "right" : "left";
      a3.getMinder().getPaper().addResource(g), h = new e.Point(l.cx, l.cy), i = o == "left" ? new e.Point(k.right + 2, k.cy) : new e.Point(k.left - 2, k.cy), j = e.Vector.fromPoints(h, i), n.push("M", h), n.push("A", m(j.x), m(j.y), 0, 0, j.x * j.y > 0 ? 0 : 1, i), c3.setMarker(g), g.dot.fill(f2), c3.setPathData(n);
    });
  } }, b[1] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(11), g = new e.Marker().pipe(function() {
      var a3 = 7, b2 = new e.Circle(a3 - 1);
      this.addShape(b2), this.setRef(a3 - 1, 0).setViewBox(-a3, -a3, a3 + a3, a3 + a3).setWidth(a3).setHeight(a3), this.dot = b2, this.node.setAttribute("markerUnits", "userSpaceOnUse");
    });
    f.register("arc_tp", function(a3, b2, c3, d2, f2) {
      var h = a3.getLayoutBox(), i = b2.getLayoutBox(), j = a3.getIndex(), k = b2.getChildren()[j + 1];
      a3.getIndex() > 0 && (i = b2.getChildren()[j - 1].getLayoutBox());
      var l, m, n = ([]);
      h.x, i.x;
      a3.getMinder().getPaper().addResource(g), l = new e.Point(i.cx, i.cy), m = new e.Point(h.cx, h.cy);
      var o = Math.sqrt(Math.pow(l.x - m.x, 2) + Math.pow(l.y - m.y, 2));
      if (o = a3.getIndex() == 0 ? 0.4 * o : o, e.Vector.fromPoints(l, m), n.push("M", l), n.push("A", o, o, 0, 0, 1, m), c3.setMarker(g), g.dot.fill(f2), c3.setPathData(n), k && k.getConnection()) {
        var p = k.getConnection(), q = k.getLayoutBox(), r = new e.Point(q.cx, q.cy), s = Math.sqrt(Math.pow(m.x - r.x, 2) + Math.pow(m.y - r.y, 2));
        n = [], n.push("M", m), n.push("A", s, s, 0, 0, 1, r), p.setMarker(g), g.dot.fill(f2), p.setPathData(n);
      }
    });
  } }, b[2] = { value: function(a2, c2, d) {
    b.r(17);
    b.r(11).register("bezier", function(a3, b2, c3) {
      var d2 = b2.getLayoutVertexOut(), e = a3.getLayoutVertexIn(), f = b2.getLayoutVectorOut().normalize(), g = Math.round, h = Math.abs, i = [];
      if (i.push("M", g(d2.x), g(d2.y)), h(f.x) > h(f.y)) {
        var j = (e.x + d2.x) / 2;
        i.push("C", j, d2.y, j, e.y, e.x, e.y);
      } else {
        var k = (e.y + d2.y) / 2;
        i.push("C", d2.x, k, e.x, k, e.x, e.y);
      }
      c3.setMarker(null), c3.setPathData(i);
    });
  } }, b[3] = { value: function(a2, c2, d) {
    b.r(17);
    b.r(11).register("fish-bone-master", function(a3, b2, c3) {
      var d2 = b2.getLayoutVertexOut(), e = a3.getLayoutVertexIn(), f = Math.abs, g = f(d2.y - e.y), h = f(d2.x - e.x), i = [];
      i.push("M", d2.x, d2.y), i.push("h", h - g), i.push("L", e.x, e.y), c3.setMarker(null), c3.setPathData(i);
    });
  } }, b[4] = { value: function(a2, c2, d) {
    b.r(17);
    b.r(11).register("l", function(a3, b2, c3) {
      var d2 = b2.getLayoutVertexOut(), e = a3.getLayoutVertexIn(), f = b2.getLayoutVectorOut(), g = [], h = Math.round, i = Math.abs;
      g.push("M", d2.round()), i(f.x) > i(f.y) ? g.push("H", h(e.x)) : g.push("V", e.y), g.push("L", e), c3.setPathData(g);
    });
  } }, b[5] = { value: function(a2, c2, d) {
    b.r(17);
    b.r(11).register("poly", function(a3, b2, c3, d2) {
      var e = b2.getLayoutVertexOut(), f = a3.getLayoutVertexIn(), g = b2.getLayoutVectorOut().normalize(), h = Math.round, i = Math.abs, j = [];
      switch (j.push("M", h(e.x), h(e.y)), true) {
        case (i(g.x) > i(g.y) && g.x < 0):
          j.push("h", -b2.getStyle("margin-left")), j.push("v", f.y - e.y), j.push("H", f.x);
          break;
        case (i(g.x) > i(g.y) && g.x >= 0):
          j.push("h", b2.getStyle("margin-right")), j.push("v", f.y - e.y), j.push("H", f.x);
          break;
        case (i(g.x) <= i(g.y) && g.y < 0):
          j.push("v", -b2.getStyle("margin-top")), j.push("h", f.x - e.x), j.push("V", f.y);
          break;
        case (i(g.x) <= i(g.y) && g.y >= 0):
          j.push("v", b2.getStyle("margin-bottom")), j.push("h", f.x - e.x), j.push("V", f.y);
      }
      c3.setMarker(null), c3.setPathData(j);
    });
  } }, b[6] = { value: function(a2, c2, d) {
    var e = b.r(17);
    b.r(11).register("under", function(a3, b2, c3, d2, f) {
      var g, h, i, j, k = a3.getLayoutBox(), l = b2.getLayoutBox(), m = ([]), n = k.x > l.x ? "right" : "left", o = (a3.getStyle("connect-radius"), k.bottom + 3), p = b2.getType() == "sub" ? l.bottom + 3 : l.cy;
      n == "right" ? (g = new e.Point(l.right, p), h = new e.Point(k.left - 10, o), i = new e.Point(k.right, o)) : (g = new e.Point(l.left, p), h = new e.Point(k.right + 10, o), i = new e.Point(k.left, o)), j = (g.x + h.x) / 2, m.push("M", g), m.push("C", j, g.y, j, h.y, h), m.push("L", i), c3.setMarker(null), c3.setPathData(m);
    });
  } }, b[7] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(19);
    if (location.href.indexOf("boxv") != -1) {
      var g;
      Object.defineProperty(e.Box.prototype, "visualization", { get: function() {
        return g ? g.setBox(this) : null;
      } }), f.registerInitHook(function() {
        this.on("paperrender", function() {
          g = new e.Rect(), g.fill("rgba(200, 200, 200, .5)"), g.stroke("orange"), this.getRenderContainer().addShape(g);
        });
      });
    }
  } }, b[8] = { value: function(a2, c2, d) {
    var e = b.r(19), f = { enableAnimation: true, layoutAnimationDuration: 300, viewAnimationDuration: 100, zoomAnimationDuration: 300 }, g = {};
    e.registerInitHook(function() {
      this.setDefaultOptions(f), this.getOption("enableAnimation") || this.disableAnimation();
    }), e.prototype.enableAnimation = function() {
      for (var a3 in f)
        f.hasOwnProperty(a3) && this.setOption(g[a3]);
    }, e.prototype.disableAnimation = function() {
      for (var a3 in f)
        f.hasOwnProperty(a3) && (g[a3] = this.getOption(a3), this.setOption(a3, 0));
    };
  } }, b[9] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19)), g = (b.r(21), b.r(13)), h = 0, i = e.createClass("Command", { constructor: function() {
      this._isContentChange = true, this._isSelectionChange = false;
    }, execute: function(a3, b2) {
      throw new Error("Not Implement: Command.execute()");
    }, setContentChanged: function(a3) {
      this._isContentChange = !!a3;
    }, isContentChanged: function() {
      return this._isContentChange;
    }, setSelectionChanged: function(a3) {
      this._isSelectionChange = !!a3;
    }, isSelectionChanged: function() {
      return this._isContentChange;
    }, queryState: function(a3) {
      return h;
    }, queryValue: function(a3) {
      return 0;
    }, isNeedUndo: function() {
      return true;
    } });
    i.STATE_NORMAL = h, i.STATE_ACTIVE = 1, i.STATE_DISABLED = -1, e.extendClass(f, { _getCommand: function(a3) {
      return this._commands[a3.toLowerCase()];
    }, _queryCommand: function(a3, b2, c3) {
      var d2 = this._getCommand(a3);
      if (d2) {
        var e2 = d2["query" + b2];
        if (e2)
          return e2.apply(d2, [this].concat(c3));
      }
      return 0;
    }, queryCommandState: function(a3) {
      return this._queryCommand(a3, "State", [].slice.call(arguments, 1));
    }, queryCommandValue: function(a3) {
      return this._queryCommand(a3, "Value", [].slice.call(arguments, 1));
    }, execCommand: function(a3) {
      if (!a3)
        return null;
      a3 = a3.toLowerCase();
      var b2, c3, d2, e2, f2 = [].slice.call(arguments, 1), h2 = this;
      return b2 = this._getCommand(a3), e2 = { command: b2, commandName: a3.toLowerCase(), commandArgs: f2 }, !(!b2 || !~this.queryCommandState(a3)) && (this._hasEnterExecCommand ? (d2 = b2.execute.apply(b2, [h2].concat(f2)), this._hasEnterExecCommand || this._interactChange()) : (this._hasEnterExecCommand = true, c3 = this._fire(new g("beforeExecCommand", e2, true)), c3 || (this._fire(new g("preExecCommand", e2, false)), d2 = b2.execute.apply(b2, [h2].concat(f2)), this._fire(new g("execCommand", e2, false)), b2.isContentChanged() && this._firePharse(new g("contentchange")), this._interactChange()), this._hasEnterExecCommand = false), d2 === void 0 ? null : d2);
    } }), d.exports = i;
  } }, b[10] = { value: function(a2, c2, d) {
    function e(a3) {
      switch (a3.version || (a3.root ? "1.4.0" : "1.1.3")) {
        case "1.1.3":
          h(a3);
        case "1.2.0":
        case "1.2.1":
          g(a3);
        case "1.3.0":
        case "1.3.1":
        case "1.3.2":
        case "1.3.3":
        case "1.3.4":
        case "1.3.5":
          i(a3);
      }
      return a3;
    }
    function f(a3, b2) {
      b2(a3), a3.children && a3.children.forEach(function(a4) {
        f(a4, b2);
      });
    }
    function g(a3) {
      f(a3, function(a4) {
        var b2 = a4.data;
        delete b2.layout_bottom_offset, delete b2.layout_default_offset, delete b2.layout_filetree_offset;
      });
    }
    function h(a3) {
      var b2 = a3.data.currentstyle;
      delete a3.data.currentstyle, b2 == "bottom" ? (a3.template = "structure", a3.theme = "snow") : b2 == "default" && (a3.template = "default", a3.theme = "classic"), f(a3, function(a4) {
        var b3 = a4.data;
        "PriorityIcon" in b3 && (b3.priority = b3.PriorityIcon, delete b3.PriorityIcon), "ProgressIcon" in b3 && (b3.progress = 1 + (b3.ProgressIcon - 1 << 1), delete b3.ProgressIcon), delete b3.point, delete b3.layout;
      });
    }
    function i(a3) {
      a3.root = { data: a3.data, children: a3.children }, delete a3.data, delete a3.children;
    }
    b.r(33);
    return e;
  } }, b[11] = { value: function(a2, c2, d) {
    function e(a3, b2) {
      k[a3] = b2;
    }
    var f = b.r(17), g = b.r(33), h = b.r(20), i = b.r(19), j = b.r(21), k = {};
    e("default", function(a3, b2, c3) {
      c3.setPathData(["M", b2.getLayoutVertexOut(), "L", a3.getLayoutVertexIn()]);
    }), f.extendClass(j, { getConnect: function() {
      return this.data.connect || "default";
    }, getConnectProvider: function() {
      return k[this.getConnect()] || k.default;
    }, getConnection: function() {
      return this._connection || null;
    } }), f.extendClass(i, { getConnectContainer: function() {
      return this._connectContainer;
    }, createConnect: function(a3) {
      if (!a3.isRoot()) {
        var b2 = new f.Path();
        a3._connection = b2, this._connectContainer.addShape(b2), this.updateConnect(a3);
      }
    }, removeConnect: function(a3) {
      var b2 = this;
      a3.traverse(function(a4) {
        b2._connectContainer.removeShape(a4._connection), a4._connection = null;
      });
    }, updateConnect: function(a3) {
      var b2 = a3._connection, c3 = a3.parent;
      if (c3 && b2) {
        if (c3.isCollapsed())
          return void b2.setVisible(false);
        b2.setVisible(true);
        var d2 = a3.getConnectProvider(), e2 = a3.getStyle("connect-color") || "white", f2 = a3.getStyle("connect-width") || 2;
        b2.stroke(e2, f2), d2(a3, c3, b2, f2, e2), f2 % 2 == 0 ? b2.setTranslate(0.5, 0.5) : b2.setTranslate(0, 0);
      }
    } }), h.register("Connect", { init: function() {
      this._connectContainer = new f.Group().setId(g.uuid("minder_connect_group")), this.getRenderContainer().prependShape(this._connectContainer);
    }, events: { nodeattach: function(a3) {
      this.createConnect(a3.node);
    }, nodedetach: function(a3) {
      this.removeConnect(a3.node);
    }, "layoutapply layoutfinish noderender": function(a3) {
      this.updateConnect(a3.node);
    } } }), c2.register = e;
  } }, b[12] = { value: function(a2, c2, d) {
    function e(a3, b2) {
      l[a3] = b2;
      for (var c3 in l)
        l.hasOwnProperty(c3) && (l[c3] = l[c3], l[c3].name = c3);
    }
    function f(a3) {
      return a3 === void 0 ? l : l[a3] || null;
    }
    var g = b.r(17), h = (b.r(33), b.r(19)), i = (b.r(21), b.r(13)), j = b.r(10), k = b.r(25), l = {};
    c2.registerProtocol = e, c2.getRegisterProtocol = f, g.extendClass(h, { setup: function(a3) {
      if (typeof a3 == "string" && (a3 = document.querySelector(a3)), a3) {
        var b2 = a3.getAttribute("minder-data-type");
        if (b2 in l) {
          var c3 = a3.textContent;
          a3.textContent = null, this.renderTo(a3), this.importData(b2, c3);
        }
        return this;
      }
    }, exportJson: function() {
      function a3(b3) {
        var c3 = {};
        c3.data = b3.getData();
        var d2 = b3.getChildren();
        c3.children = [];
        for (var e2 = 0; e2 < d2.length; e2++)
          c3.children.push(a3(d2[e2]));
        return c3;
      }
      var b2 = { root: a3(this.getRoot()) };
      return b2.template = this.getTemplate(), b2.theme = this.getTheme(), b2.version = h.version, JSON.parse(JSON.stringify(b2));
    }, Text2Children: function(a3, b2) {
      function c3(a4) {
        return a4 === "" && !/\S/.test(a4);
      }
      function d2(a4) {
        return { data: { text: a4.replace(/^(\t|\x20{4})+/, "").replace(/(\t|\x20{4})+$/, "") }, children: [] };
      }
      function e2(a4) {
        for (var b3 = 0; m.test(a4); )
          a4 = a4.replace(m, ""), b3++;
        return b3;
      }
      function f2(a4, b3) {
        a4.children.push(b3);
      }
      function g2(a4, b3) {
        for (var c4 = 0, d3 = b3.length; c4 < d3; c4++) {
          var e3 = q.createNode(null, a4);
          e3.setData("text", b3[c4].data.text || ""), g2(e3, b3[c4].children);
        }
      }
      if (a3 instanceof kityminder.Node) {
        for (var h2, i2 = [], j2 = {}, k2 = 0, l2 = /\r|\n|\r\n/, m = /^(\t|\x20{4})/, n = b2.split(l2), o = "", p = 0, q = this; (o = n[p++]) !== void 0; )
          if (o = o.replace(/&nbsp;/g, ""), !c3(o))
            if (k2 = e2(o), h2 = d2(o), k2 === 0)
              j2 = {}, i2.push(h2), j2[0] = i2[i2.length - 1];
            else {
              if (!j2[k2 - 1])
                throw new Error("Invalid local format");
              f2(j2[k2 - 1], h2), j2[k2] = h2;
            }
        g2(a3, i2), q.refresh();
      }
    }, exportNode: function(a3) {
      var b2 = {};
      b2.data = a3.getData();
      var c3 = a3.getChildren();
      b2.children = [];
      for (var d2 = 0; d2 < c3.length; d2++)
        b2.children.push(this.exportNode(c3[d2]));
      return b2;
    }, importNode: function(a3, b2) {
      var c3 = b2.data;
      a3.data = {};
      for (var d2 in c3)
        a3.setData(d2, c3[d2]);
      for (var e2 = b2.children || [], f2 = 0; f2 < e2.length; f2++) {
        var g2 = this.createNode(null, a3);
        this.importNode(g2, e2[f2]);
      }
      return a3;
    }, importJson: function(a3) {
      if (a3) {
        for (this._fire(new i("preimport", null, false)); this._root.getChildren().length; )
          this.removeNode(this._root.getChildren()[0]);
        return a3 = j(a3), this.importNode(this._root, a3.root), this.setTemplate(a3.template || "default"), this.setTheme(a3.theme || null), this.refresh(), this.fire("import"), this._firePharse({ type: "contentchange" }), this._interactChange(), this;
      }
    }, exportData: function(a3, b2) {
      var c3, d2;
      return c3 = this.exportJson(), !a3 || (d2 = l[a3]) && d2.encode ? (this._fire(new i("beforeexport", { json: c3, protocolName: a3, protocol: d2 })), k.resolve(d2.encode(c3, this, b2))) : k.reject(new Error("Not supported protocol:" + a3));
    }, importData: function(a3, b2, c3) {
      var d2, e2 = this;
      if (a3 && (!(d2 = l[a3]) || !d2.decode))
        return k.reject(new Error("Not supported protocol:" + a3));
      var f2 = { local: b2, protocolName: a3, protocol: d2 };
      return this._fire(new i("beforeimport", f2)), k.resolve(d2.decode(b2, this, c3)).then(function(a4) {
        return e2.importJson(a4), a4;
      });
    }, decodeData: function(a3, b2, c3) {
      var d2;
      if (a3 && (!(d2 = l[a3]) || !d2.decode))
        return k.reject(new Error("Not supported protocol:" + a3));
      var e2 = { local: b2, protocolName: a3, protocol: d2 };
      return this._fire(new i("beforeimport", e2)), k.resolve(d2.decode(b2, this, c3));
    } });
  } }, b[13] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19)), g = e.createClass("MindEvent", { constructor: function(a3, b2, c3) {
      b2 = b2 || {}, b2.getType && b2.getType() == "ShapeEvent" ? (this.kityEvent = b2, this.originEvent = b2.originEvent) : b2.target && b2.preventDefault ? this.originEvent = b2 : e.Utils.extend(this, b2), this.type = a3, this._canstop = c3 || false;
    }, getPosition: function(a3) {
      if (this.kityEvent)
        return a3 && a3 != "minder" ? this.kityEvent.getPosition.call(this.kityEvent, a3) : this.kityEvent.getPosition(this.minder.getRenderContainer());
    }, getTargetNode: function() {
      var a3 = this.kityEvent && this.kityEvent.targetShape;
      if (!a3)
        return null;
      for (; !a3.minderNode && a3.container; )
        a3 = a3.container;
      var b2 = a3.minderNode;
      return b2 && a3.getOpacity() < 1 ? null : b2 || null;
    }, stopPropagation: function() {
      this._stoped = true;
    }, stopPropagationImmediately: function() {
      this._immediatelyStoped = true, this._stoped = true;
    }, shouldStopPropagation: function() {
      return this._canstop && this._stoped;
    }, shouldStopPropagationImmediately: function() {
      return this._canstop && this._immediatelyStoped;
    }, preventDefault: function() {
      this.originEvent.preventDefault();
    }, isRightMB: function() {
      var a3 = false;
      return !!this.originEvent && ("which" in this.originEvent ? a3 = this.originEvent.which == 3 : "button" in this.originEvent && (a3 = this.originEvent.button == 2), a3);
    }, getKeyCode: function() {
      var a3 = this.originEvent;
      return a3.keyCode || a3.which;
    } });
    f.registerInitHook(function(a3) {
      this._initEvents();
    }), e.extendClass(f, { _initEvents: function() {
      this._eventCallbacks = {};
    }, _resetEvents: function() {
      this._initEvents(), this._bindEvents();
    }, _bindEvents: function() {
      this._paper.on("click dblclick mousedown contextmenu mouseup mousemove mouseover mousewheel DOMMouseScroll touchstart touchmove touchend dragenter dragleave drop", this._firePharse.bind(this)), window && window.addEventListener("resize", this._firePharse.bind(this));
    }, dispatchKeyEvent: function(a3) {
      this._firePharse(a3);
    }, _firePharse: function(a3) {
      var b2, c3, d2;
      a3.type == "DOMMouseScroll" && (a3.type = "mousewheel", a3.wheelDelta = a3.originEvent.wheelDelta = -10 * a3.originEvent.detail, a3.wheelDeltaX = a3.originEvent.mozMovementX, a3.wheelDeltaY = a3.originEvent.mozMovementY), b2 = new g("before" + a3.type, a3, true), this._fire(b2) || (c3 = new g("pre" + a3.type, a3, true), d2 = new g(a3.type, a3, true), (this._fire(c3) || this._fire(d2)) && this._fire(new g("after" + a3.type, a3, false)));
    }, _interactChange: function(a3) {
      var b2 = this;
      b2._interactScheduled || (setTimeout(function() {
        b2._fire(new g("interactchange")), b2._interactScheduled = false;
      }, 100), b2._interactScheduled = true);
    }, _listen: function(a3, b2) {
      (this._eventCallbacks[a3] || (this._eventCallbacks[a3] = [])).push(b2);
    }, _fire: function(a3) {
      a3.minder = this;
      var b2 = this.getStatus(), c3 = this._eventCallbacks[a3.type.toLowerCase()] || [];
      if (b2 && (c3 = c3.concat(this._eventCallbacks[b2 + "." + a3.type.toLowerCase()] || [])), c3.length !== 0) {
        for (var d2 = (this.getStatus(), 0); d2 < c3.length && (c3[d2].call(this, a3), !a3.shouldStopPropagationImmediately()); d2++)
          ;
        return a3.shouldStopPropagation();
      }
    }, on: function(a3, b2) {
      var c3 = this;
      return a3.split(/\s+/).forEach(function(a4) {
        c3._listen(a4.toLowerCase(), b2);
      }), this;
    }, off: function(a3, b2) {
      var c3, d2, e2, f2, g2 = a3.split(/\s+/);
      for (c3 = 0; c3 < g2.length; c3++)
        if (e2 = this._eventCallbacks[g2[c3].toLowerCase()]) {
          for (f2 = null, d2 = 0; d2 < e2.length; d2++)
            e2[d2] == b2 && (f2 = d2);
          f2 !== null && e2.splice(f2, 1);
        }
    }, fire: function(a3, b2) {
      var c3 = new g(a3, b2);
      return this._fire(c3), this;
    } }), d.exports = g;
  } }, b[14] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(19);
    f.registerInitHook(function() {
      this.on("beforemousedown", function(a3) {
        this.focus(), a3.preventDefault();
      }), this.on("paperrender", function() {
        this.focus();
      });
    }), e.extendClass(f, { focus: function() {
      if (!this.isFocused()) {
        this._renderTarget.classList.add("focus"), this.renderNodeBatch(this.getSelectedNodes());
      }
      return this.fire("focus"), this;
    }, blur: function() {
      if (this.isFocused()) {
        this._renderTarget.classList.remove("focus"), this.renderNodeBatch(this.getSelectedNodes());
      }
      return this.fire("blur"), this;
    }, isFocused: function() {
      var a3 = this._renderTarget;
      return a3 && a3.classList.contains("focus");
    } });
  } }, b[15] = { value: function(a2, b2, c2) {
    var d = { Backspace: 8, Tab: 9, Enter: 13, Shift: 16, Control: 17, Alt: 18, CapsLock: 20, Esc: 27, Spacebar: 32, PageUp: 33, PageDown: 34, End: 35, Home: 36, Insert: 45, Left: 37, Up: 38, Right: 39, Down: 40, direction: { 37: 1, 38: 1, 39: 1, 40: 1 }, Del: 46, NumLock: 144, Cmd: 91, CmdFF: 224, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, "`": 192, "=": 187, "-": 189, "/": 191, ".": 190, controlKeys: { 16: 1, 17: 1, 18: 1, 20: 1, 91: 1, 224: 1 }, notContentChange: { 13: 1, 9: 1, 33: 1, 34: 1, 35: 1, 36: 1, 16: 1, 17: 1, 18: 1, 20: 1, 91: 1, 37: 1, 38: 1, 39: 1, 40: 1, 113: 1, 114: 1, 115: 1, 144: 1, 27: 1 }, isSelectedNodeKey: { 37: 1, 38: 1, 39: 1, 40: 1, 13: 1, 9: 1 } };
    for (var e in d)
      d.hasOwnProperty(e) && (d[e.toLowerCase()] = d[e]);
    var f = "a".charCodeAt(0);
    "abcdefghijklmnopqrstuvwxyz".split("").forEach(function(a3) {
      d[a3] = a3.charCodeAt(0) - f + 65;
    });
    var g = 9;
    do {
      d[g.toString()] = g + 48;
    } while (--g);
    c2.exports = d;
  } }, b[16] = { value: function(a2, c2, d) {
    function e(a3, b2, c3) {
      b2.split(" ").forEach(function(b3) {
        a3.addEventListener(b3, c3, false);
      });
    }
    var f = b.r(17), g = (b.r(33), b.r(19));
    g.registerInitHook(function(a3) {
      this.setDefaultOptions({ enableKeyReceiver: true }), this.getOption("enableKeyReceiver") && this.on("paperrender", function() {
        this._initKeyReceiver();
      });
    }), f.extendClass(g, { _initKeyReceiver: function() {
      if (!this._keyReceiver) {
        var a3 = this._keyReceiver = document.createElement("input");
        a3.classList.add("km-receiver");
        this._renderTarget.appendChild(a3);
        var b2 = this;
        e(a3, "keydown keyup keypress copy paste blur focus input", function(c3) {
          switch (c3.type) {
            case "blur":
              b2.blur();
              break;
            case "focus":
              b2.focus();
              break;
            case "input":
              a3.value = null;
          }
          b2._firePharse(c3), c3.preventDefault();
        }), this.on("focus", function() {
          a3.select(), a3.focus();
        }), this.on("blur", function() {
          a3.blur();
        }), this.isFocused() && (a3.select(), a3.focus());
      }
    } });
  } }, b[17] = { value: function(a2, b2, c2) {
    c2.exports = window.kity;
  } }, b[18] = { value: function(a2, c2, d) {
    function e(a3, b2) {
      k[a3] = b2, f = f || a3;
    }
    var f, g = b.r(17), h = b.r(33), i = b.r(19), j = b.r(21), k = (b.r(13), b.r(9), {}), l = g.createClass("Layout", { doLayout: function(a3, b2) {
      throw new Error("Not Implement: Layout.doLayout()");
    }, align: function(a3, b2, c3) {
      var d2 = this;
      c3 = c3 || 0, a3.forEach(function(a4) {
        var e2 = d2.getTreeBox([a4]), f2 = a4.getLayoutTransform();
        switch (b2) {
          case "left":
            return f2.translate(c3 - e2.left, 0);
          case "right":
            return f2.translate(c3 - e2.right, 0);
          case "top":
            return f2.translate(0, c3 - e2.top);
          case "bottom":
            return f2.translate(0, c3 - e2.bottom);
        }
      });
    }, stack: function(a3, b2, c3) {
      var d2 = this, e2 = 0;
      return c3 = c3 || function(a4, b3, c4) {
        return a4.getStyle({ x: "margin-right", y: "margin-bottom" }[c4]) + b3.getStyle({ x: "margin-left", y: "margin-top" }[c4]);
      }, a3.forEach(function(a4, f2, g2) {
        var h2 = d2.getTreeBox([a4]), i2 = { x: h2.width, y: h2.height }[b2], j2 = { x: h2.left, y: h2.top }[b2], k2 = a4.getLayoutTransform();
        b2 == "x" ? k2.translate(e2 - j2, 0) : k2.translate(0, e2 - j2), e2 += i2, g2[f2 + 1] && (e2 += c3(a4, g2[f2 + 1], b2));
      }), e2;
    }, move: function(a3, b2, c3) {
      a3.forEach(function(a4) {
        a4.getLayoutTransform().translate(b2, c3);
      });
    }, getBranchBox: function(a3) {
      var b2, c3, d2, e2, f2 = new g.Box();
      for (b2 = 0; b2 < a3.length; b2++)
        c3 = a3[b2], d2 = c3.getLayoutTransform(), e2 = c3.getContentBox(), f2 = f2.merge(d2.transformBox(e2));
      return f2;
    }, getTreeBox: function(a3) {
      var b2, c3, d2, e2, f2 = new g.Box();
      for (a3 instanceof Array || (a3 = [a3]), b2 = 0; b2 < a3.length; b2++)
        c3 = a3[b2], d2 = c3.getLayoutTransform(), e2 = c3.getContentBox(), c3.isExpanded() && c3.children.length && (e2 = e2.merge(this.getTreeBox(c3.children))), f2 = f2.merge(d2.transformBox(e2));
      return f2;
    }, getOrderHint: function(a3) {
      return [];
    } });
    l.register = e, i.registerInitHook(function(a3) {
      this.refresh();
    }), h.extend(i, { getLayoutList: function() {
      return k;
    }, getLayoutInstance: function(a3) {
      var b2 = k[a3];
      if (!b2)
        throw new Error("Missing Layout: " + a3);
      return new b2();
    } }), g.extendClass(j, { getLayout: function() {
      var a3 = this.getData("layout");
      return a3 = a3 || (this.isRoot() ? f : this.parent.getLayout());
    }, setLayout: function(a3) {
      return a3 && (a3 == "inherit" ? this.setData("layout") : this.setData("layout", a3)), this;
    }, layout: function(a3) {
      return this.setLayout(a3).getMinder().layout(), this;
    }, getLayoutInstance: function() {
      return i.getLayoutInstance(this.getLayout());
    }, getOrderHint: function(a3) {
      return this.parent.getLayoutInstance().getOrderHint(this);
    }, getLayoutTransform: function() {
      return this._layoutTransform || new g.Matrix();
    }, getGlobalLayoutTransformPreview: function() {
      var a3 = this.parent ? this.parent.getLayoutTransform() : new g.Matrix(), b2 = this.getLayoutTransform(), c3 = this.getLayoutOffset();
      return c3 && (b2 = b2.clone().translate(c3.x, c3.y)), a3.merge(b2);
    }, getLayoutPointPreview: function() {
      return this.getGlobalLayoutTransformPreview().transformPoint(new g.Point());
    }, getGlobalLayoutTransform: function() {
      return this._globalLayoutTransform ? this._globalLayoutTransform : this.parent ? this.parent.getGlobalLayoutTransform() : new g.Matrix();
    }, setLayoutTransform: function(a3) {
      return this._layoutTransform = a3, this;
    }, setGlobalLayoutTransform: function(a3) {
      return this.getRenderContainer().setMatrix(this._globalLayoutTransform = a3), this;
    }, setVertexIn: function(a3) {
      this._vertexIn = a3;
    }, setVertexOut: function(a3) {
      this._vertexOut = a3;
    }, getVertexIn: function() {
      return this._vertexIn || new g.Point();
    }, getVertexOut: function() {
      return this._vertexOut || new g.Point();
    }, getLayoutVertexIn: function() {
      return this.getGlobalLayoutTransform().transformPoint(this.getVertexIn());
    }, getLayoutVertexOut: function() {
      return this.getGlobalLayoutTransform().transformPoint(this.getVertexOut());
    }, setLayoutVectorIn: function(a3) {
      return this._layoutVectorIn = a3, this;
    }, setLayoutVectorOut: function(a3) {
      return this._layoutVectorOut = a3, this;
    }, getLayoutVectorIn: function() {
      return this._layoutVectorIn || new g.Vector();
    }, getLayoutVectorOut: function() {
      return this._layoutVectorOut || new g.Vector();
    }, getLayoutBox: function() {
      return this.getGlobalLayoutTransform().transformBox(this.getContentBox());
    }, getLayoutPoint: function() {
      return this.getGlobalLayoutTransform().transformPoint(new g.Point());
    }, getLayoutOffset: function() {
      if (!this.parent)
        return new g.Point();
      var a3 = this.getData("layout_" + this.parent.getLayout() + "_offset");
      return a3 ? new g.Point(a3.x, a3.y) : new g.Point();
    }, setLayoutOffset: function(a3) {
      return this.parent ? (this.setData("layout_" + this.parent.getLayout() + "_offset", a3 ? { x: a3.x, y: a3.y } : void 0), this) : this;
    }, hasLayoutOffset: function() {
      return !!this.getData("layout_" + this.parent.getLayout() + "_offset");
    }, resetLayoutOffset: function() {
      return this.setLayoutOffset(null);
    }, getLayoutRoot: function() {
      return this.isLayoutRoot() ? this : this.parent.getLayoutRoot();
    }, isLayoutRoot: function() {
      return this.getData("layout") || this.isRoot();
    } }), g.extendClass(i, { layout: function() {
      function a3(b3, c4) {
        b3.isExpanded(), b3.children.forEach(function(b4) {
          a3(b4, c4);
        }), b3.getLayoutInstance().doLayout(b3, b3.getChildren(), c4);
      }
      var b2 = this.getOption("layoutAnimationDuration");
      this.getRoot().traverse(function(a4) {
        a4.setLayoutTransform(null);
      }), a3(this.getRoot(), 1), a3(this.getRoot(), 2);
      var c3 = this;
      return this.applyLayoutResult(this.getRoot(), b2, function() {
        setTimeout(function() {
          c3.fire("layoutallfinish");
        }, 0);
      }), this.fire("layout");
    }, refresh: function() {
      return this.getRoot().renderTree(), this.layout().fire("contentchange")._interactChange(), this;
    }, applyLayoutResult: function(a3, b2, c3) {
      function d2() {
        --i2 || c3 && c3();
      }
      function e2(a4, b3) {
        a4.setGlobalLayoutTransform(b3), h2.fire("layoutapply", { node: a4, matrix: b3 });
      }
      function f2(a4, c4) {
        var i3 = a4.getLayoutTransform().merge(c4.clone()), j2 = a4.getGlobalLayoutTransform() || new g.Matrix(), k2 = a4.getLayoutOffset();
        i3.translate(k2.x, k2.y), i3.m.e = Math.round(i3.m.e), i3.m.f = Math.round(i3.m.f), a4._layoutTimeline && (a4._layoutTimeline.stop(), a4._layoutTimeline = null), b2 ? a4._layoutTimeline = new g.Animator(j2, i3, e2).start(a4, b2, "ease").on("finish", function() {
          setTimeout(function() {
            e2(a4, i3), h2.fire("layoutfinish", { node: a4, matrix: i3 }), d2();
          }, 150);
        }) : (e2(a4, i3), h2.fire("layoutfinish", { node: a4, matrix: i3 }), d2());
        for (var l2 = 0; l2 < a4.children.length; l2++)
          f2(a4.children[l2], i3);
      }
      a3 = a3 || this.getRoot();
      var h2 = this, i2 = a3.getComplex();
      return i2 > 200 && (b2 = 0), f2(a3, a3.parent ? a3.parent.getGlobalLayoutTransform() : new g.Matrix()), this;
    } }), d.exports = l;
  } }, b[19] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = [], h = e.createClass("Minder", { constructor: function(a3) {
      this._options = f.extend({}, a3);
      for (var b2, c3 = g.slice(); c3.length; )
        typeof (b2 = c3.shift()) == "function" && b2.call(this, this._options);
      this.fire("finishInitHook");
    } });
    h.version = "1.4.43", h.registerInitHook = function(a3) {
      g.push(a3);
    }, d.exports = h;
  } }, b[20] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = b.r(19), h = {};
    c2.register = function(a3, b2) {
      h[a3] = b2;
    }, g.registerInitHook(function() {
      this._initModules();
    }), e.extendClass(g, { _initModules: function() {
      var a3 = h, b2 = this._options.modules || f.keys(a3);
      this._commands = {}, this._query = {}, this._modules = {}, this._rendererClasses = {};
      var c3, d2, e2, g2, i, j, k, l = this;
      for (c3 = 0; c3 < b2.length; c3++)
        if (d2 = b2[c3], a3[d2] && (g2 = typeof a3[d2] == "function" ? a3[d2].call(l) : a3[d2], this._modules[d2] = g2, g2)) {
          g2.defaultOptions && l.setDefaultOptions(g2.defaultOptions), g2.init && g2.init.call(l, this._options), i = g2.commands;
          for (d2 in i)
            this._commands[d2.toLowerCase()] = new i[d2]();
          if (j = g2.events)
            for (e2 in j)
              l.on(e2, j[e2]);
          if (k = g2.renderers)
            for (e2 in k)
              this._rendererClasses[e2] = this._rendererClasses[e2] || [], f.isArray(k[e2]) ? this._rendererClasses[e2] = this._rendererClasses[e2].concat(k[e2]) : this._rendererClasses[e2].push(k[e2]);
          g2.commandShortcutKeys && this.addCommandShortcutKeys(g2.commandShortcutKeys);
        }
    }, _garbage: function() {
      for (this.clearSelect(); this._root.getChildren().length; )
        this._root.removeChild(0);
    }, destroy: function() {
      var a3 = this._modules;
      this._resetEvents(), this._garbage();
      for (var b2 in a3)
        a3[b2].destroy && a3[b2].destroy.call(this);
    }, reset: function() {
      var a3 = this._modules;
      this._garbage();
      for (var b2 in a3)
        a3[b2].reset && a3[b2].reset.call(this);
    } });
  } }, b[21] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = b.r(19), h = e.createClass("MinderNode", { constructor: function(a3) {
      this.parent = null, this.root = this, this.children = [], this.data = { id: f.guid(), created: +new Date() }, this.initContainers(), f.isString(a3) ? this.setText(a3) : f.isObject(a3) && f.extend(this.data, a3);
    }, initContainers: function() {
      this.rc = new e.Group().setId(f.uuid("minder_node")), this.rc.minderNode = this;
    }, isRoot: function() {
      return this.root === this;
    }, isLeaf: function() {
      return this.children.length === 0;
    }, getRoot: function() {
      return this.root || this;
    }, getParent: function() {
      return this.parent;
    }, getSiblings: function() {
      var a3 = this.parent.children, b2 = [], c3 = this;
      return a3.forEach(function(a4) {
        a4 != c3 && b2.push(a4);
      }), b2;
    }, getLevel: function() {
      for (var a3 = 0, b2 = this.parent; b2; )
        a3++, b2 = b2.parent;
      return a3;
    }, getComplex: function() {
      var a3 = 0;
      return this.traverse(function() {
        a3++;
      }), a3;
    }, getType: function(a3) {
      return this.type = ["root", "main", "sub"][Math.min(this.getLevel(), 2)], this.type;
    }, isAncestorOf: function(a3) {
      for (var b2 = a3.parent; b2; ) {
        if (b2 == this)
          return true;
        b2 = b2.parent;
      }
      return false;
    }, getData: function(a3) {
      return a3 ? this.data[a3] : this.data;
    }, setData: function(a3, b2) {
      if (typeof a3 == "object") {
        var c3 = a3;
        for (a3 in c3)
          c3.hasOwnProperty(a3) && (this.data[a3] = c3[a3]);
      } else
        this.data[a3] = b2;
      return this;
    }, setText: function(a3) {
      return this.data.text = a3;
    }, getText: function() {
      return this.data.text || null;
    }, preTraverse: function(a3, b2) {
      var c3 = this.getChildren();
      b2 || a3(this);
      for (var d2 = 0; d2 < c3.length; d2++)
        c3[d2].preTraverse(a3);
    }, postTraverse: function(a3, b2) {
      for (var c3 = this.getChildren(), d2 = 0; d2 < c3.length; d2++)
        c3[d2].postTraverse(a3);
      b2 || a3(this);
    }, traverse: function(a3, b2) {
      return this.postTraverse(a3, b2);
    }, getChildren: function() {
      return this.children;
    }, getIndex: function() {
      return this.parent ? this.parent.children.indexOf(this) : -1;
    }, insertChild: function(a3, b2) {
      b2 === void 0 && (b2 = this.children.length), a3.parent && a3.parent.removeChild(a3), a3.parent = this, a3.root = this.root, this.children.splice(b2, 0, a3);
    }, appendChild: function(a3) {
      return this.insertChild(a3);
    }, prependChild: function(a3) {
      return this.insertChild(a3, 0);
    }, removeChild: function(a3) {
      var b2, c3 = a3;
      a3 instanceof h && (c3 = this.children.indexOf(a3)), c3 >= 0 && (b2 = this.children.splice(c3, 1)[0], b2.parent = null, b2.root = b2);
    }, clearChildren: function() {
      this.children = [];
    }, getChild: function(a3) {
      return this.children[a3];
    }, getRenderContainer: function() {
      return this.rc;
    }, getCommonAncestor: function(a3) {
      return h.getCommonAncestor(this, a3);
    }, contains: function(a3) {
      return this == a3 || this.isAncestorOf(a3);
    }, clone: function() {
      var a3 = new h();
      return a3.data = f.clone(this.data), this.children.forEach(function(b2) {
        a3.appendChild(b2.clone());
      }), a3;
    }, compareTo: function(a3) {
      if (!f.comparePlainObject(this.data, a3.data))
        return false;
      if (!f.comparePlainObject(this.temp, a3.temp))
        return false;
      if (this.children.length != a3.children.length)
        return false;
      for (var b2 = 0; this.children[b2]; ) {
        if (!this.children[b2].compareTo(a3.children[b2]))
          return false;
        b2++;
      }
      return true;
    }, getMinder: function() {
      return this.getRoot().minder;
    } });
    h.getCommonAncestor = function(a3, b2) {
      if (a3 instanceof Array)
        return h.getCommonAncestor.apply(this, a3);
      switch (arguments.length) {
        case 1:
          return a3.parent || a3;
        case 2:
          if (a3.isAncestorOf(b2))
            return a3;
          if (b2.isAncestorOf(a3))
            return b2;
          for (var c3 = a3.parent; c3 && !c3.isAncestorOf(b2); )
            c3 = c3.parent;
          return c3;
        default:
          return Array.prototype.reduce.call(arguments, function(a4, b3) {
            return h.getCommonAncestor(a4, b3);
          }, a3);
      }
    }, e.extendClass(g, { getRoot: function() {
      return this._root;
    }, setRoot: function(a3) {
      this._root = a3, a3.minder = this;
    }, getAllNode: function() {
      var a3 = [];
      return this.getRoot().traverse(function(b2) {
        a3.push(b2);
      }), a3;
    }, getNodeById: function(a3) {
      return this.getNodesById([a3])[0];
    }, getNodesById: function(a3) {
      var b2 = this.getAllNode(), c3 = [];
      return b2.forEach(function(b3) {
        a3.indexOf(b3.getData("id")) != -1 && c3.push(b3);
      }), c3;
    }, createNode: function(a3, b2, c3) {
      var d2 = new h(a3);
      return this.fire("nodecreate", { node: d2, parent: b2, index: c3 }), this.appendNode(d2, b2, c3), d2;
    }, appendNode: function(a3, b2, c3) {
      return b2 && b2.insertChild(a3, c3), this.attachNode(a3), this;
    }, removeNode: function(a3) {
      a3.parent && (a3.parent.removeChild(a3), this.detachNode(a3), this.fire("noderemove", { node: a3 }));
    }, attachNode: function(a3) {
      var b2 = this.getRenderContainer();
      a3.traverse(function(a4) {
        a4.attached = true, b2.addShape(a4.getRenderContainer());
      }), b2.addShape(a3.getRenderContainer()), this.fire("nodeattach", { node: a3 });
    }, detachNode: function(a3) {
      var b2 = this.getRenderContainer();
      a3.traverse(function(a4) {
        a4.attached = false, b2.removeShape(a4.getRenderContainer());
      }), this.fire("nodedetach", { node: a3 });
    }, getMinderTitle: function() {
      return this.getRoot().getText();
    } }), d.exports = h;
  } }, b[22] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = b.r(19);
    g.registerInitHook(function(a3) {
      this._defaultOptions = {};
    }), e.extendClass(g, { setDefaultOptions: function(a3) {
      return f.extend(this._defaultOptions, a3), this;
    }, getOption: function(a3) {
      return a3 ? a3 in this._options ? this._options[a3] : this._defaultOptions[a3] : f.extend({}, this._defaultOptions, this._options);
    }, setOption: function(a3, b2) {
      this._options[a3] = b2;
    } });
  } }, b[23] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = b.r(19);
    g.registerInitHook(function() {
      this._initPaper();
    }), e.extendClass(g, { _initPaper: function() {
      this._paper = new e.Paper(), this._paper._minder = this, this._paper.getNode().ondragstart = function(a3) {
        a3.preventDefault();
      }, this._paper.shapeNode.setAttribute("transform", "translate(0.5, 0.5)"), this._addRenderContainer(), this.setRoot(this.createNode()), this._options.renderTo && this.renderTo(this._options.renderTo);
    }, _addRenderContainer: function() {
      this._rc = new e.Group().setId(f.uuid("minder")), this._paper.addShape(this._rc);
    }, renderTo: function(a3) {
      if (typeof a3 == "string" && (a3 = document.querySelector(a3)), a3) {
        if (a3.tagName.toLowerCase() == "script") {
          var b2 = document.createElement("div");
          b2.id = a3.id, b2.class = a3.class, a3.parentNode.insertBefore(b2, a3), a3.parentNode.removeChild(a3), a3 = b2;
        }
        a3.classList.add("km-view"), this._paper.renderTo(this._renderTarget = a3), this._bindEvents(), this.fire("paperrender");
      }
      return this;
    }, getRenderContainer: function() {
      return this._rc;
    }, getPaper: function() {
      return this._paper;
    }, getRenderTarget: function() {
      return this._renderTarget;
    } });
  } }, b[24] = { value: function(a2, c2, d) {
    function e(a3, b2, c3, d2) {
      return c3 = a3.createNode(b2.data, c3, d2), b2.children.forEach(function(b3, d3) {
        e(a3, b3, c3, d3);
      }), c3;
    }
    function f(a3, b2) {
      var c3 = b2.path.split("/");
      c3.shift();
      var d2, f2 = c3.shift();
      if (f2 == "root") {
        var g2 = c3.indexOf("data");
        if (g2 > -1) {
          f2 = "data";
          var h2 = c3.splice(g2 + 1);
          b2.dataPath = h2;
        } else
          f2 = "node";
        d2 = a3.getRoot();
        for (var i, j; i = c3.shift(); )
          i != "children" && (j !== void 0 && (d2 = d2.getChild(j)), j = +i);
        b2.index = j, b2.node = d2;
      }
      switch (b2.express = [f2, b2.op].join(".")) {
        case "theme.replace":
          a3.useTheme(b2.value);
          break;
        case "template.replace":
          a3.useTemplate(b2.value);
          break;
        case "node.add":
          e(a3, b2.value, b2.node, b2.index).renderTree(), a3.layout();
          break;
        case "node.remove":
          a3.removeNode(b2.node.getChild(b2.index)), a3.layout();
          break;
        case "data.add":
        case "data.replace":
        case "data.remove":
          var k, l = b2.node.data;
          for (c3 = b2.dataPath.slice(); l && c3.length > 1; )
            k = c3.shift(), k in l ? l = l[k] : b2.op != "remove" && (l = l[k] = {});
          l && (k = c3.shift(), l[k] = b2.value), k == "expandState" ? d2.renderTree() : d2.render(), a3.layout();
      }
      a3.fire("patch", { patch: b2 });
    }
    var g = b.r(17), h = b.r(19);
    g.extendClass(h, { applyPatches: function(a3) {
      for (var b2 = 0; b2 < a3.length; b2++)
        f(this, a3[b2]);
      return this.fire("contentchange"), this;
    } });
  } }, b[25] = { value: function(a2, b2, c2) {
    var d = 0, e = 1, f = 2, g = function(a3) {
      if (!(this instanceof g))
        return new g(a3);
      this.id = "Thenable/1.0.7", this.state = d, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], typeof a3 == "function" && a3.call(this, this.fulfill.bind(this), this.reject.bind(this));
    };
    g.prototype = { fulfill: function(a3) {
      return h(this, e, "fulfillValue", a3);
    }, reject: function(a3) {
      return h(this, f, "rejectReason", a3);
    }, then: function(a3, b3) {
      var c3 = this, d2 = new g();
      return c3.onFulfilled.push(k(a3, d2, "fulfill")), c3.onRejected.push(k(b3, d2, "reject")), i(c3), d2;
    } }, g.all = function(a3) {
      return new g(function(b3, c3) {
        var d2 = a3.length, e2 = 0, f2 = 0, g2 = [];
        for (d2 === 0 && b3(g2); e2 < d2; )
          a3[e2].then(function(a4) {
            g2.push(a4), ++f2 === d2 && b3(g2);
          }, function(a4) {
            c3(a4);
          }), e2++;
      });
    };
    var h = function(a3, b3, c3, e2) {
      return a3.state === d && (a3.state = b3, a3[c3] = e2, i(a3)), a3;
    }, i = function(a3) {
      a3.state === e ? j(a3, "onFulfilled", a3.fulfillValue) : a3.state === f && j(a3, "onRejected", a3.rejectReason);
    }, j = function(a3, b3, c3) {
      if (a3[b3].length !== 0) {
        var d2 = a3[b3];
        a3[b3] = [];
        var e2 = function() {
          for (var a4 = 0; a4 < d2.length; a4++)
            d2[a4](c3);
        };
        typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick(e2) : typeof setImmediate == "function" ? setImmediate(e2) : setTimeout(e2, 0);
      }
    }, k = function(a3, b3, c3) {
      return function(d2) {
        if (typeof a3 != "function")
          b3[c3].call(b3, d2);
        else {
          var e2;
          try {
            e2 = d2 instanceof g ? d2.then(a3) : a3(d2);
          } catch (a4) {
            return void b3.reject(a4);
          }
          l(b3, e2);
        }
      };
    }, l = function(a3, b3) {
      if (a3 === b3)
        return void a3.reject(new TypeError("cannot resolve promise with itself"));
      var c3;
      if (typeof b3 == "object" && b3 !== null || typeof b3 == "function")
        try {
          c3 = b3.then;
        } catch (b4) {
          return void a3.reject(b4);
        }
      if (typeof c3 != "function")
        a3.fulfill(b3);
      else {
        var d2 = false;
        try {
          c3.call(b3, function(c4) {
            d2 || (d2 = true, c4 === b3 ? a3.reject(new TypeError("circular thenable chain")) : l(a3, c4));
          }, function(b4) {
            d2 || (d2 = true, a3.reject(b4));
          });
        } catch (b4) {
          d2 || a3.reject(b4);
        }
      }
    };
    g.resolve = function(a3) {
      return new g(function(b3) {
        b3(a3);
      });
    }, g.reject = function(a3) {
      return new g(function(b3, c3) {
        c3(a3);
      });
    }, c2.exports = g;
  } }, b[26] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(19);
    b.r(13);
    f.registerInitHook(function(a3) {
      a3.readOnly && this.setDisabled();
    }), e.extendClass(f, { disable: function() {
      var a3 = this;
      a3.bkqueryCommandState = a3.queryCommandState, a3.bkqueryCommandValue = a3.queryCommandValue, a3.queryCommandState = function(b2) {
        var c3 = this._getCommand(b2);
        return c3 && c3.enableReadOnly ? a3.bkqueryCommandState.apply(a3, arguments) : -1;
      }, a3.queryCommandValue = function(b2) {
        var c3 = this._getCommand(b2);
        return c3 && c3.enableReadOnly ? a3.bkqueryCommandValue.apply(a3, arguments) : null;
      }, this.setStatus("readonly"), a3._interactChange();
    }, enable: function() {
      var a3 = this;
      a3.bkqueryCommandState && (a3.queryCommandState = a3.bkqueryCommandState, delete a3.bkqueryCommandState), a3.bkqueryCommandValue && (a3.queryCommandValue = a3.bkqueryCommandValue, delete a3.bkqueryCommandValue), this.setStatus("normal"), a3._interactChange();
    } });
  } }, b[27] = { value: function(a2, c2, d) {
    function e() {
      function a3(a4, b2) {
        var c3 = [];
        ["center", "left", "right", "top", "bottom", "outline", "outside"].forEach(function(a5) {
          var d2 = "before" + a5, e2 = "after" + a5;
          b2[d2] && (c3 = c3.concat(b2[d2])), b2[a5] && (c3 = c3.concat(b2[a5])), b2[e2] && (c3 = c3.concat(b2[e2]));
        }), a4._renderers = c3.map(function(b3) {
          return new b3(a4);
        });
      }
      return { renderNodeBatch: function(b2) {
        var c3, d2, e2, g2, h2 = this._rendererClasses, i2 = [], j = 0;
        if (b2.length) {
          for (d2 = 0; d2 < b2.length; d2++)
            g2 = b2[d2], g2._renderers || a3(g2, h2), g2._contentBox = new f.Box(), this.fire("beforerender", { node: g2 });
          for (j = b2[0]._renderers.length, c3 = 0; c3 < j; c3++) {
            for (d2 = 0; d2 < b2.length; d2++)
              typeof i2[d2] == "function" && (i2[d2] = i2[d2]()), i2[d2] instanceof f.Box || (i2[d2] = new f.Box(i2[d2]));
            for (d2 = 0; d2 < b2.length; d2++)
              g2 = b2[d2], e2 = g2._renderers[c3], i2[d2] && (g2._contentBox = g2._contentBox.merge(i2[d2]), e2.contentBox = i2[d2]), e2.shouldRender(g2) ? (e2.getRenderShape() || (e2.setRenderShape(e2.create(g2)), e2.bringToBack ? g2.getRenderContainer().prependShape(e2.getRenderShape()) : g2.getRenderContainer().appendShape(e2.getRenderShape())), e2.getRenderShape().setVisible(true), i2[d2] = e2.update(e2.getRenderShape(), g2, g2._contentBox)) : e2.getRenderShape() && (e2.getRenderShape().setVisible(false), i2[d2] = null);
          }
          for (d2 = 0; d2 < b2.length; d2++)
            this.fire("noderender", { node: b2[d2] });
        }
      }, renderNode: function(b2) {
        var c3, d2 = this._rendererClasses;
        b2._renderers || a3(b2, d2), this.fire("beforerender", { node: b2 }), b2._contentBox = new f.Box(), b2._renderers.forEach(function(a4) {
          a4.shouldRender(b2) ? (a4.getRenderShape() || (a4.setRenderShape(a4.create(b2)), a4.bringToBack ? b2.getRenderContainer().prependShape(a4.getRenderShape()) : b2.getRenderContainer().appendShape(a4.getRenderShape())), a4.getRenderShape().setVisible(true), c3 = a4.update(a4.getRenderShape(), b2, b2._contentBox), typeof c3 == "function" && (c3 = c3()), c3 && (b2._contentBox = b2._contentBox.merge(c3), a4.contentBox = c3)) : a4.getRenderShape() && a4.getRenderShape().setVisible(false);
        }), this.fire("noderender", { node: b2 });
      } };
    }
    var f = b.r(17), g = b.r(19), h = b.r(21), i = f.createClass("Renderer", { constructor: function(a3) {
      this.node = a3;
    }, create: function(a3) {
      throw new Error("Not implement: Renderer.create()");
    }, shouldRender: function(a3) {
      return true;
    }, watchChange: function(a3) {
      this.watchingData === void 0 || this.watchingData, this.watchingData = a3;
    }, shouldDraw: function(a3) {
      return true;
    }, update: function(a3, b2, c3) {
      return this.shouldDraw() && this.draw(a3, b2), this.place(a3, b2, c3);
    }, draw: function(a3, b2) {
      throw new Error("Not implement: Renderer.draw()");
    }, place: function(a3, b2, c3) {
      throw new Error("Not implement: Renderer.place()");
    }, getRenderShape: function() {
      return this._renderShape || null;
    }, setRenderShape: function(a3) {
      this._renderShape = a3;
    } });
    f.extendClass(g, e()), f.extendClass(h, { render: function() {
      if (this.attached)
        return this.getMinder().renderNode(this), this;
    }, renderTree: function() {
      if (this.attached) {
        var a3 = [];
        return this.traverse(function(b2) {
          a3.push(b2);
        }), this.getMinder().renderNodeBatch(a3), this;
      }
    }, getRenderer: function(a3) {
      var b2 = this._renderers;
      if (!b2)
        return null;
      for (var c3 = 0; c3 < b2.length; c3++)
        if (b2[c3].getType() == a3)
          return b2[c3];
      return null;
    }, getContentBox: function() {
      return this.parent && this.parent.isCollapsed() ? new f.Box() : this._contentBox || new f.Box();
    }, getRenderBox: function(a3, b2) {
      var c3 = a3 && this.getRenderer(a3), d2 = c3 ? c3.contentBox : this.getContentBox();
      return f.Matrix.getCTM(this.getRenderContainer(), b2 || "paper").transformBox(d2);
    } }), d.exports = i;
  } }, b[28] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = b.r(19), h = b.r(21);
    g.registerInitHook(function() {
      this._initSelection();
    }), e.extendClass(g, { _initSelection: function() {
      this._selectedNodes = [];
    }, renderChangedSelection: function(a3) {
      var b2 = this.getSelectedNodes(), c3 = [];
      for (b2.forEach(function(b3) {
        a3.indexOf(b3) == -1 && c3.push(b3);
      }), a3.forEach(function(a4) {
        b2.indexOf(a4) == -1 && c3.push(a4);
      }), c3.length && (this._interactChange(), this.fire("selectionchange")); c3.length; )
        c3.shift().render();
    }, getSelectedNodes: function() {
      return this._selectedNodes;
    }, getSelectedNode: function() {
      return this.getSelectedNodes()[0] || null;
    }, removeAllSelectedNodes: function() {
      var a3 = this._selectedNodes.splice(0);
      return this._selectedNodes = [], this.renderChangedSelection(a3), this.fire("selectionclear");
    }, removeSelectedNodes: function(a3) {
      var b2 = this, c3 = this._selectedNodes.slice(0);
      return a3 = f.isArray(a3) ? a3 : [a3], a3.forEach(function(a4) {
        var c4;
        (c4 = b2._selectedNodes.indexOf(a4)) !== -1 && b2._selectedNodes.splice(c4, 1);
      }), this.renderChangedSelection(c3), this;
    }, select: function(a3, b2) {
      var c3 = this.getSelectedNodes().slice(0);
      b2 && (this._selectedNodes = []);
      var d2 = this;
      return a3 = f.isArray(a3) ? a3 : [a3], a3.forEach(function(a4) {
        d2._selectedNodes.indexOf(a4) === -1 && d2._selectedNodes.unshift(a4);
      }), this.renderChangedSelection(c3), this;
    }, selectById: function(a3, b2) {
      a3 = f.isArray(a3) ? a3 : [a3];
      var c3 = this.getNodesById(a3);
      return this.select(c3, b2);
    }, toggleSelect: function(a3) {
      return f.isArray(a3) ? a3.forEach(this.toggleSelect.bind(this)) : a3.isSelected() ? this.removeSelectedNodes(a3) : this.select(a3), this;
    }, isSingleSelect: function() {
      return this._selectedNodes.length == 1;
    }, getSelectedAncestors: function(a3) {
      function b2(a4, b3) {
        for (var c4 = a4.length - 1; c4 >= 0; --c4)
          if (a4[c4].isAncestorOf(b3))
            return true;
        return false;
      }
      var c3, d2 = this.getSelectedNodes().slice(0), e2 = [], f2 = d2.indexOf(this.getRoot());
      for (~f2 && !a3 && d2.splice(f2, 1), d2.sort(function(a4, b3) {
        return a4.getLevel() - b3.getLevel();
      }); c3 = d2.pop(); )
        b2(d2, c3) || e2.push(c3);
      return e2;
    } }), e.extendClass(h, { isSelected: function() {
      var a3 = this.getMinder();
      return a3 && a3.getSelectedNodes().indexOf(this) != -1;
    } });
  } }, b[29] = { value: function(a2, c2, d) {
    function e(a3) {
      var b2 = 4096, c3 = 8192, d2 = 16384, e2 = 0;
      return typeof a3 == "string" ? a3.toLowerCase().split(/\+\s*/).forEach(function(a4) {
        switch (a4) {
          case "ctrl":
          case "cmd":
            e2 |= b2;
            break;
          case "alt":
            e2 |= c3;
            break;
          case "shift":
            e2 |= d2;
            break;
          default:
            e2 |= h[a4];
        }
      }) : ((a3.ctrlKey || a3.metaKey) && (e2 |= b2), a3.altKey && (e2 |= c3), a3.shiftKey && (e2 |= d2), e2 |= a3.keyCode), e2;
    }
    var f = b.r(17), g = b.r(33), h = b.r(15), i = b.r(19), j = b.r(13);
    f.extendClass(j, { isShortcutKey: function(a3) {
      var b2 = this.originEvent;
      return !!b2 && e(a3) == e(b2);
    } }), i.registerInitHook(function() {
      this._initShortcutKey();
    }), f.extendClass(i, { _initShortcutKey: function() {
      this._bindShortcutKeys();
    }, _bindShortcutKeys: function() {
      var a3 = this._shortcutKeys = {};
      this.on("keydown", function(b2) {
        for (var c3 in a3)
          if (a3.hasOwnProperty(c3) && b2.isShortcutKey(c3)) {
            var d2 = a3[c3];
            if (d2.__statusCondition && d2.__statusCondition != this.getStatus())
              return;
            d2(), b2.preventDefault();
          }
      });
    }, addShortcut: function(a3, b2) {
      var c3 = this._shortcutKeys;
      a3.split(/\|\s*/).forEach(function(a4) {
        var d2, e2 = a4.split("::");
        e2.length > 1 && (a4 = e2[1], d2 = e2[0], b2.__statusCondition = d2), c3[a4] = b2;
      });
    }, addCommandShortcutKeys: function(a3, b2) {
      var c3 = this._commandShortcutKeys || (this._commandShortcutKeys = {}), d2 = {};
      b2 ? d2[a3] = b2 : d2 = a3;
      var e2 = this;
      g.each(d2, function(a4, b3) {
        c3[b3] = a4, e2.addShortcut(a4, function() {
          e2.queryCommandState(b3) !== -1 && e2.execCommand(b3);
        });
      });
    }, getCommandShortcutKey: function(a3) {
      var b2 = this._commandShortcutKeys;
      return b2 && b2[a3] || null;
    }, supportClipboardEvent: function(a3) {
      return !!a3.ClipboardEvent;
    }(window) });
  } }, b[30] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(19), g = ~window.location.href.indexOf("status"), h = ~window.location.href.indexOf("trace");
    f.registerInitHook(function() {
      this._initStatus();
    }), e.extendClass(f, { _initStatus: function() {
      this._status = "normal", this._rollbackStatus = "normal";
    }, setStatus: function(a3, b2) {
      return this._status != "readonly" || b2 ? (a3 != this._status && (this._rollbackStatus = this._status, this._status = a3, this.fire("statuschange", { lastStatus: this._rollbackStatus, currentStatus: this._status }), g && (console.log(window.event.type, this._rollbackStatus, "->", this._status), h && console.trace())), this) : this;
    }, rollbackStatus: function() {
      this.setStatus(this._rollbackStatus);
    }, getRollbackStatus: function() {
      return this._rollbackStatus;
    }, getStatus: function() {
      return this._status;
    } });
  } }, b[31] = { value: function(a2, c2, d) {
    function e(a3, b2) {
      l[a3] = b2;
    }
    var f = b.r(17), g = b.r(33), h = b.r(19), i = b.r(9), j = b.r(21), k = b.r(20), l = {};
    c2.register = e, g.extend(h, { getTemplateList: function() {
      return l;
    } }), f.extendClass(h, function() {
      var a3 = h.prototype.getTheme;
      return { useTemplate: function(a4, b2) {
        this.setTemplate(a4), this.refresh(b2 || 800);
      }, getTemplate: function() {
        return this._template || "default";
      }, setTemplate: function(a4) {
        this._template = a4 || null;
      }, getTemplateSupport: function(a4) {
        var b2 = l[this.getTemplate()];
        return b2 && b2[a4];
      }, getTheme: function(b2) {
        return (this.getTemplateSupport("getTheme") || a3).call(this, b2);
      } };
    }()), f.extendClass(j, function() {
      var a3 = j.prototype.getLayout, b2 = j.prototype.getConnect;
      return { getLayout: function() {
        return (this.getMinder().getTemplateSupport("getLayout") || a3).call(this, this);
      }, getConnect: function() {
        return (this.getMinder().getTemplateSupport("getConnect") || b2).call(this, this);
      } };
    }()), k.register("TemplateModule", { commands: { template: f.createClass("TemplateCommand", { base: i, execute: function(a3, b2) {
      a3.useTemplate(b2), a3.execCommand("camera");
    }, queryValue: function(a3) {
      return a3.getTemplate() || "default";
    } }) } });
  } }, b[32] = { value: function(a2, c2, d) {
    function e(a3, b2) {
      m[a3] = b2;
    }
    var f = b.r(17), g = b.r(33), h = b.r(19), i = b.r(21), j = b.r(20), k = b.r(9), l = { left: function(a3) {
      return 3 in a3 && a3[3] || 1 in a3 && a3[1] || a3[0];
    }, right: function(a3) {
      return 1 in a3 && a3[1] || a3[0];
    }, top: function(a3) {
      return a3[0];
    }, bottom: function(a3) {
      return 2 in a3 && a3[2] || a3[0];
    } }, m = {};
    c2.register = e, g.extend(h, { getThemeList: function() {
      return m;
    } }), f.extendClass(h, { useTheme: function(a3) {
      return this.setTheme(a3), this.refresh(800), true;
    }, setTheme: function(a3) {
      if (a3 && !m[a3])
        throw new Error("Theme " + a3 + " not exists!");
      var b2 = this._theme;
      this._theme = a3 || null;
      var c3 = this.getRenderTarget();
      return c3 && (c3.classList.remove("km-theme-" + b2), a3 && c3.classList.add("km-theme-" + a3), c3.style.background = this.getStyle("background")), this.fire("themechange", { theme: a3 }), this;
    }, getTheme: function(a3) {
      return this._theme || this.getOption("defaultTheme") || "fresh-blue";
    }, getThemeItems: function(a3) {
      this.getTheme(a3);
      return m[this.getTheme(a3)];
    }, getStyle: function(a3, b2) {
      var c3, d2, e2, f2, h2 = this.getThemeItems(b2);
      if (a3 in h2)
        return h2[a3];
      if (c3 = a3.split("-"), c3.length < 2)
        return null;
      if (d2 = c3.pop(), (a3 = c3.join("-")) in h2) {
        if (e2 = h2[a3], g.isArray(e2) && (f2 = l[d2]))
          return f2(e2);
        if (!isNaN(e2))
          return e2;
      }
      return null;
    }, getNodeStyle: function(a3, b2) {
      var c3 = this.getStyle(a3.getType() + "-" + b2, a3);
      return c3 !== null ? c3 : this.getStyle(b2, a3);
    } }), f.extendClass(i, { getStyle: function(a3) {
      return this.getMinder().getNodeStyle(this, a3);
    } }), j.register("Theme", { defaultOptions: { defaultTheme: "fresh-blue" }, commands: { theme: f.createClass("ThemeCommand", { base: k, execute: function(a3, b2) {
      return a3.useTheme(b2);
    }, queryValue: function(a3) {
      return a3.getTheme() || "default";
    } }) } }), h.registerInitHook(function() {
      this.setTheme();
    });
  } }, b[33] = { value: function(a2, c2) {
    var d = b.r(17), e = {};
    c2.extend = d.Utils.extend.bind(d.Utils), c2.each = d.Utils.each.bind(d.Utils), c2.uuid = function(a3) {
      return e[a3] = e[a3] ? e[a3] + 1 : 1, a3 + e[a3];
    }, c2.guid = function() {
      return (1e6 * +new Date() + Math.floor(1e6 * Math.random())).toString(36);
    }, c2.trim = function(a3) {
      return a3.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, "");
    }, c2.keys = function(a3) {
      var b2 = [];
      for (var c3 in a3)
        a3.hasOwnProperty(c3) && b2.push(c3);
      return b2;
    }, c2.clone = function(a3) {
      return JSON.parse(JSON.stringify(a3));
    }, c2.comparePlainObject = function(a3, b2) {
      return JSON.stringify(a3) == JSON.stringify(b2);
    }, c2.encodeHtml = function(a3, b2) {
      return a3 ? a3.replace(b2 || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(a4, b3) {
        return b3 ? a4 : { "<": "&lt;", "&": "&amp;", '"': "&quot;", ">": "&gt;", "'": "&#39;" }[a4];
      }) : "";
    }, c2.clearWhiteSpace = function(a3) {
      return a3.replace(/[\u200b\t\r\n]/g, "");
    }, c2.each(["String", "Function", "Array", "Number", "RegExp", "Object"], function(a3) {
      var b2 = Object.prototype.toString;
      c2["is" + a3] = function(c3) {
        return b2.apply(c3) == "[object " + a3 + "]";
      };
    });
  } }, b[34] = { value: function(a2, c2, d) {
    d.exports = kityminder = b.r(35);
  } }, b[35] = { value: function(a2, c2, d) {
    var e = { version: b.r(19).version };
    b.r(33), e.Minder = b.r(19), e.Command = b.r(9), e.Node = b.r(21), b.r(22), b.r(8), e.Event = b.r(13), e.data = b.r(12), b.r(10), e.KeyMap = b.r(15), b.r(29), b.r(30), b.r(23), b.r(28), b.r(14), b.r(16), e.Module = b.r(20), b.r(26), e.Render = b.r(27), e.Connect = b.r(11), e.Layout = b.r(18), e.Theme = b.r(32), e.Template = b.r(31), e.Promise = b.r(25), b.r(7), b.r(24), b.r(42), b.r(43), b.r(44), b.r(45), b.r(46), b.r(47), b.r(48), b.r(50), b.r(49), b.r(51), b.r(52), b.r(53), b.r(54), b.r(55), b.r(56), b.r(57), b.r(58), b.r(59), b.r(60), b.r(61), b.r(62), b.r(63), b.r(64), b.r(68), b.r(65), b.r(67), b.r(66), b.r(40), b.r(36), b.r(37), b.r(38), b.r(39), b.r(41), b.r(75), b.r(78), b.r(77), b.r(76), b.r(78), b.r(80), b.r(79), b.r(0), b.r(1), b.r(2), b.r(3), b.r(4), b.r(5), b.r(6), b.r(69), b.r(73), b.r(70), b.r(72), b.r(71), b.r(74), d.exports = e;
  } }, b[36] = { value: function(a2, c2, d) {
    function e(a3) {
      function b2(a4) {
        var b3 = [], d3 = a4.getLayoutBox(), e3 = 5;
        return c3 == "x" ? (b3.push({ type: "up", node: a4, area: new f.Box({ x: d3.x, y: d3.top - a4.getStyle("margin-top") - e3, width: d3.width, height: a4.getStyle("margin-top") }), path: ["M", d3.x, d3.top - e3, "L", d3.right, d3.top - e3] }), b3.push({ type: "down", node: a4, area: new f.Box({ x: d3.x, y: d3.bottom + e3, width: d3.width, height: a4.getStyle("margin-bottom") }), path: ["M", d3.x, d3.bottom + e3, "L", d3.right, d3.bottom + e3] })) : (b3.push({ type: "up", node: a4, area: new f.Box({ x: d3.left - a4.getStyle("margin-left") - e3, y: d3.top, width: a4.getStyle("margin-left"), height: d3.height }), path: ["M", d3.left - e3, d3.top, "L", d3.left - e3, d3.bottom] }), b3.push({ type: "down", node: a4, area: new f.Box({ x: d3.right + e3, y: d3.top, width: a4.getStyle("margin-right"), height: d3.height }), path: ["M", d3.right + e3, d3.top, "L", d3.right + e3, d3.bottom] })), b3;
      }
      var c3 = a3 == "left" || a3 == "right" ? "x" : "y", d2 = a3 == "left" || a3 == "top" ? -1 : 1, e2 = { left: "right", right: "left", top: "bottom", bottom: "top", x: "y", y: "x" };
      g.register(a3, f.createClass({ base: g, doLayout: function(b3, g2) {
        var h = b3.getContentBox();
        if (c3 == "x" ? (b3.setVertexOut(new f.Point(h[a3], h.cy)), b3.setLayoutVectorOut(new f.Vector(d2, 0))) : (b3.setVertexOut(new f.Point(h.cx, h[a3])), b3.setLayoutVectorOut(new f.Vector(0, d2))), !g2.length)
          return false;
        g2.forEach(function(b4) {
          var g3 = b4.getContentBox();
          b4.setLayoutTransform(new f.Matrix()), c3 == "x" ? (b4.setVertexIn(new f.Point(g3[e2[a3]], g3.cy)), b4.setLayoutVectorIn(new f.Vector(d2, 0))) : (b4.setVertexIn(new f.Point(g3.cx, g3[e2[a3]])), b4.setLayoutVectorIn(new f.Vector(0, d2)));
        }), this.align(g2, e2[a3]), this.stack(g2, e2[c3]);
        var i = this.getBranchBox(g2), j = 0, k = 0;
        c3 == "x" ? (j = h[a3], j += d2 * b3.getStyle("margin-" + a3), j += d2 * g2[0].getStyle("margin-" + e2[a3]), k = h.bottom, k -= h.height / 2, k -= i.height / 2, k -= i.y) : (j = h.right, j -= h.width / 2, j -= i.width / 2, j -= i.x, k = h[a3], k += d2 * b3.getStyle("margin-" + a3), k += d2 * g2[0].getStyle("margin-" + e2[a3])), this.move(g2, j, k);
      }, getOrderHint: b2 }));
    }
    var f = b.r(17), g = b.r(18);
    ["left", "right", "top", "bottom"].forEach(e);
  } }, b[37] = { value: function(a2, c2, d) {
    function e(a3) {
      var b2 = "filetree-" + (a3 > 0 ? "down" : "up");
      g.register(b2, f.createClass({ base: g, doLayout: function(b3, c3, d2) {
        var e2 = b3.getContentBox(), g2 = 20;
        if (b3.setVertexOut(new f.Point(e2.left + g2, a3 > 0 ? e2.bottom : e2.top)), b3.setLayoutVectorOut(new f.Vector(0, a3)), c3.length) {
          c3.forEach(function(a4) {
            var b4 = a4.getContentBox();
            a4.setLayoutTransform(new f.Matrix()), a4.setVertexIn(new f.Point(b4.left, b4.cy)), a4.setLayoutVectorIn(new f.Vector(1, 0));
          }), this.align(c3, "left"), this.stack(c3, "y");
          var h = 0;
          h += e2.left, h += g2, h += c3[0].getStyle("margin-left");
          var i = 0;
          a3 > 0 ? (i += e2.bottom, i += b3.getStyle("margin-bottom"), i += c3[0].getStyle("margin-top")) : (i -= this.getTreeBox(c3).bottom, i += e2.top, i -= b3.getStyle("margin-top"), i -= c3[0].getStyle("margin-bottom")), this.move(c3, h, i);
        }
      }, getOrderHint: function(a4) {
        var b3 = [], c3 = a4.getLayoutBox(), d2 = a4.getLevel() > 1 ? 3 : 5;
        return b3.push({ type: "up", node: a4, area: new f.Box({ x: c3.x, y: c3.top - a4.getStyle("margin-top") - d2, width: c3.width, height: a4.getStyle("margin-top") }), path: ["M", c3.x, c3.top - d2, "L", c3.right, c3.top - d2] }), b3.push({ type: "down", node: a4, area: new f.Box({ x: c3.x, y: c3.bottom + d2, width: c3.width, height: a4.getStyle("margin-bottom") }), path: ["M", c3.x, c3.bottom + d2, "L", c3.right, c3.bottom + d2] }), b3;
      } }));
    }
    var f = b.r(17), g = b.r(18);
    [-1, 1].forEach(e);
  } }, b[38] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(18);
    f.register("fish-bone-master", e.createClass("FishBoneMasterLayout", { base: f, doLayout: function(a3, b2, c3) {
      var d2 = [], f2 = [], g = b2[0], h = a3.getContentBox();
      if (a3.setVertexOut(new e.Point(h.right, h.cy)), a3.setLayoutVectorOut(new e.Vector(1, 0)), g) {
        var i = (g.getContentBox(), a3.getStyle("margin-right")), j = g.getStyle("margin-left"), k = g.getStyle("margin-top"), l = g.getStyle("margin-bottom");
        b2.forEach(function(a4, b3) {
          a4.setLayoutTransform(new e.Matrix());
          var c4 = a4.getContentBox();
          b3 % 2 ? (f2.push(a4), a4.setVertexIn(new e.Point(c4.left, c4.top)), a4.setLayoutVectorIn(new e.Vector(1, 1))) : (d2.push(a4), a4.setVertexIn(new e.Point(c4.left, c4.bottom)), a4.setLayoutVectorIn(new e.Vector(1, -1)));
        }), this.stack(d2, "x"), this.stack(f2, "x"), this.align(d2, "bottom"), this.align(f2, "top");
        var m = h.right + i + j, n = h.cy - l - a3.getStyle("margin-top"), o = h.cy + k + a3.getStyle("margin-bottom");
        this.move(d2, m, n), this.move(f2, m + j, o);
      }
    } }));
  } }, b[39] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(18);
    f.register("fish-bone-slave", e.createClass("FishBoneSlaveLayout", { base: f, doLayout: function(a3, b2, c3) {
      var d2 = this, f2 = Math.abs, g = 0.382, h = a3.getContentBox(), i = a3.getLayoutVectorIn();
      a3.setLayoutVectorOut(i);
      var j = h.left + h.width * g, k = new e.Point(j, i.y > 0 ? h.bottom : h.top);
      a3.setVertexOut(k);
      var l = b2[0];
      if (l) {
        var m = l.getContentBox();
        b2.forEach(function(a4, b3) {
          a4.setLayoutTransform(new e.Matrix()), a4.setLayoutVectorIn(new e.Vector(1, 0)), a4.setVertexIn(new e.Point(m.left, m.cy));
        }), this.stack(b2, "y"), this.align(b2, "left");
        var n = 0, o = 0;
        n += k.x, a3.getLayoutVectorOut().y < 0 ? (o -= this.getTreeBox(b2).bottom, o += a3.getContentBox().top, o -= a3.getStyle("margin-top"), o -= l.getStyle("margin-bottom")) : (o += a3.getContentBox().bottom, o += a3.getStyle("margin-bottom"), o += l.getStyle("margin-top")), this.move(b2, n, o), c3 == 2 && b2.forEach(function(a4) {
          var b3 = a4.getLayoutTransform(), c4 = a4.getContentBox(), g2 = b3.transformPoint(new e.Point(c4.left, 0));
          d2.move([a4], f2(g2.y - k.y), 0);
        });
      }
    } }));
  } }, b[40] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(18), g = b.r(19);
    f.register("mind", e.createClass({ base: f, doLayout: function(a3, b2) {
      var c3 = Math.ceil(a3.children.length / 2), d2 = [], f2 = [];
      b2.forEach(function(a4) {
        a4.getIndex() < c3 ? d2.push(a4) : f2.push(a4);
      });
      var h = g.getLayoutInstance("left"), i = g.getLayoutInstance("right");
      h.doLayout(a3, f2), i.doLayout(a3, d2);
      var j = a3.getContentBox();
      a3.setVertexOut(new e.Point(j.cx, j.cy)), a3.setLayoutVectorOut(new e.Vector(0, 0));
    }, getOrderHint: function(a3) {
      var b2 = [], c3 = a3.getLayoutBox(), d2 = 5;
      return b2.push({ type: "up", node: a3, area: new e.Box({ x: c3.x, y: c3.top - a3.getStyle("margin-top") - d2, width: c3.width, height: a3.getStyle("margin-top") }), path: ["M", c3.x, c3.top - d2, "L", c3.right, c3.top - d2] }), b2.push({ type: "down", node: a3, area: new e.Box({ x: c3.x, y: c3.bottom + d2, width: c3.width, height: a3.getStyle("margin-bottom") }), path: ["M", c3.x, c3.bottom + d2, "L", c3.right, c3.bottom + d2] }), b2;
    } }));
  } }, b[41] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(18);
    b.r(19);
    f.register("tianpan", e.createClass({ base: f, doLayout: function(a3, b2) {
      if (b2.length != 0) {
        var c3, d2, f2, g = this, h = a3.getContentBox(), i = 5, j = Math.max(h.width, 50);
        b2.forEach(function(a4, b3) {
          a4.setLayoutTransform(new e.Matrix()), f2 = g.getTreeBox(a4), j = Math.max(Math.max(f2.width, f2.height), j);
        }), j = j / 1.5 / Math.PI, b2.forEach(function(a4, b3) {
          c3 = j * (Math.cos(i) + Math.sin(i) * i), d2 = j * (Math.sin(i) - Math.cos(i) * i), i += 0.9 - 0.02 * b3, a4.setLayoutVectorIn(new e.Vector(1, 0)), a4.setVertexIn(new e.Point(h.cx, h.cy)), a4.setLayoutTransform(new e.Matrix()), g.move([a4], c3, d2);
        });
      }
    }, getOrderHint: function(a3) {
      var b2 = [], c3 = a3.getLayoutBox(), d2 = 5;
      return b2.push({ type: "up", node: a3, area: { x: c3.x, y: c3.top - a3.getStyle("margin-top") - d2, width: c3.width, height: a3.getStyle("margin-top") }, path: ["M", c3.x, c3.top - d2, "L", c3.right, c3.top - d2] }), b2.push({ type: "down", node: a3, area: { x: c3.x, y: c3.bottom + d2, width: c3.width, height: a3.getStyle("margin-bottom") }, path: ["M", c3.x, c3.bottom + d2, "L", c3.right, c3.bottom + d2] }), b2;
    } }));
  } }, b[42] = { value: function(a2, c2, d) {
    function e(a3, b2) {
      return a3.getIndex() - b2.getIndex();
    }
    function f(a3, b2) {
      return -e(a3, b2);
    }
    var g = b.r(17), h = b.r(21), i = b.r(9), j = b.r(20);
    g.extendClass(h, { arrange: function(a3) {
      var b2 = this.parent;
      if (b2) {
        var c3 = b2.children;
        if (!(a3 < 0 || a3 >= c3.length))
          return c3.splice(this.getIndex(), 1), c3.splice(a3, 0, this), this;
      }
    } });
    var k = g.createClass("ArrangeUpCommand", { base: i, execute: function(a3) {
      var b2 = a3.getSelectedNodes();
      b2.sort(e);
      var c3 = b2.map(function(a4) {
        return a4.getIndex();
      });
      b2.forEach(function(a4, b3) {
        a4.arrange(c3[b3] - 1);
      }), a3.layout(300);
    }, queryState: function(a3) {
      return a3.getSelectedNode() ? 0 : -1;
    } }), l = g.createClass("ArrangeUpCommand", { base: i, execute: function(a3) {
      var b2 = a3.getSelectedNodes();
      b2.sort(f);
      var c3 = b2.map(function(a4) {
        return a4.getIndex();
      });
      b2.forEach(function(a4, b3) {
        a4.arrange(c3[b3] + 1);
      }), a3.layout(300);
    }, queryState: function(a3) {
      return a3.getSelectedNode() ? 0 : -1;
    } }), m = g.createClass("ArrangeCommand", { base: i, execute: function(a3, b2) {
      var c3 = a3.getSelectedNodes().slice();
      if (c3.length) {
        if (h.getCommonAncestor(c3) == c3[0].parent) {
          var d2 = c3.map(function(a4) {
            return { index: a4.getIndex(), node: a4 };
          }), e2 = Math.min.apply(Math, d2.map(function(a4) {
            return a4.index;
          })) >= b2;
          d2.sort(function(a4, b3) {
            return e2 ? b3.index - a4.index : a4.index - b3.index;
          }), d2.forEach(function(a4) {
            a4.node.arrange(b2);
          }), a3.layout(300);
        }
      }
    }, queryState: function(a3) {
      return a3.getSelectedNode() ? 0 : -1;
    } });
    j.register("ArrangeModule", { commands: { arrangeup: k, arrangedown: l, arrange: m }, contextmenu: [{ command: "arrangeup" }, { command: "arrangedown" }, { divider: true }], commandShortcutKeys: { arrangeup: "normal::alt+Up", arrangedown: "normal::alt+Down" } });
  } }, b[43] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19), b.r(21), b.r(9)), g = b.r(20), h = b.r(61);
    g.register("basestylemodule", function() {
      function a3(a4, b3) {
        return a4.getData(b3) || a4.getStyle(b3);
      }
      var b2 = this;
      return h.registerStyleHook(function(b3, c3) {
        var d2 = a3(b3, "font-weight"), e2 = a3(b3, "font-style");
        c3.eachItem(function(a4, b4) {
          b4.setFont({ weight: d2, style: e2 });
        });
      }), { commands: { bold: e.createClass("boldCommand", { base: f, execute: function(a4) {
        var b3 = a4.getSelectedNodes();
        this.queryState("bold") == 1 ? b3.forEach(function(a5) {
          a5.setData("font-weight").render();
        }) : b3.forEach(function(a5) {
          a5.setData("font-weight", "bold").render();
        }), a4.layout();
      }, queryState: function() {
        var a4 = b2.getSelectedNodes(), c3 = 0;
        return a4.length === 0 ? -1 : (a4.forEach(function(a5) {
          if (a5 && a5.getData("font-weight"))
            return c3 = 1, false;
        }), c3);
      } }), italic: e.createClass("italicCommand", { base: f, execute: function(a4) {
        var b3 = a4.getSelectedNodes();
        this.queryState("italic") == 1 ? b3.forEach(function(a5) {
          a5.setData("font-style").render();
        }) : b3.forEach(function(a5) {
          a5.setData("font-style", "italic").render();
        }), a4.layout();
      }, queryState: function() {
        var a4 = b2.getSelectedNodes(), c3 = 0;
        return a4.length === 0 ? -1 : (a4.forEach(function(a5) {
          if (a5 && a5.getData("font-style"))
            return c3 = 1, false;
        }), c3);
      } }) }, commandShortcutKeys: { bold: "ctrl+b", italic: "ctrl+i" } };
    });
  } }, b[44] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(21)), g = b.r(9);
    b.r(20).register("ClipboardModule", function() {
      function a3(b3, d3) {
        h.push(d3), c3.appendNode(d3, b3), d3.render(), d3.setLayoutOffset(null);
        var e2 = d3.children.map(function(a4) {
          return a4.clone();
        });
        d3.clearChildren();
        for (var f2, g2 = 0; f2 = e2[g2]; g2++)
          a3(d3, f2);
      }
      function b2(a4) {
        a4.length && (a4.sort(function(a5, b3) {
          return a5.getIndex() - b3.getIndex();
        }), d2 = a4.map(function(a5) {
          return a5.clone();
        }));
      }
      var c3 = this, d2 = [], h = [], i = e.createClass("CopyCommand", { base: g, execute: function(a4) {
        b2(a4.getSelectedAncestors(true)), this.setContentChanged(false);
      } }), j = e.createClass("CutCommand", { base: g, execute: function(a4) {
        var c4 = a4.getSelectedAncestors();
        c4.length !== 0 && (b2(c4), a4.select(f.getCommonAncestor(c4), true), c4.slice().forEach(function(b3) {
          a4.removeNode(b3);
        }), a4.layout(300));
      } }), k = e.createClass("PasteCommand", { base: g, execute: function(b3) {
        if (d2.length) {
          var c4 = b3.getSelectedNodes();
          if (!c4.length)
            return;
          for (var e2, f2 = 0; e2 = d2[f2]; f2++)
            for (var g2, i2 = 0; g2 = c4[i2]; i2++)
              a3(g2, e2.clone());
          b3.select(h, true), h = [], b3.layout(300);
        }
      }, queryState: function(a4) {
        return a4.getSelectedNode() ? 0 : -1;
      } });
      if (c3.supportClipboardEvent && !e.Browser.gecko) {
        var l = function(a4) {
          this.fire("beforeCopy", a4);
        }, m = function(a4) {
          this.fire("beforeCut", a4);
        }, n = function(a4) {
          this.fire("beforePaste", a4);
        };
        return { commands: { copy: i, cut: j, paste: k }, clipBoardEvents: { copy: l.bind(c3), cut: m.bind(c3), paste: n.bind(c3) }, sendToClipboard: b2 };
      }
      return { commands: { copy: i, cut: j, paste: k }, commandShortcutKeys: { copy: "normal::ctrl+c|", cut: "normal::ctrl+x", paste: "normal::ctrl+v" }, sendToClipboard: b2 };
    });
  } }, b[45] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(21)), g = b.r(9), h = b.r(20), i = e.createClass("MoveToParentCommand", { base: g, execute: function(a3, b2, c3) {
      for (var d2, e2 = 0; e2 < b2.length; e2++)
        d2 = b2[e2], d2.parent && (d2.parent.removeChild(d2), c3.appendChild(d2), d2.render());
      c3.expand(), a3.select(b2, true);
    } }), j = e.createClass("DropHinter", { base: e.Group, constructor: function() {
      this.callBase(), this.rect = new e.Rect(), this.addShape(this.rect);
    }, render: function(a3) {
      this.setVisible(!!a3), a3 && (this.rect.setBox(a3.getLayoutBox()).setRadius(a3.getStyle("radius") || 0).stroke(a3.getStyle("drop-hint-color") || "yellow", a3.getStyle("drop-hint-width") || 2), this.bringTop());
    } }), k = e.createClass("OrderHinter", { base: e.Group, constructor: function() {
      this.callBase(), this.area = new e.Rect(), this.path = new e.Path(), this.addShapes([this.area, this.path]);
    }, render: function(a3) {
      this.setVisible(!!a3), a3 && (this.area.setBox(a3.area), this.area.fill(a3.node.getStyle("order-hint-area-color") || "rgba(0, 255, 0, .5)"), this.path.setPathData(a3.path), this.path.stroke(a3.node.getStyle("order-hint-path-color") || "#0f0", a3.node.getStyle("order-hint-path-width") || 1));
    } }), l = e.createClass("TreeDragger", { constructor: function(a3) {
      this._minder = a3, this._dropHinter = new j(), this._orderHinter = new k(), a3.getRenderContainer().addShapes([this._dropHinter, this._orderHinter]);
    }, dragStart: function(a3) {
      this._startPosition = a3;
    }, dragMove: function(a3) {
      if (this._startPosition) {
        var b2 = e.Vector.fromPoints(this._dragPosition || this._startPosition, a3), c3 = this._minder;
        if (this._dragPosition = a3, !this._dragMode) {
          if (e.Vector.fromPoints(this._dragPosition, this._startPosition).length() < 10)
            return;
          if (!this._enterDragMode())
            return;
        }
        for (var d2 = 0; d2 < this._dragSources.length; d2++)
          this._dragSources[d2].setLayoutOffset(this._dragSources[d2].getLayoutOffset().offset(b2)), c3.applyLayoutResult(this._dragSources[d2]);
        this._dropTest() ? this._renderOrderHint(this._orderSucceedHint = null) : this._orderTest();
      }
    }, dragEnd: function() {
      if (this._startPosition = null, this._dragPosition = null, this._dragMode) {
        if (this._fadeDragSources(1), this._dropSucceedTarget)
          this._dragSources.forEach(function(a4) {
            a4.setLayoutOffset(null);
          }), this._minder.layout(-1), this._minder.execCommand("movetoparent", this._dragSources, this._dropSucceedTarget);
        else if (this._orderSucceedHint) {
          var a3 = this._orderSucceedHint, b2 = a3.node.getIndex(), c3 = this._dragSources.map(function(a4) {
            return a4.setLayoutOffset(null), a4.getIndex();
          }), d2 = Math.max.apply(Math, c3), e2 = Math.min.apply(Math, c3);
          b2 < e2 && a3.type == "down" && b2++, b2 > d2 && a3.type == "up" && b2--, a3.node.setLayoutOffset(null), this._minder.execCommand("arrange", b2), this._renderOrderHint(null);
        } else
          this._minder.fire("savescene");
        this._minder.layout(300), this._leaveDragMode(), this._minder.fire("contentchange");
      }
    }, _enterDragMode: function() {
      return this._calcDragSources(), this._dragSources.length ? (this._fadeDragSources(0.5), this._calcDropTargets(), this._calcOrderHints(), this._dragMode = true, this._minder.setStatus("dragtree"), true) : (this._startPosition = null, false);
    }, _calcDragSources: function() {
      this._dragSources = this._minder.getSelectedAncestors();
    }, _fadeDragSources: function(a3) {
      var b2 = this._minder;
      this._dragSources.forEach(function(c3) {
        c3.getRenderContainer().setOpacity(a3, 200), c3.traverse(function(c4) {
          a3 < 1 ? b2.detachNode(c4) : b2.attachNode(c4);
        }, true);
      });
    }, _calcDropTargets: function() {
      function a3(b2, c3) {
        var d2, e2 = [];
        return e2.push(c3), c3.getChildren().forEach(function(c4) {
          for (d2 = 0; d2 < b2.length; d2++)
            if (b2[d2] == c4)
              return;
          e2 = e2.concat(a3(b2, c4));
        }), e2;
      }
      this._dropTargets = a3(this._dragSources, this._minder.getRoot()), this._dropTargetBoxes = this._dropTargets.map(function(a4) {
        return a4.getLayoutBox();
      });
    }, _calcOrderHints: function() {
      var a3 = this._dragSources, b2 = f.getCommonAncestor(a3);
      if (b2 == a3[0] && (b2 = a3[0].parent), a3.length === 0 || b2 != a3[0].parent)
        return void (this._orderHints = []);
      var c3 = b2.children;
      this._orderHints = c3.reduce(function(b3, c4) {
        return a3.indexOf(c4) == -1 && (b3 = b3.concat(c4.getOrderHint())), b3;
      }, []);
    }, _leaveDragMode: function() {
      this._dragMode = false, this._dropSucceedTarget = null, this._orderSucceedHint = null, this._renderDropHint(null), this._renderOrderHint(null), this._minder.rollbackStatus();
    }, _drawForDragMode: function() {
      this._text.setContent(this._dragSources.length + " items"), this._text.setPosition(this._startPosition.x, this._startPosition.y + 5), this._minder.getRenderContainer().addShape(this);
    }, _boxTest: function(a3, b2, c3) {
      var d2, e2, f2, g2, h2, i2 = this._dragSources.map(function(a4) {
        return a4.getLayoutBox();
      });
      for (c3 = c3 || function(a4, b3, c4) {
        return a4 && !a4.isEmpty();
      }, d2 = 0; d2 < a3.length; d2++)
        for (f2 = a3[d2], h2 = b2.call(this, f2, d2), e2 = 0; e2 < i2.length; e2++) {
          g2 = i2[e2];
          var j2 = g2.intersect(h2);
          if (c3(j2, g2, h2))
            return f2;
        }
      return null;
    }, _dropTest: function() {
      return this._dropSucceedTarget = this._boxTest(this._dropTargets, function(a3, b2) {
        return this._dropTargetBoxes[b2];
      }, function(a3, b2, c3) {
        function d2(a4) {
          return a4.width * a4.height;
        }
        return !!a3 && (!!d2(a3) && (d2(a3) > 0.5 * Math.min(d2(b2), d2(c3)) || (a3.width + 1 >= Math.min(b2.width, c3.width) || a3.height + 1 >= Math.min(b2.height, c3.height))));
      }), this._renderDropHint(this._dropSucceedTarget), !!this._dropSucceedTarget;
    }, _orderTest: function() {
      return this._orderSucceedHint = this._boxTest(this._orderHints, function(a3) {
        return a3.area;
      }), this._renderOrderHint(this._orderSucceedHint), !!this._orderSucceedHint;
    }, _renderDropHint: function(a3) {
      this._dropHinter.render(a3);
    }, _renderOrderHint: function(a3) {
      this._orderHinter.render(a3);
    }, preventDragMove: function() {
      this._startPosition = null;
    } });
    h.register("DragTree", function() {
      var a3;
      return { init: function() {
        a3 = new l(this), window.addEventListener("mouseup", function() {
          a3.dragEnd();
        });
      }, events: { "normal.mousedown inputready.mousedown": function(b2) {
        b2.originEvent.button || b2.getTargetNode() && b2.getTargetNode() != this.getRoot() && a3.dragStart(b2.getPosition());
      }, "normal.mousemove dragtree.mousemove": function(b2) {
        a3.dragMove(b2.getPosition());
      }, "normal.mouseup dragtree.beforemouseup": function(b2) {
        a3.dragEnd(), b2.preventDefault();
      }, statuschange: function(b2) {
        b2.lastStatus == "textedit" && b2.currentStatus == "normal" && a3.preventDragMove();
      } }, commands: { movetoparent: i } };
    });
  } }, b[46] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = b.r(15), h = b.r(21), i = b.r(9), j = b.r(20), k = b.r(27);
    j.register("Expand", function() {
      var a3 = this, b2 = "expandState", c3 = "collapse";
      e.extendClass(h, { expand: function() {
        return this.setData(b2, "expand"), this;
      }, collapse: function() {
        return this.setData(b2, c3), this;
      }, isExpanded: function() {
        return this.getData(b2) !== c3 && (this.isRoot() || this.parent.isExpanded());
      }, isCollapsed: function() {
        return !this.isExpanded();
      } });
      var d2 = e.createClass("ExpandCommand", { base: i, execute: function(a4, b3) {
        var c4 = a4.getSelectedNode();
        if (c4) {
          for (b3 && (c4 = c4.parent); c4.parent; )
            c4.expand(), c4 = c4.parent;
          c4.renderTree(), a4.layout(100);
        }
      }, queryState: function(a4) {
        var b3 = a4.getSelectedNode();
        return !b3 || b3.isRoot() || b3.isExpanded() ? -1 : 0;
      } }), j2 = e.createClass("ExpandToLevelCommand", { base: i, execute: function(a4, b3) {
        a4.getRoot().traverse(function(a5) {
          a5.getLevel() < b3 && a5.expand(), a5.getLevel() != b3 || a5.isLeaf() || a5.collapse();
        }), a4.refresh(100);
      }, enableReadOnly: true }), l = e.createClass("CollapseCommand", { base: i, execute: function(a4) {
        var b3 = a4.getSelectedNode();
        b3 && (b3.collapse(), b3.renderTree(), a4.layout());
      }, queryState: function(a4) {
        var b3 = a4.getSelectedNode();
        return b3 && !b3.isRoot() && b3.isExpanded() ? 0 : -1;
      } }), m = e.createClass("Expander", { base: e.Group, constructor: function(a4) {
        this.callBase(), this.radius = 6, this.outline = new e.Circle(this.radius).stroke("gray").fill("white"), this.sign = new e.Path().stroke("gray"), this.addShapes([this.outline, this.sign]), this.initEvent(a4), this.setId(f.uuid("node_expander")), this.setStyle("cursor", "pointer");
      }, initEvent: function(b3) {
        this.on("mousedown", function(c4) {
          a3.select([b3], true), b3.isExpanded() ? b3.collapse() : b3.expand(), b3.renderTree().getMinder().layout(100), b3.getMinder().fire("contentchange"), c4.stopPropagation(), c4.preventDefault();
        }), this.on("dblclick click mouseup", function(a4) {
          a4.stopPropagation(), a4.preventDefault();
        });
      }, setState: function(a4) {
        if (a4 == "hide")
          return void this.setVisible(false);
        this.setVisible(true);
        var b3 = ["M", 1.5 - this.radius, 0, "L", this.radius - 1.5, 0];
        a4 == c3 && b3.push(["M", 0, 1.5 - this.radius, "L", 0, this.radius - 1.5]), this.sign.setPathData(b3);
      } }), n = e.createClass("ExpanderRenderer", { base: k, create: function(a4) {
        if (!a4.isRoot())
          return this.expander = new m(a4), a4.getRenderContainer().prependShape(this.expander), a4.expanderRenderer = this, this.node = a4, this.expander;
      }, shouldRender: function(a4) {
        return !a4.isRoot();
      }, update: function(a4, c4, d3) {
        if (c4.parent) {
          var e2 = c4.parent.isExpanded();
          a4.setState(e2 && c4.children.length ? c4.getData(b2) : "hide");
          var f2 = c4.getLayoutVectorIn().normalize(a4.radius + c4.getStyle("stroke-width")), g2 = c4.getVertexIn().offset(f2.reverse());
          this.expander.setTranslate(g2);
        }
      } });
      return { commands: { expand: d2, expandtolevel: j2, collapse: l }, events: { layoutapply: function(a4) {
        var b3 = a4.node.getRenderer("ExpanderRenderer");
        b3.getRenderShape() && b3.update(b3.getRenderShape(), a4.node);
      }, beforerender: function(a4) {
        var b3 = a4.node, c4 = !b3.parent || b3.parent.isExpanded();
        b3.getRenderContainer().setVisible(c4), c4 || a4.stopPropagation();
      }, "normal.keydown": function(a4) {
        if (this.getStatus() != "textedit") {
          if (a4.originEvent.keyCode == g["/"]) {
            var b3 = this.getSelectedNode();
            if (!b3 || b3 == this.getRoot())
              return;
            var c4 = b3.isExpanded();
            this.getSelectedNodes().forEach(function(a5) {
              c4 ? a5.collapse() : a5.expand(), a5.renderTree();
            }), this.layout(100), this.fire("contentchange"), a4.preventDefault(), a4.stopPropagationImmediately();
          }
          a4.isShortcutKey("Alt+`") && this.execCommand("expandtolevel", 9999);
          for (var d3 = 1; d3 < 6; d3++)
            a4.isShortcutKey("Alt+" + d3) && this.execCommand("expandtolevel", d3);
        }
      } }, renderers: { outside: n }, contextmenu: [{ command: "expandtoleaf", query: function() {
        return !a3.getSelectedNode();
      }, fn: function(a4) {
        a4.execCommand("expandtolevel", 9999);
      } }, { command: "expandtolevel1", query: function() {
        return !a3.getSelectedNode();
      }, fn: function(a4) {
        a4.execCommand("expandtolevel", 1);
      } }, { command: "expandtolevel2", query: function() {
        return !a3.getSelectedNode();
      }, fn: function(a4) {
        a4.execCommand("expandtolevel", 2);
      } }, { command: "expandtolevel3", query: function() {
        return !a3.getSelectedNode();
      }, fn: function(a4) {
        a4.execCommand("expandtolevel", 3);
      } }, { divider: true }] };
    });
  } }, b[47] = { value: function(a2, c2, d) {
    function e(a3, b2) {
      return a3.getData(b2) || a3.getStyle(b2);
    }
    var f = b.r(17), g = (b.r(33), b.r(19), b.r(21), b.r(9)), h = b.r(20);
    b.r(61).registerStyleHook(function(a3, b2) {
      var c3 = a3.getData("color"), d2 = a3.getStyle("selected-color"), f2 = a3.getStyle("color"), g2 = c3 || (a3.isSelected() && d2 ? d2 : f2), h2 = e(a3, "font-family"), i = e(a3, "font-size");
      b2.fill(g2), b2.eachItem(function(a4, b3) {
        b3.setFont({ family: h2, size: i });
      });
    }), h.register("fontmodule", { commands: { forecolor: f.createClass("fontcolorCommand", { base: g, execute: function(a3, b2) {
      a3.getSelectedNodes().forEach(function(a4) {
        a4.setData("color", b2), a4.render();
      });
    }, queryState: function(a3) {
      return a3.getSelectedNodes().length === 0 ? -1 : 0;
    }, queryValue: function(a3) {
      return a3.getSelectedNodes().length == 1 ? a3.getSelectedNodes()[0].getData("color") : "mixed";
    } }), background: f.createClass("backgroudCommand", { base: g, execute: function(a3, b2) {
      a3.getSelectedNodes().forEach(function(a4) {
        a4.setData("background", b2), a4.render();
      });
    }, queryState: function(a3) {
      return a3.getSelectedNodes().length === 0 ? -1 : 0;
    }, queryValue: function(a3) {
      return a3.getSelectedNodes().length == 1 ? a3.getSelectedNodes()[0].getData("background") : "mixed";
    } }), fontfamily: f.createClass("fontfamilyCommand", { base: g, execute: function(a3, b2) {
      a3.getSelectedNodes().forEach(function(c3) {
        c3.setData("font-family", b2), c3.render(), a3.layout();
      });
    }, queryState: function(a3) {
      return a3.getSelectedNodes().length === 0 ? -1 : 0;
    }, queryValue: function(a3) {
      var b2 = a3.getSelectedNode();
      return b2 ? b2.getData("font-family") : null;
    } }), fontsize: f.createClass("fontsizeCommand", { base: g, execute: function(a3, b2) {
      a3.getSelectedNodes().forEach(function(c3) {
        c3.setData("font-size", b2), c3.render(), a3.layout(300);
      });
    }, queryState: function(a3) {
      return a3.getSelectedNodes().length === 0 ? -1 : 0;
    }, queryValue: function(a3) {
      var b2 = a3.getSelectedNode();
      return b2 ? b2.getData("font-size") : null;
    } }) } });
  } }, b[48] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19), b.r(21), b.r(9)), g = b.r(20), h = b.r(27);
    g.register("hyperlink", { commands: { hyperlink: e.createClass("hyperlink", { base: f, execute: function(a3, b2, c3) {
      a3.getSelectedNodes().forEach(function(a4) {
        a4.setData("hyperlink", b2), a4.setData("hyperlinkTitle", b2 && c3), a4.render();
      }), a3.layout();
    }, queryState: function(a3) {
      var b2 = a3.getSelectedNodes(), c3 = 0;
      return b2.length === 0 ? -1 : (b2.forEach(function(a4) {
        if (a4 && a4.getData("hyperlink"))
          return c3 = 0, false;
      }), c3);
    }, queryValue: function(a3) {
      var b2 = a3.getSelectedNode();
      return { url: b2.getData("hyperlink"), title: b2.getData("hyperlinkTitle") };
    } }) }, renderers: { right: e.createClass("hyperlinkrender", { base: h, create: function() {
      var a3 = new e.HyperLink(), b2 = new e.Path(), c3 = new e.Rect(24, 22, -2, -6, 4).fill("rgba(255, 255, 255, 0)");
      return b2.setPathData("M16.614,10.224h-1.278c-1.668,0-3.07-1.07-3.599-2.556h4.877c0.707,0,1.278-0.571,1.278-1.278V3.834 c0-0.707-0.571-1.278-1.278-1.278h-4.877C12.266,1.071,13.668,0,15.336,0h1.278c2.116,0,3.834,1.716,3.834,3.834V6.39 C20.448,8.508,18.73,10.224,16.614,10.224z M5.112,5.112c0-0.707,0.573-1.278,1.278-1.278h7.668c0.707,0,1.278,0.571,1.278,1.278 S14.765,6.39,14.058,6.39H6.39C5.685,6.39,5.112,5.819,5.112,5.112z M2.556,3.834V6.39c0,0.707,0.573,1.278,1.278,1.278h4.877 c-0.528,1.486-1.932,2.556-3.599,2.556H3.834C1.716,10.224,0,8.508,0,6.39V3.834C0,1.716,1.716,0,3.834,0h1.278 c1.667,0,3.071,1.071,3.599,2.556H3.834C3.129,2.556,2.556,3.127,2.556,3.834z").fill("#666"), a3.addShape(c3), a3.addShape(b2), a3.setTarget("_blank"), a3.setStyle("cursor", "pointer"), a3.on("mouseover", function() {
        c3.fill("rgba(255, 255, 200, .8)");
      }).on("mouseout", function() {
        c3.fill("rgba(255, 255, 255, 0)");
      }), a3;
    }, shouldRender: function(a3) {
      return a3.getData("hyperlink");
    }, update: function(a3, b2, c3) {
      var d2 = b2.getData("hyperlink");
      a3.setHref("#");
      for (var f2 = ["^http:", "^https:", "^ftp:", "^mailto:"], g2 = 0; g2 < f2.length; g2++)
        if (new RegExp(f2[g2]).test(d2)) {
          a3.setHref(d2);
          break;
        }
      var h2 = b2.getData("hyperlinkTitle");
      h2 = h2 ? [h2, "(", d2, ")"].join("") : d2, a3.node.setAttributeNS("http://www.w3.org/1999/xlink", "title", h2);
      var i = b2.getStyle("space-right");
      return a3.setTranslate(c3.right + i + 2, -5), new e.Box({ x: c3.right + i, y: -11, width: 24, height: 22 });
    } }) } });
  } }, b[49] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(15), g = b.r(20);
    b.r(9);
    g.register("ImageViewer", function() {
      function a3(a4, b3, d3) {
        var e2 = document.createElement(a4);
        return c3(e2, b3), d3 && d3.length && d3.forEach(function(a5) {
          e2.appendChild(a5);
        }), e2;
      }
      function b2(a4, b3, c4) {
        a4.addEventListener(b3, c4);
      }
      function c3(a4, b3) {
        b3 && b3.split(" ").forEach(function(b4) {
          a4.classList.add(b4);
        });
      }
      var d2 = e.createClass("ImageViewer", { constructor: function() {
        var c4 = a3("button", "km-image-viewer-btn km-image-viewer-close"), d3 = a3("button", "km-image-viewer-btn km-image-viewer-source"), e2 = this.image = a3("img"), f2 = this.toolbar = a3("div", "km-image-viewer-toolbar", [d3, c4]), g2 = a3("div", "km-image-viewer-container", [e2]), h = this.viewer = a3("div", "km-image-viewer", [f2, g2]);
        this.hotkeyHandler = this.hotkeyHandler.bind(this), b2(c4, "click", this.close.bind(this)), b2(d3, "click", this.viewSource.bind(this)), b2(e2, "click", this.zoomImage.bind(this)), b2(h, "contextmenu", this.toggleToolbar.bind(this)), b2(document, "keydown", this.hotkeyHandler);
      }, dispose: function() {
        this.close(), document.removeEventListener("remove", this.hotkeyHandler);
      }, hotkeyHandler: function(a4) {
        this.actived && a4.keyCode === f.esc && this.close();
      }, toggleToolbar: function(a4) {
        a4 && a4.preventDefault(), this.toolbar.classList.toggle("hidden");
      }, zoomImage: function(a4) {
        var b3 = this.image;
        typeof a4 == "boolean" ? a4 && c3(b3, "limited") : b3.classList.toggle("limited");
      }, viewSource: function(a4) {
        window.open(this.image.src);
      }, open: function(a4) {
        var b3 = document.querySelector("input");
        b3 && (b3.focus(), b3.blur()), this.image.src = a4, this.zoomImage(true), document.body.appendChild(this.viewer), this.actived = true;
      }, close: function() {
        this.image.src = "", document.body.removeChild(this.viewer), this.actived = false;
      } });
      return { init: function() {
        this.viewer = new d2();
      }, events: { "normal.dblclick": function(a4) {
      } } };
    });
  } }, b[50] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19), b.r(21), b.r(9)), g = b.r(20), h = b.r(27);
    g.register("image", function() {
      function a3(a4, b3) {
        var c3 = document.createElement("img");
        c3.onload = function() {
          b3(c3.width, c3.height);
        }, c3.onerror = function() {
          b3(null);
        }, c3.src = a4;
      }
      function b2(a4, b3, c3, d2) {
        var e2 = a4 / b3, f2 = c3 / d2;
        return a4 > c3 && e2 > f2 ? (a4 = c3, b3 = a4 / e2) : b3 > d2 && (b3 = d2, a4 = b3 * e2), { width: 0 | a4, height: 0 | b3 };
      }
      return { defaultOptions: { maxImageWidth: 200, maxImageHeight: 200 }, commands: { image: e.createClass("ImageCommand", { base: f, execute: function(c3, d2, e2) {
        var f2 = c3.getSelectedNodes();
        a3(d2, function(a4, g2) {
          f2.forEach(function(f3) {
            var h2 = b2(a4, g2, c3.getOption("maxImageWidth"), c3.getOption("maxImageHeight"));
            f3.setData("image", d2), f3.setData("imageTitle", d2 && e2), f3.setData("imageSize", d2 && h2), f3.render();
          }), c3.fire("saveScene"), c3.layout(300);
        });
      }, queryState: function(a4) {
        var b3 = a4.getSelectedNodes(), c3 = 0;
        return b3.length === 0 ? -1 : (b3.forEach(function(a5) {
          if (a5 && a5.getData("image"))
            return c3 = 0, false;
        }), c3);
      }, queryValue: function(a4) {
        var b3 = a4.getSelectedNode();
        return { url: b3.getData("image"), title: b3.getData("imageTitle") };
      } }) }, renderers: { top: e.createClass("ImageRenderer", { base: h, create: function(a4) {
        return new e.Image(a4.getData("image"));
      }, shouldRender: function(a4) {
        return a4.getData("image");
      }, update: function(a4, b3, c3) {
        var d2 = b3.getData("image"), f2 = b3.getData("imageTitle"), g2 = b3.getData("imageSize"), h2 = b3.getStyle("space-top");
        if (g2) {
          f2 && a4.node.setAttributeNS("http://www.w3.org/1999/xlink", "title", f2);
          var i = c3.cx - g2.width / 2, j = c3.y - g2.height - h2;
          return a4.setUrl(d2).setX(0 | i).setY(0 | j).setWidth(0 | g2.width).setHeight(0 | g2.height), new e.Box(0 | i, 0 | j, 0 | g2.width, 0 | g2.height);
        }
      } }) } };
    });
  } }, b[51] = { value: function(a2, c2, d) {
    var e = (b.r(17), b.r(33), b.r(15), b.r(19), b.r(21), b.r(9), b.r(20));
    b.r(27);
    e.register("KeyboardModule", function() {
      function a3(a4) {
        var b3, d3 = [];
        a4.traverse(function(a5) {
          b3 = a5.getLayoutBox(), b3.width && b3.height && d3.push({ left: b3.x, top: b3.y, right: b3.x + b3.width, bottom: b3.y + b3.height, width: b3.width, height: b3.height, node: a5 });
        });
        for (var e3 = 0; e3 < d3.length; e3++)
          c3(d3, e3);
      }
      function b2(a4, b3) {
        var c4, d3, h, i, j, k, l;
        c4 = e2(a4.left, b3.left), d3 = f(a4.right, b3.right), h = e2(a4.top, b3.top), i = f(a4.bottom, b3.bottom), j = d3 - c4 - a4.width - b3.width, k = i - h - a4.height - b3.height, l = j < 0 ? k : k < 0 ? j : g(j * j + k * k);
        var m = a4.node, n = b3.node;
        return m.parent == n.parent && (l /= 10), n.parent == m && (l /= 5), l;
      }
      function c3(a4, c4) {
        for (var d3, e3, f2 = a4[c4], g2 = {}, h = 0; h < a4.length; h++)
          h != c4 && (d3 = a4[h], e3 = b2(d3, f2), d3.right < f2.left && (!g2.left || e3 < g2.left.dist) && (g2.left = { dist: e3, node: d3.node }), d3.left > f2.right && (!g2.right || e3 < g2.right.dist) && (g2.right = { dist: e3, node: d3.node }), d3.bottom < f2.top && (!g2.top || e3 < g2.top.dist) && (g2.top = { dist: e3, node: d3.node }), d3.top > f2.bottom && (!g2.down || e3 < g2.down.dist) && (g2.down = { dist: e3, node: d3.node }));
        f2.node._nearestNodes = { right: g2.right && g2.right.node || null, top: g2.top && g2.top.node || null, left: g2.left && g2.left.node || null, down: g2.down && g2.down.node || null };
      }
      function d2(b3, c4) {
        var d3 = b3.getSelectedNode();
        if (!d3)
          return b3.select(b3.getRoot()), void a3(b3.getRoot());
        d3._nearestNodes || a3(b3.getRoot());
        var e3 = d3._nearestNodes[c4];
        e3 && b3.select(e3, true);
      }
      var e2 = Math.min, f = Math.max, g = (Math.sqrt);
      return { events: { layoutallfinish: function() {
        a3(this.getRoot());
      }, "normal.keydown readonly.keydown": function(a4) {
        var b3 = this;
        ["left", "right", "up", "down"].forEach(function(c4) {
          a4.isShortcutKey(c4) && (d2(b3, c4 == "up" ? "top" : c4), a4.preventDefault());
        });
      } } };
    });
  } }, b[52] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(9), g = b.r(20), h = e.createClass("LayoutCommand", { base: f, execute: function(a3, b2) {
      a3.getSelectedNodes().forEach(function(a4) {
        a4.layout(b2);
      });
    }, queryValue: function(a3) {
      var b2 = a3.getSelectedNode();
      if (b2)
        return b2.getData("layout");
    }, queryState: function(a3) {
      return a3.getSelectedNode() ? 0 : -1;
    } }), i = e.createClass("ResetLayoutCommand", { base: f, execute: function(a3) {
      var b2 = a3.getSelectedNodes();
      b2.length || (b2 = [a3.getRoot()]), b2.forEach(function(a4) {
        a4.traverse(function(a5) {
          a5.resetLayoutOffset(), a5.isRoot() || a5.setData("layout", null);
        });
      }), a3.layout(300);
    }, enableReadOnly: true });
    g.register("LayoutModule", { commands: { layout: h, resetlayout: i }, contextmenu: [{ command: "resetlayout" }, { divider: true }], commandShortcutKeys: { resetlayout: "Ctrl+Shift+L" } });
  } }, b[53] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19), b.r(21)), g = b.r(9), h = b.r(20), i = (b.r(27), e.createClass("AppendChildCommand", { base: g, execute: function(a3, b2) {
      var c3 = a3.getSelectedNode();
      if (!c3)
        return null;
      var d2 = a3.createNode(b2, c3);
      a3.select(d2, true), c3.isExpanded() ? d2.render() : (c3.expand(), c3.renderTree()), a3.layout(600);
    }, queryState: function(a3) {
      return a3.getSelectedNode() ? 0 : -1;
    } })), j = e.createClass("AppendSiblingCommand", { base: g, execute: function(a3, b2) {
      var c3 = a3.getSelectedNode(), d2 = c3.parent;
      if (!d2)
        return a3.execCommand("AppendChildNode", b2);
      var e2 = a3.createNode(b2, d2, c3.getIndex() + 1);
      e2.setGlobalLayoutTransform(c3.getGlobalLayoutTransform()), a3.select(e2, true), e2.render(), a3.layout(600);
    }, queryState: function(a3) {
      return a3.getSelectedNode() ? 0 : -1;
    } }), k = e.createClass("RemoverNodeCommand", { base: g, execute: function(a3) {
      var b2 = a3.getSelectedNodes(), c3 = f.getCommonAncestor.apply(null, b2), d2 = b2[0].getIndex();
      if (b2.forEach(function(b3) {
        b3.isRoot() || a3.removeNode(b3);
      }), b2.length == 1) {
        var e2 = c3.children[d2 - 1] || c3.children[d2];
        a3.select(e2 || c3 || a3.getRoot(), true);
      } else
        a3.select(c3 || a3.getRoot(), true);
      a3.layout(600);
    }, queryState: function(a3) {
      var b2 = a3.getSelectedNode();
      return b2 && !b2.isRoot() ? 0 : -1;
    } }), l = e.createClass("AppendParentCommand", { base: g, execute: function(a3, b2) {
      var c3 = a3.getSelectedNodes();
      c3.sort(function(a4, b3) {
        return a4.getIndex() - b3.getIndex();
      });
      var d2 = c3[0].parent, e2 = a3.createNode(b2, d2, c3[0].getIndex());
      c3.forEach(function(a4) {
        e2.appendChild(a4);
      }), e2.setGlobalLayoutTransform(c3[c3.length >> 1].getGlobalLayoutTransform()), a3.select(e2, true), a3.layout(600);
    }, queryState: function(a3) {
      var b2 = a3.getSelectedNodes();
      if (!b2.length)
        return -1;
      var c3 = b2[0].parent;
      if (!c3)
        return -1;
      for (var d2 = 1; d2 < b2.length; d2++)
        if (b2[d2].parent != c3)
          return -1;
      return 0;
    } });
    h.register("NodeModule", function() {
      return { commands: { AppendChildNode: i, AppendSiblingNode: j, RemoveNode: k, AppendParentNode: l }, commandShortcutKeys: { appendsiblingnode: "normal::Enter", appendchildnode: "normal::Insert|Tab", appendparentnode: "normal::Shift+Tab|normal::Shift+Insert", removenode: "normal::Del|Backspace" } };
    });
  } }, b[54] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19), b.r(21), b.r(9)), g = b.r(20), h = b.r(27);
    g.register("NoteModule", function() {
      var a3 = "M9,9H3V8h6L9,9L9,9z M9,7H3V6h6V7z M9,5H3V4h6V5z M8.5,11H2V2h8v7.5 M9,12l2-2V1H1v11", b2 = e.createClass("NoteCommand", { base: f, execute: function(a4, b3) {
        var c4 = a4.getSelectedNode();
        c4.setData("note", b3), c4.render(), c4.getMinder().layout(300);
      }, queryState: function(a4) {
        return a4.getSelectedNodes().length === 1 ? 0 : -1;
      }, queryValue: function(a4) {
        var b3 = a4.getSelectedNode();
        return b3 && b3.getData("note");
      } }), c3 = e.createClass("NoteIcon", { base: e.Group, constructor: function() {
        this.callBase(), this.width = 16, this.height = 17, this.rect = new e.Rect(16, 17, 0.5, -8.5, 2).fill("transparent"), this.path = new e.Path().setPathData(a3).setTranslate(2.5, -6.5), this.addShapes([this.rect, this.path]), this.on("mouseover", function() {
          this.rect.fill("rgba(255, 255, 200, .8)");
        }).on("mouseout", function() {
          this.rect.fill("transparent");
        }), this.setStyle("cursor", "pointer");
      } });
      return { renderers: { right: e.createClass("NoteIconRenderer", { base: h, create: function(a4) {
        var b3 = new c3();
        return b3.on("mousedown", function(b4) {
          b4.preventDefault(), a4.getMinder().fire("editnoterequest");
        }), b3.on("mouseover", function() {
          a4.getMinder().fire("shownoterequest", { node: a4, icon: b3 });
        }), b3.on("mouseout", function() {
          a4.getMinder().fire("hidenoterequest", { node: a4, icon: b3 });
        }), b3;
      }, shouldRender: function(a4) {
        return a4.getData("note");
      }, update: function(a4, b3, c4) {
        var d2 = c4.right + b3.getStyle("space-left"), f2 = c4.cy;
        return a4.path.fill(b3.getStyle("color")), a4.setTranslate(d2, f2), new e.Box(d2, Math.round(f2 - a4.height / 2), a4.width, a4.height);
      } }) }, commands: { note: b2 } };
    });
  } }, b[55] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = (b.r(19), b.r(21), b.r(9), b.r(20)), h = b.r(27), i = e.createClass("OutlineRenderer", { base: h, create: function(a3) {
      var b2 = new e.Rect().setId(f.uuid("node_outline"));
      return this.bringToBack = true, b2;
    }, update: function(a3, b2, c3) {
      var d2 = b2.getStyle("shape"), f2 = b2.getStyle("padding-left"), g2 = b2.getStyle("padding-right"), h2 = b2.getStyle("padding-top"), i2 = b2.getStyle("padding-bottom"), j2 = { x: c3.x - f2, y: c3.y - h2, width: c3.width + f2 + g2, height: c3.height + h2 + i2 }, k2 = b2.getStyle("radius");
      if (d2 && d2 == "circle") {
        var l2 = Math.pow;
        k2 = (0, Math.round)(Math.sqrt(l2(j2.width, 2) + l2(j2.height, 2)) / 2), j2.x = c3.cx - k2, j2.y = c3.cy - k2, j2.width = 2 * k2, j2.height = 2 * k2;
      }
      var m2 = b2.isSelected() ? b2.getMinder().isFocused() ? "selected-" : "blur-selected-" : "";
      return a3.setPosition(j2.x, j2.y).setSize(j2.width, j2.height).setRadius(k2).fill(b2.getData("background") || b2.getStyle(m2 + "background") || b2.getStyle("background")).stroke(b2.getStyle(m2 + "stroke" || b2.getStyle("stroke")), b2.getStyle(m2 + "stroke-width")), new e.Box(j2);
    } }), j = e.createClass("ShadowRenderer", { base: h, create: function(a3) {
      return this.bringToBack = true, new e.Rect();
    }, shouldRender: function(a3) {
      return a3.getStyle("shadow");
    }, update: function(a3, b2, c3) {
      a3.setPosition(c3.x + 4, c3.y + 5).fill(b2.getStyle("shadow"));
      var d2 = b2.getStyle("shape");
      if (d2) {
        if (d2 == "circle") {
          var e2 = Math.max(c3.width, c3.height);
          a3.setSize(e2, e2), a3.setRadius(e2 / 2);
        }
      } else
        a3.setSize(c3.width, c3.height), a3.setRadius(b2.getStyle("radius"));
    } }), k = new e.Marker();
    k.setWidth(10), k.setHeight(12), k.setRef(0, 0), k.setViewBox(-6, -4, 8, 10), k.addShape(new e.Path().setPathData("M-5-3l5,3,-5,3").stroke("#33ffff"));
    var l = /wire/.test(window.location.href), m = e.createClass("WireframeRenderer", { base: h, create: function() {
      var a3 = new e.Group(), b2 = this.oxy = new e.Path().stroke("#f6f").setPathData("M0,-50L0,50M-50,0L50,0"), c3 = this.wireframe = new e.Rect().stroke("lightgreen"), d2 = this.vectorIn = new e.Path().stroke("#66ffff"), f2 = this.vectorOut = new e.Path().stroke("#66ffff");
      return d2.setMarker(k, "end"), f2.setMarker(k, "end"), a3.addShapes([b2, c3, d2, f2]);
    }, shouldRender: function() {
      return l;
    }, update: function(a3, b2, c3) {
      this.wireframe.setPosition(c3.x, c3.y).setSize(c3.width, c3.height);
      var d2 = b2.getVertexIn(), e2 = b2.getVertexOut(), f2 = b2.getLayoutVectorIn().normalize(30), g2 = b2.getLayoutVectorOut().normalize(30);
      this.vectorIn.setPathData(["M", d2.offset(f2.reverse()), "L", d2]), this.vectorOut.setPathData(["M", e2, "l", g2]);
    } });
    g.register("OutlineModule", function() {
      return { events: l ? { ready: function() {
        this.getPaper().addResource(k);
      }, layoutallfinish: function() {
        this.getRoot().traverse(function(a3) {
          a3.getRenderer("WireframeRenderer").update(null, a3, a3.getContentBox());
        });
      } } : null, renderers: { outline: i, outside: [j, m] } };
    });
  } }, b[56] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = (b.r(19), b.r(21), b.r(9)), h = b.r(20), i = b.r(27);
    h.register("PriorityModule", function() {
      var a3 = [null, ["#FF1200", "#840023"], ["#0074FF", "#01467F"], ["#00AF00", "#006300"], ["#FF962E", "#B25000"], ["#A464FF", "#4720C4"], ["#A3A3A3", "#515151"], ["#A3A3A3", "#515151"], ["#A3A3A3", "#515151"], ["#A3A3A3", "#515151"]], b2 = "M0,13c0,3.866,3.134,7,7,7h6c3.866,0,7-3.134,7-7V7H0V13z", c3 = "M20,10c0,3.866-3.134,7-7,7H7c-3.866,0-7-3.134-7-7V7c0-3.866,3.134-7,7-7h6c3.866,0,7,3.134,7,7V10z", d2 = "priority", h2 = e.createClass("PriorityIcon", { base: e.Group, constructor: function() {
        this.callBase(), this.setSize(20), this.create(), this.setId(f.uuid("node_priority"));
      }, setSize: function(a4) {
        this.width = this.height = a4;
      }, create: function() {
        var a4, d3, f2;
        new e.Path().setPathData(c3).fill("white"), a4 = new e.Path().setPathData(b2).setTranslate(0.5, 0.5), d3 = new e.Path().setPathData(c3).setOpacity(0.8).setTranslate(0.5, 0.5), f2 = new e.Text().setX(this.width / 2 - 0.5).setY(this.height / 2).setTextAnchor("middle").setVerticalAlign("middle").setFontItalic(true).setFontSize(12).fill("white"), this.addShapes([a4, d3, f2]), this.mask = d3, this.back = a4, this.number = f2;
      }, setValue: function(b3) {
        var c4 = this.back, d3 = this.mask, e2 = this.number, f2 = a3[b3];
        f2 && (c4.fill(f2[1]), d3.fill(f2[0])), e2.setContent(b3);
      } });
      return { commands: { priority: e.createClass("SetPriorityCommand", { base: g, execute: function(a4, b3) {
        for (var c4 = a4.getSelectedNodes(), e2 = 0; e2 < c4.length; e2++)
          c4[e2].setData(d2, b3 || null).render();
        a4.layout();
      }, queryValue: function(a4) {
        for (var b3, c4 = a4.getSelectedNodes(), e2 = 0; e2 < c4.length && !(b3 = c4[e2].getData(d2)); e2++)
          ;
        return b3 || null;
      }, queryState: function(a4) {
        return a4.getSelectedNodes().length ? 0 : -1;
      } }) }, renderers: { left: e.createClass("PriorityRenderer", { base: i, create: function(a4) {
        return new h2();
      }, shouldRender: function(a4) {
        return a4.getData(d2);
      }, update: function(a4, b3, c4) {
        var f2, g2, h3 = b3.getData(d2), i2 = b3.getStyle("space-left");
        return a4.setValue(h3), f2 = c4.left - a4.width - i2, g2 = -a4.height / 2, a4.setTranslate(f2, g2), new e.Box({ x: f2, y: g2, width: a4.width, height: a4.height });
      } }) } };
    });
  } }, b[57] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = (b.r(19), b.r(21), b.r(9)), h = b.r(20), i = b.r(27);
    h.register("ProgressModule", function() {
      var a3 = this, b2 = "progress", c3 = "#FFED83", d2 = "#43BC00", h2 = "M10,3c4.418,0,8,3.582,8,8h1c0-5.523-3.477-10-9-10S1,5.477,1,11h1C2,6.582,5.582,3,10,3z", j = "#8E8E8E", k = "M10,0C4.477,0,0,4.477,0,10c0,5.523,4.477,10,10,10s10-4.477,10-10C20,4.477,15.523,0,10,0zM10,18c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S14.418,18,10,18z", l = new e.LinearGradient().pipe(function(a4) {
        a4.setStartPosition(0, 0), a4.setEndPosition(0, 1), a4.addStop(0, "#fff"), a4.addStop(1, "#ccc");
      }), m = "M15.812,7.896l-6.75,6.75l-4.5-4.5L6.25,8.459l2.812,2.803l5.062-5.053L15.812,7.896z", n = "#EEE";
      a3.getPaper().addResource(l);
      var o = e.createClass("ProgressIcon", { base: e.Group, constructor: function(a4) {
        this.callBase(), this.setSize(20), this.create(), this.setValue(a4), this.setId(f.uuid("node_progress")), this.translate(0.5, 0.5);
      }, setSize: function(a4) {
        this.width = this.height = a4;
      }, create: function() {
        var a4, b3, f2, g2, i2;
        a4 = new e.Circle(9).fill(c3), b3 = new e.Pie(9, 0).fill(d2), f2 = new e.Path().setPathData(h2).setTranslate(-10, -10).fill(j), g2 = new e.Path().setTranslate(-10, -10).setPathData(k).fill(l), i2 = new e.Path().setTranslate(-10, -10).setPathData(m).fill(n), this.addShapes([a4, b3, f2, i2, g2]), this.pie = b3, this.check = i2;
      }, setValue: function(a4) {
        this.pie.setAngle(-360 * (a4 - 1) / 8), this.check.setVisible(a4 == 9);
      } });
      return { commands: { progress: e.createClass("ProgressCommand", { base: g, execute: function(a4, c4) {
        for (var d3 = a4.getSelectedNodes(), e2 = 0; e2 < d3.length; e2++)
          d3[e2].setData(b2, c4 || null).render();
        a4.layout();
      }, queryValue: function(a4) {
        for (var c4, d3 = a4.getSelectedNodes(), e2 = 0; e2 < d3.length && !(c4 = d3[e2].getData(b2)); e2++)
          ;
        return c4 || null;
      }, queryState: function(a4) {
        return a4.getSelectedNodes().length ? 0 : -1;
      } }) }, renderers: { left: e.createClass("ProgressRenderer", { base: i, create: function(a4) {
        return new o();
      }, shouldRender: function(a4) {
        return a4.getData(b2);
      }, update: function(a4, c4, d3) {
        var f2, g2, h3 = c4.getData(b2), i2 = c4.getStyle("space-left");
        return a4.setValue(h3), f2 = d3.left - a4.width - i2, g2 = -a4.height / 2, a4.setTranslate(f2 + a4.width / 2, g2 + a4.height / 2), new e.Box(f2, g2, a4.width, a4.height);
      } }) } };
    });
  } }, b[58] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19)), g = (b.r(21), b.r(9)), h = b.r(20), i = b.r(27);
    h.register("Resource", function() {
      var a3 = function() {
        var a4, b3, c4, d3, e2, f2, g2, h2, i2, j, k;
        return k = 4 * (1 << 30), a4 = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], e2 = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479], j = function(a5) {
          return a5 < 0 && (a5 += k), ("00000000" + a5.toString(16)).slice(-8);
        }, f2 = [[16, 50, 84, 118, 152, 186, 220, 254], [174, 132, 249, 109, 193, 32, 123, 53], [139, 12, 37, 223, 234, 99, 23, 73], [151, 19, 205, 235, 98, 165, 4, 143], [9, 117, 66, 250, 30, 203, 134, 211], [194, 166, 176, 56, 212, 87, 239, 145], [92, 241, 222, 164, 112, 54, 41, 184], [189, 231, 28, 147, 5, 79, 104, 162], [246, 158, 59, 128, 44, 125, 65, 90], [42, 72, 103, 81, 191, 233, 195, 13]], g2 = function(a5, b4, c5) {
          var d4 = h2[a5] ^ h2[b4];
          h2[a5] = d4 >>> c5 | d4 << 32 - c5;
        }, b3 = function(a5, b4, j2, k2, l) {
          var m = d3 + f2[c4][a5] % 16, n = d3 + (f2[c4][a5] >> 4);
          b4 %= 4, j2 = 4 + j2 % 4, k2 = 8 + k2 % 4, l = 12 + l % 4, h2[b4] += h2[j2] + (i2[m] ^ e2[n % 16]), g2(l, b4, 16), h2[k2] += h2[l], g2(j2, k2, 12), h2[b4] += h2[j2] + (i2[n] ^ e2[m % 16]), g2(l, b4, 8), h2[k2] += h2[l], g2(j2, k2, 7);
        }, function(f3, g3) {
          g3 instanceof Array && g3.length === 4 || (g3 = [0, 0, 0, 0]);
          var k2, l, m, n, o, p, q, r;
          for (l = a4.slice(0), k2 = e2.slice(0, 8), c4 = 0; c4 < 4; c4 += 1)
            k2[c4] ^= g3[c4];
          if (m = 16 * f3.length, o = m % 512 > 446 || m % 512 == 0 ? 0 : m, m % 512 == 432)
            f3 += "\u8001";
          else {
            for (f3 += "\u8000"; f3.length % 32 != 27; )
              f3 += "\0";
            f3 += "";
          }
          for (i2 = [], r = 0; r < f3.length; r += 2)
            i2.push(65536 * f3.charCodeAt(r) + f3.charCodeAt(r + 1));
          for (i2.push(0), i2.push(m), p = i2.length - 16, q = 0, d3 = 0; d3 < i2.length; d3 += 16) {
            for (q += 512, n = d3 === p ? o : Math.min(m, q), h2 = l.concat(k2), h2[12] ^= n, h2[13] ^= n, c4 = 0; c4 < 10; c4 += 1)
              for (r = 0; r < 8; r += 1)
                r < 4 ? b3(r, r, r, r, r) : b3(r, r, r + 1, r + 2, r + 3);
            for (r = 0; r < 8; r += 1)
              l[r] ^= g3[r % 4] ^ h2[r] ^ h2[r + 8];
          }
          return l.map(j).join("");
        };
      }(), b2 = [51, 303, 75, 200, 157, 0, 26, 254].map(function(a4) {
        return e.Color.createHSL(a4, 100, 85);
      });
      e.extendClass(f, { getHashCode: function(b3) {
        b3 = a3(b3);
        var c4, d3, e2 = 1315423911;
        for (c4 = b3.length - 1; c4 >= 0; c4--)
          d3 = b3.charCodeAt(c4), e2 ^= (e2 << 5) + d3 + (e2 >> 2);
        return 2147483647 & e2;
      }, getResourceColor: function(a4) {
        var c4, d3 = this._getResourceColorIndexMapping();
        return Object.prototype.hasOwnProperty.call(d3, a4) || (c4 = this._getNextResourceColorIndex(), d3[a4] = c4), b2[d3[a4]] || e.Color.createHSL(Math.floor(this.getHashCode(a4) / 2147483647 * 359), 100, 85);
      }, getUsedResource: function() {
        var a4, b3 = this._getResourceColorIndexMapping(), c4 = [];
        for (a4 in b3)
          Object.prototype.hasOwnProperty.call(b3, a4) && c4.push(a4);
        return c4;
      }, _getNextResourceColorIndex: function() {
        var a4, c4, d3, e2 = this._getResourceColorIndexMapping();
        c4 = [];
        for (a4 in e2)
          Object.prototype.hasOwnProperty.call(e2, a4) && c4.push(e2[a4]);
        for (d3 = 0; d3 < b2.length; d3++)
          if (!~c4.indexOf(d3))
            return d3;
        return -1;
      }, _getResourceColorIndexMapping: function() {
        return this._resourceColorMapping || (this._resourceColorMapping = {});
      } });
      var c3 = e.createClass("ResourceCommand", { base: g, execute: function(a4, b3) {
        var c4 = a4.getSelectedNodes();
        typeof b3 == "string" && (b3 = [b3]), c4.forEach(function(a5) {
          a5.setData("resource", b3).render();
        }), a4.layout(200);
      }, queryValue: function(a4) {
        var b3 = a4.getSelectedNodes(), c4 = [];
        return b3.forEach(function(a5) {
          var b4 = a5.getData("resource");
          b4 && b4.forEach(function(a6) {
            ~c4.indexOf(a6) || c4.push(a6);
          });
        }), c4;
      }, queryState: function(a4) {
        return a4.getSelectedNode() ? 0 : -1;
      } }), d2 = e.createClass("ResourceOverlay", { base: e.Group, constructor: function() {
        this.callBase();
        var a4, b3;
        b3 = this.rect = new e.Rect().setRadius(4), a4 = this.text = new e.Text().setFontSize(12).setVerticalAlign("middle"), this.addShapes([b3, a4]);
      }, setValue: function(a4, b3) {
        var c4, d3, e2, f2 = 8, g2 = 4;
        c4 = this.text, a4 == this.lastResourceName ? d3 = this.lastBox : (c4.setContent(a4), d3 = c4.getBoundaryBox(), this.lastResourceName = a4, this.lastBox = d3), c4.setX(f2).fill(b3.dec("l", 70)), e2 = this.rect, e2.setPosition(0, d3.y - g2), this.width = Math.round(d3.width + 2 * f2), this.height = Math.round(d3.height + 2 * g2), e2.setSize(this.width, this.height), e2.fill(b3);
      } });
      return { commands: { resource: c3 }, renderers: { right: e.createClass("ResourceRenderer", { base: i, create: function(a4) {
        return this.overlays = [], new e.Group();
      }, shouldRender: function(a4) {
        return a4.getData("resource") && a4.getData("resource").length;
      }, update: function(a4, b3, c4) {
        var f2 = b3.getStyle("space-right"), g2 = this.overlays, h2 = b3.getData("resource").filter(function(a5) {
          return a5 !== null;
        });
        if (h2.length !== 0) {
          var i2, j, k, l = b3.getMinder();
          for (k = 0, i2 = 0; i2 < h2.length; i2++)
            k += f2, j = g2[i2], j || (j = new d2(), g2.push(j), a4.addShape(j)), j.setVisible(true), j.setValue(h2[i2], l.getResourceColor(h2[i2])), j.setTranslate(k, -1), k += j.width;
          for (; j = g2[i2++]; )
            j.setVisible(false);
          return a4.setTranslate(c4.right, 0), new e.Box({ x: c4.right, y: Math.round(-g2[0].height / 2), width: k, height: g2[0].height });
        }
      } }) } };
    });
  } }, b[59] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19), b.r(21), b.r(9), b.r(20));
    b.r(27);
    f.register("Select", function() {
      var a3 = this, b2 = a3.getRenderContainer(), c3 = function() {
        var c4 = null, d3 = new e.Path(), f3 = false;
        return { selectStart: function(a4) {
          if (!a4.originEvent.button && !a4.originEvent.altKey)
            return c4 ? this.selectEnd() : void (c4 = a4.getPosition(b2).round());
        }, selectMove: function(g) {
          if (a3.getStatus() != "textedit" && c4) {
            var h = c4, i = g.getPosition(b2);
            if (!f3) {
              if (e.Vector.fromPoints(h, i).length() < 10)
                return;
              f3 = true, b2.addShape(d3), d3.fill(a3.getStyle("marquee-background")).stroke(a3.getStyle("marquee-stroke")).setOpacity(0.8).getDrawer().clear();
            }
            var j = new e.Box(h.x, h.y, i.x - h.x, i.y - h.y), k = [];
            j.left = Math.round(j.left), j.top = Math.round(j.top), j.right = Math.round(j.right), j.bottom = Math.round(j.bottom), d3.getDrawer().pipe(function() {
              this.clear(), this.moveTo(j.left, j.top), this.lineTo(j.right, j.top), this.lineTo(j.right, j.bottom), this.lineTo(j.left, j.bottom), this.close();
            }), a3.getRoot().traverse(function(a4) {
              a4.getLayoutBox().intersect(j).isEmpty() || k.push(a4);
            }), a3.select(k, true), window.getSelection().removeAllRanges();
          }
        }, selectEnd: function(a4) {
          c4 && (c4 = null), f3 && (d3.fadeOut(200, "ease", 0, function() {
            d3.remove && d3.remove();
          }), f3 = false);
        } };
      }(), d2 = null, f2 = null;
      return { init: function() {
        window.addEventListener("mouseup", function() {
          c3.selectEnd();
        });
      }, events: { mousedown: function(a4) {
        var b3 = a4.getTargetNode();
        b3 ? a4.isShortcutKey("Ctrl") ? this.toggleSelect(b3) : b3.isSelected() ? this.isSingleSelect() || (d2 = b3, f2 = a4.getPosition()) : this.select(b3, true) : (this.removeAllSelectedNodes(), c3.selectStart(a4), this.setStatus("normal"));
      }, mousemove: c3.selectMove, mouseup: function(a4) {
        var b3 = a4.getTargetNode();
        if (b3 && b3 == d2) {
          var g = a4.getPosition();
          e.Vector.fromPoints(f2, g).length() < 1 && this.select(d2, true), d2 = null;
        }
        c3.selectEnd(a4);
      }, "normal.keydown": function(a4) {
        if (a4.isShortcutKey("ctrl+a")) {
          var b3 = [];
          this.getRoot().traverse(function(a5) {
            b3.push(a5);
          }), this.select(b3, true), a4.preventDefault();
        }
      } } };
    });
  } }, b[60] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19), b.r(21), b.r(9)), g = b.r(20);
    b.r(27);
    g.register("StyleModule", function() {
      function a3(a4) {
        for (var c4 = a4.getData(), d2 = 0; d2 < b2.length; d2++)
          if (b2[d2] in c4)
            return true;
      }
      var b2 = ["font-size", "font-family", "font-weight", "font-style", "background", "color"], c3 = null;
      return { commands: { copystyle: e.createClass("CopyStyleCommand", { base: f, execute: function(a4) {
        var d2 = a4.getSelectedNode(), e2 = d2.getData();
        return c3 = {}, b2.forEach(function(a5) {
          a5 in e2 ? c3[a5] = e2[a5] : (c3[a5] = null, delete c3[a5]);
        }), c3;
      }, queryState: function(b3) {
        var c4 = b3.getSelectedNodes();
        return c4.length !== 1 ? -1 : a3(c4[0]) ? 0 : -1;
      } }), pastestyle: e.createClass("PastStyleCommand", { base: f, execute: function(a4) {
        return a4.getSelectedNodes().forEach(function(a5) {
          for (var b3 in c3)
            c3.hasOwnProperty(b3) && a5.setData(b3, c3[b3]);
        }), a4.renderNodeBatch(a4.getSelectedNodes()), a4.layout(300), c3;
      }, queryState: function(a4) {
        return c3 && a4.getSelectedNodes().length ? 0 : -1;
      } }), clearstyle: e.createClass("ClearStyleCommand", { base: f, execute: function(a4) {
        return a4.getSelectedNodes().forEach(function(a5) {
          b2.forEach(function(b3) {
            a5.setData(b3);
          });
        }), a4.renderNodeBatch(a4.getSelectedNodes()), a4.layout(300), c3;
      }, queryState: function(b3) {
        var c4 = b3.getSelectedNodes();
        if (!c4.length)
          return -1;
        for (var d2 = 0; d2 < c4.length; d2++)
          if (a3(c4[d2]))
            return 0;
        return -1;
      } }) } };
    });
  } }, b[61] = { value: function(a2, c2, d) {
    var e = b.r(17), f = b.r(33), g = (b.r(19), b.r(21)), h = b.r(9), i = b.r(20), j = b.r(27), k = { safari: { "\u5FAE\u8F6F\u96C5\u9ED1,Microsoft YaHei": -0.17, "\u6977\u4F53,\u6977\u4F53_GB2312,SimKai": -0.1, "\u96B6\u4E66, SimLi": -0.1, "comic sans ms": -0.23, "impact,chicago": -0.15, "times new roman": -0.1, "arial black,avant garde": -0.17, default: 0 }, ie: { 10: { "\u5FAE\u8F6F\u96C5\u9ED1,Microsoft YaHei": -0.17, "comic sans ms": -0.17, "impact,chicago": -0.08, "times new roman": 0.04, "arial black,avant garde": -0.17, default: -0.15 }, 11: { "\u5FAE\u8F6F\u96C5\u9ED1,Microsoft YaHei": -0.17, "arial,helvetica,sans-serif": -0.17, "comic sans ms": -0.17, "impact,chicago": -0.08, "times new roman": 0.04, "sans-serif": -0.16, "arial black,avant garde": -0.17, default: -0.15 } }, edge: { "\u5FAE\u8F6F\u96C5\u9ED1,Microsoft YaHei": -0.15, "arial,helvetica,sans-serif": -0.17, "comic sans ms": -0.17, "impact,chicago": -0.08, "sans-serif": -0.16, "arial black,avant garde": -0.17, default: -0.15 }, sg: { "\u5FAE\u8F6F\u96C5\u9ED1,Microsoft YaHei": -0.15, "arial,helvetica,sans-serif": -0.05, "comic sans ms": -0.22, "impact,chicago": -0.16, "times new roman": -0.03, "arial black,avant garde": -0.22, default: -0.15 }, chrome: { Mac: { "andale mono": -0.05, "comic sans ms": -0.3, "impact,chicago": -0.13, "times new roman": -0.1, "arial black,avant garde": -0.17, default: 0 }, Win: { "\u5FAE\u8F6F\u96C5\u9ED1,Microsoft YaHei": -0.15, "arial,helvetica,sans-serif": -0.02, "arial black,avant garde": -0.2, "comic sans ms": -0.2, "impact,chicago": -0.12, "times new roman": -0.02, default: -0.15 }, Lux: { "andale mono": -0.05, "comic sans ms": -0.3, "impact,chicago": -0.13, "times new roman": -0.1, "arial black,avant garde": -0.17, default: 0 } }, firefox: { Mac: { "\u5FAE\u8F6F\u96C5\u9ED1,Microsoft YaHei": -0.2, "\u5B8B\u4F53,SimSun": 0.05, "comic sans ms": -0.2, "impact,chicago": -0.15, "arial black,avant garde": -0.17, "times new roman": -0.1, default: 0.05 }, Win: { "\u5FAE\u8F6F\u96C5\u9ED1,Microsoft YaHei": -0.16, "andale mono": -0.17, "arial,helvetica,sans-serif": -0.17, "comic sans ms": -0.22, "impact,chicago": -0.23, "times new roman": -0.22, "sans-serif": -0.22, "arial black,avant garde": -0.17, default: -0.16 }, Lux: { "\u5B8B\u4F53,SimSun": -0.2, "\u5FAE\u8F6F\u96C5\u9ED1,Microsoft YaHei": -0.2, "\u9ED1\u4F53, SimHei": -0.2, "\u96B6\u4E66, SimLi": -0.2, "\u6977\u4F53,\u6977\u4F53_GB2312,SimKai": -0.2, "andale mono": -0.2, "arial,helvetica,sans-serif": -0.2, "comic sans ms": -0.2, "impact,chicago": -0.2, "times new roman": -0.2, "sans-serif": -0.2, "arial black,avant garde": -0.2, default: -0.16 } } }, l = e.createClass("TextRenderer", { base: j, create: function() {
      return new e.Group().setId(f.uuid("node_text"));
    }, update: function(a3, b2) {
      function c3(a4) {
        return b2.getData(a4) || b2.getStyle(a4);
      }
      var d2, f2 = b2.getText(), g2 = f2 ? f2.split("\n") : [" "], h2 = b2.getStyle("line-height"), i2 = c3("font-size"), j2 = c3("font-family") || "default", l2 = h2 * i2 * g2.length - (h2 - 1) * i2, m2 = -l2 / 2, n = e.Browser;
      n.chrome || n.opera || n.bd || n.lb === "chrome" ? d2 = k.chrome[n.platform][j2] : n.gecko ? d2 = k.firefox[n.platform][j2] : n.sg ? d2 = k.sg[j2] : n.safari ? d2 = k.safari[j2] : n.ie ? d2 = k.ie[n.version][j2] : n.edge ? d2 = k.edge[j2] : n.lb && (d2 = 0.9), a3.setTranslate(0, (d2 || 0) * i2);
      var o = new e.Box(), p = Math.round;
      this.setTextStyle(b2, a3);
      var q, r, s, t, u = g2.length, v = a3.getItems().length;
      if (u < v)
        for (q = u, r; r = a3.getItem(q); )
          a3.removeItem(q);
      else if (u > v)
        for (var w = u - v; w--; )
          s = new e.Text().setAttr("text-rendering", "inherit"), e.Browser.ie || e.Browser.edge ? s.setVerticalAlign("top") : s.setAttr("dominant-baseline", "text-before-edge"), a3.addItem(s);
      for (q = 0, s; t = g2[q], s = a3.getItem(q); q++)
        s.setContent(t), (e.Browser.ie || e.Browser.edge) && s.fixPosition();
      this.setTextStyle(b2, a3);
      var x = b2.getText() + ["font-size", "font-name", "font-weight", "font-style"].map(c3).join("/");
      return b2._currentTextHash == x && b2._currentTextGroupBox ? b2._currentTextGroupBox : (b2._currentTextHash = x, function() {
        a3.eachItem(function(a4, b3) {
          var c5 = m2 + a4 * i2 * h2;
          b3.setY(c5);
          var d3 = b3.getBoundaryBox();
          o = o.merge(new e.Box(0, c5, d3.height && d3.width || 1, i2));
        });
        var c4 = new e.Box(p(o.x), p(o.y), p(o.width), p(o.height));
        return b2._currentTextGroupBox = c4, c4;
      });
    }, setTextStyle: function(a3, b2) {
      l._styleHooks.forEach(function(c3) {
        c3(a3, b2);
      });
    } }), m = e.createClass({ base: h, execute: function(a3, b2) {
      var c3 = a3.getSelectedNode();
      c3 && (c3.setText(b2), c3.render(), a3.layout());
    }, queryState: function(a3) {
      return a3.getSelectedNodes().length == 1 ? 0 : -1;
    }, queryValue: function(a3) {
      var b2 = a3.getSelectedNode();
      return b2 ? b2.getText() : null;
    } });
    f.extend(l, { _styleHooks: [], registerStyleHook: function(a3) {
      l._styleHooks.push(a3);
    } }), e.extendClass(g, { getTextGroup: function() {
      return this.getRenderer("TextRenderer").getRenderShape();
    } }), i.register("text", { commands: { text: m }, renderers: { center: l } }), d.exports = l;
  } }, b[62] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19), b.r(21), b.r(9)), g = b.r(20), h = (b.r(27), e.createClass("ViewDragger", { constructor: function(a3) {
      this._minder = a3, this._enabled = false, this._bind();
      var b2 = this;
      this._minder.getViewDragger = function() {
        return b2;
      }, this.setEnabled(false);
    }, isEnabled: function() {
      return this._enabled;
    }, setEnabled: function(a3) {
      var b2 = this._minder.getPaper();
      b2.setStyle("cursor", a3 ? "pointer" : "default"), b2.setStyle("cursor", a3 ? "-webkit-grab" : "default"), this._enabled = a3;
    }, timeline: function() {
      return this._moveTimeline;
    }, move: function(a3, b2) {
      var c3 = (this._minder, this.getMovement().offset(a3));
      this.moveTo(c3, b2);
    }, moveTo: function(a3, b2) {
      if (b2) {
        var c3 = this;
        return this._moveTimeline && this._moveTimeline.stop(), this._moveTimeline = this._minder.getRenderContainer().animate(new e.Animator(this.getMovement(), a3, function(a4, b3) {
          c3.moveTo(b3);
        }), b2, "easeOutCubic").timeline(), this._moveTimeline.on("finish", function() {
          c3._moveTimeline = null;
        }), this;
      }
      this._minder.getRenderContainer().setTranslate(a3.round()), this._minder.fire("viewchange");
    }, getMovement: function() {
      var a3 = this._minder.getRenderContainer().transform.translate;
      return a3 ? a3[0] : new e.Point();
    }, getView: function() {
      var a3 = this._minder, b2 = a3._lastClientSize || { width: a3.getRenderTarget().clientWidth, height: a3.getRenderTarget().clientHeight }, c3 = this.getMovement(), d2 = new e.Box(0, 0, b2.width, b2.height);
      return a3.getPaper().getViewPortMatrix().inverse().translate(-c3.x, -c3.y).transformBox(d2);
    }, _bind: function() {
      function a3(a4) {
        if (d2) {
          d2 = null, a4.stopPropagation(), c3 && (b2.setEnabled(false), c3 = false, b2._minder.getStatus() == "hand" && b2._minder.rollbackStatus());
          b2._minder.getPaper().setStyle("cursor", b2._minder.getStatus() == "hand" ? "-webkit-grab" : "default"), b2._minder.fire("viewchanged");
        }
      }
      var b2 = this, c3 = false, d2 = null, f2 = null;
      this._minder.on("normal.mousedown normal.touchstart inputready.mousedown inputready.touchstart readonly.mousedown readonly.touchstart", function(a4) {
        a4.originEvent.button == 2 && a4.originEvent.preventDefault(), (a4.getTargetNode() == this.getRoot() || a4.originEvent.button == 2 || a4.originEvent.altKey) && (d2 = a4.getPosition("view"), c3 = true);
      }).on("normal.mousemove normal.touchmove readonly.mousemove readonly.touchmove inputready.mousemove inputready.touchmove", function(a4) {
        if (a4.type == "touchmove" && a4.preventDefault(), c3) {
          if (e.Vector.fromPoints(d2, a4.getPosition("view")).length() > 10) {
            this.setStatus("hand", true);
            b2._minder.getPaper().setStyle("cursor", "-webkit-grabbing");
          }
        }
      }).on("hand.beforemousedown hand.beforetouchstart", function(a4) {
        if (b2.isEnabled()) {
          d2 = a4.getPosition("view"), a4.stopPropagation();
          b2._minder.getPaper().setStyle("cursor", "-webkit-grabbing");
        }
      }).on("hand.beforemousemove hand.beforetouchmove", function(a4) {
        if (d2) {
          f2 = a4.getPosition("view");
          var c4 = e.Vector.fromPoints(d2, f2);
          b2.move(c4), a4.stopPropagation(), a4.preventDefault(), a4.originEvent.preventDefault(), d2 = f2;
        }
      }).on("mouseup touchend", a3), window.addEventListener("mouseup", a3), this._minder.on("contextmenu", function(a4) {
        a4.preventDefault();
      });
    } }));
    g.register("View", function() {
      var a3 = e.createClass("ToggleHandCommand", { base: f, execute: function(a4) {
        a4.getStatus() != "hand" ? a4.setStatus("hand", true) : a4.rollbackStatus(), this.setContentChanged(false);
      }, queryState: function(a4) {
        return a4.getStatus() == "hand" ? 1 : 0;
      }, enableReadOnly: true }), b2 = e.createClass("CameraCommand", { base: f, execute: function(a4, b3) {
        b3 = b3 || a4.getRoot();
        var c4 = a4.getPaper().getViewPort(), d2 = b3.getRenderContainer().getRenderBox("view"), f2 = c4.center.x - d2.x - d2.width / 2, g2 = c4.center.y - d2.y, h2 = a4._viewDragger, i = a4.getOption("viewAnimationDuration");
        h2.move(new e.Point(f2, g2), i), this.setContentChanged(false);
      }, enableReadOnly: true }), c3 = e.createClass("MoveCommand", { base: f, execute: function(a4, b3) {
        var c4 = a4._viewDragger, d2 = a4._lastClientSize, f2 = a4.getOption("viewAnimationDuration");
        switch (b3) {
          case "up":
            c4.move(new e.Point(0, d2.height / 2), f2);
            break;
          case "down":
            c4.move(new e.Point(0, -d2.height / 2), f2);
            break;
          case "left":
            c4.move(new e.Point(d2.width / 2, 0), f2);
            break;
          case "right":
            c4.move(new e.Point(-d2.width / 2, 0), f2);
        }
      }, enableReadOnly: true });
      return { init: function() {
        this._viewDragger = new h(this);
      }, commands: { hand: a3, camera: b2, move: c3 }, events: { statuschange: function(a4) {
        this._viewDragger.setEnabled(a4.currentStatus == "hand");
      }, mousewheel: function(a4) {
        var b3, c4;
        if (a4 = a4.originEvent, !a4.ctrlKey && !a4.shiftKey) {
          "wheelDeltaX" in a4 ? (b3 = a4.wheelDeltaX || 0, c4 = a4.wheelDeltaY || 0) : (b3 = 0, c4 = a4.wheelDelta), this._viewDragger.move({ x: b3 / 2.5, y: c4 / 2.5 });
          var d2 = this;
          clearTimeout(this._mousewheeltimer), this._mousewheeltimer = setTimeout(function() {
            d2.fire("viewchanged");
          }, 100), a4.preventDefault();
        }
      }, "normal.dblclick readonly.dblclick": function(a4) {
        a4.kityEvent.targetShape instanceof e.Paper && this.execCommand("camera", this.getRoot(), 800);
      }, "paperrender finishInitHook": function() {
        this.getRenderTarget() && (this.execCommand("camera", null, 0), this._lastClientSize = { width: this.getRenderTarget().clientWidth, height: this.getRenderTarget().clientHeight });
      }, resize: function(a4) {
        var b3 = { width: this.getRenderTarget().clientWidth, height: this.getRenderTarget().clientHeight }, c4 = this._lastClientSize;
        this._viewDragger.move(new e.Point((b3.width - c4.width) / 2 | 0, (b3.height - c4.height) / 2 | 0)), this._lastClientSize = b3;
      }, "selectionchange layoutallfinish": function(a4) {
        var b3 = this.getSelectedNode(), c4 = this;
        if (e.Browser.edge && this.fire("paperrender"), b3) {
          var d2 = this._viewDragger, f2 = d2.timeline();
          if (f2)
            return void f2.on("finish", function() {
              c4.fire("selectionchange");
            });
          var g2 = d2.getView(), h2 = b3.getLayoutBox(), i = 50, j = 0, k = 0;
          h2.right > g2.right ? j += g2.right - h2.right - i : h2.left < g2.left && (j += g2.left - h2.left + i), h2.bottom > g2.bottom && (k += g2.bottom - h2.bottom - i), h2.top < g2.top && (k += g2.top - h2.top + i), (j || k) && d2.move(new e.Point(j, k), 100);
        }
      } } };
    });
  } }, b[63] = { value: function(a2, c2, d) {
    var e = b.r(17), f = (b.r(33), b.r(19)), g = (b.r(21), b.r(9)), h = b.r(20);
    b.r(27);
    h.register("Zoom", function() {
      function a3() {
        var a4 = h2._zoomValue >= 100 ? "optimize-speed" : "geometricPrecision";
        h2.getRenderContainer().setAttr("text-rendering", a4);
      }
      function b2(a4) {
        var b3 = a4.shapeNode, c4 = b3.getCTM(), d3 = new e.Matrix(c4.a, c4.b, c4.c, c4.d, 0.5 + (0 | c4.e), 0.5 + (0 | c4.f));
        b3.setAttribute("transform", "matrix(" + d3.toString() + ")");
      }
      function c3(b3, c4) {
        var f2 = b3.getPaper();
        f2.getViewPort();
        if (c4) {
          a3();
          var g2 = b3.getOption("zoomAnimationDuration");
          if (b3.getRoot().getComplex() > 200 || !g2)
            b3._zoomValue = c4, b3.zoom(c4), b3.fire("viewchange");
          else {
            var h3 = new e.Animator({ beginValue: b3._zoomValue, finishValue: c4, setter: function(a4, b4) {
              a4.zoom(b4);
            } });
            b3._zoomValue = c4, d2 && d2.pause(), d2 = h3.start(b3, g2, "easeInOutSine"), d2.on("finish", function() {
              b3.fire("viewchange");
            });
          }
          b3.fire("zoom", { zoom: c4 });
        }
      }
      var d2, h2 = this;
      e.extendClass(f, { zoom: function(a4) {
        var c4 = this.getPaper(), d3 = c4.getViewPort();
        d3.zoom = a4 / 100, d3.center = { x: d3.center.x, y: d3.center.y }, c4.setViewPort(d3), a4 == 100 && b2(c4);
      }, getZoomValue: function() {
        return this._zoomValue;
      } });
      var i = e.createClass("Zoom", { base: g, execute: c3, queryValue: function(a4) {
        return a4._zoomValue;
      } }), j = e.createClass("ZoomInCommand", { base: g, execute: function(a4) {
        c3(a4, this.nextValue(a4));
      }, queryState: function(a4) {
        return +!this.nextValue(a4);
      }, nextValue: function(a4) {
        var b3, c4 = a4.getOption("zoom");
        for (b3 = 0; b3 < c4.length; b3++)
          if (c4[b3] > a4._zoomValue)
            return c4[b3];
        return 0;
      }, enableReadOnly: true }), k = e.createClass("ZoomOutCommand", { base: g, execute: function(a4) {
        c3(a4, this.nextValue(a4));
      }, queryState: function(a4) {
        return +!this.nextValue(a4);
      }, nextValue: function(a4) {
        var b3, c4 = a4.getOption("zoom");
        for (b3 = c4.length - 1; b3 >= 0; b3--)
          if (c4[b3] < a4._zoomValue)
            return c4[b3];
        return 0;
      }, enableReadOnly: true });
      return { init: function() {
        this._zoomValue = 100, this.setDefaultOptions({ zoom: [10, 20, 50, 100, 200] }), a3();
      }, commands: { zoomin: j, zoomout: k, zoom: i }, events: { "normal.mousewheel readonly.mousewheel": function(a4) {
        if (a4.originEvent.ctrlKey || a4.originEvent.metaKey) {
          var b3 = a4.originEvent.wheelDelta, c4 = this;
          Math.abs(b3) > 100 && (clearTimeout(this._wheelZoomTimeout), this._wheelZoomTimeout = setTimeout(function() {
            c4.getPaper()._zoom;
            b3 > 0 ? c4.execCommand("zoomin") : b3 < 0 && c4.execCommand("zoomout");
          }, 100), a4.originEvent.preventDefault());
        }
      } }, commandShortcutKeys: { zoomin: "ctrl+=", zoomout: "ctrl+-" } };
    });
  } }, b[64] = { value: function(a2, c2, d) {
    b.r(12).registerProtocol("json", d.exports = { fileDescription: "KityMinder \u683C\u5F0F", fileExtension: ".km", dataType: "text", mineType: "application/json", encode: function(a3) {
      return JSON.stringify(a3);
    }, decode: function(a3) {
      return JSON.parse(a3);
    } });
  } }, b[65] = { value: function(a2, c2, d) {
    function e(a3) {
      return f(a3, 1).join("\n");
    }
    function f(a3, b2) {
      var c3 = [];
      b2 = b2 || 1;
      var d2 = g(b2);
      c3.push(d2 + " " + a3.data.text), c3.push(o);
      var e2 = a3.data.note;
      if (e2) {
        var h2 = /^#/.test(e2);
        h2 && (c3.push(p), e2 = e2.replace(/^#+/gm, function(a4) {
          return d2 + a4;
        })), c3.push(e2), h2 && c3.push(q), c3.push(o);
      }
      return a3.children && a3.children.forEach(function(a4) {
        c3 = c3.concat(f(a4, b2 + 1));
      }), c3;
    }
    function g(a3) {
      for (var b2 = ""; a3--; )
        b2 += "#";
      return b2;
    }
    function h(a3) {
      var b2, c3, d2, e2, f2, g2, h2, m2 = {};
      a3 = a3.replace(/^(.+)\n={3,}/, function(a4, b3) {
        return "# " + b3;
      }), b2 = a3.split(n);
      for (var o2 = 0; o2 < b2.length; o2++)
        c3 = b2[o2], d2 = k(c3), d2.noteClose ? g2 = false : d2.noteStart ? g2 = true : (h2 = d2.codeBlock ? !h2 : h2, g2 || h2 || !d2.level || d2.level > e2 + 1 ? f2 && j(f2, c3) : (e2 = d2.level, f2 = i(d2.content, m2[e2 - 1]), m2[e2] = f2));
      return l(m2[1]), m2[1];
    }
    function i(a3, b2) {
      var c3 = { data: { text: a3, note: "" } };
      return b2 && (b2.children ? b2.children.push(c3) : b2.children = [c3]), c3;
    }
    function j(a3, b2) {
      a3.data.note += b2 + "\n";
    }
    function k(a3) {
      var b2 = /^(#+)?\s*(.*)$/.exec(a3);
      return { level: b2[1] && b2[1].length || null, content: b2[2], noteStart: a3 == p, noteClose: a3 == q, codeBlock: /^\s*```/.test(a3) };
    }
    function l(a3) {
      if (/\S/.test(a3.data.note)) {
        for (var b2 = a3.data.note.split("\n"); b2.length && !/\S/.test(b2[0]); )
          b2.shift();
        for (; b2.length && !/\S/.test(b2[b2.length - 1]); )
          b2.pop();
        a3.data.note = b2.join("\n");
      } else
        a3.data.note = null, delete a3.data.note;
      a3.children && a3.children.forEach(l);
    }
    var m = b.r(12), n = /\r\n|\r|\n/, o = "", p = "<!--Note-->", q = "<!--/Note-->";
    m.registerProtocol("markdown", d.exports = { fileDescription: "Markdown/GFM \u683C\u5F0F", fileExtension: ".md", mineType: "text/markdown", dataType: "text", encode: function(a3) {
      return e(a3.root);
    }, decode: function(a3) {
      return h(a3);
    } });
  } }, b[66] = { value: function(a2, c2, d) {
    function e(a3, b2) {
      return new k(function(b3, c3) {
        var d2 = document.createElement("img");
        d2.onload = function() {
          b3({ element: this, x: a3.x, y: a3.y, width: a3.width, height: a3.height });
        }, d2.onerror = function(a4) {
          c3(a4);
        }, d2.crossOrigin = "anonymous", d2.src = a3.url;
      });
    }
    function f(a3, b2) {
      return k(function(b3, c3) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a3.url + "?_=" + Date.now(), true), d2.responseType = "blob", d2.onreadystatechange = function() {
          if (d2.readyState === 4 && d2.status === 200) {
            var c4 = d2.response, e2 = document.createElement("img");
            e2.src = l.createObjectURL(c4), e2.onload = function() {
              l.revokeObjectURL(e2.src), b3({ element: e2, x: a3.x, y: a3.y, width: a3.width, height: a3.height });
            };
          }
        }, d2.send();
      });
    }
    function g(a3) {
      function b2(c4) {
        var d3 = c4.data;
        if (d3.image) {
          a3.renderNode(c4);
          var d3 = c4.data, e3 = d3.image, f3 = d3.imageSize, g3 = c4.getRenderBox("ImageRenderer", a3.getRenderContainer()), h3 = { url: e3, width: f3.width, height: f3.height, x: -j2.getBoundaryBox().x + g3.x, y: -j2.getBoundaryBox().y + g3.y };
          o.push(h3);
        }
        if (d3.expandState !== "collapse")
          for (var i3 = c4.getChildren(), k3 = 0; k3 < i3.length; k3++)
            b2(i3[k3]);
      }
      var c3, d2, e2, f2, g2, h2, i2 = a3.getPaper(), j2 = (i2.container, a3.getRenderContainer()), k2 = j2.getRenderBox(), m = k2.width + 1, n = k2.height + 1;
      c3 = i2.shapeNode.getAttribute("transform"), i2.shapeNode.setAttribute("transform", "translate(0.5, 0.5)"), j2.translate(-k2.x, -k2.y), d2 = i2.container.innerHTML, j2.translate(k2.x, k2.y), i2.shapeNode.setAttribute("transform", c3), e2 = document.createElement("div"), e2.innerHTML = d2, f2 = e2.querySelector("svg"), f2.setAttribute("width", k2.width + 1), f2.setAttribute("height", k2.height + 1), f2.setAttribute("style", 'font-family: Arial, "Microsoft Yahei","Heiti SC";'), e2 = document.createElement("div"), e2.appendChild(f2), d2 = e2.innerHTML, d2 = d2.replace(' xmlns="http://www.w3.org/2000/svg" xmlns:NS1="" NS1:ns1:xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:NS2="" NS2:xmlns:ns1=""', ""), d2 = d2.replace(/&nbsp;|[\x00-\x1F\x7F-\x9F]/g, ""), d2 = d2.replace(/NS\d+:title/gi, "xlink:title"), g2 = new Blob([d2], { type: "image/svg+xml" }), h2 = l.createObjectURL(g2);
      var o = [];
      return b2(a3.getRoot()), { width: m, height: n, dataUrl: h2, xml: d2, imagesInfo: o };
    }
    function h(a3, b2, c3) {
      function d2(a4, b3) {
        a4.save(), a4.fillStyle = b3, a4.fillRect(0, 0, o.width, o.height), a4.restore();
      }
      function h2(a4, b3, c4, d3, e2, f2) {
        e2 && f2 ? a4.drawImage(b3, c4 + A, d3 + A, e2, f2) : a4.drawImage(b3, c4 + A, d3 + A);
      }
      function j2(a4) {
        return a4.toDataURL("image/png");
      }
      function m(a4) {
        var b3 = a4.map(function(a5) {
          return f(a5);
        });
        return k.all(b3);
      }
      function n() {
        return e({ url: y }).then(function(a4) {
          return h2(p, a4.element, w, x, a4.width, a4.height), m(z);
        }).then(function(a4) {
          for (var b3 = 0; b3 < a4.length; b3++)
            h2(p, a4[b3].element, a4[b3].x + w, a4[b3].y + x, a4[b3].width, a4[b3].height);
          l.revokeObjectURL(y), document.body.appendChild(o);
          var c4 = j2(o);
          return document.body.removeChild(o), c4;
        }, function(a4) {
          alert("\u8111\u56FE\u7684\u8282\u70B9\u4E2D\u5305\u542B\u8DE8\u57DF\u56FE\u7247\uFF0C\u5BFC\u51FA\u7684 png \u4E2D\u8282\u70B9\u56FE\u7247\u4E0D\u663E\u793A\uFF0C\u4F60\u53EF\u4EE5\u66FF\u6362\u6389\u8FD9\u4E9B\u8DE8\u57DF\u7684\u56FE\u7247\u5E76\u91CD\u8BD5\u3002"), l.revokeObjectURL(y), document.body.appendChild(o);
          var b3 = j2(o);
          return document.body.removeChild(o), b3;
        });
      }
      var o = document.createElement("canvas"), p = o.getContext("2d"), q = b2.getStyle("background").toString(), r = /url\(\"(.+)\"\)/.exec(q), s = i.Color.parse(q), t = g(b2), u = c3 && c3.width && c3.width > t.width ? c3.width : t.width, v = c3 && c3.height && c3.height > t.height ? c3.height : t.height, w = c3 && c3.width && c3.width > t.width ? (c3.width - t.width) / 2 : 0, x = c3 && c3.height && c3.height > t.height ? (c3.height - t.height) / 2 : 0, y = t.dataUrl, z = t.imagesInfo, A = 20;
      if (o.width = u + 2 * A, o.height = v + 2 * A, r) {
        return e({ url: r[1] }).then(function(a4) {
          return d2(p, p.createPattern(a4.element, "repeat")), n();
        });
      }
      return d2(p, s.toString()), n();
    }
    var i = b.r(17), j = b.r(12), k = b.r(25), l = window.URL || window.webkitURL || window;
    j.registerProtocol("png", d.exports = { fileDescription: "PNG \u56FE\u7247", fileExtension: ".png", mineType: "image/png", dataType: "base64", encode: h });
  } }, b[67] = { value: function(a2, c2, d) {
    function e(a3, b2, c3) {
      function d2(a4, b3) {
        var c4;
        try {
          c4 = b3.getScreenCTM().inverse();
        } catch (a5) {
          throw new Error("Can not inverse source element' ctm.");
        }
        return c4.multiply(a4.getScreenCTM());
      }
      function e2(a4, b3) {
        b3 instanceof Function || (b3 = function() {
        });
        for (var c4 = [], d3 = [], e3 = [], f2 = 0, g = a4.length; f2 < g; f2++)
          switch (a4[f2]) {
            case "M":
            case "L":
            case "T":
            case "S":
            case "A":
            case "C":
            case "H":
            case "V":
            case "Q":
              e3.length && (d3.push(e3.join("")), e3 = []), d3[d3.length - 1] === "," && d3.pop(), d3.length && (b3(d3), c4.push(d3.join("")), d3 = []), d3.push(a4[f2]);
              break;
            case "Z":
            case "z":
              d3.push(e3.join(""), a4[f2]), b3(d3), c4.push(d3.join("")), e3 = [], d3 = [];
              break;
            case ".":
            case "e":
              e3.push(a4[f2]);
              break;
            case "-":
              a4[f2 - 1] !== "e" && (e3.length && d3.push(e3.join(""), ","), e3 = []), e3.push("-");
              break;
            case " ":
            case ",":
              e3.length && (d3.push(e3.join(""), ","), e3 = []);
              break;
            default:
              /\d/.test(a4[f2]) ? e3.push(a4[f2]) : e3.length ? (d3.push(e3.join(""), a4[f2]), e3 = []) : (d3[d3.length - 1] === "," && d3.pop(), d3.push(a4[f2])), f2 + 1 === g && (e3.length && d3.push(e3.join("")), b3(d3), c4.push(d3.join("")), e3 = null, d3 = null);
          }
        return c4.join("");
      }
      function f(a4, b3, c4) {
        if (a4 && a4.tagName !== "defs") {
          if (a4.getAttribute("fill") === "transparent" && a4.setAttribute("fill", "none"), a4.getAttribute("marker-end") && a4.removeAttribute("marker-end"), b3 = b3 || 0, c4 = c4 || 0, a4.getAttribute("transform")) {
            var g = d2(a4, a4.parentElement);
            b3 -= g.e, c4 -= g.f, a4.removeAttribute("transform");
          }
          switch (a4.tagName.toLowerCase()) {
            case "g":
              break;
            case "path":
              var h = a4.getAttribute("d");
              return void (h && (h = e2(h, function(a5) {
                switch (a5[0]) {
                  case "V":
                    a5[1] = +a5[1] - c4;
                    break;
                  case "H":
                    a5[1] = +a5[1] - b3;
                    break;
                  case "M":
                  case "L":
                  case "T":
                    a5[1] = +a5[1] - b3, a5[3] = +a5[3] - c4;
                    break;
                  case "Q":
                  case "S":
                    a5[1] = +a5[1] - b3, a5[3] = +a5[3] - c4, a5[5] = +a5[5] - b3, a5[7] = +a5[7] - c4;
                    break;
                  case "A":
                    a5[11] = +a5[11] - b3, a5[13] = +a5[13] - c4;
                    break;
                  case "C":
                    a5[1] = +a5[1] - b3, a5[3] = +a5[3] - c4, a5[5] = +a5[5] - b3, a5[7] = +a5[7] - c4, a5[9] = +a5[9] - b3, a5[11] = +a5[11] - c4;
                }
              }), a4.setAttribute("d", h), a4.removeAttribute("transform")));
            case "image":
            case "text":
              if (b3 && c4) {
                var i = +a4.getAttribute("x") || 0, j = +a4.getAttribute("y") || 0;
                a4.setAttribute("x", i - b3), a4.setAttribute("y", j - c4);
              }
              return a4.getAttribute("dominant-baseline") && (a4.removeAttribute("dominant-baseline"), a4.setAttribute("dy", ".8em")), void a4.removeAttribute("transform");
          }
          if (a4.children)
            for (var k = 0, l = a4.children.length; k < l; k++)
              f(a4.children[k], b3, c4);
        }
      }
      a3.style.visibility = "hidden", f(a3, b2 || 0, c3 || 0), a3.style.visibility = "visible";
    }
    b.r(12).registerProtocol("svg", d.exports = { fileDescription: "SVG \u77E2\u91CF\u56FE", fileExtension: ".svg", mineType: "image/svg+xml", dataType: "text", encode: function(a3, b2) {
      var c3, d2, f, g = b2.getPaper(), h = g.shapeNode.getAttribute("transform"), i = b2.getRenderContainer(), j = i.getRenderBox(), k = (i.getTransform(), j.width), l = j.height, m = 20;
      return g.shapeNode.setAttribute("transform", "translate(0.5, 0.5)"), c3 = g.container.innerHTML, g.shapeNode.setAttribute("transform", h), d2 = document.createElement("div"), document.body.appendChild(d2), d2.innerHTML = c3, f = d2.querySelector("svg"), f.setAttribute("width", k + 2 * m | 0), f.setAttribute("height", l + 2 * m | 0), f.setAttribute("style", "background: " + b2.getStyle("background")), f.setAttribute("viewBox", [0, 0, k + 2 * m | 0, l + 2 * m | 0].join(" ")), tempSvgContainer = document.createElement("div"), e(f, j.x - m | 0, j.y - m | 0), document.body.removeChild(d2), tempSvgContainer.appendChild(f), c3 = tempSvgContainer.innerHTML, c3 = c3.replace(/&nbsp;/g, "&#xa0;");
    } });
  } }, b[68] = { value: function(a2, c2, d) {
    function e(a3, b2) {
      for (var c3 = ""; b2--; )
        c3 += a3;
      return c3;
    }
    function f(a3) {
      if (!a3)
        return "";
      for (var b2 = [], c3 = ["\\", "n"], d2 = 0, e2 = 0, f2 = a3.length; d2 < f2; d2++)
        if (a3[d2] !== "\n" && a3[d2] !== "\r")
          if (a3[d2] !== c3[e2]) {
            switch (e2) {
              case 0:
                b2.push(a3[d2]);
                break;
              case 1:
                b2.push(a3[d2 - 1], a3[d2]);
            }
            e2 = 0;
          } else
            ++e2 === 2 && (e2 = 0, b2.push("\\\\n"));
        else
          b2.push("\\n"), e2 = 0;
      return b2.join("");
    }
    function g(a3) {
      if (!a3)
        return "";
      for (var b2 = [], c3 = ["\\", "\\", "n"], d2 = 0, e2 = 0, f2 = a3.length; d2 < f2; d2++)
        if (a3[d2] !== c3[e2])
          switch (e2) {
            case 0:
              b2.push(a3[d2]), e2 = 0;
              break;
            case 1:
              a3[d2] === "n" ? b2.push("\n") : b2.push(a3[d2 - 1], a3[d2]), e2 = 0;
              break;
            case 2:
              b2.push(a3[d2 - 2]), a3[d2] !== "\\" && (e2 = 0, b2.push(a3[d2 - 1], a3[d2]));
          }
        else
          ++e2 === 3 && (e2 = 0, b2.push("\\n"));
      return b2.join("");
    }
    function h(a3, b2) {
      var c3 = "";
      return b2 = b2 || 0, c3 += e("	", b2), c3 += f(a3.data.text) + p, a3.children && a3.children.forEach(function(a4) {
        c3 += h(a4, b2 + 1);
      }), c3;
    }
    function i(a3) {
      return !/\S/.test(a3);
    }
    function j(a3) {
      for (var b2 = 0; r.REGEXP.test(a3); )
        a3 = a3.replace(r.REGEXP, ""), b2++;
      return b2;
    }
    function k(a3) {
      return { data: { text: g(a3.replace(r.DELETE, "")) } };
    }
    function l(a3) {
      function b2(a4, b3) {
        (a4.children || (a4.children = [])).push(b3);
      }
      for (var c3, d2, e2, f2, g2 = {}, h2 = a3.split(q), l2 = 0; l2 < h2.length; l2++)
        if (d2 = h2[l2], !i(d2)) {
          if (e2 = j(d2), f2 = k(d2), e2 === 0) {
            if (c3)
              throw new Error("Invalid local format");
            c3 = f2;
          } else {
            if (!g2[e2 - 1])
              throw new Error("Invalid local format");
            b2(g2[e2 - 1], f2);
          }
          g2[e2] = f2;
        }
      return c3;
    }
    function m(a3) {
      function b2(a4) {
        var c3 = {};
        c3.data = a4.getData();
        var d2 = a4.getChildren();
        c3.children = [];
        for (var e2 = 0; e2 < d2.length; e2++)
          c3.children.push(b2(d2[e2]));
        return c3;
      }
      if (a3)
        return /^\s*$/.test(a3.data.text) && (a3.data.text = "\u5206\u652F\u4E3B\u9898"), h(b2(a3));
    }
    var n = b.r(12), o = b.r(17).Browser, p = "\r", q = /\r\n|\r|\n/, r = function(a3) {
      return a3.gecko ? { REGEXP: new RegExp("^(	|" + String.fromCharCode(160, 160, 32, 160) + ")"), DELETE: new RegExp("^(	|" + String.fromCharCode(160, 160, 32, 160) + ")+") } : a3.ie || a3.edge ? { REGEXP: new RegExp("^(" + String.fromCharCode(32) + "|" + String.fromCharCode(160) + ")"), DELETE: new RegExp("^(" + String.fromCharCode(32) + "|" + String.fromCharCode(160) + ")+") } : { REGEXP: /^(\t|\x20{4})/, DELETE: /^(\t|\x20{4})+/ };
    }(o);
    n.registerProtocol("text", d.exports = { fileDescription: "\u5927\u7EB2\u6587\u672C", fileExtension: ".txt", dataType: "text", mineType: "text/plain", encode: function(a3) {
      return h(a3.root, 0);
    }, decode: function(a3) {
      return l(a3);
    }, Node2Text: function(a3) {
      return m(a3);
    } });
  } }, b[69] = { value: function(a2, c2, d) {
    b.r(31).register("default", { getLayout: function(a3) {
      if (a3.getData("layout"))
        return a3.getData("layout");
      var b2 = a3.getLevel();
      return b2 === 0 ? "mind" : b2 === 1 ? a3.getLayoutPointPreview().x > 0 ? "right" : "left" : a3.parent.getLayout();
    }, getConnect: function(a3) {
      return a3.getLevel() == 1 ? "arc" : "under";
    } });
  } }, b[70] = { value: function(a2, c2, d) {
    b.r(31).register("filetree", { getLayout: function(a3) {
      return a3.getData("layout") ? a3.getData("layout") : a3.isRoot() ? "bottom" : "filetree-down";
    }, getConnect: function(a3) {
      return a3.getLevel() == 1 ? "poly" : "l";
    } });
  } }, b[71] = { value: function(a2, c2, d) {
    b.r(31).register("fish-bone", { getLayout: function(a3) {
      if (a3.getData("layout"))
        return a3.getData("layout");
      var b2 = a3.getLevel();
      return b2 === 0 ? "fish-bone-master" : b2 === 1 ? "fish-bone-slave" : a3.getLayoutPointPreview().y > 0 ? "filetree-up" : "filetree-down";
    }, getConnect: function(a3) {
      switch (a3.getLevel()) {
        case 1:
          return "fish-bone-master";
        case 2:
          return "line";
        default:
          return "l";
      }
    } });
  } }, b[72] = { value: function(a2, c2, d) {
    b.r(31).register("right", { getLayout: function(a3) {
      return a3.getData("layout") || "right";
    }, getConnect: function(a3) {
      return a3.getLevel() == 1 ? "arc" : "bezier";
    } });
  } }, b[73] = { value: function(a2, c2, d) {
    b.r(31).register("structure", { getLayout: function(a3) {
      return a3.getData("layout") || "bottom";
    }, getConnect: function(a3) {
      return "poly";
    } });
  } }, b[74] = { value: function(a2, c2, d) {
    b.r(31).register("tianpan", { getLayout: function(a3) {
      return a3.getData("layout") ? a3.getData("layout") : a3.getLevel() === 0 ? "tianpan" : a3.parent.getLayout();
    }, getConnect: function(a3) {
      return "arc_tp";
    } });
  } }, b[75] = { value: function(a2, c2, d) {
    var e = b.r(32);
    ["classic", "classic-compact"].forEach(function(a3) {
      var b2 = a3 == "classic-compact";
      e.register(a3, { background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat', "root-color": "#430", "root-background": "#e9df98", "root-stroke": "#e9df98", "root-font-size": 24, "root-padding": b2 ? [10, 25] : [15, 25], "root-margin": b2 ? [15, 25] : [30, 100], "root-radius": 30, "root-space": 10, "root-shadow": "rgba(0, 0, 0, .25)", "main-color": "#333", "main-background": "#a4c5c0", "main-stroke": "#a4c5c0", "main-font-size": 16, "main-padding": b2 ? [5, 15] : [6, 20], "main-margin": b2 ? [5, 10] : 20, "main-radius": 10, "main-space": 5, "main-shadow": "rgba(0, 0, 0, .25)", "sub-color": "white", "sub-background": "transparent", "sub-stroke": "none", "sub-font-size": 12, "sub-padding": [5, 10], "sub-margin": b2 ? [5, 10] : [15, 20], "sub-tree-margin": 30, "sub-radius": 5, "sub-space": 5, "connect-color": "white", "connect-width": 2, "main-connect-width": 3, "connect-radius": 5, "selected-background": "rgb(254, 219, 0)", "selected-stroke": "rgb(254, 219, 0)", "selected-color": "red", "marquee-background": "rgba(255,255,255,.3)", "marquee-stroke": "white", "drop-hint-color": "yellow", "sub-drop-hint-width": 2, "main-drop-hint-width": 4, "root-drop-hint-width": 4, "order-hint-area-color": "rgba(0, 255, 0, .5)", "order-hint-path-color": "#0f0", "order-hint-path-width": 1, "text-selection-color": "rgb(27,171,255)", "line-height": 1.5 });
    });
  } }, b[76] = { value: function(a2, c2, d) {
    b.r(32).register("fish", { background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat', "root-color": "#430", "root-background": "#e9df98", "root-stroke": "#e9df98", "root-font-size": 24, "root-padding": [35, 35], "root-margin": 30, "root-radius": 100, "root-space": 10, "root-shadow": "rgba(0, 0, 0, .25)", "main-color": "#333", "main-background": "#a4c5c0", "main-stroke": "#a4c5c0", "main-font-size": 16, "main-padding": [6, 20], "main-margin": [20, 20], "main-radius": 5, "main-space": 5, "main-shadow": "rgba(0, 0, 0, .25)", "sub-color": "black", "sub-background": "white", "sub-stroke": "white", "sub-font-size": 12, "sub-padding": [5, 10], "sub-margin": [10], "sub-radius": 5, "sub-space": 5, "connect-color": "white", "connect-width": 3, "main-connect-width": 3, "connect-radius": 5, "selected-background": "rgb(254, 219, 0)", "selected-stroke": "rgb(254, 219, 0)", "marquee-background": "rgba(255,255,255,.3)", "marquee-stroke": "white", "drop-hint-color": "yellow", "drop-hint-width": 4, "order-hint-area-color": "rgba(0, 255, 0, .5)", "order-hint-path-color": "#0f0", "order-hint-path-width": 1, "text-selection-color": "rgb(27,171,255)", "line-height": 1.5 });
  } }, b[77] = { value: function(a2, c2, d) {
    function e(a3, b2, c3) {
      return h.Color.createHSL(a3, b2, c3);
    }
    function f(a3, b2) {
      return { background: "#fbfbfb", "root-color": "white", "root-background": e(a3, 37, 60), "root-stroke": e(a3, 37, 60), "root-font-size": 16, "root-padding": b2 ? [6, 12] : [12, 24], "root-margin": b2 ? 10 : [30, 100], "root-radius": 5, "root-space": 10, "main-color": "black", "main-background": e(a3, 33, 95), "main-stroke": e(a3, 37, 60), "main-stroke-width": 1, "main-font-size": 14, "main-padding": [6, 20], "main-margin": b2 ? 8 : 20, "main-radius": 3, "main-space": 5, "sub-color": "black", "sub-background": "transparent", "sub-stroke": "none", "sub-font-size": 12, "sub-padding": b2 ? [3, 5] : [5, 10], "sub-margin": b2 ? [4, 8] : [15, 20], "sub-radius": 5, "sub-space": 5, "connect-color": e(a3, 37, 60), "connect-width": 1, "connect-radius": 5, "selected-stroke": e(a3, 26, 30), "selected-stroke-width": "3", "blur-selected-stroke": e(a3, 10, 60), "marquee-background": e(a3, 100, 80).set("a", 0.1), "marquee-stroke": e(a3, 37, 60), "drop-hint-color": e(a3, 26, 35), "drop-hint-width": 5, "order-hint-area-color": e(a3, 100, 30).set("a", 0.5), "order-hint-path-color": e(a3, 100, 25), "order-hint-path-width": 1, "text-selection-color": e(a3, 100, 20), "line-height": 1.5 };
    }
    var g, h = b.r(17), i = b.r(32), j = { red: 0, soil: 25, green: 122, blue: 204, purple: 246, pink: 334 };
    for (g in j)
      i.register("fresh-" + g, f(j[g])), i.register("fresh-" + g + "-compat", f(j[g], true));
  } }, b[78] = { value: function(a2, c2, d) {
    var e = b.r(32);
    ["snow", "snow-compact"].forEach(function(a3) {
      var b2 = a3 == "snow-compact";
      e.register(a3, { background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat', "root-color": "#430", "root-background": "#e9df98", "root-stroke": "#e9df98", "root-font-size": 24, "root-padding": b2 ? [5, 10] : [15, 25], "root-margin": b2 ? 15 : 30, "root-radius": 5, "root-space": 10, "root-shadow": "rgba(0, 0, 0, .25)", "main-color": "#333", "main-background": "#a4c5c0", "main-stroke": "#a4c5c0", "main-font-size": 16, "main-padding": b2 ? [4, 10] : [6, 20], "main-margin": b2 ? [5, 10] : [20, 40], "main-radius": 5, "main-space": 5, "main-shadow": "rgba(0, 0, 0, .25)", "sub-color": "black", "sub-background": "white", "sub-stroke": "white", "sub-font-size": 12, "sub-padding": [5, 10], "sub-margin": b2 ? [5, 10] : [10, 20], "sub-radius": 5, "sub-space": 5, "connect-color": "white", "connect-width": 2, "main-connect-width": 3, "connect-radius": 5, "selected-background": "rgb(254, 219, 0)", "selected-stroke": "rgb(254, 219, 0)", "marquee-background": "rgba(255,255,255,.3)", "marquee-stroke": "white", "drop-hint-color": "yellow", "drop-hint-width": 4, "order-hint-area-color": "rgba(0, 255, 0, .5)", "order-hint-path-color": "#0f0", "order-hint-path-width": 1, "text-selection-color": "rgb(27,171,255)", "line-height": 1.5 });
    });
  } }, b[79] = { value: function(a2, c2, d) {
    var e = b.r(32);
    ["tianpan", "tianpan-compact"].forEach(function(a3) {
      var b2 = a3 == "tianpan-compact";
      e.register(a3, { background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat', "root-color": "#430", "root-background": "#e9df98", "root-stroke": "#e9df98", "root-font-size": 25, "root-padding": b2 ? 15 : 20, "root-margin": b2 ? [15, 25] : 100, "root-radius": 30, "root-space": 10, "root-shadow": "rgba(0, 0, 0, .25)", "root-shape": "circle", "main-color": "#333", "main-background": "#a4c5c0", "main-stroke": "#a4c5c0", "main-font-size": 15, "main-padding": b2 ? 10 : 12, "main-margin": b2 ? 10 : 12, "main-radius": 10, "main-space": 5, "main-shadow": "rgba(0, 0, 0, .25)", "main-shape": "circle", "sub-color": "#333", "sub-background": "#99ca6a", "sub-stroke": "#a4c5c0", "sub-font-size": 13, "sub-padding": 5, "sub-margin": b2 ? 6 : 10, "sub-tree-margin": 30, "sub-radius": 5, "sub-space": 5, "sub-shadow": "rgba(0, 0, 0, .25)", "sub-shape": "circle", "connect-color": "white", "connect-width": 2, "main-connect-width": 3, "connect-radius": 5, "selected-background": "rgb(254, 219, 0)", "selected-stroke": "rgb(254, 219, 0)", "selected-color": "black", "marquee-background": "rgba(255,255,255,.3)", "marquee-stroke": "white", "drop-hint-color": "yellow", "sub-drop-hint-width": 2, "main-drop-hint-width": 4, "root-drop-hint-width": 4, "order-hint-area-color": "rgba(0, 255, 0, .5)", "order-hint-path-color": "#0f0", "order-hint-path-width": 1, "text-selection-color": "rgb(27,171,255)", "line-height": 1.4 });
    });
  } }, b[80] = { value: function(a2, c2, d) {
    b.r(32).register("wire", { background: "black", color: "#999", stroke: "none", padding: 10, margin: 20, "font-size": 14, "connect-color": "#999", "connect-width": 1, "selected-background": "#999", "selected-color": "black", "marquee-background": "rgba(255,255,255,.3)", "marquee-stroke": "white", "drop-hint-color": "yellow", "sub-drop-hint-width": 2, "main-drop-hint-width": 4, "root-drop-hint-width": 4, "order-hint-area-color": "rgba(0, 255, 0, .5)", "order-hint-path-color": "#0f0", "order-hint-path-width": 1, "text-selection-color": "rgb(27,171,255)", "line-height": 1.5 });
  } };
  var c = { "expose-kityminder": 34 };
  a("expose-kityminder");
}();
