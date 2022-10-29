"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [41179], {
        62688: function(e, r, n) {
            n.d(r, {
                o: function() {
                    return s
                }
            });
            var t = n(47568),
                o = n(26042),
                a = n(70655),
                u = n(64487),
                i = function(e) {
                    var r = e.captchaToken,
                        n = e.getAppUrl,
                        t = e.phone,
                        o = e.urlQuery;
                    return fetch("/api/invitations", {
                        method: "PUT",
                        headers: {
                            "X-Captcha-Token": r,
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify({
                            phone: t,
                            getAppUrl: n,
                            urlQuery: o
                        })
                    })
                },
                c = function(e) {
                    var r = e.captchaToken,
                        n = e.getAppUrl,
                        t = e.phone,
                        a = e.promoCode,
                        u = e.urlQuery;
                    return fetch("/api/partnerships", {
                        method: "POST",
                        headers: {
                            "X-Captcha-Token": r,
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify((0, o.Z)({
                            phone: t,
                            urlQuery: u,
                            promoCode: a
                        }, n && {
                            getAppUrl: n
                        }))
                    })
                },
                s = function(e) {
                    var r = e.hasMobileStore,
                        n = e.promoCode,
                        s = e.urlQuery,
                        l = void 0 === s ? "" : s;
                    return function() {
                        var e = (0, t.Z)((function(e) {
                            var t, s, p, d, f, h, v, y;
                            return (0, a.__generator)(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = e.captchaToken, s = e.getAppUrl, p = e.phone, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 7, , 8]), d = r && n ? void 0 : s, n ? [4, c({
                                            captchaToken: t,
                                            phone: p,
                                            getAppUrl: d,
                                            promoCode: n,
                                            urlQuery: l
                                        })] : [3, 3];
                                    case 2:
                                        return h = a.sent(), [3, 5];
                                    case 3:
                                        return [4, i({
                                            captchaToken: t,
                                            phone: p,
                                            getAppUrl: d,
                                            urlQuery: l
                                        })];
                                    case 4:
                                        h = a.sent(), a.label = 5;
                                    case 5:
                                        return (f = h).ok ? [2, "success"] : [4, f.json()];
                                    case 6:
                                        return 1105 === (null === (v = a.sent()) || void 0 === v ? void 0 : v.code) ? [2, "country-not-supported"] : (u.Tb(new Error("Unhandled server response for ".concat(f.url)), {
                                            tags: {
                                                component: "get-the-app"
                                            },
                                            extra: (0, o.Z)({}, v)
                                        }), [2, "error"]);
                                    case 7:
                                        return y = a.sent(), u.Tb(y, {
                                            tags: {
                                                component: "get-the-app"
                                            }
                                        }), [2, "error"];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }
        },
        41179: function(e, r, n) {
            n.d(r, {
                e: function() {
                    return F
                }
            });
            var t, o = n(26042),
                a = n(69396),
                u = n(85893),
                i = n(2014),
                c = n(67294),
                s = n(6780),
                l = n(55124),
                p = n(62688),
                d = function(e) {
                    var r = e.children,
                        n = e.promoCode,
                        t = (0, s.W)(),
                        o = (0, l.k)().urlQuery,
                        a = (0, c.useMemo)((function() {
                            return (0, p.o)({
                                promoCode: n,
                                hasMobileStore: t,
                                urlQuery: o
                            })
                        }), [n, t, o]);
                    return (0, u.jsx)(u.Fragment, {
                        children: r({
                            layout: n ? "text-button" : "default",
                            requestFunc: a
                        })
                    })
                },
                f = n(11163),
                h = n(56607),
                v = n(97979),
                y = n(84446),
                C = n(311),
                g = n(88739),
                b = n(47568),
                m = n(70655),
                T = n(31955),
                E = n(64487),
                w = function(e) {
                    var r = e.captchaToken,
                        n = e.phone,
                        t = e.referralCode,
                        o = e.inviteId;
                    return fetch("/api/v2/invitation/accept", {
                        method: "post",
                        headers: {
                            "X-Captcha-Token": r
                        },
                        body: JSON.stringify({
                            phone: n,
                            referralCode: t,
                            inviteId: o
                        })
                    })
                },
                x = n(72793);
            ! function(e) {
                e.MONEY = "MONEY", e.CARD = "FREE_CARD_DELIVERY", e.FEATURE_UNLOCK = "FEATURE_UNLOCK", e.CAMPAIGN = "CAMPAIGN", e.VODAFONE = "VODAFONE"
            }(t || (t = {}));
            var k = function() {
                    var e = (0, b.Z)((function(e) {
                        return (0, m.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, fetch("/api/invitation/".concat(e, "/validateCampaign"))];
                                case 1:
                                    return 422 === r.sent().status ? [2, {
                                        isExpired: !0
                                    }] : [2, {
                                        isExpired: !1
                                    }]
                            }
                        }))
                    }));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function(e) {
                    return (0, x.I)("/api/invitation", {
                        method: "post",
                        body: JSON.stringify({
                            referralCode: e
                        })
                    })
                },
                _ = function(e) {
                    return (0, x.I)("/api/invitation/".concat(e, "/reward"))
                },
                N = n(949);

            function O() {
                var e = (0, f.useRouter)().query;
                return (0, N.HD)(e["referral-code"]) ? e["referral-code"] : ""
            }
            var j = function(e) {
                    var r = e.children,
                        n = (0, f.useRouter)().locale,
                        a = (0, C.T)(),
                        i = (0, g.J)(),
                        s = O(),
                        l = function(e) {
                            var r = (0, c.useState)(!1),
                                n = r[0],
                                t = r[1],
                                o = (0, c.useState)(!1),
                                a = o[0],
                                u = o[1],
                                i = (0, c.useState)(),
                                s = i[0],
                                l = i[1],
                                p = (0, c.useState)(),
                                d = p[0],
                                f = p[1],
                                h = (0, c.useMemo)((function() {
                                    return "uuid_".concat(e.referralCode)
                                }), [e.referralCode]),
                                v = (0, c.useCallback)(function() {
                                    var e = (0, b.Z)((function(e) {
                                        var r, n, t, o, a;
                                        return (0, m.__generator)(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return i.trys.push([0, 7, , 8]), [4, k(e)];
                                                case 1:
                                                    return (null === (r = i.sent()) || void 0 === r ? void 0 : r.isExpired) ? (u(!0), T.Z.remove(h), [3, 5]) : [3, 2];
                                                case 2:
                                                    return (n = T.Z.get(h)) && "null" !== n ? (l(n), [3, 5]) : [3, 3];
                                                case 3:
                                                    return [4, A(e)];
                                                case 4:
                                                    t = i.sent(), T.Z.set(h, t, {
                                                        expires: 1e4
                                                    }), l(t), i.label = 5;
                                                case 5:
                                                    return [4, _(e)];
                                                case 6:
                                                    return (o = i.sent()) && f(o), [3, 8];
                                                case 7:
                                                    return a = i.sent(), console.error(a), E.Tb(a, {
                                                        tags: {
                                                            component: "useCampaignDetails"
                                                        }
                                                    }), [3, 8];
                                                case 8:
                                                    return [2]
                                            }
                                        }))
                                    }));
                                    return function(r) {
                                        return e.apply(this, arguments)
                                    }
                                }(), [h]);
                            return (0, c.useEffect)((function() {
                                e.referralCode && v(e.referralCode).finally((function() {
                                    return t(!0)
                                }))
                            }), [v, e.referralCode]), {
                                isLoaded: n,
                                isExpired: a,
                                invitationId: s,
                                invitationCode: h,
                                invitationReward: d
                            }
                        }({
                            referralCode: s
                        }),
                        p = l.invitationCode,
                        d = l.invitationId,
                        x = l.invitationReward,
                        N = l.isExpired,
                        j = (0, c.useMemo)((function() {
                            if ((null === x || void 0 === x ? void 0 : x.rewardType) === t.MONEY) {
                                var e, r = a("widget.getTheApp.referral.disclaimer");
                                return new y.C(r, n).format({
                                    country: i(null !== (e = null === x || void 0 === x ? void 0 : x.referrerCountryCode) && void 0 !== e ? e : "GB")
                                })
                            }
                            return ""
                        }), [i, null === x || void 0 === x ? void 0 : x.referrerCountryCode, null === x || void 0 === x ? void 0 : x.rewardType, n, a]),
                        F = (0, c.useMemo)((function() {
                            return function(e) {
                                var r = e.referralCode,
                                    n = e.invitationCode,
                                    t = e.invitationId;
                                return function() {
                                    var e = (0, b.Z)((function(e) {
                                        var a, u, i, c, s;
                                        return (0, m.__generator)(this, (function(l) {
                                            switch (l.label) {
                                                case 0:
                                                    a = e.captchaToken, u = e.phone, l.label = 1;
                                                case 1:
                                                    return l.trys.push([1, 4, 5, 6]), r && n && t ? [4, w({
                                                        captchaToken: a,
                                                        phone: u,
                                                        referralCode: r,
                                                        inviteId: t
                                                    })] : [2, "error"];
                                                case 2:
                                                    return (i = l.sent()).ok ? [2, "success"] : [4, i.json()];
                                                case 3:
                                                    return 1105 === (null === (c = l.sent()) || void 0 === c ? void 0 : c.code) ? [2, "country-not-supported"] : 20038 === (null === c || void 0 === c ? void 0 : c.code) ? [2, "referral-code-not-valid"] : (E.Tb(new Error("Unhandled server response for ".concat(i.url)), {
                                                        tags: {
                                                            component: "referral"
                                                        },
                                                        extra: (0, o.Z)({}, c)
                                                    }), [2, "error"]);
                                                case 4:
                                                    return s = l.sent(), E.Tb(s, {
                                                        tags: {
                                                            component: "referral"
                                                        }
                                                    }), [2, "error"];
                                                case 5:
                                                    return n && T.Z.remove(n), [7];
                                                case 6:
                                                    return [2]
                                            }
                                        }))
                                    }));
                                    return function(r) {
                                        return e.apply(this, arguments)
                                    }
                                }()
                            }({
                                referralCode: s,
                                invitationCode: p,
                                invitationId: d
                            })
                        }), [p, d, s]);
                    return (0, u.jsxs)(u.Fragment, {
                        children: [r({
                            layout: "default",
                            requestFunc: F
                        }), (0, u.jsxs)(h.g, {
                            align: "center",
                            pt: "s-32",
                            space: "s-16",
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, u.jsx)(v.xv, {
                                color: "grey-50",
                                use: "p",
                                children: a("widget.getTheApp.referral.privacy")
                            }), N && (0, u.jsx)(v.xv, {
                                color: "grey-50",
                                use: "p",
                                pt: "s-16",
                                children: a("widget.getTheApp.referral.rewardExpired")
                            }), !N && j && (0, u.jsx)(v.xv, {
                                color: "grey-50",
                                use: "p",
                                pt: "s-16",
                                children: j
                            })]
                        })]
                    })
                },
                F = function(e) {
                    var r = function(e, r) {
                        return "referral" === e && r ? j : d
                    }(e.type, O());
                    return (0, u.jsx)(r, (0, a.Z)((0, o.Z)({}, e), {
                        children: function(e) {
                            var r = e.layout,
                                n = e.requestFunc;
                            return (0, u.jsx)(i.b, {
                                layout: r,
                                requestFunc: n
                            })
                        }
                    }))
                }
        },
        2014: function(e, r, n) {
            n.d(r, {
                b: function() {
                    return i
                }
            });
            var t = n(5152),
                o = n.n(t),
                a = o()((function() {
                    return Promise.all([n.e(34089), n.e(69173), n.e(92032), n.e(94493), n.e(28395), n.e(58935), n.e(44093)]).then(n.bind(n, 44093)).then((function(e) {
                        return e.PhoneFormControlled
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [44093]
                        }
                    }
                }),
                u = o()((function() {
                    return Promise.all([n.e(69173), n.e(94493), n.e(30049)]).then(n.bind(n, 30049)).then((function(e) {
                        return e.PhoneFormPopup
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [30049]
                        }
                    },
                    ssr: !1
                }),
                i = Object.assign(o()((function() {
                    return Promise.all([n.e(34089), n.e(69173), n.e(92032), n.e(94493), n.e(28395), n.e(58935), n.e(44093)]).then(n.bind(n, 44093)).then((function(e) {
                        return e.PhoneForm
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [44093]
                        }
                    }
                }), {
                    Controlled: a,
                    Popup: u
                })
        },
        72793: function(e, r, n) {
            n.d(r, {
                I: function() {
                    return c
                },
                n: function() {
                    return i
                }
            });
            var t = n(47568),
                o = n(70655),
                a = n(11752),
                u = n.n(a)()().publicRuntimeConfig,
                i = function(e) {
                    return "".concat(u.cdn).concat(e)
                },
                c = function(e, r) {
                    return fetch(e, r).then(function() {
                        var e = (0, t.Z)((function(e) {
                            var r;
                            return (0, o.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!e.ok) throw new Error(e.statusText);
                                        return [4, e.text()];
                                    case 1:
                                        r = n.sent();
                                        try {
                                            return [2, JSON.parse(r)]
                                        } catch (t) {
                                            return [2, r]
                                        }
                                        return [2]
                                }
                            }))
                        }));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }())
                }
        }
    }
]);