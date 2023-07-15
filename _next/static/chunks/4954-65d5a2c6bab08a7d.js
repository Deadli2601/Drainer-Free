(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4954], {
        90638: function(e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                let l = n.default,
                    s = {
                        loading: ({
                            error: e,
                            isLoading: t,
                            pastDelay: l
                        }) => null
                    };
                e instanceof Promise ? s.loader = () => e : "function" === typeof e ? s.loader = e : "object" === typeof e && (s = r({}, s, e));
                s = r({}, s, t);
                const o = s.loader;
                s.loadableGenerated && (s = r({}, s, s.loadableGenerated), delete s.loadableGenerated);
                if ("boolean" === typeof s.ssr && !s.ssr) return delete s.webpack, delete s.modules, i(l, s);
                return l(r({}, s, {
                    loader: () => null != o ? o().then(a) : Promise.resolve(a((() => null)))
                }))
            }, t.noSSR = i;
            var r = l(6495).Z,
                s = l(92648).Z,
                n = (s(l(67294)), s(l(14302)));

            function a(e) {
                var t;
                return {
                    default: (null == (t = e) ? void 0 : t.default) || e
                }
            }

            function i(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        16319: function(e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadableContext = void 0;
            const r = (0, l(92648).Z)(l(67294)).default.createContext(null);
            t.LoadableContext = r
        },
        14302: function(e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = l(6495).Z,
                s = (0, l(92648).Z)(l(67294)),
                n = l(16319);
            const a = [],
                i = [];
            let o = !1;

            function c(e) {
                let t = e(),
                    l = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return l.promise = t.then((e => (l.loading = !1, l.loaded = e, e))).catch((e => {
                    throw l.loading = !1, l.error = e, e
                })), l
            }

            function d(e, t) {
                let l = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null
                    }, t),
                    r = null;

                function a() {
                    if (!r) {
                        const t = new u(e, l);
                        r = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return r.promise()
                }
                if (!o) {
                    const e = l.webpack ? l.webpack() : l.modules;
                    e && i.push((t => {
                        for (const l of e)
                            if (-1 !== t.indexOf(l)) return a()
                    }))
                }

                function c(e, t) {
                    ! function() {
                        a();
                        const e = s.default.useContext(n.LoadableContext);
                        e && Array.isArray(l.modules) && l.modules.forEach((t => {
                            e(t)
                        }))
                    }();
                    const i = s.default.useSyncExternalStore(r.subscribe, r.getCurrentValue, r.getCurrentValue);
                    return s.default.useImperativeHandle(t, (() => ({
                        retry: r.retry
                    })), []), s.default.useMemo((() => {
                        return i.loading || i.error ? s.default.createElement(l.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: r.retry
                        }) : i.loaded ? s.default.createElement((t = i.loaded) && t.default ? t.default : t, e) : null;
                        var t
                    }), [e, i])
                }
                return c.preload = () => a(), c.displayName = "LoadableComponent", s.default.forwardRef(c)
            }
            class u {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    const {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" === typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((() => {
                        this._update({
                            pastDelay: !0
                        })
                    }), t.delay)), "number" === typeof t.timeout && (this._timeout = setTimeout((() => {
                        this._update({
                            timedOut: !0
                        })
                    }), t.timeout))), this._res.promise.then((() => {
                        this._update({}), this._clearTimeouts()
                    })).catch((e => {
                        this._update({}), this._clearTimeouts()
                    })), this._update({})
                }
                _update(e) {
                    this._state = r({}, this._state, {
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading
                    }, e), this._callbacks.forEach((e => e()))
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function f(e) {
                return d(c, e)
            }

            function h(e, t) {
                let l = [];
                for (; e.length;) {
                    let r = e.pop();
                    l.push(r(t))
                }
                return Promise.all(l).then((() => {
                    if (e.length) return h(e, t)
                }))
            }
            f.preloadAll = () => new Promise(((e, t) => {
                h(a).then(e, t)
            })), f.preloadReady = (e = []) => new Promise((t => {
                const l = () => (o = !0, t());
                h(i, e).then(l, l)
            })), window.__NEXT_PRELOADREADY = f.preloadReady;
            var p = f;
            t.default = p
        },
        75831: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = l(85893),
                s = l(54412),
                n = l(90881);

            function a({
                children: e
            }) {
                return (0, r.jsxs)("div", {
                    className: "flex max-w-[400px] flex-col gap-12",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col gap-4 text-lg font-light tracking-wide",
                        children: [(0, r.jsx)("p", {
                            children: "We have sent you an e-mail from cards@mail.parallelnft.com."
                        }), (0, r.jsx)("p", {
                            children: "To activate your account, you must confirm your email."
                        })]
                    }), (0, r.jsx)(n.Z, {
                        length: n.Q.Long,
                        className: "opacity-30"
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-4 text-lg tracking-wide",
                        children: [(0, r.jsx)("p", {
                            className: "font-medium",
                            children: "Please check your spam folder, and if found, move to inbox to activate the confirmation link."
                        }), (0, r.jsxs)("p", {
                            className: "font-light",
                            children: [(0, r.jsx)(s.Z, {
                                externalLink: !0,
                                href: "mailto:info@parallelnft.com",
                                children: "Contact us"
                            }), " ", "if you have any issues."]
                        })]
                    }), e]
                })
            }
        },
        66453: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = l(85893),
                s = l(92010),
                n = l(86010),
                a = l(54412),
                i = l(90881);

            function o({
                className: e
            }) {
                const t = new Date;
                return (0, r.jsxs)("footer", {
                    className: (0, n.Z)("flex w-screen flex-col justify-between gap-6 whitespace-nowrap px-14 pb-14 pt-6 text-xs uppercase tracking-wide", e),
                    children: [(0, r.jsxs)("div", {
                        className: "flex w-full grid-cols-vertical-sandwich flex-col items-center gap-y-2 gap-x-6 lg:grid",
                        children: [(0, r.jsxs)("div", {
                            className: "order-2 flex flex-row gap-2",
                            children: [(0, r.jsx)(s.Vd, {
                                id: "footer-privacy-policy",
                                children: (0, r.jsx)(a.Z, {
                                    className: "font-semibold",
                                    color: a.M.White,
                                    href: "/privacy-policy/",
                                    children: "Privacy Policy"
                                })
                            }), (0, r.jsx)("span", {
                                className: "text-white/60",
                                children: "//"
                            }), (0, r.jsx)(s.Vd, {
                                id: "footer-terms",
                                children: (0, r.jsx)(a.Z, {
                                    className: "font-semibold",
                                    color: a.M.White,
                                    href: "/terms-of-use/",
                                    children: "Terms of Use"
                                })
                            })]
                        }), (0, r.jsx)(s.Vd, {
                            id: "footer-copyright",
                            vars: {
                                date: t
                            },
                            children: (0, r.jsxs)("div", {
                                className: "order-1 text-white/60 lg:order-2",
                                children: ["\xa9 Copyright ", (new Date).getFullYear(), " Parallel Studios"]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "order-2 flex flex-row gap-2 lg:justify-end",
                            children: [(0, r.jsx)(a.Z, {
                                className: "font-semibold",
                                color: a.M.White,
                                href: "https://discord.gg/paralleltcg",
                                externalLink: !0,
                                children: "Discord"
                            }), (0, r.jsx)("span", {
                                className: "text-white/60",
                                children: "//"
                            }), (0, r.jsx)(a.Z, {
                                className: "font-semibold",
                                color: a.M.White,
                                href: "https://twitter.com/paralleltcg/",
                                externalLink: !0,
                                children: "Twitter"
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex w-full flex-row justify-between",
                        children: [(0, r.jsx)(i.Z, {
                            className: "bg-white/40",
                            length: i.Q.Long
                        }), (0, r.jsx)(i.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: i.Q.Short
                        }), (0, r.jsx)("div", {}), (0, r.jsx)(i.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: i.Q.Short
                        }), (0, r.jsx)(i.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: i.Q.Short
                        }), (0, r.jsx)(i.Z, {
                            className: "bg-white/40",
                            length: i.Q.Short
                        })]
                    })]
                })
            }
        },
        6843: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return r.Z
                }
            });
            var r = l(66453)
        },
        39881: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = l(85893),
                s = l(86010),
                n = l(17023),
                a = l(6843),
                i = l(49874);

            function o({
                className: e,
                children: t
            }) {
                const {
                    bottom: l
                } = (0, n.ZP)();
                return (0, r.jsxs)("div", {
                    className: (0, s.Z)("relative isolate flex min-h-screen flex-col", e),
                    children: [(0, r.jsx)(i.Z, {}), (0, r.jsx)("main", {
                        className: "z-0 flex grow flex-col",
                        children: t
                    }), (0, r.jsx)(a.Z, {}), l > 0 && (0, r.jsx)("div", {
                        style: {
                            height: l
                        }
                    })]
                })
            }
        },
        13882: function(e, t, l) {
            "use strict";
            l.d(t, {
                Q: function() {
                    return n
                },
                Z: function() {
                    return s
                }
            });
            var r = l(85893);

            function s({
                children: e
            }) {
                return (0, r.jsx)("label", {
                    className: "flex flex-col gap-2",
                    children: e
                })
            }

            function n({
                children: e
            }) {
                return (0, r.jsx)("div", {
                    className: "text-xs font-semibold uppercase italic tracking-wide",
                    children: e
                })
            }
        },
        29242: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return n
                }
            });
            var r = l(85893),
                s = l(86010);

            function n({
                onChange: e,
                className: t,
                ...l
            }) {
                return (0, r.jsx)("input", {
                    onChange: e,
                    type: "password",
                    className: (0, s.Z)("border border-white/30 bg-black px-4 py-2 text-sm tracking-[0.04em] text-white outline-none placeholder:text-xs placeholder:uppercase placeholder:italic placeholder:text-white/90 disabled:bg-white/8", t),
                    ...l
                })
            }
        },
        42423: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return n
                }
            });
            var r = l(85893),
                s = l(86010);

            function n({
                className: e,
                ...t
            }) {
                return (0, r.jsx)("input", {
                    type: "text",
                    className: (0, s.Z)("border border-white/30 bg-black px-4 py-2 text-sm tracking-wide text-white outline-none placeholder:text-xs placeholder:uppercase placeholder:text-white/70 disabled:bg-white/8", e),
                    ...t
                })
            }
        },
        5468: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return r.Z
                }
            });
            var r = l(42423)
        },
        85509: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return n
                }
            });
            var r = l(85893),
                s = l(86010);

            function n({
                children: e,
                className: t
            }) {
                return (0, r.jsx)("h1", {
                    className: (0, s.Z)("font-display text-title font-medium tracking-wide", t),
                    children: e
                })
            }
        },
        5152: function(e, t, l) {
            e.exports = l(90638)
        },
        9008: function(e, t, l) {
            e.exports = l(5443)
        }
    }
]);