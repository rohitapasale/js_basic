console.log("learn filter ")
// in for each it doesnt return anything in filter it return 
// in filter return true or false this true return then that element of array returns 
const arr = [10,20,30,40,50,60,70,80,90,100];
const maxies = arr.filter((val)=>
{
    //return val >= 50 ;

}
)
console.log(maxies);
// in fiter element are return if return is true
//** in map return for every element in filter exact element return but in map return anything want and return for every element
const degress = ["btech","bca","mbbs","bams","bsc","ba"];
const ans = degress.map((d)=>
{
    return `hi ${d} this is also degree`;
})
console.log(ans)
/// nested of map and filter
 let vals = [10,20,30,40,50,60,70,80,90,100];
 let newval = vals.map((i)=> i).map((i)=> 2*i).filter((i)=> i>80)
 console.log(newval);
 // reduce 
 // reduce doesnt return array it returns only final value after executing filter on array 
 let ans1 = vals.reduce((acc,curr) =>
{
    return  acc+curr;
},0);
console.log(ans1);
let winners = [10,20,30,40,50,60,900];
let total_winners = winners.reduce((acc,curr)=>
{
    return acc+curr;
},0);
console.log(total_winners);