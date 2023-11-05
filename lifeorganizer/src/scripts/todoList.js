// const todoList = document.querySelector('#todoList');
// const itemInput = document.querySelector('#new-item');
// const completedList = document.querySelector('#completedTodos');
// const todos = document.querySelector('.todos');

// let todoArray = [];
// let completedArray = [];

// itemInput.addEventListener('submit', e => {
//   e.preventDefault();
//   const todo = itemInput.newItem.value;
//   addTodo(todo);
//   itemInput.reset();
// });

// todoList.addEventListener('click', e => {
//   if(e.target.classList.contains('red-text')){
//     const move = e.target.parentElement.querySelector('span').textContent;
//     moveToCompleted(move);
//     e.target.parentElement.remove();
//   }
// });

// completedList.addEventListener('click', e => {
//   if(e.target.classList.contains('red-text')){
//     let todo = e.target.parentElement.querySelector('span').textContent;
//     removeFromCompletedArray(todo);
//     e.target.parentElement.remove();
//     setTodoSessionStorage();
//   }
// })

// completedList.addEventListener('click', e => {
//   if(e.target.classList.contains('blue-text')){
//     const todo = e.target.parentElement.querySelector('span').textContent;
//     console.log("todo to move:", todo);
//     addTodo(todo);
//     removeFromCompletedArray(todo);
//     e.target.parentElement.remove();
//     setTodoSessionStorage();
//   }
// })

// const addTodo = todo => {
//   const todoHTML = `
//     <li class="collection-item">
//       <i class="material-icons">brightness_1</i>
//         <span>${todo}</span>
//       <i class="material-icons red-text">clear</i>
//     </li>
//   `

//   todoList.innerHTML += todoHTML;
//   todoArray.push(todo);
//   setTodoSessionStorage();
//   updateTodoDatabase();
// }

// const moveToCompleted = todo => {
//   console.log("todo: ", todo);

//   const completedHTML =  `
//     <li class="collection-item">
//       <i class="material-icons">brightness_1</i>
//         <span class="grey-text">${todo}</span>
//       <i class="material-icons red-text">clear</i>
//       <i class="material-icons blue-text text-lighten-2">arrow_upward</i>
//     </li>
//   `

//   completedList.innerHTML += completedHTML;
//   completedArray.push(todo);

//   removeFromTodoArray(todo);
//   setTodoSessionStorage();
//   updateTodoDatabase();
// }

// const removeFromTodoArray = todo => {
//   todoArray = todoArray.filter(content => {
//     return content != todo;
//   })
// }

// const removeFromCompletedArray = todo => {
//   completedArray = completedArray.filter(content => {
//     return content != todo;
//   })
// }

// const setTodoSessionStorage = () => {
//   sessionStorage.setItem('todoList', JSON.stringify(todoArray));
//   sessionStorage.setItem('completedList', JSON.stringify(completedArray));
// }

// const updateTodoDatabase = () => {
//   userID = currentUser.uid;

//   db.collection(userID).doc('TodoList').set({
//     todoList: todoArray
//   })
//   .then(() => {
//     console.log('todo list on database was updated');
//   })
//   .catch(err => {
//     sendMessage('there was an error:' + err);
//   })
// }

// const softAddTodo = todo => {
//   const todoHTML = `
//     <li class="collection-item">
//       <i class="material-icons">brightness_1</i>
//         <span>${todo}</span>
//       <i class="material-icons red-text">clear</i>
//     </li>
//   `
//   todoList.innerHTML += todoHTML;
// }

// const loadTodos = () => {
//   console.log('loading todos');

//   todoList.innerHTML = '';

//   if(!sessionStorage.getItem('todoList') == null ||
//     !JSON.parse(sessionStorage.getItem('todoList')) == false){
//     todoArray = JSON.parse(sessionStorage.getItem('todoList'));

//     todoArray.forEach(todo => {
//       softAddTodo(todo);
//     });
//   } else {
//     console.log('trying to pull from database');

//     userID = currentUser.uid;

//     let list = db.collection(userID).doc('TodoList');

//     list.get()
//     .then(doc => {
//       todoArray = doc.data().todoList;

//       sessionStorage.setItem('todoList', JSON.stringify(todoArray));

//       todoArray.forEach(todo => {
//         softAddTodo(todo);
//       })
//     })
//   }
// }