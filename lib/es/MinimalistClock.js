const n = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const S = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useState;
const g = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useEffect;
const b = ({ showSeconds: i = !0, showDate: s = !0, textColor: o = "#333333", backgroundColor: a = "#ffffff" }) => {
    const [e, l] = S(/* @__PURE__ */ new Date());
    g(() => {
        const t = setInterval(() => {
            l(/* @__PURE__ */ new Date());
        }, 1e3);
        return () => clearInterval(t);
    }, []);
    const c = () => {
        const t = e.getHours().toString().padStart(2, "0"), r = e.getMinutes().toString().padStart(2, "0"), p = e.getSeconds().toString().padStart(2, "0");
        return i ? `${t}:${r}:${p}` : `${t}:${r}`;
    }, m = () => e.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }), f = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
        padding: "2rem",
        backgroundColor: a,
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease"
    }, u = {
        fontSize: "3.5rem",
        fontWeight: 300,
        color: o,
        margin: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        letterSpacing: "2px"
    }, d = {
        fontSize: "1.2rem",
        color: o,
        opacity: 0.8,
        marginTop: "1rem",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontWeight: 300
    };
    return /* @__PURE__ */ n.jsxDEV("div", { style: f, children: [
            /* @__PURE__ */ n.jsxDEV("h1", { style: u, children: c() }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/MinimalistClock/index.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, void 0),
            s && /* @__PURE__ */ n.jsxDEV("p", { style: d, children: m() }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/MinimalistClock/index.tsx",
                lineNumber: 83,
                columnNumber: 20
            }, void 0)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/MinimalistClock/index.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, void 0);
};
export { b as default };
