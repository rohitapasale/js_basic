// num can have value of nan ** not a number 
// if  we convert to number 
let s = "1001";
let num = Number(s);
console.log(num);
s = "1001bhh" // it give nan 
num = Number(s);
console.log(num);
// true give 1 false give 0 other data types give nan if we convert them as number
// convert to string 
num = 1000 ;
s = String(num);
console.log(s);
let temp = true;
s = String(temp);
console.log(s);
// for boolean if num is 0 true otherwise false if string empty true otherwise false 
// *** operation data conversion
// jb bhi string aayegi num convert to string
console.log(1+2+3);
console.log(1+"2"+3);
console.log(1+2+"3");
console.log("1"+2+3);