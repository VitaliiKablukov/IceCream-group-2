(() => {
  const refs = {
    openModalBtn: document.querySelector('.data-modal-open1'),
    closeModalBtn: document.querySelector('.data-modal-close1'),
    modal: document.querySelector('.data-modal1'),
    body: document.querySelector('body'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
