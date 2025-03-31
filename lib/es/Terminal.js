const e = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const r = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useMemo;
function g({ terminalText: l = `$ echo "Hello World"
Hello World
$ ls
Documents Downloads Pictures
$ pwd
/home/user
$ _`, prompt: y = "$", showCursor: n = !0, backgroundColor: i = "#2D2D2D", textColor: t = "#E0E0E0", fontSize: s = 14, windowTitle: a = "terminal" }) {
    const c = r(() => ({
        width: "100%",
        maxWidth: "800px",
        margin: "20px auto",
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        fontFamily: 'Menlo, Monaco, "Courier New", monospace'
    }), []), m = r(() => ({
        backgroundColor: "#E0E0E0",
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
    }), []), o = r(() => ({
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        display: "inline-block"
    }), []), d = r(() => (Object.assign(Object.assign({}, o), { backgroundColor: "#FF5F56" })), [o]), u = r(() => (Object.assign(Object.assign({}, o), { backgroundColor: "#FFBD2E" })), [o]), p = r(() => (Object.assign(Object.assign({}, o), { backgroundColor: "#27C93F" })), [o]), x = r(() => ({
        flex: 1,
        textAlign: "center",
        color: "#666",
        fontSize: "14px",
        userSelect: "none"
    }), []), b = r(() => ({
        backgroundColor: i,
        color: t,
        padding: "16px",
        fontSize: `${s}px`,
        lineHeight: "1.5",
        whiteSpace: "pre-wrap",
        minHeight: "200px",
        position: "relative"
    }), [i, t, s]), h = r(() => ({
        display: n ? "inline-block" : "none",
        width: "8px",
        height: `${s * 1.2}px`,
        backgroundColor: t,
        animation: "blink 1s step-end infinite",
        verticalAlign: "text-bottom",
        marginLeft: "2px",
        position: "absolute"
    }), [n, s, t]), k = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `, N = () => l.replace(/\_$/, "");
    return /* @__PURE__ */ e.jsxDEV(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxDEV("style", { children: k }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("div", { style: c, children: [
                    /* @__PURE__ */ e.jsxDEV("div", { style: m, children: [
                            /* @__PURE__ */ e.jsxDEV("span", { style: d }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("span", { style: u }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("span", { style: p }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("span", { style: x, children: a }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ] }, void 0, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ e.jsxDEV("div", { style: b, children: [
                            N(),
                            n && /* @__PURE__ */ e.jsxDEV("span", { style: h }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
                                lineNumber: 124,
                                columnNumber: 26
                            }, this)
                        ] }, void 0, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ] }, void 0, !0, {
                fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/Terminal/index.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
export { g as default };
