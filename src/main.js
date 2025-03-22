// Перед вами форма для авторизації на сайті
// (правильні дані для входу збережені в обʼєкті USER_DATA)

// Розбийте код на кілька файлів:
// storage.js - функції для роботи зі сховищем;
// refs.js - посилання на всі потрібні елементи в html;
// main.js - головний файл, де вся основна логіка додатка.
// Ви маєте додати перевірку введених даних при сабміті:
// Якщо введені дані не збігаються зі збереженими, викликайте аlert і
// повідомляйте про помилку.
// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми
// у локальне сховище і змінюйте кнопку Login на Logout, також робіть поля введення
// недоступними для змін.

// При перезавантаженні сторінки, якщо користувач авторизован, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// з локального сховища.

import { refferData } from './js/refs';
import { saveUserData, getUserData, removeData } from './js/storage';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconSuccess from './img/javascript.svg';

import './js/module10';

const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const LS_KEY = 'user-data';

refferData.loginForm.addEventListener('submit', event => {
  event.preventDefault();

  if (refferData.btnSubmit.textContent === 'Logout') {
    removeData(LS_KEY);
    refferData.loginForm.reset();
    refferData.emailInput.removeAttribute('readonly');
    refferData.passwordInput.removeAttribute('readonly');

    refferData.btnSubmit.textContent = 'Login';
    return;
  }

  const emailData = refferData.emailInput.value.trim();
  const passwordData = refferData.passwordInput.value.trim();

  if (emailData === '' || passwordData === '') {
    iziToast.warning({
      iconUrl: iconSuccess,
      message: 'Please fill all fields!',
    });
    return;
  }
  if (emailData !== USER_DATA.email || passwordData !== USER_DATA.password) {
    iziToast.error({
      message: 'Incorrect data, plaese check password or mail',
    });

    return;
  }
  saveUserData({ email: emailData, password: passwordData }, LS_KEY);
  refferData.btnSubmit.textContent = 'Logout';
  refferData.emailInput.setAttribute('readonly', true);
  refferData.passwordInput.setAttribute('readonly', true);
});

const storageData = getUserData(LS_KEY);
if (storageData) {
  refferData.emailInput.value = storageData.email || '';
  refferData.passwordInput.value = storageData.password || '';

  refferData.btnSubmit.textContent = 'Logout';
  refferData.emailInput.setAttribute('readonly', true);
  refferData.passwordInput.setAttribute('readonly', true);
}
