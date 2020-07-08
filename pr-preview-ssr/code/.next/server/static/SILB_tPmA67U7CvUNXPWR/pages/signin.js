module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DB6d");


/***/ }),

/***/ "DB6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qqtm");



class SignIn extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const {
      completeAuthentication
    } = this.context;
    completeAuthentication();
  }

  render() {
    return null;
  }

}

SignIn.contextType = _auth_authContext__WEBPACK_IMPORTED_MODULE_1__[/* AuthContext */ "a"];
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "qqtm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AuthContext; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ authContext_AuthProvider; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "oidc-client"
var external_oidc_client_ = __webpack_require__("wJdk");

// CONCATENATED MODULE: ./auth/oidcSettings.js
const oidcSettings = {
  authority: "https://v1.api.us.janrain.com/c2a48310-971b-3db9-8a26-000000000000" + '/login',
  client_id: "eb91cd7b-e586-4ae5-bda7-d56e4ef9e684",
  redirect_uri: "http://localhost:3000" + '/sign-in',
  jwks_uri: "http://localhost:3000" + '/login/jwk',
  response_type: 'code',
  scope: 'openid profile email address phone',
  post_logout_redirect_uri: "http://localhost:3000",
  revokeAccessTokenOnSignout: true
};
// CONCATENATED MODULE: ./auth/authService.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class authService_AuthService {
  constructor(settings) {
    this.getUser = async () => {
      const user = await this.manager.getUser();

      if (!user) {
        return this.manager.signinRedirectCallback();
      }

      await this.manager.storeUser(user);
      return user;
    };

    this.isAuthenticated = () => {
      const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${oidcSettings.authority}:${oidcSettings.client_id}`));
      const valid = !!oidcStorage && this.callEndpoint("/profiles/oidc/userinfo");
      return !!valid && !!oidcStorage.access_token;
    };

    this.callEndpoint = endpoint => {
      const oidcStorage = JSON.parse(sessionStorage.getItem(`oidc.user:${oidcSettings.authority}:${oidcSettings.client_id}`));
      const url = "https://v1.api.us.janrain.com/c2a48310-971b-3db9-8a26-000000000000" + endpoint;
      return fetch(url, {
        headers: {
          'Authorization': "Bearer " + oidcStorage.access_token
        }
      }).then(res => !!res);
    };

    this.createAuthenticationRequest = () => {
      return this.manager.createSigninRequest();
    };

    this.startAuthentication = () => {
      sessionStorage.setItem('redirectUri', window.location.pathname);
      return this.manager.signinRedirect();
    };

    this.completeAuthentication = () => {
      this.manager.signinRedirectCallback().then(() => {
        return this.getUser();
      }).catch(error => {
        this.navigateToScreen();
        this.handleError(error);
      });
    };

    this.createLogoutRequest = () => {
      return this.manager.createSignoutRequest();
    };

    this.startLogout = () => {
      const post_logout_redirect_uri = encodeURIComponent(oidcSettings.post_logout_redirect_uri.toString());
      this.manager.clearStaleState().then(() => {
        sessionStorage.clear();
        window.open("https://v1.api.us.janrain.com/c2a48310-971b-3db9-8a26-000000000000" + '/auth-ui/logout?client_id=' + "eb91cd7b-e586-4ae5-bda7-d56e4ef9e684" + '&redirect_uri=' + post_logout_redirect_uri, "_self");
      }).catch(error => this.handleError(error));
    };

    this.navigateToScreen = () => {
      window.location.replace(sessionStorage.getItem('redirectUri'));
    };

    this.settings = settings;
    this.manager = new external_oidc_client_["UserManager"](_objectSpread(_objectSpread({}, this.settings), {}, {
      managerStore: new external_oidc_client_["WebStorageStateStore"]({
        store: sessionStorage
      })
    }));
    this.manager.events.addUserLoaded(() => {// if (router.pathname.indexOf("code") !== -1) {
      //     this.navigateToScreen();
      // }
    });
    this.manager.events.addAccessTokenExpired(() => {
      console.log("token expired");
      this.startLogout();
    });
    external_oidc_client_["Log"].logger = console;
    external_oidc_client_["Log"].level = external_oidc_client_["Log"].ERROR;
  }

  handleError(error) {
    console.error("Problem with authentication endpoint: ", error);
  }

}

/* harmony default export */ var authService = (authService_AuthService);
// CONCATENATED MODULE: ./auth/authContext.js
var __jsx = external_react_default.a.createElement;

function authContext_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function authContext_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { authContext_ownKeys(Object(source), true).forEach(function (key) { authContext_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { authContext_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function authContext_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const AuthContext = external_react_default.a.createContext({
  createAuthenticationRequest: () => ({}),
  startAuthentication: () => ({}),
  completeAuthentication: () => ({}),
  isAuthenticated: () => ({}),
  createLogoutRequest: () => ({}),
  startLogout: () => ({}),
  completeLogout: () => ({}),
  getUser: () => ({})
});
class authContext_AuthProvider extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.authService = void 0;
    this.authService = new authService(oidcSettings);
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  render() {
    return __jsx(AuthContext.Provider, {
      value: authContext_objectSpread({
        authenticated: this.isAuthenticated
      }, this.authService)
    }, this.props.children);
  }

}

/***/ }),

/***/ "wJdk":
/***/ (function(module, exports) {

module.exports = require("oidc-client");

/***/ })

/******/ });