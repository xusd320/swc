var $ = 100, _ = 10;
(_ = $) ? ($++ + (_ += $) ? (_ += $) : (_ += $)) : (_ ^= $);
console.log($, _);
