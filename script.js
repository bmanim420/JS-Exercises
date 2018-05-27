/* JavaScript code here */
//Task 1
console.log("External JS");

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

//Task 3
function checkEmail(emailString){
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailFormat.test(emailString);
    return match;
}
console.log(checkEmail("john@smith.com"));
console.log(checkEmail("johnsmith.com"));

//Task 4
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

function getReadingStatus(index){
    return library[index].readingStatus;
}
console.log(getReadingStatus(2));

//Task 5
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
//Task 5(a)

function addItem(newItem){
        cart.push(newItem);
        console.log(cart);
    }
    var newItem={name: 'Watch', price:65, quantity:1};
    addItem(newItem);
    
    
// Task 5(b)

function compareNames(a, b) {
    
    var aName = a.name.toUpperCase();
    var bName = b.name.toUpperCase();
    if (aName < bName) {
        return -1;
        }
    if (aName > bName) {
        return 1;
        }
  return 0;
}
//console.log(cart.sort(compareNames));

function compareNumbers(a, b){
    return a.price - b.price;
}
//console.log(cart.sort(compareNumbers));

function compareQuantity(a, b){
    return a.quantity - b.quantity;
}
console.log(cart.sort(compareQuantity));

function sortByValue(value){
    this.value = value;
    if(value === "name"){
        console.log(cart.sort(compareNames));
    }
    else if(value === "price"){
        console.log(cart.sort(compareNumbers));
    }
    else if(value === "quantity"){
        console.log(cart.sort(compareQuantity));
    }
}
console.log(sortByValue("name"));

// Task 5(c)

function findByName(name){
    var Name = name.toLowerCase();
    for (var x = 0; x < cart.length; x++){
        var n = cart[x].name;
        var na = n.toLowerCase();
    if (na === Name) {
            return cart[x];
        }
    }
}
console.log(findByName("regular tees"));

//Task 5(d)
function totalCost(){
    var p = 0;
    for(var x = 0; x < cart.length; x++){
        p = p + cart[x].price;
    }
    return p;
}
console.log("The Total Price is: "+totalCost());