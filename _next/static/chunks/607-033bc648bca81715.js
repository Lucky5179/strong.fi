(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [607],
  {
    703: function (e, r, t) {
      "use strict";
      t.d(r, {
        default: function () {
          return n.a;
        },
      });
      var o = t(7447),
        n = t.n(o);
    },
    7447: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          getImageProps: function () {
            return s;
          },
          default: function () {
            return a;
          },
        });
      let o = t(6921),
        n = t(8630),
        i = t(1749),
        l = o._(t(536)),
        s = (e) => {
          let { props: r } = (0, n.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, t] of Object.entries(r)) void 0 === t && delete r[e];
          return { props: r };
        },
        a = i.Image;
    },
    8314: function (e, r, t) {
      "use strict";
      var o = t(1811);
      function n() {}
      function i() {}
      (i.resetWarningCache = n),
        (e.exports = function () {
          function e(e, r, t, n, i, l) {
            if (l !== o) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function r() {
            return e;
          }
          e.isRequired = e;
          var t = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: r,
            element: e,
            elementType: e,
            instanceOf: r,
            node: e,
            objectOf: r,
            oneOf: r,
            oneOfType: r,
            shape: r,
            exact: r,
            checkPropTypes: i,
            resetWarningCache: n,
          };
          return (t.PropTypes = t), t;
        });
    },
    4404: function (e, r, t) {
      e.exports = t(8314)();
    },
    1811: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    7026: function (e, r, t) {
      "use strict";
      var o = t(2265),
        n = t(4404),
        i = t.n(n);
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      var s = (0, o.forwardRef)(function (e, r) {
        var t = e.color,
          n = e.size,
          i = void 0 === n ? 24 : n,
          s = (function (e, r) {
            if (null == e) return {};
            var t,
              o,
              n = (function (e, r) {
                if (null == e) return {};
                var t,
                  o,
                  n = {},
                  i = Object.keys(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                return n;
              })(e, r);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (o = 0; o < i.length; o++)
                (t = i[o]),
                  !(r.indexOf(t) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (n[t] = e[t]);
            }
            return n;
          })(e, ["color", "size"]);
        return o.createElement(
          "svg",
          l(
            {
              ref: r,
              xmlns: "http://www.w3.org/2000/svg",
              width: i,
              height: i,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === t ? "currentColor" : t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          o.createElement("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
          o.createElement("polyline", { points: "12 19 5 12 12 5" })
        );
      });
      (s.propTypes = {
        color: i().string,
        size: i().oneOfType([i().string, i().number]),
      }),
        (s.displayName = "ArrowLeft"),
        (r.Z = s);
    },
    2378: function (e, r, t) {
      "use strict";
      var o = t(2265),
        n = t(4404),
        i = t.n(n);
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      var s = (0, o.forwardRef)(function (e, r) {
        var t = e.color,
          n = e.size,
          i = void 0 === n ? 24 : n,
          s = (function (e, r) {
            if (null == e) return {};
            var t,
              o,
              n = (function (e, r) {
                if (null == e) return {};
                var t,
                  o,
                  n = {},
                  i = Object.keys(e);
                for (o = 0; o < i.length; o++)
                  (t = i[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                return n;
              })(e, r);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (o = 0; o < i.length; o++)
                (t = i[o]),
                  !(r.indexOf(t) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (n[t] = e[t]);
            }
            return n;
          })(e, ["color", "size"]);
        return o.createElement(
          "svg",
          l(
            {
              ref: r,
              xmlns: "http://www.w3.org/2000/svg",
              width: i,
              height: i,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === t ? "currentColor" : t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          o.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
          o.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
        );
      });
      (s.propTypes = {
        color: i().string,
        size: i().oneOfType([i().string, i().number]),
      }),
        (s.displayName = "Plus"),
        (r.Z = s);
    },
    9946: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return i;
        },
      });
      var o = t(2265),
        n = "undefined" != typeof window,
        i = function (e, r) {
          var t = (0, o.useState)(
              void 0 !== r ? r : !!n && window.matchMedia(e).matches
            ),
            i = t[0],
            l = t[1];
          return (
            (0, o.useEffect)(
              function () {
                var r = !0,
                  t = window.matchMedia(e),
                  o = function () {
                    r && l(!!t.matches);
                  };
                return (
                  t.addEventListener("change", o),
                  l(t.matches),
                  function () {
                    (r = !1), t.removeEventListener("change", o);
                  }
                );
              },
              [e]
            ),
            i
          );
        };
    },
    3167: function (e, r, t) {
      "use strict";
      r.Z = function () {
        for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)
          (e = arguments[t]) &&
            (r = (function e(r) {
              var t,
                o,
                n = "";
              if ("string" == typeof r || "number" == typeof r) n += r;
              else if ("object" == typeof r) {
                if (Array.isArray(r)) {
                  var i = r.length;
                  for (t = 0; t < i; t++)
                    r[t] && (o = e(r[t])) && (n && (n += " "), (n += o));
                } else for (o in r) r[o] && (n && (n += " "), (n += o));
              }
              return n;
            })(e)) &&
            (o && (o += " "), (o += r));
        return o;
      };
    },
    1348: function (e, r, t) {
      "use strict";
      t.d(r, {
        M: function () {
          return h;
        },
      });
      var o = t(2265),
        n = t(5526);
      function i() {
        let e = (0, o.useRef)(!1);
        return (
          (0, n.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var l = t(4205),
        s = t(4561),
        a = t(2435),
        c = t(3449);
      class d extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let r = this.props.childRef.current;
          if (r && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = r.offsetHeight || 0),
              (e.width = r.offsetWidth || 0),
              (e.top = r.offsetTop),
              (e.left = r.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u({ children: e, isPresent: r }) {
        let t = (0, o.useId)(),
          n = (0, o.useRef)(null),
          i = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: l } = (0, o.useContext)(c._);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: o, top: s, left: a } = i.current;
            if (r || !n.current || !e || !o) return;
            n.current.dataset.motionPopId = t;
            let c = document.createElement("style");
            return (
              l && (c.nonce = l),
              document.head.appendChild(c),
              c.sheet &&
                c.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(c);
              }
            );
          }, [r]),
          o.createElement(
            d,
            { isPresent: r, childRef: n, sizeRef: i },
            o.cloneElement(e, { ref: n })
          )
        );
      }
      let p = ({
        children: e,
        initial: r,
        isPresent: t,
        onExitComplete: n,
        custom: i,
        presenceAffectsLayout: l,
        mode: c,
      }) => {
        let d = (0, a.h)(f),
          p = (0, o.useId)(),
          b = (0, o.useMemo)(
            () => ({
              id: p,
              initial: r,
              isPresent: t,
              custom: i,
              onExitComplete: (e) => {
                for (let r of (d.set(e, !0), d.values())) if (!r) return;
                n && n();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            l ? void 0 : [t]
          );
        return (
          (0, o.useMemo)(() => {
            d.forEach((e, r) => d.set(r, !1));
          }, [t]),
          o.useEffect(() => {
            t || d.size || !n || n();
          }, [t]),
          "popLayout" === c && (e = o.createElement(u, { isPresent: t }, e)),
          o.createElement(s.O.Provider, { value: b }, e)
        );
      };
      function f() {
        return new Map();
      }
      var b = t(3856),
        m = t(9908);
      let g = (e) => e.key || "",
        h = ({
          children: e,
          custom: r,
          initial: t = !0,
          onExitComplete: s,
          exitBeforeEnter: a,
          presenceAffectsLayout: c = !0,
          mode: d = "sync",
        }) => {
          var u;
          (0, m.k)(!a, "Replace exitBeforeEnter with mode='wait'");
          let f =
              (0, o.useContext)(b.p).forceRender ||
              (function () {
                let e = i(),
                  [r, t] = (0, o.useState)(0),
                  n = (0, o.useCallback)(() => {
                    e.current && t(r + 1);
                  }, [r]);
                return [(0, o.useCallback)(() => l.Wi.postRender(n), [n]), r];
              })()[0],
            h = i(),
            y = (function (e) {
              let r = [];
              return (
                o.Children.forEach(e, (e) => {
                  (0, o.isValidElement)(e) && r.push(e);
                }),
                r
              );
            })(e),
            v = y,
            w = (0, o.useRef)(new Map()).current,
            x = (0, o.useRef)(v),
            k = (0, o.useRef)(new Map()).current,
            z = (0, o.useRef)(!0);
          if (
            ((0, n.L)(() => {
              (z.current = !1),
                (function (e, r) {
                  e.forEach((e) => {
                    let t = g(e);
                    r.set(t, e);
                  });
                })(y, k),
                (x.current = v);
            }),
            (u = () => {
              (z.current = !0), k.clear(), w.clear();
            }),
            (0, o.useEffect)(() => () => u(), []),
            z.current)
          )
            return o.createElement(
              o.Fragment,
              null,
              v.map((e) =>
                o.createElement(
                  p,
                  {
                    key: g(e),
                    isPresent: !0,
                    initial: !!t && void 0,
                    presenceAffectsLayout: c,
                    mode: d,
                  },
                  e
                )
              )
            );
          v = [...v];
          let E = x.current.map(g),
            O = y.map(g),
            j = E.length;
          for (let e = 0; e < j; e++) {
            let r = E[e];
            -1 !== O.indexOf(r) || w.has(r) || w.set(r, void 0);
          }
          return (
            "wait" === d && w.size && (v = []),
            w.forEach((e, t) => {
              if (-1 !== O.indexOf(t)) return;
              let n = k.get(t);
              if (!n) return;
              let i = E.indexOf(t),
                l = e;
              l ||
                ((l = o.createElement(
                  p,
                  {
                    key: g(n),
                    isPresent: !1,
                    onExitComplete: () => {
                      w.delete(t);
                      let e = Array.from(k.keys()).filter(
                        (e) => !O.includes(e)
                      );
                      if (
                        (e.forEach((e) => k.delete(e)),
                        (x.current = y.filter((r) => {
                          let o = g(r);
                          return o === t || e.includes(o);
                        })),
                        !w.size)
                      ) {
                        if (!1 === h.current) return;
                        f(), s && s();
                      }
                    },
                    custom: r,
                    presenceAffectsLayout: c,
                    mode: d,
                  },
                  n
                )),
                w.set(t, l)),
                v.splice(i, 0, l);
            }),
            (v = v.map((e) => {
              let r = e.key;
              return w.has(r)
                ? e
                : o.createElement(
                    p,
                    {
                      key: g(e),
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: d,
                    },
                    e
                  );
            })),
            o.createElement(
              o.Fragment,
              null,
              w.size ? v : v.map((e) => (0, o.cloneElement)(e))
            )
          );
        };
    },
    1367: function (e, r, t) {
      "use strict";
      t.d(r, {
        m6: function () {
          return G;
        },
      });
      let o = /^\[(.+)\]$/;
      function n(e, r) {
        let t = e;
        return (
          r.split("-").forEach((e) => {
            t.nextPart.has(e) ||
              t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (t = t.nextPart.get(e));
          }),
          t
        );
      }
      let i = /\s+/;
      function l() {
        let e,
          r,
          t = 0,
          o = "";
        for (; t < arguments.length; )
          (e = arguments[t++]) &&
            (r = (function e(r) {
              let t;
              if ("string" == typeof r) return r;
              let o = "";
              for (let n = 0; n < r.length; n++)
                r[n] && (t = e(r[n])) && (o && (o += " "), (o += t));
              return o;
            })(e)) &&
            (o && (o += " "), (o += r));
        return o;
      }
      function s(e) {
        let r = (r) => r[e] || [];
        return (r.isThemeGetter = !0), r;
      }
      let a = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        d = new Set(["px", "full", "screen"]),
        u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        p =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        b = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        m =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function g(e) {
        return y(e) || d.has(e) || c.test(e);
      }
      function h(e) {
        return I(e, "length", T);
      }
      function y(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function v(e) {
        return I(e, "number", y);
      }
      function w(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function x(e) {
        return e.endsWith("%") && y(e.slice(0, -1));
      }
      function k(e) {
        return a.test(e);
      }
      function z(e) {
        return u.test(e);
      }
      let E = new Set(["length", "size", "percentage"]);
      function O(e) {
        return I(e, E, _);
      }
      function j(e) {
        return I(e, "position", _);
      }
      let P = new Set(["image", "url"]);
      function C(e) {
        return I(e, P, M);
      }
      function R(e) {
        return I(e, "", L);
      }
      function S() {
        return !0;
      }
      function I(e, r, t) {
        let o = a.exec(e);
        return (
          !!o &&
          (o[1] ? ("string" == typeof r ? o[1] === r : r.has(o[1])) : t(o[2]))
        );
      }
      function T(e) {
        return p.test(e) && !f.test(e);
      }
      function _() {
        return !1;
      }
      function L(e) {
        return b.test(e);
      }
      function M(e) {
        return m.test(e);
      }
      let G = (function (e) {
        let r, t, s;
        let a = function (i) {
          var l;
          return (
            (t = (r = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let r = 0,
                  t = new Map(),
                  o = new Map();
                function n(n, i) {
                  t.set(n, i), ++r > e && ((r = 0), (o = t), (t = new Map()));
                }
                return {
                  get(e) {
                    let r = t.get(e);
                    return void 0 !== r
                      ? r
                      : void 0 !== (r = o.get(e))
                      ? (n(e, r), r)
                      : void 0;
                  },
                  set(e, r) {
                    t.has(e) ? t.set(e, r) : n(e, r);
                  },
                };
              })((l = [].reduce((e, r) => r(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let r = e.separator,
                  t = 1 === r.length,
                  o = r[0],
                  n = r.length;
                return function (e) {
                  let i;
                  let l = [],
                    s = 0,
                    a = 0;
                  for (let c = 0; c < e.length; c++) {
                    let d = e[c];
                    if (0 === s) {
                      if (d === o && (t || e.slice(c, c + n) === r)) {
                        l.push(e.slice(a, c)), (a = c + n);
                        continue;
                      }
                      if ("/" === d) {
                        i = c;
                        continue;
                      }
                    }
                    "[" === d ? s++ : "]" === d && s--;
                  }
                  let c = 0 === l.length ? e : e.substring(a),
                    d = c.startsWith("!"),
                    u = d ? c.substring(1) : c;
                  return {
                    modifiers: l,
                    hasImportantModifier: d,
                    baseClassName: u,
                    maybePostfixModifierPosition: i && i > a ? i - a : void 0,
                  };
                };
              })(l),
              ...(function (e) {
                let r = (function (e) {
                    var r;
                    let { theme: t, prefix: o } = e,
                      i = { nextPart: new Map(), validators: [] };
                    return (
                      ((r = Object.entries(e.classGroups)),
                      o
                        ? r.map(([e, r]) => [
                            e,
                            r.map((e) =>
                              "string" == typeof e
                                ? o + e
                                : "object" == typeof e
                                ? Object.fromEntries(
                                    Object.entries(e).map(([e, r]) => [
                                      o + e,
                                      r,
                                    ])
                                  )
                                : e
                            ),
                          ])
                        : r).forEach(([e, r]) => {
                        (function e(r, t, o, i) {
                          r.forEach((r) => {
                            if ("string" == typeof r) {
                              ("" === r ? t : n(t, r)).classGroupId = o;
                              return;
                            }
                            if ("function" == typeof r) {
                              if (r.isThemeGetter) {
                                e(r(i), t, o, i);
                                return;
                              }
                              t.validators.push({
                                validator: r,
                                classGroupId: o,
                              });
                              return;
                            }
                            Object.entries(r).forEach(([r, l]) => {
                              e(l, n(t, r), o, i);
                            });
                          });
                        })(r, i, e, t);
                      }),
                      i
                    );
                  })(e),
                  {
                    conflictingClassGroups: t,
                    conflictingClassGroupModifiers: i,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let t = e.split("-");
                    return (
                      "" === t[0] && 1 !== t.length && t.shift(),
                      (function e(r, t) {
                        if (0 === r.length) return t.classGroupId;
                        let o = r[0],
                          n = t.nextPart.get(o),
                          i = n ? e(r.slice(1), n) : void 0;
                        if (i) return i;
                        if (0 === t.validators.length) return;
                        let l = r.join("-");
                        return t.validators.find(({ validator: e }) => e(l))
                          ?.classGroupId;
                      })(t, r) ||
                        (function (e) {
                          if (o.test(e)) {
                            let r = o.exec(e)[1],
                              t = r?.substring(0, r.indexOf(":"));
                            if (t) return "arbitrary.." + t;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, r) {
                    let o = t[e] || [];
                    return r && i[e] ? [...o, ...i[e]] : o;
                  },
                };
              })(l),
            }).cache.get),
            (s = r.cache.set),
            (a = c),
            c(i)
          );
        };
        function c(e) {
          let o = t(e);
          if (o) return o;
          let n = (function (e, r) {
            let {
                splitModifiers: t,
                getClassGroupId: o,
                getConflictingClassGroupIds: n,
              } = r,
              l = new Set();
            return e
              .trim()
              .split(i)
              .map((e) => {
                let {
                    modifiers: r,
                    hasImportantModifier: n,
                    baseClassName: i,
                    maybePostfixModifierPosition: l,
                  } = t(e),
                  s = o(l ? i.substring(0, l) : i),
                  a = !!l;
                if (!s) {
                  if (!l || !(s = o(i)))
                    return { isTailwindClass: !1, originalClassName: e };
                  a = !1;
                }
                let c = (function (e) {
                  if (e.length <= 1) return e;
                  let r = [],
                    t = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (r.push(...t.sort(), e), (t = []))
                        : t.push(e);
                    }),
                    r.push(...t.sort()),
                    r
                  );
                })(r).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: n ? c + "!" : c,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: a,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: r,
                    classGroupId: t,
                    hasPostfixModifier: o,
                  } = e,
                  i = r + t;
                return (
                  !l.has(i) &&
                  (l.add(i), n(t, o).forEach((e) => l.add(r + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, r);
          return s(e, n), n;
        }
        return function () {
          return a(l.apply(null, arguments));
        };
      })(function () {
        let e = s("colors"),
          r = s("spacing"),
          t = s("blur"),
          o = s("brightness"),
          n = s("borderColor"),
          i = s("borderRadius"),
          l = s("borderSpacing"),
          a = s("borderWidth"),
          c = s("contrast"),
          d = s("grayscale"),
          u = s("hueRotate"),
          p = s("invert"),
          f = s("gap"),
          b = s("gradientColorStops"),
          m = s("gradientColorStopPositions"),
          E = s("inset"),
          P = s("margin"),
          I = s("opacity"),
          T = s("padding"),
          _ = s("saturate"),
          L = s("scale"),
          M = s("sepia"),
          G = s("skew"),
          N = s("space"),
          $ = s("translate"),
          W = () => ["auto", "contain", "none"],
          A = () => ["auto", "hidden", "clip", "visible", "scroll"],
          B = () => ["auto", k, r],
          U = () => [k, r],
          Z = () => ["", g, h],
          q = () => ["auto", y, k],
          D = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          F = () => ["solid", "dashed", "dotted", "double", "none"],
          V = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
          ],
          H = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          Y = () => ["", "0", k],
          J = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          K = () => [y, v],
          Q = () => [y, k];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [S],
            spacing: [g, h],
            blur: ["none", "", z, k],
            brightness: K(),
            borderColor: [e],
            borderRadius: ["none", "", "full", z, k],
            borderSpacing: U(),
            borderWidth: Z(),
            contrast: K(),
            grayscale: Y(),
            hueRotate: Q(),
            invert: Y(),
            gap: U(),
            gradientColorStops: [e],
            gradientColorStopPositions: [x, h],
            inset: B(),
            margin: B(),
            opacity: K(),
            padding: U(),
            saturate: K(),
            scale: K(),
            sepia: Y(),
            skew: Q(),
            space: U(),
            translate: U(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", k] }],
            container: ["container"],
            columns: [{ columns: [z] }],
            "break-after": [{ "break-after": J() }],
            "break-before": [{ "break-before": J() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...D(), k] }],
            overflow: [{ overflow: A() }],
            "overflow-x": [{ "overflow-x": A() }],
            "overflow-y": [{ "overflow-y": A() }],
            overscroll: [{ overscroll: W() }],
            "overscroll-x": [{ "overscroll-x": W() }],
            "overscroll-y": [{ "overscroll-y": W() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [E] }],
            "inset-x": [{ "inset-x": [E] }],
            "inset-y": [{ "inset-y": [E] }],
            start: [{ start: [E] }],
            end: [{ end: [E] }],
            top: [{ top: [E] }],
            right: [{ right: [E] }],
            bottom: [{ bottom: [E] }],
            left: [{ left: [E] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", w, k] }],
            basis: [{ basis: B() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", k] }],
            grow: [{ grow: Y() }],
            shrink: [{ shrink: Y() }],
            order: [{ order: ["first", "last", "none", w, k] }],
            "grid-cols": [{ "grid-cols": [S] }],
            "col-start-end": [{ col: ["auto", { span: ["full", w, k] }, k] }],
            "col-start": [{ "col-start": q() }],
            "col-end": [{ "col-end": q() }],
            "grid-rows": [{ "grid-rows": [S] }],
            "row-start-end": [{ row: ["auto", { span: [w, k] }, k] }],
            "row-start": [{ "row-start": q() }],
            "row-end": [{ "row-end": q() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", k] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", k] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ...H()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...H(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...H(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [T] }],
            px: [{ px: [T] }],
            py: [{ py: [T] }],
            ps: [{ ps: [T] }],
            pe: [{ pe: [T] }],
            pt: [{ pt: [T] }],
            pr: [{ pr: [T] }],
            pb: [{ pb: [T] }],
            pl: [{ pl: [T] }],
            m: [{ m: [P] }],
            mx: [{ mx: [P] }],
            my: [{ my: [P] }],
            ms: [{ ms: [P] }],
            me: [{ me: [P] }],
            mt: [{ mt: [P] }],
            mr: [{ mr: [P] }],
            mb: [{ mb: [P] }],
            ml: [{ ml: [P] }],
            "space-x": [{ "space-x": [N] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [N] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, r] },
            ],
            "min-w": [{ "min-w": [k, r, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  k,
                  r,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [z] },
                  z,
                ],
              },
            ],
            h: [
              { h: [k, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [k, r, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", z, h] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  v,
                ],
              },
            ],
            "font-family": [{ font: [S] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  k,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", y, v] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  g,
                  k,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", k] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", k] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [I] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [I] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...F(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g, h] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", g, k] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: U() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  k,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", k] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [I] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...D(), j] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", O] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  C,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [b] }],
            "gradient-via": [{ via: [b] }],
            "gradient-to": [{ to: [b] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [I] }],
            "border-style": [{ border: [...F(), "hidden"] }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [I] }],
            "divide-style": [{ divide: F() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: ["", ...F()] }],
            "outline-offset": [{ "outline-offset": [g, k] }],
            "outline-w": [{ outline: [g, h] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: Z() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [I] }],
            "ring-offset-w": [{ "ring-offset": [g, h] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", z, R] }],
            "shadow-color": [{ shadow: [S] }],
            opacity: [{ opacity: [I] }],
            "mix-blend": [{ "mix-blend": V() }],
            "bg-blend": [{ "bg-blend": V() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [t] }],
            brightness: [{ brightness: [o] }],
            contrast: [{ contrast: [c] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", z, k] }],
            grayscale: [{ grayscale: [d] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [p] }],
            saturate: [{ saturate: [_] }],
            sepia: [{ sepia: [M] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [t] }],
            "backdrop-brightness": [{ "backdrop-brightness": [o] }],
            "backdrop-contrast": [{ "backdrop-contrast": [c] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [p] }],
            "backdrop-opacity": [{ "backdrop-opacity": [I] }],
            "backdrop-saturate": [{ "backdrop-saturate": [_] }],
            "backdrop-sepia": [{ "backdrop-sepia": [M] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [l] }],
            "border-spacing-x": [{ "border-spacing-x": [l] }],
            "border-spacing-y": [{ "border-spacing-y": [l] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  k,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", k] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", k] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [L] }],
            "scale-x": [{ "scale-x": [L] }],
            "scale-y": [{ "scale-y": [L] }],
            rotate: [{ rotate: [w, k] }],
            "translate-x": [{ "translate-x": [$] }],
            "translate-y": [{ "translate-y": [$] }],
            "skew-x": [{ "skew-x": [G] }],
            "skew-y": [{ "skew-y": [G] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  k,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  k,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": U() }],
            "scroll-mx": [{ "scroll-mx": U() }],
            "scroll-my": [{ "scroll-my": U() }],
            "scroll-ms": [{ "scroll-ms": U() }],
            "scroll-me": [{ "scroll-me": U() }],
            "scroll-mt": [{ "scroll-mt": U() }],
            "scroll-mr": [{ "scroll-mr": U() }],
            "scroll-mb": [{ "scroll-mb": U() }],
            "scroll-ml": [{ "scroll-ml": U() }],
            "scroll-p": [{ "scroll-p": U() }],
            "scroll-px": [{ "scroll-px": U() }],
            "scroll-py": [{ "scroll-py": U() }],
            "scroll-ps": [{ "scroll-ps": U() }],
            "scroll-pe": [{ "scroll-pe": U() }],
            "scroll-pt": [{ "scroll-pt": U() }],
            "scroll-pr": [{ "scroll-pr": U() }],
            "scroll-pb": [{ "scroll-pb": U() }],
            "scroll-pl": [{ "scroll-pl": U() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", k] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [g, h, v] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
