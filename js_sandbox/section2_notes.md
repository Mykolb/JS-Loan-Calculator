### DOM ###
- document object model: structural representation of an HTML doc
- tree of elements(html tags) created by the browser

### EXAMINING DOCUMENT OBJECT ###
- Array.from to change html collection to array

### DOM SELECTORS FOR SINGLE ELEMENT ###
*** document.getElementById ***
console.log(document.getElementById(''))

*** GET THINGS FROM ELEMENT ***
console.log(document.getElementById('').id)
console.log(document.getElementById('').className)

*** CHANGE STYLING ***
const tastTitle = document.getELementById('task-title')

tastTitle.style.background = 'green'
tastTitle.style.color = 'white'
tastTitle.style.display= 'none' //disappear

*** CHANGE CONTENT ***
tastTitle.style.textContent = 'testing'
tastTitle.style.innerText = 'testing again'
tastTitle.style.innerHTML = '<span style='color:red'></span>'

***document.querySelector() ***
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title))
console.log(document.querySelector('h3)

document.querySelector('li')style.color = 'yellow'
document.querySelector('ul li')style.color = 'blue'

//pseudo classes seecting 3rd and 4th 
document.querySelector('li:last-child')style.color = 'red'
document.querySelector('li:nth-child(3)')style.color = 'purple'
document.querySelector('li:nth-child(4)').textContent= 'yep'

//only selects the first b/c only selecting single element
document.querySelector('li:nth-child(odd)')style.background = '#ccc'
document.querySelector('li:nth-child(odd)')style.background = 'gray'

### SELECTING MORE THAN ONE ELEMENT ### 
***document.getElementsByClassName('') ***

const items = document.getElementsByClassName('collection-item')
console.log(items)
console.log(items[0])
***style the first list item ***
items[0].style.color = 'red'
items[3].textContent = 'hello'

const listItems = document.querySelector('ul').getElemenentsByClassName('collection-item)
console.log(listItems)

***document.getElementsByTagName ***
let lis = document.getElementsByTagName('li')
console.log('lis')
console.log(lis[0])
lis[0].style.color = 'red'
lis[3].textContent = 'Hello'

HTML collection is not an array; 
let lis = Array.from(lis) //turned it into an array

lis.forEach(function(){
    <!-- console.log(li) -->
    console.log(li.className)
    li.textContent = `${index}: Hello` //changes list names 
})

lis.reverse //reversed the order 

*** document.querySelectorAll() ***
returns nodelist can cause not a function 

const items = document.querySelectorAll('')

items.forEach(function(item, index){
items.textContent = `${index}`: Hello 
})

- looking for even numbers 
for (let i = 0; i < liEven.length; i++){
    liEven[i].style.backgroung
})

*** TRAVERSING THE DOM ***
let val;
const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')


val = listItem;
val = list;

*** GET CHILD NODES returns nodelist***
val = list.childNodes
val = list.childNodes[0]
val = list.childNodes[0].nodeName
val = list.childNodes[1].nodeType
//numbers tell what type of mode they are 


*** GET CHILDREN ELEMENT NODES returns HTML collection (list/listItem are elements he's referencing in video)*** 
val = list.children;
val = list.children[1]
list.children[1].textConter = 'Hello'
***CHILDREN OF CHILDREN ***
val = list.children[3].children[0].id = 'test';
val = list.children[3].children[0]
*** FIRST CHILD ***
va; = list.firstChild;
val = list.firstElementChild;
*** Last child ***
val = list.lastChild
va; = list.lastElementChild
*** Count child elements ***
val = list.childElementCount
*** Get parent node ***
val = listItem.parentNode;
val = listItem.parentElement; //will be the same as parent node in most cases 
val = listItem.parentElement.parentElement;
*** Get next sibling ***
val = listItem.nextSibling
val = listItem.nextElementSibling.nextElementSibling
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
*** Get previous sibling ***
val = listItem.previousSibling
val = listItem.previousElementSibling;

console.log(val)

### CREATING ELEMENTS ###
*** set variable to createElement ***
const li = document.createElement('li')
*** add class ***
li.className = 'collection-item'
*** add an id ***
li.id = 'new-item'
*** add an attribute ***
li.setAttribute('title', 'New Item')
*** create text node and append ***
li.appendChild(document.createTextNode('hello'))
*** create new link element ***
const link = document.createElement('a')
*** add classes ***
link.className = 'delete-item secondary-content'
*** add icon html ***
link.innerhtml = '<i class= 'fa fa-remove'></i>'
*** append link into li ***
li.appendChild(link)
*** append li as child to ul ***
document.querySelector('ul.collection').appendChild(li)

### Removing & Replacing Elements ###
*** Replace element ***
***Create element ***
const new Heading = document.createElement('h2')
*** add id ***
newHeading.id = 'task-title'
*** new text node ***
newHeading.appendChild(document.createTextNode('Task List))
*** Get old heading ***
const oldHeading = document.getElementById('task-title')
*** Parent ***
const cardAction = document.querySelector('.card-action')
*** Replace ***
cardAction.replaceChild(newHeading, oldHeading)
***REMOVE element ***
const lis = document.querySelectorAll('li')
const lis = document.querySelector('ul')
*** remove list itme ***
lis[0].remove(); //removed first list item
***remove child element ***
list.removeChild(lis[3]) 

comsole.log(newHeading)

*** Classes and Attributes ***
***Classes ***
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]
console.log(firstLi.children[0]) //pulling out a tag 

let val;

val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');

link.classList.remove('test');
val = link;;

console.log(val)

*** Attributes ***
val = link.getAttribute('href')
val = link.setAttribute('href', 'http://google.com') //edits the link to take you to google
link.setAttribute('title', 'Google')
val = link.hasAttribute('title')
link.removeAttribute('title')

console.log(li)

### EVENT LISTENERS & EVENT OBJECT 

document.querySelector('class name').addEventListener('click', 
function(e){
console.log('.classname')

e.preventDefault()
})

*** fun fact : adding # in href keeps browser from trying reloading ***

document.querySelector('class name').addEventListener('click', onClick){

    function onClick(e){
   console.log('clicked')     
    

    let val;
    val = e
    console.log(val)
}

*** target represents element the event happened on ***
Event target elemebt
val = e.target

*** event target element *** 
val = e.target;
val = e.target.id
val = e.target.className
val = e.target.classList

e.target.innerText = 'change text'

console.log(val)

*** event type ***
val = e.type;

*** timestamp *** 
val = e.timestamp;

console.log(val)

*** Coords event relative to the window ***
val = e.clientY (tells number of pixels from where you click on y axis-)
val = e.clientX (tells number of pixels from where you click on x axis-)

** Coords relative to the element *** 
val = e.offsetY;(tells number of pixels from the element, not window)
val = e.offsetX;(tells number of pixels from the element, not window)

console.log(val)

### Mouse Evente ###
const clearBtn = document.querySelector('.className')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

*** Click*** 
clearBtn.addEvenetListener('click', runEvent)
***Double Click ***
clearBtn.addEventListener('dbclick', runEvent)
*** Mouse Down (click & hold) ***
clearBtn.addEventListener('mousedown', runEvent)
*** Mouse Up (when you let go) ***
clearBtn.addEventListener('mouseup', runEvent)
*** Mouse Enter (when you enter element ) ***
card.addEventListener('mouseenter', runEvent)
*** Mouse Leave (when you leave element ) ***
card.addEventListener('mouseleave', runEvent)
*** Mouse Out (will fire off when you go into an element that's inside the element selected, mouse enter/leave only fire for the initial parent element) ***
card.addEventListener('mouseout', runEvent)
*** Mouse Over (will fire off when you go into an element that's inside the element selected, mouse enter/leave only fire for the initial parent element) ***
card.addEventListener('mouseover', runEvent)
*** Mouse Move (any movement inside the element, inside that element) ***
card.addEventListener('mousemove', runEvent)







*** Event Handler ***

functtion runEvent(e){
    console.log(`Event type: ${e.type}`)


*** want heading to display mouse coords ***
    heading.textContent = `MouseX: ${e.offsetX} `MouseY: ${e.offsetY}`

    document.body.style.backgroundColor = `rgb(${e.offsetX}, rgb(${e.offsetY}, 40)`
}

### Keyboard & Input Events 
const form = document.querySelector('form)
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')
const select.querySelector('select')

*** Clear input (like functional set State in react when you add it to empty strings) ***
taskInput.value = '' 
*** Submit ***
form.addEventListener('submit', runEvent)
*** Keydown press down ***
taskInput.addEventListener('keydown', runEvent)
*** keydown when you release the key ***
taskInput.addEventListener('keydown', runEvent)
*** keypress when you press a key ***
taskInput.addEventListener('keypress', runEvent)
*** focus when you click inside of input and get a focus mode- ***
taskInput.addEventListener('focus', runEvent)
*** blur when you click outisde of input and get a blur mode ***
taskInput.addEventListener('blur', runEvent)
*** cut event runs when you cut ***
taskInput.addEventListener('cut', runEvent)
*** paste event runs when you paste ***
taskInput.addEventListener('paste', runEvent)
*** input event runs when you type ***
taskInput.addEventListener('input', runEvent)


*** Change event used when you select another option from a list**
select.addEventListener('change', runEvent)

function runEvent(e){
    console.log(`Event type: ${e.type}`)

*** Get input value***
console.log(taskInput.value)
*** default behavior of form is to redirect so use e.preventDefault needed, stops redirect***
e.preventDefault()

***log value type ***
console.log(e.target.value)
*** display keydown on screen***
heading.innerText = e.target.value
}

### EVENT BUBBLING & EVENT DELEGATION ###
*** event bubbling: bubbling up of events through the DOM, event bubbles up through it's parents ***

document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card-title')
})
document.querySelector('.card-content').addEventListener('click', function(){
    console.log('card-content')
})
document.querySelector('.card').addEventListener('click', function(){
    console.log('card')
})
document.querySelector('.col').addEventListener('click', function(){
    console.log('col')
})

*** event will bubble up and all of those events will be called even though you didn't click on them, only clicked task list; they bubble up the dom ***

*** Without delegation ***
const delItem = document.querySelector('.delete-item')
delItem.addEventListener('click', deleteItem)
document.body.addEventListener('click', deleteItem)

function deleteItem(){
    console.log('delete item')
} 

*** Only the first item clicked would work; also if you insert something dynamically that wasn't there when th epage first loaded, you will need event delegation ***




*** event delegation: where we put the listener on parent elements and use logic/condition inside event handler to target the element that we want that event for (click, etc) ***

function deleteItem(){
   if (e.target.parentElement.classList.contains('delete-item')){
       console.log('delete item')
       e.target.parentElement.parentElement.remove()
   }



//commented out 
    if (e.target.parentElement.className === 'delete-item
    secondary-content'){
         console.log('delete item')
    }
}  --> would work until you added an element and altered class name 

### Local & Session Storage ###
*** can find on window object, have to set values as strings, turn into string using json.stringify ***
*** to check data set in browser:  application => storage => localhost  ***

*** set local storage item, will stay until you manually clear it  ***
localStorage.setItem('name', 'John')
localStorage.setItem('age', '30')
***remove from local storage ***
localStorage.removeItem('name')
*** get from local storage ***
const name = localStorage.getItem('name')
const name = localStorage.getItem('age')
console.log(name, age)
*** clear local storage ***
localStorage.clear()
*** added item to local storage; problem with this is it would replace the task everytime you added a new one, need to stringify to fix ***
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value
     localStorage.setItem('task', task)

    e.preventDefault()
})
*** Adding array of tasks, now you can add multiple items and it will update in local storage properly  ***
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value

    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)

     localStorage.setItem('tasks', JSON.stringify(task)) //formats array into a array saved as string
    alert('Task saved')
    e.preventDefault()
})

*** To turn the string back into a regular array using JSON.parse*** 
const tasks = JSON.parse(localStorage.getItem('tasks') 

    tasks.forEach(function(task){ 
        console.log(TASK)
    })





*** session storage will leave  once browser closed, session ends, syntax is same as local storage ***
sessionStorage.setItem('name', 'Beth')
