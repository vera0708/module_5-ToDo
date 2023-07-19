import { setStorage } from "./serviceStorage.js";

let dataList = [];

export const setData = (todo) => {
    dataList = todo;
};

export const getData = () => {
    const dataList = JSON.parse(localStorage.getItem('todoList') || '[]');
    return dataList;
};

export const addTodo = (task) => {
    const todo = {
        id: Math.random().toString(16).substring(2, 8),
        task: task,
        status: 'В процессе',
    };

    const dataList = getData();
    dataList.push(todo);
    setStorage('dataList', dataList);

    localStorage.setItem('todoList', JSON.stringify(dataList));
    return todo;
};

// export const removeContact = (task) => {
//     data = data.filter(cont => task !== cont.phone);
// };

// export const addDataList = (task, list) => {
//     const number = data.length + 1;
//     list.append(createRow(task));
//     console.log('list after: ', list);
//     data.push({
//         number: data.length,
//         task: task,
//         status: 'В процессе',
//     });
//     console.log('data after push: :', data);
// };

export const removeTask = (task) => {
    const dataList = getData();
    const newDataList = dataList.filter(item => item.id !== task.id);
    if (task.id === activeTask.id) {
        activeTask = dataList[newDataList.length - 1]
    }
    localStorage.setItem('todoList', JSON.stringify(newDataList));
}