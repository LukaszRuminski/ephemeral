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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o42t");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adapters_contentful_contentful_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("I7jp");
/* harmony import */ var _adapters_contentful_contentful_adapters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adapters_contentful_contentful_adapters__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qqtm");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};
    const labels = await Object(_adapters_contentful_contentful_adapters__WEBPACK_IMPORTED_MODULE_3__["getGlobalLabels"])();

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
      labels: labels.data.labelGroupCollection.items[0].labels
    };
  }

  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.setState({
        isOidcReady: true
      });
    };

    this.state = {
      isOidcReady: false
    };
  }

  render() {
    const {
      Component,
      pageProps,
      labels
    } = this.props;
    const {
      isOidcReady
    } = this.state;
    return isOidcReady && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, labels.title)), __jsx(_auth_authContext__WEBPACK_IMPORTED_MODULE_4__[/* AuthProvider */ "b"], null, __jsx(Component, _extends({}, pageProps, {
      globalLabels: labels
    }))));
  }

}

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "6jsY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("mYab");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "9RHj":
/***/ (function(module, exports, __webpack_require__) {

const gql = __webpack_require__("txk1");

const article = gql`
query getPost($articleId: String!) {
  blogPost(id: $articleId) {
    date
    title
    body
    author
    image {
      file {
        url
      }
      url,
      altText
    }
  }
}`;
module.exports = article;

/***/ }),

/***/ "I7jp":
/***/ (function(module, exports, __webpack_require__) {

const client = __webpack_require__("nXhg"); // Queries


const getGlobalLabelsQuery = __webpack_require__("RGvy");

const getTeamMembersQuery = __webpack_require__("ND4g");

const getPortfolioItemsQuery = __webpack_require__("cOm/");

const getBlogPostsQuery = __webpack_require__("L0+C");

const getBlogPostQuery = __webpack_require__("9RHj");

const getGlobalLabels = async () => {
  return client.query({
    query: getGlobalLabelsQuery
  });
};

const getTeamMembers = async () => client.query({
  query: getTeamMembersQuery
});

const getPortfolioItems = async () => client.query({
  query: getPortfolioItemsQuery
});

const getBlogPosts = async () => client.query({
  query: getBlogPostsQuery
});

const getBlogPost = async id => client.query({
  query: getBlogPostQuery,
  variables: {
    articleId: id
  }
});

module.exports = {
  getGlobalLabels,
  getTeamMembers,
  getPortfolioItems,
  getBlogPosts,
  getBlogPost
};

/***/ }),

/***/ "L0+C":
/***/ (function(module, exports, __webpack_require__) {

const gql = __webpack_require__("txk1");

const blog = gql`
query getBlogPage {
  blogPostCollection {
    items {
      sys {
        id
      }
      date
      title
      headlights
      body
      image {
        file {
            url
        }
        url,
        altText
      }
    }
  }
}`;
module.exports = blog;

/***/ }),

/***/ "ND4g":
/***/ (function(module, exports, __webpack_require__) {

const gql = __webpack_require__("txk1");

const team = gql`
query getTeamPage {
  teamMemberCollection {
    items {
      sys {
        id
      }
      firstName
      lastName
      description
      imageUrl
      imageAltText
    }
  }
}`;
module.exports = team;

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "RGvy":
/***/ (function(module, exports, __webpack_require__) {

const gql = __webpack_require__("txk1");

const GET_GLOBAL_LABELS = gql`
query getGlobalLabels {
  labelGroupCollection(limit: 1, where: {id: "global"}) {
    items {
      name
      labels
    }
  }
}`;
module.exports = GET_GLOBAL_LABELS;

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cOm/":
/***/ (function(module, exports, __webpack_require__) {

const gql = __webpack_require__("txk1");

const portfolio = gql`
query getPortfolioPage {
  portfolioItemCollection {
    items {
      sys {
        id
      }
      title
      url
      newimage {
        file {
          url
        }
        altText
      }
    }
  }
}`;
module.exports = portfolio;

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mYab":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "nXhg":
/***/ (function(module, exports, __webpack_require__) {

const fetch = __webpack_require__("4vsW");

const ApolloClient = __webpack_require__("Oyez").ApolloClient;

const InMemoryCache = __webpack_require__("oz4i").InMemoryCache;

const HttpLink = __webpack_require__("TG1l").HttpLink;

const uri = `https://graphql.contentful.com/content/v1/spaces/${"l5bhof0e7ce2"}/environments/${"master"}`;
const cache = new InMemoryCache();
const link = new HttpLink({
  uri,
  fetch,
  headers: {
    Authorization: 'Bearer ' + "e70021dfbc5418e2a9135b98dcef06bb3b5698f6fc907100192b26f7cd9f1cee"
  }
});
const client = new ApolloClient({
  cache,
  link,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all'
    }
  }
});
module.exports = client;

/***/ }),

/***/ "o42t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6jsY")


/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

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

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "wJdk":
/***/ (function(module, exports) {

module.exports = require("oidc-client");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });