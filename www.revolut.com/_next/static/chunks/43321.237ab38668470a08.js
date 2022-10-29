"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [43321], {
        43321: function(a, l, e) {
            e.r(l), e.d(l, {
                default: function() {
                    return s
                }
            });
            var t, n = e(85893),
                r = e(84032);

            function u(a) {
                switch (a) {
                    case t.Large:
                        return {
                            all: 80,
                            lg: 160
                        };
                    case t.Small:
                        return {
                            all: "s-8",
                            lg: "s-16"
                        };
                    default:
                        return {
                            all: "s-40",
                            lg: 80
                        }
                }
            }! function(a) {
                a.Default = "default", a.Large = "large", a.Small = "Small"
            }(t || (t = {}));
            var s = function(a) {
                var l = a.id,
                    e = a.content.style,
                    t = (void 0 === e ? {} : e).variant;
                return (0, n.jsx)(r.x, {
                    "data-blockid": l,
                    size: u(t)
                })
            }
        }
    }
]);