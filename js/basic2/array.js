const nums = [10,20,30,40,50,60,70,80,90,100];
console.log(nums);
nums.push(110);
console.log(nums);
nums.pop();
console.log(nums);
// shift unshift same push pop but form start push =>unshift pop =>shift 
nums.shift();
console.log(nums);
nums.unshift(10000);
console.log(nums);
// slice and splice functions on array 
// ** slice => give from start to end array if -ve then take from end not change in original 
const nums1 = nums.slice(0,4);
console.log(nums,nums1);
const nums2 = nums.splice(0,2);
console.log(nums,nums2);

