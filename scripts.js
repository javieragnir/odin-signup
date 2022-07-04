const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');

const passFields = [password, confirm];

passFields.forEach(item => item.addEventListener('focusout', checkMatch));

function checkMatch() {
    if (password.value && confirm.value) {
        if (password.value !== confirm.value) {
            passFields.forEach(item => item.classList.add('invalid'));
        } else {
            passFields.forEach(item => item.classList.remove('invalid'));
        }
    }
}