// we have two or many object now want merge all in one then
let obj1 ={
    name : "rohit",
    age : 20,
    city : "pune"
};
let obj2 = {
    name : "vaibhav",
    age : 22,
    city : "nagar"
};
let obj3 = {
    name : "xyz",
    age : 30,
    city : " mumbai"
};
let new_obj = {obj1,obj2,obj3};// ye nested object bana obj1,obj2,obj3 are keys not recommend as if obj33 change 1 also change
console.log(new_obj);
new_obj.obj1.name = "pasale ";
console.log(obj1.name);
console.log(new_obj.obj1.name);
// new by assign operator yaha 1st assign diya usko values milegi 
//new_obj = Object.assign(obj1,obj2,obj3); // bekar obj1 maine obj2 ki add bad main 3 ki add so not prefer 
new_obj = Object.assign({},obj1,obj2,obj3);
// yaha all keys are copies so last value is overwritten so can say newobj and obj3 are same ;
console.log(new_obj);
// last method 
// **  ... in spread every spread break and copy values are given 
new_obj = {...obj1,...obj2,...obj3};
console.log(new_obj);
// ** object destructring 
let user = {
    name : "rohit pasale ",
    email : "rohitpasale1@gmail.com",
    instructorname : "rj sir "
};
// if we are using instrcutrname then using user.instructername is for simple use object deconstructing
// const {instructorname } = user ;
// console.log(instructorname);
// // we can chage name 
// const {instructorname:tname} = user ;
//console.log(tname);
// ye var ko val store ki tarah but jb sar chaiye tb 
const {name,email,instructorname} = user ; // dekho har bar var declare val assign se simple
const {name : n }  = user ;
// simple when large values => 
    let school =
{
    name :"rohit",
    rbtnumber : "12231",
    addreessofschool : "barshi"
};
console.log(school.addreessofschool);
console.log(school.addreessofschool);
const {addreessofschool:location} = user;
console.log(location)// easy 
