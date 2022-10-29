"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [98736], {
        98736: function(n, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return N
                }
            });
            var i = t(26042),
                l = t(85893),
                r = t(67294),
                o = t(84032),
                a = t(60470),
                s = t(97979),
                c = t(31346),
                u = t(14141),
                d = t(37947),
                f = t(41107),
                g = t(95818),
                h = t(1113),
                v = t(41179),
                p = t(8122),
                x = t(34498),
                m = t(98795),
                j = t(93586),
                w = t(69396),
                y = t(96944),
                b = t(28193),
                C = t(10813);
            var R = function(n) {
                    var e = function() {
                            var n = (0, C.X5)().pageLayoutRef,
                                e = (0, r.useRef)(null),
                                t = (0, r.useState)(!1),
                                i = t[0],
                                l = t[1],
                                o = (0, x.b)("lg");
                            return (0, r.useEffect)((function() {
                                var t = function() {
                                    var t = e.current,
                                        r = null === n || void 0 === n ? void 0 : n.current;
                                    if (!o && t && r) {
                                        var a = window.scrollY,
                                            s = window.innerHeight,
                                            c = t.offsetTop + t.offsetHeight,
                                            u = r.offsetHeight - s,
                                            d = a > c && a < u;
                                        !i && d ? l(!0) : i && !d && l(!1)
                                    }
                                };
                                return e.current && t(), o || window.addEventListener("scroll", t, {
                                        passive: !0
                                    }),
                                    function() {
                                        return window.removeEventListener("scroll", t)
                                    }
                            }), [i, o, n]), {
                                buttonRef: e,
                                isFloating: i
                            }
                        }(),
                        t = e.buttonRef,
                        o = e.isFloating;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(f.z, (0, w.Z)((0, i.Z)({
                            ref: t
                        }, n), {
                            variant: "primary",
                            mb: "s-16",
                            mx: "s-8"
                        })), (0, l.jsx)(y.n, { in: o,
                            offsetX: 0,
                            offsetY: -32,
                            children: (0, l.jsx)(b.gb, {
                                hide: "lg-*",
                                display: "flex",
                                bottom: "s-24",
                                left: 0,
                                right: 0,
                                zIndex: 1,
                                __css: {
                                    justifyContent: "center"
                                },
                                children: (0, l.jsx)(f.z, (0, w.Z)((0, i.Z)({}, n), {
                                    variant: "primary"
                                }))
                            })
                        })]
                    })
                },
                W = t(25675),
                _ = t.n(W),
                k = t(43880),
                I = t(38375),
                M = t(68824),
                S = function(n) {
                    var e = n.image,
                        t = n.imageSmall,
                        i = n.scrollAnimation,
                        o = void 0 === i ? M.q.Parallax : i,
                        a = (0, k.U)(),
                        s = (0, I.s)({
                            scrollAnimation: o,
                            transform: !0,
                            opacity: !0
                        }),
                        c = (0, x.b)("lg"),
                        u = (0, r.useState)(!1),
                        d = u[0],
                        f = u[1];
                    return (0, r.useEffect)((function() {
                        f(c)
                    }), [c]), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(b.e2, {
                            height: "100%",
                            maxHeight: "200vh",
                            hide: t ? "*-lg" : void 0,
                            left: 0,
                            overflow: "hidden",
                            width: "100%",
                            zIndex: -1,
                            children: (0, l.jsx)(b.Ig, {
                                aspectRatio: 1440 / 657,
                                ref: s,
                                children: d && (0, l.jsx)(_(), {
                                    alt: "",
                                    layout: "fill",
                                    loader: a,
                                    objectFit: "cover",
                                    priority: !0,
                                    quality: "90",
                                    src: e
                                })
                            })
                        }), (0, l.jsx)(b.Ig, {
                            hide: "lg-*",
                            aspectRatio: 375 / 220,
                            right: 0,
                            mx: "-s-20",
                            children: !d && (0, l.jsx)(_(), {
                                alt: "",
                                layout: "fill",
                                loader: a,
                                objectFit: "cover",
                                priority: !0,
                                quality: "90",
                                src: t || e
                            })
                        })]
                    })
                },
                L = t(949);

            function q(n) {
                var e = n.children,
                    t = n.align;
                return (0, L.HD)(e) ? t === M.M.Left && (e.length > 28 || (0, L.XY)(e) > 8) || t === M.M.Center && (e.length > 44 || (0, L.XY)(e) > 16) ? "h2" : "h1" : null
            }
            var E = function(n) {
                    var e = n.align,
                        t = void 0 === e ? M.M.Center : e,
                        i = n.children,
                        r = n.color,
                        o = void 0 === r ? "foreground" : r;
                    return (0, l.jsx)(s.xv, {
                        use: "h1",
                        color: o,
                        variant: ["h1", null, null, q({
                            align: t,
                            children: i
                        })],
                        __css: {
                            whiteSpace: "pre-wrap"
                        },
                        children: i
                    })
                },
                Z = t(37903),
                A = function(n) {
                    var e = (new Date).getTime();
                    if (e >= n) return {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    };
                    var t = (n - e) / 1e3,
                        i = Math.floor(t / 86400);
                    t -= 86400 * i;
                    var l = Math.floor(t / 3600) % 24;
                    t -= 3600 * l;
                    var r = Math.floor(t / 60) % 60;
                    return t -= 60 * r, {
                        days: i,
                        hours: l,
                        minutes: r,
                        seconds: Math.floor(t % 60)
                    }
                },
                z = t(56607),
                P = t(67626),
                H = {
                    width: ["42px", null, null, "64px"],
                    height: ["50px", null, null, "72px"],
                    fontSize: ["28px", null, null, "40px"]
                },
                Y = (0, u.ZP)(c.k).withConfig({
                    componentId: "sc-29aada41-0"
                })((0, d.iv)((0, i.Z)({
                    backgroundColor: "widget-background",
                    borderRadius: 4,
                    color: "foreground",
                    fontWeight: 600,
                    alignItems: "center",
                    justifyContent: "center"
                }, H))),
                F = (0, u.ZP)(o.x).withConfig({
                    componentId: "sc-29aada41-1"
                })((0, d.iv)({
                    backgroundColor: "widget-background",
                    width: "100%",
                    height: 2
                })),
                D = function(n) {
                    var e = n.isReady,
                        t = void 0 === e || e,
                        i = n.value,
                        o = n.label,
                        a = (0, r.useMemo)((function() {
                            return void 0 === i ? "" : i.toString().length > 1 ? i : "0".concat(i)
                        }), [i]);
                    return (0, l.jsxs)(z.g, {
                        align: "center",
                        space: "s-8",
                        children: [t ? (0, l.jsxs)(b.Ig, {
                            children: [(0, l.jsx)(Y, {
                                children: a
                            }), (0, l.jsx)(b.e2, {
                                width: "100%",
                                top: "calc(50% - 1px)",
                                zIndex: 2,
                                children: (0, l.jsx)(F, {})
                            })]
                        }) : (0, l.jsx)(P.O, {
                            height: H.height,
                            width: H.width,
                            borderRadius: 4
                        }), (0, l.jsx)(s.xv, {
                            use: "span",
                            variant: "caption",
                            color: "foreground",
                            children: o
                        })]
                    })
                },
                T = (0, u.ZP)(c.k).withConfig({
                    componentId: "sc-b9cc1789-0"
                })((0, d.iv)({
                    fontWeight: 600,
                    fontSize: ["28px", null, null, "40px"],
                    marginY: "s-8"
                })),
                U = function(n) {
                    var e = n.targetDate,
                        t = (0, r.useState)(A(e)),
                        i = t[0],
                        o = i.days,
                        a = i.hours,
                        s = i.minutes,
                        c = i.seconds,
                        u = t[1],
                        d = (0, r.useState)(!1),
                        f = d[0],
                        g = d[1],
                        h = !o && !a && !s && !c;
                    return (0, r.useEffect)((function() {
                        return g(!0)
                    }), []), (0, r.useEffect)((function() {
                        var n;
                        return h ? f && window.location.reload() : n = setInterval((function() {
                                return u(A(e))
                            }), 1e3),
                            function() {
                                n && clearInterval(n)
                            }
                    }), [e, h]), (0, l.jsxs)(Z.U, {
                        space: "s-8",
                        children: [(0, l.jsx)(D, {
                            label: "d",
                            value: o,
                            isReady: f
                        }), (0, l.jsx)(T, {
                            children: ":"
                        }), (0, l.jsx)(D, {
                            label: "h",
                            value: a,
                            isReady: f
                        }), (0, l.jsx)(T, {
                            children: ":"
                        }), (0, l.jsx)(D, {
                            label: "m",
                            value: s,
                            isReady: f
                        }), (0, l.jsx)(T, {
                            children: ":"
                        }), (0, l.jsx)(D, {
                            label: "s",
                            value: c,
                            isReady: f
                        })]
                    })
                },
                X = (0, u.ZP)(p.A).withConfig({
                    componentId: "sc-43baa1cf-0"
                })((function(n) {
                    var e = n.align;
                    return (0, d.iv)({
                        alignContent: "center",
                        display: "grid",
                        flex: 1,
                        gap: ["s-16", null, null, "s-24"],
                        height: ["auto", null, null, "80vh"],
                        justifyItems: e === M.M.Left ? "start" : "center",
                        marginX: ["auto", null, null, e === M.M.Left ? 0 : "auto"],
                        marginY: "auto",
                        maxHeight: [null, null, null, 800],
                        minHeight: [null, null, null, 600],
                        paddingLeft: ["s-20", null, null, 0],
                        paddingRight: ["s-20", null, null, e === M.M.Left ? "s-32" : 0],
                        paddingY: "s-20",
                        textAlign: e === M.M.Left ? "left" : "center",
                        width: [null, null, null, e === M.M.Left ? "50%" : null]
                    })
                })),
                N = function(n) {
                    var e = n.id,
                        t = n.content,
                        u = t.appIcon,
                        d = t.button,
                        p = t.buttonSecondary,
                        w = t.caption,
                        y = t.components,
                        b = void 0 === y ? {} : y,
                        C = t.description,
                        W = t.image,
                        _ = t.imageSmall,
                        k = t.scrollAnimation,
                        I = t.style,
                        L = void 0 === I ? {} : I,
                        q = L.align,
                        Z = L.color,
                        A = t.title,
                        z = (0, x.b)("lg"),
                        P = (0, m.CD)({
                            text: C
                        }),
                        H = function(n) {
                            var e, t, i, l;
                            return (null === (e = null === n || void 0 === n ? void 0 : n.content.components) || void 0 === e ? void 0 : e.remittanceWidget) ? {
                                id: n.id,
                                type: g._C.Widget,
                                content: {
                                    widget: h.l.RemittanceWidget,
                                    params: n.content.components.remittanceWidget
                                }
                            } : (null === (t = null === n || void 0 === n ? void 0 : n.content.components) || void 0 === t ? void 0 : t.acquiringPlansWidget) ? {
                                id: n.id,
                                type: g._C.Widget,
                                content: {
                                    widget: h.l.AcquiringPlansWidget,
                                    params: void 0
                                }
                            } : (null === (i = null === n || void 0 === n ? void 0 : n.content.components) || void 0 === i ? void 0 : i.exchangeRatesWidget) ? {
                                id: n.id,
                                type: g._C.Widget,
                                content: {
                                    widget: h.l.ExchangeRatesWidget,
                                    params: n.content.components.exchangeRatesWidget
                                }
                            } : (null === (l = null === n || void 0 === n ? void 0 : n.content.components) || void 0 === l ? void 0 : l.businessRemittanceWidget) ? {
                                id: n.id,
                                type: g._C.Widget,
                                content: {
                                    widget: h.l.BusinessRemittanceWidget,
                                    params: n.content.components.businessRemittanceWidget
                                }
                            } : void 0
                        }(n),
                        Y = (0, r.useMemo)((function() {
                            return H && !z ? M.M.Center : q
                        }), [q, z, H]);
                    return (0, l.jsxs)(o.x, {
                        "data-blockid": e,
                        __css: {
                            gridColumn: "1 / -1"
                        },
                        children: [W && (0, l.jsx)(o.x, {
                            hide: H && "*-md",
                            children: (0, l.jsx)(S, {
                                image: W,
                                imageSmall: _,
                                scrollAnimation: k
                            })
                        }), (0, l.jsxs)(o.x, {
                            display: {
                                all: "block",
                                lg: "flex"
                            },
                            __css: {
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [(0, l.jsxs)(X, {
                                align: Y,
                                children: [u && (0, l.jsx)(a.q, {
                                    variant: "square",
                                    size: {
                                        all: 56,
                                        lg: 96
                                    },
                                    image: u
                                }), w && (0, l.jsx)(s.xv, {
                                    __css: {
                                        position: "relative"
                                    },
                                    color: "grey-50",
                                    role: "doc-subtitle",
                                    use: "p",
                                    variant: "h5",
                                    whiteSpace: "pre-wrap",
                                    children: w
                                }), (0, l.jsx)(E, {
                                    align: Y,
                                    color: Z,
                                    children: A
                                }), (0, l.jsx)(s.xv, {
                                    use: "p",
                                    color: "foreground",
                                    width: {
                                        all: "100%",
                                        lg: "60%"
                                    },
                                    whiteSpace: "pre-wrap",
                                    variant: "subtitle1",
                                    __css: {
                                        position: "relative"
                                    },
                                    children: P
                                }), b.getTheAppWidget && (0, l.jsx)(v.e, (0, i.Z)({}, b.getTheAppWidget)), !b.getTheAppWidget && (d || p) && (0, l.jsxs)(c.k, {
                                    flexWrap: "wrap",
                                    justifyContent: Y,
                                    mx: "-s-8",
                                    children: [d && (0, l.jsx)(R, {
                                        link: d.link,
                                        children: d.label
                                    }), p && (0, l.jsx)(f.z, {
                                        link: p.link,
                                        variant: "outline",
                                        mx: "s-8",
                                        children: p.label
                                    })]
                                }), b.countdownWidget && (0, l.jsx)(U, (0, i.Z)({}, b.countdownWidget))]
                            }), H && (0, l.jsx)(c.k, {
                                flex: "0 0 375px",
                                alignSelf: "stretch",
                                alignItems: "center",
                                justifyContent: ["center", null, null, "flex-start"],
                                children: (0, l.jsx)(j.o, (0, i.Z)({}, H))
                            })]
                        })]
                    })
                }
        },
        68824: function(n, e, t) {
            var i, l;
            t.d(e, {
                    M: function() {
                        return i
                    },
                    q: function() {
                        return l
                    }
                }),
                function(n) {
                    n.Center = "center", n.Left = "left"
                }(i || (i = {})),
                function(n) {
                    n.None = "none", n.Parallax = "parallax"
                }(l || (l = {}))
        },
        38375: function(n, e, t) {
            t.d(e, {
                s: function() {
                    return o
                }
            });
            var i = t(67294),
                l = t(949),
                r = t(68824);

            function o(n) {
                var e = n.transform,
                    t = n.opacity,
                    o = n.scrollAnimation,
                    a = (0, i.useRef)();
                return (0, i.useEffect)((function() {
                    switch (o) {
                        case r.q.Parallax:
                            var n = function() {
                                var n = a.current,
                                    i = null === n || void 0 === n ? void 0 : n.clientHeight,
                                    r = window.scrollY;
                                if (n && void 0 !== i && r < 2 * i) {
                                    var o = (0, l.vm)(r, [0, i + 64], [1, 1.15]),
                                        s = (0, l.vm)(r, [i / 2, i + 64], [1, 0]);
                                    e && (n.style.transform = "scale(".concat(o, ")")), t && (n.style.opacity = String(s))
                                }
                            };
                            a.current && (a.current.style.willChange = [e && "transform", t && "opacity"].filter(Boolean).join(", "), e && (a.current.style.transform = "scale(1)"), t && (a.current.style.opacity = "1"), n());
                            var i = window;
                            return i.addEventListener("scroll", n, {
                                    passive: !0
                                }),
                                function() {
                                    return i.removeEventListener("scroll", n)
                                };
                        case r.q.None:
                        default:
                            return
                    }
                }), [o, e, t]), a
            }
        },
        43880: function(n, e, t) {
            t.d(e, {
                U: function() {
                    return a
                }
            });
            var i = t(11752),
                l = t.n(i),
                r = t(19642),
                o = l()().publicRuntimeConfig,
                a = function() {
                    if ((0, r.U)()) return function(n) {
                        var e = n.src,
                            t = n.width,
                            i = n.quality,
                            l = void 0 === i ? 75 : i;
                        return "https://".concat(o.websiteDomain, "/_next/image?url=").concat(encodeURIComponent(e), "&w=").concat(t, "&q=").concat(l)
                    }
                }
        }
    }
]);