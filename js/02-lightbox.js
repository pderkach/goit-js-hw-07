import { galleryItems } from './gallery-items.js';
// Change code below this line

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

  function createGalleryItem(item) {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      </li>
    `;
  }

  const galleryHTML = galleryItems.map(createGalleryItem).join('');

  gallery.insertAdjacentHTML('beforeend', galleryHTML);

  const lightbox = new SimpleLightbox('.gallery a');
});
