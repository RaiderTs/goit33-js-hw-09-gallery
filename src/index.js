import './sass/main.scss';
import galleryData from './js/gallery-items';
import createCardImagesMarkup from './js/helperFunctions';
import { onImageClick, onCloseModal, onBackdropClick } from './js/functionsForModal';
import { slideDirection, changeSlide } from './js/functionForSlider'

export const refs = {
  galleryList: document.querySelector('.js-gallery'),
  btnCloseModal: document.querySelector('[data-action="close-lightbox"]'),
  lightboxEl: document.querySelector('.js-lightbox'),
  lightboxImageEl: document.querySelector('.lightbox__image'),
  btnLeft: document.querySelector('.slider-arrow-left'),
  btnRight: document.querySelector('.slider-arrow-right'),
  backdropModal: document.querySelector('.lightbox__overlay'),
};

const cardMarkup = createCardImagesMarkup(galleryData);
refs.galleryList.insertAdjacentHTML('beforeend', cardMarkup);

refs.galleryList.addEventListener('click', onImageClick);
refs.btnCloseModal.addEventListener('click', onCloseModal);
refs.backdropModal.addEventListener('click', onBackdropClick); //  закрываем модалку по кнопке
refs.btnLeft.addEventListener('click', () => {
  console.log('left')
  changeSlide('left');
});
refs.btnRight.addEventListener('click', () => {
  console.log('right');
  changeSlide('right');
});

document.addEventListener('keydown',  slideDirection)   


