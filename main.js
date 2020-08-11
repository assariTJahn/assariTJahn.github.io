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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/elements/toolbar.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/elements/toolbar.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* HIDE RADIO */\n[type=radio] { \n    position: absolute;\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* IMAGE STYLES */\n  [type=radio] + img {\n    cursor: pointer;\n  }\n  \n  /* CHECKED STYLES */\n  [type=radio]:checked + img {\n    border: 1px solid rgba(0,0,0,0.5);\n    border-radius: 1px;\n    box-shadow: 0 0 1pt 2pt #929292;\n  }", "",{"version":3,"sources":["toolbar.css"],"names":[],"mappings":"AAAA,eAAe;AACf;IACI,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,SAAS;EACX;;EAEA,iBAAiB;EACjB;IACE,eAAe;EACjB;;EAEA,mBAAmB;EACnB;IACE,iCAAiC;IACjC,kBAAkB;IAClB,+BAA+B;EACjC","file":"toolbar.css","sourcesContent":["/* HIDE RADIO */\n[type=radio] { \n    position: absolute;\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* IMAGE STYLES */\n  [type=radio] + img {\n    cursor: pointer;\n  }\n  \n  /* CHECKED STYLES */\n  [type=radio]:checked + img {\n    border: 1px solid rgba(0,0,0,0.5);\n    border-radius: 1px;\n    box-shadow: 0 0 1pt 2pt #929292;\n  }"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container {\n  border: solid #6ac5ac 2px;\n}\nnav {\n  border: solid #d64078 2px;\n  float: left;\n  width: 25%;\n}\n\nsection {\n  border: solid #fdc72f 2px;\n  width: 75%;\n  margin-left: 25%;\n}\n", "",{"version":3,"sources":["main.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,UAAU;EACV,gBAAgB;AAClB","file":"main.css","sourcesContent":[".container {\n  border: solid #6ac5ac 2px;\n}\nnav {\n  border: solid #d64078 2px;\n  float: left;\n  width: 25%;\n}\n\nsection {\n  border: solid #fdc72f 2px;\n  width: 75%;\n  margin-left: 25%;\n}\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/DrawingArea.js":
/*!****************************!*\
  !*** ./src/DrawingArea.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawingArea; });
/* harmony import */ var _elements_Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/Shape */ "./src/elements/Shape.js");
/* harmony import */ var _elements_MouseCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/MouseCursor */ "./src/elements/MouseCursor.js");


class DrawingArea {
    constructor(width, height, imageRegistry) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.tilesize = 10;//can be changeable
        this.tile = null;

        this.imageRegistry = imageRegistry;

        //debugmode


        this.canvas.style.borderStyle = 'solid';
        this.canvas.style.borderColor = '#73AD21';
        this.canvas.style.borderWidth = '1px';
        this.imageStack = [];
        this.currentX = -1;
        this.currentY = -1;

        this.eventStatus = {};

        this.mouseCursor = new _elements_MouseCursor__WEBPACK_IMPORTED_MODULE_1__["default"](this);

        this.imageStack = [];
        this.currentShape = null;

        this.fillBackground();
        this.drawGrid();
        this.initEventListener();
    }
    setCurrentTile(tile) {
        this.tile = tile;
    }
    fillBackground() {
        const ctx = this.getContext();
        ctx.save();
        ctx.fillStyle = '#73AD21';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.restore();
    }
    drawGrid() {
        const ctx = this.getContext();
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '#0f0';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < this.canvas.width; i += 10) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, this.canvas.height);
        }
        for (let i = 0; i < this.canvas.width; i += 10) {
            ctx.moveTo(0, i);
            ctx.lineTo(this.canvas.width, i);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

    }

    clearDrawingArea() {
        //quad tree 만들것
        const ctx = this.getContext();
        const canvas = this.getCanvas();
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);//전체를 그리면 리소스 사용이 많다
        ctx.restore();
    }

    redraw() {
        this.clearDrawingArea();
        let len = this.imageStack.length;
        this.drawGrid();
        if (len <= 0) {
            return;
        }
        for (let i = 0; i < len; i++) {
            this.imageStack[i].draw();
        }
    }



    getCanvas() {
        return this.canvas;

    }
    getContext(option) {
        return this.canvas.getContext(option || '2d');
    }


    initEventListener() {
        this.onMouseMoveEvent();
        this.onMouseDownEvent();
        this.onMouseUpEvent();
        this.onKeyDownEvent();
    }

    onMouseUpEvent() {
        this.canvas.addEventListener('mouseup', (e) => {
            if (this.getCurrentShape() != null) {
                this.getCurrentShape().rotateModeOff();
                this.getCurrentShape().moveModeOff();
            }
        })
    }


    onMouseDownEvent() {
        this.canvas.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const pos = this.mouseCursor.getMousePosition(e);
            const entry = this.imageRegistry.currentEntry;//get chosen image from the registry.

            if (entry != null) {
                if (this.getCurrentShape() != null) {//set new shape element
                    this.getCurrentShape().releaseFocus();//blur
                }
                this.imageRegistry.releaseCurrentEntry();//release current entry from registry
                let shapeObj = new _elements_Shape__WEBPACK_IMPORTED_MODULE_0__["default"](this.getContext(), pos.x, pos.y);//create new shape object for drawing area

                shapeObj.setImage(entry.getImage());
                this.imageStack.push(shapeObj);
                this.setCurrentShape(shapeObj);
                this.getCurrentShape().setFocus();

                this.redraw();

            } else {//
                //if it clicks on shape element, move focus. if it clicks empty space, release everything.
                let targetElement = this.checkClickedArea(pos);//algorithm should be optimized.
                if (targetElement == null) {//when it chose empty space.
                    console.log('empty space');
                    if (this.getCurrentShape() != null) {
                        this.getCurrentShape().releaseFocus();
                    }
                    this.setCurrentShape(null);

                } else {//when it clicked on current shape element or other shape element.
                    if (this.getCurrentShape() == targetElement) {
                        console.log('same element');
                        //rotation or translate
                        if (this.getCurrentShape().isInCornerRect(pos)) {
                            this.getCurrentShape().rotateModeOn();
                        }
                        if (this.getCurrentShape().isInCenterRect(pos)) {
                            this.getCurrentShape().moveModeOn();
                        }
                    } else {
                        targetElement.setFocus();
                        if (this.getCurrentShape() != null) {
                            this.getCurrentShape().releaseFocus();
                        }
                        this.setCurrentShape(targetElement);

                    }

                }
                this.redraw();
            }

        })
    }

    checkClickedArea(mousePosition) {
        const stack = this.imageStack;
        const pos = mousePosition;
        let rect = null;
        let isX = false;
        let isY = false;

        for (let i = 0; i < stack.length; i++) {
            rect = stack[i].getRect();
            if (pos.x >= rect.x && pos.x <= rect.x + rect.width) {
                isX = true;
            }
            if (pos.y >= rect.y && pos.y <= rect.y + rect.height) {
                isY = true;
            }

            if (isX && isY) {
                return stack[i];
            }
            isX = false;
            isY = false;
        }
        return null;
    }

    setCurrentShape(shapeObj) {
        this.currentShape = shapeObj;
    }

    getCurrentShape() {
        return this.currentShape;
    }

    onMouseMoveEvent() {
        this.canvas.addEventListener('mousemove', (e) => {
            this.mouseCursor.updateMousePosition(e);
            let pos = this.mouseCursor.getMousePosition(e);


            if (this.imageRegistry.currentEntry != null) {//기본조건

                this.redraw();
                this.drawMouseCursor()

            } else {
                if (this.getCurrentShape() != null && this.getCurrentShape().isRotateMode()) {
                    this.getCurrentShape().rotateShape(pos);
                }
                if (this.getCurrentShape() != null && this.getCurrentShape().isMoveMode()) {
                    this.getCurrentShape().move(pos);
                }
                this.redraw();
            }




        })

    }
    removeCurrentShape() {
        this.imageStack = this.imageStack.filter((value, index, arr) => {
            return value != this.getCurrentShape()
        });
    }

    onKeyDownEvent() {
        const container = document.getElementsByClassName('container')[0];
        window.addEventListener('keydown', (e) => {
            e.preventDefault();


            console.log(e.keyCode);
            switch (e.keyCode) {

                case 8://delete key
                    this.removeCurrentShape();
                    break;

                case 37: case 38: case 39: case 40://arrow keys
                    if (e.altKey) {
                        this.rotateShapeObj(e);

                    } else {
                        this.moveShapeObj(e);

                    }
                    break;

                default:
                    break;
            }
            this.redraw();
        })
    }

    rotateShapeObj(e) {
        const currentShape = this.getCurrentShape();
        if (currentShape == null) {
            return;
        }
        switch (e.keyCode) {
            case 37:case 40://left down
            currentShape.setAngle(-1);
                break;
            case 38:case 39://up right
            currentShape.setAngle(1);

                break;

            default:
                break;
        }
    }
    moveShapeObj(e) {
        const currentShape = this.getCurrentShape();
        if (currentShape == null) {
            return;
        }
        switch (e.keyCode) {
            case 37:
                //left
                currentShape.moveHorizontal(-1);

                break;
            case 38:
                //up
                currentShape.moveVertical(-1);

                break;
            case 39:
                //right
                currentShape.moveHorizontal(1);
                break;
            case 40:
                //down
                currentShape.moveVertical(1);

                break;

            default:
                break;
        }
    }
    drawMouseCursor() {
        this.mouseCursor.draw();
    }
}

/***/ }),

/***/ "./src/elements/Btn.js":
/*!*****************************!*\
  !*** ./src/elements/Btn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Btn; });
class Btn {
    constructor(entry){
        const label = document.createElement('label');
        const input = document.createElement('input');
        label.appendChild(input);
        label.appendChild(entry.getImage());

        input.value = entry.getIndex();
        input.type = 'radio';
        input.name = 'tiles';
        input.classList.add('button');
        
        this.entry = entry;
        this.btn = label;
        this.input = input;
    }

    getElement(){
        return this.btn;
    }

    addEventListener(event, fn){
        return this.input.addEventListener(event,(e)=>{
            fn(e, this.entry);
        });
    }
}

/***/ }),

/***/ "./src/elements/ImageRegistry.js":
/*!***************************************!*\
  !*** ./src/elements/ImageRegistry.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageRegistry; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/elements/Shape.js");
/* harmony import */ var _images_heart_red_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/heart_red.png */ "./src/images/heart_red.png");
/* harmony import */ var _images_heart_skyblue_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/heart_skyblue.png */ "./src/images/heart_skyblue.png");
/* harmony import */ var _images_heart_orange_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/heart_orange.png */ "./src/images/heart_orange.png");
/* harmony import */ var _images_heart_green_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/heart_green.png */ "./src/images/heart_green.png");





class ImageRegistry {
    constructor() {
        this.imageList = [
            _images_heart_red_png__WEBPACK_IMPORTED_MODULE_1__["default"],
            _images_heart_skyblue_png__WEBPACK_IMPORTED_MODULE_2__["default"],
            _images_heart_orange_png__WEBPACK_IMPORTED_MODULE_3__["default"],
            _images_heart_green_png__WEBPACK_IMPORTED_MODULE_4__["default"]
        ];
        this.assets = [];
        this.subscriber = [];
        this.loadImages();
        this.currentEntry=null;//chosen tile image
        this.releaseToolBarSelectionFn;
    }
    setToolbarCallbackFn(fn){
        this.releaseToolBarSelectionFn = fn;
    }

    releaseCurrentEntry(){
        this.currentEntry=null;
        if(this.releaseToolBarSelectionFn!=null){
            this.releaseToolBarSelectionFn();
        }
    }

    getCurrentEntry(){
        return this.currentEntry;
    }

    setCurrentEntry(event, entry) {
        this.currentEntry = entry;
        
    }
    loadImages() {
        let len = this.imageList.length;

        this.imageList.forEach((item, index) => {

            let entry = new Entry(item, index, () => {
                len--;
                this.assets.push(entry);
                this.isLoadFinished(len);
            });


        });


    }
    subscribe(fn) {
        this.subscriber.push(fn);
    }

    runCallbackFn() {
        const subscriber = this.subscriber;
        for (let i = 0; i < subscriber.length; i++) {
            subscriber[i](this);
        }
    }

    isLoadFinished(len) {
        if (len <= 0) {
            console.log('Load finished');
            this.runCallbackFn();
        } else {
            console.log('Now loading images...(' + this.assets.length + '/' + this.imageList.length + ')');
        }
    }

}

class Entry {
    constructor(img, index, fn) {
        this.img = new Image();
        this.img.onload = fn;
        this.img.src = img;
        this.index = index;
    }
    getImage() {
        return this.img==null?null:this.img;
    }
    getIndex() {
        return this.index;
    }
    getRect() {
        return {
            width: this.img.width,
            height: this.img.height
        }
    }
}

/***/ }),

/***/ "./src/elements/MouseCursor.js":
/*!*************************************!*\
  !*** ./src/elements/MouseCursor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseCursor; });


class MouseCursor {
    constructor(drawingArea){
        this.drawingArea = drawingArea;
        this.canvas = drawingArea.getCanvas();
        this.context = drawingArea.getContext();
        this.positionObj = {
            x: 0,
            y: 0
        };
    }

    updateMousePosition(event){
        
        this.positionObj = this.getMousePosition(event);
    }

    getMousePosition(e) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }
    }

    draw(){
        const imageRegistry = this.drawingArea.imageRegistry;
        const entry = imageRegistry.currentEntry;
        const ctx = this.context;
        if(entry==null||entry==undefined)return;
        const img = entry.getImage();
        ctx.save();
        ctx.drawImage(img, this.positionObj.x, this.positionObj.y, img.width, img.height);
        ctx.restore();
    }
}

/***/ }),

/***/ "./src/elements/Shape.js":
/*!*******************************!*\
  !*** ./src/elements/Shape.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shape; });
class Shape {
    constructor(ctx, x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;

        this.ctx = ctx;

        this.styles = {};
        this.imageSrc;//for tile images
        this.img;
        // this.img = new Image();
        // this.img.src = imageFile;//test image
        // this.img.onload = (e) => {
        //     fn(e);
        // }
        this.isFocused = false;
        this.moveMode = false;
        this.rotateMode = false;
        this.smallRectSize = 5;

    }

    moveHorizontal(x){
        this.x += x;
    }
    moveVertical(y){
        this.y += y;
    }

    isInCenterWidth(pos){
        const rect = this.getRect();
        const quarter = rect.width /4 ;
        return (pos.x >= rect.x + quarter) && (pos.x <= rect.x + rect.width - quarter);
    }

    isInCenterHeight(pos){
        const rect = this.getRect();
        const quarter = rect.height /4 ;
        return (pos.y >= rect.y + quarter) && (pos.y <= rect.y + rect.height - quarter);
    }

    isInCenterRect(pos){
        return this.isInCenterWidth(pos) && this.isInCenterHeight(pos);
    }

    isMoveMode(){
        return this.moveMode;
    }

    moveModeOff(){
        this.moveMode=false;
        console.log('move mode off');

    }

    moveModeOn(){
        this.moveMode = true;
    }

    move(pos){
        const halfWidth = this.img.width /2;
        const halfHeight = this.img.height /2;
        this.x = pos.x - halfWidth;
        this.y = pos.y - halfHeight;
    }

    isRotateMode(){
        return this.rotateMode;
    }

    rotateModeOff(){
        this.rotateMode = false;
        console.log('rotate mode off');
    }

    rotateModeOn(){
        this.rotateMode = true;
    }

    getRect() {
        return {
            x: this.x,
            y: this.y,
            width: this.img.width,
            height: this.img.height
        }
    }

    setAngle(value){
        this.angle += value;
    }

    setImage(img) {
        this.img = img;
    }

    getImage() {
        return this.img;
    }
    increaseAngle() {
        this.setAngle(5);
        
        if (this.angle > 360) {
            this.angle = 0;
        }
    }
    decreaseAngle() {
        this.setAngle(-5);
        if (this.angle < 0) {
            this.angle = 360;
        }
    }

    getCornerRect() {
        const smallRectSize = this.smallRectSize;
        const width = this.img.width;
        const height = this.img.height;
        return {
            nw: {
                x: this.x,
                y: this.y,
                width: smallRectSize,
                height: smallRectSize
            },
            ne: {
                x: this.x + width - smallRectSize,
                y: this.y,
                width: smallRectSize,
                height: smallRectSize
            },
            sw: {
                x: this.x,
                y: this.y + height - smallRectSize,
                width: smallRectSize,
                height: smallRectSize
            },
            se: {
                x: this.x + width - smallRectSize,
                y: this.y + height - smallRectSize,
                width: smallRectSize,
                height: smallRectSize
            },


        }
    }

    checkXinCorner(pos){
        return this.checkXEast(pos) || this.checkXWest(pos);
    }
    checkXEast(pos){
        const width = this.img.width;
        return (pos.x >= this.x + width - this.smallRectSize && pos.x <= this.x + width);
    }
    checkXWest(pos){
        return (pos.x >= this.x && pos.x < this.x + this.smallRectSize);
    }

    checkYinCorner(pos){
        return this.checkYNorth(pos) || this.checkYSouth(pos);
    }
    checkYSouth(pos){
        const height = this.img.height;
        return (pos.y >= this.y + height - this.smallRectSize && pos.y <= this.y + height);
    }
    checkYNorth(pos){
        
        if(pos.y >= this.y && pos.y <= this.y + this.smallRectSize){
            return true;
        }
        return false;
    }
    isInCornerRect(pos) {
        
        return this.checkXinCorner(pos) && this.checkYinCorner(pos);
    }

    drawBox() {
        const smallRectSize = this.smallRectSize;
        this.ctx.lineWidth = 0.5;
        this.ctx.strokeRect(this.x, this.y, this.img.width, this.img.height);
        //draw 4 children white rect
        this.ctx.save();
        this.ctx.fillStyle = 'white';
        this.ctx.strokeRect(this.x, this.y, smallRectSize, smallRectSize);
        this.ctx.strokeRect(this.x, this.y + this.img.height - smallRectSize, smallRectSize, smallRectSize);
        this.ctx.strokeRect(this.x + this.img.width - smallRectSize, this.y + this.img.height - smallRectSize, smallRectSize, smallRectSize);
        this.ctx.strokeRect(this.x + this.img.width - smallRectSize, this.y, smallRectSize, smallRectSize);
        this.ctx.restore();
    }
    draw() {
        const halfWidth = this.img.width / 2;
        const halfHeight = this.img.height / 2;
        const offset = halfWidth / 2;
        //console.log(this.x,this.y);
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(this.x + halfWidth, this.y + halfHeight);
        this.ctx.rotate(-(Math.PI / 180 * this.angle));
        this.ctx.translate(-(this.x + halfWidth), -(this.y + halfHeight));
        if (this.isFocused) {
            this.drawBox();
        }
        this.ctx.drawImage(this.img, this.x, this.y);
        //this.ctx.arc(this.x+radius,this.y+radius,radius,0,Math.PI, true);
        //this.ctx.rotate(-(Math.PI/180*this.angle));
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();
    }

    setFocus() {
        this.isFocused = true;
    }

    releaseFocus() {
        this.isFocused = false;
    }
    rotateShape(pos) {
        let ctx = this.ctx;
        let deltaX = pos.x - this.x;
        let deltaY = -(pos.y - this.y);
        let angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
        
        
        this.angle = angle + 45;

        ctx.save();
        // ctx.fillStyle = 'rgba(255,255,255,0)';
        // ctx.fillRect(this.x, this.y, 10, 10);

        // ctx.clip();
        // ctx.clearRect(this.x,this.y, 50, 50);
        // this.draw();
        ctx.restore();
    }
}

/***/ }),

/***/ "./src/elements/ToolBar.js":
/*!*********************************!*\
  !*** ./src/elements/ToolBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToolBar; });
/* harmony import */ var _Btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Btn */ "./src/elements/Btn.js");
/* harmony import */ var _toolbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.css */ "./src/elements/toolbar.css");
/* harmony import */ var _toolbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toolbar_css__WEBPACK_IMPORTED_MODULE_1__);


class ToolBar {
    constructor(imageRegistry){
        
        this.elmToolBar=document.createElement('div');;
        this.currentOption=null;
        this.imageRegistry = imageRegistry;
        this.toolBarArea = document.createElement('canvas');
        // this.elmToolBar.style.borderWidth = '1px';
        // this.elmToolBar.style.borderStyle = 'solid';
        // this.elmToolBar.style.borderColor = 'blue';
        imageRegistry.subscribe((imgRegistry)=>{
            this.drawToolBarOptions(imgRegistry);//사실은 이미지로딩이 끝날 때, 콜백으로 호출해야 함
        });
        imageRegistry.setToolbarCallbackFn(()=>{
            
            if (this.currentOption!=null) {
                this.currentOption.checked = false;
            }
        });
    }

    getToolBarArea(){
        // return this.toolBarArea;
        return this.elmToolBar;
    }

    getContext(){
        return this.toolBarArea.getContext('2d');
    }
    drawToolBarOptions(imgRgstry){
        const elmToolBar = this. elmToolBar;
        const imgAssets = imgRgstry.assets;
        // ctx.save();

        for(let i = 0; i<imgAssets.length; i++){
            
            let entry = imgAssets[i];

            // elmToolBar.appendChild(entry.getImage());
            let btn = new _Btn__WEBPACK_IMPORTED_MODULE_0__["default"](entry);
            elmToolBar.appendChild(btn.getElement());
            btn.addEventListener('click',(e, entry)=>{
                this.currentOption = e.target;
                imgRgstry.setCurrentEntry(e, entry);
            });
        }
        // elmToolBar.addEventListener('click',(e)=>{
        //     const elms = document.getElementsByName('tiles');
        //     this.currentOption = this.findCurrentTile(elms);
        //     this.imageRegistry.setCurrentTile(this.currentOption);
        // });
        // ctx.restore();
    }
    findCurrentTile(tiles){
        for(let i = 0; i<tiles.length; i++){
            // console.log(tiles[i].checked)
            if(tiles[i].checked==true){
                return tiles[i];
            }
        }
    }
    
    getCurrentOption(){
        
        return this.currentOption;
    }
}



/***/ }),

/***/ "./src/elements/toolbar.css":
/*!**********************************!*\
  !*** ./src/elements/toolbar.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./toolbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/elements/toolbar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/images/heart_green.png":
/*!************************************!*\
  !*** ./src/images/heart_green.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "237ed9047bb8857edcf7f9dbf80f4cb7.png");

/***/ }),

/***/ "./src/images/heart_orange.png":
/*!*************************************!*\
  !*** ./src/images/heart_orange.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8d9c730d2a734695ff7922da1b53840b.png");

/***/ }),

/***/ "./src/images/heart_red.png":
/*!**********************************!*\
  !*** ./src/images/heart_red.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "09a20a666545756fcec1d2db13514d4a.png");

/***/ }),

/***/ "./src/images/heart_skyblue.png":
/*!**************************************!*\
  !*** ./src/images/heart_skyblue.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ed3b166b27f4144cb11dd97d70686395.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawingArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawingArea */ "./src/DrawingArea.js");
/* harmony import */ var _elements_ToolBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/ToolBar */ "./src/elements/ToolBar.js");
/* harmony import */ var _elements_ImageRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/ImageRegistry */ "./src/elements/ImageRegistry.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_3__);





function component(){
    const container = document.createElement('div');
    container.classList.add('container');
    const nav = document.createElement('nav');
    const mainSection = document.createElement('section');
    const headerSection = document.createElement('section');
    
    const drawingArea = document.createElement('div');
    const toolBarArea = document.createElement('div');
    const header = document.createElement('div');


    const imageRegistry = new _elements_ImageRegistry__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const canvas = new _DrawingArea__WEBPACK_IMPORTED_MODULE_0__["default"](400,400, imageRegistry);
    const toolBar = new _elements_ToolBar__WEBPACK_IMPORTED_MODULE_1__["default"](imageRegistry);
    const p = document.createElement('p');
    p.innerHTML = 'DEMO MOSAIC';
    header.appendChild(p);

    drawingArea. appendChild(canvas.getCanvas());
    toolBarArea.appendChild(toolBar.getToolBarArea());
    nav.appendChild(toolBarArea);

    headerSection.appendChild(header);
    mainSection.appendChild(drawingArea);
    container.appendChild(nav);
    container.appendChild(headerSection);
    container.appendChild(mainSection);

    return container;
}

document.body.appendChild(component());


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3Rvb2xiYXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZ0FyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL0J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvSW1hZ2VSZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvTW91c2VDdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9Ub29sQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy90b29sYmFyLmNzcz8yYmYxIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGVhcnRfZ3JlZW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGVhcnRfb3JhbmdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hlYXJ0X3JlZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFydF9za3libHVlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzP2RkZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBQ0Q7QUFDUjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isb0JBQW9COztBQUUxQzs7QUFFQTtBQUNBLDBCQUEwQiw0Q0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BFQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGtJQUEyRDs7QUFFN0Y7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNDO0FBQ1k7QUFDakM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLDhCQUE4QiwrREFBYTtBQUMzQyx1QkFBdUIsb0RBQVc7QUFDbEMsd0JBQXdCLHlEQUFPO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNyQ0EsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxnSEFBcUQ7O0FBRXZGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEhJREUgUkFESU8gKi9cXG5bdHlwZT1yYWRpb10geyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAvKiBJTUFHRSBTVFlMRVMgKi9cXG4gIFt0eXBlPXJhZGlvXSArIGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLyogQ0hFQ0tFRCBTVFlMRVMgKi9cXG4gIFt0eXBlPXJhZGlvXTpjaGVja2VkICsgaW1nIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHQgMnB0ICM5MjkyOTI7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1widG9vbGJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZTtBQUNmO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBLGlCQUFpQjtFQUNqQjtJQUNFLGVBQWU7RUFDakI7O0VBRUEsbUJBQW1CO0VBQ25CO0lBQ0UsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQiwrQkFBK0I7RUFDakNcIixcImZpbGVcIjpcInRvb2xiYXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhJREUgUkFESU8gKi9cXG5bdHlwZT1yYWRpb10geyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAvKiBJTUFHRSBTVFlMRVMgKi9cXG4gIFt0eXBlPXJhZGlvXSArIGltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLyogQ0hFQ0tFRCBTVFlMRVMgKi9cXG4gIFt0eXBlPXJhZGlvXTpjaGVja2VkICsgaW1nIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHQgMnB0ICM5MjkyOTI7XFxuICB9XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgIzZhYzVhYyAycHg7XFxufVxcbm5hdiB7XFxuICBib3JkZXI6IHNvbGlkICNkNjQwNzggMnB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGJvcmRlcjogc29saWQgI2ZkYzcyZiAycHg7XFxuICB3aWR0aDogNzUlO1xcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wibWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEJcIixcImZpbGVcIjpcIm1haW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAjNmFjNWFjIDJweDtcXG59XFxubmF2IHtcXG4gIGJvcmRlcjogc29saWQgI2Q2NDA3OCAycHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAyNSU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYm9yZGVyOiBzb2xpZCAjZmRjNzJmIDJweDtcXG4gIHdpZHRoOiA3NSU7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBTaGFwZU9iamVjdCBmcm9tICcuL2VsZW1lbnRzL1NoYXBlJztcbmltcG9ydCBNb3VzZUN1cnNvciBmcm9tICcuL2VsZW1lbnRzL01vdXNlQ3Vyc29yJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmdBcmVhIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBpbWFnZVJlZ2lzdHJ5KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50aWxlc2l6ZSA9IDEwOy8vY2FuIGJlIGNoYW5nZWFibGVcbiAgICAgICAgdGhpcy50aWxlID0gbnVsbDtcblxuICAgICAgICB0aGlzLmltYWdlUmVnaXN0cnkgPSBpbWFnZVJlZ2lzdHJ5O1xuXG4gICAgICAgIC8vZGVidWdtb2RlXG5cblxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvcmRlckNvbG9yID0gJyM3M0FEMjEnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHgnO1xuICAgICAgICB0aGlzLmltYWdlU3RhY2sgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IC0xO1xuICAgICAgICB0aGlzLmN1cnJlbnRZID0gLTE7XG5cbiAgICAgICAgdGhpcy5ldmVudFN0YXR1cyA9IHt9O1xuXG4gICAgICAgIHRoaXMubW91c2VDdXJzb3IgPSBuZXcgTW91c2VDdXJzb3IodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbWFnZVN0YWNrID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudFNoYXBlID0gbnVsbDtcblxuICAgICAgICB0aGlzLmZpbGxCYWNrZ3JvdW5kKCk7XG4gICAgICAgIHRoaXMuZHJhd0dyaWQoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cbiAgICBzZXRDdXJyZW50VGlsZSh0aWxlKSB7XG4gICAgICAgIHRoaXMudGlsZSA9IHRpbGU7XG4gICAgfVxuICAgIGZpbGxCYWNrZ3JvdW5kKCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjNzNBRDIxJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICBkcmF3R3JpZCgpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwZjAnO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMC41O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzLndpZHRoOyBpICs9IDEwKSB7XG4gICAgICAgICAgICBjdHgubW92ZVRvKGksIDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhpLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYW52YXMud2lkdGg7IGkgKz0gMTApIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgaSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCBpKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcblxuICAgIH1cblxuICAgIGNsZWFyRHJhd2luZ0FyZWEoKSB7XG4gICAgICAgIC8vcXVhZCB0cmVlIOunjOuTpOqyg1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5nZXRDYW52YXMoKTtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOy8v7KCE7LK066W8IOq3uOumrOuptCDrpqzshozsiqQg7IKs7Jqp7J20IOunjuuLpFxuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgdGhpcy5jbGVhckRyYXdpbmdBcmVhKCk7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmltYWdlU3RhY2subGVuZ3RoO1xuICAgICAgICB0aGlzLmRyYXdHcmlkKCk7XG4gICAgICAgIGlmIChsZW4gPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTdGFja1tpXS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZ2V0Q2FudmFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXM7XG5cbiAgICB9XG4gICAgZ2V0Q29udGV4dChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmdldENvbnRleHQob3B0aW9uIHx8ICcyZCcpO1xuICAgIH1cblxuXG4gICAgaW5pdEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmVFdmVudCgpO1xuICAgICAgICB0aGlzLm9uTW91c2VEb3duRXZlbnQoKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXBFdmVudCgpO1xuICAgICAgICB0aGlzLm9uS2V5RG93bkV2ZW50KCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkucm90YXRlTW9kZU9mZigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkubW92ZU1vZGVPZmYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIG9uTW91c2VEb3duRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm1vdXNlQ3Vyc29yLmdldE1vdXNlUG9zaXRpb24oZSk7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuaW1hZ2VSZWdpc3RyeS5jdXJyZW50RW50cnk7Ly9nZXQgY2hvc2VuIGltYWdlIGZyb20gdGhlIHJlZ2lzdHJ5LlxuXG4gICAgICAgICAgICBpZiAoZW50cnkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRTaGFwZSgpICE9IG51bGwpIHsvL3NldCBuZXcgc2hhcGUgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRTaGFwZSgpLnJlbGVhc2VGb2N1cygpOy8vYmx1clxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmVnaXN0cnkucmVsZWFzZUN1cnJlbnRFbnRyeSgpOy8vcmVsZWFzZSBjdXJyZW50IGVudHJ5IGZyb20gcmVnaXN0cnlcbiAgICAgICAgICAgICAgICBsZXQgc2hhcGVPYmogPSBuZXcgU2hhcGVPYmplY3QodGhpcy5nZXRDb250ZXh0KCksIHBvcy54LCBwb3MueSk7Ly9jcmVhdGUgbmV3IHNoYXBlIG9iamVjdCBmb3IgZHJhd2luZyBhcmVhXG5cbiAgICAgICAgICAgICAgICBzaGFwZU9iai5zZXRJbWFnZShlbnRyeS5nZXRJbWFnZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlU3RhY2sucHVzaChzaGFwZU9iaik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50U2hhcGUoc2hhcGVPYmopO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkuc2V0Rm9jdXMoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7Ly9cbiAgICAgICAgICAgICAgICAvL2lmIGl0IGNsaWNrcyBvbiBzaGFwZSBlbGVtZW50LCBtb3ZlIGZvY3VzLiBpZiBpdCBjbGlja3MgZW1wdHkgc3BhY2UsIHJlbGVhc2UgZXZlcnl0aGluZy5cbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IHRoaXMuY2hlY2tDbGlja2VkQXJlYShwb3MpOy8vYWxnb3JpdGhtIHNob3VsZCBiZSBvcHRpbWl6ZWQuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT0gbnVsbCkgey8vd2hlbiBpdCBjaG9zZSBlbXB0eSBzcGFjZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VtcHR5IHNwYWNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRTaGFwZSgpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkucmVsZWFzZUZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50U2hhcGUobnVsbCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Ugey8vd2hlbiBpdCBjbGlja2VkIG9uIGN1cnJlbnQgc2hhcGUgZWxlbWVudCBvciBvdGhlciBzaGFwZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50U2hhcGUoKSA9PSB0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2FtZSBlbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JvdGF0aW9uIG9yIHRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkuaXNJbkNvcm5lclJlY3QocG9zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkucm90YXRlTW9kZU9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50U2hhcGUoKS5pc0luQ2VudGVyUmVjdChwb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50U2hhcGUoKS5tb3ZlTW9kZU9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNldEZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50U2hhcGUoKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50U2hhcGUoKS5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFNoYXBlKHRhcmdldEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2hlY2tDbGlja2VkQXJlYShtb3VzZVBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5pbWFnZVN0YWNrO1xuICAgICAgICBjb25zdCBwb3MgPSBtb3VzZVBvc2l0aW9uO1xuICAgICAgICBsZXQgcmVjdCA9IG51bGw7XG4gICAgICAgIGxldCBpc1ggPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzWSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlY3QgPSBzdGFja1tpXS5nZXRSZWN0KCk7XG4gICAgICAgICAgICBpZiAocG9zLnggPj0gcmVjdC54ICYmIHBvcy54IDw9IHJlY3QueCArIHJlY3Qud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBpc1ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvcy55ID49IHJlY3QueSAmJiBwb3MueSA8PSByZWN0LnkgKyByZWN0LmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGlzWSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc1ggJiYgaXNZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YWNrW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNYID0gZmFsc2U7XG4gICAgICAgICAgICBpc1kgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50U2hhcGUoc2hhcGVPYmopIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUgPSBzaGFwZU9iajtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50U2hhcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTaGFwZTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3VzZUN1cnNvci51cGRhdGVNb3VzZVBvc2l0aW9uKGUpO1xuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubW91c2VDdXJzb3IuZ2V0TW91c2VQb3NpdGlvbihlKTtcblxuXG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZVJlZ2lzdHJ5LmN1cnJlbnRFbnRyeSAhPSBudWxsKSB7Ly/quLDrs7jsobDqsbRcblxuICAgICAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TW91c2VDdXJzb3IoKVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRTaGFwZSgpICE9IG51bGwgJiYgdGhpcy5nZXRDdXJyZW50U2hhcGUoKS5pc1JvdGF0ZU1vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRTaGFwZSgpLnJvdGF0ZVNoYXBlKHBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRTaGFwZSgpICE9IG51bGwgJiYgdGhpcy5nZXRDdXJyZW50U2hhcGUoKS5pc01vdmVNb2RlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50U2hhcGUoKS5tb3ZlKHBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICByZW1vdmVDdXJyZW50U2hhcGUoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VTdGFjayA9IHRoaXMuaW1hZ2VTdGFjay5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT0gdGhpcy5nZXRDdXJyZW50U2hhcGUoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbktleURvd25FdmVudCgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGFpbmVyJylbMF07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmtleUNvZGUpO1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgODovL2RlbGV0ZSBrZXlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDdXJyZW50U2hhcGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM3OiBjYXNlIDM4OiBjYXNlIDM5OiBjYXNlIDQwOi8vYXJyb3cga2V5c1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlU2hhcGVPYmooZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVNoYXBlT2JqKGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcm90YXRlU2hhcGVPYmooZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50U2hhcGUgPSB0aGlzLmdldEN1cnJlbnRTaGFwZSgpO1xuICAgICAgICBpZiAoY3VycmVudFNoYXBlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzpjYXNlIDQwOi8vbGVmdCBkb3duXG4gICAgICAgICAgICBjdXJyZW50U2hhcGUuc2V0QW5nbGUoLTEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzODpjYXNlIDM5Oi8vdXAgcmlnaHRcbiAgICAgICAgICAgIGN1cnJlbnRTaGFwZS5zZXRBbmdsZSgxKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmVTaGFwZU9iaihlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaGFwZSA9IHRoaXMuZ2V0Q3VycmVudFNoYXBlKCk7XG4gICAgICAgIGlmIChjdXJyZW50U2hhcGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIC8vbGVmdFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGFwZS5tb3ZlSG9yaXpvbnRhbCgtMSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgLy91cFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGFwZS5tb3ZlVmVydGljYWwoLTEpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIC8vcmlnaHRcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hhcGUubW92ZUhvcml6b250YWwoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIC8vZG93blxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGFwZS5tb3ZlVmVydGljYWwoMSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3TW91c2VDdXJzb3IoKSB7XG4gICAgICAgIHRoaXMubW91c2VDdXJzb3IuZHJhdygpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdG4ge1xuICAgIGNvbnN0cnVjdG9yKGVudHJ5KXtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZW50cnkuZ2V0SW1hZ2UoKSk7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSBlbnRyeS5nZXRJbmRleCgpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgaW5wdXQubmFtZSA9ICd0aWxlcyc7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbnRyeSA9IGVudHJ5O1xuICAgICAgICB0aGlzLmJ0biA9IGxhYmVsO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5idG47XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4pe1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LChlKT0+e1xuICAgICAgICAgICAgZm4oZSwgdGhpcy5lbnRyeSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XG5pbXBvcnQgaGVhcnRSZWQgZnJvbSAnLi4vaW1hZ2VzL2hlYXJ0X3JlZC5wbmcnO1xuaW1wb3J0IGhlYXJ0Qmx1ZSBmcm9tICcuLi9pbWFnZXMvaGVhcnRfc2t5Ymx1ZS5wbmcnO1xuaW1wb3J0IGhlYXJ0WWVsbG93IGZyb20gJy4uL2ltYWdlcy9oZWFydF9vcmFuZ2UucG5nJztcbmltcG9ydCBoZWFydFB1cnBsZSBmcm9tICcuLi9pbWFnZXMvaGVhcnRfZ3JlZW4ucG5nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltYWdlTGlzdCA9IFtcbiAgICAgICAgICAgIGhlYXJ0UmVkLFxuICAgICAgICAgICAgaGVhcnRCbHVlLFxuICAgICAgICAgICAgaGVhcnRZZWxsb3csXG4gICAgICAgICAgICBoZWFydFB1cnBsZVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmFzc2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnN1YnNjcmliZXIgPSBbXTtcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2VzKCk7XG4gICAgICAgIHRoaXMuY3VycmVudEVudHJ5PW51bGw7Ly9jaG9zZW4gdGlsZSBpbWFnZVxuICAgICAgICB0aGlzLnJlbGVhc2VUb29sQmFyU2VsZWN0aW9uRm47XG4gICAgfVxuICAgIHNldFRvb2xiYXJDYWxsYmFja0ZuKGZuKXtcbiAgICAgICAgdGhpcy5yZWxlYXNlVG9vbEJhclNlbGVjdGlvbkZuID0gZm47XG4gICAgfVxuXG4gICAgcmVsZWFzZUN1cnJlbnRFbnRyeSgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRFbnRyeT1udWxsO1xuICAgICAgICBpZih0aGlzLnJlbGVhc2VUb29sQmFyU2VsZWN0aW9uRm4hPW51bGwpe1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlVG9vbEJhclNlbGVjdGlvbkZuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50RW50cnkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEVudHJ5O1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRFbnRyeShldmVudCwgZW50cnkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RW50cnkgPSBlbnRyeTtcbiAgICAgICAgXG4gICAgfVxuICAgIGxvYWRJbWFnZXMoKSB7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmltYWdlTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5pbWFnZUxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgbGV0IGVudHJ5ID0gbmV3IEVudHJ5KGl0ZW0sIGluZGV4LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGVuLS07XG4gICAgICAgICAgICAgICAgdGhpcy5hc3NldHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRGaW5pc2hlZChsZW4pO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KTtcblxuXG4gICAgfVxuICAgIHN1YnNjcmliZShmbikge1xuICAgICAgICB0aGlzLnN1YnNjcmliZXIucHVzaChmbik7XG4gICAgfVxuXG4gICAgcnVuQ2FsbGJhY2tGbigpIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IHRoaXMuc3Vic2NyaWJlcjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyW2ldKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNMb2FkRmluaXNoZWQobGVuKSB7XG4gICAgICAgIGlmIChsZW4gPD0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvYWQgZmluaXNoZWQnKTtcbiAgICAgICAgICAgIHRoaXMucnVuQ2FsbGJhY2tGbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdyBsb2FkaW5nIGltYWdlcy4uLignICsgdGhpcy5hc3NldHMubGVuZ3RoICsgJy8nICsgdGhpcy5pbWFnZUxpc3QubGVuZ3RoICsgJyknKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5jbGFzcyBFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoaW1nLCBpbmRleCwgZm4pIHtcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWcub25sb2FkID0gZm47XG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IGltZztcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIH1cbiAgICBnZXRJbWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1nPT1udWxsP251bGw6dGhpcy5pbWc7XG4gICAgfVxuICAgIGdldEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgICB9XG4gICAgZ2V0UmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmltZy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5pbWcuaGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlQ3Vyc29yIHtcbiAgICBjb25zdHJ1Y3RvcihkcmF3aW5nQXJlYSl7XG4gICAgICAgIHRoaXMuZHJhd2luZ0FyZWEgPSBkcmF3aW5nQXJlYTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkcmF3aW5nQXJlYS5nZXRDYW52YXMoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZHJhd2luZ0FyZWEuZ2V0Q29udGV4dCgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uT2JqID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVNb3VzZVBvc2l0aW9uKGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucG9zaXRpb25PYmogPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZXZlbnQpO1xuICAgIH1cblxuICAgIGdldE1vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBlLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgICAgICB5OiBlLmNsaWVudFkgLSByZWN0LnRvcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICBjb25zdCBpbWFnZVJlZ2lzdHJ5ID0gdGhpcy5kcmF3aW5nQXJlYS5pbWFnZVJlZ2lzdHJ5O1xuICAgICAgICBjb25zdCBlbnRyeSA9IGltYWdlUmVnaXN0cnkuY3VycmVudEVudHJ5O1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGlmKGVudHJ5PT1udWxsfHxlbnRyeT09dW5kZWZpbmVkKXJldHVybjtcbiAgICAgICAgY29uc3QgaW1nID0gZW50cnkuZ2V0SW1hZ2UoKTtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHRoaXMucG9zaXRpb25PYmoueCwgdGhpcy5wb3NpdGlvbk9iai55LCBpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xuXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuc3R5bGVzID0ge307XG4gICAgICAgIHRoaXMuaW1hZ2VTcmM7Ly9mb3IgdGlsZSBpbWFnZXNcbiAgICAgICAgdGhpcy5pbWc7XG4gICAgICAgIC8vIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMuaW1nLnNyYyA9IGltYWdlRmlsZTsvL3Rlc3QgaW1hZ2VcbiAgICAgICAgLy8gdGhpcy5pbWcub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgLy8gICAgIGZuKGUpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW92ZU1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3RhdGVNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc21hbGxSZWN0U2l6ZSA9IDU7XG5cbiAgICB9XG5cbiAgICBtb3ZlSG9yaXpvbnRhbCh4KXtcbiAgICAgICAgdGhpcy54ICs9IHg7XG4gICAgfVxuICAgIG1vdmVWZXJ0aWNhbCh5KXtcbiAgICAgICAgdGhpcy55ICs9IHk7XG4gICAgfVxuXG4gICAgaXNJbkNlbnRlcldpZHRoKHBvcyl7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldFJlY3QoKTtcbiAgICAgICAgY29uc3QgcXVhcnRlciA9IHJlY3Qud2lkdGggLzQgO1xuICAgICAgICByZXR1cm4gKHBvcy54ID49IHJlY3QueCArIHF1YXJ0ZXIpICYmIChwb3MueCA8PSByZWN0LnggKyByZWN0LndpZHRoIC0gcXVhcnRlcik7XG4gICAgfVxuXG4gICAgaXNJbkNlbnRlckhlaWdodChwb3Mpe1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHF1YXJ0ZXIgPSByZWN0LmhlaWdodCAvNCA7XG4gICAgICAgIHJldHVybiAocG9zLnkgPj0gcmVjdC55ICsgcXVhcnRlcikgJiYgKHBvcy55IDw9IHJlY3QueSArIHJlY3QuaGVpZ2h0IC0gcXVhcnRlcik7XG4gICAgfVxuXG4gICAgaXNJbkNlbnRlclJlY3QocG9zKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbkNlbnRlcldpZHRoKHBvcykgJiYgdGhpcy5pc0luQ2VudGVySGVpZ2h0KHBvcyk7XG4gICAgfVxuXG4gICAgaXNNb3ZlTW9kZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlTW9kZTtcbiAgICB9XG5cbiAgICBtb3ZlTW9kZU9mZigpe1xuICAgICAgICB0aGlzLm1vdmVNb2RlPWZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZygnbW92ZSBtb2RlIG9mZicpO1xuXG4gICAgfVxuXG4gICAgbW92ZU1vZGVPbigpe1xuICAgICAgICB0aGlzLm1vdmVNb2RlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBtb3ZlKHBvcyl7XG4gICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuaW1nLndpZHRoIC8yO1xuICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gdGhpcy5pbWcuaGVpZ2h0IC8yO1xuICAgICAgICB0aGlzLnggPSBwb3MueCAtIGhhbGZXaWR0aDtcbiAgICAgICAgdGhpcy55ID0gcG9zLnkgLSBoYWxmSGVpZ2h0O1xuICAgIH1cblxuICAgIGlzUm90YXRlTW9kZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGVNb2RlO1xuICAgIH1cblxuICAgIHJvdGF0ZU1vZGVPZmYoKXtcbiAgICAgICAgdGhpcy5yb3RhdGVNb2RlID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyb3RhdGUgbW9kZSBvZmYnKTtcbiAgICB9XG5cbiAgICByb3RhdGVNb2RlT24oKXtcbiAgICAgICAgdGhpcy5yb3RhdGVNb2RlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRSZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55LFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuaW1nLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmltZy5oZWlnaHRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFuZ2xlKHZhbHVlKXtcbiAgICAgICAgdGhpcy5hbmdsZSArPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRJbWFnZShpbWcpIHtcbiAgICAgICAgdGhpcy5pbWcgPSBpbWc7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltZztcbiAgICB9XG4gICAgaW5jcmVhc2VBbmdsZSgpIHtcbiAgICAgICAgdGhpcy5zZXRBbmdsZSg1KTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWNyZWFzZUFuZ2xlKCkge1xuICAgICAgICB0aGlzLnNldEFuZ2xlKC01KTtcbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMzYwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q29ybmVyUmVjdCgpIHtcbiAgICAgICAgY29uc3Qgc21hbGxSZWN0U2l6ZSA9IHRoaXMuc21hbGxSZWN0U2l6ZTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmltZy53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbWcuaGVpZ2h0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbnc6IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy55LFxuICAgICAgICAgICAgICAgIHdpZHRoOiBzbWFsbFJlY3RTaXplLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc21hbGxSZWN0U2l6ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5lOiB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy54ICsgd2lkdGggLSBzbWFsbFJlY3RTaXplLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgICAgICAgICB3aWR0aDogc21hbGxSZWN0U2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNtYWxsUmVjdFNpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdzoge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnkgKyBoZWlnaHQgLSBzbWFsbFJlY3RTaXplLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBzbWFsbFJlY3RTaXplLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc21hbGxSZWN0U2l6ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlOiB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy54ICsgd2lkdGggLSBzbWFsbFJlY3RTaXplLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMueSArIGhlaWdodCAtIHNtYWxsUmVjdFNpemUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNtYWxsUmVjdFNpemUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzbWFsbFJlY3RTaXplXG4gICAgICAgICAgICB9LFxuXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrWGluQ29ybmVyKHBvcyl7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrWEVhc3QocG9zKSB8fCB0aGlzLmNoZWNrWFdlc3QocG9zKTtcbiAgICB9XG4gICAgY2hlY2tYRWFzdChwb3Mpe1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW1nLndpZHRoO1xuICAgICAgICByZXR1cm4gKHBvcy54ID49IHRoaXMueCArIHdpZHRoIC0gdGhpcy5zbWFsbFJlY3RTaXplICYmIHBvcy54IDw9IHRoaXMueCArIHdpZHRoKTtcbiAgICB9XG4gICAgY2hlY2tYV2VzdChwb3Mpe1xuICAgICAgICByZXR1cm4gKHBvcy54ID49IHRoaXMueCAmJiBwb3MueCA8IHRoaXMueCArIHRoaXMuc21hbGxSZWN0U2l6ZSk7XG4gICAgfVxuXG4gICAgY2hlY2tZaW5Db3JuZXIocG9zKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tZTm9ydGgocG9zKSB8fCB0aGlzLmNoZWNrWVNvdXRoKHBvcyk7XG4gICAgfVxuICAgIGNoZWNrWVNvdXRoKHBvcyl7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaW1nLmhlaWdodDtcbiAgICAgICAgcmV0dXJuIChwb3MueSA+PSB0aGlzLnkgKyBoZWlnaHQgLSB0aGlzLnNtYWxsUmVjdFNpemUgJiYgcG9zLnkgPD0gdGhpcy55ICsgaGVpZ2h0KTtcbiAgICB9XG4gICAgY2hlY2tZTm9ydGgocG9zKXtcbiAgICAgICAgXG4gICAgICAgIGlmKHBvcy55ID49IHRoaXMueSAmJiBwb3MueSA8PSB0aGlzLnkgKyB0aGlzLnNtYWxsUmVjdFNpemUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc0luQ29ybmVyUmVjdChwb3MpIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrWGluQ29ybmVyKHBvcykgJiYgdGhpcy5jaGVja1lpbkNvcm5lcihwb3MpO1xuICAgIH1cblxuICAgIGRyYXdCb3goKSB7XG4gICAgICAgIGNvbnN0IHNtYWxsUmVjdFNpemUgPSB0aGlzLnNtYWxsUmVjdFNpemU7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5pbWcud2lkdGgsIHRoaXMuaW1nLmhlaWdodCk7XG4gICAgICAgIC8vZHJhdyA0IGNoaWxkcmVuIHdoaXRlIHJlY3RcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCBzbWFsbFJlY3RTaXplLCBzbWFsbFJlY3RTaXplKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSArIHRoaXMuaW1nLmhlaWdodCAtIHNtYWxsUmVjdFNpemUsIHNtYWxsUmVjdFNpemUsIHNtYWxsUmVjdFNpemUpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KHRoaXMueCArIHRoaXMuaW1nLndpZHRoIC0gc21hbGxSZWN0U2l6ZSwgdGhpcy55ICsgdGhpcy5pbWcuaGVpZ2h0IC0gc21hbGxSZWN0U2l6ZSwgc21hbGxSZWN0U2l6ZSwgc21hbGxSZWN0U2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QodGhpcy54ICsgdGhpcy5pbWcud2lkdGggLSBzbWFsbFJlY3RTaXplLCB0aGlzLnksIHNtYWxsUmVjdFNpemUsIHNtYWxsUmVjdFNpemUpO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuaW1nLndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuaW1nLmhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGhhbGZXaWR0aCAvIDI7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy54LHRoaXMueSk7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLnggKyBoYWxmV2lkdGgsIHRoaXMueSArIGhhbGZIZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUoLShNYXRoLlBJIC8gMTgwICogdGhpcy5hbmdsZSkpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLSh0aGlzLnggKyBoYWxmV2lkdGgpLCAtKHRoaXMueSArIGhhbGZIZWlnaHQpKTtcbiAgICAgICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdCb3goKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgLy90aGlzLmN0eC5hcmModGhpcy54K3JhZGl1cyx0aGlzLnkrcmFkaXVzLHJhZGl1cywwLE1hdGguUEksIHRydWUpO1xuICAgICAgICAvL3RoaXMuY3R4LnJvdGF0ZSgtKE1hdGguUEkvMTgwKnRoaXMuYW5nbGUpKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgc2V0Rm9jdXMoKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWxlYXNlRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHJvdGF0ZVNoYXBlKHBvcykge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGxldCBkZWx0YVggPSBwb3MueCAtIHRoaXMueDtcbiAgICAgICAgbGV0IGRlbHRhWSA9IC0ocG9zLnkgLSB0aGlzLnkpO1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGRlbHRhWSwgZGVsdGFYKSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlICsgNDU7XG5cbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDApJztcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCAxMCwgMTApO1xuXG4gICAgICAgIC8vIGN0eC5jbGlwKCk7XG4gICAgICAgIC8vIGN0eC5jbGVhclJlY3QodGhpcy54LHRoaXMueSwgNTAsIDUwKTtcbiAgICAgICAgLy8gdGhpcy5kcmF3KCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxufSIsImltcG9ydCBCdG4gZnJvbSAnLi9CdG4nO1xuaW1wb3J0ICcuL3Rvb2xiYXIuY3NzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xCYXIge1xuICAgIGNvbnN0cnVjdG9yKGltYWdlUmVnaXN0cnkpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbG1Ub29sQmFyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOztcbiAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9uPW51bGw7XG4gICAgICAgIHRoaXMuaW1hZ2VSZWdpc3RyeSA9IGltYWdlUmVnaXN0cnk7XG4gICAgICAgIHRoaXMudG9vbEJhckFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgLy8gdGhpcy5lbG1Ub29sQmFyLnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCc7XG4gICAgICAgIC8vIHRoaXMuZWxtVG9vbEJhci5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gICAgICAgIC8vIHRoaXMuZWxtVG9vbEJhci5zdHlsZS5ib3JkZXJDb2xvciA9ICdibHVlJztcbiAgICAgICAgaW1hZ2VSZWdpc3RyeS5zdWJzY3JpYmUoKGltZ1JlZ2lzdHJ5KT0+e1xuICAgICAgICAgICAgdGhpcy5kcmF3VG9vbEJhck9wdGlvbnMoaW1nUmVnaXN0cnkpOy8v7IKs7Iuk7J2AIOydtOuvuOyngOuhnOuUqeydtCDrgZ3rgqAg65WMLCDsvZzrsLHsnLzroZwg7Zi47Lac7ZW07JW8IO2VqFxuICAgICAgICB9KTtcbiAgICAgICAgaW1hZ2VSZWdpc3RyeS5zZXRUb29sYmFyQ2FsbGJhY2tGbigoKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9uIT1udWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VG9vbEJhckFyZWEoKXtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMudG9vbEJhckFyZWE7XG4gICAgICAgIHJldHVybiB0aGlzLmVsbVRvb2xCYXI7XG4gICAgfVxuXG4gICAgZ2V0Q29udGV4dCgpe1xuICAgICAgICByZXR1cm4gdGhpcy50b29sQmFyQXJlYS5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICBkcmF3VG9vbEJhck9wdGlvbnMoaW1nUmdzdHJ5KXtcbiAgICAgICAgY29uc3QgZWxtVG9vbEJhciA9IHRoaXMuIGVsbVRvb2xCYXI7XG4gICAgICAgIGNvbnN0IGltZ0Fzc2V0cyA9IGltZ1Jnc3RyeS5hc3NldHM7XG4gICAgICAgIC8vIGN0eC5zYXZlKCk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxpbWdBc3NldHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZW50cnkgPSBpbWdBc3NldHNbaV07XG5cbiAgICAgICAgICAgIC8vIGVsbVRvb2xCYXIuYXBwZW5kQ2hpbGQoZW50cnkuZ2V0SW1hZ2UoKSk7XG4gICAgICAgICAgICBsZXQgYnRuID0gbmV3IEJ0bihlbnRyeSk7XG4gICAgICAgICAgICBlbG1Ub29sQmFyLmFwcGVuZENoaWxkKGJ0bi5nZXRFbGVtZW50KCkpO1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSwgZW50cnkpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9uID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaW1nUmdzdHJ5LnNldEN1cnJlbnRFbnRyeShlLCBlbnRyeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbG1Ub29sQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgLy8gICAgIGNvbnN0IGVsbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGlsZXMnKTtcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudE9wdGlvbiA9IHRoaXMuZmluZEN1cnJlbnRUaWxlKGVsbXMpO1xuICAgICAgICAvLyAgICAgdGhpcy5pbWFnZVJlZ2lzdHJ5LnNldEN1cnJlbnRUaWxlKHRoaXMuY3VycmVudE9wdGlvbik7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICBmaW5kQ3VycmVudFRpbGUodGlsZXMpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHRpbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbGVzW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICBpZih0aWxlc1tpXS5jaGVja2VkPT10cnVlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGlsZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0Q3VycmVudE9wdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE9wdGlvbjtcbiAgICB9XG59XG5cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b29sYmFyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIzN2VkOTA0N2JiODg1N2VkY2Y3ZjlkYmY4MGY0Y2I3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZDljNzMwZDJhNzM0Njk1ZmY3OTIyZGExYjUzODQwYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDlhMjBhNjY2NTQ1NzU2ZmNlYzFkMmRiMTM1MTRkNGEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVkM2IxNjZiMjdmNDE0NGNiMTFkZDk3ZDcwNjg2Mzk1LnBuZ1wiOyIsImltcG9ydCBEcmF3aW5nQXJlYSBmcm9tICcuL0RyYXdpbmdBcmVhJztcbmltcG9ydCBUb29sQmFyIGZyb20gJy4vZWxlbWVudHMvVG9vbEJhcic7XG5pbXBvcnQgSW1hZ2VSZWdpc3RyeSBmcm9tICcuL2VsZW1lbnRzL0ltYWdlUmVnaXN0cnknO1xuaW1wb3J0ICcuL21haW4uY3NzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IGhlYWRlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgXG4gICAgY29uc3QgZHJhd2luZ0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b29sQmFyQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBjb25zdCBpbWFnZVJlZ2lzdHJ5ID0gbmV3IEltYWdlUmVnaXN0cnkoKTtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgRHJhd2luZ0FyZWEoNDAwLDQwMCwgaW1hZ2VSZWdpc3RyeSk7XG4gICAgY29uc3QgdG9vbEJhciA9IG5ldyBUb29sQmFyKGltYWdlUmVnaXN0cnkpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lckhUTUwgPSAnREVNTyBNT1NBSUMnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwKTtcblxuICAgIGRyYXdpbmdBcmVhLiBhcHBlbmRDaGlsZChjYW52YXMuZ2V0Q2FudmFzKCkpO1xuICAgIHRvb2xCYXJBcmVhLmFwcGVuZENoaWxkKHRvb2xCYXIuZ2V0VG9vbEJhckFyZWEoKSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHRvb2xCYXJBcmVhKTtcblxuICAgIGhlYWRlclNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChkcmF3aW5nQXJlYSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclNlY3Rpb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==