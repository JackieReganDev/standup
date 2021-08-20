// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2



// Hint:  HASH MAP PATTERN! and possibly sorting for nlogn :slight_smile:

var majorityElement = function(nums) {
    let elem = {},
          count = 0,
          majVal = nums[0]
  
    for(let i = 0; i < nums.length; i++){
      if(!elem[nums[i]]){
        elem[nums[i]] = 1
      }else{
        elem[nums[i]]++
      }
    }
  
    for(const prop in elem){
      if(elem[prop] > count){
        count = elem[prop]
        majVal = prop
      }
    }
  
    return majVal
  };
  
  console.log((majorityElement([6,5,5])))