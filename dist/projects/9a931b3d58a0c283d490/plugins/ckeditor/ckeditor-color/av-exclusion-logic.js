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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

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
            var walker = new CKEDITOR.dom.walker(range);
            walker.evaluator = function (node) {
              return node.type === CKEDITOR.NODE_ELEMENT && node.getName() === 'span' && node.getStyle('color');
            };
            var node;
            var spanCount = 0,
              cleanedCount = 0,
              unwrappedCount = 0;
            var foundAny = false;
            while (node = walker.next()) {
              if (!node || !node.getStyle('color')) continue;
              foundAny = true;
              spanCount++;
              var nodeRange = editor.createRange();
              nodeRange.selectNodeContents(node);
              var startSpan = range.startContainer.getAscendant('span', true);
              var endSpan = range.endContainer.getAscendant('span', true);
              var needsSplit = startSpan && endSpan && startSpan.equals(node) && endSpan.equals(node) && !range.equals(nodeRange);
              if (needsSplit) {
                console.log('✂️ Splitting span partially covered by selection.');

                // Split at start boundary
                var startRange = editor.createRange();
                startRange.setStart(range.startContainer, range.startOffset);
                startRange.setEndAfter(node);
                startRange.split();

                // Split at end boundary
                var endRange = editor.createRange();
                endRange.setStart(range.endContainer, range.endOffset);
                endRange.setEndAfter(node);
                endRange.split();

                // Remove color only from the middle split span
                var current = node.getNext();
                while (current) {
                  if (current.type === CKEDITOR.NODE_ELEMENT && current.getName() === 'span' && current.getStyle('color') && current.getPrevious() && current.getPrevious().equals(node)) {
                    current.removeStyle('color');
                    if (!current.hasAttributes()) {
                      var children = current.getChildren().toArray();
                      var _iterator = _createForOfIteratorHelper(children),
                        _step;
                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          var child = _step.value;
                          current.insertBeforeMe(child.remove());
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                      current.remove();
                      unwrappedCount++;
                      console.log('🧹 Unwrapped empty span after color removal.');
                    } else {
                      console.log('🎯 Removed color but preserved other styles:', current.getAttribute('style'));
                    }
                    cleanedCount++;
                    break;
                  }
                  current = current.getNext();
                }
              } else {
                node.removeStyle('color');
                cleanedCount++;
                if (!node.hasAttributes()) {
                  var _children = node.getChildren().toArray();
                  var _iterator2 = _createForOfIteratorHelper(_children),
                    _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _child = _step2.value;
                      node.insertBeforeMe(_child.remove());
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  node.remove();
                  unwrappedCount++;
                  console.log('🧹 Unwrapped empty span after color removal.');
                } else {
                  console.log('🎯 Removed color but preserved other styles:', node.getAttribute('style'));
                }
              }
            }

            // Fallback: if walker found nothing, check if commonAncestor is a color span
            if (!foundAny) {
              var ancestor = range.getCommonAncestor(true);
              if (ancestor && ancestor.type === CKEDITOR.NODE_ELEMENT && ancestor.getName() === 'span' && ancestor.getStyle('color')) {
                console.log('⚠️ No span found in walker, but common ancestor is a color span — splitting manually.');

                // Same splitting logic
                var _startRange = editor.createRange();
                _startRange.setStart(range.startContainer, range.startOffset);
                _startRange.setEndAfter(ancestor);
                _startRange.split();
                var _endRange = editor.createRange();
                _endRange.setStart(range.endContainer, range.endOffset);
                _endRange.setEndAfter(ancestor);
                _endRange.split();
                var middle = ancestor.getNext();
                while (middle) {
                  if (middle.type === CKEDITOR.NODE_ELEMENT && middle.getName() === 'span' && middle.getStyle('color') && middle.getPrevious() && middle.getPrevious().equals(ancestor)) {
                    middle.removeStyle('color');
                    if (!middle.hasAttributes()) {
                      var _children2 = middle.getChildren().toArray();
                      var _iterator3 = _createForOfIteratorHelper(_children2),
                        _step3;
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          var _child2 = _step3.value;
                          middle.insertBeforeMe(_child2.remove());
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                      middle.remove();
                      console.log('🧹 Unwrapped manually split span.');
                    } else {
                      console.log('🎯 Manually cleaned color, preserved other styles:', middle.getAttribute('style'));
                    }
                    break;
                  }
                  middle = middle.getNext();
                }
              }
            }
            console.log("\u2705 Finished range ".concat(index + 1, ": found=").concat(spanCount, ", cleaned=").concat(cleanedCount, ", unwrapped=").concat(unwrappedCount));
          });
          selection.selectBookmarks(bookmarks);
          editor.fire('unlockSnapshot');
          console.log('🎉 Color removal finished.');
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