let a=[9,9,0,2,6,8,3,7,1,1,0]
let b=[11,12,13,14,15]

 //1.Duplicate value Remove
function removeDuplicates(a) {
    return [...new Set(a)];
}
console.log(removeDuplicates(a));
 //sort ascending order& descending order in fat arrow function
let c=a.sort((c,d)=>c-d)
console.log(c);
//descending
let d=a.sort((c,d)=>d-c)
console.log(d);
// a+b (concat)

