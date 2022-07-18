// sort ascending order& descending order in normal function
let a=[9,9,0,2,6,8,3,7,1,1,0]
let b=[11,12,13,14,15]
a.sort();
console.log(a)
//descending
a.sort(function(a, b){return b - a});
console.log(a)

    