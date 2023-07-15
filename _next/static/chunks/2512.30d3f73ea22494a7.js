"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2512], {
        82512: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return p
                }
            });
            var n, l, a = r(85893),
                i = r(86010),
                o = r(52137),
                h = r(67294);

            function s() {
                return s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, s.apply(this, arguments)
            }
            var c, f = e => h.createElement("svg", s({
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), n || (n = h.createElement("g", {
                clipPath: "url(#a)"
            }, h.createElement("path", {
                d: "M3.804 5.375 1.667 3.3l1.21-1.217L5.011 4.16h13.321l-2.136 8.599H3.803V5.375Zm1.709.504v5.159h9.402l1.282-5.159H5.513ZM4.18 17.538a1.278 1.278 0 0 0 1.812 0 1.293 1.293 0 0 0 0-1.823 1.278 1.278 0 0 0-1.813 0 1.294 1.294 0 0 0 0 1.823ZM12.726 17.538a1.278 1.278 0 0 0 1.813 0 1.294 1.294 0 0 0 0-1.823 1.278 1.278 0 0 0-1.813 0 1.294 1.294 0 0 0 0 1.823Z",
                fill: "#fff"
            }), h.createElement("path", {
                fill: "#DEF141",
                stroke: "#191919",
                strokeWidth: 2,
                d: "M12.333.667h7v7h-7z"
            }))), l || (l = h.createElement("defs", null, h.createElement("clipPath", {
                id: "a"
            }, h.createElement("path", {
                fill: "#fff",
                d: "M0 0h20v20H0z"
            })))));

            function u() {
                return u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, u.apply(this, arguments)
            }
            var v = e => h.createElement("svg", u({
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), c || (c = h.createElement("path", {
                d: "M3.804 5.375 1.667 3.3l1.21-1.217L5.011 4.16h13.321l-2.136 8.599H3.803V5.375Zm1.709.504v5.159h9.402l1.282-5.159H5.513ZM4.18 17.538a1.278 1.278 0 0 0 1.812 0 1.293 1.293 0 0 0 0-1.823 1.278 1.278 0 0 0-1.813 0 1.294 1.294 0 0 0 0 1.823ZM12.726 17.538a1.278 1.278 0 0 0 1.813 0 1.294 1.294 0 0 0 0-1.823 1.278 1.278 0 0 0-1.813 0 1.294 1.294 0 0 0 0 1.823Z",
                fill: "#fff"
            })));

            function p({
                onClick: e,
                type: t = "solid",
                className: r
            }) {
                const {
                    cart: n,
                    setShowCart: l
                } = (0, o.Z)(), h = (null === n || void 0 === n ? void 0 : n.length) > 0;
                return (0, a.jsx)("button", {
                    className: (0, i.Z)("relative flex aspect-square w-min shrink-0 items-center justify-center p-1 transition-colors duration-100", "solid" === t ? "bg-white/10 hover:bg-white/30" : "border border-white/30 hover:bg-white/10", r),
                    onClick: () => {
                        null === e || void 0 === e || e(), l((e => !e))
                    },
                    children: h ? (0, a.jsx)(f, {}) : (0, a.jsx)(v, {})
                })
            }
        }
    }
]);