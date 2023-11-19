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

eval("const sum = __webpack_require__(/*! ./module/sum.js */ \"./src/js/module/sum.js\");\r\n\r\nconst popupLinks = document.querySelectorAll('.popup-link');\r\nconst body = document.querySelector('body');\r\nconst lockPadding = document.querySelectorAll(\".lock-padding\");\r\n\r\nlet unlock = true;\r\n\r\nconst timeout = 800;\r\n\r\nif (popupLinks.length > 0) {\r\n  for (let index = 0; index < popupLinks.length; index++){\r\n    const popupLink = popupLinks[index];\r\n    popupLink.addEventListener(\"click\", function(e) {\r\n      const popupName = popupLink.getAttribute('href').replace('#', '');\r\n      const curentPopup = document.getElementById(popupName);\r\n      popupOpen(curentPopup);\r\n      e.preventDefault();\r\n    });\r\n  }\r\n}\r\n\r\nconst popupCloseIcon = document.querySelectorAll('.close-popup');\r\nif (popupCloseIcon.length > 0) {\r\n  for (let index = 0; index < popupCloseIcon.length; index++) {\r\n    const el = popupCloseIcon[index];\r\n    el.addEventListener('click', function (e) {\r\n      popupClose(el.closest('.popup'));\r\n      e.preventDefault();\r\n    });\r\n  }\r\n}\r\n\r\nfunction popupOpen(curentPopup) {\r\n  if (curentPopup && unlock) {\r\n    const popupActive = document.querySelector('.popup.open');\r\n    if (popupActive) {\r\n      popupClose(popupActive, false);\r\n    } else {\r\n      bodyLock();\r\n    }\r\n    curentPopup.classList.add('open');\r\n    curentPopup.addEventListener(\"click\", function (e) {\r\n      if (!e.target.closest('.popup__content')) {\r\n        popupClose(e.target.closest('.popup'));\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction popupClose(popupActive, doUnlock = true) {\r\n  if (unlock) {\r\n    popupActive.classList.remove('open');\r\n    if (doUnlock) {\r\n      bodyUnLock();\r\n    }\r\n  }\r\n}\r\n\r\nfunction bodyLock() {\r\n  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';\r\n\r\n  if (lockPadding.length > 0) {\r\n    for (let index = 0; index < lockPadding.length; index++) {\r\n      const el = lockPadding[index];\r\n      el.style.paddingRight = lockPaddingValue;\r\n    }\r\n  }\r\n  body.style.paddingRight = lockPaddingValue;\r\n  body.classList.add('lock');\r\n\r\n  unlock = false;\r\n  setTimeout(function() {\r\n    unlock = true;\r\n  }, timeout);\r\n}\r\n\r\nfunction bodyUnLock() {\r\n  setTimeout( function() {\r\n    if (lockPadding.length > 0){\r\n      for (let index = 0; index < lockPadding.length; index++) {\r\n        const el = lockPadding[index];\r\n        el.style.paddingRight = '0px';\r\n      }\r\n    }\r\n    body.style.paddingRight = '0px';\r\n    body.classList.remove('lock');\r\n  }, timeout);\r\n\r\n  unlock = false;\r\n  setTimeout(function () {\r\n    unlock = true;\r\n  }, timeout);\r\n}\r\n\r\ndocument.addEventListener('keydown', function (e) {\r\n  if (e.which === 27) {\r\n    const popupActive = document.querySelector('.popup.open');\r\n    popupClose(popupActive);\r\n  }\r\n});\r\n\r\n(function () {\r\n  if (!Element.prototype.closest) {\r\n    Element.prototype.closest = function (css) {\r\n      let node = this;\r\n      while (node) {\r\n        if (node.matches(css)) return node;\r\n        else node = node.parentElement;\r\n      }\r\n      return null;\r\n    };\r\n  }\r\n})();\r\n(function () {\r\n  if (!Element.prototype.matches) {\r\n    Element.prototype.matches = Element.prototype.matchesSelector ||\r\n      Element.prototype.webkitMatchesSelector ||\r\n      Element.prototype.mozMatchesSelector ||\r\n      Element.prototype.msMatchesSelector;\r\n  }\r\n})();\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/sum.js":
/*!******************************!*\
  !*** ./src/js/module/sum.js ***!
  \******************************/
/***/ (function(module) {

eval("module.exports = (a, b) => a + b;\r\nconsole.log('dsfsdf');\r\n// $(document).ready(function() {\r\n//     $('.header__burger').click(function(event) {\r\n//       $('.header__burger,.header__menu').toggleClass('active');\r\n//       $('body').toggleClass('lock');\r\n//     });\r\n//   });\r\n$('.header__btn').on('click', function(e) {\r\n  e.preventDefault();\r\n  $('.header').toggleClass('active');\r\n  $('.header__btn').toggleClass('active');\r\n  $('.header__list').toggleClass('active');\r\n  $('.main').toggleClass('active');\r\n});\r\n// $('.message-element').on('click',function(e) {\r\n//   e.preventDefault();\r\n//   $('.message').toggleClass('active');\r\n// });\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/sum.js?");

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