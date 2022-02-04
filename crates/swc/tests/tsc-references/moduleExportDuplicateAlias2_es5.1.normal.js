// @checkJs: true
// @strict: true
// @declaration: true
// @outdir: out
// @filename: moduleExportAliasDuplicateAlias.js
module.exports.apply = undefined;
function a() {}
module.exports.apply = a;
module.exports.apply = a;
module.exports.apply();
// @filename: test.js
var apply = require('./moduleExportAliasDuplicateAlias').apply;
apply();
