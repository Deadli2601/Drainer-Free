(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [809], {
        14558: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return p
                }
            });
            var r = n(67294);

            function a() {
                return a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, a.apply(this, arguments)
            }
            var s, i = ["bottom", "height", "left", "right", "top", "width"],
                l = new Map,
                o = function e() {
                    var t = [];
                    l.forEach((function(e, n) {
                        var r, a, s = n.getBoundingClientRect();
                        r = s, a = e.rect, void 0 === r && (r = {}), void 0 === a && (a = {}), i.some((function(e) {
                            return r[e] !== a[e]
                        })) && (e.rect = s, t.push(e))
                    })), t.forEach((function(e) {
                        e.callbacks.forEach((function(t) {
                            return t(e.rect)
                        }))
                    })), s = window.requestAnimationFrame(e)
                };
            var c = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect;

            function d(e, t) {
                var n = t.rect;
                return e.height !== n.height || e.width !== n.width ? n : e
            }
            var u = function(e, t) {
                    void 0 === t && (t = {
                        width: 0,
                        height: 0
                    });
                    var n = r.useState(e.current),
                        a = n[0],
                        i = n[1],
                        u = r.useReducer(d, t),
                        h = u[0],
                        x = u[1],
                        f = r.useRef(!1);
                    return c((function() {
                        e.current !== a && i(e.current)
                    })), c((function() {
                        if (a && !f.current) {
                            f.current = !0;
                            var e = a.getBoundingClientRect();
                            x({
                                rect: e
                            })
                        }
                    }), [a]), r.useEffect((function() {
                        if (a) {
                            var e, t, n = (e = a, t = function(e) {
                                x({
                                    rect: e
                                })
                            }, {
                                observe: function() {
                                    var n = 0 === l.size;
                                    l.has(e) ? l.get(e).callbacks.push(t) : l.set(e, {
                                        rect: void 0,
                                        hasRectChanged: !1,
                                        callbacks: [t]
                                    }), n && o()
                                },
                                unobserve: function() {
                                    var n = l.get(e);
                                    if (n) {
                                        var r = n.callbacks.indexOf(t);
                                        r >= 0 && n.callbacks.splice(r, 1), n.callbacks.length || l.delete(e), l.size || cancelAnimationFrame(s)
                                    }
                                }
                            });
                            return n.observe(),
                                function() {
                                    n.unobserve()
                                }
                        }
                    }), [a]), h
                },
                h = ["align"],
                x = function() {
                    return 50
                },
                f = function(e) {
                    return e
                },
                m = function(e, t) {
                    return e[t ? "offsetWidth" : "offsetHeight"]
                },
                g = function(e) {
                    for (var t = Math.max(e.start - e.overscan, 0), n = Math.min(e.end + e.overscan, e.size - 1), r = [], a = t; a <= n; a++) r.push(a);
                    return r
                },
                p = function(e) {
                    var t, n = e.size,
                        s = void 0 === n ? 0 : n,
                        i = e.estimateSize,
                        l = void 0 === i ? x : i,
                        o = e.overscan,
                        d = void 0 === o ? 1 : o,
                        p = e.paddingStart,
                        v = void 0 === p ? 0 : p,
                        w = e.paddingEnd,
                        b = void 0 === w ? 0 : w,
                        j = e.parentRef,
                        N = e.horizontal,
                        y = void 0 !== N && N,
                        k = e.scrollToFn,
                        _ = e.useObserver,
                        Z = e.initialRect,
                        S = e.onScrollElement,
                        C = e.scrollOffsetFn,
                        E = e.keyExtractor,
                        F = void 0 === E ? f : E,
                        T = e.measureSize,
                        A = void 0 === T ? m : T,
                        z = e.rangeExtractor,
                        O = void 0 === z ? g : z,
                        P = y ? "width" : "height",
                        I = y ? "scrollLeft" : "scrollTop",
                        R = r.useRef({
                            outerSize: 0,
                            scrollOffset: 0,
                            measurements: [],
                            totalSize: 0
                        }),
                        M = r.useState(0),
                        W = M[0],
                        Y = M[1];
                    R.current.scrollOffset = W;
                    var V = (_ || u)(j, Z)[P];
                    R.current.outerSize = V;
                    var B = r.useCallback((function(e) {
                            j.current && (j.current[I] = e)
                        }), [j, I]),
                        H = k || B,
                        U = r.useCallback((function(e) {
                            H(e, B)
                        }), [B, H]),
                        $ = r.useState({}),
                        L = $[0],
                        D = $[1],
                        G = r.useCallback((function() {
                            return D({})
                        }), []),
                        q = r.useRef([]),
                        K = r.useMemo((function() {
                            var e = q.current.length > 0 ? Math.min.apply(Math, q.current) : 0;
                            q.current = [];
                            for (var t = R.current.measurements.slice(0, e), n = e; n < s; n++) {
                                var r = F(n),
                                    a = L[r],
                                    i = t[n - 1] ? t[n - 1].end : v,
                                    o = "number" === typeof a ? a : l(n),
                                    c = i + o;
                                t[n] = {
                                    index: n,
                                    start: i,
                                    size: o,
                                    end: c,
                                    key: r
                                }
                            }
                            return t
                        }), [l, L, v, s, F]),
                        J = ((null == (t = K[s - 1]) ? void 0 : t.end) || v) + b;
                    R.current.measurements = K, R.current.totalSize = J;
                    var X = S ? S.current : j.current,
                        Q = r.useRef(C);
                    Q.current = C, c((function() {
                        if (X) {
                            var e = function(e) {
                                var t = Q.current ? Q.current(e) : X[I];
                                Y(t)
                            };
                            return e(), X.addEventListener("scroll", e, {
                                    capture: !1,
                                    passive: !0
                                }),
                                function() {
                                    X.removeEventListener("scroll", e)
                                }
                        }
                        Y(0)
                    }), [X, I]);
                    var ee = function(e) {
                            var t = e.measurements,
                                n = e.outerSize,
                                r = e.scrollOffset,
                                a = t.length - 1,
                                s = function(e, t, n, r) {
                                    for (; e <= t;) {
                                        var a = (e + t) / 2 | 0,
                                            s = n(a);
                                        if (s < r) e = a + 1;
                                        else {
                                            if (!(s > r)) return a;
                                            t = a - 1
                                        }
                                    }
                                    return e > 0 ? e - 1 : 0
                                }(0, a, (function(e) {
                                    return t[e].start
                                }), r),
                                i = s;
                            for (; i < a && t[i].end < r + n;) i++;
                            return {
                                start: s,
                                end: i
                            }
                        }(R.current),
                        te = ee.start,
                        ne = ee.end,
                        re = r.useMemo((function() {
                            return O({
                                start: te,
                                end: ne,
                                overscan: d,
                                size: K.length
                            })
                        }), [te, ne, d, K.length, O]),
                        ae = r.useRef(A);
                    ae.current = A;
                    var se = r.useMemo((function() {
                            for (var e = [], t = function(t, n) {
                                    var r = re[t],
                                        s = a({}, K[r], {
                                            measureRef: function(e) {
                                                if (e) {
                                                    var t = ae.current(e, y);
                                                    if (t !== s.size) {
                                                        var n = R.current.scrollOffset;
                                                        s.start < n && B(n + (t - s.size)), q.current.push(r), D((function(e) {
                                                            var n;
                                                            return a({}, e, ((n = {})[s.key] = t, n))
                                                        }))
                                                    }
                                                }
                                            }
                                        });
                                    e.push(s)
                                }, n = 0, r = re.length; n < r; n++) t(n);
                            return e
                        }), [re, B, y, K]),
                        ie = r.useRef(!1);
                    c((function() {
                        ie.current && D({}), ie.current = !0
                    }), [l]);
                    var le = r.useCallback((function(e, t) {
                            var n = (void 0 === t ? {
                                    align: "start"
                                } : t).align,
                                r = R.current,
                                a = r.scrollOffset,
                                s = r.outerSize;
                            "auto" === n && (n = e <= a ? "start" : e >= a + s ? "end" : "start"), "start" === n ? U(e) : "end" === n ? U(e - s) : "center" === n && U(e - s / 2)
                        }), [U]),
                        oe = r.useCallback((function(e, t) {
                            var n = void 0 === t ? {
                                    align: "auto"
                                } : t,
                                r = n.align,
                                i = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, a = {},
                                        s = Object.keys(e);
                                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a
                                }(n, h),
                                l = R.current,
                                o = l.measurements,
                                c = l.scrollOffset,
                                d = l.outerSize,
                                u = o[Math.max(0, Math.min(e, s - 1))];
                            if (u) {
                                if ("auto" === r)
                                    if (u.end >= c + d) r = "end";
                                    else {
                                        if (!(u.start <= c)) return;
                                        r = "start"
                                    }
                                var x = "center" === r ? u.start + u.size / 2 : "end" === r ? u.end : u.start;
                                le(x, a({
                                    align: r
                                }, i))
                            }
                        }), [le, s]),
                        ce = r.useCallback((function(e, t) {
                            oe(e, t), requestAnimationFrame((function() {
                                oe(e, t)
                            }))
                        }), [oe]);
                    return {
                        virtualItems: se,
                        totalSize: J,
                        scrollToOffset: le,
                        scrollToIndex: ce,
                        measure: G
                    }
                }
        },
        21413: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/avatars", function() {
                return n(86144)
            }])
        },
        11965: function(e, t, n) {
            "use strict";
            n.d(t, {
                eX: function() {
                    return i
                },
                zx: function() {
                    return d
                },
                fC: function() {
                    return u
                },
                Dx: function() {
                    return l
                }
            });
            var r = n(28813),
                a = n(85893),
                s = n(86010);

            function i({
                children: e
            }) {
                return (0, a.jsx)("div", {
                    className: "flex justify-between",
                    children: e
                })
            }

            function l({
                children: e
            }) {
                return (0, a.jsx)("h1", {
                    className: "border-b border-white/10 pb-4 font-semibold uppercase tracking-wide",
                    children: e
                })
            }
            var o = n(51528),
                c = n(84095);

            function d(e) {
                return (0, a.jsx)(o.x8, {
                    asChild: !0,
                    children: (0, a.jsx)(c.Z, { ...e
                    })
                })
            }
            const u = (0, r.lI)((function({
                children: e,
                className: t
            }) {
                return (0, a.jsx)("div", {
                    className: (0, s.Z)("flex flex-col gap-6 bg-darker-gray p-6 text-white", t),
                    children: e
                })
            }))
        },
        58384: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(85893),
                a = n(86010),
                s = n(24382);

            function i({
                side: e = "right",
                align: t = "start",
                className: n,
                children: i
            }) {
                return (0, r.jsx)(s.VY, {
                    side: e,
                    sideOffset: 8,
                    align: t,
                    children: (0, r.jsxs)("div", {
                        className: (0, a.Z)("max-w-xs bg-gray p-2 text-sm font-semibold uppercase italic", n),
                        children: [(0, r.jsx)("div", {
                            className: "mb-4 h-[3px] w-[6px] bg-white"
                        }), i]
                    })
                })
            }
        },
        70515: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(85893),
                a = n(86010),
                s = n(24382);

            function i({
                side: e = "right",
                align: t = "center",
                background: n = "yellow",
                className: i,
                children: l
            }) {
                let o = "",
                    c = "";
                return "yellow" === n ? (o = "bg-yellow", c = "fill-yellow/60") : "white" === n ? (o = "bg-white", c = "fill-white/60") : "green" === n && (o = "bg-green", c = "fill-green/60"), (0, r.jsxs)(s.VY, {
                    side: e,
                    sideOffset: 8,
                    align: t,
                    children: [(0, r.jsx)("div", {
                        className: (0, a.Z)("m-[2px] max-w-xs p-1 text-xs font-semibold uppercase italic tracking-wide text-black transition-all", o, i),
                        children: l
                    }), (0, r.jsx)(s.Eh, {
                        height: 6,
                        width: 10,
                        className: c
                    })]
                })
            }
        },
        65772: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(85893),
                a = n(86010),
                s = n(49874);

            function i({
                className: e,
                blur: t = !1,
                navbar: n = !0,
                children: i
            }) {
                return (0, r.jsxs)("div", {
                    className: (0, a.Z)("relative isolate flex min-h-screen flex-col", e),
                    children: [n && (0, r.jsx)(s.Z, {
                        blur: t,
                        className: "z-10"
                    }), (0, r.jsx)("main", {
                        className: "z-0 flex grow flex-col",
                        children: i
                    })]
                })
            }
        },
        28813: function(e, t, n) {
            "use strict";
            n.d(t, {
                x8: function() {
                    return r.x8
                },
                VY: function() {
                    return i
                },
                fC: function() {
                    return r.fC
                },
                xz: function() {
                    return r.xz
                },
                lI: function() {
                    return l
                }
            });
            var r = n(74648),
                a = n(85893),
                s = n(86010);

            function i({
                closeOnOutsideClick: e = !1,
                className: t,
                children: n
            }) {
                return (0, a.jsxs)(r.h_, {
                    children: [(0, a.jsx)(r.aV, {}), (0, a.jsx)(r.VY, {
                        className: (0, s.Z)("at-center fixed", t),
                        onInteractOutside: t => !e && (null === t || void 0 === t ? void 0 : t.preventDefault()),
                        children: n
                    })]
                })
            }

            function l(e) {
                const t = function(t) {
                    return (0, a.jsx)(i, {
                        closeOnOutsideClick: !0,
                        children: (0, a.jsx)(e, { ...t
                        })
                    })
                };
                return t.displayName = `Modal${e.name}`, t
            }
        },
        17979: function(e, t, n) {
            "use strict";
            n.d(t, {
                eJ: function() {
                    return h
                },
                x8: function() {
                    return d
                },
                VY: function() {
                    return o
                },
                fC: function() {
                    return r.fC
                },
                xR: function() {
                    return x
                }
            });
            var r = n(74648),
                a = n(85893),
                s = n(86010),
                i = n(2245),
                l = n(69469);

            function o({
                className: e,
                children: t
            }) {
                const [n] = (0, l.I)();
                return (0, i.Z)(n), (0, a.jsx)(r.h_, {
                    children: (0, a.jsx)(r.VY, {
                        onInteractOutside: e => e.preventDefault(),
                        children: (0, a.jsx)("div", {
                            className: (0, s.Z)("fixed inset-0 overflow-y-auto overflow-x-hidden", e),
                            children: t
                        })
                    })
                })
            }
            var c = n(60925);

            function d({
                className: e,
                label: t
            }) {
                return (0, a.jsx)(r.x8, {
                    asChild: !0,
                    children: (0, a.jsx)(c.Z, {
                        className: e,
                        label: t
                    })
                })
            }
            var u = n(16429);

            function h({
                className: e,
                label: t
            }) {
                return (0, a.jsx)(r.x8, {
                    asChild: !0,
                    children: (0, a.jsx)(u.Z, {
                        className: e,
                        label: t
                    })
                })
            }

            function x(e) {
                const t = function(t) {
                    return (0, a.jsxs)(o, {
                        className: "bg-black",
                        children: [(0, a.jsx)("div", {
                            className: "h-full w-full pt-[80px] lg:pt-0",
                            children: (0, a.jsx)(e, { ...t
                            })
                        }), (0, a.jsxs)("div", {
                            className: "absolute inset-0 h-min w-min",
                            children: [(0, a.jsx)(d, {
                                className: "m-5 w-12 bg-black lg:hidden"
                            }), (0, a.jsxs)("div", {
                                className: "absolute left-12 top-24 hidden flex-col items-center lg:flex",
                                children: [(0, a.jsx)(d, {}), (0, a.jsx)("div", {
                                    className: "top-full mt-2  text-xxs font-semibold uppercase tracking-wider",
                                    children: "Close"
                                })]
                            })]
                        })]
                    })
                };
                return t.displayName = `Overlay${e.name}`, t
            }
        },
        48601: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(85893),
                a = n(24574),
                s = n(97310),
                i = n(24382),
                l = n(78366),
                o = n(94122),
                c = n(70515);

            function d({
                onShare: e,
                children: t,
                className: n,
                color: d
            }) {
                const u = (0, a.D)((async () => {
                    const t = await e();
                    await window.navigator.clipboard.writeText(t), setTimeout((() => u.reset()), 1500)
                }));
                return (0, r.jsx)("div", {
                    children: (0, r.jsxs)(i.fC, {
                        open: u.isSuccess || void 0,
                        children: [(0, r.jsx)(i.k_, {
                            children: (0, r.jsx)(l.Z, {
                                color: d,
                                onClick: () => u.mutate(),
                                processing: u.isLoading,
                                className: n,
                                children: u.isSuccess ? (0, r.jsx)(o.Z, {
                                    width: 20,
                                    height: 20
                                }) : (0, r.jsx)(s.Z, {})
                            })
                        }), (u.isSuccess || t) && (0, r.jsx)(c.Z, {
                            background: u.isSuccess ? "green" : d,
                            children: u.isSuccess ? "Link copied" : t
                        })]
                    })
                })
            }
        },
        23225: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r.Z
                }
            });
            var r = n(48601)
        },
        78422: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y7: function() {
                    return a
                },
                Jm: function() {
                    return r
                },
                ZP: function() {
                    return c
                }
            });
            var r, a, s = n(85893),
                i = n(86010),
                l = n(6843),
                o = n(65772);

            function c({
                children: e,
                className: t,
                background: n,
                backgroundColor: c = a.Yellow
            }) {
                let d = "",
                    u = "",
                    h = "";
                return n === r.Avatars && (d = "bg-avatar-drop bg-center"), c === a.Red ? (u = "bg-gradient-to-b from-red/10", h = "bg-red/50") : c === a.Yellow ? (u = "bg-gradient-to-b from-yellow/10", h = "bg-yellow/50") : c === a.Green && (u = "bg-gradient-to-b from-green/10", h = "bg-green/50"), (0, s.jsx)(o.Z, {
                    children: (0, s.jsxs)("div", {
                        className: (0, i.Z)("relative -mt-4 flex grow flex-col bg-cover bg-fixed bg-no-repeat", d),
                        children: [(0, s.jsxs)("div", {
                            className: "absolute inset-y-0 left-6 -mt-4",
                            children: [(0, s.jsx)("div", {
                                className: "h-full w-px bg-white/10"
                            }), (0, s.jsx)("div", {
                                className: (0, i.Z)("relative left-0 bottom-2/3 h-16 w-1", h)
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "absolute inset-y-0 right-6 -mt-4",
                            children: [(0, s.jsx)("div", {
                                className: "h-full w-px bg-white/10"
                            }), (0, s.jsx)("div", {
                                className: (0, i.Z)("relative right-[2px] bottom-2/3 h-16 w-1", h)
                            })]
                        }), (0, s.jsx)("div", {
                            className: (0, i.Z)("flex grow flex-col items-center gap-12", u, t),
                            children: (0, s.jsxs)("div", {
                                className: (0, i.Z)("flex grow flex-col items-center gap-8", t),
                                children: [e, (0, s.jsx)(l.Z, {})]
                            })
                        })]
                    })
                })
            }! function(e) {
                e[e.Avatars = 0] = "Avatars"
            }(r || (r = {})),
            function(e) {
                e[e.Red = 0] = "Red", e[e.Yellow = 1] = "Yellow", e[e.Green = 2] = "Green"
            }(a || (a = {}))
        },
        19203: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r, a = n(67294);

            function s() {
                return s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, s.apply(this, arguments)
            }
            var i = e => a.createElement("svg", s({
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = a.createElement("path", {
                d: "M11 7v8h2v2H7v-2h2V9H8V7h3ZM9 3h2v2H9V3Z",
                fill: "currentColor"
            })))
        },
        97310: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r, a = n(67294);

            function s() {
                return s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, s.apply(this, arguments)
            }
            var i = e => a.createElement("svg", s({
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.167 4.167H7.5v1.666H5.833v8.334h8.334V12.5h1.666v3.333H4.167V4.167Zm8.821 1.666h-2.155V4.167h5v5h-1.666V7.012l-3.578 3.577-1.178-1.178 3.577-3.578Z",
                fill: "currentColor"
            })))
        },
        16429: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r, a = n(85893),
                s = n(67294),
                i = n(78366);

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            var o = e => s.createElement("svg", l({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), r || (r = s.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "m12.256 4.411 1.178 1.179-3.577 3.577-.762.833.762.834 3.577 3.577-1.178 1.179L6.666 10l5.59-5.589Z",
                    fill: "#fff"
                }))),
                c = (0, s.forwardRef)((function({
                    onClick: e,
                    className: t,
                    label: n
                }, r) {
                    return (0, a.jsx)(i.Z, {
                        label: n,
                        ref: r,
                        className: t,
                        onClick: e,
                        children: (0, a.jsx)(o, {})
                    })
                }))
        },
        24382: function(e, t, n) {
            "use strict";
            n.d(t, {
                Eh: function() {
                    return r.Eh
                },
                k_: function() {
                    return c
                },
                VY: function() {
                    return i
                },
                jE: function() {
                    return o
                },
                fC: function() {
                    return s
                },
                xz: function() {
                    return r.xz
                }
            });
            var r = n(40299),
                a = n(85893);

            function s(e) {
                return (0, a.jsx)(r.fC, { ...e
                })
            }

            function i(e) {
                return (0, a.jsx)(r.h_, {
                    children: (0, a.jsx)(r.VY, { ...e
                    })
                })
            }
            var l = n(19203);

            function o({
                children: e,
                ...t
            }) {
                return (0, a.jsx)(r.xz, { ...t,
                    children: (0, a.jsxs)("div", {
                        "data-testid": "tooltip-trigger",
                        className: "group flex flex-row items-center",
                        children: [(0, a.jsx)("div", {
                            className: "aspect-square w-min border-2 border-white/30 p-[2px] group-hover:border-yellow group-hover:text-yellow",
                            children: (0, a.jsx)(l.Z, {
                                width: 16,
                                height: 16
                            })
                        }), e && (0, a.jsx)("p", {
                            className: "ml-2 text-sm font-semibold uppercase text-white group-hover:text-yellow",
                            children: "Learn More"
                        })]
                    })
                })
            }

            function c({
                children: e,
                ...t
            }) {
                return (0, a.jsx)(r.xz, {
                    asChild: !0,
                    onClick: e => e.preventDefault(),
                    onMouseDown: e => e.preventDefault(),
                    ...t,
                    children: (0, a.jsx)("span", {
                        tabIndex: 0,
                        children: e
                    })
                })
            }
        },
        45488: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return o
                }
            });
            var r = n(48494),
                a = n(26358),
                s = n(84992),
                i = n(4604),
                l = n(69449);
            const o = (0, r.Z)(["getAvatarNfts"], (function() {
                return (0, a.NE)((async function*() {
                    return (yield(0, s.AV)(l.pO())).map(i.p)
                }))
            }), {
                staleTime: 1 / 0
            })
        },
        64757: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return o
                }
            });
            var r = n(26358),
                a = n(73666),
                s = n(60302),
                i = n(45488),
                l = n(77699);

            function o() {
                return (0, r.NE)((async function*() {
                    try {
                        yield(0, a.Kp)()
                    } catch (n) {
                        return []
                    }
                    const e = yield(0, l.z)(), t = new Set(e.map((e => e.toString())));
                    return (yield(0, s.Wd)(i.v, [])).filter((e => !e.revealed && t.has(e.tokenId.toString())))
                }))
            }
        },
        48589: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return l
                }
            });
            var r = n(26358),
                a = n(84992),
                s = n(82624),
                i = n(69449);

            function l() {
                return (0, r.NE)((async function*() {
                    return (yield(0, a.AV)(i.EC())).map(s.c)
                }))
            }
        },
        10482: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return l
                }
            });
            var r = n(26358),
                a = n(84992),
                s = n(82624),
                i = n(69449);

            function l() {
                return (0, r.NE)((async function*() {
                    return (yield(0, a.AV)(i.RI())).map(s.c)
                }))
            }
        },
        75608: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return l
                }
            });
            var r = n(26358),
                a = n(73666),
                s = n(48589),
                i = n(10482);

            function l() {
                return (0, r.NE)((async function*() {
                    let e;
                    try {
                        e = yield(0, a.Kp)()
                    } catch (n) {
                        throw console.error("Something went wrong calling getUnopenedAvatarPeeks.", n), n
                    }
                    let t = yield(0, s.E)();
                    return t = t.concat(yield(0, i.R)()), t.filter((t => !t.opened && t.userWalletAddress === e.address))
                }))
            }
        },
        77699: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(26358),
                a = n(84992),
                s = n(69449);

            function i() {
                return (0, r.NE)((async function*() {
                    return (yield(0, a.AV)(s.zw())).token_ids
                }))
            }
        },
        69449: function(e, t, n) {
            "use strict";
            n.d(t, {
                EC: function() {
                    return l
                },
                M6: function() {
                    return u
                },
                RI: function() {
                    return i
                },
                av: function() {
                    return d
                },
                bf: function() {
                    return h
                },
                il: function() {
                    return c
                },
                pO: function() {
                    return s
                },
                zw: function() {
                    return o
                }
            });
            var r = n(84992),
                a = n(35576);

            function s() {
                return (0, r.WY)("api/v1/avatars/nft/")
            }

            function i() {
                return (0, r.WY)("/api/v1/avatars/peek/")
            }

            function l() {
                return (0, a.Z)((0, r.WY)("/api/v1/avatars/peek-private/"))
            }

            function o() {
                return (0, r.WY)("/api/v1/avatars/my-nfts/")
            }

            function c(e, t) {
                return (0, a.Z)((0, r.Yi)(`/api/v1/avatars/peek/${e}/`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        opened: t
                    })
                }))
            }

            function d(e, t) {
                return (0, a.Z)((0, r.Yi)(`/api/v1/avatars/nft/${e}/`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        revealed: t
                    })
                }))
            }

            function u(e) {
                const t = new URLSearchParams;
                t.set("amount", e.toString());
                const n = `?${t.toString()}`;
                return (0, r.WY)(`/api/v1/avatars/manifest-payment/signature/${n}`)
            }

            function h() {
                return (0, a.Z)((0, r.WY)("/api/v1/avatars/manifest-payment/"))
            }
        },
        15482: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return s
                }
            });
            var r = n(26358),
                a = n(84992);

            function s(e, t) {
                return (0, r.NE)((async function*() {
                    return (yield(0, a.AV)((0, a.Yi)("/api/v1/signature/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            key: e,
                            message: t
                        })
                    }))).signature
                }))
            }
        },
        4604: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return i
                },
                p: function() {
                    return l
                }
            });
            var r = n(28240),
                a = n(87760),
                s = n(33555);
            const i = (0, r.SuH)(2, (e => (0, r.jCC)((0, s.Z)(e), "parallel")));

            function l(e) {
                const t = e.image.split("http"),
                    n = "http".concat(t[t.length - 1]);
                return { ...(0, a.l)(e),
                    tokenId: Number(e.token_id),
                    assigned: !0,
                    private: !1,
                    fullResImage: n,
                    description: "We are the protectors of this land, our hearts and minds in tune with the natural world and its ancient wisdom."
                }
            }
        },
        82624: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return r
                }
            });
            const r = n(87760).l
        },
        25193: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(67294),
                a = n(64146),
                s = n(63328),
                i = n(52817);

            function l(e) {
                var t;
                const {
                    data: n
                } = (0, s.mx)(), l = (0, s.yL)(), o = n ? ? l, c = (null === n || void 0 === n ? void 0 : n.getChainId()) ? ? (null === (t = l.chains) || void 0 === t ? void 0 : t[0].id), d = (0, i.Z)(e, {
                    defaultChainId: c
                });
                return (0, r.useMemo)((() => {
                    if (d) return new a.Contract(d, e.abi, o)
                }), [d, e.abi, o])
            }
        },
        86144: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return vt
                },
                default: function() {
                    return wt
                }
            });
            var r = n(85893),
                a = n(9008),
                s = n.n(a),
                i = n(49089),
                l = n(66330),
                o = n(67294),
                c = n(57030),
                d = n(14603),
                u = n(19870),
                h = n(78422),
                x = n(42849),
                f = n(17979),
                m = n(24554),
                g = n(48589),
                p = n(86010),
                v = n(89755),
                w = n.n(v),
                b = n(51574),
                j = n(23225),
                N = n(22681),
                y = n(78366),
                k = n(25561);

            function _({
                className: e,
                collection: t
            }) {
                return (0, r.jsx)(y.Z, {
                    className: e,
                    onClick: () => window.open((0, k.Z)(t)),
                    children: (0, r.jsx)(N.Z, {
                        width: "16px"
                    })
                })
            }

            function Z({
                value: e,
                name: t
            }) {
                return (0, r.jsxs)("div", {
                    className: "flex w-full flex-row items-center justify-between border-b border-white/10 bg-white/2 p-4 uppercase tracking-halfwide",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-row items-center gap-4",
                        children: [(0, r.jsx)("div", {
                            className: "h-6 w-6 border-2 border-white/50"
                        }), (0, r.jsx)("div", {
                            className: "text-xs text-white",
                            children: e
                        })]
                    }), (0, r.jsx)("div", {
                        className: "text-xs text-white/30",
                        children: t
                    })]
                })
            }
            var S = n(93079);

            function C({
                children: e
            }) {
                return (0, r.jsxs)(f.VY, {
                    className: "flex flex-row bg-black",
                    children: [(0, r.jsx)("div", {
                        className: "grow basis-0 bg-black"
                    }), (0, r.jsx)(S.E.div, {
                        className: "flex h-full w-full max-w-1080p grow-[999] flex-col items-center lg:flex-row lg:p-12",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .5
                        },
                        children: e
                    }), (0, r.jsx)("div", {
                        className: "grow basis-0 bg-black"
                    })]
                })
            }

            function E({
                className: e,
                children: t
            }) {
                return (0, r.jsxs)("div", {
                    className: (0, p.Z)("h-full w-full", e),
                    children: [(0, r.jsx)("div", {
                        className: "relative col-[1_/_content-left] row-[1_/_content-top] h-18 border-t border-white/8 "
                    }), (0, r.jsx)("div", {
                        className: "relative col-[content-right] row-[1_/content-top] h-18 border-t border-white/8 "
                    }), (0, r.jsx)("div", {
                        className: "relative col-[1_/_content-left] row-[content-top_/_image-end] lg:hidden",
                        children: (0, r.jsx)("div", {
                            className: "absolute -right-px top-0 h-2 w-px bg-white/40"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[content-right] row-[content-top_/_image-end] lg:hidden",
                        children: (0, r.jsx)("div", {
                            className: "absolute -right-px top-0 h-2 w-px bg-white/40"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[1_/_content-left] row-[image-end_/_title-start] h-18 lg:hidden",
                        children: (0, r.jsx)("div", {
                            className: "absolute -right-px top-0 h-2 w-px bg-white/40"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[content-right] row-[image-end_/_title-start] h-18 lg:hidden",
                        children: (0, r.jsx)("div", {
                            className: "absolute -left-px top-0 h-2 w-px bg-white/40"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[1_/_content-left] row-[content-end_/_end] lg:hidden",
                        children: (0, r.jsx)("div", {
                            className: "absolute right-[-2px] bottom-0 h-1 w-[2px] bg-white/40"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[content-right] row-[content-bottom_/_end] lg:hidden",
                        children: (0, r.jsx)("div", {
                            className: "absolute left-[-2px] bottom-0 h-1 w-[2px] bg-white/40"
                        })
                    }), (0, r.jsx)("div", {
                        className: "col-[content-left_/_content-right] row-[end] h-6 border-x border-white/8 lg:hidden"
                    }), (0, r.jsx)("div", {
                        className: "col-[1_/_content-left] row-[end] h-6 border-t border-white/8 lg:hidden"
                    }), (0, r.jsx)("div", {
                        className: "col-[content-right] row-[end] h-6 border-t border-white/8 lg:hidden"
                    }), (0, r.jsxs)("div", {
                        className: "relative col-[content-left_/_content-right] row-[image-bottom] hidden h-18 border-x border-t border-white/8 bg-gradient-to-t from-yellow/4 lg:col-[content-left_/_details-start] lg:block lg:border-t-0",
                        children: [(0, r.jsx)("div", {
                            className: "absolute left-[-2px] bottom-0 h-1 w-[2px] bg-white/40"
                        }), (0, r.jsx)("div", {
                            className: "absolute -right-px h-2 w-px bg-white/40"
                        }), (0, r.jsx)("div", {
                            className: "absolute right-[-2px] bottom-0 h-1 w-[2px] bg-white/40"
                        }), (0, r.jsx)("div", {
                            className: "absolute -left-px h-2 w-px bg-white/40"
                        }), (0, r.jsxs)("div", {
                            className: "absolute top-6 left-1/2 flex flex-col items-center",
                            children: [(0, r.jsx)("div", {
                                className: "h-1 w-px bg-white/40"
                            }), (0, r.jsx)("div", {
                                className: "h-px w-[9px] bg-white/40"
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "col-[1_/_content-left] row-[content-top_/_content-bottom] mr-[40px] hidden w-4 bg-white/4 lg:block xl:mr-[100px]"
                    }), (0, r.jsx)("div", {
                        className: "relative col-[1_/_content-left] row-[content-top_/_title-start] hidden lg:block",
                        children: (0, r.jsx)("div", {
                            className: "absolute bottom-0 hidden h-1 w-4 bg-white/60 lg:block"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[1_/_content-left] row-[title-start_/_content-bottom] hidden lg:block",
                        children: (0, r.jsx)("div", {
                            className: "absolute bottom-0 hidden h-1 w-4 bg-white/60 lg:block"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[content-right] row-[content-top_/_title-start] hidden w-full lg:block",
                        children: (0, r.jsx)("div", {
                            className: "absolute right-10 top-0 h-1 w-[7px] bg-white/8"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[content-right] row-[content-top_/_title-start] hidden w-full lg:block",
                        children: (0, r.jsx)("div", {
                            className: "absolute right-10 bottom-0 h-1 w-1 bg-white/60"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[content-right] row-[title-start_/_content-bottom] hidden w-full lg:block",
                        children: (0, r.jsx)("div", {
                            className: "absolute right-10 bottom-0 h-1 w-1 bg-white/60"
                        })
                    }), (0, r.jsx)("div", {
                        className: "relative col-[content-right] row-[content-bottom_/_image-bottom] hidden w-full lg:block",
                        children: (0, r.jsx)("div", {
                            className: "absolute right-10 bottom-0 h-1 w-1 bg-white/60"
                        })
                    }), (0, r.jsx)("div", {
                        className: "col-[details-start_/_content-right] row-[content-bottom_/_-1] hidden bg-gradient-to-t from-yellow/4 p-4 lg:block",
                        children: (0, r.jsx)("div", {
                            className: "text-3xs text-white/40",
                            children: "//"
                        })
                    }), (0, r.jsx)("div", {
                        className: "col-[content-right_/_-1] row-[title-start_/_desc-start] hidden bg-gradient-to-r from-yellow/2 lg:block"
                    }), t]
                })
            }

            function F({
                avatar: e
            }) {
                var t;
                return (0, r.jsxs)(C, {
                    children: [(0, r.jsxs)("div", {
                        className: "flex w-full justify-between bg-gradient-to-l from-yellow/8 px-6 py-4 lg:hidden",
                        children: [(0, r.jsx)(f.x8, {
                            className: "h-10 w-10 bg-yellow/16"
                        }), (0, r.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, r.jsx)(j.Z, {
                                className: "h-10 w-10",
                                onShare: () => "share"
                            }), (0, r.jsx)(_, {
                                className: "h-10 w-10",
                                collection: "parallel-avatars"
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "hidden h-full flex-col justify-between bg-gradient-to-r from-yellow/4 lg:flex",
                        children: (0, r.jsx)(f.x8, {
                            className: "h-10 w-10 bg-yellow/16"
                        })
                    }), (0, r.jsxs)(E, {
                        className: (0, p.Z)("grid content-start bg-gradient-to-b from-yellow/20", "\n  grid-cols-[0.5rem_[content-left]_1fr_[content-right]_0.5rem]\n  grid-rows-[auto_[content-top]_auto_[image-end]_auto_[logo-start]_auto_[title-start]_auto_[desc-start]_auto_[traits-start]_auto_[content-bottom]_auto_[end]_auto]\n  ", "\n  lg:grid-cols-[auto_[content-left]_3fr_[details-start]_minmax(300px,2fr)_[content-right]_auto]\n  lg:grid-rows-[min-content_[content-top]_5.75rem_[title-start]_5.75rem_[desc-start]_5.75rem_[traits-start]_auto_[content-bottom]_auto_[image-bottom]_min-content]\n  "),
                        children: [(0, r.jsxs)("div", {
                            className: "relative col-[content-left_/_content-right] row-[1_/content-top] h-18 border-x border-t border-white/8 bg-gradient-to-t from-yellow/4 lg:col-[content-left_/_details-start] lg:border-t-0",
                            children: [(0, r.jsx)("div", {
                                className: "absolute left-[-2px] h-1 w-[2px] bg-white/40"
                            }), (0, r.jsx)("div", {
                                className: "absolute -right-px bottom-[6px] h-2 w-px bg-white/40"
                            }), (0, r.jsx)("div", {
                                className: "absolute right-[-2px] h-1 w-[2px] bg-white/40"
                            }), (0, r.jsx)("div", {
                                className: "absolute bottom-[6px] -left-px h-2 w-px bg-white/40"
                            }), (0, r.jsxs)("div", {
                                className: "absolute bottom-6 left-1/2 flex flex-col items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "h-px w-[9px] bg-white/40"
                                }), (0, r.jsx)("div", {
                                    className: "h-1 w-px bg-white/40"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "absolute bottom-2 flex w-full flex-row justify-between px-4 text-3xs font-medium uppercase tracking-halfwide text-white/60",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex flex-row gap-10",
                                    children: [(0, r.jsx)("div", {
                                        children: "Parallel //"
                                    }), (0, r.jsx)("div", {
                                        children: "Avatar"
                                    })]
                                }), (0, r.jsx)("div", {
                                    children: e.parallel
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "relative col-[content-right] row-[content-top_/_title-start] mr-[40px] hidden flex-col gap-1 lg:flex xl:mr-[80px]",
                            children: [(0, r.jsx)(j.Z, {
                                className: "h-10 w-10",
                                onShare: () => "share"
                            }), (0, r.jsx)(_, {
                                className: "h-10 w-10",
                                collection: "parallel-avatars"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "col-[content-left_/_content-right] row-[content-top_/_image-end] border-x border-white/8 lg:col-[content-left_/_details-start] lg:row-[content-top_/image-bottom]",
                            children: (0, r.jsx)("div", {
                                className: "relative aspect-square w-full",
                                children: (0, r.jsx)(w(), {
                                    src: e.fullResImage,
                                    layout: "fill",
                                    objectFit: "fill",
                                    loader: ({
                                        src: e
                                    }) => e,
                                    alt: e.tokenId.toString(),
                                    unoptimized: !0
                                }, e.fullResImage)
                            })
                        }), (0, r.jsxs)("div", {
                            className: "relative col-[content-left_/_content-right] row-[image-end_/logo-start] h-18 border-x border-white/8 lg:col-[details-start_/_content-right] lg:row-[1_/content-top] lg:border-l-0",
                            children: [(0, r.jsxs)("div", {
                                className: "absolute bottom-2 right-0 flex flex-row justify-between gap-10 px-4 text-3xs font-medium uppercase tracking-halfwide text-white/60",
                                children: [(0, r.jsx)("div", {
                                    children: "Avatar ID"
                                }), (0, r.jsx)("div", {
                                    children: null === (t = e.tokenId) || void 0 === t ? void 0 : t.toString().padStart(4, "0")
                                }), (0, r.jsx)("div", {
                                    className: "absolute bottom-[-12px] right-4 h-1 w-5 bg-white/8"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "absolute bottom-[-4px] h-1 w-[234px] bg-white/8"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "col-[content-left_/_content-right] row-[logo-start_/_title-start] border-white/8 p-8 lg:col-[details-start_/_content-right] lg:row-[content-top_/_title-start] lg:border-r",
                            children: (0, r.jsx)(b.Z, {
                                faction: e.parallel,
                                size: 40,
                                className: "text-white/30"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "col-[content-left_/_content-right] row-[title-start_/desc-start] flex grow flex-col gap-2 bg-white/4 px-8 py-4 uppercase lg:col-[details-start_/content-right] lg:row-[title-start_/_desc-start]",
                            children: [(0, r.jsx)("div", {
                                className: "text-lg font-medium tracking-halfwide text-yellow",
                                children: e.name
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-row gap-2 text-xxs",
                                children: [(0, r.jsx)("div", {
                                    className: "tracking-halfwide text-white/50",
                                    children: "//"
                                }), (0, r.jsxs)("div", {
                                    className: "tracking-wide text-white",
                                    children: ["#", e.tokenId, ".", e.name]
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "col-[content-left_/_content-right] row-[desc-start_/traits-start] border-b border-white/10 bg-white/2 p-8 pt-4 text-xs italic text-white lg:col-[details-start_/content-right] lg:row-[desc-start_/_traits-start]",
                            children: e.saying
                        }), (0, r.jsxs)("div", {
                            className: "col-[content-left_/_content-right] row-[traits-start_/content-bottom] flex flex-col lg:col-[details-start_/content-right] lg:row-[traits-start_/_content-bottom]",
                            children: [e.headwear && (0, r.jsx)(Z, {
                                value: e.headwear,
                                name: "Headwear"
                            }), e.torso && (0, r.jsx)(Z, {
                                value: e.torso,
                                name: "Body"
                            }), e.faceFeature && (0, r.jsx)(Z, {
                                value: e.faceFeature,
                                name: "Face"
                            }), e.weapon && (0, r.jsx)(Z, {
                                value: e.weapon,
                                name: "Weapon"
                            }), e.companion && (0, r.jsx)(Z, {
                                value: e.companion,
                                name: "Companion"
                            }), e.specialTrait && (0, r.jsx)(Z, {
                                value: e.specialTrait,
                                name: "Special Trait"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "relative col-[content-left_/_content-right] row-[image-bottom_/_-1] min-h-[220px] overflow-hidden lg:col-[details-start_/_-1] lg:row-[content-bottom_/_-1]",
                            children: (0, r.jsx)("div", {
                                className: "absolute bottom-[-100px] right-[-100px]",
                                children: (0, r.jsx)(b.Z, {
                                    faction: e.parallel,
                                    size: 300,
                                    className: "text-white/8"
                                })
                            })
                        })]
                    })]
                })
            }
            var T = n(63328),
                A = n(24574),
                z = n(54403),
                O = n(38295);

            function P(e) {
                return {
                    type: "SetFilterBarOpen",
                    isFilterBarOpen: e
                }
            }

            function I(e) {
                return {
                    type: "SetPeekTransaction",
                    peekTransaction: e
                }
            }
            var R = n(91026),
                M = n(86986);

            function W(e = {}) {
                return {
                    factionFilters: [],
                    headwearFilterToggled: !1,
                    faceFeatureFilterToggled: !1,
                    weaponFilterToggled: !1,
                    companionFilterToggled: !1,
                    specialFilterToggled: !1,
                    showWallet: !0,
                    query: "",
                    gridSize: R.z.M,
                    isFilterBarOpen: !1,
                    filteredEthAddresses: null,
                    lastConnectedWallet: null,
                    selectedAvatars: [],
                    peekTransaction: {
                        status: "NotStarted",
                        hash: ""
                    },
                    ...e
                }
            }

            function Y(e, t) {
                switch (t.type) {
                    case "SetGridSize":
                        return { ...e,
                            gridSize: t.size
                        };
                    case "SetQuery":
                        return { ...e,
                            query: t.query
                        };
                    case "ToggleShowWallet":
                        return { ...e,
                            showWallet: !e.showWallet
                        };
                    case "SetFactions":
                        return { ...e,
                            factionFilters: t.factions
                        };
                    case "ToggleHeadwear":
                        return { ...e,
                            headwearFilterToggled: !e.headwearFilterToggled
                        };
                    case "ToggleFaceFeature":
                        return { ...e,
                            faceFeatureFilterToggled: !e.faceFeatureFilterToggled
                        };
                    case "ToggleWeapon":
                        return { ...e,
                            weaponFilterToggled: !e.weaponFilterToggled
                        };
                    case "ToggleCompanion":
                        return { ...e,
                            companionFilterToggled: !e.companionFilterToggled
                        };
                    case "ToggleSpecial":
                        return { ...e,
                            specialFilterToggled: !e.specialFilterToggled
                        };
                    case "ClearFilters":
                        return { ...e,
                            factionFilters: [],
                            showWallet: !0
                        };
                    case "SetFilterBarOpen":
                        return { ...e,
                            isFilterBarOpen: t.isFilterBarOpen
                        };
                    case "SetFilteredEthAddresses":
                        return { ...e,
                            filteredEthAddresses: t.filteredEthAddresses
                        };
                    case "ChangeConnectedWallet":
                        return e.filteredEthAddresses && e.filteredEthAddresses.length > 0 && e.filteredEthAddresses[0] === e.lastConnectedWallet ? { ...e,
                            filteredEthAddresses: [t.walletAddress.toLowerCase()],
                            lastConnectedWallet: t.walletAddress
                        } : { ...e,
                            lastConnectedWallet: t.walletAddress
                        };
                    case "ToggleSelectedAvatar":
                        return { ...e,
                            selectedAvatars: (0, M.Z)(t.avatar, e.selectedAvatars)
                        };
                    case "ClearSelectedAvatars":
                        return { ...e,
                            selectedAvatars: []
                        };
                    case "SetPeekTransaction":
                        return { ...e,
                            peekTransaction: t.peekTransaction
                        }
                }
            }
            const V = (0, o.createContext)([W(), () => {}]);

            function B() {
                return (0, o.useContext)(V)
            }

            function H({
                children: e,
                initial: t
            }) {
                const [n, a] = (0, o.useReducer)(Y, W(t)), [s] = (0, d.Z)();
                return (0, o.useEffect)((() => {
                    (null === s || void 0 === s ? void 0 : s.address) && a({
                        type: "ChangeConnectedWallet",
                        walletAddress: s.address
                    })
                }), [s]), (0, r.jsx)(V.Provider, {
                    value: [n, a],
                    children: e
                })
            }
            var U = n(11163),
                $ = n(84095),
                L = n(54412),
                D = n(74164),
                G = n(56046);

            function q({
                transactionHash: e
            }) {
                const [t] = (0, d.Z)(), n = (0, U.useRouter)();
                return (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-8 uppercase",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col items-center gap-4",
                        children: [(0, r.jsx)("div", {
                            className: "text-2.5xl font-semibold tracking-halfwide text-green",
                            children: "Payment Successful"
                        }), (0, r.jsx)("div", {
                            className: "text-xs tracking-halfwide text-white/80",
                            children: "Please Proceed Below to view your peeks"
                        }), e && t && (0, r.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [(0, r.jsx)("div", {
                                className: "text-xxs font-semibold tracking-wide text-white",
                                children: "Transaction ID"
                            }), (0, r.jsx)("div", {
                                className: "text-xxs font-semibold tracking-wide text-yellow",
                                children: (0, r.jsx)(L.Z, {
                                    externalLink: !0,
                                    href: (0, D.Z)(null === t || void 0 === t ? void 0 : t.chainId, e),
                                    children: (0, G.Z)(e)
                                })
                            })]
                        })]
                    }), (0, r.jsx)($.Z, {
                        className: "w-min bg-yellow/10 backdrop-blur-sm",
                        onClick: () => {
                            n.push("/avatars/peek/")
                        },
                        children: "View your Peeks"
                    })]
                })
            }

            function K() {
                const e = (0, U.useRouter)();
                return (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-8 uppercase",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col items-center gap-4",
                        children: [(0, r.jsx)("div", {
                            className: "text-2.5xl font-semibold tracking-halfwide text-white",
                            children: "Transaction Unsuccessful"
                        }), (0, r.jsx)("div", {
                            className: "text-xs tracking-halfwide text-white/80",
                            children: "Something something please give it another try"
                        })]
                    }), (0, r.jsx)($.Z, {
                        className: "w-min bg-yellow/10 backdrop-blur-sm",
                        onClick: () => {
                            e.push("/avatars/")
                        },
                        children: "Return to gallery"
                    })]
                })
            }
            var J = n(2126);

            function X() {
                return (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-12",
                    children: [(0, r.jsx)(J.Z, {
                        className: "h-[200px] w-[200px]"
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col items-center gap-4 uppercase tracking-halfwide",
                        children: [(0, r.jsx)("div", {
                            className: "text-2.5xl font-medium text-white",
                            children: "Payment in progress"
                        }), (0, r.jsx)("div", {
                            className: "max-w-measure text-center text-xs text-white/80",
                            children: "Please wait while your payment is completed."
                        })]
                    })]
                })
            }

            function Q({
                initialPeeks: e
            }) {
                const [{
                    peekTransaction: t
                }, n] = B(), a = (0, u.CS)();
                (0, T.BX)({
                    hash: t.hash,
                    onSuccess: () => {
                        l.mutate()
                    },
                    onError: () => {
                        n(I({
                            status: "Failed",
                            hash: t.hash
                        }))
                    }
                });
                const s = (0, z.Ps)(),
                    i = (0, o.useCallback)(((e, t) => {
                        s.show((0, r.jsx)(z.ZP, {
                            dismissible: !0,
                            color: z.PQ.Green,
                            children: e
                        }), {
                            duration: t
                        })
                    }), [s]),
                    l = (0, A.D)((async () => {
                        let r = [];
                        try {
                            for (let t = 0; t < 30; t++) {
                                if (r = await a((0, g.E)()), r.length > ((null === e || void 0 === e ? void 0 : e.length) ? ? 0)) return r;
                                await (0, O.Z)(1e4)
                            }
                            return r
                        } catch (s) {
                            n(I({
                                status: "Failed",
                                hash: t.hash
                            }))
                        }
                    }), {
                        onSuccess: r => {
                            void 0 !== r && void 0 !== e && r.length > e.length ? n(I({
                                status: "Success",
                                hash: t.hash
                            })) : i("Your peeks are coming, please wait a few minutes and refresh the page.", 1 / 0)
                        },
                        onError: () => {
                            n(I({
                                status: "Failed",
                                hash: t.hash
                            }))
                        }
                    });
                return (0, r.jsxs)(S.E.div, {
                    className: "flex h-full w-full max-w-1080p grow-[999] flex-col items-center justify-center lg:flex-row lg:p-12",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .5,
                        delay: .5
                    },
                    children: ["Success" === t.status && (0, r.jsx)(q, {
                        transactionHash: t.hash
                    }), "Failed" === t.status && (0, r.jsx)(K, {}), "InProgress" === t.status && (0, r.jsx)(X, {})]
                })
            }
            var ee = n(66155),
                te = n(38241),
                ne = n(34785),
                re = n(17023),
                ae = n(1062),
                se = n(46467),
                ie = n(33879);

            function le({
                className: e
            }) {
                const [{
                    gridSize: t
                }, n] = B();
                return (0, r.jsx)(ie.Z, {
                    value: t,
                    onChange: e => n(function(e) {
                        return {
                            type: "SetGridSize",
                            size: e
                        }
                    }(e)),
                    className: e
                })
            }
            var oe = n(58970);

            function ce() {
                const [{
                    filteredEthAddresses: e
                }, t] = B(), n = e;
                return (0, r.jsx)(oe.Z, {
                    value: n,
                    onChange: function(e) {
                        t(function(e) {
                            return {
                                type: "SetFilteredEthAddresses",
                                filteredEthAddresses: e
                            }
                        }(e))
                    },
                    optional: !0
                })
            }

            function de() {
                const [{
                    showWallet: e
                }, t] = B();
                return (0, r.jsx)("div", {
                    className: "flex flex-col justify-center",
                    children: (0, r.jsx)(ae.Z, {
                        className: "flex items-center justify-between gap-2 text-sm font-medium uppercase tracking-wide lg:text-xs",
                        checked: !e,
                        onChange: () => t({
                            type: "ToggleShowWallet"
                        }),
                        children: "Show Unowned"
                    })
                })
            }

            function ue() {
                const [{
                    factionFilters: e,
                    headwearFilterToggled: t,
                    faceFeatureFilterToggled: n,
                    weaponFilterToggled: a,
                    companionFilterToggled: s,
                    specialFilterToggled: i
                }, l] = B();
                return (0, r.jsxs)("div", {
                    className: "flex flex-col gap-4 py-6",
                    children: [(0, r.jsx)("div", {
                        className: "mb-8 block text-sm font-semibold uppercase italic tracking-wide text-white/60 lg:hidden",
                        children: "Filters"
                    }), (0, r.jsx)(ce, {}), (0, r.jsx)("div", {
                        className: "lg:hidden",
                        children: (0, r.jsx)(de, {})
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-4 lg:hidden",
                        children: [(0, r.jsx)("div", {
                            className: "mt-4 text-sm font-semibold uppercase italic tracking-wide text-white/60",
                            children: "Avatar Size"
                        }), (0, r.jsx)(le, {})]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, r.jsx)("div", {
                            className: "mt-4 text-sm font-semibold uppercase italic tracking-wide text-white/60 lg:hidden",
                            children: "Faction"
                        }), (0, r.jsx)(se.Z, {
                            value: e,
                            onChange: e => l(function(e) {
                                return {
                                    type: "SetFactions",
                                    factions: e
                                }
                            }(e)),
                            className: "max-w-[400px]"
                        })]
                    }), (0, r.jsx)("hr", {
                        className: "hidden border-white/20 lg:block"
                    }), (0, r.jsx)("div", {
                        className: "hidden lg:block",
                        children: (0, r.jsx)(de, {})
                    }), (0, r.jsx)("hr", {
                        className: "border-white/20"
                    }), (0, r.jsx)(ae.Z, {
                        className: "flex items-center justify-between gap-2 text-sm font-medium uppercase tracking-wide lg:text-xs",
                        checked: t,
                        onChange: () => l({
                            type: "ToggleHeadwear"
                        }),
                        children: "Headwear"
                    }), (0, r.jsx)("hr", {
                        className: "border-white/20"
                    }), (0, r.jsx)(ae.Z, {
                        className: "flex items-center justify-between gap-2 text-sm font-medium uppercase tracking-wide lg:text-xs",
                        checked: n,
                        onChange: () => l({
                            type: "ToggleFaceFeature"
                        }),
                        children: "Face Feature"
                    }), (0, r.jsx)("hr", {
                        className: "border-white/20"
                    }), (0, r.jsx)(ae.Z, {
                        className: "flex items-center justify-between gap-2 text-sm font-medium uppercase tracking-wide lg:text-xs",
                        checked: a,
                        onChange: () => l({
                            type: "ToggleWeapon"
                        }),
                        children: "Weapon"
                    }), (0, r.jsx)("hr", {
                        className: "border-white/20"
                    }), (0, r.jsx)(ae.Z, {
                        className: "flex items-center justify-between gap-2 text-sm font-medium uppercase tracking-wide lg:text-xs",
                        checked: s,
                        onChange: () => l({
                            type: "ToggleCompanion"
                        }),
                        children: "Companion"
                    }), (0, r.jsx)("hr", {
                        className: "border-white/20"
                    }), (0, r.jsx)(ae.Z, {
                        className: "flex items-center justify-between gap-2 text-sm font-medium uppercase tracking-wide lg:text-xs",
                        checked: i,
                        onChange: () => l({
                            type: "ToggleSpecial"
                        }),
                        children: "Special"
                    })]
                })
            }

            function he() {
                const e = (0, l.Z)("(min-width: 1024px)"),
                    [{
                        isFilterBarOpen: t
                    }, n] = B();
                return (0, o.useEffect)((() => n(P(e))), [e, n]), (0, re.uJ)((0, o.useMemo)((() => ({
                    bottom: e ? 0 : 99
                })), [e])), t ? e ? (0, r.jsx)(ne.WQ, {
                    className: "sticky top-0 h-screen overflow-y-auto border-r border-white/20 px-6",
                    children: (0, r.jsx)(ue, {})
                }) : (0, r.jsx)(f.fC, {
                    open: !0,
                    children: (0, r.jsx)(f.VY, {
                        className: "bg-black",
                        children: (0, r.jsxs)("div", {
                            className: "flex h-full flex-col",
                            children: [(0, r.jsx)("div", {
                                className: "grow basis-0 overflow-y-auto p-6",
                                children: (0, r.jsx)(ue, {})
                            }), (0, r.jsxs)("div", {
                                className: "flex shrink-0 flex-row gap-4 border-t border-white/20 py-4 px-6",
                                children: [(0, r.jsx)($.Z, {
                                    color: "white",
                                    className: "grow basis-0",
                                    onClick: () => n({
                                        type: "ClearFilters"
                                    }),
                                    children: "Clear All"
                                }), (0, r.jsx)($.Z, {
                                    className: "grow basis-0",
                                    onClick: () => n(P(!1)),
                                    children: "Done"
                                })]
                            })]
                        })
                    })
                }) : null
            }
            var xe = n(76084),
                fe = n(91707);

            function me() {
                const [{
                    isFilterBarOpen: e
                }, t] = B();
                return (0, r.jsx)(fe.Z, {
                    label: (0, r.jsx)("div", {
                        className: "text-3xs",
                        children: "Filter"
                    }),
                    active: e,
                    onChange: () => t(P(!e)),
                    children: (0, r.jsx)(xe.Z, {})
                })
            }
            var ge = n(45488),
                pe = n(77699);

            function ve() {
                const [e] = (0, d.Z)(), {
                    data: t = [],
                    isLoading: n
                } = (0, u.gU)(["wallet", null === e || void 0 === e ? void 0 : e.address, "UserOwnedAvatarNfts"], (0, pe.z)(), {
                    enabled: !!e
                }), {
                    data: a = []
                } = (0, ge.v)(), s = (0, ee.ZP)(m.GF) ? a.length - t.length : "?";
                return (0, r.jsxs)("div", {
                    className: "mx-6 flex grow flex-row justify-end gap-4 lg:justify-start lg:gap-6",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col items-start gap-1 tracking-wider lg:ml-0",
                        children: [(0, r.jsx)("div", {
                            className: "text-xl sm:h-[34px] sm:text-3xl",
                            children: n ? "-" : t.length
                        }), (0, r.jsx)("div", {
                            className: "text-3xs font-semibold uppercase text-white/60",
                            children: "Wallet"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "hidden flex-col items-start justify-start gap-1 tracking-wider xs:flex",
                        children: [(0, r.jsxs)("div", {
                            className: "text-xl sm:h-[34px] sm:text-3xl",
                            children: [" ", n ? "-" : s]
                        }), (0, r.jsx)("div", {
                            className: "text-3xs font-semibold uppercase text-white/60",
                            children: "Missing"
                        })]
                    })]
                })
            }
            var we = n(51526),
                be = n(49693),
                je = n(91877),
                Ne = n(26358),
                ye = n(26218),
                ke = n(73666),
                _e = n(60302),
                Ze = n(84992);
            const Se = n(87760).l;
            var Ce = n(69449);
            var Ee = n(10482);
            const Fe = "https://storage.googleapis.com/prod.static-assets.parallelnft.com/avatar-assets/doors";

            function Te(e) {
                switch (e) {
                    case ye.Z.Earthen:
                        return `${Fe}/Earthen.png`;
                    case ye.Z.Marcolian:
                        return `${Fe}/Marcolian.png`;
                    case ye.Z.Kathari:
                        return `${Fe}/Kathari.png`;
                    case ye.Z.Augencore:
                        return `${Fe}/Augencore.png`;
                    case ye.Z.Shroud:
                        return `${Fe}/Shroud.png`;
                    case ye.Z.Universal:
                        return `${Fe}/Universal.png`
                }
            }

            function Ae(e) {
                return (0, Ne.NE)((async function*() {
                    if (e) return yield(0, _e.Wd)(ge.v, []);
                    const t = yield(0, Ne.NE)((async function*() {
                        return (yield(0, Ze.AV)(Ce.pO())).map(Se)
                    })), n = yield(0, Ee.R)();
                    let r = !1;
                    try {
                        yield(0, ke.Kp)(), r = !0
                    } catch (d) {}
                    let a = [],
                        s = [];
                    r && (s = yield(0, pe.z)(), a = yield(0, g.E)());
                    const i = new Set(t.map((e => e.tokenId.toString()))),
                        l = s.filter((e => !i.has(e.toString()))).map((e => ({
                            tokenId: e,
                            parallel: ye.Z.Universal,
                            image: `${Fe}/Universal.png`,
                            assigned: !1,
                            private: !1,
                            peeked: !1
                        }))),
                        o = new Map;
                    for (const e of a) o.set(e.tokenId.toString(), e);
                    const c = new Map;
                    for (const e of n) c.set(e.tokenId.toString(), e);
                    return t.map((e => {
                        const t = e.tokenId,
                            n = c.get(null === t || void 0 === t ? void 0 : t.toString());
                        if (void 0 !== n) return {
                            tokenId: t,
                            parallel: n.parallel,
                            image: Te(n.parallel),
                            assigned: !0,
                            private: !1,
                            peeked: !0
                        };
                        const r = o.get(null === t || void 0 === t ? void 0 : t.toString());
                        return void 0 !== r ? {
                            tokenId: t,
                            parallel: r.parallel,
                            image: Te(r.parallel),
                            assigned: !0,
                            private: !0,
                            peeked: !0
                        } : {
                            tokenId: t,
                            parallel: ye.Z.Universal,
                            image: `${Fe}/Universal.png`,
                            assigned: !0,
                            private: !1,
                            peeked: !1
                        }
                    })).concat(l)
                }))
            }
            var ze = n(75608),
                Oe = n(64757),
                Pe = n(78326);

            function Ie({
                avatar: e,
                onViewDetails: t
            }) {
                const [{
                    gridSize: n
                }] = B(), [a, s] = (0, o.useState)(null);
                let i = 54;
                const l = (0, Pe.Z)(a);
                return l && (i = .25 * l.width), (0, r.jsxs)("div", {
                    ref: s,
                    className: "relative h-full cursor-pointer",
                    onClick: () => t(e),
                    children: [(0, r.jsx)("div", {
                        className: "absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black/60"
                    }), (0, r.jsx)(b.Z, {
                        faction: e.parallel,
                        size: i,
                        className: "pointer-events-none absolute top-4 right-4 opacity-20"
                    }), (0, r.jsx)("div", {
                        className: (0, p.Z)("flex justify-center", n === R.z.S && "items-start", n !== R.z.S && "items-center"),
                        children: (0, r.jsxs)("div", {
                            className: "absolute bottom-0 flex w-full flex-col justify-end gap-4 p-4 tracking-wide",
                            children: [(0, r.jsx)("div", {
                                className: "h-1 w-2 bg-white"
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col uppercase",
                                children: [(0, r.jsx)("div", {
                                    className: "text-base font-semibold text-yellow",
                                    children: e.name
                                }), (0, r.jsx)("div", {
                                    className: "text-xxs font-medium text-white/60",
                                    children: `#${e.tokenId}.${e.parallel}`
                                })]
                            })]
                        })
                    })]
                })
            }

            function Re({
                avatar: e,
                onClick: t
            }) {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: "absolute inset-0 opacity-0 transition-opacity duration-100 hover:opacity-100",
                        children: (0, r.jsx)(Ie, {
                            avatar: e,
                            onViewDetails: t
                        })
                    })
                })
            }
            var Me = n(28240);
            var We = n(4604);
            const Ye = (0, Me.wVM)([
                [(0, Me.fS0)(ye.Z.Marcolian), () => (0, We.B)(ye.Z.Marcolian)],
                [(0, Me.fS0)(ye.Z.Augencore), () => (0, We.B)(ye.Z.Augencore)],
                [(0, Me.fS0)(ye.Z.Kathari), () => (0, We.B)(ye.Z.Kathari)],
                [(0, Me.fS0)(ye.Z.Earthen), () => (0, We.B)(ye.Z.Earthen)],
                [(0, Me.fS0)(ye.Z.Shroud), () => (0, We.B)(ye.Z.Shroud)],
                [(0, Me.fS0)(ye.Z.Universal), () => (0, We.B)(ye.Z.Universal)]
            ]);

            function Ve(e, t) {
                const [{
                    factionFilters: n,
                    headwearFilterToggled: r,
                    faceFeatureFilterToggled: a,
                    weaponFilterToggled: s,
                    companionFilterToggled: i,
                    specialFilterToggled: l,
                    showWallet: o,
                    query: c
                }] = B(), d = (0, Me.qCK)(function(e) {
                    return e ? (0, Me.hXT)((t => t.tokenId.toString() === e)) : Me.yRu
                }(c), function(e, {
                    showWallet: t
                }) {
                    return n => (t && (n = n.filter((t => e.includes(Number(t.tokenId))))), n)
                }(t, {
                    showWallet: o
                }), function(e, t, n, r, a, s) {
                    return i => (e.length && (i = i.filter((t => e.map(Ye).some((e => e(t)))))), t && (i = i.filter((e => e.headwear))), n && (i = i.filter((e => e.faceFeature))), r && (i = i.filter((e => e.weapon))), a && (i = i.filter((e => e.companion))), s && (i = i.filter((e => e.specialTrait))), i)
                }(n, r, a, s, i, l));
                return d(e)
            }
            var Be, He, Ue = n(85603);

            function $e() {
                return $e = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, $e.apply(this, arguments)
            }
            var Le, De, Ge, qe, Ke = e => o.createElement("svg", $e({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Be || (Be = o.createElement("g", {
                    opacity: .6,
                    clipPath: "url(#a)"
                }, o.createElement("path", {
                    d: "M3.013 3.956.93 1.872l.943-.943 13.2 13.2-.944.942-2.206-2.207A7.336 7.336 0 0 1 .788 8a7.321 7.321 0 0 1 2.225-4.044Zm6.825 6.825-.976-.976a2 2 0 0 1-2.667-2.667l-.976-.976a3.333 3.333 0 0 0 4.62 4.62ZM5.316 2.507A7.336 7.336 0 0 1 15.212 8a7.297 7.297 0 0 1-1.341 3.062l-2.573-2.574a3.333 3.333 0 0 0-3.786-3.786L5.316 2.507Z",
                    fill: "#fff"
                }))), He || (He = o.createElement("defs", null, o.createElement("clipPath", {
                    id: "a"
                }, o.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h16v16H0z"
                }))))),
                Je = n(24382),
                Xe = n(19203);

            function Qe() {
                return Qe = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, Qe.apply(this, arguments)
            }
            var et = e => o.createElement("svg", Qe({
                    fill: "currentColor",
                    id: "Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    xmlSpace: "preserve"
                }, e), Le || (Le = o.createElement("style", null, ".st0{fill:none}")), De || (De = o.createElement("path", {
                    d: "m9 18 7-6-7-6v12z"
                })), Ge || (Ge = o.createElement("path", {
                    className: "st0",
                    d: "M0 0h24v24H0z"
                })), qe || (qe = o.createElement("path", {
                    className: "st0",
                    d: "M0 0h24v24H0z"
                }))),
                tt = n(58384);

            function nt({
                avatar: e
            }) {
                const [{
                    selectedAvatars: t
                }, n] = B();
                return (0, r.jsxs)(r.Fragment, {
                    children: [e.peeked || !e.assigned ? (0, r.jsx)("div", {
                        className: "absolute inset-x-0 top-0 flex flex-row items-start pt-4",
                        children: (0, r.jsxs)("div", {
                            className: "flex h-[2rem] w-full flex-row items-center justify-center border border-white/8 bg-white/10 px-4 backdrop-blur-sm",
                            children: [(0, r.jsxs)("div", {
                                className: "text-xs font-semibold uppercase tracking-wide text-white/80",
                                children: [e.peeked && !e.private && "Peeked", !e.assigned && "Not assigned yet", e.private && "Private Peek"]
                            }), e.peeked && (0, r.jsx)(Ke, {
                                className: "ml-auto"
                            }), !e.assigned && (0, r.jsx)("div", {
                                className: "ml-auto flex flex-row items-center",
                                children: (0, r.jsxs)(Je.fC, {
                                    children: [(0, r.jsx)(Je.xz, {
                                        children: (0, r.jsx)("div", {
                                            className: "aspect-square w-min border border-white/30 p-[2px] hover:border-yellow hover:text-yellow",
                                            children: (0, r.jsx)(Xe.Z, {
                                                width: 12,
                                                height: 12
                                            })
                                        })
                                    }), (0, r.jsx)(tt.Z, {
                                        children: (0, r.jsx)("div", {
                                            className: "text-xxs font-semibold leading-tight tracking-wide",
                                            children: "Please wait while we generate a random number on chain, and then use that to permanently link your NFT to an avatar"
                                        })
                                    })]
                                })
                            })]
                        })
                    }) : (0, r.jsx)("div", {
                        className: "absolute inset-x-0 top-0 flex flex-row items-start bg-gradient-to-b from-black/90 to-black/0 px-4 pt-4",
                        children: (0, r.jsxs)("div", {
                            className: "ml-auto flex gap-1",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("span", {
                                    className: "h-fit border border-white/8 bg-white/10 p-1 text-xxs font-semibold uppercase tracking-wide text-white backdrop-blur-sm",
                                    children: "Select to Peek"
                                }), (0, r.jsx)(et, {
                                    className: "text-white",
                                    height: "20"
                                })]
                            }), (0, r.jsx)(Ue.Z, {
                                className: "h-[2rem]",
                                checked: t.includes(e),
                                onChange: () => n(function(e) {
                                    return {
                                        type: "ToggleSelectedAvatar",
                                        avatar: e
                                    }
                                }(e))
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: "absolute bottom-0 flex h-1/2 w-full flex-col justify-end gap-4 bg-gradient-to-t from-black/80 p-4 tracking-wide",
                        children: [(0, r.jsx)("div", {
                            className: "h-1 w-2 bg-white"
                        }), (0, r.jsx)("div", {
                            className: "text-xxs font-medium uppercase text-white/60",
                            children: `#${e.tokenId}`
                        })]
                    })]
                })
            }

            function rt({
                onSelectAvatar: e
            }) {
                const [{
                    gridSize: t
                }] = B(), [n] = (0, d.Z)(), a = (0, ee.ZP)(m.GF), {
                    data: s = [],
                    isLoading: i
                } = (0, u.gU)(["wallet", null === n || void 0 === n ? void 0 : n.address, "avatars"], Ae(a)), {
                    data: l = []
                } = (0, u.gU)(["wallet", null === n || void 0 === n ? void 0 : n.address], (0, pe.z)(), {
                    enabled: !!n
                }), {
                    data: c = []
                } = (0, u.gU)(["unopenedAvatarPeeks", n], (0, ze.r)(), {
                    enabled: !!n && !a
                }), {
                    data: h = []
                } = (0, u.gU)(["unopenedAvatarReveals", n], (0, Oe.l)(), {
                    enabled: !!n && a
                }), x = Ve(s, l), f = (0, o.useMemo)((() => x.map((e => ({
                    key: e.tokenId.toString(),
                    imageUrl: e.image,
                    avatar: e,
                    alt: e.tokenId.toString()
                })))), [x]), g = (0, o.useCallback)((({
                    item: t
                }) => (0, r.jsx)(Re, {
                    avatar: t.avatar,
                    onClick: e
                })), [e]), p = (0, o.useCallback)((({
                    item: e
                }) => (0, r.jsx)(nt, {
                    avatar: e.avatar
                })), []);
                return (0, r.jsxs)(ne.VY, {
                    className: "flex flex-col py-6",
                    children: [c.length > 0 && (0, r.jsxs)(be.Z, {
                        children: ["You have avatars to peek!", " ", (0, r.jsx)(L.Z, {
                            href: "/avatars/peek/",
                            className: "text-yellow underline",
                            children: "peek avatars"
                        }), " ", "."]
                    }), h.length > 0 && (0, r.jsxs)(be.Z, {
                        children: ["You have avatars ready to be revealed!", " ", (0, r.jsx)(L.Z, {
                            href: "/avatars/reveal/",
                            className: "text-yellow underline",
                            children: "reveal avatars"
                        }), " ", "."]
                    }), (0, r.jsx)("div", {
                        className: "grow p-6",
                        children: (0, r.jsx)(we.M, {
                            mode: "wait",
                            children: i ? (0, r.jsx)(S.E.div, {
                                className: "flex h-full w-full items-center justify-center",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: .5
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: (0, r.jsx)(J.Z, {
                                    className: "h-[300px] w-[300px]"
                                })
                            }, "loader") : (0, r.jsx)(S.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: .5
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: (0, r.jsx)(je.oM, {
                                    items: f,
                                    size: t,
                                    aspectRatio: 1,
                                    objectFit: "cover",
                                    children: a ? g : p
                                })
                            }, "grid")
                        })
                    })]
                })
            }
            var at = n(99422),
                st = n(48902),
                it = n(93189),
                lt = n(25193),
                ot = n(88665);
            var ct = n(56371),
                dt = n(15482),
                ut = n(30269);
            const ht = e => (0, Ne.NE)((async function*() {
                const t = yield(0, ut.Z)(ot.Ht), n = yield(0, ut.Z)(ot.a8), r = e.map((e => Number(e))), a = await n.peekingCost(), s = yield(e => (0, Ne.NE)((async function*() {
                    const t = yield(0, ke.Kp)();
                    return yield(0, dt.T)("AVATAR_PEEK", {
                        purchaser: null === t || void 0 === t ? void 0 : t.address,
                        tokenIds: e
                    })
                })))(r), i = ct.defaultAbiCoder.encode(["uint256[]", "bytes"], [r, s]);
                return await t.invokeEchelon(n.address, 0, a.mul(r.length), i).then((e => e.hash))
            }));

            function xt() {
                const [{
                    selectedAvatars: e
                }, t] = B(), {
                    data: n
                } = function() {
                    const e = (0, lt.Z)(ot.a8);
                    return (0, it.a)(["pricePerAvatarPeek"], (() => null === e || void 0 === e ? void 0 : e.peekingCost()), {
                        enabled: !!e
                    })
                }(), a = (0, u.sG)((() => ht(e.map((e => e.tokenId)))), {
                    onSuccess: e => {
                        t({
                            type: "ClearSelectedAvatars"
                        }), t(I({
                            hash: e,
                            status: "InProgress"
                        }))
                    },
                    onError: (0, st.c)()
                });
                return (0, r.jsx)(r.Fragment, {
                    children: e.length > 0 && (0, r.jsx)(we.M, {
                        mode: "wait",
                        children: (0, r.jsxs)(S.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: .2
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed bottom-[93px] flex w-screen flex-row items-center justify-between bg-black/60 p-6 uppercase backdrop-blur-sm lg:bottom-0",
                            children: [(0, r.jsxs)("div", {
                                className: "flex flex-col items-center gap-4 md:flex-row md:gap-20",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [(0, r.jsx)("div", {
                                        className: "text-xxs font-semibold tracking-wide text-yellow",
                                        children: "Price Per Peek"
                                    }), (0, r.jsx)(at.Z, {
                                        amount: n,
                                        className: "text-base font-semibold tracking-wide"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col justify-between gap-2 md:flex-row md:gap-6",
                                    children: [(0, r.jsxs)("div", {
                                        className: "text-sm font-semibold tracking-wide text-white/60",
                                        children: ["Selected:", " ", (0, r.jsx)("span", {
                                            className: "text-white",
                                            children: e.length
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "hidden h-[18px] w-px bg-white/20 md:block"
                                    }), (0, r.jsx)("div", {
                                        className: "cursor-pointer text-sm font-semibold tracking-wide text-yellow",
                                        onClick: () => t({
                                            type: "ClearSelectedAvatars"
                                        }),
                                        children: "Clear"
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col gap-8 md:flex-row",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [(0, r.jsx)("div", {
                                        className: "text-xxs font-semibold tracking-wide text-white/40",
                                        children: "You Pay"
                                    }), (0, r.jsx)(at.Z, {
                                        amount: null === n || void 0 === n ? void 0 : n.mul(e.length),
                                        className: "text-base font-semibold tracking-wide"
                                    })]
                                }), (0, r.jsx)($.Z, {
                                    className: "bg-yellow/10 font-semibold backdrop-blur-sm",
                                    onClick: () => a.mutate(),
                                    children: "Pay with wallet"
                                })]
                            })]
                        })
                    })
                })
            }
            var ft = n(33166);

            function mt({
                className: e
            }) {
                const [{
                    query: t
                }, n] = B(), a = (0, o.useCallback)((e => {
                    const t = e.target.value;
                    n(function(e) {
                        return {
                            type: "SetQuery",
                            query: e
                        }
                    }(t))
                }), [n]);
                return (0, r.jsx)(ft.Z, {
                    className: e,
                    value: t,
                    onChange: a,
                    placeholder: "Search by id"
                })
            }

            function gt({
                onSelectAvatar: e
            }) {
                const t = (0, ee.ZP)(m.GF);
                return (0, r.jsxs)(ne.fC, {
                    className: "relative z-0",
                    children: [(0, r.jsxs)(ne.hy, {
                        className: "fixed inset-x-0 bottom-0 z-10 flex items-center border-t border-white/20 bg-black p-6 lg:static lg:w-[400px] lg:border-t-0 lg:border-b lg:pt-0",
                        children: [t && (0, r.jsx)(me, {}), (0, r.jsx)(ve, {})]
                    }), (0, r.jsxs)(ne.h4, {
                        className: "flex w-full flex-wrap items-end gap-8 border-b border-white/20 p-6",
                        children: [(0, r.jsx)(mt, {
                            className: "basis-[400px] p-4"
                        }), !t && (0, r.jsxs)("div", {
                            className: "flex grow basis-[400px] justify-between gap-6",
                            children: [(0, r.jsx)(de, {}), (0, r.jsx)(te.Z, {
                                href: (0, k.Z)("parallel-avatars/drop"),
                                external: !0,
                                children: "Buy Avatars"
                            })]
                        })]
                    }), (0, r.jsx)(ne.XN, {
                        className: "flex self-end border-b border-white/20 lg:p-6",
                        children: (0, r.jsx)(le, {
                            className: "hidden self-center lg:flex"
                        })
                    }), t && (0, r.jsx)(he, {}), (0, r.jsx)(rt, {
                        onSelectAvatar: e
                    }), (0, r.jsx)(xt, {})]
                })
            }

            function pt() {
                const [e, t] = (0, o.useState)(null), [{
                    peekTransaction: n
                }] = B(), [a] = (0, d.Z)(), s = (0, c.Z)(m.GF), {
                    data: i
                } = (0, u.gU)(["wallet", null === a || void 0 === a ? void 0 : a.address, "initialPeeks"], (0, g.E)(), {
                    enabled: !!a && !s
                }), l = "Success" === (null === n || void 0 === n ? void 0 : n.status) ? h.Y7.Green : h.Y7.Yellow;
                return (0, r.jsx)(r.Fragment, {
                    children: "NotStarted" !== n.status && i ? (0, r.jsx)(h.ZP, {
                        background: h.Jm.Avatars,
                        backgroundColor: l,
                        children: (0, r.jsx)(Q, {
                            initialPeeks: i
                        })
                    }) : (0, r.jsxs)(x.Z, {
                        children: [(0, r.jsx)(gt, {
                            onSelectAvatar: e => {
                                t(e)
                            }
                        }), e && (0, r.jsx)(f.fC, {
                            open: !0,
                            onOpenChange: e => !e && t(null),
                            children: (0, r.jsx)(F, {
                                avatar: e
                            })
                        })]
                    })
                })
            }
            var vt = !0;

            function wt() {
                i.ZP.send({
                    hitType: "pageview",
                    page: "/avatars"
                });
                const e = (0, l.Z)("(min-width: 1024px)");
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(s(), {
                        children: [(0, r.jsx)("title", {
                            children: "Avatars | Parallel"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "Have a look at your Parallel Avatars."
                        })]
                    }), (0, r.jsx)(H, {
                        initial: {
                            isFilterBarOpen: e
                        },
                        children: (0, r.jsx)(pt, {})
                    })]
                })
            }
        },
        38295: function(e, t, n) {
            "use strict";

            function r(e) {
                return new Promise((t => window.setTimeout(t, e)))
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        99793: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return a
                },
                G: function() {
                    return s
                }
            });
            var r = n(85893);
            class a extends Error {
                constructor() {
                    super("Cancelled")
                }
            }

            function s(e) {
                return async ({
                    render: t
                }) => {
                    try {
                        return await new Promise(((n, s) => {
                            t((0, r.jsx)(e, {
                                onSubmit: n,
                                onCancel: () => s(new a)
                            }))
                        }))
                    } finally {
                        t(null)
                    }
                }
            }
        }
    },
    function(e) {
        e.O(0, [296, 5675, 104, 4113, 2309, 8972, 9874, 2126, 1027, 9626, 9774, 2888, 179], (function() {
            return t = 21413, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);