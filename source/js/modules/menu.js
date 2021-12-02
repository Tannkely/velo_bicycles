// Модуль главного меню (бургер-меню)
(function () {
  const mainNavElement = document.querySelector('.main-nav');
  if (!mainNavElement) { return; }

  const mainElement = document.querySelector('.main');
  const mainNavLogoElement = mainNavElement.querySelector('.main-nav__logo');
  const mainNavToggleElement = mainNavElement.querySelector('.main-nav__toggle');
  const mainNavSiteNavElement = mainNavElement.querySelector('.main-nav__site-nav');
  const navItemsCollection = mainNavElement.querySelectorAll('.site-nav__item');

  const elements = {
    'main-nav': mainNavElement,
    'main-nav__logo': mainNavLogoElement,
    'main-nav__toggle': mainNavToggleElement,
    'main-nav__site-nav': mainNavSiteNavElement,
  };

  initMenu();
  mainNavToggleElement.addEventListener('click', toggleMenu);


  // Функция иициализации меню
  function initMenu() {

    // Для каждого элемента описанного в объекте (в карте)
    Object.keys(elements).forEach((element) => {
      // если он существует
      if (elements[element] !== undefined) {
        // убрать класс --no-js
        elements[element].classList.remove(`${element}--no-js`);
        // добавить класс --closed
        elements[element].classList.add(`${element}--closed`);
      }
    });

    // Для каждого элемента пункта меню
    navItemsCollection.forEach((item) => {
      // найти ссылку в элементе меню
      const link = item.querySelector('a');
      // и добавить на неё обработчик клика, который скроет меню
      link.addEventListener('click', toggleMenu);
    });
  }

  // Функция открытия/закрытия главного меню
  function toggleMenu() {
    Object.keys(elements).forEach((element) => {
      if (elements[element] !== undefined) {
        elements[element].classList.toggle(`${element}--opened`);
        elements[element].classList.toggle(`${element}--closed`);
      }
    });

    if (mainElement) {
      mainElement.classList.toggle('main--menu-open');
    }
  }

})();
