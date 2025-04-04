const e = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const w = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useRef;
const k = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useEffect;
(() => {
        try {
        if (typeof document < "u") {
            var t = document.createElement("style");
            t.appendChild(document.createTextNode(`.garden-container{position:relative;width:100%;height:100vh;overflow:hidden;background:linear-gradient(to bottom,#030614,#0a1128,#172449,#1f2e58,#28334f)}.night-sky{position:absolute;top:0;left:0;width:100%;height:100%;opacity:.7;background:radial-gradient(circle at 50% 10%,rgba(64,80,130,.5),transparent 60%);z-index:0}.stars{position:absolute;top:0;left:0;width:100%;height:70%;z-index:0}.star{position:absolute;background-color:#fff;border-radius:50%;opacity:0;animation:twinkle var(--twinkle-duration, 3s) ease-in-out infinite;animation-delay:var(--twinkle-delay, 0s)}.clouds{position:absolute;top:0;left:0;width:100%;height:60%;z-index:0}.cloud{position:absolute;background-color:#1e283c99;border-radius:50%;filter:blur(20px);z-index:0}.garden{position:relative;width:100%;height:100%;z-index:2}.ground{position:absolute;bottom:0;left:0;width:100%;height:50%;background:linear-gradient(to bottom,#2d1d15,#211510);z-index:1;overflow:hidden;border-radius:50% 70% 0 0/40px;box-shadow:0 -10px 30px #0000004d;transform-origin:bottom}.ground:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E");opacity:.5}.flower{position:absolute;transform-origin:bottom center;z-index:2;--scale: 1;width:30px;display:flex;flex-direction:column;align-items:center}.flower-head{position:relative;z-index:3;display:flex;justify-content:center;align-items:center}.stem{position:absolute;bottom:0;width:4px;background:linear-gradient(to top,#2e5d20,#5cad4a,#2e5d20);border-radius:2px;transform-origin:bottom center;height:0;transition:height 1s cubic-bezier(.2,.8,.2,1);box-shadow:0 0 4px #0000004d;z-index:1}.stem:after{content:"";position:absolute;bottom:-5px;left:50%;transform:translate(-50%);width:10px;height:6px;background:radial-gradient(ellipse at center,#28190fcc,#28190f00 70%);border-radius:50%;opacity:.8}.stem.curved{border-radius:50%}@keyframes stemBend{0%{transform:perspective(500px) rotateX(0) rotateY(var(--bend-rotation-neg, -1deg)) rotate(0)}50%{transform:perspective(500px) rotateX(0) rotateY(var(--bend-rotation-pos, 1deg)) rotate(0)}to{transform:perspective(500px) rotateX(0) rotateY(var(--bend-rotation-neg, -1deg)) rotate(0)}}.petal{position:absolute;transform-origin:center bottom;opacity:0;transform:scale(0);transition:transform .5s cubic-bezier(.34,1.56,.64,1),opacity .5s ease}.petal.type1{border-radius:50% 50% 50% 0}.petal.type2{border-radius:80% 0}.petal.type3{border-radius:0 50% 50%}.petal.type4{border-radius:50% 20%}.petal.type5{border-radius:0 100% 50% 50%}.center{position:absolute;border-radius:50%;opacity:0;transform:scale(0);transition:all .5s cubic-bezier(.34,1.56,.64,1)}.leaf{position:absolute;transform-origin:0 50%;opacity:0;transform:scale(0);transition:all .5s cubic-bezier(.34,1.56,.64,1);width:20px;height:10px}.leaf-shape{position:absolute;width:100%;height:100%;transform-origin:0 50%;overflow:hidden;background-color:#4a9e35}.leaf-stem{position:absolute;height:2px;top:50%;left:-4px;transform:translateY(-50%);width:4px}.main-vein{position:absolute;top:50%;left:0;width:100%;height:1px;transform:translateY(-50%)}.side-vein{position:absolute;width:80%;height:1px;transform-origin:left}.firefly{position:absolute;border-radius:50%;filter:blur(1px);box-shadow:0 0 10px currentColor;color:var(--firefly-color, #ffea00);z-index:3}@keyframes sway{0%{transform:scale(var(--scale)) rotate(calc(var(--sway-amount) * -1))}50%{transform:scale(var(--scale)) rotate(var(--sway-amount))}to{transform:scale(var(--scale)) rotate(calc(var(--sway-amount) * -1))}}@keyframes fireflyFloat{0%{transform:translate(0);opacity:.3}25%{transform:translate(20px,-30px);opacity:.8}50%{transform:translate(40px);opacity:.3}75%{transform:translate(20px,30px);opacity:.8}to{transform:translate(0);opacity:.3}}@keyframes twinkle{0%{opacity:var(--min-opacity, .2)}50%{opacity:var(--max-opacity, .6)}to{opacity:var(--min-opacity, .2)}}@keyframes cloudDrift{0%{transform:translate(0)}to{transform:translate(var(--drift-distance, 100vw))}}@keyframes leafSway{0%{transform:rotate(0)}50%{transform:rotate(5deg)}to{transform:rotate(0)}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}`)), document.head.appendChild(t);
        }
    }
    catch (e) {
        console.error("vite-plugin-css-injected-by-js", e);
    }
})();
function g({ line1: s = "CODE", line2: i = "DRIVEN", line3: o = "ANIMATION", fontSize: a = 150, primaryColor: l = "#ffffff", secondaryColor: m = "#aaaaaa", backgroundColor: c = "#000000" }) {
    const d = w(null);
    k(() => {
        if (window.gsap)
            x();
        else {
            const r = document.createElement("script");
            r.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js", r.async = !0, r.onload = x, document.head.appendChild(r);
        }
        function x() {
            var h;
            const { gsap: r } = window, u = (h = d.current) == null ? void 0 : h.querySelectorAll("text");
            if (!u)
                return;
            const f = r.timeline({
                defaults: {
                    duration: 2,
                    yoyo: !0,
                    ease: "power2.inOut"
                }
            }).fromTo(".left, .right", {
                svgOrigin: "640 500",
                skewY: (t) => [-30, 15][t],
                scaleX: (t) => [0.6, 0.85][t],
                x: 200
            }, {
                skewY: (t) => [-15, 30][t],
                scaleX: (t) => [0.85, 0.6][t],
                x: -200
            }).play(0.5), n = r.timeline();
            u.forEach((t, p) => {
                n.add(r.fromTo(t, {
                    xPercent: -100,
                    x: 700
                }, {
                    duration: 1,
                    xPercent: 0,
                    x: 575,
                    ease: "sine.inOut"
                }), p % 3 * 0.2);
            });
            const b = (t) => {
                f.pause(), n.pause(), r.to([f, n], {
                    duration: 2,
                    ease: "power4",
                    progress: t.x / window.innerWidth
                });
            };
            return window.addEventListener("pointermove", b), () => {
                window.removeEventListener("pointermove", b);
            };
        }
        return () => {
            window.gsap && (window.gsap.killTweensOf(".left, .right"), window.gsap.killTweensOf("text"));
        };
    }, [s, i, o, a, l, m, c]);
    const N = {
        width: "100%",
        height: "100%",
        minHeight: "400px",
        backgroundColor: c,
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 900,
        fontStyle: "normal",
        overflow: "hidden"
    };
    return /* @__PURE__ */ e.jsxDEV("div", { ref: d, style: N, children: [
            /* @__PURE__ */ e.jsxDEV("svg", { viewBox: "0 0 1280 720", style: { width: "100%", height: "100%" }, children: [
                    /* @__PURE__ */ e.jsxDEV("mask", { id: "maskLeft", children: /* @__PURE__ */ e.jsxDEV("rect", { x: "-50%", width: "100%", height: "100%", fill: "#fff" }, void 0, !1, {
                            fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this) }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ e.jsxDEV("mask", { id: "maskRight", children: /* @__PURE__ */ e.jsxDEV("rect", { x: "50%", width: "100%", height: "100%", fill: "#fff" }, void 0, !1, {
                            fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this) }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ e.jsxDEV("g", { fontSize: a, children: [
                            /* @__PURE__ */ e.jsxDEV("g", { mask: "url(#maskLeft)", fill: l, className: "left", children: [
                                    /* @__PURE__ */ e.jsxDEV("text", { y: "120", children: s }, void 0, !1, {
                                        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /* @__PURE__ */ e.jsxDEV("text", { y: "250", children: i }, void 0, !1, {
                                        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /* @__PURE__ */ e.jsxDEV("text", { y: "380", children: o }, void 0, !1, {
                                        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ] }, void 0, !0, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("g", { mask: "url(#maskRight)", fill: m, className: "right", children: [
                                    /* @__PURE__ */ e.jsxDEV("text", { y: "120", children: s }, void 0, !1, {
                                        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /* @__PURE__ */ e.jsxDEV("text", { y: "250", children: i }, void 0, !1, {
                                        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /* @__PURE__ */ e.jsxDEV("text", { y: "380", children: o }, void 0, !1, {
                                        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ] }, void 0, !0, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ] }, void 0, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ] }, void 0, !0, {
                fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("style", { children: `
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
        ` }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/AnimatedText/index.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
export { g as default };
