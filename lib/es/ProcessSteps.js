const o = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const f = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useState;
const v = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useRef;
const A = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useEffect;
function O({ title: S = "How It Works", subtitle: y = "Launch Your Startup in 3 Simple Steps", steps: p = [
    {
        title: "Validate Your Idea",
        description: "Get instant insights on market demand, competitors, and feasibility."
    },
    {
        title: "Brand & Name Your Startup",
        description: "Generate a unique business name, check domain availability, and create a logo."
    },
    {
        title: "Launch Your Landing Page",
        description: "Instantly generate a professional landing page and go live."
    }
], primaryColor: s = "#3B82F6", stepNumberBgColor: w = "#E0E7FF", hoverScale: N = 1.2, animationDuration: k = 0.3, maxWidth: j = 1200 }) {
    const [D, h] = f(null), u = v(null), r = v([]), [P, E] = f([]), [x, z] = f(!1), I = {
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        maxWidth: `${j}px`,
        margin: "0 auto",
        padding: "2rem 1rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
        // Ensure SVG stays within container bounds
    }, C = {
        fontSize: "2.5rem",
        fontWeight: 700,
        marginBottom: "0.75rem",
        color: "#111827"
    }, R = {
        fontSize: "1.25rem",
        fontWeight: 400,
        color: "#6B7280",
        marginBottom: "3rem"
    }, $ = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2rem",
        marginTop: "2rem",
        position: "relative",
        padding: "1rem 0"
    }, B = (t) => {
        const e = D === t;
        return {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: e ? "70px" : "60px",
            height: e ? "70px" : "60px",
            borderRadius: "50%",
            backgroundColor: e ? s : w,
            color: e ? "#FFFFFF" : s,
            fontSize: e ? "1.75rem" : "1.5rem",
            fontWeight: 700,
            margin: "0 auto 1.5rem",
            transition: `all ${k}s ease`,
            transform: e ? `scale(${N})` : "scale(1)",
            boxShadow: e ? `0 10px 20px rgba(${parseInt(s.slice(1, 3), 16)}, ${parseInt(s.slice(3, 5), 16)}, ${parseInt(s.slice(5, 7), 16)}, 0.3)` : "none",
            position: "relative",
            zIndex: 2
            // Keep circles above the connection lines
        };
    }, F = {
        flex: "1 1 300px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "320px",
        margin: "0 auto"
    }, V = {
        fontSize: "1.25rem",
        fontWeight: 600,
        color: "#111827",
        marginBottom: "0.75rem",
        position: "relative",
        zIndex: 2
        // Keep text above the connection lines
    }, W = {
        fontSize: "1rem",
        fontWeight: 400,
        color: "#6B7280",
        lineHeight: 1.6,
        position: "relative",
        zIndex: 2
        // Keep text above the connection lines
    }, d = () => {
        if (!u.current || r.current.some((e) => !e))
            return;
        const t = [];
        for (let e = 0; e < p.length - 1; e++) {
            const a = r.current[e], b = r.current[e + 1];
            if (!a || !b)
                continue;
            const n = a.getBoundingClientRect(), c = b.getBoundingClientRect(), l = u.current.getBoundingClientRect();
            if (!(Math.abs(n.top - c.top) < n.height / 2))
                continue;
            const i = {
                x: n.left + n.width / 2 - l.left,
                y: n.top + 30 - l.top
                // 30px down from the top of the step container
            }, m = {
                x: c.left + c.width / 2 - l.left,
                y: c.top + 30 - l.top
                // 30px down from the top of the step container
            }, M = m.x - i.x, g = i.x + M / 2, L = `
        M ${i.x + 30} ${i.y}
        C ${g - 50} ${i.y - 40},
          ${g + 50} ${m.y - 40},
          ${m.x - 30} ${m.y}
      `;
            t.push(L);
        }
        E(t);
    };
    A(() => {
        const e = setTimeout(() => {
            x || (d(), z(!0));
        }, 500);
        return window.addEventListener("resize", d), () => {
            clearTimeout(e), window.removeEventListener("resize", d);
        };
    }, [x, p.length]);
    const U = {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        zIndex: 1,
        pointerEvents: "none"
    };
    return /* @__PURE__ */ o.jsxDEV("div", { style: I, children: [
            /* @__PURE__ */ o.jsxDEV("h2", { style: C, children: S }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ o.jsxDEV("p", { style: R, children: y }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ o.jsxDEV("div", { ref: u, style: $, children: [
                    /* @__PURE__ */ o.jsxDEV("svg", { style: U, children: P.map((t, e) => /* @__PURE__ */ o.jsxDEV("path", {
                            d: t,
                            fill: "none",
                            stroke: "#D1D5DB",
                            strokeWidth: "2",
                            strokeDasharray: "5,5",
                            strokeLinecap: "round"
                        }, `connection-${e}`, !1, {
                            fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)) }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    p.map((t, e) => /* @__PURE__ */ o.jsxDEV("div", {
                        ref: (a) => r.current[e] = a,
                        style: F,
                        onMouseEnter: () => h(e),
                        onMouseLeave: () => h(null),
                        children: [
                            /* @__PURE__ */ o.jsxDEV("div", { style: B(e), children: e + 1 }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this),
                            /* @__PURE__ */ o.jsxDEV("h3", { style: V, children: t.title }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this),
                            /* @__PURE__ */ o.jsxDEV("p", { style: W, children: t.description }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this)
                        ]
                    }, e, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this))
                ] }, void 0, !0, {
                fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/ProcessSteps/index.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
const q = `
# ProcessSteps Component

A customizable process steps component that displays a workflow or guide with interactive hover effects.

## Features

- Configurable main title and subtitle
- Support for multiple process steps, each with a title and description
- Interactive hover effects on step numbers
- Curved, wavy connection lines between steps
- Customizable colors and animation settings
- Responsive design that works on all devices

## Properties

- \`title\`: Main heading text
- \`subtitle\`: Secondary heading text
- \`steps\`: Array of step objects, each with \`title\` and \`description\`
- \`primaryColor\`: Main color for active/hover elements
- \`stepNumberBgColor\`: Background color for step number circles
- \`hoverScale\`: Amount to scale step numbers on hover (e.g., 1.2 = 120%)
- \`animationDuration\`: Duration of hover animations in seconds
- \`maxWidth\`: Maximum width of the component in pixels
`;
export { q as README, O as default };
