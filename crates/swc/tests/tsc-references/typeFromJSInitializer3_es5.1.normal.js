// @allowJs: true
// @checkJs: true
// @noEmit: true
// @strictNullChecks: false
// @noImplicitAny: true
// @Filename: a.js
/** @type {() => undefined} */ function f1() {
    return undefined;
}
var a = f1();
/** @type {() => null} */ function f2() {
    return null;
}
var b = f2();
