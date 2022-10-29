"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [72029], {
        72029: function(n, t, i) {
            i.r(t), i.d(t, {
                TileBlock: function() {
                    return q
                },
                TileBlockAlign: function() {
                    return l
                },
                TileBlockVariant: function() {
                    return e
                },
                default: function() {
                    return F
                }
            });
            var e, l, a = i(85893),
                r = i(14924),
                o = i(26042),
                u = i(69396),
                c = i(99534),
                s = i(31346),
                d = i(14141),
                g = i(37947),
                f = i(16678),
                m = i(31520);
            ! function(n) {
                n.Default = "default", n.Small = "small"
            }(e || (e = {})),
            function(n) {
                n.Bottom = "bottom", n.Center = "center", n.Left = "left", n.Right = "right", n.Top = "top"
            }(l || (l = {}));
            var h = i(97979),
                v = i(86e3),
                p = i(79581),
                b = i(949),
                w = i(67294),
                x = (0, w.createContext)(null);

            function k() {
                var n = (0, w.useContext)(x);
                if (null === n) throw new Error("`TileBlockContext` is accessible in `TileBlock` component only");
                return n
            }
            var C = (0, d.ZP)(s.k).withConfig({
                    componentId: "sc-e50af0e1-0"
                })((0, g.iv)({
                    alignItems: "center",
                    borderRadius: 20,
                    marginLeft: "-s-16",
                    paddingLeft: "s-16",
                    paddingRight: "s-8",
                    paddingY: "s-4",
                    transition: "all 0.3s",
                    "&::after": {
                        bottom: 0,
                        content: '""',
                        display: "block",
                        left: 0,
                        position: "absolute",
                        width: "100%",
                        top: 0
                    },
                    "&:hover": {
                        color: "white",
                        backgroundColor: "blue"
                    }
                }), (function(n) {
                    var t, i = n.align;
                    return f.bU({
                        variants: (t = {}, (0, r.Z)(t, e.Default, {
                            marginTop: i === l.Left || i === l.Right ? ["s-16", null, "auto"] : ["s-16", null, "s-32"],
                            marginRight: i === l.Left || i === l.Right ? "auto" : null,
                            "&::after": {
                                left: i === l.Right ? "-100%" : "-10%",
                                width: i === l.Left || i === l.Right ? "200%" : "120%"
                            }
                        }), (0, r.Z)(t, e.Small, {
                            marginTop: ["s-16", null, i === l.Bottom ? "s-16" : "auto"],
                            marginRight: "auto"
                        }), t)
                    })
                })),
                Z = (0, d.ZP)(p.ArrowThinRight).withConfig({
                    componentId: "sc-e50af0e1-1"
                })((0, g.iv)({
                    size: [16, null, null, 24],
                    marginLeft: "s-8"
                })),
                j = i(19850),
                R = (0, d.ZP)(h.xv).withConfig({
                    componentId: "sc-40e454fe-0"
                })((0, j.Ou)("subtitle1"), (0, g.iv)({
                    whiteSpace: "pre-wrap",
                    width: "100%",
                    wordBreak: "break-word",
                    fontWeight: [400, null, null, 500],
                    marginTop: ["s-8", null, null, "s-16"]
                }));
            R.defaultProps = {
                use: "p"
            };
            var D = i(25675),
                S = i.n(D),
                T = i(43880),
                B = i(34498),
                I = (0, d.ZP)(S()).withConfig({
                    componentId: "sc-90d5f8c5-0"
                })((function(n) {
                    var t = n.alignment,
                        i = n.variant;
                    return (0, g.iv)({
                        objectPosition: function() {
                            return i === e.Default && t === l.Left ? ["bottom right", null, null, "center bottom"] : i === e.Default ? ["center center", null, null, "center bottom"] : "center center"
                        }
                    })
                })),
                y = function(n) {
                    var t = n.align,
                        i = n.variant,
                        e = n.image,
                        l = n.imageSmall,
                        r = (0, T.U)(),
                        o = (0, B.b)("md");
                    return (0, a.jsx)(I, {
                        alignment: t,
                        alt: "",
                        layout: "fill",
                        loader: r,
                        objectFit: "cover",
                        src: o ? e : null !== l && void 0 !== l ? l : e,
                        variant: i,
                        lazyBoundary: "600px"
                    })
                },
                L = i(51482),
                P = i(61243),
                U = (0, d.ZP)(h.xv).withConfig({
                    componentId: "sc-8db29cc7-0"
                })((0, g.iv)({
                    color: "inherit",
                    fontFamily: P.ut,
                    fontWeight: 600,
                    whiteSpace: "pre-wrap",
                    width: "100%",
                    wordBreak: "break-word"
                }), (function(n) {
                    var t, i = n.align;
                    return f.bU({
                        variants: (t = {}, (0, r.Z)(t, e.Default, {
                            fontSize: ["24px", null, null, "34px"],
                            lineHeight: ["28px", null, null, "40px"],
                            marginTop: [null, null, "auto"]
                        }), (0, r.Z)(t, e.Small, {
                            fontSize: ["24px", null, null, "34px"],
                            lineHeight: ["28px", null, null, "40px"],
                            marginTop: i === l.Bottom ? "auto" : 0
                        }), t)
                    })
                }));

            function _(n) {
                switch (n.align) {
                    case l.Left:
                        return {
                            width: ["100%", null, "51.6%"]
                        };
                    case l.Right:
                        return {
                            marginLeft: "auto",
                            marginRight: 0,
                            width: ["100%", null, "51.6%"]
                        };
                    default:
                        return {
                            alignItems: "center",
                            marginX: "auto",
                            textAlign: "center",
                            width: ["100%", null, "90%"]
                        }
                }
            }
            var z, A = (0, d.ZP)(s.k).withConfig({
                    componentId: "sc-22897d1d-0"
                })((0, g.iv)({
                    flexDirection: "column",
                    height: "100%",
                    padding: ["s-32", null, null, "s-40"],
                    position: "relative",
                    transition: "transform 0.6s",
                    width: "100%"
                }), (function(n) {
                    var t, i = n.align;
                    return f.bU({
                        variants: (t = {}, (0, r.Z)(t, e.Default, _({
                            align: i
                        })), (0, r.Z)(t, e.Small, {
                            alignItems: "left",
                            textAlign: "left"
                        }), t)
                    })
                })),
                E = (0, d.ZP)(m.r).withConfig({
                    componentId: "sc-22897d1d-1"
                })((0, g.iv)((z = {
                    backfaceVisibility: "hidden",
                    borderRadius: 20,
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
                    transform: "translate3d(0, 0, 0)",
                    width: "100%"
                }, (0, r.Z)(z, "img", {
                    transformOrigin: ["bottom right", null, null, "center center"],
                    transition: "transform 0.6s"
                }), (0, r.Z)(z, "&:hover img", {
                    transform: "scale(1.05)"
                }), z)), f.bU({
                    variants: (0, r.Z)({}, e.Default, {
                        gridColumn: "1 / -1"
                    })
                }));

            function H(n) {
                return n === e.Default ? {
                    all: 335 / 508,
                    md: 1e3 / 524
                } : {
                    all: 335 / 440,
                    md: 484 / 572
                }
            }
            var q = function(n) {
                var t, i, r = n.id,
                    s = n.children,
                    d = n.image,
                    g = n.imageSmall,
                    f = (n.title, n.align),
                    m = void 0 === f ? l.Center : f,
                    h = n.variant,
                    v = void 0 === h ? e.Default : h,
                    p = n.link,
                    b = (0, c.Z)(n, ["id", "children", "image", "imageSmall", "title", "align", "variant", "link"]);
                return (0, a.jsx)(x.Provider, {
                    value: {
                        align: m,
                        variant: v
                    },
                    children: (0, a.jsxs)(E, (0, u.Z)((0, o.Z)({
                        "data-blockid": r,
                        variant: v,
                        bg: (t = b.bg, i = b.color, t || "white" !== i ? t || "background" : "grey-50"),
                        aspectRatio: H(v),
                        value: p
                    }, b), {
                        children: [d && (0, a.jsx)(y, {
                            align: m,
                            image: d,
                            imageSmall: g,
                            variant: v
                        }), (0, a.jsx)(A, {
                            use: "span",
                            align: m,
                            variant: v,
                            children: s
                        })]
                    }))
                })
            };

            function F(n) {
                var t = n.id,
                    i = n.content,
                    e = i.button,
                    l = i.description,
                    r = i.image,
                    o = i.imageSmall,
                    u = i.style,
                    c = void 0 === u ? {} : u,
                    s = c.align,
                    d = c.color,
                    g = c.buttonColor,
                    f = c.variant,
                    m = i.title;
                return (0, a.jsxs)(q, {
                    id: t,
                    align: s,
                    color: d,
                    image: r,
                    imageSmall: o,
                    link: null === e || void 0 === e ? void 0 : e.link,
                    title: m,
                    variant: f,
                    children: [m && (0, a.jsx)(q.Title, {
                        children: m
                    }), l && (0, a.jsx)(q.Description, {
                        children: l
                    }), (null === e || void 0 === e ? void 0 : e.label) && (0, a.jsx)(q.Button, {
                        color: g || d,
                        children: e.label
                    })]
                })
            }
            q.Title = function(n) {
                var t = n.children,
                    i = k(),
                    e = i.align,
                    l = i.variant;
                return (0, a.jsx)(U, {
                    use: "h3",
                    align: e,
                    variant: l,
                    children: (0, a.jsx)(L.x, {
                        max: 5,
                        children: t
                    })
                })
            }, q.Description = R, q.Button = function(n) {
                var t = n.children,
                    i = n.color,
                    e = void 0 === i ? "blue" : i,
                    l = k(),
                    r = l.align,
                    o = l.variant;
                return (0, a.jsxs)(C, {
                    align: r,
                    variant: o,
                    color: e,
                    children: [(0, a.jsx)(h.xv, {
                        variant: "subtitle1",
                        children: (0, a.jsx)(v.m, {
                            children: t
                        })
                    }), (0, a.jsx)(Z, {
                        "aria-label": (0, b.HD)(t) ? t : void 0
                    })]
                })
            }
        },
        43880: function(n, t, i) {
            i.d(t, {
                U: function() {
                    return o
                }
            });
            var e = i(11752),
                l = i.n(e),
                a = i(19642),
                r = l()().publicRuntimeConfig,
                o = function() {
                    if ((0, a.U)()) return function(n) {
                        var t = n.src,
                            i = n.width,
                            e = n.quality,
                            l = void 0 === e ? 75 : e;
                        return "https://".concat(r.websiteDomain, "/_next/image?url=").concat(encodeURIComponent(t), "&w=").concat(i, "&q=").concat(l)
                    }
                }
        }
    }
]);