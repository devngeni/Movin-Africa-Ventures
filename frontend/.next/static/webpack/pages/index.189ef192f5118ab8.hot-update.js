"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Landing/Team/Team.tsx":
/*!******************************************!*\
  !*** ./components/Landing/Team/Team.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Team; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Team_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/Team.module.css */ \"./styles/Team.module.css\");\n/* harmony import */ var _styles_Team_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Team_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Team() {\n    const { team_page , the_team , meet_the_team , member_grid_container , member_card , gridtop , gridbottom  } = (_styles_Team_module_css__WEBPACK_IMPORTED_MODULE_1___default());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: team_page,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: the_team,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: meet_the_team,\n                    children: \"Meet The Team\"\n                }, void 0, false, {\n                    fileName: \"/home/samu/Desktop/Projects/movin-africa-ventures/frontend/components/Landing/Team/Team.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/samu/Desktop/Projects/movin-africa-ventures/frontend/components/Landing/Team/Team.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: member_grid_container,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: top\n                }, void 0, false, {\n                    fileName: \"/home/samu/Desktop/Projects/movin-africa-ventures/frontend/components/Landing/Team/Team.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 8\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/samu/Desktop/Projects/movin-africa-ventures/frontend/components/Landing/Team/Team.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/samu/Desktop/Projects/movin-africa-ventures/frontend/components/Landing/Team/Team.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Team;\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmcvVGVhbS9UZWFtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFFL0IsU0FBU0MsT0FBTztJQUM3QixNQUFNLEVBQUVDLFVBQVMsRUFBRUMsU0FBUSxFQUFFQyxjQUFhLEVBQUVDLHNCQUFxQixFQUFFQyxZQUFXLEVBQUVDLFFBQU8sRUFBRUMsV0FBVSxFQUFFLEdBQ25HUixnRUFBTUE7SUFDUixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBV1I7OzBCQUNkLDhEQUFDTztnQkFBSUMsV0FBV1A7MEJBQ2QsNEVBQUNNO29CQUFJQyxXQUFXTjs4QkFBZTs7Ozs7Ozs7Ozs7MEJBRWpDLDhEQUFDSztnQkFBSUMsV0FBV0w7MEJBQ2YsNEVBQUNJO29CQUFJRSxJQUFJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEIsQ0FBQztLQWJ1QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nL1RlYW0vVGVhbS50c3g/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9UZWFtLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbSgpIHtcbiAgY29uc3QgeyB0ZWFtX3BhZ2UsIHRoZV90ZWFtLCBtZWV0X3RoZV90ZWFtLCBtZW1iZXJfZ3JpZF9jb250YWluZXIsIG1lbWJlcl9jYXJkLCBncmlkdG9wLCBncmlkYm90dG9tIH0gPVxuICAgIHN0eWxlcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17dGVhbV9wYWdlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVfdGVhbX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttZWV0X3RoZV90ZWFtfT5NZWV0IFRoZSBUZWFtPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW1iZXJfZ3JpZF9jb250YWluZXJ9PlxuICAgICAgIDxkaXYgaWQ9e3RvcH0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJUZWFtIiwidGVhbV9wYWdlIiwidGhlX3RlYW0iLCJtZWV0X3RoZV90ZWFtIiwibWVtYmVyX2dyaWRfY29udGFpbmVyIiwibWVtYmVyX2NhcmQiLCJncmlkdG9wIiwiZ3JpZGJvdHRvbSIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Landing/Team/Team.tsx\n"));

/***/ })

});