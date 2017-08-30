(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("n2vw", [], factory);
	else if(typeof exports === 'object')
		exports["n2vw"] = factory();
	else
		root["n2vw"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var numberFormatValidator = /^\d+$/;
var largeUnitsBase = ['nghìn', 'triệu', 'tỉ'];
var basicNumberToWord = {
  '0': 'không',
  '1': 'một',
  '2': 'hai',
  '3': 'ba',
  '4': 'bốn',
  '5': 'năm',
  '6': 'sáu',
  '7': 'bảy',
  '8': 'tám',
  '9': 'chín'
};
var HUNDRED_PLACE_INDEX = 0;
var TENS_PLACE_INDEX = 1;
var ONES_PLACE_INDEX = 2;

var NumberToWord = function () {
  function NumberToWord() {
    _classCallCheck(this, NumberToWord);
  }

  _createClass(NumberToWord, [{
    key: 'getFullText',
    value: function getFullText(numberOrString) {
      var number = String(numberOrString);
      var groups = NumberToWord.breakIntoGroupOfThree(number);
      var groupsToUnits = NumberToWord.mapGroupsToUnits(groups);
      var groupsToWords = NumberToWord.mapGroupsToWords(groups);

      return groupsToWords.map(function (word, index) {
        if (groupsToUnits[index] === '') {
          return word;
        }
        return word + ' ' + groupsToUnits[index];
      }).join(', ');
    }
  }], [{
    key: 'breakIntoGroupOfThree',
    value: function breakIntoGroupOfThree(string) {
      var groups = [];
      var remainder = string.length % 3;

      if (remainder !== 0) {
        groups.push(string.substr(0, remainder));
        string = string.substr(remainder);
      }
      return groups.concat(string.match(/\d{1,3}/g));
    }
  }, {
    key: 'mapGroupsToUnits',
    value: function mapGroupsToUnits(groups) {
      var reversedGroups = groups.slice().reverse();
      var reversedUnits = void 0;

      reversedUnits = reversedGroups.map(function (group, index) {
        if (index === 0) {
          return '';
        }
        return largeUnitsBase[(index - 1) % 3];
      });
      return reversedUnits.reverse();
    }
  }, {
    key: 'translateThreeDigitsNumberToWords',
    value: function translateThreeDigitsNumberToWords(number) {
      number = String(number);

      if (number.length > 3 || number.length < 0 || !numberFormatValidator.test(number)) {
        throw TypeError;
      }
      var digitsLength = number.length;

      return number.split('').map(function (digit, numberIndex) {
        var placeIndex = numberIndex;

        if (digitsLength < 3) {
          placeIndex = placeIndex + (3 - digitsLength);
        }
        switch (placeIndex) {
          case HUNDRED_PLACE_INDEX:
            {
              return basicNumberToWord[digit] + ' trăm';
            }
          case TENS_PLACE_INDEX:
            {
              if (digit === '0') {
                var nextDigest = number[numberIndex + 1];

                if (nextDigest === '0') {
                  return '';
                }

                return 'lẻ';
              }
              if (digit === '1') {
                return 'mười';
              }
              return basicNumberToWord[digit] + ' mươi';
            }
          case ONES_PLACE_INDEX:
            {
              if (digit === '5' && digitsLength > 1) {
                return 'lăm';
              }
              if (digit === '1' && digitsLength > 1) {
                var _nextDigest = number[numberIndex - 1];

                if (_nextDigest !== '0') {
                  return 'mốt';
                }
              }
              if (digit === '0' && digitsLength > 1) {
                return '';
              }
              return basicNumberToWord[digit];
            }
        }
        return null;
      }).filter(function (n) {
        return n !== '';
      }).join(' ');
    }
  }, {
    key: 'mapGroupsToWords',
    value: function mapGroupsToWords(groups) {
      var _this = this;

      return groups.map(function (number, index) {
        return _this.translateThreeDigitsNumberToWords(number, index === 0);
      });
    }
  }]);

  return NumberToWord;
}();

exports.default = NumberToWord;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=n2vw.js.map