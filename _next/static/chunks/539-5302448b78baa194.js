"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [539],
  {
    3856: function (t, e, i) {
      i.d(e, {
        p: function () {
          return s;
        },
      });
      let s = (0, i(2265).createContext)({});
    },
    3449: function (t, e, i) {
      i.d(e, {
        _: function () {
          return s;
        },
      });
      let s = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    4561: function (t, e, i) {
      i.d(e, {
        O: function () {
          return s;
        },
      });
      let s = (0, i(2265).createContext)(null);
    },
    7839: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var s = i(6832);
      class n {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(t, e) {
        let i = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new n(),
                  i = new n(),
                  s = 0,
                  r = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (t, n = !1, o = !1) => {
                      let l = o && r,
                        h = l ? e : i;
                      return (
                        n && a.add(t),
                        h.add(t) && l && r && (s = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), a.delete(t);
                    },
                    process: (n) => {
                      if (r) {
                        o = !0;
                        return;
                      }
                      if (
                        ((r = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (s = e.order.length))
                      )
                        for (let i = 0; i < s; i++) {
                          let s = e.order[i];
                          a.has(s) && (l.schedule(s), t()), s(n);
                        }
                      (r = !1), o && ((o = !1), l.process(n));
                    },
                  };
                return l;
              })(() => (i = !0))),
              t
            ),
            {}
          ),
          h = (t) => {
            l[t].process(a);
          },
          u = () => {
            let n = s.c.useManualTiming ? a.timestamp : performance.now();
            (i = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(n - a.timestamp, 40), 1)),
              (a.timestamp = n),
              (a.isProcessing = !0),
              r.forEach(h),
              (a.isProcessing = !1),
              i && e && ((o = !1), t(u));
          },
          d = () => {
            (i = !0), (o = !0), a.isProcessing || t(u);
          };
        return {
          schedule: r.reduce((t, e) => {
            let s = l[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || d(), s.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => r.forEach((e) => l[e].cancel(t)),
          state: a,
          steps: l,
        };
      }
    },
    4205: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return r;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return n;
        },
        frameData: function () {
          return o;
        },
      });
      var s = i(3393);
      let {
        schedule: n,
        cancel: r,
        state: o,
        steps: a,
      } = (0, i(7839).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : s.Z,
        !0
      );
    },
    4539: function (t, e, i) {
      let s, n;
      i.d(e, {
        E: function () {
          return n1;
        },
      });
      var r,
        o,
        a = i(2265),
        l = i(3449);
      let h = (0, a.createContext)({});
      var u = i(4561),
        d = i(5526);
      let c = (0, a.createContext)({ strict: !1 }),
        p = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        m = "data-" + p("framerAppearId"),
        { schedule: f, cancel: v } = (0, i(7839).Z)(queueMicrotask, !1);
      function g(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function y(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function x(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let P = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        T = ["initial", ...P];
      function b(t) {
        return x(t.animate) || T.some((e) => y(t[e]));
      }
      function w(t) {
        return !!(b(t) || t.variants);
      }
      function S(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let A = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        V = {};
      for (let t in A) V[t] = { isEnabled: (e) => A[t].some((t) => !!e[t]) };
      var E = i(1702),
        M = i(3856);
      let C = (0, a.createContext)({}),
        D = Symbol.for("motionComponentSymbol"),
        R = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function k(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (R.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let L = {},
        F = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        j = new Set(F);
      function B(t, { layout: e, layoutId: i }) {
        return (
          j.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!L[t] || "opacity" === t))
        );
      }
      let O = (t) => !!(t && t.getVelocity),
        I = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        U = F.length,
        W = (t) => (e) => "string" == typeof e && e.startsWith(t),
        N = W("--"),
        $ = W("var(--"),
        H = (t) => !!$(t) && Z.test(t.split("/*")[0].trim()),
        Z =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        z = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        K = (t, e, i) => (i > e ? e : i < t ? t : i),
        Y = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        X = { ...Y, transform: (t) => K(0, 1, t) },
        G = { ...Y, default: 1 },
        q = (t) => Math.round(1e5 * t) / 1e5,
        _ = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        J =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        Q =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function tt(t) {
        return "string" == typeof t;
      }
      let te = (t) => ({
          test: (e) => tt(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        ti = te("deg"),
        ts = te("%"),
        tn = te("px"),
        tr = te("vh"),
        to = te("vw"),
        ta = {
          ...ts,
          parse: (t) => ts.parse(t) / 100,
          transform: (t) => ts.transform(100 * t),
        },
        tl = { ...Y, transform: Math.round },
        th = {
          borderWidth: tn,
          borderTopWidth: tn,
          borderRightWidth: tn,
          borderBottomWidth: tn,
          borderLeftWidth: tn,
          borderRadius: tn,
          radius: tn,
          borderTopLeftRadius: tn,
          borderTopRightRadius: tn,
          borderBottomRightRadius: tn,
          borderBottomLeftRadius: tn,
          width: tn,
          maxWidth: tn,
          height: tn,
          maxHeight: tn,
          size: tn,
          top: tn,
          right: tn,
          bottom: tn,
          left: tn,
          padding: tn,
          paddingTop: tn,
          paddingRight: tn,
          paddingBottom: tn,
          paddingLeft: tn,
          margin: tn,
          marginTop: tn,
          marginRight: tn,
          marginBottom: tn,
          marginLeft: tn,
          rotate: ti,
          rotateX: ti,
          rotateY: ti,
          rotateZ: ti,
          scale: G,
          scaleX: G,
          scaleY: G,
          scaleZ: G,
          skew: ti,
          skewX: ti,
          skewY: ti,
          distance: tn,
          translateX: tn,
          translateY: tn,
          translateZ: tn,
          x: tn,
          y: tn,
          z: tn,
          perspective: tn,
          transformPerspective: tn,
          opacity: X,
          originX: ta,
          originY: ta,
          originZ: tn,
          zIndex: tl,
          backgroundPositionX: tn,
          backgroundPositionY: tn,
          fillOpacity: X,
          strokeOpacity: X,
          numOctaves: tl,
        };
      function tu(t, e, i, s) {
        let { style: n, vars: r, transform: o, transformOrigin: a } = t,
          l = !1,
          h = !1,
          u = !0;
        for (let t in e) {
          let i = e[t];
          if (N(t)) {
            r[t] = i;
            continue;
          }
          let s = th[t],
            d = z(i, s);
          if (j.has(t)) {
            if (((l = !0), (o[t] = d), !u)) continue;
            i !== (s.default || 0) && (u = !1);
          } else t.startsWith("origin") ? ((h = !0), (a[t] = d)) : (n[t] = d);
        }
        if (
          (!e.transform &&
            (l || s
              ? (n.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  s,
                  n
                ) {
                  let r = "";
                  for (let e = 0; e < U; e++) {
                    let i = F[e];
                    if (void 0 !== t[i]) {
                      let e = I[i] || i;
                      r += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (r += "translateZ(0)"),
                    (r = r.trim()),
                    n ? (r = n(t, s ? "" : r)) : i && s && (r = "none"),
                    r
                  );
                })(t.transform, i, u, s))
              : n.transform && (n.transform = "none")),
          h)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let td = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tc(t, e, i) {
        for (let s in e) O(e[s]) || B(s, i) || (t[s] = e[s]);
      }
      let tp = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function tm(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          tp.has(t)
        );
      }
      let tf = (t) => !tm(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (tf = (t) => (t.startsWith("on") ? !tm(t) : r(t)));
      } catch (t) {}
      function tv(t, e, i) {
        return "string" == typeof t ? t : tn.transform(e + i * t);
      }
      let tg = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ty = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tx(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          originX: n,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...h
        },
        u,
        d,
        c
      ) {
        if ((tu(t, h, u, c), d)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: m, dimensions: f } = t;
        p.transform && (f && (m.transform = p.transform), delete p.transform),
          f &&
            (void 0 !== n || void 0 !== r || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let s = tv(e, t.x, t.width),
                n = tv(i, t.y, t.height);
              return `${s} ${n}`;
            })(f, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== s && (p.scale = s),
          void 0 !== o &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let r = n ? tg : ty;
              t[r.offset] = tn.transform(-s);
              let o = tn.transform(e),
                a = tn.transform(i);
              t[r.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let tP = () => ({ ...td(), attrs: {} }),
        tT = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tb(t, { style: e, vars: i }, s, n) {
        for (let r in (Object.assign(t.style, e, n && n.getProjectionStyles(s)),
        i))
          t.style.setProperty(r, i[r]);
      }
      let tw = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tS(t, e, i, s) {
        for (let i in (tb(t, e, void 0, s), e.attrs))
          t.setAttribute(tw.has(i) ? i : p(i), e.attrs[i]);
      }
      function tA(t, e) {
        let { style: i } = t,
          s = {};
        for (let n in i)
          (O(i[n]) || (e.style && O(e.style[n])) || B(n, t)) && (s[n] = i[n]);
        return s;
      }
      function tV(t, e) {
        let i = tA(t, e);
        for (let s in t)
          (O(t[s]) || O(e[s])) &&
            (i[
              -1 !== F.indexOf(s)
                ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
                : s
            ] = t[s]);
        return i;
      }
      function tE(t, e, i, s = {}, n = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, s, n)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, s, n)),
          e
        );
      }
      var tM = i(2435);
      let tC = (t) => Array.isArray(t),
        tD = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tR = (t) => (tC(t) ? t[t.length - 1] || 0 : t);
      function tk(t) {
        let e = O(t) ? t.get() : t;
        return tD(e) ? e.toValue() : e;
      }
      let tL = (t) => (e, i) => {
        let s = (0, a.useContext)(h),
          n = (0, a.useContext)(u.O),
          r = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: i,
              },
              s,
              n,
              r
            ) {
              let o = {
                latestValues: (function (t, e, i, s) {
                  let n = {},
                    r = s(t, {});
                  for (let t in r) n[t] = tk(r[t]);
                  let { initial: o, animate: a } = t,
                    l = b(t),
                    h = w(t);
                  e &&
                    h &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let u = !!i && !1 === i.initial,
                    d = (u = u || !1 === o) ? a : o;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !x(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((e) => {
                        let i = tE(t, e);
                        if (!i) return;
                        let { transitionEnd: s, transition: r, ...o } = i;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = u ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (n[t] = e);
                        }
                        for (let t in s) n[t] = s[t];
                      }),
                    n
                  );
                })(s, n, r, t),
                renderState: e(),
              };
              return i && (o.mount = (t) => i(s, t, o)), o;
            })(t, e, s, n);
        return i ? r() : (0, tM.h)(r);
      };
      var tF = i(4205);
      let tj = {
          useVisualState: tL({
            scrapeMotionValuesFromProps: tV,
            createRenderState: tP,
            onMount: (t, e, { renderState: i, latestValues: s }) => {
              tF.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tF.Wi.render(() => {
                  tx(
                    i,
                    s,
                    { enableHardwareAcceleration: !1 },
                    tT(e.tagName),
                    t.transformTemplate
                  ),
                    tS(e, i);
                });
            },
          }),
        },
        tB = {
          useVisualState: tL({
            scrapeMotionValuesFromProps: tA,
            createRenderState: td,
          }),
        };
      function tO(t, e, i, s = { passive: !0 }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      let tI = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tU(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tW = (t) => (e) => tI(e) && t(e, tU(e));
      function tN(t, e, i, s) {
        return tO(t, e, tW(i), s);
      }
      let t$ = (t, e) => (i) => e(t(i)),
        tH = (...t) => t.reduce(t$);
      function tZ(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tz = tZ("dragHorizontal"),
        tK = tZ("dragVertical");
      function tY(t) {
        let e = !1;
        if ("y" === t) e = tK();
        else if ("x" === t) e = tz();
        else {
          let t = tz(),
            i = tK();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tX() {
        let t = tY(!0);
        return !t || (t(), !1);
      }
      class tG {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function tq(t, e) {
        let i = "onHover" + (e ? "Start" : "End");
        return tN(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (s, n) => {
            if ("touch" === s.pointerType || tX()) return;
            let r = t.getProps();
            t.animationState &&
              r.whileHover &&
              t.animationState.setActive("whileHover", e),
              r[i] && r[i](s, n);
          },
          { passive: !t.getProps()[i] }
        );
      }
      class t_ extends tG {
        mount() {
          this.unmount = tH(tq(this.node, !0), tq(this.node, !1));
        }
        unmount() {}
      }
      class tJ extends tG {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = tH(
            tO(this.node.current, "focus", () => this.onFocus()),
            tO(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tQ = (t, e) => !!e && (t === e || tQ(t, e.parentElement));
      var t0 = i(3393);
      function t1(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tU(i));
      }
      class t5 extends tG {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = t0.Z),
            (this.removeEndListeners = t0.Z),
            (this.removeAccessibleListeners = t0.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = tN(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: i,
                      onTapCancel: s,
                      globalTapTarget: n,
                    } = this.node.getProps();
                    n || tQ(this.node.current, t.target)
                      ? i && i(t, e)
                      : s && s(t, e);
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                n = tN(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = tH(s, n)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tO(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tO(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          t1("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && i(t, e);
                          });
                      }
                    )),
                    t1("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tO(this.node.current, "blur", () => {
                  this.isPressing &&
                    t1("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = tH(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: s } = this.node.getProps();
          s &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && i(t, e);
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tX()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && i(t, e);
        }
        mount() {
          let t = this.node.getProps(),
            e = tN(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tO(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = tH(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let t2 = new WeakMap(),
        t3 = new WeakMap(),
        t6 = (t) => {
          let e = t2.get(t.target);
          e && e(t);
        },
        t9 = (t) => {
          t.forEach(t6);
        },
        t4 = { some: 0, all: 1 };
      class t8 extends tG {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = "some", once: n } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof s ? s : t4[s],
            };
          return (function (t, e, i) {
            let s = (function ({ root: t, ...e }) {
              let i = t || document;
              t3.has(i) || t3.set(i, {});
              let s = t3.get(i),
                n = JSON.stringify(e);
              return (
                s[n] ||
                  (s[n] = new IntersectionObserver(t9, { root: t, ...e })),
                s[n]
              );
            })(e);
            return (
              t2.set(t, i),
              s.observe(t),
              () => {
                t2.delete(t), s.unobserve(t);
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: s } =
                this.node.getProps(),
              r = e ? i : s;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function t7(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function et(t, e, i) {
        let s = t.getProps();
        return tE(
          s,
          e,
          void 0 !== i ? i : s.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let ee = (t) => 1e3 * t,
        ei = (t) => t / 1e3,
        es = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        en = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        er = { type: "keyframes", duration: 0.8 },
        eo = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ea = (t, { keyframes: e }) =>
          e.length > 2
            ? er
            : j.has(t)
            ? t.startsWith("scale")
              ? en(e[1])
              : es
            : eo;
      function el(t, e) {
        return t[e] || t.default || t;
      }
      var eh = i(6832);
      let eu = { current: !1 },
        ed = (t) => null !== t;
      function ec(t, { repeat: e, repeatType: i = "loop" }, s) {
        let n = t.filter(ed),
          r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return r && void 0 !== s ? s : n[r];
      }
      function ep() {
        s = void 0;
      }
      let em = {
          now: () => (
            void 0 === s &&
              em.set(
                tF.frameData.isProcessing || eh.c.useManualTiming
                  ? tF.frameData.timestamp
                  : performance.now()
              ),
            s
          ),
          set: (t) => {
            (s = t), queueMicrotask(ep);
          },
        },
        ef = (t) => /^0[^.\s]+$/u.test(t);
      var ev = i(9908);
      let eg = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        ey = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ex = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        eP = (t) => t === Y || t === tn,
        eT = (t, e) => parseFloat(t.split(", ")[e]),
        eb =
          (t, e) =>
          (i, { transform: s }) => {
            if ("none" === s || !s) return 0;
            let n = s.match(/^matrix3d\((.+)\)$/u);
            if (n) return eT(n[1], e);
            {
              let e = s.match(/^matrix\((.+)\)$/u);
              return e ? eT(e[1], t) : 0;
            }
          },
        ew = new Set(["x", "y", "z"]),
        eS = F.filter((t) => !ew.has(t)),
        eA = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: eb(4, 13),
          y: eb(5, 14),
        };
      (eA.translateX = eA.x), (eA.translateY = eA.y);
      let eV = (t) => (e) => e.test(t),
        eE = [
          Y,
          tn,
          ts,
          ti,
          to,
          tr,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eM = (t) => eE.find(eV(t)),
        eC = new Set(),
        eD = !1,
        eR = !1;
      function ek() {
        eR &&
          (eC.forEach((t) => {
            t.needsMeasurement && t.unsetTransforms();
          }),
          eC.forEach((t) => {
            t.needsMeasurement && t.measureInitialState();
          }),
          eC.forEach((t) => {
            t.needsMeasurement && t.renderEndStyles();
          }),
          eC.forEach((t) => {
            t.needsMeasurement && t.measureEndState();
          })),
          (eR = !1),
          (eD = !1),
          eC.forEach((t) => t.complete()),
          eC.clear();
      }
      function eL() {
        eC.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eR = !0);
        });
      }
      class eF {
        constructor(t, e, i, s, n, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eC.add(this),
                eD || ((eD = !0), tF.Wi.read(eL), tF.Wi.resolveKeyframes(ek)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == s ? void 0 : s.get(),
                  r = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let s = i.readValue(e, r);
                  null != s && (t[0] = s);
                }
                void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        unsetTransforms() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eC.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eC.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let ej = (t, e) => (i) =>
          !!(
            (tt(i) && Q.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eB = (t, e, i) => (s) => {
          if (!tt(s)) return s;
          let [n, r, o, a] = s.match(_);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eO = (t) => K(0, 255, t),
        eI = { ...Y, transform: (t) => Math.round(eO(t)) },
        eU = {
          test: ej("rgb", "red"),
          parse: eB("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            eI.transform(t) +
            ", " +
            eI.transform(e) +
            ", " +
            eI.transform(i) +
            ", " +
            q(X.transform(s)) +
            ")",
        },
        eW = {
          test: ej("#"),
          parse: function (t) {
            let e = "",
              i = "",
              s = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (s = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (s = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (s += s),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: eU.transform,
        },
        eN = {
          test: ej("hsl", "hue"),
          parse: eB("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            ts.transform(q(e)) +
            ", " +
            ts.transform(q(i)) +
            ", " +
            q(X.transform(s)) +
            ")",
        },
        e$ = {
          test: (t) => eU.test(t) || eW.test(t) || eN.test(t),
          parse: (t) =>
            eU.test(t) ? eU.parse(t) : eN.test(t) ? eN.parse(t) : eW.parse(t),
          transform: (t) =>
            tt(t)
              ? t
              : t.hasOwnProperty("red")
              ? eU.transform(t)
              : eN.transform(t),
        },
        eH = "number",
        eZ = "color",
        ez =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function eK(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          n = [],
          r = 0,
          o = e
            .replace(
              ez,
              (t) => (
                e$.test(t)
                  ? (s.color.push(r), n.push(eZ), i.push(e$.parse(t)))
                  : t.startsWith("var(")
                  ? (s.var.push(r), n.push("var"), i.push(t))
                  : (s.number.push(r), n.push(eH), i.push(parseFloat(t))),
                ++r,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: s, types: n };
      }
      function eY(t) {
        return eK(t).values;
      }
      function eX(t) {
        let { split: e, types: i } = eK(t),
          s = e.length;
        return (t) => {
          let n = "";
          for (let r = 0; r < s; r++)
            if (((n += e[r]), void 0 !== t[r])) {
              let e = i[r];
              e === eH
                ? (n += q(t[r]))
                : e === eZ
                ? (n += e$.transform(t[r]))
                : (n += t[r]);
            }
          return n;
        };
      }
      let eG = (t) => ("number" == typeof t ? 0 : t),
        eq = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              tt(t) &&
              ((null === (e = t.match(_)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(J)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eY,
          createTransformer: eX,
          getAnimatableNone: function (t) {
            let e = eY(t);
            return eX(t)(e.map(eG));
          },
        },
        e_ = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function eJ(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(_) || [];
        if (!s) return t;
        let n = i.replace(s, ""),
          r = e_.has(e) ? 1 : 0;
        return s !== i && (r *= 100), e + "(" + r + n + ")";
      }
      let eQ = /\b([a-z-]*)\(.*?\)/gu,
        e0 = {
          ...eq,
          getAnimatableNone: (t) => {
            let e = t.match(eQ);
            return e ? e.map(eJ).join(" ") : t;
          },
        },
        e1 = {
          ...th,
          color: e$,
          backgroundColor: e$,
          outlineColor: e$,
          fill: e$,
          stroke: e$,
          borderColor: e$,
          borderTopColor: e$,
          borderRightColor: e$,
          borderBottomColor: e$,
          borderLeftColor: e$,
          filter: e0,
          WebkitFilter: e0,
        },
        e5 = (t) => e1[t];
      function e2(t, e) {
        let i = e5(t);
        return (
          i !== e0 && (i = eq),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      class e3 extends eF {
        constructor(t, e, i, s) {
          super(t, e, i, s, null == s ? void 0 : s.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && H(s)) {
              let n = (function t(e, i, s = 1) {
                (0, ev.k)(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, r] = (function (t) {
                  let e = ey.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return [`--${null != i ? i : s}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return eg(t) ? parseFloat(t) : t;
                }
                return H(r) ? t(r, i, s + 1) : r;
              })(s, e.current);
              void 0 !== n && (t[i] = n);
            }
          }
          if (!ex.has(i) || 2 !== t.length) return this.resolveNoneKeyframes();
          let [s, n] = t,
            r = eM(s),
            o = eM(n);
          if (r !== o) {
            if (eP(r) && eP(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var s;
            ("number" == typeof (s = t[e])
              ? 0 === s
              : null === s || "none" === s || "0" === s || ef(s)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; )
                "string" == typeof t[n] &&
                  "none" !== t[n] &&
                  "0" !== t[n] &&
                  (s = t[n]),
                  n++;
              if (s && i) for (let n of e) t[n] = e2(i, s);
            })(t, i, e);
        }
        unsetTransforms() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t.current) return;
          this.removedTransforms = (function (t) {
            let e = [];
            return (
              eS.forEach((i) => {
                let s = t.getValue(i);
                void 0 !== s &&
                  (e.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
              }),
              e.length && t.render(),
              e
            );
          })(t);
          let s = i[i.length - 1];
          t.getValue(e, s).jump(s, !1);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          t.current &&
            ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eA[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin));
        }
        renderEndStyles() {
          this.element.render();
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let r = s.length - 1,
            o = s[r];
          (s[r] = eA[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o && (this.finalKeyframe = o),
            "height" === i &&
              void 0 !== this.suspendedScrollY &&
              window.scrollTo(0, this.suspendedScrollY),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let e6 = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (eq.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class e9 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: s = 0,
          repeatDelay: n = 0,
          repeatType: r = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: n,
              repeatType: r,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return this._resolved || (eL(), ek()), this._resolved;
        }
        onKeyframesResolved(t, e) {
          let {
            name: i,
            type: s,
            velocity: n,
            delay: r,
            onComplete: o,
            onUpdate: a,
          } = this.options;
          if (
            !(function (t, e, i, s) {
              let n = t[0];
              if (null === n) return !1;
              let r = t[t.length - 1],
                o = e6(n, e),
                a = e6(r, e);
              return (
                (0, ev.K)(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && s))
              );
            })(t, i, s, n)
          ) {
            if (eu.current || !r) {
              null == a || a(ec(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          (this._resolved = {
            keyframes: t,
            finalKeyframe: e,
            ...this.initPlayback(t, e),
          }),
            this.onPostResolved();
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = () => {
              t(), this.updateFinishedPromise();
            };
          });
        }
      }
      function e4(t, e, i) {
        var s, n;
        let r = Math.max(e - 5, 0);
        return (s = i - t(r)), (n = e - r) ? (1e3 / n) * s : 0;
      }
      function e8(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let e7 = ["duration", "bounce"],
        it = ["stiffness", "damping", "mass"];
      function ie(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ii({ keyframes: t, restDelta: e, restSpeed: i, ...s }) {
        let n;
        let r = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: r },
          {
            stiffness: l,
            damping: h,
            mass: u,
            duration: d,
            velocity: c,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ie(t, it) && ie(t, e7)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: s = 1,
              }) {
                let n, r;
                (0, ev.K)(
                  t <= ee(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = K(0.05, 1, o)),
                  (t = K(0.01, 10, ei(t))),
                  o < 1
                    ? ((n = (e) => {
                        let s = e * o,
                          n = s * t;
                        return 0.001 - ((s - i) / e8(e, o)) * Math.exp(-n);
                      }),
                      (r = (e) => {
                        let s = e * o * t,
                          r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = e8(Math.pow(e, 2), o);
                        return (
                          ((s * i + i - r) *
                            Math.exp(-s) *
                            (-n(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((n = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (r = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let s = i;
                  for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                  return s;
                })(n, r, 5 / t);
                if (((t = ee(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * s;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(s * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...s, velocity: -ei(s.velocity || 0) }),
          m = c || 0,
          f = h / (2 * Math.sqrt(l * u)),
          v = o - r,
          g = ei(Math.sqrt(l / u)),
          y = 5 > Math.abs(v);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), f < 1)) {
          let t = e8(g, f);
          n = (e) =>
            o -
            Math.exp(-f * g * e) *
              (((m + f * g * v) / t) * Math.sin(t * e) + v * Math.cos(t * e));
        } else if (1 === f)
          n = (t) => o - Math.exp(-g * t) * (v + (m + g * v) * t);
        else {
          let t = g * Math.sqrt(f * f - 1);
          n = (e) => {
            let i = Math.exp(-f * g * e),
              s = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + f * g * v) * Math.sinh(s) + t * v * Math.cosh(s))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let s = n(t);
            if (p) a.done = t >= d;
            else {
              let r = m;
              0 !== t && (r = f < 1 ? e4(n, t, s) : 0);
              let l = Math.abs(r) <= i,
                h = Math.abs(o - s) <= e;
              a.done = l && h;
            }
            return (a.value = a.done ? o : s), a;
          },
        };
      }
      function is({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: n = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / s),
          T = (t) => x + P(t),
          b = (t) => {
            let e = P(t),
              i = T(t);
            (m.done = Math.abs(e) <= h), (m.value = m.done ? x : i);
          },
          w = (t) => {
            f(m.value) &&
              ((d = t),
              (c = ii({
                keyframes: [m.value, v(m.value)],
                velocity: e4(T, t, m.value),
                damping: n,
                stiffness: r,
                restDelta: h,
                restSpeed: u,
              })));
          };
        return (
          w(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), b(t), w(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || b(t), m);
            },
          }
        );
      }
      let ir = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function io(t, e, i, s) {
        if (t === e && i === s) return t0.Z;
        let n = (e) =>
          (function (t, e, i, s, n) {
            let r, o;
            let a = 0;
            do
              (r = ir((o = e + (i - e) / 2), s, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ir(n(t), e, s));
      }
      let ia = io(0.42, 0, 1, 1),
        il = io(0, 0, 0.58, 1),
        ih = io(0.42, 0, 0.58, 1),
        iu = (t) => Array.isArray(t) && "number" != typeof t[0],
        id = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        ic = (t) => (e) => 1 - t(1 - e),
        ip = (t) => 1 - Math.sin(Math.acos(t)),
        im = ic(ip),
        iv = id(ip),
        ig = io(0.33, 1.53, 0.69, 0.99),
        iy = ic(ig),
        ix = id(iy),
        iP = {
          linear: t0.Z,
          easeIn: ia,
          easeInOut: ih,
          easeOut: il,
          circIn: ip,
          circInOut: iv,
          circOut: im,
          backIn: iy,
          backInOut: ix,
          backOut: ig,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * iy(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        iT = (t) => {
          if (Array.isArray(t)) {
            (0, ev.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, s, n] = t;
            return io(e, i, s, n);
          }
          return "string" == typeof t
            ? ((0, ev.k)(void 0 !== iP[t], `Invalid easing type '${t}'`), iP[t])
            : t;
        },
        ib = (t, e, i) => {
          let s = e - t;
          return 0 === s ? 1 : (i - t) / s;
        },
        iw = (t, e, i) => t + (e - t) * i;
      function iS(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let iA = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        iV = [eW, eU, eN],
        iE = (t) => iV.find((e) => e.test(t));
      function iM(t) {
        let e = iE(t);
        (0, ev.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === eN &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let n = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - s;
                (n = iS(a, s, t + 1 / 3)),
                  (r = iS(a, s, t)),
                  (o = iS(a, s, t - 1 / 3));
              } else n = r = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let iC = (t, e) => {
        let i = iM(t),
          s = iM(e),
          n = { ...i };
        return (t) => (
          (n.red = iA(i.red, s.red, t)),
          (n.green = iA(i.green, s.green, t)),
          (n.blue = iA(i.blue, s.blue, t)),
          (n.alpha = iw(i.alpha, s.alpha, t)),
          eU.transform(n)
        );
      };
      function iD(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      function iR(t, e) {
        return (i) => iw(t, e, i);
      }
      function ik(t) {
        return "number" == typeof t
          ? iR
          : "string" == typeof t
          ? H(t)
            ? iD
            : e$.test(t)
            ? iC
            : ij
          : Array.isArray(t)
          ? iL
          : "object" == typeof t
          ? e$.test(t)
            ? iC
            : iF
          : iD;
      }
      function iL(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => ik(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function iF(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (s[n] = ik(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let ij = (t, e) => {
        let i = eq.createTransformer(e),
          s = eK(t),
          n = eK(e);
        return s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
          ? tH(
              iL(
                (function (t, e) {
                  var i;
                  let s = [],
                    n = { color: 0, var: 0, number: 0 };
                  for (let r = 0; r < e.values.length; r++) {
                    let o = e.types[r],
                      a = t.indexes[o][n[o]],
                      l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    (s[r] = l), n[o]++;
                  }
                  return s;
                })(s, n),
                n.values
              ),
              i
            )
          : ((0, ev.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            iD(t, e));
      };
      function iB(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? iw(t, e, i)
          : ik(t)(t, e);
      }
      function iO({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        let n = iu(s) ? s.map(iT) : iT(s),
          r = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
            let r = t.length;
            if (
              ((0, ev.k)(
                r === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && t[0] === t[1]) return () => e[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let s = [],
                  n = i || iB,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = n(t[i], t[i + 1]);
                  e && (r = tH(Array.isArray(e) ? e[i] || t0.Z : e, r)),
                    s.push(r);
                }
                return s;
              })(e, s, n),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let s = ib(t[i], t[i + 1], e);
                return o[i](s);
              };
            return i ? (e) => l(K(t[0], t[r - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let s = 1; s <= e; s++) {
                        let n = ib(0, e, s);
                        t.push(iw(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(n)
                ? n
                : e.map(() => n || ih).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((r.value = o(e)), (r.done = e >= t), r),
        };
      }
      let iI = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => tF.Wi.update(e, !0),
            stop: () => (0, tF.Pn)(e),
            now: () =>
              tF.frameData.isProcessing ? tF.frameData.timestamp : em.now(),
          };
        },
        iU = { decay: is, inertia: is, tween: iO, keyframes: iO, spring: ii },
        iW = (t) => t / 100;
      class iN extends e9 {
        constructor({ KeyframeResolver: t = eF, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle");
          let { name: i, motionValue: s, keyframes: n } = this.options,
            r = (t, e) => this.onKeyframesResolved(t, e);
          i && s && s.owner
            ? (this.resolver = s.owner.resolveKeyframes(n, r, i, s))
            : (this.resolver = new t(n, r, i, s)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: s = "keyframes",
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = iU[s] || iO;
          l !== iO &&
            "number" != typeof t[0] &&
            ((e = tH(iW, iB(t[0], t[1]))), (t = [0, 100]));
          let h = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(h));
          let { calculatedDuration: u } = h,
            d = u + r;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: s,
            generator: n,
            mirroredGenerator: r,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: h,
            resolvedDuration: u,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > h;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let y = this.currentTime,
            x = n;
          if (c) {
            let t = Math.min(this.currentTime, h) / u,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / u))
                  : "mirror" === p && (x = r)),
              (y = K(0, 1, i) * u);
          }
          let P = g ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: T } = P;
          g ||
            null === l ||
            (T =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            b && void 0 !== s && (P.value = ec(a, this.options, s)),
            f && f(P.value),
            b && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? ei(t.calculatedDuration) : 0;
        }
        get time() {
          return ei(this.currentTime);
        }
        set time(t) {
          (t = ee(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = ei(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = iI, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        stop() {
          if (((this.isStopped = !0), "idle" === this.state)) return;
          this.state = "idle";
          let { onStop: t } = this.options;
          t && t(), this.teardown();
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let i$ = (t) => Array.isArray(t) && "number" == typeof t[0],
        iH = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        iZ = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: iH([0, 0.65, 0.55, 1]),
          circOut: iH([0.55, 0, 1, 0.45]),
          backIn: iH([0.31, 0.01, 0.66, -0.59]),
          backOut: iH([0.33, 1.53, 0.69, 0.99]),
        },
        iz =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = o()), n)),
        iK = new Set(["opacity", "clipPath", "filter", "transform"]);
      class iY extends e9 {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: s } = this.options;
          (this.resolver = new e3(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i;
          let s = this.options.duration || 300;
          if (
            "spring" === (i = this.options).type ||
            "backgroundColor" === i.name ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && iZ[e]) ||
                i$(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(i.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                ...r
              } = this.options,
              o = (function (t, e) {
                let i = new iN({ ...e, keyframes: t, repeat: 0, delay: 0 }),
                  s = { done: !1, value: t[0] },
                  n = [],
                  r = 0;
                for (; !s.done && r < 2e4; )
                  n.push((s = i.sample(r)).value), (r += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: r - 10,
                  ease: "linear",
                };
              })(t, r);
            (t = o.keyframes),
              (s = o.duration),
              (this.options.times = o.times),
              (this.options.ease = o.ease);
          }
          let { motionValue: n, name: r } = this.options,
            o = (function (
              t,
              e,
              i,
              {
                delay: s = 0,
                duration: n = 300,
                repeat: r = 0,
                repeatType: o = "loop",
                ease: a,
                times: l,
              } = {}
            ) {
              let h = { [e]: i };
              l && (h.offset = l);
              let u = (function t(e) {
                if (e)
                  return i$(e) ? iH(e) : Array.isArray(e) ? e.map(t) : iZ[e];
              })(a);
              return (
                Array.isArray(u) && (h.easing = u),
                t.animate(h, {
                  delay: s,
                  duration: n,
                  easing: Array.isArray(u) ? "linear" : u,
                  fill: "both",
                  iterations: r + 1,
                  direction: "reverse" === o ? "alternate" : "normal",
                })
              );
            })(n.owner.current, r, t, { ...this.options, duration: s });
          return (
            (o.startTime = em.now()),
            this.pendingTimeline
              ? ((o.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (o.onfinish = () => {
                  let { onComplete: i } = this.options;
                  n.set(ec(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise(),
                    this.updateFinishedPromise();
                }),
            { animation: o, duration: s, keyframes: t }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return ei(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return ei(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = ee(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return t0.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return t0.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          this.isStopped = !0;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e, keyframes: i } = t;
          if ("idle" !== e.playState && "finished" !== e.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: s,
                  ...n
                } = this.options,
                r = new iN({ ...n, keyframes: i });
              t.setWithVelocity(
                r.sample(this.time - 10).value,
                r.sample(this.time).value,
                10
              );
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: s,
            repeatType: n,
            damping: r,
            type: o,
          } = t;
          return (
            iz() &&
            i &&
            iK.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            "mirror" !== n &&
            0 !== r &&
            "inertia" !== o
          );
        }
      }
      let iX =
        (t, e, i, s = {}, n, r) =>
        (o) => {
          let a = el(s, t) || {},
            l = a.delay || s.delay || 0,
            { elapsed: h = 0 } = s;
          h -= ee(l);
          let u = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -h,
            onUpdate: (t) => {
              e.set(t), a.onUpdate && a.onUpdate(t);
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: r ? void 0 : n,
          };
          !(function ({
            when: t,
            delay: e,
            delayChildren: i,
            staggerChildren: s,
            staggerDirection: n,
            repeat: r,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: h,
            ...u
          }) {
            return !!Object.keys(u).length;
          })(a) && (u = { ...u, ...ea(t, u) }),
            u.duration && (u.duration = ee(u.duration)),
            u.repeatDelay && (u.repeatDelay = ee(u.repeatDelay)),
            void 0 !== u.from && (u.keyframes[0] = u.from);
          let d = !1;
          if (
            (!1 === u.type && ((u.duration = 0), 0 === u.delay && (d = !0)),
            (eu.current || eh.c.skipAnimations) &&
              ((d = !0), (u.duration = 0), (u.delay = 0)),
            d && !r && void 0 !== e.get())
          ) {
            let t = ec(u.keyframes, a);
            if (void 0 !== t) {
              tF.Wi.update(() => {
                u.onUpdate(t), u.onComplete();
              });
              return;
            }
          }
          return !r && iY.supports(u) ? new iY(u) : new iN(u);
        };
      function iG(t) {
        return !!(O(t) && t.add);
      }
      function iq(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i_(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class iJ {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return iq(this.subscriptions, t), () => i_(this.subscriptions, t);
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let s = this.subscriptions[n];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let iQ = (t) => !isNaN(parseFloat(t)),
        i0 = { current: void 0 };
      class i1 {
        constructor(t, e = {}) {
          (this.version = "11.0.14"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = em.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = iQ(this.current)),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t), (this.updatedAt = em.now());
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new iJ());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  tF.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return i0.current && i0.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = em.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function i5(t, e) {
        return new i1(t, e);
      }
      function i2(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
        var r;
        let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e,
          h = t.getValue("willChange");
        s && (o = s);
        let u = [],
          d = n && t.animationState && t.animationState.getState()[n];
        for (let e in l) {
          let s = t.getValue(
              e,
              null !== (r = t.latestValues[e]) && void 0 !== r ? r : null
            ),
            n = l[e];
          if (
            void 0 === n ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(d, e))
          )
            continue;
          let a = { delay: i, elapsed: 0, ...el(o || {}, e) },
            c = !1;
          if (window.HandoffAppearAnimations) {
            let i = t.getProps()[m];
            if (i) {
              let t = window.HandoffAppearAnimations(i, e);
              null !== t && ((a.elapsed = t), (c = !0));
            }
          }
          s.start(
            iX(
              e,
              s,
              n,
              t.shouldReduceMotion && j.has(e) ? { type: !1 } : a,
              t,
              c
            )
          );
          let p = s.animation;
          p && (iG(h) && (h.add(e), p.then(() => h.remove(e))), u.push(p));
        }
        return (
          a &&
            Promise.all(u).then(() => {
              tF.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: s = {},
                      ...n
                    } = et(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = tR(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, i5(i));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function i3(t, e, i = {}) {
        var s;
        let n = et(
            t,
            e,
            "exit" === i.type
              ? null === (s = t.presenceContext) || void 0 === s
                ? void 0
                : s.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = n ? () => Promise.all(i2(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, s = 0, n = 1, r) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                    return (
                      Array.from(t.variantChildren)
                        .sort(i6)
                        .forEach((t, s) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              i3(t, e, { ...r, delay: i + l(s) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function i6(t, e) {
        return t.sortNodePosition(e);
      }
      let i9 = [...P].reverse(),
        i4 = P.length;
      function i8(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class i7 extends tG {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let s;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            s = Promise.all(e.map((e) => i3(t, e, i)));
                          else if ("string" == typeof e) s = i3(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? et(t, e, i.custom) : e;
                            s = Promise.all(i2(t, n, i));
                          }
                          return s.then(() => {
                            tF.Wi.postRender(() => {
                              t.notify("AnimationComplete", e);
                            });
                          });
                        })(t, e, i)
                      )
                    ),
                  i = {
                    animate: i8(!0),
                    whileInView: i8(),
                    whileHover: i8(),
                    whileTap: i8(),
                    whileDrag: i8(),
                    whileFocus: i8(),
                    exit: i8(),
                  },
                  s = !0,
                  n = (e) => (i, s) => {
                    var n;
                    let r = et(
                      t,
                      s,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...s } = r;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function r(r) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    h = new Set(),
                    u = {},
                    d = 1 / 0;
                  for (let e = 0; e < i4; e++) {
                    var c;
                    let p = i9[e],
                      m = i[p],
                      f = void 0 !== o[p] ? o[p] : a[p],
                      v = y(f),
                      g = p === r ? m.isActive : null;
                    !1 === g && (d = e);
                    let P = f === a[p] && f !== o[p] && v;
                    if (
                      (P && s && t.manuallyAnimateOnMount && (P = !1),
                      (m.protectedKeys = { ...u }),
                      (!m.isActive && null === g) ||
                        (!f && !m.prevProp) ||
                        x(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let T =
                        ((c = m.prevProp),
                        ("string" == typeof f
                          ? f !== c
                          : !!Array.isArray(f) && !t7(f, c)) ||
                          (p === r && m.isActive && !P && v) ||
                          (e > d && v)),
                      b = !1,
                      w = Array.isArray(f) ? f : [f],
                      S = w.reduce(n(p), {});
                    !1 === g && (S = {});
                    let { prevResolvedValues: A = {} } = m,
                      V = { ...A, ...S },
                      E = (t) => {
                        (T = !0),
                          h.has(t) && ((b = !0), h.delete(t)),
                          (m.needsAnimating[t] = !0);
                      };
                    for (let t in V) {
                      let e = S[t],
                        i = A[t];
                      if (!u.hasOwnProperty(t))
                        (tC(e) && tC(i) ? t7(e, i) : e === i)
                          ? void 0 !== e && h.has(t)
                            ? E(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? E(t)
                          : h.add(t);
                    }
                    (m.prevProp = f),
                      (m.prevResolvedValues = S),
                      m.isActive && (u = { ...u, ...S }),
                      s && t.blockInitialAnimation && (T = !1),
                      T &&
                        (!P || b) &&
                        l.push(
                          ...w.map((t) => ({
                            animation: t,
                            options: { type: p },
                          }))
                        );
                  }
                  if (h.size) {
                    let e = {};
                    h.forEach((i) => {
                      let s = t.getBaseTarget(i);
                      e[i] = void 0 === s ? null : s;
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    s &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (s = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: r,
                  setActive: function (e, s) {
                    var n;
                    if (i[e].isActive === s) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, s);
                      }),
                      (i[e].isActive = s);
                    let o = r(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), x(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let st = 0;
      class se extends tG {
        constructor() {
          super(...arguments), (this.id = st++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e && !t && s.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let si = (t, e) => Math.abs(t - e);
      class ss {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = so(this.lastMoveEventInfo, this.history),
                s = null !== this.startEvent,
                n =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(si(t.x, e.x) ** 2 + si(t.y, e.y) ** 2) >= 3);
              if (!s && !n) return;
              let { point: r } = i,
                { timestamp: o } = tF.frameData;
              this.history.push({ ...r, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              s ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = sn(e, this.transformPagePoint)),
                tF.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = so(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : sn(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !tI(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = sn(tU(t), this.transformPagePoint),
            { point: o } = r,
            { timestamp: a } = tF.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, so(r, this.history)),
            (this.removeListeners = tH(
              tN(this.contextWindow, "pointermove", this.handlePointerMove),
              tN(this.contextWindow, "pointerup", this.handlePointerUp),
              tN(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tF.Pn)(this.updatePoint);
        }
      }
      function sn(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function sr(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function so({ point: t }, e) {
        return {
          point: t,
          delta: sr(t, sa(e)),
          offset: sr(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              n = sa(t);
            for (
              ;
              i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > ee(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = ei(n.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function sa(t) {
        return t[t.length - 1];
      }
      function sl(t) {
        return t.max - t.min;
      }
      function sh(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function su(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = iw(e.min, e.max, t.origin)),
          (t.scale = sl(i) / sl(e)),
          (sh(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = iw(i.min, i.max, t.origin) - t.originPoint),
          (sh(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function sd(t, e, i, s) {
        su(t.x, e.x, i.x, s ? s.originX : void 0),
          su(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function sc(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + sl(e));
      }
      function sp(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + sl(e));
      }
      function sm(t, e, i) {
        sp(t.x, e.x, i.x), sp(t.y, e.y, i.y);
      }
      function sf(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function sv(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function sg(t, e, i) {
        return { min: sy(t, e), max: sy(t, i) };
      }
      function sy(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let sx = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        sP = () => ({ x: sx(), y: sx() }),
        sT = () => ({ min: 0, max: 0 }),
        sb = () => ({ x: sT(), y: sT() });
      function sw(t) {
        return [t("x"), t("y")];
      }
      function sS({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      function sA(t) {
        return void 0 === t || 1 === t;
      }
      function sV({ scale: t, scaleX: e, scaleY: i }) {
        return !sA(t) || !sA(e) || !sA(i);
      }
      function sE(t) {
        return sV(t) || sM(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function sM(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function sC(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function sD(t, e = 0, i = 1, s, n) {
        (t.min = sC(t.min, e, i, s, n)), (t.max = sC(t.max, e, i, s, n));
      }
      function sR(t, { x: e, y: i }) {
        sD(t.x, e.translate, e.scale, e.originPoint),
          sD(t.y, i.translate, i.scale, i.originPoint);
      }
      function sk(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function sL(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function sF(t, e, [i, s, n]) {
        let r = void 0 !== e[n] ? e[n] : 0.5,
          o = iw(t.min, t.max, r);
        sD(t, e[i], e[s], o, e.scale);
      }
      let sj = ["x", "scaleX", "originX"],
        sB = ["y", "scaleY", "originY"];
      function sO(t, e) {
        sF(t.x, e, sj), sF(t.y, e, sB);
      }
      function sI(t, e) {
        return sS(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let sU = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        sW = new WeakMap();
      class sN {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = sb()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new ss(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tU(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: s,
                  onDragStart: n,
                } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tY(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  sw((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (ts.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        if (s) {
                          let t = sl(s);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && n(t, e);
                let { animationState: r } = this.visualElement;
                r && r.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: n,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                sw((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: sU(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: n } = this.getProps();
          n && n(t, e);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !s$(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? iw(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? iw(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && g(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: n }
              ) {
                return { x: sf(t.x, i, n), y: sf(t.y, e, s) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: sg(t, "left", "right"), y: sg(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              sw((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !g(e)) return !1;
          let s = e.current;
          (0, ev.k)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let r = (function (t, e, i) {
              let s = sI(t, i),
                { scroll: n } = e;
              return n && (sL(s.x, n.offset.x), sL(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: sv((t = n.layout.layoutBox).x, r.x), y: sv(t.y, r.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = sS(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            sw((o) => {
              if (!s$(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(iX(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          sw((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          sw((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          sw((e) => {
            let { drag: i } = this.getProps();
            if (!s$(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              n.set(t[e] - iw(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!g(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          sw((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = sl(t),
                  n = sl(e);
                return (
                  n > s
                    ? (i = ib(e.min, e.max - s, t.min))
                    : s > n && (i = ib(t.min, t.max - n, e.min)),
                  K(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            sw((e) => {
              if (!s$(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: r } = this.constraints[e];
              i.set(iw(n, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          sW.set(this.visualElement, this);
          let t = tN(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              g(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            e();
          let n = tO(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (sw((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function s$(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class sH extends tG {
        constructor(t) {
          super(t),
            (this.removeGroupControls = t0.Z),
            (this.removeListeners = t0.Z),
            (this.controls = new sN(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || t0.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let sZ = (t) => (e, i) => {
        t && t(e, i);
      };
      class sz extends tG {
        constructor() {
          super(...arguments), (this.removePointerDownListener = t0.Z);
        }
        onPointerDown(t) {
          this.session = new ss(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: sU(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: sZ(t),
            onStart: sZ(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && s(t, e);
            },
          };
        }
        mount() {
          this.removePointerDownListener = tN(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let sK = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function sY(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let sX = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tn.test(t)) return t;
            t = parseFloat(t);
          }
          let i = sY(t, e.target.x),
            s = sY(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      class sG extends a.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: n } = t;
          Object.assign(L, s_),
            n &&
              (e.group && e.group.add(n),
              i && i.register && s && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (sK.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: n,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = n),
              s || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? r.promote()
                  : r.relegate() ||
                    tF.Wi.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            f.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function sq(t) {
        let [e, i] = (function () {
            let t = (0, a.useContext)(u.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              n = (0, a.useId)();
            return (
              (0, a.useEffect)(() => s(n), []),
              !e && i ? [!1, () => i && i(n)] : [!0]
            );
          })(),
          s = (0, a.useContext)(M.p);
        return a.createElement(sG, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, a.useContext)(C),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let s_ = {
          borderRadius: {
            ...sX,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: sX,
          borderTopRightRadius: sX,
          borderBottomLeftRadius: sX,
          borderBottomRightRadius: sX,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let s = eq.parse(t);
              if (s.length > 5) return t;
              let n = eq.createTransformer(t),
                r = "number" != typeof s[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (s[0 + r] /= o), (s[1 + r] /= a);
              let l = iw(o, a, 0.5);
              return (
                "number" == typeof s[2 + r] && (s[2 + r] /= l),
                "number" == typeof s[3 + r] && (s[3 + r] /= l),
                n(s)
              );
            },
          },
        },
        sJ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        sQ = sJ.length,
        s0 = (t) => ("string" == typeof t ? parseFloat(t) : t),
        s1 = (t) => "number" == typeof t || tn.test(t);
      function s5(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let s2 = s6(0, 0.5, im),
        s3 = s6(0.5, 0.95, t0.Z);
      function s6(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i(ib(t, e, s)));
      }
      function s9(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function s4(t, e) {
        s9(t.x, e.x), s9(t.y, e.y);
      }
      function s8(t, e, i, s, n) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== n && (t = s + (1 / n) * (t - s)),
          t
        );
      }
      function s7(t, e, [i, s, n], r, o) {
        !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
          if (
            (ts.test(e) &&
              ((e = parseFloat(e)), (e = iw(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = iw(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = s8(t.min, e, i, a, n)),
            (t.max = s8(t.max, e, i, a, n));
        })(t, e[i], e[s], e[n], e.scale, r, o);
      }
      let nt = ["x", "scaleX", "originX"],
        ne = ["y", "scaleY", "originY"];
      function ni(t, e, i, s) {
        s7(t.x, e, nt, i ? i.x : void 0, s ? s.x : void 0),
          s7(t.y, e, ne, i ? i.y : void 0, s ? s.y : void 0);
      }
      function ns(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nn(t) {
        return ns(t.x) && ns(t.y);
      }
      function nr(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function no(t) {
        return sl(t.x) / sl(t.y);
      }
      class na {
        constructor() {
          this.members = [];
        }
        add(t) {
          iq(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (i_(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nl(t, e, i) {
        let s = "",
          n = t.x.translate / e.x,
          r = t.y.translate / e.y;
        if (
          ((n || r) && (s = `translate3d(${n}px, ${r}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: n } = i;
          t && (s += `rotate(${t}deg) `),
            e && (s += `rotateX(${e}deg) `),
            n && (s += `rotateY(${n}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (s += `scale(${o}, ${a})`), s || "none";
      }
      let nh = (t, e) => t.depth - e.depth;
      class nu {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          iq(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          i_(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nh),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let nd = ["", "X", "Y", "Z"],
        nc = { visibility: "hidden" },
        np = 0,
        nm = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nf({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = np++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (nm.totalNodes =
                    nm.resolvedTargetDeltas =
                    nm.recalculatedProjection =
                      0),
                  this.nodes.forEach(ny),
                  this.nodes.forEach(nA),
                  this.nodes.forEach(nV),
                  this.nodes.forEach(nx),
                  window.MotionDebug && window.MotionDebug.record(nm);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nu());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new iJ()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = em.now(),
                      s = ({ timestamp: n }) => {
                        let r = n - i;
                        r >= e && ((0, tF.Pn)(s), t(r - e));
                      };
                    return tF.Wi.read(s, !0), () => (0, tF.Pn)(s);
                  })(s, 250)),
                  sK.hasAnimatedSinceResize &&
                    ((sK.hasAnimatedSinceResize = !1), this.nodes.forEach(nS));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        nk,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !nr(this.targetLayout, s) || i,
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h);
                      let e = { ...el(n, "layout"), onPlay: o, onComplete: a };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nS(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tF.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nE),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nT);
              return;
            }
            this.isUpdating || this.nodes.forEach(nb),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(nw),
              this.nodes.forEach(nv),
              this.nodes.forEach(ng),
              this.clearAllSnapshots();
            let t = em.now();
            (tF.frameData.delta = K(0, 1e3 / 60, t - tF.frameData.timestamp)),
              (tF.frameData.timestamp = t),
              (tF.frameData.isProcessing = !0),
              tF.S6.update.process(tF.frameData),
              tF.S6.preRender.process(tF.frameData),
              tF.S6.render.process(tF.frameData),
              (tF.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), f.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nP), this.sharedNodes.forEach(nM);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tF.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tF.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = sb()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: s(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!n) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !nn(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || sE(this.latestValues) || r) &&
              (n(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              nj((e = s).x),
              nj(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return sb();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (sL(e.x, i.offset.x), sL(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = sb();
            s4(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let s = this.path[i],
                { scroll: n, options: r } = s;
              if (s !== this.root && n && r.layoutScroll) {
                if (n.isRoot) {
                  s4(e, t);
                  let { scroll: i } = this.root;
                  i && (sL(e.x, -i.offset.x), sL(e.y, -i.offset.y));
                }
                sL(e.x, n.offset.x), sL(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = sb();
            s4(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                sO(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                sE(s.latestValues) && sO(i, s.latestValues);
            }
            return sE(this.latestValues) && sO(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = sb();
            s4(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !sE(i.latestValues)) continue;
              sV(i.latestValues) && i.updateSnapshot();
              let s = sb();
              s4(s, i.measurePageBox()),
                ni(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return sE(this.latestValues) && ni(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tF.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, n;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tF.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = sb()),
                    (this.relativeTargetOrigin = sb()),
                    sm(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    s4(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = sb()), (this.targetWithTransforms = sb())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (n = this.relativeParent.target),
                      sc(i.x, s.x, n.x),
                      sc(i.y, s.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : s4(this.target, this.layout.layoutBox),
                      sR(this.target, this.targetDelta))
                    : s4(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = sb()),
                      (this.relativeTargetOrigin = sb()),
                      sm(this.relativeTargetOrigin, this.target, t.target),
                      s4(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nm.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              sV(this.parent.latestValues) ||
              sM(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === tF.frameData.timestamp &&
                (s = !1),
              s)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            s4(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, s = !1) {
              let n, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let o = n.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      sO(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), sR(t, r)),
                    s && sE(n.latestValues) && sO(t, n.latestValues));
                }
                (e.x = sk(e.x)), (e.y = sk(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = sb()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = sP()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = sP()),
              (this.projectionDeltaWithTransform = sP()));
            let h = this.projectionTransform;
            sd(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = nl(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== h ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nm.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              n = s ? s.latestValues : {},
              r = { ...this.latestValues },
              o = sP();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = sb(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(nR)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (nC(o.x, t.x, s),
                  nC(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, p, m;
                  sm(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    nD(p.x, m.x, a.x, s),
                    nD(p.y, m.y, a.y, s),
                    i &&
                      ((h = this.relativeTarget),
                      (c = i),
                      h.x.min === c.x.min &&
                        h.x.max === c.x.max &&
                        h.y.min === c.y.min &&
                        h.y.max === c.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = sb()),
                    s4(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, n, r) {
                    n
                      ? ((t.opacity = iw(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s2(s)
                        )),
                        (t.opacityExit = iw(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          s3(s)
                        )))
                      : r &&
                        (t.opacity = iw(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let n = 0; n < sQ; n++) {
                      let r = `border${sJ[n]}Radius`,
                        o = s5(e, r),
                        a = s5(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || s1(o) === s1(a)
                          ? ((t[r] = Math.max(iw(s0(o), s0(a), s), 0)),
                            (ts.test(a) || ts.test(o)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = iw(e.rotate || 0, i.rotate || 0, s));
                  })(r, n, this.latestValues, s, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tF.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tF.Wi.update(() => {
                (sK.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = O(t) ? t : i5(t);
                    return s.start(iX("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: n,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                nB(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || sb();
                let e = sl(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = sl(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              s4(e, i),
                sO(e, n),
                sd(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new na()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let s = {};
            for (let e = 0; e < nd.length; e++) {
              let n = "rotate" + nd[e];
              i[n] && ((s[n] = i[n]), t.setStaticValue(n, 0));
            }
            for (let e in (t.render(), s)) t.setStaticValue(e, s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nc;
            let s = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  tk(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = n ? n(this.latestValues, "") : "none"),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tk(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !sE(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = nl(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              n && (s.transform = n(o, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            L)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = L[t],
                n = "none" === s.transform ? o[t] : e(o[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = n;
              } else s[t] = n;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? tk(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nT),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nv(t) {
        t.updateLayout();
      }
      function ng(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: n } = t.options,
            r = i.source !== t.layout.source;
          "size" === n
            ? sw((t) => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  n = sl(s);
                (s.min = e[t].min), (s.max = s.min + n);
              })
            : nB(n, i.layoutBox, e) &&
              sw((s) => {
                let n = r ? i.measuredBox[s] : i.layoutBox[s],
                  o = sl(e[s]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = sP();
          sd(o, e, i.layoutBox);
          let a = sP();
          r
            ? sd(a, t.applyTransform(s, !0), i.measuredBox)
            : sd(a, e, i.layoutBox);
          let l = !nn(o),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: n, layout: r } = s;
              if (n && r) {
                let o = sb();
                sm(o, i.layoutBox, n.layoutBox);
                let a = sb();
                sm(a, e, r.layoutBox),
                  nr(o, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function ny(t) {
        nm.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nx(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nP(t) {
        t.clearSnapshot();
      }
      function nT(t) {
        t.clearMeasurements();
      }
      function nb(t) {
        t.isLayoutDirty = !1;
      }
      function nw(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nS(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nA(t) {
        t.resolveTargetDelta();
      }
      function nV(t) {
        t.calcProjection();
      }
      function nE(t) {
        t.resetRotation();
      }
      function nM(t) {
        t.removeLeadSnapshot();
      }
      function nC(t, e, i) {
        (t.translate = iw(e.translate, 0, i)),
          (t.scale = iw(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nD(t, e, i, s) {
        (t.min = iw(e.min, i.min, s)), (t.max = iw(e.max, i.max, s));
      }
      function nR(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nk = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nL = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nF = nL("applewebkit/") && !nL("chrome/") ? Math.round : t0.Z;
      function nj(t) {
        (t.min = nF(t.min)), (t.max = nF(t.max));
      }
      function nB(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !sh(no(e), no(i), 0.2))
        );
      }
      let nO = nf({
          attachResizeListener: (t, e) => tO(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nI = { current: void 0 },
        nU = nf({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nI.current) {
              let t = new nO({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nI.current = t);
            }
            return nI.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        nW = { current: null },
        nN = { current: !1 },
        n$ = new WeakMap(),
        nH = [...eE, e$, eq],
        nZ = (t) => nH.find(eV(t)),
        nz = Object.keys(V),
        nK = nz.length,
        nY = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nX = T.length;
      class nG {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: r,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, s) =>
            new this.KeyframeResolver(t, e, i, s, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eF),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tF.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = b(e)),
            (this.isVariantNode = w(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== a[t] && O(e) && (e.set(a[t], !1), iG(h) && h.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            n$.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nN.current ||
              (function () {
                if (((nN.current = !0), E.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nW.current = t.matches);
                    t.addListener(e), e();
                  } else nW.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nW.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (n$.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tF.Pn)(this.notifyUpdate),
          (0, tF.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = j.has(t),
            s = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tF.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            s(), n();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, s, n) {
          let r, o;
          for (let t = 0; t < nK; t++) {
            let i = nz[t],
              {
                isEnabled: s,
                Feature: n,
                ProjectionNode: a,
                MeasureLayout: l,
              } = V[i];
            a && (r = a),
              s(e) &&
                (!this.features[i] && n && (this.features[i] = new n(this)),
                l && (o = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            r
          ) {
            this.projection = new r(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: i,
              drag: s,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: !!s || (o && g(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: n,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : sb();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nY.length; e++) {
            let i = nY[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: s } = e;
            for (let n in e) {
              let r = e[n],
                o = i[n];
              if (O(r)) t.addValue(n, r), iG(s) && s.add(n);
              else if (O(o))
                t.addValue(n, i5(r, { owner: t })), iG(s) && s.remove(n);
              else if (o !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, i5(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < nX; t++) {
            let i = T[t],
              s = this.props[i];
            (y(s) || !1 === s) && (e[i] = s);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = i5(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ("string" == typeof s && (eg(s) || ef(s))
                ? (s = parseFloat(s))
                : !nZ(s) && eq.test(e) && (s = e2(t, e)),
              this.setBaseTarget(t, O(s) ? s.get() : s)),
            O(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e, i;
          let { initial: s } = this.props,
            n =
              "string" == typeof s || "object" == typeof s
                ? null ===
                    (i = tE(
                      this.props,
                      s,
                      null === (e = this.presenceContext) || void 0 === e
                        ? void 0
                        : e.custom
                    )) || void 0 === i
                  ? void 0
                  : i[t]
                : void 0;
          if (s && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || O(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new iJ()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class nq extends nG {
        constructor() {
          super(...arguments), (this.KeyframeResolver = e3);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class n_ extends nq {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if (j.has(e)) {
            let t = e5(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              s = (N(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return sI(t, e);
        }
        build(t, e, i, s) {
          tu(t, e, i, s.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tA(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          O(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, s) {
          tb(t, e, i, s);
        }
      }
      class nJ extends nq {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (j.has(e)) {
            let t = e5(e);
            return (t && t.default) || 0;
          }
          return (e = tw.has(e) ? e : p(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return sb();
        }
        scrapeMotionValuesFromProps(t, e) {
          return tV(t, e);
        }
        build(t, e, i, s) {
          tx(t, e, i, this.isSVGTag, s.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          tS(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = tT(t.tagName)), super.mount(t);
        }
      }
      let nQ = (t, e) =>
          k(t)
            ? new nJ(e, { enableHardwareAcceleration: !1 })
            : new n_(e, { enableHardwareAcceleration: !0 }),
        n0 = {
          animation: { Feature: i7 },
          exit: { Feature: se },
          inView: { Feature: t8 },
          tap: { Feature: t5 },
          focus: { Feature: tJ },
          hover: { Feature: t_ },
          pan: { Feature: sz },
          drag: { Feature: sH, ProjectionNode: nU, MeasureLayout: sq },
          layout: { ProjectionNode: nU, MeasureLayout: sq },
        },
        n1 = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: s,
              Component: n,
            }) {
              t &&
                (function (t) {
                  for (let e in t) V[e] = { ...V[e], ...t[e] };
                })(t);
              let r = (0, a.forwardRef)(function (r, o) {
                var p;
                let v;
                let x = {
                    ...(0, a.useContext)(l._),
                    ...r,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, a.useContext)(M.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(r),
                  },
                  { isStatic: P } = x,
                  T = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (b(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || y(e) ? e : void 0,
                          animate: y(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, a.useContext)(h));
                    return (0, a.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [S(e), S(i)]
                    );
                  })(r),
                  w = s(r, P);
                if (!P && E.j) {
                  T.visualElement = (function (t, e, i, s) {
                    let { visualElement: n } = (0, a.useContext)(h),
                      r = (0, a.useContext)(c),
                      o = (0, a.useContext)(u.O),
                      p = (0, a.useContext)(l._).reducedMotion,
                      v = (0, a.useRef)();
                    (s = s || r.renderer),
                      !v.current &&
                        s &&
                        (v.current = s(t, {
                          visualState: e,
                          parent: n,
                          props: i,
                          presenceContext: o,
                          blockInitialAnimation: !!o && !1 === o.initial,
                          reducedMotionConfig: p,
                        }));
                    let g = v.current;
                    (0, a.useInsertionEffect)(() => {
                      g && g.update(i, o);
                    });
                    let y = (0, a.useRef)(!!(i[m] && !window.HandoffComplete));
                    return (
                      (0, d.L)(() => {
                        g &&
                          (f.postRender(g.render),
                          y.current &&
                            g.animationState &&
                            g.animationState.animateChanges());
                      }),
                      (0, a.useEffect)(() => {
                        g &&
                          (g.updateFeatures(),
                          !y.current &&
                            g.animationState &&
                            g.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      g
                    );
                  })(n, w, x, e);
                  let i = (0, a.useContext)(C),
                    s = (0, a.useContext)(c).strict;
                  T.visualElement &&
                    (v = T.visualElement.loadFeatures(x, s, t, i));
                }
                return a.createElement(
                  h.Provider,
                  { value: T },
                  v && T.visualElement
                    ? a.createElement(v, {
                        visualElement: T.visualElement,
                        ...x,
                      })
                    : null,
                  i(
                    n,
                    r,
                    ((p = T.visualElement),
                    (0, a.useCallback)(
                      (t) => {
                        t && w.mount && w.mount(t),
                          p && (t ? p.mount(t) : p.unmount()),
                          o &&
                            ("function" == typeof o
                              ? o(t)
                              : g(o) && (o.current = t));
                      },
                      [p]
                    )),
                    w,
                    P,
                    T.visualElement
                  )
                );
              });
              return (r[D] = n), r;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, s) => (i.has(s) || i.set(s, e(s)), i.get(s)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, s) {
            return {
              ...(k(t) ? tj : tB),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, s, { latestValues: n }, r) => {
                  let o = (
                      k(e)
                        ? function (t, e, i, s) {
                            let n = (0, a.useMemo)(() => {
                              let i = tP();
                              return (
                                tx(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  tT(s),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              tc(e, t.style, t),
                                (n.style = { ...e, ...n.style });
                            }
                            return n;
                          }
                        : function (t, e, i) {
                            let s = {},
                              n = (function (t, e, i) {
                                let s = t.style || {},
                                  n = {};
                                return (
                                  tc(n, s, t),
                                  Object.assign(
                                    n,
                                    (function ({ transformTemplate: t }, e, i) {
                                      return (0, a.useMemo)(() => {
                                        let s = td();
                                        return (
                                          tu(
                                            s,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            t
                                          ),
                                          Object.assign({}, s.vars, s.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  n
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((s.draggable = !1),
                                (n.userSelect =
                                  n.WebkitUserSelect =
                                  n.WebkitTouchCallout =
                                    "none"),
                                (n.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (s.tabIndex = 0),
                              (s.style = n),
                              s
                            );
                          }
                    )(i, n, r, e),
                    l = (function (t, e, i) {
                      let s = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (tf(n) ||
                            (!0 === i && tm(n)) ||
                            (!e && !tm(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (s[n] = t[n]);
                      return s;
                    })(i, "string" == typeof e, t),
                    h = e !== a.Fragment ? { ...l, ...o, ref: s } : {},
                    { children: u } = i,
                    d = (0, a.useMemo)(() => (O(u) ? u.get() : u), [u]);
                  return (0, a.createElement)(e, { ...h, children: d });
                };
              })(e),
              createVisualElement: s,
              Component: t,
            };
          })(t, e, n0, nQ)
        );
    },
    6832: function (t, e, i) {
      i.d(e, {
        c: function () {
          return s;
        },
      });
      let s = { skipAnimations: !1, useManualTiming: !1 };
    },
    9908: function (t, e, i) {
      i.d(e, {
        K: function () {
          return n;
        },
        k: function () {
          return r;
        },
      });
      var s = i(3393);
      let n = s.Z,
        r = s.Z;
    },
    1702: function (t, e, i) {
      i.d(e, {
        j: function () {
          return s;
        },
      });
      let s = "undefined" != typeof document;
    },
    3393: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      let s = (t) => t;
    },
    2435: function (t, e, i) {
      i.d(e, {
        h: function () {
          return n;
        },
      });
      var s = i(2265);
      function n(t) {
        let e = (0, s.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    5526: function (t, e, i) {
      i.d(e, {
        L: function () {
          return n;
        },
      });
      var s = i(2265);
      let n = i(1702).j ? s.useLayoutEffect : s.useEffect;
    },
  },
]);
