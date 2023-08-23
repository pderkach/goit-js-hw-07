import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
      </a>
    </li>
  `;
}

const galleryHTML = galleryItems.map(createGalleryItem).join('');
gallery.insertAdjacentHTML('beforeend', galleryHTML);

gallery.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  const clickedImage = event.target;
  if (clickedImage.classList.contains('gallery__image')) {
    const source = clickedImage.dataset.source;

    const instance = window.basicLightbox.create(`
      <img src="${source}" alt="${clickedImage.alt}" />
    `);

    instance.show();

    document.addEventListener('keydown', closeModalOnEsc);

    function closeModalOnEsc(event) {
      if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeModalOnEsc);
      }
    }
  }
}