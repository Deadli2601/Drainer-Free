(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9396], {
        94217: function(e, t, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/privacy-policy", function() {
                return o(31309)
            }])
        },
        90638: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                let o = i.default,
                    a = {
                        loading: ({
                            error: e,
                            isLoading: t,
                            pastDelay: o
                        }) => null
                    };
                e instanceof Promise ? a.loader = () => e : "function" === typeof e ? a.loader = e : "object" === typeof e && (a = r({}, a, e));
                a = r({}, a, t);
                const l = a.loader;
                a.loadableGenerated && (a = r({}, a, a.loadableGenerated), delete a.loadableGenerated);
                if ("boolean" === typeof a.ssr && !a.ssr) return delete a.webpack, delete a.modules, n(o, a);
                return o(r({}, a, {
                    loader: () => null != l ? l().then(s) : Promise.resolve(s((() => null)))
                }))
            }, t.noSSR = n;
            var r = o(6495).Z,
                a = o(92648).Z,
                i = (a(o(67294)), a(o(14302)));

            function s(e) {
                var t;
                return {
                    default: (null == (t = e) ? void 0 : t.default) || e
                }
            }

            function n(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        16319: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadableContext = void 0;
            const r = (0, o(92648).Z)(o(67294)).default.createContext(null);
            t.LoadableContext = r
        },
        14302: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(6495).Z,
                a = (0, o(92648).Z)(o(67294)),
                i = o(16319);
            const s = [],
                n = [];
            let l = !1;

            function c(e) {
                let t = e(),
                    o = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return o.promise = t.then((e => (o.loading = !1, o.loaded = e, e))).catch((e => {
                    throw o.loading = !1, o.error = e, e
                })), o
            }

            function u(e, t) {
                let o = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null
                    }, t),
                    r = null;

                function s() {
                    if (!r) {
                        const t = new d(e, o);
                        r = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return r.promise()
                }
                if (!l) {
                    const e = o.webpack ? o.webpack() : o.modules;
                    e && n.push((t => {
                        for (const o of e)
                            if (-1 !== t.indexOf(o)) return s()
                    }))
                }

                function c(e, t) {
                    ! function() {
                        s();
                        const e = a.default.useContext(i.LoadableContext);
                        e && Array.isArray(o.modules) && o.modules.forEach((t => {
                            e(t)
                        }))
                    }();
                    const n = a.default.useSyncExternalStore(r.subscribe, r.getCurrentValue, r.getCurrentValue);
                    return a.default.useImperativeHandle(t, (() => ({
                        retry: r.retry
                    })), []), a.default.useMemo((() => {
                        return n.loading || n.error ? a.default.createElement(o.loading, {
                            isLoading: n.loading,
                            pastDelay: n.pastDelay,
                            timedOut: n.timedOut,
                            error: n.error,
                            retry: r.retry
                        }) : n.loaded ? a.default.createElement((t = n.loaded) && t.default ? t.default : t, e) : null;
                        var t
                    }), [e, n])
                }
                return c.preload = () => s(), c.displayName = "LoadableComponent", a.default.forwardRef(c)
            }
            class d {
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

            function h(e) {
                return u(c, e)
            }

            function p(e, t) {
                let o = [];
                for (; e.length;) {
                    let r = e.pop();
                    o.push(r(t))
                }
                return Promise.all(o).then((() => {
                    if (e.length) return p(e, t)
                }))
            }
            h.preloadAll = () => new Promise(((e, t) => {
                p(s).then(e, t)
            })), h.preloadReady = (e = []) => new Promise((t => {
                const o = () => (l = !0, t());
                p(n, e).then(o, o)
            })), window.__NEXT_PRELOADREADY = h.preloadReady;
            var f = h;
            t.default = f
        },
        66453: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = o(85893),
                a = o(92010),
                i = o(86010),
                s = o(54412),
                n = o(90881);

            function l({
                className: e
            }) {
                const t = new Date;
                return (0, r.jsxs)("footer", {
                    className: (0, i.Z)("flex w-screen flex-col justify-between gap-6 whitespace-nowrap px-14 pb-14 pt-6 text-xs uppercase tracking-wide", e),
                    children: [(0, r.jsxs)("div", {
                        className: "flex w-full grid-cols-vertical-sandwich flex-col items-center gap-y-2 gap-x-6 lg:grid",
                        children: [(0, r.jsxs)("div", {
                            className: "order-2 flex flex-row gap-2",
                            children: [(0, r.jsx)(a.Vd, {
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
                            }), (0, r.jsx)(a.Vd, {
                                id: "footer-terms",
                                children: (0, r.jsx)(s.Z, {
                                    className: "font-semibold",
                                    color: s.M.White,
                                    href: "/terms-of-use/",
                                    children: "Terms of Use"
                                })
                            })]
                        }), (0, r.jsx)(a.Vd, {
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
                        children: [(0, r.jsx)(n.Z, {
                            className: "bg-white/40",
                            length: n.Q.Long
                        }), (0, r.jsx)(n.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: n.Q.Short
                        }), (0, r.jsx)("div", {}), (0, r.jsx)(n.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: n.Q.Short
                        }), (0, r.jsx)(n.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: n.Q.Short
                        }), (0, r.jsx)(n.Z, {
                            className: "bg-white/40",
                            length: n.Q.Short
                        })]
                    })]
                })
            }
        },
        6843: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return r.Z
                }
            });
            var r = o(66453)
        },
        39881: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = o(85893),
                a = o(86010),
                i = o(17023),
                s = o(6843),
                n = o(49874);

            function l({
                className: e,
                children: t
            }) {
                const {
                    bottom: o
                } = (0, i.ZP)();
                return (0, r.jsxs)("div", {
                    className: (0, a.Z)("relative isolate flex min-h-screen flex-col", e),
                    children: [(0, r.jsx)(n.Z, {}), (0, r.jsx)("main", {
                        className: "z-0 flex grow flex-col",
                        children: t
                    }), (0, r.jsx)(s.Z, {}), o > 0 && (0, r.jsx)("div", {
                        style: {
                            height: o
                        }
                    })]
                })
            }
        },
        42849: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return r.Z
                }
            });
            var r = o(39881)
        },
        97518: function(e, t, o) {
            "use strict";
            o.d(t, {
                VY: function() {
                    return _
                },
                h4: function() {
                    return P
                },
                PJ: function() {
                    return L
                },
                Ru: function() {
                    return y
                },
                Rb: function() {
                    return j
                },
                qX: function() {
                    return v
                },
                hX: function() {
                    return A
                },
                Oz: function() {
                    return x
                },
                CK: function() {
                    return b
                },
                DS: function() {
                    return w
                },
                po: function() {
                    return g
                },
                fC: function() {
                    return u
                },
                g_: function() {
                    return f
                },
                fi: function() {
                    return R
                }
            });
            var r, a = o(85893),
                i = o(86010),
                s = o(67294),
                n = o(90881);

            function l(e) {
                switch (e) {
                    case r.BotLeft:
                        return n.Q.Long;
                    case r.BotCenter:
                    case r.BotRight:
                        return n.Q.Short;
                    default:
                        return n.Q.Standard
                }
            }! function(e) {
                e.TopLeft = "[grid-area:top-l]", e.TopCenter = "[grid-area:top-c]", e.MidLeft = "[grid-area:mid-l]", e.MidCenter = "[grid-area:mid-c]", e.BotLeft = "[grid-area:bot-l]", e.BotCenter = "[grid-area:bot-c]", e.BotRight = "[grid-area:bot-r]"
            }(r || (r = {}));
            var c = (0, s.forwardRef)((function({
                position: e,
                onClick: t,
                className: o
            }, r) {
                return (0, a.jsx)(n.Z, {
                    ref: r,
                    length: l(e),
                    onClick: t,
                    className: (0, i.Z)("self-end justify-self-stretch lg:block", o, e)
                })
            }));

            function u({
                children: e,
                className: t
            }) {
                return (0, a.jsx)("div", {
                    className: (0, i.Z)("grid-modular-page-mobile md:grid-modular-page grid content-start overflow-hidden p-4 md:p-14 md:pt-[104px] lg:gap-x-8", t),
                    children: e
                })
            }
            var d = o(8339),
                h = o(30445),
                p = o(98606),
                f = (0, s.forwardRef)((function({
                    className: e
                }, t) {
                    return (0, a.jsxs)("div", {
                        ref: t,
                        className: (0, i.Z)("flex flex-col gap-6 [grid-area:social]", e),
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-row gap-x-6 ",
                            children: [(0, a.jsx)(p.Z, {}), (0, a.jsx)(h.Z, {}), (0, a.jsx)(d.Z, {})]
                        }), (0, a.jsx)(n.Z, {}), (0, a.jsxs)("p", {
                            className: "text-xs uppercase tracking-wider text-white opacity-60",
                            children: [(0, a.jsx)("span", {
                                className: "font-semibold",
                                children: "Join"
                            }), " our", (0, a.jsx)("br", {}), "community"]
                        })]
                    })
                })),
                y = (0, s.forwardRef)((function({
                    children: e,
                    className: t
                }, o) {
                    return (0, a.jsx)("div", {
                        ref: o,
                        className: (0, i.Z)("hidden [grid-area:left-header] md:block", t),
                        children: e
                    })
                }));

            function m(e) {
                return (0, s.forwardRef)((function(t, o) {
                    return (0, a.jsx)(c, {
                        position: e,
                        ref: o,
                        ...t
                    })
                }))
            }
            const g = m(r.TopLeft),
                w = m(r.TopCenter),
                b = m(r.MidLeft),
                x = m(r.MidCenter),
                v = m(r.BotLeft),
                j = m(r.BotCenter),
                A = m(r.BotRight);

            function k(e) {
                return (0, s.forwardRef)((function({
                    children: t,
                    className: o
                }, r) {
                    return (0, a.jsx)("div", {
                        ref: r,
                        className: (0, i.Z)(e, o),
                        children: t
                    })
                }))
            }
            const P = k("[grid-area:header]"),
                L = k("[grid-area:left-content]"),
                R = k("[grid-area:subheader]"),
                _ = k("[grid-area:content]")
        },
        44482: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = o(85893),
                a = o(86010);

            function i({
                children: e,
                className: t,
                color: o
            }) {
                return (0, r.jsx)("h1", {
                    className: (0, a.Z)("font-display text-title font-medium uppercase tracking-[.1em] md:text-page-title", "white" === o ? "text-white" : "text-yellow", t),
                    children: e
                })
            }
        },
        31309: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                __N_SSP: function() {
                    return u
                },
                default: function() {
                    return d
                }
            });
            var r = o(85893),
                a = o(9008),
                i = o.n(a),
                s = o(49089),
                n = o(44482),
                l = o(42849),
                c = o(97518),
                u = !0;

            function d() {
                return s.ZP.send({
                    hitType: "pageview",
                    page: "/privacy-policy/"
                }), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(i(), {
                        children: [(0, r.jsx)("title", {
                            children: "Privacy Policy | Parallel"
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: "Parallel's privacy policy."
                        })]
                    }), (0, r.jsx)(l.Z, {
                        children: (0, r.jsxs)(c.fC, {
                            children: [(0, r.jsx)(c.po, {}), (0, r.jsx)(c.CK, {}), (0, r.jsx)(c.DS, {}), (0, r.jsx)(c.Oz, {}), (0, r.jsx)(c.qX, {}), (0, r.jsx)(c.Rb, {}), (0, r.jsx)(c.hX, {}), (0, r.jsx)(c.h4, {
                                className: "my-8 flex flex-col justify-center",
                                children: (0, r.jsx)(n.Z, {
                                    children: "Privacy Policy"
                                })
                            }), (0, r.jsx)(c.fi, {
                                className: "my-14"
                            }), (0, r.jsxs)(c.VY, {
                                className: "mb-14 flex max-w-measure flex-col gap-[1em] text-lg font-light tracking-wide",
                                children: [(0, r.jsx)("p", {
                                    children: "PRIVACY"
                                }), (0, r.jsx)("p", {
                                    children: "Last Updated: June 9, 2022"
                                }), (0, r.jsx)("p", {
                                    children: 'Parallel is an application that provides users with the opportunity to purchase, collect, and showcase digital blockchain collectibles (collectively, the \u201cApp\u201d).\xa0 The App is proprietary to\xa012783185 Canada Inc. ("Parallel", "we", or "us"). Parallel is committed to protecting and respecting your privacy. This privacy policy (this \u201cPolicy\u201d) sets out how we collect and process personal information about you when you visit our website at https://www.parallelnft.com, when you sign up for or use the App, or when you otherwise do business or make contact with us. \xa0'
                                }), (0, r.jsx)("p", {
                                    children: "1. What information do we collect?"
                                }), (0, r.jsx)("p", {
                                    children: "A. SUMMARY"
                                }), (0, r.jsx)("p", {
                                    children: "PARALLEL collects data to enable us to operate the App effectively, and to provide you with the best experience on the App. You provide some of this data to us directly, such as when you register to use the App, subscribe to a newsletter, respond to a survey, make an enquiry through our website, contact us for support, or contact us as a prospective user, vendor, supplier, or consultant. We get some of your data by recording how you interact with the App by, for example, using technologies like cookies. We also obtain and process data in the context of making the App available to you."
                                }), (0, r.jsx)("p", {
                                    children: "B. LEARN MORE"
                                }), (0, r.jsx)("p", {
                                    children: "You have choices about the data we collect. When you are asked to provide personal data, you may decline. But if you choose not to provide data that is necessary to enable us to make the App available to you, you may not be able to sign up for or use the App. The data we collect depends on the context of your interactions with PARALLEL, and the choices you make (including your privacy settings). The data we collect can include the following:"
                                }), (0, r.jsx)("p", {
                                    children: "Email and Digital Wallet Address. We may collect your email address and your electronic wallet address."
                                }), (0, r.jsx)("p", {
                                    children: "Device and Usage information. We may collect data about your device and how you and your device interact with PARALLEL and our App. For example, we may collect your interactions on our website, your feature usage patterns, location data, and your interactions with us. We may also collect data about your device and the network you use to connect to our App; this may include data such as your IP address, browser type, operating system, and referring URLs."
                                }), (0, r.jsx)("p", {
                                    children: "2. What do we use your information for?"
                                }), (0, r.jsx)("p", {
                                    children: "A. SUMMARY"
                                }), (0, r.jsx)("p", {
                                    children: "We use the data we collect to operate our business and to make the App available to you. This includes using the data to improve our App and to personalize your experiences. We may also use the data to communicate with you to, among other things, inform you about your account, provide security updates, and give you information about the App. We may also use the data to manage your email subscriptions, improve the relevance and security of our website, respond to user enquiries, and send you periodic marketing communications about our App."
                                }), (0, r.jsx)("p", {
                                    children: "B. LEARN MORE"
                                }), (0, r.jsx)("p", {
                                    children: "We use data to provide the App to you, to improve the App, and to perform essential business operations. This includes operating the App, maintaining and improving the performance of the App, developing new features, conducting research, providing customer support, and to enforce our Terms of Use. Examples of such uses include the following:"
                                }), (0, r.jsx)("p", {
                                    children: "Providing the App. We use data to carry out your transactions with us and to make the App available to you. In certain cases, the App may include personalized features and recommendations to enhance your enjoyment, and automatically tailor your experience based on the data we have about you."
                                }), (0, r.jsx)("p", {
                                    children: "Technical support. We use data to diagnose problems, and to provide customer care and other support services."
                                }), (0, r.jsx)("p", {
                                    children: "Improving the App. We use data to continually improve the App, including system administration, system security, and adding new features or capabilities."
                                }), (0, r.jsx)("p", {
                                    children: "Business Operations. We use data to develop aggregate analyses and business intelligence that enable us to operate, protect, make informed decisions, and report on the performance of our business."
                                }), (0, r.jsx)("p", {
                                    children: "Promotions. We may use your data to administer contests, promotions, surveys, or other site features."
                                }), (0, r.jsx)("p", {
                                    children: "Improving Advertising Campaigns. We may use your data to improve our advertising campaigns, primarily in an effort to prevent targeting you with advertisements that are not relevant to you."
                                }), (0, r.jsx)("p", {
                                    children: "Sending Periodic Emails. We may use your data to send you periodic emails. Depending on the marketing preferences you select on your privacy dashboard, we may send you occasional marketing emails about our App, which you can unsubscribe from at any time using the link provided in the message."
                                }), (0, r.jsx)("p", {
                                    children: "Communications. We use data we collect to communicate with you, and to personalize our communications with you. For example, we may contact you to discuss your account, to remind you about features of the App that are available for your use, to update you about a support request, or to invite you to participate in a survey. Additionally, you can sign up for email subscriptions, and choose whether you want to receive marketing communications from us."
                                }), (0, r.jsx)("p", {
                                    children: "3. How do we protect your information?"
                                }), (0, r.jsx)("p", {
                                    children: "We implement a variety of security measures in an effort to maintain the security of your personal information, including organizational, technological and physical measures. We offer the use of a secure server. All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our gateway provider\u2019s database.\xa0 We have also taken measures to restrict access to personal information to only authorized persons, who are required to keep the information confidential."
                                }), (0, r.jsx)("p", {
                                    children: "Like most companies, we cannot guarantee that our safeguards will always be effective.\xa0 A breach of security safeguards can result in such risks as phishing and identity theft. In such cases, we act promptly to mitigate the risks and to inform you where there is a real risk of significant harm, or as otherwise required by law."
                                }), (0, r.jsx)("p", {
                                    children: "4. How do we ensure that our processing systems remain confidential, resilient, and available?"
                                }), (0, r.jsx)("p", {
                                    children: "A. SUMMARY"
                                }), (0, r.jsx)("p", {
                                    children: "We implement a variety of measures in an effort to ensure that our processing systems remain confidential, resilient, and available. Specifically, we have implemented processes to help ensure high availability, business continuity, and prompt disaster recovery. We commit to maintaining strong physical and logical access controls, and conduct regular penetration testing to identify and address potential vulnerabilities."
                                }), (0, r.jsx)("p", {
                                    children: "5. Do we use cookies?"
                                }), (0, r.jsx)("p", {
                                    children: "A. SUMMARY"
                                }), (0, r.jsx)("p", {
                                    children: "Yes. Cookies are small files that a site or its service provider transfers to your computer\u2019s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information. You can choose to disable cookies, but if you do, your ability to use or access certain parts of the App may be affected."
                                }), (0, r.jsx)("p", {
                                    children: "B. LEARN MORE"
                                }), (0, r.jsx)("p", {
                                    children: "We use cookies and other similar identifiers to understand and save your preferences for future visits, to advertise to you on other sites, and to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future."
                                }), (0, r.jsx)("p", {
                                    children: "You may refuse to accept cookies by activating the setting on your browser that allows you to refuse the setting of cookies. You can find information on popular browsers and how to adjust your cookie preferences at the following websites:"
                                }), (0, r.jsx)("p", {
                                    children: "Microsoft Internet Explorer"
                                }), (0, r.jsx)("p", {
                                    children: "Mozilla Firefox"
                                }), (0, r.jsx)("p", {
                                    children: "Google Chrome"
                                }), (0, r.jsx)("p", {
                                    children: "Apple Safari"
                                }), (0, r.jsx)("p", {
                                    children: "However, if you choose to disable cookies, you may be unable to access certain parts of our website. A banner asking you to accept our cookies policy will be displayed upon the first visit to our website (or the first visit after you delete your cookies). Unless you have adjusted your browser setting so that it will refuse cookies and/or you have not accepted our cookies policy, our system will issue cookies when you log on to our site."
                                }), (0, r.jsx)("p", {
                                    children: "Our web pages may contain electronic images known as web beacons (also called single-pixel gifs) that we use to help deliver cookies on our websites and to count users who have visited those websites. We may also include web beacons in our promotional email messages or newsletters, to determine whether and when you open and act on them."
                                }), (0, r.jsx)("p", {
                                    children: "In addition to placing web beacons on our own websites, we sometimes work with other companies to place our web beacons on their websites or in their advertisements. This helps us to develop statistics on how often clicking on an advertisement on a PARALLEL website results in a purchase or other action on the advertiser's website."
                                }), (0, r.jsx)("p", {
                                    children: "Finally, our App may contain web beacons or similar technologies from third-party analytics providers that help us compile aggregated statistics about the effectiveness of our promotional campaigns or other operations. These technologies enable the analytics providers to set or read their own cookies or other identifiers on your device, through which they can collect information about your online activities across applications, websites or other products."
                                }), (0, r.jsx)("p", {
                                    children: "6. Do we disclose any information to outside parties?"
                                }), (0, r.jsx)("p", {
                                    children: "A. SUMMARY"
                                }), (0, r.jsx)("p", {
                                    children: "We disclose your personal data with your consent, or as necessary to make the App available to you. We may share your data with: vendors working on our behalf and our affiliates and licensees providing services on our behalf.\xa0 We may also disclose your personal data when required by law or to respond to legal process, to protect our customers, to protect lives, to maintain the security and integrity of our App, and to protect our rights or our property."
                                }), (0, r.jsx)("p", {
                                    children: "B. LEARN MORE"
                                }), (0, r.jsx)("p", {
                                    children: "We disclose your personal data with your consent, or as necessary to make the App available to you. You have the right to refuse, but if you do refuse, you may not be able to complete your registration or use the App.\xa0"
                                }), (0, r.jsxs)("p", {
                                    children: ["We also transfer personal data with vendors, licensees or agents working on our behalf for the purposes described in this Policy. For example, companies we have hired to provide CARD minting services, cloud hosting services, off-site backups, and customer support may need access to personal data to provide those functions. In such cases, these companies are required to abide by our data privacy and security requirements and are not allowed to use personal data they receive from us for any other purpose.\xa0 If you have questions or concerns about any of our vendors, feel free to contact us at\xa0", (0, r.jsx)("a", {
                                        href: "mailto:info@parallelnft.com",
                                        children: "info@parallelnft.com"
                                    }), ".\xa0 \xa0"]
                                }), (0, r.jsx)("p", {
                                    children: "We also transfer your personal data to our affiliates or related parties where they may provide services on our behalf."
                                }), (0, r.jsx)("p", {
                                    children: "We may transfer your personal data as part of a corporate transaction such as a corporate sale, merger, reorganization, dissolution, or similar event. Finally, we will access, transfer, disclose, and/or preserve personal data, when we have a good faith belief that doing so is necessary to:"
                                }), (0, r.jsxs)("ul", {
                                    role: "list",
                                    children: [(0, r.jsx)("li", {
                                        children: "\u2022 comply with applicable law or respond to valid legal process, judicial orders, or subpoenas;"
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 respond to requests from public or governmental authorities, including for national security or law enforcement purposes;"
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 protect the vital interests of our users, customers, or other third parties (including, for example, to prevent spam or attempts to defraud users of our products, or to help prevent the loss of life or serious injury of anyone);"
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 operate and maintain the security or integrity of our App, including to prevent or stop an attack on our computer systems or networks;"
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 protect the rights, interests or property of PARALLEL or third parties;"
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 prevent or investigate possible wrongdoing in connection with the App; or"
                                    }), (0, r.jsxs)("li", {
                                        children: ["\u2022 enforce our\xa0", (0, r.jsx)("a", {
                                            href: "https://parallel.life/terms-of-use/",
                                            children: "Terms of Use"
                                        }), "."]
                                    })]
                                }), (0, r.jsx)("p", {
                                    children: "We may use and share aggregated non-personal information with third parties for marketing, advertising, and analytics purposes. We do not sell or trade your personal information to third parties."
                                }), (0, r.jsx)("p", {
                                    children: "7. How to Access and Control Your Personal Data"
                                }), (0, r.jsx)("p", {
                                    children: "A. SUMMARY"
                                }), (0, r.jsx)("p", {
                                    children: "You can view, access, edit, delete, or request a copy of your personal data for many aspects of the App via your user dashboard. You can also make choices about PARALLEL\u2019s collection and use of your data. You can always choose whether you want to receive marketing communications from us. You can also opt out from receiving marketing communications from us by using the opt-out link on the communication, or by visiting your user dashboard."
                                }), (0, r.jsx)("p", {
                                    children: "B. LEARN MORE"
                                }), (0, r.jsx)("p", {
                                    children: "Data Access. You can access your personal data on your account\u2019s user dashboard."
                                }), (0, r.jsx)("p", {
                                    children: "Data Correction. You can modify your personal data via your account\u2019s user dashboard. Note that since some of the data we collect is specific to you \u2013 for example, your electronic wallet address \u2013 you may not be able to modify this data without needing to create a new user profile."
                                }), (0, r.jsxs)("p", {
                                    children: ["Your Communications Preferences. You can choose whether you wish to receive marketing communications from us. If you receive marketing communications from us and would like to opt out, you can do so by following the directions in that communication. You can also make choices about your receipt of marketing communications by signing into your account, and viewing and managing your communication permissions in your account\u2019s user dashboard, where you can update contact information, manage your contact preferences, opt out of email subscriptions, and choose whether to share your contact information with PARALLEL and our partners. Alternatively, you can request that we withdraw your consent to use your personal data by submitting an email to us at\xa0", (0, r.jsx)("a", {
                                        href: "mailto:info@parallelnft.com",
                                        children: "info@parallelnft.com"
                                    }), "\xa0and including \u201cPlease withdraw my consent for marketing communications\u201d in the \u201cSubject\u201d line. PARALLEL will verify your ability to access that email, then update our systems to remove your email address from the system we use to send marketing communications. We will use reasonable efforts to respond to your request within 30 days of our receipt of verification of the request. Please note that these choices do not apply to mandatory communications that are part of the App, or to surveys or other informational communications that have their own unsubscribe method."]
                                }), (0, r.jsx)("p", {
                                    children: "8. Third Party Links"
                                }), (0, r.jsx)("p", {
                                    children: "Occasionally, at our discretion, we may include or offer third party products or services on our website or through our App. If you access other websites using the links provided, the operators of these websites may collect information from you that will be used by them in accordance with their privacy policies. These third party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites."
                                }), (0, r.jsx)("p", {
                                    children: "9. Where we Store and Process Personal Data; International Transfers"
                                }), (0, r.jsx)("p", {
                                    children: "Personal data collected by PARALLEL may be stored and processed in the United States, Canada, or in any other country where PARALLEL or its affiliates, subsidiaries or service providers maintain facilities. The storage location(s) are chosen in order to operate efficiently, to improve performance, and to create redundancies in order to protect the data in the event of an outage or other problem. We take steps to ensure that the data we collect is processed according to the provisions of this Policy and the requirements of applicable law wherever the data is located."
                                }), (0, r.jsx)("p", {
                                    children: "Also, we transfer personal data from the European Economic Area and Switzerland to other countries, some of which have not been determined by the European Commission to have an adequate level of data protection. To learn more about the European Commission\u2019s decisions on the adequacy of the protection of personal data in the countries where PARALLEL processes personal data, please visit: ec.europa.eu/justice/data-protection/international-transfers/adequacy/index_en.htm"
                                }), (0, r.jsx)("p", {
                                    children: "While your personal data is outside of Canada, it is subject to the laws of the country in which it is located, which may have different data protection laws than Canada.\xa0 Those laws may require disclosure of your personal data to authorities in that country. For more information about our policies and practices regarding service providers outside of Canada, contact our Data Protection Officer using the contact information in the \u201cHow to Contact Us\u201d section below."
                                }), (0, r.jsx)("p", {
                                    children: "When we transfer personal data across any international border, we use a variety of legal mechanisms, including contracts, to help ensure your rights and protections travel with your data."
                                }), (0, r.jsx)("p", {
                                    children: "10. Data Retention"
                                }), (0, r.jsx)("p", {
                                    children: "A. SUMMARY"
                                }), (0, r.jsx)("p", {
                                    children: "We may retain your personal information as long as you continue to use the App, have an account with us, or for as long as is necessary to fulfill the purposes outlined in this Policy. You can ask to close your account by contacting us as described above, and we will delete your personal information on request. We may, however, retain personal information for an additional period as is permitted or required under applicable laws, for legal, tax, or regulatory reasons, or for legitimate and lawful business purposes."
                                }), (0, r.jsx)("p", {
                                    children: "B. LEARN MORE"
                                }), (0, r.jsx)("p", {
                                    children: "We will retain your personal data for as long as necessary to make the App available to you, or for other essential purposes such as complying with our legal obligations, resolving disputes, and enforcing our agreements. Because these needs can vary for different types of data, actual retention periods can vary significantly. The criteria we use to determine the retention periods include:"
                                }), (0, r.jsxs)("ul", {
                                    role: "list",
                                    children: [(0, r.jsx)("li", {
                                        children: "\u2022 How long is the personal data needed to make the App available to you and/or operate our business? This includes such things such as maintaining and improving the performance of the App, keeping our systems secure, and maintaining appropriate business and financial records. This is the general rule that establishes the baseline for most data retention periods."
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 Is there an automated control, such as in your user dashboard, that enables you to access and delete the personal data at any time? If there is not, a shortened data retention time will generally be adopted."
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 Is the personal data of a sensitive type? If so, a shortened retention time would generally be appropriate."
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 Has the user provided consent for a longer retention period? If so, we will retain the data in accordance with your consent."
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 Is PARALLEL subject to a legal, contractual, or similar obligation to retain the data? Examples can include mandatory data retention laws in the applicable jurisdiction, government orders to preserve data relevant to an investigation, or data that must be retained for the purposes of litigation."
                                    })]
                                }), (0, r.jsx)("p", {
                                    children: "11. Changes to our Privacy Policy"
                                }), (0, r.jsx)("p", {
                                    children: 'We will update this Policy when necessary to reflect customer feedback and changes to our App. When we post changes to this statement, we will revise the "last updated" date at the top of the statement. If there are material changes to the Policy or in how PARALLEL will use your personal data, we will notify you either by prominently posting a notice of such changes before they take effect or by sending you a notification directly. We encourage you to periodically review this privacy statement to learn how PARALLEL is protecting your information.'
                                }), (0, r.jsx)("p", {
                                    children: "12.\xa0 California Resident Rights"
                                }), (0, r.jsxs)("p", {
                                    children: ["If you are a California resident, you have the rights set forth in this section. Please see the \u201cExercising Your Rights\u201d section below for instructions regarding how to exercise these rights. If there are any conflicts between this section and any other provision of this Privacy Policy and you are a California resident, the portion that is more protective of your personally-identifiable data will control to the extent of such conflict. If you have any questions about this section or whether any of the following rights apply to you, please contact us at\xa0", (0, r.jsx)("a", {
                                        href: "mailto:info@parallelnft.com",
                                        children: "info@parallelnft.com"
                                    })]
                                }), (0, r.jsx)("p", {
                                    children: "Exercising Your Rights"
                                }), (0, r.jsx)("p", {
                                    children: "Please follow the instructions and requirements described below when submitting your requests. Requests that fail to comply with any of these instructions and requirements may result in delayed or no response."
                                }), (0, r.jsx)("p", {
                                    children: "To exercise the rights described below as a California resident, you must send us a request (1) that provides sufficient information to allow us to verify that (i) you are the person about whom we have collected personal data, (ii) you, as the requester, are the same person as the data subject for whose information you\u2019re requesting (or such person\u2019s parent/guardian), (2) that describes your request in sufficient detail to allow us to understand, evaluate and respond to it, (3) that declares, under the penalty of perjury, that you\u2019re exercising your rights under the CCPA as a California resident solely for lawful purposes, and (4) in a way that does not and would not unduly burden or otherwise abuse our data request system and/or our App. Each request that meets all of these criteria, and which is confirmed via email verification, will be considered a \u201cValid Request.\u201d We may not respond to requests that do not meet these criteria. We will use commercially reasonable efforts to determine whether a request may be for harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable purposes, and we reserve the right not to respond to such request. We will only use your personal data provided in a Valid Request to verify your identity and complete your request. You do not need an account on the App to submit a Valid Request."
                                }), (0, r.jsx)("p", {
                                    children: "We will work to respond to your Valid Request within 45 days of receipt. We will not charge you a fee for making a Valid Request unless your Valid Request(s) is excessive, repetitive or manifestly unfounded. If we determine that your Valid Request warrants a fee, we will notify you of the fee and explain that decision before completing your request."
                                }), (0, r.jsx)("p", {
                                    children: "You may submit a Valid Request using the following methods:"
                                }), (0, r.jsx)("ul", {
                                    role: "list",
                                    children: (0, r.jsxs)("li", {
                                        children: ["\u2022 Email us at:\xa0", (0, r.jsx)("a", {
                                            href: "mailto:info@parallelnft.com",
                                            children: "info@parallelnft.com"
                                        })]
                                    })
                                }), (0, r.jsx)("p", {
                                    children: "You may also authorize an agent (an \u201cAuthorized Agent\u201d) to exercise your rights on your behalf. To do this, you must provide your Authorized Agent with written permission to exercise your rights on your behalf, and we may request a copy of this written permission from your Authorized Agent when they make a request on your behalf."
                                }), (0, r.jsx)("p", {
                                    children: "Access"
                                }), (0, r.jsx)("p", {
                                    children: "You have the right to request certain information about our collection and use of your personal data over the past 12 months. In response to a Valid Request, we will provide you with the following information:"
                                }), (0, r.jsxs)("ul", {
                                    role: "list",
                                    children: [(0, r.jsx)("li", {
                                        children: "\u2022 The categories of personal data that you requested and that we have collected about you."
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 The categories of sources from which that personal data was collected."
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 The business or commercial purpose for collecting your personal data."
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 The categories of third parties with whom we have shared your personal data."
                                    }), (0, r.jsx)("li", {
                                        children: "\u2022 The specific pieces of Personal Data that you explicitly requested and that we have collected about you."
                                    })]
                                }), (0, r.jsx)("p", {
                                    children: "If we have disclosed your personal data to any third parties for a business purpose over the past 12 months, we will identify the categories of personal data shared with each category of third party recipient.\xa0"
                                }), (0, r.jsx)("p", {
                                    children: "Deletion"
                                }), (0, r.jsx)("p", {
                                    children: "You have the right to request that we delete the personal data that we have collected about you. Under the CCPA, this right is subject to certain exceptions: for example, we may need to retain your personal data to provide you with access to the App or complete a transaction or other action you have requested. If your deletion request is subject to one of these exceptions, we may deny your deletion request.\xa0"
                                }), (0, r.jsx)("p", {
                                    children: "We Do Not Sell Your Personal Data"
                                }), (0, r.jsx)("p", {
                                    children: "In this section, we use the term \u2018sell\u2019 as it is defined in the CCPA. We do not sell your personal data.\xa0"
                                }), (0, r.jsx)("p", {}), (0, r.jsx)("p", {
                                    children: "We Will Not Discriminate Against You for Exercising Your Rights Under the CCPA"
                                }), (0, r.jsx)("p", {
                                    children: "We will not discriminate against you for exercising your rights under the CCPA. We will not deny you our goods or services, charge you different prices or rates, or provide you a lower quality of goods and services if you exercise your rights under the CCPA. However, we may offer different tiers of our products or services as allowed by applicable data privacy laws (including the CCPA) with varying prices, rates or levels of quality of the goods or services you receive related to the value of personal data that we receive from you.\xa0"
                                }), (0, r.jsx)("p", {
                                    children: "13. How to Contact Us"
                                }), (0, r.jsxs)("p", {
                                    children: ["If you have a technical or support question, please contact\xa0", (0, r.jsx)("a", {
                                        href: "mailto:info@parallelnft.com",
                                        children: "info@parallelnft.com"
                                    }), ".\xa0"]
                                }), (0, r.jsx)("p", {
                                    children: "If you have a privacy concern, complaint, or a question for the Data Protection Officer of PARALLEL, please contact us by:\xa0"
                                }), (0, r.jsx)("p", {
                                    children: "Email:"
                                }), (0, r.jsxs)("p", {
                                    children: [(0, r.jsx)("a", {
                                        href: "mailto:info@parallelnft.com",
                                        children: "info@parallelnft.com"
                                    }), "\xa0"]
                                }), (0, r.jsx)("p", {
                                    children: "Mail:"
                                }), (0, r.jsx)("p", {
                                    children: "180 John St."
                                }), (0, r.jsx)("p", {
                                    children: "Toronto, ON"
                                }), (0, r.jsx)("p", {
                                    children: "Canada\xa0"
                                }), (0, r.jsx)("p", {
                                    children: "M5T 1X5\xa0"
                                }), (0, r.jsx)("p", {
                                    children: "We will respond to questions or concerns within 30 days."
                                })]
                            }), (0, r.jsx)(c.g_, {})]
                        })
                    })]
                })
            }
        },
        5152: function(e, t, o) {
            e.exports = o(90638)
        },
        9008: function(e, t, o) {
            e.exports = o(5443)
        }
    },
    function(e) {
        e.O(0, [5675, 2309, 8972, 9874, 9774, 2888, 179], (function() {
            return t = 94217, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);