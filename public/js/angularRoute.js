/*
 AngularJS v1.7.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (I, b) {
    'use strict'; function z(b, h) { var d = [], c = b.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function (b, c, h, k) { b = "?" === k || "*?" === k; k = "*" === k || "*?" === k; d.push({ name: h, optional: b }); c = c || ""; return (b ? "(?:" + c : c + "(?:") + (k ? "(.+?)" : "([^/]+)") + (b ? "?)?" : ")") }).replace(/([/$*])/g, "\\$1"); h.ignoreTrailingSlashes && (c = c.replace(/\/+$/, "") + "/*"); return { keys: d, regexp: new RegExp("^" + c + "(?:[?#]|$)", h.caseInsensitiveMatch ? "i" : "") } } function A(b) { p && b.get("$route") } function v(u, h, d) {
        return {
            restrict: "ECA",
            terminal: !0, priority: 400, transclude: "element", link: function (c, f, g, l, k) {
                function q() { r && (d.cancel(r), r = null); m && (m.$destroy(), m = null); s && (r = d.leave(s), r.done(function (b) { !1 !== b && (r = null) }), s = null) } function C() { var g = u.current && u.current.locals; if (b.isDefined(g && g.$template)) { var g = c.$new(), l = u.current; s = k(g, function (g) { d.enter(g, null, s || f).done(function (d) { !1 === d || !b.isDefined(w) || w && !c.$eval(w) || h() }); q() }); m = l.scope = g; m.$emit("$viewContentLoaded"); m.$eval(p) } else q() } var m, s, r, w = g.autoscroll, p = g.onload ||
                    ""; c.$on("$routeChangeSuccess", C); C()
            }
        }
    } function x(b, h, d) { return { restrict: "ECA", priority: -400, link: function (c, f) { var g = d.current, l = g.locals; f.html(l.$template); var k = b(f.contents()); if (g.controller) { l.$scope = c; var q = h(g.controller, l); g.controllerAs && (c[g.controllerAs] = q); f.data("$ngControllerController", q); f.children().data("$ngControllerController", q) } c[g.resolveAs || "$resolve"] = l; k(c) } } } var D, E, F, G, y = b.module("ngRoute", []).info({ angularVersion: "1.7.9" }).provider("$route", function () {
        function u(d,
            c) { return b.extend(Object.create(d), c) } D = b.isArray; E = b.isObject; F = b.isDefined; G = b.noop; var h = {}; this.when = function (d, c) {
                var f; f = void 0; if (D(c)) { f = f || []; for (var g = 0, l = c.length; g < l; g++)f[g] = c[g] } else if (E(c)) for (g in f = f || {}, c) if ("$" !== g.charAt(0) || "$" !== g.charAt(1)) f[g] = c[g]; f = f || c; b.isUndefined(f.reloadOnUrl) && (f.reloadOnUrl = !0); b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0); b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch); h[d] = b.extend(f, { originalPath: d },
                    d && z(d, f)); d && (g = "/" === d[d.length - 1] ? d.substr(0, d.length - 1) : d + "/", h[g] = b.extend({ originalPath: d, redirectTo: d }, z(g, f))); return this
            }; this.caseInsensitiveMatch = !1; this.otherwise = function (b) { "string" === typeof b && (b = { redirectTo: b }); this.when(null, b); return this }; p = !0; this.eagerInstantiationEnabled = function (b) { return F(b) ? (p = b, this) : p }; this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", "$browser", function (d, c, f, g, l, k, q, p) {
                function m(a) {
                    var e = t.current; n = A(); (x =
                        !B && n && e && n.$$route === e.$$route && (!n.reloadOnUrl || !n.reloadOnSearch && b.equals(n.pathParams, e.pathParams))) || !e && !n || d.$broadcast("$routeChangeStart", n, e).defaultPrevented && a && a.preventDefault()
                } function s() {
                    var a = t.current, e = n; if (x) a.params = e.params, b.copy(a.params, f), d.$broadcast("$routeUpdate", a); else if (e || a) {
                        B = !1; t.current = e; var c = g.resolve(e); p.$$incOutstandingRequestCount("$route"); c.then(r).then(w).then(function (g) {
                            return g && c.then(y).then(function (c) {
                            e === t.current && (e && (e.locals = c, b.copy(e.params,
                                f)), d.$broadcast("$routeChangeSuccess", e, a))
                            })
                        }).catch(function (b) { e === t.current && d.$broadcast("$routeChangeError", e, a, b) }).finally(function () { p.$$completeOutstandingRequest(G, "$route") })
                    }
                } function r(a) {
                    var e = { route: a, hasRedirection: !1 }; if (a) if (a.redirectTo) if (b.isString(a.redirectTo)) e.path = v(a.redirectTo, a.params), e.search = a.params, e.hasRedirection = !0; else { var d = c.path(), f = c.search(); a = a.redirectTo(a.pathParams, d, f); b.isDefined(a) && (e.url = a, e.hasRedirection = !0) } else if (a.resolveRedirectTo) return g.resolve(l.invoke(a.resolveRedirectTo)).then(function (a) {
                        b.isDefined(a) &&
                        (e.url = a, e.hasRedirection = !0); return e
                    }); return e
                } function w(a) { var b = !0; if (a.route !== t.current) b = !1; else if (a.hasRedirection) { var g = c.url(), d = a.url; d ? c.url(d).replace() : d = c.path(a.path).search(a.search).replace().url(); d !== g && (b = !1) } return b } function y(a) { if (a) { var e = b.extend({}, a.resolve); b.forEach(e, function (a, c) { e[c] = b.isString(a) ? l.get(a) : l.invoke(a, null, null, c) }); a = z(a); b.isDefined(a) && (e.$template = a); return g.all(e) } } function z(a) {
                    var e, c; b.isDefined(e = a.template) ? b.isFunction(e) && (e = e(a.params)) :
                        b.isDefined(c = a.templateUrl) && (b.isFunction(c) && (c = c(a.params)), b.isDefined(c) && (a.loadedTemplateUrl = q.valueOf(c), e = k(c))); return e
                } function A() { var a, e; b.forEach(h, function (d, g) { var f; if (f = !e) { var h = c.path(); f = d.keys; var l = {}; if (d.regexp) if (h = d.regexp.exec(h)) { for (var k = 1, p = h.length; k < p; ++k) { var m = f[k - 1], n = h[k]; m && n && (l[m.name] = n) } f = l } else f = null; else f = null; f = a = f } f && (e = u(d, { params: b.extend({}, c.search(), a), pathParams: a }), e.$$route = d) }); return e || h[null] && u(h[null], { params: {}, pathParams: {} }) } function v(a,
                    c) { var d = []; b.forEach((a || "").split(":"), function (a, b) { if (0 === b) d.push(a); else { var f = a.match(/(\w+)(?:[?*])?(.*)/), g = f[1]; d.push(c[g]); d.push(f[2] || ""); delete c[g] } }); return d.join("") } var B = !1, n, x, t = {
                        routes: h, reload: function () { B = !0; var a = { defaultPrevented: !1, preventDefault: function () { this.defaultPrevented = !0; B = !1 } }; d.$evalAsync(function () { m(a); a.defaultPrevented || s() }) }, updateParams: function (a) {
                            if (this.current && this.current.$$route) a = b.extend({}, this.current.params, a), c.path(v(this.current.$$route.originalPath,
                                a)), c.search(a); else throw H("norout");
                        }
                    }; d.$on("$locationChangeStart", m); d.$on("$locationChangeSuccess", s); return t
            }]
    }).run(A), H = b.$$minErr("ngRoute"), p; A.$inject = ["$injector"]; y.provider("$routeParams", function () { this.$get = function () { return {} } }); y.directive("ngView", v); y.directive("ngView", x); v.$inject = ["$route", "$anchorScroll", "$animate"]; x.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map