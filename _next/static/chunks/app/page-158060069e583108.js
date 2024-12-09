(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    7899: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 1749, 23)),
        Promise.resolve().then(a.bind(a, 8826)),
        Promise.resolve().then(a.bind(a, 1418)),
        Promise.resolve().then(a.bind(a, 7416)),
        Promise.resolve().then(a.bind(a, 4707)),
        Promise.resolve().then(a.bind(a, 1683));
    },
    8826: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var l = a(7437),
        s = a(3167),
        r = a(1348),
        i = a(4539),
        n = a(2265);
      function o(e) {
        let { text: t, color: a, className: o } = e,
          [d, c] = (0, n.useState)(!1);
        return (0, l.jsxs)("div", {
          className: (0, s.Z)("relative", o),
          children: [
            (0, l.jsx)("div", {
              className:
                "rounded-full bg-red-200 px-4 h-10 grid place-items-center",
              onMouseEnter: () => c(!0),
              onMouseLeave: () => c(!1),
              style: { backgroundColor: a + "26", color: a },
              children: (0, l.jsxs)("p", {
                className: "truncate hover:cursor-default",
                children: [t, "*"],
              }),
            }),
            (0, l.jsx)(r.M, {
              children:
                d &&
                (0, l.jsx)(i.E.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className:
                    "absolute bottom-0 translate-y-full max-w-[400px] max-h-[300px] p-2 bg-background border border-neutral-200 border-opacity-20 z-20 text-xs rounded-lg",
                  onMouseEnter: () => c(!0),
                  onMouseLeave: () => c(!1),
                  children:
                    "APY is calculated based on last week's annualized results and may vary",
                }),
            }),
          ],
        });
      }
    },
    1418: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var l = a(7437),
        s = a(2265),
        r = a(2378);
      let i = [
        {
          title: "Clearing House",
          description:
            "A multichain capital efficiency optimized DEX is the natural next step for Stream",
          image: "/images/jar-fill-middle.svg",
        },
      ];
      function n() {
        let [e, t] = (0, s.useState)(-1);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: "flex flex-col gap-4 flex-1",
              children: [
                (0, l.jsx)("h1", {
                  className: "text-5xl",
                  children: "Coming Soon",
                }),
                (0, l.jsx)("div", {
                  className: "flex flex-col divide-y divide-neutral-800 w-full",
                  children: i.map((a, s) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        className:
                          "flex flex-col gap-4 py-6 transition-[max-height] duration-300 ".concat(
                            e === s ? "max-h-[300px]" : "max-h-[88px]"
                          ),
                        children: [
                          (0, l.jsxs)("div", {
                            className: "flex gap-4 items-center",
                            children: [
                              (0, l.jsx)("span", {
                                className: "text-3xl line-clamp-1",
                                children: a.title,
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "rounded-full h-10 w-10 outline outline-neutral-800 ml-auto flex items-center justify-center cursor-pointer shrink-0",
                                onClick: () =>
                                  e === s ? t(-1) : t(i.indexOf(a)),
                                children: (0, l.jsx)("div", {
                                  className: "transition-all ".concat(
                                    e === i.indexOf(a)
                                      ? "rotate-45 text-white"
                                      : "rotate-0 text-neutral-400"
                                  ),
                                  children: (0, l.jsx)(r.Z, { size: 24 }),
                                }),
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "mt-2 body2 font-light overflow-hidden",
                            children: a.description,
                          }),
                        ],
                      },
                      a.title
                    )
                  ),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "flex-1 items-center justify-center relative",
              children: [
                (0, l.jsx)("img", {
                  loading: "lazy",
                  src: "/images/jar-fill-none.svg",
                  alt: "Stream - Jar without fill",
                  className: "w-full absolute",
                }),
                i.map((t) =>
                  (0, l.jsx)(
                    "div",
                    {
                      className: "absolute transition-all duration-300 ".concat(
                        e === i.indexOf(t) ? "opacity-100" : "opacity-0"
                      ),
                      children: (0, l.jsx)("img", {
                        loading: "lazy",
                        src: t.image,
                        alt: "Stream - Jar",
                        className: "w-full",
                      }),
                    },
                    t.title
                  )
                ),
              ],
            }),
          ],
        });
      }
    },
    7416: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a(7437),
        s = a(4539),
        r = a(703);
      function i() {
        return (0, l.jsxs)(s.E.div, {
          className: "card p-0 grow relative overflow-visible",
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5 },
          children: [
            (0, l.jsx)(r.default, {
              width: 1100,
              height: 620,
              src: "image.webp",
              alt: "Stream - White Jar",
              className: "w-[1100px] max-w-full h-auto",
            }),
            (0, l.jsx)("div", {
              className:
                "bg-neutral-900 bg-opacity-80 absolute top-4 left-4 lg:left-0 lg:-translate-x-1/2 card rounded-full z-10 px-3 md:px-6 py-1 md:py-3",
              children: (0, l.jsx)("span", {
                className: "text-sm lg:text-lg text-slate-300 font-light",
                children: "- Stalling DeFi Growth",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "bg-neutral-900 bg-opacity-80 absolute top-4 right-4 lg:right-8 card rounded-full z-10 px-3 md:px-6 py-1 md:py-3",
              children: (0, l.jsx)("span", {
                className: "text-sm lg:text-lg text-slate-300 font-light",
                children: "- Siloed Engines",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "bg-neutral-900 bg-opacity-80 absolute bottom-4 left-4 lg:left-0 lg:-translate-x-1/2 card rounded-full z-10 px-3 md:px-6 py-1 md:py-3",
              children: (0, l.jsx)("span", {
                className: "text-sm lg:text-lg text-slate-300 font-light",
                children: "- Inferior Products",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "bg-neutral-900 bg-opacity-80 absolute bottom-4 right-4 lg:right-8 card rounded-full z-10 px-3 md:px-6 py-1 md:py-3",
              children: (0, l.jsx)("span", {
                className: "text-sm lg:text-lg text-slate-300 font-light",
                children: "- Lack of Adaptability",
              }),
            }),
          ],
        });
      }
    },
    4707: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var l = a(7437),
        s = a(4539),
        r = a(703);
      function i() {
        return (0, l.jsxs)(s.E.div, {
          className: "card p-0 grow relative overflow-visible",
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5 },
          children: [ 
            (0, l.jsx)(r.default, {
              width: 1100,
              height: 620,
              src: "image (1).webp",
              alt: "Stream - White Jar",
              className: "w-[1100px] max-w-full h-auto",
            }),
            (0, l.jsx)("div", {
              className:
                "bg-neutral-900 bg-opacity-80 absolute top-4 left-0 lg:left-8 card rounded-full z-10 px-3 md:px-6 py-1 md:py-3",
              children: (0, l.jsx)("span", {
                className: "text-sm lg:text-lg text-secondary font-light",
                children: "+ Blend TradFi and DeFi",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "bg-neutral-900 bg-opacity-80 absolute top-4 right-4 lg:right-0 lg:translate-x-1/2 card rounded-full z-10 px-3 md:px-6 py-1 md:py-3",
              children: (0, l.jsx)("span", {
                className: "text-sm lg:text-lg text-primary font-light",
                children: "+ Competitive TradFi",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "bg-neutral-900 bg-opacity-80 absolute bottom-4 left-0 lg:left-8 card rounded-full z-10 px-3 md:px-6 py-1 md:py-3",
              children: (0, l.jsx)("span", {
                className: "text-sm lg:text-lg text-secondary font-light",
                children: "+ Spark Growth",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "bg-neutral-900 bg-opacity-80 absolute bottom-4 right-4 lg:right-0 lg:translate-x-1/2 card rounded-full z-10 px-3 md:px-6 py-1 md:py-3",
              children: (0, l.jsx)("span", {
                className: "text-sm lg:text-lg text-primary font-light",
                children: "+ Better Yields",
              }),
            }),
          ],
        });
      }
    },
    1683: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          VaultDetailedCards: function () {
            return p;
          },
        });
      var l = a(7437),
        s = a(703),
        r = a(2265),
        i = a(3167),
        n = a(1367);
      let o = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return (0, n.m6)((0, i.Z)(...t));
        },
        d = {
          contained: {
            primary: "bg-primary hover:bg-primary-hover",
            secondary: "bg-secondary",
            neutral: "",
            default: "bg-neutral-700 text-white",
          },
          outlined: {
            primary:
              "text-primary bg-primary border-primary hover:bg-primary-hover",
            secondary:
              "text-secondary bg-secondary border-secondary hover:bg-opacity-15",
            neutral:
              "bg-opacity-5 border-neutral-100 hover:border-opacity-30 hover:bg-opacity-15",
            default:
              "border border-opacity-10 bg-neutral-300 bg-opacity-10 text-white",
          },
          text: { primary: "", secondary: "", neutral: "", default: "" },
        };
      function c(e) {
        let {
          children: t,
          disabled: a,
          color: s = "neutral",
          variant: r = "contained",
          ...i
        } = e;
        return (0, l.jsx)("button", {
          ...i,
          className: o(
            "relative flex items-center gap-2 rounded-lg text-sm py-1.5 px-4 transition-button hover:shadow-button-hover text-center",
            d[r].default,
            d[r][s],
            a
              ? "cursor-not-allowed text-neutral-300 bg-opacity-50 after:pointer-events-none after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-white after:bg-opacity-10 after:rounded-full"
              : "",
            i.className
          ),
          children: t,
        });
      }
      var u = a(1348),
        x = a(4539),
        m = a(7026),
        h = a(9946);
      let f = {
        USDC: {
          color: "#00ADE6",
          name: "USDC",
          description:
            "This vault takes advantage of non-directional trades to earn high yield. This strategy simultaneously goes long and short, allowing it to collect funding from the short while not being exposed to downside.",
          returnInfo: "HIGH, variable",
          risks: "Execution failure, smart contract risk, custody risk",
          slug: "LevUSDC",
        },
        WETH: {
          color: "#627EEA",
          name: "ETH",
          description:
            "This vault uses the same strategy as the USDC vault, but simply earns for you in terms of ETH. This works by using profits from the strategy to purchase more ETH, allowing you to earn yield than what you could from traditional staking.",
          returnInfo: "HIGH, variable",
          risks: "Execution failure, smart contract risk, custody risk",
          slug: "HodlwETH",
        },
        WBTC: {
          color: "#F79413",
          name: "BTC",
          description:
            "This vault uses the same strategy as the USDC vault, but simply earns for you in terms of wBTC. This works by using profits from the strategy to purchase more BTC, allowing you to earn yield.",
          returnInfo: "HIGH, variable",
          risks: "Execution failure, smart contract risk, custody risk",
          slug: "HodlwBTC",
        },
      };
      var g = a(8826);
      function p(e) {
        let { vaults: t, showAPY: a } = e,
          [s, i] = (0, r.useState)(0),
          n = (0, h.Z)("(max-width: 768px)", !1);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: "flex flex-col gap-4 flex-1",
              children: [
                (0, l.jsx)("h1", {
                  className: "text-5xl",
                  children: "Our products",
                }),
                (0, l.jsx)("p", {
                  className: "body2 text-xl font-light",
                  children:
                    "We are developing a capital efficient platform to supercharge DeFi adoption.",
                }),
                a &&
                  (0, l.jsx)("a", {
                    href: "https://app-strong-fi.vercel.app",
                    children: (0, l.jsx)(c, {
                      variant: "outlined",
                      color: "primary",
                      className: "rounded-full text-lg",
                      children: "Start Earning",
                    }),
                  }),
                (0, l.jsx)("div", {
                  className:
                    "hidden md:flex flex-col divide-y divide-neutral-800 w-full",
                  children: t.map((e, t) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        className: "flex gap-4 py-6 items-center",
                        children: [
                          (0, l.jsx)("span", {
                            className: "text-3xl",
                            children: f[e.token].name,
                          }),
                          a &&
                            (0, l.jsx)(g.default, {
                              className: "text-lg lg:text-2xl",
                              text: e.apy,
                              color: f[e.token].color,
                            }),
                          (0, l.jsx)("div", {
                            className:
                              "rounded-full h-10 w-10 outline outline-neutral-800 ml-auto flex items-center justify-center cursor-pointer",
                            onClick: () => i(t),
                            children: (0, l.jsx)("div", {
                              className: "transition-all ".concat(
                                s === t
                                  ? "rotate-180 text-white"
                                  : "rotate-360 text-neutral-400"
                              ),
                              children: (0, l.jsx)(m.Z, { size: 24 }),
                            }),
                          }),
                        ],
                      },
                      e.token
                    )
                  ),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "flex-1 relative",
              children: [
                (0, l.jsx)("div", {
                  className: "space-y-6 lg:space-y-0",
                  children: t.map((e) =>
                    (0, l.jsx)(
                      y,
                      {
                        visible: n || s === t.indexOf(e),
                        showAPY: a,
                        ...e,
                        ...f[e.token],
                      },
                      e.token
                    )
                  ),
                }),
                (0, l.jsxs)("div", {
                  className:
                    "card absolute h-full w-full max-w-[400px] bottom-0 right-0 hidden md:flex md:translate-y-12 md:-translate-x-10 -z-20 flex-col",
                  children: [
                    (0, l.jsx)("div", {
                      className: "w-full h-5 bg-neutral-900 rounded-full",
                    }),
                    (0, l.jsxs)("div", {
                      className: "mt-auto flex flex-col gap-10",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex justify-between gap-16",
                          children: [
                            (0, l.jsx)("div", {
                              className: "w-full h-5 bg-neutral-900 rounded-md",
                            }),
                            (0, l.jsx)("div", {
                              className: "w-full h-5 bg-neutral-900 rounded-md",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex justify-between gap-16",
                          children: [
                            (0, l.jsx)("div", {
                              className: "w-full h-5 bg-neutral-900 rounded-md",
                            }),
                            (0, l.jsx)("div", {
                              className: "w-full h-5 bg-neutral-900 rounded-md",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex justify-between gap-16",
                          children: [
                            (0, l.jsx)("div", {
                              className: "w-full h-5 bg-neutral-900 rounded-md",
                            }),
                            (0, l.jsx)("div", {
                              className: "w-full h-5 bg-neutral-900 rounded-md",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function y(e) {
        let {
          color: t,
          name: a,
          token: r,
          lockedValue: i,
          apy: n,
          description: o,
          returnInfo: d,
          risks: c,
          visible: m,
          showAPY: h,
        } = e;
        return (0, l.jsx)(u.M, {
          mode: "popLayout",
          children:
            m &&
            (0, l.jsxs)(x.E.div, {
              className:
                "card w-full md:max-w-[400px] flex flex-col gap-4 p-4 lg:p-8 relative",
              style: {
                background: "linear-gradient(to bottom, ".concat(
                  t + "19",
                  ", #000 45%)"
                ),
              },
              initial: { opacity: 0, x: 30, y: 30 },
              animate: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { delay: 0.25, ease: "easeInOut" },
              },
              exit: {
                opacity: 0,
                x: 30,
                y: 30,
                transition: { ease: "easeInOut" },
              },
              transition: { duration: 0.25 },
              children: [
                (0, l.jsx)("div", {
                  className:
                    "bg-black absolute top-0 bottom-0 right-0 left-0 -z-10",
                }),
                (0, l.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, l.jsx)(s.default, {
                      width: 40,
                      height: 40,
                      src: "/images/tokens/".concat(a.toLowerCase(), ".svg"),
                      alt: a + " token logo",
                    }),
                    (0, l.jsx)("h3", { className: "text-3xl", children: a }),
                    h &&
                      (0, l.jsx)(g.default, {
                        text: n,
                        color: t,
                        className: "ml-auto",
                      }),
                  ],
                }),
                (0, l.jsx)("p", {
                  className: "body2 font-light text-lg",
                  children: o,
                }),
                h &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("div", {
                        className: "w-full h-0.5 bg-slate-900",
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex justify-between font-light text-lg",
                        children: [
                          (0, l.jsx)("span", {
                            className: "body2",
                            children: "Return",
                          }),
                          (0, l.jsx)("span", {
                            className: "text-right",
                            children: d,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, l.jsx)("div", { className: "w-full h-0.5 bg-slate-900" }),
                (0, l.jsxs)("div", {
                  className: "flex justify-between font-light text-lg gap-4",
                  children: [
                    (0, l.jsx)("span", {
                      className: "body2",
                      children: "Risks",
                    }),
                    (0, l.jsx)("span", {
                      className: "text-right",
                      children: c,
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: "w-full h-0.5 bg-slate-900" }),
                (0, l.jsxs)("div", {
                  className: "flex justify-between font-light text-lg gap-4",
                  children: [
                    (0, l.jsx)("span", {
                      className: "body2",
                      children: "Locked Value",
                    }),
                    (0, l.jsxs)("span", {
                      className: "text-right",
                      children: [
                        (function (e, t) {
                          let [a, l] = e.toString().split("."),
                            s = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                          if (void 0 !== t && void 0 !== l) {
                            let e = l.slice(0, t);
                            return "".concat(s, ".").concat(e);
                          }
                          return void 0 !== l ? "".concat(s, ".").concat(l) : s;
                        })(Number(i), 2),
                        " ",
                        (0, l.jsx)("span", {
                          className: "text-lg text-slate-500 font-light",
                          children: r,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [539, 749, 607, 971, 69, 744], function () {
      return e((e.s = 7899));
    }),
      (_N_E = e.O());
  },
]);
