// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryCard(array) {
  const cardsArr = array
    .map(({ preview, original, description } = {}) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
  gallery.insertAdjacentHTML('afterbegin', cardsArr);
}

createGalleryCard(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
