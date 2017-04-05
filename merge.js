/*给出的区间列表 => 合并后的区间列表：

[                     [
  [1, 3],               [1, 6],
  [2, 6],      =>       [8, 10],
  [8, 10],              [15, 18]
  [15, 18]            ]
]*/


var mergeRanges = require('merge-ranges');
console.log(mergeRanges([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]));

