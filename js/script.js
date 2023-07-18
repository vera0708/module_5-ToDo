import { formControl } from "./control.js";
import { deleteTask } from "./data.js";
import { renderToDoList, renderTodo } from "./renders.js";
import { getData } from './data.js';

{
    const init = (selectorApp) => {
        const app = document.querySelector(selectorApp);
        const { list, btnReset, thead, btnSubmit, form } = renderToDoList(app);

        renderTodo(list, getData());
        deleteTask(list);
        formControl(form, list);

        // const userChoice = prompt(`Введите ваше имя`);
        // const taskInput = document.querySelector('.form-control');
    }
    window.toDoInit = init;
}
