// save into localStorage for toDos

function saveIntoLocal(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

function getLocalStorage(key) {
  return localStorage.getItem(key);
}
export { saveIntoLocal, getLocalStorage };
