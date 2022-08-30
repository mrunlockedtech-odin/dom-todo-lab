//Cached Element References
//Create Cached Element References by using ID's created in HTML
const todoButton = document.getElementById("submit-button")
const todoInput = document.getElementById("task")
const todoList = document.getElementById("todo-list")

//Test if elements were cached correctly
//console.log(todoButton, todoInput, todoList)

//Event Listeners
todoButton.addEventListener('click',function(evt){
  const li = document.createElement('li')
  li.textContent = todoInput.value
  console.dir(li)
  todoInput.value = ""
  todoList.appendChild(li)
})