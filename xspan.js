var xspans = require('xspans')

//新建一个区间段
var a = xspans([
        [2,7],
        [100,200]
    ]);

var b = [3,11]

//求交集
a = a.or(b)

//求差集
var d = [106,107]
a = a.sub(d)

console.log(a.toArrays())
// [ [ 2, 11 ], [ 100, 106 ], [ 107, 200 ] ]
