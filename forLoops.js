//1. FOr Each 
// for each loop sirf array pe chalta hai or ye har ek index pr kuch kam krane k liye use krte h
var a=[2,3,4,4,5,5,6,6,,67,7,6];

a.forEach(function(val){
    console.log(val+2);
})

//for each does not change in array it only changes in temporary copy of array for that array always remain same

//2. For in
// objects pr loop karne k liye hota h for in loop 
var obj={
    name:"rahul",
    age:25,
    city:"delhi",
};
for(var key in obj){
    console.log(key,obj[key]);
}

// key is a variale and key will give outpur only name age city only becasuse it variable to get value we will store value in array