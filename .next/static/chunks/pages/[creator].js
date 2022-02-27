/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/[creator]"],{

/***/ "./src/components/Meta.js":
/*!********************************!*\
  !*** ./src/components/Meta.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {\n    };\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {\n    };\n    var target = {\n    };\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Meta(props) {\n    _s();\n    var children = props.children, customPageMeta = _objectWithoutProperties(props, [\n        \"children\"\n    ]);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // Meta values that are the same across all pages\n    var globalMeta = {\n        // Site name\n        siteName: \"My App\",\n        // Your production domain (example: https://myapp.com)\n        domain: \"\",\n        // Your Twitter handle (example: @divjoy)\n        twitterHandle: \"\"\n    };\n    // Default meta values for current page (override with props)\n    var defaultPageMeta = {\n        // Page title\n        title: \"My App\",\n        // Page description\n        description: \"My app description\",\n        // Social share image (create this file in /public/images/)\n        image: \"/images/social.png\",\n        // Page type (see https://ogp.me/#types)\n        type: \"website\"\n    };\n    // Construct meta object from global, default, and custom meta\n    var meta = _objectSpread({\n    }, globalMeta, defaultPageMeta, customPageMeta);\n    // Note: Each tag should have a unique `key` so that they are de-deduped if other\n    // `Meta` components are rendered on the same page or within nested components.\n    // prettier-ignore\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        __source: {\n            fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: meta.title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                content: meta.description,\n                name: \"description\",\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                },\n                __self: this\n            }, \"description\"),\n            meta.domain && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                rel: \"canonical\",\n                href: \"\".concat(meta.domain).concat(router.asPath),\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 41,\n                    columnNumber: 23\n                },\n                __self: this\n            }, \"canonical\"),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:title\",\n                content: meta.title,\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: this\n            }, \"og-title\"),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:description\",\n                content: meta.description,\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                },\n                __self: this\n            }, \"og-description\"),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:site_name\",\n                content: meta.siteName,\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                },\n                __self: this\n            }, \"og-site-name\"),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:type\",\n                content: \"website\",\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                },\n                __self: this\n            }, \"og-type\"),\n            meta.domain && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:url\",\n                content: \"\".concat(meta.domain).concat(router.asPath),\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 48,\n                    columnNumber: 23\n                },\n                __self: this\n            }, \"og-url\"),\n            meta.domain && meta.image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                property: \"og:image\",\n                content: \"\".concat(meta.domain).concat(meta.image),\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 49,\n                    columnNumber: 37\n                },\n                __self: this\n            }, \"og-image\"),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                name: \"twitter:title\",\n                content: meta.title,\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                },\n                __self: this\n            }, \"twitter-title\"),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                name: \"twitter:description\",\n                content: meta.description,\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                },\n                __self: this\n            }, \"twitter-description\"),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                name: \"twitter:card\",\n                content: \"summary_large_image\",\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                },\n                __self: this\n            }, \"twitter-card\"),\n            meta.twitterHandle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                name: \"twitter:site\",\n                content: meta.twitterHandle,\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 55,\n                    columnNumber: 30\n                },\n                __self: this\n            }, \"twitter-site\"),\n            meta.domain && meta.image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                name: \"twitter:image\",\n                content: \"\".concat(meta.domain).concat(meta.image),\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/components/Meta.js\",\n                    lineNumber: 56,\n                    columnNumber: 37\n                },\n                __self: this\n            }, \"twitter-image\")\n        ]\n    }));\n}\n_s(Meta, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Meta;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meta);\nvar _c;\n$RefreshReg$(_c, \"Meta\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFDbEVJLENBQUk7Z0JBQUNFLElBQUksRUFBQyxDQUFxQjtnQkFBQ0QsT0FBTyxFQUFFRCxJQUFJLENBQUNILFdBQVc7Ozs7Ozs7ZUFBTSxDQUFxQjtpRkFDcEZHLENBQUk7Z0JBQUNFLElBQUksRUFBQyxDQUFjO2dCQUFDRCxPQUFPLEVBQUMsQ0FBcUI7Ozs7Ozs7ZUFBSyxDQUFjO1lBQ3pFRCxJQUFJLENBQUNOLGFBQWEseUVBQUtNLENBQUk7Z0JBQUNFLElBQUksRUFBQyxDQUFjO2dCQUFDRCxPQUFPLEVBQUVELElBQUksQ0FBQ04sYUFBYTs7Ozs7OztlQUFNLENBQWM7WUFDL0ZNLElBQUksQ0FBQ1AsTUFBTSxJQUFJTyxJQUFJLENBQUNGLEtBQUsseUVBQUtFLENBQUk7Z0JBQUNFLElBQUksRUFBQyxDQUFlO2dCQUFDRCxPQUFPLEVBQUcsR0FBZ0JELE1BQVUsQ0FBeEJBLElBQUksQ0FBQ1AsTUFBTSxFQUFjLE9BQVhPLElBQUksQ0FBQ0YsS0FBSzs7Ozs7OztlQUFRLENBQWU7OztBQUcxSCxDQUFDO0dBdERRWixJQUFJOztRQUVJRCxrREFBUzs7O0tBRmpCQyxJQUFJO0FBd0RiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWV0YS5qcz80ZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBNZXRhKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLmN1c3RvbVBhZ2VNZXRhIH0gPSBwcm9wcztcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gTWV0YSB2YWx1ZXMgdGhhdCBhcmUgdGhlIHNhbWUgYWNyb3NzIGFsbCBwYWdlc1xuICBjb25zdCBnbG9iYWxNZXRhID0ge1xuICAgIC8vIFNpdGUgbmFtZVxuICAgIHNpdGVOYW1lOiBcIk15IEFwcFwiLFxuICAgIC8vIFlvdXIgcHJvZHVjdGlvbiBkb21haW4gKGV4YW1wbGU6IGh0dHBzOi8vbXlhcHAuY29tKVxuICAgIGRvbWFpbjogXCJcIixcbiAgICAvLyBZb3VyIFR3aXR0ZXIgaGFuZGxlIChleGFtcGxlOiBAZGl2am95KVxuICAgIHR3aXR0ZXJIYW5kbGU6IFwiXCIsXG4gIH07XG5cbiAgLy8gRGVmYXVsdCBtZXRhIHZhbHVlcyBmb3IgY3VycmVudCBwYWdlIChvdmVycmlkZSB3aXRoIHByb3BzKVxuICBjb25zdCBkZWZhdWx0UGFnZU1ldGEgPSB7XG4gICAgLy8gUGFnZSB0aXRsZVxuICAgIHRpdGxlOiBcIk15IEFwcFwiLFxuICAgIC8vIFBhZ2UgZGVzY3JpcHRpb25cbiAgICBkZXNjcmlwdGlvbjogXCJNeSBhcHAgZGVzY3JpcHRpb25cIixcbiAgICAvLyBTb2NpYWwgc2hhcmUgaW1hZ2UgKGNyZWF0ZSB0aGlzIGZpbGUgaW4gL3B1YmxpYy9pbWFnZXMvKVxuICAgIGltYWdlOiBcIi9pbWFnZXMvc29jaWFsLnBuZ1wiLFxuICAgIC8vIFBhZ2UgdHlwZSAoc2VlIGh0dHBzOi8vb2dwLm1lLyN0eXBlcylcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgfTtcblxuICAvLyBDb25zdHJ1Y3QgbWV0YSBvYmplY3QgZnJvbSBnbG9iYWwsIGRlZmF1bHQsIGFuZCBjdXN0b20gbWV0YVxuICBjb25zdCBtZXRhID0geyAuLi5nbG9iYWxNZXRhLCAuLi5kZWZhdWx0UGFnZU1ldGEsIC4uLmN1c3RvbVBhZ2VNZXRhIH07XG5cbiAgLy8gTm90ZTogRWFjaCB0YWcgc2hvdWxkIGhhdmUgYSB1bmlxdWUgYGtleWAgc28gdGhhdCB0aGV5IGFyZSBkZS1kZWR1cGVkIGlmIG90aGVyXG4gIC8vIGBNZXRhYCBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2FtZSBwYWdlIG9yIHdpdGhpbiBuZXN0ZWQgY29tcG9uZW50cy5cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e21ldGEudGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIGtleT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgIHttZXRhLmRvbWFpbiAmJiA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHttZXRhLmRvbWFpbn0ke3JvdXRlci5hc1BhdGh9YH0ga2V5PVwiY2Fub25pY2FsXCIgLz59XG5cbiAgICAgIHsvKiBPcGVuIEdyYXBoICovfVxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IGtleT1cIm9nLXRpdGxlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSBrZXk9XCJvZy1kZXNjcmlwdGlvblwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e21ldGEuc2l0ZU5hbWV9IGtleT1cIm9nLXNpdGUtbmFtZVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIGtleT1cIm9nLXR5cGVcIiAvPlxuICAgICAge21ldGEuZG9tYWluICYmIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YCR7bWV0YS5kb21haW59JHtyb3V0ZXIuYXNQYXRofWB9IGtleT1cIm9nLXVybFwiIC8+fVxuICAgICAge21ldGEuZG9tYWluICYmIG1ldGEuaW1hZ2UgJiYgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake21ldGEuZG9tYWlufSR7bWV0YS5pbWFnZX1gfSBrZXk9XCJvZy1pbWFnZVwiIC8+fVxuXG4gICAgICB7LyogVHdpdHRlciAqL31cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17bWV0YS50aXRsZX0ga2V5PVwidHdpdHRlci10aXRsZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IGtleT1cInR3aXR0ZXItZGVzY3JpcHRpb25cIi8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiBrZXk9XCJ0d2l0dGVyLWNhcmRcIiAvPlxuICAgICAge21ldGEudHdpdHRlckhhbmRsZSAmJiA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD17bWV0YS50d2l0dGVySGFuZGxlfSBrZXk9XCJ0d2l0dGVyLXNpdGVcIiAvPn1cbiAgICAgIHttZXRhLmRvbWFpbiAmJiBtZXRhLmltYWdlICYmIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17YCR7bWV0YS5kb21haW59JHttZXRhLmltYWdlfWB9IGtleT1cInR3aXR0ZXItaW1hZ2VcIiAvPn1cbiAgICA8L0hlYWQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGE7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwidXNlUm91dGVyIiwiTWV0YSIsInByb3BzIiwiY2hpbGRyZW4iLCJjdXN0b21QYWdlTWV0YSIsInJvdXRlciIsImdsb2JhbE1ldGEiLCJzaXRlTmFtZSIsImRvbWFpbiIsInR3aXR0ZXJIYW5kbGUiLCJkZWZhdWx0UGFnZU1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0eXBlIiwibWV0YSIsImNvbnRlbnQiLCJuYW1lIiwibGluayIsInJlbCIsImhyZWYiLCJhc1BhdGgiLCJwcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Meta.js\n");

/***/ }),

/***/ "./src/pages/[creator].js":
/*!********************************!*\
  !*** ./src/pages/[creator].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Meta */ \"./src/components/Meta.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction CreatorPage(param) {\n    var creator = param.creator;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(components_Meta__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/pages/[creator].js\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/luke/Documents/pips/src/pages/[creator].js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Test-\",\n                    creator\n                ]\n            })\n        ]\n    }));\n}\n_c = CreatorPage;\nCreatorPage.getInitialProps = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n    var creator, res, json;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                creator = ctx.query.creator;\n                _ctx.next = 3;\n                return fetch('https://api.github.com/repos/vercel/next.js');\n            case 3:\n                res = _ctx.sent;\n                _ctx.next = 6;\n                return res.json();\n            case 6:\n                json = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    stars: json.stargazers_count,\n                    creator: creator\n                });\n            case 8:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatorPage);\nvar _c;\n$RefreshReg$(_c, \"CreatorPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2NyZWF0b3JdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUV6QkUsV0FBVyxDQUFDLEtBQVMsRUFBRSxDQUFDO1FBQVhDLE9BQU8sR0FBUixLQUFTLENBQVJBLE9BQU87SUFDM0IsTUFBTTs7aUZBRURGLHVEQUFJOzs7Ozs7OztrRkFDSkcsQ0FBRTs7Ozs7Ozs7b0JBQUMsQ0FBSztvQkFBQ0QsT0FBTzs7Ozs7QUFHdkIsQ0FBQztLQVBRRCxXQUFXO0FBU3BCQSxXQUFXLENBQUNHLGVBQWUscUZBQUcsUUFBUSxTQUFEQyxHQUFHLEVBQUssQ0FBQztRQUN4Q0gsT0FBTyxFQUNMSSxHQUFHLEVBQ0hDLElBQUk7Ozs7Z0JBRk5MLE9BQU8sR0FBR0csR0FBRyxDQUFDRyxLQUFLLENBQUNOLE9BQU87O3VCQUNiTyxLQUFLLENBQUMsQ0FBNkM7O2dCQUEvREgsR0FBRzs7dUJBQ1VBLEdBQUcsQ0FBQ0MsSUFBSTs7Z0JBQXJCQSxJQUFJOzZDQUNILENBQUM7b0JBQUNHLEtBQUssRUFBRUgsSUFBSSxDQUFDSSxnQkFBZ0I7b0JBQUVULE9BQU8sRUFBUEEsT0FBTztnQkFBQSxDQUFDOzs7Ozs7QUFDakQsQ0FBQztBQUVELCtEQUFlRCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tjcmVhdG9yXS5qcz8xNDdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZXRhIGZyb20gXCJjb21wb25lbnRzL01ldGFcIjtcblxuZnVuY3Rpb24gQ3JlYXRvclBhZ2Uoe2NyZWF0b3J9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZXRhIC8+XG4gICAgICA8aDE+VGVzdC17Y3JlYXRvcn08L2gxPlxuICAgIDwvPlxuICApO1xufVxuXG5DcmVhdG9yUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGxldCBjcmVhdG9yID0gY3R4LnF1ZXJ5LmNyZWF0b3I7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3ZlcmNlbC9uZXh0LmpzJylcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgcmV0dXJuIHsgc3RhcnM6IGpzb24uc3RhcmdhemVyc19jb3VudCwgY3JlYXRvcn07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0b3JQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWV0YSIsIkNyZWF0b3JQYWdlIiwiY3JlYXRvciIsImgxIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwianNvbiIsInF1ZXJ5IiwiZmV0Y2giLCJzdGFycyIsInN0YXJnYXplcnNfY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[creator].js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F%5Bcreator%5D&absolutePagePath=%2FUsers%2Fluke%2FDocuments%2Fpips%2Fsrc%2Fpages%2F%5Bcreator%5D.js!":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F%5Bcreator%5D&absolutePagePath=%2FUsers%2Fluke%2FDocuments%2Fpips%2Fsrc%2Fpages%2F%5Bcreator%5D.js! ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/[creator]\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/[creator].js */ \"./src/pages/[creator].js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/[creator]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYlNUJjcmVhdG9yJTVEJmFic29sdXRlUGFnZVBhdGg9JTJGVXNlcnMlMkZsdWtlJTJGRG9jdW1lbnRzJTJGcGlwcyUyRnNyYyUyRnBhZ2VzJTJGJTVCY3JlYXRvciU1RC5qcyEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwREFBbUQ7QUFDMUU7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzJjY2IiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9bY3JlYXRvcl1cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIvVXNlcnMvbHVrZS9Eb2N1bWVudHMvcGlwcy9zcmMvcGFnZXMvW2NyZWF0b3JdLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9bY3JlYXRvcl1cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F%5Bcreator%5D&absolutePagePath=%2FUsers%2Fluke%2FDocuments%2Fpips%2Fsrc%2Fpages%2F%5Bcreator%5D.js!\n");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F%5Bcreator%5D&absolutePagePath=%2FUsers%2Fluke%2FDocuments%2Fpips%2Fsrc%2Fpages%2F%5Bcreator%5D.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);