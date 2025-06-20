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
      }
    };

    /* ---------------- span‑lifter (apply) ---------------- */
    function liftColorSpans(range) {
      var walkRange = range.clone();
      walkRange.enlarge(CKEDITOR.ENLARGE_INLINE);
      var walker = new CKEDITOR.dom.walker(walkRange);
      walker.evaluator = function (n) {
        return (n === null || n === void 0 ? void 0 : n.type) === CKEDITOR.NODE_ELEMENT && n.getName() === 'span' && n.getStyle('color');
      };
      var span;
      while (span = walker.next()) {
        var inlineParent = span.getParent();
        if (!inlineParent || inlineParent.getName() === 'span') continue;
        var firstChild = span.getFirst();
        if ((firstChild === null || firstChild === void 0 ? void 0 : firstChild.type) === CKEDITOR.NODE_ELEMENT && firstChild.getName() === inlineParent.getName()) continue;
        var clone = utils.clone(inlineParent);
        while (span.getFirst()) clone.append(span.getFirst().remove());
        span.append(clone);
      }
    }

    /* -------------- colour remover (single pass) -------------- */
    function smartRemoveColorFromPartial(range) {
      console.log('🟢 smartRemoveColorFromPartial – start');

      /* Pass 0 – selection covers the entire contents of a colour span (even if
         it doesn’t include the span element itself). Detect via boundary checks. */
      var spanAncestor = range.startContainer.getAscendant('span', true);
      if (spanAncestor && spanAncestor.getStyle('color') && range.checkBoundaryOfElement(spanAncestor, CKEDITOR.START) && range.checkBoundaryOfElement(spanAncestor, CKEDITOR.END)) {
        var _spanAncestor$getAttr;
        console.log('⚡ Pass0: range covers full coloured span contents – stripping colour');
        spanAncestor.removeStyle('color');
        if (!((_spanAncestor$getAttr = spanAncestor.getAttribute('style')) !== null && _spanAncestor$getAttr !== void 0 && _spanAncestor$getAttr.trim())) spanAncestor.removeAttribute('style');
        if (!spanAncestor.hasAttributes()) {
          while (spanAncestor.getFirst()) spanAncestor.insertBeforeMe(spanAncestor.getFirst().remove());
          spanAncestor.remove();
          console.log('⚡ Pass0: span unwrapped');
        }
        return; // early exit; nothing else to do
      }

      /* Pass 1 – remove colour from spans fully inside the selection */
      var fullRange = range.clone();
      fullRange.enlarge(CKEDITOR.ENLARGE_INLINE);
      var spanWalker = new CKEDITOR.dom.walker(fullRange);
      spanWalker.evaluator = function (node) {
        return (node === null || node === void 0 ? void 0 : node.type) === CKEDITOR.NODE_ELEMENT && node.getName() === 'span' && node.getStyle('color');
      };
      console.log('🔍 Pass1: scanning full spans');
      for (var span; span = spanWalker.next();) {
        console.log('  → Candidate span:', span.getOuterHtml().slice(0, 80));
        if (fullRange.getEnclosedNode() && fullRange.getEnclosedNode().equals(span)) {
          var _span$getAttribute;
          console.log('    ✔ Full span covered – stripping colour');
          span.removeStyle('color');
          if (!((_span$getAttribute = span.getAttribute('style')) !== null && _span$getAttribute !== void 0 && _span$getAttribute.trim())) span.removeAttribute('style');
          if (!span.hasAttributes()) {
            while (span.getFirst()) span.insertBeforeMe(span.getFirst().remove());
            span.remove();
            console.log('    🧹 Span unwrapped');
          }
        }
      }
      console.log('🔚 Pass1 done');

      /* Pass 2 – handle partially‑selected spans */
      var collector = new CKEDITOR.dom.walker(range);
      collector.evaluator = function (node) {
        return node.type === CKEDITOR.NODE_TEXT && node.getAscendant(function (el) {
          return el.getName && el.getName() === 'span' && el.getStyle('color');
        }, true);
      };
      var targets = [];
      var node;
      while (node = collector.next()) targets.push(node);
      console.log('🔍 Pass2: text nodes in colour spans ->', targets.length);
      var processedSpans = new Set();
      var _loop = function _loop() {
          var textNode = _targets[_i];
          var colorSpan = textNode.getAscendant(function (el) {
            return el.getName && el.getName() === 'span' && el.getStyle('color');
          }, true);
          if (!colorSpan) return 0; // continue
          if (processedSpans.has(colorSpan)) {
            console.log('  ⏩ Span already processed');
            return 0; // continue
          }
          var fullText = textNode.getText();
          var startOffset = textNode.equals(range.startContainer) ? range.startOffset : 0;
          var endOffset = textNode.equals(range.endContainer) ? range.endOffset : fullText.length;
          console.log('  → Splitting text node:', fullText);
          var before = fullText.slice(0, startOffset);
          var selected = fullText.slice(startOffset, endOffset);
          var after = fullText.slice(endOffset);
          var beforeFrag = before ? new CKEDITOR.dom.text(before) : null;
          var selectedFrag = selected ? new CKEDITOR.dom.text(selected) : null;
          var afterFrag = after ? new CKEDITOR.dom.text(after) : null;

          /* Build ancestor chain */
          var chain = [];
          var current = textNode.getParent();
          while (current && !current.equals(colorSpan)) {
            chain.unshift(current);
            current = current.getParent();
          }
          var build = function build(frag, keepColor) {
            if (!frag) return null;
            var wrapped = utils.wrapInside(frag, chain);
            if (!keepColor) return wrapped;
            var spanCopy = utils.clone(colorSpan);
            spanCopy.append(wrapped);
            return spanCopy;
          };
          var fragments = [build(beforeFrag, true), utils.wrapInside(selectedFrag || new CKEDITOR.dom.text(''), chain), build(afterFrag, true)].filter(Boolean);
          console.log('    inserting', fragments.length, 'fragments');
          fragments.forEach(function (frag) {
            return colorSpan.insertBeforeMe(frag);
          });
          textNode.remove();
          if (!colorSpan.getChildCount()) colorSpan.remove();
          processedSpans.add(colorSpan);
        },
        _ret;
      for (var _i = 0, _targets = targets; _i < _targets.length; _i++) {
        _ret = _loop();
        if (_ret === 0) continue;
      }
      console.log('🟢 smartRemoveColorFromPartial – end');
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