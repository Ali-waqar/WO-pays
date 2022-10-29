(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87860], {
        87860: function(e, n, t) {
            var i;
            ! function() {
                var r = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, n, t) {
                    return e == Array.prototype || e == Object.prototype || (e[n] = t.value), e
                };
                var a = function(e) {
                    e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof t.g && t.g];
                    for (var n = 0; n < e.length; ++n) {
                        var i = e[n];
                        if (i && i.Math == Math) return i
                    }
                    throw Error("Cannot find global object")
                }(this);

                function o(e, n, t) {
                    return e.call.apply(e.bind, arguments)
                }

                function c(e, n, t) {
                    if (!e) throw Error();
                    if (2 < arguments.length) {
                        var i = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var t = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(t, i), e.apply(n, t)
                        }
                    }
                    return function() {
                        return e.apply(n, arguments)
                    }
                }

                function s(e, n, t) {
                    return (s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? o : c).apply(null, arguments)
                }

                function d(e) {
                    const n = [];
                    return u(new l, e, n), n.join("")
                }

                function l() {}

                function u(e, n, t) {
                    if (null == n) t.push("null");
                    else {
                        if ("object" == typeof n) {
                            if (Array.isArray(n)) {
                                var i = n;
                                n = i.length, t.push("[");
                                for (var r = "", a = 0; a < n; a++) t.push(r), u(e, i[a], t), r = ",";
                                return void t.push("]")
                            }
                            if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
                                for (i in t.push("{"), r = "", n) Object.prototype.hasOwnProperty.call(n, i) && ("function" != typeof(a = n[i]) && (t.push(r), f(i, t), t.push(":"), u(e, a, t), r = ","));
                                return void t.push("}")
                            }
                            n = n.valueOf()
                        }
                        switch (typeof n) {
                            case "string":
                                f(n, t);
                                break;
                            case "number":
                                t.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
                                break;
                            case "boolean":
                                t.push(String(n));
                                break;
                            case "function":
                                t.push("null");
                                break;
                            default:
                                throw Error("Unknown type: " + typeof n)
                        }
                    }
                }! function(e, n) {
                    if (n) e: {
                        var t = a;e = e.split(".");
                        for (var i = 0; i < e.length - 1; i++) {
                            var o = e[i];
                            if (!(o in t)) break e;
                            t = t[o]
                        }(n = n(i = t[e = e[e.length - 1]])) != i && null != n && r(t, e, {
                            configurable: !0,
                            writable: !0,
                            value: n
                        })
                    }
                }("Array.prototype.includes", (function(e) {
                    return e || function(e, n) {
                        var t = this;
                        t instanceof String && (t = String(t));
                        var i = t.length;
                        for (0 > (n = n || 0) && (n = Math.max(n + i, 0)); n < i; n++) {
                            var r = t[n];
                            if (r === e || Object.is(r, e)) return !0
                        }
                        return !1
                    }
                }));
                var p = {
                        '"': '\\"',
                        "\\": "\\\\",
                        "/": "\\/",
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t",
                        "\v": "\\u000b"
                    },
                    h = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

                function f(e, n) {
                    n.push('"', e.replace(h, (function(e) {
                        let n = p[e];
                        return n || (n = "\\u" + (65536 | e.charCodeAt(0)).toString(16).slice(1), p[e] = n), n
                    })), '"')
                }

                function b(e) {
                    e = String(e);
                    try {
                        return JSON.parse(e)
                    } catch (n) {}
                    throw Error("Invalid JSON string: " + e)
                }

                function m(e) {
                    try {
                        return "object" === typeof JSON && "function" === typeof JSON.stringify ? JSON.stringify(e) : d(e)
                    } catch (n) {}
                    throw Error("Could not stringify object")
                }
                var g = !1,
                    y = 2,
                    _ = 200,
                    v = 5e3,
                    w = "",
                    k = {},
                    x = "undefined" !== typeof window && !!(window.performance && window.performance.timing && window.performance.timing.navigationStart),
                    E = "";

                function S(e) {
                    return e && "number" === typeof e ? (Date.now() - e).toString() : null
                }
                var A = {
                        didClickJourneyClose: "Button(X)",
                        didClickJourneyContinue: "Dismiss Journey text",
                        didClickJourneyBackgroundDismiss: "Background Dismiss",
                        didScrollJourneyBackgroundDismiss: "Background Dismiss"
                    },
                    C = !1,
                    j = {
                        "/v1/open": {
                            link_identifier: "\\d+"
                        },
                        "/v1/pageview": {
                            event: "pageview"
                        },
                        "/v1/dismiss": {
                            event: "dismiss"
                        },
                        "/v1/url": {}
                    },
                    T = !1;

                function O(e, n) {
                    if (e || n) {
                        e = "https://bnc.lt/a/" + e + "?";
                        for (var t = "tags alias channel feature stage campaign type duration sdk source data".split(" "), i = 0; i < t.length; i++) {
                            var r = t[i],
                                a = n[r];
                            if (a)
                                if ("tags" === r && Array.isArray(a))
                                    for (var o = 0; o < a.length; o++) e = ("?" === e[e.length - 1] ? e + r : e + "&" + r) + "=" + encodeURIComponent(a[o]);
                                else("string" === typeof a && 0 < a.length || "number" === typeof a) && ("data" === r && "string" === typeof a && (a = W(a)), e = ("?" === e[e.length - 1] ? e + r : e + "&" + r) + "=" + encodeURIComponent(a))
                        }
                        return e
                    }
                }

                function B(e) {
                    e && (e.na = null, e.T = null, e.M = null, e.s = null, e.m = null, e.J = null, e.D && delete e.D, e.F && delete e.F, e.h.remove("branch_view_enabled"), on(e.h, {}, !0))
                }

                function I(e, n, t) {
                    return e = e.replace(/\$(\d)/g, (function(e, t) {
                        return n[parseInt(t, 10) - 1]
                    })), t && (e += "\n Failure Code:" + t), g && console && console.log(e), e
                }

                function P(e) {
                    var n = e.has_app;
                    return {
                        data: e.data || "",
                        data_parsed: e.data_parsed || {},
                        has_app: void 0 === n ? null : n,
                        identity: e.identity || null,
                        developer_identity: e.identity || null,
                        referring_identity: e.referring_identity || null,
                        referring_link: e.referring_link || null
                    }
                }

                function N() {
                    return be() ? document.referrer : String(window.location)
                }

                function D(e) {
                    e.source = "web-sdk";
                    var n = e.data;
                    switch (typeof n) {
                        case "string":
                            try {
                                n = b(n)
                            } catch (t) {
                                n = {
                                    _bncNoEval: !0
                                }
                            }
                            break;
                        case "object":
                            break;
                        default:
                            n = {}
                    }
                    n.$canonical_url || (n.$canonical_url = N()), n.$og_title || (n.$og_title = X("title")), n.$og_description || (n.$og_description = X("description")), n.$og_image_url || (n.$og_image_url = X("image")), n.$og_video || (n.$og_video = X("video")), n.$og_type || (n.$og_type = X("type")), "string" === typeof n.$desktop_url && (n.$desktop_url = n.$desktop_url.replace(/#r:[a-z0-9-_]+$/i, "").replace(/([\?&]_branch_match_id=\d+)/, ""));
                    try {
                        b(n)
                    } catch (t) {
                        n = d(n)
                    }
                    return e.data = n, e
                }

                function L(e) {
                    if (!e || "string" !== typeof e) return "";
                    var n = document.createElement("a");
                    return n.href = e, e = n.pathname && n.pathname.split("/").filter((function(e) {
                        return "" !== e
                    })), Array.isArray(e) && e.length ? e[e.length - 1] + n.search : n.search
                }

                function H(e, n, t) {
                    if (e && "object" === typeof e || (e = {}), !n || "object" !== typeof n) return e;
                    for (var i in n)
                        if (n.hasOwnProperty(i)) {
                            var r = n[i];
                            !t || void 0 !== r && null !== r ? e[i] = r : delete e[i]
                        }
                    return e
                }

                function $(e) {
                    return !!/^((?!chrome|android|crios|firefox|fxios|edg|yabrowser).)*safari/i.test(e)
                }

                function M(e, n) {
                    if ((e = /version\/([^ ]*)/i.exec(e)) && e[1]) try {
                        if (parseFloat(e[1]) >= (n || 11)) return !0
                    } catch (t) {}
                    return !1
                }

                function R() {
                    var e = navigator.userAgent;
                    return e.match(/android/i) ? "android" : e.match(/ipad/i) || e && $(e) && e && -1 < e.indexOf("Macintosh") && M(e, 13) && screen.height > screen.width ? "ipad" : e.match(/i(os|p(hone|od))/i) ? "ios" : e.match(/\(BB[1-9][0-9]*;/i) ? "blackberry" : e.match(/Windows Phone/i) ? "windows_phone" : !!(e.match(/Kindle/i) || e.match(/Silk/i) || e.match(/KFTT/i) || e.match(/KFOT/i) || e.match(/KFJWA/i) || e.match(/KFJWI/i) || e.match(/KFSOWI/i) || e.match(/KFTHWA/i) || e.match(/KFTHWI/i) || e.match(/KFAPWA/i) || e.match(/KFAPWI/i)) && "kindle"
                }

                function z() {
                    var e = navigator.userAgent;
                    return !!$(e) && M(e, 11)
                }

                function F() {
                    var e = navigator.userAgent;
                    return !!window.webkitURL && e && e && /(iPad|iPod|iPhone)/.test(e) && !/(chrome|crios)/i.test(e) && !/(fxios|firefox)/i.test(e) && !/edg/i.test(e) && !/(opt|opr)/i.test(e) && !/yabrowser/i.test(e)
                }

                function q(e) {
                    try {
                        var n = (be() && me() ? window.top.location.search : window.location.search).substring(1).match(new RegExp(e + "=([^&]*)"));
                        if (n && 1 <= n.length) return n[1]
                    } catch (t) {}
                }

                function W(e) {
                    var n, t = "",
                        i = 0;
                    e = e.replace(/\r\n/g, "\n");
                    var r = "";
                    for (n = 0; n < e.length; n++) {
                        var a = e.charCodeAt(n);
                        128 > a ? r += String.fromCharCode(a) : (127 < a && 2048 > a ? r += String.fromCharCode(a >> 6 | 192) : (r += String.fromCharCode(a >> 12 | 224), r += String.fromCharCode(a >> 6 & 63 | 128)), r += String.fromCharCode(63 & a | 128))
                    }
                    for (e = r; i < e.length;) {
                        var o = e.charCodeAt(i++);
                        a = o >> 2, o = (3 & o) << 4 | (r = e.charCodeAt(i++)) >> 4;
                        var c = (15 & r) << 2 | (n = e.charCodeAt(i++)) >> 6,
                            s = 63 & n;
                        isNaN(r) ? s = c = 64 : isNaN(n) && (s = 64), t = t + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(o) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(s)
                    }
                    return t
                }

                function J(e) {
                    return K(e) ? atob(e) : e
                }

                function K(e) {
                    if ("string" !== typeof e || "" === e || "" === e.trim()) return !1;
                    try {
                        return btoa(atob(e)) === e
                    } catch (n) {
                        return !1
                    }
                }

                function U(e) {
                    return e && e.browser_fingerprint_id && !K(e.browser_fingerprint_id) && (e.browser_fingerprint_id = btoa(e.browser_fingerprint_id)), e && e.alternative_browser_fingerprint_id && !K(e.alternative_browser_fingerprint_id) && (e.alternative_browser_fingerprint_id = btoa(e.alternative_browser_fingerprint_id)), e
                }

                function V(e) {
                    return e && K(e.browser_fingerprint_id) && (e.browser_fingerprint_id = atob(e.browser_fingerprint_id)), e && K(e.alternative_browser_fingerprint_id) && (e.alternative_browser_fingerprint_id = atob(e.alternative_browser_fingerprint_id)), e
                }

                function Y(e, n, t) {
                    "function" === typeof e.addEventListener ? e.addEventListener(n, t, void 0) : "function" === typeof e.attachEvent ? e.attachEvent("on" + n, t) : e["on" + n] = t
                }

                function G(e) {
                    return e ? (-1 < e.indexOf("://") ? e = e.split("://")[1] : "/" === e.charAt(0) && (e = e.slice(1)), e) : null
                }

                function X(e) {
                    e = String(e);
                    var n = n || null;
                    return (e = document.querySelector('meta[property="og:' + e + '"]')) && e.content && (n = e.content), n
                }

                function Q() {
                    var e = document.getElementsByTagName("meta"),
                        n = {};
                    if (!e || 0 === e.length) return n;
                    for (var t = {
                            hostedIOS: null,
                            hostedAndroid: null,
                            applinksIOS: null,
                            applinksAndroid: null,
                            twitterIOS: null,
                            twitterAndroid: null
                        }, i = 0; i < e.length; i++)
                        if ((e[i].getAttribute("name") || e[i].getAttribute("property")) && e[i].getAttribute("content")) {
                            var r = e[i].getAttribute("name"),
                                a = e[i].getAttribute("property");
                            3 === (a = (r = r || a).split(":")).length && "branch" === a[0] && "deeplink" === a[1] && ("$ios_deeplink_path" === a[2] ? t.hostedIOS = G(e[i].getAttribute("content")) : "$android_deeplink_path" === a[2] ? t.hostedAndroid = G(e[i].getAttribute("content")) : n[a[2]] = e[i].getAttribute("content")), "al:ios:url" === r && (t.applinksIOS = G(e[i].getAttribute("content"))), "twitter:app:url:iphone" === r && (t.twitterIOS = G(e[i].getAttribute("content"))), "al:android:url" === r && (t.applinksAndroid = G(e[i].getAttribute("content"))), "twitter:app:url:googleplay" === r && (t.twitterAndroid = G(e[i].getAttribute("content")))
                        }
                    return t && "object" === typeof t && 0 !== Object.keys(t || {}).length && (t.hostedIOS ? n.$ios_deeplink_path = t.hostedIOS : t.applinksIOS ? n.$ios_deeplink_path = t.applinksIOS : t.twitterIOS && (n.$ios_deeplink_path = t.twitterIOS), t.hostedAndroid ? n.$android_deeplink_path = t.hostedAndroid : t.applinksAndroid ? n.$android_deeplink_path = t.applinksAndroid : t.twitterAndroid && (n.$android_deeplink_path = t.twitterAndroid), n.hasOwnProperty("$ios_deeplink_path") && n.hasOwnProperty("$android_deeplink_path") && n.$ios_deeplink_path === n.$android_deeplink_path && (n.$deeplink_path = n.$ios_deeplink_path)), n
                }

                function Z() {
                    try {
                        if (navigator.languages && 0 < navigator.languages.length) var e = navigator.languages[0];
                        else navigator.language && (e = navigator.language);
                        e = e.substring(0, 2).toUpperCase()
                    } catch (n) {
                        e = null
                    }
                    return e
                }

                function ee(e, n) {
                    var t = [];
                    return n.forEach((function(n) {
                        -1 === e.indexOf(n) && t.push(n)
                    })), t
                }
                var ne = ["purchase"],
                    te = "event name is either missing, of the wrong type or not valid. Please specify 'purchase' as the event name.",
                    ie = "commerce_data is either missing, of the wrong type or empty. Please ensure that commerce_data is constructed correctly.",
                    re = "Please remove the following keys from the root of commerce_data: ",
                    ae = "Please remove the following keys from commerce_data.products: ",
                    oe = "commerce_data.products must be an array of objects",
                    ce = "Each product in the products list must be an object";

                function se(e, n) {
                    return e && "string" === typeof e && -1 !== ne.indexOf(e.toLowerCase()) ? n && "object" === typeof n && 0 !== Object.keys(n || {}).length ? (e = function(e) {
                        var n = "sku name price quantity brand category variant".split(" "),
                            t = ee("common type transaction_id currency revenue revenue_in_usd exchange_rate shipping tax coupon affiliation persona products".split(" "), Object.keys(e));
                        if (t.length) return re + t.join(", ");
                        var i, r = [];
                        if (e.hasOwnProperty("products")) {
                            if (!Array.isArray(e.products)) return oe;
                            if (e.products.forEach((function(e) {
                                    "object" !== typeof e && (i = ce), r = r.concat(ee(n, Object.keys(e)))
                                })), i) return i;
                            if (r.length) return ae + r.join(", ")
                        }
                        return null
                    }(n)) ? e : null : ie : te
                }

                function de(e) {
                    return "string" !== typeof e ? null : e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function le(e, n, t) {
                    if (null !== t && void 0 !== t) {
                        if ("object" === typeof t && 0 === Object.keys(t || {}).length) return e;
                        e[n] = t
                    }
                    return e
                }
                var ue = "ADD_TO_CART ADD_TO_WISHLIST VIEW_CART INITIATE_PURCHASE ADD_PAYMENT_INFO PURCHASE SPEND_CREDITS SEARCH VIEW_ITEM VIEW_ITEMS RATE SHARE COMPLETE_REGISTRATION COMPLETE_TUTORIAL ACHIEVE_LEVEL UNLOCK_ACHIEVEMENT LOGIN SUBSCRIBE START_TRIAL INVITE RESERVE VIEW_AD CLICK_AD INITIATE_STREAM COMPLETE_STREAM".split(" "),
                    pe = "transaction_id revenue currency shipping tax coupon affiliation search_query description".split(" ");

                function he(e, n) {
                    return !(!n || null === e && "object" === n) && ("array" === n ? Array.isArray(e) : typeof e === n && !Array.isArray(e))
                }

                function fe(e) {
                    var n = {};
                    return n = le(n, "http_origin", document.URL), n = le(n, "user_agent", navigator.userAgent), n = le(n, "language", Z()), n = le(n, "screen_width", screen.width || 0), n = le(n, "screen_height", screen.height || 0), n = le(n, "http_referrer", document.referrer), n = le(n, "browser_fingerprint_id", e.J), n = le(n, "developer_identity", e.m), n = le(n, "identity", e.m), n = le(n, "sdk", "web"), le(n, "sdk_version", "2.67.0")
                }

                function be() {
                    return window.self !== window.top
                }

                function me() {
                    var e = "true";
                    try {
                        window.top.location.search && (e = "true")
                    } catch (n) {
                        return !1
                    }
                    return "true" === e
                }

                function ge(e) {
                    return e || (be() ? me() ? window.top.document.referrer : "" : document.referrer)
                }

                function ye(e) {
                    if (!he(e, "object") || 0 === Object.keys(e).length) return {};
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var t = n,
                                i = e[n];
                            i = he(i, "object") || he(i, "array") ? m(i) : null === i ? "null" : i.toString(), e[t] = i
                        }
                    return e
                }

                function _e(e, n) {
                    return e = e ? H({}, e) : {}, n && 0 < Object.keys(n).length ? 0 < Object.keys(e).length ? H(e, n) : H({}, n) : e
                }

                function ve(e) {
                    "" !== w && e.setAttribute("nonce", w)
                }

                function we(e, n) {
                    isNaN(n) || 0 >= n ? e() : setTimeout(e, n)
                }

                function ke(e, n) {
                    return function(t, i, r) {
                        if (C) return !1;
                        if ("number" === typeof r || r)
                            if (0 === n) {
                                if ("object" !== typeof r) return I("API request $1, parameter $2 is not $3", [t, i, "an object"])
                            } else if (3 === n) {
                            if (!(r instanceof Array)) return I("API request $1, parameter $2 is not $3", [t, i, "an array"])
                        } else if (2 === n) {
                            if ("number" !== typeof r) return I("API request $1, parameter $2 is not $3", [t, i, "a number"])
                        } else if (4 === n) {
                            if ("boolean" !== typeof r) return I("API request $1, parameter $2 is not $3", [t, i, "a boolean"])
                        } else {
                            if ("string" !== typeof r) return I("API request $1, parameter $2 is not $3", [t, i, "a string"]);
                            if (1 !== n && !n.test(r)) return I("API request $1, parameter $2 is not $3", [t, i, "in the proper format"])
                        } else if (e) return I("API request $1 missing parameter $2", [t, i]);
                        return !1
                    }
                }

                function xe(e) {
                    return H(e, {
                        browser_fingerprint_id: ke(!0, 1),
                        identity_id: ke(!0, 1),
                        sdk: ke(!0, 1),
                        session_id: ke(!0, 1)
                    })
                }
                var Ee = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/open",
                        method: "POST",
                        g: {
                            browser_fingerprint_id: ke(!1, 1),
                            alternative_browser_fingerprint_id: ke(!1, 1),
                            identity_id: ke(!1, 1),
                            link_identifier: ke(!1, 1),
                            sdk: ke(!1, 1),
                            options: ke(!1, 0),
                            initial_referrer: ke(!1, 1),
                            tracking_disabled: ke(!1, 4),
                            current_url: ke(!1, 1),
                            screen_height: ke(!1, 2),
                            screen_width: ke(!1, 2)
                        }
                    },
                    Se = {
                        destination: "https://app.link",
                        endpoint: "/_r",
                        method: "GET",
                        R: !0,
                        g: {
                            sdk: ke(!0, 1),
                            _t: ke(!1, 1),
                            branch_key: ke(!0, 1)
                        }
                    },
                    Ae = {
                        destination: "",
                        endpoint: "",
                        method: "GET",
                        j: {
                            link_url: ke(!0, 1)
                        },
                        g: {
                            click: ke(!0, 1)
                        }
                    },
                    Ce = {
                        destination: "https://bnc.lt",
                        endpoint: "/c",
                        method: "POST",
                        j: {
                            link_url: ke(!0, 1)
                        },
                        g: {
                            sdk: ke(!1, 1),
                            phone: ke(!0, 1)
                        }
                    },
                    je = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/logout",
                        method: "POST",
                        g: xe({
                            session_id: ke(!0, 1)
                        })
                    },
                    Te = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/profile",
                        method: "POST",
                        g: xe({
                            identity_id: ke(!0, 1),
                            identity: ke(!0, 1)
                        })
                    },
                    Oe = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/url",
                        method: "POST",
                        va: "obj",
                        g: xe({
                            alias: ke(!1, 1),
                            campaign: ke(!1, 1),
                            channel: ke(!1, 1),
                            data: ke(!1, 1),
                            feature: ke(!1, 1),
                            identity_id: ke(!0, 1),
                            stage: ke(!1, 1),
                            tags: ke(!1, 3),
                            type: ke(!1, 2),
                            source: ke(!1, 1),
                            instrumentation: ke(!1, 1)
                        })
                    },
                    Be = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/qr-code",
                        method: "POST",
                        va: "obj",
                        g: xe({
                            alias: ke(!1, 1),
                            campaign: ke(!1, 1),
                            channel: ke(!1, 1),
                            data: ke(!1, 1),
                            qr_code_settings: ke(!1, 1),
                            feature: ke(!1, 1),
                            identity_id: ke(!0, 1),
                            stage: ke(!1, 1),
                            tags: ke(!1, 3),
                            type: ke(!1, 2),
                            source: ke(!1, 1)
                        })
                    },
                    Ie = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/deepview",
                        R: !0,
                        method: "POST",
                        g: xe({
                            campaign: ke(!1, 1),
                            _t: ke(!1, 1),
                            channel: ke(!1, 1),
                            data: ke(!0, 1),
                            feature: ke(!1, 1),
                            link_click_id: ke(!1, 1),
                            open_app: ke(!1, 4),
                            append_deeplink_path: ke(!1, 4),
                            stage: ke(!1, 1),
                            tags: ke(!1, 3),
                            deepview_type: ke(!0, 1),
                            source: ke(!0, 1)
                        })
                    },
                    Pe = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/has-app",
                        method: "GET",
                        g: {
                            browser_fingerprint_id: ke(!0, 1),
                            instrumentation: ke(!1, 1)
                        }
                    },
                    Ne = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/event",
                        method: "POST",
                        g: xe({
                            event: ke(!0, 1),
                            metadata: ke(!0, 0),
                            initial_referrer: ke(!1, 1),
                            tracking_disabled: ke(!1, 4)
                        })
                    },
                    De = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/event",
                        method: "POST",
                        g: xe({
                            event: ke(!0, 1),
                            metadata: ke(!1, 0),
                            initial_referrer: ke(!1, 1),
                            commerce_data: ke(!0, 0)
                        })
                    },
                    Le = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v2/event/standard",
                        method: "POST",
                        g: {
                            name: ke(!0, 1),
                            user_data: ke(!0, 1),
                            custom_data: ke(!1, 1),
                            event_data: ke(!1, 1),
                            content_items: ke(!1, 1),
                            customer_event_alias: ke(!1, 1)
                        }
                    },
                    He = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v2/event/custom",
                        method: "POST",
                        g: {
                            name: ke(!0, 1),
                            user_data: ke(!0, 1),
                            custom_data: ke(!1, 1),
                            event_data: ke(!1, 1),
                            content_items: ke(!1, 1),
                            customer_event_alias: ke(!1, 1)
                        }
                    },
                    $e = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/pageview",
                        method: "POST",
                        g: xe({
                            event: ke(!0, 1),
                            metadata: ke(!1, 0),
                            initial_referrer: ke(!1, 1),
                            tracking_disabled: ke(!1, 4),
                            branch_view_id: ke(!1, 1),
                            no_journeys: ke(!1, 4),
                            user_language: ke(!1, 1),
                            open_app: ke(!1, 4),
                            has_app_websdk: ke(!1, 4),
                            source: ke(!1, 1),
                            feature: ke(!1, 1),
                            is_iframe: ke(!1, 4),
                            data: ke(!1, 0),
                            callback_string: ke(!1, 1),
                            journey_displayed: ke(!1, 4),
                            audience_rule_id: ke(!1, 1),
                            journey_dismissals: ke(!1, 0),
                            identity_id: ke(!1, 1),
                            identity: ke(!0, 1)
                        })
                    },
                    Me = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/dismiss",
                        method: "POST",
                        g: xe({
                            event: ke(!0, 1),
                            metadata: ke(!1, 0),
                            initial_referrer: ke(!1, 1),
                            tracking_disabled: ke(!1, 4),
                            branch_view_id: ke(!1, 1),
                            no_journeys: ke(!1, 4),
                            user_language: ke(!1, 1),
                            open_app: ke(!1, 4),
                            has_app_websdk: ke(!1, 4),
                            source: ke(!1, 1),
                            feature: ke(!1, 1),
                            is_iframe: ke(!1, 4),
                            data: ke(!1, 0),
                            callback_string: ke(!1, 1),
                            journey_displayed: ke(!1, 4),
                            audience_rule_id: ke(!1, 1),
                            journey_dismissals: ke(!1, 0),
                            dismissal_source: ke(!1, 1)
                        })
                    },
                    Re = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/cpid",
                        method: "POST",
                        g: {
                            user_data: ke(!0, 1)
                        }
                    },
                    ze = {
                        destination: "https://api2.branch.io",
                        endpoint: "/v1/cpid/latd",
                        method: "POST",
                        g: {
                            user_data: ke(!0, 1)
                        }
                    };

                function Fe() {
                    for (var e = ["session", "cookie", "pojo"], n = 0; n < e.length; n++) {
                        var t = this[e[n]];
                        if ((t = "function" === typeof t ? t() : t).isEnabled()) return t.G = {}, t
                    }
                }

                function qe(e) {
                    return "branch_session" === e || "branch_session_first" === e ? e : "BRANCH_WEBSDK_KEY" + e
                }

                function We(e) {
                    return "true" === e || "false" !== e && e
                }

                function Je(e) {
                    return "branch_session" === e || "branch_session_first" === e || 0 === e.indexOf("BRANCH_WEBSDK_KEY")
                }

                function Ke(e) {
                    var n = (e = e.trim()).indexOf("=");
                    return {
                        name: e.substring(0, n),
                        value: We(e.substring(n + 1, e.length))
                    }
                }

                function Ue(e) {
                    try {
                        var n = e && localStorage ? localStorage : sessionStorage
                    } catch (t) {
                        return {
                            isEnabled: function() {
                                return !1
                            }
                        }
                    }
                    return {
                        getAll: function() {
                            if ("undefined" === typeof n) return null;
                            var e, t = null;
                            for (e in n) 0 === e.indexOf("BRANCH_WEBSDK_KEY") && (null === t && (t = {}), t[e.replace("BRANCH_WEBSDK_KEY", "")] = We(n.getItem(e)));
                            return V(t)
                        },
                        get: function(e, t) {
                            return "browser_fingerprint_id" === e || "alternative_browser_fingerprint_id" === e ? t && localStorage ? J(localStorage.getItem(qe(e))) : J(n.getItem(qe(e))) : We(t && localStorage ? localStorage.getItem(qe(e)) : n.getItem(qe(e)))
                        },
                        set: function(e, t, i) {
                            i && localStorage ? localStorage.setItem(qe(e), t) : n.setItem(qe(e), t)
                        },
                        remove: function(e, t) {
                            t && localStorage ? localStorage.removeItem(qe(e)) : n.removeItem(qe(e))
                        },
                        clear: function() {
                            Object.keys(n).forEach((function(e) {
                                0 === e.indexOf("BRANCH_WEBSDK_KEY") && n.removeItem(e)
                            }))
                        },
                        isEnabled: function() {
                            try {
                                return n.setItem("test", ""), n.removeItem("test"), !0
                            } catch (t) {
                                return !1
                            }
                        }
                    }
                }

                function Ve() {}

                function Ye(e, n, t) {
                    if ("undefined" === typeof n) return "";
                    var i = [];
                    if (n instanceof Array) {
                        for (e = 0; e < n.length; e++) i.push(encodeURIComponent(t) + "=" + encodeURIComponent(n[e]));
                        return i.join("&")
                    }
                    for (var r in n) n.hasOwnProperty(r) && (n[r] instanceof Array || "object" === typeof n[r] ? i.push(Ye(e, n[r], t ? t + "." + r : r)) : i.push(encodeURIComponent(t ? t + "." + r : r) + "=" + encodeURIComponent(n[r])));
                    return i.join("&")
                }

                function Ge(e, n, t, i, r) {
                    var a = Date.now(),
                        o = E;
                    0 === e.l && z() && e.l++;
                    var c = "branch_callback__" + e.l++,
                        s = 0 <= n.indexOf("branch.io") ? "&data=" : "&post_data=";
                    t = "POST" === i ? encodeURIComponent(W(d(t))) : "";
                    var l = window.setTimeout((function() {
                        window[c] = function() {}, le(k, o, S(a)), r(Error("Request timed out"), null, 504)
                    }), v);
                    window[c] = function(e) {
                        window.clearTimeout(l), r(null, e)
                    }, e.createScript(n + (0 > n.indexOf("?") ? "?" : "") + (t ? s + t : "") + (0 <= n.indexOf("/c/") ? "&click=1" : "") + "&callback=" + c, (function() {
                        r(Error("Request blocked by client, probably adblock"), null)
                    }), (function() {
                        le(k, o, S(a));
                        try {
                            "function" === typeof this.remove ? this.remove() : this.parentNode.removeChild(this)
                        } catch (e) {}
                        delete window[c]
                    }))
                }

                function Xe(e, n, t, i, r) {
                    function a() {
                        i.get("use_jsonp") || n.R ? Ge(e, u, t, n.method, o) : function(e, n, t, i, r, a, o, c) {
                            var s = Date.now(),
                                l = E,
                                u = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                            c && (u.responseType = c), u.ontimeout = function() {
                                le(k, l, S(s)), a(Error("Request timed out"), null, 504)
                            }, u.onerror = function(e) {
                                a(Error(e.error || "Error in API: " + u.status), null, u.status)
                            }, u.onreadystatechange = function() {
                                if (4 === u.readyState)
                                    if (le(k, l, S(s)), 200 === u.status) {
                                        if ("arraybuffer" === u.responseType) var e = u.response;
                                        else if (o) e = u.responseText;
                                        else try {
                                            e = b(u.responseText)
                                        } catch (p) {
                                            e = {}
                                        }
                                        a(null, e, u.status)
                                    } else "4" !== u.status.toString().substring(0, 1) && "5" !== u.status.toString().substring(0, 1) || (u.responseURL && u.responseURL.includes("v2/event") ? a(u.responseText, null, u.status) : a(Error("Error in API: " + u.status), null, u.status))
                            };
                            try {
                                u.open(i, n, !0), u.timeout = v, u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), u.send(t)
                            } catch (d) {
                                r.set("use_jsonp", !0), Ge(e, n, t, i, a)
                            }
                        }(e, u, l, n.method, i, o, h, f)
                    }

                    function o(t, i, o) {
                        "function" === typeof e.ga && e.ga(u, n.method, d, t, o, i), t && 0 < p && "5" === (o || "").toString().substring(0, 1) ? (p--, window.setTimeout((function() {
                            a()
                        }), _)) : r(t, i)
                    }
                    if (E = "/v1/pageview" === n.endpoint && t && t.journey_displayed ? n.endpoint + "-1-brtt" : n.endpoint + "-brtt", ("/v1/url" === n.endpoint || "/v1/has-app" === n.endpoint) && 1 < Object.keys(k).length && (delete k["-brtt"], t.instrumentation = m(H({}, k)), k = {}), C)
                        for (var c = ["browser_fingerprint_id", "alternative_browser_fingerprint_id", "identity_id", "session_id", "identity"], s = 0; s < c.length; s++) t.hasOwnProperty(c[s]) && delete t[c[s]];
                    if (c = function(e, n, t) {
                            function i(e, t) {
                                if ("undefined" === typeof t && (t = {}), e.branch_key && s.test(e.branch_key)) return t.branch_key = e.branch_key, t;
                                if (e.app_id && c.test(e.app_id)) return t.app_id = e.app_id, t;
                                if (!e.instrumentation) throw Error(I("API request $1 missing parameter $2", [n.endpoint, "branch_key or app_id"]));
                                t.instrumentation = e.instrumentation
                            }
                            var r, a, o = n.destination + n.endpoint,
                                c = /^[0-9]{15,20}$/,
                                s = /key_(live|test)_[A-Za-z0-9]{32}/;
                            if ("/v1/has-app" === n.endpoint) try {
                                n.j = i(t, n.j)
                            } catch (u) {
                                return {
                                    error: u.message
                                }
                            }
                            if ("undefined" !== typeof n.j)
                                for (r in n.j)
                                    if (n.j.hasOwnProperty(r)) {
                                        if (a = "function" === typeof n.j[r] ? n.j[r](n.endpoint, r, t[r]) : a) return {
                                            error: a
                                        };
                                        o += "/" + t[r]
                                    }
                            var d = {};
                            if ("undefined" !== typeof n.g && "/v1/pageview" !== n.endpoint && "/v1/dismiss" !== n.endpoint) {
                                for (r in n.g)
                                    if (n.g.hasOwnProperty(r)) {
                                        if (a = n.g[r](n.endpoint, r, t[r])) return {
                                            error: a
                                        };
                                        "undefined" !== typeof(a = t[r]) && "" !== a && null !== a && (d[r] = a)
                                    }
                            } else "/v1/pageview" !== n.endpoint && "/v1/dismiss" !== n.endpoint || H(d, t);
                            if ("POST" === n.method) try {
                                t = i(t, d)
                            } catch (u) {
                                return {
                                    error: u.message
                                }
                            }
                            return "/v1/event" === n.endpoint && (d.metadata = m(d.metadata || {}), d.hasOwnProperty("commerce_data") && (d.commerce_data = m(d.commerce_data || {}))), ("/v1/pageview" === n.endpoint || "/v1/dismiss" === n.endpoint) && d.metadata && (d.metadata = m(d.metadata || {})), "/v1/open" === n.endpoint && (d.options = m(d.options || {})), {
                                data: Ye(e, d, ""),
                                url: o.replace(/^\//, "")
                            }
                        }(e, n, t), c.error) return r(Error(m({
                        message: c.error,
                        endpoint: n.endpoint,
                        data: t
                    })));
                    var d, l = "";
                    if ("GET" === n.method) var u = c.url + "?" + c.data;
                    else u = c.url, l = c.data;
                    d = i.get("use_jsonp") || n.R ? t : l;
                    var p = y;
                    if (C && function(e, n) {
                            var t = document.createElement("a");
                            if (t.href = e, (e = t.origin).endsWith("/") && (e = e.substring(0, e.length - 1)), !["https://api2.branch.io", "https://app.link", "https://bnc.lt"].includes(e)) return !1;
                            if ("/" != (t = t.pathname)[0] && (t = "/" + t), t.startsWith("/c/")) return !1;
                            if (!(t = j[t])) return !0;
                            if (0 < Object.keys(t).length) {
                                if (!n) return !0;
                                for (var i in t)
                                    if (e = new RegExp(t[i]), !n.hasOwnProperty(i) || !e.test(n[i])) return !0
                            }
                            return !1
                        }(u, t)) return T ? o(Error("Requested operation cannot be completed since tracking is disabled"), null, 300) : o(null, {}, 200);
                    var h = !1;
                    if ("/v1/qr-code" === n.endpoint) {
                        h = !0;
                        var f = "arraybuffer"
                    }
                    a()
                }

                function Qe(e) {
                    e && e.parentNode.removeChild(e)
                }

                function Ze(e, n) {
                    e && !e.className.match(new RegExp("(\\s|^)" + n + "(\\s|$)")) && (e.className += " " + n)
                }

                function en(e) {
                    var n = document.body;
                    n && n.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)")) && (n.className = n.className.replace(new RegExp("(\\s|^)" + e + "(\\s|$)"), " "))
                }

                function nn(e) {
                    return document.body.currentStyle ? document.body.currentStyle[function(e) {
                        return e.replace(/(\-\w)/g, (function(e) {
                            return e[1].toUpperCase()
                        }))
                    }(e)] : window.getComputedStyle(document.body).getPropertyValue(e)
                }

                function tn(e) {
                    function n(e) {
                        function t() {
                            return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100
                        }

                        function i() {
                            return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100
                        }
                        if (!e) return 0;
                        var r = e.replace(/[0-9,\.]/g, "");
                        e = e.match(/\d+/g);
                        var a = parseInt(0 < e.length ? e[0] : "0", 10);
                        return parseInt({
                            px: function(e) {
                                return e
                            },
                            em: function(e) {
                                return document.body.currentStyle ? e * n(document.body.currentStyle.fontSize) : e * parseFloat(window.getComputedStyle(document.body).fontSize)
                            },
                            rem: function(e) {
                                return document.documentElement.currentStyle ? e * n(document.documentElement.currentStyle.fontSize) : e * parseFloat(window.getComputedStyle(document.documentElement).fontSize)
                            },
                            vw: function(e) {
                                return e * i()
                            },
                            vh: function(e) {
                                return e * t()
                            },
                            vmin: function(e) {
                                return e * Math.min(t(), i())
                            },
                            vmax: function(e) {
                                return e * Math.max(t(), i())
                            },
                            "%": function() {
                                return document.body.clientWidth / 100 * a
                            }
                        }[r](a), 10)
                    }
                    return (n("76px") + n(e)).toString() + "px"
                }

                function rn(e, n) {
                    return "#branch-banner-iframe { position: " + ("top" !== n || e ? "fixed" : "absolute") + "; }\n"
                }

                function an(e, n) {
                    try {
                        return V(b(e.get(n ? "branch_session_first" : "branch_session", n)) || null)
                    } catch (t) {
                        return null
                    }
                }

                function on(e, n, t) {
                    n = U(n), e.set("branch_session", d(n)), t && e.set("branch_session_first", d(n), !0)
                }

                function cn(e, n) {
                    n && (n = d(U(H(an(e) || {}, n))), e.set("branch_session", n))
                }

                function sn(e, n, t) {
                    function i(e, n) {
                        return U(H(b(e), n, t))
                    }
                    var r = e.get("branch_session", !1) || {};
                    e.set("branch_session", d(i(r, n))), r = e.get("branch_session_first", !0) || {}, e.set("branch_session_first", d(i(r, n)), !0)
                }

                function dn(e, n, t) {
                    var i = (t = t || document).createElement("div");
                    if (i.id = "branch-banner", i.className = "branch-animation", e.H || e.S) {
                        if (e.H) {
                            for (var r = "", a = 0; 5 > a; a++) r += '<span class="star"><svg class="star" fill="#555555" height="12" viewBox="3 2 20 19" width="12"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path d="M0 0h24v24H0z" fill="none"/><foreignObject display="none"><span class="star">\u2606</span></foreignObject></svg>', e.H > a && (r += a + 1 > e.H && e.H % 1 ? '<span class="half"><svg fill="#555555" height="12" viewBox="3 2 20 19" width="12"><defs><path d="M0 0h24v24H0V0z" id="a"/></defs><clipPath id="b"><use overflow="visible" xlink:href="#a"/></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg><foreignObject display="none"><span class="half">\u2605</span></foreignObject></span>' : '<span class="full"><svg fill="#555555" height="12" viewBox="3 2 20 19" width="12"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/><foreignObject display="none"><span class="full">\u2605</span></foreignObject></svg> </span>'), r += "</span>";
                            r = '<span class="stars">' + r + "</span>"
                        } else r = "";
                        r = '<div class="reviews">' + r + (e.S ? '<span class="review-count">' + e.S + "</span>" : "") + "</div>"
                    } else r = "";
                    return i.innerHTML = '<div class="content' + (e.theme ? " theme-" + e.theme : "") + '"><div class="right">' + n + '</div><div class="left">' + (e.oa ? "" : '<div id="branch-banner-close" class="branch-animation" aria-label="Close">&times;</div>') + '<div class="icon"><img src="' + e.icon + '" alt="Application icon"></div><div class="details vertically-align-middle"><div class="title">' + e.title + "</div>" + r + '<div class="description">' + e.description + "</div></div></div></div>", t.body.appendChild(i), i
                }

                function ln(e, n, t) {
                    n = '<div id="branch-sms-form-container">' + (R() ? '<a id="branch-mobile-action" class="button" href="#" target="_parent">' + ((an(n) || {}).has_app ? e.sa : e.pa) + "</a>" : '<div class="branch-icon-wrapper" id="branch-loader-wrapper" style="opacity: 0;"><div id="branch-spinner"></div></div><div id="branch-sms-block"><form id="sms-form"><input type="phone" aria-label="Enter phone number" class="branch-animation" name="branch-sms-phone" id="branch-sms-phone" placeholder="' + e.ua + '"><button type="submit" id="branch-sms-send" class="branch-animation button">' + e.xa + "</button></form></div>") + "</div>", e.K ? function(e, n, t) {
                        var i = document.createElement("iframe");
                        i.src = "about:blank", i.style.overflow = "hidden", i.scrolling = "no", i.id = "branch-banner-iframe", i.className = "branch-animation", ve(i), i.onload = function() {
                            var r = R(),
                                a = i.contentDocument || i.contentWindow.document;
                            a.head = a.createElement("head"), a.body = a.createElement("body"), a.body.className = "ios" === r || "ipad" === r ? "branch-banner-ios" : "android" === r ? "branch-banner-android" : "branch-banner-desktop", dn(e, n, a), t(i)
                        }, document.body.appendChild(i)
                    }(e, n, t) : t(e = dn(e, n, document))
                }

                function un(e, n, t, i) {
                    function r() {
                        a(), s.style.background = "#FFD4D4", c.className = "error", setTimeout((function() {
                            s.style.background = "#FFFFFF", c.className = ""
                        }), 2e3)
                    }

                    function a() {
                        s.removeAttribute("disabled"), c.removeAttribute("disabled"), s.style.opacity = "1", c.style.opacity = "1", d.style.opacity = "0"
                    }
                    var o, c = e.getElementById("branch-sms-phone"),
                        s = e.getElementById("branch-sms-send"),
                        d = e.getElementById("branch-loader-wrapper"),
                        l = e.getElementById("branch-sms-form-container");
                    if (c) {
                        var u = c.value;
                        /^\d{7,}$/.test(u.replace(/[\s()+\-\.]|ext/gi, "")) ? (dt(n, "willSendBannerSMS"), s.setAttribute("disabled", ""), c.setAttribute("disabled", ""), s.style.opacity = ".4", c.style.opacity = ".4", d.style.opacity = "1", c.className = "", n.sendSMS(u, i, t, (function(t) {
                            t ? (dt(n, "sendBannerSMSError"), r()) : (dt(n, "didSendBannerSMS"), (o = e.createElement("div")).className = "branch-icon-wrapper", o.id = "branch-checkmark", o.style = "opacity: 0;", o.innerHTML = window.ActiveXObject ? '<span class="checkmark">&#x2713;</span>' : '<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 98.5 98.5" enable-background="new 0 0 98.5 98.5" xml:space="preserve"><path class="checkmark" fill="none" stroke-width="8" stroke-miterlimit="10" d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/></svg>', l.appendChild(o), s.style.opacity = "0", c.style.opacity = "0", d.style.opacity = "0", setTimeout((function() {
                                o.style.opacity = "1"
                            }), 20), c.value = "", setTimeout((function() {
                                l.removeChild(o), a()
                            }), 3e3))
                        }))) : r()
                    }
                }

                function pn(e, n, t, i) {
                    function r(e, t) {
                        "function" === typeof e && (t = e, e = {}), e = e || {}, "top" === n.position ? a.style.top = "-76px" : "bottom" === n.position && (a.style.bottom = "-76px"), "number" === typeof n.P ? i.set("hideBanner", function(e) {
                            var n = new Date;
                            return n.setDate(n.getDate() + e)
                        }(n.P), !0) : i.set("hideBanner", !0, !0), e.da ? ("top" === n.position ? document.body.style.marginTop = o : "bottom" === n.position && (document.body.style.marginBottom = c), en("branch-banner-is-active"), Qe(a), Qe(document.getElementById("branch-css")), t()) : (setTimeout((function() {
                            Qe(a), Qe(document.getElementById("branch-css")), t()
                        }), 270), setTimeout((function() {
                            "top" === n.position ? document.body.style.marginTop = o : "bottom" === n.position && (document.body.style.marginBottom = c), en("branch-banner-is-active")
                        }), 20))
                    }
                    if (! function(e, n) {
                            if (e = e.get("hideBanner", !0), n.wa && navigator && Number(navigator.doNotTrack)) return !1;
                            try {
                                "string" === typeof e && (e = b(e))
                            } catch (i) {
                                e = !1
                            }
                            e = "number" === typeof e ? new Date >= new Date(e) : !e;
                            var t = n.P;
                            return "number" === typeof t && (t = !1), !document.getElementById("branch-banner") && !document.getElementById("branch-banner-iframe") && (e || t) && (n.ya && !R() || n.V && "android" === R() || n.za && "ipad" === R() || n.Z && "ios" === R() || n.W && "blackberry" === R() || n.Y && "windows_phone" === R() || n.X && "kindle" === R())
                        }(i, n)) return dt(e, "willNotShowBanner"), null;
                    dt(e, "willShowBanner");
                    var a, o = document.body.style.marginTop,
                        c = document.body.style.marginBottom;
                    return ln(n, i, (function(i) {
                        function o() {
                            "top" === n.position ? a.style.top = "0" : "bottom" === n.position && (a.style.bottom = "0"), dt(e, "didShowBanner")
                        }(function(e, n) {
                            var t = ".branch-banner-is-active { -webkit-transition: all 0.375s ease; transition: all 00.375s ease; }\n#branch-banner { width:100%; z-index: 99999; font-family: Helvetica Neue, Sans-serif; -webkit-font-smoothing: antialiased; -webkit-user-select: none; -moz-user-select: none; user-select: none; -webkit-transition: all 0.25s ease; transition: all 00.25s ease; }\n#branch-banner .button{ border: 1px solid " + (e.buttonBorderColor || ("dark" === e.theme ? "transparent" : "#ccc")) + "; background: " + (e.buttonBackgroundColor || "#fff") + "; color: " + (e.buttonFontColor || "#000") + "; cursor: pointer; margin-top: 0px; font-size: 14px; display: inline-block; margin-left: 5px; font-weight: 400; text-decoration: none;  border-radius: 4px; padding: 6px 12px; transition: all .2s ease;}\n#branch-banner .button:hover {  border: 1px solid " + (e.buttonBorderColorHover || ("dark" === e.theme ? "transparent" : "#BABABA")) + "; background: " + (e.buttonBackgroundColorHover || "#E0E0E0") + "; color: " + (e.buttonFontColorHover || "#000") + ";}\n#branch-banner .button:focus { outline: none; }\n#branch-banner * { margin-right: 4px; position: relative; line-height: 1.2em; }\n#branch-banner-close { font-weight: 400; cursor: pointer; float: left; z-index: 2;padding: 0 5px 0 5px; margin-right: 0; }\n#branch-banner .content { width:100%; overflow: hidden; height: 76px; background: rgba(255, 255, 255, 0.95); color: #333; " + ("top" === e.position ? "border-bottom" : "border-top") + ': 1px solid #ddd; }\n#branch-banner-close { color: #000; font-size: 24px; top: 14px; opacity: .5; transition: opacity .3s ease; }\n#branch-banner-close:hover { opacity: 1; }\n#branch-banner .title { font-size: 18px; font-weight:bold; color: #555; }\n#branch-banner .description { font-size: 12px; font-weight: normal; color: #777; max-height: 30px; overflow: hidden; }\n#branch-banner .icon { float: left; padding-bottom: 40px; margin-right: 10px; margin-left: 5px; }\n#branch-banner .icon img { width: 63px; height: 63px; margin-right: 0; }\n#branch-banner .reviews { font-size:13px; margin: 1px 0 3px 0; color: #777; }\n#branch-banner .reviews .star { display:inline-block; position: relative; margin-right:0; }\n#branch-banner .reviews .star span { display: inline-block; margin-right: 0; color: #555; position: absolute; top: 0; left: 0; }\n#branch-banner .reviews .review-count { font-size:10px; }\n#branch-banner .reviews .star .half { width: 50%; overflow: hidden; display: block; }\n#branch-banner .content .left { padding: 6px 5px 6px 5px; }\n#branch-banner .vertically-align-middle { top: 50%; transform: translateY(-50%); -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); }\n#branch-banner .details > * { display: block; }\n#branch-banner .content .left { height: 63px; }\n#branch-banner .content .right { float: right; height: 63px; margin-bottom: 50px; padding-top: 22px; z-index: 1; }\n#branch-banner .right > div { float: left; }\n#branch-banner-action { top: 17px; }\n#branch-banner .content:after { content: ""; position: absolute; left: 0; right: 0; top: 100%; height: 1px; background: rgba(0, 0, 0, 0.2); }\n#branch-banner .theme-dark.content { background: rgba(51, 51, 51, 0.95); }\n#branch-banner .theme-dark #branch-banner-close{ color: #fff; text-shadow: 0 1px 1px rgba(0, 0, 0, .15); }\n#branch-banner .theme-dark .details { text-shadow: 0 1px 1px rgba(0, 0, 0, .15); }\n#branch-banner .theme-dark .title { color: #fff; }\n#branch-banner .theme-dark .description { color: #fff; }\n#branch-banner .theme-dark .reviews { color: #888; }\n#branch-banner .theme-dark .reviews .star span{ color: #fff; }\n#branch-banner .theme-dark .reviews .review-count{ color: #fff; }\n',
                                i = R();
                            "ios" !== i && "ipad" !== i || !e.Z ? "android" === i && e.V ? t += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n#branch-banner #branch-banner-close,#branch-banner .theme-dark #branch-banner-close { height:17px; width: 17px; text-align: center; font-size: 15px; top: 24px;  border-radius:14px; border:0; line-height:14px; color:#b1b1b3; background:#efefef; padding: 0; opacity: 1; }\n#branch-banner .button { top: 0; text-decoration:none; border-bottom: 3px solid #A4C639; padding: 0 10px; height: 24px; line-height: 24px; text-align: center; color: #fff; margin-top: 2px;  font-weight: bold; background-color: #A4C639; border-radius: 5px; }\n#branch-banner .button:hover { border-bottom:3px solid #8c9c29; background-color: #c1d739; }\n" : "blackberry" === i && e.W || "windows_phone" === i && e.Y || "kindle" === i && e.X ? t += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n" : (t += "#branch-banner { position: fixed; min-width: 600px; }\n#branch-sms-block * { vertical-align: bottom; font-size: 15px; }\n#branch-sms-block { display: inline-block; }\n#branch-banner input{ border: 1px solid #ccc;  font-weight: 400;  border-radius: 4px; height: 30px; padding: 5px 7px 4px; width: 145px; font-size: 14px;}\n#branch-banner input:focus { outline: none; }\n#branch-banner input.error { color: rgb(194, 0, 0); border-color: rgb(194, 0, 0); }\n#branch-banner .branch-icon-wrapper { width:25px; height: 25px; vertical-align: middle; display: inline-block; margin-top: -18px; }\n@keyframes branch-spinner { 0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); } 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); } }\n@-webkit-keyframes branch-spinner { 0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); } 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); } }\n#branch-spinner { -webkit-animation: branch-spinner 1s ease-in-out infinite; animation: branch-spinner 1s ease-in-out infinite; transition: all 0.7s ease-in-out; border:2px solid #ddd; border-bottom-color:#428bca; width:80%; height:80%; border-radius:50%; -webkit-font-smoothing: antialiased !important; }\n#branch-banner .theme-dark input { border-color: transparent; }\n", t = window.ActiveXObject ? t + "#branch-banner .checkmark { color: #428bca; font-size: 22px; }\n" : t + "#branch-banner .checkmark { stroke: #428bca; stroke-dashoffset: 745.74853515625; stroke-dasharray: 745.74853515625; -webkit-animation: dash 2s ease-out forwards; animation: dash 2s ease-out forwards; }\n@-webkit-keyframes dash { 0% { stroke-dashoffset: 745.748535 15625; } 100% { stroke-dashoffset: 0; } }\n@keyframes dash { 0% { stroke-dashoffset: 745.74853515625; } 100% { stroke-dashoffset: 0; } }\n") : t += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n", t += e.la, e.K && (t += "body { margin: 0; }\n", (i = document.createElement("style")).type = "text/css", i.id = "branch-iframe-css", ve(i), i.innerHTML = "body { -webkit-transition: all 0.375s ease; transition: all 00.375s ease; }\n#branch-banner-iframe { box-shadow: 0 0 5px rgba(0, 0, 0, .35); width: 1px; min-width:100%; left: 0; right: 0; border: 0; height: 76px; z-index: 99999; -webkit-transition: all 0.25s ease; transition: all 00.25s ease; }\n" + (R() ? rn(e.ra, e.position) : rn(e.ma, e.position)), (document.head || document.getElementsByTagName("head")[0]).appendChild(i)), (i = document.createElement("style")).type = "text/css", i.id = "branch-css", i.innerHTML = t, ve(i), (t = (t = e.K ? n.contentWindow.document : document).head || t.getElementsByTagName("head")[0]) && "function" === typeof t.appendChild && t.appendChild(i), "top" === e.position ? n.style.top = "-76px" : "bottom" === e.position && (n.style.bottom = "-76px")
                        })(n, a = i), t.channel = t.channel || "app banner";
                        var c = n.K ? a.contentWindow.document : document;
                        R() ? (n.open_app = n.ta, n.append_deeplink_path = n.ja, n.make_new_link = n.qa, n.deepview_type = "banner", e.deepview(t, n), (i = c.getElementById("branch-mobile-action")) && (i.onclick = function(n) {
                            n.preventDefault(), e.deepviewCta()
                        })) : c.getElementById("sms-form") ? c.getElementById("sms-form").addEventListener("submit", (function(i) {
                            i.preventDefault(), un(c, e, n, t)
                        })) : a.onload = function() {
                            (c = a.contentWindow.document).getElementById("sms-form") && c.getElementById("sms-form").addEventListener("submit", (function(i) {
                                i.preventDefault(), un(c, e, n, t)
                            }))
                        }, i = nn("margin-top");
                        var s = nn("margin-bottom");
                        Ze(document.body, "branch-banner-is-active"), "top" === n.position ? document.body.style.marginTop = tn(i) : "bottom" === n.position && (document.body.style.marginBottom = tn(s)), (i = c.getElementById("branch-banner-close")) && (i.onclick = function(n) {
                            n.preventDefault(), dt(e, "willCloseBanner"), r({}, (function() {
                                dt(e, "didCloseBanner")
                            }))
                        }), (i = c.getElementById("branch-banner-modal-background")) && (i.onclick = function(n) {
                            n.preventDefault(), dt(e, "willCloseBanner"), r({}, (function() {
                                dt(e, "didCloseBanner")
                            }))
                        }), n.da ? o() : setTimeout(o, 20)
                    })), r
                }

                function hn() {
                    function e() {
                        n.length && n[0]((function() {
                            n.shift(), e()
                        }))
                    }
                    var n = [];
                    return function(t) {
                        n.push(t), 1 === n.length && e()
                    }
                }
                Fe.prototype.local = function() {
                    return Ue(!0)
                }, Fe.prototype.session = function() {
                    return Ue(!1)
                }, Fe.prototype.cookie = function() {
                    return function() {
                        function e(e, n) {
                            n && (e = qe(e)), document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"
                        }
                        return {
                            getAll: function() {
                                for (var e = {}, n = document.cookie.split(";"), t = 0; t < n.length; t++) {
                                    var i = Ke(n[t]);
                                    i && i.hasOwnProperty("name") && i.hasOwnProperty("value") && Je(i.name) && (e[i.name.replace("BRANCH_WEBSDK_KEY", "")] = i.value)
                                }
                                return e
                            },
                            get: function(e) {
                                e = qe(e);
                                for (var n = document.cookie.split(";"), t = 0; t < n.length; t++) {
                                    var i = Ke(n[t]);
                                    if (i && i.hasOwnProperty("name") && i.hasOwnProperty("value") && i.name === e) return i.value
                                }
                                return null
                            },
                            set: function(e, n) {
                                document.cookie = qe(e) + "=" + n + "; path=/"
                            },
                            remove: function(n) {
                                e(n, !0)
                            },
                            clear: function() {
                                for (var n = document.cookie.split(";"), t = 0; t < n.length; t++) {
                                    var i = Ke(n[t]);
                                    i && i.hasOwnProperty("name") && Je(i.name) && e(i.name, !1)
                                }
                            },
                            isEnabled: function() {
                                return navigator.cookieEnabled
                            }
                        }
                    }()
                }, Fe.prototype.pojo = {
                    getAll: function() {
                        return this.G
                    },
                    get: function(e) {
                        return this.G[e] || null
                    },
                    set: function(e, n) {
                        this.G[e] = n
                    },
                    remove: function(e) {
                        delete this.G[e]
                    },
                    clear: function() {
                        this.G = {}
                    },
                    isEnabled: function() {
                        return !0
                    }
                }, Ve.prototype.l = 0, Ve.prototype.createScript = function(e, n, t) {
                    var i = document.createElement("script");
                    i.type = "text/javascript", i.async = !0, i.src = e, ve(i), !(e = document.getElementsByTagName("head")) || 1 > e.length ? "function" === typeof n && n() : (e[0].appendChild(i), "function" === typeof n && Y(i, "error", n), "function" === typeof t && Y(i, "load", t))
                };
                var fn, bn = {},
                    mn = 1,
                    gn = "top",
                    yn = "absolute",
                    _n = "76px",
                    vn = !1,
                    wn = !1,
                    kn = [],
                    xn = !1,
                    En = window.innerHeight,
                    Sn = window.innerWidth;
                window.innerHeight < window.innerWidth && (En = window.innerWidth, Sn = window.innerHeight);
                var An = 0,
                    Cn = 0,
                    jn = !1,
                    Tn = /<script type="application\/json">((.|\s)*?)<\/script>/,
                    On = /<script type="text\/javascript">((.|\s)*?)<\/script>/,
                    Bn = /<style type="text\/css" id="branch-css">((.|\s)*?)<\/style>/,
                    In = /<style type="text\/css" id="branch-iframe-css">((.|\s)*?)<\/style>/,
                    Pn = /#branch-banner-spacer {((.|\s)*?)}/,
                    Nn = /margin-bottom: (.*?);/,
                    Dn = null,
                    Ln = null,
                    Hn = !1,
                    $n = !1,
                    Mn = !1,
                    Rn = !1,
                    zn = !1,
                    Fn = "",
                    qn = [],
                    Wn = null;

                function Jn(e) {
                    if (e = e.match(Tn)) return b(e[1])
                }

                function Kn(e) {
                    var n = document.createElement("style");
                    n.type = "text/css", n.id = "branch-iframe-css";
                    var t = +(An = nn("margin-top")).slice(0, -2),
                        i = +(Cn = nn("margin-bottom")).slice(0, -2),
                        r = +_n.slice(0, -2);
                    e || ("top" === gn ? document.body.style.marginTop = (+r + t).toString() + "px" : "bottom" === gn && (document.body.style.marginBottom = (+r + i).toString() + "px")), 0 < kn.length && kn.forEach((function(e) {
                        var n, t = window.getComputedStyle(e);
                        t && (n = vn && "fixed" === t.getPropertyValue("position")), n || (e.style.marginTop = _n)
                    })), "top" === Fn && Fn !== gn && zn && qn && 0 < qn.length && qn.forEach((function(e) {
                        e.style.marginTop = 0
                    })), zn = !1, Fn = "", qn = [], Rn = !1, n.innerHTML = e || function() {
                        var e = "",
                            n = "";
                        return document.body.style.transition = "", document.getElementById("branch-banner-iframe") && (document.getElementById("branch-banner-iframe").style.transition = ""), Mn || (e = "body { -webkit-transition: all 0.375s ease; }\n", document.body.style.transition = "all 00.375s ease", n = "-webkit-transition: all 0.25s ease; transition: all 00.25s ease;"), (e || "") + "#branch-banner-iframe { box-shadow: 0 0 5px rgba(0, 0, 0, .35); width: 1px; min-width:100%; left: 0; right: 0; border: 0; height: " + _n + "; z-index: 99999; " + n + " }\n#branch-banner-iframe { position: " + yn + "; }\n@media only screen and (orientation: landscape) { body { " + ("top" === gn ? "margin-top: " : "margin-bottom: ") + (vn ? Sn + "px" : _n) + "; }\n#branch-banner-iframe { height: " + (vn ? Sn + "px" : _n) + "; }"
                    }(), ve(n), document.head.appendChild(n)
                }

                function Un() {
                    xn && Yn(!1, !1)
                }

                function Vn() {
                    xn && (window.pageYOffset > window.innerHeight ? Yn(!0, !1) : Yn(!1, !1))
                }

                function Yn(e, n) {
                    var t = document.getElementById("branch-banner-iframe"),
                        i = t.offsetHeight,
                        r = t.offsetTop,
                        a = window.innerHeight;
                    n && 0 !== window.pageYOffset ? t.style.bottom = "0" : e ? t.style.top = a - i + i / 2 + "px" : a - r != i && (t.style.top = a - i + "px")
                }

                function Gn(e, n, t, i, r, a, o) {
                    var c = rt;
                    i && r && (Array.prototype.forEach.call(r.contentWindow.document.querySelectorAll("#branch-mobile-action"), (function(e) {
                        e.addEventListener("click", (function() {
                            dt(Dn, "didClickJourneyCTA", Wn), Rn = !0, i(), et(r)
                        }))
                    })), Xn(".branch-banner-continue", "didClickJourneyContinue", t, r, e, n, a, o, c, "click"), Xn(".branch-banner-close", "didClickJourneyClose", t, r, e, n, a, o, c, "click"), Xn(".branch-banner-dismiss-background", "didClickJourneyBackgroundDismiss", t, r, e, n, a, o, c, "click"), Xn(".branch-banner-dismiss-background", "didScrollJourneyBackgroundDismiss", t, r, e, n, a, o, c, "touchmove"))
                }

                function Xn(e, n, t, i, r, a, o, c, s, d) {
                    Array.prototype.forEach.call(i.contentWindow.document.querySelectorAll(e), (function(e) {
                        e.addEventListener(d, (function() {
                            ! function(e, n, t, i, r, a, o, c) {
                                var s = o ? 0 : function(e) {
                                    if ("number" === typeof(e = e.globalDismissPeriod)) {
                                        if (-1 === e) e = !0;
                                        else {
                                            var n = new Date;
                                            e = n.setSeconds(n.getSeconds() + e)
                                        }
                                        return e
                                    }
                                }(a);
                                if (dt(Dn, e, Wn), Rn = !0, et(t), !o) {
                                    void 0 !== s && n.set("globalJourneysDismiss", s, !0),
                                        function(e, n, t) {
                                            var i = e.get("journeyDismissals", !0);
                                            (i = i ? b(i) : {})[t] = {
                                                view_id: n,
                                                dismiss_time: Date.now()
                                            }, e.set("journeyDismissals", m(i), !0)
                                        }(n, i, r);
                                    var d = function() {
                                        Dn.removeListener(d);
                                        var n = function(e, n) {
                                            var t = {},
                                                i = Q();
                                            if (i && 0 < Object.keys(i).length && (t.hosted_deeplink_data = i), e = e.N(Zn(null, t), null, Dn, !0), Wn && Wn.journey_link_data) {
                                                le(e, "journey_id", Wn.journey_link_data.journey_id), le(e, "journey_name", Qn(Wn.journey_link_data.journey_name)), le(e, "view_id", Wn.journey_link_data.view_id), le(e, "view_name", Qn(Wn.journey_link_data.view_name)), le(e, "channel", Qn(Wn.journey_link_data.channel)), le(e, "campaign", Qn(Wn.journey_link_data.campaign));
                                                try {
                                                    le(e, "tags", JSON.stringify(Wn.journey_link_data.tags))
                                                } catch (r) {
                                                    e.tags = JSON.stringify([])
                                                }
                                            }
                                            return le(e, "dismissal_source", n), e
                                        }(c, A[e]);
                                        Dn.i(Me, n, (function(e, t) {
                                            !e && a && a.dismissRedirect ? window.location = a.dismissRedirect : !e && "object" === typeof t && t.template && c.U(t, null, !1) && c.O(t.template, n, n.branch_view_id || t.event_data.branch_view_data.id, t.event_data.branch_view_data, !1, t.journey_link_data)
                                        }))
                                    };
                                    Dn.addListener("branch_internal_event_didCloseJourney", d)
                                }
                            }(n, t, i, r, a, o, c, s)
                        }))
                    }))
                }

                function Qn(e) {
                    return void 0 === e || null === e ? null : e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&brvbar;/g, "\xa6").replace(/&laquo;/g, "\xab").replace(/&acute;/g, "\xb4").replace(/&middot;/g, "\xb7").replace(/&raquo;/g, "\xbb").replace(/&amp;/g, "&").replace(/&iquest;/g, "\xbf").replace(/&times;/g, "\xd7").replace(/&divide;/g, "\xf7").replace(/&Agrave;/g, "\xc0").replace(/&Aacute;/g, "\xc1").replace(/&Acirc;/g, "\xc2").replace(/&Atilde;/g, "\xc3").replace(/&Auml;/g, "\xc4").replace(/&Aring;/g, "\xc5").replace(/&AElig;/g, "\xc6").replace(/&Ccedil;/g, "\xc7").replace(/&Egrave;/g, "\xc8").replace(/&Eacute;/g, "\xc9").replace(/&Ecirc;/g, "\xca").replace(/&Euml;/g, "\xcb").replace(/&Igrave;/g, "\xcc").replace(/&Iacute;/g, "\xcd").replace(/&Icirc;/g, "\xce").replace(/&Iuml;/g, "\xcf").replace(/&ETH;/g, "\xd0").replace(/&Ntilde;/g, "\xd1").replace(/&Ograve;/g, "\xd2").replace(/&Oacute;/g, "\xd3").replace(/&Ocirc;/g, "\xd4").replace(/&Otilde;/g, "\xd5").replace(/&Ouml;/g, "\xd6").replace(/&Oslash;/g, "\xd8").replace(/&Ugrave;/g, "\xd9").replace(/&Uacute;/g, "\xda").replace(/&Ucirc;/g, "\xdb").replace(/&Uuml;/g, "\xdc").replace(/&Yacute;/g, "\xdd").replace(/&THORN;/g, "\xde").replace(/&szlig;/g, "\xdf").replace(/&agrave;/g, "\xe0").replace(/&aacute;/g, "\xe1").replace(/&acirc;/g, "\xe2").replace(/&atilde;/g, "\xe3").replace(/&auml;/g, "\xe4").replace(/&aring;/g, "\xe5").replace(/&aelig;/g, "\xe6").replace(/&ccedil;/g, "\xe7").replace(/&egrave;/g, "\xe8").replace(/&eacute;/g, "\xe9").replace(/&ecirc;/g, "\xea").replace(/&euml;/g, "\xeb").replace(/&igrave;/g, "\xec").replace(/&iacute;/g, "\xed").replace(/&icirc;/g, "\xee").replace(/&iuml;/g, "\xef").replace(/&eth;/g, "\xf0").replace(/&ntilde;/g, "\xf1").replace(/&ograve;/g, "\xf2").replace(/&oacute;/g, "\xf3").replace(/&ocirc;/g, "\xf4").replace(/&otilde;/g, "\xf5").replace(/&ouml;/g, "\xf6").replace(/&oslash;/g, "\xf8").replace(/&ugrave;/g, "\xf9").replace(/&uacute;/g, "\xfa").replace(/&ucirc;/g, "\xfb").replace(/&uuml;/g, "\xfc").replace(/&yacute;/g, "\xfd").replace(/&thorn;/g, "\xfe").replace(/&yuml;/g, "\xff")
                }

                function Zn(e, n) {
                    return H({
                        url: e && e.url || N(),
                        user_agent: navigator.userAgent,
                        language: navigator.language,
                        screen_width: screen.width || -1,
                        screen_height: screen.height || -1,
                        window_device_pixel_ratio: window.devicePixelRatio || 1
                    }, n || {})
                }

                function et(e, n) {
                    if ($n || (jn = !0), Mn && !$n) {
                        document.body.style.transition = "all 00.375s ease", document.getElementById("branch-banner-iframe").style.transition = "all 00.25s ease";
                        var t = document.getElementById("branch-iframe-css").innerHTML + "\n";
                        t += "body { -webkit-transition: all 0.375s ease; }\n#branch-banner-iframe { -webkit-transition: all 0.25s ease; }\n", document.getElementById("branch-iframe-css").innerHTML = "", document.getElementById("branch-iframe-css").innerHTML = t
                    }
                    "top" === gn ? e.style.top = "-" + _n : "bottom" === gn && (e.style.bottom = "-" + _n), dt(Dn, "willCloseJourney", Wn), setTimeout((function() {
                        Qe(e), Qe(document.getElementById("branch-css")), Qe(document.getElementById("branch-iframe-css")), Qe(document.getElementById("branch-journey-cta")), (!$n || Rn) && kn && 0 < kn.length ? kn.forEach((function(e) {
                            e.style.marginTop = 0
                        })) : (zn = $n, Fn = gn, qn = kn), "top" === gn ? document.body.style.marginTop = An : "bottom" === gn && (document.body.style.marginBottom = Cn), en("branch-banner-is-active"), en("branch-banner-no-scroll"), xn && (xn = !1, window.removeEventListener("resize", Un), window.removeEventListener("scroll", Vn)), dt(Dn, "didCloseJourney", Wn), n || dt(Dn, "branch_internal_event_didCloseJourney", Wn), Hn = !1, setTimeout((function() {
                            jn = !1
                        }), 250)
                    }), $n ? 0 : 270)
                }

                function nt() {
                    return !!(bn && Dn && Dn.v && Dn.v.data) && Dn.v.data.$journeys_cta
                }

                function tt() {
                    if (nt()) return Dn.v.data.$journeys_cta
                }
                var it, rt = {};

                function at(e, n, t) {
                    var i = n ? "OPEN" : "GET";
                    ! function(e) {
                        var n = Jn(e) || {};
                        n && n.bannerHeight && n.position && n.sticky ? (_n = n.bannerHeight, gn = n.position, yn = n.sticky) : (e = e.match(Pn)) ? (gn = "top", (e = e[1].match(Nn)) && (_n = e[1]), yn = "absolute") : (gn = "bottom", yn = "fixed"), -1 === _n.indexOf("vh") && -1 === _n.indexOf("%") || (e = _n.indexOf("vh") ? _n.slice(0, -2) : _n.slice(0, -1), _n = e / 100 * En + "px", 100 > e ? wn = !0 : vn = !0)
                    }(e);
                    var r = Jn(e);
                    r && (i = function(e, n) {
                        var t;
                        return n && e && e.ctaText && e.ctaText.has_app ? t = e.ctaText.has_app : e && e.ctaText && e.ctaText.no_app && (t = e.ctaText.no_app), t
                    }(r, n), function(e) {
                        if (kn = [], e && e.injectorSelector && (e = document.querySelectorAll(e.injectorSelector)))
                            for (var n = 0; n < e.length; n++) kn.push(e[n].parentElement)
                    }(r));
                    var a = function(e) {
                        if (e = e.match(Bn)) return e[1]
                    }(e);
                    ! function(e) {
                        if (e = e.match(On)) {
                            e = e[1];
                            var n = document.createElement("script");
                            n.id = "branch-journey-cta", ve(n), n.innerHTML = e, document.body.appendChild(n)
                        }
                    }(e);
                    var o = function(e) {
                        if (e = e.match(In)) return e[1]
                    }(e);
                    e = function(e) {
                        var n = e.match(Tn),
                            t = e.match(On),
                            i = e.match(Bn),
                            r = e.match(In);
                        return n && (e = e.replace(Tn, "")), t && (e = e.replace(On, "")), i && (e = e.replace(Bn, "")), r && (e = e.replace(In, "")), e
                    }(e);
                    var c = function() {
                        var e = document.createElement("iframe");
                        return e.src = "about:blank", e.style.overflow = "hidden", e.scrolling = "no", e.id = "branch-banner-iframe", e.className = "branch-animation", e.title = "Branch Banner", e.setAttribute("aria-label", "Branch Banner"), ve(e), e
                    }();
                    c.onload = function() {
                        var n = e,
                            r = R(),
                            s = c.contentDocument || c.contentWindow.document;
                        if (s.head = s.createElement("head"), s.body = s.createElement("body"), s.body.innerHTML = n, s.body.className = "ios" === r || "ipad" === r ? "branch-banner-ios" : "android" === r ? "branch-banner-android" : "branch-banner-desktop", (n = s.querySelector('meta[name="accessibility"]')) && "wcag" === n.content && ((n = s.createElement("script")).type = "text/javascript", n.text = "\n\t\t\tvar  focusableElements =\n\t\t\t\t\t'button, [href], input, select, textarea';\n\t\t\tvar modal = document.getElementById('branch-banner');\n\t\t\tvar focusableContent = modal.querySelectorAll(focusableElements);\n\t\t\tvar firstFocusableElement = focusableContent[0];\n\t\t\tvar lastFocusableElement = focusableContent[focusableContent.length - 1];\n\n\t\t\tdocument.addEventListener('keydown', function(e) {\n\t\t\t\tvar isTabPressed = e.key === 'Tab' || e.keyCode === 9;\n\t\t\t\n\t\t\t\tif (!isTabPressed) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (e.shiftKey) {\n\t\t\t\t\tif (document.activeElement === firstFocusableElement) {\n\t\t\t\t\t\tlastFocusableElement.focus();\n\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t}\n\t\t\t\t} else if (document.activeElement === lastFocusableElement) {\n\t\t\t\t\tfirstFocusableElement.focus();\n\t\t\t\t\te.preventDefault();\n\t\t\t\t}\n\t\t\t});\n\t\t\tsetTimeout(function() { firstFocusableElement.focus() }, 100);\n\t\t", s.querySelector("body").append(n)), Kn(o), (s = document.createElement("style")).type = "text/css", s.id = "branch-css", s.innerHTML = a, ve(s), (n = c.contentWindow.document).head.appendChild(s), wn || vn) {
                            var d = n.getElementsByClassName("branch-banner-content")[0];
                            !n.getElementsByClassName("branch-banner-dismiss-background")[0] && d && (d.style.height = _n)
                        }
                        "top" === gn ? c.style.top = "-" + _n : "bottom" === gn && (c.style.bottom = "-" + _n);
                        try {
                            d = n.getElementsByClassName("branch-banner-content")[0];
                            var l = window.getComputedStyle(d).getPropertyValue("background-color").split(", ");
                            l[3] && 0 === parseFloat(l[3]) && (c.style.boxShadow = "none")
                        } catch (u) {}
                        d = i, c.contentWindow.document.getElementById("branch-mobile-action").innerHTML = d, dt(Dn, "willShowJourney", Wn),
                            function(e, n) {
                                if (Ze(document.body, "branch-banner-is-active"), vn && "fixed" === yn) {
                                    var t = document.createElement("style");
                                    t.type = "text/css", t.innerHTML = ".branch-banner-no-scroll {overflow: hidden;}", document.head.appendChild(t), Ze(document.body, "branch-banner-no-scroll")
                                }
                                setTimeout((function() {
                                    n ? (e.style.top = null, e.style.bottom = null) : "top" === gn ? e.style.top = "0" : "bottom" === gn && (Wn && Wn.journey_link_data && !Wn.journey_link_data.safeAreaRequired ? e.style.bottom = "0" : (xn = !0, document.getElementById("branch-banner-iframe").style.transition = "all 0s", Yn(!1, !0), window.addEventListener("resize", Un), window.addEventListener("scroll", Vn))), dt(Dn, "didShowJourney", Wn), Hn = !0
                                }), 20)
                            }(c, o), t(c)
                    }, document.body.appendChild(c)
                }

                function ot(e, n, t) {
                    return function() {
                        var i = this,
                            r = arguments[arguments.length - 1];
                        if (0 === e || "function" !== typeof r) var a = function() {},
                            o = Array.prototype.slice.call(arguments);
                        else o = Array.prototype.slice.call(arguments, 0, arguments.length - 1) || [], a = r;
                        i.ha((function(r) {
                            function c(n, t) {
                                try {
                                    if (n && 0 === e) throw n;
                                    1 === e ? a(n) : 2 === e && a(n, t)
                                } finally {
                                    r()
                                }
                            }
                            if (!t) {
                                if (1 === i.A) return c(Error(I("Branch SDK initialization pending and a Branch method was called outside of the queue order")), null);
                                if (2 === i.A) return c(Error(I("Branch SDK initialization failed, so further methods cannot be called", i.u, i.B)), null);
                                if (0 === i.A || !i.A) return c(Error(I("Branch SDK not initialized")), null)
                            }
                            o.unshift(c), n.apply(i, o)
                        }))
                    }
                }

                function ct() {
                    if (!(this instanceof ct)) return it || (it = new ct), it;
                    this.ha = hn(), this.h = new Fe, this.$ = new Ve, this.l = [], this.ca = "web2.67.0", this.u = this.A = 0, this.B = null
                }

                function st(e) {
                    var n = an(e.h);
                    return (n = n && n.referring_link) ? n : (e = e.h.get("click_id")) ? "https://bnc.lt/c/" + e : null
                }

                function dt(e, n, t) {
                    for (var i = 0; i < e.l.length; i++) e.l[i].event && e.l[i].event !== n || e.l[i].listener(n, t)
                }

                function lt(e, n, t) {
                    t = t || {};
                    try {
                        e.v = b(m(t))
                    } finally {
                        e.v = e.v || {}
                    }
                    n()
                }
                rt.U = function(e, n, t) {
                    return !(document.getElementById("branch-banner") || document.getElementById("branch-banner-iframe") || document.getElementById("branch-banner-container") || !R() || !e.event_data || !e.template) && (!!t || ((e = !e.event_data.branch_view_data.id || n && n.no_journeys) || (!0 === (n = (e = Dn).h.get("globalJourneysDismiss", !0)) || n > Date.now() ? e = !0 : (e.h.remove("globalJourneysDismiss", !0), e = !1)), !e || (rt.Ga = 1, !1)))
                }, rt.ea = function(e) {
                    e = {
                        event: "pageview",
                        journey_displayed: !0,
                        audience_rule_id: e.audience_rule_id,
                        branch_view_id: e.branch_view_id
                    };
                    var n = an(Dn.h) || {};
                    e = le(e, "identity", n = n.hasOwnProperty("identity") ? n.identity : null), Dn.i($e, e, (function() {}))
                }, rt.O = function(e, n, t, i, r, a) {
                    if (!jn) {
                        fn = t,
                            function(e) {
                                var n = {
                                    banner_id: fn
                                };
                                if (e && "object" === typeof e && 0 < Object.keys(e || {}).length) {
                                    var t = ["browser_fingerprint_id", "app_id", "source", "open_app", "link_click_id"];
                                    if (e && "object" === typeof e && !Array.isArray(e) && 0 < Object.keys(e).length && t && Array.isArray(t) && 0 < t.length)
                                        for (var i in e) e.hasOwnProperty(i) && -1 < t.indexOf(i) && delete e[i];
                                    n.journey_link_data = {}, H(n.journey_link_data, e)
                                }
                                Wn = n
                            }(a);
                        var o = i.audience_rule_id;
                        (a = document.getElementById("branch-iframe-css")) && a.parentElement.removeChild(a);
                        var c = document.createElement("div");
                        c.id = "branch-banner", document.body.insertBefore(c, null), Ze(c, "branch-banner-is-active");
                        var s = !1,
                            d = n.callback_string,
                            l = null,
                            u = Dn.h;
                        if (e) {
                            var p = Jn(e) || {};
                            e = function(e) {
                                try {
                                    if (nt() && 0 < tt().length) return e.replace(/validate[(].+[)];/g, 'validate("' + tt() + '")').replace("window.top.location.replace(", "window.top.location = ")
                                } catch (n) {}
                                return e
                            }(e);
                            var h = window.setTimeout((function() {
                                window[d] = function() {}
                            }), v);
                            window[d] = function(e) {
                                window.clearTimeout(h), s || Gn(t, o, u, l = e, null, p, r)
                            }, at(e, n.has_app_websdk, (function(e) {
                                Ln = e, null === e ? s = !0 : (Gn(t, o, u, l, e, p, r), x && (k["journey-load-time"] = (Date.now() - window.performance.timing.navigationStart).toString()), document.body.removeChild(c), C || r || rt.ea(i))
                            }))
                        } else document.body.removeChild(c), C || r || rt.ea(i)
                    }
                }, rt.N = function(e, n, t, i) {
                    Dn = t, n || (n = {}), e || (e = {}), Mn = n.disable_entry_animation || !1, $n = n.disable_exit_animation || !1;
                    var r, a = H({}, t.v),
                        o = an(t.h) || {},
                        c = !!o.hasOwnProperty("has_app") && o.has_app,
                        s = o.hasOwnProperty("identity") ? o.identity : null,
                        d = t.h.get("journeyDismissals", !0),
                        l = (n.user_language || Z() || "en").toLowerCase() || null,
                        u = ge(st(t));
                    return (r = n.branch_view_id) || (r = "_branch_view_id".replace(/[\[\]]/g, "\\$&"), r = (r = new RegExp("[?&]" + r + "(=([^&#]*)|&|#|$)").exec(N())) && r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : ""), r = r || null, t = n.make_new_link ? null : L(st(t)), a.event = i ? "dismiss" : "pageview", a.metadata = e, a = le(a, "initial_referrer", u), a = le(a, "branch_view_id", r), a = le(a, "no_journeys", n.no_journeys), a = le(a, "is_iframe", be()), a = le(a, "journey_dismissals", d), (a = le(a, "identity", s)).user_language = l, a.open_app = n.open_app || !1, a.has_app_websdk = c, a.feature = "journeys", a.callback_string = "branch_view_callback__" + mn++, a.data || (a.data = {}), a.data = H(Q(), a.data), a.data = H(function(e) {
                        var n = /^\$journeys_\S+$/,
                            t = e.data,
                            i = {};
                        if (!t) return {};
                        switch (typeof t) {
                            case "string":
                                try {
                                    t = b(t)
                                } catch (a) {
                                    t = {}
                                }
                                break;
                            case "object":
                                break;
                            default:
                                t = {}
                        }
                        return Object.keys(t).forEach((function(e) {
                            n.test(e) && (i[e] = t[e])
                        })), i
                    }(o || {}), a.data), t && (a.data.link_click_id = t), (e = o.data ? b(o.data) : null) && e["+referrer"] && (a.data["+referrer"] = e["+referrer"]), D(a)
                }, ct.prototype.i = function(e, n, t) {
                    return this.aa && (n.app_id = this.aa), this.o && (n.branch_key = this.o), (e.g && e.g.session_id || e.j && e.j.session_id) && this.M && (n.session_id = this.M), (e.g && e.g.identity_id || e.j && e.j.identity_id) && this.s && (n.identity_id = this.s), 0 > e.endpoint.indexOf("/v1/") ? (e.g && e.g.developer_identity || e.j && e.j.developer_identity) && this.m && (n.developer_identity = this.m) : (e.g && e.g.identity || e.j && e.j.identity) && this.m && (n.identity = this.m), (e.g && e.g.link_click_id || e.j && e.j.link_click_id) && this.fa && (n.link_click_id = this.fa), (e.g && e.g.sdk || e.j && e.j.sdk) && this.ca && (n.sdk = this.ca), (e.g && e.g.browser_fingerprint_id || e.j && e.j.browser_fingerprint_id) && this.J && (n.browser_fingerprint_id = this.J), C && (n.tracking_disabled = C), Xe(this.$, e, n, this.h, (function(e, n) {
                        t(e, n)
                    }))
                }, ct.prototype.init = ot(2, (function(e, n, t) {
                    function i() {
                        if ("undefined" !== typeof document.hidden) var e = "hidden",
                            n = "visibilitychange";
                        else "undefined" !== typeof document.mozHidden ? (e = "mozHidden", n = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (e = "msHidden", n = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (e = "webkitHidden", n = "webkitvisibilitychange");
                        n && !o.ka && (o.ka = !0, document.addEventListener(n, (function() {
                            document[e] || (a(null), "function" === typeof o.F && o.F())
                        }), !1))
                    }

                    function r(n, i) {
                        if (i && (i = function(e) {
                                if (e.link_click_id && (o.fa = e.link_click_id.toString()), e.session_id && (o.M = e.session_id.toString()), e.identity_id && (o.s = e.identity_id.toString()), e.identity && (o.m = e.identity.toString()), e.link && (o.T = e.link), e.referring_link) {
                                    var n = e.referring_link;
                                    e.referring_link = n ? "http" !== n.substring(0, 4) ? "https://bnc.lt" + n : n : null
                                }
                                return !e.click_id && e.referring_link && (e.click_id = L(e.referring_link)), o.J = e.browser_fingerprint_id, e
                            }(i), C || (i = function(e) {
                                return d && (e.identity = o.m), e
                            }(i), on(o.h, i, d)), o.A = 3, i.data_parsed = i.data && 0 !== i.data.length ? b(i.data) : {}), n) return o.A = 2, o.u || (o.u = 1, o.B = n.message), e(n, i && P(i));
                        try {
                            e(n, i && P(i))
                        } catch (a) {} finally {
                            o.renderFinalize()
                        }
                        n = function() {
                            var e = {},
                                n = {};
                            return n = le(n, "$og_title", X("title")), n = le(n, "$og_description", X("description")), n = le(n, "$og_image_url", X("image")), n = le(n, "$og_video", X("video")), n = (n = le(n, "$og_type", X("type"))) && 0 < Object.keys(n).length ? n : null, e = le(e, "og_data", n), e = le(e, "hosted_deeplink_data", Q()), e = le(e, "title", 0 < (n = document.getElementsByTagName("title")).length ? n[0].innerText : null), e = le(e, "description", (n = document.querySelector('meta[name="description"]')) && n.content ? n.content : null), (e = le(e, "canonical_url", (n = document.querySelector('link[rel="canonical"]')) && n.href ? n.href : null)) && 0 < Object.keys(e).length ? e : {}
                        }(), (i = he(t.metadata, "object") ? t.metadata : null) && (i = _e(n.hosted_deeplink_data, i)) && 0 < Object.keys(i).length && (n.hosted_deeplink_data = i);
                        var r = rt.N(Zn(t, n), t, o, !1);
                        o.renderQueue((function() {
                            o.i($e, r, (function(e, n) {
                                e || "object" !== typeof n || (e = !!r.branch_view_id, rt.U(n, t, e) ? rt.O(n.template, r, r.branch_view_id || n.event_data.branch_view_data.id, n.event_data.branch_view_data, e, n.journey_link_data) : ((n.auto_branchify || !c && q("branchify_url") && st(o)) && this.branch.deepview({}, {
                                    make_new_link: !1,
                                    open_app: !0,
                                    auto_branchify: !0
                                }), dt(Dn, "willNotShowJourney"))), C && (T = !0)
                            }))
                        }))
                    }

                    function a(e) {
                        var n = {
                                sdk: "2.67.0",
                                branch_key: o.o
                            },
                            t = an(o.h) || {},
                            i = an(o.h, !0) || {};
                        i.browser_fingerprint_id && (n._t = i.browser_fingerprint_id), z() || F() || o.i(Se, n, (function(e, n) {
                            e && (o.u = 3, o.B = e.message), n && (t.browser_fingerprint_id = n)
                        })), o.i(Pe, {
                            browser_fingerprint_id: t.browser_fingerprint_id
                        }, (function(n, i) {
                            n && (o.u = 4, o.B = n.message), n || !i || t.has_app || (t.has_app = !0, cn(o.h, t), dt(o, "didDownloadApp")), e && e(null, t)
                        }))
                    }
                    x && (k["init-began-at"] = (Date.now() - window.performance.timing.navigationStart).toString());
                    var o = this;
                    o.A = 1, -1 < n.indexOf("key_") ? o.o = n : o.aa = n, t = t && he(t, "object") ? t : {}, y = (o.L = t) && t.retries && Number.isInteger(t.retries) ? t.retries : y, _ = t && t.retry_delay && Number.isInteger(t.retry_delay) ? t.retry_delay : _, v = t && t.timeout && Number.isInteger(t.timeout) ? t.timeout : v, w = t && t.nonce ? t.nonce : w, g = t && t.enableLogging ? t.enableLogging : g, C = !(!t || !t.tracking_disabled || !0 !== t.tracking_disabled), T = !1, C && B(o), n = an(o.h, !0), o.s = n && n.identity_id, n = an(o.h);
                    var c = t && "undefined" !== typeof t.branch_match_id && null !== t.branch_match_id ? t.branch_match_id : null,
                        s = c || q("_branch_match_id") || function() {
                            try {
                                var e = (be() && me() ? window.top.location.hash : window.location.hash).match(RegExp("r:([^&]*)"));
                                if (e && 1 <= e.length) return e[1]
                            } catch (n) {}
                        }(),
                        d = !o.s;
                    if (o.I = !!o.h.get("branch_view_enabled"), n && n.session_id && !s && !q("branchify_url")) cn(o.h, {
                        data: ""
                    }), cn(o.h, {
                        referring_link: ""
                    }), i(), a(r);
                    else {
                        n = {
                            sdk: "2.67.0",
                            branch_key: o.o
                        };
                        var l = an(o.h, !0) || {};
                        l.browser_fingerprint_id && (n._t = l.browser_fingerprint_id), l.identity && (o.m = l.identity);
                        var u = parseInt(q("[?&]_open_delay_ms"), 10);
                        z() || F() ? we((function() {
                            o.i(Ee, {
                                link_identifier: s,
                                browser_fingerprint_id: s || l.browser_fingerprint_id,
                                alternative_browser_fingerprint_id: l.browser_fingerprint_id,
                                options: t,
                                initial_referrer: ge(st(o)),
                                current_url: be() && me() ? window.top.location.href : window.location.href,
                                screen_height: screen.height || 0,
                                screen_width: screen.width || 0
                            }, (function(e, n) {
                                e && (o.u = 2, o.B = e.message), e || "object" !== typeof n || (n.branch_view_enabled && (o.I = !!n.branch_view_enabled, o.h.set("branch_view_enabled", o.I)), s && (n.click_id = s)), i(), r(e, n)
                            }))
                        }), u) : o.i(Se, n, (function(e, n) {
                            if (e) return o.u = 3, o.B = e.message, r(e, null);
                            we((function() {
                                o.i(Ee, {
                                    link_identifier: s,
                                    browser_fingerprint_id: s || n,
                                    alternative_browser_fingerprint_id: l.browser_fingerprint_id,
                                    options: t,
                                    initial_referrer: ge(st(o)),
                                    current_url: be() && me() ? window.top.location.href : window.location.href,
                                    screen_height: screen.height || 0,
                                    screen_width: screen.width || 0
                                }, (function(e, n) {
                                    e && (o.u = 2, o.B = e.message), e || "object" !== typeof n || (n.branch_view_enabled && (o.I = !!n.branch_view_enabled, o.h.set("branch_view_enabled", o.I)), s && (n.click_id = s)), i(), r(e, n)
                                }))
                            }), u)
                        }))
                    }
                }), !0), ct.prototype.renderQueue = ot(0, (function(e, n) {
                    this.ia ? n() : (this.C = this.C || [], this.C.push(n)), e(null, null)
                })), ct.prototype.renderFinalize = ot(2, (function(e) {
                    this.C && 0 < this.C.length && (this.C.forEach((function(e) {
                        e.call(this)
                    })), delete this.C), this.ia = !0, e(null, null)
                })), ct.prototype.data = ot(2, (function(e) {
                    var n = P(an(this.h));
                    n.referring_link = st(this), n.data_parsed = n.data && 0 !== n.data.length ? b(n.data) : {}, e(null, n)
                })), ct.prototype.first = ot(2, (function(e) {
                    e(null, P(an(this.h, !0)))
                })), ct.prototype.setIdentity = ot(2, (function(e, n) {
                    var t = this;
                    this.i(Te, {
                        identity: n
                    }, (function(i, r) {
                        i && e(i), r = r || {}, t.s = r.identity_id ? r.identity_id.toString() : null, t.T = r.link, t.m = n, r.developer_identity = n, r.referring_data_parsed = r.referring_data ? b(r.referring_data) : null, sn(t.h, {
                            identity: n,
                            identity_id: t.s
                        }), e(null, r)
                    }))
                })), ct.prototype.logout = ot(1, (function(e) {
                    var n = this;
                    this.i(je, {}, (function(t, i) {
                        t && e(t), i = {
                            data_parsed: null,
                            data: null,
                            referring_link: null,
                            click_id: null,
                            link_click_id: null,
                            identity: null,
                            session_id: (i = i || {}).session_id,
                            identity_id: i.identity_id,
                            link: i.link,
                            device_fingerprint_id: n.na || null
                        }, n.T = i.link, n.M = i.session_id, n.s = i.identity_id, n.m = null, sn(n.h, i, !0), e(null)
                    }))
                })), ct.prototype.getBrowserFingerprintId = ot(2, (function(e) {
                    e(null, (an(this.h, !0) || {}).browser_fingerprint_id || null)
                })), ct.prototype.crossPlatformIds = ot(2, (function(e) {
                    this.i(Re, {
                        user_data: m(fe(this))
                    }, (function(n, t) {
                        return e(n || null, t && t.user_data || null)
                    }))
                })), ct.prototype.lastAttributedTouchData = ot(2, (function(e, n) {
                    n = he(n, "number") ? n : null;
                    var t = fe(this);
                    le(t, "attribution_window", n), this.i(ze, {
                        user_data: m(t)
                    }, (function(n, t) {
                        return e(n || null, t || null)
                    }))
                })), ct.prototype.track = ot(1, (function(e, n, t, i) {
                    if (t = t || {}, w = (i = i || {}).nonce ? i.nonce : w, "pageview" === n) {
                        (n = _e(Q(), t)) && 0 < Object.keys(n).length && (t.hosted_deeplink_data = n);
                        var r = rt.N(Zn(i, t), i, this, !1);
                        this.i($e, r, (function(n, t) {
                            if (!n && "object" === typeof t) {
                                var a = !!r.branch_view_id;
                                rt.U(t, i, a) ? rt.O(t.template, r, r.branch_view_id || t.event_data.branch_view_data.id, t.event_data.branch_view_data, a, t.journey_link_data) : dt(Dn, "willNotShowJourney")
                            }
                            "function" === typeof e && e.apply(this, arguments)
                        }))
                    } else this.i(Ne, {
                        event: n,
                        metadata: H({
                            url: N(),
                            user_agent: navigator.userAgent,
                            language: navigator.language
                        }, t),
                        initial_referrer: ge(st(this))
                    }, (function(n, t) {
                        "function" === typeof e && e.apply(this, arguments)
                    }))
                })), ct.prototype.logEvent = ot(1, (function(e, n, t, i, r) {
                    n = he(n, "string") ? n : null, t = he(t, "object") ? t : null, r = he(r, "string") ? r : null, t = function(e) {
                        if (!e || 0 === Object.keys(e).length) return null;
                        for (var n = ee(pe, Object.keys(e)), t = {}, i = 0; i < n.length; i++) {
                            var r = n[i];
                            t[r] = e[r], delete e[r]
                        }
                        return {
                            custom_data: ye(t),
                            event_data: e
                        }
                    }(t), n && -1 < ue.indexOf(n) ? (i = he(i, "array") ? i : null, this.i(Le, {
                        name: n,
                        user_data: m(fe(this)),
                        custom_data: m(t && t.custom_data || {}),
                        event_data: m(t && t.event_data || {}),
                        content_items: m(i || []),
                        customer_event_alias: r
                    }, (function(n) {
                        return e(n || null)
                    }))) : this.i(He, {
                        name: n,
                        user_data: m(fe(this)),
                        custom_data: m(t && t.custom_data || {}),
                        event_data: m(t && t.event_data || {}),
                        content_items: m(i || []),
                        customer_event_alias: r
                    }, (function(n) {
                        return e(n || null)
                    }))
                })), ct.prototype.link = ot(2, (function(e, n) {
                    var t = D(n),
                        i = this.o;
                    this.i(Oe, t, (function(n, r) {
                        if (n) return e(n, O(i, t));
                        e(null, r && r.url)
                    }))
                })), ct.prototype.sendSMS = ot(1, (function(e, n, t, i) {
                    function r(t) {
                        a.i(Ce, {
                            link_url: t,
                            phone: n
                        }, (function(n) {
                            e(n || null)
                        }))
                    }
                    var a = this;
                    "function" === typeof i ? i = {} : "undefined" !== typeof i && null !== i || (i = {}), i.make_new_link = i.make_new_link || !1, t.channel && "app banner" !== t.channel || (t.channel = "sms");
                    var o = st(a);
                    o && !i.make_new_link ? r(L(o)) : a.i(Oe, D(t), (function(n, t) {
                        if (n) return e(n);
                        n = t.url, /(bnc.lt\/|app\.link\/)/.test(n) || (n = "https://bnc.lt/" + function(e) {
                            return e ? (-1 < e.indexOf("://") && (e = e.split("://")[1]), e.substring(e.indexOf("/") + 1)) : null
                        }(n)), a.i(Ae, {
                            link_url: n,
                            click: "click"
                        }, (function(n, t) {
                            if (n) return e(n);
                            r(t.click_id)
                        }))
                    }))
                })), ct.prototype.qrCode = ot(2, (function(e, n, t) {
                    D(n).qr_code_settings = m(ye(t || {})), this.i(Be, D(n), (function(n, t) {
                        function i() {}
                        return n || (i.rawBuffer = t, i.base64 = function() {
                            if (this.rawBuffer) return btoa(String.fromCharCode.apply(null, new Uint8Array(this.rawBuffer)));
                            throw Error("QrCode.rawBuffer is empty.")
                        }), e(n || null, i || null)
                    }))
                })), ct.prototype.deepview = ot(1, (function(e, n, t) {
                    var i = this;
                    t || (t = {}), t.deepview_type = "undefined" === typeof t.deepview_type ? "deepview" : "banner", n.data = H(Q(), n.data), n = D(n = be() ? H({
                        is_iframe: !0
                    }, n) : n);
                    var r = O(this.o, n);
                    (t.open_app || null === t.open_app || "undefined" === typeof t.open_app) && (n.open_app = !0), n.append_deeplink_path = !!t.append_deeplink_path, n.deepview_type = t.deepview_type;
                    var a = st(i);
                    a && !t.make_new_link && (n.link_click_id = L(a)), n.banner_options = t, t.auto_branchify && (n.auto_branchify = !0), i.F = s(this.i, i, Ie, n, (function(n, t) {
                        if (n) return C || (i.D = function() {
                            window.top.location = r
                        }), e(n);
                        "function" === typeof t && (i.D = t), e(null)
                    })), i.F()
                })), ct.prototype.deepviewCta = ot(1, (function(e) {
                    if ("undefined" === typeof this.D) return e(C ? Error("Requested operation cannot be completed since tracking is disabled") : Error("Cannot call Deepview CTA, please call branch.deepview() first"), null);
                    window.event && (window.event.preventDefault ? window.event.preventDefault() : window.event.returnValue = !1), dt(this, "didDeepviewCTA"), this.D(), e()
                })), ct.prototype.referrals = function() {
                    console.warn("Credits feature has been deprecated. This is no-op.")
                }, ct.prototype.getCode = function() {
                    console.warn("Credits feature has been deprecated. This is no-op.")
                }, ct.prototype.validateCode = function() {
                    console.warn("Credits feature has been deprecated. This is no-op.")
                }, ct.prototype.applyCode = function() {
                    console.warn("Credits feature has been deprecated. This is no-op.")
                }, ct.prototype.credits = function() {
                    console.warn("Credits feature has been deprecated. This is no-op.")
                }, ct.prototype.creditHistory = function() {
                    console.warn("Credits feature has been deprecated. This is no-op.")
                }, ct.prototype.redeem = function() {
                    console.warn("Credits feature has been deprecated. This is no-op.")
                }, ct.prototype.addListener = function(e, n) {
                    "function" === typeof e && void 0 === n && (n = e, e = null), n && this.l.push({
                        listener: n,
                        event: e || null
                    })
                }, ct.prototype.removeListener = function(e) {
                    e && (this.l = this.l.filter((function(n) {
                        if (n.listener !== e) return n
                    })))
                }, ct.prototype.setBranchViewData = ot(1, (function(e, n) {
                    lt.call(null, this, e, n)
                }), !0), ct.prototype.closeJourney = ot(1, (function(e) {
                    var n = this;
                    n.renderQueue((function() {
                        if (!Ln || !Hn) return e("Journey already dismissed.");
                        dt(n, "didCallJourneyClose", Wn), et(Ln, !0)
                    })), e()
                })), ct.prototype.banner = ot(1, (function(e, n, t) {
                    t = t || {}, lt.call(null, this, (function() {}), t), "undefined" === typeof n.showAgain && "undefined" !== typeof n.forgetHide && (n.showAgain = n.forgetHide);
                    var i = {
                        icon: de(n.icon) || "",
                        title: de(n.title) || "",
                        description: de(n.description) || "",
                        S: "number" === typeof n.reviewCount && 0 < n.reviewCount ? Math.floor(n.reviewCount) : null,
                        H: "number" === typeof n.rating && 5 >= n.rating && 0 < n.rating ? Math.round(2 * n.rating) / 2 : null,
                        sa: de(n.openAppButtonText) || "View in app",
                        pa: de(n.downloadAppButtonText) || "Download App",
                        xa: de(n.sendLinkText) || "Send Link",
                        ua: de(n.phonePreviewText) || "(999) 999-9999",
                        K: "undefined" === typeof n.iframe || n.iframe,
                        Z: "undefined" === typeof n.showiOS || n.showiOS,
                        za: "undefined" === typeof n.showiPad || n.showiPad,
                        V: "undefined" === typeof n.showAndroid || n.showAndroid,
                        W: "undefined" === typeof n.showBlackberry || n.showBlackberry,
                        Y: "undefined" === typeof n.showWindowsPhone || n.showWindowsPhone,
                        X: "undefined" === typeof n.showKindle || n.showKindle,
                        ya: "undefined" === typeof n.showDesktop || n.showDesktop,
                        oa: !!n.disableHide,
                        P: "number" === typeof n.forgetHide ? n.forgetHide : !!n.forgetHide,
                        wa: "undefined" !== typeof n.respectDNT && n.respectDNT,
                        position: n.position || "top",
                        la: n.customCSS || "",
                        ra: "undefined" !== typeof n.mobileSticky && n.mobileSticky,
                        ma: "undefined" === typeof n.desktopSticky || n.desktopSticky,
                        Ca: n.buttonBorderColor || "",
                        Aa: n.buttonBackgroundColor || "",
                        Ea: n.buttonFontColor || "",
                        Da: n.buttonBorderColorHover || "",
                        Ba: n.buttonBackgroundColorHover || "",
                        Fa: n.buttonFontColorHover || "",
                        qa: !!n.make_new_link,
                        ta: !!n.open_app,
                        da: !!n.immediate,
                        ja: !!n.append_deeplink_path
                    };
                    "undefined" !== typeof n.showMobile && (i.Z = n.showMobile, i.V = n.showMobile, i.W = n.showMobile, i.Y = n.showMobile, i.X = n.showMobile), t.data = H(Q(), t.data);
                    var r = this;
                    r.renderQueue((function() {
                        r.ba = pn(r, i, t, r.h)
                    })), e()
                })), ct.prototype.closeBanner = ot(0, (function(e) {
                    var n = this;
                    n.renderQueue((function() {
                        n.ba && (dt(n, "willCloseBanner"), n.ba((function() {
                            dt(n, "didCloseBanner")
                        })))
                    })), e()
                })), ct.prototype.autoAppIndex = function() {
                    console.warn("autoAppIndex feature has been deprecated. This is no-op.")
                }, ct.prototype.trackCommerceEvent = ot(1, (function(e, n, t, i) {
                    var r = this;
                    r.renderQueue((function() {
                        var a = se(n, t);
                        if (a) return e(Error(a));
                        r.i(De, {
                            event: n,
                            metadata: H({
                                url: document.URL,
                                user_agent: navigator.userAgent,
                                language: navigator.language
                            }, i || {}),
                            initial_referrer: ge(st(r)),
                            commerce_data: t
                        }, (function(n) {
                            e(n || null)
                        }))
                    })), e()
                })), ct.prototype.disableTracking = ot(1, (function(e, n) {
                    !1 === n || "false" === n ? (T = C = !1, this.o && this.L && (!0 === this.L.tracking_disabled && delete this.L.tracking_disabled, this.init(this.o, this.L))) : void 0 !== n && !0 !== n && "true" !== n || (B(this), T = C = !0, this.closeBanner(), this.closeJourney()), e()
                }), !0), ct.prototype.setAPIResponseCallback = ot(0, (function(e, n) {
                    this.$.ga = n, e()
                }), !0);
                var ut = new ct;
                if (window.branch && window.branch._q)
                    for (var pt = window.branch._q, ht = 0; ht < pt.length; ht++) {
                        var ft = pt[ht];
                        ut[ft[0]].apply(ut, ft[1])
                    }
                void 0 === (i = function() {
                    return ut
                }.call(n, t, n, e)) || (e.exports = i), window && (window.branch = ut)
            }()
        }
    }
]);