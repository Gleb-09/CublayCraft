/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const sum = __webpack_require__(/*! ./module/sum.js */ \"./src/js/module/sum.js\");\r\n\r\nconst popupLinks = document.querySelectorAll('.popup-link');\r\nconst body = document.querySelector('body');\r\nconst lockPadding = document.querySelectorAll(\".lock-padding\");\r\n\r\nlet unlock = true;\r\n\r\nconst timeout = 800;\r\n\r\nif (popupLinks.length > 0) {\r\n  for (let index = 0; index < popupLinks.length; index++){\r\n    const popupLink = popupLinks[index];\r\n    popupLink.addEventListener(\"click\", function(e) {\r\n      const popupName = popupLink.getAttribute('href').replace('#', '');\r\n      const curentPopup = document.getElementById(popupName);\r\n      popupOpen(curentPopup);\r\n      e.preventDefault();\r\n    });\r\n  }\r\n}\r\n\r\nconst popupCloseIcon = document.querySelectorAll('.close-popup');\r\nif (popupCloseIcon.length > 0) {\r\n  for (let index = 0; index < popupCloseIcon.length; index++) {\r\n    const el = popupCloseIcon[index];\r\n    el.addEventListener('click', function (e) {\r\n      popupClose(el.closest('.popup'));\r\n      e.preventDefault();\r\n    });\r\n  }\r\n}\r\n\r\nfunction popupOpen(curentPopup) {\r\n  if (curentPopup && unlock) {\r\n    const popupActive = document.querySelector('.popup.open');\r\n    if (popupActive) {\r\n      popupClose(popupActive, false);\r\n    } else {\r\n      bodyLock();\r\n    }\r\n    curentPopup.classList.add('open');\r\n    curentPopup.addEventListener(\"click\", function (e) {\r\n      if (!e.target.closest('.popup__content')) {\r\n        popupClose(e.target.closest('.popup'));\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction popupClose(popupActive, doUnlock = true) {\r\n  if (unlock) {\r\n    popupActive.classList.remove('open');\r\n    if (doUnlock) {\r\n      bodyUnLock();\r\n    }\r\n  }\r\n}\r\n\r\nfunction bodyLock() {\r\n  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';\r\n\r\n  if (lockPadding.length > 0) {\r\n    for (let index = 0; index < lockPadding.length; index++) {\r\n      const el = lockPadding[index];\r\n      el.style.paddingRight = lockPaddingValue;\r\n    }\r\n  }\r\n  body.style.paddingRight = lockPaddingValue;\r\n  body.classList.add('lock');\r\n\r\n  unlock = false;\r\n  setTimeout(function() {\r\n    unlock = true;\r\n  }, timeout);\r\n}\r\n\r\nfunction bodyUnLock() {\r\n  setTimeout( function() {\r\n    if (lockPadding.length > 0){\r\n      for (let index = 0; index < lockPadding.length; index++) {\r\n        const el = lockPadding[index];\r\n        el.style.paddingRight = '0px';\r\n      }\r\n    }\r\n    body.style.paddingRight = '0px';\r\n    body.classList.remove('lock');\r\n  }, timeout);\r\n\r\n  unlock = false;\r\n  setTimeout(function () {\r\n    unlock = true;\r\n  }, timeout);\r\n}\r\n\r\ndocument.addEventListener('keydown', function (e) {\r\n  if (e.which === 27) {\r\n    const popupActive = document.querySelector('.popup.open');\r\n    popupClose(popupActive);\r\n  }\r\n});\r\n\r\n(function () {\r\n  if (!Element.prototype.closest) {\r\n    Element.prototype.closest = function (css) {\r\n      let node = this;\r\n      while (node) {\r\n        if (node.matches(css)) return node;\r\n        else node = node.parentElement;\r\n      }\r\n      return null;\r\n    };\r\n  }\r\n})();\r\n(function () {\r\n  if (!Element.prototype.matches) {\r\n    Element.prototype.matches = Element.prototype.matchesSelector ||\r\n      Element.prototype.webkitMatchesSelector ||\r\n      Element.prototype.mozMatchesSelector ||\r\n      Element.prototype.msMatchesSelector;\r\n  }\r\n})();\r\n\r\n\r\n// ===========================\r\n    document.addEventListener('DOMContentLoaded', function () {\r\n        const productsContainer = document.getElementById('products');\r\n        const resetButton = document.getElementById('reset');\r\n        const searchInput = document.getElementById('search');\r\n        const categoryButtons = document.querySelectorAll('.category-button');\r\n        const sortButtons = document.querySelectorAll('.sort-button');\r\n        const productCards = document.querySelectorAll('.product-card');\r\n        const recordsFarmsCards = document.querySelectorAll('.records-farms__card');\r\n\r\n        // Преобразуем NodeList в массив для удобства сортировки\r\n        const cardsArray = Array.from(productCards);\r\n\r\n        let selectedCategories = new Set();\r\n        let selectedStatuses = new Set();\r\n\r\n        // Добавляем слушатель события при вводе текста в поле поиска\r\n        searchInput.addEventListener('input', function () {\r\n            applyFilters();\r\n        });\r\n\r\n        // Добавляем слушатель события при клике на кнопку сброса\r\n        resetButton.addEventListener('click', function () {\r\n            searchInput.value = '';\r\n            selectedCategories.clear();\r\n            selectedStatuses.clear();\r\n            applyFilters();\r\n        });\r\n\r\n        // Добавляем слушатели событий для кнопок категорий\r\n        categoryButtons.forEach(function (button) {\r\n            button.addEventListener('click', function () {\r\n                toggleCategory(button.getAttribute('data-category'), button.getAttribute('data-status'));\r\n                applyFilters();\r\n            });\r\n        });\r\n\r\n        // Добавляем слушатели событий для кнопок сортировки\r\n        sortButtons.forEach(function (button) {\r\n            button.addEventListener('click', function () {\r\n                const sortType = button.getAttribute('data-sort');\r\n                applySort(sortType);\r\n            });\r\n        });\r\n\r\n        // Функция для переключения выбора категории или статуса\r\n        function toggleCategory(category, status) {\r\n            if (category) {\r\n                selectedCategories.has(category) ? selectedCategories.delete(category) : selectedCategories.add(category);\r\n            }\r\n\r\n            if (status) {\r\n                selectedStatuses.has(status) ? selectedStatuses.delete(status) : selectedStatuses.add(status);\r\n            }\r\n        }\r\n\r\n        // Функция для применения фильтров\r\n        function applyFilters() {\r\n            const searchTerm = searchInput.value.toLowerCase();\r\n\r\n            cardsArray.forEach(function (card) {\r\n                const cardCategory = card.getAttribute('data-category');\r\n                const cardStatus = card.getAttribute('data-status');\r\n                const cardText = card.textContent.toLowerCase();\r\n\r\n                const categoryMatch = selectedCategories.size === 0 || selectedCategories.has(cardCategory);\r\n                const statusMatch = selectedStatuses.size === 0 || selectedStatuses.has(cardStatus);\r\n                const searchMatch = searchTerm === '' || cardText.includes(searchTerm);\r\n\r\n                if (categoryMatch && statusMatch && searchMatch) {\r\n                    card.style.display = 'inline-block';\r\n                } else {\r\n                    card.style.display = 'none';\r\n                }\r\n            });\r\n        }\r\n\r\n        // Функция для применения сортировки\r\n        function applySort(sortType) {\r\n            switch (sortType) {\r\n                case 'alphabetical':\r\n                    // Сортируем по алфавиту\r\n                    cardsArray.sort(function (a, b) {\r\n                        const textA = a.textContent.trim().toLowerCase();\r\n                        const textB = b.textContent.trim().toLowerCase();\r\n                        return textA.localeCompare(textB);\r\n                    });\r\n                    break;\r\n                default:\r\n                    // По умолчанию сбрасываем сортировку\r\n                    break;\r\n            }\r\n\r\n            // Удаляем все карточки из контейнера\r\n            productsContainer.innerHTML = '';\r\n\r\n            // Добавляем отсортированные карточки обратно в контейнер\r\n            cardsArray.forEach(function (card) {\r\n                productsContainer.appendChild(card.cloneNode(true));\r\n            });\r\n        }\r\n    });\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/sum.js":
/*!******************************!*\
  !*** ./src/js/module/sum.js ***!
  \******************************/
/***/ (function(module) {

eval("module.exports = (a, b) => a + b;\r\nconsole.log('dsfsdf');\r\n// $(document).ready(function() {\r\n//     $('.header__burger').click(function(event) {\r\n//       $('.header__burger,.header__menu').toggleClass('active');\r\n//       $('body').toggleClass('lock');\r\n//     });\r\n//   });\r\n$('.header__btn').on('click', function(e) {\r\n  e.preventDefault();\r\n  $('.header').toggleClass('active');\r\n  $('.header__logo').toggleClass('active');\r\n  $('.header__menu').toggleClass('active');\r\n  $('.header__avatar').toggleClass('active');\r\n  $('.header__disc').toggleClass('active'); //__profile\r\n  $('.header__profile').toggleClass('active');\r\n  // $('.main-screen').toggleClass('active');\r\n  $('.header__btn').toggleClass('active');\r\n  $('.header__list').toggleClass('active');\r\n  $('.header__link').toggleClass('active');\r\n  $('.header__item').toggleClass('active');\r\n  $('.main').toggleClass('active');\r\n});\r\n\r\n// $('.label-message').on('click', function(e) {\r\n//   e.preventDefault();\r\n//    $('.message').toggleClass('active');\r\n//    $('.label-message').toggleClass('active');\r\n// });\r\n\r\n\r\n// function printHelo(){\r\n//   console.log('привет');\r\n// }\r\n// console.log('helo');\r\n// function toggleClass() {\r\n//   let radio = document.getElementById('message-input');\r\n//   let element = document.getElementById('.message')\r\n//   if(radio.checked){\r\n//     // element.classList.add('active');\r\n//     console.log('HELO')\r\n//   }\r\n// }\r\n\r\ntoggleClass();\r\n\r\nlet tab = function() {\r\n  let tabNav = document.querySelectorAll('.enchantment__tubs-item'),\r\n  tabContent = document.querySelectorAll('.enchantment__tubs-block'),\r\n  tabName;\r\n\r\n  tabNav.forEach(item => {\r\n    item.addEventListener('click', selectTabNav)\r\n  });\r\n  function selectTabNav() {\r\n    tabNav.forEach(item=>{\r\n      item.classList.remove('is-active')\r\n    });\r\n    this.classList.add('is-active');\r\n    tabName = this.getAttribute('data-tab-name');\r\n    selectTabContent(tabName);\r\n  }\r\n  function selectTabContent(tabName) {\r\n    tabContent.forEach(item => {\r\n      item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');\r\n    })\r\n  }\r\n\r\n};\r\ntab();\r\n// $('.enchantment__tubs-item1').on('click', function(e){\r\n//   e.preventDefault();\r\n//   $('.enchantment__tubs-item1').toggleClass('active');\r\n// });\r\n// $('.enchantment__tubs-item2').on('click', function(e){\r\n//   e.preventDefault();\r\n//   $('.enchantment__tubs-item2').toggleClass('active');\r\n// });\r\n// $('.enchantment__tubs-item3').on('click', function(e){\r\n//   e.preventDefault();\r\n//   $('.enchantment__tubs-item3').toggleClass('active');\r\n// });\r\n \r\n// $('.message-element').on('click',function(e) {\r\n//   e.preventDefault();\r\n//   $('.message').toggleClass('active');\r\n// });\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/sum.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;