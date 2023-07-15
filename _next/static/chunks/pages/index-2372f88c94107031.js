(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        48312: function(i, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(46012)
            }])
        },
        79307: function(i, a, t) {
            "use strict";
            t.d(a, {
                FE: function() {
                    return d
                },
                Fx: function() {
                    return y
                },
                Mb: function() {
                    return l
                },
                SZ: function() {
                    return x
                },
                aS: function() {
                    return e
                },
                mG: function() {
                    return o
                },
                tu: function() {
                    return n
                },
                yJ: function() {
                    return r
                }
            });
            var s = t(96699);
            const e = (0, s.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Scanline.gif"),
                o = (0, s.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Payload%20Sequence%20Preparing_Audio.mp4"),
                x = (0, s.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Payload%20Experience%20Acquire%20Off.png"),
                n = (0, s.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Payload_Hover.wav"),
                r = (0, s.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Payload_Scan.wav"),
                l = (0, s.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Button_Hover.wav"),
                y = (0, s.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Button_Hover2.wav"),
                d = (0, s.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Base%20Apparition%20Pack.gif")
        },
        35648: function(i, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return x
                }
            });
            var s, e = t(67294);

            function o() {
                return o = Object.assign || function(i) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
                    }
                    return i
                }, o.apply(this, arguments)
            }
            var x = i => e.createElement("svg", o({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, i), s || (s = e.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.996 1.414 22.943 8.09l-10.947 6.675L1.039 8.09l10.957-6.676ZM2.96 8.09l9.035 5.504 9.027-5.504-9.027-5.504L2.96 8.09Zm9.035 9.41L2.26 11.57l-.52.854 10.256 6.248 10.247-6.248-.52-.854-9.727 5.931Zm0 3.914-9.736-5.94-.52.854 10.256 6.258 10.248-6.258-.522-.853-9.726 5.94Z",
                fill: "currentColor"
            })))
        },
        44760: function(i, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return o
                }
            });
            var s = t(85893),
                e = t(86010);

            function o({
                className: i
            }) {
                return (0, s.jsx)("pre", {
                    className: (0, e.Z)("font-mono leading-none", i),
                    children: "  /\\_/\\\n  >^.^<.---.\n _'-`-'     )\\\n(6-- |-- (`.`-.\n    --'  --'  ``-'"
                })
            }
        },
        62050: function(i, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return r
                },
                _: function() {
                    return n
                }
            });
            var s = t(85893),
                e = t(67294);
            var o = t(78326);
            const x = (0, e.createContext)(null);

            function n() {
                return (0, e.useContext)(x)
            }

            function r({
                children: i,
                width: a = 1920,
                height: t = 1080,
                layout: n = "contain"
            }) {
                const [r, l] = (0, e.useState)(null), [y, d] = (0, e.useState)(null), [c, m] = (0, e.useState)([]), p = (0, o.Z)(y), [u, k] = "cover" === n ? [Math.min((null === p || void 0 === p ? void 0 : p.width) ? ? a, a), Math.min((null === p || void 0 === p ? void 0 : p.height) ? ? t, t)] : [a, t];
                var h;
                h = (0, e.useCallback)((() => {
                    if (!r) return;
                    const i = r.getContext("2d");
                    for (const a of c) i && a.showOn(i)
                }), [c, r]), (0, e.useEffect)((() => {
                    let i;
                    return i = window.requestAnimationFrame((function a(t) {
                        h(t), i = window.requestAnimationFrame(a)
                    })), () => window.cancelAnimationFrame(i)
                }), [h]);
                const f = "cover" === n ? Math.max(((null === p || void 0 === p ? void 0 : p.width) ? ? a) / u, ((null === p || void 0 === p ? void 0 : p.height) ? ? t) / k) : Math.min(((null === p || void 0 === p ? void 0 : p.width) ? ? a) / u, ((null === p || void 0 === p ? void 0 : p.height) ? ? t) / k, 1),
                    g = (0, e.useMemo)((() => ({
                        scale: f,
                        setBackgroundLayers: m
                    })), [m, f]);
                return (0, s.jsx)("div", {
                    className: "relative h-full w-full select-none overflow-hidden",
                    ref: d,
                    children: p && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("canvas", {
                            ref: l,
                            width: u,
                            height: k,
                            className: "absolute left-1/2 top-1/2 bg-black",
                            style: {
                                transform: `translate(-50%, -50%) scale(${"cover"===n?Math.max(f,1):f})`
                            }
                        }), (0, s.jsx)("div", {
                            className: "absolute left-1/2 top-1/2",
                            style: {
                                width: a,
                                height: t,
                                transform: `translate(-50%, -50%) scale(${f})`
                            },
                            children: (0, s.jsx)(x.Provider, {
                                value: g,
                                children: i
                            })
                        })]
                    })
                })
            }
        },
        94891: function(i, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return s.Z
                },
                _: function() {
                    return s._
                }
            });
            var s = t(62050)
        },
        3513: function(i, a, t) {
            "use strict";
            t.d(a, {
                ZP: function() {
                    return x
                },
                UI: function() {
                    return l
                },
                wO: function() {
                    return y
                },
                hY: function() {
                    return r
                },
                QM: function() {
                    return c
                },
                iU: function() {
                    return n
                },
                sT: function() {
                    return d
                }
            });
            var s = t(67294);
            var e = t(63368),
                o = t(62050);

            function x(i, a, t) {
                const x = (0, o._)(),
                    [n] = (0, e.Li)();
                return function(i, a, t) {
                    const [e, o] = (0, s.useState)(a), x = (0, s.useCallback)((a => {
                        const s = i(e, a);
                        for (;;) {
                            const i = s.next();
                            if (!0 === i.done) {
                                o(i.value);
                                break
                            }
                            i.value(t, x)
                        }
                    }), [i, e, t]);
                    return [e, x]
                }(i, a, (0, s.useMemo)((() => ({
                    experience: x,
                    assets: n,
                    ...t ? ? {}
                })), [x, n, t]))
            }

            function n(i) {
                return ({
                    experience: a,
                    assets: t
                }) => {
                    const s = i.map((i => t.get(i)));
                    a.setBackgroundLayers(s)
                }
            }

            function r(i) {
                return ({
                    assets: a
                }) => {
                    const t = a.get(i);
                    null === t || void 0 === t || t.play()
                }
            }

            function l(i, a) {
                return ({
                    assets: t
                }) => {
                    const s = t.get(i);
                    setTimeout((() => {
                        null === s || void 0 === s || s.play()
                    }), a)
                }
            }

            function y(i) {
                return ({
                    assets: a
                }) => {
                    const t = a.get(i);
                    null === t || void 0 === t || t.pause()
                }
            }

            function d(i) {
                return ({
                    assets: a
                }) => {
                    const t = a.get(i);
                    null === t || void 0 === t || t.stop()
                }
            }

            function c(i) {
                return ({
                    assets: a
                }) => {
                    const t = a.get(i);
                    (null === t || void 0 === t ? void 0 : t.currentTime) && (t.currentTime = 0, null === t || void 0 === t || t.play())
                }
            }
        },
        40454: function(i, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return o
                }
            });
            var s = t(85893),
                e = t(86010);

            function o({
                children: i,
                className: a
            }) {
                return (0, s.jsx)("h2", {
                    className: (0, e.Z)("font-display text-3xl font-light uppercase tracking-wide", a),
                    children: i
                })
            }
        },
        24294: function(i, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return k
                }
            });
            var s, e, o, x, n, r = t(85893),
                l = t(67294),
                y = t(78366);

            function d() {
                return d = Object.assign || function(i) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
                    }
                    return i
                }, d.apply(this, arguments)
            }
            var c, m = i => l.createElement("svg", d({
                width: 16,
                height: 14,
                viewBox: "0 0 16 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, i), s || (s = l.createElement("path", {
                opacity: .3,
                fill: "#fff",
                d: "M.083 8.666h2.5v5h-2.5z"
            })), e || (e = l.createElement("path", {
                fill: "#fff",
                d: "M3.417.333h2.5v13.333h-2.5z"
            })), o || (o = l.createElement("path", {
                opacity: .3,
                fill: "#fff",
                d: "M6.75 6.167h2.5v7.5h-2.5z"
            })), x || (x = l.createElement("path", {
                fill: "#fff",
                d: "M10.083 4.5h2.5v9.167h-2.5z"
            })), n || (n = l.createElement("path", {
                opacity: .3,
                fill: "#fff",
                d: "M13.417 11.166h2.5v2.5h-2.5z"
            })));

            function p() {
                return p = Object.assign || function(i) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
                    }
                    return i
                }, p.apply(this, arguments)
            }
            var u = i => l.createElement("svg", p({
                    width: 16,
                    height: 14,
                    viewBox: "0 0 16 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, i), c || (c = l.createElement("path", {
                    opacity: .3,
                    fill: "#fff",
                    d: "M.083 8.666h2.5v5h-2.5zM3.417.333h2.5v13.333h-2.5zM6.75 6.167h2.5v7.5h-2.5zM10.083 4.5h2.5v9.167h-2.5zM13.417 11.166h2.5v2.5h-2.5z"
                }))),
                k = (0, l.forwardRef)((function({
                    onClick: i,
                    className: a,
                    muted: t,
                    label: s = "Sound"
                }, e) {
                    return (0, r.jsx)(y.Z, {
                        ref: e,
                        label: s,
                        className: a,
                        onClick: i,
                        children: t ? (0, r.jsx)(u, {}) : (0, r.jsx)(m, {})
                    })
                }))
        },
        78850: function(i, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return s.Z
                }
            });
            var s = t(24294)
        },
        21846: function(i, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return o
                }
            });
            var s = t(85893),
                e = t(86010);

            function o({
                className: i,
                space: a = "1rem",
                threshold: t = "30rem",
                children: o
            }) {
                return (0, s.jsx)("div", {
                    className: (0, e.Z)("switcher", i),
                    style: {
                        "--Switcher--space": a,
                        "--Switcher--threshold": t
                    },
                    children: o
                })
            }
        },
        55210: function(i, a, t) {
            "use strict";
            t.d(a, {
                v: function() {
                    return x
                }
            });
            var s = t(48494),
                e = t(26358),
                o = t(84992);
            const x = (0, s.Z)(["promoCreditBalance"], (function(i) {
                return (0, e.NE)((async function*() {
                    return (yield(0, o.AV)((0, o.WY)(`/api/v1/promo-credits/balance/?credit_type=${i}`))).balances.find((a => a.type === i)) ? ? {
                        type: i,
                        quantity: 0
                    }
                }))
            }))
        },
        84158: function(i, a, t) {
            "use strict";
            t.d(a, {
                Z: function() {
                    return o
                }
            });
            var s = t(67294),
                e = t(26038);

            function o(i, a, {
                volume: t = 1,
                fadeIn: o = !1,
                fadeOut: x = !1,
                playing: n = !0
            } = {}) {
                const [r, l] = (0, s.useState)(!1);
                (0, s.useEffect)((() => {
                    if (!r) return;
                    if (!a || !i) throw new TypeError("Unreachable");
                    a.volume = t, a.loop = !0, o ? e.p8.fromTo(i, {
                        volume: 0
                    }, {
                        volume: t,
                        duration: 1,
                        ease: "none"
                    }) : i.volume = t;
                    const s = {};
                    return i.play().then((() => {
                        s.current = window.setTimeout((() => {
                            a.play()
                        }), 1e3 * i.duration)
                    })), () => {
                        window.clearTimeout(s.current), x ? e.p8.timeline().to([i, a], {
                            volume: 0,
                            duration: 1,
                            ease: "none"
                        }).call((() => {
                            i.stop(), a.stop()
                        })) : (i.stop(), a.stop())
                    }
                }), [r]), (0, s.useEffect)((() => {
                    i && (i.volume = t), a && (a.volume = t)
                }), [i, a, t]), (0, s.useEffect)((() => {
                    a && i && n && l(!0)
                }), [a, i, t, o, x, n])
            }
        },
        46012: function(i, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                __N_SSP: function() {
                    return Vi
                },
                default: function() {
                    return Gi
                }
            });
            var s = t(85893),
                e = t(9008),
                o = t.n(e),
                x = t(49089),
                n = t(65772),
                r = t(11163),
                l = t(67294),
                y = t(54403),
                d = t(55210),
                c = t(29260),
                m = t.n(c),
                p = t(30417),
                u = t(79307);

            function k({
                quantity: i,
                onClick: a
            }) {
                return (0, s.jsxs)(y.q3, {
                    dismissible: !0,
                    color: y.PQ.Gray,
                    onClick: a,
                    children: [(0, s.jsx)(m(), {
                        src: u.FE.url,
                        priority: !0,
                        unoptimized: !0,
                        height: 100,
                        width: 100,
                        className: "mr-2",
                        alt: "The pack opens to reveal the apparition cards inside one by one."
                    }), (0, s.jsxs)("div", {
                        className: "flex h-full flex-col justify-between py-2 tracking-halfwide",
                        children: [(0, s.jsx)("div", {
                            className: "mb-2 text-xxs font-medium uppercase text-white/60",
                            children: "Free Gift"
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, s.jsxs)("div", {
                                className: "text-sm font-medium uppercase text-yellow",
                                children: ["You have ", i, " Free Apparition Pack", (0, p.Z)(i), " to open"]
                            }), (0, s.jsxs)("div", {
                                className: "text-xs text-white/80",
                                children: ["Start by opening your pack", (0, p.Z)(i), " and revealing the cards inside!"]
                            })]
                        })]
                    })]
                })
            }
            var h, f = t(26038),
                g = t(86010),
                v = t(92010),
                _ = t(63368),
                w = t(66155),
                I = t(40454),
                b = t(21846);

            function j() {
                return j = Object.assign || function(i) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
                    }
                    return i
                }, j.apply(this, arguments)
            }
            var Z, M, A = i => l.createElement("svg", j({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, i), h || (h = l.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "currentColor",
                d: "M5.8 6.458A7.276 7.276 0 0 1 4 7a7.276 7.276 0 0 1 6 6 7.279 7.279 0 0 1 6-6 7.277 7.277 0 0 1-6-6 7.276 7.276 0 0 1-4.2 5.458ZM6.935 7A8.293 8.293 0 0 1 10 10.064 8.294 8.294 0 0 1 13.064 7 8.294 8.294 0 0 1 10 3.936 8.293 8.293 0 0 1 6.936 7ZM13.652 14.947A5.455 5.455 0 0 1 12 15.5a5.455 5.455 0 0 1 4.5 4.5 5.455 5.455 0 0 1 4.5-4.5 5.455 5.455 0 0 1-4.5-4.5 5.455 5.455 0 0 1-2.848 3.947Zm1.026.553a6.472 6.472 0 0 1 1.822 1.822 6.472 6.472 0 0 1 1.822-1.822 6.472 6.472 0 0 1-1.822-1.822 6.472 6.472 0 0 1-1.822 1.822ZM5.524 18.933A4.24 4.24 0 0 1 4 19.5a4.24 4.24 0 0 1 2.933 1.976c.28.457.476.972.567 1.524a4.239 4.239 0 0 1 1.976-2.933A4.24 4.24 0 0 1 11 19.5a4.24 4.24 0 0 1-2.933-1.976A4.239 4.239 0 0 1 7.5 16a4.239 4.239 0 0 1-1.976 2.933Zm.943.567c.39.294.739.642 1.033 1.032A5.26 5.26 0 0 1 8.533 19.5 5.26 5.26 0 0 1 7.5 18.468 5.26 5.26 0 0 1 6.467 19.5Z"
            })));

            function N() {
                return N = Object.assign || function(i) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
                    }
                    return i
                }, N.apply(this, arguments)
            }
            var U = i => l.createElement("svg", N({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, i), Z || (Z = l.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.544 21.205c-3.315-7.366-13.773-7.366-17.088 0l-.912-.41c3.668-8.152 15.243-8.152 18.912 0l-.912.41Z",
                    fill: "currentColor"
                })), M || (M = l.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 1a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
                    fill: "currentColor"
                }))),
                P = t(35648),
                S = t(11084),
                C = t(250),
                T = t(44760),
                E = t(97518),
                B = t(21907),
                R = t(26218),
                O = t(57007);

            function L(i, {
                x: a = 0,
                y: t = 0,
                duration: s = .3
            } = {}) {
                return f.p8.timeline().fromTo(i, {
                    opacity: 1,
                    x: 0,
                    y: 0
                }, {
                    opacity: 0,
                    x: a,
                    y: t,
                    duration: s
                }).set(i, {
                    clearProps: "x,y"
                })
            }

            function F(i, {
                x: a = 0,
                y: t = 0,
                duration: s = .3
            } = {}) {
                return f.p8.fromTo(i, {
                    opacity: 0,
                    x: a,
                    y: t
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: s
                })
            }

            function H(i, {
                duration: a = .3
            } = {}) {
                return f.p8.fromTo(i, {
                    width: "0%"
                }, {
                    width: "100%",
                    duration: a
                })
            }
            var K = t(24554),
                D = t(78850),
                q = t(94891),
                V = t(47034),
                G = t(84158),
                z = t(96699);
            const X = (0, z.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/01_augencore_v002.mp4"),
                $ = (0, z.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/02_earthern_v002.mp4"),
                J = (0, z.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/03_kathari_v004.mp4"),
                Y = (0, z.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/04_marcolian_v002.mp4"),
                W = (0, z.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/05_shroud_v003.mp4"),
                Q = (0, z.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/06_universal_v003.mp4"),
                ii = (0, z.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/Parallel%20Logo%20Spiner.mp4"),
                ai = (0, z.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/1080p_ParallelName.mp4"),
                ti = (0, z.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/Parallel_WEB_LogoBuildwDrumBuild.wav"),
                si = (0, z.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/faction-assets/Parallel_WEB_ThemeLoop.wav");
            var ei;

            function oi(i) {
                return {
                    type: ei.Enqueue,
                    faction: i
                }
            }

            function xi() {
                return {
                    type: ei.ToggleAudio
                }
            }! function(i) {
                i[i.Enqueue = 0] = "Enqueue", i[i.Next = 1] = "Next", i[i.ToggleAudio = 2] = "ToggleAudio"
            }(ei || (ei = {}));
            var ni = t(28240),
                ri = t(3513);
            const li = [R.Z.Augencore, R.Z.Earthen, R.Z.Kathari, R.Z.Marcolian, R.Z.Shroud, R.Z.Universal];

            function* yi(i, a) {
                switch (a.type) {
                    case ei.Enqueue:
                        {
                            const t = li.indexOf(a.faction),
                                s = li.slice(t);
                            return { ...i,
                                queue: s
                            }
                        }
                    case ei.Next:
                        {
                            const a = i.queue[0],
                                t = i.queue.slice(1);
                            if (a) {
                                const i = (0, ni.wVM)([
                                    [(0, ni.fS0)(R.Z.Augencore), (0, ni.Bxt)(X)],
                                    [(0, ni.fS0)(R.Z.Kathari), (0, ni.Bxt)(J)],
                                    [(0, ni.fS0)(R.Z.Earthen), (0, ni.Bxt)($)],
                                    [(0, ni.fS0)(R.Z.Marcolian), (0, ni.Bxt)(Y)],
                                    [(0, ni.fS0)(R.Z.Shroud), (0, ni.Bxt)(W)],
                                    [(0, ni.fS0)(R.Z.Universal), (0, ni.Bxt)(Q)]
                                ])(a);
                                yield(0, ri.hY)(i), yield(0, ri.iU)([i])
                            }
                            return { ...i,
                                current: a,
                                queue: t
                            }
                        }
                    case ei.ToggleAudio:
                        return { ...i,
                            muted: !i.muted
                        }
                }
            }

            function di() {
                return (0, ri.ZP)(yi, {
                    queue: [R.Z.Augencore, R.Z.Earthen, R.Z.Kathari, R.Z.Marcolian, R.Z.Shroud, R.Z.Universal],
                    status: ei.Enqueue,
                    muted: !1
                })
            }
            const ci = (0, l.createContext)([{
                queue: [],
                muted: !0
            }, {}]);
            const mi = [ai, J, Y, $, X, W, Q, ti, si];
            var pi = (0, l.forwardRef)((function({
                    children: i
                }, a) {
                    const [t, e] = di(), o = (0, q._)();
                    (0, l.useImperativeHandle)(a, (() => ({
                        state: t,
                        dispatch: e
                    })), [t, e]);
                    const x = (0, _.ct)(mi, []),
                        n = (0, _.ZP)(ii),
                        r = (0, _.ZP)(ai),
                        y = (0, _.ZP)(J),
                        d = (0, _.ZP)(Y),
                        c = (0, _.ZP)($),
                        m = (0, _.ZP)(X),
                        p = (0, _.ZP)(W),
                        u = (0, _.ZP)(Q);
                    (0, _.wK)(n), (0, _.wK)(r), (0, _.wK)(y), (0, _.wK)(d), (0, _.wK)(c), (0, _.wK)(m), (0, _.wK)(p), (0, _.wK)(u), (0, l.useEffect)((() => {
                        n && (null === o || void 0 === o || o.setBackgroundLayers([n]))
                    }), []);
                    const [k, h] = (0, l.useState)(!1), f = (0, _.ZP)(ti), g = (0, _.ZP)(si);
                    (0, G.Z)(f, g, {
                        fadeIn: !1,
                        fadeOut: !0,
                        volume: t.muted ? 0 : .3,
                        playing: k
                    });
                    const v = (0, l.useCallback)((() => null === n || void 0 === n ? void 0 : n.play()), [n]),
                        w = (0, l.useCallback)((() => {
                            if (!r) throw new TypeError;
                            r.play(), h(!0), null === o || void 0 === o || o.setBackgroundLayers([r])
                        }), [r, o]),
                        I = (0, l.useCallback)((() => {
                            e({
                                type: ei.Next
                            })
                        }), [e]);
                    return (0, V.Z)(n, "ended", x ? w : v), (0, V.Z)(r, "ended", I), (0, V.Z)(y, "ended", I), (0, V.Z)(d, "ended", I), (0, V.Z)(c, "ended", I), (0, V.Z)(m, "ended", I), (0, V.Z)(p, "ended", I), (0, V.Z)(u, "ended", I), (0, s.jsx)(ci.Provider, {
                        value: [t, e],
                        children: i
                    })
                })),
                ui = t(2245),
                ki = t(5590);

            function hi({
                children: i,
                x: a,
                y: t,
                asset: e,
                onReady: o,
                duration: x = 7
            }) {
                const [n, r] = (0, l.useState)(null), [y, d] = (0, l.useState)(null);
                return (0, V.Z)(e, "play", (0, l.useCallback)((() => {
                    f.p8.timeline().fromTo(n, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: .33
                    }, 1.5).fromTo(y, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: .33
                    }, 1.75).call((() => null === o || void 0 === o ? void 0 : o()), [], 1.75).to(y, {
                        opacity: 0,
                        duration: .33
                    }, x - 2).to(n, {
                        opacity: 0,
                        duration: .33
                    }, x - 1.75)
                }), [n, o, y, x])), (0, s.jsxs)("div", {
                    className: "pointer-events-none absolute flex flex-col gap-6",
                    style: a && t ? {
                        left: a,
                        top: t
                    } : {
                        bottom: 0
                    },
                    children: [(0, s.jsx)("div", {
                        ref: r,
                        className: "h-[5px] w-[20px] bg-white opacity-0"
                    }), (0, s.jsx)("div", {
                        ref: d,
                        className: "relative text-[26px] font-semibold uppercase tracking-[0.43em] opacity-0",
                        children: i
                    })]
                })
            }
            var fi = JSON.parse('{"v":"5.9.0","fr":29.9700012207031,"ip":0,"op":130.000005295009,"w":1920,"h":1080,"nm":"EARTH_UIbits_02","ddd":0,"assets":[{"id":"image_0","w":1080,"h":1080,"u":"images/","p":"img_0.png","e":0},{"id":"image_1","w":1080,"h":1080,"u":"images/","p":"img_1.png","e":0},{"id":"image_2","w":1080,"h":1080,"u":"images/","p":"img_2.png","e":0},{"id":"image_3","w":1080,"h":1080,"u":"images/","p":"img_3.png","e":0},{"id":"image_4","w":1080,"h":1080,"u":"images/","p":"img_4.png","e":0},{"id":"image_5","w":1080,"h":1080,"u":"images/","p":"img_5.png","e":0},{"id":"image_6","w":1080,"h":1080,"u":"images/","p":"img_6.png","e":0},{"id":"image_7","w":1080,"h":1080,"u":"images/","p":"img_7.png","e":0},{"id":"image_8","w":1080,"h":1080,"u":"images/","p":"img_8.png","e":0},{"id":"image_9","w":1080,"h":1080,"u":"images/","p":"img_9.png","e":0},{"id":"image_10","w":1080,"h":1080,"u":"images/","p":"img_10.png","e":0},{"id":"image_11","w":1080,"h":1080,"u":"images/","p":"img_11.png","e":0},{"id":"image_12","w":1080,"h":1080,"u":"images/","p":"img_12.png","e":0},{"id":"image_13","w":1080,"h":1080,"u":"images/","p":"img_13.png","e":0},{"id":"image_14","w":1080,"h":1080,"u":"images/","p":"img_14.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"DOTS_01/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":9,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[100]},{"t":79.000003217736,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":24,"s":[960,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":55,"s":[960,540,0],"to":[0,-11.857,0],"ti":[0,11.857,0]},{"t":63.0000025660426,"s":[960,468.857,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":55,"s":[100,100,100]},{"t":63.0000025660426,"s":[70,70,100]}],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"DOTS_02/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":43,"s":[62]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":44,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":54,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[79]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":74,"s":[100]},{"t":82.0000033399285,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":14,"s":[960,518.5,0],"to":[0,3.583,0],"ti":[0,-3.583,0]},{"i":{"x":0.34,"y":0.34},"o":{"x":0.14,"y":0.14},"t":24,"s":[960,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":0},"t":65,"s":[960,540,0],"to":[0,2.143,0],"ti":[0,-2.143,0]},{"t":67.0000027289659,"s":[960,552.857,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"DOTS_03/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":16,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":44,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[62]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":46,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":56,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":57,"s":[79]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":76,"s":[100]},{"t":84.0000034213901,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":16,"s":[960,685.5,0],"to":[0,-24.25,0],"ti":[0,24.25,0]},{"i":{"x":0.34,"y":0.34},"o":{"x":0.14,"y":0.14},"t":26,"s":[960,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.34,"y":1},"o":{"x":0.167,"y":0},"t":38,"s":[960,540,0],"to":[0,-7.857,0],"ti":[0,7.857,0]},{"t":62.0000025253118,"s":[960,492.857,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":2.00000008146167,"op":10790.0004394857,"st":2.00000008146167,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"DOTS_04/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":43,"s":[62]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":44,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":54,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[79]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[100]},{"t":86.0000035028518,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":14,"s":[960,711,0],"to":[0,-28.5,0],"ti":[0,28.5,0]},{"i":{"x":0.34,"y":0.34},"o":{"x":0.14,"y":0.14},"t":24,"s":[960,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":0},"t":47,"s":[960,540,0],"to":[0,3,0],"ti":[0,-3,0]},{"t":51.0000020772726,"s":[960,558,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"DOTS_05/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":41,"s":[62]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":52,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":53,"s":[79]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":76,"s":[100]},{"t":84.0000034213901,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":12,"s":[960,386,0],"to":[0,25.667,0],"ti":[0,-25.667,0]},{"i":{"x":0.34,"y":0.34},"o":{"x":0.14,"y":0.14},"t":22,"s":[960,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":0},"t":65,"s":[960,540,0],"to":[0,7.143,0],"ti":[0,-7.143,0]},{"t":70.0000028511585,"s":[960,582.857,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":-2.00000008146167,"op":10786.0004393228,"st":-2.00000008146167,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"DOTS_06/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_5","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":43,"s":[62]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":44,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":54,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[79]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[100]},{"t":86.0000035028518,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":14,"s":[960,269.5,0],"to":[0,45.083,0],"ti":[0,-45.083,0]},{"t":24.00000097754,"s":[960,540,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"DOTS_07/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_6","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":16,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":46,"s":[62]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":47,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":57,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[79]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":81,"s":[100]},{"t":89.0000036250443,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":17,"s":[960,784,0],"to":[0,-40.667,0],"ti":[0,40.667,0]},{"t":27.0000010997325,"s":[960,540,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":3.00000012219251,"op":10791.0004395264,"st":3.00000012219251,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"DOTS_08/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_7","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":18,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":46,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":47,"s":[62]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[79]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":82,"s":[100]},{"t":90.0000036657751,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":18,"s":[960,792,0],"to":[0,-42,0],"ti":[0,42,0]},{"i":{"x":0.34,"y":0.34},"o":{"x":0.14,"y":0.14},"t":28,"s":[960,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":0},"t":65,"s":[960,540,0],"to":[0,35.429,0],"ti":[0,-35.429,0]},{"t":73.000002973351,"s":[960,752.571,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":4.00000016292334,"op":10792.0004395672,"st":4.00000016292334,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"DOTS_09/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_8","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":43,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":44,"s":[62]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":55,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":56,"s":[79]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":79,"s":[100]},{"t":87.0000035435826,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":12,"s":[1444,540,0],"to":[-80.667,0,0],"ti":[80.667,0,0]},{"i":{"x":0.34,"y":0.34},"o":{"x":0.14,"y":0.14},"t":25,"s":[960,540,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":0},"t":71,"s":[960,540,0],"to":[18.143,0,0],"ti":[-18.143,0,0]},{"t":77.0000031362743,"s":[1068.857,540,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":1.00000004073083,"op":10789.000439445,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":10,"ty":2,"nm":"DOTS_10/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_9","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":12,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":41,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[62]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":43,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":53,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":54,"s":[79]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":77,"s":[100]},{"t":85.000003462121,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":15,"s":[595.5,540,0],"to":[60.75,0,0],"ti":[-60.75,0,0]},{"t":23.0000009368092,"s":[960,540,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":-1.00000004073083,"op":10787.0004393635,"st":-1.00000004073083,"bm":0},{"ddd":0,"ind":11,"ty":2,"nm":"DUST/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_10","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":26,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":51,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":52,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":73,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":74,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":104,"s":[7]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":110,"s":[100]},{"t":121.000004928431,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":11.0000004480392,"op":10799.0004398523,"st":11.0000004480392,"bm":0},{"ddd":0,"ind":12,"ty":2,"nm":"DUST2/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_11","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":12,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":41,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":93,"s":[7]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":99,"s":[100]},{"t":110.000004480392,"s":[1]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":2,"nm":"UI_RING_01/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_12","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":91,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":92,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":93,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":94,"s":[100]},{"t":95.0000038694293,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[0]},{"t":81.0000032991976,"s":[25]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":32,"s":[960,540,0],"to":[-3.443,-0.902,0],"ti":[8.607,2.254,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":56,"s":[939.424,536.111,0],"to":[-8.89,-2.328,0],"ti":[3.557,0.931,0]},{"t":81.0000032991976,"s":[918,529,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.34,0.34,0.34],"y":[1,1,1]},"o":{"x":[0.14,0.14,0.14],"y":[1,1,0]},"t":27,"s":[18,18,100]},{"t":34.0000013848484,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"ip":4.00000016292334,"op":10792.0004395672,"st":4.00000016292334,"bm":0},{"ddd":0,"ind":14,"ty":2,"nm":"UI_RING_01B/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_13","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":85,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":86,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":87,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":89,"s":[100]},{"t":90.0000036657751,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.34,0.34,0.34],"y":[1,1,1]},"o":{"x":[0.14,0.14,0.14],"y":[1,1,0]},"t":23,"s":[18,18,100]},{"t":30.0000012219251,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":2,"nm":"UI_RING_02/EARTH_UI_ANIMATIC_01A.ai","cl":"ai","refId":"image_14","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":44,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":46,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":85,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":86,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":87,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":89,"s":[100]},{"t":90.0000036657751,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0}],"markers":[]}');

            function gi({
                x: i,
                y: a
            }) {
                const t = (0, _.ZP)($),
                    e = (0, l.useRef)(null);
                if (!t) return (0, s.jsx)(s.Fragment, {});
                return (0, s.jsxs)(hi, {
                    x: i,
                    y: a,
                    onReady: function() {
                        var i;
                        null === (i = e.current) || void 0 === i || i.goToAndPlay(0)
                    },
                    asset: t,
                    children: ["Earthen", (0, s.jsx)("div", {
                        className: "absolute top-full translate-y-[calc(-50%+30px)] -translate-x-1/2",
                        children: (0, s.jsx)(ki.Z, {
                            className: "h-[1080px] w-[1080px]",
                            ref: e,
                            animationData: fi,
                            assetsPath: "/images/animations/Earthen_UIbits01/images/"
                        })
                    })]
                })
            }
            var vi = JSON.parse('{"v":"5.9.0","fr":29.9700012207031,"ip":0,"op":70.0000028511585,"w":1920,"h":1920,"nm":"Marc_UI_Bits_Comp","ddd":0,"assets":[{"id":"image_0","w":1920,"h":1920,"u":"images/","p":"img_0.png","e":0},{"id":"image_1","w":1920,"h":1920,"u":"images/","p":"img_1.png","e":0},{"id":"image_2","w":1920,"h":1920,"u":"images/","p":"img_2.png","e":0},{"id":"image_3","w":1920,"h":1920,"u":"images/","p":"img_3.png","e":0}],"layers":[{"ddd":0,"ind":2,"ty":2,"nm":"Layer 3/Marc_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":16,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":56,"s":[100]},{"t":57.0000023216576,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1044.57,1065.438],[931.927,1065.438],[931.927,1077.5],[1044.57,1077.5]],"c":true}]},{"t":36.0000014663101,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1044.785,1137.438],[932.142,1137.438],[932.142,1149.5],[1044.785,1149.5]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"Layer 3/Marc_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":16,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":56,"s":[100]},{"t":57.0000023216576,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":21,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1286.143,941.438],[1173.5,941.438],[1173.5,953.5],[1286.143,953.5]],"c":true}]},{"t":36.0000014663101,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1286.285,869.438],[1173.643,869.438],[1173.643,881.5],[1286.285,881.5]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"Layer 4/Marc_UI_Bits.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[100]},{"t":20.0000008146167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1301.848,982],[907,982],[907,1032.227],[1301.848,1032.227]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 5"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"Layer 4/Marc_UI_Bits.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[100]},{"t":49.0000019958109,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":31,"s":[960,960,0],"to":[0,-9.417,0],"ti":[0,9.417,0]},{"t":38.0000015477717,"s":[960,903.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1300.75,1213],[1268.875,1213],[1269,1255.787],[1300.875,1255.787]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"Layer 4/Marc_UI_Bits.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[100]},{"t":49.0000019958109,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":31,"s":[960,960,0],"to":[0,6.167,0],"ti":[0,-6.167,0]},{"t":38.0000015477717,"s":[960,997,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1300.875,753],[1269,753],[1269,787.787],[1300.875,787.787]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"Layer 4/Marc_UI_Bits.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":38,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":39,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":43,"s":[100]},{"t":44.0000017921567,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1297.367,927],[1274.5,927],[1274.5,947.434],[1297.367,947.434]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 2"},{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1298.582,1066],[1274,1066],[1274,1090.406],[1298.582,1090.406]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 3"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"Layer 5/Marc_UI_Bits.ai","cl":"ai","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"Layer 8/Marc_UI_Bits.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":4,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[100]},{"t":20.0000008146167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":6,"s":[960,960,0],"to":[0,10.917,0],"ti":[0,-10.917,0]},{"t":15.0000006109625,"s":[960,1025.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1124.404,864.5],[1083.5,864.5],[1083.5,887.16],[1124.404,887.16]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":2,"nm":"Layer 8/Marc_UI_Bits.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":4,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[100]},{"t":20.0000008146167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":6,"s":[960,960,0],"to":[0,-13,0],"ti":[0,13,0]},{"t":15.0000006109625,"s":[960,882,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1120.607,1133],[1084.5,1133],[1084.5,1154.838],[1120.607,1154.838]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0}],"markers":[]}');

            function _i({
                x: i,
                y: a
            }) {
                const t = (0, _.ZP)(Y),
                    e = (0, l.useRef)(null);
                if (!t) return (0, s.jsx)(s.Fragment, {});
                return (0, s.jsxs)(hi, {
                    x: i,
                    y: a,
                    onReady: function() {
                        var i;
                        null === (i = e.current) || void 0 === i || i.goToAndPlay(0)
                    },
                    asset: t,
                    children: ["Marcolian", (0, s.jsx)("div", {
                        className: "absolute left-0 top-1/2 translate-x-[calc(-50%+10px)] translate-y-[calc(-50%-34px)] scale-[1.3]",
                        children: (0, s.jsx)(ki.Z, {
                            className: "h-[1080px] w-[1080px]",
                            ref: e,
                            animationData: vi,
                            assetsPath: "/images/animations/Marcolian_UIbits01/images/"
                        })
                    })]
                })
            }
            var wi = JSON.parse('{"v":"5.9.0","fr":29.9700012207031,"ip":0,"op":103.000004195276,"w":1920,"h":1080,"nm":"AUG_UIbits_01","ddd":0,"assets":[{"id":"image_0","w":1080,"h":1080,"u":"images/","p":"img_0.png","e":0},{"id":"image_1","w":1080,"h":1080,"u":"images/","p":"img_1.png","e":0},{"id":"image_2","w":1080,"h":1080,"u":"images/","p":"img_2.png","e":0},{"id":"image_3","w":1080,"h":1080,"u":"images/","p":"img_3.png","e":0},{"id":"image_4","w":1080,"h":1080,"u":"images/","p":"img_4.png","e":0},{"id":"image_5","w":1080,"h":1080,"u":"images/","p":"img_5.png","e":0},{"id":"image_6","w":1080,"h":1080,"u":"images/","p":"img_6.png","e":0},{"id":"image_7","w":1080,"h":1080,"u":"images/","p":"img_7.png","e":0},{"id":"image_8","w":1080,"h":1080,"u":"images/","p":"img_8.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"DOTS_01/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":51,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":52,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":73,"s":[100]},{"t":74.0000030140818,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":53,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[847,576],[228,576],[228,604],[847,604]],"c":true}]},{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[847,576],[228,576],[228,604],[847,604]],"c":true}]},{"t":70.0000028511585,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[847,664],[228,664],[228,692],[847,692]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"DOTS_01B/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":60,"s":[100]},{"t":61.0000024845809,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.14,"y":1},"t":37,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[818,501.5],[255,501.5],[255,508.5],[818,508.5]],"c":true}]},{"i":{"x":0.34,"y":1},"o":{"x":0.167,"y":0.167},"t":39,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[817.5,535.141],[254.5,535.141],[255,551.141],[818,551.141]],"c":true}]},{"t":56.0000022809268,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[818,553.5],[255,553.5],[255,560.5],[818,560.5]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"DOTS_03/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":70,"s":[100]},{"t":71.0000028918893,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":38,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[678.5,439.5],[508.5,439.5],[508.5,447.5],[678.5,447.5]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":39,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[678.5,439.5],[508.5,439.5],[508.5,455],[678.5,455]],"c":true}]},{"t":45.0000018328876,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[911.5,439.5],[741.5,439.5],[741.5,455],[911.5,455]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"DOTS_04/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[100]},{"t":43.0000017514259,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":31,"s":[960,547,0],"to":[0,3.333,0],"ti":[0,-3.333,0]},{"t":32.0000013033867,"s":[960,567,0]}],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[776,358],[728.5,358],[728.5,376],[776,376]],"c":true}]},{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":20,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[776,358],[728.5,358],[728.5,376],[776,376]],"c":true}]},{"t":41.0000016699642,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[486,358],[438.5,358],[438.5,376],[486,376]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":5.00000020365417,"op":10793.0004396079,"st":5.00000020365417,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"DOTS_04/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"t":38.0000015477717,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":6,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[776,358],[728.5,358],[728.5,376],[776,376]],"c":true}]},{"i":{"x":0.34,"y":1},"o":{"x":0.14,"y":1},"t":15,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[776,358],[728.5,358],[728.5,376],[776,376]],"c":true}]},{"t":36.0000014663101,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[486,358],[438.5,358],[438.5,376],[486,376]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"DUST/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":33,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":57,"s":[10.127]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":74,"s":[70.37]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[0]},{"t":112.000004561854,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1010,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[79,79,100],"ix":6,"l":2}},"ao":0,"ip":10.0000004073083,"op":10798.0004398116,"st":10.0000004073083,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"DUST2/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_5","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":91,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":92,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":93,"s":[100]},{"t":94.0000038286985,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1010,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[79,79,100],"ix":6,"l":2}},"ao":0,"ip":10.0000004073083,"op":10798.0004398116,"st":10.0000004073083,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"DUST/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":47,"s":[10.127]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":64,"s":[70.37]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":65,"s":[0]},{"t":102.000004154545,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":2,"nm":"DUST2/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_5","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":81,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":82,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":83,"s":[100]},{"t":84.0000034213901,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":2,"nm":"UI1/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_6","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":67,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":68,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[100]},{"t":76.0000030955435,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":2,"nm":"UI2/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_7","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":63,"s":[100]},{"t":64.0000026067734,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":2,"nm":"UI3/AUG_UI_Animatic_01a.ai","cl":"ai","refId":"image_8","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":60,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":69,"s":[100]},{"t":70.0000028511585,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":10788.0004394042,"st":0,"bm":0}],"markers":[]}');

            function Ii({
                x: i,
                y: a
            }) {
                const t = (0, _.ZP)(X),
                    e = (0, l.useRef)(null);
                if (!t) return (0, s.jsx)(s.Fragment, {});
                return (0, s.jsxs)(hi, {
                    x: i,
                    y: a,
                    onReady: function() {
                        var i;
                        null === (i = e.current) || void 0 === i || i.goToAndPlay(0)
                    },
                    asset: t,
                    children: ["Augencore", (0, s.jsx)("div", {
                        className: "absolute top-full left-1/2 -translate-y-1/2 translate-x-[calc(-50%-80px)]",
                        children: (0, s.jsx)(ki.Z, {
                            className: "h-[1080px] w-[1080px]",
                            ref: e,
                            animationData: wi,
                            assetsPath: "/images/animations/Augencore_UIbits01/images/"
                        })
                    })]
                })
            }
            var bi = JSON.parse('{"v":"5.9.0","fr":29.9700012207031,"ip":0,"op":50.0000020365418,"w":1920,"h":1920,"nm":"Kathari_UI_Bits_Comp","ddd":0,"assets":[{"id":"image_0","w":1920,"h":1920,"u":"images/","p":"img_0.png","e":0},{"id":"image_1","w":1920,"h":1920,"u":"images/","p":"img_1.png","e":0},{"id":"image_2","w":1920,"h":1920,"u":"images/","p":"img_2.png","e":0},{"id":"image_3","w":1920,"h":1920,"u":"images/","p":"img_3.png","e":0},{"id":"image_4","w":1920,"h":1920,"u":"images/","p":"img_4.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"Layer 2/Kathari_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":18,"s":[12]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[22]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[12]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[22]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":26,"s":[12]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":28,"s":[22]},{"t":29.0000011811942,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"Layer 2/Kathari_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8,"s":[0]},{"t":9.00000036657752,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1109.754,999.605],[813,999.605],[813,1032],[1109.754,1032]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1109.508,917.605],[812.754,917.605],[812.754,950],[1109.508,950]],"c":true}]},{"t":23.0000009368092,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1108.031,467.605],[811.277,467.605],[812.523,606],[1109.277,606]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"Layer 2b/Kathari_UI_Bits.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[12]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":16,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[22]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":18,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[12]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[22]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[12]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[22]},{"t":26.0000010590017,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"Layer 2b/Kathari_UI_Bits.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8,"s":[0]},{"t":9.00000036657752,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":11,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1116.09,1001],[819,1001],[819,1009.805],[1116.09,1009.805]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1116.24,1118],[819.15,1118],[819.06,1202.805],[1116.15,1202.805]],"c":true}]},{"t":23.0000009368092,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1116.18,1445],[819.09,1445],[819.09,1453.805],[1116.18,1453.805]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"Layer 3/Kathari_UI_Bits.ai","cl":"ai","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":11,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1066.688,494],[888.344,494],[888,561.391],[1066.344,561.391]],"c":true}]},{"t":48.0000019550801,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1067.5,1590],[889.156,1590],[889.375,1657.391],[1067.719,1657.391]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"Layer 3/Kathari_UI_Bits.ai","cl":"ai","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.9,"y":0},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1105.758,247],[805.879,247],[804,296.359],[1103.879,296.359]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1105.916,348.866],[806.037,348.866],[804.316,382.226],[1104.194,382.226]],"c":true}]},{"i":{"x":0.1,"y":1},"o":{"x":0.167,"y":0.167},"t":14,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1105.289,1147.577],[805.41,1147.577],[805.293,1298.937],[1105.172,1298.937]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.9,"y":0},"t":26,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1105.516,1701],[805.637,1701],[805.758,1734.359],[1105.637,1734.359]],"c":true}]},{"t":48.0000019550801,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1105.031,1709],[805.152,1709],[805.758,1734.359],[1105.637,1734.359]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"Layer 5/Kathari_UI_Bits.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":26,"s":[100]},{"t":27.0000010997325,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1162.742,722],[786,722],[786,1030.414],[1162.742,1030.414]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":6.00000024438501,"op":306.000012463636,"st":6.00000024438501,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"Layer 5/Kathari_UI_Bits.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":16,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":18,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[100]},{"t":23.0000009368092,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1326,1030.141],[634.195,1030.141],[634.195,1378],[1326,1378]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":2.00000008146167,"op":302.000012300712,"st":2.00000008146167,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"Layer 6/Kathari_UI_Bits.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[100]},{"t":25.0000010182709,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[839.387,977.5],[816.193,977.5],[816,1044.691],[839.193,1044.691]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":-6.00000024438501,"op":294.000011974866,"st":-6.00000024438501,"bm":0},{"ddd":0,"ind":10,"ty":2,"nm":"Layer 6/Kathari_UI_Bits.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":18,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[862,1211],[816.08,1211],[816.141,1227.447],[862.061,1227.447]],"c":true}]},{"t":26.0000010590017,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[887.5,865.392],[819.58,865.5],[819.748,882.392],[887.668,882.283]],"c":true}]}],"ix":1},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":18,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":31,"s":[100]},{"t":32.0000013033867,"s":[0]}],"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":-11.0000004480392,"op":289.000011771211,"st":-11.0000004480392,"bm":0},{"ddd":0,"ind":11,"ty":2,"nm":"Layer 6/Kathari_UI_Bits.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":24,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1092.5,1211],[816.08,1211],[816.141,1227.447],[1092.561,1227.447]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1092.5,1153.5],[816.08,1153.5],[816.281,1164.947],[1092.701,1164.947]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":28,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1092.5,1073],[817.58,1073],[817.821,1106.852],[1092.741,1106.852]],"c":true}]},{"t":32.0000013033867,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1092.5,1017],[819.58,1017],[819.874,1029.392],[1092.794,1029.392]],"c":true}]}],"ix":1},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"t":38.0000015477717,"s":[0]}],"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":-5.00000020365417,"op":295.000012015596,"st":-5.00000020365417,"bm":0}],"markers":[]}');

            function ji({
                x: i,
                y: a
            }) {
                const t = (0, _.ZP)(J),
                    e = (0, l.useRef)(null);
                if (!t) return (0, s.jsx)(s.Fragment, {});
                return (0, s.jsxs)(hi, {
                    x: i,
                    y: a,
                    onReady: function() {
                        var i;
                        null === (i = e.current) || void 0 === i || i.goToAndPlay(0)
                    },
                    asset: t,
                    children: ["Kathari", (0, s.jsx)("div", {
                        className: "absolute top-1/2 left-0 translate-y-[calc(-50%-40px)] -translate-x-1/2",
                        children: (0, s.jsx)(ki.Z, {
                            className: "h-[1080px] w-[1080px]",
                            ref: e,
                            animationData: bi,
                            assetsPath: "/images/animations/Kathari_UIbits01/images/"
                        })
                    })]
                })
            }
            var Zi = JSON.parse('{"v":"5.9.0","fr":29.9700012207031,"ip":0,"op":69.0000028104276,"w":1920,"h":1920,"nm":"Shroud_UI_Bits_Comp","ddd":0,"assets":[{"id":"image_0","w":1920,"h":1920,"u":"images/","p":"img_0.png","e":0},{"id":"comp_0","nm":"bits","fr":29.9700012207031,"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"AUX/Shroud_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"t":44.0000017921567,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":7,"s":[1029.5,888.5,0],"to":[-11.583,11.917,0],"ti":[11.583,-11.917,0]},{"i":{"x":0.1,"y":0.1},"o":{"x":0.9,"y":0.9},"t":16,"s":[960,960,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.1,"y":1},"o":{"x":0.167,"y":0},"t":39,"s":[960,960,0],"to":[-15.583,16.25,0],"ti":[15.583,-16.25,0]},{"t":46.0000018736184,"s":[866.5,1057.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[858,1151],[803,1206],[849,1206],[903,1152]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":0,"op":300.00001221925,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"AUX/Shroud_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":14,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"t":44.0000017921567,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":15,"s":[825,960,0],"to":[22.5,0,0],"ti":[-22.5,0,0]},{"i":{"x":0.1,"y":0.1},"o":{"x":0.9,"y":0.9},"t":24,"s":[960,960,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.1,"y":1},"o":{"x":0.167,"y":0},"t":39,"s":[960,960,0],"to":[14.667,0,0],"ti":[-14.667,0,0]},{"t":46.0000018736184,"s":[1048,960,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[742,926],[683,927],[683,995.5],[742,995.5]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":8.00000032584668,"op":308.000012545097,"st":8.00000032584668,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"AUX/Shroud_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"t":44.0000017921567,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":11,"s":[986,960,0],"to":[-4.333,0,0],"ti":[4.333,0,0]},{"i":{"x":0.1,"y":0.1},"o":{"x":0.9,"y":0.9},"t":20,"s":[960,960,0],"to":[0,0,0],"ti":[0,0,0]},{"t":39.0000015885026,"s":[960,960,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1127.5,932],[1058,932],[1055,989.5],[1127.5,989.5]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":4.00000016292334,"op":304.000012382174,"st":4.00000016292334,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"AUX/Shroud_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":18,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":19,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"t":44.0000017921567,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":18,"s":[1004,1000.5,0],"to":[-7.333,-6.75,0],"ti":[7.333,6.75,0]},{"i":{"x":0.1,"y":0.1},"o":{"x":0.9,"y":0.9},"t":27,"s":[960,960,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.1,"y":1},"o":{"x":0.167,"y":0},"t":39,"s":[960,960,0],"to":[-14.417,0,0],"ti":[14.417,0,0]},{"t":46.0000018736184,"s":[873.5,960,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1092,1029],[1064,1034],[1194,1154],[1213,1145]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":11.0000004480392,"op":311.00001266729,"st":11.0000004480392,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"AUX/Shroud_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":8,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":40,"s":[100]},{"t":45.0000018328876,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":10,"s":[979,960,0],"to":[-3.167,0,0],"ti":[3.167,0,0]},{"i":{"x":0.1,"y":0.1},"o":{"x":0.9,"y":0.9},"t":19,"s":[960,960,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.1,"y":1},"o":{"x":0.167,"y":0},"t":39,"s":[960,960,0],"to":[-6.583,0,0],"ti":[6.583,0,0]},{"t":46.0000018736184,"s":[920.5,960,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":9,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[867,1051],[822,1051],[800,1083],[835,1083]],"c":true}]},{"t":18.000000733155,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1004,1051],[822,1051],[800,1083],[972,1083]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":3.00000012219251,"op":303.000012341443,"st":3.00000012219251,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"AUX/Shroud_UI_Bits.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":22,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[100]},{"t":54.0000021994651,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":22,"s":[925,995.5,0],"to":[5.833,-5.917,0],"ti":[-5.833,5.917,0]},{"i":{"x":0.1,"y":0.1},"o":{"x":0.9,"y":0.9},"t":31,"s":[960,960,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.1,"y":0.1},"o":{"x":0.167,"y":0.167},"t":39,"s":[960,960,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.1,"y":1},"o":{"x":0.167,"y":0},"t":48,"s":[960,960,0],"to":[12.417,-12.583,0],"ti":[-12.417,12.583,0]},{"t":54.0000021994651,"s":[1034.5,884.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[715,1058],[537,1227],[593,1227],[753,1064]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"ip":15.0000006109625,"op":315.000012830213,"st":15.0000006109625,"bm":0}]}],"layers":[{"ddd":0,"ind":3,"ty":0,"nm":"bits","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,-100,100],"ix":6,"l":2}},"ao":0,"w":1920,"h":1920,"ip":0,"op":71.0000028918893,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"bits","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":1920,"h":1920,"ip":0,"op":71.0000028918893,"st":0,"bm":0}],"markers":[]}');

            function Mi({
                x: i,
                y: a
            }) {
                const t = (0, _.ZP)(W),
                    e = (0, l.useRef)(null);
                if (!t) return (0, s.jsx)(s.Fragment, {});
                return (0, s.jsxs)(hi, {
                    x: i,
                    y: a,
                    onReady: function() {
                        var i;
                        null === (i = e.current) || void 0 === i || i.goToAndPlay(0)
                    },
                    asset: t,
                    children: ["Shroud", (0, s.jsx)("div", {
                        className: "at-y-center absolute left-1/2 translate-x-[calc(-50%-50px)]",
                        children: (0, s.jsx)(ki.Z, {
                            className: "h-[1080px] w-[1080px]",
                            ref: e,
                            animationData: Zi,
                            assetsPath: "/images/animations/Shroud_UIbits01/images/"
                        })
                    })]
                })
            }
            var Ai = JSON.parse('{"v":"5.9.0","fr":29.9700012207031,"ip":1587.00006463984,"op":1677.00006830561,"w":1920,"h":1080,"nm":"Universal_UIBits","ddd":0,"assets":[{"id":"image_0","w":1920,"h":1920,"u":"images/","p":"img_0.png","e":0},{"id":"comp_0","nm":"UNI_UI_Bits_Comp","fr":29.9700012207031,"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"Layer 2/BITS.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,960,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":150.000006109625,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"UNI_UI_Bits_Comp","refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1642,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1643,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1649,"s":[100]},{"t":1650.00006720588,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1184.5,514,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[51,51,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1229.608,433.123],[1063.922,433.123],[1063.922,852.157],[1229.608,852.157]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":1920,"h":1920,"ip":1625.00006618761,"op":1775.00007229723,"st":1625.00006618761,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"UNI_UI_Bits_Comp","refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1608,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1609,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1615,"s":[100]},{"t":1616.00006582103,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1184.5,514,0],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[51,51,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1259.203,1213.922],[588.523,1213.922],[588.431,1365.208],[1259.112,1365.208]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"},{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1202.322,999.216],[693.333,999.216],[693.333,1107.063],[1202.322,1107.063]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 2"}],"w":1920,"h":1920,"ip":1591.00006480276,"op":1741.00007091238,"st":1591.00006480276,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"UNI_UI_Bits_Comp","refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1611,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1614,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1658,"s":[100]},{"t":1659.00006757246,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":1628,"s":[1091.5,514,0],"to":[15.5,0,0],"ti":[-15.5,0,0]},{"t":1644.00006696149,"s":[1184.5,514,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[51,51,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1247.343,1141.373],[1110.98,1141.373],[1110.98,1182.576],[1247.343,1182.576]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":1920,"h":1920,"ip":1592.00006484349,"op":1742.00007095311,"st":1592.00006484349,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"UNI_UI_Bits_Comp","refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1603,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1606,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1645,"s":[100]},{"t":1646.00006704295,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":1618,"s":[1268.5,514,0],"to":[-14,0,0],"ti":[14,0,0]},{"t":1632.00006647272,"s":[1184.5,514,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[51,51,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[793.892,1135.49],[710,1135.49],[710,1186.038],[793.892,1186.038]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":1920,"h":1920,"ip":1592.00006484349,"op":1742.00007095311,"st":1592.00006484349,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"UNI_UI_Bits_Comp","refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1613,"s":[100]},{"t":1614.00006573957,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":1599,"s":[1184.5,654,0],"to":[0,-23.333,0],"ti":[0,23.333,0]},{"t":1608.00006549518,"s":[1184.5,514,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[51,51,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[789.936,511.961],[732.549,511.961],[732.549,566.334],[789.936,566.334]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":1920,"h":1920,"ip":1597.00006504714,"op":1747.00007115677,"st":1597.00006504714,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"UNI_UI_Bits_Comp","refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1608,"s":[100]},{"t":1609.00006553591,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.9,"y":0},"t":1590,"s":[996.5,514,0],"to":[31.333,0,0],"ti":[-31.333,0,0]},{"t":1607.00006545445,"s":[1184.5,514,0]}],"ix":2,"l":2},"a":{"a":0,"k":[960,960,0],"ix":1,"l":2},"s":{"a":0,"k":[51,51,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1217.433,956.078],[1107.059,956.078],[1107.059,983.545],[1217.433,983.545]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"w":1920,"h":1920,"ip":1588.00006468057,"op":1738.00007079019,"st":1588.00006468057,"bm":0}],"markers":[]}');

            function Ni({
                x: i,
                y: a
            }) {
                const t = (0, _.ZP)(Q),
                    e = (0, l.useRef)(null);
                if (!t) return (0, s.jsx)(s.Fragment, {});
                return (0, s.jsxs)(hi, {
                    x: i,
                    y: a,
                    onReady: function() {
                        var i;
                        null === (i = e.current) || void 0 === i || i.goToAndPlay(0)
                    },
                    asset: t,
                    duration: 5,
                    children: ["Universal", (0, s.jsx)("div", {
                        className: "absolute left-0 top-full -translate-x-1/2 translate-y-[calc(-50%+40px)]",
                        children: (0, s.jsx)(ki.Z, {
                            className: "h-[1080px] w-[1080px]",
                            ref: e,
                            animationData: Ai,
                            assetsPath: "/images/animations/Universal_UIbits01/images/"
                        })
                    })]
                })
            }

            function Ui({
                onFinished: i
            }) {
                const [a] = (0, l.useContext)(ci);
                return (0, ui.Z)(), (0, l.useEffect)((() => {
                    a.current || 0 !== a.queue.length || null === i || void 0 === i || i()
                }), [a, i]), (0, s.jsxs)("div", {
                    className: "hidden md:block",
                    children: [(0, s.jsx)(Ii, {
                        x: 527,
                        y: 548
                    }), (0, s.jsx)(gi, {
                        x: 1199,
                        y: 609
                    }), (0, s.jsx)(ji, {
                        x: 1353,
                        y: 733
                    }), (0, s.jsx)(_i, {
                        x: 1176,
                        y: 549
                    }), (0, s.jsx)(Mi, {
                        x: 575,
                        y: 581
                    }), (0, s.jsx)(Ni, {
                        x: 1077,
                        y: 452
                    })]
                })
            }
            var Pi = t(60925),
                Si = t(41783),
                Ci = t(35787),
                Ti = t(63479),
                Ei = t(23220),
                Bi = t(32811),
                Ri = t(80592);

            function Oi({
                control: i,
                onFinished: a
            }) {
                const t = (0, l.useCallback)((() => null === i || void 0 === i ? void 0 : i.dispatch(oi(R.Z.Augencore))), [i]),
                    e = (0, l.useCallback)((() => null === i || void 0 === i ? void 0 : i.dispatch(oi(R.Z.Earthen))), [i]),
                    o = (0, l.useCallback)((() => null === i || void 0 === i ? void 0 : i.dispatch(oi(R.Z.Kathari))), [i]),
                    x = (0, l.useCallback)((() => null === i || void 0 === i ? void 0 : i.dispatch(oi(R.Z.Marcolian))), [i]),
                    n = (0, l.useCallback)((() => null === i || void 0 === i ? void 0 : i.dispatch(oi(R.Z.Shroud))), [i]),
                    r = (0, l.useCallback)((() => null === i || void 0 === i ? void 0 : i.dispatch(oi(R.Z.Universal))), [i]),
                    y = (0, l.useCallback)((() => null === i || void 0 === i ? void 0 : i.dispatch(xi())), [i]);
                return (0, s.jsxs)("div", {
                    className: "absolute inset-0 flex select-none flex-col md:hidden",
                    children: [(0, s.jsx)("div", {
                        className: "mt-10 mb-auto flex w-full flex-row justify-between px-8",
                        children: (null === i || void 0 === i ? void 0 : i.state.current) && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(D.Z, {
                                onClick: y,
                                muted: null === i || void 0 === i ? void 0 : i.state.muted
                            }), (0, s.jsx)(Pi.Z, {
                                onClick: a,
                                label: "Exit"
                            })]
                        })
                    }), (0, s.jsxs)("div", {
                        className: "relative ml-8 mb-14",
                        children: [(0, s.jsx)(Ii, {}), (0, s.jsx)(gi, {}), (0, s.jsx)(ji, {}), (0, s.jsx)(_i, {}), (0, s.jsx)(Mi, {}), (0, s.jsx)(Ni, {})]
                    }), (null === i || void 0 === i ? void 0 : i.state.current) && (0, s.jsxs)("div", {
                        className: "mx-8 mb-12 flex justify-between",
                        children: [(0, s.jsx)("button", {
                            className: i.state.current !== R.Z.Augencore ? "opacity-50" : void 0,
                            onClick: t,
                            children: (0, s.jsx)(Si.Z, {
                                width: 32,
                                height: 32
                            })
                        }), (0, s.jsx)("button", {
                            className: i.state.current !== R.Z.Earthen ? "opacity-50" : void 0,
                            onClick: e,
                            children: (0, s.jsx)(Ci.Z, {
                                width: 32,
                                height: 32
                            })
                        }), (0, s.jsx)("button", {
                            className: i.state.current !== R.Z.Kathari ? "opacity-50" : void 0,
                            onClick: o,
                            children: (0, s.jsx)(Ti.Z, {
                                width: 32,
                                height: 32
                            })
                        }), (0, s.jsx)("button", {
                            className: i.state.current !== R.Z.Marcolian ? "opacity-50" : void 0,
                            onClick: x,
                            children: (0, s.jsx)(Ei.Z, {
                                width: 32,
                                height: 32
                            })
                        }), (0, s.jsx)("button", {
                            className: i.state.current !== R.Z.Shroud ? "opacity-50" : void 0,
                            onClick: n,
                            children: (0, s.jsx)(Bi.Z, {
                                width: 32,
                                height: 32
                            })
                        }), (0, s.jsx)("button", {
                            className: i.state.current !== R.Z.Universal ? "opacity-50" : void 0,
                            onClick: r,
                            children: (0, s.jsx)(Ri.Z, {
                                width: 32,
                                height: 32
                            })
                        })]
                    })]
                })
            }
            var Li, Fi = (0, l.forwardRef)((function({
                    onFinished: i
                }, a) {
                    const [t, e] = (0, l.useState)(null);
                    return (0, l.useImperativeHandle)(a, (() => t), [t]), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(q.Z, {
                            layout: "cover",
                            children: (0, s.jsx)(pi, {
                                ref: e,
                                children: (0, s.jsx)(Ui, {
                                    onFinished: i
                                })
                            })
                        }), (0, s.jsx)(Oi, {
                            control: t,
                            onFinished: i
                        })]
                    })
                })),
                Hi = t(90881),
                Ki = (0, l.forwardRef)((function({
                    icon: i,
                    children: a,
                    className: t
                }, e) {
                    return (0, s.jsxs)("div", {
                        ref: e,
                        className: (0, g.Z)("flex flex-col gap-4", t),
                        children: [(0, s.jsx)("div", {
                            children: i
                        }), (0, s.jsx)(Hi.Z, {
                            className: "mb-2"
                        }), a]
                    })
                }));
            ! function(i) {
                i.LoadingFadeIn = "LoadingFadeIn", i.StaticHome = "staticHome", i.PlayingExperience = "playinExperience", i.PlayingFadeIn = "playingfadeIn", i.PlayingFadeOut = "playingfadeOut"
            }(Li || (Li = {}));
            var Di = Li;

            function qi() {
                const i = (0, w.ZP)(K.jV),
                    [a, t] = (0, l.useState)(i ? Di.LoadingFadeIn : Di.StaticHome),
                    e = i ? "opacity-0" : "",
                    o = (0, _.ct)([ii], []),
                    [n, r] = (0, l.useState)(null),
                    [y, d] = (0, l.useState)(null),
                    [c, m] = (0, l.useState)(null),
                    [p, u] = (0, l.useState)(null),
                    [k, h] = (0, l.useState)(null),
                    [j, Z] = (0, l.useState)(null),
                    [M, N] = (0, l.useState)(null),
                    [q, V] = (0, l.useState)(null),
                    [G, z] = (0, l.useState)(null),
                    [X, $] = (0, l.useState)(null),
                    [J, Y] = (0, l.useState)(null),
                    [W, Q] = (0, l.useState)(null),
                    [ai, ti] = (0, l.useState)(null),
                    [si, ei] = (0, l.useState)(null),
                    [ni, ri] = (0, l.useState)(null),
                    [li, yi] = (0, l.useState)(!0),
                    di = (0, _.ZP)(ii);
                (0, l.useEffect)((() => {
                    W && si && ni && y && M && q && G && X && yi(!1)
                }), [W, si, ni, y, M, q, G, X]);
                const ci = (0, l.useCallback)((() => {
                        if (window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }), !li && a === Di.StaticHome) {
                            const i = i => L(i, {
                                x: 150
                            });
                            t(Di.PlayingFadeOut), null === di || void 0 === di || di.play(), f.p8.timeline().add(F(y)).add(i(p), ">-0.2").add(i(k), ">-0.2").add(i(j), ">-0.2").add(i(M), ">-0.2").add(i(c), "-=0.2").add(i([q, G, X]), ">-0.2").add(i(W), ">-0.2").add(i(si), ">-0.3").add(i(ni), ">-0.3").call((() => {
                                t(Di.PlayingExperience)
                            }))
                        }
                    }), [W, si, ni, y, p, k, j, M, c, q, G, X, li, a, di]),
                    mi = (0, l.useCallback)((() => {
                        li || (t(Di.PlayingFadeIn), f.p8.timeline().add(F([J, ai, W, si, ni], {
                            x: -100,
                            duration: .5
                        })).set(p, {
                            opacity: 1
                        }).add(H(p), ">").set(k, {
                            opacity: 1
                        }).add(H(k), ">").set(j, {
                            opacity: 1
                        }).add(H(j), ">").call((() => {
                            L(y, {
                                duration: 3
                            })
                        }), [], ">-0.5").add(F(c, {
                            duration: .5
                        }), ">0.5").add((0, O.Z)(M, {
                            times: 3
                        }), ">-0.6").add(F(q), "<0.4").add(F(G), ">=-0.2").add(F(X), ">=-0.2").call((() => {
                            t(Di.StaticHome)
                        })))
                    }), [J, ai, W, si, ni, c, y, M, q, G, X, p, k, j, li]);
                (0, l.useEffect)((() => {
                    li || a !== Di.LoadingFadeIn || mi()
                }), [li, a, mi]);
                const pi = (0, l.useCallback)((() => null === n || void 0 === n ? void 0 : n.dispatch(oi(R.Z.Augencore))), [n]),
                    ui = (0, l.useCallback)((() => null === n || void 0 === n ? void 0 : n.dispatch(oi(R.Z.Earthen))), [n]),
                    ki = (0, l.useCallback)((() => null === n || void 0 === n ? void 0 : n.dispatch(oi(R.Z.Kathari))), [n]),
                    hi = (0, l.useCallback)((() => null === n || void 0 === n ? void 0 : n.dispatch(oi(R.Z.Marcolian))), [n]),
                    fi = (0, l.useCallback)((() => null === n || void 0 === n ? void 0 : n.dispatch(oi(R.Z.Shroud))), [n]),
                    gi = (0, l.useCallback)((() => null === n || void 0 === n ? void 0 : n.dispatch(oi(R.Z.Universal))), [n]),
                    vi = (0, l.useCallback)((() => null === n || void 0 === n ? void 0 : n.dispatch(xi())), [n]),
                    _i = (0, w.ZP)("easter_egg_cat_homepage"),
                    wi = (0, l.useRef)(null),
                    [Ii, bi] = (0, l.useState)(!1);
                return (0, s.jsxs)("div", {
                    className: "relative z-0 flex grow flex-col content-start bg-earth bg-cover bg-top bg-no-repeat",
                    children: [_i && (0, s.jsx)("div", {
                        className: "absolute inset-0 h-full w-full overflow-hidden",
                        children: (0, s.jsx)("div", {
                            className: "at-x-center at-x-center pointer-events-none absolute top-0 -z-20 aspect-video min-h-[100%] min-w-[100%] select-none",
                            children: (0, s.jsx)("div", {
                                className: "absolute left-1/2 top-[132%] w-[48%] origin-left",
                                ref: wi,
                                children: Ii && (0, s.jsx)(T.Z, {
                                    className: "at-y-center absolute left-full rotate-90 text-3xs"
                                })
                            })
                        })
                    }), (0, s.jsx)("div", {
                        ref: d,
                        className: (0, g.Z)("fixed inset-0 -z-10 bg-black", i ? "opacity-100" : "opacity-0", a !== Di.PlayingExperience && "pointer-events-none"),
                        children: a === Di.PlayingExperience && (0, s.jsx)(Fi, {
                            ref: r,
                            onFinished: mi
                        })
                    }), (0, s.jsxs)(E.fC, {
                        className: (0, g.Z)("relative grow", a === Di.PlayingExperience && "pointer-events-none md:pointer-events-auto"),
                        children: [(0, s.jsx)(E.po, {
                            ref: Y,
                            className: e
                        }), (0, s.jsx)(E.CK, {
                            ref: ti,
                            className: e
                        }), (0, s.jsx)(E.DS, {
                            ref: Q,
                            className: e
                        }), (0, s.jsx)(E.Oz, {
                            ref: ei,
                            className: e
                        }), (0, s.jsx)(E.qX, {
                            className: e
                        }), (0, s.jsx)(E.Rb, {
                            ref: ri,
                            className: e
                        }), (0, s.jsx)(E.hX, {
                            className: e,
                            onClick: function() {
                                Ii && _i && wi.current || (bi(!0), x.ZP.event("easter_egg_custom", {
                                    label: "cat_homepage"
                                }), f.p8.timeline().fromTo([wi.current], {
                                    rotate: "0deg"
                                }, {
                                    rotate: "-180deg",
                                    duration: 10,
                                    ease: "linear"
                                }).call((() => bi(!1))))
                            }
                        }), (0, s.jsx)(E.Ru, {
                            className: "mt-8",
                            children: a === Di.PlayingExperience && (null === n || void 0 === n ? void 0 : n.state.current) && (0, s.jsxs)(C.ZP, {
                                currentLink: n.state.current,
                                children: [(0, s.jsxs)(C.IC, {
                                    index: 1,
                                    header: "Experience",
                                    children: [(0, s.jsx)(v.Vd, {
                                        id: "augencore",
                                        children: (0, s.jsx)(C.h$, {
                                            link: R.Z.Augencore,
                                            onClick: pi,
                                            children: "Augencore"
                                        })
                                    }), (0, s.jsx)(v.Vd, {
                                        id: "earthen",
                                        children: (0, s.jsx)(C.h$, {
                                            link: R.Z.Earthen,
                                            onClick: ui,
                                            children: "Earthen"
                                        })
                                    }), (0, s.jsx)(v.Vd, {
                                        id: "kathari",
                                        children: (0, s.jsx)(C.h$, {
                                            link: R.Z.Kathari,
                                            onClick: ki,
                                            children: "Kathari"
                                        })
                                    }), (0, s.jsx)(v.Vd, {
                                        id: "marcolian",
                                        children: (0, s.jsx)(C.h$, {
                                            link: R.Z.Marcolian,
                                            onClick: hi,
                                            children: "Marcolian"
                                        })
                                    }), (0, s.jsx)(v.Vd, {
                                        id: "shroud",
                                        children: (0, s.jsx)(C.h$, {
                                            link: R.Z.Shroud,
                                            onClick: fi,
                                            children: "Shroud"
                                        })
                                    }), (0, s.jsx)(C.h$, {
                                        link: R.Z.Universal,
                                        onClick: gi,
                                        children: "Universal"
                                    })]
                                }), (0, s.jsx)(C.h$, {
                                    index: 2,
                                    onClick: mi,
                                    children: "Home"
                                })]
                            })
                        }), a === Di.PlayingExperience && (null === n || void 0 === n ? void 0 : n.state.current) && (0, s.jsx)("div", {
                            className: "fixed bottom-24 right-14",
                            children: (0, s.jsx)(D.Z, {
                                className: "h-[40px] w-[40px]",
                                onClick: vi,
                                muted: n.state.muted
                            })
                        }), (0, s.jsx)(E.PJ, {
                            className: "pt-8 pb-16 md:pb-0",
                            children: (0, s.jsx)(v.Vd, {
                                id: "play-experience",
                                children: (0, s.jsxs)(B.Z, {
                                    disabled: !o || a !== Di.StaticHome,
                                    onClick: ci,
                                    children: ["Play", (0, s.jsx)("br", {}), "Experience"]
                                })
                            })
                        }), (0, s.jsxs)(E.h4, {
                            className: "py-12",
                            children: [(0, s.jsx)("div", {
                                className: (0, g.Z)("overflow-hidden whitespace-nowrap font-display text-title font-medium uppercase leading-[1.14] tracking-[.1em] text-yellow lg:text-page-title", e),
                                ref: u,
                                children: (0, s.jsx)(v.Vd, {
                                    id: "intro-line-1",
                                    children: "There's a battle"
                                })
                            }), (0, s.jsx)("div", {
                                className: (0, g.Z)("overflow-hidden whitespace-nowrap font-display text-title font-medium uppercase leading-[1.14] tracking-[.1em] text-yellow lg:text-page-title", e),
                                ref: h,
                                children: (0, s.jsx)(v.Vd, {
                                    id: "intro-line-2",
                                    children: "for Earth..."
                                })
                            }), (0, s.jsx)("div", {
                                className: (0, g.Z)("overflow-hidden whitespace-nowrap font-display text-title font-medium uppercase leading-[1.14] tracking-[.1em] text-yellow lg:text-page-title", e),
                                ref: Z,
                                children: (0, s.jsx)("div", {
                                    className: "inline-block bg-yellow font-semibold leading-[0.89] text-black",
                                    children: (0, s.jsx)(v.Vd, {
                                        id: "we-need-you",
                                        children: "We need you"
                                    })
                                })
                            })]
                        }), (0, s.jsx)(E.fi, {
                            ref: N,
                            className: (0, g.Z)("max-w-screen-sm pt-14 pb-4 md:pb-[90px] lg:w-3/4", e),
                            children: (0, s.jsx)(I.Z, {
                                children: (0, s.jsx)(v.Vd, {
                                    id: "parallel-is",
                                    children: "Parallel is a vast sci-fi universe with five factions battling for home"
                                })
                            })
                        }), (0, s.jsx)(E.VY, {
                            className: "mb-16 mr-4",
                            children: (0, s.jsxs)(b.Z, {
                                space: "4rem 1rem",
                                threshold: "700px",
                                children: [(0, s.jsxs)(Ki, {
                                    ref: V,
                                    className: (0, g.Z)(e),
                                    icon: (0, s.jsx)(U, {}),
                                    children: [(0, s.jsx)("p", {
                                        className: "text-xs uppercase italic tracking-wide opacity-80",
                                        children: "01"
                                    }), (0, s.jsx)("p", {
                                        className: "text-xs uppercase italic tracking-wide opacity-80",
                                        children: (0, s.jsx)(v.Vd, {
                                            id: "become-member",
                                            children: "Become a member"
                                        })
                                    }), (0, s.jsx)(S.Z, {
                                        href: "/signup/",
                                        className: "mt-auto max-w-[290px]",
                                        onClick: () => x.ZP.event("button_click_custom", {
                                            label: "signup"
                                        }),
                                        children: (0, s.jsx)(v.Vd, {
                                            id: "sign-up",
                                            children: "Sign up"
                                        })
                                    })]
                                }), (0, s.jsxs)(Ki, {
                                    ref: z,
                                    className: (0, g.Z)(e),
                                    icon: (0, s.jsx)(P.Z, {}),
                                    children: [(0, s.jsx)("p", {
                                        className: "text-xs uppercase italic tracking-wide opacity-80",
                                        children: "02"
                                    }), (0, s.jsx)("p", {
                                        className: "text-xs uppercase italic tracking-wide opacity-80",
                                        children: (0, s.jsx)(v.Vd, {
                                            id: "collect-cards",
                                            children: "Collect cards"
                                        })
                                    }), (0, s.jsx)(S.Z, {
                                        href: "https://opensea.io/collection/parallelalpha",
                                        className: "mt-auto max-w-[290px]",
                                        onClick: () => x.ZP.event("button_click_custom", {
                                            label: "opensea"
                                        }),
                                        external: !0,
                                        children: "Opensea"
                                    })]
                                }), (0, s.jsxs)(Ki, {
                                    className: (0, g.Z)(e),
                                    ref: $,
                                    icon: (0, s.jsx)(A, {}),
                                    children: [(0, s.jsx)("p", {
                                        className: "text-xs uppercase italic tracking-wide opacity-80",
                                        children: "03"
                                    }), (0, s.jsx)("p", {
                                        className: "text-xs uppercase italic tracking-wide opacity-80",
                                        children: (0, s.jsx)(v.Vd, {
                                            id: "want-to-play",
                                            children: "Want to play"
                                        })
                                    }), (0, s.jsx)(S.Z, {
                                        href: "/game/",
                                        className: "mt-auto max-w-[290px]",
                                        children: (0, s.jsx)(v.Vd, {
                                            id: "game",
                                            children: "Story"
                                        })
                                    })]
                                })]
                            })
                        }), (0, s.jsx)(E.g_, {
                            ref: m,
                            className: e
                        })]
                    })]
                })
            }
            var Vi = !0;

            function Gi() {
                return x.ZP.send({
                        hitType: "pageview",
                        page: "/"
                    }),
                    function() {
                        const i = (0, y.Ps)(),
                            a = (0, r.useRouter)(),
                            {
                                data: t = {
                                    quantity: 0
                                }
                            } = (0, d.v)("apparition_payload");
                        (0, l.useEffect)((() => {
                            if (t.quantity > 0) {
                                const e = i.showV2((0, s.jsx)(k, {
                                    quantity: t.quantity,
                                    onClick: () => {
                                        a.push("/payload").then((() => {
                                            e.hide()
                                        }))
                                    }
                                }), {
                                    duration: 1e4
                                })
                            }
                        }), [t.quantity, a, i])
                    }(), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(o(), {
                            children: [(0, s.jsx)("title", {
                                children: "Parallel"
                            }), (0, s.jsx)("meta", {
                                name: "description",
                                content: "Parallel is a vast sci-fi universe with five factions battling for home. Assemble a deck and take the fight to Earth."
                            }), (0, s.jsx)("meta", {
                                name: "google-site-verification",
                                content: "6zzhuuDx2ICCSkYMdcYIfZt14rX766uQxQIFT3y53BY"
                            })]
                        }), (0, s.jsx)(n.Z, {
                            children: (0, s.jsx)(qi, {})
                        })]
                    })
            }
        }
    },
    function(i) {
        i.O(0, [296, 5675, 6038, 2309, 8972, 9874, 5049, 1907, 9774, 2888, 179], (function() {
            return a = 48312, i(i.s = a);
            var a
        }));
        var a = i.O();
        _N_E = a
    }
]);