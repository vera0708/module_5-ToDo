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


//  export const btn = ({ className, type, text }) => {
//         const button = document.createElement('button');
//         button.className = className;
//         button.type = type;
//         button.textContent = text;
//         return button;
//     };

export const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('d-flex', 'align-items-center', 'mb-3');
    form.insertAdjacentHTML('beforeend', `
            <label class="form-group me-3 mb-0">
            <input type="text" class="form-control" placeholder="ввести задачу">
        </label>
    `);

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('btn', 'btn-primary', 'me-3');
    btnSubmit.type = 'submit';
    btnSubmit.textContent = 'Сохранить';

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

export const createRow = ({ number, task }) => {

    const row = document.createElement('tr');
    row.classList.add('table-light');

    const tdNumber = document.createElement('td');
    tdNumber.textContent = number;

    const tdTask = document.createElement('td');
    tdTask.classList.add('table-light');;
    tdTask.textContent = task;

    const tdStatus = document.createElement('td');
    tdStatus.textContent = 'В процессе';

    const tdBtnGroupe = document.createElement('td');

    const btnDel = document.createElement('button');
    btnDel.classList.add('btn', 'btn-danger', 'me-3');
    btnDel.type = 'button';
    btnDel.textContent = 'Удалить';

    const btnEnd = document.createElement('button');
    btnEnd.classList.add('btn', 'btn-success');
    btnEnd.type = 'button';
    btnEnd.textContent = 'Завершить';

    tdBtnGroupe.append(btnDel, btnEnd);

    row.append(tdNumber, tdTask, tdStatus, tdBtnGroupe);

    return row;
}
