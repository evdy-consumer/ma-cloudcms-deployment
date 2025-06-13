require([], function() { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: pluginName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginName", function() { return pluginName; });
var pluginName = 'ckeditor-color';

/***/ }),

/***/ "./src/plugin.js":
/*!***********************!*\
  !*** ./src/plugin.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

var CKEDITOR = window.CKEDITOR;
CKEDITOR.plugins.add(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], {
  requires: 'richcombo',
  init: function init(editor) {
    var pluginConfig = CKEDITOR.tools.get_plugin_config(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], editor);
    var colors = pluginConfig;
    editor.ui.addRichCombo('ApplyColor', {
      label: 'Apply Color',
      toolbar: 'styles',
      panel: {
        css: [CKEDITOR.skin.getPath('editor')].concat(editor.config.contentsCss),
        multiSelect: false
      },
      init: function init() {
        this.add('default', 'Remove Color', 'Remove Color'); // Remove color default option
        console.log('colors', colors);
        for (var label in colors) {
          var colorValue = colors[label];
          this.add(colorValue, label, label);
        }
      },
      onRender: function onRender() {
        this.setValue(''); // Prevents any item from being auto-selected
      },
      onClick: function onClick(value) {
        editor.focus();
        /*         if (value === 'default') {
                  const selection = editor.getSelection();
                  const ranges = selection.getRanges();
        
                  editor.fire('lockSnapshot');
        
                  console.log('🟡 Starting color removal...');
        
                  // Force span splitting by applying and removing a dummy style
                  const dummyStyle = new CKEDITOR.style({ element: 'span', styles: { 'background-color': '#ffffff' } });
                  editor.applyStyle(dummyStyle);
                  editor.removeStyle(dummyStyle);
        
                  const bookmarks = selection.createBookmarks();
                  ranges.forEach((range, i) => {
                    console.log(`🟢 Range ${i + 1}:`, range);
        
                    let found = 0;
                    let unwrapped = 0;
        
                    const tryProcessSpan = (span) => {
                      if (
                        span &&
                        span.type === CKEDITOR.NODE_ELEMENT &&
                        span.getName() === 'span' &&
                        span.getStyle('color')
                      ) {
                        found++;
                        console.log('🎯 Found span with color:', span.getOuterHtml());
                        span.removeStyle('color');
        
                        if (!span.hasAttributes()) {
                          const children = span.getChildren().toArray();
                          for (let child of children) {
                            span.insertBeforeMe(child.remove());
                          }
                          span.remove();
                          unwrapped++;
                          console.log('🧹 Unwrapped span.');
                        }
                      }
                    };
        
                    // 1. Try enclosed node
                    const enclosed = range.getEnclosedNode();
                    tryProcessSpan(enclosed);
        
                    // 2. Fallback: walker inside the range
                    const walker = new CKEDITOR.dom.walker(range);
                    walker.evaluator = function (node) {
                      return node.type === CKEDITOR.NODE_ELEMENT &&
                            node.getName() === 'span' &&
                            node.getStyle('color');
                    };
        
                    let node;
                    while ((node = walker.next())) {
                      tryProcessSpan(node);
                    }
        
                    // 3. NEW: Also check if startContainer or endContainer is a colored span
                    tryProcessSpan(range.startContainer);
                    tryProcessSpan(range.endContainer);
        
                    console.log(`✅ Range ${i + 1} done: found ${found}, unwrapped ${unwrapped}`);
                  });
        
                  editor.fire('unlockSnapshot');
        
                  console.log('🎉 Finished removing color from selection.');
                } */
        if (value === 'default') {
          editor.focus();
          var selection = editor.getSelection();
          if (!selection) {
            console.warn('⚠️ No selection found.');
            return;
          }
          var bookmarks = selection.createBookmarks();
          var ranges = selection.getRanges();
          if (!ranges.length || ranges.every(function (r) {
            return r.collapsed;
          })) {
            console.warn('⚠️ No text selected.');
            return;
          }
          editor.fire('lockSnapshot');
          console.log('🟡 Starting precise color removal…');
          ranges.forEach(function (range, index) {
            if (range.collapsed) {
              console.log("\u23ED Skipping collapsed range ".concat(index + 1));
              return;
            }
            console.log("\uD83D\uDFE2 Processing range ".concat(index + 1));
            range.enlarge(CKEDITOR.ENLARGE_INLINE);
            var frag = range.extractContents();
            var fragChildren = frag.getChildren();
            var spanCount = 0,
              cleanedCount = 0,
              unwrappedCount = 0;
            var foundAny = false;
            fragChildren.toArray().forEach(function (child) {
              if (child.type === CKEDITOR.NODE_ELEMENT && child.getName() === 'span' && child.getStyle('color')) {
                foundAny = true;
                spanCount++;
                child.removeStyle('color');
                if (!child.hasAttributes()) {
                  var inner = child.getChildren().toArray();
                  inner.forEach(function (c) {
                    return child.insertBeforeMe(c.remove());
                  });
                  child.remove();
                  unwrappedCount++;
                  console.log('🧹 Unwrapped empty span after color removal.');
                } else {
                  console.log('🎯 Removed color, kept other styles:', child.getAttribute('style'));
                }
                cleanedCount++;
              }
            });
            if (!foundAny) {
              var colorSpan = range.startContainer.getAscendant('span', true);
              if (colorSpan && colorSpan.getStyle('color')) {
                console.log('⚠️ No color spans found in walker, but start is inside a color span — fallback applying split.');
                var startContainer = range.startContainer;
                var endContainer = range.endContainer;

                // Split startContainer if it's a text node
                if (startContainer.type === CKEDITOR.NODE_TEXT) {
                  startContainer.split(range.startOffset);
                }

                // Split endContainer if it's a text node
                if (endContainer.type === CKEDITOR.NODE_TEXT) {
                  endContainer.split(range.endOffset);
                }
                var current = colorSpan.getNext();
                while (current) {
                  if (current.type === CKEDITOR.NODE_ELEMENT && current.getName() === 'span' && current.getStyle('color') && current.getPrevious() && current.getPrevious().equals(colorSpan)) {
                    current.removeStyle('color');
                    if (!current.hasAttributes()) {
                      var inner = current.getChildren().toArray();
                      inner.forEach(function (c) {
                        return current.insertBeforeMe(c.remove());
                      });
                      current.remove();
                      unwrappedCount++;
                      console.log('🧹 Unwrapped fallback span.');
                    } else {
                      console.log('🎯 Fallback: removed color, kept other styles:', current.getAttribute('style'));
                    }
                    cleanedCount++;
                    break;
                  }
                  current = current.getNext();
                }
              }
            }
            console.log("\u2705 Finished range ".concat(index + 1, ": found=").concat(spanCount, ", cleaned=").concat(cleanedCount, ", unwrapped=").concat(unwrappedCount));
            range.insertNode(frag);
          });
          selection.selectBookmarks(bookmarks);
          editor.fire('unlockSnapshot');
          console.log('🎉 Color removal complete.');
          return;
        } else {
          var style = new CKEDITOR.style({
            element: 'span',
            styles: {
              color: value
            }
          });
          editor.focus();
          editor.applyStyle(style);
        }
      }
    });
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=av-exclusion-logic.js.map