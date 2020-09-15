
console.log("hello navin");
//alert('whoo');

//variables
var b = 'smoothie'
console.log(b)
var number = 45
console.log(number)

//prompt
//var age=prompt("what is your age")
//document.getElementById('someText').innerHTML='HEY THERE your age is '+age;


//numbers in javascript
var num1 = 5.7;
num1++;
console.log(num1 + 1)

//divide, multiply *, remainder %
console.log(26 % 5)


// increment/decrement by any number we want
console.log(num1 += 10)

/*functions
1.create a function
2.call a function
*/


function fun() {
    alert('this is a function')
}

// call
//fun();

/* create a function that take in a name and says hello 
follwed by name

*/
function greeting(name) {
    //var name=prompt("what is your name")
    //alert("hai"+name);
}
//greeting()

//arguments in functions

greeting("navin")

//while loop
var num = 0
while (num <= 50) {
    num += 1
    console.log(num)
}

//for loop

for (let num = 56; num <= 60; num++) {
    console.log(num);
}

//data types
let myage = 18                                //number
let yourName = 'bob'                          //string
let name = { first: 'navin', last: 'kumar' }       //object
console.log(name)
let truth = false;                            // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random;                                 //undefined
let nothing = null;                           // value null

//strings methods in javascript

let fruit = 'orange';
let morefruits = 'banana\napple'
console.log(fruit.length);
console.log(fruit.indexOf('e'))
console.log(fruit.slice(2, 6));
console.log(fruit.replace("or", 123));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase())
console.log(fruit.charAt(0));
console.log(fruit[0])
console.log(morefruits.split('\n'))
console.log(fruit.split(''))


//array in javascript

let fruits = ['banana', 'apple', 'orange']
//another way of creating array
let anotherway = new Array('banana', 'apple', 'ora nge', 'pineapple')
//alert(fruits[1])
console.log(anotherway.length);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
console.log(fruits.toString())
console.log(fruits.join('*'))
console.log(fruits, fruits.pop(), fruits) //removes last item
console.log(fruits.push('blackberries'), fruits)  //appends
console.log(fruits[4])
fruits[fruits.length] = 'new fruit' //same as push
console.log(fruits)
fruits.shift()  //removes the first item in the array
console.log(fruits)
let vegetables = ['tomato', 'brinjal', 'cucumber']
let allgroceries = fruits.concat(vegetables)      //combine arrays
console.log(allgroceries)
console.log(allgroceries.reverse());
