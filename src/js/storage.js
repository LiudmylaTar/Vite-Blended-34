export function saveUserData(data, key) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getUserData(key) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export function removeData(key) {
  localStorage.removeItem(key);
}
