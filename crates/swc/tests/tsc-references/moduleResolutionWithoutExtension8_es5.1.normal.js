// @moduleResolution: node12
// @module: node12
// @filename: /src/bar.cts
// Extensionless relative path dynamic import in a cjs module
import("./foo").then(function(x) {
    return x;
}); // should error, ask for extension
