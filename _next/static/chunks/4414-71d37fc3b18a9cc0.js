"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4414], {
        66453: function(e, a, s) {
            s.d(a, {
                Z: function() {
                    return n
                }
            });
            var l = s(85893),
                t = s(92010),
                r = s(86010),
                i = s(54412),
                o = s(90881);

            function n({
                className: e
            }) {
                const a = new Date;
                return (0, l.jsxs)("footer", {
                    className: (0, r.Z)("flex w-screen flex-col justify-between gap-6 whitespace-nowrap px-14 pb-14 pt-6 text-xs uppercase tracking-wide", e),
                    children: [(0, l.jsxs)("div", {
                        className: "flex w-full grid-cols-vertical-sandwich flex-col items-center gap-y-2 gap-x-6 lg:grid",
                        children: [(0, l.jsxs)("div", {
                            className: "order-2 flex flex-row gap-2",
                            children: [(0, l.jsx)(t.Vd, {
                                id: "footer-privacy-policy",
                                children: (0, l.jsx)(i.Z, {
                                    className: "font-semibold",
                                    color: i.M.White,
                                    href: "/privacy-policy/",
                                    children: "Privacy Policy"
                                })
                            }), (0, l.jsx)("span", {
                                className: "text-white/60",
                                children: "//"
                            }), (0, l.jsx)(t.Vd, {
                                id: "footer-terms",
                                children: (0, l.jsx)(i.Z, {
                                    className: "font-semibold",
                                    color: i.M.White,
                                    href: "/terms-of-use/",
                                    children: "Terms of Use"
                                })
                            })]
                        }), (0, l.jsx)(t.Vd, {
                            id: "footer-copyright",
                            vars: {
                                date: a
                            },
                            children: (0, l.jsxs)("div", {
                                className: "order-1 text-white/60 lg:order-2",
                                children: ["\xa9 Copyright ", (new Date).getFullYear(), " Parallel Studios"]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "order-2 flex flex-row gap-2 lg:justify-end",
                            children: [(0, l.jsx)(i.Z, {
                                className: "font-semibold",
                                color: i.M.White,
                                href: "https://discord.gg/paralleltcg",
                                externalLink: !0,
                                children: "Discord"
                            }), (0, l.jsx)("span", {
                                className: "text-white/60",
                                children: "//"
                            }), (0, l.jsx)(i.Z, {
                                className: "font-semibold",
                                color: i.M.White,
                                href: "https://twitter.com/paralleltcg/",
                                externalLink: !0,
                                children: "Twitter"
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex w-full flex-row justify-between",
                        children: [(0, l.jsx)(o.Z, {
                            className: "bg-white/40",
                            length: o.Q.Long
                        }), (0, l.jsx)(o.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: o.Q.Short
                        }), (0, l.jsx)("div", {}), (0, l.jsx)(o.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: o.Q.Short
                        }), (0, l.jsx)(o.Z, {
                            className: "hidden bg-white/40 lg:block",
                            length: o.Q.Short
                        }), (0, l.jsx)(o.Z, {
                            className: "bg-white/40",
                            length: o.Q.Short
                        })]
                    })]
                })
            }
        },
        6843: function(e, a, s) {
            s.d(a, {
                Z: function() {
                    return l.Z
                }
            });
            var l = s(66453)
        },
        31404: function(e, a, s) {
            s.d(a, {
                Aq: function() {
                    return x
                },
                VY: function() {
                    return h
                },
                kr: function() {
                    return m
                },
                ZP: function() {
                    return n
                }
            });
            var l = s(85893),
                t = s(67294),
                r = s(49874),
                i = s(6843);
            const o = (0, t.createContext)(null);

            function n({
                children: e,
                footer: a = !1
            }) {
                const [s, n] = (0, t.useState)(null);
                return (0, l.jsx)(o.Provider, {
                    value: s,
                    children: (0, l.jsxs)("div", {
                        className: "isolate grid min-h-screen grid-cols-[100vw] grid-rows-[auto_auto_1fr_auto]",
                        children: [(0, l.jsx)("div", {
                            className: "absolute h-screen w-full",
                            ref: n
                        }), (0, l.jsx)(r.Z, {}), e, a && (0, l.jsx)(i.Z, {})]
                    })
                })
            }
            var c = s(86010),
                d = s(73935);

            function x({
                children: e,
                className: a
            }) {
                const s = (0, t.useContext)(o);
                return s && (0, d.createPortal)((0, l.jsx)("div", {
                    className: (0, c.Z)("h-full w-full", a),
                    children: e
                }), s)
            }

            function h({
                children: e,
                className: a
            }) {
                return (0, l.jsx)("div", {
                    className: (0, c.Z)("z-10 col-span-full row-span-2 row-start-2", a),
                    children: e
                })
            }

            function m({
                children: e,
                className: a
            }) {
                return (0, l.jsx)("div", {
                    className: (0, c.Z)("z-10 col-span-full row-start-4", a),
                    children: e
                })
            }
        },
        90656: function(e, a, s) {
            s.d(a, {
                Z: function() {
                    return n
                }
            });
            var l = s(85893),
                t = s(67294),
                r = s(45204),
                i = s(12421),
                o = s(93079);

            function n({
                children: e,
                className: a
            }) {
                const s = (0, t.useRef)(null),
                    {
                        scrollYProgress: n
                    } = (0, r.v)({
                        target: s,
                        offset: ["start start", "end start"]
                    }),
                    c = (0, i.H)(n, [0, 1], ["0%", "70%"]);
                return (0, l.jsx)(o.E.div, {
                    className: a,
                    ref: s,
                    style: {
                        y: c
                    },
                    children: e
                })
            }
        },
        54414: function(e, a, s) {
            s.d(a, {
                Z: function() {
                    return ie
                }
            });
            var l = s(85893),
                t = s(31404),
                r = s(49089),
                i = s(11163),
                o = s(41664),
                n = s.n(o),
                c = s(86010),
                d = s(10154),
                x = s(90881),
                h = s(90656),
                m = s(11084),
                p = s(16893),
                g = s(67294);

            function u() {
                const e = (0, g.useRef)(null),
                    a = (0, p.Y)(e, {
                        once: !0
                    });
                return (0, g.useEffect)((() => {
                    a && async function() {
                        try {
                            var a;
                            await (null === (a = e.current) || void 0 === a ? void 0 : a.play())
                        } catch {}
                    }()
                }), [a]), (0, l.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 xs:gap-14",
                    children: (0, l.jsx)("div", {
                        className: "mx-6 max-w-[1500px] xs:border xs:border-white/20 xs:p-4",
                        children: (0, l.jsx)("video", {
                            controls: !0,
                            muted: !0,
                            ref: e,
                            onClick: () => r.ZP.event({
                                category: "Gameplay Video",
                                action: "Gameplay Video Play",
                                label: "Game Marketing Page"
                            }),
                            children: (0, l.jsx)("source", {
                                src: "https://storage.googleapis.com/prod-assets-parallel-life/videos/Marco_vs_Shroud.webm"
                            })
                        })
                    })
                })
            }

            function f({
                children: e,
                className: a
            }) {
                return (0, l.jsx)("h3", {
                    className: (0, c.Z)("text-center text-2xl font-semibold uppercase leading-none tracking-wide text-yellow lg:text-[2.625rem]", a),
                    children: e
                })
            }

            function b({
                className: e
            }) {
                return (0, l.jsxs)("div", {
                    className: (0, c.Z)("hidden lg:grid absolute inset-0 max-h-screen grid-rows-[4fr_5fr] grid-cols-[calc(404px)_auto_404px]", e),
                    children: [(0, l.jsx)(x.Z, {
                        className: "ml-14 mt-14 row-start-1 col-start-1"
                    }), (0, l.jsx)(x.Z, {
                        className: "ml-14 row-start-2 col-start-1"
                    }), (0, l.jsx)(x.Z, {
                        className: "mb-14 ml-14 row-start-2 col-start-1 self-end",
                        length: x.Q.Long
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 2xl:block row-start-2 col-start-2"
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 2xl:block mb-14 row-start-2 col-start-2 self-end",
                        length: x.Q.Short
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 2xl:block mb-14 row-start-2 col-start-2 self-end justify-self-center",
                        length: x.Q.Short
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 2xl:block mb-14 row-start-2 col-start-2 self-end justify-self-end",
                        length: x.Q.Short
                    }), (0, l.jsx)("div", {
                        className: "hidden 2xl:block row-span-full col-start-2 bg-white/20 w-px"
                    }), (0, l.jsx)("div", {
                        className: "hidden 2xl:block row-span-full col-start-2 bg-white/20 w-px justify-self-end"
                    })]
                })
            }

            function w() {
                const {
                    query: e
                } = (0, i.useRouter)(), {
                    user: a
                } = (0, d.ZP)();
                let s = "/signup/";
                return e.code && (s += `?code=${e.code.toString()}`), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(t.Aq, {
                        className: "relative overflow-hidden",
                        children: [(0, l.jsx)(h.Z, {
                            className: "absolute inset-0",
                            children: (0, l.jsx)("video", {
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                disablePictureInPicture: !0,
                                className: "h-full w-full object-cover object-center",
                                poster: "https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/poster.webp",
                                children: (0, l.jsx)("source", {
                                    src: "https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/00_Parallel_2023_Web_Supercut_NotDimmed_Final.webm",
                                    type: "video/webm"
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30"
                        })]
                    }), (0, l.jsxs)(t.VY, {
                        className: "relative isolate",
                        children: [(0, l.jsx)(b, {
                            className: "z-0"
                        }), (0, l.jsxs)("div", {
                            className: "isolate z-10 flex flex-col justify-center",
                            children: [(0, l.jsxs)("div", {
                                className: "mx-auto flex max-h-[60vh] w-fit flex-col items-start justify-center gap-8 px-6 py-10 xl:py-16 3xl:gap-14 3xl:py-32",
                                children: [(0, l.jsx)(x.Z, {
                                    className: "block lg:hidden"
                                }), (0, l.jsxs)("h1", {
                                    className: "whitespace-nowrap text-2xl font-medium uppercase !leading-none tracking-title text-yellow xs:text-3xl sm:text-5xl xl:text-6xl 3xl:text-7xl",
                                    children: ["Join The Fight", (0, l.jsx)("br", {}), "Be first to play", (0, l.jsx)("br", {}), (0, l.jsx)("span", {
                                        className: "inline-block bg-yellow leading-none text-black",
                                        children: "Parallel"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "uppercase tracking-halfwide text-white/60 xs:font-medium xl:text-2xl 3xl:text-4xl",
                                    children: ["Free to play digital", " ", (0, l.jsx)("span", {
                                        className: "font-semibold text-yellow",
                                        children: "trading card game"
                                    })]
                                }), (0, l.jsx)(x.Z, {
                                    className: "block md:mb-16 lg:hidden"
                                }), (0, l.jsx)(n(), {
                                    href: a ? "/earlyaccess/" : s,
                                    onClick: () => r.ZP.event({
                                        category: "Sign up",
                                        action: "Hero Sign up Link Click",
                                        label: "Game Marketing Page"
                                    }),
                                    className: (0, c.Z)("relative inline-block w-full whitespace-nowrap border border-yellow bg-yellow px-8 py-3 text-center text-base font-bold uppercase tracking-wide text-black transition-colors duration-200 hover:bg-white sm:w-fit sm:text-xl"),
                                    children: "Sign up for early access"
                                })]
                            }), (0, l.jsx)(u, {}), (0, l.jsxs)("div", {
                                className: "mx-6 flex grow flex-col gap-7 py-8 sm:items-center lg:py-32",
                                children: [(0, l.jsx)(f, {
                                    children: "Battle for your Parallel Faction."
                                }), (0, l.jsxs)("div", {
                                    className: "text-center text-xl uppercase tracking-halfwide text-white/40 sm:font-semibold lg:text-4xl",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-white",
                                        children: "Futuristic"
                                    }), ",", " ", (0, l.jsx)("span", {
                                        className: "text-white",
                                        children: "fast-paced"
                                    }), " and", " ", (0, l.jsx)("span", {
                                        className: "text-white",
                                        children: "addicting"
                                    }), "."]
                                }), (0, l.jsxs)("div", {
                                    className: "mt-4 flex flex-wrap justify-center gap-5 sm:gap-10",
                                    children: [(0, l.jsx)(m.Z, {
                                        href: "/game-manual/world-of-parallel/",
                                        color: "gray",
                                        external: !0,
                                        onClick: () => {
                                            r.ZP.event({
                                                category: "Game manual",
                                                action: "Game Manual Link Click",
                                                label: "Game Marketing Page"
                                            })
                                        },
                                        children: "Game manual"
                                    }), (0, l.jsx)(m.Z, {
                                        href: a ? "/earlyaccess/" : s,
                                        appearance: "solid",
                                        external: !0,
                                        onClick: () => {
                                            r.ZP.event({
                                                category: "Sign up",
                                                action: "Get Early Access Link Click",
                                                label: "Game Marketing Page"
                                            })
                                        },
                                        children: "Get early access"
                                    }), (0, l.jsx)(m.Z, {
                                        href: "/faq/gameplay/",
                                        color: "gray",
                                        external: !0,
                                        onClick: () => {
                                            r.ZP.event({
                                                category: "Game FAQ",
                                                action: "Gameplay FAQ Link Click",
                                                label: "Game Marketing Page"
                                            })
                                        },
                                        children: "Gameplay FAQ"
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
            var j = s(29260),
                v = s.n(j),
                A = {
                    src: "/_next/static/media/002_RG_2021_FULL_LOCKUP_OFFWHITE.49d66775.png",
                    height: 688,
                    width: 2451,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEXx9fHx9fHx9fHx9fHx9fHx9fHw9PDx9fHw9fB0421PAAAACXRSTlN5a4evDAGcXe1f9VOpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGklEQVR4nGNg5mBgYGBnYWVgYGNkZGBiYgQAAbcAKUE9RhAAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 2
                },
                N = {
                    src: "/_next/static/media/Blizz_Corp_RGB_DarkBkgd.24ca3401.png",
                    height: 908,
                    width: 1550,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEUAr/4BqPcLitAJkdkFpO0KkNgMiM4FnukCqPcHl+EHl+EDpfMHluBMaXECqPcFnumnK84JAAAAEHRSTlMRjjdNCrlIp3WGkSOfAGnJ7vjsqwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJwFwYcBACAIwLAyFVz/f2uCqaZmOtFWEVsZw+rtXojInFcAljucDxPXAN99j5FdAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                k = {
                    src: "/_next/static/media/Xbox_Game_Studios_(2021)-white.1787820b.png",
                    height: 584,
                    width: 1e3,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAGFBMVEX///////////////////////////////8pK8DIAAAACHRSTlMBUV9BLG0gxbLFIY8AAAAJcEhZcwABdwAAAXcAAeYC4S8AAAAmSURBVHicJcZBEgAgCMPApgX5/48dNJespGr0OuN/nCzKsHATbC4F/wBF3pCpXAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                y = {
                    src: "/_next/static/media/wotc-logo.299cbb70.png",
                    height: 174,
                    width: 328,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAQlBMVEVBKn+BiNeJk99dU7+y2/RvctlRQJ5iWbxDLII6JXG15v1ro/pCLX+57v4+J3hTRKFbTLpmmd5TQaFomd9ro/hyft0L/e9PAAAAFnRSTlODmbC9bbXJJ5FN2JfCrGWlgFqOU7FAHUUhIQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJwFwYUBACAMA7ACU1z/f5UE3mEwOKrMEJMAg0vLlzdUF9F5+gEQ0wEWmc68eQAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                },
                C = {
                    src: "/_next/static/media/Epic_Games_logo.df909917.png",
                    height: 2048,
                    width: 1764,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAM1BMVEUyMDFSUFGOjY5ubW4hHyAvLS5FQ0SCgYEuLC1wb29BP0BjYWI4Njefnp62tbanpqdMSkt8WpMEAAAACnRSTlP+/vvxRsmu/fIBPzjb/AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwdxUESwCAIBMFJoqILgv9/rVXpSzOlCE20d1bFf3qgMs8S+HPcATN7DTo6orPa+EZbF0hTAfO4VhblAAAAAElFTkSuQmCC",
                    blurWidth: 7,
                    blurHeight: 8
                };

            function Z() {
                return (0, l.jsxs)("div", {
                    className: "flex flex-col items-center gap-y-8 bg-white/10 py-16 xs:gap-16",
                    children: [(0, l.jsx)("div", {
                        className: "mx-6 flex flex-col gap-4 xs:items-center",
                        children: (0, l.jsxs)("div", {
                            className: "text-center uppercase tracking-halfwide text-white/40 sm:text-2xl sm:font-medium",
                            children: ["Brought to you by the", " ", (0, l.jsx)("span", {
                                className: "text-white/80",
                                children: "artists & developers"
                            }), " from"]
                        })
                    }), (0, l.jsxs)("div", {
                        className: "flex w-full max-w-[1400px] flex-row flex-wrap items-center justify-around gap-8 px-6",
                        children: [(0, l.jsx)(v(), {
                            className: "max-w-[125px] object-contain",
                            src: A,
                            alt: "Riot Games",
                            height: 68
                        }), (0, l.jsx)(v(), {
                            className: "max-w-[125px] object-contain",
                            src: N,
                            alt: "Blizzard",
                            height: 68
                        }), (0, l.jsx)(v(), {
                            className: "max-w-[125px] object-contain",
                            src: k,
                            alt: "Xbox Game Studios",
                            height: 68
                        }), (0, l.jsx)(v(), {
                            className: "max-w-[125px] object-contain",
                            src: y,
                            alt: "Wizards of the Coast",
                            height: 68
                        }), (0, l.jsx)(v(), {
                            className: "max-w-[125px] object-contain",
                            src: C,
                            alt: "Epic Games",
                            height: 68
                        })]
                    })]
                })
            }
            var _ = s(93079),
                B = s(92010),
                P = s(78326),
                E = s(51574),
                S = s(26218),
                M = s(79695),
                F = s(78366),
                G = s(96699);
            const I = {
                [S.Z.Marcolian]: {
                    cards: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Marcolian/Marc_01.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Marcolian/Marc_02.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Marcolian/Marc_03.webp")],
                    cardBack: (0, G.BH)("https://cdn.parallelnft.com/unsafe/600x900/https://prl-content-publish-prod.s3.amazonaws.com/Cards/Mcl_IconOfStrength/Mcl_IconOfStrength_Non_Prm_Cb_Img.png")
                },
                [S.Z.Augencore]: {
                    cards: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Augencore/Augen_01.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Augencore/Augen_02.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Augencore/Augen_03.webp")],
                    cardBack: (0, G.BH)("https://cdn.parallelnft.com/unsafe/600x900/https://prl-content-publish-prod.s3.amazonaws.com/Cards/Agc_IconOfIngenuity/Agc_IconOfIngenuity_Non_Prm_Cb_Img.png")
                },
                [S.Z.Kathari]: {
                    cards: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Kathari/Kath_01.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Kathari/Kath_02.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Kathari/Kath_03.webp")],
                    cardBack: (0, G.BH)("https://cdn.parallelnft.com/unsafe/600x900/https://prl-content-publish-prod.s3.amazonaws.com/Cards/Kat_IconOfUnity/Kat_IconOfUnity_Non_Prm_Cb_Img.png")
                },
                [S.Z.Earthen]: {
                    cards: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Earthen/Earth_01.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Earthen/Earth_02.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Earthen/Earth_03.webp")],
                    cardBack: (0, G.BH)("https://cdn.parallelnft.com/unsafe/600x900/https://prl-content-publish-prod.s3.amazonaws.com/Cards/Ert_EarthenInterfaceCB/Ert_EarthenInterfaceCB_Non_Prm_Cb_Img.png")
                },
                [S.Z.Shroud]: {
                    cards: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Shroud/Shro_01-19.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Shroud/Shro_01-20.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Shroud/Shro_01-21.webp")],
                    cardBack: (0, G.BH)("https://cdn.parallelnft.com/unsafe/600x900/https://prl-content-publish-prod.s3.amazonaws.com/Cards/Shr_IconOfFate/Shr_IconOfFate_Non_Prm_Cb_Img.png")
                }
            };
            var H = s(77521);

            function U({
                src: e
            }) {
                return e
            }

            function L({
                faction: e,
                url: a,
                cardBackUrl: s,
                defaultOpen: t
            }) {
                const i = function(e) {
                        switch (e) {
                            case S.Z.Earthen:
                                return "bg-gradient-to-br from-earthen-green to-earthen-green/0";
                            case S.Z.Augencore:
                                return "bg-gradient-to-br from-augencore-orange to-augencore-orange/0";
                            case S.Z.Marcolian:
                                return "bg-gradient-to-br from-marcolian-red to-marcolian-red/0";
                            case S.Z.Kathari:
                                return "bg-gradient-to-br from-kathari-blue to-kathari-blue/0";
                            case S.Z.Shroud:
                                return "bg-gradient-to-br from-shroud-purple to-shroud-purple/0"
                        }
                    }(e),
                    [o, n] = (0, g.useState)(t);
                return (0, l.jsxs)("div", {
                    className: (0, c.Z)("group relative w-full", !o && "hover:cursor-pointer"),
                    children: [(0, l.jsx)("div", {
                        className: (0, c.Z)("group absolute top-0 flex h-full w-full scale-105 items-center opacity-80 blur-lg transition duration-300 ease-out", i, o ? "scale-110 opacity-100 blur-xl" : "group-hover:opacity-100 group-hover:blur-xl")
                    }), (0, l.jsx)(H.Z, {
                        tiltEnable: o,
                        children: (0, l.jsx)("div", {
                            className: "relative aspect-[2935/3670] w-full transition duration-300 ease-out hover:scale-[1.01] lg:max-h-[300px] lg:min-h-[300px] lg:w-auto 3xl:max-h-[400px]",
                            onClick: () => {
                                r.ZP.event({
                                    category: "Cards",
                                    action: "Card Flip Click",
                                    label: "Game Marketing Page"
                                }), n(!0)
                            },
                            children: (0, l.jsxs)(_.E.div, {
                                variants: {
                                    selected: {
                                        rotateY: 180,
                                        scale: 1.1,
                                        transition: {
                                            duration: .6,
                                            ease: "easeOut"
                                        }
                                    },
                                    notSelected: {
                                        rotateY: 0,
                                        scale: 1,
                                        transition: {
                                            duration: .6,
                                            ease: "easeOut"
                                        }
                                    }
                                },
                                animate: o ? "selected" : "notSelected",
                                className: "relative flex h-full w-full items-center",
                                style: {
                                    transformStyle: "preserve-3d"
                                },
                                children: [(0, l.jsx)("div", {
                                    className: (0, c.Z)("absolute h-full w-full", i)
                                }), (0, l.jsx)(v(), {
                                    className: "absolute object-cover object-top p-[2px]",
                                    src: s,
                                    loader: U,
                                    layout: "fill",
                                    alt: "Faction Card",
                                    style: {
                                        backfaceVisibility: "hidden"
                                    }
                                }), (0, l.jsx)(v(), {
                                    className: "absolute object-contain p-[2px]",
                                    src: a,
                                    loader: U,
                                    layout: "fill",
                                    alt: "Card Back",
                                    style: {
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)"
                                    }
                                })]
                            }, a)
                        })
                    })]
                })
            }

            function W({
                faction: e,
                cardIndex: a,
                cardsAmountsToShow: s
            }) {
                const t = s ? ? I[e].cards.length,
                    r = I[e].cardBack.url;
                return (0, l.jsx)("div", {
                    className: "flex w-full justify-end gap-10",
                    children: I[e].cards.slice(a, a + t).map((({
                        url: a
                    }, s) => (0, l.jsx)(L, {
                        url: a,
                        faction: e,
                        cardBackUrl: r,
                        defaultOpen: 0 === s
                    }, a)))
                })
            }

            function V({
                faction: e
            }) {
                const a = I[e].cardBack.url;
                return (0, l.jsx)("div", {
                    className: "flex w-full max-w-[500px] flex-col items-center gap-32 p-10",
                    children: I[e].cards.map((({
                        url: s
                    }, t) => (0, l.jsx)(L, {
                        faction: e,
                        url: s,
                        cardBackUrl: a,
                        defaultOpen: 0 === t
                    }, s)))
                })
            }

            function R({
                faction: e,
                containerWidth: a,
                factionBackgroundSize: s
            }) {
                const [t, r] = (0, g.useState)(0), i = a - s, o = I[e].cards.length, n = i / 280, d = Math.ceil(n) - n < .6 ? Math.ceil(n) : Math.floor(n), x = `-${280*(d<=o?d-i/280:0)}px`, h = d >= o;
                return (0, l.jsxs)("div", {
                    className: (0, c.Z)("flex w-1/2 flex-col justify-center gap-6 pr-5"),
                    style: {
                        translate: x
                    },
                    children: [(0, l.jsx)("div", {
                        className: "h-[34px] w-full"
                    }), (0, l.jsx)("div", {
                        className: "flex w-full items-end",
                        children: (0, l.jsx)(W, {
                            faction: e,
                            cardIndex: t,
                            cardsAmountsToShow: d
                        })
                    }), (0, l.jsx)("div", {
                        className: (0, c.Z)("visible flex h-[34px] w-full justify-end", h && "invisible"),
                        children: (0, l.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, l.jsx)(F.Z, {
                                disabled: 0 === t,
                                onClick: () => r(t - 1),
                                children: (0, l.jsx)(M.Z, {
                                    className: "h-6 w-6 rotate-90"
                                })
                            }), (0, l.jsx)(F.Z, {
                                disabled: t === I[e].cards.length - d,
                                onClick: () => r(t + 1),
                                children: (0, l.jsx)(M.Z, {
                                    className: "h-6 w-6 -rotate-90"
                                })
                            })]
                        })
                    })]
                })
            }

            function O(e) {
                switch (e) {
                    case S.Z.Earthen:
                        return "bg-game-gradient-earthen";
                    case S.Z.Augencore:
                        return "bg-game-gradient-augencore";
                    case S.Z.Marcolian:
                        return "bg-game-gradient-marcolian";
                    case S.Z.Kathari:
                        return "bg-game-gradient-kathari";
                    case S.Z.Shroud:
                        return "bg-game-gradient-shroud"
                }
            }

            function D({
                faction: e
            }) {
                const [a, s] = (0, g.useState)(null), [t, i] = (0, g.useState)(null), {
                    width: o
                } = (0, P.Z)(a) ? ? {
                    width: 0
                }, {
                    width: n
                } = (0, P.Z)(t) ? ? {
                    width: 0
                };
                return (0, l.jsxs)("div", {
                    className: "relative flex aspect-[5/2] min-h-[758px] w-full justify-between border-y border-white/20",
                    ref: s,
                    children: [(0, l.jsx)("div", {
                        className: (0, c.Z)("w-7/12 min-w-[600px] bg-cover bg-center bg-no-repeat", O(e)),
                        ref: i,
                        children: (0, l.jsx)("div", {
                            className: "flex h-full w-[470px] py-24 pl-24",
                            children: (0, l.jsx)("div", {
                                className: "flex h-full w-[470px] justify-between",
                                children: (0, l.jsxs)("div", {
                                    className: "flex h-full max-w-[470px] flex-col justify-between",
                                    children: [(0, l.jsxs)("div", {
                                        className: "relative flex w-fit flex-row items-center gap-8 text-white",
                                        children: [(0, l.jsx)("div", {
                                            className: "absolute inset-0 bg-black blur-xl"
                                        }), (0, l.jsx)(E.Z, {
                                            size: 45,
                                            faction: e,
                                            className: "relative"
                                        }), (0, l.jsx)("div", {
                                            className: "relative text-[26px] font-medium uppercase tracking-[0.3em]",
                                            children: e
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "relative flex flex-col gap-5",
                                        children: [(0, l.jsx)("div", {
                                            className: "absolute inset-0 bg-black/80 blur-2xl"
                                        }), (0, l.jsx)(B.Vd, {
                                            id: `${e}-subtitle`,
                                            elems: {
                                                subtitlePrefix: (0, l.jsx)("span", {
                                                    className: "text-white"
                                                })
                                            },
                                            children: (0, l.jsx)("div", {
                                                className: "relative text-2.5xl font-medium uppercase leading-none tracking-title text-yellow",
                                                children: "The Earth Dwellers"
                                            })
                                        }), (0, l.jsx)(x.Z, {}), (0, l.jsx)(B.Vd, {
                                            id: `${e}-body`,
                                            children: (0, l.jsx)("div", {
                                                className: "relative text-left text-sm font-semibold uppercase tracking-wide text-white/60"
                                            })
                                        }), (0, l.jsxs)(m.Z, {
                                            href: `/story/${e}/`,
                                            external: !0,
                                            className: "w-fit",
                                            color: "gray",
                                            onClick: () => {
                                                r.ZP.event({
                                                    category: "Story",
                                                    action: `${e} Lore Link Click`,
                                                    label: "Game Marketing Page"
                                                })
                                            },
                                            children: ["Story of ", e]
                                        })]
                                    })]
                                })
                            })
                        })
                    }), (0, l.jsx)(R, {
                        faction: e,
                        containerWidth: o,
                        factionBackgroundSize: n
                    })]
                })
            }
            const z = [S.Z.Earthen, S.Z.Augencore, S.Z.Marcolian, S.Z.Kathari, S.Z.Shroud];
            var J = s(28240);

            function K(e) {
                switch (e) {
                    case S.Z.Earthen:
                        return "bg-home-earthen";
                    case S.Z.Augencore:
                        return "bg-home-augencore";
                    case S.Z.Marcolian:
                        return "bg-home-marcolian";
                    case S.Z.Kathari:
                        return "bg-home-kathari";
                    case S.Z.Shroud:
                        return "bg-home-shroud"
                }
            }

            function Q({
                faction: e
            }) {
                const [a, s] = (0, g.useState)(!1);
                return (0, l.jsxs)("div", {
                    className: "flex w-full flex-col justify-between border border-white/20",
                    children: [(0, l.jsxs)("div", {
                        className: "relative flex aspect-[335/274] max-h-[400px] min-h-[274px] w-full",
                        children: [(0, l.jsx)("div", {
                            className: (0, c.Z)("h-full w-full bg-cover bg-[center_top_1px] bg-no-repeat", K(e))
                        }), (0, l.jsx)("div", {
                            className: "absolute h-full w-full bg-gradient-to-b from-black/10 via-black/10 to-black"
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex w-full grow flex-col gap-7 p-7",
                        children: [(0, l.jsxs)("div", {
                            className: "flex flex-row items-center gap-5 text-white",
                            children: [(0, l.jsx)(E.Z, {
                                size: 30,
                                faction: e
                            }), (0, l.jsx)("div", {
                                className: "text-[20px] font-semibold uppercase tracking-[0.3em]",
                                children: e
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col gap-7",
                            children: [(0, l.jsx)(B.Vd, {
                                id: `${e}-subtitle`,
                                elems: {
                                    subtitlePrefix: (0, l.jsx)("span", {
                                        className: "text-white"
                                    })
                                },
                                children: (0, l.jsx)("div", {
                                    className: "text-[21px] font-medium uppercase leading-none tracking-title text-yellow",
                                    children: "The Earth Dwellers"
                                })
                            }), (0, l.jsx)(x.Z, {}), (0, l.jsx)(B.Vd, {
                                id: `${e}-body`,
                                children: (0, l.jsx)("div", {
                                    className: "text-left text-xs font-semibold uppercase tracking-wide text-white/60"
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "flex h-full w-full flex-col gap-6",
                            children: (0, l.jsxs)("div", {
                                className: "flex h-full w-full flex-col gap-10",
                                children: [(0, l.jsx)("div", {
                                    onClick: () => {
                                        r.ZP.event({
                                            category: "Cards",
                                            action: "Mobile View Cards Click",
                                            label: "Game Marketing Page"
                                        }), s(J.ffD)
                                    },
                                    className: "z-10 flex min-h-[40px] w-full cursor-pointer bg-black/20",
                                    children: (0, l.jsxs)("div", {
                                        className: "flex w-full items-center gap-3 text-sm font-semibold uppercase",
                                        children: [(0, l.jsx)("div", {
                                            children: " View Cards"
                                        }), (0, l.jsx)(M.Z, {
                                            className: (0, c.Z)("h-5 w-5", a && "rotate-180")
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: (0, c.Z)("flex w-full justify-center", !a && "hidden"),
                                    children: (0, l.jsx)(V, {
                                        faction: e
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }

            function T() {
                return (0, l.jsx)("div", {
                    className: "mb-6 flex w-full lg:hidden",
                    children: (0, l.jsx)("div", {
                        className: "flex h-full grow flex-col gap-6 px-5",
                        children: z.map((e => (0, l.jsx)(_.E.div, {
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                amount: .1
                            },
                            transition: {
                                duration: .3
                            },
                            variants: {
                                visible: {
                                    opacity: 1
                                },
                                hidden: {
                                    opacity: .2
                                }
                            },
                            id: e,
                            className: "flex w-full",
                            children: (0, l.jsx)(Q, {
                                faction: e
                            })
                        }, e)))
                    })
                })
            }

            function Y() {
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: "hidden flex-col overflow-hidden lg:flex",
                        children: z.map((e => (0, l.jsx)(_.E.div, {
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                amount: .5
                            },
                            transition: {
                                duration: .2
                            },
                            variants: {
                                visible: {
                                    opacity: 1
                                },
                                hidden: {
                                    opacity: .2
                                }
                            },
                            id: e,
                            className: "flex w-full",
                            children: (0, l.jsx)(D, {
                                faction: e
                            })
                        }, e)))
                    }), (0, l.jsx)(T, {})]
                })
            }
            var q = s(21907);

            function X() {
                const {
                    query: e
                } = (0, i.useRouter)(), {
                    user: a
                } = (0, d.ZP)();
                let s = "/signup/";
                return e.code && (s += `?code=${e.code.toString()}`), (0, l.jsxs)("div", {
                    className: "relative grid grid-cols-[0_auto] grid-rows-[320px_auto_320px] overflow-hidden bg-white/4 xl:grid-cols-[0_auto_304px] 3xl:grid-cols-[calc(404px)_auto_404px]",
                    children: [(0, l.jsx)(x.Z, {
                        className: "hidden 3xl:block ml-14 mt-14 row-start-1 col-start-1",
                        length: x.Q.Long
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 3xl:block mt-14 row-start-1 col-start-2",
                        length: x.Q.Short
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 3xl:block mt-14 row-start-1 col-start-2 justify-self-center",
                        length: x.Q.Short
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 3xl:block mt-14 row-start-1 col-start-2 justify-self-end",
                        length: x.Q.Short
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 3xl:block mr-14 mt-14 row-start-1 col-start-3 justify-self-end",
                        length: x.Q.Short
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 3xl:block ml-14 row-start-2 col-start-1 self-end"
                    }), (0, l.jsx)(x.Z, {
                        className: "hidden 3xl:block mt-14 row-start-2 col-start-2 self-end"
                    }), (0, l.jsx)("div", {
                        className: "hidden 3xl:block row-span-full col-start-2 bg-white/20 w-px"
                    }), (0, l.jsx)("div", {
                        className: "hidden 3xl:block row-span-full col-start-2 bg-white/20 w-px justify-self-end"
                    }), (0, l.jsxs)("div", {
                        className: "relative col-start-2 row-start-2 flex flex-col gap-32 self-end justify-self-stretch px-6 md:px-16",
                        children: [(0, l.jsxs)("div", {
                            children: [(0, l.jsx)(x.Z, {
                                className: "mb-16 block 3xl:hidden"
                            }), (0, l.jsx)(B.Vd, {
                                id: "sign-up-for-early-access",
                                elems: {
                                    break: (0, l.jsx)("br", {}),
                                    highlight: (0, l.jsx)("span", {
                                        className: "inline-block bg-yellow leading-none text-black"
                                    })
                                },
                                children: (0, l.jsx)("h1", {
                                    className: "whitespace-nowrap text-3xl font-medium uppercase !leading-none tracking-title text-yellow xs:text-3xl sm:text-5xl lg:text-page-title",
                                    children: "Sign up for<break></break><highlight>Early Access</highlight>"
                                })
                            }), (0, l.jsx)(x.Z, {
                                className: "mt-32 block 3xl:hidden"
                            })]
                        }), (0, l.jsx)("div", {
                            className: "xl:at-y-center relative aspect-square w-[525px] -translate-y-1/2 self-end overflow-hidden bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/priming.png)] bg-cover bg-center bg-no-repeat xl:absolute xl:right-0 xl:translate-x-1/2",
                            children: (0, l.jsx)("div", {
                                className: "at-center absolute w-full",
                                children: (0, l.jsx)(B.Vd, {
                                    id: "create-an-account",
                                    elems: {
                                        break: (0, l.jsx)("br", {})
                                    },
                                    children: (0, l.jsx)(q.Z, {
                                        onClick: () => {
                                            r.ZP.event({
                                                category: "Sign up",
                                                action: "Footer Sign up Click",
                                                label: "Game Marketing Page"
                                            }), window.open(a ? "/earlyaccess/" : s, "_blank")
                                        },
                                        className: "translate-x-[23px]",
                                        children: "Create an<break></break>account"
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
            const $ = () => (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                    className: "absolute -left-4 top-0 h-2 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -right-4 top-0 h-2 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -left-4 top-[30%] h-1 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -right-4 top-[30%] h-1 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -left-4 bottom-4 h-2 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -right-4 bottom-4 h-2 w-[1px] bg-white"
                })]
            });

            function ee() {
                const e = e => {
                    const a = document.getElementById("gameDescriptionCardContainer"),
                        s = document.getElementById("gameDescriptionCard");
                    a && s && (null === a || void 0 === a || a.scrollBy(parseInt(`${e}${null===s||void 0===s?void 0:s.offsetWidth}`), 0))
                };
                return (0, l.jsxs)("div", {
                    className: "relative flex w-full justify-center",
                    children: [(0, l.jsxs)("div", {
                        id: "gameDescriptionCardContainer",
                        className: "scrollbar-hide flex w-full snap-x gap-14 overflow-scroll scroll-smooth px-24 pb-4 lg:max-w-[1600px] lg:gap-24 xl:overflow-auto xl:px-10",
                        children: [(0, l.jsxs)("div", {
                            id: "gameDescriptionCard",
                            className: "group relative w-full min-w-[70vw] snap-center sm:min-w-[400px]",
                            children: [(0, l.jsx)($, {}), (0, l.jsxs)("div", {
                                className: "flex min-h-[400px] overflow-hidden lg:min-h-[500px]",
                                children: [(0, l.jsx)("div", {
                                    className: "w-full bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/CAINE-1.webp)] bg-cover bg-center transition duration-[5s] ease-linear group-hover:-translate-y-10 group-hover:scale-110"
                                }), (0, l.jsxs)("div", {
                                    className: "absolute -inset-x-4 -bottom-4 flex flex-col gap-5 self-end border border-white/20 bg-black/30 p-10 backdrop-blur-sm",
                                    children: [(0, l.jsx)("div", {
                                        className: "text-base font-semibold uppercase tracking-wide text-yellow sm:text-xl",
                                        children: "Build a unique deck"
                                    }), (0, l.jsx)("p", {
                                        className: "text-xs tracking-wide sm:text-sm",
                                        children: "Stand with a Parallel and fight for home. Build a deck, strategize, express your style of play."
                                    })]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "group relative w-full min-w-[70vw] snap-center sm:min-w-[400px]",
                            children: [(0, l.jsx)($, {}), (0, l.jsxs)("div", {
                                className: "flex min-h-[400px] overflow-hidden lg:min-h-[500px]",
                                children: [(0, l.jsx)("div", {
                                    className: "w-full bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/City%20of%20Valli%20-%20Top%20down%20view.webp)] bg-cover bg-center transition duration-[5s] ease-linear group-hover:-translate-y-10 group-hover:scale-110"
                                }), (0, l.jsxs)("div", {
                                    className: "absolute -inset-x-4 -bottom-4 flex flex-col gap-5 self-end border border-white/20 bg-black/30 p-10 backdrop-blur-sm",
                                    children: [(0, l.jsx)("div", {
                                        className: "text-base font-semibold uppercase tracking-wide text-yellow sm:text-xl",
                                        children: "Compete worldwide"
                                    }), (0, l.jsx)("p", {
                                        className: "text-xs tracking-wide sm:text-sm",
                                        children: "Bank cards to build up powerful combos. Deploy units to overwhelm your opponent. Use abilities to force a retreat."
                                    })]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "group relative w-full min-w-[70vw] snap-center sm:min-w-[400px]",
                            children: [(0, l.jsx)($, {}), (0, l.jsxs)("div", {
                                className: "flex min-h-[400px] overflow-hidden lg:min-h-[500px]",
                                children: [(0, l.jsx)("div", {
                                    className: "w-full bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Corrupted%20New%20Dawn.webp)] bg-cover bg-center transition duration-[5s] ease-linear group-hover:-translate-y-10 group-hover:scale-110"
                                }), (0, l.jsxs)("div", {
                                    className: "absolute -inset-x-4 -bottom-4 flex flex-col gap-5 self-end border border-white/20 bg-black/30 p-10 backdrop-blur-sm",
                                    children: [(0, l.jsx)("div", {
                                        className: "text-base font-semibold uppercase tracking-wide text-yellow sm:text-xl",
                                        children: "Claim victory"
                                    }), (0, l.jsx)("p", {
                                        className: "text-xs tracking-wide sm:text-sm",
                                        children: "Win PRIME to expand your deck and compete at higher levels. Dominate the leaderboards."
                                    })]
                                })]
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "absolute left-5 top-1/2 block -translate-y-1/2 bg-black/50 xl:hidden",
                        children: (0, l.jsx)(F.Z, {
                            onClick: () => e("-"),
                            children: (0, l.jsx)(M.Z, {
                                className: "h-10 w-10 rotate-90"
                            })
                        })
                    }), (0, l.jsx)("div", {
                        className: "absolute right-5 top-1/2 block -translate-y-1/2 bg-black/50 xl:hidden",
                        children: (0, l.jsx)(F.Z, {
                            onClick: () => e(""),
                            children: (0, l.jsx)(M.Z, {
                                className: "h-10 w-10 -rotate-90"
                            })
                        })
                    })]
                })
            }
            var ae = s(45204),
                se = s(12421);

            function le() {
                const e = (0, g.useRef)(null),
                    {
                        scrollYProgress: a
                    } = (0, ae.v)({
                        target: e
                    }),
                    s = (0, se.H)(a, [0, 1], [-340, -100]),
                    t = (0, p.Y)(e);
                return (0, l.jsxs)("div", {
                    className: "relative flex min-h-[350px] w-full justify-center overflow-hidden py-32 lg:py-44",
                    children: [(0, l.jsx)(_.E.img, {
                        style: {
                            y: s
                        },
                        src: "https://parallel.life/images/bgEarth.webp",
                        className: "absolute -z-10 max-w-[1500px] brightness-[1.6] contrast-[1.15]"
                    }), (0, l.jsxs)(_.E.div, {
                        ref: e,
                        className: "flex max-w-3xl flex-col gap-8 px-5 text-center text-base tracking-wide text-white/70 sm:text-lg",
                        children: [(0, l.jsx)(_.E.p, {
                            animate: t ? "visible" : "hidden",
                            variants: {
                                visible: {
                                    opacity: 1,
                                    y: 0
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 60
                                }
                            },
                            transition: {
                                duration: 1,
                                ease: "easeOut"
                            },
                            children: "Humanity, depleting the Earth of its resources, hastily began experimenting with fission and anti-matter."
                        }), (0, l.jsxs)(_.E.p, {
                            animate: t ? "visible" : "hidden",
                            variants: {
                                visible: {
                                    opacity: 1,
                                    y: 0
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 120
                                }
                            },
                            transition: {
                                duration: 2.5,
                                ease: "easeOut"
                            },
                            children: ["Catastrophe was unleashed, leading to a mass exodus from their home.", (0, l.jsx)("br", {}), "Five ", (0, l.jsx)("span", {
                                className: "text-yellow",
                                children: "Parallel"
                            }), " civilizations rose from the remnants of humanity."]
                        }), (0, l.jsx)(_.E.p, {
                            animate: t ? "visible" : "hidden",
                            variants: {
                                visible: {
                                    opacity: 1,
                                    y: 0
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 180
                                }
                            },
                            transition: {
                                duration: 4,
                                ease: "easeOut"
                            },
                            children: "After 10,000 years, Earth had healed, and a new energy source beckoned the Parallels back as they vied for control of their ancestral home."
                        }), (0, l.jsx)(_.E.div, {
                            animate: t ? "visible" : "hidden",
                            variants: {
                                visible: {
                                    opacity: 1,
                                    y: 0
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 240
                                }
                            },
                            transition: {
                                duration: 5,
                                ease: "easeOut"
                            },
                            children: (0, l.jsx)(m.Z, {
                                external: !0,
                                href: "/story/",
                                onClick: () => {
                                    r.ZP.event({
                                        category: "Story",
                                        action: "Explore Lore Link Click",
                                        label: "Game Marketing Page"
                                    })
                                },
                                children: "Explore the lore"
                            })
                        })]
                    })]
                })
            }
            const te = () => (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                    className: "absolute -left-4 top-0 h-2 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -right-4 top-0 h-2 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -left-4 top-[30%] h-1 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -right-4 top-[30%] h-1 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -left-4 bottom-4 h-2 w-[1px] bg-white"
                }), (0, l.jsx)("div", {
                    className: "absolute -right-4 bottom-4 h-2 w-[1px] bg-white"
                })]
            });

            function re() {
                return (0, l.jsx)("div", {
                    className: "my-24 flex w-full justify-center",
                    children: (0, l.jsxs)("div", {
                        className: "px-10",
                        children: [(0, l.jsxs)("div", {
                            className: "mb-14 flex flex-col items-center gap-4",
                            children: [(0, l.jsx)("div", {
                                className: "text-2xl font-semibold uppercase leading-none tracking-wide text-yellow sm:text-center sm:text-4xl",
                                children: "Discover more"
                            }), (0, l.jsx)("div", {
                                className: "inline-block bg-yellow text-5xl font-semibold uppercase leading-none tracking-wide text-black sm:text-7xl",
                                children: "Parallel"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col gap-10 pb-4 sm:gap-24 xl:flex-row ",
                            children: [(0, l.jsxs)(n(), {
                                href: "/game-manual/world-of-parallel/",
                                className: "group relative w-full sm:min-w-[375px]",
                                onClick: () => {
                                    r.ZP.event({
                                        category: "Discover Parallel Links",
                                        action: "Game Manual Link Click",
                                        label: "Game Marketing Page"
                                    })
                                },
                                children: [(0, l.jsx)(te, {}), (0, l.jsxs)("div", {
                                    className: "flex min-h-[300px] overflow-hidden",
                                    children: [(0, l.jsx)("div", {
                                        className: "w-full bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/newsfeed/images/image_16.png)] bg-cover bg-center transition duration-[5s] ease-linear group-hover:-translate-y-5 group-hover:scale-105"
                                    }), (0, l.jsx)("div", {
                                        className: "absolute -inset-x-4 -bottom-4 flex flex-col gap-5 self-end border border-white/20 bg-black/50 p-10 backdrop-blur-sm transition duration-700 ease-in-out group-hover:scale-[1.02] group-hover:bg-white/4",
                                        children: (0, l.jsx)("div", {
                                            className: "text-xl font-semibold uppercase tracking-wide sm:text-2xl",
                                            children: "Game Manual"
                                        })
                                    })]
                                })]
                            }), (0, l.jsxs)(n(), {
                                href: "/shop/",
                                className: "group relative w-full sm:min-w-[375px]",
                                onClick: () => {
                                    r.ZP.event({
                                        category: "Discover Parallel Links",
                                        action: "Shop Link Click",
                                        label: "Game Marketing Page"
                                    })
                                },
                                children: [(0, l.jsx)(te, {}), (0, l.jsxs)("div", {
                                    className: "flex min-h-[300px] overflow-hidden",
                                    children: [(0, l.jsx)("div", {
                                        className: "w-full bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/shop-assets/banners/GenericWongBanner.png)] bg-cover bg-[75%] transition duration-[5s] ease-linear group-hover:-translate-y-5 group-hover:scale-105"
                                    }), (0, l.jsx)("div", {
                                        className: "absolute -inset-x-4 -bottom-4 flex flex-col gap-5 self-end border border-white/20 bg-black/50 p-10 backdrop-blur-sm transition duration-700 ease-in-out group-hover:scale-[1.02] group-hover:bg-white/4",
                                        children: (0, l.jsx)("div", {
                                            className: "text-xl font-semibold uppercase tracking-wide sm:text-2xl",
                                            children: "Shop our merch"
                                        })
                                    })]
                                })]
                            }), (0, l.jsxs)(n(), {
                                href: "/blog/",
                                className: "group relative w-full sm:min-w-[375px]",
                                onClick: () => {
                                    r.ZP.event({
                                        category: "Discover Parallel Links",
                                        action: "Blog Link Click",
                                        label: "Game Marketing Page"
                                    })
                                },
                                children: [(0, l.jsx)(te, {}), (0, l.jsxs)("div", {
                                    className: "flex min-h-[300px] overflow-hidden",
                                    children: [(0, l.jsx)("div", {
                                        className: "w-full bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/blog-assets/glints/PRIMEGLINT_Tokens_Combo_01a.png)] bg-cover bg-[75%] transition duration-[5s] ease-linear group-hover:-translate-y-5 group-hover:scale-105"
                                    }), (0, l.jsx)("div", {
                                        className: "absolute -inset-x-4 -bottom-4 flex flex-col gap-5 self-end border border-white/20 bg-black/50 p-10 backdrop-blur-sm transition duration-700 ease-in-out group-hover:scale-[1.02] group-hover:bg-white/4",
                                        children: (0, l.jsx)("div", {
                                            className: "text-xl font-semibold uppercase tracking-wide sm:text-2xl",
                                            children: "Blog and news"
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }

            function ie() {
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(w, {}), (0, l.jsxs)(t.kr, {
                        className: "flex flex-col",
                        children: [(0, l.jsx)(ee, {}), (0, l.jsx)(le, {}), (0, l.jsx)(Y, {}), (0, l.jsx)(Z, {}), (0, l.jsx)(re, {}), (0, l.jsx)(X, {})]
                    })]
                })
            }
        }
    }
]);