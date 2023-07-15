(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7616], {
        47805: function(e, s, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/signup", function() {
                return r(53478)
            }])
        },
        48902: function(e, s, r) {
            "use strict";
            r.d(s, {
                c: function() {
                    return d
                }
            });
            var a = r(85893),
                t = r(54403);

            function i({
                error: e
            }) {
                let s;
                return s = "object" === typeof e && null !== e && "message" in e ? e.message : "string" === typeof e ? e : "An unknown error has occurred", (0, a.jsx)(t.ZP, {
                    dismissible: !0,
                    color: t.PQ.Red,
                    children: s
                })
            }
            var n = r(67294),
                o = r(28240),
                c = r(1581),
                l = r(84992);

            function d(e = o.yRu) {
                const s = (0, t.Ps)();
                return (0, n.useCallback)((r => {
                    !async function() {
                        let t = "string" === typeof e ? e : await e(r);
                        if (t instanceof l.MS) {
                            const e = t.response.headers.get("Content-Type");
                            t = "text/html" === e ? t.response.statusText : await t.response.text()
                        } else if ("object" === typeof t && "code" in t) switch (t.code) {
                            case c.ErrorCode.TRANSACTION_REPLACED:
                                t = "Transaction Cancelled";
                                break;
                            case c.ErrorCode.ACTION_REJECTED:
                                t = "Transaction Rejected"
                        }
                        s.show((0, a.jsx)(i, {
                            error: t
                        }))
                    }()
                }), [e, s])
            }
        },
        31404: function(e, s, r) {
            "use strict";
            r.d(s, {
                Aq: function() {
                    return p
                },
                VY: function() {
                    return x
                },
                kr: function() {
                    return u
                },
                ZP: function() {
                    return c
                }
            });
            var a = r(85893),
                t = r(67294),
                i = r(49874),
                n = r(6843);
            const o = (0, t.createContext)(null);

            function c({
                children: e,
                footer: s = !1
            }) {
                const [r, c] = (0, t.useState)(null);
                return (0, a.jsx)(o.Provider, {
                    value: r,
                    children: (0, a.jsxs)("div", {
                        className: "isolate grid min-h-screen grid-cols-[100vw] grid-rows-[auto_auto_1fr_auto]",
                        children: [(0, a.jsx)("div", {
                            className: "absolute h-screen w-full",
                            ref: c
                        }), (0, a.jsx)(i.Z, {}), e, s && (0, a.jsx)(n.Z, {})]
                    })
                })
            }
            var l = r(86010),
                d = r(73935);

            function p({
                children: e,
                className: s
            }) {
                const r = (0, t.useContext)(o);
                return r && (0, d.createPortal)((0, a.jsx)("div", {
                    className: (0, l.Z)("h-full w-full", s),
                    children: e
                }), r)
            }

            function x({
                children: e,
                className: s
            }) {
                return (0, a.jsx)("div", {
                    className: (0, l.Z)("z-10 col-span-full row-span-2 row-start-2", s),
                    children: e
                })
            }

            function u({
                children: e,
                className: s
            }) {
                return (0, a.jsx)("div", {
                    className: (0, l.Z)("z-10 col-span-full row-start-4", s),
                    children: e
                })
            }
        },
        79307: function(e, s, r) {
            "use strict";
            r.d(s, {
                FE: function() {
                    return p
                },
                Fx: function() {
                    return d
                },
                Mb: function() {
                    return l
                },
                SZ: function() {
                    return n
                },
                aS: function() {
                    return t
                },
                mG: function() {
                    return i
                },
                tu: function() {
                    return o
                },
                yJ: function() {
                    return c
                }
            });
            var a = r(96699);
            const t = (0, a.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Scanline.gif"),
                i = (0, a.Rk)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Payload%20Sequence%20Preparing_Audio.mp4"),
                n = (0, a.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Payload%20Experience%20Acquire%20Off.png"),
                o = (0, a.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Payload_Hover.wav"),
                c = (0, a.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Payload_Scan.wav"),
                l = (0, a.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Button_Hover.wav"),
                d = (0, a.n0)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Button_Hover2.wav"),
                p = (0, a.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/payload-assets/Base%20Apparition%20Pack.gif")
        },
        88076: function(e, s, r) {
            "use strict";
            r.d(s, {
                Z: function() {
                    return i
                }
            });
            var a = r(85893),
                t = r(86010);

            function i({
                className: e,
                ...s
            }) {
                return (0, a.jsx)("input", {
                    type: "email",
                    className: (0, t.Z)("border border-white/30 bg-black px-4 py-2 text-sm tracking-[0.04em] text-white outline-none placeholder:text-xs placeholder:uppercase placeholder:italic placeholder:text-white/90 disabled:bg-white/8", e),
                    ...s
                })
            }
        },
        55170: function(e, s, r) {
            "use strict";
            r.d(s, {
                Z: function() {
                    return l
                }
            });
            var a = r(85893),
                t = r(67294),
                i = r(46702),
                n = r.n(i),
                o = r(86010),
                c = r(3223);

            function l({
                hcaptchaToken: e,
                onVerify: s,
                className: r
            }) {
                const i = (0, t.useRef)(null);
                return (0, t.useEffect)((() => {
                    (null === i || void 0 === i ? void 0 : i.current) && !e && i.current.resetCaptcha()
                }), [i, e]), c.wE ? (0, a.jsx)("div", {
                    className: (0, o.Z)("flex h-[100px] justify-center", r),
                    children: (0, a.jsx)(n(), {
                        sitekey: c.wE,
                        theme: "dark",
                        onVerify: e => s(e),
                        ref: i
                    })
                }) : (s("no-captcha-required"), (0, a.jsx)(a.Fragment, {}))
            }
        },
        53478: function(e, s, r) {
            "use strict";
            r.r(s), r.d(s, {
                __N_SSP: function() {
                    return R
                },
                default: function() {
                    return q
                }
            });
            var a = r(85893),
                t = r(49089),
                i = r(9008),
                n = r.n(i),
                o = r(66155),
                c = r(31404),
                l = r(39881),
                d = r(67294),
                p = r(24574),
                x = r(92010),
                u = r(11163),
                m = r(19870),
                h = r(85509),
                f = r(13882),
                j = r(54412),
                g = r(5468),
                w = r(29242),
                v = r(88076),
                y = r(55170),
                b = r(84095),
                N = r(75831),
                k = r(48902),
                Z = r(84992);

            function S(e) {
                return (0, Z.ok)(function({
                    username: e,
                    email: s,
                    password: r,
                    code: a,
                    hcaptcha: t
                }) {
                    return (0, Z.Yi)("/api/v1/auth/registration/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: e,
                            email: s,
                            code: a,
                            hcaptcha: t,
                            password1: r,
                            password2: r
                        })
                    })
                }(e))
            }

            function P() {
                const e = (0, m.CS)(),
                    {
                        query: s
                    } = (0, u.useRouter)(),
                    [r, t] = (0, d.useState)(),
                    [i, n] = (0, d.useState)(!!s.code),
                    o = (0, k.c)(),
                    c = (0, p.D)((0, d.useCallback)((async s => {
                        try {
                            s.preventDefault();
                            const {
                                username: a,
                                password: t,
                                email: i,
                                code: n
                            } = Object.fromEntries(new FormData(s.target));
                            await e(S({
                                username: a,
                                password: t,
                                email: i,
                                code: n || void 0,
                                hcaptcha: r
                            }))
                        } catch (a) {
                            if (a instanceof Z.MS) {
                                const e = await a.response.clone().json(),
                                    s = Object.keys(e).filter((e => "username" !== e && "password1" !== e && "password2" !== e && "email" !== e && "code" !== e))[0];
                                throw s && o(e[s][0]), await a.response.json()
                            }
                            throw a
                        }
                    }), [r, e, o]), {});
                return (0, a.jsx)("div", {
                    className: "flex grow flex-row items-center py-10",
                    children: (0, a.jsxs)("div", {
                        className: "mx-auto box-content flex max-w-[400px] grow flex-col justify-center gap-12 px-4",
                        children: [(0, a.jsx)(h.Z, {
                            className: "uppercase",
                            children: "Sign Up"
                        }), !c.isSuccess && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("form", {
                                className: "flex flex-col gap-6",
                                method: "POST",
                                onSubmit: c.mutate,
                                children: [(0, a.jsxs)(f.Z, {
                                    children: [(0, a.jsx)(f.Q, {
                                        children: (0, a.jsx)(x.Vd, {
                                            id: "username",
                                            children: "Username"
                                        })
                                    }), (0, a.jsx)(g.Z, {
                                        name: "username"
                                    }), c.error && "username" in c.error && (0, a.jsx)("div", {
                                        className: "text-xs font-semibold uppercase tracking-wide text-red",
                                        children: c.error.username.join(" ")
                                    })]
                                }), (0, a.jsxs)(f.Z, {
                                    children: [(0, a.jsx)(f.Q, {
                                        children: (0, a.jsx)(x.Vd, {
                                            id: "email",
                                            children: "Email"
                                        })
                                    }), (0, a.jsx)(v.Z, {
                                        name: "email"
                                    }), c.error && "email" in c.error && (0, a.jsx)("div", {
                                        className: "text-xs font-semibold uppercase tracking-wide text-red",
                                        children: c.error.email.join(" ")
                                    })]
                                }), (0, a.jsxs)(f.Z, {
                                    children: [(0, a.jsx)(f.Q, {
                                        children: (0, a.jsx)(x.Vd, {
                                            id: "password",
                                            children: "Password"
                                        })
                                    }), (0, a.jsx)(w.Z, {
                                        name: "password"
                                    }), c.error && "password1" in c.error && (0, a.jsx)("div", {
                                        className: "text-xs font-semibold uppercase tracking-wide text-red",
                                        children: c.error.password1.join(" ")
                                    })]
                                }), (0, a.jsxs)(f.Z, {
                                    children: [(0, a.jsx)(x.Vd, {
                                        id: "have-a-promo-code",
                                        children: (0, a.jsx)("div", {
                                            className: "cursor-pointer text-xs font-semibold uppercase tracking-wide text-yellow",
                                            onClick: () => n(!0),
                                            children: "Have a promo code?"
                                        })
                                    }), i && (0, a.jsx)(g.Z, {
                                        name: "code",
                                        defaultValue: s.code,
                                        required: !1
                                    }), c.error && "code" in c.error && (0, a.jsx)("div", {
                                        className: "text-xs font-semibold uppercase tracking-wide text-red",
                                        children: c.error.code.join(" ")
                                    })]
                                }), (0, a.jsx)(y.Z, {
                                    hcaptchaToken: r,
                                    onVerify: t
                                }), c.error && "hcaptcha" in c.error && (0, a.jsx)("div", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-red",
                                    children: c.error.hcaptcha.join(" ")
                                }), (0, a.jsx)(b.Z, {
                                    processing: c.isLoading,
                                    children: "Sign Up"
                                }), (0, a.jsx)("div", {
                                    className: "flex flex-col gap-2 py-2",
                                    children: (0, a.jsx)(x.Vd, {
                                        id: "by-clicking-signup",
                                        elems: {
                                            terms: (0, a.jsx)(j.Z, {
                                                href: "/terms-of-use/",
                                                className: "text-yellow",
                                                children: "terms"
                                            }),
                                            privacy: (0, a.jsx)(j.Z, {
                                                href: "/privacy-policy/",
                                                className: "text-yellow",
                                                children: "privacy policy"
                                            })
                                        },
                                        children: (0, a.jsx)("div", {
                                            className: "text-3xs font-medium uppercase tracking-wide text-white/60",
                                            children: "By clicking sign up you agree to our\n                 <terms>terms</terms> and\n                 <privacy>privacy policy</privacy>."
                                        })
                                    })
                                })]
                            }), (0, a.jsx)(x.Vd, {
                                id: "sign-in-already",
                                elems: {
                                    signin: (0, a.jsx)(j.Z, {
                                        href: "/login",
                                        className: "text-yellow",
                                        children: "Sign in"
                                    })
                                },
                                children: (0, a.jsx)("div", {
                                    className: "text-xs font-semibold uppercase italic tracking-wide",
                                    children: "Already have an account? <signin>Sign in</signin"
                                })
                            })]
                        }), c.isSuccess && (0, a.jsx)(N.Z, {})]
                    })
                })
            }
            var _ = r(29260),
                C = r.n(_),
                E = r(79307);

            function T() {
                return (0, a.jsxs)("div", {
                    className: "flex flex-wrap-reverse justify-center gap-2",
                    children: [(0, a.jsxs)("div", {
                        className: "flex h-full basis-[350px] flex-col gap-6 tracking-halfwide",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [(0, a.jsx)("div", {
                                className: "mb-2 text-xxs font-medium uppercase text-white/60",
                                children: "Free Gift"
                            }), (0, a.jsx)("div", {
                                className: "text-sm font-medium uppercase text-yellow",
                                children: "Sign up and receive a free apparition pack"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "text-xs text-white/60",
                            children: "Start building decks with an apparition pack. Receive cards to be used in your deck building arsenal for your next battles."
                        })]
                    }), (0, a.jsx)(C(), {
                        src: E.FE.url,
                        priority: !0,
                        unoptimized: !0,
                        height: 150,
                        width: 150,
                        className: "mr-2",
                        alt: "The pack opens to reveal the apparition cards inside one by one."
                    })]
                })
            }

            function V() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "absolute left-[-1px] top-0 h-1 border-r border-white/60"
                    }), (0, a.jsx)("div", {
                        className: "absolute right-[-1px] top-0 h-1 border-r border-white/60"
                    }), (0, a.jsx)("div", {
                        className: "absolute left-[-1px] top-12 h-2 border-r border-white/60"
                    }), (0, a.jsx)("div", {
                        className: "absolute right-[-1px] top-12 h-2 border-r border-white/60"
                    }), (0, a.jsx)("div", {
                        className: "absolute left-[-1px] bottom-0 h-1 border-r border-white/60"
                    }), (0, a.jsx)("div", {
                        className: "absolute right-[-1px] bottom-0 h-1 border-r border-white/60"
                    }), (0, a.jsx)("div", {
                        className: "absolute left-[-1px] bottom-12 h-2 border-r border-white/60"
                    }), (0, a.jsx)("div", {
                        className: "absolute right-[-1px] bottom-12 h-2 border-r border-white/60"
                    })]
                })
            }

            function O() {
                const e = (0, m.CS)(),
                    {
                        query: s
                    } = (0, u.useRouter)(),
                    [r, t] = (0, d.useState)(),
                    [i, n] = (0, d.useState)(!!s.code),
                    o = (0, k.c)(),
                    c = (0, p.D)((0, d.useCallback)((async s => {
                        try {
                            s.preventDefault();
                            const {
                                username: a,
                                password: t,
                                email: i,
                                code: n
                            } = Object.fromEntries(new FormData(s.target));
                            await e(S({
                                username: a,
                                password: t,
                                email: i,
                                code: n || void 0,
                                hcaptcha: r
                            }))
                        } catch (a) {
                            if (a instanceof Z.MS) {
                                const e = await a.response.clone().json(),
                                    s = Object.keys(e).filter((e => "username" !== e && "password1" !== e && "password2" !== e && "email" !== e && "code" !== e))[0];
                                throw s && o(e[s][0]), await a.response.json()
                            }
                            throw a
                        }
                    }), [r, e, o]), {});
                return (0, a.jsxs)("div", {
                    className: "mx-auto flex max-w-[400px] flex-col justify-center gap-12",
                    children: [(0, a.jsx)(h.Z, {
                        className: "uppercase",
                        children: "Sign Up"
                    }), !c.isSuccess && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("form", {
                            className: "flex flex-col gap-6",
                            method: "POST",
                            onSubmit: c.mutate,
                            children: [(0, a.jsxs)(f.Z, {
                                children: [(0, a.jsx)(f.Q, {
                                    children: (0, a.jsx)(x.Vd, {
                                        id: "username",
                                        children: "Username"
                                    })
                                }), (0, a.jsx)(g.Z, {
                                    name: "username",
                                    className: "!bg-transparent"
                                }), c.error && "username" in c.error && (0, a.jsx)("div", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-red",
                                    children: c.error.username.join(" ")
                                })]
                            }), (0, a.jsxs)(f.Z, {
                                children: [(0, a.jsx)(f.Q, {
                                    children: (0, a.jsx)(x.Vd, {
                                        id: "email",
                                        children: "Email"
                                    })
                                }), (0, a.jsx)(v.Z, {
                                    name: "email",
                                    className: "!bg-transparent"
                                }), c.error && "email" in c.error && (0, a.jsx)("div", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-red",
                                    children: c.error.email.join(" ")
                                })]
                            }), (0, a.jsxs)(f.Z, {
                                children: [(0, a.jsx)(f.Q, {
                                    children: (0, a.jsx)(x.Vd, {
                                        id: "password",
                                        children: "Password"
                                    })
                                }), (0, a.jsx)(w.Z, {
                                    name: "password",
                                    className: "!bg-transparent"
                                }), c.error && "password1" in c.error && (0, a.jsx)("div", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-red",
                                    children: c.error.password1.join(" ")
                                })]
                            }), (0, a.jsxs)(f.Z, {
                                children: [(0, a.jsx)(x.Vd, {
                                    id: "have-a-promo-code",
                                    children: (0, a.jsx)("div", {
                                        className: "cursor-pointer text-xs font-semibold uppercase tracking-wide text-yellow",
                                        onClick: () => n(!0),
                                        children: "Have a promo code?"
                                    })
                                }), i && (0, a.jsx)(g.Z, {
                                    name: "code",
                                    defaultValue: s.code,
                                    required: !1
                                }), c.error && "code" in c.error && (0, a.jsx)("div", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-red",
                                    children: c.error.code.join(" ")
                                })]
                            }), (0, a.jsx)(y.Z, {
                                hcaptchaToken: r,
                                onVerify: t
                            }), c.error && "hcaptcha" in c.error && (0, a.jsx)("div", {
                                className: "text-xs font-semibold uppercase tracking-wide text-red",
                                children: c.error.hcaptcha.join(" ")
                            }), (0, a.jsx)(b.Z, {
                                processing: c.isLoading,
                                children: "Sign Up"
                            }), (0, a.jsx)("div", {
                                className: "flex flex-col gap-2 py-2",
                                children: (0, a.jsx)(x.Vd, {
                                    id: "by-clicking-signup",
                                    elems: {
                                        terms: (0, a.jsx)(j.Z, {
                                            href: "/terms-of-use/",
                                            className: "text-yellow",
                                            children: "terms"
                                        }),
                                        privacy: (0, a.jsx)(j.Z, {
                                            href: "/privacy-policy/",
                                            className: "text-yellow",
                                            children: "privacy policy"
                                        })
                                    },
                                    children: (0, a.jsx)("div", {
                                        className: "text-3xs font-medium uppercase tracking-wide text-white/60",
                                        children: "By clicking sign up you agree to our\n                 <terms>terms</terms> and\n                 <privacy>privacy policy</privacy>."
                                    })
                                })
                            })]
                        }), (0, a.jsx)(x.Vd, {
                            id: "sign-in-already",
                            elems: {
                                signin: (0, a.jsx)(j.Z, {
                                    href: "/login",
                                    className: "text-yellow",
                                    children: "Sign in"
                                })
                            },
                            children: (0, a.jsx)("div", {
                                className: "text-xs font-semibold uppercase italic tracking-wide",
                                children: "Already have an account? <signin>Sign in</signin"
                            })
                        })]
                    }), c.isSuccess && (0, a.jsx)(N.Z, {})]
                })
            }

            function A() {
                return (0, a.jsxs)("div", {
                    className: "z-10 border-y border-white/20",
                    children: [(0, a.jsxs)(c.Aq, {
                        className: "overflow-hidden",
                        children: [(0, a.jsx)(C(), {
                            src: "https://storage.googleapis.com/prod.static-assets.parallelnft.com/lore-assets/landscapes/static/Sepulii%20.png",
                            fill: !0,
                            unoptimized: !0,
                            className: "opacity-40",
                            alt: "The pack opens to reveal the apparition cards inside one by one."
                        }), (0, a.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black to-yellow/20"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "mx-auto -mt-4 flex max-w-[720px] justify-center",
                        children: (0, a.jsxs)("div", {
                            className: "relative flex flex-col items-center gap-6 border-x border-white/20",
                            children: [(0, a.jsx)("div", {
                                className: "w-full border-b border-white/20 px-6 py-12 lg:px-[160px]",
                                children: (0, a.jsx)(O, {})
                            }), (0, a.jsx)(V, {}), (0, a.jsx)("div", {
                                className: "mb-6 px-10",
                                children: (0, a.jsx)(T, {})
                            })]
                        })
                    })]
                })
            }
            var F = r(24554),
                R = !0;

            function q() {
                t.ZP.send({
                    hitType: "pageview",
                    page: "/signup"
                });
                const e = (0, o.ZP)(F.yy);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(n(), {
                        children: [(0, a.jsx)("title", {
                            children: "Sign Up | Parallel"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "Create a Parallel account to access various features across the site."
                        })]
                    }), e ? (0, a.jsx)(c.ZP, {
                        footer: !0,
                        children: (0, a.jsx)(A, {})
                    }) : (0, a.jsx)(l.Z, {
                        children: (0, a.jsx)(P, {})
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [5675, 6702, 2309, 8972, 9874, 4954, 9774, 2888, 179], (function() {
            return s = 47805, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);