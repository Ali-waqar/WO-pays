"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [22427], {
        22427: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var l = r(26042),
                i = r(85893),
                n = (r(67294), r(31346)),
                s = r(97979),
                a = r(41179),
                o = r(98795),
                c = r(41107),
                d = function(e) {
                    var t = e.id,
                        r = e.content,
                        d = r.button,
                        h = r.buttonSecondary,
                        u = r.caption,
                        x = r.style,
                        p = void 0 === x ? {} : x,
                        w = p.align,
                        k = void 0 === w ? "center" : w,
                        f = p.color,
                        g = void 0 === f ? "black" : f,
                        m = r.title,
                        v = r.description,
                        b = r.components,
                        _ = (void 0 === b ? {} : b).getTheAppWidget,
                        j = (0, o.CD)({
                            text: v
                        });
                    return (0, i.jsxs)(n.k, {
                        __css: {
                            gridColumn: "1 / -1"
                        },
                        alignItems: "left" === k ? "flex-start" : "center",
                        "data-blockid": t,
                        flexDirection: "column",
                        my: {
                            all: "s-40",
                            lg: "80px"
                        },
                        px: {
                            all: "s-20",
                            lg: 0
                        },
                        use: "div",
                        width: "100%",
                        children: [u && (0, i.jsx)(s.xv, {
                            __css: {
                                wordBreak: "break-word"
                            },
                            color: "white" === g || "black" === g ? "grey-50" : g,
                            role: "doc-subtitle",
                            textAlign: k,
                            use: "p",
                            variant: "h6",
                            children: u
                        }), m && (0, i.jsx)(s.xv, {
                            __css: {
                                wordBreak: "break-word"
                            },
                            color: "white" === g ? "white" : "foreground",
                            maxWidth: "100%",
                            mt: "s-16",
                            textAlign: k,
                            use: "h2",
                            variant: "h2",
                            whiteSpace: "pre-wrap",
                            children: m
                        }), v && (0, i.jsx)(s.xv, {
                            __css: {
                                wordBreak: "break-word"
                            },
                            color: "white" === g ? "white" : "foreground",
                            mt: {
                                all: "s-16",
                                lg: "s-24"
                            },
                            textAlign: k,
                            use: "p",
                            variant: "subtitle1",
                            whiteSpace: "pre-wrap",
                            children: j
                        }), _ ? (0, i.jsx)(n.k, {
                            flexWrap: "wrap",
                            justifyContent: "left" === k ? "start" : "center",
                            mt: {
                                all: "s-16",
                                lg: "s-24"
                            },
                            mx: "-s-8",
                            children: (0, i.jsx)(a.e, (0, l.Z)({}, _))
                        }) : (d || h) && (0, i.jsxs)(n.k, {
                            flexWrap: "wrap",
                            mt: {
                                all: "s-16",
                                lg: "s-24"
                            },
                            mx: "-s-8",
                            justifyContent: "left" === k ? "start" : "center",
                            children: [d && (0, i.jsx)(c.z, {
                                link: d.link,
                                m: "s-8",
                                variant: "white" === g ? "white" : "primary",
                                children: d.label
                            }), h && (0, i.jsx)(c.z, {
                                link: h.link,
                                m: "s-8",
                                variant: "outline",
                                children: h.label
                            })]
                        })]
                    })
                }
        }
    }
]);