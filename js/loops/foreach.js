// only for array pass function as parameter callback fun for each element callback function will executed
let names = ["rohit","sunil","pasale","vaibhav"];
names.forEach(function(name)
{
    console.log(`my name is ${name}`);
})
for(const key of names)
{
    console.log(key)};
    for(const i in names)
    {
        console.log(names[i]);
    }
let fine = [100,200,300,400];
let sum = 0;

const ans = fine.forEach((cost)=>
{
sum+=cost;
console.log(`fine upto this is ${cost},and total is ${sum}`);
return cost;
})
console.log(ans);// ** for each does not return anything 
