function n(n) {
    return n.count++;
}
function t() {
    var u = arguments[0];
    var o = n(u);
    return (t.amount = u.count), o;
}
var u = {
    count: 0
};
var o = t(u);
console.log(t.amount, o);
