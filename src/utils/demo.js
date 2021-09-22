// save into localStorage for toDos
import { toDoS } from "./toDoExamples";

const LOCAL_STORAGE_KEY = "testing-todos";

function saveIntoLocal(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

function getLocalStorageObject(key) {
  const arrayObjetos = JSON.parse(localStorage.getItem(key));
  const list = Object.values(arrayObjetos);
  return list;
}

function getLastItem(key) {
  const list = getLocalStorageObject(key);
  return list[list.length - 1];
}

function getLocalStorageFlag(key) {
  return JSON.parse(localStorage.getItem(key));
}

function startDemo() {
  saveIntoLocal(LOCAL_STORAGE_KEY, toDoS);
}

export {
  saveIntoLocal,
  getLocalStorageObject,
  startDemo,
  getLocalStorageFlag,
  getLastItem,
};
