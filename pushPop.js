//push- to add members in array at end
//pop- to remove a member from array at end
//shift- to remove member at beginig
//unshift- to add member at the begning
//splice - to remove member in between

var a=[1,2,3,4,5,6,7];
a.push(8);
console.log(a);
a.pop();
console.log(a);
a.unshift(0);
console.log(a)
a.shift();
console.log(a);
a.splice(2,1); // splice(konsa index , kaha tak )
console.log(a);