import { clearInput, completeTask, controlForm, deleteTask, editTask, toggleDisableBtn } from "./control.js";
import { renderToDoList, renderTodo } from "./renders.js";
import { getData } from './data.js';

{
    const init = (selectorApp) => {
        const app = document.querySelector(selectorApp);
        const { list, btnReset, btnSubmit, form } = renderToDoList(app);
        // modalContol(formUser, overlayUser);

        renderTodo(list, getData());
        controlForm(form, list, btnSubmit);
        clearInput(form, btnReset);
        deleteTask(list);
        toggleDisableBtn(form, btnSubmit);
        completeTask(list);
        editTask(list);
    }
    window.toDoInit = init;
}
