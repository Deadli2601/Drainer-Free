"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9626], {
        46467: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return o
                }
            });
            var r = t(85893),
                i = t(86010),
                l = t(26218),
                s = t(86986),
                a = t(51574);

            function c({
                disabled: e,
                selected: n,
                faction: t,
                onClick: l
            }) {
                return (0, r.jsx)("button", {
                    disabled: e,
                    className: (0, i.Z)("border border-white/30 p-2 disabled:text-white/40 [&:not(:disabled)]:cursor-pointer [&:not(:disabled)]:hover:bg-white/20", n ? "bg-yellow text-black [&:not(:disabled)]:hover:bg-yellow/80" : "text-white [&:not(:disabled)]:hover:bg-white/20"),
                    onClick: l,
                    children: (0, r.jsx)(a.Z, {
                        className: "h-full w-full",
                        faction: t
                    })
                })
            }

            function o({
                value: e,
                className: n,
                options: t,
                onChange: a
            }) {
                function o(n) {
                    return () => a((0, s.Z)(n, e))
                }
                return (0, r.jsxs)("div", {
                    className: (0, i.Z)("grid grid-cols-6 gap-2", n),
                    children: [(0, r.jsx)(c, {
                        disabled: t && !t.includes(l.Z.Augencore),
                        selected: e.includes(l.Z.Augencore),
                        faction: l.Z.Augencore,
                        onClick: o(l.Z.Augencore)
                    }), (0, r.jsx)(c, {
                        disabled: t && !t.includes(l.Z.Kathari),
                        selected: e.includes(l.Z.Kathari),
                        faction: l.Z.Kathari,
                        onClick: o(l.Z.Kathari)
                    }), (0, r.jsx)(c, {
                        disabled: t && !t.includes(l.Z.Earthen),
                        selected: e.includes(l.Z.Earthen),
                        faction: l.Z.Earthen,
                        onClick: o(l.Z.Earthen)
                    }), (0, r.jsx)(c, {
                        disabled: t && !t.includes(l.Z.Shroud),
                        selected: e.includes(l.Z.Shroud),
                        faction: l.Z.Shroud,
                        onClick: o(l.Z.Shroud)
                    }), (0, r.jsx)(c, {
                        disabled: t && !t.includes(l.Z.Marcolian),
                        selected: e.includes(l.Z.Marcolian),
                        faction: l.Z.Marcolian,
                        onClick: o(l.Z.Marcolian)
                    }), (0, r.jsx)(c, {
                        disabled: t && !t.includes(l.Z.Universal),
                        selected: e.includes(l.Z.Universal),
                        faction: l.Z.Universal,
                        onClick: o(l.Z.Universal)
                    })]
                })
            }
        },
        66453: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var r = t(85893),
                i = t(92010),
                l = t(86010),
                s = t(54412),
                a = t(90881);

            function c({
                className: e
            }) {
                const n = new Date;
                return (0, r.jsxs)("footer", {
                    className: (0, l.Z)("flex w-screen flex-col justify-between gap-6 whitespace-nowrap px-14 pb-14 pt-6 text-xs uppercase tracking-wide", e),
                    children: [(0, r.jsxs)("div", {
                        className: "flex w-full grid-cols-vertical-sandwich flex-col items-center gap-y-2 gap-x-6 lg:grid",
                        children: [(0, r.jsxs)("div", {
                            className: "order-2 flex flex-row gap-2",
                            children: [(0, r.jsx)(i.Vd, {
                                id: "footer-privacy-policy",
                                children: (0, r.jsx)(s.Z, {
                                    className: "font-semibold",
                                    color: s.M.White,
                                    href: "/privacy-policy/",
                                    children: "Privacy Policy"
                                })
                            }), (0, r.jsx)("span", {
                                className: "text-white/60",
                                children: "//"
                            }), (0, r.jsx)(i.Vd, {
                                id: "footer-terms",
                                children: (0, r.jsx)(s.Z, {
                                    className: "font-semibold",
                                    color: s.M.White,
                                    href: "/terms-of-use/",
                                    children: "Terms of Use"
                                })
                            })]
                        }), (0, r.jsx)(i.Vd, {
                            id: "footer-copyright",
                            vars: {
                                date: n
                            },
                            children: (0, r.jsxs)("div", {
                                className: "order-1 text-white/60 lg:order-2",
                                children: ["\xa9 Copyright ", (new Date).getFullYear(), " Parallel Studios"]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "order-2 flex flex-row gap-2 lg:justify-end",
                            children: [(0, r.jsx)(s.Z, {
                                className: "font-semibold",
                                color: s.M.White,
                                href: "https://discord.gg/paralleltcg",
                                externalLink: !0,
                                children: "Discord"
                            }), (0, r.jsx)("span", {
                                className: "text-white/60",
                                children: "//"
                            }), (0, r.jsx)(s.Z, {
                                className: "font-semibold",
                                color: s.M.White,
                                href: "https://twitter.com/paralleltcg/",
                                externalLink: !0,
                                children: "Twitter"
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex w-full flex-row justify-between",
                        children: [(0, r.jsx)(a.Z, {
                            className: "bg-white/40",
                            length: a.Q.Long
                        }), (0, r.jsx)(a.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: a.Q.Short
                        }), (0, r.jsx)("div", {}), (0, r.jsx)(a.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: a.Q.Short
                        }), (0, r.jsx)(a.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: a.Q.Short
                        }), (0, r.jsx)(a.Z, {
                            className: "bg-white/40",
                            length: a.Q.Short
                        })]
                    })]
                })
            }
        },
        6843: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return r.Z
                }
            });
            var r = t(66453)
        },
        33879: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return u
                }
            });
            var r = t(85893),
                i = t(86010),
                l = t(91026),
                s = t(67294);
            const a = (0, s.createContext)({
                name: ""
            });

            function c({
                name: e,
                value: n,
                onChange: t,
                children: i
            }) {
                return (0, r.jsx)(a.Provider, {
                    value: {
                        name: e,
                        value: n,
                        onChange: t
                    },
                    children: i
                })
            }
            var o = t(51756);

            function d({
                value: e,
                disabled: n = !1,
                children: t
            }) {
                const {
                    name: l,
                    value: c,
                    onChange: d
                } = (0, s.useContext)(a), u = e === c;
                return (0, r.jsxs)("label", {
                    className: (0, i.Z)("group relative flex aspect-square w-min shrink-0 items-center justify-center border p-1 transition-colors duration-100", n && "opacity-40", !u && !n && "cursor-pointer border-white/30 bg-transparent text-white hover:border-white", u && !n && "cursor-pointer border-transparent bg-white text-black hover:bg-white/80"),
                    children: [u && (0, r.jsx)(o.Z, {
                        className: "at-x-center absolute bottom-full -translate-y-1 text-white"
                    }), t, (0, r.jsx)("input", {
                        name: l,
                        type: "radio",
                        value: e,
                        className: "hidden",
                        onChange: d,
                        disabled: n
                    })]
                })
            }

            function u({
                options: e = [l.z.S, l.z.M, l.z.L],
                className: n,
                value: t,
                onChange: s
            }) {
                return (0, r.jsx)("div", {
                    className: (0, i.Z)("flex gap-2 text-sm font-semibold", n),
                    children: (0, r.jsxs)(c, {
                        name: "cardSize",
                        value: t,
                        onChange: e => null === s || void 0 === s ? void 0 : s(e.target.value),
                        children: [(0, r.jsx)(d, {
                            value: l.z.S,
                            disabled: !e.includes(l.z.S),
                            children: (0, r.jsx)("div", {
                                className: "flex aspect-square h-5 items-center justify-center",
                                children: "S"
                            })
                        }), (0, r.jsx)(d, {
                            value: l.z.M,
                            disabled: !e.includes(l.z.M),
                            children: (0, r.jsx)("div", {
                                className: "flex aspect-square h-5 items-center justify-center",
                                children: "M"
                            })
                        }), (0, r.jsx)(d, {
                            value: l.z.L,
                            disabled: !e.includes(l.z.L),
                            children: (0, r.jsx)("div", {
                                className: "flex aspect-square h-5 items-center justify-center",
                                children: "L"
                            })
                        })]
                    })
                })
            }
        },
        39881: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var r = t(85893),
                i = t(86010),
                l = t(17023),
                s = t(6843),
                a = t(49874);

            function c({
                className: e,
                children: n
            }) {
                const {
                    bottom: t
                } = (0, l.ZP)();
                return (0, r.jsxs)("div", {
                    className: (0, i.Z)("relative isolate flex min-h-screen flex-col", e),
                    children: [(0, r.jsx)(a.Z, {}), (0, r.jsx)("main", {
                        className: "z-0 flex grow flex-col",
                        children: n
                    }), (0, r.jsx)(s.Z, {}), t > 0 && (0, r.jsx)("div", {
                        style: {
                            height: t
                        }
                    })]
                })
            }
        },
        42849: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return r.Z
                }
            });
            var r = t(39881)
        },
        58970: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return p
                }
            });
            var r = t(85893),
                i = t(67294),
                l = t(86010),
                s = t(78963),
                a = t(82070),
                c = t(24090),
                o = t(57036),
                d = t(65338),
                u = t(87836),
                h = t(33555),
                f = t(41803),
                x = t(85721);

            function p({
                value: e,
                onChange: n,
                disabled: t,
                optional: p = !1,
                onlySaved: g = !1
            }) {
                const [m] = (0, s.Z)(), {
                    data: v = []
                } = (0, x.c)(), {
                    data: b = []
                } = (0, f.n)(), w = g ? b : v;

                function j(e) {
                    n(e), y(!1)
                }
                const [Z, y] = (0, i.useState)(!1);
                return (0, r.jsxs)(d.ZP, {
                    open: Z,
                    onOpenChange: y,
                    children: [(0, r.jsx)(d.Sq, {
                        asChild: !0,
                        className: "uppercase",
                        disabled: t,
                        children: (0, r.jsx)(c.zx, {
                            children: (null === e || void 0 === e ? void 0 : e[0]) ? (0, r.jsx)(a.Z, {
                                address: null === e || void 0 === e ? void 0 : e[0]
                            }) : "All Wallets"
                        })
                    }), (0, r.jsx)(d.DM, {
                        children: (0, r.jsxs)(d.WG, {
                            children: [p && (0, r.jsx)(o.PS, {
                                className: (0, l.Z)("flex flex-row justify-between gap-2 text-center", !e && "bg-gray-400/95"),
                                onClick: () => j(null),
                                children: "All Wallets"
                            }), w.map((({
                                address: n
                            }) => (0, r.jsxs)(o.PS, {
                                className: (0, l.Z)("flex flex-row justify-between gap-2 normal-case", (null === e || void 0 === e ? void 0 : e.includes(n)) && "bg-gray-400/95"),
                                onClick: () => j([n]),
                                children: [(0, r.jsx)(a.Z, {
                                    address: n
                                }), (0, h.Z)(null === m || void 0 === m ? void 0 : m.address, n) && (0, r.jsx)(u.Z, {
                                    children: "Connected"
                                })]
                            }, n)))]
                        })
                    })]
                })
            }
        },
        76084: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return s
                }
            });
            var r, i = t(67294);

            function l() {
                return l = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            var s = e => i.createElement("svg", l({
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.667 5.834H3.333V4.167h13.334v1.667Zm-2.5 5H5.833V9.167h8.334v1.667Zm-2.5 5H8.333v-1.667h3.334v1.667Z",
                fill: "currentColor"
            })))
        },
        49693: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return s
                }
            });
            var r = t(85893),
                i = t(67294),
                l = t(86010);

            function s({
                children: e,
                className: n
            }) {
                const [t, s] = (0, i.useState)(!1);
                return t ? null : (0, r.jsxs)("div", {
                    className: (0, l.Z)("mx-6 flex flex-row justify-between gap-4 border-l-2 border-yellow bg-white/20 py-2 px-4 text-xs font-semibold uppercase tracking-wider", n),
                    children: [(0, r.jsx)("span", {
                        children: e
                    }), (0, r.jsx)("button", {
                        className: "text-xs font-semibold uppercase tracking-wider hover:text-yellow",
                        onClick: () => s(!0),
                        children: "Dismiss"
                    })]
                })
            }
        },
        85603: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var r = t(85893),
                i = t(86010),
                l = t(94122);

            function s(e, n) {
                if (!n) return "round" === e ? "rounded-full border border-white/30" : "";
                switch (e) {
                    case "square":
                        return "bg-yellow text-black";
                    case "round":
                        return "rounded-full border-2 border-white"
                }
            }

            function a({
                checked: e = !1,
                onChange: n,
                className: t = "h-[18px]",
                appearance: a = "square",
                children: c
            }) {
                return (0, r.jsxs)("label", {
                    className: t,
                    children: [(0, r.jsxs)("div", {
                        className: (0, i.Z)("flex aspect-square h-full shrink-0 cursor-pointer items-center justify-center border border-white/40", s(a, e)),
                        children: ["square" === a && e && (0, r.jsx)(l.Z, {}), "round" === a && e && (0, r.jsx)("div", {
                            className: "h-2 w-2 rounded-full bg-white"
                        }), (0, r.jsx)("input", {
                            type: "checkbox",
                            className: "pointer-events-none absolute h-0 w-0 opacity-0",
                            checked: e,
                            onChange: e => null === n || void 0 === n ? void 0 : n(e)
                        })]
                    }), c]
                })
            }
        },
        65338: function(e, n, t) {
            t.d(n, {
                WG: function() {
                    return s
                },
                Qx: function() {
                    return r.ck
                },
                DM: function() {
                    return r.Uv
                },
                Sq: function() {
                    return r.xz
                },
                ZP: function() {
                    return r.h_
                }
            });
            var r = t(84113),
                i = t(85893),
                l = t(86010);

            function s({
                className: e,
                side: n = "bottom",
                sideOffset: t = 8,
                align: s = "end",
                ...a
            }) {
                return (0, i.jsx)(r.AW, {
                    className: (0, l.Z)("flex flex-col text-xs font-semibold uppercase tracking-wide", e),
                    side: n,
                    sideOffset: t,
                    align: s,
                    ...a
                })
            }
        },
        87836: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return s
                }
            });
            var r = t(85893),
                i = t(86010);

            function l(e) {
                switch (e) {
                    case "green":
                        return "text-green bg-green/20";
                    case "red":
                        return "text-red bg-red/20"
                }
            }

            function s({
                color: e = "green",
                children: n
            }) {
                return (0, r.jsx)("p", {
                    className: (0, i.Z)("h-[14px] min-w-[70px] whitespace-nowrap py-[4px] px-[2px] text-center align-middle text-3xs font-semibold uppercase leading-none tracking-wider", l(e)),
                    children: n
                })
            }
        },
        3093: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = t(85893),
                i = t(86010);

            function l({
                checked: e,
                onChange: n,
                className: t,
                disabled: l = !1,
                children: s
            }) {
                return (0, r.jsxs)("label", {
                    className: (0, i.Z)(!l && "cursor-pointer", t),
                    children: [(0, r.jsx)("input", {
                        type: "checkbox",
                        className: "peer hidden",
                        checked: e,
                        onChange: n,
                        disabled: l
                    }), s, (0, r.jsx)("div", {
                        className: "relative inline-flex h-[22px] w-[48px] shrink-0 cursor-pointer bg-white transition-all duration-200 ease-in-out peer-checked:bg-yellow peer-checked:pl-[26px] peer-disabled:cursor-auto peer-disabled:bg-gray",
                        children: (0, r.jsx)("div", {
                            className: "pointer-events-none m-[2px] inline-block h-[18px] w-[18px] bg-black duration-200 ease-in-out"
                        })
                    })]
                })
            }
        },
        1062: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return r.Z
                }
            });
            var r = t(3093)
        },
        91707: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var r = t(85893),
                i = t(67294),
                l = t(86010),
                s = t(51756),
                a = (0, i.forwardRef)((function({
                    label: e,
                    onChange: n,
                    className: t,
                    children: i,
                    active: a,
                    noCarrot: c = !1,
                    disabled: o = !1
                }, d) {
                    return (0, r.jsxs)("button", {
                        ref: d,
                        disabled: o,
                        onClick: () => null === n || void 0 === n ? void 0 : n(!a),
                        className: (0, l.Z)("group relative flex aspect-square w-min shrink-0 items-center justify-center border p-1 transition-colors duration-100", e && "mb-[calc(10px+0.5rem)]", a ? "border-transparent bg-white text-black hover:bg-white/80" : "border-white/30 bg-transparent text-white hover:border-white", t),
                        children: [!c && a && (0, r.jsx)(s.Z, {
                            className: "at-x-center absolute bottom-full -translate-y-1 text-white"
                        }), i, e && (0, r.jsx)("div", {
                            className: "absolute top-full mt-2 text-xxs font-semibold uppercase tracking-wider text-white",
                            children: e
                        })]
                    })
                }))
        },
        52817: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return r.Z
                }
            });
            var r = t(45871)
        },
        45871: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var r = t(78963),
                i = t(3223),
                l = t(20290),
                s = t(40455);

            function a(e, {
                defaultChainId: n
            } = {
                defaultChainId: null
            }) {
                var t;
                const [a] = (0, r.Z)(), {
                    data: c
                } = (0, s.W)(), o = (null === a || void 0 === a ? void 0 : a.chainId) ? ? n;
                if (!o || !i.Nc.includes(o)) return;
                const d = null === c || void 0 === c || null === (t = c[o]) || void 0 === t ? void 0 : t[e.key];
                if (!d) {
                    const n = i.Nc.filter((n => {
                        var t;
                        return null === c || void 0 === c || null === (t = c[n]) || void 0 === t ? void 0 : t[e.key]
                    }));
                    let t = `${e.key} contract not found on ${(0,l.q)(o)}.`;
                    if (n.length > 0) {
                        t = `${t}. Try ${n.map((e=>(0,l.q)(e))).join(", ")} instead.`
                    }
                    console.error(t)
                }
                return d
            }
        },
        35576: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return f
                }
            });
            var r = t(85893),
                i = t(28813),
                l = t(26358),
                s = t(73666),
                a = t(99793),
                c = t(84992),
                o = t(54412),
                d = t(11965);

            function u({
                isMultiSig: e,
                onAccept: n
            }) {
                return (0, r.jsxs)(d.fC, {
                    children: [(0, r.jsx)(d.Dx, {
                        children: "Verify Wallet"
                    }), e ? (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("div", {
                            className: "flex max-w-measure flex-col gap-2 text-sm font-light tracking-wide",
                            children: (0, r.jsxs)("p", {
                                children: ["We have detected that you are using a multi-signature wallet. In order to verify your wallet please reach out to", " ", (0, r.jsx)("a", {
                                    className: "text-yellow",
                                    href: "mailto:support@parallelnft.com",
                                    children: "support@parallelnft.com"
                                }), ". We apologize for the inconvenience and are currently working on improvements for our multi-sig wallet users."]
                            })
                        })
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "flex max-w-measure flex-col gap-2 text-sm font-light tracking-wide",
                            children: (0, r.jsxs)("p", {
                                children: ["Click to sign a message to prove ownership of your wallet. By doing so you accept our", " ", (0, r.jsx)(o.Z, {
                                    href: "https://parallel.life/terms-of-use/",
                                    children: "Terms of Use"
                                }), ". This request will not trigger a blockchain transaction and will not cost anything. To keep yourself safe, always confirm you're on", " ", (0, r.jsx)(o.Z, {
                                    href: "https://parallel.life",
                                    children: "https://parallel.life"
                                }), "."]
                            })
                        }), (0, r.jsxs)(d.eX, {
                            children: [(0, r.jsx)(d.zx, {
                                color: "white",
                                children: "Cancel"
                            }), (0, r.jsx)(d.zx, {
                                appearance: "solid",
                                onClick: n,
                                children: "Accept & Sign"
                            })]
                        })]
                    })]
                })
            }
            const h = (0, l.lx)((e => (0, l.NE)((async function*() {
                const n = yield(0, s.Kp)(), t = await n.isMultiSigWallet();
                yield(0, a.G)((function({
                    onSubmit: e,
                    onCancel: n
                }) {
                    return (0, r.jsx)(i.fC, {
                        open: !0,
                        onOpenChange: n,
                        children: (0, r.jsx)(u, {
                            onAccept: () => e(),
                            isMultiSig: t
                        })
                    })
                }));
                const l = await n.signMessage(`Connect to parallel.life with wallet ${e}`);
                yield(0, c.ok)(function(e) {
                    return (0, c.Yi)("/connect-wallet/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            signature: e
                        })
                    })
                }(l))
            }))));

            function f(e) {
                return (0, l.NE)((async function*() {
                    const n = yield e;
                    if (412 === n.status) {
                        const {
                            message_text: t
                        } = await n.json();
                        return yield h(t), yield e
                    }
                    return n
                }))
            }
        },
        86986: function(e, n, t) {
            function r(e, n) {
                return n.includes(e) ? n.filter((n => n !== e)) : [...n, e]
            }
            t.d(n, {
                Z: function() {
                    return r
                }
            })
        },
        74164: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return s
                }
            });
            var r = t(34779),
                i = t(45621),
                l = t(1816);

            function s(e, n) {
                var t, s;
                const a = null === (t = r.s[e]) || void 0 === t || null === (s = t.blockExplorers) || void 0 === s ? void 0 : s.default.url;
                return a ? e === i.Z.TestnetGanache ? (0, l.Z)(a, `transaction/${n}`) : (0, l.Z)(a, `tx/${n}`) : ""
            }
        }
    }
]);