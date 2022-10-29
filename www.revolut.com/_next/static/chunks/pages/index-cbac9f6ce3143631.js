(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [95405], {
        48312: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(5075)
            }])
        },
        34851: function(n, e, t) {
            "use strict";
            t.d(e, {
                M: function() {
                    return l
                }
            });
            var o = t(828),
                i = t(11163),
                r = t(33147),
                s = t(61737),
                u = t(69159),
                c = t(949),
                d = t(26480);

            function l() {
                var n = (0, i.useRouter)(),
                    e = (0, u.i4)(n.locale).region,
                    t = (0, o.Z)((0, s.B)(r.cn.GeoCountryCode), 1)[0],
                    l = (0, o.Z)((0, s.B)(r.cn.GeoCountryBanner), 1)[0],
                    a = null === t || void 0 === t ? void 0 : t.toUpperCase();
                return l !== c.uZ.FALSE && a !== e && d.companySupportedCountries.includes(a)
            }
        },
        48101: function(n, e, t) {
            "use strict";
            t.d(e, {
                sL: function() {
                    return c
                }
            });
            var o = t(85893),
                i = t(5152),
                r = t.n(i),
                s = t(10677),
                u = Object.assign(r()((function() {
                    return Promise.all([t.e(25675), t.e(84446), t.e(66581), t.e(33216)]).then(t.bind(t, 33216)).then((function(n) {
                        return n.GetTheAppPopup
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [33216]
                        }
                    },
                    ssr: !1
                })),
                c = function(n) {
                    var e = n.children;
                    return (0, o.jsx)(s.PB, {
                        children: (0, o.jsxs)(s.De, {
                            children: [(0, o.jsx)(u, {}), e]
                        })
                    })
                }
        },
        87288: function(n, e, t) {
            "use strict";
            t.d(e, {
                T: function() {
                    return x
                }
            });
            var o = t(85893),
                i = t(5152),
                r = t.n(i),
                s = t(2962),
                u = t(11163),
                c = t(11752),
                d = t.n(c),
                l = t(95818),
                a = t(13858),
                v = t(48101),
                p = t(81038),
                f = t(34851),
                w = t(59548),
                h = t(10813),
                m = t(16651),
                g = t(40184),
                C = r()((function() {
                    return Promise.all([t.e(84446), t.e(66663)]).then(t.bind(t, 66663)).then((function(n) {
                        return n.GeoCountryBanner
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [66663]
                        }
                    },
                    ssr: !1
                }),
                E = r()((function() {
                    return t.e(19641).then(t.bind(t, 19641)).then((function(n) {
                        return n.MobileAppBanner
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [19641]
                        }
                    },
                    ssr: !1
                }),
                j = d()().publicRuntimeConfig,
                x = function(n) {
                    var e, t, i, r, c = n.footerBlocks,
                        d = n.legalDocuments,
                        x = n.locationId,
                        _ = n.locations,
                        b = n.page,
                        k = n.sitemap,
                        L = n.translations,
                        y = n.widgetData,
                        B = n.prefersCookieConsent,
                        S = (0, u.useRouter)().locale,
                        I = (0, f.M)(),
                        T = "hidden" === (null === b || void 0 === b || null === (e = b.meta) || void 0 === e || null === (t = e.style) || void 0 === t ? void 0 : t.menuVisibility),
                        N = null !== (r = null === b || void 0 === b ? void 0 : b.metaRobots) && void 0 !== r ? r : [l.Eo.Default],
                        P = j.noIndexLocales.includes(S);
                    return (0, o.jsxs)(m.f, {
                        sitemap: k,
                        locations: _,
                        locationId: x,
                        legalDocuments: d,
                        translations: L,
                        widgetData: y,
                        children: [(0, o.jsx)(s.PB, {
                            noindex: P || N.includes(l.Eo.NoIndex),
                            nofollow: N.includes(l.Eo.NoFollow)
                        }), (0, o.jsx)(g.K, {
                            prefersCookieConsent: B,
                            children: (0, o.jsxs)(v.sL, {
                                children: [!0 === I && (0, o.jsx)(C, {}), B && !1 === I && (0, o.jsx)(E, {}), T ? (0, o.jsx)(p.h, {}) : (0, o.jsx)(p.B, {}), (0, o.jsx)(h.l6, {
                                    style: null === b || void 0 === b || null === (i = b.meta) || void 0 === i ? void 0 : i.style,
                                    children: (0, o.jsx)(w.Q, {
                                        blocks: null === b || void 0 === b ? void 0 : b.blocks
                                    })
                                }, null === b || void 0 === b ? void 0 : b.id), (0, o.jsx)(a.$, {
                                    blocks: c,
                                    isSitemapHidden: T
                                })]
                            })
                        })]
                    })
                }
        },
        16651: function(n, e, t) {
            "use strict";
            t.d(e, {
                f: function() {
                    return c
                }
            });
            var o = t(85893),
                i = (t(67294), t(54327)),
                r = t(49025),
                s = t(311),
                u = t(91974),
                c = function(n) {
                    var e = n.children,
                        t = n.legalDocuments,
                        c = n.locationId,
                        d = n.locations,
                        l = n.sitemap,
                        a = n.translations,
                        v = n.widgetData;
                    return (0, o.jsx)(i.J, {
                        sitemap: l,
                        children: (0, o.jsx)(r.O, {
                            locations: d,
                            locationId: c,
                            legalDocuments: t,
                            children: (0, o.jsx)(s.y.Provider, {
                                value: a,
                                children: (0, o.jsx)(u.j.Provider, {
                                    value: v,
                                    children: e
                                })
                            })
                        })
                    })
                }
        },
        40184: function(n, e, t) {
            "use strict";
            t.d(e, {
                K: function() {
                    return a
                }
            });
            var o = t(85893),
                i = t(11752),
                r = t.n(i),
                s = t(45520),
                u = t(41415),
                c = t(15934),
                d = t(86011),
                l = r()().publicRuntimeConfig,
                a = function(n) {
                    var e = n.children,
                        t = n.prefersCookieConsent,
                        i = void 0 === t || t,
                        r = (0, o.jsxs)(s.YT, {
                            children: [l.isProduction && (0, o.jsx)(d.W, {}), (0, o.jsx)(u.L, {
                                children: e
                            })]
                        });
                    return i ? (0, o.jsx)(c.i1, {
                        children: r
                    }) : r
                }
        },
        26480: function(n) {
            "use strict";
            var e = new Set(["AE", "BR", "CA", "HK", "IN", "MX", "NZ", "PH", "KW", "OM", "LK", "CL", "EC", "AZ"]);
            n.exports = {
                companySupportedCountries: ["AT", "AU", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IN", "IS", "IT", "JP", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SG", "SI", "SK", "US", "BR", "NZ", "OM", "LK", "CL", "EC", "AZ", "MX"],
                comingSoonCountries: e,
                eeaCountries: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]
            }
        },
        41415: function(n, e, t) {
            "use strict";
            t.d(e, {
                K: function() {
                    return f
                },
                L: function() {
                    return w
                }
            });
            var o = t(85893),
                i = t(67294),
                r = t(11163),
                s = t(4298),
                u = t.n(s),
                c = t(15934),
                d = t(47908),
                l = t(69159),
                a = "collector-12281",
                v = "TV-8172721881-1",
                p = (0, i.createContext)((function(n) {})),
                f = function() {
                    return (0, i.useContext)(p)
                },
                w = function(n) {
                    var e = n.children,
                        t = (0, i.useRef)(!1),
                        s = (0, r.useRouter)().locale,
                        f = (0, l.i4)(s).region,
                        w = (0, c.uz)() && "GB" === f;
                    (0, c.S5)(["_tq_id.".concat(v, ".1fff"), "__pdst"]);
                    var h = (0, i.useCallback)((function(n) {
                        if (w) {
                            var e, t, o, i;
                            if ("modal" === n) null === window || void 0 === window || null === (e = window._tvq) || void 0 === e || e.push(["setCustomVariable", 5, "OpenModal", '{ "rev": "", "prod": "", "id": "", "promo": "" }', "page"]), null === window || void 0 === window || null === (t = window._tvq) || void 0 === t || t.push(["trackPageView"]);
                            if ("signup" === n) null === window || void 0 === window || null === (o = window._tvq) || void 0 === o || o.push(["setCustomVariable", 5, "Conversion", '{ "rev": "", "prod": "", "id": "", "promo": "" }', "page"]), null === window || void 0 === window || null === (i = window._tvq) || void 0 === i || i.push(["trackPageView"])
                        }
                    }), [w]);
                    return (0, i.useEffect)((function() {
                        var n = function(n) {
                            var e, t, o = n.target;
                            (t = null === (e = o.closest("a")) || void 0 === e ? void 0 : e.href) && "string" === typeof t && (t.startsWith(d.li.RetailGetTheApp) || t.includes("revolut.com/gettheapp") || t.includes("revolut.com/get") || t.includes("get.revolut.com/")) && h("modal")
                        };
                        return !t.current && w && (t.current = !0, document.addEventListener("click", n, !0)),
                            function() {
                                document.removeEventListener("click", n, !0)
                            }
                    }), [w, h]), w ? (0, o.jsxs)(p.Provider, {
                        value: h,
                        children: [(0, o.jsx)(u(), {
                            id: "tv-squared-js",
                            strategy: "lazyOnload",
                            children: '\n          var _tvq = window._tvq = window._tvq || [];\n          (function() {\n            var u = (("https:" == document.location.protocol) ? "https://'.concat(a, '.tvsquared.com/" : "http://').concat(a, ".tvsquared.com/\");\n            _tvq.push(['setSiteId', \"").concat(v, "\"]);\n            _tvq.push(['setTrackerUrl', u + 'tv2track.php']);\n            _tvq.push([function() {\n              this.deleteCustomVariable(5, 'page')\n            }]);\n            _tvq.push(['trackPageView']);\n            var d = document,\n              g = d.createElement('script'),\n              s = d.getElementsByTagName('script')[0];\n            g.type = 'text/javascript';\n            g.defer = true;\n            g.async = true;\n            g.src = u + 'tv2track.js';\n            s.parentNode.insertBefore(g, s);\n          })();\n        ")
                        }), (0, o.jsx)(u(), {
                            id: "podsights-js",
                            strategy: "lazyOnload",
                            children: "\n          (function (w, d) {\n            var id = 'pdst-capture',\n              n = 'script';\n            if (!d.getElementById(id)) {\n              w.pdst =\n                w.pdst ||\n                function () {\n                  (w.pdst.q = w.pdst.q || []).push(arguments);\n                };\n              var e = d.createElement(n);\n              e.id = id;\n              e.async = 1;\n              e.src = 'https://cdn.pdst.fm/ping.min.js';\n              var s = d.getElementsByTagName(n)[0];\n              s.parentNode.insertBefore(e, s);\n            }\n            w.pdst('conf', { key: '".concat("f6124dc7bd9941288887ca90f84df2dd", "' });\n            w.pdst('view');\n          })(window, document);\n        ")
                        }), e]
                    }) : (0, o.jsx)(o.Fragment, {
                        children: e
                    })
                }
        },
        5075: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                __N_SSG: function() {
                    return i
                }
            });
            var o = t(87288),
                i = !0;
            e.default = o.T
        }
    },
    function(n) {
        n.O(0, [49774, 92888, 40179], (function() {
            return e = 48312, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);