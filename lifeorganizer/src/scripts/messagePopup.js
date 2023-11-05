const popup = document.querySelector('.messagePopup');
let timer1;

const showMessage = message => {
  if(popup.classList.contains('showMessage')){
    popup.classList.remove('showMessage');
    clearTimeout(timer1);
    popup.classList.add('flashOut');
    setTimeout(() => {
      popup.classList.remove('flashOut');
    }, 50);
    
    setTimeout(() => {
      popup.textContent = message;
      popup.classList.add('showMessage');
    }, 50)
    } else {
      popup.textContent = message;
      popup.classList.add('showMessage');
    }  
    
  timer1 = "";

  timer1 = setTimeout(() => {
    popup.classList.remove('showMessage');    
  }, 4000)
}