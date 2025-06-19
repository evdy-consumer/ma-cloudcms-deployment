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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _window = window,
  CKEDITOR = _window.CKEDITOR;

/*
 * CKEditor 4 colour‑apply / remove plugin
 * --------------------------------------
 * • Apply colour: wrap selection in <span style='color:…'>, then lift the span so
 *   it wraps any inline tags (<strong>, <em>, …).
 * • Remove colour: single‑pass removal that handles fully‑ or partially‑selected
 *   colour spans while preserving every other inline style.
 */
CKEDITOR.plugins.add(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], {
  requires: 'richcombo',
  init: function init(editor) {
    var colorMap = CKEDITOR.tools.get_plugin_config(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], editor);

    /* ------------------------------ utils ------------------------------ */
    var utils = {
      clone: function clone(el) {
        var copy = new CKEDITOR.dom.element(el.getName());
        Object.entries(el.getAttributes()).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];
          return copy.setAttribute(k, v);
        });
        return copy;
      },
      wrapInside: function wrapInside(node, chain) {
        return chain.reduceRight(function (inner, outer) {
          var wrapper = utils.clone(outer);
          wrapper.append(inner);
          return wrapper;
        }, node);
      },
      splitText: function splitText(node, range) {
        var s = node.equals(range.startContainer) ? range.startOffset : 0;
        var e = node.equals(range.endContainer) ? range.endOffset : node.getLength();
        return [node.substring(0, s), node.substring(s, e), node.substring(e)];
      }
    };

    /* -------------------- span‑lifter (apply) -------------------- */
    function liftColorSpans(range) {
      // clone first, then enlarge – avoids undefined walker range / collapsed error
      var walkRange = range.clone();
      walkRange.enlarge(CKEDITOR.ENLARGE_INLINE);
      var walker = new CKEDITOR.dom.walker(walkRange);
      walker.evaluator = function (n) {
        return (n === null || n === void 0 ? void 0 : n.type) === CKEDITOR.NODE_ELEMENT && n.getName() === 'span' && n.getStyle('color');
      };
      var span;
      while (span = walker.next()) {
        var inlineParent = span.getParent();
        if (!inlineParent || inlineParent.getName() === 'span') continue; // span already outer‑most

        var firstChild = span.getFirst();
        if ((firstChild === null || firstChild === void 0 ? void 0 : firstChild.type) === CKEDITOR.NODE_ELEMENT && firstChild.getName() === inlineParent.getName()) continue; // clone already present

        var inlineClone = utils.clone(inlineParent);
        while (span.getFirst()) inlineClone.append(span.getFirst().remove());
        span.append(inlineClone); // <span><strong>…</strong></span>
      }
    }

    /* -------------------- colour remover ------------------------ */
    function smartRemoveColorFromPartial(range) {
      // Collect every text‑node inside a colour span **before** we mutate DOM
      var collector = new CKEDITOR.dom.walker(range);
      collector.evaluator = function (node) {
        return node.type === CKEDITOR.NODE_TEXT && node.getAscendant(function (el) {
          return el.getName && el.getName() === 'span' && el.getStyle('color');
        }, true);
      };
      var targets = [];
      var txt;
      while (txt = collector.next()) targets.push(txt);
      var processedFullSpans = new Set();
      var _loop = function _loop() {
          var textNode = _targets[_i];
          var colorSpan = textNode.getAscendant(function (el) {
            return el.getName && el.getName() === 'span' && el.getStyle('color');
          }, true);
          if (!colorSpan) return 0; // continue

          /* If the current selection fully contains the colour span, strip the
             colour in one go and skip further processing for its children. */
          if (range.containsNode(colorSpan) && !processedFullSpans.has(colorSpan)) {
            colorSpan.removeStyle('color');
            if (!colorSpan.hasAttributes()) {
              while (colorSpan.getFirst()) colorSpan.insertBeforeMe(colorSpan.getFirst().remove());
              colorSpan.remove();
            }
            processedFullSpans.add(colorSpan);
            return 0; // continue
            // nothing more to do for descendants of this span
          }

          // ----- partial‑span logic (unchanged) -----
          var fullText = textNode.getText();
          var startOffset = textNode.equals(range.startContainer) ? range.startOffset : 0;
          var endOffset = textNode.equals(range.endContainer) ? range.endOffset : fullText.length;
          var before = fullText.slice(0, startOffset);
          var selected = fullText.slice(startOffset, endOffset);
          var after = fullText.slice(endOffset);
          var beforeFrag = before ? new CKEDITOR.dom.text(before) : null;
          var selectedFrag = selected ? new CKEDITOR.dom.text(selected) : null;
          var afterFrag = after ? new CKEDITOR.dom.text(after) : null;
          var chain = [];
          var cur = textNode.getParent();
          while (cur && !cur.equals(colorSpan)) {
            chain.unshift(cur);
            cur = cur.getParent();
          }
          var build = function build(frag, keepColor) {
            if (!frag) return null;
            var wrapped = utils.wrapInside(frag, chain);
            if (!keepColor) return wrapped;
            var spanCopy = utils.clone(colorSpan);
            spanCopy.append(wrapped);
            return spanCopy;
          };
          [build(beforeFrag, true), utils.wrapInside(selectedFrag || new CKEDITOR.dom.text(''), chain), build(afterFrag, true)].filter(Boolean).forEach(function (f) {
            return colorSpan.insertBeforeMe(f);
          });
          textNode.remove();
          if (!colorSpan.getChildCount()) colorSpan.remove();
        },
        _ret;
      for (var _i = 0, _targets = targets; _i < _targets.length; _i++) {
        _ret = _loop();
        if (_ret === 0) continue;
      }
    }

    /* ---------------------- UI combo ----------------------------- */
    editor.ui.addRichCombo('ApplyColor', {
      label: 'Apply Color',
      toolbar: 'styles',
      panel: {
        css: [CKEDITOR.skin.getPath('editor')].concat(_toConsumableArray(editor.config.contentsCss)),
        multiSelect: false
      },
      init: function init() {
        this.add('default', 'Remove Color', 'Remove Color');
        for (var _i2 = 0, _Object$entries = Object.entries(colorMap); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            label = _Object$entries$_i[0],
            val = _Object$entries$_i[1];
          this.add(val, label, label);
        }
      },
      onRender: function onRender() {
        this.setValue('');
      },
      onClick: function onClick(choice) {
        editor.focus();
        var selection = editor.getSelection();
        if (!selection) return;
        editor.fire('lockSnapshot');
        if (choice === 'default') {
          var _selection;
          // 1️⃣ ensure structure is normalised, then 2️⃣ remove colour
          selection.getRanges().forEach(liftColorSpans);
          selection = editor.getSelection();
          (_selection = selection) === null || _selection === void 0 || _selection.getRanges().forEach(smartRemoveColorFromPartial);
        } else {
          var _selection2;
          editor.applyStyle(new CKEDITOR.style({
            element: 'span',
            styles: {
              color: choice
            }
          }));
          selection = editor.getSelection();
          (_selection2 = selection) === null || _selection2 === void 0 || _selection2.getRanges().forEach(liftColorSpans);
        }
        editor.fire('unlockSnapshot');
      }
    });
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=av-exclusion-logic.js.map