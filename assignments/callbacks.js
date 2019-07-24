// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length){
  console.log(length);
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);//gets the item at the last index
}

last(items, function(last){
  console.log(last);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(3, 5, function(sum){
  console.log(sum);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(4, 12, function(product){
  console.log(product);
});

//const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];//items array for reference
// function contains(item, list, callback){

function contains(item, list, cb){ 
  return cb(list.includes(item));
}
  
contains('yo-yo', items, function(object){
  console.log(object);
})



/* STRETCH PROBLEM */
// let studentsArray = ["Austen", "Austin", "Ryan", "Ryan", "Edd", "Brent", "Britt", "Jazmyne", "Dan"]
  // removeDuplicates removes all duplicate values from the given array.
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
