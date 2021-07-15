define(["ratchet/web"], function(__WEBPACK_EXTERNAL_MODULE_ratchet_web__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ratchet_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ratchet/web */ "ratchet/web");
/* harmony import */ var ratchet_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ratchet_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.json */ "./src/module.json");
var _module_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./module.json */ "./src/module.json", 1);
/* globals requirejs */



function getModule() {
  var _Ratchet$observable$g = ratchet_web__WEBPACK_IMPORTED_MODULE_0___default.a.observable('oneteamApplication').get(),
      registeredModules = _Ratchet$observable$g['registered-modules'];

  var ehModule;

  for (var i = 0, l = registeredModules.length; i < l; i += 1) {
    var mod = registeredModules[i];

    if (mod.id === _module_json__WEBPACK_IMPORTED_MODULE_1__["name"]) {
      ehModule = mod;
      break;
    }
  }

  return ehModule;
}

function debounce(fn, delay) {
  var timeout;
  return function () {
    var args = arguments;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      return fn.apply(null, args);
    }, delay);
  };
}

function getEnvUrl(env, mod) {
  var id = mod.id,
      timestamp = mod.timestamp;
  var modUrl = "".concat(window.location.origin, "/_modules-").concat(timestamp, "/").concat(id);
  return "".concat(modUrl, "/").concat(env, ".js");
}

function getEnvFromBranch(branch) {
  var title = branch.title;

  if (title.startsWith('DEV: ') || title.startsWith('Pre-Production - ')) {
    return 'preproduction';
  }

  if (title.startsWith('PR: ')) {
    return 'prs';
  }

  if (title.startsWith('STAGING: ')) {
    return 'staging';
  }

  return 'production';
}

function getEnvFromSessionStorage() {
  if (typeof Storage !== 'undefined') {
    return window.sessionStorage.getItem('moduleEnv');
  }

  return null;
}

function loadEnvScript() {
  var ehModule = getModule();

  if (!ehModule) {
    return;
  }

  var currentProject = ratchet_web__WEBPACK_IMPORTED_MODULE_0___default.a.observable('project').get();
  var currentBranch = ratchet_web__WEBPACK_IMPORTED_MODULE_0___default.a.observable('branch').get();

  if (!(currentProject && currentProject.getId() === "adc1b8c41f72fd5edc33" && currentBranch)) {
    return;
  }

  var env = getEnvFromSessionStorage() || getEnvFromBranch(currentBranch);
  var originalExecIndex = ratchet_web__WEBPACK_IMPORTED_MODULE_0___default.a.AbstractOneTeamPage.prototype.executeIndex;
  var queuedExecIndexCalls = [];

  ratchet_web__WEBPACK_IMPORTED_MODULE_0___default.a.AbstractOneTeamPage.prototype.executeIndex = function overriddenExecuteIndex() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    queuedExecIndexCalls.push({
      context: this,
      args: args
    });
  };

  var onLoad = function onLoad() {
    queuedExecIndexCalls.forEach(function (_ref) {
      var context = _ref.context,
          args = _ref.args;
      originalExecIndex.apply(context, args);
    });
    ratchet_web__WEBPACK_IMPORTED_MODULE_0___default.a.AbstractOneTeamPage.prototype.executeIndex = originalExecIndex;
  };

  requirejs([getEnvUrl(env, ehModule)], onLoad, onLoad);
}

function loadEnv() {
  var currentBranch = ratchet_web__WEBPACK_IMPORTED_MODULE_0___default.a.observable('branch').get();
  var reload = debounce(function (newBranch) {
    var currentBranchId = currentBranch && currentBranch._doc;
    var newBranchId = newBranch && newBranch._doc;
    var loadingTheSameBranch = currentBranchId === newBranchId;

    if (!newBranch || loadingTheSameBranch) {
      return;
    } // Super janky, but triggering a refresh to ensure UI is updated with overrides
    // and to clear out any of our modules js from the previous branch


    window.location.reload();
  }, 100);
  ratchet_web__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('branch', reload);
  loadEnvScript();
}

loadEnv();

/***/ }),

/***/ "./src/module.json":
/*!*************************!*\
  !*** ./src/module.json ***!
  \*************************/
/*! exports provided: name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"eh\"}");

/***/ }),

/***/ "ratchet/web":
/*!******************************!*\
  !*** external "ratchet/web" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ratchet_web__;

/***/ })

/******/ })});;
//# sourceMappingURL=index.js.map