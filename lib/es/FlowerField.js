const g = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const E = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useRef;
const K = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useEffect;
const F = [3, 5, 7, 11, 13, 17], H = {
    3: {
        colors: ["#ff7eb9", "#ff5c9f"],
        size: 24,
        petals: 5,
        type: "type1",
        center: { color: "#ffea00", size: 8 }
    },
    5: {
        colors: ["#7afcff", "#00d8ff"],
        size: 22,
        petals: 6,
        type: "type2",
        center: { color: "#ffcc00", size: 7 }
    },
    7: {
        colors: ["#feff9c", "#ffd800"],
        size: 28,
        petals: 8,
        type: "type1",
        center: { color: "#ff9900", size: 9 }
    },
    11: {
        colors: ["#ff9a3c", "#ff6e00"],
        size: 26,
        petals: 5,
        type: "type3",
        center: { color: "#5e2f00", size: 8 }
    },
    13: {
        colors: ["#ff65a3", "#ff006e"],
        size: 20,
        petals: 7,
        type: "type4",
        center: { color: "#ffe600", size: 6 }
    },
    17: {
        colors: ["#e2a9ff", "#c840ff"],
        size: 30,
        petals: 6,
        type: "type5",
        center: { color: "#ffdf00", size: 10 }
    }
}, q = [
    {
        radius: "0 100% 50% 50%",
        gradient: "linear-gradient(135deg, #3a8029, #5cad4a)",
        veinCount: 3,
        veinAngle: -5
    },
    {
        radius: "0 70% 0 50%",
        gradient: "linear-gradient(135deg, #4a9e35, #65c143)",
        veinCount: 5,
        veinAngle: -15
    },
    {
        radius: "50% 100% 50% 30%",
        gradient: "linear-gradient(135deg, #2e5d20, #4a9e35)",
        veinCount: 4,
        veinAngle: 0
    },
    {
        radius: "10% 90% 20% 80%",
        gradient: "linear-gradient(135deg, #3a8029, #65c143)",
        veinCount: 6,
        veinAngle: -10
    },
    {
        radius: "50% 50% 0 50%",
        gradient: "linear-gradient(135deg, #3d8c29, #5cad4a)",
        veinCount: 4,
        veinAngle: -8
    }
];
function X({ flowerCount: D = 70, fireflyCount: S = 20, starCount: P = 200, cloudCount: T = 8, backgroundColor: I = "#0a0e18", groundColor: O = "#2d1d15", fireflyColor: A = "#ffea00" }) {
    const v = E(null), b = E(null), M = E(null), $ = E(null);
    K(() => {
        if (!(!v.current || !b.current || !M.current || !$.current)) {
            for (let t = 0; t < P; t++) {
                const e = document.createElement("div");
                e.classList.add("star");
                const r = Math.random() * 2 + 1;
                e.style.width = `${r}px`, e.style.height = `${r}px`;
                const u = Math.random() * 100, y = Math.random() * 100;
                e.style.left = `${u}%`, e.style.top = `${y}%`;
                const p = 3 + Math.random() * 7, s = Math.random() * 5, x = Math.random() * 0.3, d = x + 0.4;
                e.style.setProperty("--twinkle-duration", `${p}s`), e.style.setProperty("--twinkle-delay", `${s}s`), e.style.setProperty("--min-opacity", x.toString()), e.style.setProperty("--max-opacity", d.toString()), b.current.appendChild(e);
            }
            for (let t = 0; t < T; t++) {
                const e = document.createElement("div");
                e.classList.add("cloud");
                const r = 100 + Math.random() * 200, u = 50 + Math.random() * 40;
                e.style.width = `${r}px`, e.style.height = `${u}px`;
                const y = Math.random() * 100, p = Math.random() * 50;
                e.style.left = `${y}%`, e.style.top = `${p}%`;
                const s = 0.1 + Math.random() * 0.3;
                e.style.opacity = s.toString();
                const x = 100 + Math.random() * 100, d = 100 + Math.random() * 100;
                e.style.setProperty("--drift-distance", `${x}vw`), e.style.animation = `cloudDrift ${d}s linear infinite`, M.current.appendChild(e);
            }
            for (let t = 0; t < D; t++) {
                const e = Math.random();
                e < 0.3 ? m(t * 40, null, 0.8, 1, 10, 40) : e < 0.6 ? m(t * 40, null, 0.5, 0.7, 25, 45) : e < 0.85 ? m(t * 40, null, 0.3, 0.5, 35, 45) : m(t * 40, null, 0.1, 0.3, 42, 46);
            }
            for (let t = 0; t < S; t++) {
                const e = document.createElement("div");
                e.classList.add("firefly"), e.style.backgroundColor = A;
                const r = 4 + Math.random() * 4;
                e.style.width = `${r}px`, e.style.height = `${r}px`;
                const u = Math.random() * 100, y = Math.random() * 100;
                e.style.left = `${u}%`, e.style.top = `${y}%`;
                const p = 3 + Math.random() * 4, s = Math.random() * 2;
                e.style.animation = `fireflyFloat ${p}s ease-in-out infinite`, e.style.animationDelay = `${s}s`, $.current.appendChild(e);
            }
            return F.forEach((t) => {
                const e = t * 3e3;
                setTimeout(() => {
                    setInterval(() => {
                        const r = Math.random();
                        r < 0.3 ? m(0, t, 0.8, 1, 10, 40) : r < 0.6 ? m(0, t, 0.5, 0.7, 25, 45) : r < 0.85 ? m(0, t, 0.3, 0.5, 35, 45) : m(0, t, 0.1, 0.3, 42, 46);
                    }, e);
                }, t * 1e3);
            }), () => {
                b.current && (b.current.innerHTML = ""), M.current && (M.current.innerHTML = ""), $.current && ($.current.innerHTML = ""), v.current && (v.current.innerHTML = "");
            };
        }
    }, [D, S, P, T, A]);
    const m = (t, e, r, u, y, p) => {
        if (!v.current)
            return;
        const s = document.createElement("div");
        s.classList.add("flower");
        const x = 5 + Math.random() * 90, d = r + Math.random() * (u - r), Y = y + Math.random() * (p - y);
        s.style.bottom = `${Y}%`, s.style.left = `${x}%`;
        const B = 0.7 + d * 0.6;
        s.style.setProperty("--scale", B.toString()), s.style.opacity = (0.9 + d * 0.1).toString(), s.style.zIndex = Math.round(10 + d * 90).toString();
        const C = e || F[Math.floor(Math.random() * F.length)];
        if (typeof C != "number" || !(C in H))
            return;
        const a = H[C];
        if (!a)
            return;
        const R = (30 + Math.random() * 50) * (0.8 + d * 0.4), V = 8 + Math.random() * 5, U = Math.random() * 4, G = (Math.random() * 3 - 1.5) * d, o = document.createElement("div");
        if (o.classList.add("stem"), o.style.height = "0px", o.dataset.fullHeight = `${R}px`, Math.random() > 0.3) {
            o.classList.add("curved");
            const i = Math.random() * 1.5 + 1.5;
            o.style.setProperty("--bend-rotation-neg", `-${i}deg`), o.style.setProperty("--bend-rotation-pos", `${i}deg`);
            const n = Math.random() * 20 + 40;
            o.style.transformOrigin = `center ${n}%`;
            const N = V * (1.2 + Math.random() * 0.3);
            o.style.animation = `stemBend ${N}s ease-in-out infinite`, o.style.animationDelay = `${U}s`;
        }
        s.style.setProperty("--sway-amount", `${G}deg`);
        const J = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < J; i++) {
            const n = document.createElement("div");
            n.classList.add("leaf");
            const N = Math.floor(Math.random() * q.length), l = q[N];
            if (!l)
                continue;
            const c = 30 + Math.random() * 40;
            n.style.bottom = `${c}%`, n.style.transform = `rotate(${Math.random() * 60 - 30}deg) scale(0)`;
            const f = document.createElement("div");
            f.classList.add("leaf-shape"), f.style.borderRadius = l.radius, f.style.background = l.gradient;
            const z = document.createElement("div");
            z.classList.add("leaf-stem"), z.style.backgroundColor = "#2e5d20";
            const L = document.createElement("div");
            L.classList.add("main-vein"), L.style.backgroundColor = "#1a3d10";
            for (let j = 0; j < l.veinCount; j++) {
                const k = document.createElement("div");
                k.classList.add("side-vein"), k.style.backgroundColor = "#1a3d10", k.style.transform = `rotate(${l.veinAngle + j * 360 / l.veinCount}deg)`, f.appendChild(k);
            }
            f.appendChild(L), n.appendChild(z), n.appendChild(f), o.appendChild(n);
        }
        const h = document.createElement("div");
        h.style.position = "relative", h.classList.add("flower-head");
        for (let i = 0; i < a.petals; i++) {
            const n = document.createElement("div");
            n.classList.add("petal", a.type), a.colors[0] && (n.style.backgroundColor = a.colors[0]), n.style.width = `${a.size}px`, n.style.height = `${a.size}px`, n.style.transform = `rotate(${i * 360 / a.petals}deg) translateY(-${a.size / 2}px)`, h.appendChild(n);
        }
        const w = document.createElement("div");
        w.classList.add("center"), w.style.backgroundColor = a.center.color, w.style.width = `${a.center.size}px`, w.style.height = `${a.center.size}px`, h.appendChild(w), s.appendChild(o), s.appendChild(h), v.current.appendChild(s), setTimeout(() => {
            o.style.height = `${R}px`, s.style.animation = `sway ${V}s ease-in-out infinite`, s.style.animationDelay = `${U}s`, s.style.transform = "scale(var(--scale)) rotate(var(--sway-amount))";
            const i = h.querySelectorAll(".petal"), n = h.querySelector(".center"), N = o.querySelectorAll(".leaf");
            setTimeout(() => {
                i.forEach((l) => {
                    const c = l, f = c.style.transform;
                    if (!f) {
                        c.style.opacity = "1", c.style.transform = `rotate(0deg) translateY(-${a.size / 2}px) scale(1)`;
                        return;
                    }
                    c.style.opacity = "1", c.style.transform = `${f.split(" ")[0]} translateY(-${a.size / 2}px) scale(1)`;
                }), n && (n.style.opacity = "1", n.style.transform = "scale(1)"), N.forEach((l) => {
                    l.style.opacity = "1";
                    const c = l.style.transform;
                    c && (l.style.transform = c.replace("scale(0)", "scale(1)"));
                });
            }, 100);
        }, t);
    };
    return /* @__PURE__ */ g.jsxDEV("div", { className: "garden-container", style: { backgroundColor: I }, children: [
            /* @__PURE__ */ g.jsxDEV("div", { className: "night-sky", children: [
                    /* @__PURE__ */ g.jsxDEV("div", { ref: b, className: "stars" }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/FlowerField/index.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ g.jsxDEV("div", { ref: M, className: "clouds" }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/FlowerField/index.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this)
                ] }, void 0, !0, {
                fileName: "/Users/robmao/work/arcblock/test project/src/FlowerField/index.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ g.jsxDEV("div", { className: "garden", ref: v, children: /* @__PURE__ */ g.jsxDEV("div", { className: "ground", style: { backgroundColor: O } }, void 0, !1, {
                    fileName: "/Users/robmao/work/arcblock/test project/src/FlowerField/index.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this) }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/FlowerField/index.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ g.jsxDEV("div", { ref: $, className: "fireflies" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/FlowerField/index.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/FlowerField/index.tsx",
        lineNumber: 426,
        columnNumber: 5
    }, this);
}
export { X as default };
