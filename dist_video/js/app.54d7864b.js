(function (e) {
    function t(t) {
        for (var r, i, a = t[0], c = t[1], p = t[2], f = 0, s = []; f < a.length; f++) i = a[f], Object.prototype.hasOwnProperty.call(o, i) && o[i] && s.push(o[i][0]), o[i] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        l && l(t);
        while (s.length) s.shift()();
        return u.push.apply(u, p || []), n()
    }

    function n() {
        for (var e, t = 0; t < u.length; t++) {
            for (var n = u[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== o[c] && (r = !1)
            }
            r && (u.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }

    var r = {}, o = {app: 0}, u = [];

    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }

    i.m = e, i.c = r, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/dist_video/";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [], c = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var p = 0; p < a.length; p++) t(a[p]);
    var l = c;
    u.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "034f": function (e, t, n) {
        "use strict";
        n("85ec")
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var r = n("2b0e"), o = function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", {attrs: {id: "app"}}, [r("video", {
                    attrs: {
                        muted: "",
                        autoplay: "",
                        loop: "",
                        crossorigin: "anonymous",
                        playsinline: "",
                        preload: "auto",
                        width: "100%"
                    }, domProps: {muted: !0}
                }, [r("source", {attrs: {src: n("a8f2"), type: "video/mp4"}})])])
            }, u = [], i = {name: "App"}, a = i, c = (n("034f"), n("2877")),
            p = Object(c["a"])(a, o, u, !1, null, null, null), l = p.exports;
        r["a"].config.productionTip = !1, new r["a"]({
            render: function (e) {
                return e(l)
            }
        }).$mount("#app")
    }, "85ec": function (e, t, n) {
    }, a8f2: function (e, t, n) {
        e.exports = n.p + "media/video.6c65abea.webm"
    }
});
//# sourceMappingURL=app.54d7864b.js.map