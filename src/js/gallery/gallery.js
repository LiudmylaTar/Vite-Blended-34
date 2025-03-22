// Створи додаток для пошуку зображень по ключовому слову.
// При завантаженні сторінки має відбуватись запит за популярними зображеннями (ключове слово - popular),
// а при введенні якогось слова в форму - пошук відбувається по цьому ключовому слову і сторінка перемальовується.

// Використовуй UnsplashAPI (https://unsplash.com/documentation) для запитів. Створи клас UnsplashAPI для інкапсуляції
// логіки запитів в одному місті в окремому файлі.
// Створи окремо файл createGalleryCard.js, в якому буде функція, що відповідатиме за створення розмітки.
// В головному файлі gallery.js має бути вся логіка роботи застосунку.

// Підключи пагінацію, використовуючи бібліотеку tui-pagination, щоб можна було робити запит за різними сторінками.
// Додай слухача на форму, щоб робити новий запит по ключовому слову (додавши відповідний метод класу UnsplashAPI).
// Додай лоадер під час завантаження даних з бекенда.
// Не забудь про відповідні перевірки і сповіщення при роботі з запитами і з формою.
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCard } from './createGalleryCard';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('tui-pagination-container');

const pagination = new Pagination(container, {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
});

const page = pagination.getCurrentPage();

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.js-search-form');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const inputValue = event.target.elements.query.value.trim();

  if (!inputValue) {
    iziToast.warning({
      message: 'fill the field',
    });
    return;
  }

  api.query = inputValue;
  try {
    const data = await api.getPhotosByQuery(page);

    if (data.results.length === 0) {
      iziToast.error({
        message: 'images not found!',
      });
      return;
    }

    gallery.innerHTML = createGalleryCard(data.results);
    pagination.reset(data.total);
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong.',
    });

    console.log(error);
  }
});

const api = new UnsplashAPI();
api.getPopularPhotos(page).then(data => {
  gallery.innerHTML = createGalleryCard(data.results);
  pagination.reset(data.total);
});

pagination.on('afterMove', event => {
  const currentPage = event.page;
  api
    .getPopularPhotos(currentPage)
    .then(data => (gallery.innerHTML = createGalleryCard(data.results)));
});
