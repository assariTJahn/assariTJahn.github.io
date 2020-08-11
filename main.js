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
            if (this.getCurrentShape()!=null) {
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
                    if (this.getCurrentShape()!=null) {
                        this.getCurrentShape().releaseFocus();
                    }
                    this.setCurrentShape(null);

                } else {//when it clicked on current shape element or other shape element.
                    if (this.getCurrentShape() == targetElement) {
                        console.log('same element');
                        //rotation or translate
                        if(this.getCurrentShape().isInCornerRect(pos)){
                            this.getCurrentShape().rotateModeOn();
                        }
                        if(this.getCurrentShape().isInCenterRect(pos)){
                            this.getCurrentShape().moveModeOn();
                        }
                    } else {
                        targetElement.setFocus();
                        if (this.getCurrentShape()!=null) {
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

    setCurrentShape(shapeObj){
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
                
            }else{
                    if (this.getCurrentShape()!=null && this.getCurrentShape().isRotateMode()) {
                        this.getCurrentShape().rotateShape(pos);
                    }
                    if (this.getCurrentShape()!=null && this.getCurrentShape().isMoveMode()) {
                        this.getCurrentShape().move(pos);
                    }
                    this.redraw();
            }




        })

    }
    removeCurrentShape(){
        this.imageStack = this.imageStack.filter((value,index,arr)=>{
            return value != this.getCurrentShape()
        });
    }

    onKeyDownEvent(){
        window.addEventListener('keydown',(e)=>{
            e.preventDefault();
            console.log(e.keyCode);
            switch (e.keyCode) {
                case 8:
                    //delete
                    this.removeCurrentShape();
                    break;
            
                default:
                    break;
            }
            this.redraw();
        })
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


    setImage(img) {
        this.img = img;
    }

    getImage() {
        return this.img;
    }
    increaseAngle() {
        this.angle += 5;
        if (this.angle > 360) {
            this.angle = 0;
        }
    }
    decreaseAngle() {
        this.angle -= 5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3Rvb2xiYXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZ0FyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL0J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvSW1hZ2VSZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvTW91c2VDdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9Ub29sQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy90b29sYmFyLmNzcz8yYmYxIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGVhcnRfZ3JlZW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGVhcnRfb3JhbmdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hlYXJ0X3JlZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFydF9za3libHVlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzP2RkZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbE9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0I7QUFDRDtBQUNSO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixvQkFBb0I7O0FBRTFDOztBQUVBO0FBQ0EsMEJBQTBCLDRDQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEVBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsa0lBQTJEOztBQUU3Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0M7QUFDWTtBQUNqQzs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsOEJBQThCLCtEQUFhO0FBQzNDLHVCQUF1QixvREFBVztBQUNsQyx3QkFBd0IseURBQU87QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3JDQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGdIQUFxRDs7QUFFdkY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSElERSBSQURJTyAqL1xcblt0eXBlPXJhZGlvXSB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICBcXG4gIC8qIElNQUdFIFNUWUxFUyAqL1xcbiAgW3R5cGU9cmFkaW9dICsgaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAvKiBDSEVDS0VEIFNUWUxFUyAqL1xcbiAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBpbWcge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFwdCAycHQgIzkyOTI5MjtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ0b29sYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxlQUFlO0FBQ2Y7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQSxtQkFBbUI7RUFDbkI7SUFDRSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLCtCQUErQjtFQUNqQ1wiLFwiZmlsZVwiOlwidG9vbGJhci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSElERSBSQURJTyAqL1xcblt0eXBlPXJhZGlvXSB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICBcXG4gIC8qIElNQUdFIFNUWUxFUyAqL1xcbiAgW3R5cGU9cmFkaW9dICsgaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAvKiBDSEVDS0VEIFNUWUxFUyAqL1xcbiAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBpbWcge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFwdCAycHQgIzkyOTI5MjtcXG4gIH1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAjNmFjNWFjIDJweDtcXG59XFxubmF2IHtcXG4gIGJvcmRlcjogc29saWQgI2Q2NDA3OCAycHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAyNSU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYm9yZGVyOiBzb2xpZCAjZmRjNzJmIDJweDtcXG4gIHdpZHRoOiA3NSU7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJtYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQlwiLFwiZmlsZVwiOlwibWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBib3JkZXI6IHNvbGlkICM2YWM1YWMgMnB4O1xcbn1cXG5uYXYge1xcbiAgYm9yZGVyOiBzb2xpZCAjZDY0MDc4IDJweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBib3JkZXI6IHNvbGlkICNmZGM3MmYgMnB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFNoYXBlT2JqZWN0IGZyb20gJy4vZWxlbWVudHMvU2hhcGUnO1xuaW1wb3J0IE1vdXNlQ3Vyc29yIGZyb20gJy4vZWxlbWVudHMvTW91c2VDdXJzb3InO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZ0FyZWEge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGltYWdlUmVnaXN0cnkpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnRpbGVzaXplID0gMTA7Ly9jYW4gYmUgY2hhbmdlYWJsZVxuICAgICAgICB0aGlzLnRpbGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VSZWdpc3RyeSA9IGltYWdlUmVnaXN0cnk7XG5cbiAgICAgICAgLy9kZWJ1Z21vZGVcblxuXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzczQUQyMSc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCc7XG4gICAgICAgIHRoaXMuaW1hZ2VTdGFjayA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRYID0gLTE7XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSAtMTtcblxuICAgICAgICB0aGlzLmV2ZW50U3RhdHVzID0ge307XG5cbiAgICAgICAgdGhpcy5tb3VzZUN1cnNvciA9IG5ldyBNb3VzZUN1cnNvcih0aGlzKTtcblxuICAgICAgICB0aGlzLmltYWdlU3RhY2sgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hhcGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuZmlsbEJhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5kcmF3R3JpZCgpO1xuICAgICAgICB0aGlzLmluaXRFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuICAgIHNldEN1cnJlbnRUaWxlKHRpbGUpIHtcbiAgICAgICAgdGhpcy50aWxlID0gdGlsZTtcbiAgICB9XG4gICAgZmlsbEJhY2tncm91bmQoKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyM3M0FEMjEnO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICAgIGRyYXdHcmlkKCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzBmMCc7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYW52YXMud2lkdGg7IGkgKz0gMTApIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oaSwgMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGksIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhbnZhcy53aWR0aDsgaSArPSAxMCkge1xuICAgICAgICAgICAgY3R4Lm1vdmVUbygwLCBpKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIGkpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgfVxuXG4gICAgY2xlYXJEcmF3aW5nQXJlYSgpIHtcbiAgICAgICAgLy9xdWFkIHRyZWUg66eM65Ok6rKDXG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmdldENhbnZhcygpO1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7Ly/soITssrTrpbwg6re466as66m0IOumrOyGjOyKpCDsgqzsmqnsnbQg66eO64ukXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgcmVkcmF3KCkge1xuICAgICAgICB0aGlzLmNsZWFyRHJhd2luZ0FyZWEoKTtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuaW1hZ2VTdGFjay5sZW5ndGg7XG4gICAgICAgIHRoaXMuZHJhd0dyaWQoKTtcbiAgICAgICAgaWYgKGxlbiA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVN0YWNrW2ldLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBnZXRDYW52YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcblxuICAgIH1cbiAgICBnZXRDb250ZXh0KG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChvcHRpb24gfHwgJzJkJyk7XG4gICAgfVxuXG5cbiAgICBpbml0RXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZUV2ZW50KCk7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd25FdmVudCgpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcEV2ZW50KCk7XG4gICAgICAgIHRoaXMub25LZXlEb3duRXZlbnQoKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlVXBFdmVudCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50U2hhcGUoKSE9bnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkucm90YXRlTW9kZU9mZigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkubW92ZU1vZGVPZmYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIG9uTW91c2VEb3duRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm1vdXNlQ3Vyc29yLmdldE1vdXNlUG9zaXRpb24oZSk7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuaW1hZ2VSZWdpc3RyeS5jdXJyZW50RW50cnk7Ly9nZXQgY2hvc2VuIGltYWdlIGZyb20gdGhlIHJlZ2lzdHJ5LlxuXG4gICAgICAgICAgICBpZiAoZW50cnkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRTaGFwZSgpICE9IG51bGwpIHsvL3NldCBuZXcgc2hhcGUgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRTaGFwZSgpLnJlbGVhc2VGb2N1cygpOy8vYmx1clxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmVnaXN0cnkucmVsZWFzZUN1cnJlbnRFbnRyeSgpOy8vcmVsZWFzZSBjdXJyZW50IGVudHJ5IGZyb20gcmVnaXN0cnlcbiAgICAgICAgICAgICAgICBsZXQgc2hhcGVPYmogPSBuZXcgU2hhcGVPYmplY3QodGhpcy5nZXRDb250ZXh0KCksIHBvcy54LCBwb3MueSk7Ly9jcmVhdGUgbmV3IHNoYXBlIG9iamVjdCBmb3IgZHJhd2luZyBhcmVhXG5cbiAgICAgICAgICAgICAgICBzaGFwZU9iai5zZXRJbWFnZShlbnRyeS5nZXRJbWFnZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlU3RhY2sucHVzaChzaGFwZU9iaik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50U2hhcGUoc2hhcGVPYmopO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkuc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuXG4gICAgICAgICAgICB9IGVsc2Ugey8vXG4gICAgICAgICAgICAgICAgLy9pZiBpdCBjbGlja3Mgb24gc2hhcGUgZWxlbWVudCwgbW92ZSBmb2N1cy4gaWYgaXQgY2xpY2tzIGVtcHR5IHNwYWNlLCByZWxlYXNlIGV2ZXJ5dGhpbmcuXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSB0aGlzLmNoZWNrQ2xpY2tlZEFyZWEocG9zKTsvL2FsZ29yaXRobSBzaG91bGQgYmUgb3B0aW1pemVkLlxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50ID09IG51bGwpIHsvL3doZW4gaXQgY2hvc2UgZW1wdHkgc3BhY2UuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbXB0eSBzcGFjZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50U2hhcGUoKSE9bnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50U2hhcGUoKS5yZWxlYXNlRm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRTaGFwZShudWxsKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7Ly93aGVuIGl0IGNsaWNrZWQgb24gY3VycmVudCBzaGFwZSBlbGVtZW50IG9yIG90aGVyIHNoYXBlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRTaGFwZSgpID09IHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYW1lIGVsZW1lbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcm90YXRpb24gb3IgdHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdldEN1cnJlbnRTaGFwZSgpLmlzSW5Db3JuZXJSZWN0KHBvcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkucm90YXRlTW9kZU9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdldEN1cnJlbnRTaGFwZSgpLmlzSW5DZW50ZXJSZWN0KHBvcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkubW92ZU1vZGVPbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5zZXRGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkhPW51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRTaGFwZSgpLnJlbGVhc2VGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50U2hhcGUodGFyZ2V0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBjaGVja0NsaWNrZWRBcmVhKG1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLmltYWdlU3RhY2s7XG4gICAgICAgIGNvbnN0IHBvcyA9IG1vdXNlUG9zaXRpb247XG4gICAgICAgIGxldCByZWN0ID0gbnVsbDtcbiAgICAgICAgbGV0IGlzWCA9IGZhbHNlO1xuICAgICAgICBsZXQgaXNZID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVjdCA9IHN0YWNrW2ldLmdldFJlY3QoKTtcbiAgICAgICAgICAgIGlmIChwb3MueCA+PSByZWN0LnggJiYgcG9zLnggPD0gcmVjdC54ICsgcmVjdC53aWR0aCkge1xuICAgICAgICAgICAgICAgIGlzWCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zLnkgPj0gcmVjdC55ICYmIHBvcy55IDw9IHJlY3QueSArIHJlY3QuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaXNZID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzWCAmJiBpc1kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhY2tbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1ggPSBmYWxzZTtcbiAgICAgICAgICAgIGlzWSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRTaGFwZShzaGFwZU9iail7XG4gICAgICAgIHRoaXMuY3VycmVudFNoYXBlID0gc2hhcGVPYmo7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFNoYXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2hhcGU7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmVFdmVudCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2VDdXJzb3IudXBkYXRlTW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm1vdXNlQ3Vyc29yLmdldE1vdXNlUG9zaXRpb24oZSk7XG5cblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VSZWdpc3RyeS5jdXJyZW50RW50cnkgIT0gbnVsbCkgey8v6riw67O47KGw6rG0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdNb3VzZUN1cnNvcigpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkhPW51bGwgJiYgdGhpcy5nZXRDdXJyZW50U2hhcGUoKS5pc1JvdGF0ZU1vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50U2hhcGUoKS5yb3RhdGVTaGFwZShwb3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRTaGFwZSgpIT1udWxsICYmIHRoaXMuZ2V0Q3VycmVudFNoYXBlKCkuaXNNb3ZlTW9kZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRTaGFwZSgpLm1vdmUocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgcmVtb3ZlQ3VycmVudFNoYXBlKCl7XG4gICAgICAgIHRoaXMuaW1hZ2VTdGFjayA9IHRoaXMuaW1hZ2VTdGFjay5maWx0ZXIoKHZhbHVlLGluZGV4LGFycik9PntcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPSB0aGlzLmdldEN1cnJlbnRTaGFwZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uS2V5RG93bkV2ZW50KCl7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywoZSk9PntcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUua2V5Q29kZSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgLy9kZWxldGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDdXJyZW50U2hhcGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGRyYXdNb3VzZUN1cnNvcigpIHtcbiAgICAgICAgdGhpcy5tb3VzZUN1cnNvci5kcmF3KCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ0biB7XG4gICAgY29uc3RydWN0b3IoZW50cnkpe1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChlbnRyeS5nZXRJbWFnZSgpKTtcblxuICAgICAgICBpbnB1dC52YWx1ZSA9IGVudHJ5LmdldEluZGV4KCk7XG4gICAgICAgIGlucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgICAgICBpbnB1dC5uYW1lID0gJ3RpbGVzJztcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVudHJ5ID0gZW50cnk7XG4gICAgICAgIHRoaXMuYnRuID0gbGFiZWw7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmJ0bjtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbil7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsKGUpPT57XG4gICAgICAgICAgICBmbihlLCB0aGlzLmVudHJ5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcbmltcG9ydCBoZWFydFJlZCBmcm9tICcuLi9pbWFnZXMvaGVhcnRfcmVkLnBuZyc7XG5pbXBvcnQgaGVhcnRCbHVlIGZyb20gJy4uL2ltYWdlcy9oZWFydF9za3libHVlLnBuZyc7XG5pbXBvcnQgaGVhcnRZZWxsb3cgZnJvbSAnLi4vaW1hZ2VzL2hlYXJ0X29yYW5nZS5wbmcnO1xuaW1wb3J0IGhlYXJ0UHVycGxlIGZyb20gJy4uL2ltYWdlcy9oZWFydF9ncmVlbi5wbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VMaXN0ID0gW1xuICAgICAgICAgICAgaGVhcnRSZWQsXG4gICAgICAgICAgICBoZWFydEJsdWUsXG4gICAgICAgICAgICBoZWFydFllbGxvdyxcbiAgICAgICAgICAgIGhlYXJ0UHVycGxlXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuYXNzZXRzID0gW107XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlciA9IFtdO1xuICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RW50cnk9bnVsbDsvL2Nob3NlbiB0aWxlIGltYWdlXG4gICAgICAgIHRoaXMucmVsZWFzZVRvb2xCYXJTZWxlY3Rpb25GbjtcbiAgICB9XG4gICAgc2V0VG9vbGJhckNhbGxiYWNrRm4oZm4pe1xuICAgICAgICB0aGlzLnJlbGVhc2VUb29sQmFyU2VsZWN0aW9uRm4gPSBmbjtcbiAgICB9XG5cbiAgICByZWxlYXNlQ3VycmVudEVudHJ5KCl7XG4gICAgICAgIHRoaXMuY3VycmVudEVudHJ5PW51bGw7XG4gICAgICAgIGlmKHRoaXMucmVsZWFzZVRvb2xCYXJTZWxlY3Rpb25GbiE9bnVsbCl7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2VUb29sQmFyU2VsZWN0aW9uRm4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEN1cnJlbnRFbnRyeSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50RW50cnk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudEVudHJ5KGV2ZW50LCBlbnRyeSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRFbnRyeSA9IGVudHJ5O1xuICAgICAgICBcbiAgICB9XG4gICAgbG9hZEltYWdlcygpIHtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuaW1hZ2VMaXN0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLmltYWdlTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgZW50cnkgPSBuZXcgRW50cnkoaXRlbSwgaW5kZXgsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2V0cy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZEZpbmlzaGVkKGxlbik7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgc3Vic2NyaWJlKGZuKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlci5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICBydW5DYWxsYmFja0ZuKCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gdGhpcy5zdWJzY3JpYmVyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJbaV0odGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0xvYWRGaW5pc2hlZChsZW4pIHtcbiAgICAgICAgaWYgKGxlbiA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTG9hZCBmaW5pc2hlZCcpO1xuICAgICAgICAgICAgdGhpcy5ydW5DYWxsYmFja0ZuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm93IGxvYWRpbmcgaW1hZ2VzLi4uKCcgKyB0aGlzLmFzc2V0cy5sZW5ndGggKyAnLycgKyB0aGlzLmltYWdlTGlzdC5sZW5ndGggKyAnKScpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIEVudHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihpbWcsIGluZGV4LCBmbikge1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZy5vbmxvYWQgPSBmbjtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gaW1nO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgfVxuICAgIGdldEltYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWc9PW51bGw/bnVsbDp0aGlzLmltZztcbiAgICB9XG4gICAgZ2V0SW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4O1xuICAgIH1cbiAgICBnZXRSZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuaW1nLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmltZy5oZWlnaHRcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VDdXJzb3Ige1xuICAgIGNvbnN0cnVjdG9yKGRyYXdpbmdBcmVhKXtcbiAgICAgICAgdGhpcy5kcmF3aW5nQXJlYSA9IGRyYXdpbmdBcmVhO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRyYXdpbmdBcmVhLmdldENhbnZhcygpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBkcmF3aW5nQXJlYS5nZXRDb250ZXh0KCk7XG4gICAgICAgIHRoaXMucG9zaXRpb25PYmogPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZU1vdXNlUG9zaXRpb24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NpdGlvbk9iaiA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0TW91c2VQb3NpdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgICAgIHk6IGUuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIGNvbnN0IGltYWdlUmVnaXN0cnkgPSB0aGlzLmRyYXdpbmdBcmVhLmltYWdlUmVnaXN0cnk7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gaW1hZ2VSZWdpc3RyeS5jdXJyZW50RW50cnk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgaWYoZW50cnk9PW51bGx8fGVudHJ5PT11bmRlZmluZWQpcmV0dXJuO1xuICAgICAgICBjb25zdCBpbWcgPSBlbnRyeS5nZXRJbWFnZSgpO1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgdGhpcy5wb3NpdGlvbk9iai54LCB0aGlzLnBvc2l0aW9uT2JqLnksIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG5cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5zdHlsZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pbWFnZVNyYzsvL2ZvciB0aWxlIGltYWdlc1xuICAgICAgICB0aGlzLmltZztcbiAgICAgICAgLy8gdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gdGhpcy5pbWcuc3JjID0gaW1hZ2VGaWxlOy8vdGVzdCBpbWFnZVxuICAgICAgICAvLyB0aGlzLmltZy5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAvLyAgICAgZm4oZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb3ZlTW9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdGF0ZU1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zbWFsbFJlY3RTaXplID0gNTtcblxuICAgIH1cblxuICAgIGlzSW5DZW50ZXJXaWR0aChwb3Mpe1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHF1YXJ0ZXIgPSByZWN0LndpZHRoIC80IDtcbiAgICAgICAgcmV0dXJuIChwb3MueCA+PSByZWN0LnggKyBxdWFydGVyKSAmJiAocG9zLnggPD0gcmVjdC54ICsgcmVjdC53aWR0aCAtIHF1YXJ0ZXIpO1xuICAgIH1cblxuICAgIGlzSW5DZW50ZXJIZWlnaHQocG9zKXtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0UmVjdCgpO1xuICAgICAgICBjb25zdCBxdWFydGVyID0gcmVjdC5oZWlnaHQgLzQgO1xuICAgICAgICByZXR1cm4gKHBvcy55ID49IHJlY3QueSArIHF1YXJ0ZXIpICYmIChwb3MueSA8PSByZWN0LnkgKyByZWN0LmhlaWdodCAtIHF1YXJ0ZXIpO1xuICAgIH1cblxuICAgIGlzSW5DZW50ZXJSZWN0KHBvcyl7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5DZW50ZXJXaWR0aChwb3MpICYmIHRoaXMuaXNJbkNlbnRlckhlaWdodChwb3MpO1xuICAgIH1cblxuICAgIGlzTW92ZU1vZGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZU1vZGU7XG4gICAgfVxuXG4gICAgbW92ZU1vZGVPZmYoKXtcbiAgICAgICAgdGhpcy5tb3ZlTW9kZT1mYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdmUgbW9kZSBvZmYnKTtcblxuICAgIH1cblxuICAgIG1vdmVNb2RlT24oKXtcbiAgICAgICAgdGhpcy5tb3ZlTW9kZSA9IHRydWU7XG4gICAgfVxuXG4gICAgbW92ZShwb3Mpe1xuICAgICAgICBjb25zdCBoYWxmV2lkdGggPSB0aGlzLmltZy53aWR0aCAvMjtcbiAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuaW1nLmhlaWdodCAvMjtcbiAgICAgICAgdGhpcy54ID0gcG9zLnggLSBoYWxmV2lkdGg7XG4gICAgICAgIHRoaXMueSA9IHBvcy55IC0gaGFsZkhlaWdodDtcbiAgICB9XG5cbiAgICBpc1JvdGF0ZU1vZGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlTW9kZTtcbiAgICB9XG5cbiAgICByb3RhdGVNb2RlT2ZmKCl7XG4gICAgICAgIHRoaXMucm90YXRlTW9kZSA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZygncm90YXRlIG1vZGUgb2ZmJyk7XG4gICAgfVxuXG4gICAgcm90YXRlTW9kZU9uKCl7XG4gICAgICAgIHRoaXMucm90YXRlTW9kZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0UmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmltZy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5pbWcuaGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNldEltYWdlKGltZykge1xuICAgICAgICB0aGlzLmltZyA9IGltZztcbiAgICB9XG5cbiAgICBnZXRJbWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1nO1xuICAgIH1cbiAgICBpbmNyZWFzZUFuZ2xlKCkge1xuICAgICAgICB0aGlzLmFuZ2xlICs9IDU7XG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gMzYwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWNyZWFzZUFuZ2xlKCkge1xuICAgICAgICB0aGlzLmFuZ2xlIC09IDU7XG4gICAgICAgIGlmICh0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvcm5lclJlY3QoKSB7XG4gICAgICAgIGNvbnN0IHNtYWxsUmVjdFNpemUgPSB0aGlzLnNtYWxsUmVjdFNpemU7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pbWcud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaW1nLmhlaWdodDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG53OiB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgICAgICAgICB3aWR0aDogc21hbGxSZWN0U2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNtYWxsUmVjdFNpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZToge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMueCArIHdpZHRoIC0gc21hbGxSZWN0U2l6ZSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNtYWxsUmVjdFNpemUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzbWFsbFJlY3RTaXplXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3c6IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy55ICsgaGVpZ2h0IC0gc21hbGxSZWN0U2l6ZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogc21hbGxSZWN0U2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNtYWxsUmVjdFNpemVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZToge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMueCArIHdpZHRoIC0gc21hbGxSZWN0U2l6ZSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnkgKyBoZWlnaHQgLSBzbWFsbFJlY3RTaXplLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBzbWFsbFJlY3RTaXplLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc21hbGxSZWN0U2l6ZVxuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1hpbkNvcm5lcihwb3Mpe1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1hFYXN0KHBvcykgfHwgdGhpcy5jaGVja1hXZXN0KHBvcyk7XG4gICAgfVxuICAgIGNoZWNrWEVhc3QocG9zKXtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmltZy53aWR0aDtcbiAgICAgICAgcmV0dXJuIChwb3MueCA+PSB0aGlzLnggKyB3aWR0aCAtIHRoaXMuc21hbGxSZWN0U2l6ZSAmJiBwb3MueCA8PSB0aGlzLnggKyB3aWR0aCk7XG4gICAgfVxuICAgIGNoZWNrWFdlc3QocG9zKXtcbiAgICAgICAgcmV0dXJuIChwb3MueCA+PSB0aGlzLnggJiYgcG9zLnggPCB0aGlzLnggKyB0aGlzLnNtYWxsUmVjdFNpemUpO1xuICAgIH1cblxuICAgIGNoZWNrWWluQ29ybmVyKHBvcyl7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrWU5vcnRoKHBvcykgfHwgdGhpcy5jaGVja1lTb3V0aChwb3MpO1xuICAgIH1cbiAgICBjaGVja1lTb3V0aChwb3Mpe1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmltZy5oZWlnaHQ7XG4gICAgICAgIHJldHVybiAocG9zLnkgPj0gdGhpcy55ICsgaGVpZ2h0IC0gdGhpcy5zbWFsbFJlY3RTaXplICYmIHBvcy55IDw9IHRoaXMueSArIGhlaWdodCk7XG4gICAgfVxuICAgIGNoZWNrWU5vcnRoKHBvcyl7XG4gICAgICAgIFxuICAgICAgICBpZihwb3MueSA+PSB0aGlzLnkgJiYgcG9zLnkgPD0gdGhpcy55ICsgdGhpcy5zbWFsbFJlY3RTaXplKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNJbkNvcm5lclJlY3QocG9zKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1hpbkNvcm5lcihwb3MpICYmIHRoaXMuY2hlY2tZaW5Db3JuZXIocG9zKTtcbiAgICB9XG5cbiAgICBkcmF3Qm94KCkge1xuICAgICAgICBjb25zdCBzbWFsbFJlY3RTaXplID0gdGhpcy5zbWFsbFJlY3RTaXplO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuaW1nLndpZHRoLCB0aGlzLmltZy5oZWlnaHQpO1xuICAgICAgICAvL2RyYXcgNCBjaGlsZHJlbiB3aGl0ZSByZWN0XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgc21hbGxSZWN0U2l6ZSwgc21hbGxSZWN0U2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnkgKyB0aGlzLmltZy5oZWlnaHQgLSBzbWFsbFJlY3RTaXplLCBzbWFsbFJlY3RTaXplLCBzbWFsbFJlY3RTaXplKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdCh0aGlzLnggKyB0aGlzLmltZy53aWR0aCAtIHNtYWxsUmVjdFNpemUsIHRoaXMueSArIHRoaXMuaW1nLmhlaWdodCAtIHNtYWxsUmVjdFNpemUsIHNtYWxsUmVjdFNpemUsIHNtYWxsUmVjdFNpemUpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KHRoaXMueCArIHRoaXMuaW1nLndpZHRoIC0gc21hbGxSZWN0U2l6ZSwgdGhpcy55LCBzbWFsbFJlY3RTaXplLCBzbWFsbFJlY3RTaXplKTtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBoYWxmV2lkdGggPSB0aGlzLmltZy53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGhhbGZIZWlnaHQgPSB0aGlzLmltZy5oZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBoYWxmV2lkdGggLyAyO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMueCx0aGlzLnkpO1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodGhpcy54ICsgaGFsZldpZHRoLCB0aGlzLnkgKyBoYWxmSGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKC0oTWF0aC5QSSAvIDE4MCAqIHRoaXMuYW5nbGUpKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC0odGhpcy54ICsgaGFsZldpZHRoKSwgLSh0aGlzLnkgKyBoYWxmSGVpZ2h0KSk7XG4gICAgICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5kcmF3Qm94KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIC8vdGhpcy5jdHguYXJjKHRoaXMueCtyYWRpdXMsdGhpcy55K3JhZGl1cyxyYWRpdXMsMCxNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgLy90aGlzLmN0eC5yb3RhdGUoLShNYXRoLlBJLzE4MCp0aGlzLmFuZ2xlKSk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIHNldEZvY3VzKCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVsZWFzZUZvY3VzKCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByb3RhdGVTaGFwZShwb3MpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBsZXQgZGVsdGFYID0gcG9zLnggLSB0aGlzLng7XG4gICAgICAgIGxldCBkZWx0YVkgPSAtKHBvcy55IC0gdGhpcy55KTtcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkZWx0YVksIGRlbHRhWCkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZSArIDQ1O1xuXG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwKSc7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgMTAsIDEwKTtcblxuICAgICAgICAvLyBjdHguY2xpcCgpO1xuICAgICAgICAvLyBjdHguY2xlYXJSZWN0KHRoaXMueCx0aGlzLnksIDUwLCA1MCk7XG4gICAgICAgIC8vIHRoaXMuZHJhdygpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgQnRuIGZyb20gJy4vQnRuJztcbmltcG9ydCAnLi90b29sYmFyLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sQmFyIHtcbiAgICBjb25zdHJ1Y3RvcihpbWFnZVJlZ2lzdHJ5KXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWxtVG9vbEJhcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTs7XG4gICAgICAgIHRoaXMuY3VycmVudE9wdGlvbj1udWxsO1xuICAgICAgICB0aGlzLmltYWdlUmVnaXN0cnkgPSBpbWFnZVJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLnRvb2xCYXJBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIC8vIHRoaXMuZWxtVG9vbEJhci5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHgnO1xuICAgICAgICAvLyB0aGlzLmVsbVRvb2xCYXIuc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICAgICAgICAvLyB0aGlzLmVsbVRvb2xCYXIuc3R5bGUuYm9yZGVyQ29sb3IgPSAnYmx1ZSc7XG4gICAgICAgIGltYWdlUmVnaXN0cnkuc3Vic2NyaWJlKChpbWdSZWdpc3RyeSk9PntcbiAgICAgICAgICAgIHRoaXMuZHJhd1Rvb2xCYXJPcHRpb25zKGltZ1JlZ2lzdHJ5KTsvL+yCrOyLpOydgCDsnbTrr7jsp4DroZzrlKnsnbQg64Gd64KgIOuVjCwg7L2c67Cx7Jy866GcIO2YuOy2nO2VtOyVvCDtlahcbiAgICAgICAgfSk7XG4gICAgICAgIGltYWdlUmVnaXN0cnkuc2V0VG9vbGJhckNhbGxiYWNrRm4oKCk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbiE9bnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFRvb2xCYXJBcmVhKCl7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLnRvb2xCYXJBcmVhO1xuICAgICAgICByZXR1cm4gdGhpcy5lbG1Ub29sQmFyO1xuICAgIH1cblxuICAgIGdldENvbnRleHQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbEJhckFyZWEuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgZHJhd1Rvb2xCYXJPcHRpb25zKGltZ1Jnc3RyeSl7XG4gICAgICAgIGNvbnN0IGVsbVRvb2xCYXIgPSB0aGlzLiBlbG1Ub29sQmFyO1xuICAgICAgICBjb25zdCBpbWdBc3NldHMgPSBpbWdSZ3N0cnkuYXNzZXRzO1xuICAgICAgICAvLyBjdHguc2F2ZSgpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8aW1nQXNzZXRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGVudHJ5ID0gaW1nQXNzZXRzW2ldO1xuXG4gICAgICAgICAgICAvLyBlbG1Ub29sQmFyLmFwcGVuZENoaWxkKGVudHJ5LmdldEltYWdlKCkpO1xuICAgICAgICAgICAgbGV0IGJ0biA9IG5ldyBCdG4oZW50cnkpO1xuICAgICAgICAgICAgZWxtVG9vbEJhci5hcHBlbmRDaGlsZChidG4uZ2V0RWxlbWVudCgpKTtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUsIGVudHJ5KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbiA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGltZ1Jnc3RyeS5zZXRDdXJyZW50RW50cnkoZSwgZW50cnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxtVG9vbEJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIC8vICAgICBjb25zdCBlbG1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RpbGVzJyk7XG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRPcHRpb24gPSB0aGlzLmZpbmRDdXJyZW50VGlsZShlbG1zKTtcbiAgICAgICAgLy8gICAgIHRoaXMuaW1hZ2VSZWdpc3RyeS5zZXRDdXJyZW50VGlsZSh0aGlzLmN1cnJlbnRPcHRpb24pO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgZmluZEN1cnJlbnRUaWxlKHRpbGVzKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx0aWxlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aWxlc1tpXS5jaGVja2VkKVxuICAgICAgICAgICAgaWYodGlsZXNbaV0uY2hlY2tlZD09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldEN1cnJlbnRPcHRpb24oKXtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRPcHRpb247XG4gICAgfVxufVxuXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9vbGJhci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMzdlZDkwNDdiYjg4NTdlZGNmN2Y5ZGJmODBmNGNiNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGQ5YzczMGQyYTczNDY5NWZmNzkyMmRhMWI1Mzg0MGIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5YTIwYTY2NjU0NTc1NmZjZWMxZDJkYjEzNTE0ZDRhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlZDNiMTY2YjI3ZjQxNDRjYjExZGQ5N2Q3MDY4NjM5NS5wbmdcIjsiLCJpbXBvcnQgRHJhd2luZ0FyZWEgZnJvbSAnLi9EcmF3aW5nQXJlYSc7XG5pbXBvcnQgVG9vbEJhciBmcm9tICcuL2VsZW1lbnRzL1Rvb2xCYXInO1xuaW1wb3J0IEltYWdlUmVnaXN0cnkgZnJvbSAnLi9lbGVtZW50cy9JbWFnZVJlZ2lzdHJ5JztcbmltcG9ydCAnLi9tYWluLmNzcyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBoZWFkZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIFxuICAgIGNvbnN0IGRyYXdpbmdBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9vbEJhckFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgY29uc3QgaW1hZ2VSZWdpc3RyeSA9IG5ldyBJbWFnZVJlZ2lzdHJ5KCk7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IERyYXdpbmdBcmVhKDQwMCw0MDAsIGltYWdlUmVnaXN0cnkpO1xuICAgIGNvbnN0IHRvb2xCYXIgPSBuZXcgVG9vbEJhcihpbWFnZVJlZ2lzdHJ5KTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gJ0RFTU8gTU9TQUlDJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBkcmF3aW5nQXJlYS4gYXBwZW5kQ2hpbGQoY2FudmFzLmdldENhbnZhcygpKTtcbiAgICB0b29sQmFyQXJlYS5hcHBlbmRDaGlsZCh0b29sQmFyLmdldFRvb2xCYXJBcmVhKCkpO1xuICAgIG5hdi5hcHBlbmRDaGlsZCh0b29sQmFyQXJlYSk7XG5cbiAgICBoZWFkZXJTZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoZHJhd2luZ0FyZWEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJTZWN0aW9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=