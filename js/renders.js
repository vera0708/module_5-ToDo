import { createForm, createMain, createRow, createTable, createTableWrapper, createTitle } from "./createElements.js";
import { setData } from "./data.js";
import { getStorage } from "./serviceStorage.js";

export const renderTodo = (elem, data) => {
    const allRows = data.map((task, index) => createRow(task, index + 1));
    elem.append(...allRows);
    return allRows;
}

export const renderToDoList = (app) => {
    setData(getStorage('dataList'));

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
        list: table.tbody,
        btnSubmit,
        btnReset,
    }
}