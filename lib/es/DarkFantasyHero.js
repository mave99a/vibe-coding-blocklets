const e = (await __PAGES_KIT_BUILTIN_MODULES__.require("./_chunks/jsx-dev-runtime-BxWMfLy0.js")).j;
const x = "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)";
function h({ title: o = "WLW ADULT ANIMATION SHORT", subtitle: a = "SET IN A DARK FANTASY PHILIPPINES", studioName: n = "A FILM BY STUDIO HEARTBREAK", description: s = "45 SECONDS OF PURE ANIMATION TO SHOW YOU WHAT OUR TEAM IS CAPABLE OF!", youtubeUrl: i = { url: "https://www.youtube.com/watch?v=example", mediaKitUrl: "https://www.youtube.com/watch?v=example" }, backgroundImage: l = {
    url: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2942&auto=format&fit=crop",
    mediaKitUrl: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2942&auto=format&fit=crop"
} }) {
    const c = {
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        overflow: "hidden",
        background: `${x}, url(${l.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        padding: "2rem"
    }, m = {
        fontSize: "clamp(2rem, 5vw, 4rem)",
        fontWeight: "bold",
        letterSpacing: "0.2em",
        marginBottom: "1rem",
        textTransform: "uppercase",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
    }, p = {
        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
        color: "#ff4444",
        marginBottom: "2rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
    }, u = {
        fontSize: "clamp(1rem, 2vw, 1.5rem)",
        opacity: 0.9,
        marginBottom: "3rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase"
    }, d = {
        fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
        maxWidth: "600px",
        marginBottom: "2rem",
        lineHeight: 1.6,
        opacity: 0.8
    }, r = {
        padding: "1rem 2rem",
        fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
        backgroundColor: "#00ff9d",
        color: "#000",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        transition: "all 0.3s ease",
        textDecoration: "none",
        display: "inline-block"
    }, b = {
        backgroundColor: "#00cc7d",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0,255,157,0.3)"
    };
    return /* @__PURE__ */ e.jsxDEV("div", { style: c, children: [
            /* @__PURE__ */ e.jsxDEV("h1", { style: m, children: o }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/DarkFantasyHero/index.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("h2", { style: p, children: a }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/DarkFantasyHero/index.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("p", { style: u, children: n }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/DarkFantasyHero/index.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("p", { style: d, children: s }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/DarkFantasyHero/index.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /* @__PURE__ */ e.jsxDEV("a", {
                href: i.url,
                target: "_blank",
                rel: "noopener noreferrer",
                style: r,
                onMouseOver: (t) => {
                    Object.assign(t.currentTarget.style, b);
                },
                onMouseOut: (t) => {
                    Object.assign(t.currentTarget.style, r);
                },
                children: "WATCH ON YOUTUBE"
            }, void 0, !1, {
                fileName: "/Users/robmao/work/arcblock/test project/src/DarkFantasyHero/index.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ] }, void 0, !0, {
        fileName: "/Users/robmao/work/arcblock/test project/src/DarkFantasyHero/index.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
export { h as default };
