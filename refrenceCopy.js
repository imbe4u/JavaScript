//copying of refrence
var a=23;
var b=a;

//yaha humne b ko a ke equal kiya h that means ab b ki value v 23 ho gya h or ab b me kuch v edit krenge to a ko kuch fark nahi prega
b=b+2;
console.log(a); //23
console.log(b); //25
    
    // but
var a=[1,2,3,4,5];
var b=a;
//yaha humne b ko a ke equal kiya h that means b ab a ke refrence me jo value h wo le rha agr b me koi change hoga to wo a me v hoga
// direct copy nahi kr rhe hum jaise upr copy ho rha tha value
// ise copy krne k liye  hum "spread operator use krte h"

var a=[1,2,3,4,5];
var b=[...a];  // this 3 dot is called spread operator which means that whatever is written after this copy its value.
// so now b is a copy of a and if we change b then a will not be affected
b.pop();
console.log(a); //12345
console.log(b); //yaha hume 1234 hoga

//with this we can copy any refrence value
var obj={name:"harsh"};
var copy={...obj};

copy.name="harshita";
console.log(obj);
console.log(copy);