// const user = prompt(`Введите ваше имя`);
// console.log(user);

// let dataList = {
//     user,
//     todo: [],
// };

let dataList = [];

export const setData = (todo) => {
    dataList = todo;
    // dataList.todo = todo;
};

export const getData = () => {
    //return dataList.todo
    return dataList;
};

export const addTodo = (task) => {
    const todo = {
        id: Math.random().toString(16).substring(2, 8),
        task: task,
        status: true,
    };
    dataList.push(todo);
    // dataList.todo.push(todo);

    return todo;
};

// Далее везде изменить на dataList.todo
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