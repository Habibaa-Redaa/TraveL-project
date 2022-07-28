let Btn = document.querySelector('#login-btn');
let sign_inForm = document.querySelector('.sign_in');
let formClose = document.querySelector('#user');

Btn.addEventListener('click', () =>{
    sign_inForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    sign_inForm.classList.remove('active');
});