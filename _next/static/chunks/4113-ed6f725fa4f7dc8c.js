"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4113], {
        84113: function(e, n, t) {
            t.d(n, {
                VY: function() {
                    return Ze
                },
                h_: function() {
                    return _e
                },
                AW: function() {
                    return Pe
                },
                ck: function() {
                    return Ke
                },
                Uv: function() {
                    return Fe
                },
                fC: function() {
                    return Ie
                },
                xz: function() {
                    return Te
                }
            });
            var r = t(87462),
                o = t(67294),
                u = t(76652),
                c = t(17255),
                a = t(32707),
                i = t(39920),
                l = t(40192),
                s = t(64053),
                d = t(41931),
                p = t(15019),
                f = t(64839),
                m = t(14966),
                v = t(66195),
                g = t(86233),
                w = t(60958),
                E = t(43216),
                h = t(863),
                M = t(88820),
                b = t(95355),
                C = t(23541),
                D = t(12779);
            const _ = ["Enter", " "],
                y = ["ArrowUp", "PageDown", "End"],
                R = ["ArrowDown", "PageUp", "Home", ...y],
                k = "Menu",
                [O, P, x] = (0, s.B)(k),
                [I, T] = (0, a.b)(k, [x, g.D7, h.Pc]),
                F = (0, g.D7)(),
                Z = (0, h.Pc)(),
                [K, L] = I(k),
                [S, A] = I(k),
                V = e => {
                    const {
                        __scopeMenu: n,
                        open: t = !1,
                        children: r,
                        dir: u,
                        onOpenChange: c,
                        modal: a = !0
                    } = e, i = F(n), [l, s] = (0, o.useState)(null), p = (0, o.useRef)(!1), f = (0, b.W)(c), m = (0, d.gm)(u);
                    return (0, o.useEffect)((() => {
                        const e = () => {
                                p.current = !0, document.addEventListener("pointerdown", n, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", n, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            n = () => p.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", n, {
                                capture: !0
                            }), document.removeEventListener("pointermove", n, {
                                capture: !0
                            })
                        }
                    }), []), (0, o.createElement)(g.fC, i, (0, o.createElement)(K, {
                        scope: n,
                        open: t,
                        onOpenChange: f,
                        content: l,
                        onContentChange: s
                    }, (0, o.createElement)(S, {
                        scope: n,
                        onClose: (0, o.useCallback)((() => f(!1)), [f]),
                        isUsingKeyboardRef: p,
                        dir: m,
                        modal: a
                    }, r)))
                },
                U = (0, o.forwardRef)(((e, n) => {
                    const {
                        __scopeMenu: t,
                        ...u
                    } = e, c = F(t);
                    return (0, o.createElement)(g.ee, (0, r.Z)({}, c, u, {
                        ref: n
                    }))
                })),
                B = "MenuPortal",
                [W, X] = I(B, {
                    forceMount: void 0
                }),
                z = e => {
                    const {
                        __scopeMenu: n,
                        forceMount: t,
                        children: r,
                        container: u
                    } = e, c = L(B, n);
                    return (0, o.createElement)(W, {
                        scope: n,
                        forceMount: t
                    }, (0, o.createElement)(E.z, {
                        present: t || c.open
                    }, (0, o.createElement)(w.h, {
                        asChild: !0,
                        container: u
                    }, r)))
                },
                G = "MenuContent",
                [Y, H] = I(G),
                N = (0, o.forwardRef)(((e, n) => {
                    const t = X(G, e.__scopeMenu),
                        {
                            forceMount: u = t.forceMount,
                            ...c
                        } = e,
                        a = L(G, e.__scopeMenu),
                        i = A(G, e.__scopeMenu);
                    return (0, o.createElement)(O.Provider, {
                        scope: e.__scopeMenu
                    }, (0, o.createElement)(E.z, {
                        present: u || a.open
                    }, (0, o.createElement)(O.Slot, {
                        scope: e.__scopeMenu
                    }, i.modal ? (0, o.createElement)(j, (0, r.Z)({}, c, {
                        ref: n
                    })) : (0, o.createElement)(q, (0, r.Z)({}, c, {
                        ref: n
                    })))))
                })),
                j = (0, o.forwardRef)(((e, n) => {
                    const t = L(G, e.__scopeMenu),
                        a = (0, o.useRef)(null),
                        i = (0, c.e)(n, a);
                    return (0, o.useEffect)((() => {
                        const e = a.current;
                        if (e) return (0, C.R)(e)
                    }), []), (0, o.createElement)(J, (0, r.Z)({}, e, {
                        ref: i,
                        trapFocus: t.open,
                        disableOutsidePointerEvents: t.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, u.M)(e.onFocusOutside, (e => e.preventDefault()), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => t.onOpenChange(!1)
                    }))
                })),
                q = (0, o.forwardRef)(((e, n) => {
                    const t = L(G, e.__scopeMenu);
                    return (0, o.createElement)(J, (0, r.Z)({}, e, {
                        ref: n,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => t.onOpenChange(!1)
                    }))
                })),
                J = (0, o.forwardRef)(((e, n) => {
                    const {
                        __scopeMenu: t,
                        loop: a = !1,
                        trapFocus: i,
                        onOpenAutoFocus: l,
                        onCloseAutoFocus: s,
                        disableOutsidePointerEvents: d,
                        onEntryFocus: v,
                        onEscapeKeyDown: w,
                        onPointerDownOutside: E,
                        onFocusOutside: b,
                        onInteractOutside: C,
                        onDismiss: _,
                        disableOutsideScroll: k,
                        ...O
                    } = e, x = L(G, t), I = A(G, t), T = F(t), K = Z(t), S = P(t), [V, U] = (0, o.useState)(null), B = (0, o.useRef)(null), W = (0, c.e)(n, B, x.onContentChange), X = (0, o.useRef)(0), z = (0, o.useRef)(""), H = (0, o.useRef)(0), N = (0, o.useRef)(null), j = (0, o.useRef)("right"), q = (0, o.useRef)(0), J = k ? D.Z : o.Fragment, Q = k ? {
                        as: M.g7,
                        allowPinchZoom: !0
                    } : void 0, $ = e => {
                        var n, t;
                        const r = z.current + e,
                            o = S().filter((e => !e.disabled)),
                            u = document.activeElement,
                            c = null === (n = o.find((e => e.ref.current === u))) || void 0 === n ? void 0 : n.textValue,
                            a = function(e, n, t) {
                                const r = n.length > 1 && Array.from(n).every((e => e === n[0])) ? n[0] : n,
                                    o = t ? e.indexOf(t) : -1;
                                let u = (c = e, a = Math.max(o, 0), c.map(((e, n) => c[(a + n) % c.length])));
                                var c, a;
                                1 === r.length && (u = u.filter((e => e !== t)));
                                const i = u.find((e => e.toLowerCase().startsWith(r.toLowerCase())));
                                return i !== t ? i : void 0
                            }(o.map((e => e.textValue)), r, c),
                            i = null === (t = o.find((e => e.textValue === a))) || void 0 === t ? void 0 : t.ref.current;
                        ! function e(n) {
                            z.current = n, window.clearTimeout(X.current), "" !== n && (X.current = window.setTimeout((() => e("")), 1e3))
                        }(r), i && setTimeout((() => i.focus()))
                    };
                    (0, o.useEffect)((() => () => window.clearTimeout(X.current)), []), (0, f.EW)();
                    const ee = (0, o.useCallback)((e => {
                        var n, t;
                        return j.current === (null === (n = N.current) || void 0 === n ? void 0 : n.side) && function(e, n) {
                            if (!n) return !1;
                            return function(e, n) {
                                const {
                                    x: t,
                                    y: r
                                } = e;
                                let o = !1;
                                for (let u = 0, c = n.length - 1; u < n.length; c = u++) {
                                    const e = n[u].x,
                                        a = n[u].y,
                                        i = n[c].x,
                                        l = n[c].y;
                                    a > r !== l > r && t < (i - e) * (r - a) / (l - a) + e && (o = !o)
                                }
                                return o
                            }({
                                x: e.clientX,
                                y: e.clientY
                            }, n)
                        }(e, null === (t = N.current) || void 0 === t ? void 0 : t.area)
                    }), []);
                    return (0, o.createElement)(Y, {
                        scope: t,
                        searchRef: z,
                        onItemEnter: (0, o.useCallback)((e => {
                            ee(e) && e.preventDefault()
                        }), [ee]),
                        onItemLeave: (0, o.useCallback)((e => {
                            var n;
                            ee(e) || (null === (n = B.current) || void 0 === n || n.focus(), U(null))
                        }), [ee]),
                        onTriggerLeave: (0, o.useCallback)((e => {
                            ee(e) && e.preventDefault()
                        }), [ee]),
                        pointerGraceTimerRef: H,
                        onPointerGraceIntentChange: (0, o.useCallback)((e => {
                            N.current = e
                        }), [])
                    }, (0, o.createElement)(J, Q, (0, o.createElement)(m.M, {
                        asChild: !0,
                        trapped: i,
                        onMountAutoFocus: (0, u.M)(l, (e => {
                            var n;
                            e.preventDefault(), null === (n = B.current) || void 0 === n || n.focus()
                        })),
                        onUnmountAutoFocus: s
                    }, (0, o.createElement)(p.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: d,
                        onEscapeKeyDown: w,
                        onPointerDownOutside: E,
                        onFocusOutside: b,
                        onInteractOutside: C,
                        onDismiss: _
                    }, (0, o.createElement)(h.fC, (0, r.Z)({
                        asChild: !0
                    }, K, {
                        dir: I.dir,
                        orientation: "vertical",
                        loop: a,
                        currentTabStopId: V,
                        onCurrentTabStopIdChange: U,
                        onEntryFocus: (0, u.M)(v, (e => {
                            I.isUsingKeyboardRef.current || e.preventDefault()
                        }))
                    }), (0, o.createElement)(g.VY, (0, r.Z)({
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": de(x.open),
                        "data-radix-menu-content": "",
                        dir: I.dir
                    }, T, O, {
                        ref: W,
                        style: {
                            outline: "none",
                            ...O.style
                        },
                        onKeyDown: (0, u.M)(O.onKeyDown, (e => {
                            const n = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                t = e.ctrlKey || e.altKey || e.metaKey,
                                r = 1 === e.key.length;
                            n && ("Tab" === e.key && e.preventDefault(), !t && r && $(e.key));
                            const o = B.current;
                            if (e.target !== o) return;
                            if (!R.includes(e.key)) return;
                            e.preventDefault();
                            const u = S().filter((e => !e.disabled)).map((e => e.ref.current));
                            y.includes(e.key) && u.reverse(),
                                function(e) {
                                    const n = document.activeElement;
                                    for (const t of e) {
                                        if (t === n) return;
                                        if (t.focus(), document.activeElement !== n) return
                                    }
                                }(u)
                        })),
                        onBlur: (0, u.M)(e.onBlur, (e => {
                            e.currentTarget.contains(e.target) || (window.clearTimeout(X.current), z.current = "")
                        })),
                        onPointerMove: (0, u.M)(e.onPointerMove, pe((e => {
                            const n = e.target,
                                t = q.current !== e.clientX;
                            if (e.currentTarget.contains(n) && t) {
                                const n = e.clientX > q.current ? "right" : "left";
                                j.current = n, q.current = e.clientX
                            }
                        })))
                    })))))))
                })),
                Q = "MenuItem",
                $ = "menu.itemSelect",
                ee = (0, o.forwardRef)(((e, n) => {
                    const {
                        disabled: t = !1,
                        onSelect: a,
                        ...i
                    } = e, s = (0, o.useRef)(null), d = A(Q, e.__scopeMenu), p = H(Q, e.__scopeMenu), f = (0, c.e)(n, s), m = (0, o.useRef)(!1);
                    return (0, o.createElement)(ne, (0, r.Z)({}, i, {
                        ref: f,
                        disabled: t,
                        onClick: (0, u.M)(e.onClick, (() => {
                            const e = s.current;
                            if (!t && e) {
                                const n = new CustomEvent($, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                e.addEventListener($, (e => null === a || void 0 === a ? void 0 : a(e)), {
                                    once: !0
                                }), (0, l.jH)(e, n), n.defaultPrevented ? m.current = !1 : d.onClose()
                            }
                        })),
                        onPointerDown: n => {
                            var t;
                            null === (t = e.onPointerDown) || void 0 === t || t.call(e, n), m.current = !0
                        },
                        onPointerUp: (0, u.M)(e.onPointerUp, (e => {
                            var n;
                            m.current || null === (n = e.currentTarget) || void 0 === n || n.click()
                        })),
                        onKeyDown: (0, u.M)(e.onKeyDown, (e => {
                            const n = "" !== p.searchRef.current;
                            t || n && " " === e.key || _.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        }))
                    }))
                })),
                ne = (0, o.forwardRef)(((e, n) => {
                    const {
                        __scopeMenu: t,
                        disabled: a = !1,
                        textValue: i,
                        ...s
                    } = e, d = H(Q, t), p = Z(t), f = (0, o.useRef)(null), m = (0, c.e)(n, f), [v, g] = (0, o.useState)(!1), [w, E] = (0, o.useState)("");
                    return (0, o.useEffect)((() => {
                        const e = f.current;
                        var n;
                        e && E((null !== (n = e.textContent) && void 0 !== n ? n : "").trim())
                    }), [s.children]), (0, o.createElement)(O.ItemSlot, {
                        scope: t,
                        disabled: a,
                        textValue: null !== i && void 0 !== i ? i : w
                    }, (0, o.createElement)(h.ck, (0, r.Z)({
                        asChild: !0
                    }, p, {
                        focusable: !a
                    }), (0, o.createElement)(l.WV.div, (0, r.Z)({
                        role: "menuitem",
                        "data-highlighted": v ? "" : void 0,
                        "aria-disabled": a || void 0,
                        "data-disabled": a ? "" : void 0
                    }, s, {
                        ref: m,
                        onPointerMove: (0, u.M)(e.onPointerMove, pe((e => {
                            if (a) d.onItemLeave(e);
                            else if (d.onItemEnter(e), !e.defaultPrevented) {
                                e.currentTarget.focus()
                            }
                        }))),
                        onPointerLeave: (0, u.M)(e.onPointerLeave, pe((e => d.onItemLeave(e)))),
                        onFocus: (0, u.M)(e.onFocus, (() => g(!0))),
                        onBlur: (0, u.M)(e.onBlur, (() => g(!1)))
                    }))))
                })),
                te = "MenuRadioGroup",
                [re, oe] = I(te, {
                    value: void 0,
                    onValueChange: () => {}
                }),
                ue = "MenuItemIndicator",
                [ce, ae] = I(ue, {
                    checked: !1
                }),
                ie = "MenuSub",
                [le, se] = I(ie);

            function de(e) {
                return e ? "open" : "closed"
            }

            function pe(e) {
                return n => "mouse" === n.pointerType ? e(n) : void 0
            }
            const fe = V,
                me = U,
                ve = z,
                ge = N,
                we = ee,
                Ee = "DropdownMenu",
                [he, Me] = (0, a.b)(Ee, [T]),
                be = T(),
                [Ce, De] = he(Ee),
                _e = e => {
                    const {
                        __scopeDropdownMenu: n,
                        children: t,
                        dir: u,
                        open: c,
                        defaultOpen: a,
                        onOpenChange: l,
                        modal: s = !0
                    } = e, d = be(n), p = (0, o.useRef)(null), [f = !1, m] = (0, i.T)({
                        prop: c,
                        defaultProp: a,
                        onChange: l
                    });
                    return (0, o.createElement)(Ce, {
                        scope: n,
                        triggerId: (0, v.M)(),
                        triggerRef: p,
                        contentId: (0, v.M)(),
                        open: f,
                        onOpenChange: m,
                        onOpenToggle: (0, o.useCallback)((() => m((e => !e))), [m]),
                        modal: s
                    }, (0, o.createElement)(fe, (0, r.Z)({}, d, {
                        open: f,
                        onOpenChange: m,
                        dir: u,
                        modal: s
                    }), t))
                },
                ye = "DropdownMenuTrigger",
                Re = (0, o.forwardRef)(((e, n) => {
                    const {
                        __scopeDropdownMenu: t,
                        disabled: a = !1,
                        ...i
                    } = e, s = De(ye, t), d = be(t);
                    return (0, o.createElement)(me, (0, r.Z)({
                        asChild: !0
                    }, d), (0, o.createElement)(l.WV.button, (0, r.Z)({
                        type: "button",
                        id: s.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": s.open,
                        "aria-controls": s.open ? s.contentId : void 0,
                        "data-state": s.open ? "open" : "closed",
                        "data-disabled": a ? "" : void 0,
                        disabled: a
                    }, i, {
                        ref: (0, c.F)(n, s.triggerRef),
                        onPointerDown: (0, u.M)(e.onPointerDown, (e => {
                            a || 0 !== e.button || !1 !== e.ctrlKey || (s.onOpenToggle(), s.open || e.preventDefault())
                        })),
                        onKeyDown: (0, u.M)(e.onKeyDown, (e => {
                            a || (["Enter", " "].includes(e.key) && s.onOpenToggle(), "ArrowDown" === e.key && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                        }))
                    })))
                })),
                ke = e => {
                    const {
                        __scopeDropdownMenu: n,
                        ...t
                    } = e, u = be(n);
                    return (0, o.createElement)(ve, (0, r.Z)({}, u, t))
                },
                Oe = "DropdownMenuContent",
                Pe = (0, o.forwardRef)(((e, n) => {
                    const {
                        __scopeDropdownMenu: t,
                        ...c
                    } = e, a = De(Oe, t), i = be(t), l = (0, o.useRef)(!1);
                    return (0, o.createElement)(ge, (0, r.Z)({
                        id: a.contentId,
                        "aria-labelledby": a.triggerId
                    }, i, c, {
                        ref: n,
                        onCloseAutoFocus: (0, u.M)(e.onCloseAutoFocus, (e => {
                            var n;
                            l.current || null === (n = a.triggerRef.current) || void 0 === n || n.focus(), l.current = !1, e.preventDefault()
                        })),
                        onInteractOutside: (0, u.M)(e.onInteractOutside, (e => {
                            const n = e.detail.originalEvent,
                                t = 0 === n.button && !0 === n.ctrlKey,
                                r = 2 === n.button || t;
                            a.modal && !r || (l.current = !0)
                        })),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                })),
                xe = (0, o.forwardRef)(((e, n) => {
                    const {
                        __scopeDropdownMenu: t,
                        ...u
                    } = e, c = be(t);
                    return (0, o.createElement)(we, (0, r.Z)({}, c, u, {
                        ref: n
                    }))
                })),
                Ie = _e,
                Te = Re,
                Fe = ke,
                Ze = Pe,
                Ke = xe
        }
    }
]);