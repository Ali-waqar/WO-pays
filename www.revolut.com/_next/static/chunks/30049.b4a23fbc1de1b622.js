"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [30049], {
        30049: function(n, e, t) {
            t.r(e), t.d(e, {
                PhoneFormPopup: function() {
                    return f
                }
            });
            var r = t(85893),
                s = t(67294),
                i = t(69173),
                o = t(87688),
                u = t(15423),
                c = t(311),
                d = t(41415),
                a = t(4844),
                l = t(63371),
                p = function(n) {
                    var e = n.phoneNumber,
                        t = n.countryCode,
                        d = n.isOpen,
                        a = n.onExit,
                        l = (0, s.useMemo)((function() {
                            if (!d) return "";
                            var n = "+".concat((0, o.G)(t)).concat(e);
                            return (0, u.f)(n)
                        }), [d, t, e]),
                        p = (0, c.T)();
                    return (0, r.jsx)(i.u, {
                        variant: "success-optional",
                        isOpen: d,
                        onExit: a,
                        children: (0, r.jsxs)(i.u.Title, {
                            children: [p("widget.getTheApp.successTitlePrefix"), (0, r.jsx)("br", {}), l]
                        })
                    })
                },
                v = function(n) {
                    var e = n.isOpen,
                        t = n.message,
                        s = n.onExit,
                        o = (0, c.T)();
                    return (0, r.jsxs)(i.u, {
                        variant: "error",
                        isOpen: e,
                        onExit: s,
                        children: [(0, r.jsx)(i.u.Title, {
                            children: o("shared.error.generic")
                        }), (0, r.jsx)(i.u.Description, {
                            children: t
                        })]
                    })
                },
                f = function(n) {
                    var e = n.formState,
                        t = n.countryCode,
                        i = n.phoneNumber,
                        o = n.handlePopupExit,
                        u = (0, d.K)();
                    return (0, s.useEffect)((function() {
                        "success" === e.status && ((0, a.x)({
                            action: l.f.RETPhoneSubmit
                        }), u("signup"))
                    }), [e.status, u]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(p, {
                            countryCode: t,
                            phoneNumber: i,
                            isOpen: "success" === e.status,
                            onExit: o
                        }), (0, r.jsx)(v, {
                            message: "message" in e ? e.message : "",
                            isOpen: "error" === e.status,
                            onExit: o
                        })]
                    })
                }
        },
        41415: function(n, e, t) {
            t.d(e, {
                K: function() {
                    return f
                },
                L: function() {
                    return w
                }
            });
            var r = t(85893),
                s = t(67294),
                i = t(11163),
                o = t(4298),
                u = t.n(o),
                c = t(15934),
                d = t(47908),
                a = t(69159),
                l = "collector-12281",
                p = "TV-8172721881-1",
                v = (0, s.createContext)((function(n) {})),
                f = function() {
                    return (0, s.useContext)(v)
                },
                w = function(n) {
                    var e = n.children,
                        t = (0, s.useRef)(!1),
                        o = (0, i.useRouter)().locale,
                        f = (0, a.i4)(o).region,
                        w = (0, c.uz)() && "GB" === f;
                    (0, c.S5)(["_tq_id.".concat(p, ".1fff"), "__pdst"]);
                    var h = (0, s.useCallback)((function(n) {
                        if (w) {
                            var e, t, r, s;
                            if ("modal" === n) null === window || void 0 === window || null === (e = window._tvq) || void 0 === e || e.push(["setCustomVariable", 5, "OpenModal", '{ "rev": "", "prod": "", "id": "", "promo": "" }', "page"]), null === window || void 0 === window || null === (t = window._tvq) || void 0 === t || t.push(["trackPageView"]);
                            if ("signup" === n) null === window || void 0 === window || null === (r = window._tvq) || void 0 === r || r.push(["setCustomVariable", 5, "Conversion", '{ "rev": "", "prod": "", "id": "", "promo": "" }', "page"]), null === window || void 0 === window || null === (s = window._tvq) || void 0 === s || s.push(["trackPageView"])
                        }
                    }), [w]);
                    return (0, s.useEffect)((function() {
                        var n = function(n) {
                            var e, t, r = n.target;
                            (t = null === (e = r.closest("a")) || void 0 === e ? void 0 : e.href) && "string" === typeof t && (t.startsWith(d.li.RetailGetTheApp) || t.includes("revolut.com/gettheapp") || t.includes("revolut.com/get") || t.includes("get.revolut.com/")) && h("modal")
                        };
                        return !t.current && w && (t.current = !0, document.addEventListener("click", n, !0)),
                            function() {
                                document.removeEventListener("click", n, !0)
                            }
                    }), [w, h]), w ? (0, r.jsxs)(v.Provider, {
                        value: h,
                        children: [(0, r.jsx)(u(), {
                            id: "tv-squared-js",
                            strategy: "lazyOnload",
                            children: '\n          var _tvq = window._tvq = window._tvq || [];\n          (function() {\n            var u = (("https:" == document.location.protocol) ? "https://'.concat(l, '.tvsquared.com/" : "http://').concat(l, ".tvsquared.com/\");\n            _tvq.push(['setSiteId', \"").concat(p, "\"]);\n            _tvq.push(['setTrackerUrl', u + 'tv2track.php']);\n            _tvq.push([function() {\n              this.deleteCustomVariable(5, 'page')\n            }]);\n            _tvq.push(['trackPageView']);\n            var d = document,\n              g = d.createElement('script'),\n              s = d.getElementsByTagName('script')[0];\n            g.type = 'text/javascript';\n            g.defer = true;\n            g.async = true;\n            g.src = u + 'tv2track.js';\n            s.parentNode.insertBefore(g, s);\n          })();\n        ")
                        }), (0, r.jsx)(u(), {
                            id: "podsights-js",
                            strategy: "lazyOnload",
                            children: "\n          (function (w, d) {\n            var id = 'pdst-capture',\n              n = 'script';\n            if (!d.getElementById(id)) {\n              w.pdst =\n                w.pdst ||\n                function () {\n                  (w.pdst.q = w.pdst.q || []).push(arguments);\n                };\n              var e = d.createElement(n);\n              e.id = id;\n              e.async = 1;\n              e.src = 'https://cdn.pdst.fm/ping.min.js';\n              var s = d.getElementsByTagName(n)[0];\n              s.parentNode.insertBefore(e, s);\n            }\n            w.pdst('conf', { key: '".concat("f6124dc7bd9941288887ca90f84df2dd", "' });\n            w.pdst('view');\n          })(window, document);\n        ")
                        }), e]
                    }) : (0, r.jsx)(r.Fragment, {
                        children: e
                    })
                }
        }
    }
]);