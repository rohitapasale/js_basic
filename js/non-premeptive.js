// total 8 data types out of it 7 are premptive means they are passed by val but object is preemptive
// pre => 1) object 2) array 3) function
// ** dekho obj maine ek hi jagh hoga use sb point krennge 
let arr = [10,20,30,40];
let arr1 = arr ;
arr1[2]=3000;
console.log(arr,arr1);
// above both will change as object create and identifiers are pointing to it 
// 8** letter we will se for copy 
function add(a,b)
{
    console.log(a+b);
}
add(4,8);
// one way like cpp function object create and add pointing to it 
let obj = {
    name : "rohit",
    age :20 
};
console.log(obj);
// object in json format same refernce create we will create all this by const as that we cant reassign values  but can change some values
