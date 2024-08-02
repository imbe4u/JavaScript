//js me kuch v likho wo mianly do prakaar me se  ksi ek prakar ko belong karti hai falsy and truthy
// falsy values mtlb 0,false,undefined,null,nan,document.all
// truthy values mtlb falsy value ko chor kr koi v number, string, array, object,

if(7){
    console.log("hey");  //it will print because of truthy 
}
else{
    console.log("hi");
}

if(0){
    console.log("hey"); 
}
else{
    console.log("hi");  //it will print because of falsy
}