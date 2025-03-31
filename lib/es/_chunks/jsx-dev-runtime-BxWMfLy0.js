const Rr = __PAGES_KIT_BUILTIN_MODULES__.require("@blocklet/pages-kit/builtin/react").default;
function Tr(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Fe = { exports: {} }, c = Fe.exports = {}, y, b;
function re() {
    throw new Error("setTimeout has not been defined");
}
function te() {
    throw new Error("clearTimeout has not been defined");
}
(function () {
    try {
        typeof setTimeout == "function" ? y = setTimeout : y = re;
    }
    catch (_a) {
        y = re;
    }
    try {
        typeof clearTimeout == "function" ? b = clearTimeout : b = te;
    }
    catch (_b) {
        b = te;
    }
})();
function Ie(o) {
    if (y === setTimeout)
        return setTimeout(o, 0);
    if ((y === re || !y) && setTimeout)
        return y = setTimeout, setTimeout(o, 0);
    try {
        return y(o, 0);
    }
    catch (_a) {
        try {
            return y.call(null, o, 0);
        }
        catch (_b) {
            return y.call(this, o, 0);
        }
    }
}
function _r(o) {
    if (b === clearTimeout)
        return clearTimeout(o);
    if ((b === te || !b) && clearTimeout)
        return b = clearTimeout, clearTimeout(o);
    try {
        return b(o);
    }
    catch (_a) {
        try {
            return b.call(null, o);
        }
        catch (_b) {
            return b.call(this, o);
        }
    }
}
var E = [], j = !1, C, U = -1;
function wr() {
    !j || !C || (j = !1, C.length ? E = C.concat(E) : U = -1, E.length && $e());
}
function $e() {
    if (!j) {
        var o = Ie(wr);
        j = !0;
        for (var p = E.length; p;) {
            for (C = E, E = []; ++U < p;)
                C && C[U].run();
            U = -1, p = E.length;
        }
        C = null, j = !1, _r(o);
    }
}
c.nextTick = function (o) {
    var p = new Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var T = 1; T < arguments.length; T++)
            p[T - 1] = arguments[T];
    E.push(new We(o, p)), E.length === 1 && !j && Ie($e);
};
function We(o, p) {
    this.fun = o, this.array = p;
}
We.prototype.run = function () {
    this.fun.apply(null, this.array);
};
c.title = "browser";
c.browser = !0;
c.env = {};
c.argv = [];
c.version = "";
c.versions = {};
function R() {
}
c.on = R;
c.addListener = R;
c.once = R;
c.off = R;
c.removeListener = R;
c.removeAllListeners = R;
c.emit = R;
c.prependListener = R;
c.prependOnceListener = R;
c.listeners = function (o) {
    return [];
};
c.binding = function (o) {
    throw new Error("process.binding is not supported");
};
c.cwd = function () {
    return "/";
};
c.chdir = function (o) {
    throw new Error("process.chdir is not supported");
};
c.umask = function () {
    return 0;
};
var Cr = Fe.exports;
const Ye = /* @__PURE__ */ Tr(Cr);
var ne = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Or() {
    if (ke)
        return V;
    ke = 1;
    var o = Symbol.for("react.fragment");
    return V.Fragment = o, V.jsxDEV = void 0, V;
}
var M = {}, Ae;
function Sr() {
    return Ae || (Ae = 1, Ye.env.NODE_ENV !== "production" && function () {
        var o = Rr, p = Symbol.for("react.element"), T = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), ue = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Le = Symbol.for("react.offscreen"), se = Symbol.iterator, Ve = "@@iterator";
        function Me(e) {
            if (e === null || typeof e != "object")
                return null;
            var r = se && e[se] || e[Ve];
            return typeof r == "function" ? r : null;
        }
        var O = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function v(e) {
            {
                for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                    t[n - 1] = arguments[n];
                Ue("error", e, t);
            }
        }
        function Ue(e, r, t) {
            {
                var n = O.ReactDebugCurrentFrame, u = n.getStackAddendum();
                u !== "" && (r += "%s", t = t.concat([u]));
                var s = t.map(function (i) {
                    return String(i);
                });
                s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
            }
        }
        var Ne = !1, qe = !1, Je = !1, Be = !1, Ke = !1, le;
        le = Symbol.for("react.module.reference");
        function Ge(e) {
            return !!(typeof e == "string" || typeof e == "function" || e === A || e === ie || Ke || e === ae || e === N || e === q || Be || e === Le || Ne || qe || Je || typeof e == "object" && e !== null && (e.$$typeof === J || e.$$typeof === I || e.$$typeof === oe || e.$$typeof === ue || e.$$typeof === F || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                e.$$typeof === le || e.getModuleId !== void 0));
        }
        function ze(e, r, t) {
            var n = e.displayName;
            if (n)
                return n;
            var u = r.displayName || r.name || "";
            return u !== "" ? t + "(" + u + ")" : t;
        }
        function ce(e) {
            return e.displayName || "Context";
        }
        function m(e) {
            if (e == null)
                return null;
            if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
                return e.displayName || e.name || null;
            if (typeof e == "string")
                return e;
            switch (e) {
                case A:
                    return "Fragment";
                case T:
                    return "Portal";
                case ie:
                    return "Profiler";
                case ae:
                    return "StrictMode";
                case N:
                    return "Suspense";
                case q:
                    return "SuspenseList";
            }
            if (typeof e == "object")
                switch (e.$$typeof) {
                    case ue:
                        var r = e;
                        return ce(r) + ".Consumer";
                    case oe:
                        var t = e;
                        return ce(t._context) + ".Provider";
                    case F:
                        return ze(e, e.render, "ForwardRef");
                    case I:
                        var n = e.displayName || null;
                        return n !== null ? n : m(e.type) || "Memo";
                    case J: {
                        var u = e, s = u._payload, i = u._init;
                        try {
                            return m(i(s));
                        }
                        catch (_a) {
                            return null;
                        }
                    }
                }
            return null;
        }
        var _ = Object.assign, x = 0, fe, ve, de, pe, he, ge, me;
        function ye() {
        }
        ye.__reactDisabledLog = !0;
        function Xe() {
            {
                if (x === 0) {
                    fe = console.log, ve = console.info, de = console.warn, pe = console.error, he = console.group, ge = console.groupCollapsed, me = console.groupEnd;
                    var e = {
                        configurable: !0,
                        enumerable: !0,
                        value: ye,
                        writable: !0
                    };
                    Object.defineProperties(console, {
                        info: e,
                        log: e,
                        warn: e,
                        error: e,
                        group: e,
                        groupCollapsed: e,
                        groupEnd: e
                    });
                }
                x++;
            }
        }
        function He() {
            {
                if (x--, x === 0) {
                    var e = {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0
                    };
                    Object.defineProperties(console, {
                        log: _({}, e, {
                            value: fe
                        }),
                        info: _({}, e, {
                            value: ve
                        }),
                        warn: _({}, e, {
                            value: de
                        }),
                        error: _({}, e, {
                            value: pe
                        }),
                        group: _({}, e, {
                            value: he
                        }),
                        groupCollapsed: _({}, e, {
                            value: ge
                        }),
                        groupEnd: _({}, e, {
                            value: me
                        })
                    });
                }
                x < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
        }
        var B = O.ReactCurrentDispatcher, K;
        function $(e, r, t) {
            {
                if (K === void 0)
                    try {
                        throw Error();
                    }
                    catch (u) {
                        var n = u.stack.trim().match(/\n( *(at )?)/);
                        K = n && n[1] || "";
                    }
                return `
` + K + e;
            }
        }
        var G = !1, W;
        {
            var Qe = typeof WeakMap == "function" ? WeakMap : Map;
            W = new Qe();
        }
        function be(e, r) {
            if (!e || G)
                return "";
            {
                var t = W.get(e);
                if (t !== void 0)
                    return t;
            }
            var n;
            G = !0;
            var u = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var s;
            s = B.current, B.current = null, Xe();
            try {
                if (r) {
                    var i = function () {
                        throw Error();
                    };
                    if (Object.defineProperty(i.prototype, "props", {
                        set: function () {
                            throw Error();
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                        try {
                            Reflect.construct(i, []);
                        }
                        catch (h) {
                            n = h;
                        }
                        Reflect.construct(e, [], i);
                    }
                    else {
                        try {
                            i.call();
                        }
                        catch (h) {
                            n = h;
                        }
                        e.call(i.prototype);
                    }
                }
                else {
                    try {
                        throw Error();
                    }
                    catch (h) {
                        n = h;
                    }
                    e();
                }
            }
            catch (h) {
                if (h && n && typeof h.stack == "string") {
                    for (var a = h.stack.split(`
`), d = n.stack.split(`
`), l = a.length - 1, f = d.length - 1; l >= 1 && f >= 0 && a[l] !== d[f];)
                        f--;
                    for (; l >= 1 && f >= 0; l--, f--)
                        if (a[l] !== d[f]) {
                            if (l !== 1 || f !== 1)
                                do
                                    if (l--, f--, f < 0 || a[l] !== d[f]) {
                                        var g = `
` + a[l].replace(" at new ", " at ");
                                        return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, g), g;
                                    }
                                while (l >= 1 && f >= 0);
                            break;
                        }
                }
            }
            finally {
                G = !1, B.current = s, He(), Error.prepareStackTrace = u;
            }
            var P = e ? e.displayName || e.name : "", w = P ? $(P) : "";
            return typeof e == "function" && W.set(e, w), w;
        }
        function Ze(e, r, t) {
            return be(e, !1);
        }
        function er(e) {
            var r = e.prototype;
            return !!(r && r.isReactComponent);
        }
        function Y(e, r, t) {
            if (e == null)
                return "";
            if (typeof e == "function")
                return be(e, er(e));
            if (typeof e == "string")
                return $(e);
            switch (e) {
                case N:
                    return $("Suspense");
                case q:
                    return $("SuspenseList");
            }
            if (typeof e == "object")
                switch (e.$$typeof) {
                    case F:
                        return Ze(e.render);
                    case I:
                        return Y(e.type, r, t);
                    case J: {
                        var n = e, u = n._payload, s = n._init;
                        try {
                            return Y(s(u), r, t);
                        }
                        catch (_a) {
                        }
                    }
                }
            return "";
        }
        var D = Object.prototype.hasOwnProperty, Ee = {}, Re = O.ReactDebugCurrentFrame;
        function L(e) {
            if (e) {
                var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
                Re.setExtraStackFrame(t);
            }
            else
                Re.setExtraStackFrame(null);
        }
        function rr(e, r, t, n, u) {
            {
                var s = Function.call.bind(D);
                for (var i in e)
                    if (s(e, i)) {
                        var a = void 0;
                        try {
                            if (typeof e[i] != "function") {
                                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                throw d.name = "Invariant Violation", d;
                            }
                            a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                        }
                        catch (l) {
                            a = l;
                        }
                        a && !(a instanceof Error) && (L(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), L(null)), a instanceof Error && !(a.message in Ee) && (Ee[a.message] = !0, L(u), v("Failed %s type: %s", t, a.message), L(null));
                    }
            }
        }
        var tr = Array.isArray;
        function z(e) {
            return tr(e);
        }
        function nr(e) {
            {
                var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
                return t;
            }
        }
        function ar(e) {
            try {
                return Te(e), !1;
            }
            catch (_a) {
                return !0;
            }
        }
        function Te(e) {
            return "" + e;
        }
        function _e(e) {
            if (ar(e))
                return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), Te(e);
        }
        var k = O.ReactCurrentOwner, ir = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        }, we, Ce, X;
        X = {};
        function or(e) {
            if (D.call(e, "ref")) {
                var r = Object.getOwnPropertyDescriptor(e, "ref").get;
                if (r && r.isReactWarning)
                    return !1;
            }
            return e.ref !== void 0;
        }
        function ur(e) {
            if (D.call(e, "key")) {
                var r = Object.getOwnPropertyDescriptor(e, "key").get;
                if (r && r.isReactWarning)
                    return !1;
            }
            return e.key !== void 0;
        }
        function sr(e, r) {
            if (typeof e.ref == "string" && k.current && r && k.current.stateNode !== r) {
                var t = m(k.current.type);
                X[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(k.current.type), e.ref), X[t] = !0);
            }
        }
        function lr(e, r) {
            {
                var t = function () {
                    we || (we = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
                };
                t.isReactWarning = !0, Object.defineProperty(e, "key", {
                    get: t,
                    configurable: !0
                });
            }
        }
        function cr(e, r) {
            {
                var t = function () {
                    Ce || (Ce = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
                };
                t.isReactWarning = !0, Object.defineProperty(e, "ref", {
                    get: t,
                    configurable: !0
                });
            }
        }
        var fr = function (e, r, t, n, u, s, i) {
            var a = {
                // This tag allows us to uniquely identify this as a React Element
                $$typeof: p,
                // Built-in properties that belong on the element
                type: e,
                key: r,
                ref: t,
                props: i,
                // Record the component responsible for creating this element.
                _owner: s
            };
            return a._store = {}, Object.defineProperty(a._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1
            }), Object.defineProperty(a, "_self", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: n
            }), Object.defineProperty(a, "_source", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: u
            }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
        };
        function vr(e, r, t, n, u) {
            {
                var s, i = {}, a = null, d = null;
                t !== void 0 && (_e(t), a = "" + t), ur(r) && (_e(r.key), a = "" + r.key), or(r) && (d = r.ref, sr(r, u));
                for (s in r)
                    D.call(r, s) && !ir.hasOwnProperty(s) && (i[s] = r[s]);
                if (e && e.defaultProps) {
                    var l = e.defaultProps;
                    for (s in l)
                        i[s] === void 0 && (i[s] = l[s]);
                }
                if (a || d) {
                    var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
                    a && lr(i, f), d && cr(i, f);
                }
                return fr(e, a, d, u, n, k.current, i);
            }
        }
        var H = O.ReactCurrentOwner, Oe = O.ReactDebugCurrentFrame;
        function S(e) {
            if (e) {
                var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
                Oe.setExtraStackFrame(t);
            }
            else
                Oe.setExtraStackFrame(null);
        }
        var Q;
        Q = !1;
        function Z(e) {
            return typeof e == "object" && e !== null && e.$$typeof === p;
        }
        function Se() {
            {
                if (H.current) {
                    var e = m(H.current.type);
                    if (e)
                        return `

Check the render method of \`` + e + "`.";
                }
                return "";
            }
        }
        function dr(e) {
            {
                if (e !== void 0) {
                    var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
                    return `

Check your code at ` + r + ":" + t + ".";
                }
                return "";
            }
        }
        var Pe = {};
        function pr(e) {
            {
                var r = Se();
                if (!r) {
                    var t = typeof e == "string" ? e : e.displayName || e.name;
                    t && (r = `

Check the top-level render call using <` + t + ">.");
                }
                return r;
            }
        }
        function je(e, r) {
            {
                if (!e._store || e._store.validated || e.key != null)
                    return;
                e._store.validated = !0;
                var t = pr(r);
                if (Pe[t])
                    return;
                Pe[t] = !0;
                var n = "";
                e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + m(e._owner.type) + "."), S(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), S(null);
            }
        }
        function xe(e, r) {
            {
                if (typeof e != "object")
                    return;
                if (z(e))
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        Z(n) && je(n, r);
                    }
                else if (Z(e))
                    e._store && (e._store.validated = !0);
                else if (e) {
                    var u = Me(e);
                    if (typeof u == "function" && u !== e.entries)
                        for (var s = u.call(e), i; !(i = s.next()).done;)
                            Z(i.value) && je(i.value, r);
                }
            }
        }
        function hr(e) {
            {
                var r = e.type;
                if (r == null || typeof r == "string")
                    return;
                var t;
                if (typeof r == "function")
                    t = r.propTypes;
                else if (typeof r == "object" && (r.$$typeof === F || // Note: Memo only checks outer props here.
                    // Inner props are checked in the reconciler.
                    r.$$typeof === I))
                    t = r.propTypes;
                else
                    return;
                if (t) {
                    var n = m(r);
                    rr(t, e.props, "prop", n, e);
                }
                else if (r.PropTypes !== void 0 && !Q) {
                    Q = !0;
                    var u = m(r);
                    v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
                }
                typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
        }
        function gr(e) {
            {
                for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
                    var n = r[t];
                    if (n !== "children" && n !== "key") {
                        S(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), S(null);
                        break;
                    }
                }
                e.ref !== null && (S(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
            }
        }
        var De = {};
        function mr(e, r, t, n, u, s) {
            {
                var i = Ge(e);
                if (!i) {
                    var a = "";
                    (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                    var d = dr(u);
                    d ? a += d : a += Se();
                    var l;
                    e === null ? l = "null" : z(e) ? l = "array" : e !== void 0 && e.$$typeof === p ? (l = "<" + (m(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
                }
                var f = vr(e, r, t, u, s);
                if (f == null)
                    return f;
                if (i) {
                    var g = r.children;
                    if (g !== void 0)
                        if (n)
                            if (z(g)) {
                                for (var P = 0; P < g.length; P++)
                                    xe(g[P], e);
                                Object.freeze && Object.freeze(g);
                            }
                            else
                                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                        else
                            xe(g, e);
                }
                if (D.call(r, "key")) {
                    var w = m(e), h = Object.keys(r).filter(function (Er) {
                        return Er !== "key";
                    }), ee = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
                    if (!De[w + ee]) {
                        var br = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
                        v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, w, br, w), De[w + ee] = !0;
                    }
                }
                return e === A ? gr(f) : hr(f), f;
            }
        }
        var yr = mr;
        M.Fragment = A, M.jsxDEV = yr;
    }()), M;
}
Ye.env.NODE_ENV === "production" ? ne.exports = Or() : ne.exports = Sr();
var jr = ne.exports;
export { jr as j };
