import { addDataList } from "./data.js";

export const formControl = (form, list) => {
    const toDoInput = form.querySelector('.form-control');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const toDoText = toDoInput.value;
        console.log('list to: ', list);
        const newToDo = toDoText;
        console.log('newToDo: ', newToDo);

        addDataList(newToDo, list);
        // addTask(newToDo);
        toDoInput.value = '';
        toDoInput.focus();
    })
};