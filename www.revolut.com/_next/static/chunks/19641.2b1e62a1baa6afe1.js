"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [19641], {
        19641: function(n, e, i) {
            i.r(e), i.d(e, {
                MobileAppBanner: function() {
                    return C
                }
            });
            var o = i(828),
                t = i(85893),
                a = i(5152),
                l = i.n(a),
                u = i(2962),
                r = i(67294),
                s = i(33147),
                c = i(47908),
                p = i(949),
                d = i(61737),
                f = i(76601),
                w = i(6780),
                b = i(45520),
                k = i(6482),
                h = l()((function() {
                    return i.e(5625).then(i.bind(i, 5625)).then((function(n) {
                        return n.MobileAppBannerView
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [5625]
                        }
                    },
                    ssr: !1
                }),
                C = function() {
                    var n = (0, o.Z)((0, d.B)(s.cn.CookieBannerClosed), 1)[0],
                        e = (0, f.F)(),
                        i = (0, w.v)(),
                        a = (0, b.ER)(),
                        l = (0, b._c)(c.li.RetailGetTheApp),
                        C = (0, o.Z)((0, k._)(s.Fe.MobileAppBannerDisplayed, !1), 2),
                        v = C[0],
                        B = C[1],
                        T = (0, r.useCallback)((function() {
                            return B(!0)
                        }), [B]),
                        _ = (0, r.useCallback)((function() {
                            var n;
                            "success" === a && l !== c.li.RetailGetTheApp ? (window.location.href = l, T()) : i && (n = i, window.location.assign("revolut://app"), setTimeout((function() {
                                window.location.assign(n)
                            }), 250), setTimeout(T, 500))
                        }), [a, l, i, T]);
                    return "iOS" === (null === e || void 0 === e ? void 0 : e.os.name) && "error" === a ? (0, t.jsx)(u.PB, {
                        additionalMetaTags: [{
                            name: "apple-itunes-app",
                            content: "app-id=932493382"
                        }]
                    }) : !v && n === p.uZ.TRUE && i ? (0, t.jsx)(h, {
                        onClose: T,
                        onClickView: _
                    }) : null
                }
        }
    }
]);