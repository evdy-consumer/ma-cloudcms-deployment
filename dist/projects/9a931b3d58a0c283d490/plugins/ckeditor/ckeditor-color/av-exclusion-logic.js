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

    /* Utilities */
    var utils = {
      cloneElement: function cloneElement(source) {
        var clone = new CKEDITOR.dom.element(source.getName());
        Object.entries(source.getAttributes()).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          return clone.setAttribute(key, value);
        });
        return clone;
      },
      /** Wrap `node` with clones of every element in `chain` (inner‑to‑outer). */wrapWithAncestors: function wrapWithAncestors(node, chain) {
        return chain.reduceRight(function (inner, outer) {
          var wrapper = utils.cloneElement(outer);
          wrapper.append(inner);
          return wrapper;
        }, node);
      },
      /** Split a text node into three parts according to a range. */splitTextByRange: function splitTextByRange(textNode, range) {
        var start = textNode.equals(range.startContainer) ? range.startOffset : 0;
        var end = textNode.equals(range.endContainer) ? range.endOffset : textNode.getLength();
        return [textNode.substring(0, start), textNode.substring(start, end), textNode.substring(end)];
      }
    };

    /* Ensure colour <span> wraps the inline tag, not vice‑versa */
    function liftColorSpans(range) {
      var walkerRange = range.clone();
      walkerRange.enlarge(CKEDITOR.ENLARGE_INLINE);
      var walker = new CKEDITOR.dom.walker(walkerRange);
      walker.evaluator = function (node) {
        return (node === null || node === void 0 ? void 0 : node.type) === CKEDITOR.NODE_ELEMENT && node.getName() === 'span' && node.getStyle('color');
      };
      var span;
      while (span = walker.next()) {
        var parentInline = span.getParent();
        // already correct
        if (!parentInline || parentInline.getName() === 'span') continue;
        var firstChild = span.getFirst();
        // already cloned previously
        if ((firstChild === null || firstChild === void 0 ? void 0 : firstChild.type) === CKEDITOR.NODE_ELEMENT && firstChild.getName() === parentInline.getName()) {
          continue;
        }
        var inlineClone = utils.cloneElement(parentInline);
        while (span.getFirst()) {
          inlineClone.append(span.getFirst().remove());
        }
        span.append(inlineClone);
      }
    }

    /* Remove only the colour while keeping other inline styles */
    function removeColor(range) {
      var textWalker = new CKEDITOR.dom.walker(range.clone());
      textWalker.evaluator = function (node) {
        var _node$getAscendant;
        return node.type === CKEDITOR.NODE_TEXT && ((_node$getAscendant = node.getAscendant('span', true)) === null || _node$getAscendant === void 0 ? void 0 : _node$getAscendant.getStyle('color'));
      };
      var textNode;
      var _loop = function _loop() {
        var colorSpan = textNode.getAscendant('span', true);
        if (!colorSpan) return 1; // continue
        var _utils$splitTextByRan = utils.splitTextByRange(textNode, range),
          _utils$splitTextByRan2 = _slicedToArray(_utils$splitTextByRan, 3),
          before = _utils$splitTextByRan2[0],
          middle = _utils$splitTextByRan2[1],
          after = _utils$splitTextByRan2[2];

        // Collect ancestors between textNode and the colour span
        var ancestors = [];
        var ancestor = textNode.getParent();
        while (ancestor && !ancestor.equals(colorSpan)) {
          ancestors.unshift(ancestor);
          ancestor = ancestor.getParent();
        }
        var fragments = [];

        // left (keeps colour)
        if (before) {
          var leftFragment = utils.wrapWithAncestors(new CKEDITOR.dom.text(before), ancestors);
          var leftSpan = utils.cloneElement(colorSpan);
          leftSpan.append(leftFragment);
          fragments.push(leftSpan);
        }

        // middle (loses colour)
        if (middle) {
          var middleFragment = utils.wrapWithAncestors(new CKEDITOR.dom.text(middle), ancestors);
          fragments.push(middleFragment);
        }

        // right (keeps colour)
        if (after) {
          var rightFragment = utils.wrapWithAncestors(new CKEDITOR.dom.text(after), ancestors);
          var rightSpan = utils.cloneElement(colorSpan);
          rightSpan.append(rightFragment);
          fragments.push(rightSpan);
        }

        // Insert new fragments and remove original text node
        fragments.forEach(function (fragment) {
          return colorSpan.insertBeforeMe(fragment);
        });
        textNode.remove();
        if (!colorSpan.getChildCount()) {
          colorSpan.remove();
        }
      };
      while (textNode = textWalker.next()) {
        if (_loop()) continue;
      }
    }

    /* RichCombo UI */
    editor.ui.addRichCombo('ApplyColor', {
      label: 'Apply Color',
      toolbar: 'styles',
      panel: {
        css: [CKEDITOR.skin.getPath('editor')].concat(_toConsumableArray(editor.config.contentsCss)),
        multiSelect: false
      },
      init: function init() {
        this.add('default', 'Remove Color', 'Remove Color');
        for (var _i = 0, _Object$entries = Object.entries(colorMap); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
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
        var initialRanges = selection.getRanges();
        if (choice === 'default') {
          initialRanges.forEach(removeColor);
        } else {
          var _selection;
          var colorStyle = new CKEDITOR.style({
            element: 'span',
            styles: {
              color: choice
            }
          });
          editor.applyStyle(colorStyle);

          // CKEditor may split nodes; refresh selection
          selection = editor.getSelection();
          (_selection = selection) === null || _selection === void 0 || _selection.getRanges().forEach(liftColorSpans);
        }
        editor.fire('unlockSnapshot');
      }
    });
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=av-exclusion-logic.js.map