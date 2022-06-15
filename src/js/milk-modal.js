(() => {
  const refs = {
    openModalBtn: document.querySelector('.milk-modal-open'),
    closeModalBtn: document.querySelector('.milk-modal-close'),
    modal: document.querySelector('.milk-modal'),
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
