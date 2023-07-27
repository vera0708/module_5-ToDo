import { getStorage } from "./serviceStorage.js";
export const user = prompt(`Введите ваше имя`);

let dataList = getStorage(user);

export const setData = (todo) => {
    dataList = todo;
};

export const getData = () => {
    return dataList;
};

export const addTodo = (task) => {
    const todo = {
        id: Math.random().toString(16).substring(2, 8),
        task: task,
        status: true,
    };
    dataList.push(todo);

    return todo;
};

export const removeTodo = (taskId) => {
    const dataList = getData();
    const newDataList = dataList.filter(item => item.id !== taskId);
    setData(newDataList);
};

export const changeTodo = (taskToEdit, taskId, st) => {
    const dataList = getData();
    const todoItem = dataList.find(item => item.id === taskId);
    todoItem.task = taskToEdit;
    if (st) {
        todoItem.status = false;
    };
    setData(dataList);
};

// export const udateTodo = (editTask, taskId) => {
//     const dataList = getData();
//     const todoItem = dataList.find(item => item.id === taskId);

//     todoItem.task = editTask;
//     console.log('todoItem.task :', todoItem.task);
//     setData(dataList);
// }