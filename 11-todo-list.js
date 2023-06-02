let todoList = [];
renderTodoList();

function addTodo(){
  const task = document.querySelector('.js-todo-input');
  const name = task.value;
  if(name==='reset'){
    reset();
    console.log('no more tasks'); 
  }
  else{
    todoList.push(name);
    renderTodoList();
    document.querySelector('.js-todo-input').value = '';
  } 
}
 
function renderTodoList(){
   /* task.value = '';*/
    let todoListHTML = '';
    for (i=0; i<todoList.length; i++){
      const todo = todoList[i];
      const html = `<p>${todo}</p>`;
      todoListHTML += html;
    }
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function reset(){
   todoList = [];
}
