"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [33216], {
        95998: function(e, n, t) {
            t.d(n, {
                P: function() {
                    return S
                },
                K: function() {
                    return D
                }
            });
            var r = t(26042),
                o = t(69396),
                i = t(85893),
                u = t(67294),
                s = t(59467),
                c = t(2297),
                a = t(84032),
                l = t(31346),
                p = t(11163),
                d = t(21697),
                h = t(2014),
                f = t(99534),
                g = t(36876),
                m = t.n(g),
                x = function(e) {
                    var n = e.value,
                        t = e.padding,
                        s = void 0 === t ? 1 : t,
                        c = (0, f.Z)(e, ["value", "padding"]),
                        a = (0, u.useMemo)((function() {
                            var e = m()(n),
                                t = e.modules,
                                u = e.moduleCount,
                                s = [];
                            return t.forEach((function(e, n) {
                                return e.forEach((function(e, t) {
                                    if (e) {
                                        var u = {
                                            x: n,
                                            y: t,
                                            key: "".concat(n, ":").concat(t)
                                        };
                                        s.push((0, i.jsx)("rect", (0, o.Z)((0, r.Z)({}, u), {
                                            width: "1",
                                            height: "1",
                                            shapeRendering: "crispEdges",
                                            strokeWidth: "0",
                                            fill: "currentColor",
                                            stroke: "currentColor"
                                        })))
                                    }
                                }))
                            })), {
                                children: s,
                                size: u
                            }
                        }), [n]),
                        l = a.children,
                        p = a.size,
                        d = (0, u.useMemo)((function() {
                            var e = [-1 * s, p + 2 * s],
                                n = e[0],
                                t = e[1];
                            return [n, n, t, t].join(" ")
                        }), [p, s]);
                    return (0, i.jsx)("svg", (0, o.Z)((0, r.Z)({
                        viewBox: d
                    }, c), {
                        children: l
                    }))
                },
                v = t(311),
                j = t(6780),
                w = t(45520),
                b = t(82924),
                C = t(47908),
                T = t(69159),
                y = t(55124),
                P = t(25675),
                k = t.n(P),
                F = t(97979),
                Z = {
                    TextWrapper: function(e) {
                        return (0, i.jsx)(l.k, (0, r.Z)({
                            flexDirection: "column",
                            minWidth: {
                                all: "0",
                                md: "26rem"
                            },
                            flex: "1",
                            padding: {
                                all: "s-32",
                                lg: "s-40"
                            }
                        }, e))
                    },
                    Title: function(e) {
                        var n = e.isPopup,
                            t = void 0 !== n && n,
                            o = (0, f.Z)(e, ["isPopup"]);
                        return (0, i.jsx)(F.xv, (0, r.Z)({
                            use: t ? "h2" : "h1",
                            variant: "h3",
                            fontWeight: 600,
                            mt: {
                                all: "s-8",
                                lg: "s-24"
                            },
                            mb: "s-16"
                        }, o))
                    },
                    Description: function(e) {
                        return (0, i.jsx)(F.xv, (0, r.Z)({
                            variant: "subtitle2",
                            color: "grey-50",
                            use: "p",
                            width: {
                                md: "75%"
                            }
                        }, e))
                    },
                    Footer: function(e) {
                        return (0, i.jsx)(F.xv, (0, r.Z)({
                            variant: "subtitle1",
                            color: "grey-50",
                            use: "p",
                            mt: "auto",
                            pt: "s-32",
                            pb: "s-16"
                        }, e))
                    },
                    Image: k()
                },
                A = t(62688),
                S = "https://cdn.revolut.com/website/assets/retail/Other/3D121_6-Digit-Password.png",
                Q = function(e) {
                    var n = e.phoneFormControl,
                        t = e.promoCode,
                        l = e.setView,
                        f = e.canSwitchView,
                        g = e.image,
                        m = void 0 === g ? S : g,
                        x = e.isPopup,
                        w = (0, v.T)(),
                        b = (0, j.W)(),
                        C = (0, y.k)().urlQuery,
                        T = (0, p.useRouter)().locale,
                        P = w("widget.getTheAppPopup.phoneFlowFooter"),
                        k = (0, u.useMemo)((function() {
                            return new d.ZP(P, T).format({
                                link: function(e) {
                                    return (0, i.jsx)(s.r, {
                                        href: "#scan-qr-code",
                                        onClick: function(e) {
                                            e.preventDefault(), l("qrcode")
                                        },
                                        children: e.join(" ")
                                    }, e.join(" "))
                                }
                            })
                        }), [T, l, P]),
                        F = (0, u.useMemo)((function() {
                            return (0, A.o)({
                                promoCode: t,
                                hasMobileStore: b,
                                urlQuery: C
                            })
                        }), [t, b, C]);
                    return n ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(Z.TextWrapper, {
                            children: [(0, i.jsx)(Z.Title, {
                                isPopup: x,
                                children: w("widget.getTheAppPopup.phoneFlowTitle")
                            }), (0, i.jsx)(Z.Description, {
                                children: w("widget.getTheAppPopup.phoneFlowDescription")
                            }), (0, i.jsx)(c.L, {
                                size: "s-32"
                            }), (0, i.jsx)(h.b.Controlled, (0, o.Z)((0, r.Z)({}, n), {
                                layout: t ? "text-button" : "default",
                                requestFunc: F
                            })), f && (0, i.jsx)(Z.Footer, {
                                children: k
                            })]
                        }), "string" === typeof m && (0, i.jsx)(a.x, {
                            flex: "1 1 0%",
                            hide: "*-md",
                            style: {
                                position: "relative"
                            },
                            children: (0, i.jsx)(Z.Image, {
                                alt: "",
                                src: m,
                                objectFit: "cover",
                                layout: "fill",
                                unoptimized: !0
                            })
                        }), (0, u.isValidElement)(m) && m]
                    }) : null
                },
                R = function(e) {
                    var n = e.setView,
                        t = e.canSwitchView,
                        r = e.isRevolutJunior,
                        o = (0, w._c)(C.li.RetailGetTheApp, {
                            data: {
                                qr_code: !0
                            }
                        }),
                        c = r ? C.li.JuniorGetTheApp : o,
                        a = (0, v.T)(),
                        h = (0, p.useRouter)().locale,
                        f = a("widget.getTheAppPopup.QRCodeFlowFooter"),
                        g = (0, u.useMemo)((function() {
                            return new d.ZP(f, h).format({
                                link: function(e) {
                                    return (0, i.jsx)(s.r, {
                                        href: "#enter-phone-number",
                                        onClick: function(e) {
                                            e.preventDefault(), n("phone")
                                        },
                                        children: e.join(" ")
                                    }, e.join(" "))
                                }
                            })
                        }), [h, n, f]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(Z.TextWrapper, {
                            children: [(0, i.jsx)(Z.Title, {
                                children: a("widget.getTheAppPopup.QRCodeFlowTitle")
                            }), (0, i.jsx)(Z.Description, {
                                children: a("widget.getTheAppPopup.QRCodeFlowDescription")
                            }), t && (0, i.jsx)(Z.Footer, {
                                children: g
                            })]
                        }), (0, i.jsx)(l.k, {
                            flex: "1",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "s-32",
                            children: (0, i.jsx)(x, {
                                value: c,
                                style: {
                                    width: "70%"
                                }
                            })
                        })]
                    })
                },
                D = function(e) {
                    var n = (0, p.useRouter)().locale,
                        t = (0, b.C)().isRevolutJunior,
                        s = "US" === (0, T.i4)(n).region.toUpperCase(),
                        c = (0, u.useState)(s || t ? "qrcode" : "phone"),
                        a = c[0],
                        d = c[1];
                    return (0, i.jsxs)(l.k, {
                        flex: "1",
                        role: "group",
                        alignItems: "stretch",
                        justifyContent: "stretch",
                        flexDirection: {
                            all: "column",
                            md: "row"
                        },
                        children: ["phone" === a && (0, i.jsx)(Q, (0, o.Z)((0, r.Z)({}, e), {
                            setView: d,
                            canSwitchView: s
                        })), "qrcode" === a && (0, i.jsx)(R, {
                            setView: d,
                            canSwitchView: s,
                            isRevolutJunior: t
                        })]
                    })
                }
        },
        62688: function(e, n, t) {
            t.d(n, {
                o: function() {
                    return a
                }
            });
            var r = t(47568),
                o = t(26042),
                i = t(70655),
                u = t(64487),
                s = function(e) {
                    var n = e.captchaToken,
                        t = e.getAppUrl,
                        r = e.phone,
                        o = e.urlQuery;
                    return fetch("/api/invitations", {
                        method: "PUT",
                        headers: {
                            "X-Captcha-Token": n,
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify({
                            phone: r,
                            getAppUrl: t,
                            urlQuery: o
                        })
                    })
                },
                c = function(e) {
                    var n = e.captchaToken,
                        t = e.getAppUrl,
                        r = e.phone,
                        i = e.promoCode,
                        u = e.urlQuery;
                    return fetch("/api/partnerships", {
                        method: "POST",
                        headers: {
                            "X-Captcha-Token": n,
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify((0, o.Z)({
                            phone: r,
                            urlQuery: u,
                            promoCode: i
                        }, t && {
                            getAppUrl: t
                        }))
                    })
                },
                a = function(e) {
                    var n = e.hasMobileStore,
                        t = e.promoCode,
                        a = e.urlQuery,
                        l = void 0 === a ? "" : a;
                    return function() {
                        var e = (0, r.Z)((function(e) {
                            var r, a, p, d, h, f, g, m;
                            return (0, i.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        r = e.captchaToken, a = e.getAppUrl, p = e.phone, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 7, , 8]), d = n && t ? void 0 : a, t ? [4, c({
                                            captchaToken: r,
                                            phone: p,
                                            getAppUrl: d,
                                            promoCode: t,
                                            urlQuery: l
                                        })] : [3, 3];
                                    case 2:
                                        return f = i.sent(), [3, 5];
                                    case 3:
                                        return [4, s({
                                            captchaToken: r,
                                            phone: p,
                                            getAppUrl: d,
                                            urlQuery: l
                                        })];
                                    case 4:
                                        f = i.sent(), i.label = 5;
                                    case 5:
                                        return (h = f).ok ? [2, "success"] : [4, h.json()];
                                    case 6:
                                        return 1105 === (null === (g = i.sent()) || void 0 === g ? void 0 : g.code) ? [2, "country-not-supported"] : (u.Tb(new Error("Unhandled server response for ".concat(h.url)), {
                                            tags: {
                                                component: "get-the-app"
                                            },
                                            extra: (0, o.Z)({}, g)
                                        }), [2, "error"]);
                                    case 7:
                                        return m = i.sent(), u.Tb(m, {
                                            tags: {
                                                component: "get-the-app"
                                            }
                                        }), [2, "error"];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }
        },
        33216: function(e, n, t) {
            t.r(n), t.d(n, {
                GetTheAppPopup: function() {
                    return v
                }
            });
            var r = t(26042),
                o = t(828),
                i = t(85893),
                u = t(67294),
                s = t(17798),
                c = t(96944),
                a = t(75667),
                l = t(2297),
                p = t(19224),
                d = t(2014),
                h = t(95998),
                f = t(61243),
                g = t(311),
                m = t(10677),
                x = function(e) {
                    var n = e.isOpen,
                        t = e.onClose,
                        r = e.children,
                        o = (0, g.T)();
                    return (0, i.jsx)(s.u, {
                        role: "dialog",
                        "aria-label": o("widget.getTheAppPopup.phoneFlowTitle"),
                        open: n,
                        onClose: t,
                        display: "flex",
                        padding: "s-20",
                        children: (0, i.jsx)(c.n, { in: n,
                            offsetX: 0,
                            offsetY: -24,
                            children: (0, i.jsx)(a.$, {
                                margin: "auto",
                                width: "100%",
                                maxWidth: "calc(".concat(f.wW, " - 11rem)"),
                                overflow: "hidden",
                                radius: "popup",
                                children: r
                            })
                        })
                    })
                },
                v = function() {
                    var e = (0, o.Z)((0, m.Ly)(), 2),
                        n = e[0],
                        t = e[1],
                        s = (0, m.XB)(),
                        c = (0, p.O)(),
                        a = c.formState.status;
                    return (0, u.useEffect)((function() {
                        "error" !== a && "success" !== a || t(!1)
                    }), [a, t]), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(x, {
                            isOpen: n,
                            onClose: function() {
                                return t(!1)
                            },
                            children: [(0, i.jsx)(h.K, {
                                isPopup: !0,
                                phoneFormControl: c
                            }, s), (0, i.jsx)(l.L, {
                                size: "s-24"
                            })]
                        }), (0, i.jsx)(d.b.Popup, (0, r.Z)({}, c))]
                    })
                }
        },
        2014: function(e, n, t) {
            t.d(n, {
                b: function() {
                    return s
                }
            });
            var r = t(5152),
                o = t.n(r),
                i = o()((function() {
                    return Promise.all([t.e(34089), t.e(69173), t.e(92032), t.e(94493), t.e(28395), t.e(58935), t.e(44093)]).then(t.bind(t, 44093)).then((function(e) {
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
                    return Promise.all([t.e(69173), t.e(94493), t.e(30049)]).then(t.bind(t, 30049)).then((function(e) {
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
                s = Object.assign(o()((function() {
                    return Promise.all([t.e(34089), t.e(69173), t.e(92032), t.e(94493), t.e(28395), t.e(58935), t.e(44093)]).then(t.bind(t, 44093)).then((function(e) {
                        return e.PhoneForm
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [44093]
                        }
                    }
                }), {
                    Controlled: i,
                    Popup: u
                })
        },
        63532: function(e, n, t) {
            t.d(n, {
                _: function() {
                    return u
                }
            });
            var r = t(11163),
                o = t(67294),
                i = t(69159),
                u = function() {
                    var e = (0, r.useRouter)().locale;
                    return (0, o.useState)((function() {
                        return (0, i.i4)(e).region
                    }))
                }
        },
        19224: function(e, n, t) {
            t.d(n, {
                O: function() {
                    return u
                }
            });
            var r = t(828),
                o = t(67294),
                i = t(63532),
                u = function() {
                    var e = (0, o.useState)({
                            status: "idle"
                        }),
                        n = e[0],
                        t = e[1],
                        u = (0, r.Z)((0, i._)(), 2),
                        s = u[0],
                        c = u[1],
                        a = (0, o.useState)(""),
                        l = a[0],
                        p = a[1],
                        d = (0, o.useCallback)((function() {
                            t({
                                status: "idle"
                            }), p("")
                        }), [t, p]);
                    return {
                        formState: n,
                        setFormState: t,
                        countryCode: s,
                        setCountryCode: c,
                        phoneNumber: l,
                        setPhoneNumber: p,
                        handlePopupExit: d
                    }
                }
        }
    }
]);