"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [92918], {
        47154: function(n, o, r) {
            r.d(o, {
                r: function() {
                    return c
                }
            });
            var e = r(14141),
                t = r(64268),
                i = r(39072),
                l = r(44547),
                a = r(54464);

            function d(n) {
                return (0, a.hj)(n) ? "repeat(" + n + ", 1fr)" : n
            }
            var s = (0, l.By)({
                    template: {
                        property: "gridTemplate"
                    },
                    columns: {
                        property: "gridTemplateColumns",
                        transform: d
                    },
                    rows: {
                        property: "gridTemplateRows",
                        transform: d
                    },
                    autoFlow: {
                        property: "gridAutoFlow"
                    },
                    autoRows: {
                        property: "gridAutoRows"
                    },
                    autoColumns: {
                        property: "gridAutoColumns"
                    },
                    placeItems: !0,
                    placeContent: !0
                }),
                u = r(84032),
                c = (0, e.ZP)(u.x).withConfig({
                    displayName: "Grid",
                    componentId: "sc-11lbuez-0"
                })({
                    display: "grid"
                }, i.S, s);
            c.defaultProps = {
                variantKey: t.$.GRID,
                variant: "default"
            }
        },
        92918: function(n, o, r) {
            r.r(o), r.d(o, {
                default: function() {
                    return Z
                }
            });
            var e = r(26042),
                t = r(85893),
                i = r(47154),
                l = r(84032),
                a = r(97979),
                d = r(14141),
                s = r(37947),
                u = r(14924),
                c = r(69396),
                p = r(99534),
                g = r(7297),
                h = r(79581),
                f = r(31346),
                v = r(311),
                m = r(31520);

            function w() {
                var n = (0, g.Z)([""]);
                return w = function() {
                    return n
                }, n
            }
            var x = (0, d.ZP)(f.k).withConfig({
                    componentId: "sc-2e6bae6c-0"
                })((function(n) {
                    var o = n.color,
                        r = void 0 === o ? "blue" : o;
                    return (0, s.iv)((0, u.Z)({
                        alignItems: "center",
                        alignSelf: "end",
                        borderRadius: 9999,
                        color: "grey-50",
                        flexShrink: 0,
                        height: 32,
                        justifyContent: "center",
                        justifySelf: "end",
                        marginLeft: "auto",
                        marginTop: "auto",
                        transition: "all 0.3s",
                        width: 32
                    }, "".concat(y, ":hover &"), {
                        backgroundColor: r,
                        color: "white"
                    }))
                })),
                y = (0, d.ZP)(m.r).withConfig({
                    componentId: "sc-2e6bae6c-1"
                })(w()),
                C = (0, d.ZP)(h.ArrowThinRight).withConfig({
                    componentId: "sc-2e6bae6c-2"
                })({
                    marginRight: "1px"
                }),
                b = (0, d.ZP)(l.x).withConfig({
                    componentId: "sc-d359aed0-0"
                })((function(n) {
                    var o = n.hasLink;
                    return (0, s.iv)((0, e.Z)({
                        backgroundColor: "widget-background",
                        borderRadius: 20,
                        color: "foreground"
                    }, !o && {
                        height: "100%",
                        paddingX: "s-16",
                        paddingY: "s-32",
                        textAlign: "center"
                    }))
                })),
                j = (0, d.ZP)((function(n) {
                    var o = n.children,
                        r = n.useIcon,
                        i = n.color,
                        l = (0, p.Z)(n, ["children", "useIcon", "color"]),
                        a = (0, v.T)();
                    return (0, t.jsxs)(y, (0, c.Z)((0, e.Z)({
                        title: a("shared.button.learnMore")
                    }, l), {
                        children: [o, (0, t.jsx)(x, {
                            color: i,
                            use: "span",
                            children: r ? (0, t.jsx)(r, {}) : (0, t.jsx)(C, {})
                        })]
                    }))
                })).withConfig({
                    componentId: "sc-d359aed0-1"
                })((0, s.iv)({
                    display: "grid",
                    gap: ["s-4", null, null, "s-8"],
                    gridTemplateRows: "repeat(3, auto) 1fr",
                    height: "100%",
                    paddingX: ["s-16", null, null, "s-24"],
                    paddingY: "s-24"
                })),
                k = function(n) {
                    var o = n.button,
                        r = n.style,
                        e = n.title,
                        i = n.caption,
                        l = n.description,
                        d = null === o || void 0 === o ? void 0 : o.link,
                        s = (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(a.xv, {
                                use: "h3",
                                variant: !Boolean(d) && e.length < 5 ? "h2" : "h4",
                                color: null === r || void 0 === r ? void 0 : r.color,
                                children: e
                            }), i && (0, t.jsx)(a.xv, {
                                use: "h4",
                                variant: "h6",
                                color: "foreground",
                                children: i
                            }), l && (0, t.jsx)(a.xv, {
                                use: "p",
                                variant: "secondary",
                                color: "grey-50",
                                children: l
                            })]
                        });
                    return (0, t.jsx)(b, {
                        use: "li",
                        hasLink: Boolean(d),
                        children: d ? (0, t.jsx)(j, {
                            value: d,
                            color: null === r || void 0 === r ? void 0 : r.color,
                            children: s
                        }) : s
                    })
                },
                Z = function(n) {
                    var o = n.id,
                        r = n.content.items,
                        l = void 0 === r ? [] : r,
                        a = l.length;
                    return a ? (0, t.jsx)(i.r, {
                        use: "ul",
                        gap: {
                            all: "s-20",
                            lg: "s-32"
                        },
                        overflow: "hidden",
                        columns: {
                            all: 1,
                            md: a > 4 ? 4 : a
                        },
                        "data-blockid": o,
                        __css: {
                            gridColumn: "1 / -1",
                            listStyle: "none"
                        },
                        children: l.map((function(n, o) {
                            return (0, t.jsx)(k, (0, e.Z)({}, n), o)
                        }))
                    }) : null
                }
        }
    }
]);