"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/util/auth.js":
/*!**************************!*\
  !*** ./src/util/auth.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; },\n/* harmony export */   \"requireAuth\": function() { return /* binding */ requireAuth; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n/*\n  This file (auth.js) is added to your codebase if you chose \"None\" for your\n  auth provider when exporting from Divjoy, but some of you components attempt \n  to import auth.js and use the useAuth() hook. Rather than break your site, \n  we include this file and just just throw errors when auth methods (auth.signup, auth.signin, etc) are used. \n  To entirely remove auth from your codebase search for \"auth\" and remove all related code.\n*/ var useAuth = function() {\n    return {\n        user: false,\n        signup: errorFunction,\n        signin: errorFunction,\n        signinWithProvider: errorFunction,\n        signout: errorFunction,\n        sendPasswordResetEmail: errorFunction,\n        confirmPasswordReset: errorFunction,\n        updatePassword: errorFunction,\n        updateProfile: errorFunction\n    };\n};\nvar errorMessage = \"Authentication is disabled because you chose \\\"None\\\" when picking an authentication option in Divjoy. Please go to the Divjoy homepage and choose an option or choose \\\"Other\\\" if you'd like to integrate a different auth service after code export.\";\nvar errorFunction = function() {\n    return Promise.reject(new Error(errorMessage));\n};\nvar requireAuth = function(Component) {\n    var _s = $RefreshSig$();\n    return _s(function(props) {\n        _s();\n        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        //router.replace(\"/auth/signin\");\n        }, []);\n        return null;\n    }, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDUjtBQUVoQyxFQU1FOzs7Ozs7QUFBQSxHQUVLLEdBQUssQ0FBQ0csT0FBTyxHQUFHLFFBQ3ZCLEdBRDZCLENBQUM7SUFDNUIsTUFBTSxDQUFDLENBQUM7UUFDTkMsSUFBSSxFQUFFLEtBQUs7UUFDWEMsTUFBTSxFQUFFQyxhQUFhO1FBQ3JCQyxNQUFNLEVBQUVELGFBQWE7UUFDckJFLGtCQUFrQixFQUFFRixhQUFhO1FBQ2pDRyxPQUFPLEVBQUVILGFBQWE7UUFDdEJJLHNCQUFzQixFQUFFSixhQUFhO1FBQ3JDSyxvQkFBb0IsRUFBRUwsYUFBYTtRQUNuQ00sY0FBYyxFQUFFTixhQUFhO1FBQzdCTyxhQUFhLEVBQUVQLGFBQWE7SUFDOUIsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNRLFlBQVksR0FBSSxDQUFtUDtBQUN6USxHQUFLLENBQUNSLGFBQWEsR0FBRyxRQUFRO0lBQUZTLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUNILFlBQVk7O0FBRTFELEdBQUssQ0FBQ0ksV0FBVyxHQUFHLFFBQVEsQ0FBUEMsU0FBUyxFQUFLLENBQUM7O0lBQ3pDLE1BQU0sSUFBQyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztRQUNqQm5CLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2YsRUFBaUM7UUFDbkMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNMLE1BQU0sQ0FBQyxJQUFJO0lBQ2IsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWwvYXV0aC5qcz9lODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8qXG4gIFRoaXMgZmlsZSAoYXV0aC5qcykgaXMgYWRkZWQgdG8geW91ciBjb2RlYmFzZSBpZiB5b3UgY2hvc2UgXCJOb25lXCIgZm9yIHlvdXJcbiAgYXV0aCBwcm92aWRlciB3aGVuIGV4cG9ydGluZyBmcm9tIERpdmpveSwgYnV0IHNvbWUgb2YgeW91IGNvbXBvbmVudHMgYXR0ZW1wdCBcbiAgdG8gaW1wb3J0IGF1dGguanMgYW5kIHVzZSB0aGUgdXNlQXV0aCgpIGhvb2suIFJhdGhlciB0aGFuIGJyZWFrIHlvdXIgc2l0ZSwgXG4gIHdlIGluY2x1ZGUgdGhpcyBmaWxlIGFuZCBqdXN0IGp1c3QgdGhyb3cgZXJyb3JzIHdoZW4gYXV0aCBtZXRob2RzIChhdXRoLnNpZ251cCwgYXV0aC5zaWduaW4sIGV0YykgYXJlIHVzZWQuIFxuICBUbyBlbnRpcmVseSByZW1vdmUgYXV0aCBmcm9tIHlvdXIgY29kZWJhc2Ugc2VhcmNoIGZvciBcImF1dGhcIiBhbmQgcmVtb3ZlIGFsbCByZWxhdGVkIGNvZGUuXG4qL1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBmYWxzZSxcbiAgICBzaWdudXA6IGVycm9yRnVuY3Rpb24sXG4gICAgc2lnbmluOiBlcnJvckZ1bmN0aW9uLFxuICAgIHNpZ25pbldpdGhQcm92aWRlcjogZXJyb3JGdW5jdGlvbixcbiAgICBzaWdub3V0OiBlcnJvckZ1bmN0aW9uLFxuICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWw6IGVycm9yRnVuY3Rpb24sXG4gICAgY29uZmlybVBhc3N3b3JkUmVzZXQ6IGVycm9yRnVuY3Rpb24sXG4gICAgdXBkYXRlUGFzc3dvcmQ6IGVycm9yRnVuY3Rpb24sXG4gICAgdXBkYXRlUHJvZmlsZTogZXJyb3JGdW5jdGlvbixcbiAgfTtcbn07XG5cbmNvbnN0IGVycm9yTWVzc2FnZSA9IGBBdXRoZW50aWNhdGlvbiBpcyBkaXNhYmxlZCBiZWNhdXNlIHlvdSBjaG9zZSBcIk5vbmVcIiB3aGVuIHBpY2tpbmcgYW4gYXV0aGVudGljYXRpb24gb3B0aW9uIGluIERpdmpveS4gUGxlYXNlIGdvIHRvIHRoZSBEaXZqb3kgaG9tZXBhZ2UgYW5kIGNob29zZSBhbiBvcHRpb24gb3IgY2hvb3NlIFwiT3RoZXJcIiBpZiB5b3UnZCBsaWtlIHRvIGludGVncmF0ZSBhIGRpZmZlcmVudCBhdXRoIHNlcnZpY2UgYWZ0ZXIgY29kZSBleHBvcnQuYDtcbmNvbnN0IGVycm9yRnVuY3Rpb24gPSAoKSA9PiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKSk7XG5cbmV4cG9ydCBjb25zdCByZXF1aXJlQXV0aCA9IChDb21wb25lbnQpID0+IHtcbiAgcmV0dXJuIChwcm9wcykgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAvL3JvdXRlci5yZXBsYWNlKFwiL2F1dGgvc2lnbmluXCIpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJyb3V0ZXIiLCJ1c2VBdXRoIiwidXNlciIsInNpZ251cCIsImVycm9yRnVuY3Rpb24iLCJzaWduaW4iLCJzaWduaW5XaXRoUHJvdmlkZXIiLCJzaWdub3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQcm9maWxlIiwiZXJyb3JNZXNzYWdlIiwiUHJvbWlzZSIsInJlamVjdCIsIkVycm9yIiwicmVxdWlyZUF1dGgiLCJDb21wb25lbnQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/auth.js\n");

/***/ })

});