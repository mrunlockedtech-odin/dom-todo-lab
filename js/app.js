//Cached Element References
//Create Cached Element References by using ID's created in HTML
const todoButton = document.getElementById("submit-button")
const todoInput = document.getElementById("task")
const todoList = document.getElementById("todo-list")
const resetButton = document.getElementById('reset-button')

//Test if elements were cached correctly
//console.dir(todoList)

//Event Listeners
todoButton.addEventListener('click',function(evt){
  //If input is empty on button press, alert
  if(todoInput.value === ''){
    alert("Please Enter a Task In The Box")
  }
  else{  
    //Else continue with function
    const li = document.createElement('li')
    li.textContent = todoInput.value
    todoInput.value = ""
    todoList.appendChild(li)
    //console.dir(todoList)
  }
})


resetButton.addEventListener('click',function(evt){
  //Upon button press, clear any HTML within ul, this will include list elements
  //May not be the correct way in the future if other html elements are within the list
  todoList.innerHTML = ''
  todoInput.value = ''
})

todoList.addEventListener('click',function(evt){
  todoList.removeChild(evt.target)
})