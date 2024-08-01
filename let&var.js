//var old js me tha es5
//let and const new js me h es6

//var is function scoped hota h- mtlb var apne parrent function me kahi v use ho skata hai
//var adds itself to the window object (window is a container from which js take its component to use but it is not available in js like console alert close cofirm)
//let & const doesn't add to window object
function ab(){
    for(var i=1;i<12;i++){
        console.log(i);
    }
    console.log(i);
}
ab();

var a=12;//it will add your variable to window
let a=12;//it will not add varubale to window 
//to check window we just write window in console




//Let and const is braced scope which means it is only accessible in braces


function ab(){   
     for(let i=1;i<12;i++){
    console.log(i);
}
console.log(i);// it will give error as let is braccesd scope and for loop is ended above
}
ab();