//types in js
//1. primitive types: number,string ,null, undefined, bool
//2. reference =[] () ()
//aisi koi v value jisko copy karne pr real copy nahi hota balki us main value ka refrence pass ho jata h use hum refrence value kehte h or jiska copy krne pr real copy ho jae wo value primitive hota h

var a=12;
var b=a;
b=b+2;
console.log(b,a); //exaple of primitive type here we will get output as 14 ad 12

var a=[12,12,13,24];
var b=a;  //we are copying a but it is refrencing to an array so it is copying the refrence type.
b.pop();
console.log(b);
console.log(a);//here we are removing one element from the array so it is removing from the refrence . 
//if bracket is there than it is refrence otherwise primitive.