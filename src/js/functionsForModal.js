import { refs } from '../index'

// функция проверки клика по IMG

export const onImageClick = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  // Если да, открываем модалку
  onOpenModal(event);
  refs.lightboxImageEl.src = event.target.dataset.source;
  refs.lightboxImageEl.alt = event.target.alt;

  window.addEventListener('keydown', onEscPress);
};

// функция для открытия модалки

function onOpenModal(event) {
  refs.lightboxEl.classList.add('is-open');
}

// функция для закрытия модалки

export const onCloseModal = event => {
  refs.lightboxEl.classList.remove('is-open');
  refs.lightboxImageEl.src = '';
  refs.lightboxImageEl.alt = '';
};

//  Функция для закрытия модалки по esc

function onEscPress(event) {
  const ESC_KEY_CODE = 'Escape';
  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}

// Функция на закрытие модалки по бэкдроп

export const onBackdropClick = event => {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
};
