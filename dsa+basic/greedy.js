const prices = [5,2,6,2,8,9]

function maxProfit(prices){
    if (!prices || prices.length < 2) return 0;
    
    let buyPrice = prices[0];
    let profit = 0;

    for(let i = 0; i<prices.length; i++){
        if(buyPrice > prices[i]){
            buyPrice = prices[i]
        }else{
            const todayProfit = prices[i] - buyPrice
            profit = Math.max(profit, todayProfit)
        }
    }
    return profit
}

console.log(maxProfit(prices));




//Can Jump --> greedy APPOROACH;
const nums = [2,1,1,0,4]
function canJump(nums){
let finalPosition = nums.length - 1;

for(let i = nums.length - 2; i >= 0; i--){
    if(i+nums[i] >= finalPosition){
        finalPosition = i
    }
}
return finalPosition == 0
}

console.log(canJump(nums));

//At each index i, I check whether i + nums[i] is greater than or equal to the current final position. If it is, that means I can jump from index i to the final position (or beyond), so I update the final position to i.

// By doing this, I greedily move the target position backward whenever it is reachable.

// At the end of the iteration, if the final position becomes index 0, it means we can reach the last index starting from the first index, so I return true. Otherwise, I return false.

// This approach runs in linear time O(n) and uses constant extra space O(1).


// smoothVersion --> I treat the last index as a target.
// Moving backward, I check if each index can reach this target.
// If it can, I shift the target to that index.
// If the target finally reaches index zero, the answer is true.