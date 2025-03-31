var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const a = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const D = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useState;
const M = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useMemo;
const w = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useEffect;
const A = {
    0: [!0, !0, !0, !1, !0, !0, !0],
    1: [!1, !1, !0, !1, !1, !0, !1],
    2: [!0, !1, !0, !0, !0, !1, !0],
    3: [!0, !1, !0, !0, !1, !0, !0],
    4: [!1, !0, !0, !0, !1, !0, !1],
    5: [!0, !0, !1, !0, !1, !0, !0],
    6: [!0, !0, !1, !0, !0, !0, !0],
    7: [!0, !1, !0, !1, !1, !0, !1],
    8: [!0, !0, !0, !0, !0, !0, !0],
    9: [!0, !0, !0, !0, !1, !0, !0],
    // Special characters
    ":": [],
    " ": [],
    A: [!0, !0, !0, !0, !0, !0, !1],
    P: [!0, !0, !0, !0, !0, !1, !1],
    M: [!0, !0, !0, !1, !0, !0, !1]
}, C = (l = 20, r = 3) => {
    const o = l * 0.6, t = l, e = r / 2;
    return [
        // Segment A (top horizontal)
        `M ${e},${e} L ${o - e},${e} L ${o - r},${r} L ${r},${r} Z`,
        // Segment B (top left vertical)
        `M ${e},${e} L ${r},${r} L ${r},${t / 2 - e} L ${e},${t / 2 - r} Z`,
        // Segment C (top right vertical)
        `M ${o - e},${e} L ${o - r},${r} L ${o - r},${t / 2 - e} L ${o - e},${t / 2 - r} Z`,
        // Segment D (middle horizontal)
        `M ${e},${t / 2} L ${r},${t / 2 - e} L ${o - r},${t / 2 - e} L ${o - e},${t / 2} L ${o - r},${t / 2 + e} L ${r},${t / 2 + e} Z`,
        // Segment E (bottom left vertical)
        `M ${e},${t - e} L ${r},${t - r} L ${r},${t / 2 + e} L ${e},${t / 2 + r} Z`,
        // Segment F (bottom right vertical)
        `M ${o - e},${t - e} L ${o - r},${t - r} L ${o - r},${t / 2 + e} L ${o - e},${t / 2 + r} Z`,
        // Segment G (bottom horizontal)
        `M ${e},${t - e} L ${o - e},${t - e} L ${o - r},${t - r} L ${r},${t - r} Z`
    ];
}, S = (l, r, o, t) => {
    const e = o * 0.06, c = o * 0.3;
    return /* @__PURE__ */ a.jsxDEV("g", { transform: `translate(${l}, ${r})`, children: [
            /* @__PURE__ */ a.jsxDEV("circle", {
                cx: e,
                cy: o * 0.35,
                r: e,
                fill: t
            }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, void 0),
            /* @__PURE__ */ a.jsxDEV("circle", {
                cx: e,
                cy: o * 0.35 + c,
                r: e,
                fill: t
            }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, void 0)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, void 0);
}, U = (l, r, o, t, e, c) => {
    const d = A[l] || [], n = C(t, e);
    return l === ":" ? S(r, o, t, c) : l === " " || !d.length ? null : /* @__PURE__ */ a.jsxDEV("g", { transform: `translate(${r}, ${o})`, children: n.map(($, f) => /* @__PURE__ */ a.jsxDEV("path", {
            d: $,
            fill: d[f] ? c : "transparent",
            opacity: d[f] ? 1 : 0.1
        }, f, !1, {
            fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
            lineNumber: 116,
            columnNumber: 9
        }, void 0)) }, void 0, !1, {
        fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, void 0);
};
function h({ title: l = "LED Clock", showTitle: r = !0, digitColor: o = "rgb(255, 0, 0)", backgroundColor: t = "rgb(0, 0, 0)", timezone: e = "America/New_York", showSeconds: c = !0, use24HourFormat: d = !0, size: n = 48, segmentThickness: $ = 6 }) {
    const [f, g] = D(""), [E, j] = D(!1), v = (u, s, i) => {
        let m = u.getHours();
        const b = u.getMinutes().toString().padStart(2, "0"), x = u.getSeconds().toString().padStart(2, "0");
        let N = "";
        s || (N = m >= 12 ? "PM" : "AM", m = m % 12, m = m === 0 ? 12 : m);
        const L = m.toString().padStart(2, "0");
        return i ? `${L}:${b}:${x}${s ? "" : " " + N}` : `${L}:${b}${s ? "" : " " + N}`;
    }, k = (u, s) => u ? s ? "HH:MM:SS" : "HH:MM" : s ? "HH:MM:SS AM" : "HH:MM AM", p = M(() => {
        const u = n * 0.6, s = n * 0.2, i = k(!!d, !!c);
        return i.length * u + (i.length - 1) * s;
    }, [n, c, d]);
    w(() => {
        j(!0);
        const u = () => {
            try {
                const i = new Date(( /* @__PURE__ */new Date()).toLocaleString("en-US", { timeZone: e }));
                g(v(i, !!d, !!c));
            }
            catch (i) {
                console.error("Invalid timezone:", i), g(v(/* @__PURE__ */ new Date(), !!d, !!c));
            }
        };
        u();
        const s = setInterval(u, 1e3);
        return () => clearInterval(s);
    }, [e, d, c]);
    const y = () => {
        if (!E)
            return null;
        const u = n * 0.6, s = n * 0.2, i = f.split("");
        return /* @__PURE__ */ a.jsxDEV("svg", {
            width: p,
            height: n,
            viewBox: `0 0 ${p} ${n}`,
            style: { overflow: "visible" },
            children: i.map((m, b) => {
                const x = b * (u + s);
                return U(m, x, 0, n, $, o);
            })
        }, void 0, !1, {
            fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
            lineNumber: 216,
            columnNumber: 7
        }, this);
    };
    return /* @__PURE__ */ a.jsxDEV("div", { style: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            borderRadius: "8px",
            backgroundColor: t,
            margin: "0 auto",
            width: "fit-content",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
        }, children: [
            r && /* @__PURE__ */ a.jsxDEV("h2", { style: {
                    color: o,
                    marginTop: 0,
                    marginBottom: "1rem",
                    fontSize: `${n / 3}px`,
                    fontWeight: 500
                }, children: l }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, this),
            /* @__PURE__ */ a.jsxDEV("div", { style: {
                    padding: "1rem",
                    borderRadius: "4px",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    justifyContent: "center",
                    minWidth: p
                }, children: y() }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ a.jsxDEV("div", { style: {
                    marginTop: "0.75rem",
                    fontSize: `${n / 6}px`,
                    color: o,
                    opacity: 0.7
                }, children: e.replace("_", " ") }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
const Z = (_a) => {
    var { onChange: l } = _a, r = __rest(_a, ["onChange"]);
    const o = [
        { name: "UTC (协调世界时)", value: "UTC" },
        { name: "America/New_York (美国东部时间)", value: "America/New_York" },
        { name: "America/Chicago (美国中部时间)", value: "America/Chicago" },
        { name: "America/Denver (美国山地时间)", value: "America/Denver" },
        { name: "America/Los_Angeles (美国太平洋时间)", value: "America/Los_Angeles" },
        { name: "Europe/London (英国时间)", value: "Europe/London" },
        { name: "Europe/Paris (欧洲中部时间)", value: "Europe/Paris" },
        { name: "Europe/Moscow (莫斯科时间)", value: "Europe/Moscow" },
        { name: "Asia/Shanghai (中国标准时间)", value: "Asia/Shanghai" },
        { name: "Asia/Tokyo (日本标准时间)", value: "Asia/Tokyo" },
        { name: "Asia/Dubai (阿联酋时间)", value: "Asia/Dubai" },
        { name: "Australia/Sydney (澳大利亚东部时间)", value: "Australia/Sydney" }
    ];
    return /* @__PURE__ */ a.jsxDEV("div", { style: {
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
        }, children: [
            /* @__PURE__ */ a.jsxDEV("label", { style: {
                    fontWeight: 500,
                    marginBottom: "0.25rem"
                }, children: "时区设置" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, void 0),
            /* @__PURE__ */ a.jsxDEV("select", {
                value: r.timezone,
                onChange: (t) => {
                    l == null || l(Object.assign(Object.assign({}, r), { timezone: t.target.value }));
                },
                style: {
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc"
                },
                children: o.map((t) => /* @__PURE__ */ a.jsxDEV("option", { value: t.value, children: t.name }, t.value, !1, {
                    fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
                    lineNumber: 329,
                    columnNumber: 11
                }, void 0))
            }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, void 0),
            /* @__PURE__ */ a.jsxDEV("small", { style: {
                    marginTop: "0.25rem",
                    color: "#666"
                }, children: "请选择要显示的时区" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, void 0)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/LEDClock/index.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, void 0);
};
export { Z as EditComponent, h as default };
