//Slice --> 
//-Extract part of an array.
//-returns a new array
//-does not modify the original
//end is not included arr.slice(start, end)

const array = [1,2,3,4,5,6]

const half = array.slice(0,1)
console.log(half);
console.log(array);


//Splice() → DESTRUCTIVE (powerful)
//-Remove / insert element 
//'Modifies the original array
//-Return the removed elements

const arr = [1,2,3,4,5,6];

const remove = arr.splice(0, 4)
console.log(arr);
console.log(remove);
console.log(arr);

const a = [1,2,5];

arr.splice(3,4,6)
console.log(arr)

