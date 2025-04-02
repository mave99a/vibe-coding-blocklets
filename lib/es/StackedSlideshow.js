var __rest = (this && this.__rest) || ((s, e) => {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
});
const r = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const l = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useState;
const $ = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useRef;
const x = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useEffect;
function oe({ title: g = "Stacked Slideshow", slides: a = [], navButtonColor: k = "#6366F1", maxWidth: V = 1200, cardBorderRadius: T = 12, animationDuration: h = 400, aspectRatio: W = "4:3", cardRotation: O = 2, autoSlideshow: w = !1, slideshowInterval: S = 2e3 }) {
    const s = a && a.length > 0 ? a : [], [m, b] = l([]), [c, d] = l(!1), [z, N] = l(null), [v, j] = l(null), [y, i] = l(!1), u = $(null), n = $(null);
    x(() => {
        b(Array.from({ length: s.length }, (e, t) => t));
    }, [s.length]), x(() => {
        const e = () => {
            w && !y && !c && s.length > 1 && (n.current = setTimeout(() => {
                E();
            }, S));
        };
        return n.current && (clearTimeout(n.current), n.current = null), e(), () => {
            n.current && clearTimeout(n.current);
        };
    }, [w, y, c, s.length, m, S]), x(() => () => {
        u.current && clearTimeout(u.current), n.current && clearTimeout(n.current);
    }, []);
    const f = (() => {
        let t;
        switch (W) {
            case "1:1":
                t = 350;
                break;
            case "4:3":
                t = 350 * 3 / 4;
                break;
            case "3:4":
                t = 350 * 4 / 3;
                break;
            case "16:9":
                t = 350 * 9 / 16;
                break;
            default:
                t = 350 * 3 / 4;
        }
        return { width: 350, height: t };
    })(), B = () => {
        c || s.length <= 1 || (d(!0), b((e) => {
            const t = [...e];
            return [t.pop(), ...t];
        }), u.current = setTimeout(() => {
            d(!1);
        }, h));
    }, E = () => {
        c || s.length <= 1 || (d(!0), b((e) => {
            const t = [...e], o = t.shift();
            return [...t, o];
        }), u.current = setTimeout(() => {
            d(!1);
        }, h));
    }, H = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        maxWidth: `${V}px`,
        margin: "0 auto",
        padding: "2rem",
        position: "relative",
        overflow: "hidden"
    }, A = {
        fontSize: "2rem",
        fontWeight: 700,
        textAlign: "center",
        marginBottom: "2.5rem",
        color: "#333"
    }, F = {
        position: "relative",
        height: `${f.height + 60}px`,
        // Reduced height for smaller title area
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1000px"
    }, C = (e) => {
        const t = e ? v === "left" : v === "right";
        return {
            position: "absolute",
            top: "50%",
            left: e ? "10px" : "auto",
            right: e ? "auto" : "10px",
            transform: t ? "translateY(-50%) scale(1.1)" : "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: t ? `${k}dd` : k,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 20,
            fontSize: "24px",
            transition: "transform 0.2s ease, background-color 0.2s ease"
        };
    }, M = {
        width: "12px",
        height: "12px",
        border: "solid white",
        borderWidth: "0 3px 3px 0",
        padding: "3px"
    }, L = (e) => {
        const t = s.length, o = e === 0, p = {
            position: "absolute",
            width: `${f.width}px`,
            borderRadius: `${T}px`,
            backgroundColor: "white",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            transition: `all ${h / 1e3}s cubic-bezier(0.25, 0.1, 0.25, 1.0)`,
            transformOrigin: "center center",
            cursor: "pointer",
            zIndex: t - e
        };
        if (o && z === m[e])
            Object.assign(p, {
                transform: "scale(1.05) translateZ(20px)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
            });
        else {
            const G = e * 10, J = e * 8, K = 1 - e * 0.05, Q = e * O - 2;
            Object.assign(p, {
                transform: `translateX(${G}px) translateY(${J}px) scale(${K}) rotate(${Q}deg)`,
                filter: `brightness(${1 - e * 0.1})`
            });
        }
        return p;
    }, R = {
        width: "100%",
        height: `${f.height}px`,
        objectFit: "cover",
        display: "block"
    }, Y = {
        padding: "0.4rem 0.6rem",
        backgroundColor: "white"
    }, P = {
        margin: 0,
        fontSize: "0.9rem",
        fontWeight: 600,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }, _ = (e) => {
        N(e), i(!0);
    }, I = () => {
        N(null), i(!1);
    }, U = (e) => {
        j(e), i(!0);
    }, D = () => {
        j(null), i(!1);
    }, X = (e) => {
        e && window.open(e, "_blank");
    }, Z = () => {
        i(!0);
    }, q = () => {
        i(!1);
    };
    return /* @__PURE__ */ r.jsxDEV("div", { style: H, children: [
            /* @__PURE__ */ r.jsxDEV("h2", { style: A, children: g }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ r.jsxDEV("div", {
                style: F,
                onMouseEnter: Z,
                onMouseLeave: q,
                children: [
                    s.length > 0 && m.map((e, t) => {
                        const o = s[e];
                        return o ? /* @__PURE__ */ r.jsxDEV("div", {
                            style: L(t),
                            onClick: () => X(o.linkUrl),
                            onMouseEnter: () => _(e),
                            onMouseLeave: I,
                            children: [
                                /* @__PURE__ */ r.jsxDEV("img", {
                                    src: o.imageUrl,
                                    alt: o.title || `Slide ${e + 1}`,
                                    style: R
                                }, void 0, !1, {
                                    fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this),
                                o.title && /* @__PURE__ */ r.jsxDEV("div", { style: Y, children: /* @__PURE__ */ r.jsxDEV("h3", { style: P, children: o.title }, void 0, !1, {
                                        fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                                        lineNumber: 359,
                                        columnNumber: 19
                                    }, this) }, void 0, !1, {
                                    fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                                    lineNumber: 358,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, e, !0, {
                            fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this) : null;
                    }),
                    s.length > 1 && /* @__PURE__ */ r.jsxDEV(r.Fragment, { children: [
                            /* @__PURE__ */ r.jsxDEV("button", {
                                onClick: B,
                                style: C(!0),
                                onMouseEnter: () => U("left"),
                                onMouseLeave: D,
                                "aria-label": "Previous slide",
                                children: /* @__PURE__ */ r.jsxDEV("div", { style: Object.assign(Object.assign({}, M), { transform: "rotate(135deg)" }) }, void 0, !1, {
                                    fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this)
                            }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this),
                            /* @__PURE__ */ r.jsxDEV("button", {
                                onClick: E,
                                style: C(!1),
                                onMouseEnter: () => U("right"),
                                onMouseLeave: D,
                                "aria-label": "Next slide",
                                children: /* @__PURE__ */ r.jsxDEV("div", { style: Object.assign(Object.assign({}, M), { transform: "rotate(-45deg)" }) }, void 0, !1, {
                                    fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this)
                            }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this)
                        ] }, void 0, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, !0, {
                fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/StackedSlideshow/index.tsx",
        lineNumber: 331,
        columnNumber: 5
    }, this);
}
const se = (_a) => {
    var { onChange: g } = _a, a = __rest(_a, ["onChange"]);
    return null;
};
export { se as EditComponent, oe as default };
