"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [84446], {
        84446: function(e, t, r) {
            r.d(t, {
                C: function() {
                    return de
                }
            });
            var i, n, s, o = r(70655);

            function h(e) {
                return e.type === n.literal
            }

            function a(e) {
                return e.type === n.argument
            }

            function u(e) {
                return e.type === n.number
            }

            function c(e) {
                return e.type === n.date
            }

            function l(e) {
                return e.type === n.time
            }

            function p(e) {
                return e.type === n.select
            }

            function f(e) {
                return e.type === n.plural
            }

            function E(e) {
                return e.type === n.pound
            }

            function m(e) {
                return e.type === n.tag
            }

            function g(e) {
                return !(!e || "object" !== typeof e || e.type !== s.number)
            }

            function b(e) {
                return !(!e || "object" !== typeof e || e.type !== s.dateTime)
            }! function(e) {
                e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
            }(i || (i = {})),
            function(e) {
                e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
            }(n || (n = {})),
            function(e) {
                e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
            }(s || (s = {}));
            var _ = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                H = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

            function T(e) {
                var t = {};
                return e.replace(H, (function(e) {
                    var r = e.length;
                    switch (e[0]) {
                        case "G":
                            t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                            break;
                        case "y":
                            t.year = 2 === r ? "2-digit" : "numeric";
                            break;
                        case "Y":
                        case "u":
                        case "U":
                        case "r":
                            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                        case "q":
                        case "Q":
                            throw new RangeError("`q/Q` (quarter) patterns are not supported");
                        case "M":
                        case "L":
                            t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
                            break;
                        case "w":
                        case "W":
                            throw new RangeError("`w/W` (week) patterns are not supported");
                        case "d":
                            t.day = ["numeric", "2-digit"][r - 1];
                            break;
                        case "D":
                        case "F":
                        case "g":
                            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                        case "E":
                            t.weekday = 4 === r ? "short" : 5 === r ? "narrow" : "short";
                            break;
                        case "e":
                            if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "c":
                            if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "a":
                            t.hour12 = !0;
                            break;
                        case "b":
                        case "B":
                            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                        case "h":
                            t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "H":
                            t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "K":
                            t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "k":
                            t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "j":
                        case "J":
                        case "C":
                            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                        case "m":
                            t.minute = ["numeric", "2-digit"][r - 1];
                            break;
                        case "s":
                            t.second = ["numeric", "2-digit"][r - 1];
                            break;
                        case "S":
                        case "A":
                            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                        case "z":
                            t.timeZoneName = r < 4 ? "short" : "long";
                            break;
                        case "Z":
                        case "O":
                        case "v":
                        case "V":
                        case "X":
                        case "x":
                            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                    }
                    return ""
                })), t
            }
            var B = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
            var y = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                v = /^(@+)?(\+|#+)?[rs]?$/g,
                A = /(\*)(0+)|(#+)(0+)|(0+)/g,
                d = /^(0+)$/;

            function L(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(v, (function(e, r, i) {
                    return "string" !== typeof i ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === i ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" === typeof i ? i.length : 0)), ""
                })), t
            }

            function P(e) {
                switch (e) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function S(e) {
                var t;
                if ("E" === e[0] && "E" === e[1] ? (t = {
                        notation: "engineering"
                    }, e = e.slice(2)) : "E" === e[0] && (t = {
                        notation: "scientific"
                    }, e = e.slice(1)), t) {
                    var r = e.slice(0, 2);
                    if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !d.test(e)) throw new Error("Malformed concise eng/scientific notation");
                    t.minimumIntegerDigits = e.length
                }
                return t
            }

            function N(e) {
                var t = P(e);
                return t || {}
            }

            function I(e) {
                for (var t = {}, r = 0, i = e; r < i.length; r++) {
                    var n = i[r];
                    switch (n.stem) {
                        case "percent":
                        case "%":
                            t.style = "percent";
                            continue;
                        case "%x100":
                            t.style = "percent", t.scale = 100;
                            continue;
                        case "currency":
                            t.style = "currency", t.currency = n.options[0];
                            continue;
                        case "group-off":
                        case ",_":
                            t.useGrouping = !1;
                            continue;
                        case "precision-integer":
                        case ".":
                            t.maximumFractionDigits = 0;
                            continue;
                        case "measure-unit":
                        case "unit":
                            t.style = "unit", t.unit = n.options[0].replace(/^(.*?)-/, "");
                            continue;
                        case "compact-short":
                        case "K":
                            t.notation = "compact", t.compactDisplay = "short";
                            continue;
                        case "compact-long":
                        case "KK":
                            t.notation = "compact", t.compactDisplay = "long";
                            continue;
                        case "scientific":
                            t = (0, o.__assign)((0, o.__assign)((0, o.__assign)({}, t), {
                                notation: "scientific"
                            }), n.options.reduce((function(e, t) {
                                return (0, o.__assign)((0, o.__assign)({}, e), N(t))
                            }), {}));
                            continue;
                        case "engineering":
                            t = (0, o.__assign)((0, o.__assign)((0, o.__assign)({}, t), {
                                notation: "engineering"
                            }), n.options.reduce((function(e, t) {
                                return (0, o.__assign)((0, o.__assign)({}, e), N(t))
                            }), {}));
                            continue;
                        case "notation-simple":
                            t.notation = "standard";
                            continue;
                        case "unit-width-narrow":
                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                            continue;
                        case "unit-width-short":
                            t.currencyDisplay = "code", t.unitDisplay = "short";
                            continue;
                        case "unit-width-full-name":
                            t.currencyDisplay = "name", t.unitDisplay = "long";
                            continue;
                        case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                        case "scale":
                            t.scale = parseFloat(n.options[0]);
                            continue;
                        case "integer-width":
                            if (n.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                            n.options[0].replace(A, (function(e, r, i, n, s, o) {
                                if (r) t.minimumIntegerDigits = i.length;
                                else {
                                    if (n && s) throw new Error("We currently do not support maximum integer digits");
                                    if (o) throw new Error("We currently do not support exact integer digits")
                                }
                                return ""
                            }));
                            continue
                    }
                    if (d.test(n.stem)) t.minimumIntegerDigits = n.stem.length;
                    else if (y.test(n.stem)) {
                        if (n.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                        n.stem.replace(y, (function(e, r, i, n, s, o) {
                            return "*" === i ? t.minimumFractionDigits = r.length : n && "#" === n[0] ? t.maximumFractionDigits = n.length : s && o ? (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length + o.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                        }));
                        var s = n.options[0];
                        "w" === s ? t = (0, o.__assign)((0, o.__assign)({}, t), {
                            trailingZeroDisplay: "stripIfInteger"
                        }) : s && (t = (0, o.__assign)((0, o.__assign)({}, t), L(s)))
                    } else if (v.test(n.stem)) t = (0, o.__assign)((0, o.__assign)({}, t), L(n.stem));
                    else {
                        var h = P(n.stem);
                        h && (t = (0, o.__assign)((0, o.__assign)({}, t), h));
                        var a = S(n.stem);
                        a && (t = (0, o.__assign)((0, o.__assign)({}, t), a))
                    }
                }
                return t
            }
            var C, R = {
                AX: ["H"],
                BQ: ["H"],
                CP: ["H"],
                CZ: ["H"],
                DK: ["H"],
                FI: ["H"],
                ID: ["H"],
                IS: ["H"],
                ML: ["H"],
                NE: ["H"],
                RU: ["H"],
                SE: ["H"],
                SJ: ["H"],
                SK: ["H"],
                AS: ["h", "H"],
                BT: ["h", "H"],
                DJ: ["h", "H"],
                ER: ["h", "H"],
                GH: ["h", "H"],
                IN: ["h", "H"],
                LS: ["h", "H"],
                PG: ["h", "H"],
                PW: ["h", "H"],
                SO: ["h", "H"],
                TO: ["h", "H"],
                VU: ["h", "H"],
                WS: ["h", "H"],
                "001": ["H", "h"],
                AL: ["h", "H", "hB"],
                TD: ["h", "H", "hB"],
                "ca-ES": ["H", "h", "hB"],
                CF: ["H", "h", "hB"],
                CM: ["H", "h", "hB"],
                "fr-CA": ["H", "h", "hB"],
                "gl-ES": ["H", "h", "hB"],
                "it-CH": ["H", "h", "hB"],
                "it-IT": ["H", "h", "hB"],
                LU: ["H", "h", "hB"],
                NP: ["H", "h", "hB"],
                PF: ["H", "h", "hB"],
                SC: ["H", "h", "hB"],
                SM: ["H", "h", "hB"],
                SN: ["H", "h", "hB"],
                TF: ["H", "h", "hB"],
                VA: ["H", "h", "hB"],
                CY: ["h", "H", "hb", "hB"],
                GR: ["h", "H", "hb", "hB"],
                CO: ["h", "H", "hB", "hb"],
                DO: ["h", "H", "hB", "hb"],
                KP: ["h", "H", "hB", "hb"],
                KR: ["h", "H", "hB", "hb"],
                NA: ["h", "H", "hB", "hb"],
                PA: ["h", "H", "hB", "hb"],
                PR: ["h", "H", "hB", "hb"],
                VE: ["h", "H", "hB", "hb"],
                AC: ["H", "h", "hb", "hB"],
                AI: ["H", "h", "hb", "hB"],
                BW: ["H", "h", "hb", "hB"],
                BZ: ["H", "h", "hb", "hB"],
                CC: ["H", "h", "hb", "hB"],
                CK: ["H", "h", "hb", "hB"],
                CX: ["H", "h", "hb", "hB"],
                DG: ["H", "h", "hb", "hB"],
                FK: ["H", "h", "hb", "hB"],
                GB: ["H", "h", "hb", "hB"],
                GG: ["H", "h", "hb", "hB"],
                GI: ["H", "h", "hb", "hB"],
                IE: ["H", "h", "hb", "hB"],
                IM: ["H", "h", "hb", "hB"],
                IO: ["H", "h", "hb", "hB"],
                JE: ["H", "h", "hb", "hB"],
                LT: ["H", "h", "hb", "hB"],
                MK: ["H", "h", "hb", "hB"],
                MN: ["H", "h", "hb", "hB"],
                MS: ["H", "h", "hb", "hB"],
                NF: ["H", "h", "hb", "hB"],
                NG: ["H", "h", "hb", "hB"],
                NR: ["H", "h", "hb", "hB"],
                NU: ["H", "h", "hb", "hB"],
                PN: ["H", "h", "hb", "hB"],
                SH: ["H", "h", "hb", "hB"],
                SX: ["H", "h", "hb", "hB"],
                TA: ["H", "h", "hb", "hB"],
                ZA: ["H", "h", "hb", "hB"],
                "af-ZA": ["H", "h", "hB", "hb"],
                AR: ["H", "h", "hB", "hb"],
                CL: ["H", "h", "hB", "hb"],
                CR: ["H", "h", "hB", "hb"],
                CU: ["H", "h", "hB", "hb"],
                EA: ["H", "h", "hB", "hb"],
                "es-BO": ["H", "h", "hB", "hb"],
                "es-BR": ["H", "h", "hB", "hb"],
                "es-EC": ["H", "h", "hB", "hb"],
                "es-ES": ["H", "h", "hB", "hb"],
                "es-GQ": ["H", "h", "hB", "hb"],
                "es-PE": ["H", "h", "hB", "hb"],
                GT: ["H", "h", "hB", "hb"],
                HN: ["H", "h", "hB", "hb"],
                IC: ["H", "h", "hB", "hb"],
                KG: ["H", "h", "hB", "hb"],
                KM: ["H", "h", "hB", "hb"],
                LK: ["H", "h", "hB", "hb"],
                MA: ["H", "h", "hB", "hb"],
                MX: ["H", "h", "hB", "hb"],
                NI: ["H", "h", "hB", "hb"],
                PY: ["H", "h", "hB", "hb"],
                SV: ["H", "h", "hB", "hb"],
                UY: ["H", "h", "hB", "hb"],
                JP: ["H", "h", "K"],
                AD: ["H", "hB"],
                AM: ["H", "hB"],
                AO: ["H", "hB"],
                AT: ["H", "hB"],
                AW: ["H", "hB"],
                BE: ["H", "hB"],
                BF: ["H", "hB"],
                BJ: ["H", "hB"],
                BL: ["H", "hB"],
                BR: ["H", "hB"],
                CG: ["H", "hB"],
                CI: ["H", "hB"],
                CV: ["H", "hB"],
                DE: ["H", "hB"],
                EE: ["H", "hB"],
                FR: ["H", "hB"],
                GA: ["H", "hB"],
                GF: ["H", "hB"],
                GN: ["H", "hB"],
                GP: ["H", "hB"],
                GW: ["H", "hB"],
                HR: ["H", "hB"],
                IL: ["H", "hB"],
                IT: ["H", "hB"],
                KZ: ["H", "hB"],
                MC: ["H", "hB"],
                MD: ["H", "hB"],
                MF: ["H", "hB"],
                MQ: ["H", "hB"],
                MZ: ["H", "hB"],
                NC: ["H", "hB"],
                NL: ["H", "hB"],
                PM: ["H", "hB"],
                PT: ["H", "hB"],
                RE: ["H", "hB"],
                RO: ["H", "hB"],
                SI: ["H", "hB"],
                SR: ["H", "hB"],
                ST: ["H", "hB"],
                TG: ["H", "hB"],
                TR: ["H", "hB"],
                WF: ["H", "hB"],
                YT: ["H", "hB"],
                BD: ["h", "hB", "H"],
                PK: ["h", "hB", "H"],
                AZ: ["H", "hB", "h"],
                BA: ["H", "hB", "h"],
                BG: ["H", "hB", "h"],
                CH: ["H", "hB", "h"],
                GE: ["H", "hB", "h"],
                LI: ["H", "hB", "h"],
                ME: ["H", "hB", "h"],
                RS: ["H", "hB", "h"],
                UA: ["H", "hB", "h"],
                UZ: ["H", "hB", "h"],
                XK: ["H", "hB", "h"],
                AG: ["h", "hb", "H", "hB"],
                AU: ["h", "hb", "H", "hB"],
                BB: ["h", "hb", "H", "hB"],
                BM: ["h", "hb", "H", "hB"],
                BS: ["h", "hb", "H", "hB"],
                CA: ["h", "hb", "H", "hB"],
                DM: ["h", "hb", "H", "hB"],
                "en-001": ["h", "hb", "H", "hB"],
                FJ: ["h", "hb", "H", "hB"],
                FM: ["h", "hb", "H", "hB"],
                GD: ["h", "hb", "H", "hB"],
                GM: ["h", "hb", "H", "hB"],
                GU: ["h", "hb", "H", "hB"],
                GY: ["h", "hb", "H", "hB"],
                JM: ["h", "hb", "H", "hB"],
                KI: ["h", "hb", "H", "hB"],
                KN: ["h", "hb", "H", "hB"],
                KY: ["h", "hb", "H", "hB"],
                LC: ["h", "hb", "H", "hB"],
                LR: ["h", "hb", "H", "hB"],
                MH: ["h", "hb", "H", "hB"],
                MP: ["h", "hb", "H", "hB"],
                MW: ["h", "hb", "H", "hB"],
                NZ: ["h", "hb", "H", "hB"],
                SB: ["h", "hb", "H", "hB"],
                SG: ["h", "hb", "H", "hB"],
                SL: ["h", "hb", "H", "hB"],
                SS: ["h", "hb", "H", "hB"],
                SZ: ["h", "hb", "H", "hB"],
                TC: ["h", "hb", "H", "hB"],
                TT: ["h", "hb", "H", "hB"],
                UM: ["h", "hb", "H", "hB"],
                US: ["h", "hb", "H", "hB"],
                VC: ["h", "hb", "H", "hB"],
                VG: ["h", "hb", "H", "hB"],
                VI: ["h", "hb", "H", "hB"],
                ZM: ["h", "hb", "H", "hB"],
                BO: ["H", "hB", "h", "hb"],
                EC: ["H", "hB", "h", "hb"],
                ES: ["H", "hB", "h", "hb"],
                GQ: ["H", "hB", "h", "hb"],
                PE: ["H", "hB", "h", "hb"],
                AE: ["h", "hB", "hb", "H"],
                "ar-001": ["h", "hB", "hb", "H"],
                BH: ["h", "hB", "hb", "H"],
                DZ: ["h", "hB", "hb", "H"],
                EG: ["h", "hB", "hb", "H"],
                EH: ["h", "hB", "hb", "H"],
                HK: ["h", "hB", "hb", "H"],
                IQ: ["h", "hB", "hb", "H"],
                JO: ["h", "hB", "hb", "H"],
                KW: ["h", "hB", "hb", "H"],
                LB: ["h", "hB", "hb", "H"],
                LY: ["h", "hB", "hb", "H"],
                MO: ["h", "hB", "hb", "H"],
                MR: ["h", "hB", "hb", "H"],
                OM: ["h", "hB", "hb", "H"],
                PH: ["h", "hB", "hb", "H"],
                PS: ["h", "hB", "hb", "H"],
                QA: ["h", "hB", "hb", "H"],
                SA: ["h", "hB", "hb", "H"],
                SD: ["h", "hB", "hb", "H"],
                SY: ["h", "hB", "hb", "H"],
                TN: ["h", "hB", "hb", "H"],
                YE: ["h", "hB", "hb", "H"],
                AF: ["H", "hb", "hB", "h"],
                LA: ["H", "hb", "hB", "h"],
                CN: ["H", "hB", "hb", "h"],
                LV: ["H", "hB", "hb", "h"],
                TL: ["H", "hB", "hb", "h"],
                "zu-ZA": ["H", "hB", "hb", "h"],
                CD: ["hB", "H"],
                IR: ["hB", "H"],
                "hi-IN": ["hB", "h", "H"],
                "kn-IN": ["hB", "h", "H"],
                "ml-IN": ["hB", "h", "H"],
                "te-IN": ["hB", "h", "H"],
                KH: ["hB", "h", "H", "hb"],
                "ta-IN": ["hB", "h", "hb", "H"],
                BN: ["hb", "hB", "h", "H"],
                MY: ["hb", "hB", "h", "H"],
                ET: ["hB", "hb", "h", "H"],
                "gu-IN": ["hB", "hb", "h", "H"],
                "mr-IN": ["hB", "hb", "h", "H"],
                "pa-IN": ["hB", "hb", "h", "H"],
                TW: ["hB", "hb", "h", "H"],
                KE: ["hB", "hb", "H", "h"],
                MM: ["hB", "hb", "H", "h"],
                TZ: ["hB", "hb", "H", "h"],
                UG: ["hB", "hb", "H", "h"]
            };

            function M(e) {
                var t = e.hourCycle;
                if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
                    case "h24":
                        return "k";
                    case "h23":
                        return "H";
                    case "h12":
                        return "h";
                    case "h11":
                        return "K";
                    default:
                        throw new Error("Invalid hourCycle")
                }
                var r, i = e.language;
                return "root" !== i && (r = e.maximize().region), (R[r || ""] || R[i || ""] || R["".concat(i, "-001")] || R["001"])[0]
            }
            var U = new RegExp("^".concat(_.source, "*")),
                O = new RegExp("".concat(_.source, "*$"));

            function G(e, t) {
                return {
                    start: e,
                    end: t
                }
            }
            var D = !!String.prototype.startsWith,
                w = !!String.fromCodePoint,
                F = !!Object.fromEntries,
                k = !!String.prototype.codePointAt,
                V = !!String.prototype.trimStart,
                X = !!String.prototype.trimEnd,
                K = !!Number.isSafeInteger ? Number.isSafeInteger : function(e) {
                    return "number" === typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
                },
                x = !0;
            try {
                x = "a" === (null === (C = q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === C ? void 0 : C[0])
            } catch (Le) {
                x = !1
            }
            var Y, Z = D ? function(e, t, r) {
                    return e.startsWith(t, r)
                } : function(e, t, r) {
                    return e.slice(r, r + t.length) === t
                },
                j = w ? String.fromCodePoint : function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    for (var r, i = "", n = e.length, s = 0; n > s;) {
                        if ((r = e[s++]) > 1114111) throw RangeError(r + " is not a valid code point");
                        i += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
                    }
                    return i
                },
                W = F ? Object.fromEntries : function(e) {
                    for (var t = {}, r = 0, i = e; r < i.length; r++) {
                        var n = i[r],
                            s = n[0],
                            o = n[1];
                        t[s] = o
                    }
                    return t
                },
                z = k ? function(e, t) {
                    return e.codePointAt(t)
                } : function(e, t) {
                    var r = e.length;
                    if (!(t < 0 || t >= r)) {
                        var i, n = e.charCodeAt(t);
                        return n < 55296 || n > 56319 || t + 1 === r || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? n : i - 56320 + (n - 55296 << 10) + 65536
                    }
                },
                Q = V ? function(e) {
                    return e.trimStart()
                } : function(e) {
                    return e.replace(U, "")
                },
                J = X ? function(e) {
                    return e.trimEnd()
                } : function(e) {
                    return e.replace(O, "")
                };

            function q(e, t) {
                return new RegExp(e, t)
            }
            if (x) {
                var $ = q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                Y = function(e, t) {
                    var r;
                    return $.lastIndex = t, null !== (r = $.exec(e)[1]) && void 0 !== r ? r : ""
                }
            } else Y = function(e, t) {
                for (var r = [];;) {
                    var i = z(e, t);
                    if (void 0 === i || re(i) || ie(i)) break;
                    r.push(i), t += i >= 65536 ? 2 : 1
                }
                return j.apply(void 0, r)
            };
            var ee = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }
                return e.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function(e, t, r) {
                    for (var s = []; !this.isEOF();) {
                        var o = this.char();
                        if (123 === o) {
                            if ((h = this.parseArgument(e, r)).err) return h;
                            s.push(h.val)
                        } else {
                            if (125 === o && e > 0) break;
                            if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                                    if (r) break;
                                    return this.error(i.UNMATCHED_CLOSING_TAG, G(this.clonePosition(), this.clonePosition()))
                                }
                                if (60 === o && !this.ignoreTag && te(this.peek() || 0)) {
                                    if ((h = this.parseTag(e, t)).err) return h;
                                    s.push(h.val)
                                } else {
                                    var h;
                                    if ((h = this.parseLiteral(e, t)).err) return h;
                                    s.push(h.val)
                                }
                            } else {
                                var a = this.clonePosition();
                                this.bump(), s.push({
                                    type: n.pound,
                                    location: G(a, this.clonePosition())
                                })
                            }
                        }
                    }
                    return {
                        val: s,
                        err: null
                    }
                }, e.prototype.parseTag = function(e, t) {
                    var r = this.clonePosition();
                    this.bump();
                    var s = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: n.literal,
                            value: "<".concat(s, "/>"),
                            location: G(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (this.bumpIf(">")) {
                        var o = this.parseMessage(e + 1, t, !0);
                        if (o.err) return o;
                        var h = o.val,
                            a = this.clonePosition();
                        if (this.bumpIf("</")) {
                            if (this.isEOF() || !te(this.char())) return this.error(i.INVALID_TAG, G(a, this.clonePosition()));
                            var u = this.clonePosition();
                            return s !== this.parseTagName() ? this.error(i.UNMATCHED_CLOSING_TAG, G(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                                val: {
                                    type: n.tag,
                                    value: s,
                                    children: h,
                                    location: G(r, this.clonePosition())
                                },
                                err: null
                            } : this.error(i.INVALID_TAG, G(a, this.clonePosition())))
                        }
                        return this.error(i.UNCLOSED_TAG, G(r, this.clonePosition()))
                    }
                    return this.error(i.INVALID_TAG, G(r, this.clonePosition()))
                }, e.prototype.parseTagName = function() {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function(e, t) {
                    for (var r = this.clonePosition(), i = "";;) {
                        var s = this.tryParseQuote(t);
                        if (s) i += s;
                        else {
                            var o = this.tryParseUnquoted(e, t);
                            if (o) i += o;
                            else {
                                var h = this.tryParseLeftAngleBracket();
                                if (!h) break;
                                i += h
                            }
                        }
                    }
                    var a = G(r, this.clonePosition());
                    return {
                        val: {
                            type: n.literal,
                            value: i,
                            location: a
                        },
                        err: null
                    }
                }, e.prototype.tryParseLeftAngleBracket = function() {
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (te(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
                    var e
                }, e.prototype.tryParseQuote = function(e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 !== this.peek()) {
                                this.bump();
                                break
                            }
                            t.push(39), this.bump()
                        } else t.push(r);
                        this.bump()
                    }
                    return j.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function(e, t) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), j(r))
                }, e.prototype.parseArgument = function(e, t) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, G(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(i.EMPTY_ARGUMENT, G(r, this.clonePosition()));
                    var s = this.parseIdentifierIfPossible().value;
                    if (!s) return this.error(i.MALFORMED_ARGUMENT, G(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, G(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: n.argument,
                                    value: s,
                                    location: G(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, G(r, this.clonePosition())) : this.parseArgumentOptions(e, t, s, r);
                        default:
                            return this.error(i.MALFORMED_ARGUMENT, G(r, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function() {
                    var e = this.clonePosition(),
                        t = this.offset(),
                        r = Y(this.message, t),
                        i = t + r.length;
                    return this.bumpTo(i), {
                        value: r,
                        location: G(e, this.clonePosition())
                    }
                }, e.prototype.parseArgumentOptions = function(e, t, r, h) {
                    var a, u = this.clonePosition(),
                        c = this.parseIdentifierIfPossible().value,
                        l = this.clonePosition();
                    switch (c) {
                        case "":
                            return this.error(i.EXPECT_ARGUMENT_TYPE, G(u, l));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var p = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var f = this.clonePosition();
                                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                                if (0 === (b = J(y.val)).length) return this.error(i.EXPECT_ARGUMENT_STYLE, G(this.clonePosition(), this.clonePosition()));
                                p = {
                                    style: b,
                                    styleLocation: G(f, this.clonePosition())
                                }
                            }
                            if ((v = this.tryParseArgumentClose(h)).err) return v;
                            var E = G(h, this.clonePosition());
                            if (p && Z(null === p || void 0 === p ? void 0 : p.style, "::", 0)) {
                                var m = Q(p.style.slice(2));
                                if ("number" === c) return (y = this.parseNumberSkeletonFromString(m, p.styleLocation)).err ? y : {
                                    val: {
                                        type: n.number,
                                        value: r,
                                        location: E,
                                        style: y.val
                                    },
                                    err: null
                                };
                                if (0 === m.length) return this.error(i.EXPECT_DATE_TIME_SKELETON, E);
                                var g = m;
                                this.locale && (g = function(e, t) {
                                    for (var r = "", i = 0; i < e.length; i++) {
                                        var n = e.charAt(i);
                                        if ("j" === n) {
                                            for (var s = 0; i + 1 < e.length && e.charAt(i + 1) === n;) s++, i++;
                                            var o = 1 + (1 & s),
                                                h = s < 2 ? 1 : 3 + (s >> 1),
                                                a = M(t);
                                            for ("H" != a && "k" != a || (h = 0); h-- > 0;) r += "a";
                                            for (; o-- > 0;) r = a + r
                                        } else r += "J" === n ? "H" : n
                                    }
                                    return r
                                }(m, this.locale));
                                var b = {
                                    type: s.dateTime,
                                    pattern: g,
                                    location: p.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? T(g) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === c ? n.date : n.time,
                                        value: r,
                                        location: E,
                                        style: b
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === c ? n.number : "date" === c ? n.date : n.time,
                                    value: r,
                                    location: E,
                                    style: null !== (a = null === p || void 0 === p ? void 0 : p.style) && void 0 !== a ? a : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var _ = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(i.EXPECT_SELECT_ARGUMENT_OPTIONS, G(_, (0, o.__assign)({}, _)));
                            this.bumpSpace();
                            var H = this.parseIdentifierIfPossible(),
                                B = 0;
                            if ("select" !== c && "offset" === H.value) {
                                if (!this.bumpIf(":")) return this.error(i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, G(this.clonePosition(), this.clonePosition()));
                                var y;
                                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, i.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                                this.bumpSpace(), H = this.parseIdentifierIfPossible(), B = y.val
                            }
                            var v, A = this.tryParsePluralOrSelectOptions(e, c, t, H);
                            if (A.err) return A;
                            if ((v = this.tryParseArgumentClose(h)).err) return v;
                            var d = G(h, this.clonePosition());
                            return "select" === c ? {
                                val: {
                                    type: n.select,
                                    value: r,
                                    options: W(A.val),
                                    location: d
                                },
                                err: null
                            } : {
                                val: {
                                    type: n.plural,
                                    value: r,
                                    options: W(A.val),
                                    offset: B,
                                    pluralType: "plural" === c ? "cardinal" : "ordinal",
                                    location: d
                                },
                                err: null
                            };
                        default:
                            return this.error(i.INVALID_ARGUMENT_TYPE, G(u, l))
                    }
                }, e.prototype.tryParseArgumentClose = function(e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(i.EXPECT_ARGUMENT_CLOSING_BRACE, G(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) {
                        switch (this.char()) {
                            case 39:
                                this.bump();
                                var r = this.clonePosition();
                                if (!this.bumpUntil("'")) return this.error(i.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, G(r, this.clonePosition()));
                                this.bump();
                                break;
                            case 123:
                                e += 1, this.bump();
                                break;
                            case 125:
                                if (!(e > 0)) return {
                                    val: this.message.slice(t.offset, this.offset()),
                                    err: null
                                };
                                e -= 1;
                                break;
                            default:
                                this.bump()
                        }
                    }
                    return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    }
                }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
                    var r = [];
                    try {
                        r = function(e) {
                            if (0 === e.length) throw new Error("Number skeleton cannot be empty");
                            for (var t = [], r = 0, i = e.split(B).filter((function(e) {
                                    return e.length > 0
                                })); r < i.length; r++) {
                                var n = i[r].split("/");
                                if (0 === n.length) throw new Error("Invalid number skeleton");
                                for (var s = n[0], o = n.slice(1), h = 0, a = o; h < a.length; h++)
                                    if (0 === a[h].length) throw new Error("Invalid number skeleton");
                                t.push({
                                    stem: s,
                                    options: o
                                })
                            }
                            return t
                        }(e)
                    } catch (n) {
                        return this.error(i.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: s.number,
                            tokens: r,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? I(r) : {}
                        },
                        err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
                    for (var s, o = !1, h = [], a = new Set, u = n.value, c = n.location;;) {
                        if (0 === u.length) {
                            var l = this.clonePosition();
                            if ("select" === t || !this.bumpIf("=")) break;
                            var p = this.tryParseDecimalInteger(i.EXPECT_PLURAL_ARGUMENT_SELECTOR, i.INVALID_PLURAL_ARGUMENT_SELECTOR);
                            if (p.err) return p;
                            c = G(l, this.clonePosition()), u = this.message.slice(l.offset, this.offset())
                        }
                        if (a.has(u)) return this.error("select" === t ? i.DUPLICATE_SELECT_ARGUMENT_SELECTOR : i.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
                        "other" === u && (o = !0), this.bumpSpace();
                        var f = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? i.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : i.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, G(this.clonePosition(), this.clonePosition()));
                        var E = this.parseMessage(e + 1, t, r);
                        if (E.err) return E;
                        var m = this.tryParseArgumentClose(f);
                        if (m.err) return m;
                        h.push([u, {
                            value: E.val,
                            location: G(f, this.clonePosition())
                        }]), a.add(u), this.bumpSpace(), u = (s = this.parseIdentifierIfPossible()).value, c = s.location
                    }
                    return 0 === h.length ? this.error("select" === t ? i.EXPECT_SELECT_ARGUMENT_SELECTOR : i.EXPECT_PLURAL_ARGUMENT_SELECTOR, G(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(i.MISSING_OTHER_CLAUSE, G(this.clonePosition(), this.clonePosition())) : {
                        val: h,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function(e, t) {
                    var r = 1,
                        i = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var n = !1, s = 0; !this.isEOF();) {
                        var o = this.char();
                        if (!(o >= 48 && o <= 57)) break;
                        n = !0, s = 10 * s + (o - 48), this.bump()
                    }
                    var h = G(i, this.clonePosition());
                    return n ? K(s *= r) ? {
                        val: s,
                        err: null
                    } : this.error(t, h) : this.error(e, h)
                }, e.prototype.offset = function() {
                    return this.position.offset
                }, e.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, e.prototype.char = function() {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var t = z(this.message, e);
                    if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return t
                }, e.prototype.error = function(e, t) {
                    return {
                        val: null,
                        err: {
                            kind: e,
                            message: this.message,
                            location: t
                        }
                    }
                }, e.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var e = this.char();
                        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function(e) {
                    if (Z(this.message, e, this.offset())) {
                        for (var t = 0; t < e.length; t++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function(e) {
                    var t = this.offset(),
                        r = this.message.indexOf(e, t);
                    return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function(e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length);;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && re(this.char());) this.bump()
                }, e.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var e = this.char(),
                        t = this.offset(),
                        r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                    return null !== r && void 0 !== r ? r : null
                }, e
            }();

            function te(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function re(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function ie(e) {
                return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
            }

            function ne(e) {
                e.forEach((function(e) {
                    if (delete e.location, p(e) || f(e))
                        for (var t in e.options) delete e.options[t].location, ne(e.options[t].value);
                    else u(e) && g(e.style) || (c(e) || l(e)) && b(e.style) ? delete e.style.location : m(e) && ne(e.children)
                }))
            }

            function se(e, t) {
                void 0 === t && (t = {}), t = (0, o.__assign)({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, t);
                var r = new ee(e, t).parse();
                if (r.err) {
                    var n = SyntaxError(i[r.err.kind]);
                    throw n.location = r.err.location, n.originalMessage = r.err.message, n
                }
                return (null === t || void 0 === t ? void 0 : t.captureLocation) || ne(r.val), r.val
            }

            function oe(e, t) {
                var r = t && t.cache ? t.cache : Ee,
                    i = t && t.serializer ? t.serializer : le;
                return (t && t.strategy ? t.strategy : ce)(e, {
                    cache: r,
                    serializer: i
                })
            }

            function he(e, t, r, i) {
                var n, s = null == (n = i) || "number" === typeof n || "boolean" === typeof n ? i : r(i),
                    o = t.get(s);
                return "undefined" === typeof o && (o = e.call(this, i), t.set(s, o)), o
            }

            function ae(e, t, r) {
                var i = Array.prototype.slice.call(arguments, 3),
                    n = r(i),
                    s = t.get(n);
                return "undefined" === typeof s && (s = e.apply(this, i), t.set(n, s)), s
            }

            function ue(e, t, r, i, n) {
                return r.bind(t, e, i, n)
            }

            function ce(e, t) {
                return ue(e, this, 1 === e.length ? he : ae, t.cache.create(), t.serializer)
            }
            var le = function() {
                return JSON.stringify(arguments)
            };

            function pe() {
                this.cache = Object.create(null)
            }
            pe.prototype.get = function(e) {
                return this.cache[e]
            }, pe.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var fe, Ee = {
                    create: function() {
                        return new pe
                    }
                },
                me = {
                    variadic: function(e, t) {
                        return ue(e, this, ae, t.cache.create(), t.serializer)
                    },
                    monadic: function(e, t) {
                        return ue(e, this, he, t.cache.create(), t.serializer)
                    }
                };
            ! function(e) {
                e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
            }(fe || (fe = {}));
            var ge, be = function(e) {
                    function t(t, r, i) {
                        var n = e.call(this, t) || this;
                        return n.code = r, n.originalMessage = i, n
                    }
                    return (0, o.__extends)(t, e), t.prototype.toString = function() {
                        return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                    }, t
                }(Error),
                _e = function(e) {
                    function t(t, r, i, n) {
                        return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), fe.INVALID_VALUE, n) || this
                    }
                    return (0, o.__extends)(t, e), t
                }(be),
                He = function(e) {
                    function t(t, r, i) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), fe.INVALID_VALUE, i) || this
                    }
                    return (0, o.__extends)(t, e), t
                }(be),
                Te = function(e) {
                    function t(t, r) {
                        return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), fe.MISSING_VALUE, r) || this
                    }
                    return (0, o.__extends)(t, e), t
                }(be);

            function Be(e) {
                return "function" === typeof e
            }

            function ye(e, t, r, i, n, s, o) {
                if (1 === e.length && h(e[0])) return [{
                    type: ge.literal,
                    value: e[0].value
                }];
                for (var _ = [], H = 0, T = e; H < T.length; H++) {
                    var B = T[H];
                    if (h(B)) _.push({
                        type: ge.literal,
                        value: B.value
                    });
                    else if (E(B)) "number" === typeof s && _.push({
                        type: ge.literal,
                        value: r.getNumberFormat(t).format(s)
                    });
                    else {
                        var y = B.value;
                        if (!n || !(y in n)) throw new Te(y, o);
                        var v = n[y];
                        if (a(B)) v && "string" !== typeof v && "number" !== typeof v || (v = "string" === typeof v || "number" === typeof v ? String(v) : ""), _.push({
                            type: "string" === typeof v ? ge.literal : ge.object,
                            value: v
                        });
                        else if (c(B)) {
                            var A = "string" === typeof B.style ? i.date[B.style] : b(B.style) ? B.style.parsedOptions : void 0;
                            _.push({
                                type: ge.literal,
                                value: r.getDateTimeFormat(t, A).format(v)
                            })
                        } else if (l(B)) {
                            A = "string" === typeof B.style ? i.time[B.style] : b(B.style) ? B.style.parsedOptions : i.time.medium;
                            _.push({
                                type: ge.literal,
                                value: r.getDateTimeFormat(t, A).format(v)
                            })
                        } else if (u(B)) {
                            (A = "string" === typeof B.style ? i.number[B.style] : g(B.style) ? B.style.parsedOptions : void 0) && A.scale && (v *= A.scale || 1), _.push({
                                type: ge.literal,
                                value: r.getNumberFormat(t, A).format(v)
                            })
                        } else {
                            if (m(B)) {
                                var d = B.children,
                                    L = B.value,
                                    P = n[L];
                                if (!Be(P)) throw new He(L, "function", o);
                                var S = P(ye(d, t, r, i, n, s).map((function(e) {
                                    return e.value
                                })));
                                Array.isArray(S) || (S = [S]), _.push.apply(_, S.map((function(e) {
                                    return {
                                        type: "string" === typeof e ? ge.literal : ge.object,
                                        value: e
                                    }
                                })))
                            }
                            if (p(B)) {
                                if (!(N = B.options[v] || B.options.other)) throw new _e(B.value, v, Object.keys(B.options), o);
                                _.push.apply(_, ye(N.value, t, r, i, n))
                            } else if (f(B)) {
                                var N;
                                if (!(N = B.options["=".concat(v)])) {
                                    if (!Intl.PluralRules) throw new be('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', fe.MISSING_INTL_API, o);
                                    var I = r.getPluralRules(t, {
                                        type: B.pluralType
                                    }).select(v - (B.offset || 0));
                                    N = B.options[I] || B.options.other
                                }
                                if (!N) throw new _e(B.value, v, Object.keys(B.options), o);
                                _.push.apply(_, ye(N.value, t, r, i, n, v - (B.offset || 0)))
                            } else;
                        }
                    }
                }
                return function(e) {
                    return e.length < 2 ? e : e.reduce((function(e, t) {
                        var r = e[e.length - 1];
                        return r && r.type === ge.literal && t.type === ge.literal ? r.value += t.value : e.push(t), e
                    }), [])
                }(_)
            }

            function ve(e, t) {
                return t ? Object.keys(e).reduce((function(r, i) {
                    var n, s;
                    return r[i] = (n = e[i], (s = t[i]) ? (0, o.__assign)((0, o.__assign)((0, o.__assign)({}, n || {}), s || {}), Object.keys(n).reduce((function(e, t) {
                        return e[t] = (0, o.__assign)((0, o.__assign)({}, n[t]), s[t] || {}), e
                    }), {})) : n), r
                }), (0, o.__assign)({}, e)) : e
            }

            function Ae(e) {
                return {
                    create: function() {
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            set: function(t, r) {
                                e[t] = r
                            }
                        }
                    }
                }
            }! function(e) {
                e[e.literal = 0] = "literal", e[e.object = 1] = "object"
            }(ge || (ge = {}));
            var de = function() {
                function e(t, r, i, n) {
                    void 0 === r && (r = e.defaultLocale);
                    var s, h = this;
                    if (this.formatterCache = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }, this.format = function(e) {
                            var t = h.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce((function(e, t) {
                                return e.length && t.type === ge.literal && "string" === typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
                            }), []);
                            return r.length <= 1 ? r[0] || "" : r
                        }, this.formatToParts = function(e) {
                            return ye(h.ast, h.locales, h.formatters, h.formats, e, void 0, h.message)
                        }, this.resolvedOptions = function() {
                            var e;
                            return {
                                locale: (null === (e = h.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(h.locales)[0]
                            }
                        }, this.getAst = function() {
                            return h.ast
                        }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" === typeof t) {
                        if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        this.ast = e.__parse(t, {
                            ignoreTag: null === n || void 0 === n ? void 0 : n.ignoreTag,
                            locale: this.resolvedLocale
                        })
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                    this.formats = ve(e.formats, i), this.formatters = n && n.formatters || (void 0 === (s = this.formatterCache) && (s = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }), {
                        getNumberFormat: oe((function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.NumberFormat).bind.apply(e, (0, o.__spreadArray)([void 0], t, !1)))
                        }), {
                            cache: Ae(s.number),
                            strategy: me.variadic
                        }),
                        getDateTimeFormat: oe((function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.DateTimeFormat).bind.apply(e, (0, o.__spreadArray)([void 0], t, !1)))
                        }), {
                            cache: Ae(s.dateTime),
                            strategy: me.variadic
                        }),
                        getPluralRules: oe((function() {
                            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return new((e = Intl.PluralRules).bind.apply(e, (0, o.__spreadArray)([void 0], t, !1)))
                        }), {
                            cache: Ae(s.pluralRules),
                            strategy: me.variadic
                        })
                    })
                }
                return Object.defineProperty(e, "defaultLocale", {
                    get: function() {
                        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                    if ("undefined" !== typeof Intl.Locale) {
                        var t = Intl.NumberFormat.supportedLocalesOf(e);
                        return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" === typeof e ? e : e[0])
                    }
                }, e.__parse = se, e.formats = {
                    number: {
                        integer: {
                            maximumFractionDigits: 0
                        },
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        short: {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        long: {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        short: {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        long: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }, e
            }()
        }
    }
]);