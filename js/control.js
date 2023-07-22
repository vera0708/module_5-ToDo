import { createRow, updateTdNumber, updateTdStatus } from "./createElements.js";
import { addTodo, changeTodo, getData, removeTodo } from "./data.js";
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

export const completeTask = (list) => {
    list.addEventListener('click', (e) => {
        const target = e.target;
        const endBtn = target.closest('.btn-success');
        if (endBtn) {
            const compleRow = target.closest('.table-light');
            const completeTask = compleRow.querySelector('.task');
            const completeTaskId = compleRow.querySelector('.task-id');

            compleRow.classList.remove('table-light');
            compleRow.classList.add('table-success');

            completeTask.classList.remove('task');
            completeTask.classList.add('text-decoration-line-through');

            const taskToEnd = completeTask.textContent;
            const taskId = completeTaskId.textContent;

            changeTodo(taskToEnd, taskId);

            const data = getData();
            setStorage('dataList', data);

            updateTdStatus(list);
        }
    });
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

// export const modalContol = (formUser, overlayUser) => {
//     overlayUser.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target === formOverlay ||
//             target.closest('.close')) {
//             formOverlay.classList.remove('is-visible');
//         }
//     });
// };