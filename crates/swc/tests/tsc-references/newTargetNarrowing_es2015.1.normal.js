// @target: es6
// @strict: true
function foo(x) {}
function f() {
    if (new.target.marked === true) {
        foo(new.target.marked);
    }
}
f.marked = true;
