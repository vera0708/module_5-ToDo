export const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('app-container', 'vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');
    return main;
};

export const createTitle = () => {
    const h3 = document.createElement('h3');
    h3.textContent = `Todo App`;
    return h3;
};

export const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('d-flex', 'align-items-center', 'mb-3');
    form.insertAdjacentHTML('beforeend', `
            <label class="form-group me-3 mb-0">
            <input type="text" class="form-control" placeholder="ввести задачу">
        </label>
    `);

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('btn', 'btn-primary', 'me-3', 'submit-button');
    btnSubmit.type = 'submit';
    btnSubmit.textContent = 'Сохранить';
    btnSubmit.disabled = true;

    const btnReset = document.createElement('button');
    btnReset.classList.add('btn', 'btn-warning');
    btnReset.type = 'button';
    btnReset.textContent = 'Очистить';

    form.append(btnSubmit, btnReset);

    return { form, btnSubmit, btnReset };
};

export const createTableWrapper = () => {
    const tableWrapper = document.createElement('div');
    tableWrapper.classList.add('table-wrapper');
    return tableWrapper;
};

export const createTh = (value) => {
    const th = document.createElement('th');
    th.textContent = value;
    return th;
};

export const createTable = () => {
    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-bordered');

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const thNumber = createTh('№');
    const thTask = createTh('Задача');
    const thStatus = createTh('Статус');
    const thAction = createTh('Действия');

    tr.append(thNumber, thTask, thStatus, thAction);
    thead.append(tr);

    const tbody = document.createElement('tbody');

    table.append(thead, tbody);
    table.tbody = tbody;
    table.thead = thead;

    return table;
};

export const createRow = (task, taskNumber) => {
    const row = document.createElement('tr');
    row.classList.add(task.status ? 'table-light' : 'table-success');

    const tdNumber = document.createElement('td');
    tdNumber.classList.add('task-number');
    tdNumber.textContent = taskNumber;

    const tdTask = document.createElement('td');
    tdTask.classList.add(task.status ? 'task' : 'text-decoration-line-through');
    tdTask.textContent = task.task;

    const tdStatus = document.createElement('td');
    tdStatus.classList.add('status');
    tdStatus.textContent = task.status ? 'В процессе' : 'Выполнена';

    const tdInvisibleId = document.createElement('td');
    tdInvisibleId.classList.add('task-id');
    tdInvisibleId.textContent = task.id;
    tdInvisibleId.style.display = 'none';

    const tdBtnGroupe = document.createElement('td');

    const btnDel = document.createElement('button');
    btnDel.classList.add('btn', 'btn-danger', 'me-3');
    btnDel.type = 'button';
    btnDel.textContent = 'Удалить';

    const btnEnd = document.createElement('button');
    btnEnd.classList.add('btn', 'btn-success', 'me-3');
    btnEnd.type = 'button';
    btnEnd.textContent = 'Завершить';

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btn', 'btn-secondary');
    btnEdit.type = 'button';
    btnEdit.textContent = 'Редактировать';

    tdBtnGroupe.append(btnDel, btnEnd, btnEdit);

    row.append(tdNumber, tdTask, tdStatus, tdBtnGroupe, tdInvisibleId);

    return row;
};

export const updateTdNumber = (list) => {
    const rows = list.querySelectorAll('.table-light');

    rows.forEach((row, index) => {
        const numberElem = row.querySelector('.task-number');
        numberElem.textContent = index + 1;
    });
};

export const updateTdStatus = (list) => {
    const row = list.querySelector('.table-success');
    const statusElem = row.querySelector('.status');
    statusElem.textContent = false;
    console.log('Обновили статус', row);
};

// export const createFormUser = () => {
//     const overlay = document.createElement('div');
//     overlay.classList.add('form-overlay', 'is-visible');

//     const form = document.createElement('form');
//     form.classList.add('form');
//     form.insertAdjacentHTML('beforeend', `
//         <button class="close" type="button"></button>
//             <h2 class="form-title">Ведите ваше имя</h2>
//             <div class="form-groupe">
//                 <label class="form-label" for ="name">Пользователь-владелец todo:</label>
//                 <input class="form-input" name="name" id="name" type="text" required>
//             </div>
//     `);

//     const btnAuthe = document.createElement('button');
//     btnAuthe.classList.add('btn', 'btn-primary', 'me-3');
//     btnAuthe.type = 'submit';
//     btnAuthe.textContent = 'Подтверждаю имя';

//     form.append(btnAuthe);
//     overlay.append(form);
//     return {
//         overlay,
//         form,
//     }
// } 
