"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9874], {
        49874: function(e, s, t) {
            t.d(s, {
                Z: function() {
                    return q
                }
            });
            var l, i = t(85893),
                a = t(67294),
                n = t(2593),
                r = t(92010),
                c = t(41664),
                d = t.n(c),
                o = t(86010),
                x = t(10154),
                u = t(78326),
                h = t(66155),
                m = t(14603),
                f = t(20185),
                v = t(74648),
                w = t(96959),
                j = t(70369),
                p = t(99422),
                g = t(82070),
                b = t(60066);

            function N() {
                return N = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var t = arguments[s];
                        for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
                    }
                    return e
                }, N.apply(this, arguments)
            }
            var y = e => a.createElement("svg", N({
                xmlns: "http://www.w3.org/2000/svg",
                width: 10,
                height: 10,
                viewBox: "0 0 10 10",
                fill: "none"
            }, e), l || (l = a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5 10c.435 0 .857-.056 1.259-.16l-.284-1.623a1.32 1.32 0 0 0-1.073-1.073L2.31 6.69c-.088-.015-.088-.142 0-.158l2.59-.453a1.32 1.32 0 0 0 1.074-1.074l.453-2.59c.016-.089.143-.089.158 0l.454 2.59A1.32 1.32 0 0 0 8.113 6.08l1.695.296A5 5 0 1 0 5 10Zm4.636-3.123a5.016 5.016 0 0 1-2.85 2.795l.254-1.455a1.32 1.32 0 0 1 1.073-1.073l1.523-.267Zm-5.382-3.39a.758.758 0 1 1-1.515 0 .758.758 0 0 1 1.515 0Z",
                fill: "#18E6F7"
            })));

            function Z({
                amount: e,
                noText: s = !1,
                noLogo: t = !1,
                logo: l = (t ? null : (0, i.jsx)(y, {
                    className: "shrink-0 text-yellow"
                })),
                text: n = (s ? "" : "GLINTS"),
                className: r
            }) {
                const c = (0, a.useRef)(null);
                return (0, i.jsxs)("div", {
                    className: (0, o.Z)("inline-flex items-center", r),
                    ref: c,
                    children: [l, !t && (0, i.jsx)(i.Fragment, {
                        children: "\xa0"
                    }), (0, i.jsx)("span", {
                        children: void 0 === (null === e || void 0 === e ? void 0 : e.balance) ? "--" : e.balance
                    }), !s && (0, i.jsx)(i.Fragment, {
                        children: "\xa0"
                    }), n]
                })
            }
            var k = t(82664),
                C = t(31778),
                P = t(56155),
                _ = t(38717),
                E = t(66186),
                O = t(53769),
                V = t(70603),
                W = t(93946);

            function q({
                className: e,
                blur: s = !1
            }) {
                var t;
                const {
                    user: l
                } = (0, x.ZP)(), [c, N] = (0, a.useState)(null), [q, F] = (0, a.useState)(null), [S, A] = (0, m.Z)(), T = (0, u.Z)(c), B = (0, h.ZP)("glint_topnav"), D = (0, h.ZP)("avatar_landing"), {
                    data: I = n.O$.from(0)
                } = (0, P.J)(), K = null === (t = (0, f.Z)()) || void 0 === t ? void 0 : t.url;
                return (0, i.jsxs)(v.fC, {
                    open: !!q,
                    onOpenChange: () => F(null),
                    modal: !1,
                    children: [(0, i.jsxs)("nav", {
                        className: (0, o.Z)("relative flex justify-between border-b border-white/25 p-6 lg:grid lg:grid-cols-[minmax(auto,_14rem)_1fr_auto] lg:py-0", s && "bg-black/60 backdrop-blur-sm", e),
                        ref: N,
                        children: [(0, i.jsxs)("div", {
                            className: "flex gap-6",
                            children: [(0, i.jsx)("div", {
                                className: "flex justify-start",
                                children: (0, i.jsx)(E.Z, {
                                    onClick: () => F(q && "nav" === q ? null : "nav"),
                                    showClose: "nav" === q
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex items-center lg:hidden",
                                children: (0, i.jsx)(j.Z, {
                                    href: "/"
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "relative items-center justify-between hidden px-8 py-10 lg:flex lg:flex-row",
                            children: [(0, i.jsxs)("div", {
                                className: "absolute right-0 flex-col justify-between hidden h-full lg:flex",
                                children: [(0, i.jsx)("div", {
                                    className: "w-px h-1 bg-white/20"
                                }), (0, i.jsx)("div", {
                                    className: "w-px h-4 bg-white/20"
                                }), (0, i.jsx)("div", {
                                    className: "w-px h-1 bg-white/20"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "flex items-center gap-[4.75rem]",
                                children: [(0, i.jsx)(j.Z, {
                                    href: "/"
                                }), D && (0, i.jsx)("div", {
                                    className: "relative",
                                    children: (0, i.jsx)(d(), {
                                        onClick: () => (0, _.Z)("/avatars/"),
                                        href: "/avatars/",
                                        className: "flex items-center h-3 p-2 text-sm font-semibold tracking-wide text-black uppercase whitespace-nowrap bg-yellow transition-colors hover:bg-white",
                                        children: "Avatars"
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: "hidden w-16 md:block"
                            }), (0, i.jsxs)("div", {
                                className: "items-center hidden gap-8 md:flex",
                                children: [S && B && (0, i.jsxs)("div", {
                                    className: "flex flex-col justify-between gap-2.5",
                                    children: [(0, i.jsx)("div", {
                                        className: "ml-5 font-semibold tracking-wide uppercase text-3xs text-white/60",
                                        children: "Balance"
                                    }), (0, i.jsx)("div", {
                                        className: "tracking-wide uppercase col-start-2 row-start-2",
                                        children: (0, i.jsx)(Z, {
                                            amount: {
                                                balance: 0
                                            },
                                            logo: (0, i.jsx)(y, {
                                                className: "h-2.5 w-2.5 text-yellow"
                                            })
                                        })
                                    })]
                                }), S && (0, i.jsxs)("div", {
                                    className: "flex flex-col justify-between gap-2.5",
                                    children: [(0, i.jsx)("div", {
                                        className: "ml-5 font-semibold tracking-wide uppercase text-3xs text-white/60",
                                        children: "Balance"
                                    }), (0, i.jsx)("div", {
                                        className: "tracking-wide uppercase col-start-2 row-start-2",
                                        children: I && (0, i.jsx)(p.Z, {
                                            amount: n.O$.from(I),
                                            logo: (0, i.jsx)(b.Z, {
                                                className: "h-2.5 w-2.5 text-yellow"
                                            })
                                        })
                                    })]
                                }), !l && !S && (0, i.jsxs)("div", {
                                    className: "flex flex-col justify-between gap-2.5",
                                    children: [(0, i.jsx)(r.Vd, {
                                        id: "account",
                                        children: (0, i.jsx)("div", {
                                            className: "font-semibold tracking-wide uppercase text-3xs text-white/60",
                                            children: "Account"
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "flex gap-8",
                                        children: [(0, i.jsx)(r.Vd, {
                                            id: "sign-in",
                                            children: (0, i.jsx)(d(), {
                                                className: "text-base tracking-wide uppercase whitespace-nowrap text-yellow hover:text-white",
                                                href: "/login/",
                                                children: "Sign In"
                                            })
                                        }), (0, i.jsx)(r.Vd, {
                                            id: "sign-up",
                                            children: (0, i.jsx)(d(), {
                                                className: "text-base tracking-wide uppercase whitespace-nowrap text-yellow hover:text-white",
                                                href: "/signup/",
                                                children: "Sign Up"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center justify-between pl-8 min-[1270px]:w-[30rem]",
                            children: [(0, i.jsxs)("div", {
                                className: "hidden flex-col justify-between gap-y-2.5 lg:flex",
                                children: [(0, i.jsx)(r.Vd, {
                                    id: "wallet",
                                    children: (0, i.jsx)("div", {
                                        className: "ml-5 font-semibold tracking-wide uppercase text-3xs text-white/60",
                                        children: "Wallet"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "flex items-center gap-2 text-3xs",
                                    children: [S && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)("div", {
                                            className: "h-2.5 w-2.5 rounded-full bg-green"
                                        }), (0, i.jsx)("button", {
                                            onClick: A,
                                            children: (0, i.jsx)(g.Z, {
                                                address: null === S || void 0 === S ? void 0 : S.address,
                                                className: "text-base tracking-wide uppercase "
                                            })
                                        })]
                                    }), !S && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)("div", {
                                            className: "h-2.5 w-2.5 rounded-full bg-white/20"
                                        }), (0, i.jsx)(r.Vd, {
                                            id: "connect",
                                            children: (0, i.jsx)("button", {
                                                className: "text-base tracking-wide uppercase text-yellow hover:text-white",
                                                onClick: A,
                                                children: "Connect"
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: "w-10"
                            }), (0, i.jsxs)("div", {
                                className: "flex items-center justify-between gap-5",
                                children: [(0, i.jsx)(k.Z, {
                                    onClick: () => F(null),
                                    type: "outline",
                                    className: "w-12 h-12 p-2 lg:h-14 lg:w-14"
                                }), (0, i.jsx)("div", {
                                    className: "flex items-center",
                                    onClick: () => F(q && "profile" === q ? null : "profile"),
                                    children: (0, i.jsx)(w.Z, {
                                        src: K,
                                        size: "auto",
                                        shape: "square",
                                        className: "w-12 h-12 border border-white/30 hover:cursor-pointer lg:h-14 lg:w-14"
                                    })
                                })]
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "relative h-4 bg-white/4",
                        children: [(0, i.jsx)("div", {
                            className: "absolute bottom-full right-0 h-[3px] w-2 bg-white/80"
                        }), (0, i.jsx)("div", {
                            className: "absolute w-2 h-px bottom-full left-6 bg-white/80"
                        }), (0, i.jsx)("div", {
                            className: "absolute bottom-full right-[7.875rem] h-px w-2 bg-white/80"
                        })]
                    }), (0, i.jsx)(v.h_, {
                        children: (0, i.jsx)(v.VY, {
                            onInteractOutside: e => e.preventDefault(),
                            children: (0, i.jsxs)("div", {
                                className: "fixed inset-0 overflow-x-hidden overflow-y-auto",
                                style: {
                                    top: null === T || void 0 === T ? void 0 : T.height
                                },
                                children: ["nav" === q && (0, i.jsxs)(O.Z, {
                                    breadcrumb: "Open",
                                    children: [(0, i.jsx)("div", {
                                        className: "col-start-2 row-start-3 mb-7",
                                        children: (0, i.jsx)(V.Z, {})
                                    }), (0, i.jsx)("div", {
                                        className: "ml-8 col-start-2 row-start-4 mt-9",
                                        children: (0, i.jsx)(C.Z, {
                                            className: "mb-20"
                                        })
                                    })]
                                }), "profile" === q && (0, i.jsx)(O.Z, {
                                    breadcrumb: "Profile",
                                    children: (0, i.jsx)(W.Z, {
                                        className: "relative col-start-2 row-span-2 row-start-2 lg:col-start-3"
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        56155: function(e, s, t) {
            t.d(s, {
                J: function() {
                    return c
                }
            });
            var l = t(15177),
                i = t(26358),
                a = t(73666),
                n = t(30269),
                r = t(88665);
            const c = (0, l.Z)(["getPrimeBalance"], (function() {
                return (0, i.NE)((async function*() {
                    const e = yield(0, a.Kp)(), s = yield(0, n.Z)(r.Ht);
                    if (!s) throw new Error("This feature is not supported on the current network.");
                    return await s.balanceOf(null === e || void 0 === e ? void 0 : e.address)
                }))
            }), {
                staleTime: 6e4
            })
        },
        40455: function(e, s, t) {
            t.d(s, {
                W: function() {
                    return r
                },
                Z: function() {
                    return n
                }
            });
            var l = t(48494),
                i = t(3223),
                a = t(84992);

            function n() {
                return (0, a.AV)((0, a.WY)(`/api/v1/contracts/?networks=${i.Nc.toString()}`))
            }
            const r = (0, l.Z)(["contracts"], n, {
                staleTime: 1 / 0,
                enabled: !0
            })
        },
        30269: function(e, s, t) {
            t.d(s, {
                Z: function() {
                    return r
                }
            });
            var l = t(26358),
                i = t(60302),
                a = t(73666),
                n = t(40455);

            function r(e, s = {}) {
                return (0, l.NE)((async function*() {
                    var t;
                    const l = yield(0, a.Wn)(), r = yield(0, i.Wd)(n.W, []);
                    if (!l || !r) return;
                    const c = null === (t = r[l]) || void 0 === t ? void 0 : t[e.key];
                    return c ? yield(0, a.vd)(c, e, s): void 0
                }))
            }
        },
        60302: function(e, s, t) {
            t.d(s, {
                Wd: function() {
                    return i
                }
            });
            var l = t(26358);

            function i(e, s) {
                return (0, l.NE)((async function*() {
                    const t = yield(l = [...e.queryKeyPrefix, ...s], ({
                        queryClient: e
                    }) => Promise.resolve(e.getQueryData(l, {
                        exact: !0,
                        stale: !1
                    })));
                    var l;
                    if (void 0 !== t) return t;
                    const i = yield e.requestFactory(...s);
                    return yield function(e, s) {
                        return ({
                            queryClient: t
                        }) => (t.setQueryData(e, s), Promise.resolve())
                    }([...e.queryKeyPrefix, ...s], i), i
                }))
            }
        }
    }
]);