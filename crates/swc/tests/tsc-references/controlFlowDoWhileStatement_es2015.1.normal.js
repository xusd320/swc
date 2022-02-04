let cond;
function a() {
    let x;
    x = "";
    do {
        x; // string
    }while (cond)
}
function b() {
    let x;
    x = "";
    do {
        x; // string
        x = 42;
        break;
    }while (cond)
}
function c() {
    let x;
    x = "";
    do {
        x; // string
        x = undefined;
        if (typeof x === "string") continue;
        break;
    }while (cond)
}
function d() {
    let x;
    x = 1000;
    do {
        x; // number
        x = "";
    }while (x = x.length)
    x; // number
}
function e() {
    let x;
    x = "";
    do {
        x = 42;
    }while (cond)
    x; // number
}
function f() {
    let x;
    x = "";
    do {
        if (cond) {
            x = 42;
            break;
        }
        if (cond) {
            x = true;
            continue;
        }
        x = /a/;
    }while (cond)
    x; // number | boolean | RegExp
}
function g() {
    let x;
    x = "";
    do {
        if (cond) {
            x = 42;
            break;
        }
        if (cond) {
            x = true;
            continue;
        }
        x = /a/;
    }while (true)
    x; // number
}
