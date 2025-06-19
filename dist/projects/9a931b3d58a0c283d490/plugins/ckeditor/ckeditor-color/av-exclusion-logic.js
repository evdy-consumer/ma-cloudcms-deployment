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
      var walkRange = range.clone();
      walkRange.enlarge(CKEDITOR.ENLARGE_INLINE);
      var walker = new CKEDITOR.dom.walker(walkRange);
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
    /*     function smartRemoveColorFromPartial(range) {
      const walker = new CKEDITOR.dom.walker(range);
      walker.evaluator = function (node) {
        return (
          node.type === CKEDITOR.NODE_TEXT &&
          node.getAscendant(function (el) {
            return el.getName && el.getName() === 'span' && el.getStyle('color');
          }, true)
        );
      };
       let textNode;
      while ((textNode = walker.next())) {
        const colorSpan = textNode.getAscendant(function (el) {
          return el.getName && el.getName() === 'span' && el.getStyle('color');
        }, true);
         if (!colorSpan) continue;
         const fullText = textNode.getText();
        const startOffset = textNode.equals(range.startContainer) ? range.startOffset : 0;
        const endOffset = textNode.equals(range.endContainer) ? range.endOffset : fullText.length;
         const before = fullText.slice(0, startOffset);
        const selected = fullText.slice(startOffset, endOffset);
        const after = fullText.slice(endOffset);
         console.log(`🔍 Splitting text node: "${fullText}"`);
        console.log(`    Before: "${before}" | Selected: "${selected}" | After: "${after}"`);
         const beforeFrag = before ? new CKEDITOR.dom.text(before) : null;
        const selectedFrag = selected ? new CKEDITOR.dom.text(selected) : null;
        const afterFrag = after ? new CKEDITOR.dom.text(after) : null;
         const parentChain = [];
        let current = textNode.getParent();
        while (current && !current.equals(colorSpan)) {
          parentChain.unshift(current);
          current = current.getParent();
        }
         if (beforeFrag) {
          const span = new CKEDITOR.dom.element('span');
          span.setAttribute('style', colorSpan.getAttribute('style'));
          const wrapped = utils.wrapWithAncestorsInside(beforeFrag, parentChain);
          span.append(wrapped);
          colorSpan.insertBeforeMe(span);
          console.log('⬅️ Inserted left part with original color and formatting');
        }
         if (selectedFrag) {
          const originalStyle = colorSpan.getAttribute('style') || '';
          const keptStyle = originalStyle
            .split(';')
            .map(s => s.trim())
            .filter(s => s && !s.startsWith('color'))
            .join('; ');
           let wrapped = utils.wrapWithAncestorsInside(selectedFrag, parentChain);
           if (keptStyle) {
            const midSpan = new CKEDITOR.dom.element('span');
            midSpan.setAttribute('style', keptStyle);
            midSpan.append(wrapped);
            wrapped = midSpan;
          }
           colorSpan.insertBeforeMe(wrapped);
          console.log(`✨ Inserted middle with formatting (no color): "${keptStyle}"`);
        }
         if (afterFrag) {
          const span = new CKEDITOR.dom.element('span');
          span.setAttribute('style', colorSpan.getAttribute('style'));
          const wrapped = utils.wrapWithAncestorsInside(afterFrag, parentChain);
          span.append(wrapped);
          colorSpan.insertBeforeMe(span);
          console.log('➡️ Inserted right part with original color and formatting');
        }
         textNode.remove();
         if (colorSpan.getChildCount() === 0) {
          colorSpan.remove();
          console.log('🧹 Removed empty original span');
        }
      }
    } */

    function smartRemoveColorFromPartial(range) {
      /* Pass1 — fully‑selected colour spans */
      var enlarged = range.clone();
      enlarged.enlarge(CKEDITOR.ENLARGE_INLINE);
      var spanWalker = new CKEDITOR.dom.walker(enlarged);
      spanWalker.evaluator = function (n) {
        return (n === null || n === void 0 ? void 0 : n.type) === CKEDITOR.NODE_ELEMENT && n.getName() === 'span' && n.getStyle('color');
      };
      for (var span; span = spanWalker.next();) {
        if (enlarged.containsNode(span)) {
          span.removeStyle('color');
          if (!span.hasAttributes()) {
            while (span.getFirst()) span.insertBeforeMe(span.getFirst().remove());
            span.remove();
          }
        }
      }

      /* Pass2 — partially‑selected colour spans */
      var textWalker = new CKEDITOR.dom.walker(enlarged);
      textWalker.evaluator = function (n) {
        var _n$getAscendant;
        return n.type === CKEDITOR.NODE_TEXT && ((_n$getAscendant = n.getAscendant('span', true)) === null || _n$getAscendant === void 0 ? void 0 : _n$getAscendant.getStyle('color'));
      };
      var targets = [];
      for (var tn; tn = textWalker.next();) targets.push(tn);
      var _loop = function _loop() {
        var textNode = _targets[_i];
        var span = textNode.getAscendant('span', true);
        if (!span || !span.getStyle('color')) return 1; // continue
        // may have been cleared in pass1

        var _utils$splitText = utils.splitText(textNode, range),
          _utils$splitText2 = _slicedToArray(_utils$splitText, 3),
          left = _utils$splitText2[0],
          mid = _utils$splitText2[1],
          right = _utils$splitText2[2];
        var chain = [];
        var p = textNode.getParent();
        while (p && !p.equals(span)) {
          chain.unshift(p);
          p = p.getParent();
        }
        var build = function build(txt, keepColor) {
          if (!txt) return null;
          var wrapped = utils.wrapInside(new CKEDITOR.dom.text(txt), chain);
          if (!keepColor) return wrapped;
          var copy = utils.clone(span);
          copy.append(wrapped);
          return copy;
        };
        [build(left, true), utils.wrapInside(new CKEDITOR.dom.text(mid), chain), build(right, true)].filter(Boolean).forEach(function (frag) {
          return span.insertBeforeMe(frag);
        });
        textNode.remove();
        if (!span.getChildCount()) span.remove();
      };
      for (var _i = 0, _targets = targets; _i < _targets.length; _i++) {
        if (_loop()) continue;
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