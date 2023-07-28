import { createRow, updateTdNumber } from "./createElements.js";
import { addTodo, changeTodo, getData, removeTodo, user } from "./data.js";
import { removeStorage, setStorage } from "./serviceStorage.js";

export const controlForm = (form, list, btnSubmit) => {
    const toDoInput = form.querySelector('.form-control');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newToDo = toDoInput.value;

        const todo = addTodo(newToDo);

        const data = getData();
        setStorage(user, data);

        const row = createRow(todo, data.length);
        list.append(row);

        toDoInput.value = '';
        toDoInput.focus();
        btnSubmit.disabled = true;
    })
};

export const clearInput = (form, btnReset, btnSubmit) => {
    const toDoInput = form.querySelector('.form-control');
    btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        toDoInput.value = '';
        btnSubmit.setAttribute('disabled', '');
    })
};

export const toggleDisableBtn = (form, btnSubmit) => {
    const toDoInput = form.querySelector('.form-control');

    toDoInput.addEventListener('input', (e) => {
        const text = e.target.value;

        if (text) {
            btnSubmit.disabled = false;
        } else {
            btnSubmit.disabled = true;
        }
    });
};

export const deleteTask = (list) => {
    list.addEventListener('click', (e) => {
        const target = e.target;
        const delBtn = target.closest('.btn-danger');
        if (delBtn) {
            const beSure = confirm(`Вы уверены, что хотите удалить этот пункт?`);
            if (beSure) {
                const delRow = target.closest('.table-row');
                const taskIdElement = delRow.querySelector('.task-id');
                const taskId = taskIdElement.textContent;

                removeTodo(taskId);
                removeStorage(taskId);
                target.closest('.table-row').remove();
                updateTdNumber(list);
            }
        }
    });
};

export const editTask = (list) => {
    list.addEventListener('click', (e) => {
        const target = e.target;
        const editBtn = target.closest('.btn-secondary');
        if (editBtn) {
            const editedRow = target.closest('.table-light');
            const editTask = editedRow.querySelector('.task');
            const editedTaskId = editedRow.querySelector('.task-id');
            const editedNewtask = prompt('Новое название задачи: ', editTask.textContent);
            if (editedNewtask !== null) {
                editTask.textContent = editedNewtask;
                const taskId = editedTaskId.textContent;
                changeTodo(editedNewtask, taskId);
                const data = getData();
                setStorage(user, data);
            }
        }
    });
};

export const completeTask = (list) => {
    list.addEventListener('click', (e) => {
        const target = e.target;
        const endBtn = target.closest('.btn-success');

        if (endBtn) {
            const completeRow = target.closest('.table-light');
            const completeTask = completeRow.querySelector('.task');
            const completeTaskId = completeRow.querySelector('.task-id');
            const completeTaskStatus = completeRow.querySelector('.status');

            completeRow.classList.remove('table-light');
            completeRow.classList.add('table-success');
            completeTask.classList.remove('task');
            completeTask.classList.add('text-decoration-line-through');
            const taskToEnd = completeTask.textContent;
            const taskId = completeTaskId.textContent;
            completeTaskStatus.textContent = 'Выполнена';

            changeTodo(taskToEnd, taskId, 'st');
            endBtn.setAttribute('disabled', '');
            const data = getData();
            setStorage(user, data);

        }
    });
};

