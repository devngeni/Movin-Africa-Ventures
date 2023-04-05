/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Landing/Investments/Investments.tsx":
/*!********************************************************!*\
  !*** ./components/Landing/Investments/Investments.tsx ***!
  \********************************************************/
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

/***/ "./components/Landing/index.ts":
/*!*************************************!*\
  !*** ./components/Landing/index.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hero\": function() { return /* reexport safe */ _Landing_HeroSection_Hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"Investments\": function() { return /* reexport default from dynamic */ _Landing_Investments_Investments__WEBPACK_IMPORTED_MODULE_4___default.a; },\n/* harmony export */   \"Navbar\": function() { return /* reexport safe */ _Landing_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   \"ValueAdd\": function() { return /* reexport safe */ _Landing_ValueAdd_ValueAdd__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   \"WeAre\": function() { return /* reexport safe */ _Landing_WeAre_WeAre__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Landing_HeroSection_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Landing/HeroSection/Hero */ \"./components/Landing/HeroSection/Hero.tsx\");\n/* harmony import */ var _Landing_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Landing/Navbar/Navbar */ \"./components/Landing/Navbar/Navbar.tsx\");\n/* harmony import */ var _Landing_WeAre_WeAre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Landing/WeAre/WeAre */ \"./components/Landing/WeAre/WeAre.tsx\");\n/* harmony import */ var _Landing_ValueAdd_ValueAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Landing/ValueAdd/ValueAdd */ \"./components/Landing/ValueAdd/ValueAdd.tsx\");\n/* harmony import */ var _Landing_Investments_Investments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Landing/Investments/Investments */ \"./components/Landing/Investments/Investments.tsx\");\n/* harmony import */ var _Landing_Investments_Investments__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Landing_Investments_Investments__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmcvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDRDtBQUNIO0FBQ1M7QUFDUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xhbmRpbmcvaW5kZXgudHM/MzI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tIFwiLi4vTGFuZGluZy9IZXJvU2VjdGlvbi9IZXJvXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdmJhciB9IGZyb20gXCIuLi9MYW5kaW5nL05hdmJhci9OYXZiYXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2VBcmUgfSBmcm9tIFwiLi4vTGFuZGluZy9XZUFyZS9XZUFyZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWYWx1ZUFkZCB9IGZyb20gXCIuLi9MYW5kaW5nL1ZhbHVlQWRkL1ZhbHVlQWRkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEludmVzdG1lbnRzIH0gZnJvbSBcIi4uL0xhbmRpbmcvSW52ZXN0bWVudHMvSW52ZXN0bWVudHNcIjtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiSGVybyIsIk5hdmJhciIsIldlQXJlIiwiVmFsdWVBZGQiLCJJbnZlc3RtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Landing/index.ts\n"));

/***/ })

});