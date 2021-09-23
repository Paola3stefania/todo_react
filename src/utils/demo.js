// handles all the data for starting the project
import { toDoS } from "./toDoExamples";

const LOCAL_STORAGE_KEY = "task-todos";
const COMPLETED_KEY = "task-completed";
const ACTIVE_KEY = "task-active";

function saveIntoLocal(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
  // eslint-disable-next-line
  console.log("Examples saved");
}

function getLocalStorageObject(key) {
  try {
    const arrayObjetos = JSON.parse(localStorage.getItem(key));
    const list = Object.values(arrayObjetos);
    return { tasks: list };
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
    return {};
  }
}

function getTextFromTasks(stringKey) {
  const { key } = getLocalStorageObject(stringKey);
  return key.map((obj) => obj.text);
}

function getLastItem(key) {
  const list = getLocalStorageObject(key);
  return list[list.length - 1];
}

function getLocalStorageFlag(key) {
  return JSON.parse(localStorage.getItem(key));
}

function startDemo() {
  // eslint-disable-next-line
  console.log("Demo starting...");
  saveIntoLocal(LOCAL_STORAGE_KEY, toDoS);

  const completedList = toDoS.filter((obj) => obj.done === true);
  // eslint-disable-next-line
  console.log(completedList);
  saveIntoLocal(COMPLETED_KEY, completedList);

  const arrayActive = toDoS.filter((obj) => {
    return obj.done !== true;
  });
  // eslint-disable-next-line
  console.log(arrayActive);
  saveIntoLocal(ACTIVE_KEY, arrayActive);
}

function clearCompleted() {
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    const objectActives = getLocalStorageObject(ACTIVE_KEY);
    const list = Object.values(objectActives)[0];
    saveIntoLocal(LOCAL_STORAGE_KEY, list);
    localStorage.removeItem(COMPLETED_KEY);
  }
}

export {
  saveIntoLocal,
  getLocalStorageObject,
  startDemo,
  getLocalStorageFlag,
  getLastItem,
  clearCompleted,
  getTextFromTasks,
};
