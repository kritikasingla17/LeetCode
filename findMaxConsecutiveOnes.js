//Given a binary array, find the maximum number of consecutive 1s in this array.


/*
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count=0;
var count2=0;
for(var i=0;i<nums.length;i++){
    if(nums[i]===1){
        count++;
    }
    else{
        
        count=0
    }
    if(count2<count){
            count2=count;
        }
}
return count2;
};