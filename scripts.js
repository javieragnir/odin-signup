const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const submit = document.querySelector('#submit');

const passFields = [password, confirm];

passFields.forEach(item => item.addEventListener('focusout', checkMatch));

submit.addEventListener('click', stopSubmit);

function checkMatch() {
    if (password.value && confirm.value) {
        if (password.value !== confirm.value) {
            passFields.forEach(item => item.classList.add('invalid'));
        } else {
            passFields.forEach(item => item.classList.remove('invalid'));
        }
    }
}

function stopSubmit(event) {
    if (password.classList.contains('invalid') || confirm.classList.contains('invalid')){
        event.preventDefault();
    }
}