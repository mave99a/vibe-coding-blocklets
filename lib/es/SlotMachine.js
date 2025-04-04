const e = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const u = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useState;
const m = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useRef;
const M = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").useEffect;
const S = {
    leverPull: "https://assets.mixkit.co/sfx/preview/mixkit-plastic-bubble-click-1124.mp3",
    spinning: "https://assets.mixkit.co/sfx/preview/mixkit-roulette-spin-1924.mp3",
    reelStop: "https://assets.mixkit.co/sfx/preview/mixkit-game-ball-tap-2073.mp3",
    win: "https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3",
    jackpot: "https://assets.mixkit.co/sfx/preview/mixkit-casino-reward-1980.mp3",
    insertCoin: "https://freesound.org/data/previews/276/276091_5123851-lq.mp3",
    lockReel: "https://freesound.org/data/previews/56/56246_91374-lq.mp3"
}, ce = {
    en: {
        spinButton: "Spin (Space)",
        spinning: "Spinning...",
        takeWinButton: "Take Win (W)",
        credits: "Credits",
        totalSpent: "Total Spent:",
        win: "Win",
        reelLockTip: "Tip: Click on reels or press number keys (1,2,3...) to lock a reel",
        winningRule: "Winning rule: Win when all symbols in a row match",
        muteSoundTitle: "Mute Sound",
        enableSoundTitle: "Enable Sound",
        pullToSpin: "Pull to spin",
        addCredit: "Add Credit (C)"
    },
    zh: {
        spinButton: "旋转 (空格键)",
        spinning: "旋转中...",
        takeWinButton: "收取奖励 (W键)",
        credits: "筹码",
        totalSpent: "总消费:",
        win: "赢取",
        reelLockTip: "提示: 点击转轮或按下对应数字键 (1,2,3...) 可以锁定该转轮",
        winningRule: "中奖规则: 一行中所有图案相同时中奖",
        muteSoundTitle: "关闭声音",
        enableSoundTitle: "开启声音",
        pullToSpin: "拉动旋转",
        addCredit: "添加筹码 (C键)"
    }
}, Re = [
    {
        symbol: "🍒",
        weight: 10,
        image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Cherry-512.png"
    },
    {
        symbol: "🍊",
        weight: 8,
        image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Orange-512.png"
    },
    {
        symbol: "🍋",
        weight: 8,
        image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Lemon-512.png"
    },
    {
        symbol: "🍇",
        weight: 6,
        image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Grapes-512.png"
    },
    {
        symbol: "🍉",
        weight: 5,
        image: "https://cdn4.iconfinder.com/data/icons/slot-machines/512/Watermelon-512.png"
    },
    {
        symbol: "🍓",
        weight: 4,
        image: "https://cdn4.iconfinder.com/data/icons/fruits-and-berries-4/154/strawberry-berry-fruit-512.png"
    },
    {
        symbol: "🥝",
        weight: 3,
        image: "https://cdn4.iconfinder.com/data/icons/fruits-and-berries-4/128/kiwi-fruit-healthy-diet-512.png"
    },
    {
        symbol: "💎",
        weight: 2,
        image: "https://cdn2.iconfinder.com/data/icons/gambling-44/64/16_diamond_gambling_casino_game_gaming-512.png"
    },
    {
        symbol: "7️⃣",
        weight: 1,
        image: "https://cdn2.iconfinder.com/data/icons/casino-gambling-14/512/Number_Seven_7-512.png"
    }
], Ue = [
    { symbol: "🍒", multiplier: 2 },
    { symbol: "🍊", multiplier: 3 },
    { symbol: "🍋", multiplier: 3 },
    { symbol: "🍇", multiplier: 5 },
    { symbol: "🍉", multiplier: 7 },
    { symbol: "🍓", multiplier: 10 },
    { symbol: "🥝", multiplier: 15 },
    { symbol: "💎", multiplier: 30 },
    { symbol: "7️⃣", multiplier: 50 }
], ae = (r) => {
    const g = r.reduce((a, l) => a + (l.weight || 1), 0);
    let f = Math.random() * g;
    for (const a of r)
        if (f -= a.weight || 1, f <= 0)
            return a;
    return r[0] || { symbol: "🎰" };
}, w = (r, g) => {
    g && r.current && (r.current.currentTime = 0, r.current.play().catch((f) => {
        console.warn("Unable to play audio:", f);
    }));
}, Ve = ({ symbols: r, spinning: g, spinDuration: f, reelIndex: a, symbolSize: l, locked: v, toggleLock: O, allowLock: R, useImages: W, onSpinComplete: U, soundEnabled: P, spinReelStopAudioRef: D }) => {
    const [p, V] = u([]), [k, z] = u(0), h = m(null), i = m(null), c = m(0), d = m(null);
    M(() => {
        const n = [];
        for (let N = 0; N < 5; N++) {
            const j = ae(r.length > 0 ? r : [{ symbol: "🎰", weight: 1 }]);
            n.push(j);
        }
        V(n);
    }, [r]), M(() => {
        if (g && !v) {
            T();
            const n = f + a * 600;
            i.current = setTimeout(() => {
                B();
            }, n);
        }
        return () => {
            h.current && cancelAnimationFrame(h.current), i.current && clearTimeout(i.current);
        };
    }, [g, v, a, f]);
    const T = () => {
        c.current = 0;
        const n = () => {
            c.current % 4 === 0 && V((N) => {
                const j = [...N];
                return j.unshift(ae(r.length > 0 ? r : [{ symbol: "🎰", weight: 1 }])), j.pop(), j;
            }), c.current++, h.current = requestAnimationFrame(n);
        };
        h.current = requestAnimationFrame(n);
    }, B = () => {
        h.current && (cancelAnimationFrame(h.current), h.current = null), w(D, P), p.length >= 3 && p[2] ? U(p[2]) : U({ symbol: "🎰", weight: 1 });
    };
    return /* @__PURE__ */ e.jsxDEV("div", {
        ref: d,
        style: {
            width: `${l}px`,
            height: `${l * 3}px`,
            backgroundColor: "#f8f9fa",
            borderRadius: "5px",
            overflow: "hidden",
            position: "relative",
            opacity: v ? 0.8 : 1,
            transition: "opacity 0.3s",
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
            cursor: R ? "pointer" : "default"
        },
        onClick: () => R && O(),
        children: [
            v && /* @__PURE__ */ e.jsxDEV("div", { style: {
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    zIndex: 10,
                    fontSize: "16px"
                }, children: "🔒" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 347,
                columnNumber: 9
            }, void 0),
            /* @__PURE__ */ e.jsxDEV("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.05s ease-in-out"
                }, children: p.map((n, N) => /* @__PURE__ */ e.jsxDEV("div", {
                    style: {
                        height: `${l}px`,
                        width: `${l}px`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: `${l * 0.6}px`,
                        backgroundColor: "transparent",
                        transition: "background-color 0.3s"
                    },
                    children: W && n.image ? /* @__PURE__ */ e.jsxDEV("img", {
                        src: n.image,
                        alt: n.symbol,
                        style: {
                            width: `${l * 0.8}px`,
                            height: `${l * 0.8}px`,
                            objectFit: "contain"
                        }
                    }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 377,
                        columnNumber: 15
                    }, void 0) : /* @__PURE__ */ e.jsxDEV("span", { children: n.symbol }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 387,
                        columnNumber: 15
                    }, void 0)
                }, `${a}-${N}-${n.symbol}`, !1, {
                    fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                    lineNumber: 363,
                    columnNumber: 11
                }, void 0)) }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, void 0)
        ]
    }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, void 0);
};
function Ie({ title: r = "Slot Machine", reelCount: g = 3, spinSpeed: f = 300, autoSpin: a = !1, symbolSize: l = 80, machineColor: v = "#e74c3c", reelColor: O = "#f8f9fa", leverColor: R = "#f1c40f", symbols: W = Re, payouts: U = Ue, winProbability: P = 10, 
// Default 1/10 chance (10%)
soundEnabled: D = !0, allowReelLock: p = !0, initialCredits: V = 10, spinCost: k = 1, useImages: z = !1, locale: h = "en" }) {
    const i = ce[h] || ce.en, c = Math.min(Math.max(g, 3), 5), [d, T] = u(!1), [B, n] = u(Array(c).fill(!1)), [N, j] = u([]), [E, _] = u(V), [C, I] = u(0), [de, ue] = u(0), [Te, $] = u(!1), [b, q] = u(D), [Ae, K] = u(Array(c).fill(null)), G = m(null), X = m(null), Y = m(null), Z = m(null), H = m(null), J = m(null), Q = m(null);
    M(() => {
        const t = (o) => {
            if (o.code === "Space" && (o.preventDefault(), A()), p && o.code.startsWith("Digit")) {
                const s = parseInt(o.code.slice(-1)) - 1;
                s >= 0 && s < c && ee(s);
            }
            o.code === "KeyC" && te(), o.code === "KeyW" && oe();
        };
        return window.addEventListener("keydown", t), () => {
            window.addEventListener("keydown", t);
        };
    }, [p, d, c, C]), M(() => {
        q(D);
    }, [D]), M(() => {
        let t;
        return a && !d && E >= k && (t = setTimeout(() => {
            A();
        }, 3e3)), () => {
            t && clearTimeout(t);
        };
    }, [a, d, E, k]);
    const A = () => {
        d || E < k || (_((t) => t - k), ue((t) => t + k), $(!1), I(0), T(!0), K(Array(c).fill(null)), w(G, b), setTimeout(() => {
            w(X, b);
        }, 300));
    }, me = (t, o) => {
        K((s) => {
            const x = [...s];
            if (x[t] = o, x.every((y) => y !== null)) {
                const y = x.filter((F) => F !== null);
                y.length === c && pe(y), T(!1);
            }
            return x;
        });
    }, pe = (t) => {
        const o = t.map((x) => x.symbol);
        if (o.every((x) => x === o[0])) {
            const x = o[0], L = U.find((Me) => Me.symbol === x), y = L && L.multiplier || 1, F = k * y;
            $(!0), I(F), y >= 30 ? w(H, b) : w(Z, b);
        }
    }, ee = (t) => {
        !p || d || n((o) => {
            const s = [...o];
            return s[t] = !s[t], s[t] && w(Q, b), s;
        });
    }, te = () => {
        w(J, b), _((t) => t + 1);
    }, oe = () => {
        C > 0 && (_((t) => t + C), I(0), $(!1));
    }, be = () => {
        q(!b);
    }, xe = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        maxWidth: `${c * (l + 20) + 100}px`,
        margin: "0 auto"
    }, fe = {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#333"
    }, he = {
        backgroundColor: v,
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        display: "flex",
        position: "relative"
    }, ge = {
        display: "flex",
        background: "#333",
        borderRadius: "10px",
        padding: "15px",
        gap: "10px",
        position: "relative"
    }, ke = {
        position: "absolute",
        top: "50%",
        height: "2px",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        zIndex: 5
    }, Ne = {
        position: "absolute",
        right: "-60px",
        top: "50%",
        transform: "translateY(-50%)",
        height: "120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }, ye = {
        width: "30px",
        height: "20px",
        backgroundColor: "#888",
        borderRadius: "5px"
    }, Se = {
        width: "15px",
        height: "80px",
        backgroundColor: R,
        borderRadius: "10px",
        cursor: "pointer",
        transform: d ? "rotate(20deg)" : "rotate(0deg)",
        transformOrigin: "top center",
        transition: "transform 0.2s"
    }, we = {
        width: "25px",
        height: "25px",
        backgroundColor: "#d35400",
        borderRadius: "50%"
    }, ve = {
        marginTop: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#000",
        padding: "10px",
        borderRadius: "5px"
    }, ie = {
        display: "flex",
        flexDirection: "column",
        flex: 1
    }, re = {
        fontSize: "12px",
        color: "#999"
    }, ne = (t) => ({
        padding: "5px 10px",
        backgroundColor: t ? "rgba(255, 0, 0, 0.15)" : "rgba(0, 0, 0, 0.3)",
        borderRadius: "3px",
        fontSize: "20px",
        textAlign: "right",
        color: t ? "#ff5555" : "#55ff55",
        marginTop: "5px"
    }), je = {
        fontSize: "10px",
        color: "#666",
        textAlign: "right",
        marginTop: "3px"
    }, Ce = {
        marginTop: "15px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#222",
        borderRadius: "5px"
    }, se = (t, o) => ({
        padding: "10px 15px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        backgroundColor: t ? o ? "rgba(255, 0, 0, 0.9)" : "rgba(255, 0, 0, 0.4)" : "rgba(0, 255, 0, 0.4)",
        color: "#fff",
        boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2s"
    }), De = {
        width: "30px",
        height: "50px",
        backgroundColor: "#555",
        borderRadius: "5px",
        border: "2px solid #777",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px"
    }, Ee = {
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.3)",
        cursor: "pointer",
        fontSize: "18px",
        border: "none",
        outline: "none",
        color: "#333"
    }, le = {
        marginTop: "15px",
        fontSize: "12px",
        color: "#777",
        textAlign: "center"
    };
    return /* @__PURE__ */ e.jsxDEV("div", { style: xe, children: [
            /* @__PURE__ */ e.jsxDEV("div", { style: fe, children: r }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 789,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("div", { style: he, children: [
                    /* @__PURE__ */ e.jsxDEV("button", {
                        style: Ee,
                        onClick: be,
                        title: b ? i.muteSoundTitle : i.enableSoundTitle,
                        children: b ? "🔊" : "🔇"
                    }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 792,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ e.jsxDEV("div", { style: ge, children: [
                            /* @__PURE__ */ e.jsxDEV("div", { style: ke }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 801,
                                columnNumber: 11
                            }, this),
                            Array.from({ length: c }).map((t, o) => /* @__PURE__ */ e.jsxDEV(Ve, {
                                symbols: W,
                                spinning: d,
                                spinDuration: f * 10,
                                reelIndex: o,
                                symbolSize: l,
                                locked: B[o],
                                toggleLock: () => ee(o),
                                allowLock: p,
                                useImages: z,
                                onSpinComplete: (s) => me(o, s),
                                soundEnabled: b,
                                spinReelStopAudioRef: Y
                            }, o, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 804,
                                columnNumber: 13
                            }, this))
                        ] }, void 0, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 800,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ e.jsxDEV("div", { style: Ne, children: [
                            /* @__PURE__ */ e.jsxDEV("div", { style: ye }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 823,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("div", {
                                style: Se,
                                onClick: A,
                                title: i.pullToSpin
                            }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 824,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("div", { style: we }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 829,
                                columnNumber: 11
                            }, this)
                        ] }, void 0, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 822,
                        columnNumber: 9
                    }, this)
                ] }, void 0, !0, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 791,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("div", { style: ve, children: [
                    /* @__PURE__ */ e.jsxDEV("div", { style: De, onClick: te, title: i.addCredit, children: "💰" }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ e.jsxDEV("div", { style: ie, children: [
                            /* @__PURE__ */ e.jsxDEV("div", { style: re, children: i.credits }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 839,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("div", { style: ne(!1), children: E.toFixed(1) }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 840,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("div", { style: je, children: [
                                    i.totalSpent,
                                    " ",
                                    de.toFixed(1)
                                ] }, void 0, !0, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 843,
                                columnNumber: 11
                            }, this)
                        ] }, void 0, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 838,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ e.jsxDEV("div", { style: ie, children: [
                            /* @__PURE__ */ e.jsxDEV("div", { style: re, children: i.win }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 849,
                                columnNumber: 11
                            }, this),
                            /* @__PURE__ */ e.jsxDEV("div", { style: ne(!0), children: C.toFixed(1) }, void 0, !1, {
                                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                                lineNumber: 850,
                                columnNumber: 11
                            }, this)
                        ] }, void 0, !0, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 848,
                        columnNumber: 9
                    }, this)
                ] }, void 0, !0, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 833,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("div", { style: Ce, children: [
                    /* @__PURE__ */ e.jsxDEV("button", {
                        style: se(!1, !1),
                        onClick: A,
                        disabled: d || E < k,
                        children: d ? i.spinning : i.spinButton
                    }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 857,
                        columnNumber: 9
                    }, this),
                    /* @__PURE__ */ e.jsxDEV("button", {
                        style: se(!0, C > 0),
                        onClick: oe,
                        disabled: C <= 0,
                        children: i.takeWinButton
                    }, void 0, !1, {
                        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                        lineNumber: 865,
                        columnNumber: 9
                    }, this)
                ] }, void 0, !0, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 856,
                columnNumber: 7
            }, this),
            p && /* @__PURE__ */ e.jsxDEV("div", { style: le, children: i.reelLockTip }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 875,
                columnNumber: 9
            }, this),
            /* @__PURE__ */ e.jsxDEV("div", { style: le, children: i.winningRule }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 880,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("audio", { ref: G, src: S.leverPull, preload: "auto" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 885,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("audio", { ref: X, src: S.spinning, preload: "auto" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 886,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("audio", { ref: Y, src: S.reelStop, preload: "auto" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 887,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("audio", { ref: Z, src: S.win, preload: "auto" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 888,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("audio", { ref: H, src: S.jackpot, preload: "auto" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 889,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("audio", { ref: J, src: S.insertCoin, preload: "auto" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 890,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("audio", { ref: Q, src: S.lockReel, preload: "auto" }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
                lineNumber: 891,
                columnNumber: 7
            }, this)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/SlotMachine/index.tsx",
        lineNumber: 788,
        columnNumber: 5
    }, this);
}
export { Ie as default };
