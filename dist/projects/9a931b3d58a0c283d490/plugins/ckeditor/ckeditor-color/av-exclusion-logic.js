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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* import { pluginName } from './constants';

const CKEDITOR = window.CKEDITOR;

CKEDITOR.plugins.add(pluginName, {
  requires: 'richcombo',
  init: function (editor) {
    const pluginConfig = CKEDITOR.tools.get_plugin_config(pluginName, editor);
    const colors = pluginConfig;

    function wrapWithAncestorsInside(node, parentChain) {
      return parentChain.reduceRight((inner, outer) => {
        const clone = new CKEDITOR.dom.element(outer.getName());
        const attrs = outer.getAttributes();
        for (let k in attrs) clone.setAttribute(k, attrs[k]);
        clone.append(inner);
        return clone;
      }, node);
    }

    editor.ui.addRichCombo('ApplyColor', {
      label: 'Apply Color',
      toolbar: 'styles',
      panel: {
        css: [CKEDITOR.skin.getPath('editor')].concat(editor.config.contentsCss),
        multiSelect: false
      },
      init: function () {
        this.add('default', 'Remove Color', 'Remove Color');
        for (let label in colors) {
          const colorValue = colors[label];
          this.add(colorValue, label, label);
        }
      },
      onRender: function () {
        this.setValue('');
      },
      onClick: function (value) {
        editor.focus();

        const selection = editor.getSelection();
        if (!selection) return;

        const ranges = selection.getRanges();
        editor.fire('lockSnapshot');

        if (value === 'default') {
          console.log('🟡 Starting color removal');
          ranges.forEach((range, index) => {
            console.log(`📌 Processing range ${index + 1}`);
            range.enlarge(CKEDITOR.ENLARGE_INLINE);
            smartRemoveColorFromPartial(range);
          });
          console.log('✅ Color removal complete');
        } else {
          const style = new CKEDITOR.style({
            element: 'span',
            styles: { color: value }
          });
          editor.applyStyle(style);
          console.log(`🎨 Applied color: ${value}`);
        }

        editor.fire('unlockSnapshot');
      }
    });

    function smartRemoveColorFromPartial(range) {
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

        console.log(`🔍 Splitting text node: '${fullText}'`);
        console.log(`    Before: '${before}' | Selected: '${selected}' | After: '${after}'`);

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
          const wrapped = wrapWithAncestorsInside(beforeFrag, parentChain);
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

          let wrapped = wrapWithAncestorsInside(selectedFrag, parentChain);

          if (keptStyle) {
            const midSpan = new CKEDITOR.dom.element('span');
            midSpan.setAttribute('style', keptStyle);
            midSpan.append(wrapped);
            wrapped = midSpan;
          }

          colorSpan.insertBeforeMe(wrapped);
          console.log(`✨ Inserted middle with formatting (no color): '${keptStyle}'`);
        }

        if (afterFrag) {
          const span = new CKEDITOR.dom.element('span');
          span.setAttribute('style', colorSpan.getAttribute('style'));
          const wrapped = wrapWithAncestorsInside(afterFrag, parentChain);
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
    }
  }
}); */


var CKEDITOR = window.CKEDITOR;
CKEDITOR.plugins.add(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], {
  requires: 'richcombo',
  init: function init(editor) {
    var colors = CKEDITOR.tools.get_plugin_config(_constants__WEBPACK_IMPORTED_MODULE_0__["pluginName"], editor);

    /* ------------------------------------------------- */
    /* Helper – replicate ancestor chain INSIDE a node   */
    /* ------------------------------------------------- */
    function wrapInside(node, chain) {
      var wrapped = chain.reduceRight(function (inner, outer) {
        var clone = new CKEDITOR.dom.element(outer.getName());
        Object.entries(outer.getAttributes()).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];
          return clone.setAttribute(k, v);
        });
        clone.append(inner);
        return clone;
      }, node);
      console.log('🔧 wrapInside →', wrapped.getOuterHtml());
      return wrapped;
    }

    /* ------------------------------------------------- */
    /* Lift colour spans so span wraps <strong>/<em>/…   */
    /* ------------------------------------------------- */
    /* ------------------------------------------------- */
    /* Lift colour spans **in‑place** so inside parent   */
    /* <strong><span>txt</span></strong>  →  <strong><span><strong>txt</strong></span></strong> */
    /* ------------------------------------------------- */
    function liftColorSpans(range) {
      var r = range.clone();
      r.enlarge(CKEDITOR.ENLARGE_INLINE);
      var walker = new CKEDITOR.dom.walker(r);
      walker.evaluator = function (n) {
        return n && n.type === CKEDITOR.NODE_ELEMENT && n.getName() === 'span' && n.getStyle('color');
      };
      var span;
      var _loop = function _loop() {
          var parent = span.getParent();
          if (!parent || parent.getName() === 'span') return 0; // continue
          // nothing to fix
          if (span.getFirst() && span.getFirst().getName() === parent.getName()) return 0; // continue
          // already fixed

          console.log('🚀 In‑place lift', span.getOuterHtml(), 'inside', parent.getName());

          // 1️⃣ Clone the inline parent (<strong>/<em>/…>) without children
          var clone = new CKEDITOR.dom.element(parent.getName());
          Object.entries(parent.getAttributes()).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              k = _ref4[0],
              v = _ref4[1];
            return clone.setAttribute(k, v);
          });

          // 2️⃣ Move ALL current children of <span> into the clone
          while (span.getFirst()) clone.append(span.getFirst().remove());

          // 3️⃣ Append the clone back into the <span>
          span.append(clone);
          console.log('✅ After in‑place lift →', parent.getOuterHtml());
        },
        _ret;
      while (span = walker.next()) {
        _ret = _loop();
        if (_ret === 0) continue;
      }
    }

    /* ------------------------------------------------- */
    /* Remove colour only, keep other inline styles      */
    /* ------------------------------------------------- */
    function removeColor(range) {
      var walker = new CKEDITOR.dom.walker(range.clone());
      walker.evaluator = function (n) {
        var _n$getAscendant;
        return n.type === CKEDITOR.NODE_TEXT && ((_n$getAscendant = n.getAscendant('span', true)) === null || _n$getAscendant === void 0 ? void 0 : _n$getAscendant.getStyle('color'));
      };
      var text;
      var _loop2 = function _loop2() {
        var colourSpan = text.getAscendant('span', true);
        if (!colourSpan) return 1; // continue
        var start = text.equals(range.startContainer) ? range.startOffset : 0;
        var end = text.equals(range.endContainer) ? range.endOffset : text.getLength();
        var parts = [text.substring(0, start), text.substring(start, end), text.substring(end)];
        var chain = [];
        var n = text.getParent();
        while (n && !n.equals(colourSpan)) {
          chain.unshift(n);
          n = n.getParent();
        }
        var make = function make(content, keepColor) {
          if (!content) return null;
          var inside = wrapInside(new CKEDITOR.dom.text(content), chain);
          if (!keepColor) return inside;
          var s = new CKEDITOR.dom.element('span');
          s.setAttribute('style', colourSpan.getAttribute('style'));
          s.append(inside);
          return s;
        };
        [make(parts[0], true), wrapInside(new CKEDITOR.dom.text(parts[1]), chain), make(parts[2], true)].filter(Boolean).forEach(function (frag) {
          return colourSpan.insertBeforeMe(frag);
        });
        text.remove();
        if (!colourSpan.getChildCount()) colourSpan.remove();
      };
      while (text = walker.next()) {
        if (_loop2()) continue;
      }
    }

    /* ------------------------------------------------- */
    /* RichCombo UI                                     */
    /* ------------------------------------------------- */
    editor.ui.addRichCombo('ApplyColor', {
      label: 'Apply Color',
      toolbar: 'styles',
      panel: {
        css: [CKEDITOR.skin.getPath('editor')].concat(editor.config.contentsCss),
        multiSelect: false
      },
      init: function init() {
        var _this = this;
        this.add('default', 'Remove Color', 'Remove Color');
        Object.entries(colors).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
            label = _ref6[0],
            val = _ref6[1];
          return _this.add(val, label, label);
        });
      },
      onRender: function onRender() {
        this.setValue('');
      },
      onClick: function onClick(value) {
        editor.focus();
        var sel = editor.getSelection();
        if (!sel) return;
        var ranges = sel.getRanges();
        editor.fire('lockSnapshot');
        if (value === 'default') {
          console.log('🗑 Removing colour from', ranges.length, 'range(s)');
          ranges.forEach(removeColor);
        } else {
          console.log('🎨 Applying colour', value, 'to', ranges.length, 'range(s)');
          var style = new CKEDITOR.style({
            element: 'span',
            styles: {
              color: value
            }
          });
          editor.applyStyle(style);
          ranges.forEach(liftColorSpans);
        }
        editor.fire('unlockSnapshot');
      }
    });
  }
});

/***/ })

/******/ })});;
//# sourceMappingURL=av-exclusion-logic.js.map