// const logInCheck = document.querySelector('.logInCheck');
// const loginPanel = document.querySelector('.login');
// const loginOption = document.querySelector('.loginOption');
// const registerOption = document.querySelector('.registerOption');
// const loginForm = document.querySelector('#loginUser');
// const registerForm = document.querySelector('#registerUser');
// const loginButton = document.querySelector('#logInButton');
// const registerButton = document.querySelector('#registerButton');
// const authOptions = document.querySelector('.authOptions');
// const appIcon = document.querySelector('#apps');
// const applist = document.querySelector('.applist');

// let currentUser;

// console.log('authOptions:' ,authOptions);


// // EVENT LISTENERS //
// // auth.onAuthStateChanged(user => {
// //   if (user) {
// //     logInCheck.classList.remove('hidden');
// //     loginPanel.classList.add('hidden');
// //     appIcon.classList.remove('hidden');

// //     appIcon.addEventListener('click', e => {
// //       applist.classList.remove('hidden');
// //       showVeil();
// //     })

// //     currentUser = auth.currentUser;
// //   } else {
// //     logInCheck.classList.add('hidden');
// //     loginPanel.classList.remove('hidden');
// //     appIcon.classList.add('hidden');
// //   }
// // });

// authOptions.addEventListener('click', e => {
//   if(e.target.classList.contains('btn')){
//     if(e.target.classList.contains('active') == false){
//       console.log('buttons should switch');
//       toggleAuthButtons();
//     }
//   }  
// })

// loginButton.addEventListener('click', e => {
//   submitLoginInfo();
// })

// registerButton.addEventListener('click', e => {
//   submitRegistrationInfo();
// })

// // applist.addEventListener('click', e => {
// //   if(e.target.classList.contains('signOut')){
// //     auth.signOut()
// //     .then(() => {
// //       showMessage('successfully logged out');
// //       hideVeil();
// //       hideApps();
// //     });
    
// //   }
// // })

// //FUNCTIONS
// const toggleAuthButtons = () => {
//   loginOption.classList.toggle('active');
//   registerOption.classList.toggle('active');
//   loginButton.classList.toggle('hidden');
//   registerButton.classList.toggle('hidden');

//   loginForm.classList.toggle('hidden');
//   registerForm.classList.toggle('hidden');
// }

// loginForm.addEventListener('keyup', e => {
//   if(e.key == 'Enter'){
//     console.log('login data submitted');
//     e.preventDefault();
//     submitLoginInfo();
//   }  
// })

// registerForm.addEventListener('keyup', e => {
//   if(e.key == 'Enter'){
//     console.log('registration submitted');
//     e.preventDefault();
//     submitRegistrationInfo();
//   }
// })

// const submitLoginInfo = () => {
//   // let email = loginForm.emailAddress.value;
//   // let password = loginForm.password.value;
  
//   // auth.signInWithEmailAndPassword(email, password)
//   //   .then(() => {
//   //     displayName = auth.currentUser.displayName
//   //     showMessage('Welcome, ' + displayName + "!");
//   //   })
//   //   .catch(err => {
//   //     let message = err.toString();
//   //     showMessage(message);
//   //   })

//   console.log('login info submitted');
// }

// const submitRegistrationInfo = () => {
//   if(validateRegistrationForm()){
//     registerNewUser();
//   } else {
//     console.log('registration form not properly filled out');
//     // showMessage('registration form not properly filled out');
//   }
// }

// const validateRegistrationForm = () => {
//   return(registerForm.displayName.value && registerForm.emailAddress.value && registerForm.password.value)
// }

// const registerNewUser = () => {
//   // let displayName = registerForm.displayName.value;
//   // let email = registerForm.emailAddress.value;
//   // let password = registerForm.password.value;
//   // let confirmPassword = registerForm.confirmPassword.value;

//   // if(password == confirmPassword){
//   //   auth.createUserWithEmailAndPassword(email, password)
//   //   .then(() => {
//   //     showMessage('user successfully created!');
//   //     auth.currentUser.updateProfile({
//   //       displayName: displayName
//   //     })
//   //   })
//   //   .catch(err => {
//   //     let message = err.toString();
//   //     showMessage(message);
//   //   });    
//   // } else {
//   // showMessage('passwords do not match');
//   // }

//   console.log('new user registered');
// }
