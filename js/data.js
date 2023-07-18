// import { setStorage } from "./serviceStorage.js";
import { createRow } from "./createElements.js";

let data = [
    {
        number: '1',
        task: 'Купить слона',
        status: 'В процессе',
    },
    {
        number: '2',
        task: 'Помыть кота',
        status: 'Выполнена',
    },
    {
        number: '3',
        task: 'Помыть окно',
        status: 'В процессе',
    },
];

export const setData = (value) => {
    data = value;
};

export const getData = () => {
    return data;
};

// export const addTask = (task) => {
// console.log('length1: :', data.length);
// data.push({
//     number: data.length,
//     task: task,
//     status: 'В процессе',
// });
//     setStorage('dataList', data);

// };

// export const removeContact = (task) => {
//     data = data.filter(cont => task !== cont.phone);
// };

export const addDataList = (task, list) => {
    const number = data.length + 1;
    list.append(createRow({ number, task }));
    console.log('list after: ', list);
    data.push({
        number: data.length,
        task: task,
        status: 'В процессе',
    });
    console.log('data after push: :', data);
};

export const deleteTask = (list) => {
    list.addEventListener('click', (e) => {
        const target = e.target;
        const delBtn = target.closest('.btn-danger');
        if (delBtn) {
            target.closest('.table-light').remove();
        }
    })
}