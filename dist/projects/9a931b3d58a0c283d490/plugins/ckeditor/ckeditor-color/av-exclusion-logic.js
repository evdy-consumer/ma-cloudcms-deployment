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
CKEDITOR.plugins.add(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], {
  requires: 'richcombo',
  init: function init(editor) {
    var colorMap = CKEDITOR.tools.get_plugin_config(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], editor);

    /* ------------------------------------------------------------------ */
    /* Utilities                                                          */
    /* ------------------------------------------------------------------ */
    var utils = {
      cloneElement: function cloneElement(source) {
        var clone = new CKEDITOR.dom.element(source.getName());
        Object.entries(source.getAttributes()).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];
          return clone.setAttribute(k, v);
        });
        return clone;
      },
      /** Wrap `node` with cloned ancestors (innermost first). */wrapWithAncestors: function wrapWithAncestors(node, chain) {
        return chain.reduceRight(function (inner, outer) {
          var wrapper = utils.cloneElement(outer);
          wrapper.append(inner);
          return wrapper;
        }, node);
      },
      /** Split a text node into [before, selected, after] according to `range`. */splitTextByRange: function splitTextByRange(textNode, range) {
        var start = textNode.equals(range.startContainer) ? range.startOffset : 0;
        var end = textNode.equals(range.endContainer) ? range.endOffset : textNode.getLength();
        return [textNode.substring(0, start), textNode.substring(start, end), textNode.substring(end)];
      }
    };

    /* ------------------------------------------------------------------ */
    /* Ensure colour <span> wraps the inline tag, not vice‑versa           */
    /* ------------------------------------------------------------------ */
    function liftColorSpans(range) {
      var walkRange = range.clone();
      walkRange.enlarge(CKEDITOR.ENLARGE_INLINE);
      var walker = new CKEDITOR.dom.walker(walkRange);
      walker.evaluator = function (n) {
        return (n === null || n === void 0 ? void 0 : n.type) === CKEDITOR.NODE_ELEMENT && n.getName() === 'span' && n.getStyle('color');
      };
      var span;
      while (span = walker.next()) {
        var parentInline = span.getParent();
        if (!parentInline || parentInline.getName() === 'span') continue;
        var firstChild = span.getFirst();
        if ((firstChild === null || firstChild === void 0 ? void 0 : firstChild.type) === CKEDITOR.NODE_ELEMENT && firstChild.getName() === parentInline.getName()) continue;
        var inlineClone = utils.cloneElement(parentInline);
        while (span.getFirst()) inlineClone.append(span.getFirst().remove());
        span.append(inlineClone);
      }
    }

    /* ------------------------------------------------------------------ */
    /* Remove only the colour while keeping other inline styles            */
    /* ------------------------------------------------------------------ */
    /* ------------------------------------------------------------------ */
    /* Remove only colour spans – collect nodes first, then mutate DOM    */
    /* ------------------------------------------------------------------ */
    function removeColor(range) {
      // Walk an enlarged clone so we capture partially‑selected spans
      var enlarged = range.clone();
      enlarged.enlarge(CKEDITOR.ENLARGE_INLINE);
      var walker = new CKEDITOR.dom.walker(enlarged);
      walker.evaluator = function (n) {
        var _n$getAscendant;
        return n.type === CKEDITOR.NODE_TEXT && ((_n$getAscendant = n.getAscendant('span', true)) === null || _n$getAscendant === void 0 ? void 0 : _n$getAscendant.getStyle('color'));
      };

      // Collect targets first to avoid walker skipping nodes after DOM changes
      var targets = [];
      var node;
      while (node = walker.next()) targets.push(node);
      var _loop = function _loop() {
        var textNode = _targets[_i];
        var colorSpan = textNode.getAscendant('span', true);
        if (!colorSpan) return 1; // continue

        // Use ORIGINAL range for offsets so left/right fragments are detected
        var _utils$splitTextByRan = utils.splitTextByRange(textNode, range),
          _utils$splitTextByRan2 = _slicedToArray(_utils$splitTextByRan, 3),
          before = _utils$splitTextByRan2[0],
          middle = _utils$splitTextByRan2[1],
          after = _utils$splitTextByRan2[2];

        // Build chain of ancestors between textNode and colour span
        var chain = [];
        var ancestor = textNode.getParent();
        while (ancestor && !ancestor.equals(colorSpan)) {
          chain.unshift(ancestor);
          ancestor = ancestor.getParent();
        }
        var buildFragment = function buildFragment(content, keepColor) {
          if (!content) return null;
          var wrapped = utils.wrapWithAncestors(new CKEDITOR.dom.text(content), chain);
          if (!keepColor) return wrapped;
          var spanCopy = utils.cloneElement(colorSpan);
          spanCopy.append(wrapped);
          return spanCopy;
        };
        [buildFragment(before, true), utils.wrapWithAncestors(new CKEDITOR.dom.text(middle), chain), buildFragment(after, true)].filter(Boolean).forEach(function (fragment) {
          return colorSpan.insertBeforeMe(fragment);
        });
        textNode.remove();
        if (!colorSpan.getChildCount()) colorSpan.remove();
      };
      for (var _i = 0, _targets = targets; _i < _targets.length; _i++) {
        if (_loop()) continue;
      }
    }

    /* ------------------------------------------------------------------ */
    /* RichCombo UI                                                       */
    /* ------------------------------------------------------------------ */
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
            value = _Object$entries$_i[1];
          this.add(value, label, label);
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
          // Ensure spans are well‑formed first
          selection.getRanges().forEach(liftColorSpans);
          selection = editor.getSelection();
          (_selection = selection) === null || _selection === void 0 || _selection.getRanges().forEach(removeColor);
        } else {
          var _selection2;
          var colorStyle = new CKEDITOR.style({
            element: 'span',
            styles: {
              color: choice
            }
          });
          editor.applyStyle(colorStyle);
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