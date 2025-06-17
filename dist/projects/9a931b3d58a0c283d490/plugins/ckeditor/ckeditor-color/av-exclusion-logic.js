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
        this.add('default', 'Remove Color', 'Remove Color');
        for (var label in colors) {
          var colorValue = colors[label];
          this.add(colorValue, label, label);
        }
      },
      onRender: function onRender() {
        this.setValue('');
      },
      onClick: function onClick(value) {
        editor.focus();
        if (value === 'default') {
          var selection = editor.getSelection();
          if (!selection) return;
          var ranges = selection.getRanges();
          editor.fire('lockSnapshot');
          console.log('🟡 Starting color removal');
          ranges.forEach(function (range, index) {
            console.log("\uD83D\uDCCC Processing range ".concat(index + 1));
            range.enlarge(CKEDITOR.ENLARGE_INLINE);
            var walker = new CKEDITOR.dom.walker(range);
            walker.evaluator = function (node) {
              return node.type === CKEDITOR.NODE_ELEMENT && node.getName() === 'span' && node.getStyle('color');
            };
            var node;
            var processed = new Set();
            while (node = walker.next()) {
              if (processed.has(node)) continue;
              console.log('🎯 Removing full span color from:', node.getOuterHtml());
              node.removeStyle('color');
              safeUnwrap(node);
              processed.add(node);
            }
            smartRemoveColorFromPartial(range);
          });
          editor.fire('unlockSnapshot');
          console.log('✅ Color removal complete');
        } else {
          var style = new CKEDITOR.style({
            element: 'span',
            styles: {
              color: value
            }
          });
          editor.fire('lockSnapshot');
          editor.applyStyle(style);
          editor.fire('unlockSnapshot');
          console.log("\uD83C\uDFA8 Applied color: ".concat(value));
        }
      }
    });
    function safeUnwrap(element) {
      if (!element) return;
      var styleAttr = element.getAttribute('style');
      var hasStyles = styleAttr && styleAttr.trim() !== '';
      if (!element.hasAttributes() || !hasStyles && element.getName() === 'span') {
        var children = element.getChildren().toArray();
        var _iterator = _createForOfIteratorHelper(children),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            element.insertBeforeMe(child.remove());
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        element.remove();
        console.log('🧹 Unwrapped empty or style-less span');
      }
    }
    function smartRemoveColorFromPartial(range) {
      var walker = new CKEDITOR.dom.walker(range);
      walker.evaluator = function (node) {
        return node.type === CKEDITOR.NODE_TEXT && node.getAscendant(function (el) {
          return el.getName && el.getName() === 'span' && el.getStyle('color');
        }, true);
      };
      var textNode;
      while (textNode = walker.next()) {
        var colorSpan = textNode.getAscendant(function (el) {
          return el.getName && el.getName() === 'span' && el.getStyle('color');
        }, true);
        if (!colorSpan) continue;
        var fullText = textNode.getText();
        var startOffset = textNode.equals(range.startContainer) ? range.startOffset : 0;
        var endOffset = textNode.equals(range.endContainer) ? range.endOffset : fullText.length;
        var before = fullText.slice(0, startOffset);
        var selected = fullText.slice(startOffset, endOffset);
        var after = fullText.slice(endOffset);
        console.log("\uD83D\uDD0D Splitting text node: \"".concat(fullText, "\""));
        console.log("    Before: \"".concat(before, "\" | Selected: \"").concat(selected, "\" | After: \"").concat(after, "\""));
        var fragments = [];
        if (before) fragments.push(new CKEDITOR.dom.text(before));
        if (selected) {
          var selectedText = new CKEDITOR.dom.text(selected);
          var keptStyle = colorSpan.getAttribute('style').split(';').map(function (s) {
            return s.trim();
          }).filter(function (s) {
            return s && !s.startsWith('color');
          }).join('; ');
          if (keptStyle) {
            var span = new CKEDITOR.dom.element('span');
            span.setAttribute('style', keptStyle);
            span.append(selectedText);
            fragments.push(span);
            console.log("\u2728 Inserted span with kept style: \"".concat(keptStyle, "\""));
          } else {
            fragments.push(selectedText);
            console.log('🆕 Inserted plain selected text node without styles');
          }
        }
        if (after) fragments.push(new CKEDITOR.dom.text(after));
        fragments.forEach(function (f) {
          return textNode.insertBeforeMe(f);
        });
        textNode.remove();
        if (colorSpan.getChildCount() === 0) {
          colorSpan.remove();
          console.log('🧹 Removed empty colored span');
        }
      }
    }
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=av-exclusion-logic.js.map