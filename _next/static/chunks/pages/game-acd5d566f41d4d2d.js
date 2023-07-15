(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9203], {
        10134: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/game", function() {
                return t(81377)
            }])
        },
        81377: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                __N_SSP: function() {
                    return ue
                },
                default: function() {
                    return be
                }
            });
            var a = t(85893),
                l = t(9008),
                r = t.n(l),
                i = t(49089),
                c = t(11163),
                o = t(67294),
                n = t(66155),
                d = t(31404),
                x = t(92010),
                h = t(90656),
                p = t(11084),
                m = t(90881),
                g = t(86010);

            function f({
                children: e,
                className: s
            }) {
                return (0, a.jsx)("h3", {
                    className: (0, g.Z)("text-2xl font-semibold uppercase leading-none tracking-wide text-yellow sm:text-center sm:text-[2.625rem]", s),
                    children: e
                })
            }

            function u({
                className: e,
                children: s
            }) {
                return (0, a.jsx)("div", {
                    className: (0, g.Z)("uppercase tracking-halfwide sm:text-3xl sm:font-medium", e),
                    children: s
                })
            }

            function b({
                className: e
            }) {
                return (0, a.jsxs)("div", {
                    className: (0, g.Z)("hidden lg:grid absolute inset-0 max-h-screen grid-rows-[4fr_5fr] grid-cols-[calc(404px)_auto_404px]", e),
                    children: [(0, a.jsx)(m.Z, {
                        className: "ml-14 mt-14 row-start-1 col-start-1"
                    }), (0, a.jsx)(m.Z, {
                        className: "ml-14 row-start-2 col-start-1"
                    }), (0, a.jsx)(m.Z, {
                        className: "mb-14 ml-14 row-start-2 col-start-1 self-end",
                        length: m.Q.Long
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 2xl:block row-start-2 col-start-2"
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 2xl:block mb-14 row-start-2 col-start-2 self-end",
                        length: m.Q.Short
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 2xl:block mb-14 row-start-2 col-start-2 self-end justify-self-center",
                        length: m.Q.Short
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 2xl:block mb-14 row-start-2 col-start-2 self-end justify-self-end",
                        length: m.Q.Short
                    }), (0, a.jsx)("div", {
                        className: "hidden 2xl:block row-span-full col-start-2 bg-white/20 w-px"
                    }), (0, a.jsx)("div", {
                        className: "hidden 2xl:block row-span-full col-start-2 bg-white/20 w-px justify-self-end"
                    })]
                })
            }

            function w() {
                const {
                    query: e
                } = (0, c.useRouter)();
                let s = "/signup/";
                return e.code && (s += `?code=${e.code.toString()}`), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(d.Aq, {
                        className: "relative overflow-hidden",
                        children: [(0, a.jsx)(h.Z, {
                            className: "absolute inset-0",
                            children: (0, a.jsx)("video", {
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                disablePictureInPicture: !0,
                                className: "h-full w-full object-cover object-center",
                                poster: "https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/poster.webp",
                                children: (0, a.jsx)("source", {
                                    src: "https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/00_Parallel_2023_Web_Supercut_NotDimmed_Final.webm",
                                    type: "video/webm"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30"
                        })]
                    }), (0, a.jsxs)(d.VY, {
                        className: "relative isolate",
                        children: [(0, a.jsx)(b, {
                            className: "z-0"
                        }), (0, a.jsxs)("div", {
                            className: "isolate z-10 flex h-full flex-col justify-center gap-32",
                            children: [(0, a.jsxs)("div", {
                                className: "mx-auto flex w-fit grow flex-col items-start justify-center gap-8 px-6 pt-14 lg:gap-14",
                                children: [(0, a.jsx)(m.Z, {
                                    className: "block lg:hidden"
                                }), (0, a.jsx)(x.Vd, {
                                    id: "be-one-of-the-first-to-play",
                                    elems: {
                                        break: (0, a.jsx)("br", {}),
                                        highlight: (0, a.jsx)("span", {
                                            className: "inline-block bg-yellow leading-none text-black"
                                        })
                                    },
                                    children: (0, a.jsx)("h1", {
                                        className: "whitespace-nowrap text-2xl font-medium uppercase !leading-none tracking-title text-yellow xs:text-3xl sm:text-5xl lg:text-page-title",
                                        children: "Join The Fight<break></break>Be one of the first<break></break><highlight>to play Parallel</highlight>"
                                    })
                                }), (0, a.jsx)(x.Vd, {
                                    id: "an-immersive-experience",
                                    children: (0, a.jsx)("div", {
                                        className: "uppercase tracking-halfwide text-white/60 xs:font-medium sm:text-3xl",
                                        children: "An immersive digital trading card game experience"
                                    })
                                }), (0, a.jsx)(m.Z, {
                                    className: "mb-16 block lg:hidden"
                                }), (0, a.jsx)(x.Vd, {
                                    id: "sign-up",
                                    children: (0, a.jsx)(p.Z, {
                                        external: !0,
                                        href: s,
                                        appearance: "solid",
                                        children: "Sign Up"
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mx-6 flex grow flex-col justify-end gap-4 sm:items-center sm:pb-8 lg:pb-32",
                                children: [(0, a.jsx)(x.Vd, {
                                    id: "future-of-gaming",
                                    children: (0, a.jsx)(f, {
                                        children: "The Future of Gaming"
                                    })
                                }), (0, a.jsx)(x.Vd, {
                                    id: "own-in-game-assets",
                                    children: (0, a.jsx)(u, {
                                        className: "text-white/60 sm:text-center",
                                        children: "Own in-game assets and earn rewards for playing"
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
            var A = t(16893);

            function j() {
                const e = (0, o.useRef)(null),
                    s = (0, A.Y)(e, {
                        once: !0
                    });
                return (0, o.useEffect)((() => {
                    s && async function() {
                        try {
                            var s;
                            await (null === (s = e.current) || void 0 === s ? void 0 : s.play())
                        } catch {}
                    }()
                }), [s]), (0, a.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 xs:gap-14",
                    children: (0, a.jsx)("div", {
                        className: "mx-6 max-w-[1200px] xs:border xs:border-white/20 xs:p-4",
                        children: (0, a.jsx)("video", {
                            controls: !0,
                            muted: !0,
                            ref: e,
                            children: (0, a.jsx)("source", {
                                src: "https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Gameplay_Shroud.webm"
                            })
                        })
                    })
                })
            }
            var v = t(29260),
                N = t.n(v),
                _ = {
                    src: "/_next/static/media/002_RG_2021_FULL_LOCKUP_OFFWHITE.49d66775.png",
                    height: 688,
                    width: 2451,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEXx9fHx9fHx9fHx9fHx9fHx9fHw9PDx9fHw9fB0421PAAAACXRSTlN5a4evDAGcXe1f9VOpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGklEQVR4nGNg5mBgYGBnYWVgYGNkZGBiYgQAAbcAKUE9RhAAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 2
                },
                y = {
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
                Z = {
                    src: "/_next/static/media/wotc-logo.299cbb70.png",
                    height: 174,
                    width: 328,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAQlBMVEVBKn+BiNeJk99dU7+y2/RvctlRQJ5iWbxDLII6JXG15v1ro/pCLX+57v4+J3hTRKFbTLpmmd5TQaFomd9ro/hyft0L/e9PAAAAFnRSTlODmbC9bbXJJ5FN2JfCrGWlgFqOU7FAHUUhIQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJwFwYUBACAMA7ACU1z/f5UE3mEwOKrMEJMAg0vLlzdUF9F5+gEQ0wEWmc68eQAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                },
                E = {
                    src: "/_next/static/media/Epic_Games_logo.df909917.png",
                    height: 2048,
                    width: 1764,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAM1BMVEUyMDFSUFGOjY5ubW4hHyAvLS5FQ0SCgYEuLC1wb29BP0BjYWI4Njefnp62tbanpqdMSkt8WpMEAAAACnRSTlP+/vvxRsmu/fIBPzjb/AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwdxUESwCAIBMFJoqILgv9/rVXpSzOlCE20d1bFf3qgMs8S+HPcATN7DTo6orPa+EZbF0hTAfO4VhblAAAAAElFTkSuQmCC",
                    blurWidth: 7,
                    blurHeight: 8
                };

            function C() {
                return (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-y-8 bg-white/4 py-16 xs:gap-16",
                    children: [(0, a.jsx)("div", {
                        className: "mx-6 flex flex-col gap-4 xs:items-center",
                        children: (0, a.jsx)(x.Vd, {
                            id: "brought-to-you-by",
                            children: (0, a.jsx)(u, {
                                className: "text-center text-white/30",
                                children: "Brought to you by artists & game devlopers who have worked at"
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: "flex w-full max-w-[1400px] flex-row flex-wrap items-center justify-around gap-8 px-6",
                        children: [(0, a.jsx)(N(), {
                            className: "max-w-[125px] object-contain",
                            src: _,
                            alt: "Riot Games",
                            height: 68
                        }), (0, a.jsx)(N(), {
                            className: "max-w-[125px] object-contain",
                            src: y,
                            alt: "Blizzard",
                            height: 68
                        }), (0, a.jsx)(N(), {
                            className: "max-w-[125px] object-contain",
                            src: k,
                            alt: "Xbox Game Studios",
                            height: 68
                        }), (0, a.jsx)(N(), {
                            className: "max-w-[125px] object-contain",
                            src: Z,
                            alt: "Wizards of the Coast",
                            height: 68
                        }), (0, a.jsx)(N(), {
                            className: "max-w-[125px] object-contain",
                            src: E,
                            alt: "Epic Games",
                            height: 68
                        })]
                    })]
                })
            }
            var B = t(45204),
                S = t(12421),
                F = t(93079);
            const P = [0, 1 / 3 - .05, 1 / 3 + .05, 1 / 3 * 2 - .05, 1 / 3 * 2 + .05, 1];

            function V() {
                const e = (0, o.useRef)(null),
                    {
                        scrollYProgress: s
                    } = (0, B.v)({
                        target: e,
                        offset: ["start start", "end end"]
                    }),
                    {
                        scrollYProgress: t
                    } = (0, B.v)({
                        target: e,
                        offset: ["start end", "end start"]
                    }),
                    l = [(0, S.H)(s, P, [1, 1, 0, 0, 0, 0]), (0, S.H)(s, P, [0, 0, 1, 1, 0, 0]), (0, S.H)(s, P, [0, 0, 0, 0, 1, 1])],
                    r = [(0, S.H)(t, [P[0], P[2]], ["10%", "-10%"]), (0, S.H)(t, [P[1], P[4]], ["10%", "-10%"]), (0, S.H)(t, [P[3], P[5]], ["10%", "-10%"])];
                return (0, a.jsxs)("div", {
                    ref: e,
                    className: "relative flex w-full flex-col sm:h-[300vh]",
                    children: [(0, a.jsxs)("div", {
                        className: "inset-x-0 top-0 hidden h-screen overflow-hidden sm:sticky sm:block",
                        children: [(0, a.jsx)(F.E.div, {
                            className: "absolute inset-x-0 top-0 h-screen bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/CAINE-1.webp)] bg-cover bg-fixed bg-center",
                            style: {
                                y: r[0],
                                opacity: l[0],
                                scale: "120%"
                            }
                        }), (0, a.jsx)(F.E.div, {
                            className: "absolute inset-x-0 top-0 h-screen bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/City%20of%20Valli%20-%20Top%20down%20view.webp)] bg-cover bg-fixed bg-center",
                            style: {
                                y: r[1],
                                opacity: l[1],
                                scale: "120%"
                            }
                        }), (0, a.jsx)(F.E.div, {
                            className: "absolute inset-x-0 top-0 h-screen bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Corrupted%20New%20Dawn.webp)] bg-cover bg-fixed bg-center",
                            style: {
                                y: r[2],
                                opacity: l[2],
                                scale: "120%"
                            }
                        }), (0, a.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"
                        }), (0, a.jsxs)("div", {
                            className: "absolute inset-x-0 top-0 mx-6 flex h-screen flex-col items-center justify-center gap-16",
                            children: [(0, a.jsx)(x.Vd, {
                                id: "choose-your-parallel",
                                children: (0, a.jsx)(f, {
                                    children: "Choose Your Parallel"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "relative max-w-measure/2 text-3xl",
                                children: [(0, a.jsx)(F.E.div, {
                                    style: {
                                        opacity: l[0]
                                    },
                                    children: (0, a.jsx)(x.Vd, {
                                        id: "separated-from-one-another",
                                        children: (0, a.jsx)(u, {
                                            className: "text-center",
                                            children: "Humans separated from one another for thousands of years"
                                        })
                                    })
                                }), (0, a.jsx)(F.E.div, {
                                    className: "absolute inset-0",
                                    style: {
                                        opacity: l[1]
                                    },
                                    children: (0, a.jsx)(x.Vd, {
                                        id: "each-faction-represents-us",
                                        children: (0, a.jsx)(u, {
                                            className: "text-center",
                                            children: "Each faction represents a part of us and our determination to thrive"
                                        })
                                    })
                                }), (0, a.jsx)(F.E.div, {
                                    className: "absolute inset-0",
                                    style: {
                                        opacity: l[2]
                                    },
                                    children: (0, a.jsx)(x.Vd, {
                                        id: "build-your-deck",
                                        children: (0, a.jsx)(u, {
                                            className: "text-center",
                                            children: "Build your deck, form your strategy, battle for home"
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "block sm:hidden",
                        children: [(0, a.jsx)("div", {
                            className: "mx-6 mb-6 flex flex-col items-center gap-4",
                            children: (0, a.jsx)(x.Vd, {
                                id: "choose-your-parallel",
                                children: (0, a.jsx)(f, {
                                    children: "Choose Your Parallel"
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "relative isolate flex aspect-video w-full items-center justify-center bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/CAINE-1.webp)] bg-cover bg-center",
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/50 to-black"
                            }), (0, a.jsx)(x.Vd, {
                                id: "separated-from-one-another",
                                children: (0, a.jsx)(u, {
                                    className: "mx-6 text-center",
                                    children: "Humans separated from one another for thousands of years"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative isolate flex aspect-video w-full items-center justify-center bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/City%20of%20Valli%20-%20Top%20down%20view.webp)] bg-cover bg-center",
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/50 to-black"
                            }), (0, a.jsx)(x.Vd, {
                                id: "each-faction-represents-us",
                                children: (0, a.jsx)(u, {
                                    className: "mx-6 text-center",
                                    children: "Each faction represents a part of us and our determination to thrive"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "relative isolate flex aspect-video w-full items-center justify-center bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Corrupted%20New%20Dawn.webp)] bg-cover bg-center",
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/50 to-black"
                            }), (0, a.jsx)(x.Vd, {
                                id: "build-your-deck",
                                children: (0, a.jsx)(u, {
                                    className: "mx-6 text-center",
                                    children: "Build your deck, form your strategy, battle for home"
                                })
                            })]
                        })]
                    })]
                })
            }
            var H = t(78326),
                M = t(51574),
                U = t(26218),
                R = t(79695),
                W = t(78366),
                G = t(96699);
            const O = {
                [U.Z.Marcolian]: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Marcolian/Marc_01.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Marcolian/Marc_02.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Marcolian/Marc_03.webp")],
                [U.Z.Augencore]: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Augencore/Augen_01.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Augencore/Augen_02.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Augencore/Augen_03.webp")],
                [U.Z.Kathari]: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Kathari/Kath_01.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Kathari/Kath_02.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Kathari/Kath_03.webp")],
                [U.Z.Earthen]: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Earthen/Earth_01.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Earthen/Earth_02.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Earthen/Earth_03.webp")],
                [U.Z.Shroud]: [(0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Shroud/Shro_01-19.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Shroud/Shro_01-20.webp"), (0, G.BH)("https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/Parallel_WebCards2/Shroud/Shro_01-21.webp")]
            };

            function J({
                src: e
            }) {
                return e
            }

            function T({
                faction: e,
                url: s
            }) {
                const [t, l, r, i] = function(e) {
                    switch (e) {
                        case U.Z.Earthen:
                            return ["shadow-[13px_-23px_10px_3px_#49BC311A]", "shadow-[-8px_-23px_10px_3px_#49BC311A]", "shadow-[-13px_-13px_2px_0px_#49BC3126]", "bg-gradient-to-br from-earthen-green to-earthen-green/0"];
                        case U.Z.Augencore:
                            return ["shadow-[13px_-23px_10px_3px_#FF74321A]", "shadow-[-8px_-23px_10px_3px_#FF74321A]", "shadow-[-13px_-13px_2px_0px_#FF743226]", "bg-gradient-to-br from-augencore-orange to-augencore-orange/0"];
                        case U.Z.Marcolian:
                            return ["shadow-[13px_-23px_10px_3px_#E20A1A1A]", "shadow-[-8px_-23px_10px_3px_#E20A1A1A]", "shadow-[-13px_-13px_2px_0px_#E20A1A26]", "bg-gradient-to-br from-marcolian-red to-marcolian-red/0"];
                        case U.Z.Kathari:
                            return ["shadow-[13px_-23px_10px_3px_#1e90dd33]", "shadow-[-8px_-23px_10px_3px_#1e90dd26", "shadow-[-13px_-13px_2px_0px_#1e90dd33]", "bg-gradient-to-br from-kathari-blue to-kathari-blue/0"];
                        case U.Z.Shroud:
                            return ["shadow-[13px_-23px_10px_3px_#6438C61A]", "shadow-[-8px_-23px_10px_3px_#6438C61A]", "shadow-[-13px_-13px_2px_0px_#6438C626]", "bg-gradient-to-br from-shroud-purple to-shroud-purple/0"]
                    }
                }(e);
                return (0, a.jsxs)("div", {
                    className: "relative aspect-[2935/3670] w-full lg:max-h-[300px] lg:min-h-[300px] lg:w-auto",
                    children: [(0, a.jsx)("div", {
                        className: (0, g.Z)("absolute flex h-full w-full items-center", t)
                    }), (0, a.jsx)("div", {
                        className: (0, g.Z)("absolute flex h-full w-full items-center", l)
                    }), (0, a.jsx)("div", {
                        className: (0, g.Z)("absolute flex h-full w-full items-center", r)
                    }), (0, a.jsxs)("div", {
                        className: "relative flex h-full w-full items-center",
                        children: [(0, a.jsx)("div", {
                            className: (0, g.Z)("absolute h-full w-full", i)
                        }), (0, a.jsx)(N(), {
                            className: "object-contain p-[2px]",
                            src: s,
                            loader: J,
                            layout: "fill",
                            alt: "Faction Card"
                        })]
                    })]
                })
            }

            function I({
                faction: e,
                cardIndex: s,
                cardsAmountsToShow: t
            }) {
                const l = t ? ? O[e].length;
                return (0, a.jsx)("div", {
                    className: "flex w-full justify-end gap-10",
                    children: O[e].slice(s, s + l).map((({
                        url: s
                    }) => (0, a.jsx)(T, {
                        url: s,
                        faction: e
                    }, s)))
                })
            }

            function K({
                faction: e
            }) {
                return (0, a.jsx)("div", {
                    className: "flex w-full max-w-[500px] flex-col items-center gap-32 p-10",
                    children: O[e].map((({
                        url: s
                    }) => (0, a.jsx)(T, {
                        faction: e,
                        url: s
                    }, s)))
                })
            }

            function L({
                faction: e,
                containerWidth: s,
                factionBackgroundSize: t
            }) {
                const [l, r] = (0, o.useState)(0), i = s - t, c = O[e].length, n = i / 280, d = Math.ceil(n) - n < .6 ? Math.ceil(n) : Math.floor(n), x = `-${280*(d<=c?d-i/280:0)}px`, h = d >= c;
                return (0, a.jsxs)("div", {
                    className: (0, g.Z)("flex w-1/2 flex-col justify-center gap-6 pr-5"),
                    style: {
                        translate: x
                    },
                    children: [(0, a.jsx)("div", {
                        className: "h-[34px] w-full"
                    }), (0, a.jsx)("div", {
                        className: "flex w-full items-end",
                        children: (0, a.jsx)(I, {
                            faction: e,
                            cardIndex: l,
                            cardsAmountsToShow: d
                        })
                    }), (0, a.jsx)("div", {
                        className: (0, g.Z)("visible flex h-[34px] w-full justify-end", h && "invisible"),
                        children: (0, a.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, a.jsx)(W.Z, {
                                disabled: 0 === l,
                                onClick: () => r(l - 1),
                                children: (0, a.jsx)(R.Z, {
                                    className: "h-6 w-6 rotate-90"
                                })
                            }), (0, a.jsx)(W.Z, {
                                disabled: l === O[e].length - d,
                                onClick: () => r(l + 1),
                                children: (0, a.jsx)(R.Z, {
                                    className: "h-6 w-6 -rotate-90"
                                })
                            })]
                        })
                    })]
                })
            }

            function z(e) {
                switch (e) {
                    case U.Z.Earthen:
                        return "bg-home-gradient-earthen";
                    case U.Z.Augencore:
                        return "bg-home-gradient-augencore";
                    case U.Z.Marcolian:
                        return "bg-home-gradient-marcolian";
                    case U.Z.Kathari:
                        return "bg-home-gradient-kathari";
                    case U.Z.Shroud:
                        return "bg-home-gradient-shroud"
                }
            }

            function q({
                faction: e
            }) {
                const [s, t] = (0, o.useState)(null), [l, r] = (0, o.useState)(null), {
                    width: i
                } = (0, H.Z)(s) ? ? {
                    width: 0
                }, {
                    width: c
                } = (0, H.Z)(l) ? ? {
                    width: 0
                };
                return (0, a.jsxs)("div", {
                    className: "relative flex aspect-[5/2] min-h-[758px] w-full justify-between border-y border-white/20",
                    ref: t,
                    children: [(0, a.jsx)("div", {
                        className: (0, g.Z)("w-7/12 min-w-[600px] bg-cover bg-center bg-no-repeat", z(e)),
                        ref: r,
                        children: (0, a.jsx)("div", {
                            className: "flex h-full w-[470px] py-24 pl-24",
                            children: (0, a.jsx)("div", {
                                className: "flex h-full w-[470px] justify-between",
                                children: (0, a.jsxs)("div", {
                                    className: "flex h-full max-w-[470px] flex-col justify-between",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex flex-row items-center gap-8 text-white",
                                        children: [(0, a.jsx)(M.Z, {
                                            size: 45,
                                            faction: e
                                        }), (0, a.jsx)("div", {
                                            className: "text-[26px] font-medium uppercase tracking-[0.3em]",
                                            children: e
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-5",
                                        children: [(0, a.jsx)(x.Vd, {
                                            id: `${e}-subtitle`,
                                            elems: {
                                                subtitlePrefix: (0, a.jsx)("span", {
                                                    className: "text-white"
                                                })
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: "text-2.5xl  font-medium uppercase leading-none tracking-title text-yellow",
                                                children: "The Earth Dwellers"
                                            })
                                        }), (0, a.jsx)(m.Z, {}), (0, a.jsx)(x.Vd, {
                                            id: `${e}-body`,
                                            children: (0, a.jsx)("div", {
                                                className: "text-left text-sm font-semibold uppercase tracking-wide text-white/60"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    }), (0, a.jsx)(L, {
                        faction: e,
                        containerWidth: i,
                        factionBackgroundSize: c
                    })]
                })
            }
            const D = [U.Z.Earthen, U.Z.Augencore, U.Z.Marcolian, U.Z.Kathari, U.Z.Shroud];
            var Q, X, Y, $ = t(28240);

            function ee(e) {
                switch (e) {
                    case U.Z.Earthen:
                        return "bg-home-earthen";
                    case U.Z.Augencore:
                        return "bg-home-augencore";
                    case U.Z.Marcolian:
                        return "bg-home-marcolian";
                    case U.Z.Kathari:
                        return "bg-home-kathari";
                    case U.Z.Shroud:
                        return "bg-home-shroud"
                }
            }

            function se({
                faction: e
            }) {
                const [s, t] = (0, o.useState)(!1);
                return (0, a.jsxs)("div", {
                    className: "flex w-full flex-col justify-between border border-white/20",
                    children: [(0, a.jsxs)("div", {
                        className: "relative flex aspect-[335/274] max-h-[400px] min-h-[274px] w-full",
                        children: [(0, a.jsx)("div", {
                            className: (0, g.Z)("h-full w-full bg-cover bg-[center_top_1px] bg-no-repeat", ee(e))
                        }), (0, a.jsx)("div", {
                            className: "absolute h-full w-full bg-gradient-to-b from-black/0 to-black"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex w-full grow flex-col gap-7 p-7",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-row items-center gap-5 text-white",
                            children: [(0, a.jsx)(M.Z, {
                                size: 30,
                                faction: e
                            }), (0, a.jsx)("div", {
                                className: "text-[20px] font-semibold uppercase tracking-[0.3em]",
                                children: e
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col gap-7",
                            children: [(0, a.jsx)(x.Vd, {
                                id: `${e}-subtitle`,
                                elems: {
                                    subtitlePrefix: (0, a.jsx)("span", {
                                        className: "text-white"
                                    })
                                },
                                children: (0, a.jsx)("div", {
                                    className: "text-[21px] font-medium uppercase leading-none tracking-title text-yellow",
                                    children: "The Earth Dwellers"
                                })
                            }), (0, a.jsx)(m.Z, {}), (0, a.jsx)(x.Vd, {
                                id: `${e}-body`,
                                children: (0, a.jsx)("div", {
                                    className: "text-left text-xs font-semibold uppercase tracking-wide text-white/60"
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "flex h-full w-full flex-col gap-6",
                            children: (0, a.jsxs)("div", {
                                className: "flex h-full w-full flex-col gap-10",
                                children: [(0, a.jsx)("div", {
                                    onClick: () => t($.ffD),
                                    className: "z-10 flex min-h-[40px] w-full cursor-pointer bg-black/20",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex w-full items-center gap-3 text-sm font-semibold uppercase",
                                        children: [(0, a.jsx)("div", {
                                            children: " View Cards"
                                        }), (0, a.jsx)(R.Z, {
                                            className: (0, g.Z)("h-5 w-5", s && "rotate-180")
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: (0, g.Z)("flex w-full justify-center", !s && "hidden"),
                                    children: (0, a.jsx)(K, {
                                        faction: e
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }

            function te() {
                return (0, a.jsx)("div", {
                    className: "flex w-full lg:hidden",
                    children: (0, a.jsx)("div", {
                        className: "flex h-full grow flex-col gap-6  px-5",
                        children: D.map((e => (0, a.jsx)(F.E.div, {
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
                            children: (0, a.jsx)(se, {
                                faction: e
                            })
                        }, e)))
                    })
                })
            }

            function ae() {
                const {
                    query: e
                } = (0, c.useRouter)();
                let s = "/signup/";
                return e.code && (s += `?code=${e.code.toString()}`), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "mx-6 flex flex-col items-start gap-4 sm:items-center",
                        children: [(0, a.jsx)(x.Vd, {
                            id: "play-your-way",
                            children: (0, a.jsx)(f, {
                                children: "Play your way"
                            })
                        }), (0, a.jsx)(x.Vd, {
                            id: "play-anytime",
                            children: (0, a.jsx)(u, {
                                className: "text-white/60 sm:text-center",
                                children: "Play anytime with free to play options or your own cards"
                            })
                        }), (0, a.jsx)(x.Vd, {
                            id: "sign-up",
                            children: (0, a.jsx)(p.Z, {
                                appearance: "solid",
                                href: s,
                                external: !0,
                                className: "sm:mt-12",
                                children: "Sign up"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: "hidden flex-col gap-10 overflow-hidden lg:flex",
                        children: D.map((e => (0, a.jsx)(F.E.div, {
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
                            children: (0, a.jsx)(q, {
                                faction: e
                            })
                        }, e)))
                    }), (0, a.jsx)(te, {})]
                })
            }

            function le() {
                return le = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var t = arguments[s];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }, le.apply(this, arguments)
            }
            var re, ie = e => o.createElement("svg", le({
                width: 52,
                height: 52,
                viewBox: "0 0 52 52",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Q || (Q = o.createElement("rect", {
                x: 23.798,
                y: 15.395,
                width: 20.344,
                height: 26.858,
                rx: 1.1,
                stroke: "#fff",
                strokeWidth: 1.8
            })), X || (X = o.createElement("rect", {
                x: 5.402,
                y: 15.692,
                width: 24.644,
                height: 31.157,
                rx: 3.25,
                transform: "rotate(-19.656 5.402 15.692)",
                fill: "#000",
                stroke: "#000",
                strokeWidth: 2.5
            })), Y || (Y = o.createElement("rect", {
                x: 8.15,
                y: 16.994,
                width: 20.344,
                height: 26.858,
                rx: 1.1,
                transform: "rotate(-19.656 8.15 16.994)",
                fill: "#000",
                stroke: "#fff",
                strokeWidth: 1.8
            })));

            function ce() {
                return ce = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var t = arguments[s];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }, ce.apply(this, arguments)
            }
            var oe, ne = e => o.createElement("svg", ce({
                width: 52,
                height: 52,
                viewBox: "0 0 52 52",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), re || (re = o.createElement("path", {
                d: "M35.375 12.625h-18.75c-2.11 0-3.75 1.7-3.75 3.75v18.75c0 2.11 1.64 3.75 3.75 3.75h18.75c2.05 0 3.75-1.64 3.75-3.75v-18.75c0-2.05-1.7-3.75-3.75-3.75Zm1.875 22.5c0 1.055-.879 1.875-1.875 1.875h-18.75a1.851 1.851 0 0 1-1.875-1.875v-18.75c0-.996.82-1.875 1.875-1.875h18.75c.996 0 1.875.879 1.875 1.875v18.75Zm-2.813-10.313h-7.5v-7.5c0-.468-.468-.937-.937-.937h-8.438c-.527 0-.937.469-.937.938v8.437c0 .527.41.938.879.938h7.5v7.5c0 .527.41.937.937.937h8.497c.468 0 .937-.41.937-.938V25.75c0-.469-.469-.938-.938-.938Zm-9.374 0H18.5V18.25h6.563v6.563ZM33.5 33.25h-6.563v-6.563H33.5v6.563Z",
                fill: "#fff"
            })));

            function de() {
                return de = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var t = arguments[s];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }, de.apply(this, arguments)
            }
            var xe = e => o.createElement("svg", de({
                width: 52,
                height: 52,
                viewBox: "0 0 52 52",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), oe || (oe = o.createElement("path", {
                d: "M42.64 15.262c-.117-.41-.468-.762-.937-.762h-6.387v-.996c0-1.524-1.289-2.754-2.812-2.754H19.438c-1.524 0-2.813 1.23-2.813 2.754v.996h-6.387c-.468 0-.82.352-.937.762-.059.234-1.23 6.093 2.46 11.484 2.403 3.633 6.387 6.094 11.837 7.442.82.175 1.406.937 1.406 1.816l.058 2.871h-5.625c-.527 0-.996.469-.996.938 0 .527.47.937.997.937h13.066c.469 0 .879-.41.879-.938 0-.468-.352-.937-.88-.937H26.88v-2.871c0-.879.586-1.582 1.406-1.816 5.45-1.348 9.434-3.81 11.895-7.442 3.691-5.39 2.52-11.25 2.46-11.484Zm-24.14-1.7c0-.527.41-.937.938-.937h13.066c.527 0 .937.41.879.938.176 4.746-.293 15.996-7.383 19.16-7.148-3.164-7.617-14.414-7.5-19.16ZM13.285 25.75c-2.46-3.691-2.402-7.734-2.226-9.375h5.566c.176 4.57 1.172 11.074 4.746 15.176-3.574-1.29-6.328-3.223-8.086-5.801Zm25.371 0c-1.758 2.578-4.511 4.512-8.086 5.8 3.575-4.1 4.57-10.605 4.746-15.175h5.567c.176 1.64.234 5.684-2.227 9.375Z",
                fill: "#fff"
            })));

            function he() {
                return (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-y-8 xs:gap-16",
                    children: [(0, a.jsx)("div", {
                        className: "mx-6 flex flex-col gap-4 xs:items-center",
                        children: (0, a.jsx)(x.Vd, {
                            id: "free-and-rewarding-gameplay",
                            children: (0, a.jsx)(f, {
                                children: "Free and rewarding gameplay"
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: "flex flex-col px-6 md:flex-row",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-4 border border-white/20 p-6 md:aspect-square md:max-w-[340px]",
                            children: [(0, a.jsx)(xe, {}), (0, a.jsx)(m.Z, {}), (0, a.jsx)(x.Vd, {
                                id: "play-parallel-earn-rewards",
                                children: (0, a.jsx)("div", {
                                    className: "mt-4 text-center text-xl font-light tracking-slight text-white/60",
                                    children: "Play Parallel and earn unique rewards"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-4 border border-white/20 p-6 md:aspect-square md:max-w-[340px]",
                            children: [(0, a.jsx)(ie, {}), (0, a.jsx)(m.Z, {}), (0, a.jsx)(x.Vd, {
                                id: "own-your-cards",
                                children: (0, a.jsx)("div", {
                                    className: "mt-4 text-center text-xl font-light tracking-slight text-white/60",
                                    children: "Fully own your digital cards and collectibles"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-4 border border-white/20 p-6 md:aspect-square md:max-w-[340px]",
                            children: [(0, a.jsx)(ne, {}), (0, a.jsx)(m.Z, {}), (0, a.jsx)(x.Vd, {
                                id: "free-to-play",
                                children: (0, a.jsx)("div", {
                                    className: "mt-4 text-center text-xl font-light tracking-slight text-white/60",
                                    children: "Free to play with multiple game modes"
                                })
                            })]
                        })]
                    })]
                })
            }
            var pe = t(21907);

            function me() {
                const {
                    query: e
                } = (0, c.useRouter)();
                let s = "/signup/";
                return e.code && (s += `?code=${e.code.toString()}`), (0, a.jsxs)("div", {
                    className: "relative grid grid-cols-[0_auto] grid-rows-[320px_auto_320px] overflow-hidden bg-white/4 xl:grid-cols-[0_auto_304px] 3xl:grid-cols-[calc(404px)_auto_404px]",
                    children: [(0, a.jsx)(m.Z, {
                        className: "hidden 3xl:block ml-14 mt-14 row-start-1 col-start-1",
                        length: m.Q.Long
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 3xl:block mt-14 row-start-1 col-start-2",
                        length: m.Q.Short
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 3xl:block mt-14 row-start-1 col-start-2 justify-self-center",
                        length: m.Q.Short
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 3xl:block mt-14 row-start-1 col-start-2 justify-self-end",
                        length: m.Q.Short
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 3xl:block mr-14 mt-14 row-start-1 col-start-3 justify-self-end",
                        length: m.Q.Short
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 3xl:block ml-14 row-start-2 col-start-1 self-end"
                    }), (0, a.jsx)(m.Z, {
                        className: "hidden 3xl:block mt-14 row-start-2 col-start-2 self-end"
                    }), (0, a.jsx)("div", {
                        className: "hidden 3xl:block row-span-full col-start-2 bg-white/20 w-px"
                    }), (0, a.jsx)("div", {
                        className: "hidden 3xl:block row-span-full col-start-2 bg-white/20 w-px justify-self-end"
                    }), (0, a.jsxs)("div", {
                        className: "relative col-start-2 row-start-2 flex flex-col gap-32 self-end justify-self-stretch px-6 md:px-16",
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)(m.Z, {
                                className: "mb-16 block 3xl:hidden"
                            }), (0, a.jsx)(x.Vd, {
                                id: "sign-up-for-early-access",
                                elems: {
                                    break: (0, a.jsx)("br", {}),
                                    highlight: (0, a.jsx)("span", {
                                        className: "inline-block bg-yellow leading-none text-black"
                                    })
                                },
                                children: (0, a.jsx)("h1", {
                                    className: "whitespace-nowrap text-3xl font-medium uppercase !leading-none tracking-title text-yellow xs:text-3xl sm:text-5xl lg:text-page-title",
                                    children: "Sign up for<break></break><highlight>Early Access</highlight>"
                                })
                            }), (0, a.jsx)(m.Z, {
                                className: "mt-32 block 3xl:hidden"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "xl:at-y-center relative aspect-square w-[525px] -translate-y-1/2 self-end overflow-hidden bg-[url(https://storage.googleapis.com/prod.static-assets.parallelnft.com/billboard-assets/priming.png)] bg-cover bg-center bg-no-repeat xl:absolute xl:right-0 xl:translate-x-1/2",
                            children: (0, a.jsx)("div", {
                                className: "at-center absolute w-full",
                                children: (0, a.jsx)(x.Vd, {
                                    id: "create-an-account",
                                    elems: {
                                        break: (0, a.jsx)("br", {})
                                    },
                                    children: (0, a.jsx)(pe.Z, {
                                        onClick: () => {
                                            window.open(s, "_blank")
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

            function ge() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(w, {}), (0, a.jsxs)(d.kr, {
                        className: "flex flex-col gap-14 pt-14 xs:gap-44 xs:pt-14",
                        children: [(0, a.jsx)(j, {}), (0, a.jsx)(C, {}), (0, a.jsx)(V, {}), (0, a.jsx)(ae, {}), (0, a.jsx)(he, {}), (0, a.jsx)(me, {})]
                    })]
                })
            }
            var fe = t(54414),
                ue = !0;

            function be() {
                i.ZP.send({
                    hitType: "pageview",
                    page: "/game/"
                });
                const e = (0, n.ZP)("game_marketing_page_v2"),
                    {
                        query: s
                    } = (0, c.useRouter)();
                return (0, o.useEffect)((() => {
                    s.code && i.ZP.event("promo_code_open", {
                        label: s.code
                    })
                }), [s.code]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(r(), {
                        children: [(0, a.jsx)("title", {
                            children: "Parallel"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "Parallel is a vast sci-fi universe with five factions battling for home. Assemble a deck and take the fight to Earth."
                        })]
                    }), (0, a.jsx)(d.ZP, {
                        children: e ? (0, a.jsx)(fe.Z, {}) : (0, a.jsx)(ge, {})
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [296, 5675, 6038, 1324, 2309, 8972, 9874, 1907, 4414, 9774, 2888, 179], (function() {
            return s = 10134, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);