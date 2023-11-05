// const kitchenTab = document.querySelector('.kitchenTab');
// const kitchen = document.querySelector('.kitchen');
// const shoppingListTab = document.querySelector('.shoppingListTab');
// const recipesTab = document.querySelector('.recipesTab');
// const shoppingList = document.querySelector('.shoppingList');
// const recipesUI = document.querySelector('.recipesUI');
// const shoppingListInput = document.querySelector('#shoppingListItem');
// const shoppingListItems = document.querySelector('.shoppingListItems');
// const saveListButton = document.querySelector('#saveShoppingList');
// const loadListButton = document.querySelector('#loadShoppingList');
// const newRecipeInput = document.querySelector('#newRecipe');
// const newRecipeList = document.querySelector('#newRecipeList');
// const recipeInstructions = document.querySelector('#recipeInstructions');
// const instructionsButtons = document.querySelector('.instructionsButtonsContainer');
// const saveInstructionsButton = document.querySelector('#saveInstructions');
// const expandInstructionsButton = document.querySelector('#expandInstructions');
// const expansion = document.querySelector('.expansion');
// const expansionP = expansion.querySelector('p');

// let recipeNames = [];
// let currRecipe = "";
// let downloadedRecipes = [];
// let userID;

// kitchenTab.addEventListener('click', () => {
//   hideVeil();
//   hideApps();
//   kitchen.classList.remove('hidden');
//   todos.classList.add('hidden');
//   navTitle.textContent = 'Kitchen';
// })

// shoppingListItems.addEventListener('input', () => {
//   sessionStorage.setItem('shoppingList', shoppingListItems.value);
// })

// shoppingListTab.addEventListener('click', () => {
//   recipesUI.classList.add('hidden');
//   shoppingList.classList.remove('hidden');
//   instructionsButtons.classList.add('hidden');
//   recipeInstructions.classList.add('hidden');
//   shoppingListItems.value = sessionStorage.getItem('shoppingList');
// })

// recipesTab.addEventListener('click', () => {
//   userID = currentUser.uid;

//   shoppingList.classList.add('hidden');
//   recipesUI.classList.remove('hidden');
//   instructionsButtons.classList.remove('hidden');
//   recipeInstructions.classList.remove('hidden');

//   if(sessionStorage.getItem('recipes') == "" || sessionStorage.getItem('recipes') == null){
    
//     let inc = db.collection(userID).doc('recipes')

//     inc.get()
//       .then(data => {
        
//         let recipes = Object.values(data.data());

//         for(let i = 0; i < recipes.length; i++){
//           recipeNames[i] = {
//             name: recipes[i].name, 
//             instructions: recipes[i].instructions
//           }
//         }

//         parseRecipes(recipeNames);
        
//         sessionStorage.setItem('recipes', JSON.stringify(recipeNames));

//       })
//       .catch(err => {
//         console.log('error:', err);
//       })
//     } else {
//       let list = JSON.parse(sessionStorage.getItem('recipes'));

//       for(var i = 0; i < list.length; i++){
//         recipeNames[i] = {
//           name: list[i].name,
//           instructions: list[i].instructions
//         }
//       }

//       parseRecipes(recipeNames);

//     }

//   hiddenIfEmpty();
// })

// parseRecipes = list => {
//   newRecipeList.innerHTML = '';

//   list.forEach(recipe => {
//     addRecipe(recipe);
//   })
// }

// saveListButton.addEventListener('click', () => {
//   saveShoppingList();
// })

// newRecipeInput.addEventListener('submit', e => {
//   e.preventDefault();

//   let recipe = {name: newRecipeInput.newRecipe.value, 
//   instructions: newRecipeInput.newRecipe.value + ":\n"};

//   addRecipe(recipe);
//   recipeNames.push(recipe);
//   newRecipeInput.reset();
  
//   currRecipe = recipe;
//   recipeInstructions.value = recipe.instructions;
//   hiddenIfEmpty();
// })

// loadListButton.addEventListener('click', () => {
//   loadShoppingList();
// })

// const addRecipe = recipe => {
//   newRecipeList.classList.remove('hidden');
//   let html = `
//     <li class="collection-item" name="${recipe.name}">
//       <i class="material-icons">local_dining</i>
//         <span>${recipe.name}</span>
//       <i class="material-icons right red-text">close</i>
//     </li>
//   `
//   newRecipeList.innerHTML += html;
// }

// const saveShoppingList = () => {
//   userID = currentUser.uid;

//   let list = shoppingListItems.value;
//   sessionStorage.setItem('shoppingList', list);

//   db.collection(userID).doc('shoppingList').set({
//     shoppingList: list
//   })
//   .then(() => {
//     showMessage('shopping list successfully saved to database');
//   })
//   .catch(err => {
//     showMessage('there was an error:' + err);
//   })  
// }

// const loadShoppingList = () => {
//   userID = currentUser.uid;

//   let list = db.collection(userID).doc('shoppingList');

//   list.get()
//   .then(doc => {
//     sessionStorage.setItem('shoppingList', doc.data().shoppingList);
//     shoppingListItems.value = doc.data().shoppingList;
    
//   })
//   .catch(err => {
//     showMessage('error loading information:' + err);
//   })
// }


// ////////////////////
// //recipe functions//
// ////////////////////

// const hiddenIfEmpty = () => {
//   if(recipeNames.length == 0 || currRecipe == ""){
//     // recipeInstructions.classList.add('hidden');
//     recipeInstructions.style.visibility = 'hidden';
//     instructionsButtons.style.visibility = 'hidden';
//   } else {
//     // recipeInstructions.classList.remove('hidden');
//     recipeInstructions.style.visibility = 'visible';
//     instructionsButtons.style.visibility = 'visible';
//   }
// }

// findRecipeName = e => {
//   return e.target.parentElement.querySelector('span').textContent;
// }

// newRecipeList.addEventListener('click', e => {
//   if(e.target.classList.contains('red-text') == false){
//     if(e.target.tagName == "LI"){
//         currRecipe = recipeNames.find(recipe => {
//         return recipe.name == e.target.querySelector('span').textContent
//       })
//       } else {
//         currRecipe = recipeNames.find(recipe => {
//         return recipe.name == e.target.parentElement.querySelector('span').textContent
//       })
//     }
    
//     recipeInstructions.value = currRecipe.instructions;
//   }
//   hiddenIfEmpty();
// })

// recipeInstructions.addEventListener('change', e => {
//   currRecipe.instructions = recipeInstructions.value;
// })

// newRecipeList.addEventListener('click', e => {
//   if(e.target.classList.contains('red-text')){
//     e.target.parentElement.remove();
//     recipeNames = recipeNames.filter(recipe => {
//       return recipe.name != findRecipeName(e);
//     });
//     currRecipe = "";
//     recipeInstructions.value = "";
    
//     hiddenIfEmpty();
//   }

//   if(newRecipeList.getElementsByTagName('li').length == 0){
//     newRecipeList.classList.add('hidden');
//     hiddenIfEmpty();
//   }
// })

// saveInstructionsButton.addEventListener('click', () => {
//   userID = currentUser.uid;

//   sessionStorage.setItem('recipes', JSON.stringify(recipeNames));
//   sessionStorage.setItem('recipes', JSON.stringify(recipeNames));

//   db.collection(userID).doc('recipes').set({
//     ...recipeNames
//   })
//   .then(() => {
//     showMessage('recipes saved to the database successfully')
//   })
//   .catch(err => {
//     showMessage('save failed:' + err);
//   })
// })



// expandInstructionsButton.addEventListener('click', () => {
//   showExpansion(currRecipe);
// })

// expansion.querySelector('span').addEventListener('click', e => {
//   hideVeil();  
//   expansion.classList.add('hidden');
//   expansionP.textContent = '';
// })

// document.addEventListener('keyup', e => {
//   if(e.key === "Escape"){
//     hideVeil();
//     hideApps();
//     expansion.classList.add('hidden');
//     expansionP.textContent = '';
//   }
// })

// showExpansion = currRecipe => {
//   showVeil();
//   expansion.classList.remove('hidden');
//   let instructions = `<pre>${currRecipe.instructions}</pre>`;
//   expansionP.innerHTML = instructions;
// }

// hiddenIfEmpty();