/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cardGame_LaunchGameClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardGame/LaunchGameClass.js */ \"./resources/js/cardGame/LaunchGameClass.js\");\n/* harmony import */ var _cardGame_DealerClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardGame/DealerClass.js */ \"./resources/js/cardGame/DealerClass.js\");\n/* harmony import */ var _cardGame_CompareComboClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardGame/CompareComboClass.js */ \"./resources/js/cardGame/CompareComboClass.js\");\n/* harmony import */ var _cardGame_CompareComboClass_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cardGame_CompareComboClass_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cardGame_ComboClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardGame/ComboClass.js */ \"./resources/js/cardGame/ComboClass.js\");\n/* harmony import */ var _cardGame_ComboClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cardGame_ComboClass_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _cardGame_CardsClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardGame/CardsClass.js */ \"./resources/js/cardGame/CardsClass.js\");\n/* harmony import */ var _cardGame_CardsClass_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cardGame_CardsClass_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _plugin_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugin/slider.js */ \"./resources/js/plugin/slider.js\");\n/* harmony import */ var _plugin_slider_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plugin_slider_js__WEBPACK_IMPORTED_MODULE_5__);\nconsole.log(\"webpack on air\");\n\n\n\n\n\n\n\n\n\nnew _cardGame_LaunchGameClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n//# sourceURL=webpack:///./resources/js/app.js?");

/***/ }),

/***/ "./resources/js/cardGame/CardsClass.js":
/*!*********************************************!*\
  !*** ./resources/js/cardGame/CardsClass.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CARDSSORTBYHIGHEST = ['As', 'Ah', 'Ac', 'Ad', 'Ks', 'Kh', 'Kc', 'Kd', 'Qs', 'Qh', 'Qc', 'Qd', 'Js', 'Jh', 'Jc', 'Jd', '10s', '10h', '10c', '10d', '9s', '9h', '9c', '9d', '8s', '8h', '8c', '8d', '7s', '7h', '7c', '7d', '6s', '6h', '6c', '6d', '5s', '5h', '5c', '5d', '4s', '4h', '4c', '4d', '3s', '3h', '3c', '3d', '2s', '2h', '2c', '2d'];\n\nconst COLORS = {\n    diamond: \"d\",\n    club: \"c\",\n    heart: \"h\",\n    spade: \"s\"\n};\n\nconst COMBO_TYPE = [\n    'full',\n    'flush',\n    'pair',\n    'highest',\n];\n\n\n//# sourceURL=webpack:///./resources/js/cardGame/CardsClass.js?");

/***/ }),

/***/ "./resources/js/cardGame/ComboClass.js":
/*!*********************************************!*\
  !*** ./resources/js/cardGame/ComboClass.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Combo{\n    constructor(cards){\n        this.playerCards = cards[0].flat();\n        this.cards = cards[0].concat(cards[1]).flat();\n    }\n\n    bestCombo() {\n        let value;\n        value = this.isAFull();\n        if(value){\n            console.log('full' );\n            return {\"type\" : \"full\", \"value\": value }\n        };\n        value = this.isAFlush(this.cards);\n        if(value){\n            console.log('flush');\n            return {\"type\" : \"flush\", \"value\": value }\n        };\n        \n        value = this.isAPair();\n        if(value){\n            console.log('pair');\n            return {\"type\" : \"pair\", \"value\": value }\n        };   \n        value = this.isAHighest(this.playerCards);\n        if(typeof(value)== 'number'){\n            console.log('higest : ' + value);\n            return {\"type\" : \"highest\", \"value\": value }\n        };\n    }\n\n    isAFull(){\n        // TO DO\n        return false;\n    }\n    \n    isAFlush() {\n        let isAFull = false;\n        let colorOcc = this.colorOccurences();\n        for(var [key, value] of Object.entries(colorOcc)){\n            if( value > 4){\n                return true;\n            };\n        };\n        return isAFull;\n    };\n\n    isAPair() {\n        let isAPair = false;\n        let tmpCards = Object.assign([], this.cards);\n        while(tmpCards.length > 1){\n            let firstCard = tmpCards.shift();\n            tmpCards.forEach(card => {\n                if (firstCard.slice(0, -1) === card.slice(0, -1)){\n                    isAPair = this.isAHighest([firstCard,card]);  \n                };\n            });\n        }\n        return isAPair;\n    }\n\n    isAHighest(cards) {\n        cards.sort(\n            function(a, b){\n                let i=0;\n                let j=0;\n                while(Cards.CARDSSORTBYHIGHEST[i] !== a){\n                    i++;\n                };\n                while(Cards.CARDSSORTBYHIGHEST[j] !== b){\n                    j++;\n                };\n                if(i<j){\n                    return -1;\n                }else{\n                    return 1;\n                }\n            }\n        );\n        return this.getIndex();\n    }\n\n    getIndex(){\n        let i=0;\n        while(this.cards[0] !== Cards.CARDSSORTBYHIGHEST[i]){\n            i++;\n        };\n        return i\n    }\n\n    colorOccurences() {\n        let occurences = {};\n        for(var [key, value] of Object.entries(Cards.COLORS)){\n            let countCard = 0;\n            this.cards.forEach(card=>{\n                let formatedCard = card[card.length - 1];\n                let formatedCARD = value;\n                if(formatedCard  === formatedCARD){\n                countCard++;\n                };\n            });\n            if(countCard != 0){\n                occurences[key] = countCard;\n            };\n        };\n        return occurences;\n    }\n}\n\n//# sourceURL=webpack:///./resources/js/cardGame/ComboClass.js?");

/***/ }),

/***/ "./resources/js/cardGame/CompareComboClass.js":
/*!****************************************************!*\
  !*** ./resources/js/cardGame/CompareComboClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class CompareCombo{\n    constructor(heroCombo, vilainCombo){\n        this.heroCombo = heroCombo;\n        this.vilainCombo =  vilainCombo;\n    }\n    winnerIs(){\n        if(this.heroCombo.type == this.vilainCombo.type){\n            return this.compareIndex(this.heroCombo.value, this.vilainCombo.value);\n        }else{\n            return this.compareComboType();\n        };\n    }\n\n    compareComboType(){\n        let heroTypeIndex;\n        let vilainTypeIndex;\n        for (let i = 0; i < Cards.COMBO_TYPE.length; i++) {\n            if(this.heroCombo.type === Cards.COMBO_TYPE[i]){\n                heroTypeIndex = i;\n            };\n            if(this.vilainCombo.type === Cards.COMBO_TYPE[i]){\n                vilainTypeIndex = i;\n            };\n        }\n        return this.compareIndex(heroTypeIndex, vilainTypeIndex);\n    }\n\n    compareIndex(heroIndex, vilainIndex){\n        if(heroIndex < vilainIndex){\n            return 'hero';\n        }else if(heroIndex > vilainIndex){\n            return 'vilain';\n        }else{\n            return 'equality';\n        }\n    }\n}\n\n//# sourceURL=webpack:///./resources/js/cardGame/CompareComboClass.js?");

/***/ }),

/***/ "./resources/js/cardGame/DealerClass.js":
/*!**********************************************!*\
  !*** ./resources/js/cardGame/DealerClass.js ***!
  \**********************************************/
/*! exports provided: Dealer */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Duplicate export 'Dealer' (27:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| }\\n| \\n> export{ Dealer }\");\n\n//# sourceURL=webpack:///./resources/js/cardGame/DealerClass.js?");

/***/ }),

/***/ "./resources/js/cardGame/LaunchGameClass.js":
/*!**************************************************!*\
  !*** ./resources/js/cardGame/LaunchGameClass.js ***!
  \**************************************************/
/*! exports provided: default, LaunchGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LaunchGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LaunchGame\", function() { return LaunchGame; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'DealerClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nclass LaunchGame{\n    constructor(){\n        this.deck = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'DealerClass.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n        this.cards = this.deck.deal(2, 5);\n    \n        this.showCards();\n        this.heroHand = [];\n        this.heroHand.push(this.cards[0]);\n        this.heroHand.push(this.cards[2]);\n        \n        this.vilainHand = [];\n        this.vilainHand.push(this.cards[1]);\n        this.vilainHand.push(this.cards[2]);\n        \n        this.heroCombo = new Combo(this.heroHand);\n        this.vilainCombo = new Combo(this.vilainHand);\n        this.comparator = new CompareCombo(this.heroCombo.bestCombo(), this.vilainCombo.bestCombo());\n        this.winner = this.comparator.winnerIs()\n        this.showWinner();\n        this.addRewardButton();\n    }\n\n    showWinner(){\n        let text;\n        if(this.winner === \"hero\"){\n            text = 'Le Hero';\n        }else if(this.winner === \"vilain\"){\n            text = 'Le Vilain';\n        }else{\n            text = 'Personne car il y a égalité';\n        }\n        document.getElementById('winner').innerHTML = \"Le Gagnant est : \"+ text;\n    }\n\n    addRewardButton(){\n        document.getElementById('reward').style.display = \"block\"\n    }\n\n    showCards(){\n        let cardShowing = document.getElementsByClassName('aCard');\n        cardShowing[0].setAttribute(\"src\", \"/assets/cards/\"+this.cards[0][0]+'.png')\n        cardShowing[1].setAttribute(\"src\", \"/assets/cards/\"+this.cards[0][1]+'.png')\n        cardShowing[2].setAttribute(\"src\", \"/assets/cards/\"+this.cards[1][0]+'.png')\n        cardShowing[3].setAttribute(\"src\", \"/assets/cards/\"+this.cards[1][1]+'.png')\n        cardShowing[4].setAttribute(\"src\", \"/assets/cards/\"+this.cards[2][0]+'.png')\n        cardShowing[5].setAttribute(\"src\", \"/assets/cards/\"+this.cards[2][1]+'.png')\n        cardShowing[6].setAttribute(\"src\", \"/assets/cards/\"+this.cards[2][2]+'.png')\n        cardShowing[7].setAttribute(\"src\", \"/assets/cards/\"+this.cards[2][3]+'.png')\n        cardShowing[8].setAttribute(\"src\", \"/assets/cards/\"+this.cards[2][4]+'.png')\n    }\n}\n\n\n\n//# sourceURL=webpack:///./resources/js/cardGame/LaunchGameClass.js?");

/***/ }),

/***/ "./resources/js/plugin/slider.js":
/*!***************************************!*\
  !*** ./resources/js/plugin/slider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// INSTRUCTION\n// to add this slider on your page write the next line on your page\n// <script src=\"{{path to}}/slider.js\"></script>\n\n// Code to insert in your html\n// Duplicate the line with {{ img-url }} and remote {{ img-url }} by your owns link to add more elements on slide\n\n/* \n<section id=\"slider\">\n\t<figure class=\"slideshow\">\n\t\t<div class=\"slide\"><img src=\"{{ img-url }}\"></div>\n\t</figure>\n</section> \n*/\n\n// You can modify value on variable\n\n$(function(){\n\t// ==== Variables =====\n\n\t//image can we show in same time on slider\n\t$imgShow = 10;\n\n\n\t// ==== CSS ====\n\t$(\".slideshow\").css(\"display\",\"flex\");\n\t$(\".slideshow\").css(\"flex-wrap\", \"nowrap\");\n\t$(\".slideshow\").css(\"padding\",\"0\");\n\n\t$(\".slideshow > .slide\").css(\"display\", \"flex\");\n\t$(\".slideshow > .slide\").css(\"justify-content\", \"center\");\n\t$(\".slideshow > .slide\").css(\"min-width\", 100/$imgShow+\"%\");\n\n\t$(\".slideshow > .slide > img\").css(\"height\", \"100%\");\n\n\t$(\".slideshow\").css(\"flex-wrap\", \"nowrap\");\n\n\t$(\".slideshow\").parent().css(\"overflow\",\"hidden\");\n\n\t// ==== SLIDER FUNCTION ====\n\t$(\".slideshow\").width(\"100%\");\n    setInterval(function(){\n        $(\".slideshow\").animate({marginLeft:'-'+100/$imgShow+'%'},800,function(){\n            $(this).css({marginLeft:0}).find(\"div:last\").after($(this).find(\"div:first\"));\n        })\n    }, 3500);\n});\n\n//# sourceURL=webpack:///./resources/js/plugin/slider.js?");

/***/ })

/******/ });