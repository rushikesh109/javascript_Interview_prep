//Question : You have an array now loop the array and print its original properties?
//----> 
// Array.prototype.extraPropert = "Rushi";


// const newArray =[1,2,3,4,5]

// // for(let i = 0; i < newArray.length; i++ ){
// //     console.log(i, newArray[i]);   
// // }

// for(let num in newArray){
//     console.log(num);
    
// }

// for(let num in newArray){
//     if(newArray.hasOwnProperty(num)){
//         console.log(num);
        
//     }
// }



//Question --- Implement custom forEach with prototype
//First Ans beginner
Array.prototype.customForEachOne = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i , this)
    }
}

//Second expert level

Array.prototype.forEachTwo = function(callback, thiscontect){
    if(typeof callback !== 'function'){
        throw new console.error(`not a function`);
    }

    const length = this.length

    let i = 0;

    while(i < length){
        if(this.hasOwnProperty){
            callback.call(thiscontect, this[i], i , this)
        }
        i++;
    }
}


