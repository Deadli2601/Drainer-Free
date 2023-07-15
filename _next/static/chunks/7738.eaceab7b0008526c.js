"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7738], {
        17738: function(t, e, i) {
            i.r(e), i.d(e, {
                W3mAccountButton: function() {
                    return Xo
                },
                W3mConnectButton: function() {
                    return Er
                },
                W3mCoreButton: function() {
                    return Dr
                },
                W3mModal: function() {
                    return Jr
                },
                W3mNetworkSwitch: function() {
                    return ra
                }
            });
            const o = window,
                r = o.ShadowRoot && (void 0 === o.ShadyCSS || o.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                a = Symbol(),
                n = new WeakMap;
            class l {
                constructor(t, e, i) {
                    if (this._$cssResult$ = !0, i !== a) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = t, this.t = e
                }
                get styleSheet() {
                    let t = this.o;
                    const e = this.t;
                    if (r && void 0 === t) {
                        const i = void 0 !== e && 1 === e.length;
                        i && (t = n.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), i && n.set(e, t))
                    }
                    return t
                }
                toString() {
                    return this.cssText
                }
            }
            const s = (t, ...e) => {
                    const i = 1 === t.length ? t[0] : e.reduce(((e, i, o) => e + (t => {
                        if (!0 === t._$cssResult$) return t.cssText;
                        if ("number" == typeof t) return t;
                        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                    })(i) + t[o + 1]), t[0]);
                    return new l(i, t, a)
                },
                c = r ? t => t : t => t instanceof CSSStyleSheet ? (t => {
                    let e = "";
                    for (const i of t.cssRules) e += i.cssText;
                    return (t => new l("string" == typeof t ? t : t + "", void 0, a))(e)
                })(t) : t;
            var d;
            const h = window,
                m = h.trustedTypes,
                p = m ? m.emptyScript : "",
                u = h.reactiveElementPolyfillSupport,
                w = {
                    toAttribute(t, e) {
                        switch (e) {
                            case Boolean:
                                t = t ? p : null;
                                break;
                            case Object:
                            case Array:
                                t = null == t ? t : JSON.stringify(t)
                        }
                        return t
                    },
                    fromAttribute(t, e) {
                        let i = t;
                        switch (e) {
                            case Boolean:
                                i = null !== t;
                                break;
                            case Number:
                                i = null === t ? null : Number(t);
                                break;
                            case Object:
                            case Array:
                                try {
                                    i = JSON.parse(t)
                                } catch (t) {
                                    i = null
                                }
                        }
                        return i
                    }
                },
                g = (t, e) => e !== t && (e == e || t == t),
                v = {
                    attribute: !0,
                    type: String,
                    converter: w,
                    reflect: !1,
                    hasChanged: g
                };
            class f extends HTMLElement {
                constructor() {
                    super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
                }
                static addInitializer(t) {
                    var e;
                    this.finalize(), (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(t)
                }
                static get observedAttributes() {
                    this.finalize();
                    const t = [];
                    return this.elementProperties.forEach(((e, i) => {
                        const o = this._$Ep(i, e);
                        void 0 !== o && (this._$Ev.set(o, i), t.push(o))
                    })), t
                }
                static createProperty(t, e = v) {
                    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                        const i = "symbol" == typeof t ? Symbol() : "__" + t,
                            o = this.getPropertyDescriptor(t, i, e);
                        void 0 !== o && Object.defineProperty(this.prototype, t, o)
                    }
                }
                static getPropertyDescriptor(t, e, i) {
                    return {
                        get() {
                            return this[e]
                        },
                        set(o) {
                            const r = this[t];
                            this[e] = o, this.requestUpdate(t, r, i)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
                static getPropertyOptions(t) {
                    return this.elementProperties.get(t) || v
                }
                static finalize() {
                    if (this.hasOwnProperty("finalized")) return !1;
                    this.finalized = !0;
                    const t = Object.getPrototypeOf(this);
                    if (t.finalize(), void 0 !== t.h && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                        const t = this.properties,
                            e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
                        for (const i of e) this.createProperty(i, t[i])
                    }
                    return this.elementStyles = this.finalizeStyles(this.styles), !0
                }
                static finalizeStyles(t) {
                    const e = [];
                    if (Array.isArray(t)) {
                        const i = new Set(t.flat(1 / 0).reverse());
                        for (const t of i) e.unshift(c(t))
                    } else void 0 !== t && e.push(c(t));
                    return e
                }
                static _$Ep(t, e) {
                    const i = e.attribute;
                    return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0
                }
                u() {
                    var t;
                    this._$E_ = new Promise((t => this.enableUpdating = t)), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t => t(this)))
                }
                addController(t) {
                    var e, i;
                    (null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (i = t.hostConnected) || void 0 === i || i.call(t))
                }
                removeController(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
                }
                _$Eg() {
                    this.constructor.elementProperties.forEach(((t, e) => {
                        this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e])
                    }))
                }
                createRenderRoot() {
                    var t;
                    const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
                    return ((t, e) => {
                        r ? t.adoptedStyleSheets = e.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet)) : e.forEach((e => {
                            const i = document.createElement("style"),
                                r = o.litNonce;
                            void 0 !== r && i.setAttribute("nonce", r), i.textContent = e.cssText, t.appendChild(i)
                        }))
                    })(e, this.constructor.elementStyles), e
                }
                connectedCallback() {
                    var t;
                    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t => {
                        var e;
                        return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
                    }))
                }
                enableUpdating(t) {}
                disconnectedCallback() {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.forEach((t => {
                        var e;
                        return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
                    }))
                }
                attributeChangedCallback(t, e, i) {
                    this._$AK(t, i)
                }
                _$EO(t, e, i = v) {
                    var o;
                    const r = this.constructor._$Ep(t, i);
                    if (void 0 !== r && !0 === i.reflect) {
                        const a = (void 0 !== (null === (o = i.converter) || void 0 === o ? void 0 : o.toAttribute) ? i.converter : w).toAttribute(e, i.type);
                        this._$El = t, null == a ? this.removeAttribute(r) : this.setAttribute(r, a), this._$El = null
                    }
                }
                _$AK(t, e) {
                    var i;
                    const o = this.constructor,
                        r = o._$Ev.get(t);
                    if (void 0 !== r && this._$El !== r) {
                        const t = o.getPropertyOptions(r),
                            a = "function" == typeof t.converter ? {
                                fromAttribute: t.converter
                            } : void 0 !== (null === (i = t.converter) || void 0 === i ? void 0 : i.fromAttribute) ? t.converter : w;
                        this._$El = r, this[r] = a.fromAttribute(e, t.type), this._$El = null
                    }
                }
                requestUpdate(t, e, i) {
                    let o = !0;
                    void 0 !== t && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || g)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), !0 === i.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, i))) : o = !1), !this.isUpdatePending && o && (this._$E_ = this._$Ej())
                }
                async _$Ej() {
                    this.isUpdatePending = !0;
                    try {
                        await this._$E_
                    } catch (t) {
                        Promise.reject(t)
                    }
                    const t = this.scheduleUpdate();
                    return null != t && await t, !this.isUpdatePending
                }
                scheduleUpdate() {
                    return this.performUpdate()
                }
                performUpdate() {
                    var t;
                    if (!this.isUpdatePending) return;
                    this.hasUpdated, this._$Ei && (this._$Ei.forEach(((t, e) => this[e] = t)), this._$Ei = void 0);
                    let e = !1;
                    const i = this._$AL;
                    try {
                        e = this.shouldUpdate(i), e ? (this.willUpdate(i), null === (t = this._$ES) || void 0 === t || t.forEach((t => {
                            var e;
                            return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                        })), this.update(i)) : this._$Ek()
                    } catch (t) {
                        throw e = !1, this._$Ek(), t
                    }
                    e && this._$AE(i)
                }
                willUpdate(t) {}
                _$AE(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.forEach((t => {
                        var e;
                        return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
                    })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
                }
                _$Ek() {
                    this._$AL = new Map, this.isUpdatePending = !1
                }
                get updateComplete() {
                    return this.getUpdateComplete()
                }
                getUpdateComplete() {
                    return this._$E_
                }
                shouldUpdate(t) {
                    return !0
                }
                update(t) {
                    void 0 !== this._$EC && (this._$EC.forEach(((t, e) => this._$EO(e, this[e], t))), this._$EC = void 0), this._$Ek()
                }
                updated(t) {}
                firstUpdated(t) {}
            }
            var b;
            f.finalized = !0, f.elementProperties = new Map, f.elementStyles = [], f.shadowRootOptions = {
                mode: "open"
            }, null == u || u({
                ReactiveElement: f
            }), (null !== (d = h.reactiveElementVersions) && void 0 !== d ? d : h.reactiveElementVersions = []).push("1.6.1");
            const x = window,
                y = x.trustedTypes,
                C = y ? y.createPolicy("lit-html", {
                    createHTML: t => t
                }) : void 0,
                $ = "$lit$",
                k = `lit$${(Math.random()+"").slice(9)}$`,
                A = "?" + k,
                O = `<${A}>`,
                E = document,
                _ = () => E.createComment(""),
                I = t => null === t || "object" != typeof t && "function" != typeof t,
                M = Array.isArray,
                P = t => M(t) || "function" == typeof(null == t ? void 0 : t[Symbol.iterator]),
                j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                T = /-->/g,
                W = />/g,
                S = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
                D = /'/g,
                R = /"/g,
                L = /^(?:script|style|textarea|title)$/i,
                N = t => (e, ...i) => ({
                    _$litType$: t,
                    strings: e,
                    values: i
                }),
                z = N(1),
                H = N(2),
                V = Symbol.for("lit-noChange"),
                Z = Symbol.for("lit-nothing"),
                U = new WeakMap,
                B = E.createTreeWalker(E, 129, null, !1),
                F = (t, e) => {
                    const i = t.length - 1,
                        o = [];
                    let r, a = 2 === e ? "<svg>" : "",
                        n = j;
                    for (let s = 0; s < i; s++) {
                        const e = t[s];
                        let i, l, c = -1,
                            d = 0;
                        for (; d < e.length && (n.lastIndex = d, l = n.exec(e), null !== l);) d = n.lastIndex, n === j ? "!--" === l[1] ? n = T : void 0 !== l[1] ? n = W : void 0 !== l[2] ? (L.test(l[2]) && (r = RegExp("</" + l[2], "g")), n = S) : void 0 !== l[3] && (n = S) : n === S ? ">" === l[0] ? (n = null != r ? r : j, c = -1) : void 0 === l[1] ? c = -2 : (c = n.lastIndex - l[2].length, i = l[1], n = void 0 === l[3] ? S : '"' === l[3] ? R : D) : n === R || n === D ? n = S : n === T || n === W ? n = j : (n = S, r = void 0);
                        const h = n === S && t[s + 1].startsWith("/>") ? " " : "";
                        a += n === j ? e + O : c >= 0 ? (o.push(i), e.slice(0, c) + $ + e.slice(c) + k + h) : e + k + (-2 === c ? (o.push(void 0), s) : h)
                    }
                    const l = a + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
                    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
                    return [void 0 !== C ? C.createHTML(l) : l, o]
                };
            class G {
                constructor({
                    strings: t,
                    _$litType$: e
                }, i) {
                    let o;
                    this.parts = [];
                    let r = 0,
                        a = 0;
                    const n = t.length - 1,
                        l = this.parts,
                        [s, c] = F(t, e);
                    if (this.el = G.createElement(s, i), B.currentNode = this.el.content, 2 === e) {
                        const t = this.el.content,
                            e = t.firstChild;
                        e.remove(), t.append(...e.childNodes)
                    }
                    for (; null !== (o = B.nextNode()) && l.length < n;) {
                        if (1 === o.nodeType) {
                            if (o.hasAttributes()) {
                                const t = [];
                                for (const e of o.getAttributeNames())
                                    if (e.endsWith($) || e.startsWith(k)) {
                                        const i = c[a++];
                                        if (t.push(e), void 0 !== i) {
                                            const t = o.getAttribute(i.toLowerCase() + $).split(k),
                                                e = /([.?@])?(.*)/.exec(i);
                                            l.push({
                                                type: 1,
                                                index: r,
                                                name: e[2],
                                                strings: t,
                                                ctor: "." === e[1] ? Q : "?" === e[1] ? tt : "@" === e[1] ? et : X
                                            })
                                        } else l.push({
                                            type: 6,
                                            index: r
                                        })
                                    }
                                for (const e of t) o.removeAttribute(e)
                            }
                            if (L.test(o.tagName)) {
                                const t = o.textContent.split(k),
                                    e = t.length - 1;
                                if (e > 0) {
                                    o.textContent = y ? y.emptyScript : "";
                                    for (let i = 0; i < e; i++) o.append(t[i], _()), B.nextNode(), l.push({
                                        type: 2,
                                        index: ++r
                                    });
                                    o.append(t[e], _())
                                }
                            }
                        } else if (8 === o.nodeType)
                            if (o.data === A) l.push({
                                type: 2,
                                index: r
                            });
                            else {
                                let t = -1;
                                for (; - 1 !== (t = o.data.indexOf(k, t + 1));) l.push({
                                    type: 7,
                                    index: r
                                }), t += k.length - 1
                            }
                        r++
                    }
                }
                static createElement(t, e) {
                    const i = E.createElement("template");
                    return i.innerHTML = t, i
                }
            }

            function q(t, e, i = t, o) {
                var r, a, n, l;
                if (e === V) return e;
                let s = void 0 !== o ? null === (r = i._$Co) || void 0 === r ? void 0 : r[o] : i._$Cl;
                const c = I(e) ? void 0 : e._$litDirective$;
                return (null == s ? void 0 : s.constructor) !== c && (null === (a = null == s ? void 0 : s._$AO) || void 0 === a || a.call(s, !1), void 0 === c ? s = void 0 : (s = new c(t), s._$AT(t, i, o)), void 0 !== o ? (null !== (n = (l = i)._$Co) && void 0 !== n ? n : l._$Co = [])[o] = s : i._$Cl = s), void 0 !== s && (e = q(t, s._$AS(t, e.values), s, o)), e
            }
            class K {
                constructor(t, e) {
                    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(t) {
                    var e;
                    const {
                        el: {
                            content: i
                        },
                        parts: o
                    } = this._$AD, r = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : E).importNode(i, !0);
                    B.currentNode = r;
                    let a = B.nextNode(),
                        n = 0,
                        l = 0,
                        s = o[0];
                    for (; void 0 !== s;) {
                        if (n === s.index) {
                            let e;
                            2 === s.type ? e = new Y(a, a.nextSibling, this, t) : 1 === s.type ? e = new s.ctor(a, s.name, s.strings, this, t) : 6 === s.type && (e = new it(a, this, t)), this._$AV.push(e), s = o[++l]
                        }
                        n !== (null == s ? void 0 : s.index) && (a = B.nextNode(), n++)
                    }
                    return r
                }
                v(t) {
                    let e = 0;
                    for (const i of this._$AV) void 0 !== i && (void 0 !== i.strings ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++
                }
            }
            class Y {
                constructor(t, e, i, o) {
                    var r;
                    this.type = 2, this._$AH = Z, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = o, this._$Cp = null === (r = null == o ? void 0 : o.isConnected) || void 0 === r || r
                }
                get _$AU() {
                    var t, e;
                    return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
                }
                get parentNode() {
                    let t = this._$AA.parentNode;
                    const e = this._$AM;
                    return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode), t
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(t, e = this) {
                    t = q(this, t, e), I(t) ? t === Z || null == t || "" === t ? (this._$AH !== Z && this._$AR(), this._$AH = Z) : t !== this._$AH && t !== V && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : P(t) ? this.T(t) : this._(t)
                }
                k(t) {
                    return this._$AA.parentNode.insertBefore(t, this._$AB)
                }
                $(t) {
                    this._$AH !== t && (this._$AR(), this._$AH = this.k(t))
                }
                _(t) {
                    this._$AH !== Z && I(this._$AH) ? this._$AA.nextSibling.data = t : this.$(E.createTextNode(t)), this._$AH = t
                }
                g(t) {
                    var e;
                    const {
                        values: i,
                        _$litType$: o
                    } = t, r = "number" == typeof o ? this._$AC(t) : (void 0 === o.el && (o.el = G.createElement(o.h, this.options)), o);
                    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === r) this._$AH.v(i);
                    else {
                        const t = new K(r, this),
                            e = t.u(this.options);
                        t.v(i), this.$(e), this._$AH = t
                    }
                }
                _$AC(t) {
                    let e = U.get(t.strings);
                    return void 0 === e && U.set(t.strings, e = new G(t)), e
                }
                T(t) {
                    M(this._$AH) || (this._$AH = [], this._$AR());
                    const e = this._$AH;
                    let i, o = 0;
                    for (const r of t) o === e.length ? e.push(i = new Y(this.k(_()), this.k(_()), this, this.options)) : i = e[o], i._$AI(r), o++;
                    o < e.length && (this._$AR(i && i._$AB.nextSibling, o), e.length = o)
                }
                _$AR(t = this._$AA.nextSibling, e) {
                    var i;
                    for (null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e); t && t !== this._$AB;) {
                        const e = t.nextSibling;
                        t.remove(), t = e
                    }
                }
                setConnected(t) {
                    var e;
                    void 0 === this._$AM && (this._$Cp = t, null === (e = this._$AP) || void 0 === e || e.call(this, t))
                }
            }
            class X {
                constructor(t, e, i, o, r) {
                    this.type = 1, this._$AH = Z, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = r, i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = Z
                }
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(t, e = this, i, o) {
                    const r = this.strings;
                    let a = !1;
                    if (void 0 === r) t = q(this, t, e, 0), a = !I(t) || t !== this._$AH && t !== V, a && (this._$AH = t);
                    else {
                        const o = t;
                        let n, l;
                        for (t = r[0], n = 0; n < r.length - 1; n++) l = q(this, o[i + n], e, n), l === V && (l = this._$AH[n]), a || (a = !I(l) || l !== this._$AH[n]), l === Z ? t = Z : t !== Z && (t += (null != l ? l : "") + r[n + 1]), this._$AH[n] = l
                    }
                    a && !o && this.j(t)
                }
                j(t) {
                    t === Z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
                }
            }
            class Q extends X {
                constructor() {
                    super(...arguments), this.type = 3
                }
                j(t) {
                    this.element[this.name] = t === Z ? void 0 : t
                }
            }
            const J = y ? y.emptyScript : "";
            class tt extends X {
                constructor() {
                    super(...arguments), this.type = 4
                }
                j(t) {
                    t && t !== Z ? this.element.setAttribute(this.name, J) : this.element.removeAttribute(this.name)
                }
            }
            class et extends X {
                constructor(t, e, i, o, r) {
                    super(t, e, i, o, r), this.type = 5
                }
                _$AI(t, e = this) {
                    var i;
                    if ((t = null !== (i = q(this, t, e, 0)) && void 0 !== i ? i : Z) === V) return;
                    const o = this._$AH,
                        r = t === Z && o !== Z || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive,
                        a = t !== Z && (o === Z || r);
                    r && this.element.removeEventListener(this.name, this, o), a && this.element.addEventListener(this.name, this, t), this._$AH = t
                }
                handleEvent(t) {
                    var e, i;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (i = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== i ? i : this.element, t) : this._$AH.handleEvent(t)
                }
            }
            class it {
                constructor(t, e, i) {
                    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(t) {
                    q(this, t)
                }
            }
            const ot = x.litHtmlPolyfillSupport;
            null == ot || ot(G, Y), (null !== (b = x.litHtmlVersions) && void 0 !== b ? b : x.litHtmlVersions = []).push("2.7.2");
            var rt, at;
            class nt extends f {
                constructor() {
                    super(...arguments), this.renderOptions = {
                        host: this
                    }, this._$Do = void 0
                }
                createRenderRoot() {
                    var t, e;
                    const i = super.createRenderRoot();
                    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i
                }
                update(t) {
                    const e = this.render();
                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ((t, e, i) => {
                        var o, r;
                        const a = null !== (o = null == i ? void 0 : i.renderBefore) && void 0 !== o ? o : e;
                        let n = a._$litPart$;
                        if (void 0 === n) {
                            const t = null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r ? r : null;
                            a._$litPart$ = n = new Y(e.insertBefore(_(), t), t, void 0, null != i ? i : {})
                        }
                        return n._$AI(t), n
                    })(e, this.renderRoot, this.renderOptions)
                }
                connectedCallback() {
                    var t;
                    super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
                }
                disconnectedCallback() {
                    var t;
                    super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
                }
                render() {
                    return V
                }
            }
            nt.finalized = !0, nt._$litElement$ = !0, null === (rt = globalThis.litElementHydrateSupport) || void 0 === rt || rt.call(globalThis, {
                LitElement: nt
            });
            const lt = globalThis.litElementPolyfillSupport;
            null == lt || lt({
                LitElement: nt
            });
            (null !== (at = globalThis.litElementVersions) && void 0 !== at ? at : globalThis.litElementVersions = []).push("3.3.1");
            const st = t => e => "function" == typeof e ? ((t, e) => (customElements.define(t, e), e))(t, e) : ((t, e) => {
                    const {
                        kind: i,
                        elements: o
                    } = e;
                    return {
                        kind: i,
                        elements: o,
                        finisher(e) {
                            customElements.define(t, e)
                        }
                    }
                })(t, e),
                ct = (t, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? { ...e,
                    finisher(i) {
                        i.createProperty(e.key, t)
                    }
                } : {
                    kind: "field",
                    key: Symbol(),
                    placement: "own",
                    descriptor: {},
                    originalKey: e.key,
                    initializer() {
                        "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
                    },
                    finisher(i) {
                        i.createProperty(e.key, t)
                    }
                };

            function dt(t) {
                return (e, i) => void 0 !== i ? ((t, e, i) => {
                    e.constructor.createProperty(i, t)
                })(t, e, i) : ct(t, e)
            }

            function ht(t) {
                return dt({ ...t,
                    state: !0
                })
            }
            var mt;
            null === (mt = window.HTMLSlotElement) || void 0 === mt || mt.prototype.assignedElements;
            var pt = i(30218);
            const ut = 1;
            const wt = (t => (...e) => ({
                    _$litDirective$: t,
                    values: e
                }))(class extends class {
                    constructor(t) {}
                    get _$AU() {
                        return this._$AM._$AU
                    }
                    _$AT(t, e, i) {
                        this._$Ct = t, this._$AM = e, this._$Ci = i
                    }
                    _$AS(t, e) {
                        return this.update(t, e)
                    }
                    update(t, e) {
                        return this.render(...e)
                    }
                } {
                    constructor(t) {
                        var e;
                        if (super(t), t.type !== ut || "class" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                    }
                    render(t) {
                        return " " + Object.keys(t).filter((e => t[e])).join(" ") + " "
                    }
                    update(t, [e]) {
                        var i, o;
                        if (void 0 === this.it) {
                            this.it = new Set, void 0 !== t.strings && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((t => "" !== t))));
                            for (const t in e) e[t] && !(null === (i = this.nt) || void 0 === i ? void 0 : i.has(t)) && this.it.add(t);
                            return this.render(e)
                        }
                        const r = t.element.classList;
                        this.it.forEach((t => {
                            t in e || (r.remove(t), this.it.delete(t))
                        }));
                        for (const a in e) {
                            const t = !!e[a];
                            t === this.it.has(a) || (null === (o = this.nt) || void 0 === o ? void 0 : o.has(a)) || (t ? (r.add(a), this.it.add(a)) : (r.remove(a), this.it.delete(a)))
                        }
                        return V
                    }
                }),
                gt = {
                    duration: .3,
                    delay: 0,
                    endDelay: 0,
                    repeat: 0,
                    easing: "ease"
                },
                vt = t => 1e3 * t,
                ft = t => t / 1e3,
                bt = () => {},
                xt = t => t;

            function yt(t, e = !0) {
                if (t && "finished" !== t.playState) try {
                    t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
                } catch (i) {}
            }
            const Ct = t => t(),
                $t = (t, e, i = gt.duration) => new Proxy({
                    animations: t.map(Ct).filter(Boolean),
                    duration: i,
                    options: e
                }, kt),
                kt = {
                    get: (t, e) => {
                        const i = t.animations[0];
                        switch (e) {
                            case "duration":
                                return t.duration;
                            case "currentTime":
                                return ft((null === i || void 0 === i ? void 0 : i[e]) || 0);
                            case "playbackRate":
                            case "playState":
                                return null === i || void 0 === i ? void 0 : i[e];
                            case "finished":
                                return t.finished || (t.finished = Promise.all(t.animations.map(At)).catch(bt)), t.finished;
                            case "stop":
                                return () => {
                                    t.animations.forEach((t => yt(t)))
                                };
                            case "forEachNative":
                                return e => {
                                    t.animations.forEach((i => e(i, t)))
                                };
                            default:
                                return "undefined" === typeof(null === i || void 0 === i ? void 0 : i[e]) ? void 0 : () => t.animations.forEach((t => t[e]()))
                        }
                    },
                    set: (t, e, i) => {
                        switch (e) {
                            case "currentTime":
                                i = vt(i);
                            case "currentTime":
                            case "playbackRate":
                                for (let o = 0; o < t.animations.length; o++) t.animations[o][e] = i;
                                return !0
                        }
                        return !1
                    }
                },
                At = t => t.finished,
                Ot = t => "object" === typeof t && Boolean(t.createAnimation),
                Et = t => "number" === typeof t,
                _t = t => Array.isArray(t) && !Et(t[0]),
                It = (t, e, i) => -i * t + i * e + t,
                Mt = (t, e, i) => e - t === 0 ? 1 : (i - t) / (e - t);

            function Pt(t, e) {
                const i = t[t.length - 1];
                for (let o = 1; o <= e; o++) {
                    const r = Mt(0, e, o);
                    t.push(It(i, 1, r))
                }
            }
            const jt = (t, e, i) => Math.min(Math.max(i, t), e);

            function Tt(t, e = function(t) {
                const e = [0];
                return Pt(e, t - 1), e
            }(t.length), i = xt) {
                const o = t.length,
                    r = o - e.length;
                return r > 0 && Pt(e, r), r => {
                    let a = 0;
                    for (; a < o - 2 && !(r < e[a + 1]); a++);
                    let n = jt(0, 1, Mt(e[a], e[a + 1], r));
                    const l = function(t, e) {
                        return _t(t) ? t[((t, e, i) => {
                            const o = e - t;
                            return ((i - t) % o + o) % o + t
                        })(0, t.length, e)] : t
                    }(i, a);
                    return n = l(n), It(t[a], t[a + 1], n)
                }
            }
            const Wt = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function St(t, e, i, o) {
                if (t === e && i === o) return xt;
                const r = e => function(t, e, i, o, r) {
                    let a, n, l = 0;
                    do {
                        n = e + (i - e) / 2, a = Wt(n, o, r) - t, a > 0 ? i = n : e = n
                    } while (Math.abs(a) > 1e-7 && ++l < 12);
                    return n
                }(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : Wt(r(t), e, o)
            }
            const Dt = t => "function" === typeof t,
                Rt = t => Array.isArray(t) && Et(t[0]),
                Lt = {
                    ease: St(.25, .1, .25, 1),
                    "ease-in": St(.42, 0, 1, 1),
                    "ease-in-out": St(.42, 0, .58, 1),
                    "ease-out": St(0, 0, .58, 1)
                },
                Nt = /\((.*?)\)/;

            function zt(t) {
                if (Dt(t)) return t;
                if (Rt(t)) return St(...t);
                if (Lt[t]) return Lt[t];
                if (t.startsWith("steps")) {
                    const e = Nt.exec(t);
                    if (e) {
                        const t = e[1].split(",");
                        return ((t, e = "end") => i => {
                            const o = (i = "end" === e ? Math.min(i, .999) : Math.max(i, .001)) * t,
                                r = "end" === e ? Math.floor(o) : Math.ceil(o);
                            return jt(0, 1, r / t)
                        })(parseFloat(t[0]), t[1].trim())
                    }
                }
                return xt
            }
            class Ht {
                constructor(t, e = [0, 1], {
                    easing: i,
                    duration: o = gt.duration,
                    delay: r = gt.delay,
                    endDelay: a = gt.endDelay,
                    repeat: n = gt.repeat,
                    offset: l,
                    direction: s = "normal"
                } = {}) {
                    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = xt, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise(((t, e) => {
                            this.resolve = t, this.reject = e
                        })), i = i || gt.easing, Ot(i)) {
                        const t = i.createAnimation(e);
                        i = t.easing, e = t.keyframes || e, o = t.duration || o
                    }
                    this.repeat = n, this.easing = _t(i) ? xt : zt(i), this.updateDuration(o);
                    const c = Tt(e, l, _t(i) ? i.map(zt) : xt);
                    this.tick = e => {
                        var i;
                        let o = 0;
                        o = void 0 !== this.pauseTime ? this.pauseTime : (e - this.startTime) * this.rate, this.t = o, o /= 1e3, o = Math.max(o - r, 0), "finished" === this.playState && void 0 === this.pauseTime && (o = this.totalDuration);
                        const n = o / this.duration;
                        let l = Math.floor(n),
                            d = n % 1;
                        !d && n >= 1 && (d = 1), 1 === d && l--;
                        const h = l % 2;
                        ("reverse" === s || "alternate" === s && h || "alternate-reverse" === s && !h) && (d = 1 - d);
                        const m = o >= this.totalDuration ? 1 : Math.min(d, 1),
                            p = c(this.easing(m));
                        t(p);
                        void 0 === this.pauseTime && ("finished" === this.playState || o >= this.totalDuration + a) ? (this.playState = "finished", null === (i = this.resolve) || void 0 === i || i.call(this, p)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                    }, this.play()
                }
                play() {
                    const t = performance.now();
                    this.playState = "running", void 0 !== this.pauseTime ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
                }
                pause() {
                    this.playState = "paused", this.pauseTime = this.t
                }
                finish() {
                    this.playState = "finished", this.tick(0)
                }
                stop() {
                    var t;
                    this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (t = this.reject) || void 0 === t || t.call(this, !1)
                }
                cancel() {
                    this.stop(), this.tick(this.cancelTimestamp)
                }
                reverse() {
                    this.rate *= -1
                }
                commitStyles() {}
                updateDuration(t) {
                    this.duration = t, this.totalDuration = t * (this.repeat + 1)
                }
                get currentTime() {
                    return this.t
                }
                set currentTime(t) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate
                }
                get playbackRate() {
                    return this.rate
                }
                set playbackRate(t) {
                    this.rate = t
                }
            }
            class Vt {
                setAnimation(t) {
                    this.animation = t, null === t || void 0 === t || t.finished.then((() => this.clearAnimation())).catch((() => {}))
                }
                clearAnimation() {
                    this.animation = this.generator = void 0
                }
            }
            const Zt = new WeakMap;

            function Ut(t) {
                return Zt.has(t) || Zt.set(t, {
                    transforms: [],
                    values: new Map
                }), Zt.get(t)
            }
            const Bt = ["", "X", "Y", "Z"],
                Ft = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                Gt = {
                    syntax: "<angle>",
                    initialValue: "0deg",
                    toDefaultUnit: t => t + "deg"
                },
                qt = {
                    translate: {
                        syntax: "<length-percentage>",
                        initialValue: "0px",
                        toDefaultUnit: t => t + "px"
                    },
                    rotate: Gt,
                    scale: {
                        syntax: "<number>",
                        initialValue: 1,
                        toDefaultUnit: xt
                    },
                    skew: Gt
                },
                Kt = new Map,
                Yt = t => `--motion-${t}`,
                Xt = ["x", "y", "z"];
            ["translate", "scale", "rotate", "skew"].forEach((t => {
                Bt.forEach((e => {
                    Xt.push(t + e), Kt.set(Yt(t + e), qt[t])
                }))
            }));
            const Qt = (t, e) => Xt.indexOf(t) - Xt.indexOf(e),
                Jt = new Set(Xt),
                te = t => Jt.has(t),
                ee = t => t.sort(Qt).reduce(ie, "").trim(),
                ie = (t, e) => `${t} ${e}(var(${Yt(e)}))`,
                oe = t => t.startsWith("--"),
                re = new Set;
            const ae = (t, e) => document.createElement("div").animate(t, e),
                ne = {
                    cssRegisterProperty: () => "undefined" !== typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
                    partialKeyframes: () => {
                        try {
                            ae({
                                opacity: [1]
                            })
                        } catch (t) {
                            return !1
                        }
                        return !0
                    },
                    finished: () => Boolean(ae({
                        opacity: [0, 1]
                    }, {
                        duration: .001
                    }).finished),
                    linearEasing: () => {
                        try {
                            ae({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }
                },
                le = {},
                se = {};
            for (const Pn in ne) se[Pn] = () => (void 0 === le[Pn] && (le[Pn] = ne[Pn]()), le[Pn]);
            const ce = (t, e) => Dt(t) ? se.linearEasing() ? `linear(${((t,e)=>{let i="";const o=Math.round(e/.015);for(let r=0;r<o;r++)i+=t(Mt(0,o-1,r))+", ";return i.substring(0,i.length-2)})(t,e)})` : gt.easing : Rt(t) ? de(t) : t,
                de = ([t, e, i, o]) => `cubic-bezier(${t}, ${e}, ${i}, ${o})`;

            function he(t) {
                return Ft[t] && (t = Ft[t]), te(t) ? Yt(t) : t
            }
            const me = (t, e) => {
                    e = he(e);
                    let i = oe(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
                    if (!i && 0 !== i) {
                        const t = Kt.get(e);
                        t && (i = t.initialValue)
                    }
                    return i
                },
                pe = (t, e, i) => {
                    e = he(e), oe(e) ? t.style.setProperty(e, i) : t.style[e] = i
                },
                ue = t => "string" === typeof t;

            function we(t, e) {
                var i;
                let o = (null === e || void 0 === e ? void 0 : e.toDefaultUnit) || xt;
                const r = t[t.length - 1];
                if (ue(r)) {
                    const t = (null === (i = r.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === i ? void 0 : i[2]) || "";
                    t && (o = e => e + t)
                }
                return o
            }

            function ge(t, e, i, o = {}, r) {
                const a = window.__MOTION_DEV_TOOLS_RECORD,
                    n = !1 !== o.record && a;
                let l, {
                    duration: s = gt.duration,
                    delay: c = gt.delay,
                    endDelay: d = gt.endDelay,
                    repeat: h = gt.repeat,
                    easing: m = gt.easing,
                    persist: p = !1,
                    direction: u,
                    offset: w,
                    allowWebkitAcceleration: g = !1
                } = o;
                const v = Ut(t),
                    f = te(e);
                let b = se.waapi();
                f && ((t, e) => {
                    Ft[e] && (e = Ft[e]);
                    const {
                        transforms: i
                    } = Ut(t);
                    var o, r;
                    r = e, -1 === (o = i).indexOf(r) && o.push(r), t.style.transform = ee(i)
                })(t, e);
                const x = he(e),
                    y = function(t, e) {
                        return t.has(e) || t.set(e, new Vt), t.get(e)
                    }(v.values, x),
                    C = Kt.get(x);
                return yt(y.animation, !(Ot(m) && y.generator) && !1 !== o.record), () => {
                    const v = () => {
                        var e, i;
                        return null !== (i = null !== (e = me(t, x)) && void 0 !== e ? e : null === C || void 0 === C ? void 0 : C.initialValue) && void 0 !== i ? i : 0
                    };
                    let $ = function(t, e) {
                        for (let i = 0; i < t.length; i++) null === t[i] && (t[i] = i ? t[i - 1] : e());
                        return t
                    }((t => Array.isArray(t) ? t : [t])(i), v);
                    const k = we($, C);
                    if (Ot(m)) {
                        const t = m.createAnimation($, "opacity" !== e, v, x, y);
                        m = t.easing, $ = t.keyframes || $, s = t.duration || s
                    }
                    if (oe(x) && (se.cssRegisterProperty() ? function(t) {
                            if (!re.has(t)) {
                                re.add(t);
                                try {
                                    const {
                                        syntax: e,
                                        initialValue: i
                                    } = Kt.has(t) ? Kt.get(t) : {};
                                    CSS.registerProperty({
                                        name: t,
                                        inherits: !1,
                                        syntax: e,
                                        initialValue: i
                                    })
                                } catch (e) {}
                            }
                        }(x) : b = !1), f && !se.linearEasing() && (Dt(m) || _t(m) && m.some(Dt)) && (b = !1), b) {
                        C && ($ = $.map((t => Et(t) ? C.toDefaultUnit(t) : t))), 1 !== $.length || se.partialKeyframes() && !n || $.unshift(v());
                        const e = {
                            delay: vt(c),
                            duration: vt(s),
                            endDelay: vt(d),
                            easing: _t(m) ? void 0 : ce(m, s),
                            direction: u,
                            iterations: h + 1,
                            fill: "both"
                        };
                        l = t.animate({
                            [x]: $,
                            offset: w,
                            easing: _t(m) ? m.map((t => ce(t, s))) : void 0
                        }, e), l.finished || (l.finished = new Promise(((t, e) => {
                            l.onfinish = t, l.oncancel = e
                        })));
                        const i = $[$.length - 1];
                        l.finished.then((() => {
                            p || (pe(t, x, i), l.cancel())
                        })).catch(bt), g || (l.playbackRate = 1.000001)
                    } else if (r && f) $ = $.map((t => "string" === typeof t ? parseFloat(t) : t)), 1 === $.length && $.unshift(parseFloat(v())), l = new r((e => {
                        pe(t, x, k ? k(e) : e)
                    }), $, Object.assign(Object.assign({}, o), {
                        duration: s,
                        easing: m
                    }));
                    else {
                        const e = $[$.length - 1];
                        pe(t, x, C && Et(e) ? C.toDefaultUnit(e) : e)
                    }
                    return n && a(t, e, $, {
                        duration: s,
                        delay: c,
                        easing: m,
                        repeat: h,
                        offset: w
                    }, "motion-one"), y.setAnimation(l), l
                }
            }
            const ve = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);

            function fe(t, e, i) {
                return Dt(t) ? t(e, i) : t
            }
            const be = (xe = Ht, function(t, e, i = {}) {
                t = function(t, e) {
                    var i;
                    return "string" === typeof t ? e ? (null !== (i = e[t]) && void 0 !== i || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
                }(t);
                const o = t.length;
                Boolean(o), Boolean(e);
                const r = [];
                for (let a = 0; a < o; a++) {
                    const n = t[a];
                    for (const t in e) {
                        const l = ve(i, t);
                        l.delay = fe(l.delay, a, o);
                        const s = ge(n, t, e[t], l, xe);
                        r.push(s)
                    }
                }
                return $t(r, i, i.duration)
            });
            var xe;

            function ye(t, e = {}) {
                return $t([() => {
                    const i = new Ht(t, [0, 1], e);
                    return i.finished.catch((() => {})), i
                }], e, e.duration)
            }

            function Ce(t, e, i) {
                return (Dt(t) ? ye : be)(t, e, i)
            }
            const $e = 100,
                ke = 10,
                Ae = 1;

            function Oe(t, e, i) {
                const o = Math.max(e - 5, 0);
                return r = i - t(o), (a = e - o) ? r * (1e3 / a) : 0;
                var r, a
            }

            function Ee(t) {
                return Et(t) && !isNaN(t)
            }

            function _e(t) {
                return ue(t) ? parseFloat(t) : t
            }
            const Ie = function(t) {
                const e = new WeakMap;
                return (i = {}) => {
                    const o = new Map,
                        r = (e = 0, r = 100, a = 0, n = !1) => {
                            const l = `${e}-${r}-${a}-${n}`;
                            return o.has(l) || o.set(l, t(Object.assign({
                                from: e,
                                to: r,
                                velocity: a,
                                restSpeed: n ? .05 : 2,
                                restDistance: n ? .01 : .5
                            }, i))), o.get(l)
                        },
                        a = (t, i) => (e.has(t) || e.set(t, function(t, e = xt) {
                            let i, o = 10,
                                r = t(0);
                            const a = [e(r.current)];
                            for (; !r.done && o < 1e4;) r = t(o), a.push(e(r.done ? r.target : r.current)), void 0 === i && r.hasReachedTarget && (i = o), o += 10;
                            const n = o - 10;
                            return 1 === a.length && a.push(r.current), {
                                keyframes: a,
                                duration: n / 1e3,
                                overshootDuration: (null !== i && void 0 !== i ? i : n) / 1e3
                            }
                        }(t, i)), e.get(t));
                    return {
                        createAnimation: (t, e = !0, i, o, n) => {
                            let l, s, c, d = 0,
                                h = xt;
                            const m = t.length;
                            if (e) {
                                h = we(t, o ? Kt.get(he(o)) : void 0);
                                if (c = _e(t[m - 1]), m > 1 && null !== t[0]) s = _e(t[0]);
                                else {
                                    const t = null === n || void 0 === n ? void 0 : n.generator;
                                    if (t) {
                                        const {
                                            animation: e,
                                            generatorStartTime: i
                                        } = n, o = (null === e || void 0 === e ? void 0 : e.startTime) || i || 0, r = (null === e || void 0 === e ? void 0 : e.currentTime) || performance.now() - o, a = t(r).current;
                                        s = a, d = Oe((e => t(e).current), r, a)
                                    } else i && (s = _e(i()))
                                }
                            }
                            if (Ee(s) && Ee(c)) {
                                const t = r(s, c, d, null === o || void 0 === o ? void 0 : o.includes("scale"));
                                l = Object.assign(Object.assign({}, a(t, h)), {
                                    easing: "linear"
                                }), n && (n.generator = t, n.generatorStartTime = performance.now())
                            }
                            if (!l) {
                                l = {
                                    easing: "ease",
                                    duration: a(r(0, 100)).overshootDuration
                                }
                            }
                            return l
                        }
                    }
                }
            }((({
                stiffness: t = $e,
                damping: e = ke,
                mass: i = Ae,
                from: o = 0,
                to: r = 1,
                velocity: a = 0,
                restSpeed: n = 2,
                restDistance: l = .5
            } = {}) => {
                a = a ? ft(a) : 0;
                const s = {
                        done: !1,
                        hasReachedTarget: !1,
                        current: o,
                        target: r
                    },
                    c = r - o,
                    d = Math.sqrt(t / i) / 1e3,
                    h = ((t = $e, e = ke, i = Ae) => e / (2 * Math.sqrt(t * i)))(t, e, i);
                let m;
                if (h < 1) {
                    const t = d * Math.sqrt(1 - h * h);
                    m = e => r - Math.exp(-h * d * e) * ((h * d * c - a) / t * Math.sin(t * e) + c * Math.cos(t * e))
                } else m = t => r - Math.exp(-d * t) * (c + (d * c - a) * t);
                return t => {
                    s.current = m(t);
                    const e = 0 === t ? a : Oe(m, t, s.current),
                        i = Math.abs(e) <= n,
                        c = Math.abs(r - s.current) <= l;
                    var d, h, p;
                    return s.done = i && c, s.hasReachedTarget = (d = o, h = r, p = s.current, d < h && p >= h || d > h && p <= h), s
                }
            }));
            var Me = i(92592),
                Pe = Object.defineProperty,
                je = Object.getOwnPropertySymbols,
                Te = Object.prototype.hasOwnProperty,
                We = Object.prototype.propertyIsEnumerable,
                Se = (t, e, i) => e in t ? Pe(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : t[e] = i,
                De = (t, e) => {
                    for (var i in e || (e = {})) Te.call(e, i) && Se(t, i, e[i]);
                    if (je)
                        for (var i of je(e)) We.call(e, i) && Se(t, i, e[i]);
                    return t
                };
            const Re = {
                    getPreset: t => ({
                        "--w3m-accent-color": "#3396FF",
                        "--w3m-accent-fill-color": "#FFFFFF",
                        "--w3m-z-index": "89",
                        "--w3m-background-color": "#3396FF",
                        "--w3m-background-border-radius": "8px",
                        "--w3m-container-border-radius": "30px",
                        "--w3m-wallet-icon-border-radius": "15px",
                        "--w3m-wallet-icon-large-border-radius": "30px",
                        "--w3m-wallet-icon-small-border-radius": "7px",
                        "--w3m-input-border-radius": "28px",
                        "--w3m-button-border-radius": "10px",
                        "--w3m-notification-border-radius": "36px",
                        "--w3m-secondary-button-border-radius": "28px",
                        "--w3m-icon-button-border-radius": "50%",
                        "--w3m-button-hover-highlight-border-radius": "10px",
                        "--w3m-text-big-bold-size": "20px",
                        "--w3m-text-big-bold-weight": "600",
                        "--w3m-text-big-bold-line-height": "24px",
                        "--w3m-text-big-bold-letter-spacing": "-0.03em",
                        "--w3m-text-big-bold-text-transform": "none",
                        "--w3m-text-xsmall-bold-size": "10px",
                        "--w3m-text-xsmall-bold-weight": "700",
                        "--w3m-text-xsmall-bold-line-height": "12px",
                        "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
                        "--w3m-text-xsmall-bold-text-transform": "uppercase",
                        "--w3m-text-xsmall-regular-size": "12px",
                        "--w3m-text-xsmall-regular-weight": "600",
                        "--w3m-text-xsmall-regular-line-height": "14px",
                        "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
                        "--w3m-text-xsmall-regular-text-transform": "none",
                        "--w3m-text-small-thin-size": "14px",
                        "--w3m-text-small-thin-weight": "500",
                        "--w3m-text-small-thin-line-height": "16px",
                        "--w3m-text-small-thin-letter-spacing": "-0.03em",
                        "--w3m-text-small-thin-text-transform": "none",
                        "--w3m-text-small-regular-size": "14px",
                        "--w3m-text-small-regular-weight": "600",
                        "--w3m-text-small-regular-line-height": "16px",
                        "--w3m-text-small-regular-letter-spacing": "-0.03em",
                        "--w3m-text-small-regular-text-transform": "none",
                        "--w3m-text-medium-regular-size": "16px",
                        "--w3m-text-medium-regular-weight": "600",
                        "--w3m-text-medium-regular-line-height": "20px",
                        "--w3m-text-medium-regular-letter-spacing": "-0.03em",
                        "--w3m-text-medium-regular-text-transform": "none",
                        "--w3m-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                        "--w3m-success-color": "rgb(38,181,98)",
                        "--w3m-error-color": "rgb(242, 90, 103)"
                    }[t]),
                    setTheme() {
                        const t = document.querySelector(":root"),
                            {
                                themeVariables: e
                            } = pt.Ic.state;
                        if (t) {
                            const i = De(De(De(De({}, function() {
                                var t;
                                const e = {
                                    light: {
                                        foreground: {
                                            1: "rgb(20,20,20)",
                                            2: "rgb(121,134,134)",
                                            3: "rgb(158,169,169)"
                                        },
                                        background: {
                                            1: "rgb(255,255,255)",
                                            2: "rgb(241,243,243)",
                                            3: "rgb(228,231,231)"
                                        },
                                        overlay: "rgba(0,0,0,0.1)"
                                    },
                                    dark: {
                                        foreground: {
                                            1: "rgb(228,231,231)",
                                            2: "rgb(148,158,158)",
                                            3: "rgb(110,119,119)"
                                        },
                                        background: {
                                            1: "rgb(20,20,20)",
                                            2: "rgb(39,42,42)",
                                            3: "rgb(59,64,64)"
                                        },
                                        overlay: "rgba(255,255,255,0.1)"
                                    }
                                }[null != (t = pt.Ic.state.themeMode) ? t : "dark"];
                                return {
                                    "--w3m-color-fg-1": e.foreground[1],
                                    "--w3m-color-fg-2": e.foreground[2],
                                    "--w3m-color-fg-3": e.foreground[3],
                                    "--w3m-color-bg-1": e.background[1],
                                    "--w3m-color-bg-2": e.background[2],
                                    "--w3m-color-bg-3": e.background[3],
                                    "--w3m-color-overlay": e.overlay
                                }
                            }()), {
                                "--w3m-accent-color": "#3396FF",
                                "--w3m-accent-fill-color": "#FFFFFF",
                                "--w3m-z-index": "89",
                                "--w3m-background-color": "#3396FF",
                                "--w3m-background-border-radius": "8px",
                                "--w3m-container-border-radius": "30px",
                                "--w3m-wallet-icon-border-radius": "15px",
                                "--w3m-wallet-icon-large-border-radius": "30px",
                                "--w3m-wallet-icon-small-border-radius": "7px",
                                "--w3m-input-border-radius": "28px",
                                "--w3m-button-border-radius": "10px",
                                "--w3m-notification-border-radius": "36px",
                                "--w3m-secondary-button-border-radius": "28px",
                                "--w3m-icon-button-border-radius": "50%",
                                "--w3m-button-hover-highlight-border-radius": "10px",
                                "--w3m-text-big-bold-size": "20px",
                                "--w3m-text-big-bold-weight": "600",
                                "--w3m-text-big-bold-line-height": "24px",
                                "--w3m-text-big-bold-letter-spacing": "-0.03em",
                                "--w3m-text-big-bold-text-transform": "none",
                                "--w3m-text-xsmall-bold-size": "10px",
                                "--w3m-text-xsmall-bold-weight": "700",
                                "--w3m-text-xsmall-bold-line-height": "12px",
                                "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
                                "--w3m-text-xsmall-bold-text-transform": "uppercase",
                                "--w3m-text-xsmall-regular-size": "12px",
                                "--w3m-text-xsmall-regular-weight": "600",
                                "--w3m-text-xsmall-regular-line-height": "14px",
                                "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
                                "--w3m-text-xsmall-regular-text-transform": "none",
                                "--w3m-text-small-thin-size": "14px",
                                "--w3m-text-small-thin-weight": "500",
                                "--w3m-text-small-thin-line-height": "16px",
                                "--w3m-text-small-thin-letter-spacing": "-0.03em",
                                "--w3m-text-small-thin-text-transform": "none",
                                "--w3m-text-small-regular-size": "14px",
                                "--w3m-text-small-regular-weight": "600",
                                "--w3m-text-small-regular-line-height": "16px",
                                "--w3m-text-small-regular-letter-spacing": "-0.03em",
                                "--w3m-text-small-regular-text-transform": "none",
                                "--w3m-text-medium-regular-size": "16px",
                                "--w3m-text-medium-regular-weight": "600",
                                "--w3m-text-medium-regular-line-height": "20px",
                                "--w3m-text-medium-regular-letter-spacing": "-0.03em",
                                "--w3m-text-medium-regular-text-transform": "none",
                                "--w3m-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                                "--w3m-success-color": "rgb(38,181,98)",
                                "--w3m-error-color": "rgb(242, 90, 103)"
                            }), e), function() {
                                const {
                                    themeVariables: t
                                } = pt.Ic.state;
                                return {
                                    "--w3m-background-image-url": null != t && t["--w3m-background-image-url"] ? `url(${t["--w3m-background-image-url"]})` : "none"
                                }
                            }());
                            Object.entries(i).forEach((([e, i]) => t.style.setProperty(e, i)))
                        }
                    },
                    globalCss: s `*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-accent-fill-color);background:var(--w3m-accent-color)}`
                },
                Le = s `button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-accent-color);border-radius:var(--w3m-icon-button-border-radius);margin-bottom:4px}button path{fill:var(--w3m-accent-fill-color)}`;
            var Ne = Object.defineProperty,
                ze = Object.getOwnPropertyDescriptor,
                He = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? ze(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Ne(e, i, a), a
                };
            let Ve = class extends nt {
                constructor() {
                    super(...arguments), this.icon = void 0, this.label = "", this.onClick = () => null
                }
                render() {
                    return z `<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`
                }
            };
            Ve.styles = [Re.globalCss, Le], He([dt()], Ve.prototype, "icon", 2), He([dt()], Ve.prototype, "label", 2), He([dt()], Ve.prototype, "onClick", 2), Ve = He([st("w3m-box-button")], Ve);
            const Ze = s `button{border-radius:var(--w3m-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--w3m-accent-color)}button path{fill:var(--w3m-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{background-color:var(--w3m-color-bg-3);pointer-events:none}.w3m-ghost,.w3m-ghost:hover::after,.w3m-outline{background-color:transparent}.w3m-ghost:hover{opacity:.5}.w3m-ghost::after{border-color:transparent}.w3m-ghost path{fill:var(--w3m-color-fg-2)}.w3m-outline path{fill:var(--w3m-accent-color)}.w3m-outline:disabled{background-color:transparent;opacity:.5}`;
            var Ue = Object.defineProperty,
                Be = Object.getOwnPropertyDescriptor,
                Fe = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Be(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Ue(e, i, a), a
                };
            let Ge = class extends nt {
                constructor() {
                    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default"
                }
                render() {
                    const t = {
                        "w3m-icon-left": void 0 !== this.iconLeft,
                        "w3m-icon-right": void 0 !== this.iconRight,
                        "w3m-ghost": "ghost" === this.variant,
                        "w3m-outline": "outline" === this.variant
                    };
                    let e = "inverse";
                    return "ghost" === this.variant && (e = "secondary"), "outline" === this.variant && (e = "accent"), z `<button class="${wt(t)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<w3m-text variant="small-regular" color="${e}"><slot></slot></w3m-text>${this.iconRight}</button>`
                }
            };
            Ge.styles = [Re.globalCss, Ze], Fe([dt()], Ge.prototype, "disabled", 2), Fe([dt()], Ge.prototype, "iconLeft", 2), Fe([dt()], Ge.prototype, "iconRight", 2), Fe([dt()], Ge.prototype, "onClick", 2), Fe([dt()], Ge.prototype, "variant", 2), Ge = Fe([st("w3m-button")], Ge);
            const qe = s `:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--w3m-button-border-radius);color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-accent-color);background-color:transparent}.w3m-secondary::after{display:none}`;
            var Ke = Object.defineProperty,
                Ye = Object.getOwnPropertyDescriptor,
                Xe = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Ye(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Ke(e, i, a), a
                };
            let Qe = class extends nt {
                constructor() {
                    super(...arguments), this.disabled = !1, this.variant = "primary"
                }
                render() {
                    const t = {
                        "w3m-secondary": "secondary" === this.variant
                    };
                    return z `<button ?disabled="${this.disabled}" class="${wt(t)}"><slot></slot></button>`
                }
            };
            Qe.styles = [Re.globalCss, qe], Xe([dt()], Qe.prototype, "disabled", 2), Xe([dt()], Qe.prototype, "variant", 2), Qe = Xe([st("w3m-button-big")], Qe);
            const Je = s `:host{background-color:var(--w3m-color-bg-2);border-top:1px solid var(--w3m-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
            var ti = Object.defineProperty,
                ei = Object.getOwnPropertyDescriptor;
            let ii = class extends nt {
                render() {
                    return z `<div><slot></slot></div>`
                }
            };
            ii.styles = [Re.globalCss, Je], ii = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? ei(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && ti(e, i, a), a
            })([st("w3m-info-footer")], ii);
            const oi = {
                    CROSS_ICON: H `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_LOGO: H `<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_ICON: H `<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
                    WALLET_CONNECT_ICON_COLORED: H `<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
                    BACK_ICON: H `<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
                    COPY_ICON: H `<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
                    RETRY_ICON: H `<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
                    DESKTOP_ICON: H `<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    MOBILE_ICON: H `<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
                    ARROW_DOWN_ICON: H `<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
                    ARROW_UP_RIGHT_ICON: H `<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    ARROW_RIGHT_ICON: H `<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
                    QRCODE_ICON: H `<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
                    SCAN_ICON: H `<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
                    CHECKMARK_ICON: H `<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
                    HELP_ETH_IMG: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
                    HELP_PAINTING_IMG: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
                    HELP_CHART_IMG: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
                    HELP_KEY_IMG: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
                    HELP_USER_IMG: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
                    HELP_LOCK_IMG: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
                    HELP_COMPAS_IMG: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
                    HELP_NOUN_IMG: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
                    HELP_DAO_IMG: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
                    SEARCH_ICON: H `<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
                    HELP_ICON: H `<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
                    WALLET_ICON: H `<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
                    NETWORK_PLACEHOLDER: H `<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
                    WALLET_PLACEHOLDER: H `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
                    TOKEN_PLACEHOLDER: H `<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
                    ACCOUNT_COPY: H `<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
                    ACCOUNT_DISCONNECT: H `<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`,
                    GLOBE_ICON: H `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
                },
                ri = s `.w3m-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--w3m-background-border-radius) * .9);background-color:var(--w3m-background-color);background-image:var(--w3m-background-image-url);background-position:center;background-size:cover}.w3m-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--w3m-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--w3m-color-fg-1)}.w3m-toolbar div{display:flex}.w3m-toolbar div button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}`;
            var ai = Object.defineProperty,
                ni = Object.getOwnPropertyDescriptor,
                li = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? ni(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && ai(e, i, a), a
                };
            let si = class extends nt {
                constructor() {
                    super(), this.isHelp = !1, this.unsubscribeRouter = void 0, this.unsubscribeRouter = pt.AV.subscribe((t => {
                        this.isHelp = "Help" === t.view
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeRouter) || t.call(this)
                }
                onHelp() {
                    pt.AV.push("Help")
                }
                logoTemplate() {
                    var t;
                    const e = null == (t = pt.Ic.state.themeVariables) ? void 0 : t["--w3m-logo-image-url"];
                    return e ? z `<img src="${e}">` : oi.WALLET_CONNECT_LOGO
                }
                render() {
                    const t = {
                        "w3m-help-active": this.isHelp
                    };
                    return z `<div class="w3m-toolbar-placeholder"></div><div class="w3m-toolbar">${this.logoTemplate()}<div class="${wt(t)}"><button @click="${this.onHelp}">${oi.HELP_ICON}</button> <button @click="${pt.jb.close}">${oi.CROSS_ICON}</button></div></div>`
                }
            };
            si.styles = [Re.globalCss, ri], li([ht()], si.prototype, "isHelp", 2), si = li([st("w3m-modal-backcard")], si);
            const ci = s `main{padding:20px;padding-top:0;width:100%}`;
            var di = Object.defineProperty,
                hi = Object.getOwnPropertyDescriptor;
            let mi = class extends nt {
                render() {
                    return z `<main><slot></slot></main>`
                }
            };
            mi.styles = [Re.globalCss, ci], mi = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? hi(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && di(e, i, a), a
            })([st("w3m-modal-content")], mi);
            const pi = s `footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
            var ui = Object.defineProperty,
                wi = Object.getOwnPropertyDescriptor;
            let gi = class extends nt {
                render() {
                    return z `<footer><slot></slot></footer>`
                }
            };
            gi.styles = [Re.globalCss, pi], gi = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? wi(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && ui(e, i, a), a
            })([st("w3m-modal-footer")], gi);
            const vi = s `header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-accent-color)}`;
            var fi = Object.defineProperty,
                bi = Object.getOwnPropertyDescriptor,
                xi = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? bi(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && fi(e, i, a), a
                };
            let yi = class extends nt {
                constructor() {
                    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1
                }
                backBtnTemplate() {
                    return z `<button class="w3m-back-btn" @click="${pt.AV.goBack}">${oi.BACK_ICON}</button>`
                }
                actionBtnTemplate() {
                    return z `<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
                }
                render() {
                    const t = {
                            "w3m-border": this.border
                        },
                        e = pt.AV.state.history.length > 1,
                        i = this.title ? z `<w3m-text variant="big-bold">${this.title}</w3m-text>` : z `<slot></slot>`;
                    return z `<header class="${wt(t)}">${e?this.backBtnTemplate():null} ${i} ${this.onAction?this.actionBtnTemplate():null}</header>`
                }
            };
            yi.styles = [Re.globalCss, vi], xi([dt()], yi.prototype, "title", 2), xi([dt()], yi.prototype, "onAction", 2), xi([dt()], yi.prototype, "actionIcon", 2), xi([dt()], yi.prototype, "border", 2), yi = xi([st("w3m-modal-header")], yi);
            const Ci = {
                    1: "692ed6ba-e569-459a-556a-776476829e00",
                    42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
                    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
                    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
                    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
                    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
                    137: "41d04d42-da3b-4453-8506-668cc0727900",
                    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
                    9001: "f926ff41-260d-4028-635e-91913fc28e00",
                    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
                    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
                    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
                    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
                    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
                    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00"
                },
                $i = {
                    ETH: {
                        icon: "692ed6ba-e569-459a-556a-776476829e00"
                    },
                    WETH: {
                        icon: "692ed6ba-e569-459a-556a-776476829e00"
                    },
                    AVAX: {
                        icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00"
                    },
                    FTM: {
                        icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00"
                    },
                    BNB: {
                        icon: "93564157-2e8e-4ce7-81df-b264dbee9b00"
                    },
                    MATIC: {
                        icon: "41d04d42-da3b-4453-8506-668cc0727900"
                    },
                    OP: {
                        icon: "ab9c186a-c52f-464b-2906-ca59d760a400"
                    },
                    xDAI: {
                        icon: "02b53f6a-e3d4-479e-1cb4-21178987d100"
                    },
                    EVMOS: {
                        icon: "f926ff41-260d-4028-635e-91913fc28e00"
                    },
                    METIS: {
                        icon: "3897a66d-40b9-4833-162f-a2c90531c900"
                    },
                    IOTX: {
                        icon: "34e68754-e536-40da-c153-6ef2e7188a00"
                    }
                },
                ki = {
                    externalWallets() {
                        const {
                            isStandalone: t
                        } = pt.zb.state;
                        if (t) return [];
                        let e = pt.Id.client().getConnectors();
                        return e = e.filter((t => "injected" !== t.id)), e
                    },
                    manualMobileWallets() {
                        var t;
                        return null != (t = pt.t0.state.mobileWallets) ? t : []
                    },
                    manualDesktopWallets() {
                        var t;
                        return null != (t = pt.t0.state.desktopWallets) ? t : []
                    },
                    manualWallets() {
                        var t;
                        const {
                            mobileWallets: e,
                            desktopWallets: i
                        } = pt.t0.state;
                        return null != (t = pt.zv.isMobile() ? e : i) ? t : []
                    },
                    installedInjectedWallets() {
                        const {
                            isStandalone: t
                        } = pt.zb.state;
                        if (t) return [];
                        if (!pt.Id.client().isInjectedProviderInstalled()) return [];
                        const {
                            namespace: e
                        } = pt.Id.client(), {
                            injectedWallets: i
                        } = pt.uc.state;
                        let o = i.filter((({
                            injected: t
                        }) => !!t.some((t => pt.Id.client().safeCheckInjectedProvider(t.injected_id) && t.namespace === e))));
                        return o.length > 1 && (o = o.filter((({
                            injected: t
                        }) => !!t.map((({
                            injected_id: t
                        }) => t)).every((t => "isMetaMask" !== t))))), o.length ? o : [{
                            name: "Browser",
                            id: "browser",
                            image_id: void 0
                        }]
                    },
                    injectedWallets() {
                        const {
                            isStandalone: t
                        } = pt.zb.state, {
                            explorerExcludedWalletIds: e,
                            explorerRecommendedWalletIds: i
                        } = pt.t0.state, o = pt.zv.isMobile();
                        if (t || "ALL" === e || o) return [];
                        const {
                            namespace: r
                        } = pt.Id.client(), {
                            injectedWallets: a
                        } = pt.uc.state;
                        return a.filter((({
                            id: t,
                            injected: o
                        }) => {
                            const a = pt.zv.isArray(e) ? e : [],
                                n = pt.zv.isArray(i) ? i : [];
                            return !!o.some((e => e.namespace === r && !a.includes(t) && !n.includes(t)))
                        }))
                    },
                    recentWallet: () => Ai.getRecentWallet(),
                    recomendedWallets() {
                        var t;
                        const e = ki.installedInjectedWallets().map((({
                                id: t
                            }) => t)),
                            i = [...e, null == (t = ki.recentWallet()) ? void 0 : t.id],
                            {
                                recomendedWallets: o
                            } = pt.uc.state;
                        return o.filter((t => !i.includes(t.id)))
                    }
                },
                Ai = {
                    MOBILE_BREAKPOINT: 600,
                    W3M_RECENT_WALLET_DATA: "W3M_RECENT_WALLET_DATA",
                    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
                    rejectStandaloneButtonComponent() {
                        const {
                            isStandalone: t
                        } = pt.zb.state;
                        if (t) throw new Error("Web3Modal button components are not available in standalone mode.")
                    },
                    getShadowRootElement(t, e) {
                        const i = t.renderRoot.querySelector(e);
                        if (!i) throw new Error(`${e} not found`);
                        return i
                    },
                    getWalletIcon({
                        id: t,
                        image_id: e
                    }) {
                        const {
                            walletImages: i
                        } = pt.t0.state;
                        return null != i && i[t] ? i[t] : e ? pt.uc.getWalletImageUrl(e) : ""
                    },
                    getWalletName: (t, e = !1) => e ? t.split(" ")[0] : t,
                    getChainIcon(t) {
                        var e;
                        const i = Ci[t],
                            {
                                projectId: o,
                                chainImages: r
                            } = pt.t0.state;
                        return null != (e = r ? .[t]) ? e : o && i ? pt.uc.getAssetImageUrl(i) : ""
                    },
                    getTokenIcon(t) {
                        var e, i;
                        const o = null == (e = $i[t]) ? void 0 : e.icon,
                            {
                                projectId: r,
                                tokenImages: a
                            } = pt.t0.state;
                        return null != (i = a ? .[t]) ? i : r && o ? pt.uc.getAssetImageUrl(o) : ""
                    },
                    isMobileAnimation: () => window.innerWidth <= Ai.MOBILE_BREAKPOINT,
                    async preloadImage(t) {
                        const e = new Promise(((e, i) => {
                            const o = new Image;
                            o.onload = e, o.onerror = i, o.src = t
                        }));
                        return Promise.race([e, pt.zv.wait(3e3)])
                    },
                    getErrorMessage: t => t instanceof Error ? t.message : "Unknown Error",
                    debounce(t, e = 500) {
                        let i;
                        return (...o) => {
                            i && clearTimeout(i), i = setTimeout((function() {
                                t(...o)
                            }), e)
                        }
                    },
                    handleMobileLinking(t) {
                        const {
                            standaloneUri: e
                        } = pt.zb.state, {
                            pairingUri: i
                        } = pt.kD.state, {
                            mobile: o,
                            name: r
                        } = t, a = o ? .native, n = o ? .universal;
                        Ai.setRecentWallet(t),
                            function(t) {
                                let e = "";
                                a ? e = pt.zv.formatUniversalUrl(a, t, r) : n && (e = pt.zv.formatNativeUrl(n, t, r)), pt.zv.openHref(e, "_self")
                            }(e || i)
                    },
                    handleAndroidLinking() {
                        const {
                            standaloneUri: t
                        } = pt.zb.state, {
                            pairingUri: e
                        } = pt.kD.state;
                        t ? (pt.zv.setWalletConnectAndroidDeepLink(t), pt.zv.openHref(t, "_self")) : (pt.zv.setWalletConnectAndroidDeepLink(e), pt.zv.openHref(e, "_self"))
                    },
                    async handleUriCopy() {
                        const {
                            standaloneUri: t
                        } = pt.zb.state, {
                            pairingUri: e
                        } = pt.kD.state;
                        t ? await navigator.clipboard.writeText(t) : await navigator.clipboard.writeText(e), pt.Vs.openToast("Link copied", "success")
                    },
                    async handleConnectorConnection(t, e) {
                        try {
                            const {
                                selectedChain: e
                            } = pt.zb.state;
                            await pt.Id.client().connectConnector(t, e ? .id), pt.jb.close()
                        } catch (i) {
                            console.error(i), e ? e() : pt.Vs.openToast(Ai.getErrorMessage(i), "error")
                        }
                    },
                    getCustomImageUrls() {
                        const {
                            chainImages: t,
                            walletImages: e
                        } = pt.t0.state, i = Object.values(t ? ? {}), o = Object.values(e ? ? {});
                        return Object.values([...i, ...o])
                    },
                    truncate: (t, e = 8) => t.length <= e ? t : `${t.substring(0,4)}...${t.substring(t.length-4)}`,
                    generateAvatarColors(t) {
                        var e;
                        const i = null == (e = t.match(/.{1,7}/g)) ? void 0 : e.splice(0, 5),
                            o = [];
                        i ? .forEach((t => {
                            let e = 0;
                            for (let o = 0; o < t.length; o += 1) e = t.charCodeAt(o) + ((e << 5) - e), e &= e;
                            const i = [0, 0, 0];
                            for (let o = 0; o < 3; o += 1) {
                                const t = e >> 8 * o & 255;
                                i[o] = t
                            }
                            o.push(`rgb(${i[0]}, ${i[1]}, ${i[2]})`)
                        }));
                        const r = document.querySelector(":root");
                        if (r) {
                            const t = {
                                "--w3m-color-av-1": o[0],
                                "--w3m-color-av-2": o[1],
                                "--w3m-color-av-3": o[2],
                                "--w3m-color-av-4": o[3],
                                "--w3m-color-av-5": o[4]
                            };
                            Object.entries(t).forEach((([t, e]) => r.style.setProperty(t, e)))
                        }
                    },
                    setRecentWallet(t) {
                        const {
                            walletConnectVersion: e
                        } = pt.zb.state;
                        localStorage.setItem(Ai.W3M_RECENT_WALLET_DATA, JSON.stringify({
                            [e]: t
                        }))
                    },
                    getRecentWallet() {
                        const t = localStorage.getItem(Ai.W3M_RECENT_WALLET_DATA);
                        if (t) {
                            const {
                                walletConnectVersion: e
                            } = pt.zb.state, i = JSON.parse(t);
                            if (i[e]) return i[e]
                        }
                    },
                    caseSafeIncludes: (t, e) => t.toUpperCase().includes(e.toUpperCase()),
                    openWalletExplorerUrl() {
                        pt.zv.openHref(Ai.EXPLORER_WALLET_URL, "_blank")
                    },
                    getCachedRouterWalletPlatforms() {
                        const {
                            id: t,
                            desktop: e,
                            mobile: i,
                            injected: o
                        } = pt.zv.getWalletRouterData(), r = ki.installedInjectedWallets(), a = !(null == o || !o.length), n = r.some((e => e.id === t)), l = !(null == e || !e.native), s = !(null == e || !e.universal);
                        return {
                            isInjectedInstalled: n,
                            isInjected: a,
                            isDesktop: l,
                            isMobile: !(null == i || !i.native) || !(null == i || !i.universal),
                            isWeb: s
                        }
                    },
                    goToConnectingView(t) {
                        pt.AV.setData({
                            Wallet: t
                        });
                        const e = pt.zv.isMobile(),
                            {
                                isDesktop: i,
                                isWeb: o,
                                isMobile: r,
                                isInjectedInstalled: a
                            } = Ai.getCachedRouterWalletPlatforms();
                        e ? a ? pt.AV.push("InjectedConnecting") : r ? pt.AV.push("MobileConnecting") : o ? pt.AV.push("WebConnecting") : pt.AV.push("InstallWallet") : a ? pt.AV.push("InjectedConnecting") : i ? pt.AV.push("DesktopConnecting") : o ? pt.AV.push("WebConnecting") : r ? pt.AV.push("MobileQrcodeConnecting") : pt.AV.push("InstallWallet")
                    }
                },
                Oi = s `.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
            var Ei = Object.defineProperty,
                _i = Object.getOwnPropertyDescriptor,
                Ii = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? _i(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Ei(e, i, a), a
                };
            let Mi = class extends nt {
                constructor() {
                    super(), this.view = pt.AV.state.view, this.prevView = pt.AV.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = pt.AV.subscribe((t => {
                        this.view !== t.view && this.onChangeRoute()
                    }))
                }
                firstUpdated() {
                    this.resizeObserver = new ResizeObserver((([t]) => {
                        const e = `${t.contentRect.height}px`;
                        "0px" !== this.oldHeight && Ce(this.routerEl, {
                            height: [this.oldHeight, e]
                        }, {
                            duration: .2
                        }), this.oldHeight = e
                    })), this.resizeObserver.observe(this.contentEl)
                }
                disconnectedCallback() {
                    var t, e;
                    null == (t = this.unsubscribe) || t.call(this), null == (e = this.resizeObserver) || e.disconnect()
                }
                get routerEl() {
                    return Ai.getShadowRootElement(this, ".w3m-router")
                }
                get contentEl() {
                    return Ai.getShadowRootElement(this, ".w3m-content")
                }
                viewTemplate() {
                    switch (this.view) {
                        case "ConnectWallet":
                            return z `<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
                        case "SelectNetwork":
                            return z `<w3m-select-network-view></w3m-select-network-view>`;
                        case "InjectedConnecting":
                            return z `<w3m-injected-connecting-view></w3m-injected-connecting-view>`;
                        case "DesktopConnecting":
                            return z `<w3m-desktop-connecting-view></w3m-desktop-connecting-view>`;
                        case "MobileConnecting":
                            return z `<w3m-mobile-connecting-view></w3m-mobile-connecting-view>`;
                        case "WebConnecting":
                            return z `<w3m-web-connecting-view></w3m-web-connecting-view>`;
                        case "MobileQrcodeConnecting":
                            return z `<w3m-mobile-qr-connecting-view></w3m-mobile-qr-connecting-view>`;
                        case "GetWallet":
                            return z `<w3m-get-wallet-view></w3m-get-wallet-view>`;
                        case "WalletExplorer":
                            return z `<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
                        case "Qrcode":
                            return z `<w3m-qrcode-view></w3m-qrcode-view>`;
                        case "Help":
                            return z `<w3m-help-view></w3m-help-view>`;
                        case "Account":
                            return z `<w3m-account-view></w3m-account-view>`;
                        case "SwitchNetwork":
                            return z `<w3m-switch-network-view></w3m-switch-network-view>`;
                        case "InstallWallet":
                            return z `<w3m-install-wallet-view></w3m-install-wallet-view>`;
                        default:
                            return z `<div>Not Found</div>`
                    }
                }
                async onChangeRoute() {
                    await Ce(this.routerEl, {
                        opacity: [1, 0],
                        scale: [1, 1.02]
                    }, {
                        duration: .15,
                        delay: .1
                    }).finished, this.view = pt.AV.state.view, Ce(this.routerEl, {
                        opacity: [0, 1],
                        scale: [.99, 1]
                    }, {
                        duration: .37,
                        delay: .05
                    })
                }
                render() {
                    return z `<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`
                }
            };
            Mi.styles = [Re.globalCss, Oi], Ii([ht()], Mi.prototype, "view", 2), Ii([ht()], Mi.prototype, "prevView", 2), Mi = Ii([st("w3m-modal-router")], Mi);
            const Pi = s `div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--w3m-notification-border-radius);border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-accent-color)}.w3m-error path{fill:var(--w3m-error-color)}`;
            var ji = Object.defineProperty,
                Ti = Object.getOwnPropertyDescriptor,
                Wi = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Ti(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && ji(e, i, a), a
                };
            let Si = class extends nt {
                constructor() {
                    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = pt.Vs.subscribe((t => {
                        t.open ? (this.open = !0, this.timeout = setTimeout((() => pt.Vs.closeToast()), 2200)) : (this.open = !1, clearTimeout(this.timeout))
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribe) || t.call(this), clearTimeout(this.timeout), pt.Vs.closeToast()
                }
                render() {
                    const {
                        message: t,
                        variant: e
                    } = pt.Vs.state, i = {
                        "w3m-success": "success" === e,
                        "w3m-error": "error" === e
                    };
                    return this.open ? z `<div class="${wt(i)}">${"success"===e?oi.CHECKMARK_ICON:null} ${"error"===e?oi.CROSS_ICON:null}<w3m-text variant="small-regular">${t}</w3m-text></div>` : null
                }
            };
            Si.styles = [Re.globalCss, Pi], Wi([ht()], Si.prototype, "open", 2), Si = Wi([st("w3m-modal-toast")], Si);
            const Di = s `button{padding:5px;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:hover{background-color:var(--w3m-color-overlay)}`;
            var Ri = Object.defineProperty,
                Li = Object.getOwnPropertyDescriptor,
                Ni = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Li(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Ri(e, i, a), a
                };
            let zi = class extends nt {
                constructor() {
                    super(...arguments), this.onClick = () => null, this.name = "", this.chainId = ""
                }
                render() {
                    return z `<button @click="${this.onClick}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular">${this.name}</w3m-text></button>`
                }
            };
            zi.styles = [Re.globalCss, Di], Ni([dt()], zi.prototype, "onClick", 2), Ni([dt()], zi.prototype, "name", 2), Ni([dt()], zi.prototype, "chainId", 2), zi = Ni([st("w3m-network-button")], zi);
            const Hi = s `@keyframes loading{to{stroke-dashoffset:0}}:host{width:inherit;height:inherit;position:relative}path{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}image{clip-path:path('M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z')}`;
            var Vi = Object.defineProperty,
                Zi = Object.getOwnPropertyDescriptor,
                Ui = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Zi(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Vi(e, i, a), a
                };
            let Bi = class extends nt {
                constructor() {
                    super(...arguments), this.chainId = ""
                }
                render() {
                    const t = Ai.getChainIcon(this.chainId);
                    return t ? z `<svg width="54" height="59" viewBox="0 0 54 59" fill="none"><image href="${t}"/><image href="${t}" width="54" height="59"/><path d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/></svg>` : z `${oi.NETWORK_PLACEHOLDER}`
                }
            };
            Bi.styles = [Re.globalCss, Hi], Ui([dt()], Bi.prototype, "chainId", 2), Bi = Ui([st("w3m-network-image")], Bi);

            function Fi(t, e, i) {
                return t !== e && (t - e < 0 ? e - t : t - e) <= i + .1
            }
            const Gi = {
                    generate(t, e, i, o) {
                        const r = "light" === o ? "#141414" : "#fff",
                            a = "light" === o ? "#fff" : "#141414",
                            n = [],
                            l = function(t, e) {
                                const i = Array.prototype.slice.call(Me.create(t, {
                                        errorCorrectionLevel: e
                                    }).modules.data, 0),
                                    o = Math.sqrt(i.length);
                                return i.reduce(((t, e, i) => (i % o === 0 ? t.push([e]) : t[t.length - 1].push(e)) && t), [])
                            }(t, "Q"),
                            s = e / l.length,
                            c = [{
                                x: 0,
                                y: 0
                            }, {
                                x: 1,
                                y: 0
                            }, {
                                x: 0,
                                y: 1
                            }];
                        c.forEach((({
                            x: t,
                            y: e
                        }) => {
                            const i = (l.length - 7) * s * t,
                                o = (l.length - 7) * s * e;
                            for (let l = 0; l < c.length; l += 1) {
                                const t = s * (7 - 2 * l);
                                n.push(H `<rect fill="${l%2===0?r:a}" height="${t}" rx="${.32*t}" ry="${.32*t}" width="${t}" x="${i+s*l}" y="${o+s*l}">`)
                            }
                        }));
                        const d = Math.floor((i + 25) / s),
                            h = l.length / 2 - d / 2,
                            m = l.length / 2 + d / 2 - 1,
                            p = [];
                        l.forEach(((t, e) => {
                            t.forEach(((t, i) => {
                                if (l[e][i] && !(e < 7 && i < 7 || e > l.length - 8 && i < 7 || e < 7 && i > l.length - 8) && !(e > h && e < m && i > h && i < m)) {
                                    const t = e * s + s / 2,
                                        o = i * s + s / 2;
                                    p.push([t, o])
                                }
                            }))
                        }));
                        const u = {};
                        return p.forEach((([t, e]) => {
                            u[t] ? u[t].push(e) : u[t] = [e]
                        })), Object.entries(u).map((([t, e]) => {
                            const i = e.filter((t => e.every((e => !Fi(t, e, s)))));
                            return [Number(t), i]
                        })).forEach((([t, e]) => {
                            e.forEach((e => {
                                n.push(H `<circle cx="${t}" cy="${e}" fill="${r}" r="${s/2.5}">`)
                            }))
                        })), Object.entries(u).filter((([t, e]) => e.length > 1)).map((([t, e]) => {
                            const i = e.filter((t => e.some((e => Fi(t, e, s)))));
                            return [Number(t), i]
                        })).map((([t, e]) => {
                            e.sort(((t, e) => t < e ? -1 : 1));
                            const i = [];
                            for (const o of e) {
                                const t = i.find((t => t.some((t => Fi(o, t, s)))));
                                t ? t.push(o) : i.push([o])
                            }
                            return [t, i.map((t => [t[0], t[t.length - 1]]))]
                        })).forEach((([t, e]) => {
                            e.forEach((([e, i]) => {
                                n.push(H `<line x1="${t}" x2="${t}" y1="${e}" y2="${i}" stroke="${r}" stroke-width="${s/1.25}" stroke-linecap="round">`)
                            }))
                        })), n
                    }
                },
                qi = s `@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:var(--w3m-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-accent-color)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
            var Ki = Object.defineProperty,
                Yi = Object.getOwnPropertyDescriptor,
                Xi = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Yi(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Ki(e, i, a), a
                };
            let Qi = class extends nt {
                constructor() {
                    super(...arguments), this.uri = "", this.size = 0, this.imageId = "", this.walletId = ""
                }
                svgTemplate() {
                    var t;
                    const e = null != (t = pt.Ic.state.themeMode) ? t : "light";
                    return H `<svg height="${this.size}" width="${this.size}">${Gi.generate(this.uri,this.size,this.size/4,e)}</svg>`
                }
                render() {
                    return z `<div>${this.walletId?z`<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}"></w3m-wallet-image>`:oi.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`
                }
            };
            Qi.styles = [Re.globalCss, qi], Xi([dt()], Qi.prototype, "uri", 2), Xi([dt({
                type: Number
            })], Qi.prototype, "size", 2), Xi([dt()], Qi.prototype, "imageId", 2), Xi([dt()], Qi.prototype, "walletId", 2), Qi = Xi([st("w3m-qrcode")], Qi);
            const Ji = s `:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--w3m-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin:2px 4px 0 0}div{top:0;left:calc(50% - 12px);transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:calc(100% - 2px);width:fit-content;position:relative}input:focus-within+div,input:not(:placeholder-shown)+div{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+div w3m-text,input:not(:placeholder-shown)+div w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-accent-color)}path{fill:var(--w3m-color-fg-2)}`;
            var to = Object.defineProperty,
                eo = Object.getOwnPropertyDescriptor,
                io = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? eo(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && to(e, i, a), a
                };
            let oo = class extends nt {
                constructor() {
                    super(...arguments), this.onChange = () => null
                }
                render() {
                    const t = "Search wallets";
                    return z `<input type="text" @input="${this.onChange}" placeholder="${t}"><div>${oi.SEARCH_ICON}<w3m-text color="secondary" variant="small-thin">${t}</w3m-text></div>`
                }
            };
            oo.styles = [Re.globalCss, Ji], io([dt()], oo.prototype, "onChange", 2), oo = io([st("w3m-search-input")], oo);
            const ro = s `@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-accent-color)}`;
            var ao = Object.defineProperty,
                no = Object.getOwnPropertyDescriptor;
            let lo = class extends nt {
                render() {
                    return z `<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
                }
            };
            lo.styles = [Re.globalCss, ro], lo = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? no(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && ao(e, i, a), a
            })([st("w3m-spinner")], lo);
            const so = s `span{font-style:normal;font-family:var(--w3m-font-family);font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xsmall-bold{font-family:var(--w3m-text-xsmall-bold-font-family);font-weight:var(--w3m-text-xsmall-bold-weight);font-size:var(--w3m-text-xsmall-bold-size);line-height:var(--w3m-text-xsmall-bold-line-height);letter-spacing:var(--w3m-text-xsmall-bold-letter-spacing);text-transform:var(--w3m-text-xsmall-bold-text-transform)}.w3m-xsmall-regular{font-family:var(--w3m-text-xsmall-regular-font-family);font-weight:var(--w3m-text-xsmall-regular-weight);font-size:var(--w3m-text-xsmall-regular-size);line-height:var(--w3m-text-xsmall-regular-line-height);letter-spacing:var(--w3m-text-xsmall-regular-letter-spacing);text-transform:var(--w3m-text-xsmall-regular-text-transform)}.w3m-small-thin{font-family:var(--w3m-text-small-thin-font-family);font-weight:var(--w3m-text-small-thin-weight);font-size:var(--w3m-text-small-thin-size);line-height:var(--w3m-text-small-thin-line-height);letter-spacing:var(--w3m-text-small-thin-letter-spacing);text-transform:var(--w3m-text-small-thin-text-transform)}.w3m-small-regular{font-family:var(--w3m-text-small-regular-font-family);font-weight:var(--w3m-text-small-regular-weight);font-size:var(--w3m-text-small-regular-size);line-height:var(--w3m-text-small-regular-line-height);letter-spacing:var(--w3m-text-small-regular-letter-spacing);text-transform:var(--w3m-text-small-regular-text-transform)}.w3m-medium-regular{font-family:var(--w3m-text-medium-regular-font-family);font-weight:var(--w3m-text-medium-regular-weight);font-size:var(--w3m-text-medium-regular-size);line-height:var(--w3m-text-medium-regular-line-height);letter-spacing:var(--w3m-text-medium-regular-letter-spacing);text-transform:var(--w3m-text-medium-regular-text-transform)}.w3m-big-bold{font-family:var(--w3m-text-big-bold-font-family);font-weight:var(--w3m-text-big-bold-weight);font-size:var(--w3m-text-big-bold-size);line-height:var(--w3m-text-big-bold-line-height);letter-spacing:var(--w3m-text-big-bold-letter-spacing);text-transform:var(--w3m-text-big-bold-text-transform)}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-accent-fill-color)}.w3m-color-accnt{color:var(--w3m-accent-color)}.w3m-color-error{color:var(--w3m-error-color)}`;
            var co = Object.defineProperty,
                ho = Object.getOwnPropertyDescriptor,
                mo = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? ho(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && co(e, i, a), a
                };
            let po = class extends nt {
                constructor() {
                    super(...arguments), this.variant = "medium-regular", this.color = "primary"
                }
                render() {
                    const t = {
                        "w3m-big-bold": "big-bold" === this.variant,
                        "w3m-medium-regular": "medium-regular" === this.variant,
                        "w3m-small-regular": "small-regular" === this.variant,
                        "w3m-small-thin": "small-thin" === this.variant,
                        "w3m-xsmall-regular": "xsmall-regular" === this.variant,
                        "w3m-xsmall-bold": "xsmall-bold" === this.variant,
                        "w3m-color-primary": "primary" === this.color,
                        "w3m-color-secondary": "secondary" === this.color,
                        "w3m-color-tertiary": "tertiary" === this.color,
                        "w3m-color-inverse": "inverse" === this.color,
                        "w3m-color-accnt": "accent" === this.color,
                        "w3m-color-error": "error" === this.color
                    };
                    return z `<span><slot class="${wt(t)}"></slot></span>`
                }
            };
            po.styles = [Re.globalCss, so], mo([dt()], po.prototype, "variant", 2), mo([dt()], po.prototype, "color", 2), po = mo([st("w3m-text")], po);
            const uo = s `div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
            var wo = Object.defineProperty,
                go = Object.getOwnPropertyDescriptor,
                vo = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? go(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && wo(e, i, a), a
                };
            let fo = class extends nt {
                constructor() {
                    super(...arguments), this.symbol = void 0
                }
                render() {
                    var t;
                    const e = Ai.getTokenIcon(null != (t = this.symbol) ? t : "");
                    return e ? z `<div><img src="${e}" alt="${this.id}"></div>` : oi.TOKEN_PLACEHOLDER
                }
            };
            fo.styles = [Re.globalCss, uo], vo([dt()], fo.prototype, "symbol", 2), fo = vo([st("w3m-token-image")], fo);
            const bo = s `button{width:100%;height:100%;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:hover{background-color:var(--w3m-color-overlay)}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--w3m-wallet-icon-border-radius);margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
            var xo = Object.defineProperty,
                yo = Object.getOwnPropertyDescriptor,
                Co = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? yo(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && xo(e, i, a), a
                };
            let $o = class extends nt {
                constructor() {
                    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1
                }
                sublabelTemplate() {
                    return this.recent ? z `<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">RECENT</w3m-text>` : this.installed ? z `<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</w3m-text>` : null
                }
                render() {
                    var t;
                    return z `<button @click="${this.onClick}"><div><w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}"></w3m-wallet-image><w3m-text variant="xsmall-regular">${null!=(t=this.label)?t:Ai.getWalletName(this.name,!0)}</w3m-text>${this.sublabelTemplate()}</div></button>`
                }
            };
            $o.styles = [Re.globalCss, bo], Co([dt()], $o.prototype, "onClick", 2), Co([dt()], $o.prototype, "name", 2), Co([dt()], $o.prototype, "walletId", 2), Co([dt()], $o.prototype, "label", 2), Co([dt()], $o.prototype, "imageId", 2), Co([dt()], $o.prototype, "installed", 2), Co([dt()], $o.prototype, "recent", 2), $o = Co([st("w3m-wallet-button")], $o);
            const ko = s `:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--w3m-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
            var Ao = Object.defineProperty,
                Oo = Object.getOwnPropertyDescriptor,
                Eo = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Oo(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Ao(e, i, a), a
                };
            let _o = class extends nt {
                constructor() {
                    super(...arguments), this.walletId = "", this.imageId = void 0
                }
                render() {
                    const t = Ai.getWalletIcon({
                        id: this.walletId,
                        image_id: this.imageId
                    });
                    return z `${t.length?z`<div><img src="${t}" alt="${this.id}"></div>`:oi.WALLET_PLACEHOLDER}`
                }
            };
            _o.styles = [Re.globalCss, ko], Eo([dt()], _o.prototype, "walletId", 2), Eo([dt()], _o.prototype, "imageId", 2), _o = Eo([st("w3m-wallet-image")], _o);
            var Io = Object.defineProperty,
                Mo = Object.getOwnPropertyDescriptor;
            let Po = class extends nt {
                constructor() {
                    super(), this.unwatchAccount = void 0, pt.CV.getAccount(), this.fetchProfile(), this.fetchBalance(), this.unwatchAccount = pt.Id.client().watchAccount((t => {
                        const {
                            address: e,
                            isConnected: i
                        } = pt.CV.state;
                        t.isConnected && t.address !== e && (this.fetchProfile(t.address), this.fetchBalance(t.address), pt.CV.setAddress(t.address)), t.isConnected || pt.CV.resetAccount(), i !== t.isConnected && pt.jb.close(), pt.CV.setIsConnected(t.isConnected)
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unwatchAccount) || t.call(this)
                }
                async fetchProfile(t) {
                    var e;
                    const i = null == (e = pt.zb.state.chains) ? void 0 : e.find((t => 1 === t.id));
                    if (pt.t0.state.enableAccountView && i) try {
                        await pt.CV.fetchProfile(Ai.preloadImage, t)
                    } catch (o) {
                        console.error(o), pt.Vs.openToast(Ai.getErrorMessage(o), "error")
                    }
                }
                async fetchBalance(t) {
                    if (pt.t0.state.enableAccountView) try {
                        await pt.CV.fetchBalance(t)
                    } catch (g) {
                        console.error(g), pt.Vs.openToast(Ai.getErrorMessage(g), "error")
                    }
                }
            };
            Po = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Mo(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && Io(e, i, a), a
            })([st("w3m-account-context")], Po);
            var jo = Object.defineProperty,
                To = Object.getOwnPropertyDescriptor,
                Wo = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? To(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && jo(e, i, a), a
                };
            let So = class extends nt {
                constructor() {
                    super(), this.preload = !0, this.preloadData()
                }
                async loadImages(t) {
                    try {
                        null != t && t.length && await Promise.all(t.map((async t => Ai.preloadImage(t))))
                    } catch {
                        console.info("Unsuccessful attempt at preloading some images", t)
                    }
                }
                async preloadListings() {
                    var t;
                    if (pt.t0.state.enableExplorer) {
                        const {
                            chains: e
                        } = pt.zb.state;
                        await Promise.all([pt.uc.getRecomendedWallets(), pt.uc.getInjectedWallets()]), pt.zb.setIsDataLoaded(!0);
                        const {
                            recomendedWallets: i
                        } = pt.uc.state, o = ki.installedInjectedWallets(), r = null != (t = e ? .map((t => Ai.getChainIcon(t.id)))) ? t : [], a = i.map((t => Ai.getWalletIcon(t))), n = o.map((t => Ai.getWalletIcon(t)));
                        await this.loadImages([...r, ...a, ...n])
                    } else pt.zb.setIsDataLoaded(!0)
                }
                async preloadCustomImages() {
                    const t = Ai.getCustomImageUrls();
                    await this.loadImages(t)
                }
                async preloadData() {
                    try {
                        this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                    } catch (t) {
                        console.error(t), pt.Vs.openToast("Failed preloading", "error")
                    }
                }
            };
            Wo([ht()], So.prototype, "preload", 2), So = Wo([st("w3m-explorer-context")], So);
            var Do = Object.defineProperty,
                Ro = Object.getOwnPropertyDescriptor,
                Lo = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Ro(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Do(e, i, a), a
                };
            let No = class extends nt {
                constructor() {
                    super(), this.activeChainId = void 0, this.unwatchNetwork = void 0;
                    const t = pt.zb.getSelectedChain();
                    this.activeChainId = t ? .id, this.unwatchNetwork = pt.Id.client().watchNetwork((t => {
                        const e = t.chain;
                        e && this.activeChainId !== e.id && (pt.zb.setSelectedChain(e), this.activeChainId = e.id, pt.CV.resetBalance(), this.fetchBalance())
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unwatchNetwork) || t.call(this)
                }
                async fetchBalance() {
                    if (pt.t0.state.enableAccountView) try {
                        await pt.CV.fetchBalance()
                    } catch (t) {
                        console.error(t), pt.Vs.openToast(Ai.getErrorMessage(t), "error")
                    }
                }
            };
            Lo([ht()], No.prototype, "activeChainId", 2), No = Lo([st("w3m-network-context")], No);
            var zo = Object.defineProperty,
                Ho = Object.getOwnPropertyDescriptor;
            let Vo = class extends nt {
                constructor() {
                    super(), this.unsubscribeTheme = void 0, Re.setTheme(), this.unsubscribeTheme = pt.Ic.subscribe(Re.setTheme), this.preloadThemeImages()
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeTheme) || t.call(this)
                }
                async preloadThemeImages() {
                    try {
                        const {
                            themeVariables: t
                        } = pt.Ic.state, e = [t ? .["--w3m-background-image-url"], t ? .["--w3m-logo-image-url"]].filter(Boolean);
                        e.length && await Promise.all(e.map((async t => Ai.preloadImage(t))))
                    } catch {
                        console.info("Unsuccessful attempt at preloading some images")
                    }
                }
            };
            Vo = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Ho(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && zo(e, i, a), a
            })([st("w3m-theme-context")], Vo);
            var Zo = Object.defineProperty,
                Uo = Object.getOwnPropertyDescriptor;
            var Bo;
            let Fo = class extends nt {
                constructor() {
                    super(), this.unwatchOptions = void 0, this.unwatchAccount = void 0, this.timeout = void 0, this.isGenerated = !1, this.selectedChainId = null == (Bo = pt.zb.state.selectedChain) ? void 0 : Bo.id, this.isAccountConnected = pt.CV.state.isConnected, this.lastRetry = Date.now(), this.unwatchOptions = pt.zb.subscribe((t => {
                        var e, i;
                        (null == (e = t.selectedChain) ? void 0 : e.id) !== this.selectedChainId && (this.selectedChainId = null == (i = t.selectedChain) ? void 0 : i.id, this.connectAndWait())
                    })), this.unwatchAccount = pt.CV.subscribe((t => {
                        (this.isAccountConnected !== t.isConnected || !this.isGenerated) && (this.isAccountConnected = t.isConnected, setTimeout(this.connectAndWait.bind(this), 0))
                    })), document.addEventListener("visibilitychange", this.onVisibilityChange.bind(this))
                }
                disconnectedCallback() {
                    var t, e;
                    null == (t = this.unwatchOptions) || t.call(this), null == (e = this.unwatchAccount) || e.call(this), document.removeEventListener("visibilitychange", this.onVisibilityChange)
                }
                async connectAndWait() {
                    if (clearTimeout(this.timeout), !this.isAccountConnected) {
                        this.isGenerated = !0, this.timeout = setTimeout(this.connectAndWait.bind(this), 18e4);
                        try {
                            const {
                                standaloneUri: t,
                                selectedChain: e
                            } = pt.zb.state;
                            t ? pt.kD.setPairingUri(t) : await pt.Id.client().connectWalletConnect((t => pt.kD.setPairingUri(t)), e ? .id)
                        } catch (t) {
                            console.error(t), pt.kD.setPairingError(!0), pt.Vs.openToast("Connection request declined", "error"), Date.now() - this.lastRetry >= 1e3 && (this.lastRetry = Date.now(), this.connectAndWait())
                        }
                    }
                }
                onVisibilityChange() {
                    !document.hidden && pt.zv.isMobile() && setTimeout(this.connectAndWait.bind(this), 1e3)
                }
            };
            Fo = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Uo(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && Zo(e, i, a), a
            })([st("w3m-wc-connection-context")], Fo);
            const Go = s `:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:var(--w3m-button-border-radius);padding:4px 4px 4px 8px}div button{border-radius:var(--w3m-secondary-button-border-radius);padding:4px 8px;padding-left:4px;height:auto;margin-left:10px;color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}.w3m-no-avatar{padding-left:8px}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
            var qo = Object.defineProperty,
                Ko = Object.getOwnPropertyDescriptor,
                Yo = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Ko(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && qo(e, i, a), a
                };
            let Xo = class extends nt {
                constructor() {
                    super(), this.balance = "hide", this.avatar = "show", Ai.rejectStandaloneButtonComponent()
                }
                onOpen() {
                    const {
                        isStandalone: t
                    } = pt.zb.state;
                    t || pt.jb.open({
                        route: "Account"
                    })
                }
                accountTemplate() {
                    const t = "show" === this.avatar;
                    return z `${t?z`<w3m-avatar></w3m-avatar>`:null}<w3m-address-text></w3m-address-text>`
                }
                render() {
                    const t = "show" === this.balance,
                        e = {
                            "w3m-no-avatar": "hide" === this.avatar
                        };
                    return t ? z `<div><w3m-balance></w3m-balance><button @click="${this.onOpen}" class="${wt(e)}">${this.accountTemplate()}</button></div>` : z `<w3m-button-big @click="${this.onOpen}">${this.accountTemplate()}</w3m-button-big>`
                }
            };
            Xo.styles = [Re.globalCss, Go], Yo([dt()], Xo.prototype, "balance", 2), Yo([dt()], Xo.prototype, "avatar", 2), Xo = Yo([st("w3m-account-button")], Xo);
            const Qo = s `button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
            var Jo = Object.defineProperty,
                tr = Object.getOwnPropertyDescriptor,
                er = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? tr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Jo(e, i, a), a
                };
            let ir = class extends nt {
                constructor() {
                    super(), this.chainId = 0, this.label = "", this.unsubscribeNetwork = void 0;
                    const {
                        selectedChain: t
                    } = pt.zb.state;
                    this.chainId = t ? .id, this.label = t ? .name, this.unsubscribeNetwork = pt.zb.subscribe((({
                        selectedChain: t
                    }) => {
                        this.chainId = t ? .id, this.label = t ? .name
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeNetwork) || t.call(this)
                }
                onClick() {
                    pt.AV.push("SelectNetwork")
                }
                render() {
                    const {
                        chains: t,
                        selectedChain: e
                    } = pt.zb.state, i = t ? .map((t => t.id)), o = e && i ? .includes(e.id), r = t && t.length <= 1 && o;
                    return z `<button @click="${this.onClick}" ?disabled="${r}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`
                }
            };
            ir.styles = [Re.globalCss, Qo], er([ht()], ir.prototype, "chainId", 2), er([ht()], ir.prototype, "label", 2), ir = er([st("w3m-account-network-button")], ir);
            const or = s `@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
            var rr = Object.defineProperty,
                ar = Object.getOwnPropertyDescriptor,
                nr = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? ar(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && rr(e, i, a), a
                };
            let lr = class extends nt {
                constructor() {
                    super(), this.address = void 0, this.name = void 0, this.loading = !0, this.variant = "button", this.unsubscribeAccount = void 0, this.address = pt.CV.state.address, this.name = pt.CV.state.profileName, this.loading = !!pt.CV.state.profileLoading, this.unsubscribeAccount = pt.CV.subscribe((({
                        address: t,
                        profileName: e,
                        profileLoading: i
                    }) => {
                        this.address = t, this.name = e, this.loading = !!i
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeAccount) || t.call(this)
                }
                render() {
                    var t;
                    const e = "button" === this.variant,
                        i = {
                            "w3m-loading": this.loading
                        };
                    return z `<w3m-text class="${wt(i)}" variant="${e?"medium-regular":"big-bold"}" color="${e?"inverse":"primary"}">${this.name?this.name:Ai.truncate(null!=(t=this.address)?t:"")}</w3m-text>`
                }
            };
            lr.styles = [Re.globalCss, or], nr([ht()], lr.prototype, "address", 2), nr([ht()], lr.prototype, "name", 2), nr([ht()], lr.prototype, "loading", 2), nr([dt()], lr.prototype, "variant", 2), lr = nr([st("w3m-address-text")], lr);
            const sr = {
                    onConnecting(t) {
                        Ai.goToConnectingView(t)
                    },
                    onExternal(t) {
                        Ai.handleConnectorConnection(t)
                    },
                    manualWalletsTemplate() {
                        return ki.manualDesktopWallets().map((t => z `<w3m-wallet-button walletId="${t.id}" name="${t.name}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`))
                    },
                    recomendedWalletsTemplate() {
                        return ki.recomendedWallets().map((t => z `<w3m-wallet-button walletId="${t.id}" imageId="${t.image_id}" name="${t.name}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`))
                    },
                    externalWalletsTemplate() {
                        return ki.externalWallets().map((t => z `<w3m-wallet-button name="${t.name}" walletId="${t.id}" .onClick="${()=>this.onExternal(t.id)}"></w3m-wallet-button>`))
                    },
                    recentWalletTemplate() {
                        const t = ki.recentWallet();
                        if (t) return z `<w3m-wallet-button name="${t.name}" walletId="${t.id}" imageId="${t.image_id}" .recent="${!0}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`
                    },
                    installedInjectedWalletsTemplate() {
                        return ki.installedInjectedWallets().map((t => z `<w3m-wallet-button .installed="${!0}" name="${t.name}" walletId="${t.id}" imageId="${t.image_id}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`))
                    },
                    injectedWalletsTemplate() {
                        return ki.injectedWallets().map((t => z `<w3m-wallet-button name="${t.name}" walletId="${t.id}" imageId="${t.image_id}" .onClick="${()=>this.onConnecting(t)}"></w3m-wallet-button>`))
                    }
                },
                cr = s `@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.w3m-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}w3m-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--w3m-wallet-icon-border-radius)}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-title{display:flex;align-items:center;margin-bottom:10px}.w3m-title svg{margin-right:6px}.w3m-title path{fill:var(--w3m-accent-color)}w3m-modal-footer .w3m-title{padding:0 10px}w3m-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--w3m-color-bg-1))}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center;margin-bottom:15px}`;
            var dr = Object.defineProperty,
                hr = Object.getOwnPropertyDescriptor;
            let mr = class extends nt {
                onGoToQrcode() {
                    pt.AV.push("Qrcode")
                }
                onGetWallet() {
                    pt.AV.push("GetWallet")
                }
                render() {
                    const {
                        recomendedWallets: t
                    } = pt.uc.state, e = [...t, ...t], i = sr.externalWalletsTemplate(), o = sr.installedInjectedWalletsTemplate(), r = [...o, ...i].length > 0, a = 2 * pt.zv.RECOMMENDED_WALLET_AMOUNT;
                    return z `<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${oi.QRCODE_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-title">${oi.MOBILE_ICON}<w3m-text variant="small-regular" color="accent">WalletConnect</w3m-text></div><div class="w3m-slider"><div class="w3m-track">${e.map((t=>z`<w3m-wallet-image walletId="${t.id}" imageId="${t.image_id}"></w3m-wallet-image>`))} ${[...Array(a-e.length)].map((()=>oi.WALLET_PLACEHOLDER))}</div><w3m-button-big @click="${Ai.handleAndroidLinking}"><w3m-text variant="medium-regular" color="inverse">Select Wallet</w3m-text></w3m-button-big></div></w3m-modal-content>${r?z`<w3m-modal-footer><div class="w3m-title">${oi.WALLET_ICON}<w3m-text variant="small-regular" color="accent">Other</w3m-text></div><div class="w3m-grid">${o} ${i}</div></w3m-modal-footer>`:null}<w3m-info-footer><w3m-text color="secondary" variant="small-thin">${"Choose WalletConnect to see supported apps on your device"+(r?", or select from other options":"")}</w3m-text><w3m-button variant="outline" .iconRight="${oi.ARROW_UP_RIGHT_ICON}" .onClick="${()=>this.onGetWallet()}">I don't have a wallet</w3m-button></w3m-info-footer>`
                }
            };
            mr.styles = [Re.globalCss, cr], mr = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? hr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && dr(e, i, a), a
            })([st("w3m-android-wallet-selection")], mr);
            const pr = s `@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
            var ur = Object.defineProperty,
                wr = Object.getOwnPropertyDescriptor,
                gr = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? wr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && ur(e, i, a), a
                };
            let vr = class extends nt {
                constructor() {
                    super(), this.address = void 0, this.avatar = void 0, this.loading = !0, this.size = "small", this.unsubscribeAccount = void 0, this.address = pt.CV.state.address, this.avatar = pt.CV.state.profileAvatar, this.loading = !!pt.CV.state.profileLoading, this.unsubscribeAccount = pt.CV.subscribe((({
                        address: t,
                        profileAvatar: e,
                        profileLoading: i
                    }) => {
                        this.address = t, this.avatar = e, this.loading = !!i
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeAccount) || t.call(this)
                }
                render() {
                    const t = {
                        "w3m-placeholder": !0,
                        "w3m-small": "small" === this.size,
                        "w3m-medium": "medium" === this.size
                    };
                    return this.avatar ? z `<img class="${wt(t)}" src="${this.avatar}">` : this.address ? (Ai.generateAvatarColors(this.address), z `<div class="${wt(t)}">${this.loading?z`<div class="w3m-loader"></div>`:null}</div>`) : null
                }
            };
            vr.styles = [Re.globalCss, pr], gr([ht()], vr.prototype, "address", 2), gr([ht()], vr.prototype, "avatar", 2), gr([ht()], vr.prototype, "loading", 2), gr([dt()], vr.prototype, "size", 2), vr = gr([st("w3m-avatar")], vr);
            const fr = s `div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
            var br = Object.defineProperty,
                xr = Object.getOwnPropertyDescriptor,
                yr = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? xr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && br(e, i, a), a
                };
            let Cr = class extends nt {
                constructor() {
                    var t, e;
                    super(), this.symbol = void 0, this.amount = void 0, this.unsubscribeAccount = void 0, this.symbol = null == (t = pt.CV.state.balance) ? void 0 : t.symbol, this.amount = null == (e = pt.CV.state.balance) ? void 0 : e.amount, this.unsubscribeAccount = pt.CV.subscribe((({
                        balance: t
                    }) => {
                        this.symbol = t ? .symbol, this.amount = t ? .amount
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeAccount) || t.call(this)
                }
                render() {
                    let t = "_._";
                    return "0.0" === this.amount ? t = 0 : "string" == typeof this.amount && this.amount.length > 6 ? t = parseFloat(this.amount).toFixed(3) : "string" == typeof this.amount && (t = parseFloat(this.amount)), z `<div><w3m-token-image symbol="${this.symbol}"></w3m-token-image><w3m-text variant="medium-regular" color="primary">${t} ${this.symbol}</w3m-text></div>`
                }
            };
            Cr.styles = [Re.globalCss, fr], yr([ht()], Cr.prototype, "symbol", 2), yr([ht()], Cr.prototype, "amount", 2), Cr = yr([st("w3m-balance")], Cr);
            const $r = s `:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-accent-fill-color)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
            var kr = Object.defineProperty,
                Ar = Object.getOwnPropertyDescriptor,
                Or = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Ar(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && kr(e, i, a), a
                };
            let Er = class extends nt {
                constructor() {
                    super(), this.loading = !1, this.label = "Connect Wallet", this.icon = "show", this.modalUnsub = void 0, Ai.rejectStandaloneButtonComponent(), this.modalUnsub = pt.jb.subscribe((t => {
                        t.open && (this.loading = !0), t.open || (this.loading = !1)
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.modalUnsub) || t.call(this)
                }
                iconTemplate() {
                    return "show" === this.icon ? oi.WALLET_CONNECT_ICON : null
                }
                onClick() {
                    pt.CV.state.isConnected ? this.onDisconnect() : this.onConnect()
                }
                async onConnect() {
                    this.loading = !0, await pt.jb.open(), pt.jb.state.open || (this.loading = !1)
                }
                async onDisconnect() {
                    await pt.Id.client().disconnect()
                }
                render() {
                    return z `<w3m-button-big .disabled="${this.loading}" @click="${this.onClick}">${this.loading?z`<w3m-spinner></w3m-spinner><w3m-text variant="medium-regular" color="accent">Connecting...</w3m-text>`:z`${this.iconTemplate()}<w3m-text variant="medium-regular" color="inverse">${this.label}</w3m-text>`}</w3m-button-big>`
                }
            };
            Er.styles = [Re.globalCss, $r], Or([ht()], Er.prototype, "loading", 2), Or([dt()], Er.prototype, "label", 2), Or([dt()], Er.prototype, "icon", 2), Er = Or([st("w3m-connect-button")], Er);
            const _r = s `@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:90px;height:90px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.w3m-stale svg,.w3m-stale use{display:none}`;
            var Ir = Object.defineProperty,
                Mr = Object.getOwnPropertyDescriptor,
                Pr = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Mr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Ir(e, i, a), a
                };
            let jr = class extends nt {
                constructor() {
                    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = ""
                }
                svgLoaderTemplate() {
                    var t, e;
                    const i = null != (e = null == (t = pt.Ic.state.themeVariables) ? void 0 : t["--w3m-wallet-icon-large-border-radius"]) ? e : Re.getPreset("--w3m-wallet-icon-large-border-radius");
                    let o = 0;
                    o = i.includes("%") ? .88 * parseInt(i, 10) : parseInt(i, 10), o *= 1.17;
                    return z `<svg viewBox="0 0 110 110" width="110" height="110"><rect id="w3m-loader" x="2" y="2" width="106" height="106" rx="${o}"/><use xlink:href="#w3m-loader" stroke-dasharray="106 ${317-1.57*o}" stroke-dashoffset="${425-1.8*o}"></use></svg>`
                }
                render() {
                    const t = {
                        "w3m-error": this.isError,
                        "w3m-stale": this.isStale
                    };
                    return z `<div class="${wt(t)}">${this.svgLoaderTemplate()}<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}"></w3m-wallet-image></div><w3m-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Connection declined":this.label}</w3m-text>`
                }
            };
            jr.styles = [Re.globalCss, _r], Pr([dt()], jr.prototype, "walletId", 2), Pr([dt()], jr.prototype, "imageId", 2), Pr([dt()], jr.prototype, "isError", 2), Pr([dt()], jr.prototype, "isStale", 2), Pr([dt()], jr.prototype, "label", 2), jr = Pr([st("w3m-connector-waiting")], jr);
            var Tr = Object.defineProperty,
                Wr = Object.getOwnPropertyDescriptor,
                Sr = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Wr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Tr(e, i, a), a
                };
            let Dr = class extends nt {
                constructor() {
                    super(), this.isConnected = !1, this.label = "Connect Wallet", this.icon = "show", this.avatar = "show", this.balance = "hide", this.unsubscribeAccount = void 0, Ai.rejectStandaloneButtonComponent(), this.isConnected = pt.CV.state.isConnected, this.unsubscribeAccount = pt.CV.subscribe((({
                        isConnected: t
                    }) => {
                        this.isConnected = t
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeAccount) || t.call(this)
                }
                render() {
                    const {
                        enableAccountView: t
                    } = pt.t0.state, e = this.balance, i = this.label, o = this.icon, r = this.avatar;
                    return this.isConnected && t ? z `<w3m-account-button balance="${e}" avatar="${r}"></w3m-account-button>` : z `<w3m-connect-button label="${this.isConnected?"Disconnect":i}" icon="${o}"></w3m-connect-button>`
                }
            };
            Sr([ht()], Dr.prototype, "isConnected", 2), Sr([dt()], Dr.prototype, "label", 2), Sr([dt()], Dr.prototype, "icon", 2), Sr([dt()], Dr.prototype, "avatar", 2), Sr([dt()], Dr.prototype, "balance", 2), Dr = Sr([st("w3m-core-button")], Dr);
            const Rr = s `.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-accent-color)}`;
            var Lr = Object.defineProperty,
                Nr = Object.getOwnPropertyDescriptor;
            let zr = class extends nt {
                render() {
                    const {
                        isStandalone: t
                    } = pt.zb.state, {
                        explorerExcludedWalletIds: e,
                        enableExplorer: i
                    } = pt.t0.state, o = "ALL" !== e && i, r = sr.manualWalletsTemplate(), a = sr.recomendedWalletsTemplate(), n = sr.externalWalletsTemplate(), l = sr.recentWalletTemplate(), s = sr.installedInjectedWalletsTemplate();
                    let c = [l, ...r, ...a];
                    t || (c = [...s, l, ...n, ...r, ...a]), c = c.filter(Boolean);
                    const d = c.length > 4 || o;
                    let h = [];
                    h = d ? c.slice(0, 3) : c;
                    const m = !!h.length;
                    return z `<w3m-modal-header .border="${!0}" title="Connect your wallet" .onAction="${Ai.handleUriCopy}" .actionIcon="${oi.COPY_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${oi.MOBILE_ICON}<w3m-text variant="small-regular" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${oi.SCAN_ICON}<w3m-text variant="small-regular" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${m?z`<w3m-modal-footer><div class="w3m-desktop-title">${oi.DESKTOP_ICON}<w3m-text variant="small-regular" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${h} ${d?z`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`:null}</div></w3m-modal-footer>`:null}`
                }
            };
            zr.styles = [Re.globalCss, Rr], zr = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Nr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && Lr(e, i, a), a
            })([st("w3m-desktop-wallet-selection")], zr);
            const Hr = s `div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:hover{opacity:.8}`;
            var Vr = Object.defineProperty,
                Zr = Object.getOwnPropertyDescriptor;
            let Ur = class extends nt {
                render() {
                    const {
                        termsOfServiceUrl: t,
                        privacyPolicyUrl: e
                    } = pt.t0.state;
                    return t ? ? e ? z `<div><w3m-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${t?z`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`:null} ${t&&e?"and":null} ${e?z`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`:null}</w3m-text></div>` : null
                }
            };
            Ur.styles = [Re.globalCss, Hr], Ur = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Zr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && Vr(e, i, a), a
            })([st("w3m-legal-notice")], Ur);
            const Br = s `div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
            var Fr = Object.defineProperty,
                Gr = Object.getOwnPropertyDescriptor;
            let qr = class extends nt {
                onQrcode() {
                    pt.AV.push("Qrcode")
                }
                render() {
                    const {
                        isStandalone: t
                    } = pt.zb.state, e = sr.manualWalletsTemplate(), i = sr.recomendedWalletsTemplate(), o = sr.externalWalletsTemplate(), r = sr.recentWalletTemplate(), a = sr.installedInjectedWalletsTemplate();
                    let n = [r, ...e, ...i];
                    t || (n = [...a, r, ...o, ...e, ...i]), n = n.filter(Boolean);
                    const l = n.length > 8;
                    let s = [];
                    s = l ? n.slice(0, 7) : n;
                    const c = s.slice(0, 4),
                        d = s.slice(4, 8),
                        h = !!s.length;
                    return z `<w3m-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${oi.QRCODE_ICON}"></w3m-modal-header>${h?z`<w3m-modal-content><div>${c} ${d.length?z`${d} ${l?z`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`:null}`:null}</div></w3m-modal-content>`:null}`
                }
            };
            qr.styles = [Re.globalCss, Br], qr = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Gr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && Fr(e, i, a), a
            })([st("w3m-mobile-wallet-selection")], qr);
            const Kr = s `:host{all:initial}.w3m-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--w3m-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}@media(max-height:720px) and (orientation:landscape){.w3m-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.w3m-active{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) var(--w3m-container-border-radius) var(--w3m-container-border-radius);border:1px solid var(--w3m-color-overlay);overflow:hidden}.w3m-card{width:100%;position:relative;border-radius:var(--w3m-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) 0 0}.w3m-card{border-radius:var(--w3m-container-border-radius) var(--w3m-container-border-radius) 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:440px){.w3m-container{border:0}}`;
            var Yr = Object.defineProperty,
                Xr = Object.getOwnPropertyDescriptor,
                Qr = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Xr(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Yr(e, i, a), a
                };
            let Jr = class extends nt {
                constructor() {
                    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = pt.jb.subscribe((t => {
                        t.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeModal) || t.call(this)
                }
                get overlayEl() {
                    return Ai.getShadowRootElement(this, ".w3m-overlay")
                }
                get containerEl() {
                    return Ai.getShadowRootElement(this, ".w3m-container")
                }
                toggleBodyScroll(t) {
                    if (document.querySelector("body"))
                        if (t) {
                            document.getElementById("w3m-styles") ? .remove()
                        } else document.head.insertAdjacentHTML("beforeend", '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
                }
                onCloseModal(t) {
                    t.target === t.currentTarget && pt.jb.close()
                }
                async onOpenModalEvent() {
                    this.toggleBodyScroll(!1);
                    await Ce(this.containerEl, {
                        y: 0
                    }, {
                        duration: 0
                    }).finished, this.addKeyboardEvents(), this.open = !0, await Promise.all([Ce(this.overlayEl, {
                        opacity: [0, 1]
                    }, {
                        duration: .2,
                        delay: .1
                    }).finished, Ce(this.containerEl, Ai.isMobileAnimation() ? {
                        y: ["50vh", 0]
                    } : {
                        scale: [.98, 1]
                    }, {
                        scale: {
                            easing: Ie({
                                velocity: .4
                            })
                        },
                        y: {
                            easing: Ie({
                                mass: .5
                            })
                        },
                        delay: .1
                    }).finished]), this.active = !0
                }
                async onCloseModalEvent() {
                    this.toggleBodyScroll(!0), this.removeKeyboardEvents(), await Promise.all([Ce(this.containerEl, Ai.isMobileAnimation() ? {
                        y: [0, "50vh"]
                    } : {
                        scale: [1, .98]
                    }, {
                        scale: {
                            easing: Ie({
                                velocity: 0
                            })
                        },
                        y: {
                            easing: Ie({
                                mass: .5
                            })
                        }
                    }).finished, Ce(this.overlayEl, {
                        opacity: [1, 0]
                    }, {
                        duration: .2
                    }).finished]), this.active = !1, this.open = !1
                }
                addKeyboardEvents() {
                    this.abortController = new AbortController, window.addEventListener("keydown", (t => {
                        var e;
                        "Escape" === t.key ? pt.jb.close() : "Tab" === t.key && (null != (e = t.target) && e.tagName.includes("W3M-") || this.containerEl.focus())
                    }), this.abortController), this.containerEl.focus()
                }
                removeKeyboardEvents() {
                    var t;
                    null == (t = this.abortController) || t.abort(), this.abortController = void 0
                }
                managedModalContextTemplate() {
                    const {
                        isStandalone: t
                    } = pt.zb.state;
                    return t ? null : z `<w3m-wc-connection-context></w3m-wc-connection-context><w3m-account-context></w3m-account-context><w3m-network-context></w3m-network-context>`
                }
                render() {
                    const t = {
                        "w3m-overlay": !0,
                        "w3m-active": this.active
                    };
                    return z `<w3m-explorer-context></w3m-explorer-context><w3m-theme-context></w3m-theme-context>${this.managedModalContextTemplate()}<div id="w3m-modal" class="${wt(t)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${this.open?z`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>`:null}</div></div>`
                }
            };
            Jr.styles = [Re.globalCss, Kr], Qr([ht()], Jr.prototype, "open", 2), Qr([ht()], Jr.prototype, "active", 2), Jr = Qr([st("w3m-modal")], Jr);
            const ta = s `:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
            var ea = Object.defineProperty,
                ia = Object.getOwnPropertyDescriptor,
                oa = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? ia(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && ea(e, i, a), a
                };
            let ra = class extends nt {
                constructor() {
                    super(), this.chainId = "", this.label = "", this.wrongNetwork = !1, this.unsubscribeNetwork = void 0, Ai.rejectStandaloneButtonComponent();
                    const {
                        selectedChain: t
                    } = pt.zb.state;
                    this.onSetChainData(t), this.unsubscribeNetwork = pt.zb.subscribe((({
                        selectedChain: t
                    }) => {
                        this.onSetChainData(t)
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeNetwork) || t.call(this)
                }
                onSetChainData(t) {
                    if (t) {
                        const {
                            chains: e
                        } = pt.zb.state, i = e ? .map((t => t.id));
                        this.chainId = t.id.toString(), this.wrongNetwork = !(null != i && i.includes(t.id)), this.label = this.wrongNetwork ? "Wrong Network" : t.name
                    }
                }
                onClick() {
                    pt.jb.open({
                        route: "SelectNetwork"
                    })
                }
                render() {
                    var t;
                    const {
                        chains: e
                    } = pt.zb.state, i = e && e.length > 1;
                    return z `<w3m-button-big @click="${this.onClick}" ?disabled="${!i}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="medium-regular" color="inverse">${null!=(t=this.label)&&t.length?this.label:"Select Network"}</w3m-text></w3m-button-big>`
                }
            };
            ra.styles = [Re.globalCss, ta], oa([ht()], ra.prototype, "chainId", 2), oa([ht()], ra.prototype, "label", 2), oa([ht()], ra.prototype, "wrongNetwork", 2), ra = oa([st("w3m-network-switch")], ra);
            const aa = s `@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:1px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-network-image{width:92px;height:92px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}`;
            var na = Object.defineProperty,
                la = Object.getOwnPropertyDescriptor,
                sa = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? la(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && na(e, i, a), a
                };
            let ca = class extends nt {
                constructor() {
                    super(...arguments), this.chainId = void 0, this.isError = !1, this.label = ""
                }
                svgLoaderTemplate() {
                    return z `<svg width="54" height="59" viewBox="0 0 54 59" fill="none" class="w3m-loader"><path id="w3m-loader-path" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/><use xlink:href="#w3m-loader-path" stroke-dasharray="54 118" stroke-dashoffset="172"></use></svg>`
                }
                render() {
                    const t = {
                        "w3m-error": this.isError
                    };
                    return z `<div class="${wt(t)}">${this.svgLoaderTemplate()}<w3m-network-image chainId="${this.chainId}"></w3m-network-image></div><w3m-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Switch declined":this.label}</w3m-text>`
                }
            };
            ca.styles = [Re.globalCss, aa], sa([dt()], ca.prototype, "chainId", 2), sa([dt()], ca.prototype, "isError", 2), sa([dt()], ca.prototype, "label", 2), ca = sa([st("w3m-network-waiting")], ca);
            const da = s `div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}w3m-button{margin:0 5px}`;
            var ha = Object.defineProperty,
                ma = Object.getOwnPropertyDescriptor,
                pa = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? ma(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && ha(e, i, a), a
                };
            let ua = class extends nt {
                constructor() {
                    super(...arguments), this.isMobile = !1, this.isInjected = !1, this.isInjectedInstalled = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1
                }
                onMobile() {
                    pt.zv.isMobile() ? pt.AV.replace("MobileConnecting") : pt.AV.replace("MobileQrcodeConnecting")
                }
                onInjected() {
                    this.isInjectedInstalled ? pt.AV.replace("InjectedConnecting") : pt.AV.replace("InstallWallet")
                }
                onDesktop() {
                    pt.AV.replace("DesktopConnecting")
                }
                onWeb() {
                    pt.AV.replace("WebConnecting")
                }
                render() {
                    const {
                        isStandalone: t
                    } = pt.zb.state;
                    return z `<div>${this.isRetry?z`<slot></slot>`:null} ${this.isMobile?z`<w3m-button .onClick="${this.onMobile}" .iconLeft="${oi.MOBILE_ICON}" variant="outline">Mobile</w3m-button>`:null} ${this.isInjected&&!t?z`<w3m-button .onClick="${this.onInjected}" .iconLeft="${oi.WALLET_ICON}" variant="outline">Browser</w3m-button>`:null} ${this.isDesktop?z`<w3m-button .onClick="${this.onDesktop}" .iconLeft="${oi.DESKTOP_ICON}" variant="outline">Desktop</w3m-button>`:null} ${this.isWeb?z`<w3m-button .onClick="${this.onWeb}" .iconLeft="${oi.GLOBE_ICON}" variant="outline">Web</w3m-button>`:null}</div>`
                }
            };
            ua.styles = [Re.globalCss, da], pa([dt()], ua.prototype, "isMobile", 2), pa([dt()], ua.prototype, "isInjected", 2), pa([dt()], ua.prototype, "isInjectedInstalled", 2), pa([dt()], ua.prototype, "isDesktop", 2), pa([dt()], ua.prototype, "isWeb", 2), pa([dt()], ua.prototype, "isRetry", 2), ua = pa([st("w3m-platform-selection")], ua);
            const wa = s `button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--w3m-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--w3m-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-overlay)}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--w3m-wallet-icon-border-radius)/ 2);border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
            var ga = Object.defineProperty,
                va = Object.getOwnPropertyDescriptor;
            let fa = class extends nt {
                onClick() {
                    pt.AV.push("WalletExplorer")
                }
                render() {
                    const {
                        recomendedWallets: t
                    } = pt.uc.state, e = [...t, ...ki.manualWallets()].reverse().slice(0, 4);
                    return z `<button @click="${this.onClick}"><div class="w3m-icons">${e.map((t=>{const e=Ai.getWalletIcon(t);if(e)return z`<img src="${e}">`;const i=Ai.getWalletIcon({id:t.id});return i?z` < img src = "${i}" > `:oi.WALLET_PLACEHOLDER}))} ${[...Array(4-e.length)].map((()=>oi.WALLET_PLACEHOLDER))}</div><w3m-text variant="xsmall-regular">View All</w3m-text></button>`
                }
            };
            fa.styles = [Re.globalCss, wa], fa = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? va(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && ga(e, i, a), a
            })([st("w3m-view-all-wallets-button")], fa);
            const ba = s `.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
            var xa = Object.defineProperty,
                ya = Object.getOwnPropertyDescriptor,
                Ca = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? ya(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && xa(e, i, a), a
                };
            let $a = class extends nt {
                constructor() {
                    super(), this.walletId = "", this.imageId = "", this.uri = "", this.unwatchWcConnection = void 0, setTimeout((() => {
                        const {
                            pairingUri: t
                        } = pt.kD.state, {
                            standaloneUri: e
                        } = pt.zb.state;
                        this.uri = e ? ? t
                    }), 0), this.unwatchWcConnection = pt.kD.subscribe((t => {
                        t.pairingUri && (this.uri = t.pairingUri)
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unwatchWcConnection) || t.call(this)
                }
                get overlayEl() {
                    return Ai.getShadowRootElement(this, ".w3m-qr-container")
                }
                render() {
                    return z `<div class="w3m-qr-container">${this.uri?z`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${this.walletId}" imageId="${this.imageId}"></w3m-qrcode>`:z`<w3m-spinner></w3m-spinner>`}</div>`
                }
            };
            $a.styles = [Re.globalCss, ba], Ca([dt()], $a.prototype, "walletId", 2), Ca([dt()], $a.prototype, "imageId", 2), Ca([ht()], $a.prototype, "uri", 2), $a = Ca([st("w3m-walletconnect-qr")], $a);
            const ka = s `.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-success-color);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-success-color),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
            var Aa = Object.defineProperty,
                Oa = Object.getOwnPropertyDescriptor;
            let Ea = class extends nt {
                async onDisconnect() {
                    await pt.Id.client().disconnect()
                }
                async onCopyAddress() {
                    var t;
                    await navigator.clipboard.writeText(null != (t = pt.CV.state.address) ? t : ""), pt.Vs.openToast("Address copied", "success")
                }
                render() {
                    return z `<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-regular" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${oi.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${oi.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`
                }
            };
            Ea.styles = [Re.globalCss, ka], Ea = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Oa(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && Aa(e, i, a), a
            })([st("w3m-account-view")], Ea);
            var _a = Object.defineProperty,
                Ia = Object.getOwnPropertyDescriptor;
            let Ma = class extends nt {
                viewTemplate() {
                    return pt.zv.isAndroid() ? z `<w3m-android-wallet-selection></w3m-android-wallet-selection>` : pt.zv.isMobile() ? z `<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>` : z `<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`
                }
                render() {
                    return z `${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`
                }
            };
            Ma.styles = [Re.globalCss], Ma = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Ia(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && _a(e, i, a), a
            })([st("w3m-connect-wallet-view")], Ma);
            const Pa = s `w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
            var ja = Object.defineProperty,
                Ta = Object.getOwnPropertyDescriptor,
                Wa = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Ta(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && ja(e, i, a), a
                };
            let Sa = class extends nt {
                constructor() {
                    super(), this.isError = !1, this.unwatchConnection = void 0, this.openDesktopApp(), this.unwatchConnection = pt.kD.subscribe((t => {
                        this.isError = t.pairingError
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unwatchConnection) || t.call(this)
                }
                onFormatAndRedirect(t) {
                    const {
                        desktop: e,
                        name: i
                    } = pt.zv.getWalletRouterData(), o = e ? .native;
                    if (o) {
                        const e = pt.zv.formatNativeUrl(o, t, i);
                        pt.zv.openHref(e, "_self")
                    }
                }
                openDesktopApp() {
                    pt.kD.setPairingError(!1);
                    const {
                        standaloneUri: t
                    } = pt.zb.state, {
                        pairingUri: e
                    } = pt.kD.state, i = pt.zv.getWalletRouterData();
                    Ai.setRecentWallet(i), t ? this.onFormatAndRedirect(t) : this.onFormatAndRedirect(e)
                }
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: i
                    } = pt.zv.getWalletRouterData(), {
                        isMobile: o,
                        isInjected: r,
                        isWeb: a
                    } = Ai.getCachedRouterWalletPlatforms();
                    return z `<w3m-modal-header title="${t}" .onAction="${Ai.handleUriCopy}" .actionIcon="${oi.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${i}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</w3m-text><w3m-platform-selection .isMobile="${o}" .isInjected="${r}" .isWeb="${a}" .isRetry="${!0}"><w3m-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${oi.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`
                }
            };
            Sa.styles = [Re.globalCss, Pa], Wa([ht()], Sa.prototype, "isError", 2), Sa = Wa([st("w3m-desktop-connecting-view")], Sa);
            const Da = s `.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
            var Ra = Object.defineProperty,
                La = Object.getOwnPropertyDescriptor;
            let Na = class extends nt {
                onGet(t) {
                    pt.zv.openHref(t, "_blank")
                }
                render() {
                    const t = pt.uc.state.recomendedWallets.slice(0, 5),
                        e = ki.manualWallets().slice(0, 5),
                        i = t.length,
                        o = e.length;
                    return z `<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${i?t.map((t=>z`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${t.id}" imageId="${t.image_id}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${t.name}</w3m-text><w3m-button .iconRight="${oi.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(t.homepage)}">Get</w3m-button></div></div>`)):null} ${o?e.map((t=>z`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${t.id}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${t.name}</w3m-text><w3m-button .iconRight="${oi.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(t.links.universal)}">Get</w3m-button></div></div>`)):null}</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-regular">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${Ai.openWalletExplorerUrl}" .iconRight="${oi.ARROW_UP_RIGHT_ICON}">Explore Wallets</w3m-button></div>`
                }
            };
            Na.styles = [Re.globalCss, Da], Na = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? La(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && Ra(e, i, a), a
            })([st("w3m-get-wallet-view")], Na);
            const za = s `.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
            var Ha = Object.defineProperty,
                Va = Object.getOwnPropertyDescriptor;
            let Za = class extends nt {
                constructor() {
                    super(...arguments), this.learnUrl = "https://ethereum.org/en/wallets/"
                }
                onGet() {
                    pt.t0.state.enableExplorer ? pt.AV.push("GetWallet") : Ai.openWalletExplorerUrl()
                }
                onLearnMore() {
                    pt.zv.openHref(this.learnUrl, "_blank")
                }
                render() {
                    return z `<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${oi.HELP_CHART_IMG} ${oi.HELP_PAINTING_IMG} ${oi.HELP_ETH_IMG}</div><w3m-text variant="medium-regular">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${oi.HELP_KEY_IMG} ${oi.HELP_USER_IMG} ${oi.HELP_LOCK_IMG}</div><w3m-text variant="medium-regular">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${oi.HELP_COMPAS_IMG} ${oi.HELP_NOUN_IMG} ${oi.HELP_DAO_IMG}</div><w3m-text variant="medium-regular">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(this)}" .iconLeft="${oi.WALLET_ICON}">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(this)}" .iconRight="${oi.ARROW_UP_RIGHT_ICON}">Learn More</w3m-button></div></w3m-modal-content>`
                }
            };
            Za.styles = [Re.globalCss, za], Za = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Va(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && Ha(e, i, a), a
            })([st("w3m-help-view")], Za);
            const Ua = s `w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
            var Ba = Object.defineProperty,
                Fa = Object.getOwnPropertyDescriptor,
                Ga = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? Fa(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Ba(e, i, a), a
                };
            let qa = class extends nt {
                constructor() {
                    super(), this.isError = !1, this.connector = pt.Id.client().getConnectorById("injected"), this.openInjectedApp()
                }
                async openInjectedApp() {
                    const {
                        ready: t
                    } = this.connector;
                    t && (this.isError = !1, await Ai.handleConnectorConnection("injected", (() => {
                        this.isError = !0
                    })))
                }
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: i
                    } = pt.zv.getWalletRouterData(), {
                        isMobile: o,
                        isDesktop: r,
                        isWeb: a
                    } = Ai.getCachedRouterWalletPlatforms();
                    return z `<w3m-modal-header title="${t}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${i}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Connection can be declined if multiple wallets are installed or previous request is still active</w3m-text><w3m-platform-selection .isMobile="${o}" .isDesktop="${r}" .isWeb="${a}" .isRetry="${!0}"><w3m-button .onClick="${this.openInjectedApp.bind(this)}" .disabled="${!this.isError}" .iconRight="${oi.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`
                }
            };
            qa.styles = [Re.globalCss, Ua], Ga([ht()], qa.prototype, "isError", 2), qa = Ga([st("w3m-injected-connecting-view")], qa);
            const Ka = s `w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
            var Ya = Object.defineProperty,
                Xa = Object.getOwnPropertyDescriptor;
            let Qa = class extends nt {
                onInstall(t) {
                    t && pt.zv.openHref(t, "_blank")
                }
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: i,
                        homepage: o
                    } = pt.zv.getWalletRouterData();
                    return z `<w3m-modal-header title="${t}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${i}" label="Not Detected" .isStale="${!0}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</w3m-text><w3m-button .onClick="${()=>this.onInstall(o)}" .iconLeft="${oi.ARROW_DOWN_ICON}">Download</w3m-button></w3m-info-footer>`
                }
            };
            Qa.styles = [Re.globalCss, Ka], Qa = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? Xa(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && Ya(e, i, a), a
            })([st("w3m-install-wallet-view")], Qa);
            const Ja = s `w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}w3m-info-footer{display:flex;width:100%}.w3m-app-store{justify-content:space-between}.w3m-app-store w3m-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--w3m-wallet-icon-small-border-radius)}.w3m-app-store div{display:flex;align-items:center}.w3m-app-store w3m-button{margin-right:-10px}.w3m-note{flex-direction:column;align-items:center;padding:5px 0}.w3m-note w3m-text{text-align:center}w3m-platform-selection div{display:flex}w3m-platform-selection w3m-button:nth-child(2){margin-left:10px}`;
            var tn = Object.defineProperty,
                en = Object.getOwnPropertyDescriptor,
                on = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? en(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && tn(e, i, a), a
                };
            let rn = class extends nt {
                constructor() {
                    super(), this.isError = !1, this.unwatchConnection = void 0, this.openMobileApp(), this.unwatchConnection = pt.kD.subscribe((t => {
                        this.isError = t.pairingError
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unwatchConnection) || t.call(this)
                }
                onFormatAndRedirect(t, e = !1) {
                    const {
                        mobile: i,
                        name: o
                    } = pt.zv.getWalletRouterData(), r = i ? .native, a = i ? .universal;
                    if (r && !e) {
                        const e = pt.zv.formatNativeUrl(r, t, o);
                        pt.zv.openHref(e, "_self")
                    } else if (a) {
                        const e = pt.zv.formatUniversalUrl(a, t, o);
                        pt.zv.openHref(e, "_self")
                    }
                }
                openMobileApp(t = !1) {
                    pt.kD.setPairingError(!1);
                    const {
                        standaloneUri: e
                    } = pt.zb.state, {
                        pairingUri: i
                    } = pt.kD.state, o = pt.zv.getWalletRouterData();
                    Ai.setRecentWallet(o), e ? this.onFormatAndRedirect(e, t) : this.onFormatAndRedirect(i, t)
                }
                onGoToAppStore(t) {
                    t && pt.zv.openHref(t, "_blank")
                }
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: i,
                        app: o,
                        mobile: r
                    } = pt.zv.getWalletRouterData(), {
                        isWeb: a
                    } = Ai.getCachedRouterWalletPlatforms(), n = o ? .ios, l = r ? .universal;
                    return z `<w3m-modal-header title="${t}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${i}" label="Tap 'Open' to continue…" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer class="w3m-note"><w3m-text color="secondary" variant="small-thin">You can reload the website to try again ${l?` or open ${t} using a "Backup" instead`:""}</w3m-text><w3m-platform-selection .isWeb="${a}" .isRetry="${!0}"><div><w3m-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${oi.RETRY_ICON}">Retry</w3m-button>${l?z`<w3m-button variant="outline" .onClick="${()=>this.openMobileApp(!0)}" .iconRight="${oi.ARROW_UP_RIGHT_ICON}">Backup</w3m-button>`:null}</div></w3m-platform-selection></w3m-info-footer><w3m-info-footer class="w3m-app-store"><div><w3m-wallet-image walletId="${e}" imageId="${i}"></w3m-wallet-image><w3m-text>${`Get ${t}`}</w3m-text></div><w3m-button .iconRight="${oi.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(n)}" variant="ghost">App Store</w3m-button></w3m-info-footer>`
                }
            };
            rn.styles = [Re.globalCss, Ja], on([ht()], rn.prototype, "isError", 2), rn = on([st("w3m-mobile-connecting-view")], rn);
            const an = s `w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
            var nn = Object.defineProperty,
                ln = Object.getOwnPropertyDescriptor;
            let sn = class extends nt {
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: i
                    } = pt.zv.getWalletRouterData(), {
                        isInjected: o,
                        isDesktop: r,
                        isWeb: a
                    } = Ai.getCachedRouterWalletPlatforms();
                    return z `<w3m-modal-header title="${t}" .onAction="${Ai.handleUriCopy}" .actionIcon="${oi.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr walletId="${e}" imageId="${i}"></w3m-walletconnect-qr></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Scan this qrcode with your phone's camera or inside ${t} app`}</w3m-text><w3m-platform-selection .isDesktop="${r}" .isInjected="${o}" .isWeb="${a}"></w3m-platform-selection></w3m-info-footer>`
                }
            };
            sn.styles = [Re.globalCss, an], sn = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? ln(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && nn(e, i, a), a
            })([st("w3m-mobile-qr-connecting-view")], sn);
            var cn = Object.defineProperty,
                dn = Object.getOwnPropertyDescriptor;
            let hn = class extends nt {
                render() {
                    return z `<w3m-modal-header title="Scan the code" .onAction="${Ai.handleUriCopy}" .actionIcon="${oi.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`
                }
            };
            hn.styles = [Re.globalCss], hn = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? dn(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && cn(e, i, a), a
            })([st("w3m-qrcode-view")], hn);
            const mn = s `div{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}`;
            var pn = Object.defineProperty,
                un = Object.getOwnPropertyDescriptor;
            let wn = class extends nt {
                async onSelectChain(t) {
                    try {
                        const {
                            selectedChain: e,
                            walletConnectVersion: i,
                            isInjectedMobile: o
                        } = pt.zb.state, {
                            isConnected: r
                        } = pt.CV.state;
                        r ? e ? .id === t.id ? pt.AV.reset("Account") : 2 === i ? (await pt.Id.client().switchNetwork({
                            chainId: t.id
                        }), pt.AV.reset("Account")) : pt.AV.push("SwitchNetwork", {
                            SwitchNetwork: t
                        }) : o ? (pt.zb.setSelectedChain(t), pt.jb.close()) : (pt.zb.setSelectedChain(t), pt.AV.push("ConnectWallet"))
                    } catch (g) {
                        console.error(g), pt.Vs.openToast(Ai.getErrorMessage(g), "error")
                    }
                }
                render() {
                    const {
                        chains: t
                    } = pt.zb.state;
                    return z `<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div>${t?.map((t=>z`<w3m-network-button name="${t.name}" chainId="${t.id}" .onClick="${async()=>this.onSelectChain(t)}">${t.name}</w3m-network-button>`))}</div></w3m-modal-content>`
                }
            };
            wn.styles = [Re.globalCss, mn], wn = ((t, e, i, o) => {
                for (var r, a = o > 1 ? void 0 : o ? un(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                return o && a && pn(e, i, a), a
            })([st("w3m-select-network-view")], wn);
            const gn = s `w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
            var vn = Object.defineProperty,
                fn = Object.getOwnPropertyDescriptor,
                bn = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? fn(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && vn(e, i, a), a
                };
            let xn = class extends nt {
                constructor() {
                    super(), this.isError = !1, this.onSwitchNetwork()
                }
                async onSwitchNetwork() {
                    try {
                        this.isError = !1;
                        const t = pt.zv.getSwitchNetworkRouterData();
                        await pt.Id.client().switchNetwork({
                            chainId: t.id
                        }), pt.zb.setSelectedChain(t), pt.AV.reset("Account")
                    } catch {
                        this.isError = !0
                    }
                }
                render() {
                    const {
                        id: t,
                        name: e
                    } = pt.zv.getSwitchNetworkRouterData();
                    return z `<w3m-modal-header title="${`Connect to ${e}`}"></w3m-modal-header><w3m-modal-content><w3m-network-waiting chainId="${t}" label="Approve in your wallet" .isError="${this.isError}"></w3m-network-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Switch can be declined if chain is not supported by a wallet or previous request is still active</w3m-text><w3m-button .onClick="${this.onSwitchNetwork.bind(this)}" .disabled="${!this.isError}" .iconRight="${oi.RETRY_ICON}">Try Again</w3m-button></w3m-info-footer>`
                }
            };
            xn.styles = [Re.globalCss, gn], bn([ht()], xn.prototype, "isError", 2), xn = bn([st("w3m-switch-network-view")], xn);
            const yn = s `w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
            var Cn = Object.defineProperty,
                $n = Object.getOwnPropertyDescriptor,
                kn = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? $n(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && Cn(e, i, a), a
                };
            let An = class extends nt {
                constructor() {
                    super(...arguments), this.loading = !pt.uc.state.wallets.listings.length, this.firstFetch = !pt.uc.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = Ai.debounce((t => {
                        t.length >= 3 ? (this.firstFetch = !0, this.endReached = !1, this.search = t, pt.uc.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), pt.uc.resetSearch())
                    }))
                }
                firstUpdated() {
                    this.createPaginationObserver()
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.intersectionObserver) || t.disconnect()
                }
                get placeholderEl() {
                    return Ai.getShadowRootElement(this, ".w3m-placeholder-block")
                }
                createPaginationObserver() {
                    this.intersectionObserver = new IntersectionObserver((([t]) => {
                        t.isIntersecting && (!this.search || !this.firstFetch) && this.fetchWallets()
                    })), this.intersectionObserver.observe(this.placeholderEl)
                }
                isLastPage() {
                    const {
                        wallets: t,
                        search: e
                    } = pt.uc.state, {
                        listings: i,
                        total: o
                    } = this.search ? e : t;
                    return o <= 40 || i.length >= o
                }
                async fetchWallets() {
                    var t;
                    const {
                        wallets: e,
                        search: i,
                        injectedWallets: o
                    } = pt.uc.state, {
                        listings: r,
                        total: a,
                        page: n
                    } = this.search ? i : e;
                    if (!this.endReached && (this.firstFetch || a > 40 && r.length < a)) try {
                        this.loading = !0;
                        const e = null == (t = pt.zb.state.standaloneChains) ? void 0 : t.join(","),
                            {
                                listings: i
                            } = await pt.uc.getWallets({
                                page: this.firstFetch ? 1 : n + 1,
                                entries: 40,
                                search: this.search,
                                version: pt.zb.state.walletConnectVersion,
                                chains: e
                            }),
                            r = i.map((t => Ai.getWalletIcon(t))),
                            a = o.map((t => Ai.getWalletIcon(t)));
                        await Promise.all([...r.map((async t => Ai.preloadImage(t))), ...a.map((async t => Ai.preloadImage(t))), pt.zv.wait(300)]), this.endReached = this.isLastPage()
                    } catch (I) {
                        console.error(I), pt.Vs.openToast(Ai.getErrorMessage(I), "error")
                    } finally {
                        this.loading = !1, this.firstFetch = !1
                    }
                }
                onConnect(t) {
                    pt.zv.isAndroid() ? Ai.handleMobileLinking(t) : Ai.goToConnectingView(t)
                }
                onSearchChange(t) {
                    const {
                        value: e
                    } = t.target;
                    this.searchDebounce(e)
                }
                render() {
                    const {
                        wallets: t,
                        search: e
                    } = pt.uc.state, {
                        listings: i
                    } = this.search ? e : t, o = this.loading && !i.length, r = this.search.length >= 3;
                    let a = sr.injectedWalletsTemplate(),
                        n = sr.manualWalletsTemplate(),
                        l = sr.recomendedWalletsTemplate();
                    r && (a = a.filter((({
                        values: t
                    }) => Ai.caseSafeIncludes(t[0], this.search))), n = n.filter((({
                        values: t
                    }) => Ai.caseSafeIncludes(t[0], this.search))), l = l.filter((({
                        values: t
                    }) => Ai.caseSafeIncludes(t[0], this.search))));
                    const s = !this.loading && !i.length && !a.length && !l.length,
                        c = Math.max(a.length, i.length),
                        d = {
                            "w3m-loading": o,
                            "w3m-end-reached": this.endReached || !this.loading,
                            "w3m-empty": s
                        };
                    return z `<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(this)}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${wt(d)}"><div class="w3m-grid">${o?null:l} ${o?null:[...Array(c)].map(((t,e)=>z`${n[e]} ${a[e]} ${i[e]?z`<w3m-wallet-button imageId="${i[e].image_id}" name="${i[e].name}" walletId="${i[e].id}" .onClick="${()=>this.onConnect(i[e])}"></w3m-wallet-button>`:null}`))}</div><div class="w3m-placeholder-block">${s?z`<w3m-text variant="big-bold" color="secondary">No results found</w3m-text>`:null} ${!s&&this.loading?z`<w3m-spinner></w3m-spinner>`:null}</div></w3m-modal-content>`
                }
            };
            An.styles = [Re.globalCss, yn], kn([ht()], An.prototype, "loading", 2), kn([ht()], An.prototype, "firstFetch", 2), kn([ht()], An.prototype, "search", 2), kn([ht()], An.prototype, "endReached", 2), An = kn([st("w3m-wallet-explorer-view")], An);
            const On = s `w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
            var En = Object.defineProperty,
                _n = Object.getOwnPropertyDescriptor,
                In = (t, e, i, o) => {
                    for (var r, a = o > 1 ? void 0 : o ? _n(e, i) : e, n = t.length - 1; n >= 0; n--)(r = t[n]) && (a = (o ? r(e, i, a) : r(a)) || a);
                    return o && a && En(e, i, a), a
                };
            let Mn = class extends nt {
                constructor() {
                    super(), this.isError = !1, this.unwatchConnection = void 0, this.openWebWallet(), this.unwatchConnection = pt.kD.subscribe((t => {
                        this.isError = t.pairingError
                    }))
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unwatchConnection) || t.call(this)
                }
                onFormatAndRedirect(t) {
                    const {
                        desktop: e,
                        name: i
                    } = pt.zv.getWalletRouterData(), o = e ? .universal;
                    if (o) {
                        const e = pt.zv.formatUniversalUrl(o, t, i);
                        pt.zv.openHref(e, "_blank")
                    }
                }
                openWebWallet() {
                    pt.kD.setPairingError(!1);
                    const {
                        standaloneUri: t
                    } = pt.zb.state, {
                        pairingUri: e
                    } = pt.kD.state, i = pt.zv.getWalletRouterData();
                    Ai.setRecentWallet(i), t ? this.onFormatAndRedirect(t) : this.onFormatAndRedirect(e)
                }
                render() {
                    const {
                        name: t,
                        id: e,
                        image_id: i
                    } = pt.zv.getWalletRouterData(), {
                        isMobile: o,
                        isInjected: r,
                        isDesktop: a
                    } = Ai.getCachedRouterWalletPlatforms(), n = pt.zv.isMobile();
                    return z `<w3m-modal-header title="${t}" .onAction="${Ai.handleUriCopy}" .actionIcon="${oi.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${e}" imageId="${i}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</w3m-text><w3m-platform-selection .isMobile="${o}" .isInjected="${!n&&r}" .isDesktop="${!n&&a}" .isRetry="${!0}"><w3m-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${oi.RETRY_ICON}">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`
                }
            };
            Mn.styles = [Re.globalCss, On], In([ht()], Mn.prototype, "isError", 2), Mn = In([st("w3m-web-connecting-view")], Mn)
        }
    }
]);