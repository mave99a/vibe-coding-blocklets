const e = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
function p({ backgroundColor: r = "#607d8b", spinnerColor: s = "linear-gradient(0deg, #f1f1f1, #bbb)", shadowColor: t = "#0009", animationDuration: n = 5 }) {
    const o = `
    @keyframes animate {
      0% {
        transform: perspective(1000px) rotateX(0deg);
      }
      100% {
        transform: perspective(1000px) rotateX(359deg);
      }
    }
  `, i = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        minHeight: "300px",
        background: r,
        position: "relative",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflow: "hidden"
    }, a = {
        position: "relative",
        transformStyle: "preserve-3d",
        width: "200px",
        height: "300px",
        transform: "perspective(1000px) rotateY(-45deg)"
    }, l = {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: "-180px",
        width: "100%",
        height: "150px",
        background: t,
        transform: "rotateX(90deg)",
        filter: "blur(40px)",
        opacity: 0.5
    }, c = {
        position: "absolute",
        inset: 0,
        transformStyle: "preserve-3d",
        animation: `animate ${n}s linear infinite`
    };
    return /* @__PURE__ */ e.jsxDEV("div", { style: i, children: [
            /* @__PURE__ */ e.jsxDEV("style", { children: o }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/Samples/css-only-3d-spinner/CssOnly3DSpinner/index.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("div", { style: a, className: "spinner-box", children: [
                    /* @__PURE__ */ e.jsxDEV("div", { style: c, children: [
                            /* @__PURE__ */ e.jsxDEV("span", { style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: s,
                                    borderRadius: "20px",
                                    transform: "rotateX(calc(1 * 45deg))",
                                    transformStyle: "preserve-3d"
                                } }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/Samples/css-only-3d-spinner/CssOnly3DSpinner/index.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("span", { style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: s,
                                    borderRadius: "20px",
                                    transform: "rotateX(calc(2 * 45deg))",
                                    transformStyle: "preserve-3d"
                                } }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/Samples/css-only-3d-spinner/CssOnly3DSpinner/index.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("span", { style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: s,
                                    borderRadius: "20px",
                                    transform: "rotateX(calc(3 * 45deg))",
                                    transformStyle: "preserve-3d"
                                } }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/Samples/css-only-3d-spinner/CssOnly3DSpinner/index.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("span", { style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: s,
                                    borderRadius: "20px",
                                    transform: "rotateX(calc(4 * 45deg))",
                                    transformStyle: "preserve-3d"
                                } }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/Samples/css-only-3d-spinner/CssOnly3DSpinner/index.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ] }, void 0, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/Samples/css-only-3d-spinner/CssOnly3DSpinner/index.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ e.jsxDEV("div", { style: l }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/Samples/css-only-3d-spinner/CssOnly3DSpinner/index.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ] }, void 0, !0, {
                fileName: "/Users/robmao/work/arcblock/test project/src/Samples/css-only-3d-spinner/CssOnly3DSpinner/index.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/Samples/css-only-3d-spinner/CssOnly3DSpinner/index.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
const d = {
    name: "CSS Only 3D Spinner",
    description: "A pure CSS 3D spinner with configurable colors",
    icon: "cube"
};
export { p as default, d as metadata };
