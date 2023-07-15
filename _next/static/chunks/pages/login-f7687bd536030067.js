(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3459], {
        83236: function(e, n, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/login", function() {
                return s(86360)
            }])
        },
        42849: function(e, n, s) {
            "use strict";
            s.d(n, {
                Z: function() {
                    return r.Z
                }
            });
            var r = s(39881)
        },
        86360: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                __N_SSP: function() {
                    return S
                },
                default: function() {
                    return N
                }
            });
            var r = s(85893),
                i = s(49089),
                t = s(9008),
                o = s.n(t),
                a = s(42849),
                c = s(67294),
                l = s(24574),
                d = s(86010),
                u = s(11163),
                f = s(92010),
                x = s(19870),
                m = s(85509),
                p = s(13882),
                h = s(5468),
                w = s(29242),
                j = s(54412),
                g = s(84095),
                v = s(75831),
                y = s(84992);

            function _(e, n) {
                return (0, y.ok)(function(e, n) {
                    return (0, y.Yi)("/api/v1/auth/login/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: e,
                            password: n
                        })
                    })
                }(e, n))
            }

            function b(e) {
                return (0, y.ok)(function(e) {
                    return (0, y.Yi)("/api/v1/auth/resend-verify-email/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: e
                        })
                    })
                }(e))
            }

            function k() {
                var e, n;
                const s = (0, x.CS)(),
                    i = (0, c.useRef)(null),
                    {
                        next: t = "/"
                    } = (0, u.useRouter)().query,
                    o = (0, l.D)((0, c.useCallback)((async e => {
                        try {
                            e.preventDefault();
                            const {
                                username: n,
                                password: r
                            } = Object.fromEntries(new FormData(e.target));
                            await s(_(n, r)), window.location.href = Array.isArray(t) ? t[0] : t
                        } catch (k) {
                            if (k instanceof y.MS && 500 !== k.response.status) {
                                const n = await k.response.json();
                                throw "object" === typeof n ? n : {
                                    unknownerror: [k.response.statusText]
                                }
                            }
                            throw k instanceof y.MS ? {
                                unknownerror: [k.response.statusText]
                            } : {
                                unknownerror: ["Unknown Error"]
                            }
                        }
                    }), [s, t]), {}),
                    a = (0, l.D)((0, c.useCallback)((async e => {
                        if (i.current) try {
                            e.preventDefault();
                            const {
                                username: n
                            } = Object.fromEntries(new FormData(i.current));
                            await s(b(n))
                        } catch (k) {
                            if (k instanceof y.MS) throw await k.response.json();
                            throw k
                        }
                    }), [s]), {});
                return (0, r.jsxs)("div", {
                    className: (0, d.Z)("flex grow flex-row items-center justify-center", a.isSuccess && "flex-col"),
                    children: [!a.isSuccess && (0, r.jsxs)("div", {
                        className: "mx-auto box-content flex max-w-[400px] grow flex-col justify-center gap-12 px-4",
                        children: [(0, r.jsx)(f.Vd, {
                            id: "sign-in",
                            children: (0, r.jsx)(m.Z, {
                                className: "uppercase",
                                children: "Sign In"
                            })
                        }), (0, r.jsxs)("form", {
                            ref: i,
                            className: "flex flex-col gap-6",
                            method: "POST",
                            onSubmit: o.mutate,
                            children: [(0, r.jsxs)(p.Z, {
                                children: [(0, r.jsx)(f.Vd, {
                                    id: "username-or-email",
                                    children: (0, r.jsx)(p.Q, {
                                        children: "Username or Email"
                                    })
                                }), (0, r.jsx)(h.Z, {
                                    name: "username"
                                })]
                            }), (0, r.jsxs)(p.Z, {
                                children: [(0, r.jsxs)("div", {
                                    className: "flex flex-row items-center justify-between",
                                    children: [(0, r.jsx)(p.Q, {
                                        children: "Password"
                                    }), (0, r.jsx)(f.Vd, {
                                        id: "forgot-password",
                                        children: (0, r.jsx)(j.Z, {
                                            href: "/password/reset/",
                                            className: "text-xs font-semibold uppercase italic tracking-wide",
                                            children: "Forgot Password"
                                        })
                                    })]
                                }), (0, r.jsx)(w.Z, {
                                    name: "password"
                                }), o.error && (0, r.jsx)("div", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-red",
                                    children: (null === (e = o.error) || void 0 === e || null === (n = e.non_field_errors) || void 0 === n ? void 0 : n.join(" ").includes("E-mail is not verified.")) ? (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)(f.Vd, {
                                            id: "email-not-verified",
                                            children: (0, r.jsx)("span", {
                                                children: "E-mail is not verified. To activate your account, you must confirm your email."
                                            })
                                        }), (0, r.jsx)(f.Vd, {
                                            id: "email-not-verified-resend",
                                            children: (0, r.jsx)("button", {
                                                className: "uppercase tracking-wide text-yellow",
                                                onClick: a.mutate,
                                                disabled: a.isLoading,
                                                children: "Resend"
                                            })
                                        })]
                                    }) : (k = o.error, "non_field_errors" in k ? k.non_field_errors.join(" ").includes("Unable to log in with provided credentials.") ? "Your username or password is incorrect." : k.non_field_errors.join(" ").includes('Must include either "username" or "email" and "password".') ? "Password and username fields may not be blank." : k.non_field_errors.join(" ") : "password" in k ? "Password and username fields may not be blank." : "An Unknown Error has occurred. Please contact us for support.")
                                })]
                            }), (0, r.jsx)(f.Vd, {
                                id: "sign-in",
                                children: (0, r.jsx)(g.Z, {
                                    processing: o.isLoading || o.isSuccess,
                                    children: "Sign In"
                                })
                            })]
                        }), (0, r.jsx)(f.Vd, {
                            id: "no-account",
                            elems: {
                                register: (0, r.jsx)(j.Z, {
                                    href: "/signup/"
                                })
                            },
                            children: (0, r.jsx)("div", {
                                className: "text-xs font-semibold uppercase italic tracking-wide",
                                children: "No account? <register>Sign up</register>"
                            })
                        })]
                    }), a.isSuccess && (0, r.jsx)(v.Z, {
                        children: (0, r.jsxs)("div", {
                            className: "w-[400px] text-xs font-semibold uppercase italic tracking-wide",
                            children: ["Back To", " ", (0, r.jsx)("button", {
                                className: "uppercase italic text-yellow",
                                onClick: function() {
                                    o.reset(), a.reset()
                                },
                                children: "Login"
                            })]
                        })
                    })]
                });
                var k
            }
            var S = !0;

            function N() {
                return i.ZP.send({
                    hitType: "pageview",
                    page: "/login"
                }), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o(), {
                        children: [(0, r.jsx)("title", {
                            children: "Sign In | Parallel"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "Sign in to your Parallel account to access features across the site."
                        })]
                    }), (0, r.jsx)(a.Z, {
                        children: (0, r.jsx)(k, {})
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [5675, 2309, 8972, 9874, 4954, 9774, 2888, 179], (function() {
            return n = 83236, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);