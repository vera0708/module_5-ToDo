import { createRow } from "./createElements.js";
import { addTodo, removeTask } from "./data.js";
import { removeStorage } from "./serviceStorage.js";

export const formControl = (form) => {
    const toDoInput = form.querySelector('.form-control');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newToDo = toDoInput.value;
        console.log('newToDo: ', newToDo);
        const todo = addTodo(newToDo);
        createRow(todo);
        toDoInput.value = '';
        toDoInput.focus();
    })
};

export const deleteTask = (list) => {
    list.addEventListener('click', (e) => {
        const target = e.target;
        const delBtn = target.closest('.btn-danger');
        if (delBtn) {
            const task = delBtn.closest('.task');
            removeTask(task);
            removeStorage(task);
            target.closest('.table-light').remove();
        }
    });

    //    const dataList = getData();
    // const newDataList = dataList.filter(item => item.id !== task.id);
    // if (task.id === activeTask.id) {
    //     activeTask = dataList[newDataList.length - 1]
    // }
    // localStorage.setItem('todoList', JSON.stringify(newDataList)); 
};