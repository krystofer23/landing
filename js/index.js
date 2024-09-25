const login = document.querySelector('#login');

const btn_open_login = document.querySelector('#btn_login');
const btn_close_login = document.querySelector('#btn_close_login');

btn_open_login.addEventListener('click', e => {
    login.classList.remove('none');
})

btn_close_login.addEventListener('click', e => {
    login.classList.add('none');
})