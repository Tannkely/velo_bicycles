'use strict';

(function () {

var main = document.querySelector('#main');

if (main) {
  var nav = document.querySelector('.main-nav__list');
  var btnToggle = document.querySelector('.main-nav__toggle');
  var pageHeader = document.querySelector('.page-header__wrap');

  btnToggle.classList.remove('main-nav__toggle--no-js');
  nav.classList.remove('main-nav__list--no-js');
  pageHeader.classList.remove('page-header__wrap--no-js');

  btnToggle.addEventListener('click', function () {
    btnToggle.classList.toggle('main-nav__toggle--active');
    nav.classList.toggle('main-nav__list--active');
  });

//Плавный скролл для ссылок

(function () {

  var links = document.querySelectorAll('a[href^="#"]');

  for (let link of links) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      var id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
})();

//Валидация поля имени

(function () {

  var inputName = document.querySelector('input[name="name"]');

  var getCorrectName = function () {
    var valueName = inputName.value;
    var re = /^[a-zA-Zа-яА-Я]*$/;

    for (var i = 0; i < valueName.length; i++) {
      if (!re.test(valueName[i])) {
        inputName.setCustomValidity('Имя должно содержать только буквы');
      } else {
        inputName.setCustomValidity('');
      }
    }
  };

  inputName.addEventListener('input', function () {
    getCorrectName();
  });

})();

//Валидация поля ввода номера

(function () {

  var inputPhone = document.querySelector('input[name="phone"]');

  var getCorrectPhone = function () {
    var valuePhone = inputPhone.value;
    var re = /^[0-9]*$/;

    for (var i = 0; i < valuePhone.length; i++) {
      if (!re.test(valuePhone[i])) {
        inputPhone.setCustomValidity('Номер телефона должен состоять из цифр');
      } else {
        inputPhone.setCustomValidity('');
      }
    }
  };

  inputPhone.addEventListener('input', function () {
    getCorrectPhone();
  });

})();
};
})();
