/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(label,type="text"){
  //create label
  let lab=document.createElement("label")
  lab.innerText=label;
  //create input
  let typ=document.createElement("input")
  typ.type=type;
  //join both
  lab.append(typ);

  return lab;
}
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
console.log("2");
function createInputElm(label,type="text"){
  //create label
  let string=`<label>${label}: <input type="${type}"></label>`

  return string;
}
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(arr){
  ul=document.createElement("ul")
  li=document.createElement("li")
  arr.forEach(element => {
    ul.append(li.innerText=element)
  });
  console.log(ul);
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(arr){
  ul=document.createElement("ul")

  
  arr.forEach(arr=>{
    li=document.createElement("li");
    //create p
    p=document.createElement("p")
    p.innerText=arr.name;
    //create input
    input=document.createElement("input")
    input.setAttribute("type","checkbox")
    input.setAttribute("checked","")
    input.setAttribute("name"," ")
    input.setAttribute("id"," ")
    //create span
    span=document.createElement("span")
    span.innerText="X";
    li.append();
    li.append(p);
    li.append(input);
    li.append(span);
    ul.append(li)
  })
  
  return ul;
}
// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
