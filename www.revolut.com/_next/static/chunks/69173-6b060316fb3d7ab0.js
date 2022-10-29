"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [69173], {
        49297: function(e, n, t) {
            t.d(n, {
                G: function() {
                    return U
                }
            });
            var r, o = t(67294),
                a = t(43407),
                i = t(64268),
                l = t(54464),
                c = t(22635),
                u = t(15332),
                s = t(96944),
                f = t(29341),
                v = t(17798),
                d = t(1757),
                E = t(94166),
                O = t(84732),
                p = t(80571),
                h = t(23462),
                m = t(57377),
                g = t(96975),
                b = t(45151),
                T = t(79580),
                y = t(24397),
                _ = ["aria-label"],
                S = ["aria-label"];

            function C(e, n) {
                if (null == e) return {};
                var t, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o
            }

            function w() {
                return w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, w.apply(this, arguments)
            }
            var I = ((r = {})[y.w.MODAL_VIEW] = T.d.FORM, r[y.w.BOTTOM_SHEET] = T.d.BOTTOM_SHEET, r[y.w.RESULT] = null, r[y.w.DIALOG] = T.d.BOTTOM_SHEET, r[y.w.COLORFUL] = T.d.FORM, r);

            function R() {
                var e = (0, h.l)();
                return e === y.w.MODAL_VIEW || e === y.w.COLORFUL
            }
            var L = ["children"];

            function N() {
                return N = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, N.apply(this, arguments)
            }
            var k = function(e) {
                    switch (e) {
                        case y.w.COLORFUL:
                            return g.Il.BLUE;
                        case y.w.DIALOG:
                        case y.w.RESULT:
                            return g.Il.WIDGET_BACKGROUND;
                        default:
                            return
                    }
                },
                j = function(e) {
                    return e ? "popup-overlay-button-" + e : void 0
                };

            function P(e, n) {
                return n ? "100%" : e === y.w.BOTTOM_SHEET || e === y.w.DIALOG || e === y.w.RESULT ? "auto" : ["100%", null, "auto"]
            }

            function U(e) {
                var n = e.children,
                    t = e.defaultIsOpen,
                    r = void 0 !== t && t,
                    O = e.defaultOpen,
                    m = void 0 === O ? r : O,
                    g = e.isOpen,
                    b = e.open,
                    T = void 0 === b ? g : b,
                    _ = e.labelButtonClose,
                    S = e.shouldKeepMaxHeight,
                    C = void 0 !== S && S,
                    w = e.variant,
                    I = e.scrollRef,
                    R = e.onExit,
                    L = void 0 === R ? l.ZT : R,
                    N = e.onClose,
                    k = void 0 === N ? L : N,
                    U = e.onExited,
                    A = e.onScroll,
                    x = e.focusTrap,
                    B = void 0 === x || x,
                    F = e.scrollLock,
                    G = void 0 === F || F,
                    D = e.closeOnEsc,
                    M = void 0 === D || D,
                    z = e.closeOnOverlayClick,
                    Z = void 0 === z || z,
                    q = e["aria-label"],
                    H = (0, o.useRef)(null),
                    Y = (0, o.useState)(!1),
                    W = Y[0],
                    X = Y[1],
                    $ = (0, o.useCallback)((function(e) {
                        e || k()
                    }), [k]);
                return o.createElement(u.f, {
                    mode: w === y.w.COLORFUL ? a.FN.LIGHT : void 0
                }, o.createElement(c.i, null, o.createElement(h.t.Provider, {
                    value: w
                }, o.createElement(f.z8, null, (function(e) {
                    var t = e.id;
                    return o.createElement(E.Z, {
                        defaultState: m,
                        state: T,
                        onChange: $
                    }, (function(e) {
                        var r = e.state,
                            a = e.toggle;
                        return o.createElement(v.u, {
                            open: r,
                            onClose: function() {
                                return a(!1)
                            },
                            variantKey: i.$.POPUP,
                            variant: w,
                            onExited: U,
                            focusTrap: B && W,
                            scrollLock: G,
                            closeOnEsc: M && W,
                            closeOnOverlayClick: Z,
                            __layerFilter: !0
                        }, o.createElement(s.n, {
                            nodeRef: H,
                            in: r,
                            offsetY: -100,
                            onEnterComplete: function() {
                                return X(!0)
                            },
                            onExitComplete: function() {
                                return X(!1)
                            }
                        }, o.createElement(d.X, {
                            ref: H,
                            role: "dialog",
                            "aria-modal": !0,
                            "aria-labelledby": (0, p.u)(t),
                            "aria-describedby": (0, p.k)(t),
                            "aria-label": q,
                            "aria-owns": j(t),
                            height: P(w, C)
                        }, o.createElement(d.X.Content, {
                            ref: I,
                            onScroll: A
                        }, (0, l.mf)(n) ? n({
                            isEntered: W,
                            open: r,
                            toggle: a,
                            isOpen: r
                        }) : n))), Z && o.createElement(v.u.CloseButton, {
                            id: j(t),
                            "aria-label": _,
                            onClick: function() {
                                return a(!1)
                            },
                            hide: "*-md"
                        }))
                    }))
                })))))
            }
            U.Actions = function(e) {
                var n = e.children,
                    t = function(e, n) {
                        if (null == e) return {};
                        var t, r, o = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                        return o
                    }(e, L),
                    r = (0, h.l)();
                return o.createElement(d.X.Actions, N({
                    gradientColor: k(r),
                    px: {
                        all: m.T.S_16,
                        md: m.T.S_24
                    },
                    mx: {
                        all: m.T.N_16,
                        md: m.T.N_24
                    }
                }, t), n)
            }, U.Avatar = O.h.Avatar, U.Header = function(e) {
                var n = (0, h.l)(),
                    t = n && I[n];
                return null == t ? null : o.createElement(O.h, w({
                    variant: t,
                    top: {
                        all: m.T.N_16,
                        md: m.T.N_24
                    },
                    mt: {
                        all: m.T.N_16,
                        md: m.T.N_24
                    },
                    bg: "inherit"
                }, e))
            }, U.Title = function(e) {
                var n = (0, f.qk)();
                return (0, h.l)() === y.w.RESULT ? null : o.createElement(O.h.Title, w({
                    id: (0, p.u)(n)
                }, e))
            }, U.Description = function(e) {
                var n = (0, f.qk)(),
                    t = (0, h.l)();
                return t === y.w.RESULT ? null : o.createElement(O.h.Description, w({
                    id: (0, p.k)(n),
                    color: t === y.w.COLORFUL ? null : g.Il.GREY_TONE_50
                }, e))
            }, U.BackButton = function(e) {
                var n = e["aria-label"],
                    t = C(e, S),
                    r = (0, b.U)();
                return R() ? o.createElement(O.h.BackButton, w({
                    "aria-label": null != n ? n : r("action.back")
                }, t)) : null
            }, U.CloseButton = function(e) {
                var n = e["aria-label"],
                    t = C(e, _),
                    r = (0, b.U)();
                return R() ? o.createElement(O.h.CloseButton, w({
                    "aria-label": null != n ? n : r("action.close")
                }, t)) : null
            }, U.TailActions = O.h.Actions
        },
        69173: function(e, n, t) {
            t.d(n, {
                u: function() {
                    return Oe
                }
            });
            var r, o = t(67294),
                a = "success",
                i = "success-optional",
                l = "success-result",
                c = "pending",
                u = "loading",
                s = "warning",
                f = "error",
                v = "offline",
                d = "soft-fail",
                E = function(e) {
                    return "https://assets.revolut.com/animations/status/" + e + ".json"
                },
                O = {
                    SUCCESS: E("success"),
                    PENDING: E("pending"),
                    WARNING: E("warning"),
                    ERROR: E("error"),
                    OFFLINE: E("offline"),
                    SOFT_FAIL: E("soft-fail")
                },
                p = t(96975),
                h = t(14141),
                m = t(16678),
                g = t(25348),
                b = t(54464),
                T = function(e) {
                    try {
                        var n = function() {
                                return r.loadAnimation(e)
                            },
                            o = function() {
                                if (!r) return Promise.resolve(t.e(51028).then(t.t.bind(t, 98234, 23))).then((function(e) {
                                    r = e.default
                                }))
                            }();
                        return Promise.resolve(o && o.then ? o.then(n) : n())
                    } catch (a) {
                        return Promise.reject(a)
                    }
                },
                y = new Map,
                _ = function(e) {
                    return fetch(e).then((function(e) {
                        return e.json()
                    }))
                };
            var S = t(84032),
                C = ["src", "loop", "autoPlay", "autoSize", "request", "onInstance", "onError"];

            function w() {
                return w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, w.apply(this, arguments)
            }
            var I = (0, h.ZP)(S.x).withConfig({
                    displayName: "Animation__AnimationBox",
                    componentId: "sc-1hsae5n-0"
                })(["path{", "}"], (0, m.By)({
                    color: {
                        property: "stroke",
                        scale: g.C.COLORS
                    }
                })),
                R = (0, o.forwardRef)((function(e, n) {
                    var t = e.src,
                        r = e.loop,
                        a = e.autoPlay,
                        i = e.autoSize,
                        l = e.request,
                        c = e.onInstance,
                        u = e.onError,
                        s = function(e, n) {
                            if (null == e) return {};
                            var t, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o
                        }(e, C),
                        f = function(e) {
                            var n = e.src,
                                t = e.loop,
                                r = void 0 !== t && t,
                                a = e.autoPlay,
                                i = void 0 === a || a,
                                l = e.autoSize,
                                c = void 0 !== l && l,
                                u = e.request,
                                s = void 0 === u ? _ : u,
                                f = e.loadAnimation,
                                v = void 0 === f ? T : f,
                                d = e.cacheSize,
                                E = void 0 === d ? 100 : d,
                                O = e.onInstance,
                                p = void 0 === O ? b.ZT : O,
                                h = e.onError,
                                m = void 0 === h ? b.ZT : h,
                                g = (0, o.useRef)(null),
                                S = (0, o.useState)(null),
                                C = S[0],
                                w = S[1],
                                I = (0, o.useState)(null),
                                R = I[0],
                                L = I[1];
                            return (0, o.useEffect)((function() {
                                if (y.has(n)) L(y.get(n));
                                else try {
                                    s(n).then((function(e) {
                                        L(e), y.size === E && y.clear(), y.set(n, e)
                                    }), m)
                                } catch (e) {
                                    m(e)
                                }
                            }), [n, s, E, m]), (0, o.useEffect)((function() {
                                var e = g.current;
                                if (e && R) {
                                    var n = v({
                                        renderer: "svg",
                                        container: e,
                                        loop: r,
                                        autoplay: !1,
                                        animationData: R
                                    }).then((function(n) {
                                        return c && (e.style.width = (0, b.px)(R.w), e.style.height = (0, b.px)(R.h)), w(n), p(n), n
                                    })).catch(m);
                                    return function() {
                                        n.then((function(e) {
                                            e && e.destroy()
                                        })), w(null), c && e && (e.style.width = "", e.style.height = "")
                                    }
                                }
                            }), [R, r, c, v, p, m]), (0, o.useEffect)((function() {
                                null !== C && i && C.play()
                            }), [C, i]), g
                        }({
                            src: t,
                            loop: r,
                            autoPlay: a,
                            autoSize: i,
                            request: l,
                            onInstance: c,
                            onError: u
                        });
                    return o.createElement(I, w({
                        ref: (0, b.ZM)(f, n),
                        role: "img"
                    }, s))
                })),
                L = t(48986),
                N = ["color"];

            function k() {
                return k = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, k.apply(this, arguments)
            }
            var j, P, U = function(e) {
                    var n = e.color,
                        t = void 0 === n ? p.Il.BLUE : n,
                        r = function(e, n) {
                            if (null == e) return {};
                            var t, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o
                        }(e, N);
                    return o.createElement(L.$, k({
                        color: t,
                        size: 86,
                        strokeWidth: 3
                    }, r))
                },
                A = ((j = {})[a] = O.SUCCESS, j[i] = O.SUCCESS, j[l] = O.SUCCESS, j[c] = O.PENDING, j[s] = O.WARNING, j[f] = O.ERROR, j[v] = O.OFFLINE, j[d] = O.SOFT_FAIL, j),
                x = ((P = {})[a] = p.Il.BLUE, P[i] = p.Il.BLUE, P[l] = p.Il.BLUE, P[c] = p.Il.GREY_TONE_50, P[u] = p.Il.BLUE, P[s] = p.Il.ORANGE, P[f] = p.Il.RED, P[v] = p.Il.GREY_TONE_50, P[d] = p.Il.BLUE, P);

            function B(e) {
                var n = e.variant,
                    t = e.autoPlay,
                    r = x[n];
                return n === u ? o.createElement(U, {
                    color: r
                }) : o.createElement(R, {
                    src: A[n],
                    color: r,
                    size: 104,
                    autoPlay: t,
                    role: "presentation"
                })
            }
            var F = t(50523),
                G = t(57377),
                D = t(41530),
                M = t(17802),
                z = t(79500),
                Z = t(31346),
                q = t(97979),
                H = t(29341),
                Y = t(49297),
                W = t(80571),
                X = t(24397),
                $ = t(68298),
                K = ["timeout", "onClose", "activeBg", "paused"];

            function V() {
                return V = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, V.apply(this, arguments)
            }
            var J = (0, h.F4)(["from{transform:translateX(-100%);}to{transform:translateX(0%);}"]),
                Q = (0, h.ZP)(S.x).withConfig({
                    displayName: "TimerProgressBar__ProgressBar",
                    componentId: "sc-13z4uko-0"
                })(["height:inherit;width:inherit;border-radius:inherit;animation:", " ", " linear forwards;animation-play-state:", ";"], J, (0, $.v)("duration", 0, "ms"), (function(e) {
                    return e.paused ? "paused" : void 0
                })),
                ee = function(e) {
                    var n = e.timeout,
                        t = e.onClose,
                        r = e.activeBg,
                        a = e.paused,
                        i = function(e, n) {
                            if (null == e) return {};
                            var t, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o
                        }(e, K);
                    return o.createElement(S.x, V({
                        bg: p.Il.GREY_TONE_5,
                        overflow: "hidden"
                    }, i), void 0 !== n && o.createElement(Q, {
                        role: "timer",
                        bg: null != r ? r : p.Il.GREY_TONE_20,
                        duration: n,
                        onAnimationEnd: t,
                        paused: a
                    }))
                },
                ne = ["children", "timeout", "closable", "onExit", "onClose", "preventUserClose"],
                te = ["isEntered", "toggle"];

            function re() {
                return re = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, re.apply(this, arguments)
            }

            function oe(e, n) {
                if (null == e) return {};
                var t, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o
            }
            var ae = "actions",
                ie = (0, F.ZP)(),
                le = 1800,
                ce = 5e3,
                ue = function(e) {
                    var n = e.children,
                        t = e.timeout,
                        r = e.closable,
                        a = void 0 === r || r,
                        i = e.onExit,
                        l = void 0 === i ? b.ZT : i,
                        c = e.onClose,
                        u = void 0 === c ? l : c,
                        s = e.preventUserClose,
                        f = void 0 !== s && s,
                        v = oe(e, ne);
                    return o.createElement(ie.Provider, null, o.createElement(Y.G, re({
                        variant: X.w.RESULT,
                        onClose: function() {
                            a && u()
                        },
                        closeOnEsc: !f,
                        closeOnOverlayClick: !f
                    }, v), (function(e) {
                        var r = e.isEntered,
                            a = e.toggle,
                            i = oe(e, te);
                        return o.createElement(o.Fragment, null, r ? o.createElement(se, {
                            timeout: t,
                            onClose: function() {
                                return a(!1)
                            }
                        }) : o.createElement(se, null), o.createElement(Z.k, {
                            pt: G.T.S_32,
                            pb: G.T.S_8,
                            flexDirection: "column",
                            alignItems: "center"
                        }, (0, b.mf)(n) ? n(re({
                            isEntered: r,
                            toggle: a
                        }, i)) : n), o.createElement(ie.Slot, {
                            name: ae
                        }, o.createElement(S.x, {
                            pt: G.T.S_16
                        })))
                    })))
                },
                se = function(e) {
                    return o.createElement(ee, re({
                        width: D.$u.S_40,
                        height: D.$u.S_4,
                        radius: M.w.BUTTON_SM,
                        bg: p.Il.GREY_TONE_5,
                        m: "auto"
                    }, e))
                };
            ue.Title = function(e) {
                var n = (0, H.qk)();
                return o.createElement(q.xv, re({
                    id: (0, W.u)(n),
                    variant: z.p.H5,
                    textAlign: "center",
                    mt: G.T.S_24,
                    color: p.Il.FOREGROUND
                }, e))
            }, ue.Description = function(e) {
                var n = (0, H.qk)();
                return o.createElement(q.xv, re({
                    id: (0, W.k)(n),
                    variant: z.p.CAPTION,
                    textAlign: "center",
                    mt: G.T.S_24,
                    color: p.Il.GREY_TONE_50
                }, e))
            }, ue.Actions = function(e) {
                var n = e.children;
                return o.createElement(ie.Fill, {
                    name: ae
                }, o.createElement(Y.G.Actions, null, n))
            };
            var fe, ve = ["children", "variant"];

            function de() {
                return de = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, de.apply(this, arguments)
            }
            var Ee = ((fe = {})[a] = le, fe[i] = ce, fe[l] = void 0, fe[c] = ce, fe[u] = void 0, fe[s] = void 0, fe[f] = void 0, fe[v] = ce, fe[d] = void 0, fe),
                Oe = function(e) {
                    var n = e.children,
                        t = e.variant,
                        r = function(e, n) {
                            if (null == e) return {};
                            var t, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o
                        }(e, ve);
                    return o.createElement(ue, de({
                        timeout: Ee[t]
                    }, r), (function(e) {
                        var r = e.isEntered;
                        return o.createElement(o.Fragment, null, o.createElement(B, {
                            variant: t,
                            autoPlay: r
                        }), n)
                    }))
                };
            Oe.Title = ue.Title, Oe.Description = ue.Description, Oe.Actions = ue.Actions
        }
    }
]);