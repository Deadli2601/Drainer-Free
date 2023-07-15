(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9792], {
        98099: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i(97117);

            function r(e, t, i) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === i && (i = 0), t[i + 0] = e >>> 8, t[i + 1] = e >>> 0, t
            }

            function n(e, t, i) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === i && (i = 0), t[i + 0] = e >>> 0, t[i + 1] = e >>> 8, t
            }

            function o(e, t) {
                return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }

            function a(e, t) {
                return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }

            function c(e, t) {
                return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function h(e, t) {
                return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0
            }

            function l(e, t, i) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === i && (i = 0), t[i + 0] = e >>> 24, t[i + 1] = e >>> 16, t[i + 2] = e >>> 8, t[i + 3] = e >>> 0, t
            }

            function u(e, t, i) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === i && (i = 0), t[i + 0] = e >>> 0, t[i + 1] = e >>> 8, t[i + 2] = e >>> 16, t[i + 3] = e >>> 24, t
            }

            function p(e, t, i) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === i && (i = 0), l(e / 4294967296 >>> 0, t, i), l(e >>> 0, t, i + 4), t
            }

            function d(e, t, i) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === i && (i = 0), u(e >>> 0, t, i), u(e / 4294967296 >>> 0, t, i + 4), t
            }
            t.readInt16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16
            }, t.readUint16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0
            }, t.readInt16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16
            }, t.readUint16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0
            }, t.writeUint16BE = r, t.writeInt16BE = r, t.writeUint16LE = n, t.writeInt16LE = n, t.readInt32BE = o, t.readUint32BE = a, t.readInt32LE = c, t.readUint32LE = h, t.writeUint32BE = l, t.writeInt32BE = l, t.writeUint32LE = u, t.writeInt32LE = u, t.readInt64BE = function(e, t) {
                void 0 === t && (t = 0);
                var i = o(e, t),
                    s = o(e, t + 4);
                return 4294967296 * i + s - 4294967296 * (s >> 31)
            }, t.readUint64BE = function(e, t) {
                return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4)
            }, t.readInt64LE = function(e, t) {
                void 0 === t && (t = 0);
                var i = c(e, t);
                return 4294967296 * c(e, t + 4) + i - 4294967296 * (i >> 31)
            }, t.readUint64LE = function(e, t) {
                void 0 === t && (t = 0);
                var i = h(e, t);
                return 4294967296 * h(e, t + 4) + i
            }, t.writeUint64BE = p, t.writeInt64BE = p, t.writeUint64LE = d, t.writeInt64LE = d, t.readUintBE = function(e, t, i) {
                if (void 0 === i && (i = 0), e % 8 !== 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - i) throw new Error("readUintBE: array is too short for the given bitLength");
                for (var s = 0, r = 1, n = e / 8 + i - 1; n >= i; n--) s += t[n] * r, r *= 256;
                return s
            }, t.readUintLE = function(e, t, i) {
                if (void 0 === i && (i = 0), e % 8 !== 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - i) throw new Error("readUintLE: array is too short for the given bitLength");
                for (var s = 0, r = 1, n = i; n < i + e / 8; n++) s += t[n] * r, r *= 256;
                return s
            }, t.writeUintBE = function(e, t, i, r) {
                if (void 0 === i && (i = new Uint8Array(e / 8)), void 0 === r && (r = 0), e % 8 !== 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
                if (!s.isSafeInteger(t)) throw new Error("writeUintBE value must be an integer");
                for (var n = 1, o = e / 8 + r - 1; o >= r; o--) i[o] = t / n & 255, n *= 256;
                return i
            }, t.writeUintLE = function(e, t, i, r) {
                if (void 0 === i && (i = new Uint8Array(e / 8)), void 0 === r && (r = 0), e % 8 !== 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
                if (!s.isSafeInteger(t)) throw new Error("writeUintLE value must be an integer");
                for (var n = 1, o = r; o < r + e / 8; o++) i[o] = t / n & 255, n *= 256;
                return i
            }, t.readFloat32BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
            }, t.readFloat32LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
            }, t.readFloat64BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
            }, t.readFloat64LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
            }, t.writeFloat32BE = function(e, t, i) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === i && (i = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(i, e), t
            }, t.writeFloat32LE = function(e, t, i) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === i && (i = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(i, e, !0), t
            }, t.writeFloat64BE = function(e, t, i) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === i && (i = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(i, e), t
            }, t.writeFloat64LE = function(e, t, i) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === i && (i = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(i, e, !0), t
            }
        },
        25439: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i(98099),
                r = i(17309);

            function n(e, t, i) {
                for (var r = 1634760805, n = 857760878, o = 2036477234, a = 1797285236, c = i[3] << 24 | i[2] << 16 | i[1] << 8 | i[0], h = i[7] << 24 | i[6] << 16 | i[5] << 8 | i[4], l = i[11] << 24 | i[10] << 16 | i[9] << 8 | i[8], u = i[15] << 24 | i[14] << 16 | i[13] << 8 | i[12], p = i[19] << 24 | i[18] << 16 | i[17] << 8 | i[16], d = i[23] << 24 | i[22] << 16 | i[21] << 8 | i[20], f = i[27] << 24 | i[26] << 16 | i[25] << 8 | i[24], g = i[31] << 24 | i[30] << 16 | i[29] << 8 | i[28], y = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], m = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], w = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], b = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], v = r, _ = n, E = o, S = a, I = c, O = h, P = l, N = u, A = p, R = d, T = f, C = g, x = y, U = m, M = w, L = b, j = 0; j < 20; j += 2) I = (I ^= A = A + (x = (x ^= v = v + I | 0) >>> 16 | x << 16) | 0) >>> 20 | I << 12, O = (O ^= R = R + (U = (U ^= _ = _ + O | 0) >>> 16 | U << 16) | 0) >>> 20 | O << 12, P = (P ^= T = T + (M = (M ^= E = E + P | 0) >>> 16 | M << 16) | 0) >>> 20 | P << 12, N = (N ^= C = C + (L = (L ^= S = S + N | 0) >>> 16 | L << 16) | 0) >>> 20 | N << 12, P = (P ^= T = T + (M = (M ^= E = E + P | 0) >>> 24 | M << 8) | 0) >>> 25 | P << 7, N = (N ^= C = C + (L = (L ^= S = S + N | 0) >>> 24 | L << 8) | 0) >>> 25 | N << 7, O = (O ^= R = R + (U = (U ^= _ = _ + O | 0) >>> 24 | U << 8) | 0) >>> 25 | O << 7, I = (I ^= A = A + (x = (x ^= v = v + I | 0) >>> 24 | x << 8) | 0) >>> 25 | I << 7, O = (O ^= T = T + (L = (L ^= v = v + O | 0) >>> 16 | L << 16) | 0) >>> 20 | O << 12, P = (P ^= C = C + (x = (x ^= _ = _ + P | 0) >>> 16 | x << 16) | 0) >>> 20 | P << 12, N = (N ^= A = A + (U = (U ^= E = E + N | 0) >>> 16 | U << 16) | 0) >>> 20 | N << 12, I = (I ^= R = R + (M = (M ^= S = S + I | 0) >>> 16 | M << 16) | 0) >>> 20 | I << 12, N = (N ^= A = A + (U = (U ^= E = E + N | 0) >>> 24 | U << 8) | 0) >>> 25 | N << 7, I = (I ^= R = R + (M = (M ^= S = S + I | 0) >>> 24 | M << 8) | 0) >>> 25 | I << 7, P = (P ^= C = C + (x = (x ^= _ = _ + P | 0) >>> 24 | x << 8) | 0) >>> 25 | P << 7, O = (O ^= T = T + (L = (L ^= v = v + O | 0) >>> 24 | L << 8) | 0) >>> 25 | O << 7;
                s.writeUint32LE(v + r | 0, e, 0), s.writeUint32LE(_ + n | 0, e, 4), s.writeUint32LE(E + o | 0, e, 8), s.writeUint32LE(S + a | 0, e, 12), s.writeUint32LE(I + c | 0, e, 16), s.writeUint32LE(O + h | 0, e, 20), s.writeUint32LE(P + l | 0, e, 24), s.writeUint32LE(N + u | 0, e, 28), s.writeUint32LE(A + p | 0, e, 32), s.writeUint32LE(R + d | 0, e, 36), s.writeUint32LE(T + f | 0, e, 40), s.writeUint32LE(C + g | 0, e, 44), s.writeUint32LE(x + y | 0, e, 48), s.writeUint32LE(U + m | 0, e, 52), s.writeUint32LE(M + w | 0, e, 56), s.writeUint32LE(L + b | 0, e, 60)
            }

            function o(e, t, i, s, o) {
                if (void 0 === o && (o = 0), 32 !== e.length) throw new Error("ChaCha: key size must be 32 bytes");
                if (s.length < i.length) throw new Error("ChaCha: destination is shorter than source");
                var c, h;
                if (0 === o) {
                    if (8 !== t.length && 12 !== t.length) throw new Error("ChaCha nonce must be 8 or 12 bytes");
                    h = (c = new Uint8Array(16)).length - t.length, c.set(t, h)
                } else {
                    if (16 !== t.length) throw new Error("ChaCha nonce with counter must be 16 bytes");
                    c = t, h = o
                }
                for (var l = new Uint8Array(64), u = 0; u < i.length; u += 64) {
                    n(l, c, e);
                    for (var p = u; p < u + 64 && p < i.length; p++) s[p] = i[p] ^ l[p - u];
                    a(c, 0, h)
                }
                return r.wipe(l), 0 === o && r.wipe(c), s
            }

            function a(e, t, i) {
                for (var s = 1; i--;) s = s + (255 & e[t]) | 0, e[t] = 255 & s, s >>>= 8, t++;
                if (s > 0) throw new Error("ChaCha: counter overflow")
            }
            t.streamXOR = o, t.stream = function(e, t, i, s) {
                return void 0 === s && (s = 0), r.wipe(i), o(e, t, i, i, s)
            }
        },
        15501: function(e, t, i) {
            "use strict";
            var s = i(25439),
                r = i(63027),
                n = i(17309),
                o = i(98099),
                a = i(4153);
            t.Cv = 32, t.WH = 12, t.pg = 16;
            var c = new Uint8Array(16),
                h = function() {
                    function e(e) {
                        if (this.nonceLength = t.WH, this.tagLength = t.pg, e.length !== t.Cv) throw new Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(e)
                    }
                    return e.prototype.seal = function(e, t, i, r) {
                        if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                        var o = new Uint8Array(16);
                        o.set(e, o.length - e.length);
                        var a = new Uint8Array(32);
                        s.stream(this._key, o, a, 4);
                        var c, h = t.length + this.tagLength;
                        if (r) {
                            if (r.length !== h) throw new Error("ChaCha20Poly1305: incorrect destination length");
                            c = r
                        } else c = new Uint8Array(h);
                        return s.streamXOR(this._key, o, t, c, 4), this._authenticate(c.subarray(c.length - this.tagLength, c.length), a, c.subarray(0, c.length - this.tagLength), i), n.wipe(o), c
                    }, e.prototype.open = function(e, t, i, r) {
                        if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                        if (t.length < this.tagLength) return null;
                        var o = new Uint8Array(16);
                        o.set(e, o.length - e.length);
                        var c = new Uint8Array(32);
                        s.stream(this._key, o, c, 4);
                        var h = new Uint8Array(this.tagLength);
                        if (this._authenticate(h, c, t.subarray(0, t.length - this.tagLength), i), !a.equal(h, t.subarray(t.length - this.tagLength, t.length))) return null;
                        var l, u = t.length - this.tagLength;
                        if (r) {
                            if (r.length !== u) throw new Error("ChaCha20Poly1305: incorrect destination length");
                            l = r
                        } else l = new Uint8Array(u);
                        return s.streamXOR(this._key, o, t.subarray(0, t.length - this.tagLength), l, 4), n.wipe(o), l
                    }, e.prototype.clean = function() {
                        return n.wipe(this._key), this
                    }, e.prototype._authenticate = function(e, t, i, s) {
                        var a = new r.Poly1305(t);
                        s && (a.update(s), s.length % 16 > 0 && a.update(c.subarray(s.length % 16))), a.update(i), i.length % 16 > 0 && a.update(c.subarray(i.length % 16));
                        var h = new Uint8Array(8);
                        s && o.writeUint64LE(s.length, h), a.update(h), o.writeUint64LE(i.length, h), a.update(h);
                        for (var l = a.digest(), u = 0; u < l.length; u++) e[u] = l[u];
                        a.clean(), n.wipe(l), n.wipe(h)
                    }, e
                }();
            t.OK = h
        },
        4153: function(e, t) {
            "use strict";

            function i(e, t) {
                if (e.length !== t.length) return 0;
                for (var i = 0, s = 0; s < e.length; s++) i |= e[s] ^ t[s];
                return 1 & i - 1 >>> 8
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.select = function(e, t, i) {
                return ~(e - 1) & t | e - 1 & i
            }, t.lessOrEqual = function(e, t) {
                return (0 | e) - (0 | t) - 1 >>> 31 & 1
            }, t.compare = i, t.equal = function(e, t) {
                return 0 !== e.length && 0 !== t.length && 0 !== i(e, t)
            }
        },
        31050: function(e, t, i) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0;
            const s = i(31416),
                r = i(93350),
                n = i(17309);

            function o(e) {
                const t = new Float64Array(16);
                if (e)
                    for (let i = 0; i < e.length; i++) t[i] = e[i];
                return t
            }
            t.jQ = 64, t.KS = 64, t.aP = 32;
            new Uint8Array(32)[0] = 9;
            const a = o(),
                c = o([1]),
                h = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                l = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                u = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                p = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                d = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function f(e, t) {
                for (let i = 0; i < 16; i++) e[i] = 0 | t[i]
            }

            function g(e) {
                let t = 1;
                for (let i = 0; i < 16; i++) {
                    let s = e[i] + t + 65535;
                    t = Math.floor(s / 65536), e[i] = s - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function y(e, t, i) {
                const s = ~(i - 1);
                for (let r = 0; r < 16; r++) {
                    const i = s & (e[r] ^ t[r]);
                    e[r] ^= i, t[r] ^= i
                }
            }

            function m(e, t) {
                const i = o(),
                    s = o();
                for (let r = 0; r < 16; r++) s[r] = t[r];
                g(s), g(s), g(s);
                for (let r = 0; r < 2; r++) {
                    i[0] = s[0] - 65517;
                    for (let t = 1; t < 15; t++) i[t] = s[t] - 65535 - (i[t - 1] >> 16 & 1), i[t - 1] &= 65535;
                    i[15] = s[15] - 32767 - (i[14] >> 16 & 1);
                    const e = i[15] >> 16 & 1;
                    i[14] &= 65535, y(s, i, 1 - e)
                }
                for (let r = 0; r < 16; r++) e[2 * r] = 255 & s[r], e[2 * r + 1] = s[r] >> 8
            }

            function w(e, t) {
                let i = 0;
                for (let s = 0; s < 32; s++) i |= e[s] ^ t[s];
                return (1 & i - 1 >>> 8) - 1
            }

            function b(e, t) {
                const i = new Uint8Array(32),
                    s = new Uint8Array(32);
                return m(i, e), m(s, t), w(i, s)
            }

            function v(e) {
                const t = new Uint8Array(32);
                return m(t, e), 1 & t[0]
            }

            function _(e, t, i) {
                for (let s = 0; s < 16; s++) e[s] = t[s] + i[s]
            }

            function E(e, t, i) {
                for (let s = 0; s < 16; s++) e[s] = t[s] - i[s]
            }

            function S(e, t, i) {
                let s, r, n = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    h = 0,
                    l = 0,
                    u = 0,
                    p = 0,
                    d = 0,
                    f = 0,
                    g = 0,
                    y = 0,
                    m = 0,
                    w = 0,
                    b = 0,
                    v = 0,
                    _ = 0,
                    E = 0,
                    S = 0,
                    I = 0,
                    O = 0,
                    P = 0,
                    N = 0,
                    A = 0,
                    R = 0,
                    T = 0,
                    C = 0,
                    x = 0,
                    U = 0,
                    M = 0,
                    L = 0,
                    j = i[0],
                    D = i[1],
                    k = i[2],
                    z = i[3],
                    $ = i[4],
                    q = i[5],
                    H = i[6],
                    V = i[7],
                    K = i[8],
                    B = i[9],
                    F = i[10],
                    W = i[11],
                    G = i[12],
                    J = i[13],
                    Y = i[14],
                    X = i[15];
                s = t[0], n += s * j, o += s * D, a += s * k, c += s * z, h += s * $, l += s * q, u += s * H, p += s * V, d += s * K, f += s * B, g += s * F, y += s * W, m += s * G, w += s * J, b += s * Y, v += s * X, s = t[1], o += s * j, a += s * D, c += s * k, h += s * z, l += s * $, u += s * q, p += s * H, d += s * V, f += s * K, g += s * B, y += s * F, m += s * W, w += s * G, b += s * J, v += s * Y, _ += s * X, s = t[2], a += s * j, c += s * D, h += s * k, l += s * z, u += s * $, p += s * q, d += s * H, f += s * V, g += s * K, y += s * B, m += s * F, w += s * W, b += s * G, v += s * J, _ += s * Y, E += s * X, s = t[3], c += s * j, h += s * D, l += s * k, u += s * z, p += s * $, d += s * q, f += s * H, g += s * V, y += s * K, m += s * B, w += s * F, b += s * W, v += s * G, _ += s * J, E += s * Y, S += s * X, s = t[4], h += s * j, l += s * D, u += s * k, p += s * z, d += s * $, f += s * q, g += s * H, y += s * V, m += s * K, w += s * B, b += s * F, v += s * W, _ += s * G, E += s * J, S += s * Y, I += s * X, s = t[5], l += s * j, u += s * D, p += s * k, d += s * z, f += s * $, g += s * q, y += s * H, m += s * V, w += s * K, b += s * B, v += s * F, _ += s * W, E += s * G, S += s * J, I += s * Y, O += s * X, s = t[6], u += s * j, p += s * D, d += s * k, f += s * z, g += s * $, y += s * q, m += s * H, w += s * V, b += s * K, v += s * B, _ += s * F, E += s * W, S += s * G, I += s * J, O += s * Y, P += s * X, s = t[7], p += s * j, d += s * D, f += s * k, g += s * z, y += s * $, m += s * q, w += s * H, b += s * V, v += s * K, _ += s * B, E += s * F, S += s * W, I += s * G, O += s * J, P += s * Y, N += s * X, s = t[8], d += s * j, f += s * D, g += s * k, y += s * z, m += s * $, w += s * q, b += s * H, v += s * V, _ += s * K, E += s * B, S += s * F, I += s * W, O += s * G, P += s * J, N += s * Y, A += s * X, s = t[9], f += s * j, g += s * D, y += s * k, m += s * z, w += s * $, b += s * q, v += s * H, _ += s * V, E += s * K, S += s * B, I += s * F, O += s * W, P += s * G, N += s * J, A += s * Y, R += s * X, s = t[10], g += s * j, y += s * D, m += s * k, w += s * z, b += s * $, v += s * q, _ += s * H, E += s * V, S += s * K, I += s * B, O += s * F, P += s * W, N += s * G, A += s * J, R += s * Y, T += s * X, s = t[11], y += s * j, m += s * D, w += s * k, b += s * z, v += s * $, _ += s * q, E += s * H, S += s * V, I += s * K, O += s * B, P += s * F, N += s * W, A += s * G, R += s * J, T += s * Y, C += s * X, s = t[12], m += s * j, w += s * D, b += s * k, v += s * z, _ += s * $, E += s * q, S += s * H, I += s * V, O += s * K, P += s * B, N += s * F, A += s * W, R += s * G, T += s * J, C += s * Y, x += s * X, s = t[13], w += s * j, b += s * D, v += s * k, _ += s * z, E += s * $, S += s * q, I += s * H, O += s * V, P += s * K, N += s * B, A += s * F, R += s * W, T += s * G, C += s * J, x += s * Y, U += s * X, s = t[14], b += s * j, v += s * D, _ += s * k, E += s * z, S += s * $, I += s * q, O += s * H, P += s * V, N += s * K, A += s * B, R += s * F, T += s * W, C += s * G, x += s * J, U += s * Y, M += s * X, s = t[15], v += s * j, _ += s * D, E += s * k, S += s * z, I += s * $, O += s * q, P += s * H, N += s * V, A += s * K, R += s * B, T += s * F, C += s * W, x += s * G, U += s * J, M += s * Y, L += s * X, n += 38 * _, o += 38 * E, a += 38 * S, c += 38 * I, h += 38 * O, l += 38 * P, u += 38 * N, p += 38 * A, d += 38 * R, f += 38 * T, g += 38 * C, y += 38 * x, m += 38 * U, w += 38 * M, b += 38 * L, r = 1, s = n + r + 65535, r = Math.floor(s / 65536), n = s - 65536 * r, s = o + r + 65535, r = Math.floor(s / 65536), o = s - 65536 * r, s = a + r + 65535, r = Math.floor(s / 65536), a = s - 65536 * r, s = c + r + 65535, r = Math.floor(s / 65536), c = s - 65536 * r, s = h + r + 65535, r = Math.floor(s / 65536), h = s - 65536 * r, s = l + r + 65535, r = Math.floor(s / 65536), l = s - 65536 * r, s = u + r + 65535, r = Math.floor(s / 65536), u = s - 65536 * r, s = p + r + 65535, r = Math.floor(s / 65536), p = s - 65536 * r, s = d + r + 65535, r = Math.floor(s / 65536), d = s - 65536 * r, s = f + r + 65535, r = Math.floor(s / 65536), f = s - 65536 * r, s = g + r + 65535, r = Math.floor(s / 65536), g = s - 65536 * r, s = y + r + 65535, r = Math.floor(s / 65536), y = s - 65536 * r, s = m + r + 65535, r = Math.floor(s / 65536), m = s - 65536 * r, s = w + r + 65535, r = Math.floor(s / 65536), w = s - 65536 * r, s = b + r + 65535, r = Math.floor(s / 65536), b = s - 65536 * r, s = v + r + 65535, r = Math.floor(s / 65536), v = s - 65536 * r, n += r - 1 + 37 * (r - 1), r = 1, s = n + r + 65535, r = Math.floor(s / 65536), n = s - 65536 * r, s = o + r + 65535, r = Math.floor(s / 65536), o = s - 65536 * r, s = a + r + 65535, r = Math.floor(s / 65536), a = s - 65536 * r, s = c + r + 65535, r = Math.floor(s / 65536), c = s - 65536 * r, s = h + r + 65535, r = Math.floor(s / 65536), h = s - 65536 * r, s = l + r + 65535, r = Math.floor(s / 65536), l = s - 65536 * r, s = u + r + 65535, r = Math.floor(s / 65536), u = s - 65536 * r, s = p + r + 65535, r = Math.floor(s / 65536), p = s - 65536 * r, s = d + r + 65535, r = Math.floor(s / 65536), d = s - 65536 * r, s = f + r + 65535, r = Math.floor(s / 65536), f = s - 65536 * r, s = g + r + 65535, r = Math.floor(s / 65536), g = s - 65536 * r, s = y + r + 65535, r = Math.floor(s / 65536), y = s - 65536 * r, s = m + r + 65535, r = Math.floor(s / 65536), m = s - 65536 * r, s = w + r + 65535, r = Math.floor(s / 65536), w = s - 65536 * r, s = b + r + 65535, r = Math.floor(s / 65536), b = s - 65536 * r, s = v + r + 65535, r = Math.floor(s / 65536), v = s - 65536 * r, n += r - 1 + 37 * (r - 1), e[0] = n, e[1] = o, e[2] = a, e[3] = c, e[4] = h, e[5] = l, e[6] = u, e[7] = p, e[8] = d, e[9] = f, e[10] = g, e[11] = y, e[12] = m, e[13] = w, e[14] = b, e[15] = v
            }

            function I(e, t) {
                S(e, t, t)
            }

            function O(e, t) {
                const i = o();
                let s;
                for (s = 0; s < 16; s++) i[s] = t[s];
                for (s = 253; s >= 0; s--) I(i, i), 2 !== s && 4 !== s && S(i, i, t);
                for (s = 0; s < 16; s++) e[s] = i[s]
            }

            function P(e, t) {
                const i = o(),
                    s = o(),
                    r = o(),
                    n = o(),
                    a = o(),
                    c = o(),
                    h = o(),
                    u = o(),
                    p = o();
                E(i, e[1], e[0]), E(p, t[1], t[0]), S(i, i, p), _(s, e[0], e[1]), _(p, t[0], t[1]), S(s, s, p), S(r, e[3], t[3]), S(r, r, l), S(n, e[2], t[2]), _(n, n, n), E(a, s, i), E(c, n, r), _(h, n, r), _(u, s, i), S(e[0], a, c), S(e[1], u, h), S(e[2], h, c), S(e[3], a, u)
            }

            function N(e, t, i) {
                for (let s = 0; s < 4; s++) y(e[s], t[s], i)
            }

            function A(e, t) {
                const i = o(),
                    s = o(),
                    r = o();
                O(r, t[2]), S(i, t[0], r), S(s, t[1], r), m(e, s), e[31] ^= v(i) << 7
            }

            function R(e, t, i) {
                f(e[0], a), f(e[1], c), f(e[2], c), f(e[3], a);
                for (let s = 255; s >= 0; --s) {
                    const r = i[s / 8 | 0] >> (7 & s) & 1;
                    N(e, t, r), P(t, e), P(e, e), N(e, t, r)
                }
            }

            function T(e, t) {
                const i = [o(), o(), o(), o()];
                f(i[0], u), f(i[1], p), f(i[2], c), S(i[3], u, p), R(e, i, t)
            }

            function C(e) {
                if (e.length !== t.aP) throw new Error(`ed25519: seed must be ${t.aP} bytes`);
                const i = (0, r.hash)(e);
                i[0] &= 248, i[31] &= 127, i[31] |= 64;
                const s = new Uint8Array(32),
                    n = [o(), o(), o(), o()];
                T(n, i), A(s, n);
                const a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            }
            t._w = C;
            const x = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function U(e, t) {
                let i, s, r, n;
                for (s = 63; s >= 32; --s) {
                    for (i = 0, r = s - 32, n = s - 12; r < n; ++r) t[r] += i - 16 * t[s] * x[r - (s - 32)], i = Math.floor((t[r] + 128) / 256), t[r] -= 256 * i;
                    t[r] += i, t[s] = 0
                }
                for (i = 0, r = 0; r < 32; r++) t[r] += i - (t[31] >> 4) * x[r], i = t[r] >> 8, t[r] &= 255;
                for (r = 0; r < 32; r++) t[r] -= i * x[r];
                for (s = 0; s < 32; s++) t[s + 1] += t[s] >> 8, e[s] = 255 & t[s]
            }

            function M(e) {
                const t = new Float64Array(64);
                for (let i = 0; i < 64; i++) t[i] = e[i];
                for (let i = 0; i < 64; i++) e[i] = 0;
                U(e, t)
            }

            function L(e, t) {
                const i = o(),
                    s = o(),
                    r = o(),
                    n = o(),
                    l = o(),
                    u = o(),
                    p = o();
                return f(e[2], c),
                    function(e, t) {
                        for (let i = 0; i < 16; i++) e[i] = t[2 * i] + (t[2 * i + 1] << 8);
                        e[15] &= 32767
                    }(e[1], t), I(r, e[1]), S(n, r, h), E(r, r, e[2]), _(n, e[2], n), I(l, n), I(u, l), S(p, u, l), S(i, p, r), S(i, i, n),
                    function(e, t) {
                        const i = o();
                        let s;
                        for (s = 0; s < 16; s++) i[s] = t[s];
                        for (s = 250; s >= 0; s--) I(i, i), 1 !== s && S(i, i, t);
                        for (s = 0; s < 16; s++) e[s] = i[s]
                    }(i, i), S(i, i, r), S(i, i, n), S(i, i, n), S(e[0], i, n), I(s, e[0]), S(s, s, n), b(s, r) && S(e[0], e[0], d), I(s, e[0]), S(s, s, n), b(s, r) ? -1 : (v(e[0]) === t[31] >> 7 && E(e[0], a, e[0]), S(e[3], e[0], e[1]), 0)
            }
            t.Xx = function(e, t) {
                const i = new Float64Array(64),
                    s = [o(), o(), o(), o()],
                    n = (0, r.hash)(e.subarray(0, 32));
                n[0] &= 248, n[31] &= 127, n[31] |= 64;
                const a = new Uint8Array(64);
                a.set(n.subarray(32), 32);
                const c = new r.SHA512;
                c.update(a.subarray(32)), c.update(t);
                const h = c.digest();
                c.clean(), M(h), T(s, h), A(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                const l = c.digest();
                M(l);
                for (let r = 0; r < 32; r++) i[r] = h[r];
                for (let r = 0; r < 32; r++)
                    for (let e = 0; e < 32; e++) i[r + e] += l[r] * n[e];
                return U(a.subarray(32), i), a
            }
        },
        79984: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSerializableHash = function(e) {
                return "undefined" !== typeof e.saveState && "undefined" !== typeof e.restoreState && "undefined" !== typeof e.cleanSavedState
            }
        },
        9328: function(e, t, i) {
            "use strict";
            var s = i(25629),
                r = i(17309),
                n = function() {
                    function e(e, t, i, r) {
                        void 0 === i && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = r;
                        var n = s.hmac(this._hash, i, t);
                        this._hmac = new s.HMAC(e, n), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return e.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var e = this._counter[0];
                        if (0 === e) throw new Error("hkdf: cannot expand more");
                        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, e.prototype.expand = function(e) {
                        for (var t = new Uint8Array(e), i = 0; i < t.length; i++) this._bufpos === this._buffer.length && this._fillBuffer(), t[i] = this._buffer[this._bufpos++];
                        return t
                    }, e.prototype.clean = function() {
                        this._hmac.clean(), r.wipe(this._buffer), r.wipe(this._counter), this._bufpos = 0
                    }, e
                }();
            t.t = n
        },
        25629: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i(79984),
                r = i(4153),
                n = i(17309),
                o = function() {
                    function e(e, t) {
                        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var i = new Uint8Array(this.blockSize);
                        t.length > this.blockSize ? this._inner.update(t).finish(i).clean() : i.set(t);
                        for (var r = 0; r < i.length; r++) i[r] ^= 54;
                        this._inner.update(i);
                        for (r = 0; r < i.length; r++) i[r] ^= 106;
                        this._outer.update(i), s.isSerializableHash(this._inner) && s.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), n.wipe(i)
                    }
                    return e.prototype.reset = function() {
                        if (!s.isSerializableHash(this._inner) || !s.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.clean = function() {
                        s.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), s.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, e.prototype.update = function(e) {
                        return this._inner.update(e), this
                    }, e.prototype.finish = function(e) {
                        return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this)
                    }, e.prototype.digest = function() {
                        var e = new Uint8Array(this.digestLength);
                        return this.finish(e), e
                    }, e.prototype.saveState = function() {
                        if (!s.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, e.prototype.restoreState = function(e) {
                        if (!s.isSerializableHash(this._inner) || !s.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.cleanSavedState = function(e) {
                        if (!s.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(e)
                    }, e
                }();
            t.HMAC = o, t.hmac = function(e, t, i) {
                var s = new o(e, t);
                s.update(i);
                var r = s.digest();
                return s.clean(), r
            }, t.equal = r.equal
        },
        97117: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mul = Math.imul || function(e, t) {
                var i = 65535 & e,
                    s = 65535 & t;
                return i * s + ((e >>> 16 & 65535) * s + i * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }, t.add = function(e, t) {
                return e + t | 0
            }, t.sub = function(e, t) {
                return e - t | 0
            }, t.rotl = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.rotr = function(e, t) {
                return e << 32 - t | e >>> t
            }, t.isInteger = Number.isInteger || function(e) {
                return "number" === typeof e && isFinite(e) && Math.floor(e) === e
            }, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
                return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER
            }
        },
        63027: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i(4153),
                r = i(17309);
            t.DIGEST_LENGTH = 16;
            var n = function() {
                function e(e) {
                    this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var i = e[0] | e[1] << 8;
                    this._r[0] = 8191 & i;
                    var s = e[2] | e[3] << 8;
                    this._r[1] = 8191 & (i >>> 13 | s << 3);
                    var r = e[4] | e[5] << 8;
                    this._r[2] = 7939 & (s >>> 10 | r << 6);
                    var n = e[6] | e[7] << 8;
                    this._r[3] = 8191 & (r >>> 7 | n << 9);
                    var o = e[8] | e[9] << 8;
                    this._r[4] = 255 & (n >>> 4 | o << 12), this._r[5] = o >>> 1 & 8190;
                    var a = e[10] | e[11] << 8;
                    this._r[6] = 8191 & (o >>> 14 | a << 2);
                    var c = e[12] | e[13] << 8;
                    this._r[7] = 8065 & (a >>> 11 | c << 5);
                    var h = e[14] | e[15] << 8;
                    this._r[8] = 8191 & (c >>> 8 | h << 8), this._r[9] = h >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
                }
                return e.prototype._blocks = function(e, t, i) {
                    for (var s = this._fin ? 0 : 2048, r = this._h[0], n = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], h = this._h[5], l = this._h[6], u = this._h[7], p = this._h[8], d = this._h[9], f = this._r[0], g = this._r[1], y = this._r[2], m = this._r[3], w = this._r[4], b = this._r[5], v = this._r[6], _ = this._r[7], E = this._r[8], S = this._r[9]; i >= 16;) {
                        var I = e[t + 0] | e[t + 1] << 8;
                        r += 8191 & I;
                        var O = e[t + 2] | e[t + 3] << 8;
                        n += 8191 & (I >>> 13 | O << 3);
                        var P = e[t + 4] | e[t + 5] << 8;
                        o += 8191 & (O >>> 10 | P << 6);
                        var N = e[t + 6] | e[t + 7] << 8;
                        a += 8191 & (P >>> 7 | N << 9);
                        var A = e[t + 8] | e[t + 9] << 8;
                        c += 8191 & (N >>> 4 | A << 12), h += A >>> 1 & 8191;
                        var R = e[t + 10] | e[t + 11] << 8;
                        l += 8191 & (A >>> 14 | R << 2);
                        var T = e[t + 12] | e[t + 13] << 8;
                        u += 8191 & (R >>> 11 | T << 5);
                        var C = e[t + 14] | e[t + 15] << 8,
                            x = 0,
                            U = x;
                        U += r * f, U += n * (5 * S), U += o * (5 * E), U += a * (5 * _), x = (U += c * (5 * v)) >>> 13, U &= 8191, U += h * (5 * b), U += l * (5 * w), U += u * (5 * m), U += (p += 8191 & (T >>> 8 | C << 8)) * (5 * y);
                        var M = x += (U += (d += C >>> 5 | s) * (5 * g)) >>> 13;
                        M += r * g, M += n * f, M += o * (5 * S), M += a * (5 * E), x = (M += c * (5 * _)) >>> 13, M &= 8191, M += h * (5 * v), M += l * (5 * b), M += u * (5 * w), M += p * (5 * m), x += (M += d * (5 * y)) >>> 13, M &= 8191;
                        var L = x;
                        L += r * y, L += n * g, L += o * f, L += a * (5 * S), x = (L += c * (5 * E)) >>> 13, L &= 8191, L += h * (5 * _), L += l * (5 * v), L += u * (5 * b), L += p * (5 * w);
                        var j = x += (L += d * (5 * m)) >>> 13;
                        j += r * m, j += n * y, j += o * g, j += a * f, x = (j += c * (5 * S)) >>> 13, j &= 8191, j += h * (5 * E), j += l * (5 * _), j += u * (5 * v), j += p * (5 * b);
                        var D = x += (j += d * (5 * w)) >>> 13;
                        D += r * w, D += n * m, D += o * y, D += a * g, x = (D += c * f) >>> 13, D &= 8191, D += h * (5 * S), D += l * (5 * E), D += u * (5 * _), D += p * (5 * v);
                        var k = x += (D += d * (5 * b)) >>> 13;
                        k += r * b, k += n * w, k += o * m, k += a * y, x = (k += c * g) >>> 13, k &= 8191, k += h * f, k += l * (5 * S), k += u * (5 * E), k += p * (5 * _);
                        var z = x += (k += d * (5 * v)) >>> 13;
                        z += r * v, z += n * b, z += o * w, z += a * m, x = (z += c * y) >>> 13, z &= 8191, z += h * g, z += l * f, z += u * (5 * S), z += p * (5 * E);
                        var $ = x += (z += d * (5 * _)) >>> 13;
                        $ += r * _, $ += n * v, $ += o * b, $ += a * w, x = ($ += c * m) >>> 13, $ &= 8191, $ += h * y, $ += l * g, $ += u * f, $ += p * (5 * S);
                        var q = x += ($ += d * (5 * E)) >>> 13;
                        q += r * E, q += n * _, q += o * v, q += a * b, x = (q += c * w) >>> 13, q &= 8191, q += h * m, q += l * y, q += u * g, q += p * f;
                        var H = x += (q += d * (5 * S)) >>> 13;
                        H += r * S, H += n * E, H += o * _, H += a * v, x = (H += c * b) >>> 13, H &= 8191, H += h * w, H += l * m, H += u * y, H += p * g, r = U = 8191 & (x = (x = ((x += (H += d * f) >>> 13) << 2) + x | 0) + (U &= 8191) | 0), n = M += x >>>= 13, o = L &= 8191, a = j &= 8191, c = D &= 8191, h = k &= 8191, l = z &= 8191, u = $ &= 8191, p = q &= 8191, d = H &= 8191, t += 16, i -= 16
                    }
                    this._h[0] = r, this._h[1] = n, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = h, this._h[6] = l, this._h[7] = u, this._h[8] = p, this._h[9] = d
                }, e.prototype.finish = function(e, t) {
                    void 0 === t && (t = 0);
                    var i, s, r, n, o = new Uint16Array(10);
                    if (this._leftover) {
                        for (n = this._leftover, this._buffer[n++] = 1; n < 16; n++) this._buffer[n] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (i = this._h[1] >>> 13, this._h[1] &= 8191, n = 2; n < 10; n++) this._h[n] += i, i = this._h[n] >>> 13, this._h[n] &= 8191;
                    for (this._h[0] += 5 * i, i = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += i, i = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += i, o[0] = this._h[0] + 5, i = o[0] >>> 13, o[0] &= 8191, n = 1; n < 10; n++) o[n] = this._h[n] + i, i = o[n] >>> 13, o[n] &= 8191;
                    for (o[9] -= 8192, s = (1 ^ i) - 1, n = 0; n < 10; n++) o[n] &= s;
                    for (s = ~s, n = 0; n < 10; n++) this._h[n] = this._h[n] & s | o[n];
                    for (this._h[0] = 65535 & (this._h[0] | this._h[1] << 13), this._h[1] = 65535 & (this._h[1] >>> 3 | this._h[2] << 10), this._h[2] = 65535 & (this._h[2] >>> 6 | this._h[3] << 7), this._h[3] = 65535 & (this._h[3] >>> 9 | this._h[4] << 4), this._h[4] = 65535 & (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14), this._h[5] = 65535 & (this._h[6] >>> 2 | this._h[7] << 11), this._h[6] = 65535 & (this._h[7] >>> 5 | this._h[8] << 8), this._h[7] = 65535 & (this._h[8] >>> 8 | this._h[9] << 5), r = this._h[0] + this._pad[0], this._h[0] = 65535 & r, n = 1; n < 8; n++) r = (this._h[n] + this._pad[n] | 0) + (r >>> 16) | 0, this._h[n] = 65535 & r;
                    return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, e.prototype.update = function(e) {
                    var t, i = 0,
                        s = e.length;
                    if (this._leftover) {
                        (t = 16 - this._leftover) > s && (t = s);
                        for (var r = 0; r < t; r++) this._buffer[this._leftover + r] = e[i + r];
                        if (s -= t, i += t, this._leftover += t, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (s >= 16 && (t = s - s % 16, this._blocks(e, i, t), i += t, s -= t), s) {
                        for (r = 0; r < s; r++) this._buffer[this._leftover + r] = e[i + r];
                        this._leftover += s
                    }
                    return this
                }, e.prototype.digest = function() {
                    if (this._finished) throw new Error("Poly1305 was finished");
                    var e = new Uint8Array(16);
                    return this.finish(e), e
                }, e.prototype.clean = function() {
                    return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, e
            }();
            t.Poly1305 = n, t.oneTimeAuth = function(e, t) {
                var i = new n(e);
                i.update(t);
                var s = i.digest();
                return i.clean(), s
            }, t.equal = function(e, i) {
                return e.length === t.DIGEST_LENGTH && i.length === t.DIGEST_LENGTH && s.equal(e, i)
            }
        },
        31416: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
            const s = i(46008),
                r = i(98099),
                n = i(17309);

            function o(e, i = t.defaultRandomSource) {
                return i.randomBytes(e)
            }
            t.defaultRandomSource = new s.SystemRandomSource, t.randomBytes = o, t.randomUint32 = function(e = t.defaultRandomSource) {
                const i = o(4, e),
                    s = (0, r.readUint32LE)(i);
                return (0, n.wipe)(i), s
            };
            const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            function c(e, i = a, s = t.defaultRandomSource) {
                if (i.length < 2) throw new Error("randomString charset is too short");
                if (i.length > 256) throw new Error("randomString charset is too long");
                let r = "";
                const c = i.length,
                    h = 256 - 256 % c;
                for (; e > 0;) {
                    const t = o(Math.ceil(256 * e / h), s);
                    for (let s = 0; s < t.length && e > 0; s++) {
                        const n = t[s];
                        n < h && (r += i.charAt(n % c), e--)
                    }(0, n.wipe)(t)
                }
                return r
            }
            t.randomString = c, t.randomStringForEntropy = function(e, i = a, s = t.defaultRandomSource) {
                return c(Math.ceil(e / (Math.log(i.length) / Math.LN2)), i, s)
            }
        },
        75455: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserRandomSource = void 0;
            t.BrowserRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1;
                    const e = "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
                    e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
                    const t = new Uint8Array(e);
                    for (let i = 0; i < t.length; i += 65536) this._crypto.getRandomValues(t.subarray(i, i + Math.min(t.length - i, 65536)));
                    return t
                }
            }
        },
        58871: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeRandomSource = void 0;
            const s = i(17309);
            t.NodeRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1; {
                        const e = i(35883);
                        e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
                    let t = this._crypto.randomBytes(e);
                    if (t.length !== e) throw new Error("NodeRandomSource: got fewer bytes than requested");
                    const i = new Uint8Array(e);
                    for (let s = 0; s < i.length; s++) i[s] = t[s];
                    return (0, s.wipe)(t), i
                }
            }
        },
        46008: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SystemRandomSource = void 0;
            const s = i(75455),
                r = i(58871);
            t.SystemRandomSource = class {
                constructor() {
                    return this.isAvailable = !1, this.name = "", this._source = new s.BrowserRandomSource, this._source.isAvailable ? (this.isAvailable = !0, void(this.name = "Browser")) : (this._source = new r.NodeRandomSource, this._source.isAvailable ? (this.isAvailable = !0, void(this.name = "Node")) : void 0)
                }
                randomBytes(e) {
                    if (!this.isAvailable) throw new Error("System random byte generator is not available.");
                    return this._source.randomBytes(e)
                }
            }
        },
        73294: function(e, t, i) {
            "use strict";
            var s = i(98099),
                r = i(17309);
            t.k = 32, t.cn = 64;
            var n = function() {
                function e() {
                    this.digestLength = t.k, this.blockSize = t.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    r.wipe(this._buffer), r.wipe(this._temp), this.reset()
                }, e.prototype.update = function(e, t) {
                    if (void 0 === t && (t = e.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += t, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[i++], t--;
                        this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (t >= this.blockSize && (i = a(this._temp, this._state, e, i, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[i++], t--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            i = this._bufferLength,
                            r = t / 536870912 | 0,
                            n = t << 3,
                            o = t % 64 < 56 ? 64 : 128;
                        this._buffer[i] = 128;
                        for (var c = i + 1; c < o - 8; c++) this._buffer[c] = 0;
                        s.writeUint32BE(r, this._buffer, o - 8), s.writeUint32BE(n, this._buffer, o - 4), a(this._temp, this._state, this._buffer, 0, o), this._finished = !0
                    }
                    for (c = 0; c < this.digestLength / 4; c++) s.writeUint32BE(this._state[c], e, 4 * c);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    r.wipe(e.state), e.buffer && r.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.mE = n;
            var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function a(e, t, i, r, n) {
                for (; n >= 64;) {
                    for (var a = t[0], c = t[1], h = t[2], l = t[3], u = t[4], p = t[5], d = t[6], f = t[7], g = 0; g < 16; g++) {
                        var y = r + 4 * g;
                        e[g] = s.readUint32BE(i, y)
                    }
                    for (g = 16; g < 64; g++) {
                        var m = e[g - 2],
                            w = (m >>> 17 | m << 15) ^ (m >>> 19 | m << 13) ^ m >>> 10,
                            b = ((m = e[g - 15]) >>> 7 | m << 25) ^ (m >>> 18 | m << 14) ^ m >>> 3;
                        e[g] = (w + e[g - 7] | 0) + (b + e[g - 16] | 0)
                    }
                    for (g = 0; g < 64; g++) {
                        w = (((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & p ^ ~u & d) | 0) + (f + (o[g] + e[g] | 0) | 0) | 0, b = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & h ^ c & h) | 0;
                        f = d, d = p, p = u, u = l + w | 0, l = h, h = c, c = a, a = w + b | 0
                    }
                    t[0] += a, t[1] += c, t[2] += h, t[3] += l, t[4] += u, t[5] += p, t[6] += d, t[7] += f, r += 64, n -= 64
                }
                return r
            }
            t.vp = function(e) {
                var t = new n;
                t.update(e);
                var i = t.digest();
                return t.clean(), i
            }
        },
        93350: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i(98099),
                r = i(17309);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var n = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, i) {
                    if (void 0 === i && (i = e.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var s = 0;
                    if (this._bytesHashed += i, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && i > 0;) this._buffer[this._bufferLength++] = e[s++], i--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (i >= this.blockSize && (s = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, s, i), i %= this.blockSize); i > 0;) this._buffer[this._bufferLength++] = e[s++], i--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            i = this._bufferLength,
                            r = t / 536870912 | 0,
                            n = t << 3,
                            o = t % 128 < 112 ? 128 : 256;
                        this._buffer[i] = 128;
                        for (var c = i + 1; c < o - 8; c++) this._buffer[c] = 0;
                        s.writeUint32BE(r, this._buffer, o - 8), s.writeUint32BE(n, this._buffer, o - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o), this._finished = !0
                    }
                    for (c = 0; c < this.digestLength / 8; c++) s.writeUint32BE(this._stateHi[c], e, 8 * c), s.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    r.wipe(e.stateHi), r.wipe(e.stateLo), e.buffer && r.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = n;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, i, r, n, a, c) {
                for (var h, l, u, p, d, f, g, y, m = i[0], w = i[1], b = i[2], v = i[3], _ = i[4], E = i[5], S = i[6], I = i[7], O = r[0], P = r[1], N = r[2], A = r[3], R = r[4], T = r[5], C = r[6], x = r[7]; c >= 128;) {
                    for (var U = 0; U < 16; U++) {
                        var M = 8 * U + a;
                        e[U] = s.readUint32BE(n, M), t[U] = s.readUint32BE(n, M + 4)
                    }
                    for (U = 0; U < 80; U++) {
                        var L, j, D = m,
                            k = w,
                            z = b,
                            $ = v,
                            q = _,
                            H = E,
                            V = S,
                            K = O,
                            B = P,
                            F = N,
                            W = A,
                            G = R,
                            J = T,
                            Y = C;
                        if (d = 65535 & (l = x), f = l >>> 16, g = 65535 & (h = I), y = h >>> 16, d += 65535 & (l = (R >>> 14 | _ << 18) ^ (R >>> 18 | _ << 14) ^ (_ >>> 9 | R << 23)), f += l >>> 16, g += 65535 & (h = (_ >>> 14 | R << 18) ^ (_ >>> 18 | R << 14) ^ (R >>> 9 | _ << 23)), y += h >>> 16, d += 65535 & (l = R & T ^ ~R & C), f += l >>> 16, g += 65535 & (h = _ & E ^ ~_ & S), y += h >>> 16, h = o[2 * U], d += 65535 & (l = o[2 * U + 1]), f += l >>> 16, g += 65535 & h, y += h >>> 16, h = e[U % 16], f += (l = t[U % 16]) >>> 16, g += 65535 & h, y += h >>> 16, g += (f += (d += 65535 & l) >>> 16) >>> 16, d = 65535 & (l = p = 65535 & d | f << 16), f = l >>> 16, g = 65535 & (h = u = 65535 & g | (y += g >>> 16) << 16), y = h >>> 16, d += 65535 & (l = (O >>> 28 | m << 4) ^ (m >>> 2 | O << 30) ^ (m >>> 7 | O << 25)), f += l >>> 16, g += 65535 & (h = (m >>> 28 | O << 4) ^ (O >>> 2 | m << 30) ^ (O >>> 7 | m << 25)), y += h >>> 16, f += (l = O & P ^ O & N ^ P & N) >>> 16, g += 65535 & (h = m & w ^ m & b ^ w & b), y += h >>> 16, L = 65535 & (g += (f += (d += 65535 & l) >>> 16) >>> 16) | (y += g >>> 16) << 16, j = 65535 & d | f << 16, d = 65535 & (l = W), f = l >>> 16, g = 65535 & (h = $), y = h >>> 16, f += (l = p) >>> 16, g += 65535 & (h = u), y += h >>> 16, w = D, b = k, v = z, _ = $ = 65535 & (g += (f += (d += 65535 & l) >>> 16) >>> 16) | (y += g >>> 16) << 16, E = q, S = H, I = V, m = L, P = K, N = B, A = F, R = W = 65535 & d | f << 16, T = G, C = J, x = Y, O = j, U % 16 === 15)
                            for (M = 0; M < 16; M++) h = e[M], d = 65535 & (l = t[M]), f = l >>> 16, g = 65535 & h, y = h >>> 16, h = e[(M + 9) % 16], d += 65535 & (l = t[(M + 9) % 16]), f += l >>> 16, g += 65535 & h, y += h >>> 16, u = e[(M + 1) % 16], d += 65535 & (l = ((p = t[(M + 1) % 16]) >>> 1 | u << 31) ^ (p >>> 8 | u << 24) ^ (p >>> 7 | u << 25)), f += l >>> 16, g += 65535 & (h = (u >>> 1 | p << 31) ^ (u >>> 8 | p << 24) ^ u >>> 7), y += h >>> 16, u = e[(M + 14) % 16], f += (l = ((p = t[(M + 14) % 16]) >>> 19 | u << 13) ^ (u >>> 29 | p << 3) ^ (p >>> 6 | u << 26)) >>> 16, g += 65535 & (h = (u >>> 19 | p << 13) ^ (p >>> 29 | u << 3) ^ u >>> 6), y += h >>> 16, y += (g += (f += (d += 65535 & l) >>> 16) >>> 16) >>> 16, e[M] = 65535 & g | y << 16, t[M] = 65535 & d | f << 16
                    }
                    d = 65535 & (l = O), f = l >>> 16, g = 65535 & (h = m), y = h >>> 16, h = i[0], f += (l = r[0]) >>> 16, g += 65535 & h, y += h >>> 16, y += (g += (f += (d += 65535 & l) >>> 16) >>> 16) >>> 16, i[0] = m = 65535 & g | y << 16, r[0] = O = 65535 & d | f << 16, d = 65535 & (l = P), f = l >>> 16, g = 65535 & (h = w), y = h >>> 16, h = i[1], f += (l = r[1]) >>> 16, g += 65535 & h, y += h >>> 16, y += (g += (f += (d += 65535 & l) >>> 16) >>> 16) >>> 16, i[1] = w = 65535 & g | y << 16, r[1] = P = 65535 & d | f << 16, d = 65535 & (l = N), f = l >>> 16, g = 65535 & (h = b), y = h >>> 16, h = i[2], f += (l = r[2]) >>> 16, g += 65535 & h, y += h >>> 16, y += (g += (f += (d += 65535 & l) >>> 16) >>> 16) >>> 16, i[2] = b = 65535 & g | y << 16, r[2] = N = 65535 & d | f << 16, d = 65535 & (l = A), f = l >>> 16, g = 65535 & (h = v), y = h >>> 16, h = i[3], f += (l = r[3]) >>> 16, g += 65535 & h, y += h >>> 16, y += (g += (f += (d += 65535 & l) >>> 16) >>> 16) >>> 16, i[3] = v = 65535 & g | y << 16, r[3] = A = 65535 & d | f << 16, d = 65535 & (l = R), f = l >>> 16, g = 65535 & (h = _), y = h >>> 16, h = i[4], f += (l = r[4]) >>> 16, g += 65535 & h, y += h >>> 16, y += (g += (f += (d += 65535 & l) >>> 16) >>> 16) >>> 16, i[4] = _ = 65535 & g | y << 16, r[4] = R = 65535 & d | f << 16, d = 65535 & (l = T), f = l >>> 16, g = 65535 & (h = E), y = h >>> 16, h = i[5], f += (l = r[5]) >>> 16, g += 65535 & h, y += h >>> 16, y += (g += (f += (d += 65535 & l) >>> 16) >>> 16) >>> 16, i[5] = E = 65535 & g | y << 16, r[5] = T = 65535 & d | f << 16, d = 65535 & (l = C), f = l >>> 16, g = 65535 & (h = S), y = h >>> 16, h = i[6], f += (l = r[6]) >>> 16, g += 65535 & h, y += h >>> 16, y += (g += (f += (d += 65535 & l) >>> 16) >>> 16) >>> 16, i[6] = S = 65535 & g | y << 16, r[6] = C = 65535 & d | f << 16, d = 65535 & (l = x), f = l >>> 16, g = 65535 & (h = I), y = h >>> 16, h = i[7], f += (l = r[7]) >>> 16, g += 65535 & h, y += h >>> 16, y += (g += (f += (d += 65535 & l) >>> 16) >>> 16) >>> 16, i[7] = I = 65535 & g | y << 16, r[7] = x = 65535 & d | f << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new n;
                t.update(e);
                var i = t.digest();
                return t.clean(), i
            }
        },
        17309: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wipe = function(e) {
                for (var t = 0; t < e.length; t++) e[t] = 0;
                return e
            }
        },
        57664: function(e, t, i) {
            "use strict";
            t.gi = t.Au = t.KS = t.kz = void 0;
            const s = i(31416),
                r = i(17309);

            function n(e) {
                const t = new Float64Array(16);
                if (e)
                    for (let i = 0; i < e.length; i++) t[i] = e[i];
                return t
            }
            t.kz = 32, t.KS = 32;
            const o = new Uint8Array(32);
            o[0] = 9;
            const a = n([56129, 1]);

            function c(e) {
                let t = 1;
                for (let i = 0; i < 16; i++) {
                    let s = e[i] + t + 65535;
                    t = Math.floor(s / 65536), e[i] = s - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function h(e, t, i) {
                const s = ~(i - 1);
                for (let r = 0; r < 16; r++) {
                    const i = s & (e[r] ^ t[r]);
                    e[r] ^= i, t[r] ^= i
                }
            }

            function l(e, t, i) {
                for (let s = 0; s < 16; s++) e[s] = t[s] + i[s]
            }

            function u(e, t, i) {
                for (let s = 0; s < 16; s++) e[s] = t[s] - i[s]
            }

            function p(e, t, i) {
                let s, r, n = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    h = 0,
                    l = 0,
                    u = 0,
                    p = 0,
                    d = 0,
                    f = 0,
                    g = 0,
                    y = 0,
                    m = 0,
                    w = 0,
                    b = 0,
                    v = 0,
                    _ = 0,
                    E = 0,
                    S = 0,
                    I = 0,
                    O = 0,
                    P = 0,
                    N = 0,
                    A = 0,
                    R = 0,
                    T = 0,
                    C = 0,
                    x = 0,
                    U = 0,
                    M = 0,
                    L = 0,
                    j = i[0],
                    D = i[1],
                    k = i[2],
                    z = i[3],
                    $ = i[4],
                    q = i[5],
                    H = i[6],
                    V = i[7],
                    K = i[8],
                    B = i[9],
                    F = i[10],
                    W = i[11],
                    G = i[12],
                    J = i[13],
                    Y = i[14],
                    X = i[15];
                s = t[0], n += s * j, o += s * D, a += s * k, c += s * z, h += s * $, l += s * q, u += s * H, p += s * V, d += s * K, f += s * B, g += s * F, y += s * W, m += s * G, w += s * J, b += s * Y, v += s * X, s = t[1], o += s * j, a += s * D, c += s * k, h += s * z, l += s * $, u += s * q, p += s * H, d += s * V, f += s * K, g += s * B, y += s * F, m += s * W, w += s * G, b += s * J, v += s * Y, _ += s * X, s = t[2], a += s * j, c += s * D, h += s * k, l += s * z, u += s * $, p += s * q, d += s * H, f += s * V, g += s * K, y += s * B, m += s * F, w += s * W, b += s * G, v += s * J, _ += s * Y, E += s * X, s = t[3], c += s * j, h += s * D, l += s * k, u += s * z, p += s * $, d += s * q, f += s * H, g += s * V, y += s * K, m += s * B, w += s * F, b += s * W, v += s * G, _ += s * J, E += s * Y, S += s * X, s = t[4], h += s * j, l += s * D, u += s * k, p += s * z, d += s * $, f += s * q, g += s * H, y += s * V, m += s * K, w += s * B, b += s * F, v += s * W, _ += s * G, E += s * J, S += s * Y, I += s * X, s = t[5], l += s * j, u += s * D, p += s * k, d += s * z, f += s * $, g += s * q, y += s * H, m += s * V, w += s * K, b += s * B, v += s * F, _ += s * W, E += s * G, S += s * J, I += s * Y, O += s * X, s = t[6], u += s * j, p += s * D, d += s * k, f += s * z, g += s * $, y += s * q, m += s * H, w += s * V, b += s * K, v += s * B, _ += s * F, E += s * W, S += s * G, I += s * J, O += s * Y, P += s * X, s = t[7], p += s * j, d += s * D, f += s * k, g += s * z, y += s * $, m += s * q, w += s * H, b += s * V, v += s * K, _ += s * B, E += s * F, S += s * W, I += s * G, O += s * J, P += s * Y, N += s * X, s = t[8], d += s * j, f += s * D, g += s * k, y += s * z, m += s * $, w += s * q, b += s * H, v += s * V, _ += s * K, E += s * B, S += s * F, I += s * W, O += s * G, P += s * J, N += s * Y, A += s * X, s = t[9], f += s * j, g += s * D, y += s * k, m += s * z, w += s * $, b += s * q, v += s * H, _ += s * V, E += s * K, S += s * B, I += s * F, O += s * W, P += s * G, N += s * J, A += s * Y, R += s * X, s = t[10], g += s * j, y += s * D, m += s * k, w += s * z, b += s * $, v += s * q, _ += s * H, E += s * V, S += s * K, I += s * B, O += s * F, P += s * W, N += s * G, A += s * J, R += s * Y, T += s * X, s = t[11], y += s * j, m += s * D, w += s * k, b += s * z, v += s * $, _ += s * q, E += s * H, S += s * V, I += s * K, O += s * B, P += s * F, N += s * W, A += s * G, R += s * J, T += s * Y, C += s * X, s = t[12], m += s * j, w += s * D, b += s * k, v += s * z, _ += s * $, E += s * q, S += s * H, I += s * V, O += s * K, P += s * B, N += s * F, A += s * W, R += s * G, T += s * J, C += s * Y, x += s * X, s = t[13], w += s * j, b += s * D, v += s * k, _ += s * z, E += s * $, S += s * q, I += s * H, O += s * V, P += s * K, N += s * B, A += s * F, R += s * W, T += s * G, C += s * J, x += s * Y, U += s * X, s = t[14], b += s * j, v += s * D, _ += s * k, E += s * z, S += s * $, I += s * q, O += s * H, P += s * V, N += s * K, A += s * B, R += s * F, T += s * W, C += s * G, x += s * J, U += s * Y, M += s * X, s = t[15], v += s * j, _ += s * D, E += s * k, S += s * z, I += s * $, O += s * q, P += s * H, N += s * V, A += s * K, R += s * B, T += s * F, C += s * W, x += s * G, U += s * J, M += s * Y, L += s * X, n += 38 * _, o += 38 * E, a += 38 * S, c += 38 * I, h += 38 * O, l += 38 * P, u += 38 * N, p += 38 * A, d += 38 * R, f += 38 * T, g += 38 * C, y += 38 * x, m += 38 * U, w += 38 * M, b += 38 * L, r = 1, s = n + r + 65535, r = Math.floor(s / 65536), n = s - 65536 * r, s = o + r + 65535, r = Math.floor(s / 65536), o = s - 65536 * r, s = a + r + 65535, r = Math.floor(s / 65536), a = s - 65536 * r, s = c + r + 65535, r = Math.floor(s / 65536), c = s - 65536 * r, s = h + r + 65535, r = Math.floor(s / 65536), h = s - 65536 * r, s = l + r + 65535, r = Math.floor(s / 65536), l = s - 65536 * r, s = u + r + 65535, r = Math.floor(s / 65536), u = s - 65536 * r, s = p + r + 65535, r = Math.floor(s / 65536), p = s - 65536 * r, s = d + r + 65535, r = Math.floor(s / 65536), d = s - 65536 * r, s = f + r + 65535, r = Math.floor(s / 65536), f = s - 65536 * r, s = g + r + 65535, r = Math.floor(s / 65536), g = s - 65536 * r, s = y + r + 65535, r = Math.floor(s / 65536), y = s - 65536 * r, s = m + r + 65535, r = Math.floor(s / 65536), m = s - 65536 * r, s = w + r + 65535, r = Math.floor(s / 65536), w = s - 65536 * r, s = b + r + 65535, r = Math.floor(s / 65536), b = s - 65536 * r, s = v + r + 65535, r = Math.floor(s / 65536), v = s - 65536 * r, n += r - 1 + 37 * (r - 1), r = 1, s = n + r + 65535, r = Math.floor(s / 65536), n = s - 65536 * r, s = o + r + 65535, r = Math.floor(s / 65536), o = s - 65536 * r, s = a + r + 65535, r = Math.floor(s / 65536), a = s - 65536 * r, s = c + r + 65535, r = Math.floor(s / 65536), c = s - 65536 * r, s = h + r + 65535, r = Math.floor(s / 65536), h = s - 65536 * r, s = l + r + 65535, r = Math.floor(s / 65536), l = s - 65536 * r, s = u + r + 65535, r = Math.floor(s / 65536), u = s - 65536 * r, s = p + r + 65535, r = Math.floor(s / 65536), p = s - 65536 * r, s = d + r + 65535, r = Math.floor(s / 65536), d = s - 65536 * r, s = f + r + 65535, r = Math.floor(s / 65536), f = s - 65536 * r, s = g + r + 65535, r = Math.floor(s / 65536), g = s - 65536 * r, s = y + r + 65535, r = Math.floor(s / 65536), y = s - 65536 * r, s = m + r + 65535, r = Math.floor(s / 65536), m = s - 65536 * r, s = w + r + 65535, r = Math.floor(s / 65536), w = s - 65536 * r, s = b + r + 65535, r = Math.floor(s / 65536), b = s - 65536 * r, s = v + r + 65535, r = Math.floor(s / 65536), v = s - 65536 * r, n += r - 1 + 37 * (r - 1), e[0] = n, e[1] = o, e[2] = a, e[3] = c, e[4] = h, e[5] = l, e[6] = u, e[7] = p, e[8] = d, e[9] = f, e[10] = g, e[11] = y, e[12] = m, e[13] = w, e[14] = b, e[15] = v
            }

            function d(e, t) {
                p(e, t, t)
            }

            function f(e, t) {
                const i = new Uint8Array(32),
                    s = new Float64Array(80),
                    r = n(),
                    o = n(),
                    f = n(),
                    g = n(),
                    y = n(),
                    m = n();
                for (let n = 0; n < 31; n++) i[n] = e[n];
                i[31] = 127 & e[31] | 64, i[0] &= 248,
                    function(e, t) {
                        for (let i = 0; i < 16; i++) e[i] = t[2 * i] + (t[2 * i + 1] << 8);
                        e[15] &= 32767
                    }(s, t);
                for (let n = 0; n < 16; n++) o[n] = s[n];
                r[0] = g[0] = 1;
                for (let n = 254; n >= 0; --n) {
                    const e = i[n >>> 3] >>> (7 & n) & 1;
                    h(r, o, e), h(f, g, e), l(y, r, f), u(r, r, f), l(f, o, g), u(o, o, g), d(g, y), d(m, r), p(r, f, r), p(f, o, y), l(y, r, f), u(r, r, f), d(o, r), u(f, g, m), p(r, f, a), l(r, r, g), p(f, f, r), p(r, g, m), p(g, o, s), d(o, y), h(r, o, e), h(f, g, e)
                }
                for (let n = 0; n < 16; n++) s[n + 16] = r[n], s[n + 32] = f[n], s[n + 48] = o[n], s[n + 64] = g[n];
                const w = s.subarray(32),
                    b = s.subarray(16);
                ! function(e, t) {
                    const i = n();
                    for (let s = 0; s < 16; s++) i[s] = t[s];
                    for (let s = 253; s >= 0; s--) d(i, i), 2 !== s && 4 !== s && p(i, i, t);
                    for (let s = 0; s < 16; s++) e[s] = i[s]
                }(w, w), p(b, b, w);
                const v = new Uint8Array(32);
                return function(e, t) {
                    const i = n(),
                        s = n();
                    for (let r = 0; r < 16; r++) s[r] = t[r];
                    c(s), c(s), c(s);
                    for (let r = 0; r < 2; r++) {
                        i[0] = s[0] - 65517;
                        for (let t = 1; t < 15; t++) i[t] = s[t] - 65535 - (i[t - 1] >> 16 & 1), i[t - 1] &= 65535;
                        i[15] = s[15] - 32767 - (i[14] >> 16 & 1);
                        const e = i[15] >> 16 & 1;
                        i[14] &= 65535, h(s, i, 1 - e)
                    }
                    for (let r = 0; r < 16; r++) e[2 * r] = 255 & s[r], e[2 * r + 1] = s[r] >> 8
                }(v, b), v
            }

            function g(e) {
                return f(e, o)
            }

            function y(e) {
                if (e.length !== t.KS) throw new Error(`x25519: seed must be ${t.KS} bytes`);
                const i = new Uint8Array(e);
                return {
                    publicKey: g(i),
                    secretKey: i
                }
            }
            t.Au = function(e) {
                const t = (0, s.randomBytes)(32, e),
                    i = y(t);
                return (0, r.wipe)(t), i
            }, t.gi = function(e, i, s = !1) {
                if (e.length !== t.kz) throw new Error("X25519: incorrect secret key length");
                if (i.length !== t.kz) throw new Error("X25519: incorrect public key length");
                const r = f(e, i);
                if (s) {
                    let e = 0;
                    for (let t = 0; t < r.length; t++) e |= r[t];
                    if (0 === e) throw new Error("X25519: invalid shared key")
                }
                return r
            }
        },
        19792: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                EthereumProvider: function() {
                    return ta
                },
                OPTIONAL_EVENTS: function() {
                    return Ho
                },
                OPTIONAL_METHODS: function() {
                    return $o
                },
                REQUIRED_EVENTS: function() {
                    return qo
                },
                REQUIRED_METHODS: function() {
                    return zo
                },
                default: function() {
                    return ea
                }
            });
            var s = {};
            i.r(s), i.d(s, {
                identity: function() {
                    return k
                }
            });
            var r = {};
            i.r(r), i.d(r, {
                base2: function() {
                    return z
                }
            });
            var n = {};
            i.r(n), i.d(n, {
                base8: function() {
                    return $
                }
            });
            var o = {};
            i.r(o), i.d(o, {
                base10: function() {
                    return q
                }
            });
            var a = {};
            i.r(a), i.d(a, {
                base16: function() {
                    return H
                },
                base16upper: function() {
                    return V
                }
            });
            var c = {};
            i.r(c), i.d(c, {
                base32: function() {
                    return K
                },
                base32hex: function() {
                    return G
                },
                base32hexpad: function() {
                    return Y
                },
                base32hexpadupper: function() {
                    return X
                },
                base32hexupper: function() {
                    return J
                },
                base32pad: function() {
                    return F
                },
                base32padupper: function() {
                    return W
                },
                base32upper: function() {
                    return B
                },
                base32z: function() {
                    return Z
                }
            });
            var h = {};
            i.r(h), i.d(h, {
                base36: function() {
                    return Q
                },
                base36upper: function() {
                    return ee
                }
            });
            var l = {};
            i.r(l), i.d(l, {
                base58btc: function() {
                    return te
                },
                base58flickr: function() {
                    return ie
                }
            });
            var u = {};
            i.r(u), i.d(u, {
                base64: function() {
                    return se
                },
                base64pad: function() {
                    return re
                },
                base64url: function() {
                    return ne
                },
                base64urlpad: function() {
                    return oe
                }
            });
            var p = {};
            i.r(p), i.d(p, {
                base256emoji: function() {
                    return le
                }
            });
            var d = {};
            i.r(d), i.d(d, {
                sha256: function() {
                    return Ce
                },
                sha512: function() {
                    return xe
                }
            });
            var f = {};
            i.r(f), i.d(f, {
                identity: function() {
                    return Me
                }
            });
            var g = {};
            i.r(g), i.d(g, {
                code: function() {
                    return je
                },
                decode: function() {
                    return ke
                },
                encode: function() {
                    return De
                },
                name: function() {
                    return Le
                }
            });
            var y = {};
            i.r(y), i.d(y, {
                code: function() {
                    return He
                },
                decode: function() {
                    return Ke
                },
                encode: function() {
                    return Ve
                },
                name: function() {
                    return qe
                }
            });
            var m = i(17187),
                w = i.n(m),
                b = i(15501),
                v = i(9328),
                _ = i(31416),
                E = i(73294),
                S = i(57664);

            function I(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function O(e = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? I(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }

            function P(e, t) {
                t || (t = e.reduce(((e, t) => e + t.length), 0));
                const i = O(t);
                let s = 0;
                for (const r of e) i.set(r, s), s += r.length;
                return I(i)
            }
            var N = function(e, t) {
                    if (e.length >= 255) throw new TypeError("Alphabet too long");
                    for (var i = new Uint8Array(256), s = 0; s < i.length; s++) i[s] = 255;
                    for (var r = 0; r < e.length; r++) {
                        var n = e.charAt(r),
                            o = n.charCodeAt(0);
                        if (255 !== i[o]) throw new TypeError(n + " is ambiguous");
                        i[o] = r
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        h = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function u(e) {
                        if ("string" !== typeof e) throw new TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[t]) {
                            for (var s = 0, r = 0; e[t] === c;) s++, t++;
                            for (var n = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(n); e[t];) {
                                var l = i[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var u = 0, p = n - 1;
                                    (0 !== l || u < r) && -1 !== p; p--, u++) l += a * o[p] >>> 0, o[p] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw new Error("Non-zero carry");
                                r = u, t++
                            }
                            if (" " !== e[t]) {
                                for (var d = n - r; d !== n && 0 === o[d];) d++;
                                for (var f = new Uint8Array(s + (n - d)), g = s; d !== n;) f[g++] = o[d++];
                                return f
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var i = 0, s = 0, r = 0, n = t.length; r !== n && 0 === t[r];) r++, i++;
                            for (var o = (n - r) * l + 1 >>> 0, h = new Uint8Array(o); r !== n;) {
                                for (var u = t[r], p = 0, d = o - 1;
                                    (0 !== u || p < s) && -1 !== d; d--, p++) u += 256 * h[d] >>> 0, h[d] = u % a >>> 0, u = u / a >>> 0;
                                if (0 !== u) throw new Error("Non-zero carry");
                                s = p, r++
                            }
                            for (var f = o - s; f !== o && 0 === h[f];) f++;
                            for (var g = c.repeat(i); f < o; ++f) g += e.charAt(h[f]);
                            return g
                        },
                        decodeUnsafe: u,
                        decode: function(e) {
                            var i = u(e);
                            if (i) return i;
                            throw new Error(`Non-${t} character`)
                        }
                    }
                },
                A = N;
            new Uint8Array(0);
            const R = e => {
                if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                if (e instanceof ArrayBuffer) return new Uint8Array(e);
                if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class T {
                constructor(e, t, i) {
                    this.name = e, this.prefix = t, this.baseEncode = i
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class C {
                constructor(e, t, i) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i
                }
                decode(e) {
                    if ("string" === typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return U(this, e)
                }
            }
            class x {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return U(this, e)
                }
                decode(e) {
                    const t = e[0],
                        i = this.decoders[t];
                    if (i) return i.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const U = (e, t) => new x({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class M {
                constructor(e, t, i, s) {
                    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new T(e, t, i), this.decoder = new C(e, t, s)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            const L = ({
                    name: e,
                    prefix: t,
                    encode: i,
                    decode: s
                }) => new M(e, t, i, s),
                j = ({
                    prefix: e,
                    name: t,
                    alphabet: i
                }) => {
                    const {
                        encode: s,
                        decode: r
                    } = A(i, t);
                    return L({
                        prefix: e,
                        name: t,
                        encode: s,
                        decode: e => R(r(e))
                    })
                },
                D = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: i,
                    alphabet: s
                }) => L({
                    prefix: t,
                    name: e,
                    encode: e => ((e, t, i) => {
                        const s = "=" === t[t.length - 1],
                            r = (1 << i) - 1;
                        let n = "",
                            o = 0,
                            a = 0;
                        for (let c = 0; c < e.length; ++c)
                            for (a = a << 8 | e[c], o += 8; o > i;) o -= i, n += t[r & a >> o];
                        if (o && (n += t[r & a << i - o]), s)
                            for (; n.length * i & 7;) n += "=";
                        return n
                    })(e, s, i),
                    decode: t => ((e, t, i, s) => {
                        const r = {};
                        for (let l = 0; l < t.length; ++l) r[t[l]] = l;
                        let n = e.length;
                        for (;
                            "=" === e[n - 1];) --n;
                        const o = new Uint8Array(n * i / 8 | 0);
                        let a = 0,
                            c = 0,
                            h = 0;
                        for (let l = 0; l < n; ++l) {
                            const t = r[e[l]];
                            if (void 0 === t) throw new SyntaxError(`Non-${s} character`);
                            c = c << i | t, a += i, a >= 8 && (a -= 8, o[h++] = 255 & c >> a)
                        }
                        if (a >= i || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                        return o
                    })(t, s, i, e)
                }),
                k = L({
                    prefix: "\0",
                    name: "identity",
                    encode: e => (e => (new TextDecoder).decode(e))(e),
                    decode: e => (e => (new TextEncoder).encode(e))(e)
                }),
                z = D({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                $ = D({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                q = j({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                H = D({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                V = D({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                K = D({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                B = D({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                F = D({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                W = D({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                G = D({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                J = D({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                Y = D({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                X = D({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                Z = D({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                Q = j({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                ee = j({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                te = j({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                ie = j({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                se = D({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                re = D({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                ne = D({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                oe = D({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                ae = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                ce = ae.reduce(((e, t, i) => (e[i] = t, e)), []),
                he = ae.reduce(((e, t, i) => (e[t.codePointAt(0)] = i, e)), []);
            const le = L({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(e) {
                    return e.reduce(((e, t) => e += ce[t]), "")
                },
                decode: function(e) {
                    const t = [];
                    for (const i of e) {
                        const e = he[i.codePointAt(0)];
                        if (void 0 === e) throw new Error(`Non-base256emoji character: ${i}`);
                        t.push(e)
                    }
                    return new Uint8Array(t)
                }
            });
            var ue = function e(t, i, s) {
                    i = i || [];
                    var r = s = s || 0;
                    for (; t >= pe;) i[s++] = 255 & t | 128, t /= 128;
                    for (; - 128 & t;) i[s++] = 255 & t | 128, t >>>= 7;
                    return i[s] = 0 | t, e.bytes = s - r + 1, i
                },
                pe = Math.pow(2, 31);
            var de = function e(t, i) {
                var s, r = 0,
                    n = 0,
                    o = i = i || 0,
                    a = t.length;
                do {
                    if (o >= a) throw e.bytes = 0, new RangeError("Could not decode varint");
                    s = t[o++], r += n < 28 ? (127 & s) << n : (127 & s) * Math.pow(2, n), n += 7
                } while (s >= 128);
                return e.bytes = o - i, r
            };
            var fe = Math.pow(2, 7),
                ge = Math.pow(2, 14),
                ye = Math.pow(2, 21),
                me = Math.pow(2, 28),
                we = Math.pow(2, 35),
                be = Math.pow(2, 42),
                ve = Math.pow(2, 49),
                _e = Math.pow(2, 56),
                Ee = Math.pow(2, 63),
                Se = {
                    encode: ue,
                    decode: de,
                    encodingLength: function(e) {
                        return e < fe ? 1 : e < ge ? 2 : e < ye ? 3 : e < me ? 4 : e < we ? 5 : e < be ? 6 : e < ve ? 7 : e < _e ? 8 : e < Ee ? 9 : 10
                    }
                };
            const Ie = (e, t, i = 0) => (Se.encode(e, t, i), t),
                Oe = e => Se.encodingLength(e),
                Pe = (e, t) => {
                    const i = t.byteLength,
                        s = Oe(e),
                        r = s + Oe(i),
                        n = new Uint8Array(r + i);
                    return Ie(e, n, 0), Ie(i, n, s), n.set(t, r), new Ne(e, i, t, n)
                };
            class Ne {
                constructor(e, t, i, s) {
                    this.code = e, this.size = t, this.digest = i, this.bytes = s
                }
            }
            const Ae = ({
                name: e,
                code: t,
                encode: i
            }) => new Re(e, t, i);
            class Re {
                constructor(e, t, i) {
                    this.name = e, this.code = t, this.encode = i
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        const t = this.encode(e);
                        return t instanceof Uint8Array ? Pe(this.code, t) : t.then((e => Pe(this.code, e)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const Te = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                Ce = Ae({
                    name: "sha2-256",
                    code: 18,
                    encode: Te("SHA-256")
                }),
                xe = Ae({
                    name: "sha2-512",
                    code: 19,
                    encode: Te("SHA-512")
                }),
                Ue = R,
                Me = {
                    code: 0,
                    name: "identity",
                    encode: Ue,
                    digest: e => Pe(0, Ue(e))
                },
                Le = "raw",
                je = 85,
                De = e => R(e),
                ke = e => R(e),
                ze = new TextEncoder,
                $e = new TextDecoder,
                qe = "json",
                He = 512,
                Ve = e => ze.encode(JSON.stringify(e)),
                Ke = e => JSON.parse($e.decode(e));
            Symbol.toStringTag, Symbol.for("nodejs.util.inspect.custom");
            Symbol.for("@ipld/js-cid/CID");
            const Be = { ...s,
                ...r,
                ...n,
                ...o,
                ...a,
                ...c,
                ...h,
                ...l,
                ...u,
                ...p
            };

            function Fe(e, t, i, s) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: i
                    },
                    decoder: {
                        decode: s
                    }
                }
            }
            const We = Fe("utf8", "u", (e => "u" + new TextDecoder("utf8").decode(e)), (e => (new TextEncoder).encode(e.substring(1)))),
                Ge = Fe("ascii", "a", (e => {
                    let t = "a";
                    for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
                    return t
                }), (e => {
                    const t = O((e = e.substring(1)).length);
                    for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
                    return t
                }));
            var Je = {
                utf8: We,
                "utf-8": We,
                hex: Be.base16,
                latin1: Ge,
                ascii: Ge,
                binary: Ge,
                ...Be
            };

            function Ye(e, t = "utf8") {
                const i = Je[t];
                if (!i) throw new Error(`Unsupported encoding "${t}"`);
                return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? i.decoder.decode(`${i.prefix}${e}`) : I(globalThis.Buffer.from(e, "utf-8"))
            }

            function Xe(e, t = "utf8") {
                const i = Je[t];
                if (!i) throw new Error(`Unsupported encoding "${t}"`);
                return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? i.encoder.encode(e).substring(1) : globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8")
            }
            var Ze = i(34155),
                Qe = function(e, t, i) {
                    if (i || 2 === arguments.length)
                        for (var s, r = 0, n = t.length; r < n; r++) !s && r in t || (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
                    return e.concat(s || Array.prototype.slice.call(t))
                },
                et = function(e, t, i) {
                    this.name = e, this.version = t, this.os = i, this.type = "browser"
                },
                tt = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = Ze.platform
                },
                it = function(e, t, i, s) {
                    this.name = e, this.version = t, this.os = i, this.bot = s, this.type = "bot-device"
                },
                st = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                rt = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                nt = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                ot = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                at = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function ct(e) {
                return e ? lt(e) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new rt : "undefined" !== typeof navigator ? lt(navigator.userAgent) : "undefined" !== typeof Ze && Ze.version ? new tt(Ze.version.slice(1)) : null
            }

            function ht(e) {
                return "" !== e && ot.reduce((function(t, i) {
                    var s = i[0],
                        r = i[1];
                    if (t) return t;
                    var n = r.exec(e);
                    return !!n && [s, n]
                }), !1)
            }

            function lt(e) {
                var t = ht(e);
                if (!t) return null;
                var i = t[0],
                    s = t[1];
                if ("searchbot" === i) return new st;
                var r = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
                r ? r.length < 3 && (r = Qe(Qe([], r, !0), function(e) {
                    for (var t = [], i = 0; i < e; i++) t.push("0");
                    return t
                }(3 - r.length), !0)) : r = [];
                var n = r.join("."),
                    o = function(e) {
                        for (var t = 0, i = at.length; t < i; t++) {
                            var s = at[t],
                                r = s[0];
                            if (s[1].exec(e)) return r
                        }
                        return null
                    }(e),
                    a = nt.exec(e);
                return a && a[1] ? new it(i, n, o, a[1]) : new et(i, n, o)
            }
            var ut = i(66736),
                pt = i(66667),
                dt = i(58790),
                ft = i(66151);
            i(61882);
            const gt = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe"
                }
            };
            var yt = i(34155);

            function mt(e, t) {
                return e.includes(":") ? [e] : t.chains || []
            }
            const wt = "base10",
                bt = "base16",
                vt = "base64pad",
                _t = "utf8";

            function Et() {
                return Xe((0, _.randomBytes)(32), bt)
            }

            function St(e) {
                return Xe((0, E.vp)(Ye(e, _t)), bt)
            }

            function It(e) {
                return Number(Xe(e, wt))
            }

            function Ot(e) {
                const t = function(e) {
                    return Ye(`${e}`, wt)
                }(typeof e.type < "u" ? e.type : 0);
                if (1 === It(t) && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                const i = typeof e.senderPublicKey < "u" ? Ye(e.senderPublicKey, bt) : void 0,
                    s = typeof e.iv < "u" ? Ye(e.iv, bt) : (0, _.randomBytes)(12);
                return function(e) {
                    if (1 === It(e.type)) {
                        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                        return Xe(P([e.type, e.senderPublicKey, e.iv, e.sealed]), vt)
                    }
                    return Xe(P([e.type, e.iv, e.sealed]), vt)
                }({
                    type: t,
                    sealed: new b.OK(Ye(e.symKey, bt)).seal(s, Ye(e.message, _t)),
                    iv: s,
                    senderPublicKey: i
                })
            }

            function Pt(e) {
                const t = Ye(e, vt),
                    i = t.slice(0, 1);
                if (1 === It(i)) {
                    const e = 33,
                        s = e + 12,
                        r = t.slice(1, e),
                        n = t.slice(e, s);
                    return {
                        type: i,
                        sealed: t.slice(s),
                        iv: n,
                        senderPublicKey: r
                    }
                }
                const s = t.slice(1, 13);
                return {
                    type: i,
                    sealed: t.slice(13),
                    iv: s
                }
            }

            function Nt(e) {
                const t = e ? .type || 0;
                if (1 === t) {
                    if (typeof e ? .senderPublicKey > "u") throw new Error("missing sender public key");
                    if (typeof e ? .receiverPublicKey > "u") throw new Error("missing receiver public key")
                }
                return {
                    type: t,
                    senderPublicKey: e ? .senderPublicKey,
                    receiverPublicKey: e ? .receiverPublicKey
                }
            }

            function At(e) {
                return 1 === e.type && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
            }
            var Rt = Object.defineProperty,
                Tt = Object.getOwnPropertySymbols,
                Ct = Object.prototype.hasOwnProperty,
                xt = Object.prototype.propertyIsEnumerable,
                Ut = (e, t, i) => t in e ? Rt(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                Mt = (e, t) => {
                    for (var i in t || (t = {})) Ct.call(t, i) && Ut(e, i, t[i]);
                    if (Tt)
                        for (var i of Tt(t)) xt.call(t, i) && Ut(e, i, t[i]);
                    return e
                };
            const Lt = "react-native",
                jt = "node",
                Dt = "browser",
                kt = "unknown",
                zt = "js";

            function $t() {
                return typeof yt < "u" && typeof yt.versions < "u" && typeof yt.versions.node < "u"
            }

            function qt() {
                return !(0, pt.getDocument)() && (0, pt.getNavigator)() && "ReactNative" === navigator.product ? Lt : $t() ? jt : !$t() && (0, pt.getNavigator)() ? Dt : kt
            }

            function Ht(e, t, i) {
                const s = function() {
                        const e = ct();
                        if (null === e) return "unknown";
                        const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                        return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
                    }(),
                    r = function() {
                        var e;
                        const t = qt();
                        return t === Dt ? [t, (null == (e = (0, pt.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                    }();
                return [
                    [e, t].join("-"), [zt, i].join("-"), s, r
                ].join("/")
            }

            function Vt({
                protocol: e,
                version: t,
                relayUrl: i,
                sdkVersion: s,
                auth: r,
                projectId: n
            }) {
                const o = i.split("?"),
                    a = {
                        auth: r,
                        ua: Ht(e, t, s),
                        projectId: n
                    },
                    c = function(e, t) {
                        let i = ft.parse(e);
                        return i = Mt(Mt({}, i), t), ft.stringify(i)
                    }(o[1] || "", a);
                return o[0] + "?" + c
            }

            function Kt(e, t) {
                return e.filter((e => t.includes(e))).length === e.length
            }

            function Bt(e) {
                return Object.fromEntries(e.entries())
            }

            function Ft(e) {
                return new Map(Object.entries(e))
            }

            function Wt(e = ut.FIVE_MINUTES, t) {
                const i = (0, ut.toMiliseconds)(e || ut.FIVE_MINUTES);
                let s, r, n;
                return {
                    resolve: e => {
                        n && s && (clearTimeout(n), s(e))
                    },
                    reject: e => {
                        n && r && (clearTimeout(n), r(e))
                    },
                    done: () => new Promise(((e, o) => {
                        n = setTimeout((() => {
                            o(new Error(t))
                        }), i), s = e, r = o
                    }))
                }
            }

            function Gt(e, t) {
                return new Promise((async (i, s) => {
                    const r = setTimeout((() => s()), t),
                        n = await e;
                    clearTimeout(r), i(n)
                }))
            }

            function Jt(e, t) {
                if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
                if ("topic" === e.toLowerCase()) {
                    if ("string" != typeof t) throw new Error('Value must be "string" for expirer target type: topic');
                    return `topic:${t}`
                }
                if ("id" === e.toLowerCase()) {
                    if ("number" != typeof t) throw new Error('Value must be "number" for expirer target type: id');
                    return `id:${t}`
                }
                throw new Error(`Unknown expirer target type: ${e}`)
            }

            function Yt(e) {
                const [t, i] = e.split(":"), s = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === t && "string" == typeof i) s.topic = i;
                else {
                    if ("id" !== t || !Number.isInteger(Number(i))) throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${i}`);
                    s.id = Number(i)
                }
                return s
            }

            function Xt(e, t) {
                return (0, ut.fromMiliseconds)((t || Date.now()) + (0, ut.toMiliseconds)(e))
            }

            function Zt(e) {
                return Date.now() >= (0, ut.toMiliseconds)(e)
            }

            function Qt(e, t) {
                return `${e}${t?`:${t}`:""}`
            }

            function ei(e) {
                return e ? .relay || {
                    protocol: "irn"
                }
            }

            function ti(e) {
                const t = gt[e];
                if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
                return t
            }
            var ii = Object.defineProperty,
                si = Object.getOwnPropertySymbols,
                ri = Object.prototype.hasOwnProperty,
                ni = Object.prototype.propertyIsEnumerable,
                oi = (e, t, i) => t in e ? ii(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i;

            function ai(e, t = "-") {
                const i = {},
                    s = "relay" + t;
                return Object.keys(e).forEach((t => {
                    if (t.startsWith(s)) {
                        const r = t.replace(s, ""),
                            n = e[t];
                        i[r] = n
                    }
                })), i
            }

            function ci(e) {
                return `${e.protocol}:${e.topic}@${e.version}?` + ft.stringify(((e, t) => {
                    for (var i in t || (t = {})) ri.call(t, i) && oi(e, i, t[i]);
                    if (si)
                        for (var i of si(t)) ni.call(t, i) && oi(e, i, t[i]);
                    return e
                })({
                    symKey: e.symKey
                }, function(e, t = "-") {
                    const i = {};
                    return Object.keys(e).forEach((s => {
                        const r = "relay" + t + s;
                        e[s] && (i[r] = e[s])
                    })), i
                }(e.relay)))
            }

            function hi(e) {
                const t = [];
                return e.forEach((e => {
                    const [i, s] = e.split(":");
                    t.push(`${i}:${s}`)
                })), t
            }
            const li = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                ui = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function pi(e, t) {
                const {
                    message: i,
                    code: s
                } = ui[e];
                return {
                    message: t ? `${i} ${t}` : i,
                    code: s
                }
            }

            function di(e, t) {
                const {
                    message: i,
                    code: s
                } = li[e];
                return {
                    message: t ? `${i} ${t}` : i,
                    code: s
                }
            }

            function fi(e, t) {
                return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
            }

            function gi(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }

            function yi(e) {
                return typeof e > "u"
            }

            function mi(e, t) {
                return !(!t || !yi(e)) || "string" == typeof e && Boolean(e.trim().length)
            }

            function wi(e, t) {
                return !(!t || !yi(e)) || "number" == typeof e && !isNaN(e)
            }

            function bi(e) {
                return !(!mi(e, !1) || !e.includes(":")) && 2 === e.split(":").length
            }

            function vi(e) {
                let t = !0;
                return fi(e) ? e.length && (t = e.every((e => mi(e, !1)))) : t = !1, t
            }

            function _i(e, t) {
                let i = null;
                return Object.entries(e).forEach((([e, s]) => {
                    if (i) return;
                    const r = function(e, t, i) {
                        let s = null;
                        return fi(t) ? t.forEach((t => {
                            s || (!bi(t) || !t.includes(e)) && (s = di("UNSUPPORTED_CHAINS", `${i}, chain ${t} should be a string and conform to "namespace:chainId" format`))
                        })) : s = di("UNSUPPORTED_CHAINS", `${i}, chains ${t} should be an array of strings conforming to "namespace:chainId" format`), s
                    }(e, mt(e, s), `${t} requiredNamespace`);
                    r && (i = r)
                })), i
            }

            function Ei(e, t) {
                let i = null;
                return fi(e) ? e.forEach((e => {
                    i || function(e) {
                        if (mi(e, !1) && e.includes(":")) {
                            const t = e.split(":");
                            if (3 === t.length) {
                                const e = t[0] + ":" + t[1];
                                return !!t[2] && bi(e)
                            }
                        }
                        return !1
                    }(e) || (i = di("UNSUPPORTED_ACCOUNTS", `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
                })) : i = di("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), i
            }

            function Si(e, t) {
                let i = null;
                return Object.values(e).forEach((e => {
                    if (i) return;
                    const s = function(e, t) {
                        let i = null;
                        return vi(e ? .methods) ? vi(e ? .events) || (i = di("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : i = di("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), i
                    }(e, `${t}, namespace`);
                    s && (i = s)
                })), i
            }

            function Ii(e, t) {
                let i = null;
                if (e && gi(e)) {
                    const s = Si(e, t);
                    s && (i = s);
                    const r = function(e, t) {
                        let i = null;
                        return Object.values(e).forEach((e => {
                            if (i) return;
                            const s = Ei(e ? .accounts, `${t} namespace`);
                            s && (i = s)
                        })), i
                    }(e, t);
                    r && (i = r)
                } else i = pi("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
                return i
            }

            function Oi(e) {
                return mi(e.protocol, !0)
            }

            function Pi(e) {
                return typeof e < "u" && null !== typeof e
            }

            function Ni(e, t) {
                return !(!bi(t) || ! function(e) {
                    const t = [];
                    return Object.values(e).forEach((e => {
                        t.push(...hi(e.accounts))
                    })), t
                }(e).includes(t))
            }

            function Ai(e, t, i) {
                return !!mi(i, !1) && function(e, t) {
                    const i = [];
                    return Object.values(e).forEach((e => {
                        hi(e.accounts).includes(t) && i.push(...e.methods)
                    })), i
                }(e, t).includes(i)
            }

            function Ri(e, t, i) {
                return !!mi(i, !1) && function(e, t) {
                    const i = [];
                    return Object.values(e).forEach((e => {
                        hi(e.accounts).includes(t) && i.push(...e.events)
                    })), i
                }(e, t).includes(i)
            }

            function Ti(e, t, i) {
                let s = null;
                const r = function(e) {
                        const t = {};
                        return Object.keys(e).forEach((i => {
                            var s;
                            i.includes(":") ? t[i] = e[i] : null == (s = e[i].chains) || s.forEach((s => {
                                t[s] = {
                                    methods: e[i].methods,
                                    events: e[i].events
                                }
                            }))
                        })), t
                    }(e),
                    n = function(e) {
                        const t = {};
                        return Object.keys(e).forEach((i => {
                            if (i.includes(":")) t[i] = e[i];
                            else {
                                hi(e[i].accounts) ? .forEach((s => {
                                    t[s] = {
                                        accounts: e[i].accounts.filter((e => e.includes(`${s}:`))),
                                        methods: e[i].methods,
                                        events: e[i].events
                                    }
                                }))
                            }
                        })), t
                    }(t),
                    o = Object.keys(r),
                    a = Object.keys(n),
                    c = Ci(Object.keys(e)),
                    h = Ci(Object.keys(t)),
                    l = c.filter((e => !h.includes(e)));
                return l.length && (s = pi("NON_CONFORMING_NAMESPACES", `${i} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${l.toString()}\n      Received: ${Object.keys(t).toString()}`)), Kt(o, a) || (s = pi("NON_CONFORMING_NAMESPACES", `${i} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`)), Object.keys(t).forEach((e => {
                    if (!e.includes(":") || s) return;
                    const r = hi(t[e].accounts);
                    r.includes(e) || (s = pi("NON_CONFORMING_NAMESPACES", `${i} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${r.toString()}`))
                })), o.forEach((e => {
                    s || (Kt(r[e].methods, n[e].methods) ? Kt(r[e].events, n[e].events) || (s = pi("NON_CONFORMING_NAMESPACES", `${i} namespaces events don't satisfy namespace events for ${e}`)) : s = pi("NON_CONFORMING_NAMESPACES", `${i} namespaces methods don't satisfy namespace methods for ${e}`))
                })), s
            }

            function Ci(e) {
                return [...new Set(e.map((e => e.includes(":") ? e.split(":")[0] : e)))]
            }
            var xi = i(36559),
                Ui = i.n(xi),
                Mi = i(85150),
                Li = i(90772),
                ji = i(9107),
                Di = i(38200);
            class ki extends Di.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class zi extends Di.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class $i extends Di.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class qi extends Di.q {
                constructor(e) {
                    super()
                }
            }
            class Hi extends Di.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class Vi extends Di.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            var Ki = i(31050);
            const Bi = "base64url",
                Fi = "did",
                Wi = "key",
                Gi = "base58btc";

            function Ji(e) {
                return Xe(Ye("string" === typeof(t = e) ? t : JSON.stringify(t), "utf8"), Bi);
                var t
            }

            function Yi(e) {
                const t = "z" + Xe(P([Ye("K36", Gi), e]), Gi);
                return [Fi, Wi, t].join(":")
            }

            function Xi(e = (0, _.randomBytes)(32)) {
                return Ki._w(e)
            }
            async function Zi(e, t, i, s, r = (0, ut.fromMiliseconds)(Date.now())) {
                const n = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    o = {
                        iss: Yi(s.publicKey),
                        sub: e,
                        aud: t,
                        iat: r,
                        exp: r + i
                    },
                    a = Ye([Ji((c = {
                        header: n,
                        payload: o
                    }).header), Ji(c.payload)].join("."), "utf8");
                var c;
                return function(e) {
                    return [Ji(e.header), Ji(e.payload), (t = e.signature, Xe(t, Bi))].join(".");
                    var t
                }({
                    header: n,
                    payload: o,
                    signature: Ki.Xx(s.secretKey, a)
                })
            }
            i(43014);
            var Qi = i(46160),
                es = i(56186);
            const ts = "undefined" !== typeof i.g && "undefined" !== typeof i.g.WebSocket ? i.g.WebSocket : "undefined" !== typeof window && "undefined" !== typeof window.WebSocket ? window.WebSocket : i(72030);
            var is = class {
                    constructor(e) {
                        if (this.url = e, this.events = new m.EventEmitter, this.registering = !1, !(0, es.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                        this.url = e
                    }
                    get connected() {
                        return "undefined" !== typeof this.socket
                    }
                    get connecting() {
                        return this.registering
                    }
                    on(e, t) {
                        this.events.on(e, t)
                    }
                    once(e, t) {
                        this.events.once(e, t)
                    }
                    off(e, t) {
                        this.events.off(e, t)
                    }
                    removeListener(e, t) {
                        this.events.removeListener(e, t)
                    }
                    async open(e = this.url) {
                        await this.register(e)
                    }
                    async close() {
                        return new Promise(((e, t) => {
                            "undefined" !== typeof this.socket ? (this.socket.onclose = t => {
                                this.onClose(t), e()
                            }, this.socket.close()) : t(new Error("Connection already closed"))
                        }))
                    }
                    async send(e, t) {
                        "undefined" === typeof this.socket && (this.socket = await this.register());
                        try {
                            this.socket.send("string" === typeof(i = e) ? i : JSON.stringify(i))
                        } catch (s) {
                            this.onError(e.id, s)
                        }
                        var i
                    }
                    register(e = this.url) {
                        if (!(0, es.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                        if (this.registering) {
                            const e = this.events.getMaxListeners();
                            return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise(((e, t) => {
                                this.events.once("register_error", (e => {
                                    this.resetMaxListeners(), t(e)
                                })), this.events.once("open", (() => {
                                    if (this.resetMaxListeners(), "undefined" === typeof this.socket) return t(new Error("WebSocket connection is missing or invalid"));
                                    e(this.socket)
                                }))
                            }))
                        }
                        return this.url = e, this.registering = !0, new Promise(((t, i) => {
                            const s = (0, es.isReactNative)() ? void 0 : {
                                    rejectUnauthorized: !(0, es.isLocalhostUrl)(e)
                                },
                                r = new ts(e, [], s);
                            "undefined" !== typeof window ? r.onerror = e => {
                                const t = e;
                                i(this.emitError(t.error))
                            } : r.on("error", (e => {
                                i(this.emitError(e))
                            })), r.onopen = () => {
                                this.onOpen(r), t(r)
                            }
                        }))
                    }
                    onOpen(e) {
                        e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                    }
                    onClose(e) {
                        this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                    }
                    onPayload(e) {
                        if ("undefined" === typeof e.data) return;
                        const t = "string" === typeof e.data ? function(e) {
                            if ("string" !== typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
                            try {
                                return JSON.parse(e)
                            } catch (t) {
                                return e
                            }
                        }(e.data) : e.data;
                        this.events.emit("payload", t)
                    }
                    onError(e, t) {
                        const i = this.parseError(t),
                            s = i.message || i.toString(),
                            r = (0, es.formatJsonRpcError)(e, s);
                        this.events.emit("payload", r)
                    }
                    parseError(e, t = this.url) {
                        return (0, es.parseConnectionError)(e, t, "WS")
                    }
                    resetMaxListeners() {
                        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                    }
                    emitError(e) {
                        const t = this.parseError(new Error((null === e || void 0 === e ? void 0 : e.message) || `WebSocket connection failed for URL: ${this.url}`));
                        return this.events.emit("register_error", t), t
                    }
                },
                ss = i(72307),
                rs = i.n(ss);
            var ns = function(e, t) {
                    if (e.length >= 255) throw new TypeError("Alphabet too long");
                    for (var i = new Uint8Array(256), s = 0; s < i.length; s++) i[s] = 255;
                    for (var r = 0; r < e.length; r++) {
                        var n = e.charAt(r),
                            o = n.charCodeAt(0);
                        if (255 !== i[o]) throw new TypeError(n + " is ambiguous");
                        i[o] = r
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        h = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function u(e) {
                        if ("string" != typeof e) throw new TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[t]) {
                            for (var s = 0, r = 0; e[t] === c;) s++, t++;
                            for (var n = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(n); e[t];) {
                                var l = i[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var u = 0, p = n - 1;
                                    (0 !== l || u < r) && -1 !== p; p--, u++) l += a * o[p] >>> 0, o[p] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw new Error("Non-zero carry");
                                r = u, t++
                            }
                            if (" " !== e[t]) {
                                for (var d = n - r; d !== n && 0 === o[d];) d++;
                                for (var f = new Uint8Array(s + (n - d)), g = s; d !== n;) f[g++] = o[d++];
                                return f
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var i = 0, s = 0, r = 0, n = t.length; r !== n && 0 === t[r];) r++, i++;
                            for (var o = (n - r) * l + 1 >>> 0, h = new Uint8Array(o); r !== n;) {
                                for (var u = t[r], p = 0, d = o - 1;
                                    (0 !== u || p < s) && -1 !== d; d--, p++) u += 256 * h[d] >>> 0, h[d] = u % a >>> 0, u = u / a >>> 0;
                                if (0 !== u) throw new Error("Non-zero carry");
                                s = p, r++
                            }
                            for (var f = o - s; f !== o && 0 === h[f];) f++;
                            for (var g = c.repeat(i); f < o; ++f) g += e.charAt(h[f]);
                            return g
                        },
                        decodeUnsafe: u,
                        decode: function(e) {
                            var i = u(e);
                            if (i) return i;
                            throw new Error(`Non-${t} character`)
                        }
                    }
                },
                os = ns;
            const as = e => {
                if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                if (e instanceof ArrayBuffer) return new Uint8Array(e);
                if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class cs {
                constructor(e, t, i) {
                    this.name = e, this.prefix = t, this.baseEncode = i
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class hs {
                constructor(e, t, i) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return us(this, e)
                }
            }
            class ls {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return us(this, e)
                }
                decode(e) {
                    const t = e[0],
                        i = this.decoders[t];
                    if (i) return i.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const us = (e, t) => new ls({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class ps {
                constructor(e, t, i, s) {
                    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new cs(e, t, i), this.decoder = new hs(e, t, s)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            const ds = ({
                    name: e,
                    prefix: t,
                    encode: i,
                    decode: s
                }) => new ps(e, t, i, s),
                fs = ({
                    prefix: e,
                    name: t,
                    alphabet: i
                }) => {
                    const {
                        encode: s,
                        decode: r
                    } = os(i, t);
                    return ds({
                        prefix: e,
                        name: t,
                        encode: s,
                        decode: e => as(r(e))
                    })
                },
                gs = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: i,
                    alphabet: s
                }) => ds({
                    prefix: t,
                    name: e,
                    encode: e => ((e, t, i) => {
                        const s = "=" === t[t.length - 1],
                            r = (1 << i) - 1;
                        let n = "",
                            o = 0,
                            a = 0;
                        for (let c = 0; c < e.length; ++c)
                            for (a = a << 8 | e[c], o += 8; o > i;) o -= i, n += t[r & a >> o];
                        if (o && (n += t[r & a << i - o]), s)
                            for (; n.length * i & 7;) n += "=";
                        return n
                    })(e, s, i),
                    decode: t => ((e, t, i, s) => {
                        const r = {};
                        for (let l = 0; l < t.length; ++l) r[t[l]] = l;
                        let n = e.length;
                        for (;
                            "=" === e[n - 1];) --n;
                        const o = new Uint8Array(n * i / 8 | 0);
                        let a = 0,
                            c = 0,
                            h = 0;
                        for (let l = 0; l < n; ++l) {
                            const t = r[e[l]];
                            if (void 0 === t) throw new SyntaxError(`Non-${s} character`);
                            c = c << i | t, a += i, a >= 8 && (a -= 8, o[h++] = 255 & c >> a)
                        }
                        if (a >= i || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
                        return o
                    })(t, s, i, e)
                }),
                ys = ds({
                    prefix: "\0",
                    name: "identity",
                    encode: e => (e => (new TextDecoder).decode(e))(e),
                    decode: e => (e => (new TextEncoder).encode(e))(e)
                });
            var ms = Object.freeze({
                __proto__: null,
                identity: ys
            });
            const ws = gs({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var bs = Object.freeze({
                __proto__: null,
                base2: ws
            });
            const vs = gs({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var _s = Object.freeze({
                __proto__: null,
                base8: vs
            });
            const Es = fs({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var Ss = Object.freeze({
                __proto__: null,
                base10: Es
            });
            const Is = gs({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                Os = gs({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var Ps = Object.freeze({
                __proto__: null,
                base16: Is,
                base16upper: Os
            });
            const Ns = gs({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                As = gs({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                Rs = gs({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Ts = gs({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                Cs = gs({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                xs = gs({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                Us = gs({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                Ms = gs({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                Ls = gs({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var js = Object.freeze({
                __proto__: null,
                base32: Ns,
                base32upper: As,
                base32pad: Rs,
                base32padupper: Ts,
                base32hex: Cs,
                base32hexupper: xs,
                base32hexpad: Us,
                base32hexpadupper: Ms,
                base32z: Ls
            });
            const Ds = fs({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                ks = fs({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var zs = Object.freeze({
                __proto__: null,
                base36: Ds,
                base36upper: ks
            });
            const $s = fs({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                qs = fs({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var Hs = Object.freeze({
                __proto__: null,
                base58btc: $s,
                base58flickr: qs
            });
            const Vs = gs({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                Ks = gs({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Bs = gs({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                Fs = gs({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var Ws = Object.freeze({
                __proto__: null,
                base64: Vs,
                base64pad: Ks,
                base64url: Bs,
                base64urlpad: Fs
            });
            const Gs = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                Js = Gs.reduce(((e, t, i) => (e[i] = t, e)), []),
                Ys = Gs.reduce(((e, t, i) => (e[t.codePointAt(0)] = i, e)), []);
            const Xs = ds({
                prefix: "\ud83d\ude80",
                name: "base256emoji",
                encode: function(e) {
                    return e.reduce(((e, t) => e += Js[t]), "")
                },
                decode: function(e) {
                    const t = [];
                    for (const i of e) {
                        const e = Ys[i.codePointAt(0)];
                        if (void 0 === e) throw new Error(`Non-base256emoji character: ${i}`);
                        t.push(e)
                    }
                    return new Uint8Array(t)
                }
            });
            var Zs = Object.freeze({
                    __proto__: null,
                    base256emoji: Xs
                }),
                Qs = function e(t, i, s) {
                    i = i || [];
                    for (var r = s = s || 0; t >= er;) i[s++] = 255 & t | 128, t /= 128;
                    for (; - 128 & t;) i[s++] = 255 & t | 128, t >>>= 7;
                    return i[s] = 0 | t, e.bytes = s - r + 1, i
                },
                er = Math.pow(2, 31);
            var tr = function e(t, i) {
                var s, r = 0,
                    n = 0,
                    o = i = i || 0,
                    a = t.length;
                do {
                    if (o >= a) throw e.bytes = 0, new RangeError("Could not decode varint");
                    s = t[o++], r += n < 28 ? (127 & s) << n : (127 & s) * Math.pow(2, n), n += 7
                } while (s >= 128);
                return e.bytes = o - i, r
            };
            var ir = Math.pow(2, 7),
                sr = Math.pow(2, 14),
                rr = Math.pow(2, 21),
                nr = Math.pow(2, 28),
                or = Math.pow(2, 35),
                ar = Math.pow(2, 42),
                cr = Math.pow(2, 49),
                hr = Math.pow(2, 56),
                lr = Math.pow(2, 63),
                ur = {
                    encode: Qs,
                    decode: tr,
                    encodingLength: function(e) {
                        return e < ir ? 1 : e < sr ? 2 : e < rr ? 3 : e < nr ? 4 : e < or ? 5 : e < ar ? 6 : e < cr ? 7 : e < hr ? 8 : e < lr ? 9 : 10
                    }
                };
            const pr = (e, t, i = 0) => (ur.encode(e, t, i), t),
                dr = e => ur.encodingLength(e),
                fr = (e, t) => {
                    const i = t.byteLength,
                        s = dr(e),
                        r = s + dr(i),
                        n = new Uint8Array(r + i);
                    return pr(e, n, 0), pr(i, n, s), n.set(t, r), new gr(e, i, t, n)
                };
            class gr {
                constructor(e, t, i, s) {
                    this.code = e, this.size = t, this.digest = i, this.bytes = s
                }
            }
            const yr = ({
                name: e,
                code: t,
                encode: i
            }) => new mr(e, t, i);
            class mr {
                constructor(e, t, i) {
                    this.name = e, this.code = t, this.encode = i
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        const t = this.encode(e);
                        return t instanceof Uint8Array ? fr(this.code, t) : t.then((e => fr(this.code, e)))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const wr = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                br = yr({
                    name: "sha2-256",
                    code: 18,
                    encode: wr("SHA-256")
                }),
                vr = yr({
                    name: "sha2-512",
                    code: 19,
                    encode: wr("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: br,
                sha512: vr
            });
            const _r = as,
                Er = {
                    code: 0,
                    name: "identity",
                    encode: _r,
                    digest: e => fr(0, _r(e))
                };
            Object.freeze({
                __proto__: null,
                identity: Er
            });
            new TextEncoder, new TextDecoder;
            const Sr = { ...ms,
                ...bs,
                ..._s,
                ...Ss,
                ...Ps,
                ...js,
                ...zs,
                ...Hs,
                ...Ws,
                ...Zs
            };

            function Ir(e, t, i, s) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: i
                    },
                    decoder: {
                        decode: s
                    }
                }
            }
            const Or = Ir("utf8", "u", (e => "u" + new TextDecoder("utf8").decode(e)), (e => (new TextEncoder).encode(e.substring(1)))),
                Pr = Ir("ascii", "a", (e => {
                    let t = "a";
                    for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
                    return t
                }), (e => {
                    const t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e)
                    }((e = e.substring(1)).length);
                    for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
                    return t
                })),
                Nr = {
                    utf8: Or,
                    "utf-8": Or,
                    hex: Sr.base16,
                    latin1: Pr,
                    ascii: Pr,
                    binary: Pr,
                    ...Sr
                };
            const Ar = "core",
                Rr = "wc@2:core:",
                Tr = "error",
                Cr = {
                    database: ":memory:"
                },
                xr = "client_ed25519_seed",
                Ur = ut.ONE_DAY,
                Mr = ut.SIX_HOURS,
                Lr = "wss://relay.walletconnect.com",
                jr = "relayer_message",
                Dr = "relayer_connect",
                kr = "relayer_disconnect",
                zr = "relayer_error",
                $r = "relayer_connection_stalled",
                qr = "relayer_transport_closed",
                Hr = "relayer_publish",
                Vr = "payload",
                Kr = "connect",
                Br = "disconnect",
                Fr = "error",
                Wr = ut.ONE_SECOND,
                Gr = "subscription_created",
                Jr = "subscription_deleted",
                Yr = "subscription_sync",
                Xr = "subscription_resubscribed",
                Zr = 1e3 * ut.FIVE_SECONDS,
                Qr = {
                    wc_pairingDelete: {
                        req: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: ut.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: ut.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                en = "history_created",
                tn = "history_updated",
                sn = "history_deleted",
                rn = "history_sync",
                nn = "expirer_created",
                on = "expirer_deleted",
                an = "expirer_expired",
                cn = "expirer_sync";
            class hn {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Rr, this.init = async () => {
                        if (!this.initialized) {
                            const e = await this.getKeyChain();
                            typeof e < "u" && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        const t = this.keychain.get(e);
                        if (typeof t > "u") {
                            const {
                                message: t
                            } = pi("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw new Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, ji.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, Bt(e))
                }
                async getKeyChain() {
                    const e = await this.core.storage.getItem(this.storageKey);
                    return typeof e < "u" ? Ft(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class ln {
                constructor(e, t, i) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
                        this.isInitialized();
                        return Yi(Xi(await this.getClientSeed()).publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        const e = function() {
                            const e = S.Au();
                            return {
                                privateKey: Xe(e.secretKey, bt),
                                publicKey: Xe(e.publicKey, bt)
                            }
                        }();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        const t = Xi(await this.getClientSeed()),
                            i = Et(),
                            s = Ur;
                        return await Zi(i, e, s, t)
                    }, this.generateSharedKey = (e, t, i) => {
                        this.isInitialized();
                        const s = function(e, t) {
                            const i = S.gi(Ye(e, bt), Ye(t, bt));
                            return Xe(new v.t(E.mE, i).expand(32), bt)
                        }(this.getPrivateKey(e), t);
                        return this.setSymKey(s, i)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        const i = t || function(e) {
                            return Xe((0, E.vp)(Ye(e, bt)), bt)
                        }(e);
                        return await this.keychain.set(i, e), i
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, i) => {
                        this.isInitialized();
                        const s = Nt(i),
                            r = "string" === typeof(n = t) ? n : JSON.stringify(n);
                        var n;
                        if (At(s)) {
                            const t = s.senderPublicKey,
                                i = s.receiverPublicKey;
                            e = await this.generateSharedKey(t, i)
                        }
                        const o = this.getSymKey(e),
                            {
                                type: a,
                                senderPublicKey: c
                            } = s;
                        return Ot({
                            type: a,
                            symKey: o,
                            message: r,
                            senderPublicKey: c
                        })
                    }, this.decode = async (e, t, i) => {
                        this.isInitialized();
                        const s = function(e, t) {
                            const i = Pt(e);
                            return Nt({
                                type: It(i.type),
                                senderPublicKey: typeof i.senderPublicKey < "u" ? Xe(i.senderPublicKey, bt) : void 0,
                                receiverPublicKey: t ? .receiverPublicKey
                            })
                        }(t, i);
                        if (At(s)) {
                            const t = s.receiverPublicKey,
                                i = s.senderPublicKey;
                            e = await this.generateSharedKey(t, i)
                        }
                        const r = function(e) {
                            const t = new b.OK(Ye(e.symKey, bt)),
                                {
                                    sealed: i,
                                    iv: s
                                } = Pt(e.encoded),
                                r = t.open(s, i);
                            if (null === r) throw new Error("Failed to decrypt");
                            return Xe(r, _t)
                        }({
                            symKey: this.getSymKey(e),
                            encoded: t
                        });
                        return function(e) {
                            if ("string" !== typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
                            try {
                                return JSON.parse(e)
                            } catch (t) {
                                return e
                            }
                        }(r)
                    }, this.core = e, this.logger = (0, ji.generateChildLogger)(t, this.name), this.keychain = i || new hn(this.core, this.logger)
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                getPayloadType(e) {
                    return It(Pt(e).type)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(xr)
                    } catch {
                        e = Et(), await this.keychain.set(xr, e)
                    }
                    return function(e, t = "utf8") {
                        const i = Nr[t];
                        if (!i) throw new Error(`Unsupported encoding "${t}"`);
                        return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? i.decoder.decode(`${i.prefix}${e}`) : globalThis.Buffer.from(e, "utf8")
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class un extends class {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            } {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Rr, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                const e = await this.getRelayerMessages();
                                typeof e < "u" && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        const i = St(t);
                        let s = this.messages.get(e);
                        return typeof s > "u" && (s = {}), typeof s[i] < "u" || (s[i] = t, this.messages.set(e, s), await this.persist()), i
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => {
                        this.isInitialized();
                        return typeof this.get(e)[St(t)] < "u"
                    }, this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, ji.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, Bt(e))
                }
                async getRelayerMessages() {
                    const e = await this.core.storage.getItem(this.storageKey);
                    return typeof e < "u" ? Ft(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class pn extends $i {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new m.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = 1e4, this.publish = async (e, t, i) => {
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: i
                            }
                        });
                        try {
                            const s = i ? .ttl || Mr,
                                r = ei(i),
                                n = i ? .prompt || !1,
                                o = i ? .tag || 0,
                                a = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: s,
                                        relay: r,
                                        prompt: n,
                                        tag: o
                                    }
                                },
                                c = St(t);
                            this.queue.set(c, a);
                            try {
                                await await Gt(this.rpcPublish(e, t, s, r, n, o), this.publishTimeout), this.relayer.events.emit(Hr, a)
                            } catch {
                                return this.logger.debug("Publishing Payload stalled"), void this.relayer.events.emit($r)
                            }
                            this.onPublish(c, a), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: i
                                }
                            })
                        } catch (s) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(s), s
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, ji.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, i, s, r, n) {
                    var o, a, c, h;
                    const l = {
                        method: ti(s.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: i,
                            prompt: r,
                            tag: n
                        }
                    };
                    return yi(null == (o = l.params) ? void 0 : o.prompt) && (null == (a = l.params) || delete a.prompt), yi(null == (c = l.params) ? void 0 : c.tag) && (null == (h = l.params) || delete h.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: l
                    }), this.relayer.provider.request(l)
                }
                onPublish(e, t) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach((async e => {
                        const {
                            topic: t,
                            message: i,
                            opts: s
                        } = e;
                        await this.publish(t, i, s)
                    }))
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(Li.HEARTBEAT_EVENTS.pulse, (() => {
                        this.checkQueue()
                    }))
                }
            }
            class dn {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        const i = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...i, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") return void this.map.delete(e);
                        if (!this.map.has(e)) return;
                        const i = this.get(e);
                        if (!this.exists(e, t)) return;
                        const s = i.filter((e => e !== t));
                        s.length ? this.map.set(e, s) : this.map.delete(e)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var fn = Object.defineProperty,
                gn = Object.defineProperties,
                yn = Object.getOwnPropertyDescriptors,
                mn = Object.getOwnPropertySymbols,
                wn = Object.prototype.hasOwnProperty,
                bn = Object.prototype.propertyIsEnumerable,
                vn = (e, t, i) => t in e ? fn(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                _n = (e, t) => {
                    for (var i in t || (t = {})) wn.call(t, i) && vn(e, i, t[i]);
                    if (mn)
                        for (var i of mn(t)) bn.call(t, i) && vn(e, i, t[i]);
                    return e
                },
                En = (e, t) => gn(e, yn(t));
            class Sn extends Hi {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new dn, this.events = new m.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Rr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            const i = ei(t),
                                s = {
                                    topic: e,
                                    relay: i
                                };
                            this.pending.set(e, s);
                            const r = await this.rpcSubscribe(e, i);
                            return this.onSubscribe(r, s), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), r
                        } catch (ki) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(ki), ki
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), typeof t ? .id < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise(((t, i) => {
                        const s = new ut.Watch;
                        s.start(this.pendingSubscriptionWatchLabel);
                        const r = setInterval((() => {
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(r), s.stop(this.pendingSubscriptionWatchLabel), t(!0)), s.elapsed(this.pendingSubscriptionWatchLabel) >= Zr && (clearInterval(r), s.stop(this.pendingSubscriptionWatchLabel), i(!1))
                        }), this.pollingInterval)
                    })), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, ji.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let i = !1;
                    try {
                        i = this.getSubscription(e).topic === t
                    } catch {}
                    return i
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    const i = this.topicMap.get(e);
                    await Promise.all(i.map((async i => await this.unsubscribeById(e, i, t))))
                }
                async unsubscribeById(e, t, i) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: i
                        }
                    });
                    try {
                        const s = ei(i);
                        await this.rpcUnsubscribe(e, t, s);
                        const r = di("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, r), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: i
                            }
                        })
                    } catch (s) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s
                    }
                }
                async rpcSubscribe(e, t) {
                    const i = {
                        method: ti(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    });
                    try {
                        await await Gt(this.relayer.provider.request(i), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit($r)
                    }
                    return St(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    const t = {
                        method: ti(e[0].relay.protocol).batchSubscribe,
                        params: {
                            topics: e.map((e => e.topic))
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: t
                    });
                    try {
                        return await await Gt(this.relayer.provider.request(t), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit($r)
                    }
                }
                rpcUnsubscribe(e, t, i) {
                    const s = {
                        method: ti(i.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: s
                    }), this.relayer.provider.request(s)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, En(_n({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach((e => {
                        this.setSubscription(e.id, _n({}, e)), this.pending.delete(e.topic)
                    }))
                }
                async onUnsubscribe(e, t, i) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, _n({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Gr, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    const t = this.subscriptions.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = pi("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    const i = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(Jr, En(_n({}, i), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(Yr)
                }
                async reset() {
                    if (!this.cached.length) return;
                    const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                    for (let t = 0; t < e; t++) {
                        const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                        await this.batchSubscribe(e)
                    }
                    this.events.emit(Xr)
                }
                async restore() {
                    try {
                        const e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            const {
                                message: e
                            } = pi("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    const t = await this.rpcBatchSubscribe(e);
                    this.onBatchSubscribe(t.map(((t, i) => En(_n({}, e[i]), {
                        id: t
                    }))))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (this.relayer.transportExplicitlyClosed) return;
                    const e = [];
                    this.pending.forEach((t => {
                        e.push(t)
                    })), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(Li.HEARTBEAT_EVENTS.pulse, (async () => {
                        await this.checkPending()
                    })), this.relayer.on(Dr, (async () => {
                        await this.onConnect()
                    })), this.relayer.on(kr, (() => {
                        this.onDisconnect()
                    })), this.events.on(Gr, (async e => {
                        const t = Gr;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })), this.events.on(Jr, (async e => {
                        const t = Jr;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise((e => {
                        const t = setInterval((() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }), this.pollingInterval)
                    }))
                }
            }
            var In = Object.defineProperty,
                On = Object.getOwnPropertySymbols,
                Pn = Object.prototype.hasOwnProperty,
                Nn = Object.prototype.propertyIsEnumerable,
                An = (e, t, i) => t in e ? In(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i;
            class Rn extends qi {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new m.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0, ji.generateChildLogger)(e.logger, this.name) : Ui()((0, ji.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new un(this.logger, e.core), this.subscriber = new Sn(this, this.logger), this.publisher = new pn(this, this.logger), this.relayUrl = e ? .relayUrl || Lr, this.projectId = e.projectId, this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.provider = await this.createProvider(), await Promise.all([this.messages.init(), this.transportOpen(), this.subscriber.init()]), this.registerEventListeners(), this.initialized = !0
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, i) {
                    this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    this.isInitialized();
                    let i = "";
                    return await Promise.all([new Promise((t => {
                        this.subscriber.once(Gr, (i => {
                            i.topic === e && t()
                        }))
                    })), new Promise((async s => {
                        i = await this.subscriber.subscribe(e, t), s()
                    }))]), i
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(qr))
                }
                async transportOpen(e) {
                    if (!this.reconnecting) {
                        this.relayUrl = e || this.relayUrl, this.transportExplicitlyClosed = !1, this.reconnecting = !0;
                        try {
                            await Promise.all([new Promise((e => {
                                this.initialized || e(), this.subscriber.once(Xr, (() => {
                                    e()
                                }))
                            })), await Promise.race([new Promise((async e => {
                                await this.provider.connect(), this.removeListener(qr, this.rejectTransportOpen), e()
                            })), new Promise((e => this.once(qr, this.rejectTransportOpen)))])])
                        } catch (t) {
                            if (!/socket hang up/i.test(t.message)) throw t;
                            this.logger.error(t), this.events.emit(qr)
                        } finally {
                            this.reconnecting = !1
                        }
                    }
                }
                async restartTransport(e) {
                    this.transportExplicitlyClosed || (await this.transportClose(), await new Promise((e => setTimeout(e, Wr))), await this.transportOpen(e))
                }
                rejectTransportOpen() {
                    throw new Error("closeTransport called before connection was established")
                }
                async createProvider() {
                    const e = await this.core.crypto.signJWT(this.relayUrl);
                    return new Qi.r(new is(Vt({
                        sdkVersion: "2.4.9",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e
                    })))
                }
                async recordMessageEvent(e) {
                    const {
                        topic: t,
                        message: i
                    } = e;
                    await this.messages.set(t, i)
                }
                async shouldIgnoreMessageEvent(e) {
                    const {
                        topic: t,
                        message: i
                    } = e;
                    return !(await this.subscriber.isSubscribed(t)) || this.messages.has(t, i)
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), (0, es.isJsonRpcRequest)(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        const t = e.params,
                            {
                                topic: i,
                                message: s,
                                publishedAt: r
                            } = t.data,
                            n = {
                                topic: i,
                                message: s,
                                publishedAt: r
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((e, t) => {
                            for (var i in t || (t = {})) Pn.call(t, i) && An(e, i, t[i]);
                            if (On)
                                for (var i of On(t)) Nn.call(t, i) && An(e, i, t[i]);
                            return e
                        })({
                            type: "event",
                            event: t.id
                        }, n)), this.events.emit(t.id, n), await this.acknowledgePayload(e), await this.onMessageEvent(n)
                    }
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(jr, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    const t = (0, es.formatJsonRpcResult)(e.id, !0);
                    await this.provider.connection.send(t)
                }
                registerEventListeners() {
                    this.provider.on(Vr, (e => this.onProviderPayload(e))), this.provider.on(Kr, (() => {
                        this.events.emit(Dr)
                    })), this.provider.on(Br, (() => {
                        this.events.emit(kr), this.attemptToReconnect()
                    })), this.provider.on(Fr, (e => this.events.emit(zr, e))), this.events.on($r, (async () => {
                        await this.restartTransport()
                    }))
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || setTimeout((async () => {
                        await this.transportOpen()
                    }), (0, ut.toMiliseconds)(Wr))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            var Tn = Object.defineProperty,
                Cn = Object.getOwnPropertySymbols,
                xn = Object.prototype.hasOwnProperty,
                Un = Object.prototype.propertyIsEnumerable,
                Mn = (e, t, i) => t in e ? Tn(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                Ln = (e, t) => {
                    for (var i in t || (t = {})) xn.call(t, i) && Mn(e, i, t[i]);
                    if (Cn)
                        for (var i of Cn(t)) Un.call(t, i) && Mn(e, i, t[i]);
                    return e
                };
            class jn extends class {
                constructor(e, t, i, s) {
                    this.core = e, this.logger = t, this.name = i
                }
            } {
                constructor(e, t, i, s = Rr, r) {
                    super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Rr, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => {
                            ! function(e) {
                                var t;
                                return null == (t = e ? .proposer) ? void 0 : t.publicKey
                            }(e) ? function(e) {
                                return e ? .topic
                            }(e) ? this.map.set(e.topic, e): this.getKey && null !== e && !yi(e) && this.map.set(this.getKey(e), e): this.map.set(e.id, e)
                        })), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter((t => Object.keys(e).every((i => rs()(t[i], e[i]))))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        const i = Ln(Ln({}, this.getData(e)), t);
                        this.map.set(e, i), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, ji.generateChildLogger)(t, this.name), this.storagePrefix = s, this.getKey = r
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    const t = this.map.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = pi("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), new Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        const e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            const {
                                message: e
                            } = pi("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), new Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Dn {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(w()), this.initialized = !1, this.storagePrefix = Rr, this.ignoredPayloadTypes = [1], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async () => {
                        this.isInitialized();
                        const e = Et(),
                            t = await this.core.crypto.setSymKey(e),
                            i = Xt(ut.FIVE_MINUTES),
                            s = {
                                protocol: "irn"
                            },
                            r = {
                                topic: t,
                                expiry: i,
                                relay: s,
                                active: !1
                            },
                            n = ci({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: t,
                                symKey: e,
                                relay: s
                            });
                        return await this.pairings.set(t, r), await this.core.relayer.subscribe(t), this.core.expirer.set(t, i), {
                            topic: t,
                            uri: n
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        const {
                            topic: t,
                            symKey: i,
                            relay: s
                        } = function(e) {
                            const t = e.indexOf(":"),
                                i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                                s = e.substring(0, t),
                                r = e.substring(t + 1, i).split("@"),
                                n = typeof i < "u" ? e.substring(i) : "",
                                o = ft.parse(n);
                            return {
                                protocol: s,
                                topic: r[0],
                                version: parseInt(r[1], 10),
                                symKey: o.symKey,
                                relay: ai(o)
                            }
                        }(e.uri);
                        if (this.pairings.keys.includes(t)) throw new Error(`Pairing already exists: ${t}`);
                        if (this.core.crypto.hasKeys(t)) throw new Error(`Keychain already exists: ${t}`);
                        const r = Xt(ut.FIVE_MINUTES),
                            n = {
                                topic: t,
                                relay: s,
                                expiry: r,
                                active: !1
                            };
                        return await this.pairings.set(t, n), await this.core.crypto.setSymKey(i, t), await this.core.relayer.subscribe(t, {
                            relay: s
                        }), this.core.expirer.set(t, r), e.activatePairing && await this.activate({
                            topic: t
                        }), n
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        const t = Xt(ut.THIRTY_DAYS);
                        await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        }), this.core.expirer.set(e, t)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        const {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            const e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: i,
                                    resolve: s,
                                    reject: r
                                } = Wt();
                            this.events.once(Qt("pairing_ping", e), (({
                                error: e
                            }) => {
                                e ? r(e) : s()
                            })), await i()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        const {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", di("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, i) => {
                        const s = (0, es.formatJsonRpcRequest)(t, i),
                            r = await this.core.crypto.encode(e, s),
                            n = Qr[t].req;
                        return this.core.history.set(e, s), await this.core.relayer.publish(e, r, n), s.id
                    }, this.sendResult = async (e, t, i) => {
                        const s = (0, es.formatJsonRpcResult)(e, i),
                            r = await this.core.crypto.encode(t, s),
                            n = await this.core.history.get(t, e),
                            o = Qr[n.request.method].res;
                        await this.core.relayer.publish(t, r, o), await this.core.history.resolve(s)
                    }, this.sendError = async (e, t, i) => {
                        const s = (0, es.formatJsonRpcError)(e, i),
                            r = await this.core.crypto.encode(t, s),
                            n = await this.core.history.get(t, e),
                            o = Qr[n.request.method] ? Qr[n.request.method].res : Qr.unregistered_method.res;
                        await this.core.relayer.publish(t, r, o), await this.core.history.resolve(s)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, di("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        const e = this.pairings.getAll().filter((e => Zt(e.expiry)));
                        await Promise.all(e.map((e => this.deletePairing(e.topic))))
                    }, this.onRelayEventRequest = e => {
                        const {
                            topic: t,
                            payload: i
                        } = e, s = i.method;
                        if (this.pairings.keys.includes(t)) switch (s) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, i);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, i);
                            default:
                                return this.onUnknownRpcMethodRequest(t, i)
                        }
                    }, this.onRelayEventResponse = async e => {
                        const {
                            topic: t,
                            payload: i
                        } = e, s = (await this.core.history.get(t, i.id)).request.method;
                        if (this.pairings.keys.includes(t)) {
                            if ("wc_pairingPing" === s) return this.onPairingPingResponse(t, i);
                            return this.onUnknownRpcMethodResponse(s)
                        }
                    }, this.onPairingPingRequest = async (e, t) => {
                        const {
                            id: i
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(i, e, !0), this.events.emit("pairing_ping", {
                                id: i,
                                topic: e
                            })
                        } catch (s) {
                            await this.sendError(i, e, s), this.logger.error(s)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        const {
                            id: i
                        } = t;
                        setTimeout((() => {
                            (0, es.isJsonRpcResult)(t) ? this.events.emit(Qt("pairing_ping", i), {}): (0, es.isJsonRpcError)(t) && this.events.emit(Qt("pairing_ping", i), {
                                error: t.error
                            })
                        }), 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        const {
                            id: i
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit("pairing_delete", {
                                id: i,
                                topic: e
                            })
                        } catch (s) {
                            await this.sendError(i, e, s), this.logger.error(s)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        const {
                            id: i,
                            method: s
                        } = t;
                        try {
                            if (this.registeredMethods.includes(s)) return;
                            const t = di("WC_METHOD_UNSUPPORTED", s);
                            await this.sendError(i, e, t), this.logger.error(t)
                        } catch (r) {
                            await this.sendError(i, e, r), this.logger.error(r)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error(di("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw new Error(t)
                        }
                        if (! function(e) {
                                if (mi(e, !1)) try {
                                    return typeof new URL(e) < "u"
                                } catch {
                                    return !1
                                }
                                return !1
                            }(e.uri)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw new Error(t)
                        }
                    }, this.isValidPing = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!mi(e, !1)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw new Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            const {
                                message: t
                            } = pi("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw new Error(t)
                        }
                        if (Zt(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            const {
                                message: t
                            } = pi("EXPIRED", `pairing topic: ${e}`);
                            throw new Error(t)
                        }
                    }, this.core = e, this.logger = (0, ji.generateChildLogger)(t, this.name), this.pairings = new jn(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(jr, (async e => {
                        const {
                            topic: t,
                            message: i
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
                        const s = await this.core.crypto.decode(t, i);
                        (0, es.isJsonRpcRequest)(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({
                            topic: t,
                            payload: s
                        })) : (0, es.isJsonRpcResponse)(s) && (await this.core.history.resolve(s), this.onRelayEventResponse({
                            topic: t,
                            payload: s
                        }))
                    }))
                }
                registerExpirerEvents() {
                    this.core.expirer.on(an, (async e => {
                        const {
                            topic: t
                        } = Yt(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
                            topic: t
                        }))
                    }))
                }
            }
            class kn extends zi {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new m.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Rr, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.records.set(e.id, e))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, i) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: i
                            }), this.records.has(t.id)) return;
                        const s = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: i
                        };
                        this.records.set(s.id, s), this.events.emit(en, s)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        const t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = (0, es.isJsonRpcError)(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(tn, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach((i => {
                            if (i.topic === e) {
                                if (typeof t < "u" && i.id !== t) return;
                                this.records.delete(i.id), this.events.emit(sn, i)
                            }
                        }))
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, ji.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const e = [];
                    return this.values.forEach((t => {
                        if (typeof t.response < "u") return;
                        const i = {
                            topic: t.topic,
                            request: (0, es.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(i)
                    })), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    const t = this.records.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = pi("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(rn)
                }
                async restore() {
                    try {
                        const e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            const {
                                message: e
                            } = pi("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), new Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(en, (e => {
                        const t = en;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    })), this.events.on(tn, (e => {
                        const t = tn;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    })), this.events.on(sn, (e => {
                        const t = sn;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class zn extends Vi {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new m.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Rr, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.expirations.set(e.target, e))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            const t = this.formatTarget(e);
                            return typeof this.getExpiration(t) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        const i = this.formatTarget(e),
                            s = {
                                target: i,
                                expiry: t
                            };
                        this.expirations.set(i, s), this.checkExpiry(i, s), this.events.emit(nn, {
                            target: i,
                            expiration: s
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        const t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            const t = this.formatTarget(e),
                                i = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(on, {
                                target: t,
                                expiration: i
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, ji.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return function(e) {
                        return Jt("topic", e)
                    }(e);
                    if ("number" == typeof e) return function(e) {
                        return Jt("id", e)
                    }(e);
                    const {
                        message: t
                    } = pi("UNKNOWN_TYPE", "Target type: " + typeof e);
                    throw new Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(cn)
                }
                async restore() {
                    try {
                        const e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            const {
                                message: e
                            } = pi("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), new Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    const t = this.expirations.get(e);
                    if (!t) {
                        const {
                            message: t
                        } = pi("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), new Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    const {
                        expiry: i
                    } = t;
                    (0, ut.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(an, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach(((e, t) => this.checkExpiry(t, e)))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(Li.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(nn, (e => {
                        const t = nn;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })), this.events.on(an, (e => {
                        const t = an;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })), this.events.on(on, (e => {
                        const t = on;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            var $n = Object.defineProperty,
                qn = Object.getOwnPropertySymbols,
                Hn = Object.prototype.hasOwnProperty,
                Vn = Object.prototype.propertyIsEnumerable,
                Kn = (e, t, i) => t in e ? $n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                Bn = (e, t) => {
                    for (var i in t || (t = {})) Hn.call(t, i) && Kn(e, i, t[i]);
                    if (qn)
                        for (var i of qn(t)) Vn.call(t, i) && Kn(e, i, t[i]);
                    return e
                };
            class Fn extends ki {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = Ar, this.events = new m.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || Lr;
                    const t = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : Ui()((0, ji.getDefaultLoggerOptions)({
                        level: e ? .logger || Tr
                    }));
                    this.logger = (0, ji.generateChildLogger)(t, this.name), this.heartbeat = new Li.HeartBeat, this.crypto = new ln(this, this.logger, e ? .keychain), this.history = new kn(this, this.logger), this.expirer = new zn(this, this.logger), this.storage = null != e && e.storage ? e.storage : new Mi.ZP(Bn(Bn({}, Cr), e ? .storageOptions)), this.relayer = new Rn({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new Dn(this, this.logger)
                }
                static async init(e) {
                    const t = new Fn(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            const Wn = Fn,
                Gn = "client",
                Jn = `wc@2:${Gn}:`,
                Yn = Gn,
                Xn = "error",
                Zn = "Proposal expired",
                Qn = ut.SEVEN_DAYS,
                eo = {
                    wc_sessionPropose: {
                        req: {
                            ttl: ut.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: ut.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: ut.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: ut.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: ut.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: ut.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: ut.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: ut.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: ut.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: ut.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: ut.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                to = {
                    min: ut.FIVE_MINUTES,
                    max: ut.SEVEN_DAYS
                };
            var io = Object.defineProperty,
                so = Object.defineProperties,
                ro = Object.getOwnPropertyDescriptors,
                no = Object.getOwnPropertySymbols,
                oo = Object.prototype.hasOwnProperty,
                ao = Object.prototype.propertyIsEnumerable,
                co = (e, t, i) => t in e ? io(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                ho = (e, t) => {
                    for (var i in t || (t = {})) oo.call(t, i) && co(e, i, t[i]);
                    if (no)
                        for (var i of no(t)) ao.call(t, i) && co(e, i, t[i]);
                    return e
                },
                lo = (e, t) => so(e, ro(t));
            class uo extends class {
                constructor(e) {
                    this.client = e
                }
            } {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(w()), this.initialized = !1, this.ignoredPayloadTypes = [1], this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
                            methods: Object.keys(eo)
                        }), this.initialized = !0)
                    }, this.connect = async e => {
                        this.isInitialized();
                        const t = lo(ho({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        const {
                            pairingTopic: i,
                            requiredNamespaces: s,
                            optionalNamespaces: r,
                            sessionProperties: n,
                            relays: o
                        } = t;
                        let a, c = i,
                            h = !1;
                        if (c && (h = this.client.core.pairing.pairings.get(c).active), !c || !h) {
                            const {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            c = e, a = t
                        }
                        const l = await this.client.core.crypto.generateKeyPair(),
                            u = ho({
                                requiredNamespaces: s,
                                optionalNamespaces: r,
                                relays: o ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                }
                            }, n && {
                                sessionProperties: n
                            }),
                            {
                                reject: p,
                                resolve: d,
                                done: f
                            } = Wt(ut.FIVE_MINUTES, Zn);
                        if (this.events.once(Qt("session_connect"), (async ({
                                error: e,
                                session: t
                            }) => {
                                if (e) p(e);
                                else if (t) {
                                    t.self.publicKey = l;
                                    const e = lo(ho({}, t), {
                                        requiredNamespaces: t.requiredNamespaces,
                                        optionalNamespaces: t.optionalNamespaces
                                    });
                                    await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), c && await this.client.core.pairing.updateMetadata({
                                        topic: c,
                                        metadata: t.peer.metadata
                                    }), d(e)
                                }
                            })), !c) {
                            const {
                                message: e
                            } = pi("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                            throw new Error(e)
                        }
                        const g = await this.sendRequest(c, "wc_sessionPropose", u),
                            y = Xt(ut.FIVE_MINUTES);
                        return await this.setProposal(g, ho({
                            id: g,
                            expiry: y
                        }, u)), {
                            uri: a,
                            approval: f
                        }
                    }, this.pair = async e => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        this.isInitialized(), await this.isValidApprove(e);
                        const {
                            id: t,
                            relayProtocol: i,
                            namespaces: s,
                            sessionProperties: r
                        } = e, n = this.client.proposal.get(t);
                        let {
                            pairingTopic: o,
                            proposer: a,
                            requiredNamespaces: c,
                            optionalNamespaces: h
                        } = n;
                        gi(c) || (c = function(e, t) {
                            const i = Ii(e, t);
                            if (i) throw new Error(i.message);
                            const s = {};
                            for (const [r, n] of Object.entries(e)) s[r] = {
                                methods: n.methods,
                                events: n.events,
                                chains: n.accounts.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`))
                            };
                            return s
                        }(s, "approve()"));
                        const l = await this.client.core.crypto.generateKeyPair(),
                            u = a.publicKey,
                            p = await this.client.core.crypto.generateSharedKey(l, u);
                        o && t && (await this.client.core.pairing.updateMetadata({
                            topic: o,
                            metadata: a.metadata
                        }), await this.sendResult(t, o, {
                            relay: {
                                protocol: i ? ? "irn"
                            },
                            responderPublicKey: l
                        }), await this.client.proposal.delete(t, di("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: o
                        }));
                        const d = ho({
                            relay: {
                                protocol: i ? ? "irn"
                            },
                            namespaces: s,
                            requiredNamespaces: c,
                            optionalNamespaces: h,
                            controller: {
                                publicKey: l,
                                metadata: this.client.metadata
                            },
                            expiry: Xt(Qn)
                        }, r && {
                            sessionProperties: r
                        });
                        await this.client.core.relayer.subscribe(p);
                        const f = await this.sendRequest(p, "wc_sessionSettle", d),
                            {
                                done: g,
                                resolve: y,
                                reject: m
                            } = Wt();
                        this.events.once(Qt("session_approve", f), (({
                            error: e
                        }) => {
                            e ? m(e) : y(this.client.session.get(p))
                        }));
                        const w = lo(ho({}, d), {
                            topic: p,
                            acknowledged: !1,
                            self: d.controller,
                            peer: {
                                publicKey: a.publicKey,
                                metadata: a.metadata
                            },
                            controller: l
                        });
                        return await this.client.session.set(p, w), await this.setExpiry(p, Xt(Qn)), {
                            topic: p,
                            acknowledged: g
                        }
                    }, this.reject = async e => {
                        this.isInitialized(), await this.isValidReject(e);
                        const {
                            id: t,
                            reason: i
                        } = e, {
                            pairingTopic: s
                        } = this.client.proposal.get(t);
                        s && (await this.sendError(t, s, i), await this.client.proposal.delete(t, di("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        this.isInitialized(), await this.isValidUpdate(e);
                        const {
                            topic: t,
                            namespaces: i
                        } = e, s = await this.sendRequest(t, "wc_sessionUpdate", {
                            namespaces: i
                        }), {
                            done: r,
                            resolve: n,
                            reject: o
                        } = Wt();
                        return this.events.once(Qt("session_update", s), (({
                            error: e
                        }) => {
                            e ? o(e) : n()
                        })), await this.client.session.update(t, {
                            namespaces: i
                        }), {
                            acknowledged: r
                        }
                    }, this.extend = async e => {
                        this.isInitialized(), await this.isValidExtend(e);
                        const {
                            topic: t
                        } = e, i = await this.sendRequest(t, "wc_sessionExtend", {}), {
                            done: s,
                            resolve: r,
                            reject: n
                        } = Wt();
                        return this.events.once(Qt("session_extend", i), (({
                            error: e
                        }) => {
                            e ? n(e) : r()
                        })), await this.setExpiry(t, Xt(Qn)), {
                            acknowledged: s
                        }
                    }, this.request = async e => {
                        this.isInitialized(), await this.isValidRequest(e);
                        const {
                            chainId: t,
                            request: i,
                            topic: s,
                            expiry: r
                        } = e, n = await this.sendRequest(s, "wc_sessionRequest", {
                            request: i,
                            chainId: t
                        }, r), {
                            done: o,
                            resolve: a,
                            reject: c
                        } = Wt(r);
                        return this.events.once(Qt("session_request", n), (({
                            error: e,
                            result: t
                        }) => {
                            e ? c(e) : a(t)
                        })), this.client.events.emit("session_request_sent", {
                            topic: s,
                            request: i,
                            chainId: t
                        }), await o()
                    }, this.respond = async e => {
                        this.isInitialized(), await this.isValidRespond(e);
                        const {
                            topic: t,
                            response: i
                        } = e, {
                            id: s
                        } = i;
                        (0, es.isJsonRpcResult)(i) ? await this.sendResult(s, t, i.result): (0, es.isJsonRpcError)(i) && await this.sendError(s, t, i.error), this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        })
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        const {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            const e = await this.sendRequest(t, "wc_sessionPing", {}),
                                {
                                    done: i,
                                    resolve: s,
                                    reject: r
                                } = Wt();
                            this.events.once(Qt("session_ping", e), (({
                                error: e
                            }) => {
                                e ? r(e) : s()
                            })), await i()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        this.isInitialized(), await this.isValidEmit(e);
                        const {
                            topic: t,
                            event: i,
                            chainId: s
                        } = e;
                        await this.sendRequest(t, "wc_sessionEvent", {
                            event: i,
                            chainId: s
                        })
                    }, this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        const {
                            topic: t
                        } = e;
                        this.client.session.keys.includes(t) ? (await this.sendRequest(t, "wc_sessionDelete", di("USER_DISCONNECTED")), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter((t => function(e, t) {
                        const {
                            requiredNamespaces: i
                        } = t, s = Object.keys(e.namespaces), r = Object.keys(i);
                        let n = !0;
                        return !!Kt(r, s) && (s.forEach((t => {
                            const {
                                accounts: s,
                                methods: r,
                                events: o
                            } = e.namespaces[t], a = hi(s), c = i[t];
                            (!Kt(mt(t, c), a) || !Kt(c.methods, r) || !Kt(c.events, o)) && (n = !1)
                        })), n)
                    }(t, e)))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.deleteSession = async (e, t) => {
                        const {
                            self: i
                        } = this.client.session.get(e);
                        await this.client.core.relayer.unsubscribe(e), await Promise.all([this.client.session.delete(e, di("USER_DISCONNECTED")), this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, di("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async (e, t, i = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), i ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
                    }, this.setPendingSessionRequest = async e => {
                        const t = eo.wc_sessionRequest.req.ttl,
                            {
                                id: i,
                                topic: s,
                                params: r
                            } = e;
                        await this.client.pendingRequest.set(i, {
                            id: i,
                            topic: s,
                            params: r
                        }), t && this.client.core.expirer.set(i, Xt(t))
                    }, this.sendRequest = async (e, t, i, s) => {
                        const r = (0, es.formatJsonRpcRequest)(t, i),
                            n = await this.client.core.crypto.encode(e, r),
                            o = eo[t].req;
                        return s && (o.ttl = s), this.client.core.history.set(e, r), this.client.core.relayer.publish(e, n, o), r.id
                    }, this.sendResult = async (e, t, i) => {
                        const s = (0, es.formatJsonRpcResult)(e, i),
                            r = await this.client.core.crypto.encode(t, s),
                            n = await this.client.core.history.get(t, e),
                            o = eo[n.request.method].res;
                        this.client.core.relayer.publish(t, r, o), await this.client.core.history.resolve(s)
                    }, this.sendError = async (e, t, i) => {
                        const s = (0, es.formatJsonRpcError)(e, i),
                            r = await this.client.core.crypto.encode(t, s),
                            n = await this.client.core.history.get(t, e),
                            o = eo[n.request.method].res;
                        this.client.core.relayer.publish(t, r, o), await this.client.core.history.resolve(s)
                    }, this.cleanup = async () => {
                        const e = [],
                            t = [];
                        this.client.session.getAll().forEach((t => {
                            Zt(t.expiry) && e.push(t.topic)
                        })), this.client.proposal.getAll().forEach((e => {
                            Zt(e.expiry) && t.push(e.id)
                        })), await Promise.all([...e.map((e => this.deleteSession(e))), ...t.map((e => this.deleteProposal(e)))])
                    }, this.onRelayEventRequest = e => {
                        const {
                            topic: t,
                            payload: i
                        } = e, s = i.method;
                        switch (s) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, i);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, i);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, i);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, i);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, i);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, i);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, i);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, i);
                            default:
                                return this.client.logger.info(`Unsupported request method ${s}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        const {
                            topic: t,
                            payload: i
                        } = e, s = (await this.client.core.history.get(t, i.id)).request.method;
                        switch (s) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, i);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, i);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, i);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, i);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, i);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, i);
                            default:
                                return this.client.logger.info(`Unsupported response method ${s}`)
                        }
                    }, this.onSessionProposeRequest = async (e, t) => {
                        const {
                            params: i,
                            id: s
                        } = t;
                        try {
                            this.isValidConnect(ho({}, t.params));
                            const r = Xt(ut.FIVE_MINUTES),
                                n = ho({
                                    id: s,
                                    pairingTopic: e,
                                    expiry: r
                                }, i);
                            await this.setProposal(s, n), this.client.events.emit("session_proposal", {
                                id: s,
                                params: n
                            })
                        } catch (r) {
                            await this.sendError(s, e, r), this.client.logger.error(r)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        const {
                            id: i
                        } = t;
                        if ((0, es.isJsonRpcResult)(t)) {
                            const {
                                result: s
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: s
                            });
                            const r = this.client.proposal.get(i);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: r
                            });
                            const n = r.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: n
                            });
                            const o = s.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            const a = await this.client.core.crypto.generateSharedKey(n, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            const c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else(0, es.isJsonRpcError)(t) && (await this.client.proposal.delete(i, di("USER_DISCONNECTED")), this.events.emit(Qt("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        const {
                            id: i,
                            params: s
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(s);
                            const {
                                relay: i,
                                controller: r,
                                expiry: n,
                                namespaces: o,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                sessionProperties: h
                            } = t.params, l = ho({
                                topic: e,
                                relay: i,
                                expiry: n,
                                namespaces: o,
                                acknowledged: !0,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                controller: r.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: r.publicKey,
                                    metadata: r.metadata
                                }
                            }, h && {
                                sessionProperties: h
                            });
                            await this.sendResult(t.id, e, !0), this.events.emit(Qt("session_connect"), {
                                session: l
                            })
                        } catch (r) {
                            await this.sendError(i, e, r), this.client.logger.error(r)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        const {
                            id: i
                        } = t;
                        (0, es.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit(Qt("session_approve", i), {})) : (0, es.isJsonRpcError)(t) && (await this.client.session.delete(e, di("USER_DISCONNECTED")), this.events.emit(Qt("session_approve", i), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        const {
                            params: i,
                            id: s
                        } = t;
                        try {
                            this.isValidUpdate(ho({
                                topic: e
                            }, i)), await this.client.session.update(e, {
                                namespaces: i.namespaces
                            }), await this.sendResult(s, e, !0), this.client.events.emit("session_update", {
                                id: s,
                                topic: e,
                                params: i
                            })
                        } catch (r) {
                            await this.sendError(s, e, r), this.client.logger.error(r)
                        }
                    }, this.onSessionUpdateResponse = (e, t) => {
                        const {
                            id: i
                        } = t;
                        (0, es.isJsonRpcResult)(t) ? this.events.emit(Qt("session_update", i), {}): (0, es.isJsonRpcError)(t) && this.events.emit(Qt("session_update", i), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        const {
                            id: i
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, Xt(Qn)), await this.sendResult(i, e, !0), this.client.events.emit("session_extend", {
                                id: i,
                                topic: e
                            })
                        } catch (s) {
                            await this.sendError(i, e, s), this.client.logger.error(s)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        const {
                            id: i
                        } = t;
                        (0, es.isJsonRpcResult)(t) ? this.events.emit(Qt("session_extend", i), {}): (0, es.isJsonRpcError)(t) && this.events.emit(Qt("session_extend", i), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        const {
                            id: i
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(i, e, !0), this.client.events.emit("session_ping", {
                                id: i,
                                topic: e
                            })
                        } catch (s) {
                            await this.sendError(i, e, s), this.client.logger.error(s)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        const {
                            id: i
                        } = t;
                        setTimeout((() => {
                            (0, es.isJsonRpcResult)(t) ? this.events.emit(Qt("session_ping", i), {}): (0, es.isJsonRpcError)(t) && this.events.emit(Qt("session_ping", i), {
                                error: t.error
                            })
                        }), 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        const {
                            id: i
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), this.client.core.relayer.once(Hr, (async () => {
                                await this.deleteSession(e)
                            })), await this.sendResult(i, e, !0), this.client.events.emit("session_delete", {
                                id: i,
                                topic: e
                            })
                        } catch (s) {
                            await this.sendError(i, e, s), this.client.logger.error(s)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        const {
                            id: i,
                            params: s
                        } = t;
                        try {
                            this.isValidRequest(ho({
                                topic: e
                            }, s)), await this.setPendingSessionRequest({
                                id: i,
                                topic: e,
                                params: s
                            }), this.client.events.emit("session_request", {
                                id: i,
                                topic: e,
                                params: s
                            })
                        } catch (r) {
                            await this.sendError(i, e, r), this.client.logger.error(r)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        const {
                            id: i
                        } = t;
                        (0, es.isJsonRpcResult)(t) ? this.events.emit(Qt("session_request", i), {
                            result: t.result
                        }): (0, es.isJsonRpcError)(t) && this.events.emit(Qt("session_request", i), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        const {
                            id: i,
                            params: s
                        } = t;
                        try {
                            this.isValidEmit(ho({
                                topic: e
                            }, s)), this.client.events.emit("session_event", {
                                id: i,
                                topic: e,
                                params: s
                            })
                        } catch (r) {
                            await this.sendError(i, e, r), this.client.logger.error(r)
                        }
                    }, this.isValidConnect = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw new Error(t)
                        }
                        const {
                            pairingTopic: t,
                            requiredNamespaces: i,
                            optionalNamespaces: s,
                            sessionProperties: r,
                            relays: n
                        } = e;
                        if (yi(t) || await this.isValidPairingTopic(t), ! function(e, t) {
                                let i = !1;
                                return t && !e ? i = !0 : e && fi(e) && e.length && e.forEach((e => {
                                    i = Oi(e)
                                })), i
                            }(n, !0)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `connect() relays: ${n}`);
                            throw new Error(e)
                        }!yi(i) && 0 !== gi(i) && this.validateNamespaces(i, "requiredNamespaces"), !yi(s) && 0 !== gi(s) && this.validateNamespaces(s, "optionalNamespaces"), yi(r) || this.validateSessionProps(r, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        const i = function(e, t, i) {
                            let s = null;
                            if (e && gi(e)) {
                                const i = Si(e, t);
                                i && (s = i);
                                const r = _i(e, t);
                                r && (s = r)
                            } else s = pi("MISSING_OR_INVALID", `${t}, ${i} should be an object with data`);
                            return s
                        }(e, "connect()", t);
                        if (i) throw new Error(i.message)
                    }, this.isValidApprove = async e => {
                        if (!Pi(e)) throw new Error(pi("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        const {
                            id: t,
                            namespaces: i,
                            relayProtocol: s,
                            sessionProperties: r
                        } = e;
                        await this.isValidProposalId(t);
                        const n = this.client.proposal.get(t),
                            o = Ii(i, "approve()");
                        if (o) throw new Error(o.message);
                        const a = Ti(n.requiredNamespaces, i, "approve()");
                        if (a) throw new Error(a.message);
                        if (!mi(s, !0)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
                            throw new Error(e)
                        }
                        yi(r) || this.validateSessionProps(r, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            id: t,
                            reason: i
                        } = e;
                        if (await this.isValidProposalId(t), ! function(e) {
                                return !(!e || "object" != typeof e || !e.code || !wi(e.code, !1) || !e.message || !mi(e.message, !1))
                            }(i)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
                            throw new Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            relay: t,
                            controller: i,
                            namespaces: s,
                            expiry: r
                        } = e;
                        if (!Oi(t)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(e)
                        }
                        const n = function(e, t) {
                            let i = null;
                            return mi(e ? .publicKey, !1) || (i = pi("MISSING_OR_INVALID", `${t} controller public key should be a string`)), i
                        }(i, "onSessionSettleRequest()");
                        if (n) throw new Error(n.message);
                        const o = Ii(s, "onSessionSettleRequest()");
                        if (o) throw new Error(o.message);
                        if (Zt(r)) {
                            const {
                                message: e
                            } = pi("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            namespaces: i
                        } = e;
                        await this.isValidSessionTopic(t);
                        const s = this.client.session.get(t),
                            r = Ii(i, "update()");
                        if (r) throw new Error(r.message);
                        const n = Ti(s.requiredNamespaces, i, "update()");
                        if (n) throw new Error(n.message)
                    }, this.isValidExtend = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            request: i,
                            chainId: s,
                            expiry: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        const {
                            namespaces: n
                        } = this.client.session.get(t);
                        if (!Ni(n, s)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `request() chainId: ${s}`);
                            throw new Error(e)
                        }
                        if (! function(e) {
                                return !(yi(e) || !mi(e.method, !1))
                            }(i)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
                            throw new Error(e)
                        }
                        if (!Ai(n, s, i.method)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `request() method: ${i.method}`);
                            throw new Error(e)
                        }
                        if (r && ! function(e, t) {
                                return wi(e, !1) && e <= t.max && e >= t.min
                            }(r, to)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `request() expiry: ${r}. Expiry must be a number (in seconds) between ${to.min} and ${to.max}`);
                            throw new Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            response: i
                        } = e;
                        if (await this.isValidSessionTopic(t), ! function(e) {
                                return !(yi(e) || yi(e.result) && yi(e.error) || !wi(e.id, !1) || !mi(e.jsonrpc, !1))
                            }(i)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                            throw new Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t,
                            event: i,
                            chainId: s
                        } = e;
                        await this.isValidSessionTopic(t);
                        const {
                            namespaces: r
                        } = this.client.session.get(t);
                        if (!Ni(r, s)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `emit() chainId: ${s}`);
                            throw new Error(e)
                        }
                        if (! function(e) {
                                return !(yi(e) || !mi(e.name, !1))
                            }(i)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                            throw new Error(e)
                        }
                        if (!Ri(r, s, i.name)) {
                            const {
                                message: e
                            } = pi("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                            throw new Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!Pi(e)) {
                            const {
                                message: t
                            } = pi("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw new Error(t)
                        }
                        const {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach((e => {
                            if (!mi(e, !1)) {
                                const {
                                    message: i
                                } = pi("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw new Error(i)
                            }
                        }))
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pi("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(jr, (async e => {
                        const {
                            topic: t,
                            message: i
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i))) return;
                        const s = await this.client.core.crypto.decode(t, i);
                        (0, es.isJsonRpcRequest)(s) ? (this.client.core.history.set(t, s), this.onRelayEventRequest({
                            topic: t,
                            payload: s
                        })) : (0, es.isJsonRpcResponse)(s) && (await this.client.core.history.resolve(s), this.onRelayEventResponse({
                            topic: t,
                            payload: s
                        }))
                    }))
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(an, (async e => {
                        const {
                            topic: t,
                            id: i
                        } = Yt(e.target);
                        if (i && this.client.pendingRequest.keys.includes(i)) return await this.deletePendingSessionRequest(i, pi("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                            topic: t
                        })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", {
                            id: i
                        }))
                    }))
                }
                isValidPairingTopic(e) {
                    if (!mi(e, !1)) {
                        const {
                            message: t
                        } = pi("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        const {
                            message: t
                        } = pi("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if (Zt(this.client.core.pairing.pairings.get(e).expiry)) {
                        const {
                            message: t
                        } = pi("EXPIRED", `pairing topic: ${e}`);
                        throw new Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!mi(e, !1)) {
                        const {
                            message: t
                        } = pi("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        const {
                            message: t
                        } = pi("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if (Zt(this.client.session.get(e).expiry)) {
                        await this.deleteSession(e);
                        const {
                            message: t
                        } = pi("EXPIRED", `session topic: ${e}`);
                        throw new Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else {
                        if (!this.client.core.pairing.pairings.keys.includes(e)) {
                            if (mi(e, !1)) {
                                const {
                                    message: t
                                } = pi("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                                throw new Error(t)
                            } {
                                const {
                                    message: t
                                } = pi("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                                throw new Error(t)
                            }
                        }
                        this.isValidPairingTopic(e)
                    }
                }
                async isValidProposalId(e) {
                    if ("number" != typeof e) {
                        const {
                            message: t
                        } = pi("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        const {
                            message: t
                        } = pi("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if (Zt(this.client.proposal.get(e).expiry)) {
                        await this.deleteProposal(e);
                        const {
                            message: t
                        } = pi("EXPIRED", `proposal id: ${e}`);
                        throw new Error(t)
                    }
                }
            }
            class po extends jn {
                constructor(e, t) {
                    super(e, t, "proposal", Jn), this.core = e, this.logger = t
                }
            }
            class fo extends jn {
                constructor(e, t) {
                    super(e, t, "session", Jn), this.core = e, this.logger = t
                }
            }
            class go extends jn {
                constructor(e, t) {
                    super(e, t, "request", Jn), this.core = e, this.logger = t
                }
            }
            class yo extends class {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            } {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = Yn, this.events = new m.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (t) {
                            throw this.logger.error(t.message), t
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || Yn, this.metadata = e ? .metadata || (0, dt.D)() || {
                        name: "",
                        description: "",
                        url: "",
                        icons: [""]
                    };
                    const t = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : Ui()((0, ji.getDefaultLoggerOptions)({
                        level: e ? .logger || Xn
                    }));
                    this.core = e ? .core || new Wn(e), this.logger = (0, ji.generateChildLogger)(t, this.name), this.session = new fo(this.core, this.logger), this.proposal = new po(this.core, this.logger), this.pendingRequest = new go(this.core, this.logger), this.engine = new uo(this)
                }
                static async init(e) {
                    const t = new yo(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, ji.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success")
                    } catch (ki) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(ki.message), ki
                    }
                }
            }
            var mo = i(2077);
            const wo = "error",
                bo = "wc@2:universal_provider:",
                vo = "default_chain_changed";

            function _o(e, t, i) {
                let s;
                const r = Eo(e);
                return t.rpcMap && (s = t.rpcMap[r]), s || (s = `https://rpc.walletconnect.com/v1?chainId=eip155:${r}&projectId=${i}`), s
            }

            function Eo(e) {
                return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e)
            }
            const So = (e, t) => {
                const i = s => {
                    s.request !== t.request || s.topic !== t.topic || (e.events.removeListener("session_request_sent", i), function() {
                        if (typeof window < "u") try {
                            const e = window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
                            if (e) {
                                const t = JSON.parse(e);
                                window.open(t.href, "_self", "noreferrer noopener")
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }())
                };
                e.on("session_request_sent", i)
            };
            class Io {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.client = e.client, this.events = e.events, this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    var t;
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return this.handleSwitchChain(e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0"), null;
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? (So(this.client, e), await this.client.request(e)) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    const i = Eo(e);
                    if (!this.httpProviders[i]) {
                        const e = t || _o(`${this.name}:${i}`, this.namespace, this.client.core.projectId);
                        if (!e) throw new Error(`No RPC url provided for chainId: ${i}`);
                        this.setHttpProvider(i, e)
                    }
                    this.chainId = i, this.events.emit(vo, `${this.name}:${i}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    const i = t || _o(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    return typeof i > "u" ? void 0 : new Qi.r(new mo.k(i))
                }
                setHttpProvider(e, t) {
                    const i = this.createHttpProvider(e, t);
                    i && (this.httpProviders[e] = i)
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        const i = Eo(t);
                        e[i] = this.createHttpProvider(i)
                    })), e
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || []
                }
                getHttpProvider() {
                    const e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                handleSwitchChain(e) {
                    const t = parseInt(e, 16);
                    (function(e, t) {
                        if (!t.includes(e)) throw new Error(`Chain '${e}' not approved. Please use one of the following: ${t.toString()}`)
                    })(`${this.name}:${t}`, this.namespace.chains), this.setDefaultChain(`${t}`)
                }
            }
            class Oo {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? (So(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (!this.httpProviders[e]) {
                        const i = t || _o(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, i)
                    }
                    this.chainId = e, this.events.emit(vo, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        e[t] = this.createHttpProvider(t)
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const i = this.createHttpProvider(e, t);
                    i && (this.httpProviders[e] = i)
                }
                createHttpProvider(e, t) {
                    const i = t || _o(e, this.namespace, this.client.core.projectId);
                    return typeof i > "u" ? void 0 : new Qi.r(new mo.Z(i))
                }
            }
            class Po {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? (So(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        const i = t || _o(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, i)
                    }
                    this.events.emit(vo, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        e[t] = this.createHttpProvider(t)
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const i = this.createHttpProvider(e, t);
                    i && (this.httpProviders[e] = i)
                }
                createHttpProvider(e, t) {
                    const i = t || _o(e, this.namespace, this.client.core.projectId);
                    return typeof i > "u" ? void 0 : new Qi.r(new mo.Z(i))
                }
            }
            class No {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? (So(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        const i = t || this.getCardanoRPCUrl(e);
                        if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, i)
                    }
                    this.events.emit(vo, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach((t => {
                        const i = this.getCardanoRPCUrl(t);
                        e[t] = this.createHttpProvider(t, i)
                    })), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    const t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    const i = this.createHttpProvider(e, t);
                    i && (this.httpProviders[e] = i)
                }
                createHttpProvider(e, t) {
                    const i = t || this.getCardanoRPCUrl(e);
                    return typeof i > "u" ? void 0 : new Qi.r(new mo.Z(i))
                }
            }
            var Ao = Object.defineProperty,
                Ro = Object.defineProperties,
                To = Object.getOwnPropertyDescriptors,
                Co = Object.getOwnPropertySymbols,
                xo = Object.prototype.hasOwnProperty,
                Uo = Object.prototype.propertyIsEnumerable,
                Mo = (e, t, i) => t in e ? Ao(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                Lo = (e, t) => {
                    for (var i in t || (t = {})) xo.call(t, i) && Mo(e, i, t[i]);
                    if (Co)
                        for (var i of Co(t)) Uo.call(t, i) && Mo(e, i, t[i]);
                    return e
                },
                jo = (e, t) => Ro(e, To(t));
            class Do {
                constructor(e) {
                    this.events = new(w()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.providerOpts = e, this.logger = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : Ui()((0, ji.getDefaultLoggerOptions)({
                        level: e ? .logger || wo
                    }))
                }
                static async init(e) {
                    const t = new Do(e);
                    return await t.initialize(), t
                }
                async request(e, t) {
                    const [i, s] = this.validateChain(t);
                    if (!this.session) throw new Error("Please call connect() before request()");
                    return await this.getProvider(i).request({
                        request: Lo({}, e),
                        chainId: `${i}:${s}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(e, t, i) {
                    this.request(e, i).then((e => t(null, e))).catch((e => t(e, void 0)))
                }
                async enable() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw new Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: di("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                        const {
                            uri: i,
                            approval: s
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        i && (this.uri = i, this.events.emit("display_uri", i)), await s().then((e => {
                            this.session = e
                        })).catch((e => {
                            if (e.message !== Zn) throw e;
                            t++
                        }))
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        const [i, s] = this.validateChain(e);
                        this.getProvider(i).setDefaultChain(s, t)
                    } catch (i) {
                        if (!/Please call connect/.test(i.message)) throw i
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    const t = this.client.pairing.getAll();
                    if (fi(t)) {
                        for (const i of t) e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        const e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await yo.init({
                        logger: this.providerOpts.logger || wo,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    Object.keys(this.namespaces).forEach((e => {
                        var t, i, s;
                        const r = (null == (t = this.session) ? void 0 : t.namespaces[e].accounts) || [],
                            n = function(e) {
                                return e.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`))
                            }(r),
                            o = jo(Lo({}, Object.assign(this.namespaces[e], null != (s = null == (i = this.optionalNamespaces) ? void 0 : i[e]) ? s : {})), {
                                accounts: r,
                                chains: n
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new Io({
                                    client: this.client,
                                    namespace: o,
                                    events: this.events
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new Oo({
                                    client: this.client,
                                    namespace: o,
                                    events: this.events
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new Po({
                                    client: this.client,
                                    namespace: o,
                                    events: this.events
                                });
                                break;
                            case "polkadot":
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new No({
                                    client: this.client,
                                    namespace: o,
                                    events: this.events
                                })
                        }
                    }))
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", (e => {
                        this.events.emit("session_ping", e)
                    })), this.client.on("session_event", (e => {
                        const {
                            params: t
                        } = e, {
                            event: i
                        } = t;
                        "accountsChanged" === i.name ? this.events.emit("accountsChanged", i.data) : "chainChanged" === i.name ? this.onChainChanged(t.chainId) : this.events.emit(i.name, i.data), this.events.emit("session_event", e)
                    })), this.client.on("session_update", (({
                        topic: e,
                        params: t
                    }) => {
                        var i;
                        const {
                            namespaces: s
                        } = t, r = null == (i = this.client) ? void 0 : i.session.get(e);
                        this.session = jo(Lo({}, r), {
                            namespaces: s
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    })), this.client.on("session_delete", (async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", jo(Lo({}, di("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    })), this.on(vo, (e => {
                        this.onChainChanged(e, !0)
                    }))
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach((e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    }))
                }
                setNamespaces(e) {
                    const {
                        namespaces: t,
                        optionalNamespaces: i,
                        sessionProperties: s
                    } = e;
                    if (!t || !Object.keys(t).length) throw new Error("Namespaces must be not empty");
                    this.namespaces = t, this.optionalNamespaces = i, this.sessionProperties = s, this.persist("namespaces", t), this.persist("optionalNamespaces", i)
                }
                validateChain(e) {
                    const [t, i] = e ? .split(":") || ["", ""];
                    if (t && !Object.keys(this.namespaces).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && i) return [t, i];
                    const s = Object.keys(this.namespaces)[0];
                    return [s, this.rpcProviders[s].getDefaultChain()]
                }
                async requestAccounts() {
                    const [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    const [i, s] = this.validateChain(e);
                    t || this.getProvider(i).setDefaultChain(s), this.namespaces[i].defaultChain = s, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", s)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${bo}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${bo}/${e}`)
                }
            }
            const ko = Do,
                zo = ["eth_sendTransaction", "personal_sign"],
                $o = ["eth_accounts", "eth_requestAccounts", "eth_call", "eth_getBalance", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                qo = ["chainChanged", "accountsChanged"],
                Ho = ["message", "disconnect", "connect"];
            var Vo = Object.defineProperty,
                Ko = Object.defineProperties,
                Bo = Object.getOwnPropertyDescriptors,
                Fo = Object.getOwnPropertySymbols,
                Wo = Object.prototype.hasOwnProperty,
                Go = Object.prototype.propertyIsEnumerable,
                Jo = (e, t, i) => t in e ? Vo(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                Yo = (e, t) => {
                    for (var i in t || (t = {})) Wo.call(t, i) && Jo(e, i, t[i]);
                    if (Fo)
                        for (var i of Fo(t)) Go.call(t, i) && Jo(e, i, t[i]);
                    return e
                },
                Xo = (e, t) => Ko(e, Bo(t));

            function Zo(e) {
                return Number(e[0].split(":")[1])
            }

            function Qo(e) {
                return `0x${e.toString(16)}`
            }
            class ea {
                constructor() {
                    this.events = new m.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    const t = new ea;
                    return await t.initialize(e), t
                }
                async request(e) {
                    return await this.signer.request(e, this.formatChainId(this.chainId))
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    const {
                        required: t,
                        optional: i
                    } = function(e) {
                        const {
                            chains: t,
                            optionalChains: i,
                            methods: s,
                            optionalMethods: r,
                            events: n,
                            optionalEvents: o,
                            rpcMap: a
                        } = e;
                        if (!fi(t)) throw new Error("Invalid chains");
                        const c = t,
                            h = s || zo,
                            l = n || qo,
                            u = {
                                chains: c,
                                methods: h,
                                events: l,
                                rpcMap: {
                                    [Zo(c)]: a[Zo(c)]
                                }
                            },
                            p = n ? .filter((e => !qo.includes(e))),
                            d = s ? .filter((e => !zo.includes(e)));
                        return i || o || r || null != p && p.length || null != d && d.length ? {
                            required: u,
                            optional: {
                                chains: [...new Set(p ? .length && d ? .length || !i ? c.concat(i || []) : i)],
                                methods: [...new Set(h.concat(r || []))],
                                events: [...new Set(l.concat(o || []))],
                                rpcMap: a
                            }
                        } : {
                            required: u
                        }
                    }(this.rpc);
                    try {
                        const s = await new Promise((async (s, r) => {
                            var n;
                            this.rpc.showQrModal && (null == (n = this.modal) || n.subscribeModal((e => {
                                !e.open && !this.signer.session && (this.signer.abortPairingAttempt(), r(new Error("Connection request reset. Please try again.")))
                            }))), await this.signer.connect(Xo(Yo({
                                namespaces: {
                                    [this.namespace]: t
                                }
                            }, i && {
                                optionalNamespaces: {
                                    [this.namespace]: i
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then((e => {
                                s(e)
                            })).catch((e => {
                                r(new Error(e.message))
                            }))
                        }));
                        if (!s) return;
                        this.setChainIds(this.rpc.chains);
                        const r = function(e, t = []) {
                            const i = [];
                            return Object.keys(e).forEach((s => {
                                if (t.length && !t.includes(s)) return;
                                const r = e[s];
                                i.push(...r.accounts)
                            })), i
                        }(s.namespaces, [this.namespace]);
                        this.setAccounts(r), this.events.emit("connect", {
                            chainId: Qo(this.chainId)
                        })
                    } catch (s) {
                        throw this.signer.logger.error(s), s
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", (e => {
                        const {
                            params: t
                        } = e, {
                            event: i
                        } = t;
                        "accountsChanged" === i.name ? (this.accounts = this.parseAccounts(i.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === i.name ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data), this.events.emit("session_event", e)
                    })), this.signer.on("chainChanged", (e => {
                        const t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", Qo(this.chainId)), this.persist()
                    })), this.signer.on("session_update", (e => {
                        this.events.emit("session_update", e)
                    })), this.signer.on("session_delete", (e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", Xo(Yo({}, di("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    })), this.signer.on("display_uri", (e => {
                        var t, i;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (i = this.modal) || i.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    }))
                }
                setHttpProvider(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    const t = e.filter((e => this.isCompatibleChainId(e))).map((e => this.parseChainId(e)));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", Qo(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        const t = this.parseChainId(e);
                        this.chainId = t, this.setHttpProvider(t)
                    }
                }
                parseAccountId(e) {
                    const [t, i, s] = e.split(":");
                    return {
                        chainId: `${t}:${i}`,
                        address: s
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter((e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId)).map((e => this.parseAccountId(e).address)), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, i;
                    return {
                        chains: (null == (t = e.chains) ? void 0 : t.map((e => this.formatChainId(e)))) || [`${this.namespace}:1`],
                        optionalChains: e.optionalChains ? e.optionalChains.map((e => this.formatChainId(e))) : void 0,
                        methods: e ? .methods || zo,
                        events: e ? .events || qo,
                        optionalMethods: e ? .optionalMethods || [],
                        optionalEvents: e ? .optionalEvents || [],
                        rpcMap: e ? .rpcMap || this.buildRpcMap(e.chains.concat(e.optionalChains || []), e.projectId),
                        showQrModal: null == (i = e ? .showQrModal) || i,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    const i = {};
                    return e.forEach((e => {
                        i[e] = this.getRpcUrl(e, t)
                    })), i
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = Zo(this.rpc.chains), this.signer = await ko.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        const {
                            Web3Modal: e
                        } = await i.e(6648).then(i.bind(i, 36648));
                        this.modal = new e({
                            walletConnectVersion: 2,
                            projectId: this.rpc.projectId,
                            standaloneChains: this.rpc.chains
                        })
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    const {
                        chains: t,
                        optionalChains: i,
                        rpcMap: s
                    } = e;
                    t && fi(t) && (this.rpc.chains = t.map((e => this.formatChainId(e))), t.forEach((e => {
                        this.rpc.rpcMap[e] = s ? .[e] || this.getRpcUrl(e)
                    }))), i && fi(i) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i ? .map((e => this.formatChainId(e))), i.forEach((e => {
                        this.rpc.rpcMap[e] = s ? .[e] || this.getRpcUrl(e)
                    })))
                }
                getRpcUrl(e, t) {
                    var i;
                    return (null == (i = this.rpc.rpcMap) ? void 0 : i[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`);
                    this.setChainIds(e ? [this.formatChainId(e)] : this.session.namespaces[this.namespace].accounts), this.setAccounts(this.session.namespaces[this.namespace].accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map((e => this.parseAccount(e)))
                }
            }
            const ta = ea
        },
        38200: function(e, t, i) {
            "use strict";
            i.d(t, {
                q: function() {
                    return s
                }
            });
            class s {}
        },
        30997: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                IEvents: function() {
                    return s.q
                }
            });
            var s = i(38200)
        },
        32568: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            const s = i(66736);
            t.HEARTBEAT_INTERVAL = s.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        53401: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            i(70655).__exportStar(i(32568), t)
        },
        38969: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            const s = i(70655),
                r = i(17187),
                n = i(66736),
                o = i(1614),
                a = i(53401);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new r.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null === e || void 0 === e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return s.__awaiter(this, void 0, void 0, (function*() {
                        const t = new c(e);
                        return yield t.init(), t
                    }))
                }
                init() {
                    return s.__awaiter(this, void 0, void 0, (function*() {
                        yield this.initialize()
                    }))
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return s.__awaiter(this, void 0, void 0, (function*() {
                        this.intervalRef = setInterval((() => this.pulse()), n.toMiliseconds(this.interval))
                    }))
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        90772: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = i(70655);
            s.__exportStar(i(38969), t), s.__exportStar(i(1614), t), s.__exportStar(i(53401), t)
        },
        44174: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            const s = i(30997);
            class r extends s.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = r
        },
        1614: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            i(70655).__exportStar(i(44174), t)
        },
        72030: function(e) {
            "use strict";
            e.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        85150: function(e, t, i) {
            "use strict";
            const s = i(70655),
                r = i(63954),
                n = s.__importDefault(i(30653)),
                o = i(59728);
            class a {
                constructor() {
                    this.localStorage = n.default
                }
                getKeys() {
                    return s.__awaiter(this, void 0, void 0, (function*() {
                        return Object.keys(this.localStorage)
                    }))
                }
                getEntries() {
                    return s.__awaiter(this, void 0, void 0, (function*() {
                        return Object.entries(this.localStorage).map(o.parseEntry)
                    }))
                }
                getItem(e) {
                    return s.__awaiter(this, void 0, void 0, (function*() {
                        const t = this.localStorage.getItem(e);
                        if (null !== t) return r.safeJsonParse(t)
                    }))
                }
                setItem(e, t) {
                    return s.__awaiter(this, void 0, void 0, (function*() {
                        this.localStorage.setItem(e, r.safeJsonStringify(t))
                    }))
                }
                removeItem(e) {
                    return s.__awaiter(this, void 0, void 0, (function*() {
                        this.localStorage.removeItem(e)
                    }))
                }
            }
            t.ZP = a
        },
        30653: function(e, t, i) {
            "use strict";
            ! function() {
                let t;

                function s() {}
                t = s, t.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, t.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, t.prototype.removeItem = function(e) {
                    delete this[e]
                }, t.prototype.clear = function() {
                    const e = this;
                    Object.keys(e).forEach((function(t) {
                        e[t] = void 0, delete e[t]
                    }))
                }, t.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, t.prototype.__defineGetter__("length", (function() {
                    return Object.keys(this).length
                })), "undefined" !== typeof i.g && i.g.localStorage ? e.exports = i.g.localStorage : "undefined" !== typeof window && window.localStorage ? e.exports = window.localStorage : e.exports = new s
            }()
        },
        59728: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = i(70655);
            s.__exportStar(i(39076), t), s.__exportStar(i(20496), t)
        },
        39076: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IKeyValueStorage = void 0;
            t.IKeyValueStorage = class {}
        },
        20496: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseEntry = void 0;
            const s = i(63954);
            t.parseEntry = function(e) {
                var t;
                return [e[0], s.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : "")]
            }
        },
        65727: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        9107: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            const s = i(70655),
                r = s.__importDefault(i(36559));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), s.__exportStar(i(65727), t), s.__exportStar(i(58048), t)
        },
        58048: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            const s = i(65727);

            function r(e, t = s.PINO_CUSTOM_CONTEXT_KEY) {
                return e[t] || ""
            }

            function n(e, t, i = s.PINO_CUSTOM_CONTEXT_KEY) {
                return e[i] = t, e
            }

            function o(e, t = s.PINO_CUSTOM_CONTEXT_KEY) {
                let i = "";
                return i = "undefined" === typeof e.bindings ? r(e, t) : e.bindings().context || "", i
            }

            function a(e, t, i = s.PINO_CUSTOM_CONTEXT_KEY) {
                const r = o(e, i);
                return r.trim() ? `${r}/${t}` : t
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null === e || void 0 === e ? void 0 : e.level) || s.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = r, t.setBrowserLoggerContext = n, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t, i = s.PINO_CUSTOM_CONTEXT_KEY) {
                const r = a(e, t, i);
                return n(e.child({
                    context: r
                }), r, i)
            }
        },
        61882: function() {},
        43014: function() {},
        36900: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = i(70655);
            s.__exportStar(i(46869), t), s.__exportStar(i(88033), t)
        },
        46869: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
        },
        88033: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        },
        66736: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = i(70655);
            s.__exportStar(i(44273), t), s.__exportStar(i(47001), t), s.__exportStar(i(52939), t), s.__exportStar(i(36900), t)
        },
        52939: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            i(70655).__exportStar(i(88766), t)
        },
        88766: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IWatch = void 0;
            t.IWatch = class {}
        },
        83207: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromMiliseconds = t.toMiliseconds = void 0;
            const s = i(36900);
            t.toMiliseconds = function(e) {
                return e * s.ONE_THOUSAND
            }, t.fromMiliseconds = function(e) {
                return Math.floor(e / s.ONE_THOUSAND)
            }
        },
        69475: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.delay = void 0, t.delay = function(e) {
                return new Promise((t => {
                    setTimeout((() => {
                        t(!0)
                    }), e)
                }))
            }
        },
        44273: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = i(70655);
            s.__exportStar(i(69475), t), s.__exportStar(i(83207), t)
        },
        47001: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Watch = void 0;
            class i {
                constructor() {
                    this.timestamps = new Map
                }
                start(e) {
                    if (this.timestamps.has(e)) throw new Error(`Watch already started for label: ${e}`);
                    this.timestamps.set(e, {
                        started: Date.now()
                    })
                }
                stop(e) {
                    const t = this.get(e);
                    if ("undefined" !== typeof t.elapsed) throw new Error(`Watch already stopped for label: ${e}`);
                    const i = Date.now() - t.started;
                    this.timestamps.set(e, {
                        started: t.started,
                        elapsed: i
                    })
                }
                get(e) {
                    const t = this.timestamps.get(e);
                    if ("undefined" === typeof t) throw new Error(`No timestamp found for label: ${e}`);
                    return t
                }
                elapsed(e) {
                    const t = this.get(e);
                    return t.elapsed || Date.now() - t.started
                }
            }
            t.Watch = i, t.default = i
        },
        66667: function(e, t) {
            "use strict";

            function i(e) {
                let t;
                return "undefined" !== typeof window && "undefined" !== typeof window[e] && (t = window[e]), t
            }

            function s(e) {
                const t = i(e);
                if (!t) throw new Error(`${e} is not defined in Window`);
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = i, t.getFromWindowOrThrow = s, t.getDocumentOrThrow = function() {
                return s("document")
            }, t.getDocument = function() {
                return i("document")
            }, t.getNavigatorOrThrow = function() {
                return s("navigator")
            }, t.getNavigator = function() {
                return i("navigator")
            }, t.getLocationOrThrow = function() {
                return s("location")
            }, t.getLocation = function() {
                return i("location")
            }, t.getCryptoOrThrow = function() {
                return s("crypto")
            }, t.getCrypto = function() {
                return i("crypto")
            }, t.getLocalStorageOrThrow = function() {
                return s("localStorage")
            }, t.getLocalStorage = function() {
                return i("localStorage")
            }
        },
        58790: function(e, t, i) {
            "use strict";
            t.D = void 0;
            const s = i(66667);
            t.D = function() {
                let e, t;
                try {
                    e = s.getDocumentOrThrow(), t = s.getLocationOrThrow()
                } catch (n) {
                    return null
                }

                function i(...t) {
                    const i = e.getElementsByTagName("meta");
                    for (let e = 0; e < i.length; e++) {
                        const s = i[e],
                            r = ["itemprop", "property", "name"].map((e => s.getAttribute(e))).filter((e => !!e && t.includes(e)));
                        if (r.length && r) {
                            const e = s.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                const r = function() {
                    let t = i("name", "og:site_name", "og:title", "twitter:title");
                    return t || (t = e.title), t
                }();
                return {
                    description: i("description", "og:description", "twitter:description", "keywords"),
                    url: t.origin,
                    icons: function() {
                        const i = e.getElementsByTagName("link"),
                            s = [];
                        for (let e = 0; e < i.length; e++) {
                            const r = i[e],
                                n = r.getAttribute("rel");
                            if (n && n.toLowerCase().indexOf("icon") > -1) {
                                const e = r.getAttribute("href");
                                if (e)
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let i = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) i += e;
                                        else {
                                            const s = t.pathname.split("/");
                                            s.pop();
                                            i += s.join("/") + "/" + e
                                        }
                                        s.push(i)
                                    } else if (0 === e.indexOf("//")) {
                                    const i = t.protocol + e;
                                    s.push(i)
                                } else s.push(e)
                            }
                        }
                        return s
                    }(),
                    name: r
                }
            }
        },
        66151: function(e, t, i) {
            "use strict";
            const s = i(70610),
                r = i(44020),
                n = i(80500),
                o = i(92806),
                a = Symbol("encodeFragmentIdentifier");

            function c(e) {
                if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function h(e, t) {
                return t.encode ? t.strict ? s(e) : encodeURIComponent(e) : e
            }

            function l(e, t) {
                return t.decode ? r(e) : e
            }

            function u(e) {
                return Array.isArray(e) ? e.sort() : "object" === typeof e ? u(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
            }

            function p(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function d(e) {
                const t = (e = p(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function f(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                c((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                const i = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, i, s) => {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === s[e] && (s[e] = {}), s[e][t[1]] = i) : s[e] = i
                                };
                            case "bracket":
                                return (e, i, s) => {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== s[e] ? s[e] = [].concat(s[e], i) : s[e] = [i] : s[e] = i
                                };
                            case "colon-list-separator":
                                return (e, i, s) => {
                                    t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== s[e] ? s[e] = [].concat(s[e], i) : s[e] = [i] : s[e] = i
                                };
                            case "comma":
                            case "separator":
                                return (t, i, s) => {
                                    const r = "string" === typeof i && i.includes(e.arrayFormatSeparator),
                                        n = "string" === typeof i && !r && l(i, e).includes(e.arrayFormatSeparator);
                                    i = n ? l(i, e) : i;
                                    const o = r || n ? i.split(e.arrayFormatSeparator).map((t => l(t, e))) : null === i ? i : l(i, e);
                                    s[t] = o
                                };
                            case "bracket-separator":
                                return (t, i, s) => {
                                    const r = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !r) return void(s[t] = i ? l(i, e) : i);
                                    const n = null === i ? [] : i.split(e.arrayFormatSeparator).map((t => l(t, e)));
                                    void 0 !== s[t] ? s[t] = [].concat(s[t], n) : s[t] = n
                                };
                            default:
                                return (e, t, i) => {
                                    void 0 !== i[e] ? i[e] = [].concat(i[e], t) : i[e] = t
                                }
                        }
                    }(t),
                    s = Object.create(null);
                if ("string" !== typeof e) return s;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return s;
                for (const r of e.split("&")) {
                    if ("" === r) continue;
                    let [e, o] = n(t.decode ? r.replace(/\+/g, " ") : r, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : l(o, t), i(l(e, t), o, s)
                }
                for (const r of Object.keys(s)) {
                    const e = s[r];
                    if ("object" === typeof e && null !== e)
                        for (const i of Object.keys(e)) e[i] = f(e[i], t);
                    else s[r] = f(e, t)
                }
                return !1 === t.sort ? s : (!0 === t.sort ? Object.keys(s).sort() : Object.keys(s).sort(t.sort)).reduce(((e, t) => {
                    const i = s[t];
                    return Boolean(i) && "object" === typeof i && !Array.isArray(i) ? e[t] = u(i) : e[t] = i, e
                }), Object.create(null))
            }
            t.extract = d, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                const i = i => {
                        return t.skipNull && (null === (s = e[i]) || void 0 === s) || t.skipEmptyString && "" === e[i];
                        var s
                    },
                    s = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (i, s) => {
                                    const r = i.length;
                                    return void 0 === s || e.skipNull && null === s || e.skipEmptyString && "" === s ? i : null === s ? [...i, [h(t, e), "[", r, "]"].join("")] : [...i, [h(t, e), "[", h(r, e), "]=", h(s, e)].join("")]
                                };
                            case "bracket":
                                return t => (i, s) => void 0 === s || e.skipNull && null === s || e.skipEmptyString && "" === s ? i : null === s ? [...i, [h(t, e), "[]"].join("")] : [...i, [h(t, e), "[]=", h(s, e)].join("")];
                            case "colon-list-separator":
                                return t => (i, s) => void 0 === s || e.skipNull && null === s || e.skipEmptyString && "" === s ? i : null === s ? [...i, [h(t, e), ":list="].join("")] : [...i, [h(t, e), ":list=", h(s, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return i => (s, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? s : (r = null === r ? "" : r, 0 === s.length ? [
                                        [h(i, e), t, h(r, e)].join("")
                                    ] : [
                                        [s, h(r, e)].join(e.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return t => (i, s) => void 0 === s || e.skipNull && null === s || e.skipEmptyString && "" === s ? i : null === s ? [...i, h(t, e)] : [...i, [h(t, e), "=", h(s, e)].join("")]
                        }
                    }(t),
                    r = {};
                for (const o of Object.keys(e)) i(o) || (r[o] = e[o]);
                const n = Object.keys(r);
                return !1 !== t.sort && n.sort(t.sort), n.map((i => {
                    const r = e[i];
                    return void 0 === r ? "" : null === r ? h(i, t) : Array.isArray(r) ? 0 === r.length && "bracket-separator" === t.arrayFormat ? h(i, t) + "[]" : r.reduce(s(i), []).join("&") : h(i, t) + "=" + h(r, t)
                })).filter((e => e.length > 0)).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                const [i, s] = n(e, "#");
                return Object.assign({
                    url: i.split("?")[0] || "",
                    query: g(d(e), t)
                }, t && t.parseFragmentIdentifier && s ? {
                    fragmentIdentifier: l(s, t)
                } : {})
            }, t.stringifyUrl = (e, i) => {
                i = Object.assign({
                    encode: !0,
                    strict: !0,
                    [a]: !0
                }, i);
                const s = p(e.url).split("?")[0] || "",
                    r = t.extract(e.url),
                    n = t.parse(r, {
                        sort: !1
                    }),
                    o = Object.assign(n, e.query);
                let c = t.stringify(o, i);
                c && (c = `?${c}`);
                let l = function(e) {
                    let t = "";
                    const i = e.indexOf("#");
                    return -1 !== i && (t = e.slice(i)), t
                }(e.url);
                return e.fragmentIdentifier && (l = `#${i[a]?h(e.fragmentIdentifier,i):e.fragmentIdentifier}`), `${s}${c}${l}`
            }, t.pick = (e, i, s) => {
                s = Object.assign({
                    parseFragmentIdentifier: !0,
                    [a]: !1
                }, s);
                const {
                    url: r,
                    query: n,
                    fragmentIdentifier: c
                } = t.parseUrl(e, s);
                return t.stringifyUrl({
                    url: r,
                    query: o(n, i),
                    fragmentIdentifier: c
                }, s)
            }, t.exclude = (e, i, s) => {
                const r = Array.isArray(i) ? e => !i.includes(e) : (e, t) => !i(e, t);
                return t.pick(e, r, s)
            }
        },
        92806: function(e) {
            "use strict";
            e.exports = function(e, t) {
                for (var i = {}, s = Object.keys(e), r = Array.isArray(t), n = 0; n < s.length; n++) {
                    var o = s[n],
                        a = e[o];
                    (r ? -1 !== t.indexOf(o) : t(o, a, e)) && (i[o] = a)
                }
                return i
            }
        },
        72307: function(e, t, i) {
            e = i.nmd(e);
            var s = "__lodash_hash_undefined__",
                r = 9007199254740991,
                n = "[object Arguments]",
                o = "[object Array]",
                a = "[object Boolean]",
                c = "[object Date]",
                h = "[object Error]",
                l = "[object Function]",
                u = "[object Map]",
                p = "[object Number]",
                d = "[object Object]",
                f = "[object Promise]",
                g = "[object RegExp]",
                y = "[object Set]",
                m = "[object String]",
                w = "[object Symbol]",
                b = "[object WeakMap]",
                v = "[object ArrayBuffer]",
                _ = "[object DataView]",
                E = /^\[object .+?Constructor\]$/,
                S = /^(?:0|[1-9]\d*)$/,
                I = {};
            I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[n] = I[o] = I[v] = I[a] = I[_] = I[c] = I[h] = I[l] = I[u] = I[p] = I[d] = I[g] = I[y] = I[m] = I[b] = !1;
            var O = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                P = "object" == typeof self && self && self.Object === Object && self,
                N = O || P || Function("return this")(),
                A = t && !t.nodeType && t,
                R = A && e && !e.nodeType && e,
                T = R && R.exports === A,
                C = T && O.process,
                x = function() {
                    try {
                        return C && C.binding && C.binding("util")
                    } catch (e) {}
                }(),
                U = x && x.isTypedArray;

            function M(e, t) {
                for (var i = -1, s = null == e ? 0 : e.length; ++i < s;)
                    if (t(e[i], i, e)) return !0;
                return !1
            }

            function L(e) {
                var t = -1,
                    i = Array(e.size);
                return e.forEach((function(e, s) {
                    i[++t] = [s, e]
                })), i
            }

            function j(e) {
                var t = -1,
                    i = Array(e.size);
                return e.forEach((function(e) {
                    i[++t] = e
                })), i
            }
            var D, k, z = Array.prototype,
                $ = Function.prototype,
                q = Object.prototype,
                H = N["__core-js_shared__"],
                V = $.toString,
                K = q.hasOwnProperty,
                B = function() {
                    var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                F = q.toString,
                W = RegExp("^" + V.call(K).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                G = T ? N.Buffer : void 0,
                J = N.Symbol,
                Y = N.Uint8Array,
                X = q.propertyIsEnumerable,
                Z = z.splice,
                Q = J ? J.toStringTag : void 0,
                ee = Object.getOwnPropertySymbols,
                te = G ? G.isBuffer : void 0,
                ie = (D = Object.keys, k = Object, function(e) {
                    return D(k(e))
                }),
                se = Ce(N, "DataView"),
                re = Ce(N, "Map"),
                ne = Ce(N, "Promise"),
                oe = Ce(N, "Set"),
                ae = Ce(N, "WeakMap"),
                ce = Ce(Object, "create"),
                he = Le(se),
                le = Le(re),
                ue = Le(ne),
                pe = Le(oe),
                de = Le(ae),
                fe = J ? J.prototype : void 0,
                ge = fe ? fe.valueOf : void 0;

            function ye(e) {
                var t = -1,
                    i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }

            function me(e) {
                var t = -1,
                    i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }

            function we(e) {
                var t = -1,
                    i = null == e ? 0 : e.length;
                for (this.clear(); ++t < i;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }

            function be(e) {
                var t = -1,
                    i = null == e ? 0 : e.length;
                for (this.__data__ = new we; ++t < i;) this.add(e[t])
            }

            function ve(e) {
                var t = this.__data__ = new me(e);
                this.size = t.size
            }

            function _e(e, t) {
                var i = ke(e),
                    s = !i && De(e),
                    r = !i && !s && ze(e),
                    n = !i && !s && !r && Ke(e),
                    o = i || s || r || n,
                    a = o ? function(e, t) {
                        for (var i = -1, s = Array(e); ++i < e;) s[i] = t(i);
                        return s
                    }(e.length, String) : [],
                    c = a.length;
                for (var h in e) !t && !K.call(e, h) || o && ("length" == h || r && ("offset" == h || "parent" == h) || n && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || Me(h, c)) || a.push(h);
                return a
            }

            function Ee(e, t) {
                for (var i = e.length; i--;)
                    if (je(e[i][0], t)) return i;
                return -1
            }

            function Se(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Q && Q in Object(e) ? function(e) {
                    var t = K.call(e, Q),
                        i = e[Q];
                    try {
                        e[Q] = void 0;
                        var s = !0
                    } catch (n) {}
                    var r = F.call(e);
                    s && (t ? e[Q] = i : delete e[Q]);
                    return r
                }(e) : function(e) {
                    return F.call(e)
                }(e)
            }

            function Ie(e) {
                return Ve(e) && Se(e) == n
            }

            function Oe(e, t, i, s, r) {
                return e === t || (null == e || null == t || !Ve(e) && !Ve(t) ? e !== e && t !== t : function(e, t, i, s, r, l) {
                    var f = ke(e),
                        b = ke(t),
                        E = f ? o : Ue(e),
                        S = b ? o : Ue(t),
                        I = (E = E == n ? d : E) == d,
                        O = (S = S == n ? d : S) == d,
                        P = E == S;
                    if (P && ze(e)) {
                        if (!ze(t)) return !1;
                        f = !0, I = !1
                    }
                    if (P && !I) return l || (l = new ve), f || Ke(e) ? Ae(e, t, i, s, r, l) : function(e, t, i, s, r, n, o) {
                        switch (i) {
                            case _:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                e = e.buffer, t = t.buffer;
                            case v:
                                return !(e.byteLength != t.byteLength || !n(new Y(e), new Y(t)));
                            case a:
                            case c:
                            case p:
                                return je(+e, +t);
                            case h:
                                return e.name == t.name && e.message == t.message;
                            case g:
                            case m:
                                return e == t + "";
                            case u:
                                var l = L;
                            case y:
                                var d = 1 & s;
                                if (l || (l = j), e.size != t.size && !d) return !1;
                                var f = o.get(e);
                                if (f) return f == t;
                                s |= 2, o.set(e, t);
                                var b = Ae(l(e), l(t), s, r, n, o);
                                return o.delete(e), b;
                            case w:
                                if (ge) return ge.call(e) == ge.call(t)
                        }
                        return !1
                    }(e, t, E, i, s, r, l);
                    if (!(1 & i)) {
                        var N = I && K.call(e, "__wrapped__"),
                            A = O && K.call(t, "__wrapped__");
                        if (N || A) {
                            var R = N ? e.value() : e,
                                T = A ? t.value() : t;
                            return l || (l = new ve), r(R, T, i, s, l)
                        }
                    }
                    if (!P) return !1;
                    return l || (l = new ve),
                        function(e, t, i, s, r, n) {
                            var o = 1 & i,
                                a = Re(e),
                                c = a.length,
                                h = Re(t).length;
                            if (c != h && !o) return !1;
                            var l = c;
                            for (; l--;) {
                                var u = a[l];
                                if (!(o ? u in t : K.call(t, u))) return !1
                            }
                            var p = n.get(e);
                            if (p && n.get(t)) return p == t;
                            var d = !0;
                            n.set(e, t), n.set(t, e);
                            var f = o;
                            for (; ++l < c;) {
                                var g = e[u = a[l]],
                                    y = t[u];
                                if (s) var m = o ? s(y, g, u, t, e, n) : s(g, y, u, e, t, n);
                                if (!(void 0 === m ? g === y || r(g, y, i, s, n) : m)) {
                                    d = !1;
                                    break
                                }
                                f || (f = "constructor" == u)
                            }
                            if (d && !f) {
                                var w = e.constructor,
                                    b = t.constructor;
                                w == b || !("constructor" in e) || !("constructor" in t) || "function" == typeof w && w instanceof w && "function" == typeof b && b instanceof b || (d = !1)
                            }
                            return n.delete(e), n.delete(t), d
                        }(e, t, i, s, r, l)
                }(e, t, i, s, Oe, r))
            }

            function Pe(e) {
                return !(!He(e) || function(e) {
                    return !!B && B in e
                }(e)) && ($e(e) ? W : E).test(Le(e))
            }

            function Ne(e) {
                if (! function(e) {
                        var t = e && e.constructor,
                            i = "function" == typeof t && t.prototype || q;
                        return e === i
                    }(e)) return ie(e);
                var t = [];
                for (var i in Object(e)) K.call(e, i) && "constructor" != i && t.push(i);
                return t
            }

            function Ae(e, t, i, s, r, n) {
                var o = 1 & i,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var h = n.get(e);
                if (h && n.get(t)) return h == t;
                var l = -1,
                    u = !0,
                    p = 2 & i ? new be : void 0;
                for (n.set(e, t), n.set(t, e); ++l < a;) {
                    var d = e[l],
                        f = t[l];
                    if (s) var g = o ? s(f, d, l, t, e, n) : s(d, f, l, e, t, n);
                    if (void 0 !== g) {
                        if (g) continue;
                        u = !1;
                        break
                    }
                    if (p) {
                        if (!M(t, (function(e, t) {
                                if (o = t, !p.has(o) && (d === e || r(d, e, i, s, n))) return p.push(t);
                                var o
                            }))) {
                            u = !1;
                            break
                        }
                    } else if (d !== f && !r(d, f, i, s, n)) {
                        u = !1;
                        break
                    }
                }
                return n.delete(e), n.delete(t), u
            }

            function Re(e) {
                return function(e, t, i) {
                    var s = t(e);
                    return ke(e) ? s : function(e, t) {
                        for (var i = -1, s = t.length, r = e.length; ++i < s;) e[r + i] = t[i];
                        return e
                    }(s, i(e))
                }(e, Be, xe)
            }

            function Te(e, t) {
                var i = e.__data__;
                return function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }(t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function Ce(e, t) {
                var i = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return Pe(i) ? i : void 0
            }
            ye.prototype.clear = function() {
                this.__data__ = ce ? ce(null) : {}, this.size = 0
            }, ye.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ye.prototype.get = function(e) {
                var t = this.__data__;
                if (ce) {
                    var i = t[e];
                    return i === s ? void 0 : i
                }
                return K.call(t, e) ? t[e] : void 0
            }, ye.prototype.has = function(e) {
                var t = this.__data__;
                return ce ? void 0 !== t[e] : K.call(t, e)
            }, ye.prototype.set = function(e, t) {
                var i = this.__data__;
                return this.size += this.has(e) ? 0 : 1, i[e] = ce && void 0 === t ? s : t, this
            }, me.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, me.prototype.delete = function(e) {
                var t = this.__data__,
                    i = Ee(t, e);
                return !(i < 0) && (i == t.length - 1 ? t.pop() : Z.call(t, i, 1), --this.size, !0)
            }, me.prototype.get = function(e) {
                var t = this.__data__,
                    i = Ee(t, e);
                return i < 0 ? void 0 : t[i][1]
            }, me.prototype.has = function(e) {
                return Ee(this.__data__, e) > -1
            }, me.prototype.set = function(e, t) {
                var i = this.__data__,
                    s = Ee(i, e);
                return s < 0 ? (++this.size, i.push([e, t])) : i[s][1] = t, this
            }, we.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ye,
                    map: new(re || me),
                    string: new ye
                }
            }, we.prototype.delete = function(e) {
                var t = Te(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, we.prototype.get = function(e) {
                return Te(this, e).get(e)
            }, we.prototype.has = function(e) {
                return Te(this, e).has(e)
            }, we.prototype.set = function(e, t) {
                var i = Te(this, e),
                    s = i.size;
                return i.set(e, t), this.size += i.size == s ? 0 : 1, this
            }, be.prototype.add = be.prototype.push = function(e) {
                return this.__data__.set(e, s), this
            }, be.prototype.has = function(e) {
                return this.__data__.has(e)
            }, ve.prototype.clear = function() {
                this.__data__ = new me, this.size = 0
            }, ve.prototype.delete = function(e) {
                var t = this.__data__,
                    i = t.delete(e);
                return this.size = t.size, i
            }, ve.prototype.get = function(e) {
                return this.__data__.get(e)
            }, ve.prototype.has = function(e) {
                return this.__data__.has(e)
            }, ve.prototype.set = function(e, t) {
                var i = this.__data__;
                if (i instanceof me) {
                    var s = i.__data__;
                    if (!re || s.length < 199) return s.push([e, t]), this.size = ++i.size, this;
                    i = this.__data__ = new we(s)
                }
                return i.set(e, t), this.size = i.size, this
            };
            var xe = ee ? function(e) {
                    return null == e ? [] : (e = Object(e), function(e, t) {
                        for (var i = -1, s = null == e ? 0 : e.length, r = 0, n = []; ++i < s;) {
                            var o = e[i];
                            t(o, i, e) && (n[r++] = o)
                        }
                        return n
                    }(ee(e), (function(t) {
                        return X.call(e, t)
                    })))
                } : function() {
                    return []
                },
                Ue = Se;

            function Me(e, t) {
                return !!(t = null == t ? r : t) && ("number" == typeof e || S.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function Le(e) {
                if (null != e) {
                    try {
                        return V.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }

            function je(e, t) {
                return e === t || e !== e && t !== t
            }(se && Ue(new se(new ArrayBuffer(1))) != _ || re && Ue(new re) != u || ne && Ue(ne.resolve()) != f || oe && Ue(new oe) != y || ae && Ue(new ae) != b) && (Ue = function(e) {
                var t = Se(e),
                    i = t == d ? e.constructor : void 0,
                    s = i ? Le(i) : "";
                if (s) switch (s) {
                    case he:
                        return _;
                    case le:
                        return u;
                    case ue:
                        return f;
                    case pe:
                        return y;
                    case de:
                        return b
                }
                return t
            });
            var De = Ie(function() {
                    return arguments
                }()) ? Ie : function(e) {
                    return Ve(e) && K.call(e, "callee") && !X.call(e, "callee")
                },
                ke = Array.isArray;
            var ze = te || function() {
                return !1
            };

            function $e(e) {
                if (!He(e)) return !1;
                var t = Se(e);
                return t == l || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function qe(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
            }

            function He(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function Ve(e) {
                return null != e && "object" == typeof e
            }
            var Ke = U ? function(e) {
                return function(t) {
                    return e(t)
                }
            }(U) : function(e) {
                return Ve(e) && qe(e.length) && !!I[Se(e)]
            };

            function Be(e) {
                return null != (t = e) && qe(t.length) && !$e(t) ? _e(e) : Ne(e);
                var t
            }
            e.exports = function(e, t) {
                return Oe(e, t)
            }
        },
        85346: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, i, s) {
                var r = s && s.stringify || t;
                if ("object" === typeof e && null !== e) {
                    var n = i.length + 1;
                    if (1 === n) return e;
                    var o = new Array(n);
                    o[0] = r(e);
                    for (var a = 1; a < n; a++) o[a] = r(i[a]);
                    return o.join(" ")
                }
                if ("string" !== typeof e) return e;
                var c = i.length;
                if (0 === c) return e;
                for (var h = "", l = 0, u = -1, p = e && e.length || 0, d = 0; d < p;) {
                    if (37 === e.charCodeAt(d) && d + 1 < p) {
                        switch (u = u > -1 ? u : 0, e.charCodeAt(d + 1)) {
                            case 100:
                            case 102:
                                if (l >= c) break;
                                if (null == i[l]) break;
                                u < d && (h += e.slice(u, d)), h += Number(i[l]), u = d + 2, d++;
                                break;
                            case 105:
                                if (l >= c) break;
                                if (null == i[l]) break;
                                u < d && (h += e.slice(u, d)), h += Math.floor(Number(i[l])), u = d + 2, d++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (l >= c) break;
                                if (void 0 === i[l]) break;
                                u < d && (h += e.slice(u, d));
                                var f = typeof i[l];
                                if ("string" === f) {
                                    h += "'" + i[l] + "'", u = d + 2, d++;
                                    break
                                }
                                if ("function" === f) {
                                    h += i[l].name || "<anonymous>", u = d + 2, d++;
                                    break
                                }
                                h += r(i[l]), u = d + 2, d++;
                                break;
                            case 115:
                                if (l >= c) break;
                                u < d && (h += e.slice(u, d)), h += String(i[l]), u = d + 2, d++;
                                break;
                            case 37:
                                u < d && (h += e.slice(u, d)), h += "%", u = d + 2, d++, l--
                        }++l
                    }++d
                }
                if (-1 === u) return e;
                u < p && (h += e.slice(u));
                return h
            }
        },
        63954: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.safeJsonParse = function(e) {
                if ("string" !== typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }, t.safeJsonStringify = function(e) {
                return "string" === typeof e ? e : JSON.stringify(e, ((e, t) => "undefined" === typeof t ? null : t))
            }
        },
        36559: function(e, t, i) {
            "use strict";
            const s = i(85346);
            e.exports = o;
            const r = function() {
                    function e(e) {
                        return "undefined" !== typeof e && e
                    }
                    try {
                        return "undefined" !== typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch (t) {
                        return e(self) || e(window) || e(this) || {}
                    }
                }().console || {},
                n = {
                    mapHttpRequest: f,
                    mapHttpResponse: f,
                    wrapRequestSerializer: g,
                    wrapResponseSerializer: g,
                    wrapErrorSerializer: g,
                    req: f,
                    res: f,
                    err: function(e) {
                        const t = {
                            type: e.constructor.name,
                            msg: e.message,
                            stack: e.stack
                        };
                        for (const i in e) void 0 === t[i] && (t[i] = e[i]);
                        return t
                    }
                };

            function o(e) {
                (e = e || {}).browser = e.browser || {};
                const t = e.browser.transmit;
                if (t && "function" !== typeof t.send) throw Error("pino: transmit option must have a send function");
                const i = e.browser.write || r;
                e.browser.write && (e.browser.asObject = !0);
                const s = e.serializers || {},
                    n = function(e, t) {
                        if (Array.isArray(e)) return e.filter((function(e) {
                            return "!stdSerializers.err" !== e
                        }));
                        return !0 === e && Object.keys(t)
                    }(e.browser.serialize, s);
                let c = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (c = !1);
                "function" === typeof i && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i), !1 === e.enabled && (e.level = "silent");
                const u = e.level || "info",
                    f = Object.create(i);
                f.log || (f.log = y), Object.defineProperty(f, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(f, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, a(g, f, "error", "log"), a(g, f, "fatal", "error"), a(g, f, "warn", "error"), a(g, f, "info", "log"), a(g, f, "debug", "log"), a(g, f, "trace", "log")
                    }
                });
                const g = {
                    transmit: t,
                    serialize: n,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: d(e)
                };
                return f.levels = o.levels, f.level = u, f.setMaxListeners = f.getMaxListeners = f.emit = f.addListener = f.on = f.prependListener = f.once = f.prependOnceListener = f.removeListener = f.removeAllListeners = f.listeners = f.listenerCount = f.eventNames = f.write = f.flush = y, f.serializers = s, f._serialize = n, f._stdErrSerialize = c, f.child = function(i, r) {
                    if (!i) throw new Error("missing bindings for child Pino");
                    r = r || {}, n && i.serializers && (r.serializers = i.serializers);
                    const o = r.serializers;
                    if (n && o) {
                        var a = Object.assign({}, s, o),
                            c = !0 === e.browser.serialize ? Object.keys(a) : n;
                        delete i.serializers, h([i], c, a, this._stdErrSerialize)
                    }

                    function u(e) {
                        this._childLevel = 1 + (0 | e._childLevel), this.error = l(e, i, "error"), this.fatal = l(e, i, "fatal"), this.warn = l(e, i, "warn"), this.info = l(e, i, "info"), this.debug = l(e, i, "debug"), this.trace = l(e, i, "trace"), a && (this.serializers = a, this._serialize = c), t && (this._logEvent = p([].concat(e._logEvent.bindings, i)))
                    }
                    return u.prototype = this, new u(this)
                }, t && (f._logEvent = p()), f
            }

            function a(e, t, i, s) {
                const n = Object.getPrototypeOf(t);
                t[i] = t.levelVal > t.levels.values[i] ? y : n[i] ? n[i] : r[i] || r[s] || y,
                    function(e, t, i) {
                        if (!e.transmit && t[i] === y) return;
                        t[i] = (s = t[i], function() {
                            const n = e.timestamp(),
                                a = new Array(arguments.length),
                                l = Object.getPrototypeOf && Object.getPrototypeOf(this) === r ? r : this;
                            for (var p = 0; p < a.length; p++) a[p] = arguments[p];
                            if (e.serialize && !e.asObject && h(a, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? s.call(l, c(this, i, a, n)) : s.apply(l, a), e.transmit) {
                                const s = e.transmit.level || t.level,
                                    r = o.levels.values[s],
                                    c = o.levels.values[i];
                                if (c < r) return;
                                u(this, {
                                    ts: n,
                                    methodLevel: i,
                                    methodValue: c,
                                    transmitLevel: s,
                                    transmitValue: o.levels.values[e.transmit.level || t.level],
                                    send: e.transmit.send,
                                    val: t.levelVal
                                }, a)
                            }
                        });
                        var s
                    }(e, t, i)
            }

            function c(e, t, i, r) {
                e._serialize && h(i, e._serialize, e.serializers, e._stdErrSerialize);
                const n = i.slice();
                let a = n[0];
                const c = {};
                r && (c.time = r), c.level = o.levels.values[t];
                let l = 1 + (0 | e._childLevel);
                if (l < 1 && (l = 1), null !== a && "object" === typeof a) {
                    for (; l-- && "object" === typeof n[0];) Object.assign(c, n.shift());
                    a = n.length ? s(n.shift(), n) : void 0
                } else "string" === typeof a && (a = s(n.shift(), n));
                return void 0 !== a && (c.msg = a), c
            }

            function h(e, t, i, s) {
                for (const r in e)
                    if (s && e[r] instanceof Error) e[r] = o.stdSerializers.err(e[r]);
                    else if ("object" === typeof e[r] && !Array.isArray(e[r]))
                    for (const s in e[r]) t && t.indexOf(s) > -1 && s in i && (e[r][s] = i[s](e[r][s]))
            }

            function l(e, t, i) {
                return function() {
                    const s = new Array(1 + arguments.length);
                    s[0] = t;
                    for (var r = 1; r < s.length; r++) s[r] = arguments[r - 1];
                    return e[i].apply(this, s)
                }
            }

            function u(e, t, i) {
                const s = t.send,
                    r = t.ts,
                    n = t.methodLevel,
                    o = t.methodValue,
                    a = t.val,
                    c = e._logEvent.bindings;
                h(i, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = r, e._logEvent.messages = i.filter((function(e) {
                    return -1 === c.indexOf(e)
                })), e._logEvent.level.label = n, e._logEvent.level.value = o, s(n, e._logEvent, a), e._logEvent = p(c)
            }

            function p(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function d(e) {
                return "function" === typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? m : w
            }

            function f() {
                return {}
            }

            function g(e) {
                return e
            }

            function y() {}

            function m() {
                return !1
            }

            function w() {
                return Date.now()
            }
            o.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, o.stdSerializers = n, o.stdTimeFunctions = Object.assign({}, {
                nullTime: m,
                epochTime: w,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);