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
 *  CKEditor 4 colour‑apply / remove plugin
 *  --------------------------------------
 *  • Apply colour:   wrap selection in <span style='color:…'>,
 *                    then lift span so it wraps any inline tags.
 *  • Remove colour:  single‑pass removal that handles fully‑ or
 *                    partially‑selected colour spans while keeping
 *                    every other inline style intact.
 */
CKEDITOR.plugins.add(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], {
  requires: 'richcombo',
  init: function init(editor) {
    var colorMap = CKEDITOR.tools.get_plugin_config(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], editor);

    /* --------------------------- utils --------------------------- */
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
          var wrap = utils.clone(outer);
          wrap.append(inner);
          return wrap;
        }, node);
      },
      splitText: function splitText(node, range) {
        var s = node.equals(range.startContainer) ? range.startOffset : 0;
        var e = node.equals(range.endContainer) ? range.endOffset : node.getLength();
        return [node.substring(0, s), node.substring(s, e), node.substring(e)];
      },
      wrapWithAncestorsInside: function wrapWithAncestorsInside(node, parentChain) {
        return parentChain.reduceRight(function (inner, outer) {
          var clone = new CKEDITOR.dom.element(outer.getName());
          var attrs = outer.getAttributes();
          for (var k in attrs) clone.setAttribute(k, attrs[k]);
          clone.append(inner);
          return clone;
        }, node);
      }
    };

    /* -------------------- span‑lifter (apply) -------------------- */
    function liftColorSpans(range) {
      var walker = new CKEDITOR.dom.walker(range.clone().enlarge(CKEDITOR.ENLARGE_INLINE));
      walker.evaluator = function (n) {
        return (n === null || n === void 0 ? void 0 : n.type) === CKEDITOR.NODE_ELEMENT && n.getName() === 'span' && n.getStyle('color');
      };
      var span;
      while (span = walker.next()) {
        var _span$getFirst;
        var inlineParent = span.getParent();
        if (!inlineParent || inlineParent.getName() === 'span') continue;
        if (((_span$getFirst = span.getFirst()) === null || _span$getFirst === void 0 ? void 0 : _span$getFirst.type) === CKEDITOR.NODE_ELEMENT && span.getFirst().getName() === inlineParent.getName()) continue;
        var clone = utils.clone(inlineParent);
        while (span.getFirst()) clone.append(span.getFirst().remove());
        span.append(clone);
      }
    }

    /* -------------------- colour remover ------------------------ */
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
        var beforeFrag = before ? new CKEDITOR.dom.text(before) : null;
        var selectedFrag = selected ? new CKEDITOR.dom.text(selected) : null;
        var afterFrag = after ? new CKEDITOR.dom.text(after) : null;
        var parentChain = [];
        var current = textNode.getParent();
        while (current && !current.equals(colorSpan)) {
          parentChain.unshift(current);
          current = current.getParent();
        }
        if (beforeFrag) {
          var span = new CKEDITOR.dom.element('span');
          span.setAttribute('style', colorSpan.getAttribute('style'));
          var wrapped = utils.wrapWithAncestorsInside(beforeFrag, parentChain);
          span.append(wrapped);
          colorSpan.insertBeforeMe(span);
          console.log('⬅️ Inserted left part with original color and formatting');
        }
        if (selectedFrag) {
          var originalStyle = colorSpan.getAttribute('style') || '';
          var keptStyle = originalStyle.split(';').map(function (s) {
            return s.trim();
          }).filter(function (s) {
            return s && !s.startsWith('color');
          }).join('; ');
          var _wrapped = utils.wrapWithAncestorsInside(selectedFrag, parentChain);
          if (keptStyle) {
            var midSpan = new CKEDITOR.dom.element('span');
            midSpan.setAttribute('style', keptStyle);
            midSpan.append(_wrapped);
            _wrapped = midSpan;
          }
          colorSpan.insertBeforeMe(_wrapped);
          console.log("\u2728 Inserted middle with formatting (no color): \"".concat(keptStyle, "\""));
        }
        if (afterFrag) {
          var _span = new CKEDITOR.dom.element('span');
          _span.setAttribute('style', colorSpan.getAttribute('style'));
          var _wrapped2 = utils.wrapWithAncestorsInside(afterFrag, parentChain);
          _span.append(_wrapped2);
          colorSpan.insertBeforeMe(_span);
          console.log('➡️ Inserted right part with original color and formatting');
        }
        textNode.remove();
        if (colorSpan.getChildCount() === 0) {
          colorSpan.remove();
          console.log('🧹 Removed empty original span');
        }
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
        for (var _i = 0, _Object$entries = Object.entries(colorMap); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
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
        var sel = editor.getSelection();
        if (!sel) return;
        var ranges = sel.getRanges();
        editor.fire('lockSnapshot');
        if (choice === 'default') {
          ranges.forEach(function (range, index) {
            console.log("\uD83D\uDCCC Processing range ".concat(index + 1));
            range.enlarge(CKEDITOR.ENLARGE_INLINE);
            smartRemoveColorFromPartial(range);
          });
        } else {
          var _sel;
          editor.applyStyle(new CKEDITOR.style({
            element: 'span',
            styles: {
              color: choice
            }
          }));
          sel = editor.getSelection();
          (_sel = sel) === null || _sel === void 0 || _sel.getRanges().forEach(liftColorSpans);
        }
        editor.fire('unlockSnapshot');
      }
    });
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=av-exclusion-logic.js.map