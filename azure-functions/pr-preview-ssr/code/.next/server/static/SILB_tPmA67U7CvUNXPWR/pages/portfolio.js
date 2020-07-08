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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("mYab");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("bBV7");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0Sf/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/H1/H1.styles.js

const MainStyle = external_styled_components_default.a.span.withConfig({
  displayName: "H1styles__MainStyle",
  componentId: "bwxock-0"
})(["color:", ";font-size:40px;line-height:52px;text-transform:uppercase;font-weight:700;margin-bottom:20px;text-align:center;"], props => props.color || '#fff');
// CONCATENATED MODULE: ./components/H1/H1.js
var __jsx = external_react_default.a.createElement;



const H1 = ({
  title,
  color
}) => __jsx(MainStyle, {
  color: color
}, title);

/* harmony default export */ var H1_H1 = __webpack_exports__["a"] = (H1);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eAkX");


/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("mYab");

var _interopRequireWildcard = __webpack_require__("HIQq");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("bBV7"));

var _router2 = __webpack_require__("a4i1");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (true) {
      var rewriteUrlForNextExport = __webpack_require__("ddid").rewriteUrlForNextExport;

      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = rewriteUrlForNextExport(props.href);
      }
    }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

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

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HIQq":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("pSYS");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "Qog0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Header/Header.styles.js

const AceHeader = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__AceHeader",
  componentId: "sc-6hywrg-0"
})(["background-color:transparent;position:fixed;top:0;left:0;width:100vw;height:100px;font-family:\"IBM Plex Sans SemiBold\",sans-serif;z-index:5;"]);
const AceBrandName = external_styled_components_default.a.span.withConfig({
  displayName: "Headerstyles__AceBrandName",
  componentId: "sc-6hywrg-1"
})(["position:absolute;top:37px;left:172.5px;color:", ";font-size:40px;line-height:52px;font-weight:700;@media (max-width:800px){display:none;}"], props => props.secondary ? '#fff' : '#E61E32');
const AceBrandWrapper = external_styled_components_default.a.a.withConfig({
  displayName: "Headerstyles__AceBrandWrapper",
  componentId: "sc-6hywrg-2"
})(["text-decoration:none;display:", ";position:absolute;top:0;left:0;height:100px;width:550px;&:hover{cursor:pointer;}@media (max-width:800px){height:150px;width:150px;}"], props => props.withoutLogo ? 'none' : 'initial');
const AceCircle = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__AceCircle",
  componentId: "sc-6hywrg-3"
})(["width:300px;height:300px;background-color:", ";border-radius:50%;position:relative;left:-150px;top:-150px;z-index:5;"], props => props.secondary ? '#e72335bd' : '#E61E32');
const AceLogo = external_styled_components_default.a.img.withConfig({
  displayName: "Headerstyles__AceLogo",
  componentId: "sc-6hywrg-4"
})(["position:absolute;z-index:10;width:122.58px;"]);
const AceMenu = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__AceMenu",
  componentId: "sc-6hywrg-5"
})(["display:flex;align-items:center;float:right;margin-top:39px;margin-right:10px;@media (max-width:800px){display:none;}"]);
const AceMenuLink = external_styled_components_default.a.a.withConfig({
  displayName: "Headerstyles__AceMenuLink",
  componentId: "sc-6hywrg-6"
})(["text-decoration:none;cursor:pointer;margin-right:45px;color:", ";font-size:25px;font-weight:bold;line-height:39px;&:hover{border-bottom:3px solid #E61E32;margin-bottom:-3px;}"], props => props.active ? '#E61E32' : props.secondary ? '#fff' : '#000');
const AceLoginLink = external_styled_components_default.a.a.withConfig({
  displayName: "Headerstyles__AceLoginLink",
  componentId: "sc-6hywrg-7"
})(["text-decoration:none;cursor:pointer;padding:0 4px 0 4px;color:", ";background:", ";font-size:25px;font-weight:bold;line-height:39px;bottom:10%;position:absolute;&:hover{border-bottom:3px solid #E61E32;margin-bottom:-3px;}@media (min-width:800px){position:relative;margin-right:45px;}"], props => props.active ? '#E61E32' : props.secondary ? '#fff' : '#000', props => props.active ? '#E61E32' : props.secondary ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)');
const AceMenuMobile = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__AceMenuMobile",
  componentId: "sc-6hywrg-8"
})(["display:none;@media (max-width:800px){display:initial;}"]);
const AceIcon = external_styled_components_default.a.img.withConfig({
  displayName: "Headerstyles__AceIcon",
  componentId: "sc-6hywrg-9"
})(["width:50px;float:right;margin:20px;&:hover{cursor:pointer;}"]);
const AceIconMenu = external_styled_components_default()(AceIcon).withConfig({
  displayName: "Headerstyles__AceIconMenu",
  componentId: "sc-6hywrg-10"
})(["filter:", ";display:", ";"], props => props.secondary ? 'invert(62%) sepia(46%) saturate(361%) hue-rotate(307deg) brightness(102%)' + ' contrast(80%)' : ' invert(13%) sepia(97%) saturate(4678%) hue-rotate(349deg) brightness(105%) contrast(82%)', props => props.menuOpen ? 'none' : 'initial');
const AceIconClose = external_styled_components_default()(AceIcon).withConfig({
  displayName: "Headerstyles__AceIconClose",
  componentId: "sc-6hywrg-11"
})(["filter:invert(100%);position:absolute;top:0;right:0;"]);
const AceHiddenMenu = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__AceHiddenMenu",
  componentId: "sc-6hywrg-12"
})(["display:", ";position:absolute;align-items:center;justify-content:center;height:100vh;width:200px;right:0;box-shadow:0 2px 6px 0 rgba(0,0,0,0.5);background-color:", ";flex-direction:column;"], props => props.open ? 'flex' : 'none', props => props.secondary ? '#E6969C' : 'rgba(231,35,53, 1)');
const AceMenuLinkMobile = external_styled_components_default.a.a.withConfig({
  displayName: "Headerstyles__AceMenuLinkMobile",
  componentId: "sc-6hywrg-13"
})(["text-decoration:none;font-weight:bold;font-size:30px;margin:20px;color:#FFF;"]);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./auth/authContext.js + 2 modules
var authContext = __webpack_require__("qqtm");

// CONCATENATED MODULE: ./components/Header/Header.js
var __jsx = external_react_default.a.createElement;






class Header_Header extends external_react_["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      menuOpen: false
    };

    this.showLoginLogout = () => {
      const {
        authenticated,
        startLogout,
        startAuthentication
      } = this.context;
      return authenticated ? __jsx(AceLoginLink, {
        onClick: startLogout.bind(this.context)
      }, "Logout") : __jsx(AceLoginLink, {
        onClick: startAuthentication.bind(this.context)
      }, "Login");
    };
  }

  render() {
    const {
      authenticated
    } = this.context;
    const {
      secondary,
      router,
      withoutLogo
    } = this.props;
    const {
      menuOpen
    } = this.state;
    const showLoginLogout = this.showLoginLogout();
    return __jsx(external_react_["Fragment"], null, __jsx(AceHeader, {
      secondary: secondary
    }, __jsx(AceBrandWrapper, {
      href: "/",
      withoutLogo: withoutLogo
    }, __jsx(AceLogo, {
      src: "/static/images/logo.png",
      alt: 'ACE Card as a team logo'
    }), __jsx(AceCircle, {
      secondary: secondary
    }), __jsx(AceBrandName, {
      secondary: secondary
    }, "ACE TEAM")), __jsx(AceMenu, null, __jsx(link_default.a, {
      href: "/team"
    }, __jsx(AceMenuLink, {
      secondary: secondary,
      active: router.pathname === '/team'
    }, "Team")), __jsx(link_default.a, {
      href: "/portfolio"
    }, __jsx(AceMenuLink, {
      secondary: secondary,
      active: router.pathname === '/portfolio'
    }, "Portfolio")), __jsx(link_default.a, {
      href: "/blog"
    }, __jsx(AceMenuLink, {
      secondary: secondary,
      active: router.pathname === '/blog'
    }, "Blog")), authenticated && __jsx(link_default.a, {
      href: "/profile"
    }, __jsx(AceMenuLink, {
      secondary: secondary,
      active: router.pathname === '/profile'
    }, "Profile")), showLoginLogout), __jsx(AceMenuMobile, null, __jsx(AceIconMenu, {
      menuOpen: menuOpen,
      secondary: secondary,
      src: '/static/icons/menu.svg',
      alt: 'Hamburger menu icon',
      onClick: () => {
        this.setState({
          menuOpen: !menuOpen
        });
      }
    }), __jsx(AceHiddenMenu, {
      open: menuOpen,
      secondary: secondary
    }, __jsx(AceIconClose, {
      src: '/static/icons/close.svg',
      secondary: secondary,
      alt: 'Cross close icon',
      onClick: () => {
        this.setState({
          menuOpen: !menuOpen
        });
      }
    }), __jsx(link_default.a, {
      href: "/team"
    }, __jsx(AceMenuLinkMobile, {
      href: "/team",
      secondary: secondary
    }, "Team")), __jsx(link_default.a, {
      href: "/team"
    }, __jsx(AceMenuLinkMobile, {
      href: "/portfolio",
      secondary: secondary
    }, "Portfolio")), __jsx(link_default.a, {
      href: "/team"
    }, __jsx(AceMenuLinkMobile, {
      href: "/blog",
      secondary: secondary
    }, "Blog")), authenticated && __jsx(link_default.a, {
      href: "/team"
    }, __jsx(AceMenuLinkMobile, {
      href: "/profile",
      secondary: secondary
    }, "Profile")), showLoginLogout))));
  }

}

Header_Header.contextType = authContext["a" /* AuthContext */];
Header_Header.defaultProps = {
  secondary: false,
  withoutLogo: false,
  router: {}
};
/* harmony default export */ var components_Header_Header = (Object(router_["withRouter"])(Header_Header));
// CONCATENATED MODULE: ./components/Layout/Layout.styles.js

const AceLayout = external_styled_components_default.a.div.withConfig({
  displayName: "Layoutstyles__AceLayout",
  componentId: "v3v8dz-0"
})(["padding-top:150px;font-family:\"IBM Plex Sans SemiBold\",sans-serif;"]);
// CONCATENATED MODULE: ./components/Layout/Layout.js
var Layout_jsx = external_react_default.a.createElement;





const Layout = props => Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(head_default.a, null, Layout_jsx("title", null, props.pageTitle || 'Ace team'), Layout_jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width"
})), Layout_jsx(components_Header_Header, {
  secondary: props.secondary,
  withoutLogo: props.withoutLogo
}), Layout_jsx(AceLayout, null, props.children));

/* harmony default export */ var Layout_Layout = __webpack_exports__["a"] = (Layout);

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

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "Z0wt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');

  if (path) {
    path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

    if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  }

  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("Jxiz"));

const utils_1 = __webpack_require__("z4BS");

const is_dynamic_1 = __webpack_require__("BCwt");

const route_matcher_1 = __webpack_require__("VOyh");

const route_regex_1 = __webpack_require__("BukW");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (true) {
      const rewriteUrlForNextExport = __webpack_require__("Z0wt").rewriteUrlForNextExport;

      return rewriteUrlForNextExport(url);
    } else {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (true) {
        const rewriteUrlForNextExport = __webpack_require__("Z0wt").rewriteUrlForNextExport; // @ts-ignore this is temporarily global (attached to window)


        if (__NEXT_DATA__.nextExport) {
          as = rewriteUrlForNextExport(as);
        }
      }

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("HIQq");

var _interopRequireDefault = __webpack_require__("mYab");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

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

/***/ "ddid":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/rewrite-url-for-export.js");

/***/ }),

/***/ "eAkX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/H1/H1.js + 1 modules
var H1 = __webpack_require__("0Sf/");

// EXTERNAL MODULE: ./components/Layout/Layout.js + 3 modules
var Layout = __webpack_require__("Qog0");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/PortfolioItem/PortfolioItem.styles.js

const PortfolioItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "PortfolioItemstyles__PortfolioItemWrapper",
  componentId: "sc-1dja8b3-0"
})(["display:flex;background-color:#E61E32;flex-direction:column;border-radius:15px;width:80%;margin:15px;@media(max-width:800px){width:100%;margin-bottom:0;}"]);
const Image = external_styled_components_default.a.img.withConfig({
  displayName: "PortfolioItemstyles__Image",
  componentId: "sc-1dja8b3-1"
})(["width:100%;height:auto;border-top-right-radius:15px;border-top-left-radius:15px;"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "PortfolioItemstyles__Content",
  componentId: "sc-1dja8b3-2"
})(["display:flex;flex-direction:column;align-items:center;padding:20px 40px;line-height:30px;color:white;@media(max-width:800px){padding:10px 25px;}"]);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "PortfolioItemstyles__Title",
  componentId: "sc-1dja8b3-3"
})(["font-size:30px;font-weight:bold;"]);
const Link = external_styled_components_default.a.a.withConfig({
  displayName: "PortfolioItemstyles__Link",
  componentId: "sc-1dja8b3-4"
})(["color:white;font-style:italic;:hover{& > img{filter:sepia(50%) contrast(50%) saturate(100%) hue-rotate(100deg);}}"]);
// CONCATENATED MODULE: ./components/PortfolioItem/PortfolioItem.js
var __jsx = external_react_default.a.createElement;



const PortfolioItem = ({
  url,
  newimage,
  title,
  description
}) => __jsx(PortfolioItemWrapper, null, __jsx(Link, {
  href: url
}, __jsx(Image, {
  src: newimage && newimage.file.url,
  alt: newimage && newimage.altText
})), __jsx(Content, null, __jsx(Title, null, title), description, __jsx(Link, {
  href: url
}, url)));

PortfolioItem.defaultProps = {
  title: 'Portfolio Item Title',
  description: '',
  url: ''
};
/* harmony default export */ var PortfolioItem_PortfolioItem = (PortfolioItem);
// EXTERNAL MODULE: ./adapters/contentful/contentful.adapters.js
var contentful_adapters = __webpack_require__("I7jp");

// CONCATENATED MODULE: ./pages/portfolio.js
var portfolio_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const PortfolioWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "portfolio__PortfolioWrapper",
  componentId: "sc-1fk1ovz-0"
})(["text-align:center;"]);
const PortfolioItemsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "portfolio__PortfolioItemsWrapper",
  componentId: "sc-1fk1ovz-1"
})(["display:flex;flex-direction:column;align-items:center;"]);

class portfolio_Portfolio extends external_react_["Component"] {
  static async getInitialProps() {
    const portfolioItems = await Object(contentful_adapters["getPortfolioItems"])();
    return {
      portfolioItems: portfolioItems.data.portfolioItemCollection.items
    };
  }

  render() {
    const {
      portfolioItems
    } = this.props;
    return portfolio_jsx(Layout["a" /* default */], {
      pageTitle: 'ACE: Portfolio',
      secondary: true
    }, portfolio_jsx(PortfolioWrapper, null, portfolio_jsx(H1["a" /* default */], {
      title: "Portfolio",
      color: '#E61E32'
    }), portfolio_jsx(PortfolioItemsWrapper, null, portfolioItems.map(item => portfolio_jsx(PortfolioItem_PortfolioItem, _extends({
      key: item.sys.id
    }, item))))));
  }

}

/* harmony default export */ var portfolio = __webpack_exports__["default"] = (portfolio_Portfolio);

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

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "pSYS":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ })

/******/ });