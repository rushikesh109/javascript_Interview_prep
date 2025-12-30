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
