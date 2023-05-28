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
    let todoListHTML = '';
    for (i=0; i<todoList.length; i++){
      const todo = todoList[i];
      const html = `<p>${todo}</p>`;
      todoListHTML += html;
      console.log(todoListHTML);
    }
    
    
    
    
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;/**/
    
  } 
}
 




function reset(){
   todoList = [];
}
