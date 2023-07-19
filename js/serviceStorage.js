import { getData } from './data.js';


export const getStorage = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return [];
};

export const setStorage = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
};

export const removeStorage = (task) => {
    const filteredData = getData().filter(todo => todo.task !== task)
    setStorage('todoList', filteredData);
}