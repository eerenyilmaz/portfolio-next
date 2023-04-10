"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/interest";
exports.ids = ["pages/interest"];
exports.modules = {

/***/ "./pages/interest/index.jsx":
/*!**********************************!*\
  !*** ./pages/interest/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Teams)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/PageHeader */ \"./src/components/PageHeader.jsx\");\n/* harmony import */ var _src_components_TeamDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/TeamDetail */ \"./src/components/TeamDetail.jsx\");\n/* harmony import */ var _src_components_SkillsImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/SkillsImage */ \"./src/components/SkillsImage.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Teams() {\n    const [teamStatus, setTeamStatus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const logoGS = ()=>{\n        setTeamStatus(1);\n    };\n    const logoArsenal = ()=>{\n        setTeamStatus(2);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-screen-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Interests\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-600 relative inline-block mb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-xl relative text-white\",\n                            children: \"Teams Supported\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between gap-x-1 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://upload.wikimedia.org/wikipedia/commons/7/79/Galatasaray_4_Sterne_Logo.svg\",\n                                width: 100,\n                                className: \"self-start cursor-pointer hover:scale-110 transition\",\n                                onClick: logoGS\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://upload.wikimedia.org/wikipedia/tr/9/92/Arsenal_Football_Club.png\",\n                                width: 100,\n                                className: \"self-end cursor-pointer hover:scale-110 transition\",\n                                onClick: logoArsenal\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_TeamDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        status: teamStatus\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-600 relative inline-block mb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-xl relative text-white\",\n                            children: \"Skills\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-4 gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SkillsImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                path: \"../logo192.png\",\n                                name: \"HTML\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SkillsImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                path: \"../logo192.png\",\n                                name: \"CSS\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SkillsImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                path: \"../logo192.png\",\n                                name: \"Bootstrap\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SkillsImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                path: \"../logo192.png\",\n                                name: \"Tailwind CSS\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SkillsImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                path: \"../logo192.png\",\n                                name: \"Javascript\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SkillsImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                path: \"../logo192.png\",\n                                name: \"JQuery\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SkillsImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                path: \"../logo192.png\",\n                                name: \"React\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SkillsImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                path: \"../logo192.png\",\n                                name: \"Next.js\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\pages\\\\interest\\\\index.jsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnRlcmVzdC9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ0E7QUFDRTtBQUMxQjtBQUVsQixTQUFTSSxRQUFRO0lBRTlCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNSSxTQUFTLElBQU07UUFDbkJELGNBQWM7SUFDaEI7SUFFQSxNQUFNRSxjQUFjLElBQU07UUFDeEJGLGNBQWM7SUFDaEI7SUFDRSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNWLGtFQUFVQTtnQkFBQ1csT0FBTzs7Ozs7OzBCQUVuQiw4REFBQ0Y7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FDZCw0RUFBQ0U7NEJBQUtGLFdBQVU7c0NBQThCOzs7Ozs7Ozs7OztrQ0FHaEQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUlDLEtBQUk7Z0NBQW9GQyxPQUFPO2dDQUFLTCxXQUFVO2dDQUF1RE0sU0FBU1Q7Ozs7OzswQ0FFbkwsOERBQUNNO2dDQUFJQyxLQUFJO2dDQUEyRUMsT0FBTztnQ0FBS0wsV0FBVTtnQ0FBcURNLFNBQVNSOzs7Ozs7Ozs7Ozs7a0NBRzFLLDhEQUFDUCxrRUFBVUE7d0JBQUNnQixRQUFRWjs7Ozs7Ozs7Ozs7OzBCQUt0Qiw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FDZCw0RUFBQ0U7NEJBQUtGLFdBQVU7c0NBQThCOzs7Ozs7Ozs7OztrQ0FHaEQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1IsbUVBQVdBO2dDQUFDZ0IsTUFBTTtnQ0FBa0JDLE1BQU07Ozs7OzswQ0FDM0MsOERBQUNqQixtRUFBV0E7Z0NBQUNnQixNQUFNO2dDQUFrQkMsTUFBTTs7Ozs7OzBDQUMzQyw4REFBQ2pCLG1FQUFXQTtnQ0FBQ2dCLE1BQU07Z0NBQWtCQyxNQUFNOzs7Ozs7MENBQzNDLDhEQUFDakIsbUVBQVdBO2dDQUFDZ0IsTUFBTTtnQ0FBa0JDLE1BQU07Ozs7OzswQ0FDM0MsOERBQUNqQixtRUFBV0E7Z0NBQUNnQixNQUFNO2dDQUFrQkMsTUFBTTs7Ozs7OzBDQUMzQyw4REFBQ2pCLG1FQUFXQTtnQ0FBQ2dCLE1BQU07Z0NBQWtCQyxNQUFNOzs7Ozs7MENBQzNDLDhEQUFDakIsbUVBQVdBO2dDQUFDZ0IsTUFBTTtnQ0FBa0JDLE1BQU07Ozs7OzswQ0FDM0MsOERBQUNqQixtRUFBV0E7Z0NBQUNnQixNQUFNO2dDQUFrQkMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tbmV4dC8uL3BhZ2VzL2ludGVyZXN0L2luZGV4LmpzeD8yY2ZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9QYWdlSGVhZGVyXCI7XHJcbmltcG9ydCBUZWFtRGV0YWlsIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9UZWFtRGV0YWlsXCI7XHJcbmltcG9ydCBJbWFnZVNraWxscyBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2tpbGxzSW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1zKCkge1xyXG5cclxuICBjb25zdCBbdGVhbVN0YXR1cywgc2V0VGVhbVN0YXR1c10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBsb2dvR1MgPSAoKSA9PiB7XHJcbiAgICBzZXRUZWFtU3RhdHVzKDEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dvQXJzZW5hbCA9ICgpID0+IHtcclxuICAgIHNldFRlYW1TdGF0dXMoMilcclxuICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1tZFwiPlxyXG4gICAgICAgIDxQYWdlSGVhZGVyIHRpdGxlPXtcIkludGVyZXN0c1wifS8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMjBcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJlZm9yZTpibG9jayBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOi1pbnNldC0xIGJlZm9yZTotc2tldy15LTMgYmVmb3JlOmJnLXJlZC02MDAgcmVsYXRpdmUgaW5saW5lLWJsb2NrIG1iLTEwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgcmVsYXRpdmUgdGV4dC13aGl0ZVwiPlRlYW1zIFN1cHBvcnRlZDwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGdhcC14LTEgbWItNFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNy83OS9HYWxhdGFzYXJheV80X1N0ZXJuZV9Mb2dvLnN2Z1wiIHdpZHRoPXsxMDB9IGNsYXNzTmFtZT1cInNlbGYtc3RhcnQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb25cIiBvbkNsaWNrPXtsb2dvR1N9Lz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvdHIvOS85Mi9BcnNlbmFsX0Zvb3RiYWxsX0NsdWIucG5nXCIgd2lkdGg9ezEwMH0gY2xhc3NOYW1lPVwic2VsZi1lbmQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb25cIiBvbkNsaWNrPXtsb2dvQXJzZW5hbH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPFRlYW1EZXRhaWwgc3RhdHVzPXt0ZWFtU3RhdHVzfS8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJlZm9yZTpibG9jayBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOi1pbnNldC0xIGJlZm9yZTotc2tldy15LTMgYmVmb3JlOmJnLXJlZC02MDAgcmVsYXRpdmUgaW5saW5lLWJsb2NrIG1iLTEwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgcmVsYXRpdmUgdGV4dC13aGl0ZVwiPlNraWxsczwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTRcIj5cclxuICAgICAgICAgICAgPEltYWdlU2tpbGxzIHBhdGg9e1wiLi4vbG9nbzE5Mi5wbmdcIn0gbmFtZT17XCJIVE1MXCJ9IC8+XHJcbiAgICAgICAgICAgIDxJbWFnZVNraWxscyBwYXRoPXtcIi4uL2xvZ28xOTIucG5nXCJ9IG5hbWU9e1wiQ1NTXCJ9IC8+XHJcbiAgICAgICAgICAgIDxJbWFnZVNraWxscyBwYXRoPXtcIi4uL2xvZ28xOTIucG5nXCJ9IG5hbWU9e1wiQm9vdHN0cmFwXCJ9IC8+XHJcbiAgICAgICAgICAgIDxJbWFnZVNraWxscyBwYXRoPXtcIi4uL2xvZ28xOTIucG5nXCJ9IG5hbWU9e1wiVGFpbHdpbmQgQ1NTXCJ9IC8+XHJcbiAgICAgICAgICAgIDxJbWFnZVNraWxscyBwYXRoPXtcIi4uL2xvZ28xOTIucG5nXCJ9IG5hbWU9e1wiSmF2YXNjcmlwdFwifSAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VTa2lsbHMgcGF0aD17XCIuLi9sb2dvMTkyLnBuZ1wifSBuYW1lPXtcIkpRdWVyeVwifSAvPlxyXG4gICAgICAgICAgICA8SW1hZ2VTa2lsbHMgcGF0aD17XCIuLi9sb2dvMTkyLnBuZ1wifSBuYW1lPXtcIlJlYWN0XCJ9IC8+XHJcbiAgICAgICAgICAgIDxJbWFnZVNraWxscyBwYXRoPXtcIi4uL2xvZ28xOTIucG5nXCJ9IG5hbWU9e1wiTmV4dC5qc1wifSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9Il0sIm5hbWVzIjpbIlBhZ2VIZWFkZXIiLCJUZWFtRGV0YWlsIiwiSW1hZ2VTa2lsbHMiLCJ1c2VTdGF0ZSIsIlRlYW1zIiwidGVhbVN0YXR1cyIsInNldFRlYW1TdGF0dXMiLCJsb2dvR1MiLCJsb2dvQXJzZW5hbCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic3BhbiIsImltZyIsInNyYyIsIndpZHRoIiwib25DbGljayIsInN0YXR1cyIsInBhdGgiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/interest/index.jsx\n");

/***/ }),

/***/ "./src/components/PageHeader.jsx":
/*!***************************************!*\
  !*** ./src/components/PageHeader.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageHeader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction PageHeader({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-600 relative inline-block mb-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"text-4xl relative text-white\",\n            children: title\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\PageHeader.jsx\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\PageHeader.jsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlSGVhZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWUsU0FBU0EsV0FBVyxFQUFDQyxNQUFLLEVBQUMsRUFBRTtJQUN4QyxxQkFDSSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDWiw0RUFBQ0Q7WUFBS0MsV0FBVTtzQkFBZ0NGOzs7Ozs7Ozs7OztBQUc1RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLW5leHQvLi9zcmMvY29tcG9uZW50cy9QYWdlSGVhZGVyLmpzeD9mNmEyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUhlYWRlcih7dGl0bGV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJlZm9yZTpibG9jayBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOi1pbnNldC0xIGJlZm9yZTotc2tldy15LTMgYmVmb3JlOmJnLXJlZC02MDAgcmVsYXRpdmUgaW5saW5lLWJsb2NrIG1iLTEwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIHJlbGF0aXZlIHRleHQtd2hpdGVcIj57dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJQYWdlSGVhZGVyIiwidGl0bGUiLCJzcGFuIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PageHeader.jsx\n");

/***/ }),

/***/ "./src/components/SkillsImage.jsx":
/*!****************************************!*\
  !*** ./src/components/SkillsImage.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageSkills)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ImageSkills({ path , name  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center hover:scale-110 transition\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: path,\n                width: 100\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\SkillsImage.jsx\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"before:block before:absolute before:-inset-1 before:bg-gray-300 relative inline-block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-m relative text-gray-800 font-semibold\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\SkillsImage.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\SkillsImage.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\SkillsImage.jsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHNJbWFnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVlLFNBQVNBLFlBQVksRUFBQ0MsS0FBSSxFQUFFQyxLQUFJLEVBQUMsRUFBRTtJQUM5QyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFJQyxLQUFLTDtnQkFBTU0sT0FBTzs7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQUtKLFdBQVU7MEJBQ1osNEVBQUNJO29CQUFLSixXQUFVOzhCQUErQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9FLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tbmV4dC8uL3NyYy9jb21wb25lbnRzL1NraWxsc0ltYWdlLmpzeD9hY2Q5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VTa2lsbHMoe3BhdGgsIG5hbWV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3BhdGh9IHdpZHRoPXsxMDB9Lz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmVmb3JlOmJsb2NrIGJlZm9yZTphYnNvbHV0ZSBiZWZvcmU6LWluc2V0LTEgYmVmb3JlOmJnLWdyYXktMzAwIHJlbGF0aXZlIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tIHJlbGF0aXZlIHRleHQtZ3JheS04MDAgZm9udC1zZW1pYm9sZFwiPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkltYWdlU2tpbGxzIiwicGF0aCIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ3aWR0aCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SkillsImage.jsx\n");

/***/ }),

/***/ "./src/components/TeamDetail.jsx":
/*!***************************************!*\
  !*** ./src/components/TeamDetail.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TeamDetail)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction TeamDetail({ status  }) {\n    let detail = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"transition ease-in duration-300\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\TeamDetail.jsx\",\n        lineNumber: 2,\n        columnNumber: 18\n    }, this);\n    if (status == 1) {\n        detail = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"block w-full p-6 bg-white border border-gray-200 rounded-xl shadow transition ease-in duration-300\",\n            children: \"GS\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\TeamDetail.jsx\",\n            lineNumber: 4,\n            columnNumber: 18\n        }, this);\n    } else if (status == 2) {\n        detail = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"block w-full p-6 bg-white border border-gray-200 rounded-lg shadow transition ease-in duration-300\",\n            children: \"Arsenal\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\TeamDetail.jsx\",\n            lineNumber: 6,\n            columnNumber: 18\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"transition ease-in duration-300\",\n        children: detail\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ereny\\\\Desktop\\\\react\\\\portfolio-next\\\\src\\\\components\\\\TeamDetail.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWFtRGV0YWlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsV0FBVyxFQUFDQyxPQUFNLEVBQUMsRUFBQztJQUN4QyxJQUFJQyx1QkFBUyw4REFBQ0M7UUFBSUMsV0FBVTs7Ozs7O0lBQzVCLElBQUdILFVBQVUsR0FBRztRQUNaQyx1QkFBUyw4REFBQ0M7WUFBSUMsV0FBVTtzQkFBcUc7Ozs7OztJQUNqSSxPQUFPLElBQUdILFVBQVUsR0FBRztRQUNuQkMsdUJBQVMsOERBQUNDO1lBQUlDLFdBQVU7c0JBQXFHOzs7Ozs7SUFDakksQ0FBQztJQUVELHFCQUNJLDhEQUFDRDtRQUFJQyxXQUFVO2tCQUFtQ0Y7Ozs7OztBQUUxRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLW5leHQvLi9zcmMvY29tcG9uZW50cy9UZWFtRGV0YWlsLmpzeD83NmRkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1EZXRhaWwoe3N0YXR1c30pe1xyXG4gICAgbGV0IGRldGFpbCA9IDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTMwMFwiPjwvZGl2PlxyXG4gICAgaWYoc3RhdHVzID09IDEpIHtcclxuICAgICAgICBkZXRhaWwgPSA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBwLTYgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLXhsIHNoYWRvdyB0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMzAwXCI+R1M8L2Rpdj5cclxuICAgIH0gZWxzZSBpZihzdGF0dXMgPT0gMikge1xyXG4gICAgICAgIGRldGFpbCA9IDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHAtNiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IHRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0zMDBcIj5BcnNlbmFsPC9kaXY+XHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0zMDBcIj57ZGV0YWlsfTwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlRlYW1EZXRhaWwiLCJzdGF0dXMiLCJkZXRhaWwiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TeamDetail.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/interest/index.jsx"));
module.exports = __webpack_exports__;

})();