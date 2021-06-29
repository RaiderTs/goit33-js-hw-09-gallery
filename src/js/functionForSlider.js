import { refs } from '../index';
import galleryData from './gallery-items';

export const slideDirection = event => {
  const RIGHT_KEY_CODE = 'ArrowRight';
  const LEFT_KEY_CODE = 'ArrowLeft';
  if (event.key === LEFT_KEY_CODE) {
    changeSlide('left');
  } else if (event.key === RIGHT_KEY_CODE) {
    changeSlide('right');
  }
};

let currentIndex = 0;

export const changeSlide = direction => {
  if (direction === 'right') {
    currentIndex += 1;
    if (currentIndex === galleryData.length) {
      currentIndex = 0;
    }
  } else if (direction === 'left') {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = galleryData.length - 1;
    }
  }
  refs.lightboxImageEl.src = galleryData[currentIndex].original;
  refs.lightboxImageEl.alt = galleryData[currentIndex].description;
};
