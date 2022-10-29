"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [30358], {
        30358: function(r, e, t) {
            t.r(e), t.d(e, {
                HeadlineBlock: function() {
                    return c
                },
                default: function() {
                    return u
                }
            });
            var n = t(85893),
                o = t(26042),
                i = t(99534),
                l = t(97979),
                c = function(r) {
                    var e = r.id,
                        t = r.color,
                        c = void 0 === t ? "grey-50" : t,
                        u = (0, i.Z)(r, ["id", "color"]);
                    return (0, n.jsx)(l.xv, (0, o.Z)({
                        use: "h2",
                        variant: "h4",
                        "data-blockid": e,
                        role: "doc-subtitle",
                        __css: {
                            color: c,
                            gridColumn: "1 / -1",
                            marginX: "auto",
                            maxWidth: "720px",
                            py: ["s-20", null, null, "s-40"],
                            textAlign: "center",
                            whiteSpace: "pre-wrap",
                            width: "100%",
                            wordBreak: "break-word"
                        }
                    }, u))
                };

            function u(r) {
                var e = r.id,
                    t = r.content,
                    o = t.style,
                    i = (void 0 === o ? {} : o).color,
                    l = t.title;
                return (0, n.jsx)(c, {
                    id: e,
                    color: i,
                    children: l
                })
            }
        }
    }
]);