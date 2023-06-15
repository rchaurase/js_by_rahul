function getSecondLargest(nums) {
  // Complete the function
  let largestNumber = nums[0];
  for(let i = 1; i<nums.length; i++){
      if(nums[i]>largestNumber){
         largestNumber = nums[i] 
      }
  }
  let secondLargestNumber = nums[0]
  for(let i = 1; i<nums.length; i++ ){
      if(nums[i]>secondLargestNumber){
          
          secondLargestNumber = nums[i]
      }
  }
  return secondLargestNumber;
}
let result = getSecondLargest([2,4,5,6,7,3,9])
  console.log(result);