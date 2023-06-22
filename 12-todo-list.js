let todoList = [];//[{name:'make a dinner',dueDate:'2023-06-05'}];
renderTodoList();

document.querySelector('.add-button').addEventListener('click',()=>{
  addTodo();
});

function addTodo(){

  const task = document.querySelector('.js-todo-input');
  const name = task.value;
  const dueDateImputElement = document.querySelector('.js-todo-date');
  const dueDate = dueDateImputElement.value;

  if(name==='reset'){
    reset();
    console.log('no more tasks'); 
  }
  else{
    todoList.push({name:name,dueDate:dueDate});//{name,dueDate}
    renderTodoList();
    document.querySelector('.js-todo-input').value = '';
    document.querySelector('.js-todo-date').value = '';
  } 
}
 
function renderTodoList(){
   /* task.value = '';*/
    let todoListHTML = '';


    todoList.forEach((todoObject, index)=>{
      
      const {name,dueDate} = todoObject;
      const html = `
                    <div class="list-name">
                      ${name}
                    </div>
                    <div class="list-date">
                      ${dueDate}
                    </div>
                      <button class="delete-button">Delete</button>
                    `;

      console.log(todoList);              
      todoListHTML += html;
    });
   /* 
    for (i=0; i<todoList.length; i++){
      const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;
      const {name,dueDate} = todoObject;
      const html = `
                    <div class="list-name">
                      ${name}
                    </div>
                    <div class="list-date">
                      ${dueDate}
                    </div>
                      <button class="delete-button">Delete</button>
                    `;

      console.log(todoList);              
      todoListHTML += html;
    }
   */ 
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;

    document.querySelectorAll('.delete-button').forEach((deleteButton,index)=>{
      console.log(deleteButton,index);
      deleteButton.addEventListener('click',()=>{
        console.log('click delete');
        deleteTodo(index,1);
      }); 
    });
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
