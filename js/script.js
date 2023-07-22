import { clearInput, completeTask, controlForm, deleteTask, toggleDisableBtn } from "./control.js";
import { renderToDoList, renderTodo } from "./renders.js";
import { getData } from './data.js';

{
    const init = (selectorApp, user) => {
        const app = document.querySelector(selectorApp);
        const { list, btnReset, btnSubmit, form, formUser, overlayUser } = renderToDoList(app);
        // modalContol(formUser, overlayUser);

        renderTodo(list, getData());
        controlForm(form, list, btnSubmit);
        clearInput(form, btnReset);
        deleteTask(list);
        toggleDisableBtn(form, btnSubmit);
        completeTask(list);

        console.log(user);

        //    const user = prompt(`Введите ваше имя`);
    }
    window.toDoInit = init;
}
