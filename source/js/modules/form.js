// Модуль валидации поля формы
(function () {
  const formElement = document.querySelector('.form-feedback');
  if (!formElement) { return; }

  const telInputElement = formElement.querySelector('#tel');
  if (!telInputElement) { return; }

  const mask = new window.Inputmask('9 (999) 999-99-99');
  mask.mask(telInputElement);
})();
