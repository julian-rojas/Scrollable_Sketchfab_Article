// Source: https://github.com/stackgl/gl-vec3
// License: https://github.com/stackgl/gl-vec3/blob/master/LICENSE.md
// Build: webpack --mode=production index.js --output-filename gl-vec3.1.1.3.js --output-library vec3
var vec3 = function(t) {
    var n = {};

    function r(o) {
        if (n[o]) return n[o].exports;
        var e = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }
    return r.m = t, r.c = n, r.d = function(t, n, o) {
        r.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: o
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, n) {
        if (1 & n && (t = r(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var e in t) r.d(o, e, function(n) {
                return t[n]
            }.bind(null, e));
        return o
    }, r.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(n, "a", n), n
    }, r.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, r.p = "", r(r.s = 45)
}([function(t, n) {
    t.exports = function(t) {
        var n = t[0],
            r = t[1],
            o = t[2];
        return n * n + r * r + o * o
    }
}, function(t, n) {
    t.exports = function(t) {
        var n = t[0],
            r = t[1],
            o = t[2];
        return Math.sqrt(n * n + r * r + o * o)
    }
}, function(t, n) {
    t.exports = function(t, n) {
        var r = n[0] - t[0],
            o = n[1] - t[1],
            e = n[2] - t[2];
        return r * r + o * o + e * e
    }
}, function(t, n) {
    t.exports = function(t, n) {
        var r = n[0] - t[0],
            o = n[1] - t[1],
            e = n[2] - t[2];
        return Math.sqrt(r * r + o * o + e * e)
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }
}, function(t, n) {
    t.exports = function(t, n) {
        var r = n[0],
            o = n[1],
            e = n[2],
            u = r * r + o * o + e * e;
        u > 0 && (u = 1 / Math.sqrt(u), t[0] = n[0] * u, t[1] = n[1] * u, t[2] = n[2] * u);
        return t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        var o = new Float32Array(3);
        return o[0] = t, o[1] = n, o[2] = r, o
    }
}, function(t, n) {
    t.exports = function() {
        var t = new Float32Array(3);
        return t[0] = 0, t[1] = 0, t[2] = 0, t
    }
}, function(t, n) {
    t.exports = 1e-6
}, function(t, n, r) {
    t.exports = function(t, n, r, e, u, a) {
        var i, c;
        n || (n = 3);
        r || (r = 0);
        c = e ? Math.min(e * n + r, t.length) : t.length;
        for (i = r; i < c; i += n) o[0] = t[i], o[1] = t[i + 1], o[2] = t[i + 2], u(o, o, a), t[i] = o[0], t[i + 1] = o[1], t[i + 2] = o[2];
        return t
    };
    var o = r(10)()
}, function(t, n) {
    t.exports = function(t, n, r, o) {
        var e = r[0],
            u = r[1],
            a = n[0] - e,
            i = n[1] - u,
            c = Math.sin(o),
            f = Math.cos(o);
        return t[0] = e + a * f - i * c, t[1] = u + a * c + i * f, t[2] = n[2], t
    }
}, function(t, n) {
    t.exports = function(t, n, r, o) {
        var e = r[0],
            u = r[2],
            a = n[0] - e,
            i = n[2] - u,
            c = Math.sin(o),
            f = Math.cos(o);
        return t[0] = e + i * c + a * f, t[1] = n[1], t[2] = u + i * f - a * c, t
    }
}, function(t, n) {
    t.exports = function(t, n, r, o) {
        var e = r[1],
            u = r[2],
            a = n[1] - e,
            i = n[2] - u,
            c = Math.sin(o),
            f = Math.cos(o);
        return t[0] = n[0], t[1] = e + a * f - i * c, t[2] = u + a * c + i * f, t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        var o = n[0],
            e = n[1],
            u = n[2],
            a = r[0],
            i = r[1],
            c = r[2],
            f = r[3],
            s = f * o + i * u - c * e,
            p = f * e + c * o - a * u,
            x = f * u + a * e - i * o,
            l = -a * o - i * e - c * u;
        return t[0] = s * f + l * -a + p * -c - x * -i, t[1] = p * f + l * -i + x * -a - s * -c, t[2] = x * f + l * -c + s * -i - p * -a, t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        var o = n[0],
            e = n[1],
            u = n[2];
        return t[0] = o * r[0] + e * r[3] + u * r[6], t[1] = o * r[1] + e * r[4] + u * r[7], t[2] = o * r[2] + e * r[5] + u * r[8], t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        var o = n[0],
            e = n[1],
            u = n[2],
            a = r[3] * o + r[7] * e + r[11] * u + r[15];
        return a = a || 1, t[0] = (r[0] * o + r[4] * e + r[8] * u + r[12]) / a, t[1] = (r[1] * o + r[5] * e + r[9] * u + r[13]) / a, t[2] = (r[2] * o + r[6] * e + r[10] * u + r[14]) / a, t
    }
}, function(t, n) {
    t.exports = function(t, n) {
        n = n || 1;
        var r = 2 * Math.random() * Math.PI,
            o = 2 * Math.random() - 1,
            e = Math.sqrt(1 - o * o) * n;
        return t[0] = Math.cos(r) * e, t[1] = Math.sin(r) * e, t[2] = o * n, t
    }
}, function(t, n) {
    t.exports = function(t, n, r, o) {
        var e = n[0],
            u = n[1],
            a = n[2];
        return t[0] = e + o * (r[0] - e), t[1] = u + o * (r[1] - u), t[2] = a + o * (r[2] - a), t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        var o = n[0],
            e = n[1],
            u = n[2],
            a = r[0],
            i = r[1],
            c = r[2];
        return t[0] = e * c - u * i, t[1] = u * a - o * c, t[2] = o * i - e * a, t
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t
    }
}, function(t, n, r) {
    t.exports = r(0)
}, function(t, n, r) {
    t.exports = r(1)
}, function(t, n, r) {
    t.exports = r(2)
}, function(t, n, r) {
    t.exports = r(3)
}, function(t, n) {
    t.exports = function(t, n, r, o) {
        return t[0] = n[0] + r[0] * o, t[1] = n[1] + r[1] * o, t[2] = n[2] + r[2] * o, t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t
    }
}, function(t, n) {
    t.exports = function(t, n, r) {
        return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t
    }
}, function(t, n, r) {
    t.exports = r(4)
}, function(t, n, r) {
    t.exports = r(5)
}, function(t, n, r) {
    t.exports = r(6)
}, function(t, n) {
    t.exports = function(t, n, r) {
        return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
    }
}, function(t, n, r) {
    t.exports = function(t, n) {
        var r = t[0],
            e = t[1],
            u = t[2],
            a = n[0],
            i = n[1],
            c = n[2];
        return Math.abs(r - a) <= o * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(e - i) <= o * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(u - c) <= o * Math.max(1, Math.abs(u), Math.abs(c))
    };
    var o = r(11)
}, function(t, n) {
    t.exports = function(t, n, r, o) {
        return t[0] = n, t[1] = r, t[2] = o, t
    }
}, function(t, n) {
    t.exports = function(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t
    }
}, function(t, n, r) {
    t.exports = function(t, n) {
        var r = o(t[0], t[1], t[2]),
            a = o(n[0], n[1], n[2]);
        e(r, r), e(a, a);
        var i = u(r, a);
        return i > 1 ? 0 : Math.acos(i)
    };
    var o = r(9),
        e = r(8),
        u = r(7)
}, function(t, n) {
    t.exports = function(t) {
        var n = new Float32Array(3);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n
    }
}, function(t, n, r) {
    t.exports = {
        EPSILON: r(11),
        create: r(10),
        clone: r(44),
        angle: r(43),
        fromValues: r(9),
        copy: r(42),
        set: r(41),
        equals: r(40),
        exactEquals: r(39),
        add: r(38),
        subtract: r(6),
        sub: r(37),
        multiply: r(5),
        mul: r(36),
        divide: r(4),
        div: r(35),
        min: r(34),
        max: r(33),
        floor: r(32),
        ceil: r(31),
        round: r(30),
        scale: r(29),
        scaleAndAdd: r(28),
        distance: r(3),
        dist: r(27),
        squaredDistance: r(2),
        sqrDist: r(26),
        length: r(1),
        len: r(25),
        squaredLength: r(0),
        sqrLen: r(24),
        negate: r(23),
        inverse: r(22),
        normalize: r(8),
        dot: r(7),
        cross: r(21),
        lerp: r(20),
        random: r(19),
        transformMat4: r(18),
        transformMat3: r(17),
        transformQuat: r(16),
        rotateX: r(15),
        rotateY: r(14),
        rotateZ: r(13),
        forEach: r(12)
    }
}]);