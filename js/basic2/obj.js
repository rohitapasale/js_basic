// objects are priemptive data types means store by reffernce 
// in object keys are string or symbol so by => accessing them by bracket use " propertyname "
const obj =
{
    name : " rohit pasale ",
    age : 20,
    city : "solapur",
    hello : function()
    {
        console.log("hi ");

    }
};
console.log(obj);
console.log(obj.name,obj["age"]); // by acessing bracket give string 
obj.name = "pasale";
console.log(obj);
// by freeze the object cant add remove update the object 
Object.freeze(obj);
obj.name = "rohit";// ignore it 
console.log(obj);
obj.hello();
