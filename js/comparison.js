// == in this null convert to undefined string to num bool to num
// undefined  give null for == this and nan for other 
// comapre with nan is always false
// ** now learn string in js 
let str = "rohit pasale";
console.log(str);
console.log(`my name is ${str} i live in barshi `);
// string one char can't change ;;
for(var i=0;i<str.length;i++){
    //console.log(str[i]);
}
str[0] ='s'
console.log(str);
// strings are immutable but they can reassign in this no operation in which we take substring and remove from that string like in splice in array
// slice taking input form include start and exclude end if neg come take from end 
// if end is more than start no output empty string if 2nd para not given then take last char of string 
let name = "   rohit pasale   ";
// ** slice
console.log(name,name.slice(0,8));
console.log(name,name.slice(-4,-2));
console.log(name,name.slice(4,3));// 2nd is empty 
// substring is same as slice if -ve val treaet as 0  and if s is more then swap index 
console.log(name,name.substring(0,8));
console.log(name,name.substring(-4,-2));
console.log(name,name.substring(4,3));// 2nd is not  empty 
// use this only substr is not used same as slice 2nd parameter is only length 
//** trim  used for remove whit spaces from start and end
console.log(name.trim());