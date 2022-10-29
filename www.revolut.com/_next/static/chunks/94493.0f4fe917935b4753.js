"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94493], {
        89480: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return P
                }
            });
            var n = e(27691),
                r = e(15864),
                a = e(31316),
                i = e(91089);
            var $ = e(25738),
                o = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
            var u = e(457);

            function l(d, t) {
                var e = "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                if (e) return (e = e.call(d)).next.bind(e);
                if (Array.isArray(d) || (e = function(d, t) {
                        if (!d) return;
                        if ("string" === typeof d) return s(d, t);
                        var e = Object.prototype.toString.call(d).slice(8, -1);
                        "Object" === e && d.constructor && (e = d.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(d);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return s(d, t)
                    }(d)) || t && d && "number" === typeof d.length) {
                    e && (d = e);
                    var n = 0;
                    return function() {
                        return n >= d.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: d[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function s(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }

            function c(d, t) {
                var e = Object.keys(d);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(d);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(d, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function f(d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(e), !0).forEach((function(t) {
                        h(d, t, e[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(e)) : c(Object(e)).forEach((function(t) {
                        Object.defineProperty(d, t, Object.getOwnPropertyDescriptor(e, t))
                    }))
                }
                return d
            }

            function h(d, t, e) {
                return t in d ? Object.defineProperty(d, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : d[t] = e, d
            }
            var g = {
                formatExtension: function(d, t, e) {
                    return "".concat(d).concat(e.ext()).concat(t)
                }
            };

            function m(d, t, e, r) {
                if (e = e ? f(f({}, g), e) : g, r = new n.ZP(r), d.country && "001" !== d.country) {
                    if (!r.hasCountry(d.country)) throw new Error("Unknown country: ".concat(d.country));
                    r.country(d.country)
                } else {
                    if (!d.countryCallingCode) return d.phone || "";
                    r.selectNumberingPlan(d.countryCallingCode)
                }
                var a, i = r.countryCallingCode(),
                    $ = e.v2 ? d.nationalNumber : d.phone;
                switch (t) {
                    case "NATIONAL":
                        return $ ? v(a = y($, d.carrierCode, "NATIONAL", r, e), d.ext, r, e.formatExtension) : "";
                    case "INTERNATIONAL":
                        return $ ? (a = y($, null, "INTERNATIONAL", r, e), v(a = "+".concat(i, " ").concat(a), d.ext, r, e.formatExtension)) : "+".concat(i);
                    case "E.164":
                        return "+".concat(i).concat($);
                    case "RFC3966":
                        return (0, u.Y)({
                            number: "+".concat(i).concat($),
                            ext: d.ext
                        });
                    case "IDD":
                        if (!e.fromCountry) return;
                        var l = function(d, t, e, r, a) {
                            if ((0, n.Gg)(r, a.metadata) === e) {
                                var i = y(d, t, "NATIONAL", a);
                                return "1" === e ? e + " " + i : i
                            }
                            var $ = function(d, t, e) {
                                var r = new n.ZP(e);
                                return r.selectNumberingPlan(d, t), r.defaultIDDPrefix() ? r.defaultIDDPrefix() : o.test(r.IDDPrefix()) ? r.IDDPrefix() : void 0
                            }(r, void 0, a.metadata);
                            if ($) return "".concat($, " ").concat(e, " ").concat(y(d, null, "INTERNATIONAL", a))
                        }($, d.carrierCode, i, e.fromCountry, r);
                        return v(l, d.ext, r, e.formatExtension);
                    default:
                        throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'))
                }
            }

            function y(d, t, e, n, r) {
                var i = function(d, t) {
                    for (var e, n = l(d); !(e = n()).done;) {
                        var r = e.value;
                        if (r.leadingDigitsPatterns().length > 0) {
                            var i = r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length - 1];
                            if (0 !== t.search(i)) continue
                        }
                        if ((0, a.Z)(t, r.pattern())) return r
                    }
                }(n.formats(), d);
                return i ? (0, $.Z)(d, i, {
                    useInternationalFormat: "INTERNATIONAL" === e,
                    withNationalPrefix: !i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !r || !1 !== r.nationalPrefix,
                    carrierCode: t,
                    metadata: n
                }) : d
            }

            function v(d, t, e, n) {
                return t ? n(d, t, e) : d
            }

            function p(d, t) {
                var e = Object.keys(d);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(d);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(d, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function b(d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(e), !0).forEach((function(t) {
                        C(d, t, e[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(e)) : p(Object(e)).forEach((function(t) {
                        Object.defineProperty(d, t, Object.getOwnPropertyDescriptor(e, t))
                    }))
                }
                return d
            }

            function C(d, t, e) {
                return t in d ? Object.defineProperty(d, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : d[t] = e, d
            }

            function N(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n)
                }
            }
            var P = function() {
                    function d(t, e, r) {
                        if (function(d, t) {
                                if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, d), !t) throw new TypeError("`country` or `countryCallingCode` not passed");
                        if (!e) throw new TypeError("`nationalNumber` not passed");
                        if (!r) throw new TypeError("`metadata` not passed");
                        var a = new n.ZP(r);
                        x(t) && (this.country = t, a.country(t), t = a.countryCallingCode()), this.countryCallingCode = t, this.nationalNumber = e, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = r
                    }
                    var t, e, $;
                    return t = d, (e = [{
                        key: "setExt",
                        value: function(d) {
                            this.ext = d
                        }
                    }, {
                        key: "isPossible",
                        value: function() {
                            return (0, r.Z)(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "isValid",
                        value: function() {
                            return function(d, t, e) {
                                if (t = t || {}, e = new n.ZP(e), !d.country) return !1;
                                if (e.selectNumberingPlan(d.country, d.countryCallingCode), e.hasTypes()) return void 0 !== (0, i.Z)(d, t, e.metadata);
                                var r = t.v2 ? d.nationalNumber : d.phone;
                                return (0, a.Z)(r, e.nationalNumberPattern())
                            }(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "isNonGeographic",
                        value: function() {
                            return new n.ZP(this.metadata).isNonGeographicCallingCode(this.countryCallingCode)
                        }
                    }, {
                        key: "isEqual",
                        value: function(d) {
                            return this.number === d.number && this.ext === d.ext
                        }
                    }, {
                        key: "getType",
                        value: function() {
                            return (0, i.Z)(this, {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "format",
                        value: function(d, t) {
                            return m(this, d, t ? b(b({}, t), {}, {
                                v2: !0
                            }) : {
                                v2: !0
                            }, this.metadata)
                        }
                    }, {
                        key: "formatNational",
                        value: function(d) {
                            return this.format("NATIONAL", d)
                        }
                    }, {
                        key: "formatInternational",
                        value: function(d) {
                            return this.format("INTERNATIONAL", d)
                        }
                    }, {
                        key: "getURI",
                        value: function(d) {
                            return this.format("RFC3966", d)
                        }
                    }]) && N(t.prototype, e), $ && N(t, $), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), d
                }(),
                x = function(d) {
                    return /^[A-Z]{2}$/.test(d)
                }
        },
        95619: function(d, t, e) {
            e.d(t, {
                ex: function() {
                    return n
                },
                sJ: function() {
                    return r
                },
                uv: function() {
                    return $
                },
                xc: function() {
                    return i
                },
                xg: function() {
                    return a
                },
                xy: function() {
                    return o
                }
            });
            var n = 2,
                r = 17,
                a = 3,
                i = "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9",
                $ = "".concat("-\u2010-\u2015\u2212\u30fc\uff0d").concat("\uff0f/").concat("\uff0e.").concat(" \xa0\xad\u200b\u2060\u3000").concat("()\uff08\uff09\uff3b\uff3d\\[\\]").concat("~\u2053\u223c\uff5e"),
                o = "+\uff0b"
        },
        457: function(d, t, e) {
            e.d(t, {
                Y: function() {
                    return o
                },
                m: function() {
                    return $
                }
            });
            var n = e(93345);

            function r(d, t) {
                return function(d) {
                    if (Array.isArray(d)) return d
                }(d) || function(d, t) {
                    var e = null == d ? null : "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                    if (null == e) return;
                    var n, r, a = [],
                        i = !0,
                        $ = !1;
                    try {
                        for (e = e.call(d); !(i = (n = e.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                    } catch (o) {
                        $ = !0, r = o
                    } finally {
                        try {
                            i || null == e.return || e.return()
                        } finally {
                            if ($) throw r
                        }
                    }
                    return a
                }(d, t) || a(d, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(d, t) {
                if (d) {
                    if ("string" === typeof d) return i(d, t);
                    var e = Object.prototype.toString.call(d).slice(8, -1);
                    return "Object" === e && d.constructor && (e = d.constructor.name), "Map" === e || "Set" === e ? Array.from(d) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? i(d, t) : void 0
                }
            }

            function i(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }

            function $(d) {
                for (var t, e, i, $ = function(d, t) {
                        var e = "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                        if (e) return (e = e.call(d)).next.bind(e);
                        if (Array.isArray(d) || (e = a(d)) || t && d && "number" === typeof d.length) {
                            e && (d = e);
                            var n = 0;
                            return function() {
                                return n >= d.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: d[n++]
                                }
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }((d = d.replace(/^tel:/, "tel=")).split(";")); !(i = $()).done;) {
                    var o = r(i.value.split("="), 2),
                        u = o[0],
                        l = o[1];
                    switch (u) {
                        case "tel":
                            t = l;
                            break;
                        case "ext":
                            e = l;
                            break;
                        case "phone-context":
                            "+" === l[0] && (t = l + t)
                    }
                }
                if (!(0, n.ZP)(t)) return {};
                var s = {
                    number: t
                };
                return e && (s.ext = e), s
            }

            function o(d) {
                var t = d.number,
                    e = d.ext;
                if (!t) return "";
                if ("+" !== t[0]) throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
                return "tel:".concat(t).concat(e ? ";ext=" + e : "")
            }
        },
        62354: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return r
                }
            });
            var n = e(95619);

            function r(d) {
                return d.replace(new RegExp("[".concat(n.uv, "]+"), "g"), " ").trim()
            }
        },
        20280: function(d, t, e) {
            function n(d, t) {
                var e = "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                if (e) return (e = e.call(d)).next.bind(e);
                if (Array.isArray(d) || (e = function(d, t) {
                        if (!d) return;
                        if ("string" === typeof d) return r(d, t);
                        var e = Object.prototype.toString.call(d).slice(8, -1);
                        "Object" === e && d.constructor && (e = d.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(d);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return r(d, t)
                    }(d)) || t && d && "number" === typeof d.length) {
                    e && (d = e);
                    var n = 0;
                    return function() {
                        return n >= d.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: d[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function r(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }

            function a(d, t) {
                return i(d, void 0, t)
            }

            function i(d, t, e) {
                var r = e.type(t),
                    a = r && r.possibleLengths() || e.possibleLengths();
                if (!a) return "IS_POSSIBLE";
                if ("FIXED_LINE_OR_MOBILE" === t) {
                    if (!e.type("FIXED_LINE")) return i(d, "MOBILE", e);
                    var $ = e.type("MOBILE");
                    $ && (a = function(d, t) {
                        for (var e, r = d.slice(), a = n(t); !(e = a()).done;) {
                            var i = e.value;
                            d.indexOf(i) < 0 && r.push(i)
                        }
                        return r.sort((function(d, t) {
                            return d - t
                        }))
                    }(a, $.possibleLengths()))
                } else if (t && !r) return "INVALID_LENGTH";
                var o = d.length,
                    u = a[0];
                return u === o ? "IS_POSSIBLE" : u > o ? "TOO_SHORT" : a[a.length - 1] < o ? "TOO_LONG" : a.indexOf(o, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
            }
            e.d(t, {
                Z: function() {
                    return a
                }
            })
        },
        33878: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = e(95619),
                r = function(d) {
                    return "([".concat(n.xc, "]{1,").concat(d, "})")
                };

            function a(d) {
                var t = "#?";
                return ";ext=" + r("20") + "|" + ("[ \xa0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\xf3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|anexo)[:\\.\uff0e]?[ \xa0\\t,-]*" + r("20") + t) + "|" + ("[ \xa0\\t,]*(?:[x\uff58#\uff03~\uff5e]|int|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \xa0\\t,-]*" + r("9") + t) + "|" + ("[- ]+" + r("6") + "#") + "|" + ("[ \xa0\\t]*(?:,{2}|;)[:\\.\uff0e]?[ \xa0\\t,-]*" + r("15") + t) + "|" + ("[ \xa0\\t]*(?:,)+[:\\.\uff0e]?[ \xa0\\t,-]*" + r("9") + t)
            }
        },
        13661: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return $
                }
            });
            var n = e(13633),
                r = e(99471),
                a = e(27691),
                i = e(95619);

            function $(d, t, e, $) {
                if (!d) return {};
                if ("+" !== d[0]) {
                    var o = (0, n.Z)(d, t, e, $);
                    if (!o || o === d) {
                        if (t || e) {
                            var u = (0, r.Z)(d, t, e, $),
                                l = u.countryCallingCode,
                                s = u.number;
                            if (l) return {
                                countryCallingCode: l,
                                number: s
                            }
                        }
                        return {
                            number: d
                        }
                    }
                    d = "+" + o
                }
                if ("0" === d[1]) return {};
                $ = new a.ZP($);
                for (var c = 2; c - 1 <= i.xg && c <= d.length;) {
                    var f = d.slice(1, c);
                    if ($.hasCallingCode(f)) return $.selectNumberingPlan(f), {
                        countryCallingCode: f,
                        number: d.slice(c)
                    };
                    c++
                }
                return {}
            }
        },
        99471: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return $
                }
            });
            var n = e(27691),
                r = e(31316),
                a = e(17428),
                i = e(20280);

            function $(d, t, e, $) {
                var o = t ? (0, n.Gg)(t, $) : e;
                if (0 === d.indexOf(o)) {
                    ($ = new n.ZP($)).selectNumberingPlan(t, e);
                    var u = d.slice(o.length),
                        l = (0, a.Z)(u, $).nationalNumber,
                        s = (0, a.Z)(d, $).nationalNumber;
                    if (!(0, r.Z)(s, $.nationalNumberPattern()) && (0, r.Z)(l, $.nationalNumberPattern()) || "TOO_LONG" === (0, i.Z)(s, $)) return {
                        countryCallingCode: o,
                        number: u
                    }
                }
                return {
                    number: d
                }
            }
        },
        17428: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = e(5227),
                r = e(31316),
                a = e(20280);

            function i(d, t) {
                var e = (0, n.Z)(d, t),
                    i = e.carrierCode,
                    $ = e.nationalNumber;
                if ($ !== d) {
                    if (! function(d, t, e) {
                            if ((0, r.Z)(d, e.nationalNumberPattern()) && !(0, r.Z)(t, e.nationalNumberPattern())) return !1;
                            return !0
                        }(d, $, t)) return {
                        nationalNumber: d
                    };
                    if (t.possibleLengths() && ! function(d, t) {
                            switch ((0, a.Z)(d, t)) {
                                case "TOO_SHORT":
                                case "INVALID_LENGTH":
                                    return !1;
                                default:
                                    return !0
                            }
                        }($, t)) return {
                        nationalNumber: d
                    }
                }
                return {
                    nationalNumber: $,
                    carrierCode: i
                }
            }
        },
        5227: function(d, t, e) {
            function n(d, t) {
                if (d && t.numberingPlan.nationalPrefixForParsing()) {
                    var e = new RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"),
                        n = e.exec(d);
                    if (n) {
                        var r, a, i, $ = n.length - 1,
                            o = $ > 0 && n[$];
                        if (t.nationalPrefixTransformRule() && o) r = d.replace(e, t.nationalPrefixTransformRule()), $ > 1 && (a = n[1]);
                        else {
                            var u = n[0];
                            r = d.slice(u.length), o && (a = n[1])
                        }
                        if (o) {
                            var l = d.indexOf(n[1]);
                            d.slice(0, l) === t.numberingPlan.nationalPrefix() && (i = t.numberingPlan.nationalPrefix())
                        } else i = n[0];
                        return {
                            nationalNumber: r,
                            nationalPrefix: i,
                            carrierCode: a
                        }
                    }
                }
                return {
                    nationalNumber: d
                }
            }
            e.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        25738: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return a
                },
                i: function() {
                    return r
                }
            });
            var n = e(62354),
                r = /(\$\d)/;

            function a(d, t, e) {
                var a = e.useInternationalFormat,
                    i = e.withNationalPrefix,
                    $ = (e.carrierCode, e.metadata, d.replace(new RegExp(t.pattern()), a ? t.internationalFormat() : i && t.nationalPrefixFormattingRule() ? t.format().replace(r, t.nationalPrefixFormattingRule()) : t.format()));
                return a ? (0, n.Z)($) : $
            }
        },
        92691: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return $
                }
            });
            var n = e(27691),
                r = e(91089);

            function a(d, t) {
                var e = "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                if (e) return (e = e.call(d)).next.bind(e);
                if (Array.isArray(d) || (e = function(d, t) {
                        if (!d) return;
                        if ("string" === typeof d) return i(d, t);
                        var e = Object.prototype.toString.call(d).slice(8, -1);
                        "Object" === e && d.constructor && (e = d.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(d);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return i(d, t)
                    }(d)) || t && d && "number" === typeof d.length) {
                    e && (d = e);
                    var n = 0;
                    return function() {
                        return n >= d.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: d[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function i(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }

            function $(d, t, e) {
                var i = e.getCountryCodesForCallingCode(d);
                if (i) return 1 === i.length ? i[0] : function(d, t, e) {
                    e = new n.ZP(e);
                    for (var i, $ = a(d); !(i = $()).done;) {
                        var o = i.value;
                        if (e.country(o), e.leadingDigits()) {
                            if (t && 0 === t.search(e.leadingDigits())) return o
                        } else if ((0, r.Z)({
                                phone: t,
                                country: o
                            }, void 0, e.metadata)) return o
                    }
                }(i, t, e.metadata)
            }
        },
        91089: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = e(27691),
                r = e(31316);

            function a(d, t) {
                var e = "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                if (e) return (e = e.call(d)).next.bind(e);
                if (Array.isArray(d) || (e = function(d, t) {
                        if (!d) return;
                        if ("string" === typeof d) return i(d, t);
                        var e = Object.prototype.toString.call(d).slice(8, -1);
                        "Object" === e && d.constructor && (e = d.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(d);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return i(d, t)
                    }(d)) || t && d && "number" === typeof d.length) {
                    e && (d = e);
                    var n = 0;
                    return function() {
                        return n >= d.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: d[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function i(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }
            var $ = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

            function o(d, t, e) {
                if (t = t || {}, d.country) {
                    (e = new n.ZP(e)).selectNumberingPlan(d.country, d.countryCallingCode);
                    var i = t.v2 ? d.nationalNumber : d.phone;
                    if ((0, r.Z)(i, e.nationalNumberPattern())) {
                        if (u(i, "FIXED_LINE", e)) return e.type("MOBILE") && "" === e.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : e.type("MOBILE") ? u(i, "MOBILE", e) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
                        for (var o, l = a($); !(o = l()).done;) {
                            var s = o.value;
                            if (u(i, s, e)) return s
                        }
                    }
                }
            }

            function u(d, t, e) {
                return !(!(t = e.type(t)) || !t.pattern()) && (!(t.possibleLengths() && t.possibleLengths().indexOf(d.length) < 0) && (0, r.Z)(d, t.pattern()))
            }
        },
        93345: function(d, t, e) {
            e.d(t, {
                ZP: function() {
                    return l
                },
                ch: function() {
                    return s
                }
            });
            var n = e(95619),
                r = e(33878),
                a = "[" + n.xc + "]{" + n.ex + "}",
                i = "[" + n.xy + "]{0,1}(?:[" + n.uv + "]*[" + n.xc + "]){3,}[" + n.uv + n.xc + "]*",
                $ = new RegExp("^[" + n.xy + "]{0,1}(?:[" + n.uv + "]*[" + n.xc + "]){1,2}$", "i"),
                o = i + "(?:" + (0, r.Z)() + ")?",
                u = new RegExp("^" + a + "$|^" + o + "$", "i");

            function l(d) {
                return d.length >= n.ex && u.test(d)
            }

            function s(d) {
                return $.test(d)
            }
        },
        31316: function(d, t, e) {
            function n(d, t) {
                return d = d || "", new RegExp("^(?:" + t + ")$").test(d)
            }
            e.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        29233: function(d, t, e) {
            function n(d, t) {
                var e = "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                if (e) return (e = e.call(d)).next.bind(e);
                if (Array.isArray(d) || (e = function(d, t) {
                        if (!d) return;
                        if ("string" === typeof d) return r(d, t);
                        var e = Object.prototype.toString.call(d).slice(8, -1);
                        "Object" === e && d.constructor && (e = d.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(d);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return r(d, t)
                    }(d)) || t && d && "number" === typeof d.length) {
                    e && (d = e);
                    var n = 0;
                    return function() {
                        return n >= d.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: d[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function r(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }
            e.d(t, {
                ZP: function() {
                    return $
                },
                xh: function() {
                    return i
                }
            });
            var a = {
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                "\uff10": "0",
                "\uff11": "1",
                "\uff12": "2",
                "\uff13": "3",
                "\uff14": "4",
                "\uff15": "5",
                "\uff16": "6",
                "\uff17": "7",
                "\uff18": "8",
                "\uff19": "9",
                "\u0660": "0",
                "\u0661": "1",
                "\u0662": "2",
                "\u0663": "3",
                "\u0664": "4",
                "\u0665": "5",
                "\u0666": "6",
                "\u0667": "7",
                "\u0668": "8",
                "\u0669": "9",
                "\u06f0": "0",
                "\u06f1": "1",
                "\u06f2": "2",
                "\u06f3": "3",
                "\u06f4": "4",
                "\u06f5": "5",
                "\u06f6": "6",
                "\u06f7": "7",
                "\u06f8": "8",
                "\u06f9": "9"
            };

            function i(d) {
                return a[d]
            }

            function $(d) {
                for (var t, e = "", r = n(d.split("")); !(t = r()).done;) {
                    var a = i(t.value);
                    a && (e += a)
                }
                return e
            }
        },
        13633: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = e(27691),
                r = e(95619),
                a = new RegExp("([" + r.xc + "])");

            function i(d, t, e, r) {
                if (t) {
                    var i = new n.ZP(r);
                    i.selectNumberingPlan(t, e);
                    var $ = new RegExp(i.IDDPrefix());
                    if (0 === d.search($)) {
                        var o = (d = d.slice(d.match($)[0].length)).match(a);
                        if (!(o && null != o[1] && o[1].length > 0 && "0" === o[1])) return d
                    }
                }
            }
        },
        15864: function(d, t, e) {
            e.d(t, {
                D: function() {
                    return i
                },
                Z: function() {
                    return a
                }
            });
            var n = e(27691),
                r = e(20280);

            function a(d, t, e) {
                if (void 0 === t && (t = {}), e = new n.ZP(e), t.v2) {
                    if (!d.countryCallingCode) throw new Error("Invalid phone number object passed");
                    e.selectNumberingPlan(d.countryCallingCode)
                } else {
                    if (!d.phone) return !1;
                    if (d.country) {
                        if (!e.hasCountry(d.country)) throw new Error("Unknown country: ".concat(d.country));
                        e.country(d.country)
                    } else {
                        if (!d.countryCallingCode) throw new Error("Invalid phone number object passed");
                        e.selectNumberingPlan(d.countryCallingCode)
                    }
                }
                if (e.possibleLengths()) return i(d.phone || d.nationalNumber, e);
                if (d.countryCallingCode && e.isNonGeographicCallingCode(d.countryCallingCode)) return !0;
                throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
            }

            function i(d, t) {
                return "IS_POSSIBLE" === (0, r.Z)(d, t)
            }
        },
        27691: function(d, t, e) {
            function n(d, t) {
                d = d.split("-"), t = t.split("-");
                for (var e = d[0].split("."), n = t[0].split("."), r = 0; r < 3; r++) {
                    var a = Number(e[r]),
                        i = Number(n[r]);
                    if (a > i) return 1;
                    if (i > a) return -1;
                    if (!isNaN(a) && isNaN(i)) return 1;
                    if (isNaN(a) && !isNaN(i)) return -1
                }
                return d[1] && t[1] ? d[1] > t[1] ? 1 : d[1] < t[1] ? -1 : 0 : !d[1] && t[1] ? 1 : d[1] && !t[1] ? -1 : 0
            }

            function r(d) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(d) {
                    return typeof d
                } : function(d) {
                    return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
                }, r(d)
            }

            function a(d, t) {
                if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n)
                }
            }

            function $(d, t, e) {
                return t && i(d.prototype, t), e && i(d, e), Object.defineProperty(d, "prototype", {
                    writable: !1
                }), d
            }
            e.d(t, {
                ZP: function() {
                    return l
                },
                Gg: function() {
                    return v
                },
                aS: function() {
                    return p
                }
            });
            var o = " ext. ",
                u = /^\d+$/,
                l = function() {
                    function d(t) {
                        a(this, d),
                            function(d) {
                                if (!d) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
                                if (!m(d) || !m(d.countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(m(d) ? "an object of shape: { " + Object.keys(d).join(", ") + " }" : "a " + y(d) + ": " + d, "."))
                            }(t), this.metadata = t, b.call(this, t)
                    }
                    return $(d, [{
                        key: "getCountries",
                        value: function() {
                            return Object.keys(this.metadata.countries).filter((function(d) {
                                return "001" !== d
                            }))
                        }
                    }, {
                        key: "getCountryMetadata",
                        value: function(d) {
                            return this.metadata.countries[d]
                        }
                    }, {
                        key: "nonGeographic",
                        value: function() {
                            if (!(this.v1 || this.v2 || this.v3)) return this.metadata.nonGeographic || this.metadata.nonGeographical
                        }
                    }, {
                        key: "hasCountry",
                        value: function(d) {
                            return void 0 !== this.getCountryMetadata(d)
                        }
                    }, {
                        key: "hasCallingCode",
                        value: function(d) {
                            if (this.getCountryCodesForCallingCode(d)) return !0;
                            if (this.nonGeographic()) {
                                if (this.nonGeographic()[d]) return !0
                            } else {
                                var t = this.countryCallingCodes()[d];
                                if (t && 1 === t.length && "001" === t[0]) return !0
                            }
                        }
                    }, {
                        key: "isNonGeographicCallingCode",
                        value: function(d) {
                            return this.nonGeographic() ? !!this.nonGeographic()[d] : !this.getCountryCodesForCallingCode(d)
                        }
                    }, {
                        key: "country",
                        value: function(d) {
                            return this.selectNumberingPlan(d)
                        }
                    }, {
                        key: "selectNumberingPlan",
                        value: function(d, t) {
                            if (d && u.test(d) && (t = d, d = null), d && "001" !== d) {
                                if (!this.hasCountry(d)) throw new Error("Unknown country: ".concat(d));
                                this.numberingPlan = new s(this.getCountryMetadata(d), this)
                            } else if (t) {
                                if (!this.hasCallingCode(t)) throw new Error("Unknown calling code: ".concat(t));
                                this.numberingPlan = new s(this.getNumberingPlanMetadata(t), this)
                            } else this.numberingPlan = void 0;
                            return this
                        }
                    }, {
                        key: "getCountryCodesForCallingCode",
                        value: function(d) {
                            var t = this.countryCallingCodes()[d];
                            if (t) {
                                if (1 === t.length && 3 === t[0].length) return;
                                return t
                            }
                        }
                    }, {
                        key: "getCountryCodeForCallingCode",
                        value: function(d) {
                            var t = this.getCountryCodesForCallingCode(d);
                            if (t) return t[0]
                        }
                    }, {
                        key: "getNumberingPlanMetadata",
                        value: function(d) {
                            var t = this.getCountryCodeForCallingCode(d);
                            if (t) return this.getCountryMetadata(t);
                            if (this.nonGeographic()) {
                                var e = this.nonGeographic()[d];
                                if (e) return e
                            } else {
                                var n = this.countryCallingCodes()[d];
                                if (n && 1 === n.length && "001" === n[0]) return this.metadata.countries["001"]
                            }
                        }
                    }, {
                        key: "countryCallingCode",
                        value: function() {
                            return this.numberingPlan.callingCode()
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function() {
                            return this.numberingPlan.IDDPrefix()
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function() {
                            return this.numberingPlan.defaultIDDPrefix()
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function() {
                            return this.numberingPlan.nationalNumberPattern()
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            return this.numberingPlan.possibleLengths()
                        }
                    }, {
                        key: "formats",
                        value: function() {
                            return this.numberingPlan.formats()
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function() {
                            return this.numberingPlan.nationalPrefixForParsing()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function() {
                            return this.numberingPlan.nationalPrefixTransformRule()
                        }
                    }, {
                        key: "leadingDigits",
                        value: function() {
                            return this.numberingPlan.leadingDigits()
                        }
                    }, {
                        key: "hasTypes",
                        value: function() {
                            return this.numberingPlan.hasTypes()
                        }
                    }, {
                        key: "type",
                        value: function(d) {
                            return this.numberingPlan.type(d)
                        }
                    }, {
                        key: "ext",
                        value: function() {
                            return this.numberingPlan.ext()
                        }
                    }, {
                        key: "countryCallingCodes",
                        value: function() {
                            return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                        }
                    }, {
                        key: "chooseCountryByCountryCallingCode",
                        value: function(d) {
                            return this.selectNumberingPlan(d)
                        }
                    }, {
                        key: "hasSelectedNumberingPlan",
                        value: function() {
                            return void 0 !== this.numberingPlan
                        }
                    }]), d
                }(),
                s = function() {
                    function d(t, e) {
                        a(this, d), this.globalMetadataObject = e, this.metadata = t, b.call(this, e.metadata)
                    }
                    return $(d, [{
                        key: "callingCode",
                        value: function() {
                            return this.metadata[0]
                        }
                    }, {
                        key: "getDefaultCountryMetadataForRegion",
                        value: function() {
                            return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
                        }
                    }, {
                        key: "IDDPrefix",
                        value: function() {
                            if (!this.v1 && !this.v2) return this.metadata[1]
                        }
                    }, {
                        key: "defaultIDDPrefix",
                        value: function() {
                            if (!this.v1 && !this.v2) return this.metadata[12]
                        }
                    }, {
                        key: "nationalNumberPattern",
                        value: function() {
                            return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
                        }
                    }, {
                        key: "_getFormats",
                        value: function(d) {
                            return d[this.v1 ? 2 : this.v2 ? 3 : 4]
                        }
                    }, {
                        key: "formats",
                        value: function() {
                            var d = this,
                                t = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                            return t.map((function(t) {
                                return new c(t, d)
                            }))
                        }
                    }, {
                        key: "nationalPrefix",
                        value: function() {
                            return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                        }
                    }, {
                        key: "_getNationalPrefixFormattingRule",
                        value: function(d) {
                            return d[this.v1 ? 4 : this.v2 ? 5 : 6]
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "_nationalPrefixForParsing",
                        value: function() {
                            return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
                        }
                    }, {
                        key: "nationalPrefixForParsing",
                        value: function() {
                            return this._nationalPrefixForParsing() || this.nationalPrefix()
                        }
                    }, {
                        key: "nationalPrefixTransformRule",
                        value: function() {
                            return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                        }
                    }, {
                        key: "_getNationalPrefixIsOptionalWhenFormatting",
                        value: function() {
                            return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function() {
                            return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                        }
                    }, {
                        key: "leadingDigits",
                        value: function() {
                            return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                        }
                    }, {
                        key: "types",
                        value: function() {
                            return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                        }
                    }, {
                        key: "hasTypes",
                        value: function() {
                            return (!this.types() || 0 !== this.types().length) && !!this.types()
                        }
                    }, {
                        key: "type",
                        value: function(d) {
                            if (this.hasTypes() && g(this.types(), d)) return new h(g(this.types(), d), this)
                        }
                    }, {
                        key: "ext",
                        value: function() {
                            return this.v1 || this.v2 ? o : this.metadata[13] || o
                        }
                    }]), d
                }(),
                c = function() {
                    function d(t, e) {
                        a(this, d), this._format = t, this.metadata = e
                    }
                    return $(d, [{
                        key: "pattern",
                        value: function() {
                            return this._format[0]
                        }
                    }, {
                        key: "format",
                        value: function() {
                            return this._format[1]
                        }
                    }, {
                        key: "leadingDigitsPatterns",
                        value: function() {
                            return this._format[2] || []
                        }
                    }, {
                        key: "nationalPrefixFormattingRule",
                        value: function() {
                            return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                        }
                    }, {
                        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
                        value: function() {
                            return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
                        value: function() {
                            return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                        }
                    }, {
                        key: "usesNationalPrefix",
                        value: function() {
                            return !(!this.nationalPrefixFormattingRule() || f.test(this.nationalPrefixFormattingRule()))
                        }
                    }, {
                        key: "internationalFormat",
                        value: function() {
                            return this._format[5] || this.format()
                        }
                    }]), d
                }(),
                f = /^\(?\$1\)?$/,
                h = function() {
                    function d(t, e) {
                        a(this, d), this.type = t, this.metadata = e
                    }
                    return $(d, [{
                        key: "pattern",
                        value: function() {
                            return this.metadata.v1 ? this.type : this.type[0]
                        }
                    }, {
                        key: "possibleLengths",
                        value: function() {
                            if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                        }
                    }]), d
                }();

            function g(d, t) {
                switch (t) {
                    case "FIXED_LINE":
                        return d[0];
                    case "MOBILE":
                        return d[1];
                    case "TOLL_FREE":
                        return d[2];
                    case "PREMIUM_RATE":
                        return d[3];
                    case "PERSONAL_NUMBER":
                        return d[4];
                    case "VOICEMAIL":
                        return d[5];
                    case "UAN":
                        return d[6];
                    case "PAGER":
                        return d[7];
                    case "VOIP":
                        return d[8];
                    case "SHARED_COST":
                        return d[9]
                }
            }
            var m = function(d) {
                    return "object" === r(d)
                },
                y = function(d) {
                    return r(d)
                };

            function v(d, t) {
                if ((t = new l(t)).hasCountry(d)) return t.country(d).countryCallingCode();
                throw new Error("Unknown country: ".concat(d))
            }

            function p(d, t) {
                return void 0 !== t.countries[d]
            }

            function b(d) {
                var t = d.version;
                "number" === typeof t ? (this.v1 = 1 === t, this.v2 = 2 === t, this.v3 = 3 === t, this.v4 = 4 === t) : t ? -1 === n(t, "1.2.0") ? this.v2 = !0 : -1 === n(t, "1.7.35") ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
            }
        },
        15423: function(d, t, e) {
            e.d(t, {
                f: function() {
                    return $d
                }
            });
            var n = e(10233),
                r = e(27691),
                a = e(89480);

            function i(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n)
                }
            }
            var $ = function() {
                function d(t) {
                    var e = t.onCountryChange,
                        n = t.onCallingCodeChange;
                    ! function(d, t) {
                        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), this.onCountryChange = e, this.onCallingCodeChange = n
                }
                var t, e, n;
                return t = d, (e = [{
                    key: "reset",
                    value: function(d, t) {
                        this.international = !1, this.IDDPrefix = void 0, this.missingPlus = void 0, this.callingCode = void 0, this.digits = "", this.resetNationalSignificantNumber(), this.initCountryAndCallingCode(d, t)
                    }
                }, {
                    key: "resetNationalSignificantNumber",
                    value: function() {
                        this.nationalSignificantNumber = this.getNationalDigits(), this.nationalSignificantNumberMatchesInput = !0, this.nationalPrefix = void 0, this.carrierCode = void 0, this.complexPrefixBeforeNationalSignificantNumber = void 0
                    }
                }, {
                    key: "update",
                    value: function(d) {
                        for (var t = 0, e = Object.keys(d); t < e.length; t++) {
                            var n = e[t];
                            this[n] = d[n]
                        }
                    }
                }, {
                    key: "initCountryAndCallingCode",
                    value: function(d, t) {
                        this.setCountry(d), this.setCallingCode(t)
                    }
                }, {
                    key: "setCountry",
                    value: function(d) {
                        this.country = d, this.onCountryChange(d)
                    }
                }, {
                    key: "setCallingCode",
                    value: function(d) {
                        this.callingCode = d, this.onCallingCodeChange(d, this.country)
                    }
                }, {
                    key: "startInternationalNumber",
                    value: function(d, t) {
                        this.international = !0, this.initCountryAndCallingCode(d, t)
                    }
                }, {
                    key: "appendDigits",
                    value: function(d) {
                        this.digits += d
                    }
                }, {
                    key: "appendNationalSignificantNumberDigits",
                    value: function(d) {
                        this.nationalSignificantNumber += d
                    }
                }, {
                    key: "getNationalDigits",
                    value: function() {
                        return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits
                    }
                }, {
                    key: "getDigitsWithoutInternationalPrefix",
                    value: function() {
                        return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits
                    }
                }]) && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }();

            function o(d, t) {
                var e = "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                if (e) return (e = e.call(d)).next.bind(e);
                if (Array.isArray(d) || (e = function(d, t) {
                        if (!d) return;
                        if ("string" === typeof d) return u(d, t);
                        var e = Object.prototype.toString.call(d).slice(8, -1);
                        "Object" === e && d.constructor && (e = d.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(d);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return u(d, t)
                    }(d)) || t && d && "number" === typeof d.length) {
                    e && (d = e);
                    var n = 0;
                    return function() {
                        return n >= d.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: d[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function u(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }
            var l = "x",
                s = new RegExp(l);

            function c(d, t) {
                if (t < 1) return "";
                for (var e = ""; t > 1;) 1 & t && (e += d), t >>= 1, d += d;
                return e + d
            }

            function f(d, t) {
                return ")" === d[t] && t++,
                    function(d) {
                        var t = [],
                            e = 0;
                        for (; e < d.length;) "(" === d[e] ? t.push(e) : ")" === d[e] && t.pop(), e++;
                        var n = 0,
                            r = "";
                        t.push(d.length);
                        for (var a = 0, i = t; a < i.length; a++) {
                            var $ = i[a];
                            r += d.slice(n, $), n = $ + 1
                        }
                        return r
                    }(d.slice(0, t))
            }
            var h = e(20280),
                g = e(29233),
                m = e(25738);

            function y(d, t, e) {
                var n = e.metadata,
                    r = e.shouldTryNationalPrefixFormattingRule,
                    a = e.getSeparatorAfterNationalPrefix;
                if (new RegExp("^(?:".concat(t.pattern(), ")$")).test(d.nationalSignificantNumber)) return function(d, t, e) {
                    var n = e.metadata,
                        r = e.shouldTryNationalPrefixFormattingRule,
                        a = e.getSeparatorAfterNationalPrefix;
                    d.nationalSignificantNumber, d.international, d.nationalPrefix, d.carrierCode;
                    if (r(t)) {
                        var i = v(d, t, {
                            useNationalPrefixFormattingRule: !0,
                            getSeparatorAfterNationalPrefix: a,
                            metadata: n
                        });
                        if (i) return i
                    }
                    return v(d, t, {
                        useNationalPrefixFormattingRule: !1,
                        getSeparatorAfterNationalPrefix: a,
                        metadata: n
                    })
                }(d, t, {
                    metadata: n,
                    shouldTryNationalPrefixFormattingRule: r,
                    getSeparatorAfterNationalPrefix: a
                })
            }

            function v(d, t, e) {
                var n = e.metadata,
                    r = e.useNationalPrefixFormattingRule,
                    a = e.getSeparatorAfterNationalPrefix,
                    i = (0, m.Z)(d.nationalSignificantNumber, t, {
                        carrierCode: d.carrierCode,
                        useInternationalFormat: d.international,
                        withNationalPrefix: r,
                        metadata: n
                    });
                if (r || (d.nationalPrefix ? i = d.nationalPrefix + a(t) + i : d.complexPrefixBeforeNationalSignificantNumber && (i = d.complexPrefixBeforeNationalSignificantNumber + " " + i)), function(d, t) {
                        return (0, g.ZP)(d) === t.getNationalDigits()
                    }(i, d)) return i
            }

            function p(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n)
                }
            }
            var b = function() {
                function d() {
                    ! function(d, t) {
                        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d)
                }
                var t, e, n;
                return t = d, (e = [{
                    key: "parse",
                    value: function(d) {
                        if (this.context = [{
                                or: !0,
                                instructions: []
                            }], this.parsePattern(d), 1 !== this.context.length) throw new Error("Non-finalized contexts left when pattern parse ended");
                        var t = this.context[0],
                            e = t.branches,
                            n = t.instructions;
                        if (e) return {
                            op: "|",
                            args: e.concat([x(n)])
                        };
                        if (0 === n.length) throw new Error("Pattern is required");
                        return 1 === n.length ? n[0] : n
                    }
                }, {
                    key: "startContext",
                    value: function(d) {
                        this.context.push(d)
                    }
                }, {
                    key: "endContext",
                    value: function() {
                        this.context.pop()
                    }
                }, {
                    key: "getContext",
                    value: function() {
                        return this.context[this.context.length - 1]
                    }
                }, {
                    key: "parsePattern",
                    value: function(d) {
                        if (!d) throw new Error("Pattern is required");
                        var t = d.match(P);
                        if (t) {
                            var e = t[1],
                                n = d.slice(0, t.index),
                                r = d.slice(t.index + e.length);
                            switch (e) {
                                case "(?:":
                                    n && this.parsePattern(n), this.startContext({
                                        or: !0,
                                        instructions: [],
                                        branches: []
                                    });
                                    break;
                                case ")":
                                    if (!this.getContext().or) throw new Error('")" operator must be preceded by "(?:" operator');
                                    if (n && this.parsePattern(n), 0 === this.getContext().instructions.length) throw new Error('No instructions found after "|" operator in an "or" group');
                                    var a = this.getContext().branches;
                                    a.push(x(this.getContext().instructions)), this.endContext(), this.getContext().instructions.push({
                                        op: "|",
                                        args: a
                                    });
                                    break;
                                case "|":
                                    if (!this.getContext().or) throw new Error('"|" operator can only be used inside "or" groups');
                                    if (n && this.parsePattern(n), !this.getContext().branches) {
                                        if (1 !== this.context.length) throw new Error('"branches" not found in an "or" group context');
                                        this.getContext().branches = []
                                    }
                                    this.getContext().branches.push(x(this.getContext().instructions)), this.getContext().instructions = [];
                                    break;
                                case "[":
                                    n && this.parsePattern(n), this.startContext({
                                        oneOfSet: !0
                                    });
                                    break;
                                case "]":
                                    if (!this.getContext().oneOfSet) throw new Error('"]" operator must be preceded by "[" operator');
                                    this.endContext(), this.getContext().instructions.push({
                                        op: "[]",
                                        args: C(n)
                                    });
                                    break;
                                default:
                                    throw new Error("Unknown operator: ".concat(e))
                            }
                            r && this.parsePattern(r)
                        } else {
                            if (N.test(d)) throw new Error("Illegal characters found in a pattern: ".concat(d));
                            this.getContext().instructions = this.getContext().instructions.concat(d.split(""))
                        }
                    }
                }]) && p(t.prototype, e), n && p(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }();

            function C(d) {
                for (var t = [], e = 0; e < d.length;) {
                    if ("-" === d[e]) {
                        if (0 === e || e === d.length - 1) throw new Error("Couldn't parse a one-of set pattern: ".concat(d));
                        for (var n = d[e - 1].charCodeAt(0) + 1, r = d[e + 1].charCodeAt(0) - 1, a = n; a <= r;) t.push(String.fromCharCode(a)), a++
                    } else t.push(d[e]);
                    e++
                }
                return t
            }
            var N = /[\(\)\[\]\?\:\|]/,
                P = new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");

            function x(d) {
                return 1 === d.length ? d[0] : d
            }

            function S(d, t) {
                var e = "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                if (e) return (e = e.call(d)).next.bind(e);
                if (Array.isArray(d) || (e = function(d, t) {
                        if (!d) return;
                        if ("string" === typeof d) return w(d, t);
                        var e = Object.prototype.toString.call(d).slice(8, -1);
                        "Object" === e && d.constructor && (e = d.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(d);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return w(d, t)
                    }(d)) || t && d && "number" === typeof d.length) {
                    e && (d = e);
                    var n = 0;
                    return function() {
                        return n >= d.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: d[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function w(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }

            function I(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n)
                }
            }
            var E = function() {
                function d(t) {
                    ! function(d, t) {
                        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), this.matchTree = (new b).parse(t)
                }
                var t, e, n;
                return t = d, e = [{
                    key: "match",
                    value: function(d) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            e = t.allowOverflow;
                        if (!d) throw new Error("String is required");
                        var n = A(d.split(""), this.matchTree, !0);
                        if (n && n.match && delete n.matchedChars, !n || !n.overflow || e) return n
                    }
                }], e && I(t.prototype, e), n && I(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }();

            function A(d, t, e) {
                if ("string" === typeof t) {
                    var n = d.join("");
                    return 0 === t.indexOf(n) ? d.length === t.length ? {
                        match: !0,
                        matchedChars: d
                    } : {
                        partialMatch: !0
                    } : 0 === n.indexOf(t) ? e && d.length > t.length ? {
                        overflow: !0
                    } : {
                        match: !0,
                        matchedChars: d.slice(0, t.length)
                    } : void 0
                }
                if (Array.isArray(t)) {
                    for (var r = d.slice(), a = 0; a < t.length;) {
                        var i = A(r, t[a], e && a === t.length - 1);
                        if (!i) return;
                        if (i.overflow) return i;
                        if (!i.match) {
                            if (i.partialMatch) return {
                                partialMatch: !0
                            };
                            throw new Error("Unsupported match result:\n".concat(JSON.stringify(i, null, 2)))
                        }
                        if (0 === (r = r.slice(i.matchedChars.length)).length) return a === t.length - 1 ? {
                            match: !0,
                            matchedChars: d
                        } : {
                            partialMatch: !0
                        };
                        a++
                    }
                    return e ? {
                        overflow: !0
                    } : {
                        match: !0,
                        matchedChars: d.slice(0, d.length - r.length)
                    }
                }
                switch (t.op) {
                    case "|":
                        for (var $, o, u = S(t.args); !(o = u()).done;) {
                            var l = A(d, o.value, e);
                            if (l) {
                                if (l.overflow) return l;
                                if (l.match) return {
                                    match: !0,
                                    matchedChars: l.matchedChars
                                };
                                if (!l.partialMatch) throw new Error("Unsupported match result:\n".concat(JSON.stringify(l, null, 2)));
                                $ = !0
                            }
                        }
                        return $ ? {
                            partialMatch: !0
                        } : void 0;
                    case "[]":
                        for (var s, c = S(t.args); !(s = c()).done;) {
                            var f = s.value;
                            if (d[0] === f) return 1 === d.length ? {
                                match: !0,
                                matchedChars: d
                            } : e ? {
                                overflow: !0
                            } : {
                                match: !0,
                                matchedChars: [f]
                            }
                        }
                        return;
                    default:
                        throw new Error("Unsupported instruction tree: ".concat(t))
                }
            }
            var O = e(95619),
                k = e(62354);

            function F(d, t) {
                var e = "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                if (e) return (e = e.call(d)).next.bind(e);
                if (Array.isArray(d) || (e = function(d, t) {
                        if (!d) return;
                        if ("string" === typeof d) return T(d, t);
                        var e = Object.prototype.toString.call(d).slice(8, -1);
                        "Object" === e && d.constructor && (e = d.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(d);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return T(d, t)
                    }(d)) || t && d && "number" === typeof d.length) {
                    e && (d = e);
                    var n = 0;
                    return function() {
                        return n >= d.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: d[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function T(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }

            function M(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n)
                }
            }
            var D = c("9", 15),
                R = /[- ]/,
                L = function() {
                    return /\[([^\[\]])*\]/g
                },
                Z = function() {
                    return /\d(?=[^,}][^,}])/g
                },
                j = new RegExp("[" + O.uv + "]*\\$1[" + O.uv + "]*(\\$\\d[" + O.uv + "]*)*$"),
                G = function() {
                    function d(t) {
                        t.state;
                        var e = t.metadata;
                        ! function(d, t) {
                            if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, d), this.metadata = e, this.resetFormat()
                    }
                    var t, e, n;
                    return t = d, (e = [{
                        key: "resetFormat",
                        value: function() {
                            this.chosenFormat = void 0, this.template = void 0, this.nationalNumberTemplate = void 0, this.populatedNationalNumberTemplate = void 0, this.populatedNationalNumberTemplatePosition = -1
                        }
                    }, {
                        key: "reset",
                        value: function(d, t) {
                            this.resetFormat(), d ? (this.isNANP = "1" === d.callingCode(), this.matchingFormats = d.formats(), t.nationalSignificantNumber && this.narrowDownMatchingFormats(t)) : (this.isNANP = void 0, this.matchingFormats = [])
                        }
                    }, {
                        key: "format",
                        value: function(d, t) {
                            var e, n, r = this;
                            if (e = t.nationalSignificantNumber, n = this.metadata, "IS_POSSIBLE" === (0, h.Z)(e, n))
                                for (var a, i = F(this.matchingFormats); !(a = i()).done;) {
                                    var $ = a.value,
                                        o = y(t, $, {
                                            metadata: this.metadata,
                                            shouldTryNationalPrefixFormattingRule: function(d) {
                                                return r.shouldTryNationalPrefixFormattingRule(d, {
                                                    international: t.international,
                                                    nationalPrefix: t.nationalPrefix
                                                })
                                            },
                                            getSeparatorAfterNationalPrefix: function(d) {
                                                return r.getSeparatorAfterNationalPrefix(d)
                                            }
                                        });
                                    if (o) return this.resetFormat(), this.chosenFormat = $, this.setNationalNumberTemplate(o.replace(/\d/g, l), t), this.populatedNationalNumberTemplate = o, this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(l), o
                                }
                            return this.formatNationalNumberWithNextDigits(d, t)
                        }
                    }, {
                        key: "formatNationalNumberWithNextDigits",
                        value: function(d, t) {
                            var e = this.chosenFormat,
                                n = this.chooseFormat(t);
                            if (n) return n === e ? this.formatNextNationalNumberDigits(d) : this.formatNextNationalNumberDigits(t.getNationalDigits())
                        }
                    }, {
                        key: "narrowDownMatchingFormats",
                        value: function(d) {
                            var t = this,
                                e = d.nationalSignificantNumber,
                                n = d.nationalPrefix,
                                r = d.international,
                                a = e,
                                i = a.length - 3;
                            i < 0 && (i = 0), this.matchingFormats = this.matchingFormats.filter((function(d) {
                                return t.formatSuits(d, r, n) && t.formatMatches(d, a, i)
                            })), this.chosenFormat && -1 === this.matchingFormats.indexOf(this.chosenFormat) && this.resetFormat()
                        }
                    }, {
                        key: "formatSuits",
                        value: function(d, t, e) {
                            return !(e && !d.usesNationalPrefix() && !d.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) && !(!t && !e && d.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
                        }
                    }, {
                        key: "formatMatches",
                        value: function(d, t, e) {
                            var n = d.leadingDigitsPatterns().length;
                            if (0 === n) return !0;
                            e = Math.min(e, n - 1);
                            var r = d.leadingDigitsPatterns()[e];
                            if (t.length < 3) try {
                                return void 0 !== new E(r).match(t, {
                                    allowOverflow: !0
                                })
                            } catch (a) {
                                return console.error(a), !0
                            }
                            return new RegExp("^(".concat(r, ")")).test(t)
                        }
                    }, {
                        key: "getFormatFormat",
                        value: function(d, t) {
                            return t ? d.internationalFormat() : d.format()
                        }
                    }, {
                        key: "chooseFormat",
                        value: function(d) {
                            for (var t, e = this, n = function() {
                                    var n = t.value;
                                    return e.chosenFormat === n ? "break" : j.test(e.getFormatFormat(n, d.international)) ? e.createTemplateForFormat(n, d) ? (e.chosenFormat = n, "break") : (e.matchingFormats = e.matchingFormats.filter((function(d) {
                                        return d !== n
                                    })), "continue") : "continue"
                                }, r = F(this.matchingFormats.slice()); !(t = r()).done;) {
                                var a = n();
                                if ("break" === a) break
                            }
                            return this.chosenFormat || this.resetFormat(), this.chosenFormat
                        }
                    }, {
                        key: "createTemplateForFormat",
                        value: function(d, t) {
                            if (!(d.pattern().indexOf("|") >= 0)) {
                                var e = this.getTemplateForFormat(d, t);
                                return e ? (this.setNationalNumberTemplate(e, t), !0) : void 0
                            }
                        }
                    }, {
                        key: "getSeparatorAfterNationalPrefix",
                        value: function(d) {
                            return this.isNANP || d && d.nationalPrefixFormattingRule() && R.test(d.nationalPrefixFormattingRule()) ? " " : ""
                        }
                    }, {
                        key: "getInternationalPrefixBeforeCountryCallingCode",
                        value: function(d, t) {
                            var e = d.IDDPrefix,
                                n = d.missingPlus;
                            return e ? t && !1 === t.spacing ? e : e + " " : n ? "" : "+"
                        }
                    }, {
                        key: "getTemplate",
                        value: function(d) {
                            if (this.template) {
                                for (var t = -1, e = 0, n = d.international ? this.getInternationalPrefixBeforeCountryCallingCode(d, {
                                        spacing: !1
                                    }) : ""; e < n.length + d.getDigitsWithoutInternationalPrefix().length;) t = this.template.indexOf(l, t + 1), e++;
                                return f(this.template, t + 1)
                            }
                        }
                    }, {
                        key: "setNationalNumberTemplate",
                        value: function(d, t) {
                            this.nationalNumberTemplate = d, this.populatedNationalNumberTemplate = d, this.populatedNationalNumberTemplatePosition = -1, t.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(t).replace(/[\d\+]/g, l) + c(l, t.callingCode.length) + " " + d : this.template = d
                        }
                    }, {
                        key: "getTemplateForFormat",
                        value: function(d, t) {
                            var e = t.nationalSignificantNumber,
                                n = t.international,
                                r = t.nationalPrefix,
                                a = t.complexPrefixBeforeNationalSignificantNumber,
                                i = d.pattern();
                            i = i.replace(L(), "\\d").replace(Z(), "\\d");
                            var $ = D.match(i)[0];
                            if (!(e.length > $.length)) {
                                var o = new RegExp("^" + i + "$"),
                                    u = e.replace(/\d/g, "9");
                                o.test(u) && ($ = u);
                                var s, f = this.getFormatFormat(d, n);
                                if (this.shouldTryNationalPrefixFormattingRule(d, {
                                        international: n,
                                        nationalPrefix: r
                                    })) {
                                    var h = f.replace(m.i, d.nationalPrefixFormattingRule());
                                    if ((0, g.ZP)(d.nationalPrefixFormattingRule()) === (r || "") + (0, g.ZP)("$1") && (f = h, s = !0, r))
                                        for (var y = r.length; y > 0;) f = f.replace(/\d/, l), y--
                                }
                                var v = $.replace(new RegExp(i), f).replace(new RegExp("9", "g"), l);
                                return s || (a ? v = c(l, a.length) + " " + v : r && (v = c(l, r.length) + this.getSeparatorAfterNationalPrefix(d) + v)), n && (v = (0, k.Z)(v)), v
                            }
                        }
                    }, {
                        key: "formatNextNationalNumberDigits",
                        value: function(d) {
                            var t = function(d, t, e) {
                                for (var n, r = o(e.split("")); !(n = r()).done;) {
                                    var a = n.value;
                                    if (d.slice(t + 1).search(s) < 0) return;
                                    t = d.search(s), d = d.replace(s, a)
                                }
                                return [d, t]
                            }(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, d);
                            if (t) return this.populatedNationalNumberTemplate = t[0], this.populatedNationalNumberTemplatePosition = t[1], f(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
                            this.resetFormat()
                        }
                    }, {
                        key: "shouldTryNationalPrefixFormattingRule",
                        value: function(d, t) {
                            var e = t.international,
                                n = t.nationalPrefix;
                            if (d.nationalPrefixFormattingRule()) {
                                var r = d.usesNationalPrefix();
                                if (r && n || !r && !e) return !0
                            }
                        }
                    }]) && M(t.prototype, e), n && M(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), d
                }(),
                B = e(13661),
                _ = e(99471),
                U = e(5227),
                W = e(13633);

            function K(d, t) {
                return function(d) {
                    if (Array.isArray(d)) return d
                }(d) || function(d, t) {
                    var e = null == d ? null : "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                    if (null == e) return;
                    var n, r, a = [],
                        i = !0,
                        $ = !1;
                    try {
                        for (e = e.call(d); !(i = (n = e.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                    } catch (o) {
                        $ = !0, r = o
                    } finally {
                        try {
                            i || null == e.return || e.return()
                        } finally {
                            if ($) throw r
                        }
                    }
                    return a
                }(d, t) || function(d, t) {
                    if (!d) return;
                    if ("string" === typeof d) return H(d, t);
                    var e = Object.prototype.toString.call(d).slice(8, -1);
                    "Object" === e && d.constructor && (e = d.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(d);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return H(d, t)
                }(d, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }

            function V(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n)
                }
            }
            var Y = "[" + O.uv + O.xc + "]+",
                J = new RegExp("^" + Y + "$", "i"),
                X = "(?:[" + O.xy + "][" + O.uv + O.xc + "]*|[" + O.uv + O.xc + "]+)",
                Q = new RegExp("[^" + O.uv + O.xc + "]+.*$"),
                q = /[^\d\[\]]/,
                z = function() {
                    function d(t) {
                        var e = t.defaultCountry,
                            n = t.defaultCallingCode,
                            r = t.metadata,
                            a = t.onNationalSignificantNumberChange;
                        ! function(d, t) {
                            if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, d), this.defaultCountry = e, this.defaultCallingCode = n, this.metadata = r, this.onNationalSignificantNumberChange = a
                    }
                    var t, e, n;
                    return t = d, (e = [{
                        key: "input",
                        value: function(d, t) {
                            var e, n = function(d) {
                                    var t = K(function(d) {
                                            var t = function(d) {
                                                var t, e = d.search(X);
                                                if (!(e < 0)) return "+" === (d = d.slice(e))[0] && (t = !0, d = d.slice("+".length)), d = d.replace(Q, ""), t && (d = "+" + d), d
                                            }(d) || "";
                                            return "+" === t[0] ? [t.slice("+".length), !0] : [t]
                                        }(d), 2),
                                        e = t[0],
                                        n = t[1];
                                    return J.test(e) || (e = ""), [e, n]
                                }(d),
                                r = K(n, 2),
                                a = r[0],
                                i = r[1],
                                $ = (0, g.ZP)(a);
                            return i && (t.digits || (t.startInternationalNumber(), $ || (e = !0))), $ && this.inputDigits($, t), {
                                digits: $,
                                justLeadingPlus: e
                            }
                        }
                    }, {
                        key: "inputDigits",
                        value: function(d, t) {
                            var e = t.digits,
                                n = e.length < 3 && e.length + d.length >= 3;
                            if (t.appendDigits(d), n && this.extractIddPrefix(t), this.isWaitingForCountryCallingCode(t)) {
                                if (!this.extractCountryCallingCode(t)) return
                            } else t.appendNationalSignificantNumberDigits(d);
                            t.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(t.getNationalDigits(), (function(d) {
                                return t.update(d)
                            }))
                        }
                    }, {
                        key: "isWaitingForCountryCallingCode",
                        value: function(d) {
                            var t = d.international,
                                e = d.callingCode;
                            return t && !e
                        }
                    }, {
                        key: "extractCountryCallingCode",
                        value: function(d) {
                            var t = (0, B.Z)("+" + d.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                                e = t.countryCallingCode,
                                n = t.number;
                            if (e) return d.setCallingCode(e), d.update({
                                nationalSignificantNumber: n
                            }), !0
                        }
                    }, {
                        key: "reset",
                        value: function(d) {
                            if (d) {
                                this.hasSelectedNumberingPlan = !0;
                                var t = d._nationalPrefixForParsing();
                                this.couldPossiblyExtractAnotherNationalSignificantNumber = t && q.test(t)
                            } else this.hasSelectedNumberingPlan = void 0, this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0
                        }
                    }, {
                        key: "extractNationalSignificantNumber",
                        value: function(d, t) {
                            if (this.hasSelectedNumberingPlan) {
                                var e = (0, U.Z)(d, this.metadata),
                                    n = e.nationalPrefix,
                                    r = e.nationalNumber,
                                    a = e.carrierCode;
                                if (r !== d) return this.onExtractedNationalNumber(n, a, r, d, t), !0
                            }
                        }
                    }, {
                        key: "extractAnotherNationalSignificantNumber",
                        value: function(d, t, e) {
                            if (!this.hasExtractedNationalSignificantNumber) return this.extractNationalSignificantNumber(d, e);
                            if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
                                var n = (0, U.Z)(d, this.metadata),
                                    r = n.nationalPrefix,
                                    a = n.nationalNumber,
                                    i = n.carrierCode;
                                if (a !== t) return this.onExtractedNationalNumber(r, i, a, d, e), !0
                            }
                        }
                    }, {
                        key: "onExtractedNationalNumber",
                        value: function(d, t, e, n, r) {
                            var a, i, $ = n.lastIndexOf(e);
                            if ($ >= 0 && $ === n.length - e.length) {
                                i = !0;
                                var o = n.slice(0, $);
                                o !== d && (a = o)
                            }
                            r({
                                nationalPrefix: d,
                                carrierCode: t,
                                nationalSignificantNumber: e,
                                nationalSignificantNumberMatchesInput: i,
                                complexPrefixBeforeNationalSignificantNumber: a
                            }), this.hasExtractedNationalSignificantNumber = !0, this.onNationalSignificantNumberChange()
                        }
                    }, {
                        key: "reExtractNationalSignificantNumber",
                        value: function(d) {
                            return !!this.extractAnotherNationalSignificantNumber(d.getNationalDigits(), d.nationalSignificantNumber, (function(t) {
                                return d.update(t)
                            })) || (this.extractIddPrefix(d) || this.fixMissingPlus(d) ? (this.extractCallingCodeAndNationalSignificantNumber(d), !0) : void 0)
                        }
                    }, {
                        key: "extractIddPrefix",
                        value: function(d) {
                            var t = d.international,
                                e = d.IDDPrefix,
                                n = d.digits;
                            if (d.nationalSignificantNumber, !t && !e) {
                                var r = (0, W.Z)(n, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
                                return void 0 !== r && r !== n ? (d.update({
                                    IDDPrefix: n.slice(0, n.length - r.length)
                                }), this.startInternationalNumber(d, {
                                    country: void 0,
                                    callingCode: void 0
                                }), !0) : void 0
                            }
                        }
                    }, {
                        key: "fixMissingPlus",
                        value: function(d) {
                            if (!d.international) {
                                var t = (0, _.Z)(d.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata),
                                    e = t.countryCallingCode;
                                if (t.number, e) return d.update({
                                    missingPlus: !0
                                }), this.startInternationalNumber(d, {
                                    country: d.country,
                                    callingCode: e
                                }), !0
                            }
                        }
                    }, {
                        key: "startInternationalNumber",
                        value: function(d, t) {
                            var e = t.country,
                                n = t.callingCode;
                            d.startInternationalNumber(e, n), d.nationalSignificantNumber && (d.resetNationalSignificantNumber(), this.onNationalSignificantNumberChange(), this.hasExtractedNationalSignificantNumber = void 0)
                        }
                    }, {
                        key: "extractCallingCodeAndNationalSignificantNumber",
                        value: function(d) {
                            this.extractCountryCallingCode(d) && this.extractNationalSignificantNumber(d.getNationalDigits(), (function(t) {
                                return d.update(t)
                            }))
                        }
                    }]) && V(t.prototype, e), n && V(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), d
                }();
            var dd = e(92691);

            function td(d) {
                return td = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(d) {
                    return typeof d
                } : function(d) {
                    return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
                }, td(d)
            }

            function ed(d, t) {
                return function(d) {
                    if (Array.isArray(d)) return d
                }(d) || function(d, t) {
                    var e = null == d ? null : "undefined" !== typeof Symbol && d[Symbol.iterator] || d["@@iterator"];
                    if (null == e) return;
                    var n, r, a = [],
                        i = !0,
                        $ = !1;
                    try {
                        for (e = e.call(d); !(i = (n = e.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0);
                    } catch (o) {
                        $ = !0, r = o
                    } finally {
                        try {
                            i || null == e.return || e.return()
                        } finally {
                            if ($) throw r
                        }
                    }
                    return a
                }(d, t) || function(d, t) {
                    if (!d) return;
                    if ("string" === typeof d) return nd(d, t);
                    var e = Object.prototype.toString.call(d).slice(8, -1);
                    "Object" === e && d.constructor && (e = d.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(d);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return nd(d, t)
                }(d, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nd(d, t) {
                (null == t || t > d.length) && (t = d.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = d[e];
                return n
            }

            function rd(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n)
                }
            }
            var ad = function() {
                function d(t, e) {
                    ! function(d, t) {
                        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), this.metadata = new r.ZP(e);
                    var n = ed(this.getCountryAndCallingCode(t), 2),
                        a = n[0],
                        i = n[1];
                    this.defaultCountry = a, this.defaultCallingCode = i, this.reset()
                }
                var t, e, n;
                return t = d, (e = [{
                    key: "getCountryAndCallingCode",
                    value: function(d) {
                        var t, e;
                        return d && ("object" === td(d) ? (t = d.defaultCountry, e = d.defaultCallingCode) : t = d), t && !this.metadata.hasCountry(t) && (t = void 0), [t, e]
                    }
                }, {
                    key: "input",
                    value: function(d) {
                        var t = this.parser.input(d, this.state),
                            e = t.digits;
                        if (t.justLeadingPlus) this.formattedOutput = "+";
                        else if (e) {
                            var n;
                            if (this.determineTheCountryIfNeeded(), this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state), this.metadata.hasSelectedNumberingPlan() && (n = this.formatter.format(e, this.state)), void 0 === n && this.parser.reExtractNationalSignificantNumber(this.state)) {
                                this.determineTheCountryIfNeeded();
                                var r = this.state.getNationalDigits();
                                r && (n = this.formatter.format(r, this.state))
                            }
                            this.formattedOutput = n ? this.getFullNumber(n) : this.getNonFormattedNumber()
                        }
                        return this.formattedOutput
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var d = this;
                        return this.state = new $({
                            onCountryChange: function(t) {
                                d.country = t
                            },
                            onCallingCodeChange: function(t, e) {
                                d.metadata.selectNumberingPlan(e, t), d.formatter.reset(d.metadata.numberingPlan, d.state), d.parser.reset(d.metadata.numberingPlan)
                            }
                        }), this.formatter = new G({
                            state: this.state,
                            metadata: this.metadata
                        }), this.parser = new z({
                            defaultCountry: this.defaultCountry,
                            defaultCallingCode: this.defaultCallingCode,
                            metadata: this.metadata,
                            state: this.state,
                            onNationalSignificantNumberChange: function() {
                                d.determineTheCountryIfNeeded(), d.formatter.reset(d.metadata.numberingPlan, d.state)
                            }
                        }), this.state.reset(this.defaultCountry, this.defaultCallingCode), this.formattedOutput = "", this
                    }
                }, {
                    key: "isInternational",
                    value: function() {
                        return this.state.international
                    }
                }, {
                    key: "getCallingCode",
                    value: function() {
                        if (this.isInternational()) return this.state.callingCode
                    }
                }, {
                    key: "getCountryCallingCode",
                    value: function() {
                        return this.getCallingCode()
                    }
                }, {
                    key: "getCountry",
                    value: function() {
                        if (this.state.digits) return this._getCountry()
                    }
                }, {
                    key: "_getCountry",
                    value: function() {
                        var d = this.state.country;
                        return d
                    }
                }, {
                    key: "determineTheCountryIfNeeded",
                    value: function() {
                        this.state.country && !this.isCountryCallingCodeAmbiguous() || this.determineTheCountry()
                    }
                }, {
                    key: "getFullNumber",
                    value: function(d) {
                        var t = this;
                        if (this.isInternational()) {
                            var e = function(d) {
                                    return t.formatter.getInternationalPrefixBeforeCountryCallingCode(t.state, {
                                        spacing: !!d
                                    }) + d
                                },
                                n = this.state.callingCode;
                            return e(n ? d ? "".concat(n, " ").concat(d) : n : "".concat(this.state.getDigitsWithoutInternationalPrefix()))
                        }
                        return d
                    }
                }, {
                    key: "getNonFormattedNationalNumberWithPrefix",
                    value: function() {
                        var d = this.state,
                            t = d.nationalSignificantNumber,
                            e = d.complexPrefixBeforeNationalSignificantNumber,
                            n = d.nationalPrefix,
                            r = t,
                            a = e || n;
                        return a && (r = a + r), r
                    }
                }, {
                    key: "getNonFormattedNumber",
                    value: function() {
                        var d = this.state.nationalSignificantNumberMatchesInput;
                        return this.getFullNumber(d ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits())
                    }
                }, {
                    key: "getNonFormattedTemplate",
                    value: function() {
                        var d = this.getNonFormattedNumber();
                        if (d) return d.replace(/[\+\d]/g, l)
                    }
                }, {
                    key: "isCountryCallingCodeAmbiguous",
                    value: function() {
                        var d = this.state.callingCode,
                            t = this.metadata.getCountryCodesForCallingCode(d);
                        return t && t.length > 1
                    }
                }, {
                    key: "determineTheCountry",
                    value: function() {
                        this.state.setCountry((0, dd.Z)(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, this.state.nationalSignificantNumber, this.metadata))
                    }
                }, {
                    key: "getNumberValue",
                    value: function() {
                        var d = this.state,
                            t = d.digits,
                            e = d.callingCode,
                            n = d.country,
                            r = d.nationalSignificantNumber;
                        if (t) return this.isInternational() ? e ? "+" + e + r : "+" + t : n || e ? "+" + (n ? this.metadata.countryCallingCode() : e) + r : void 0
                    }
                }, {
                    key: "getNumber",
                    value: function() {
                        var d = this.state,
                            t = d.nationalSignificantNumber,
                            e = d.carrierCode,
                            n = d.callingCode,
                            r = this._getCountry();
                        if (t && (r || n)) {
                            var i = new a.Z(r || n, t, this.metadata.metadata);
                            return e && (i.carrierCode = e), i
                        }
                    }
                }, {
                    key: "isPossible",
                    value: function() {
                        var d = this.getNumber();
                        return !!d && d.isPossible()
                    }
                }, {
                    key: "isValid",
                    value: function() {
                        var d = this.getNumber();
                        return !!d && d.isValid()
                    }
                }, {
                    key: "getNationalNumber",
                    value: function() {
                        return this.state.nationalSignificantNumber
                    }
                }, {
                    key: "getChars",
                    value: function() {
                        return (this.state.international ? "+" : "") + this.state.digits
                    }
                }, {
                    key: "getTemplate",
                    value: function() {
                        return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || ""
                    }
                }]) && rd(t.prototype, e), n && rd(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }();

            function id(d, t, e) {
                return e || (e = t, t = void 0), new ad(t, e).input(d)
            }

            function $d() {
                return (0, n.Z)(id, arguments)
            }
        },
        87688: function(d, t, e) {
            e.d(t, {
                G: function() {
                    return a
                }
            });
            var n = e(10233),
                r = e(27691);

            function a() {
                return (0, n.Z)(r.Gg, arguments)
            }
        },
        10233: function(d, t, e) {
            e.d(t, {
                Z: function() {
                    return r
                }
            });
            var n = {
                version: 4,
                country_calling_codes: {
                    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                    7: ["RU", "KZ"],
                    20: ["EG"],
                    27: ["ZA"],
                    30: ["GR"],
                    31: ["NL"],
                    32: ["BE"],
                    33: ["FR"],
                    34: ["ES"],
                    36: ["HU"],
                    39: ["IT", "VA"],
                    40: ["RO"],
                    41: ["CH"],
                    43: ["AT"],
                    44: ["GB", "GG", "IM", "JE"],
                    45: ["DK"],
                    46: ["SE"],
                    47: ["NO", "SJ"],
                    48: ["PL"],
                    49: ["DE"],
                    51: ["PE"],
                    52: ["MX"],
                    53: ["CU"],
                    54: ["AR"],
                    55: ["BR"],
                    56: ["CL"],
                    57: ["CO"],
                    58: ["VE"],
                    60: ["MY"],
                    61: ["AU", "CC", "CX"],
                    62: ["ID"],
                    63: ["PH"],
                    64: ["NZ"],
                    65: ["SG"],
                    66: ["TH"],
                    81: ["JP"],
                    82: ["KR"],
                    84: ["VN"],
                    86: ["CN"],
                    90: ["TR"],
                    91: ["IN"],
                    92: ["PK"],
                    93: ["AF"],
                    94: ["LK"],
                    95: ["MM"],
                    98: ["IR"],
                    211: ["SS"],
                    212: ["MA", "EH"],
                    213: ["DZ"],
                    216: ["TN"],
                    218: ["LY"],
                    220: ["GM"],
                    221: ["SN"],
                    222: ["MR"],
                    223: ["ML"],
                    224: ["GN"],
                    225: ["CI"],
                    226: ["BF"],
                    227: ["NE"],
                    228: ["TG"],
                    229: ["BJ"],
                    230: ["MU"],
                    231: ["LR"],
                    232: ["SL"],
                    233: ["GH"],
                    234: ["NG"],
                    235: ["TD"],
                    236: ["CF"],
                    237: ["CM"],
                    238: ["CV"],
                    239: ["ST"],
                    240: ["GQ"],
                    241: ["GA"],
                    242: ["CG"],
                    243: ["CD"],
                    244: ["AO"],
                    245: ["GW"],
                    246: ["IO"],
                    247: ["AC"],
                    248: ["SC"],
                    249: ["SD"],
                    250: ["RW"],
                    251: ["ET"],
                    252: ["SO"],
                    253: ["DJ"],
                    254: ["KE"],
                    255: ["TZ"],
                    256: ["UG"],
                    257: ["BI"],
                    258: ["MZ"],
                    260: ["ZM"],
                    261: ["MG"],
                    262: ["RE", "YT"],
                    263: ["ZW"],
                    264: ["NA"],
                    265: ["MW"],
                    266: ["LS"],
                    267: ["BW"],
                    268: ["SZ"],
                    269: ["KM"],
                    290: ["SH", "TA"],
                    291: ["ER"],
                    297: ["AW"],
                    298: ["FO"],
                    299: ["GL"],
                    350: ["GI"],
                    351: ["PT"],
                    352: ["LU"],
                    353: ["IE"],
                    354: ["IS"],
                    355: ["AL"],
                    356: ["MT"],
                    357: ["CY"],
                    358: ["FI", "AX"],
                    359: ["BG"],
                    370: ["LT"],
                    371: ["LV"],
                    372: ["EE"],
                    373: ["MD"],
                    374: ["AM"],
                    375: ["BY"],
                    376: ["AD"],
                    377: ["MC"],
                    378: ["SM"],
                    380: ["UA"],
                    381: ["RS"],
                    382: ["ME"],
                    383: ["XK"],
                    385: ["HR"],
                    386: ["SI"],
                    387: ["BA"],
                    389: ["MK"],
                    420: ["CZ"],
                    421: ["SK"],
                    423: ["LI"],
                    500: ["FK"],
                    501: ["BZ"],
                    502: ["GT"],
                    503: ["SV"],
                    504: ["HN"],
                    505: ["NI"],
                    506: ["CR"],
                    507: ["PA"],
                    508: ["PM"],
                    509: ["HT"],
                    590: ["GP", "BL", "MF"],
                    591: ["BO"],
                    592: ["GY"],
                    593: ["EC"],
                    594: ["GF"],
                    595: ["PY"],
                    596: ["MQ"],
                    597: ["SR"],
                    598: ["UY"],
                    599: ["CW", "BQ"],
                    670: ["TL"],
                    672: ["NF"],
                    673: ["BN"],
                    674: ["NR"],
                    675: ["PG"],
                    676: ["TO"],
                    677: ["SB"],
                    678: ["VU"],
                    679: ["FJ"],
                    680: ["PW"],
                    681: ["WF"],
                    682: ["CK"],
                    683: ["NU"],
                    685: ["WS"],
                    686: ["KI"],
                    687: ["NC"],
                    688: ["TV"],
                    689: ["PF"],
                    690: ["TK"],
                    691: ["FM"],
                    692: ["MH"],
                    850: ["KP"],
                    852: ["HK"],
                    853: ["MO"],
                    855: ["KH"],
                    856: ["LA"],
                    880: ["BD"],
                    886: ["TW"],
                    960: ["MV"],
                    961: ["LB"],
                    962: ["JO"],
                    963: ["SY"],
                    964: ["IQ"],
                    965: ["KW"],
                    966: ["SA"],
                    967: ["YE"],
                    968: ["OM"],
                    970: ["PS"],
                    971: ["AE"],
                    972: ["IL"],
                    973: ["BH"],
                    974: ["QA"],
                    975: ["BT"],
                    976: ["MN"],
                    977: ["NP"],
                    992: ["TJ"],
                    993: ["TM"],
                    994: ["AZ"],
                    995: ["GE"],
                    996: ["KG"],
                    998: ["UZ"]
                },
                countries: {
                    AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6], 0, 0, 0, 0, 0, 0, 0, [0, ["4\\d{4}", [5]]]],
                    AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["690\\d{6}|[356]\\d{5}", [6, 9]]]
                    ],
                    AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["5[024-68]\\d{7}", [9]]]
                    ],
                    AF: ["93", "00", "[2-7]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7\\d{8}"]]
                    ],
                    AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([457]\\d{6})$", "268$1", 0, "268", [0, ["268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}"]]],
                    AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2457]\\d{6})$", "264$1", 0, "264", [0, ["264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}"]]],
                    AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9],
                        [
                            ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["6(?:[78][2-9]|9\\d)\\d{6}", [9]]]
                    ],
                    AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:33|4[1349]|55|77|88|9[13-9])\\d{6}"]]
                    ],
                    AO: ["244", "00", "[29]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["9[1-59]\\d{7}"]]
                    ],
                    AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11],
                        [
                            ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                            ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                        ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", 0, 0, [0, ["93(?:7(?:1[15]|81)[46]|8(?:(?:21|4[16]|69|9[12])[46]|88[013-9]))\\d{5}|9(?:29(?:54|66)|3(?:7(?:55|77)|865))[2-8]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:284|3(?:02|23)|657|920)|3(?:4(?:8[27]|92)|541|878))[2-7]\\d{5}|9(?:2(?:(?:26|62)2|320|477|9(?:42|83))|3(?:329|4(?:[47]6|62|89)|564))[2-6]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|[17][2-6]|3[4-6]|[58][3-6]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}"]]
                    ],
                    AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "1|([267]\\d{6})$", "684$1", 0, "684", [0, ["684(?:2(?:48|5[2468]|72)|7(?:3[13]|70|82))\\d{4}"]]],
                    AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                            ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                            ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                            ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", [7, 8, 9, 10, 11, 12, 13]]]
                    ],
                    AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                        ], "0", 0, "0|(183[12])", 0, 0, 0, [0, ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]]], "0011"
                    ],
                    AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}"]]
                    ],
                    AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", [0, ["4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]]], "00"],
                    AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["36554\\d{4}|(?:[16]0|4[04]|5[015]|7[07]|99)\\d{7}"]]
                    ],
                    BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["6040\\d{5}|6(?:03|[1-356]|44|7\\d)\\d{6}"]]
                    ],
                    BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "246$1", 0, "246", [0, ["246(?:(?:2(?:[3568]\\d|4[0-57-9])|3(?:5[2-9]|6[0-6])|4(?:46|5\\d)|69[5-7]|8(?:[2-5]\\d|83))\\d|52(?:1[147]|20))\\d{3}"]]],
                    BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                            ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"],
                            ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}", [10]]]
                    ],
                    BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["4[5-9]\\d{7}", [9]]]
                    ],
                    BF: ["226", "00", "[025-7]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:0[1-35-7]|5[1-8]|[67]\\d)\\d{6}"]]
                    ],
                    BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9],
                        [
                            ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:43[07-9]|99[69]\\d)\\d{5}|(?:8[7-9]|98)\\d{7}", [8, 9]]]
                    ],
                    BH: ["973", "00", "[136-9]\\d{7}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:3(?:[1-79]\\d|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}"]]
                    ],
                    BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:29|6[1257-9]|7[125-9])\\d{6}"]]
                    ],
                    BJ: ["229", "00", "(?:[25689]\\d|40)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:40|5[1-9]|6\\d|9[013-9])\\d{6}"]]
                    ],
                    BL: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [0, ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"]]],
                    BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "441$1", 0, "441", [0, ["441(?:[2378]\\d|5[0-39])\\d{5}"]]],
                    BN: ["673", "00", "[2-578]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:22[89]|[78]\\d\\d)\\d{4}"]]
                    ],
                    BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9],
                        [
                            ["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]],
                            ["(\\d{8})", "$1", ["[67]"]],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0", 0, "0(1\\d)?", 0, 0, 0, [0, ["[67]\\d{7}", [8]]]
                    ],
                    BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]", [0, ["(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]]],
                    BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                            ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]
                        ], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", 0, 0, [0, ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}", [10, 11]]]
                    ],
                    BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([3-8]\\d{6})$", "242$1", 0, "242", [0, ["242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}"]]],
                    BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:1[67]|77)\\d{6}", [8]]]
                    ],
                    BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-79]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
                            ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:321|7(?:[1-7]\\d|8[01]))\\d{5}", [8]]]
                    ],
                    BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                            ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                            ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                        ], "8", 0, "0|80?", 0, 0, 0, [0, ["(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", [9]]], "8~10"
                    ],
                    BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                            ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["6[0-35-7]\\d{5}", [7]]]
                    ],
                    CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [0, ["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|13|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]]]],
                    CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [0, ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]]], "0011"],
                    CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["88\\d{5}|(?:8[0-59]|9[017-9])\\d{7}"]]
                    ],
                    CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["7[02457]\\d{6}"]]
                    ],
                    CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9],
                        [
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["026(?:1[0-5]|6[6-9])\\d{4}|0(?:[14-6]\\d\\d|2(?:40|5[5-8]|6[07-9]))\\d{5}"]]
                    ],
                    CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7[35-9]\\d{7}"]]
                    ],
                    CI: ["225", "00", "[02]\\d{9}", [10],
                        [
                            ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["0704[0-7]\\d{5}|0(?:[15]\\d\\d|7(?:0[0-37-9]|[4-9][7-9]))\\d{6}"]]
                    ],
                    CK: ["682", "00", "[2-578]\\d{4}", [5],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[578]\\d{4}"]]
                    ],
                    CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11],
                        [
                            ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[0346]\\d|1[0-35-9]|2[1-9]|5[0-24-9]|7[0-3])|600)|646[59])|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}", [9]]]
                    ],
                    CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:24[23]|6[25-9]\\d)\\d{6}", [9]]]
                    ],
                    CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]
                        ], "0", 0, "0|(1(?:[12]\\d|79)\\d\\d)", 0, 0, 0, [0, ["1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|[59][0-35-9]|6[25-7]|7[0-35-8])\\d{8}", [11]]], "00"
                    ],
                    CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11],
                        [
                            ["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]],
                            ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]
                        ], "0", 0, "0(4(?:[14]4|56)|[579])?", 0, 0, 0, [0, ["3333(?:0(?:0\\d|1[0-5])|[4-9]\\d\\d)\\d{3}|(?:3(?:24[1-9]|3(?:00|3[0-24-9]))|9101)\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}", [10]]]
                    ],
                    CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                        ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))", 0, 0, 0, [0, ["(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}", [8]]]
                    ],
                    CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                            ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["5\\d{7}", [8]]]
                    ],
                    CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:36|5[1-389]|9\\d)\\d{5}"]]
                    ],
                    CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                        ], 0, 0, 0, 0, 0, "[69]", [0, ["953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}"]]
                    ],
                    CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [0, ["4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", [9]]], "0011"],
                    CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["9[4-79]\\d{6}"]]
                    ],
                    CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}"]]
                    ],
                    DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        [
                            ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                            ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                            ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                            ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                            ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                            ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                            ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                            ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                            ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                            ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}", [10, 11]]]
                    ],
                    DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["77\\d{6}"]]
                    ],
                    DK: ["45", "00", "[2-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}"]]
                    ],
                    DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "767$1", 0, "767", [0, ["767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}"]]],
                    DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9", [0, ["8[024]9[2-9]\\d{6}"]]],
                    DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:5(?:4[0-29]|5\\d|6[0-2])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}", [9]]]
                    ],
                    EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}", [9]]]
                    ],
                    EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]],
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:5\\d{5}|8(?:1(?:0(?:000|[3-9]\\d\\d)|(?:1(?:0[236]|1\\d)|(?:23|[3-79]\\d)\\d)\\d)|2(?:0(?:000|(?:19|[2-7]\\d)\\d)|(?:(?:[124-6]\\d|3[5-9])\\d|7(?:[3679]\\d|8[13-9])|8(?:[2-6]\\d|7[01]))\\d)|[349]\\d{4}))\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", [7, 8]]]
                    ],
                    EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                            ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["1[0-25]\\d{8}", [10]]]
                    ],
                    EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]", [0, ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"]]],
                    ER: ["291", "00", "[178]\\d{6}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:17[1-3]|7\\d\\d)\\d{4}"]]
                    ],
                    ES: ["34", "00", "[5-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}"]]
                    ],
                    ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7001\\d{5}|(?:7(?:0[1-9]|1[01]|77|86|99)|9\\d\\d)\\d{6}"]]
                    ],
                    FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"],
                            ["(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"],
                            ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", [0, ["4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]]], "00"
                    ],
                    FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", [7]]], "00"
                    ],
                    FK: ["500", "00", "[2-7]\\d{4}", [5], 0, 0, 0, 0, 0, 0, 0, [0, ["[56]\\d{4}"]]],
                    FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}"]]
                    ],
                    FO: ["298", "00", "[2-9]\\d{5}", [6],
                        [
                            ["(\\d{6})", "$1", ["[2-9]"]]
                        ], 0, 0, "(10(?:01|[12]0|88))", 0, 0, 0, [0, ["(?:[27][1-9]|5\\d|9[16])\\d{4}"]]
                    ],
                    FR: ["33", "00", "[1-9]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:6(?:[0-24-8]\\d|3[0-8]|9[589])|7(?:00|[3-9]\\d))\\d{6}"]]
                    ],
                    GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]
                        ], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1", 0, 0, [0, ["(?:(?:0[2-7]|7[467])\\d|6(?:0[0-4]|10|[256]\\d))\\d{5}|[2-7]\\d{6}"]]
                    ],
                    GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]]], 0, " x"
                    ],
                    GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "473$1", 0, "473", [0, ["473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}"]]],
                    GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["5(?:(?:0555|1(?:[17]77|555))[5-9]|757(?:7[7-9]|8[01]))\\d{3}|5(?:0070|11(?:33|51)|[25]222|3333)[0-4]\\d{3}|5(?:00(?:0\\d|5[05])|11(?:00|[124]\\d|3[01])|5200|75(?:00|[57]5)|8(?:0(?:[01]\\d|2[0-4])|58[89]|8(?:55|88)))\\d{4}|(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}"]]
                    ],
                    GF: ["594", "00", "(?:[56]94|80\\d|976)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["694(?:[0-249]\\d|3[0-8])\\d{4}"]]
                    ],
                    GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [0, ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]]]],
                    GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:2(?:[0346-9]\\d|5[67])|5(?:[0457]\\d|6[01]|9[1-9]))\\d{6}", [9]]]
                    ],
                    GI: ["350", "00", "(?:[25]\\d\\d|606)\\d{5}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:5[146-8]\\d|606)\\d{5}"]]
                    ],
                    GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[245]\\d{5}"]]
                    ],
                    GM: ["220", "00", "[2-9]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:[23679]\\d|5[0-389])\\d{5}"]]
                    ],
                    GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["6[0-356]\\d{7}", [9]]]
                    ],
                    GP: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"]]
                    ],
                    GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:222|55\\d)\\d{6}"]]
                    ],
                    GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
                            ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["68[57-9]\\d{7}|(?:69|94)\\d{8}", [10]]]
                    ],
                    GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[3-5]\\d{7}", [8]]]
                    ],
                    GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "1|([3-9]\\d{6})$", "671$1", 0, "671", [0, ["671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}"]]],
                    GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["9(?:5\\d|6[569]|77)\\d{6}", [9]]]
                    ],
                    GY: ["592", "001", "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:6\\d\\d|70[015-7])\\d{4}"]]
                    ],
                    HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11],
                        [
                            ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:4(?:44[5-9]|6(?:0[0-7]|1[0-6]|4[0-57-9]|6[0-4]|7[0-8]))|573[0-6]|6(?:26[013-8]|66[0-3])|70(?:7[1-5]|8[0-4])|848[015-9]|9(?:29[013-9]|59[0-4]))\\d{4}|(?:4(?:4[01]|6[2358])|5(?:[1-59][0-46-9]|6[0-4689]|7[0-246-9])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|84[09]|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}", [8]]], "00"
                    ],
                    HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[37-9]\\d{7}", [8]]]
                    ],
                    HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["98\\d{6,7}|975(?:1\\d|77|9[67])\\d{4}|9(?:0[1-9]|[1259]\\d|7[0679])\\d{6}", [8, 9]]]
                    ],
                    HT: ["509", "00", "[2-489]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[34]\\d{7}"]]
                    ],
                    HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]
                        ], "06", 0, 0, 0, 0, 0, [0, ["(?:[257]0|3[01])\\d{7}", [9]]]
                    ],
                    ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                            ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                            ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                            ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                            ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                            ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["8[1-35-9]\\d{7,10}", [9, 10, 11, 12]]]
                    ],
                    IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                            ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["8(?:22|[35-9]\\d)\\d{6}", [9]]]
                    ],
                    IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                            ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                            ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                            ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["5(?:(?:[02368]\\d|[19][2-9]|4[1-9])\\d|5(?:01|1[79]|2[2-9]|3[0-3]|4[34]|5[015689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", [9]]]
                    ],
                    IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([25-8]\\d{5})$", "1624$1", 0, "74576|(?:16|7[56])24", [0, ["76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}"]]],
                    IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1],
                            ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
                            ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1],
                            ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}", [10]]]
                    ],
                    IO: ["246", "00", "3\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["38\\d{5}"]]
                    ],
                    IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7[3-9]\\d{8}", [10]]]
                    ],
                    IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                        [
                            ["(\\d{4,5})", "$1", ["96"], "0$1"],
                            ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["9(?:(?:0(?:[0-35]\\d|4[4-6])|(?:[13]\\d|2[0-3])\\d)\\d|9(?:[0-46]\\d\\d|5[15]0|8(?:1\\d|88)|9(?:0[0-3]|[19]\\d|21|77|8[7-9])))\\d{5}", [10]]]
                    ],
                    IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[026-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[238]))\\d{4}"]], "00"
                    ],
                    IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                            ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]],
                            ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                            ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]]]
                    ],
                    JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [0, ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"]]],
                    JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876", [0, ["(?:658295|876(?:2(?:0[1-9]|[13-9]\\d|2[013-9])|[348]\\d\\d|5(?:0[1-9]|[1-9]\\d)|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}"]]],
                    JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7(?:[78][0-25-9]|9\\d)\\d{6}", [9]]]
                    ],
                    JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                            ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["[7-9]0[1-9]\\d{7}", [10]]]
                    ],
                    KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:1(?:0[0-6]|1[0-5]|2[014]|30)|7\\d\\d)\\d{6}", [9]]]
                    ],
                    KG: ["996", "00", "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["312(?:58\\d|973)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|88[08]|99[05-9])\\d{6}", [9]]]
                    ],
                    KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}", [8, 9]]]
                    ],
                    KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0", 0, 0, 0, 0, 0, [0, ["(?:63\\d{3}|73(?:0[0-5]\\d|140))\\d{3}|[67]200[01]\\d{3}", [8]]]],
                    KM: ["269", "00", "[3478]\\d{6}", [7],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[34]\\d{6}"]]
                    ],
                    KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "869$1", 0, "869", [0, ["869(?:48[89]|55[6-8]|66\\d|76[02-7])\\d{4}"]]],
                    KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["19[1-3]\\d{7}", [10]]]
                    ],
                    KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                            ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                        ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?", 0, 0, 0, [0, ["1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[1-46-9]|[16-9]\\d|2[013-9])\\d{6,7}", [9, 10]]]
                    ],
                    KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8],
                        [
                            ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:41\\d\\d|5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|1(?:00|11|66)|222|3[36]3|444|7(?:0[013-9]|[67]\\d)|888|9(?:[069]\\d|3[039]))|9(?:(?:0[09]|22|[4679]\\d|8[057-9])\\d|1(?:1[01]|99)|3(?:00|33)|5(?:00|5\\d)))\\d{4}", [8]]]
                    ],
                    KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "345$1", 0, "345", [0, ["345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|82[56]|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}"]]],
                    KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", [0, ["7(?:0[0-25-8]|47|6[0-4]|7[15-8]|85)\\d{7}", [10]]], "8~10"],
                    LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:20(?:[239]\\d|5[24-9]|7[6-8]|88)|302\\d)\\d{6}", [10]]]
                    ],
                    LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}"]]
                    ],
                    LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "1|([2-8]\\d{6})$", "758$1", 0, "758", [0, ["758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}"]]],
                    LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                        ], "0", 0, "0|(1001)", 0, 0, 0, [0, ["(?:6(?:(?:4[5-9]|5[0-4])\\d|6(?:[0245]\\d|[17]0|3[7-9]))\\d|7(?:[37-9]\\d|42|56))\\d{4}"]]
                    ],
                    LK: ["94", "00", "[1-9]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7(?:[0-25-8]\\d|4[0-4])\\d{6}"]]
                    ],
                    LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|[56]\\d{6}", [7, 9]]]
                    ],
                    LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[56]\\d{7}"]]
                    ],
                    LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]
                        ], "8", 0, "[08]", 0, 0, 0, [0, ["6\\d{7}"]]
                    ],
                    LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]
                        ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", 0, 0, 0, [0, ["6(?:[269][18]|5[1568]|7[189]|81)\\d{6}", [9]]]
                    ],
                    LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["23(?:23[0-57-9]|33[0238])\\d{3}|2(?:[0-24-9]\\d\\d|3(?:0[07]|[14-9]\\d|2[024-9]|3[0-24-9]))\\d{4}"]]
                    ],
                    LY: ["218", "00", "[2-9]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["9[1-6]\\d{7}"]]
                    ],
                    MA: ["212", "00", "[5-8]\\d{8}", [9],
                        [
                            ["(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29[89]|389)", "5(?:29[89]|389)0"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"]]
                    ],
                    MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
                            ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["4(?:[46]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}"]]
                    ],
                    MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["562\\d{5}|(?:6\\d|7[16-9])\\d{6}"]]
                    ],
                    ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}", [8]]]
                    ],
                    MF: ["590", "00", "(?:590|(?:69|80)\\d|976)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [0, ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"]]],
                    MG: ["261", "00", "[23]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                        ], "0", 0, "0|([24-9]\\d{6})$", "20$1", 0, 0, [0, ["3[2-489]\\d{7}"]]
                    ],
                    MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                        ], "1", 0, 0, 0, 0, 0, [0, ["(?:(?:23|54)5|329|45[356])\\d{4}"]]
                    ],
                    MK: ["389", "00", "[2-578]\\d{7}", [8],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7(?:3555|4747|9(?:[019]77|42[0-4]))\\d{3}|7(?:[0-25-8]\\d\\d|3(?:[1-4]\\d|7[01578])|4(?:2\\d|60|7[01578])|9(?:[23]\\d|4[01]|7[015]))\\d{4}"]]
                    ],
                    ML: ["223", "00", "[24-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[2-49])\\d{6}"]]
                    ],
                    MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                            ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|9[4-8])\\d|7(?:3|40|[5-9]\\d)|8(?:78|[89]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}", [7, 8, 9, 10]]]
                    ],
                    MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
                            ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                            ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                            ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:83[01]|920)\\d{5}|(?:5[05]|6[06]|8[015689]|9[013-9])\\d{6}", [8]]]
                    ],
                    MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8],
                        [
                            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["6800[0-79]\\d{3}|6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:0[1-9]|[14-8]\\d|2[5-9]|[39][0-4]))\\d{4}", [8]]]
                    ],
                    MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "670$1", 0, "670", [0, ["670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}"]]],
                    MQ: ["596", "00", "(?:69|80)\\d{7}|(?:59|97)6\\d{6}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["69(?:6(?:[0-46-9]\\d|5[0-6])|727)\\d{4}"]]
                    ],
                    MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[2-4][0-46-9]\\d{6}"]]
                    ],
                    MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "1|([34]\\d{6})$", "664$1", 0, "664", [0, ["664(?:3(?:49|9[1-6])|49[2-6])\\d{4}"]]],
                    MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}"]]
                    ],
                    MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:5|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["5"]],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[5-9]|4[3-689]|[57]\\d|8[0-689]|9[0-8])\\d{5}", [8]]], "020"
                    ],
                    MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["46[46]\\d{4}|(?:7\\d|9[13-9])\\d{5}", [7]]], "00"
                    ],
                    MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["111\\d{6}|(?:31|77|[89][89])\\d{7}", [9]]]
                    ],
                    MX: ["52", "0[09]", "1(?:(?:44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[017]\\d|[235][1-9]|4[0-35-9]|6[0-46-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11],
                        [
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1],
                            ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]
                        ], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, [0, ["657[12]\\d{6}|(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|6[1-9]|7[12]|8[1-8]|9\\d))\\d{7}"]], "00"
                    ],
                    MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["1(?:1888[689]|4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[0134]\\d|2[1-9]|5[0-6]))|(?:[269]\\d|[37][1-9]|4[235-9])\\d|5(?:31|9\\d\\d)|8(?:1[23]|[236]\\d|4[06]|5(?:46|[7-9])|7[016-9]|8[01]|9[0-8]))\\d{5}", [9, 10]]]
                    ],
                    MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["8[2-79]\\d{7}", [9]]]
                    ],
                    NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:60|8[1245])\\d{7}", [9]]]
                    ],
                    NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:5[0-4]|[79]\\d|8[0-79])\\d{4}"]]
                    ],
                    NE: ["227", "00", "[027-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[04]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:23|7[04]|[89]\\d)\\d{6}"]]
                    ],
                    NF: ["672", "00", "[13]\\d{5}", [6],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
                            ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]
                        ], 0, 0, "([0-258]\\d{4})$", "3$1", 0, 0, [0, ["(?:14|3[58])\\d{4}"]]
                    ],
                    NG: ["234", "009", "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", [7, 8, 10, 11, 12, 13, 14],
                        [
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                            ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                            ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:702[0-24-9]|8(?:01|19)[01])\\d{6}|(?:70[13-689]|8(?:0[2-9]|1[0-8])|9(?:0[1-9]|1[2356]))\\d{7}", [10]]]
                    ],
                    NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}"]]
                    ],
                    NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                            ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:6[1-58]|970\\d)\\d{7}", [9, 11]]]
                    ],
                    NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                        [
                            ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|59"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                        ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]", [0, ["(?:4[015-8]|59|9\\d)\\d{6}", [8]]]
                    ],
                    NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                            ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"],
                            ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["9(?:6[0-3]|7[024-6]|8[0-24-68])\\d{7}", [10]]]
                    ],
                    NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:55[3-9]|666|8\\d\\d)\\d{4}"]]
                    ],
                    NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["888[4-9]\\d{3}", [7]]]
                    ],
                    NZ: ["64", "0(?:0|161)", "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-579]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|[89]0", "50(?:[0367]|88)|[89]0"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["2[0-27-9]\\d{7,8}|21\\d{6}", [8, 9, 10]]], "00"
                    ],
                    OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9],
                        [
                            ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["1505\\d{4}|(?:7(?:[1289]\\d|7[0-4])|9(?:0[1-9]|[1-9]\\d))\\d{5}", [8]]]
                    ],
                    PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                            ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:1[16]1|21[89]|6\\d{3}|8(?:1[01]|7[23]))\\d{4}", [7, 8]]]
                    ],
                    PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                            ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["9\\d{8}", [9]]], "00", " Anexo "
                    ],
                    PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["8[7-9]\\d{6}", [8]]]
                    ],
                    PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:7\\d|8[128])\\d{6}", [8]]], "00"
                    ],
                    PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13],
                        [
                            ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\\d|4[2-9]|8[135-9]|9[1-9]))\\d{7}", [10]]]
                    ],
                    PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                            ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                            ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                            ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                            ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["3(?:[0-24]\\d|3[0-7]|55|64)\\d{7}", [10]]]
                    ],
                    PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{5})", "$1", ["19"]],
                            ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
                            ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                            ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["21(?:1(?:[145]\\d|3[1-5])|2[0-4]\\d)\\d{4}|(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", [9]]]
                    ],
                    PM: ["508", "00", "(?:[45]|80\\d\\d)\\d{5}", [6, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:4[02-4]|5[056])\\d{4}", [6]]]
                    ],
                    PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939", [0, ["(?:787|939)[2-9]\\d{6}"]]],
                    PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["5[69]\\d{7}", [9]]]
                    ],
                    PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["6(?:[06]92(?:30|9\\d)|[35]92(?:3[03]|9\\d))\\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\\d\\d|480))\\d{5}"]]
                    ],
                    PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:(?:46|83)[0-5]|6[2-4689]0)\\d{4}|(?:45|77|88)\\d{5}"]]
                    ],
                    PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11],
                        [
                            ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                            ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-6])"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}", [9]]]
                    ],
                    QA: ["974", "00", "[2-7]\\d{7}|800\\d{4}(?:\\d{2})?|2\\d{6}", [7, 8, 9],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:2[89]|[35-7]\\d)\\d{6}", [8]]]
                    ],
                    RE: ["262", "00", "976\\d{6}|(?:26|[68]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]
                        ], "0", 0, 0, 0, 0, "26[23]|69|[89]", [0, ["(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-6]|7[0-27]|8[0-8]|9[0-479]))|976(?:2[27]|3[0-37]|9\\d))\\d{4}"]]
                    ],
                    RO: ["40", "00", "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", [6, 9],
                        [
                            ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                            ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7020\\d{5}|7(?:0[013-9]|1[0-3]|[2-7]\\d|8[03-8]|9[019])\\d{6}", [9]]], 0, " int "
                    ],
                    RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                            ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["6(?:[0-689]|7\\d)\\d{6,7}", [8, 9, 10]]]
                    ],
                    RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14],
                        [
                            ["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1],
                            ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1],
                            ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]
                        ], "8", 0, 0, 0, 0, "3[04-689]|[489]", [0, ["9\\d{9}", [10]]], "8~10"
                    ],
                    RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7[2389]\\d{7}", [9]]]
                    ],
                    SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["579[01]\\d{5}|5(?:[013-689]\\d|7[0-35-8])\\d{6}", [9]]]
                    ],
                    SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}"]]
                    ],
                    SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7],
                        [
                            ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["2[125-8]\\d{5}"]], "00"
                    ],
                    SD: ["249", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:1[0-2]|9[0-3569])\\d{7}"]]
                    ],
                    SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
                            ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"],
                            ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                            ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7[02369]\\d{7}", [9]]]
                    ],
                    SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-5]|[1-9])"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                            ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                            ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["8(?:05[0-7]|95[0-2])\\d{4}|(?:8(?:0[1-4]|[1-8]\\d|9[0-4])|9[0-8]\\d)\\d{5}", [8]]]
                    ],
                    SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]", [0, ["[56]\\d{4}", [5]]]],
                    SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8],
                        [
                            ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                            ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["65(?:1\\d|55|6[01]|70)\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}", [8]]], "00"
                    ],
                    SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79", [0, ["(?:4[015-8]|59|9\\d)\\d{6}", [8]]]],
                    SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                        [
                            ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                            ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}", [9]]]
                    ],
                    SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:25|3[0-5]|66|7[2-9]|8[08]|9[09])\\d{6}"]]
                    ],
                    SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                        ], 0, 0, "([89]\\d{5})$", "0549$1", 0, 0, [0, ["6[16]\\d{6}", [8]]]
                    ],
                    SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["7(?:(?:[06-8]\\d|21|90)\\d|5(?:01|[19]0|25|[38]3|[4-7]\\d))\\d{5}"]]
                    ],
                    SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9],
                        [
                            ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                            ["(\\d{6})", "$1", ["[134]"]],
                            ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                            ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]],
                            ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:(?:15|(?:3[59]|4[89]|79|8[08])\\d|6(?:0[5-7]|[1-9]\\d)|9(?:0\\d|[2-9]))\\d|2(?:4\\d|8))\\d{5}|[67]\\d{7}", [7, 8, 9]]]
                    ],
                    SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                            ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                            ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:7[124-7]|8[124-9])\\d{5}", [7]]]
                    ],
                    SS: ["211", "00", "[19]\\d{8}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:12|9[1257-9])\\d{7}"]]
                    ],
                    ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}"]]
                    ],
                    SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["66(?:[02-9]\\d\\d|1(?:[02-9]\\d|16))\\d{3}|(?:6[0-57-9]|7\\d)\\d{6}", [8]]]
                    ],
                    SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|(5\\d{6})$", "721$1", 0, "721", [0, ["7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}"]]],
                    SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]
                        ], "0", 0, 0, 0, 0, 0, [0, ["9[1-689]\\d{7}", [9]]]
                    ],
                    SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                            ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["7[6-9]\\d{6}", [8]]]
                    ],
                    TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
                    TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "1|([2-479]\\d{6})$", "649$1", 0, "649", [0, ["649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}"]]],
                    TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:6[023568]|77|9\\d)\\d{6}"]], "00"
                    ],
                    TG: ["228", "00", "[279]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:7[09]|9[0-36-9])\\d{6}"]]
                    ],
                    TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13],
                        [
                            ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
                            ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                        ], "0", 0, 0, 0, 0, 0, [0, ["671[0-8]\\d{5}|(?:14|6[1-6]|[89]\\d)\\d{7}", [9]]]
                    ],
                    TJ: ["992", "810", "(?:00|[1-57-9]\\d)\\d{7}", [9],
                        [
                            ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]],
                            ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["41[18]\\d{6}|(?:[034]0|[17][017]|2[02]|5[05]|8[08]|9\\d)\\d{7}"]], "8~10"
                    ],
                    TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7], 0, 0, 0, 0, 0, 0, 0, [0, ["7[2-4]\\d{2,5}"]]],
                    TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["7[2-8]\\d{6}", [8]]]
                    ],
                    TM: ["993", "810", "[1-6]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                            ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, [0, ["6\\d{7}"]], "8~10"
                    ],
                    TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                        [
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-7])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}"]]
                    ],
                    TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7],
                        [
                            ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                            ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:55[4-6]|6(?:[09]\\d|3[02]|8[15-9])|(?:7\\d|8[46-9])\\d|999)\\d{4}", [7]]]
                    ],
                    TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13],
                        [
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1],
                            ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]
                        ], "0", 0, 0, 0, 0, 0, [0, ["56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}", [10]]]
                    ],
                    TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-46-8]\\d{6})$", "868$1", 0, "868", [0, ["868(?:(?:2[5-9]|3\\d)\\d|4(?:3[0-6]|[6-9]\\d)|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}"]]],
                    TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7],
                        [
                            ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
                            ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:7[01]\\d|90)\\d{4}", [6, 7]]]
                    ],
                    TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11],
                        [
                            ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
                            ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
                            ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:40001[0-2]|9[0-8]\\d{4})\\d{3}", [9]]], 0, "#"
                    ],
                    TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["77[2-9]\\d{6}|(?:6[125-9]|7[13-689])\\d{7}"]]
                    ],
                    UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                            ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}", [9]]], "0~0"
                    ],
                    UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9],
                        [
                            ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                            ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["726[01]\\d{5}|7(?:[01578]\\d|20|36|[46][0-4]|9[89])\\d{6}"]]
                    ],
                    US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10],
                        [
                            ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
                            ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                        ], "1", 0, 0, 0, 0, 0, [0, ["505(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|44))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"]]
                    ],
                    UY: ["598", "0(?:0|1[3-9]\\d)", "4\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [7, 8, 10],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["405|8|90"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["4"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["9[1-9]\\d{6}", [8]]], "00", " int. "
                    ],
                    UZ: ["998", "810", "(?:33|55|[679]\\d|88)\\d{7}", [9],
                        [
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[35-9]"], "8 $1"]
                        ], "8", 0, 0, 0, 0, 0, [0, ["(?:(?:33|88|9[0-57-9])\\d{3}|55(?:50[013]|90\\d)|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07]))))\\d{4}"]], "8~10"
                    ],
                    VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698", [0, ["3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10]]]],
                    VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "1|([2-7]\\d{6})$", "784$1", 0, "784", [0, ["784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}"]]],
                    VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10],
                        [
                            ["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["4(?:1[24-8]|2[46])\\d{7}"]]
                    ],
                    VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "1|([2-578]\\d{6})$", "284$1", 0, "284", [0, ["284496[6-9]\\d{3}|284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|5(?:4[0-7]|68|9[69]))\\d{4}"]]],
                    VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "1|([2-9]\\d{6})$", "340$1", 0, "340", [0, ["340(?:2(?:0[0-38]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}"]]],
                    VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
                            ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
                            ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", 1],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", 1],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
                            ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:5(?:2[238]|59)|89[6-9]|99[013-9])\\d{6}|(?:3\\d|5[689]|7[06-9]|8[1-8]|9[0-8])\\d{7}", [9]]]
                    ],
                    VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7],
                        [
                            ["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:[58]\\d|7[013-7])\\d{5}", [7]]]
                    ],
                    WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9],
                        [
                            ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]],
                            ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:72|8[23])\\d{4}", [6]]]
                    ],
                    WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10],
                        [
                            ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
                            ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
                            ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:7[1-35-7]|8(?:[3-7]|9\\d{3}))\\d{5}", [7, 10]]]
                    ],
                    XK: ["383", "00", "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9],
                        [
                            ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["4[3-9]\\d{6}", [8]]]
                    ],
                    YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                        [
                            ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7[0137]\\d{7}", [9]]]
                    ],
                    YT: ["262", "00", "80\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63", [0, ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"]]],
                    ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d|7[0-46-9])\\d{3}|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}", [5, 6, 7, 8, 9]]]
                    ],
                    ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["(?:7[5-79]|9[5-8])\\d{7}"]]
                    ],
                    ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                        [
                            ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                            ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                            ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                            ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                            ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                            ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                            ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                            ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                            ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                            ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                        ], "0", 0, 0, 0, 0, 0, [0, ["7(?:[178]\\d|3[1-9])\\d{6}", [9]]]
                    ]
                },
                nonGeographic: {
                    800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]
                    ],
                    808: ["808", 0, "[1-9]\\d{7}", [8],
                        [
                            ["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]
                    ],
                    870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]
                    ],
                    878: ["878", 0, "10\\d{10}", [12],
                        [
                            ["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]
                    ],
                    881: ["881", 0, "[0-36-9]\\d{8}", [9],
                        [
                            ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["[0-36-9]\\d{8}"]]
                    ],
                    882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}", [7, 8, 9, 10, 11, 12],
                        [
                            ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                            ["(\\d{2})(\\d{6})", "$1 $2", ["4"]],
                            ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]],
                            ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                            ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
                            ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                            ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                            ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}"]]
                    ],
                    883: ["883", 0, "(?:210|370\\d\\d)\\d{7}|51\\d{7}(?:\\d{3})?", [9, 10, 12],
                        [
                            ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                            ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
                            ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
                            ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[35]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:210|(?:370[1-9]|51[013]0)\\d)\\d{7}|5100\\d{5}"]]
                    ],
                    888: ["888", 0, "\\d{11}", [11],
                        [
                            ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]
                    ],
                    979: ["979", 0, "[1359]\\d{8}", [9],
                        [
                            ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]
                        ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]
                    ]
                }
            };

            function r(d, t) {
                var e = Array.prototype.slice.call(t);
                return e.push(n), d.apply(this, e)
            }
        }
    }
]);