### NOTES JS FUNDAMENTALS ###

##DiFF TYPES OF CONSOLE.LOGS

console.log('What up world')
console.log(123)
console.log(true)
let greeting = 'Hi'
console.log(greeting)
console.log([1,2,3])
console.log({ a:1, b:2})
console.table({ a:1, b:2})
console.error('error')
console.warn('warning msh')
console.clear()
console.time('hey') *** logs how long it took***
    console.log('sup')
    console.log('sup')
    console.log('sup')
    console.log('sup')
    console.log('sup')
    console.log('sup')
console.timeEnd('hey')

##INITIALIZING A VARIABLE ##
*** would return undefined b/c variable isn't assigned ***
 let greeting; 
 ***wouldn't work b/c it needs to be assigned a value b/c it is constant  ***
const greeting;

*** Pascal case (like class and constructor function) ***
 const FirstName 

*** NULL = intentional empty value ***
*** UNDEFINED: if you declare a variable but don't assign a value it will be undefined, all variables are undefined by default  ***

*** Reference types are objects, arrays, function, etc ***

*** PRIMITIVE TYPES ***
can find the type using console.log(typeof variable name)

*** TYPE CONVERSION ***
let val;

- NUM TO STR
val = 5; //undefined
val = String(5) //returns length 

length only runs on strings 

- BOOLEAN TO STR
val = String(true);

-DATE TO STR
val = STring(new Date())

- val = String([1,2,3])

- CHANGE TO STRING 
val = (5).toString();



console.log(val)
console.log(typeof val)
console.log(val.length)



- STRING TO NUM
val = Number(5)
val = Number(true)


val = parseInt('100.30') //parses as integer
val = parseFloat('100.30) //parses as decimal 100.3



console.log(val)
console.log(typeof val)
console.log(val.toFixed());

### MATH OBJECT ###

val = Math.PI //gives us PI
val = Math.E //uler's #
val = Math.round(2.8) // genera;round number
val = Math.ceil(2.4) //rounds up
val = Math.floor(2.8) //rounds down
val = Math.sqrt(64)// square root
val = Math.abs(-3) //gives absolute number, positive 3 
val = Math.pow(8,2) //gives 64 b/c 8 to the 2nd power
val = Math.min(1,45,7,3, -2)// returns minimum number 
val = Math.max(1,45,7,3, -2) //gives max number
val = Math.random()//gives random decimal 

val = Math.floor(Math.random() * 20 + 1) //gives random number whole number between 1 and 20 


### STRINGS & CONCATENATING  ###

const firstName = 'William'
const lastName = 'Johnson'
const age = 36
const str = 'hello there, my name is Myk'
const tags = 'web design, web dev, programming'

let val;

val = firstName + lastName 
***CONCATENATING ***
val = firstName+ ' ' + lastName
console.log(val)
***Append (add on to variable)***
val = 'Brad'
val += 'T'

would result in Brad T in console.log(val)

age= 12
val = 'My name is' + firstName + 'and I am' + age.

***ESCAPING***

val = 'That\s fun!'

*** LENGTH (property not a method)***
- counts numbe rof characters in string
val = fistNamelength
*** CONCAT ***
val = firstName.concat(' ', lastName)
console.log(val)

***CHANGE CASE ***
val  = firstName.toUpperCase()
val  = firstName.toLowedCase()

val = firstName[0] //looking at zero index of firstName value returns W

*** INDEX OF() ***
val = firstName.indexOf('l')//gives index 2 for firstname variable ; eturns -1 if index isn't found 

val = firstName.lastIndexOf('l')

*** charAt *** 
val = firstName.charAt('2') //returns character at ndex 2

*** GET LAST CHARACTER ***
val = firstNake.charAt(irstName.length - 1)

**GET SUB STRING ***
val = firstName.subString(0, 4) //returns Will from William 
*** SLICE ***
val = firstName.slice(0, 4)// returns Will, similair t subString 
val = firstName.slice(-3)// returns iam 

*** SPLIT ***
val = str.split(' ' )// returns ['hello', 'there', 'my' 'namr', 'is', 'myk']

val = tags.split(',') //split by comma

*** REPLACE ***
val = str.replace('Myk', 'Jack')b//search for myk and replace it with Jack 

*** INCLUDES ***
val = str.includes('Hello)//true because included in str
val = str.includes('foo')//false because not included in str

### TEMPLATE LITERALS (ES6) ###
const name = 'John'
const age = 30
const job = 'dev'
let html;

***W/O TEMPLATE LITERALS (ES5) ***
html = '<ul></ul>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job </li>

html = '<ul>' + 
            <li>Name: ' + name + '</li>
           <li>Age: ' + age + '</li>
           <li>Job: ' + job + '</li>
document.body.innerHTML = html 

function hello(){
    return 'hello'
}

*** WITH TEMPLATE STRINGS ***
html = `
        <ul>
        <li>Name: ${name}</li>
         <li>Age: ${age}</li>
          <li>Job: ${job}</li>
           <li>${2 * 2}</li> //return 4
            <li>${hello()}</li>
             <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
        </ul>
`


###ARRAYS & ARRAY METHODS###
!!! ARRAYS ARE ZERO BASED, INDEX STARTS AT 0!!!
/different ways to call arrays 
const numbers = [1, 2, 3, 4, 9]
const numbers2 = new Array(7, 8, 9, 10)
const fruit = ['Apple', 'Banana', 'Orange']
const mixed = [22, 'hello', true, undefined, null, { a:1, bb:1}, new Date()]

*** GET ARRAY LENGTH ***
val = numbers.length

*** CHECK IF IS ARRAY *** 
val = Array.isArray(numbers); //useful to test if something is array 

*** GET SINGLE VALUE FROM ARRAY ***
val = numbers[3] //gives index number 

*** INSERT INTO ARAY ***
Numbers[2] = 100;

*** FIND INDEX OF VALUE ***
val = numbers.indexOf(4)//looks for number 4 in the numbers array 

***MUTATING ARRAY: add on to end of array ***

numbers.push(250) 

***ADD ON TO FRONT ***
numbers.unshift(100)

*** TAKE OFF FROM END ***
numbers.pop();

*** TAKE OFF FROM THE FRONT ***
numbers.shift()

*** SPLICE VALUES ***
numbers.splice(1,1) //saying you want to start at index _, & take out one value

*** REVERSE ARRAY ***
numbers.reverse()


***CONCAT ARRAYS ***
val = numbers.concat(numbers2) //added numbers 2 array to numbers array 

*** SORT ARRAY ***
val = fruit.sort() //alphabetical order

***NUMERICAL SORT Smallest to Largest ***
val = numbers.sort(function(x, y) {
    return x-y 
}) 
***NUMERICAL SORT Largest to Smallest***
val = numbers.sort(function(x, y) {
    return y-x  
}) 

*** FIND ***
function under50(num) {
    return num < 50
}

val = numbers.find(under50) //passing in find function; returned first num under 50

console.log(numbers)

### OBJECT LITERALS ###

const person = {
    firstName: 'Mykol',
    lastName: 'Smith',
    age: 30,
    email: 'smith@yahoo.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'Fl'
    },
    getBirthYear: function(){
        return 2017 - ${age}
}

let val;
val = person; 

console.log(val)

*** GET SPECIFIC VALUE ***
val = person.firstName;
val = person['firstName']
val = person.age
val = person.hobbies 
val = person.hobbies[1]//pulling out one sport 
val = person.address.state
val = person.address['city']
val = person.getBirthYear()


*** ARRAY OF OBJECTS ***
const people = [
    {name: 'John', age: 30},
     {name: 'Mike', age: 32},
]
//looping through array object
for(let i = 0; i < people.length; i++){
    console.log(people[i].name)
}

### DATES & TIMES ###
let val;
*** new Date object***
const today = new Date(); //if you don't pass anything in here it will be today's date by default 
val = today;

console.log(val)

*** CAN CHANGES TO STRING ***
val = today.toString()

*** CHANGING DATE ***
let birthday = new Date('09-10-1981 11:25:00') //11:25:00 changed time
 birthday = new Date('September 10 1981') //11:25:00 changed time
birthday = new Date('09/10/1981') //11:25:00 changed time
val = birthday
***GET MONTH***
- Zero based, January would 0 
val= today.getMonth()
***GET DATE***
val = today.getDate()
***GET DAY***
val = today.getDay() // Starts a t Sunday so Wednesday would be 4th day
***GET YEAR***
val = today.getFullYear()
***GET HOURS***
val = today.getHours()
***GET MINs***
val = today.getMinutes()
***GET Seconds***
val = today.getMilliseconds()
***GET TIMESTAMO***
val = today.getTime()

***SET TIME***
birthday.setMonth(2) //March because January is 0 
birthday.setDate(12)
birthday.setFullYear(1985)
birthday.setHours(3)
birthday.setMinutes(30)
birthday.setSeconds(25)
console.log(birthday)

### IF STATEMENTS/COMPARISON OPERATORS ###

if(something) {
    do something
} else {
    do something else 
}

const id = 100;
*** EQUAL TO  testing value ***
if(id == 100){
    console.log('CORRECT)
} else {
    console.log('WRONG')
}

*** NOT EQUAL TO testing value ***
if(id != 101){
console.log('CORRECT)
} else {
    console.log('WRONG')
}

***EQUAL TO VALUE & TYPE ***
if(id === 100){
    console.log('CORRECT)
} else {
    console.log('WRONG')
}

***EQUAL TO VALUE & TYPE ***
if(id !== 100){
    console.log('CORRECT)
} else {
    console.log('WRONG')
}

*** TEST IF UNDEFINED***
if(typeOf id !== undefined){
    console.log(`The ID is ${id}`)
} else {
    console.log('NO ID')
}

***GREATER OR LESS THAN ***
if(id > 200){
    console.log('CORRECT)
} else {
    console.log('WRONG')
}

*** IF ELSE (else ends the statement) ***
const color = 'yellow'

if(color === 'red'){
    console.log('Color is red)
} else if(color === 'blue') {
    console.log('Color is blue')
} else {
    console.log('Color is not red or blue')
}

***LOGICAL OPERATORS ***
const name = 'Steve',
const age = 20

&& BOTH CoNDITIONS MUST BE TRUE 
if(age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19>){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`))
}

|| OR ||

if(age < 16 || age > 65){
    console.log(`${name} cannot run in race`)
}else {
    console.log(`${name} is registered for the race`)
}

*** TERNARY OPERATOR ***
if id is equal to 100, log correct, otherwise incorrect
console.log(id === 100 ? 'Correct' : 'incorrect')

***WIHOUT CURLY BRACES ***
if(id === 100)
    console.log('correct)
else
    console.log('incorrect')

### SWITCHES ###
const color = 'red'

switch(color){
    case 'red' : 
        console.log('color is red)
        break;
    case 'blue':
        console.log('color is blue)
        break;
    default:
    console.log('color is not red or blue)
    break;
}

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
     case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break; 
    case 4:
        day = 'Thursday';
        break; 
    case 5:
        day = 'Friday';
        break; 
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`)

### FUNCTIONS blocks of called that can be defined and called ###
*** FUNCTION DECLARATION ***

function greet(firstName){ //param//
    <!-- console.log('Hello') -->
    return 'Hello' + 'firstName'
}

//adding default values
function greet(firstName = 'John', lastName='Doe'){ //param//
    <!-- console.log('Hello') -->
    return 'Hello' + 'firstName'
}
*** CALL IT/LOG IT ***
console.log(greet('Mary'));

*** FUNCTION EXPRESSION *** 

const square = function(x){
    return x*x
};

console.log(square(8));

*** IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS IIFE's***
(function(){
    console.log('IIFE ran...')
})();

(function(name){
    console.log('Hello' + name)
})('Brad');

*** METHODS ***
const todo = {
    add: function(){
        console.log('add todo.../)
    },
    edit: function(id){
        console.log(`edit todo ${id}`)
    }
}
todo.delete = function(){
    console.log('Delete todo...')
}


todo.add();
todo.edit(22)

### LOOPS instruction that repeats until specific condition is met  ###

*** FOR LOOPS ***
//setup declaration, condition: as long as i less than 10, i = i + 1; runs untila i is no longer less than 10

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my fave number')
        continue; //stops loop her goes to next iteration; keep going with the loop
    }

    if( i === 5){
        console.log('Stop the loop')
        break; //stops the loop
    }
        console.log(i)
} 

*** WHILE LOOP ***
 let i = 0;

while(i < 10>){
    console.log('Number ' + 1)
    i++;
}

***D0 WHILE runs at least once no matter what, even if condition isn't met ***
 let i = 0;

 do {
     console.log('Number ' + 1)
     i++;
 }

 while(i < 10)

 ***LOOPING THROUGH ARRAY ***
 const cars = ['ford', 'chevy', 'honday', 'toyota']



 for(let i = 0; i < cars.length; i++)
 console.log(cars[i])
}


*** FOR EACH ARRAY METHOD doesn't return a new array ***
cars.forEach( function(car, index){
    console.log(`${index} : ${car}`)
    console.log(array)
})

***MAP ARRAY METHOD to return different array ***
const users = [
    {id: 1, name: 'John'}
    {id: 2, name: 'Sara'}
    id: 3, name: 'Karen'}
]

const ids = users.map(function(user){
    return user.id
})

console.log(ids)

*** FOR IN LOOP used for objects ***
const user = {
    firstName: 'John'
    lastName:  'Doe'
    age: 40
}

//returns key 
for(let x in user){
    console.log(x)
}

//returns object
for(let x in user){
    console.log(`${x} : ${user}[x]}`)
}

### WINDOW METHODS ###

***ALERT ***
alert('hey')

***PROMPT takes input*** 
const imput = prompt();
alert(input)

*** CONFIRM ***
if(confirm('Are you sure'){
    console.log('YES')
}else {
    console.log('No')
}

*** HEIGHT/WIDTH OF WINDOW***
let val;

val = window.outerHeight; //from outer edges 
val = window.outerWidth;

val = window.innerHeight; //inside scrollbar
val = window.innerWidth;

console.log(val)

***SCROLL POINTS good for sites with animations as you scroll down***
val = window.scrollY
val = window.scrollX

*** LOCATION OBJECT ***
val = window.location
val = window.location.hostname
val = window.location.port
val = window.location.search

//redirect on reload to google
window.location.href = 'http://google.com'
//reload
window.location.reload()


*** HISTORY OBJECT ***
window.history.go(-1) //takes us back to where we came from

val = winddow.history.length

*** NAVIGATOR OBJECT ***
val = window.navigator
val = window.navigator.appName
val = window.navigator.language


console.log(val)

### GLOBAL SCOPE ###
var a = 1;
let b = 2;
const c = 3;



function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a,b,c)
}
test()

if(true){
    //Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.lof('If scope: ', a, b, c)
}


for(let a = 0; a < 10; a++){
    console.log(`loop: ${a}`)
}


console.log('Global Scope: ', a, b, c)