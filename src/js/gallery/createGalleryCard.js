export function createGalleryCard(images) {
  return images
    .map(
      ({ alt_description, urls: { small } }) => ` <li class="gallery__item">
  <img class="gallery-img" src="${small}" alt="${alt_description}"></li>`
    )
    .join('');
}
