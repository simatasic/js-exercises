let todoList = [];
function addTodo(){
  const task = document.querySelector('.js-todo-input');
  const name = task.value;
  if(name==='reset'){
    reset();
    console.log('no more tasks'); 
  }
  else{
    todoList.push(name);
    task.value = '';
    console.log(todoList);  
  } 
}

function reset(){
   todoList = [];
}
