const t = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const f = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useRef;
const p = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useEffect;
function b({ gridRows: n = 8, gridColumns: i = 1, containerSize: o = "70vmin", multiCount: s = 50, colors: r = [
    { colorHex: "#fc0" },
    { colorHex: "#00f" },
    { colorHex: "#f7b" },
    { colorHex: "#09f" },
    { colorHex: "#000" }
], backgroundColor: l = "#f9a8d4", containerBackgroundColor: d = "#000000" }) {
    const c = f(null);
    p(() => {
        if (!document.querySelector('script[src*="css-doodle"]')) {
            const e = document.createElement("script");
            return e.src = "https://esm.sh/css-doodle/css-doodle.min.js?raw", e.async = !0, document.body.appendChild(e), () => {
                document.body.removeChild(e);
            };
        }
    }, []);
    const a = (r == null ? void 0 : r.map((e) => e.colorHex).join(", ")) || "#fc0, #00f, #f7b, #09f, #000", m = {
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: l
    }, u = {
        boxShadow: "0 4vmin 8vmin -4vmin",
        width: o,
        height: o,
        margin: "0 auto",
        padding: "5vmin",
        backgroundColor: d
    };
    return /* @__PURE__ */ t.jsxDEV("div", { style: m, children: /* @__PURE__ */ t.jsxDEV("css-doodle", {
            ref: c,
            style: u,
            onClick: () => {
                c.current && c.current.update();
            },
            children: `
          @grid: ${i}x${n} / ${o};
          @place-cell: center;
          @size: calc(100% - @calc(@i() - 1) * 100% / @size());
          
          background-image: @multi(${s}, conic-gradient(from @r(360deg), @p(${a}) @r(20%), transparent @lr()));
        `
        }, void 0, !1, {
            fileName: "/Users/robmao/work/arcblock/test project/src/ConicColorfulShapes/index.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this) }, void 0, !1, {
        fileName: "/Users/robmao/work/arcblock/test project/src/ConicColorfulShapes/index.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
const g = {
    name: "ConicColorfulShapes",
    description: "A configurable CSS-doodle component with colorful conic gradients",
    previewImageUrl: "@preview-images/cover.png"
};
export { g as componentMetadata, b as default };
