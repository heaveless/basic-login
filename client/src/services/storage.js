const TOKEN = "TOKEN;";
const USER = "USER";

// TOKEN

export const setToken = (value) => localStorage.setItem(TOKEN, value);

export const getToken = () => localStorage.getItem(TOKEN);

export const removeToken = () => localStorage.removeItem(TOKEN);

// USER

export const setUser = (value) => localStorage.setItem(USER, value);

export const getUser = () => localStorage.getItem(USER);

export const removeUser = () => localStorage.removeItem(USER);

// OTHERS

export const clearAll = () => [removeToken, removeUser].map((f) => f());
