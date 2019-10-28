const vacationFormEl = document.querySelector('#vacationForm')
const titleEl = document.querySelector('h4.title');
let targetEl = '';

function openForm(title, id) {
    document.body.className = 'overflow-hidden';
    targetEl = document.querySelector(id);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    titleEl.textContent = title;
    vacationFormEl.className = 'vacation-form';
}

function closeForm() {
    vacationFormEl.className = 'display-none';
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
    document.body.classList.remove('overflow-hidden');
}