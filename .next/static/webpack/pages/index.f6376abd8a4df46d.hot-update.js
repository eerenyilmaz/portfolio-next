/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/views/Footer.jsx":
/*!******************************!*\
  !*** ./src/views/Footer.jsx ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/views/HomePage.jsx":
/*!********************************!*\
  !*** ./src/views/HomePage.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostCard */ \"./src/components/PostCard.jsx\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHeader */ \"./src/components/PageHeader.jsx\");\n/* harmony import */ var _AboutPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutPage */ \"./src/views/AboutPage.jsx\");\n/* harmony import */ var _pages_interest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/interest */ \"./pages/interest/index.jsx\");\n/* harmony import */ var _pages_resume__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/resume */ \"./pages/resume/index.jsx\");\n/* harmony import */ var _pages_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/portfolio */ \"./pages/portfolio/index.jsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ \"./src/views/Footer.jsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Footer__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col mx-auto max-w-screen-lg px-4 md:px-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/erenyilmaz/Desktop/react/portfolio-next/src/views/HomePage.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_interest__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/erenyilmaz/Desktop/react/portfolio-next/src/views/HomePage.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_resume__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/erenyilmaz/Desktop/react/portfolio-next/src/views/HomePage.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_portfolio__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/erenyilmaz/Desktop/react/portfolio-next/src/views/HomePage.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Footer__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {\n                fileName: \"/Users/erenyilmaz/Desktop/react/portfolio-next/src/views/HomePage.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/erenyilmaz/Desktop/react/portfolio-next/src/views/HomePage.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvSG9tZVBhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNLO0FBQ2xCO0FBQ1M7QUFDRDtBQUNNO0FBQ2pCO0FBRWQsU0FBU08sV0FBVztJQUVqQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNQLGtEQUFLQTs7Ozs7MEJBRU4sOERBQUNDLHVEQUFLQTs7Ozs7MEJBRU4sOERBQUNDLHFEQUFNQTs7Ozs7MEJBRVAsOERBQUNDLHdEQUFTQTs7Ozs7MEJBRVYsOERBQUNDLGdEQUFNQTs7Ozs7Ozs7Ozs7QUFhYixDQUFDO0tBMUJ1QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0hvbWVQYWdlLmpzeD9lOTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vQWJvdXRQYWdlXCI7XG5pbXBvcnQgVGVhbXMgZnJvbSBcIi4uLy4uL3BhZ2VzL2ludGVyZXN0XCI7XG5pbXBvcnQgUmVzdW1lIGZyb20gXCIuLi8uLi9wYWdlcy9yZXN1bWVcIjtcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4uLy4uL3BhZ2VzL3BvcnRmb2xpb1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG14LWF1dG8gbWF4LXctc2NyZWVuLWxnIHB4LTQgbWQ6cHgtMFwiPlxuXG4gICAgICA8QWJvdXQgLz5cblxuICAgICAgPFRlYW1zIC8+XG5cbiAgICAgIDxSZXN1bWUgLz5cblxuICAgICAgPFBvcnRmb2xpbyAvPlxuXG4gICAgICA8Rm9vdGVyIC8+XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgPFBvc3RDYXJkIGhlYWRlcj17XCJIZWFkZXIgMVwifSBpZD17MH0gZGVzY3JpcHRpb249e1wiSGVyZSBhcmUgdGhlIGJpZ2dlc3QgZW50ZXJwcmlzZSB0ZWNobm9sb2d5IGFjcXVpc2l0aW9ucyBvZiAyMDIxIHNvIGZhciwgaW4gcmV2ZXJzZSBjaHJvbm9sb2dpY2FsIG9yZGVyLlwifS8+XG4gICAgICAgIDxQb3N0Q2FyZCBoZWFkZXI9e1wiSGVhZGVyIDJcIn0gaWQ9ezF9IGRlc2NyaXB0aW9uPXtcIkV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW1cIn0vPlxuICAgICAgICA8UG9zdENhcmQgaGVhZGVyPXtcIkhlYWRlciAzXCJ9IGlkPXsyfSBkZXNjcmlwdGlvbj17XCJEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cIn0vPlxuICAgICAgICA8UG9zdENhcmQgaGVhZGVyPXtcIkhlYWRlciA0XCJ9IGlkPXszfSBkZXNjcmlwdGlvbj17XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIn0vPlxuICAgICAgICA8UG9zdENhcmQgaGVhZGVyPXtcIkhlYWRlciA1XCJ9IGlkPXs0fSBkZXNjcmlwdGlvbj17XCJIZXJlIGFyZSB0aGUgYmlnZ2VzdCBlbnRlcnByaXNlIHRlY2hub2xvZ3kgYWNxdWlzaXRpb25zIG9mIDIwMjEgc28gZmFyLlwifS8+XG5cbiAgICAgIDwvZGl2PiAqL31cblxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsIlBhZ2VIZWFkZXIiLCJBYm91dCIsIlRlYW1zIiwiUmVzdW1lIiwiUG9ydGZvbGlvIiwiRm9vdGVyIiwiSG9tZVBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/HomePage.jsx\n"));

/***/ })

});