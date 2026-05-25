// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

//  user.welcomeMessage()
//  user.username = "sam"
// //  user.welcomeMessage()
// //  console.log(this);
//  // this keyword used for currr syntax 
//  let s1=1000;
//  let s2=9000;
//  console.log(this);
//  function add()
//  {
//     console.log(this);
//  }
//  let sum = (num) =>
//  {
// console.log(this);
//  }
//  add();
//  sum(40);
 var  name = "rohit";
 function hello()
 {
    console.log(this.name);
    console.log(this);
 }
 hello();