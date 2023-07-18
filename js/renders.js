import { createForm, createMain, createRow, createTable, createTableWrapper, createTitle } from "./createElements.js";

export const renderTodo = (elem, data) => {
    const allRows = data.map(createRow);
    elem.append(...allRows);
    return allRows;
}

export const renderToDoList = (app) => {
    // setData(getStorage('dataList'));

    const main = createMain();
    const title = createTitle();
    const { form, btnSubmit, btnReset } = createForm();
    const tableWrapper = createTableWrapper();
    const table = createTable();

    tableWrapper.append(table);
    main.append(title, form, tableWrapper);
    app.append(main);

    return {
        form,
        thead: table.thead,
        list: table.tbody,
        btnSubmit,
        btnReset,
    }
}