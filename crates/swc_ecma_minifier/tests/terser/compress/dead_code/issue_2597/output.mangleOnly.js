function r(r) {
    try {
        try {
            throw "foo";
        } catch (n) {
            return (r = true);
        }
    } finally{
        r && (t = "PASS");
    }
}
var t = "FAIL";
r();
console.log(t);
