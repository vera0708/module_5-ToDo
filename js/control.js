import { createRow, updateTdNumber, updateTdStatus } from "./createElements.js";
import { addTodo, changeTodo, getData, removeTodo, udateTodo } from "./data.js";
import { setStorage } from "./serviceStorage.js";

export const controlForm = (form, list, btnSubmit) => {
    const toDoInput = form.querySelector('.form-control');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newToDo = toDoInput.value;

        const todo = addTodo(newToDo);

        const data = getData();
        setStorage('dataList', data);

        const row = createRow(todo, data.length);
        list.append(row);

        toDoInput.value = '';
        toDoInput.focus();
        btnSubmit.disabled = true;
    })
};

export const clearInput = (form, btnReset) => {
    const toDoInput = form.querySelector('.form-control');
    btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        toDoInput.value = '';
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
                const delRow = target.closest('.table-light');

                const taskIdElement = delRow.querySelector('.task-id');
                const taskId = taskIdElement.textContent;

                removeTodo(taskId);

                const data = getData();
                setStorage('dataList', data);

                target.closest('.table-light').remove();
                updateTdNumber(list);
            }
        }
    });
};

export const editTask = (list) => {
    list.addEventListener('click', (e) => {
        const target = e.target;
        const editBtn = target.closest('.btn-secondary');
        console.log('editBtn :', editBtn);
        if (editBtn) {
            const editedRow = target.closest('.table-light');
            const editTask = editedRow.querySelector('.task');
            const editedTaskId = editedRow.querySelector('.task-id');
            const editedNewtask = prompt('Новое название задачи: ', editTask.textContent);
            editTask.textContent = editedNewtask;
            const taskId = editedTaskId.textContent;

            udateTodo(editedNewtask, taskId);
            const data = getData();
            setStorage('dataList', data);
        }
    });
};

export const completeTask = (list) => {
    list.addEventListener('click', (e) => {
        const target = e.target;
        const endBtn = target.closest('.btn-success');
        const editBtn = target.closest('.btn-secondary');
        if (endBtn) {
            const completeRow = target.closest('.table-light');
            const completeTask = completeRow.querySelector('.task');
            const completeTaskId = completeRow.querySelector('.task-id');

            completeRow.classList.remove('table-light');
            completeRow.classList.add('table-success');

            completeTask.classList.remove('task');
            completeTask.classList.add('text-decoration-line-through');

            const taskToEnd = completeTask.textContent;
            const taskId = completeTaskId.textContent;

            console.log('taskToEnd :', taskToEnd);

            changeTodo(taskToEnd, taskId);

            const data = getData();
            setStorage('dataList', data);

            updateTdStatus(list);
        }
    });
};

