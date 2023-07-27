import { createForm, createMain, createRow, createTable, createTableWrapper, createTitle } from "./createElements.js";
import { setData, user } from "./data.js";
import { getStorage } from "./serviceStorage.js";

export const renderTodo = (elem, data) => {
    const allRows = data.map((task, index) => createRow(task, index + 1));
    elem.append(...allRows);
    return allRows;
}

export const renderToDoList = (app) => {
    setData(getStorage(user));

    const main = createMain();
    const title = createTitle();
    const { form, btnSubmit, btnReset } = createForm();
    const tableWrapper = createTableWrapper();
    const table = createTable();
    // const { formUser, overlayUser } = createFormUser();

    tableWrapper.append(table);
    main.append(title, form, tableWrapper);
    // main.append(title, form, tableWrapper, overlayUser);
    app.append(main);

    return {
        form,
        list: table.tbody,
        btnSubmit,
        btnReset,
    }
}