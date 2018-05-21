/* JavaScript code here */
//Task 1
console.log("External JS")

//Task 2
function sumArray(arr){
    var sum = 0;
    arr.forEach(function(value, index){
        sum += value;
    });
    return sum;
}
console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([1,20,-3,45]));