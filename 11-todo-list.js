let todoList = [{name:'make a dinner',dueDate:'2023-06-05'}];
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
      const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;
      const {name,dueDate} = todoObject;
      const html = `
                    <p>
                      ${name},${dueDate}
                      <button onclick="
                        deleteTodo(${i},1);
                        ">Delete</button>
                    </p>`;
      console.log(todoList);              
      todoListHTML += html;
    }
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
 
function deleteTodo(arg,nmb){
  todoList.splice(arg,nmb);
  console.log('delete todo');
  renderTodoList();
}

function reset(){
   todoList = [];
   renderTodoList();
}
