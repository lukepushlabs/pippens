"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[creator]",{

/***/ "./src/pages/[creator].js":
/*!********************************!*\
  !*** ./src/pages/[creator].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Meta */ \"./src/components/Meta.js\");\n/* harmony import */ var components_HeroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/HeroSection */ \"./src/components/HeroSection.js\");\n/* harmony import */ var components_ClientsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ClientsSection */ \"./src/components/ClientsSection.js\");\n/* harmony import */ var components_FeaturesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/FeaturesSection */ \"./src/components/FeaturesSection.js\");\n/* harmony import */ var components_TestimonialsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/TestimonialsSection */ \"./src/components/TestimonialsSection.js\");\n/* harmony import */ var components_NewsletterSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/NewsletterSection */ \"./src/components/NewsletterSection.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction CreatorPage(param) {\n    var stars = param.stars, creator = param.creator;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(components_Meta__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/pages/[creator].js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/pages/[creator].js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Test- \",\n                    creator\n                ]\n            })\n        ]\n    }));\n}\n_c = CreatorPage;\nCreatorPage.getInitialProps = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n    var res, json;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch('https://api.github.com/repos/vercel/next.js');\n            case 2:\n                res = _ctx.sent;\n                _ctx.next = 5;\n                return res.json();\n            case 5:\n                json = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    stars: json.stargazers_count\n                });\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatorPage);\nvar _c;\n$RefreshReg$(_c, \"CreatorPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2NyZWF0b3JdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUztBQUNjO0FBQ007QUFDRTtBQUNRO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVuRE8sV0FBVyxDQUFDLEtBQWdCLEVBQUUsQ0FBQztRQUFsQkMsS0FBSyxHQUFOLEtBQWdCLENBQWZBLEtBQUssRUFBRUMsT0FBTyxHQUFmLEtBQWdCLENBQVJBLE9BQU87SUFDbEMsTUFBTTs7aUZBRURSLHVEQUFJOzs7Ozs7OztrRkFDSlMsQ0FBRTs7Ozs7Ozs7b0JBQUMsQ0FBTTtvQkFBQ0QsT0FBTzs7Ozs7QUFHeEIsQ0FBQztLQVBRRixXQUFXO0FBU3BCQSxXQUFXLENBQUNJLGVBQWUscUZBQUcsUUFBUSxTQUFEQyxHQUFHLEVBQUssQ0FBQztRQUN0Q0MsR0FBRyxFQUNIQyxJQUFJOzs7Ozt1QkFEUUMsS0FBSyxDQUFDLENBQTZDOztnQkFBL0RGLEdBQUc7O3VCQUNVQSxHQUFHLENBQUNDLElBQUk7O2dCQUFyQkEsSUFBSTs2Q0FDSCxDQUFDO29CQUFDTixLQUFLLEVBQUVNLElBQUksQ0FBQ0UsZ0JBQWdCO2dCQUFDLENBQUM7Ozs7OztBQUN6QyxDQUFDO0FBRUQsK0RBQWVULFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW2NyZWF0b3JdLmpzPzE0N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1ldGEgZnJvbSBcImNvbXBvbmVudHMvTWV0YVwiO1xuaW1wb3J0IEhlcm9TZWN0aW9uIGZyb20gXCJjb21wb25lbnRzL0hlcm9TZWN0aW9uXCI7XG5pbXBvcnQgQ2xpZW50c1NlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvQ2xpZW50c1NlY3Rpb25cIjtcbmltcG9ydCBGZWF0dXJlc1NlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvRmVhdHVyZXNTZWN0aW9uXCI7XG5pbXBvcnQgVGVzdGltb25pYWxzU2VjdGlvbiBmcm9tIFwiY29tcG9uZW50cy9UZXN0aW1vbmlhbHNTZWN0aW9uXCI7XG5pbXBvcnQgTmV3c2xldHRlclNlY3Rpb24gZnJvbSBcImNvbXBvbmVudHMvTmV3c2xldHRlclNlY3Rpb25cIjtcblxuZnVuY3Rpb24gQ3JlYXRvclBhZ2Uoe3N0YXJzLCBjcmVhdG9yfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWV0YSAvPlxuICAgICAgPGgxPlRlc3QtIHtjcmVhdG9yfTwvaDE+XG4gICAgPC8+XG4gICk7XG59XG5cbkNyZWF0b3JQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdmVyY2VsL25leHQuanMnKVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4geyBzdGFyczoganNvbi5zdGFyZ2F6ZXJzX2NvdW50IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRvclBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNZXRhIiwiSGVyb1NlY3Rpb24iLCJDbGllbnRzU2VjdGlvbiIsIkZlYXR1cmVzU2VjdGlvbiIsIlRlc3RpbW9uaWFsc1NlY3Rpb24iLCJOZXdzbGV0dGVyU2VjdGlvbiIsIkNyZWF0b3JQYWdlIiwic3RhcnMiLCJjcmVhdG9yIiwiaDEiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJqc29uIiwiZmV0Y2giLCJzdGFyZ2F6ZXJzX2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[creator].js\n");

/***/ })

});