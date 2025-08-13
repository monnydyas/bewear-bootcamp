/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/common/product-item.tsx":
/*!************************************************!*\
  !*** ./src/components/common/product-item.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_money__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/money */ \"(app-pages-browser)/./src/helpers/money.ts\");\n/* harmony import */ var _helpers_money__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_money__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ProductItem = (param)=>{\n    let { product } = param;\n    const firstVariant = product.variants[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        className: \"flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: firstVariant.imageUrl,\n                alt: firstVariant.name,\n                width: 200,\n                height: 200,\n                className: \"rounded-3xl\"\n            }, void 0, false, {\n                fileName: \"/Users/monicarodriguesdias/Library/Mobile Documents/com~apple~CloudDocs/Monny Dev/bootcampEcommerce/src/components/common/product-item.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"truncate text-sm font-medium\",\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/monicarodriguesdias/Library/Mobile Documents/com~apple~CloudDocs/Monny Dev/bootcampEcommerce/src/components/common/product-item.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-muted-foreground truncate text-xs font-medium\",\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/monicarodriguesdias/Library/Mobile Documents/com~apple~CloudDocs/Monny Dev/bootcampEcommerce/src/components/common/product-item.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"truncate text-sm font-semibold\"\n                    }, void 0, false, {\n                        fileName: \"/Users/monicarodriguesdias/Library/Mobile Documents/com~apple~CloudDocs/Monny Dev/bootcampEcommerce/src/components/common/product-item.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    (0,_helpers_money__WEBPACK_IMPORTED_MODULE_3__.formatCentsToBRL)(firstVariant.priceInCents)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/monicarodriguesdias/Library/Mobile Documents/com~apple~CloudDocs/Monny Dev/bootcampEcommerce/src/components/common/product-item.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/monicarodriguesdias/Library/Mobile Documents/com~apple~CloudDocs/Monny Dev/bootcampEcommerce/src/components/common/product-item.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductItem;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0LWl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Y7QUFHc0I7QUFRbkQsTUFBTUcsY0FBYztRQUFDLEVBQUVDLE9BQU8sRUFBb0I7SUFDaEQsTUFBTUMsZUFBZUQsUUFBUUUsUUFBUSxDQUFDLEVBQUU7SUFDeEMscUJBQ0UsOERBQUNMLGtEQUFJQTtRQUFDTSxNQUFLO1FBQUlDLFdBQVU7OzBCQUN2Qiw4REFBQ1Isa0RBQUtBO2dCQUNKUyxLQUFLSixhQUFhSyxRQUFRO2dCQUMxQkMsS0FBS04sYUFBYU8sSUFBSTtnQkFDdEJDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JOLFdBQVU7Ozs7OzswQkFFWiw4REFBQ087Z0JBQUlQLFdBQVU7O2tDQUNiLDhEQUFDUTt3QkFBRVIsV0FBVTtrQ0FBZ0NKLFFBQVFRLElBQUk7Ozs7OztrQ0FDekQsOERBQUNJO3dCQUFFUixXQUFVO2tDQUNWSixRQUFRYSxXQUFXOzs7Ozs7a0NBRXRCLDhEQUFDRDt3QkFBRVIsV0FBVTs7Ozs7O29CQUNaTixnRUFBZ0JBLENBQUNHLGFBQWFhLFlBQVk7Ozs7Ozs7Ozs7Ozs7QUFJbkQ7S0FyQk1mO0FBdUJOLGlFQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvbW9uaWNhcm9kcmlndWVzZGlhcy9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Nb25ueSBEZXYvYm9vdGNhbXBFY29tbWVyY2Uvc3JjL2NvbXBvbmVudHMvY29tbW9uL3Byb2R1Y3QtaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IHByb2R1Y3RUYWJsZSwgcHJvZHVjdFZhcmlhbnRUYWJsZSB9IGZyb20gXCJAL2RiL3NjaGVtYVwiO1xuaW1wb3J0IHsgZm9ybWF0Q2VudHNUb0JSTCB9IGZyb20gXCJAL2hlbHBlcnMvbW9uZXlcIjtcblxuaW50ZXJmYWNlIFByb2R1Y3RJdGVtUHJvcHMge1xuICBwcm9kdWN0OiB0eXBlb2YgcHJvZHVjdFRhYmxlLiRpbmZlclNlbGVjdCAmIHtcbiAgICB2YXJpYW50czogKHR5cGVvZiBwcm9kdWN0VmFyaWFudFRhYmxlLiRpbmZlclNlbGVjdClbXTtcbiAgfTtcbn1cblxuY29uc3QgUHJvZHVjdEl0ZW0gPSAoeyBwcm9kdWN0IH06IFByb2R1Y3RJdGVtUHJvcHMpID0+IHtcbiAgY29uc3QgZmlyc3RWYXJpYW50ID0gcHJvZHVjdC52YXJpYW50c1swXTtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2ZpcnN0VmFyaWFudC5pbWFnZVVybH1cbiAgICAgICAgYWx0PXtmaXJzdFZhcmlhbnQubmFtZX1cbiAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTFcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGUgdGV4dC1zbSBmb250LW1lZGl1bVwiPntwcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdHJ1bmNhdGUgdGV4dC14cyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRydW5jYXRlIHRleHQtc20gZm9udC1zZW1pYm9sZFwiPjwvcD5cbiAgICAgICAge2Zvcm1hdENlbnRzVG9CUkwoZmlyc3RWYXJpYW50LnByaWNlSW5DZW50cyl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJmb3JtYXRDZW50c1RvQlJMIiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiZmlyc3RWYXJpYW50IiwidmFyaWFudHMiLCJocmVmIiwiY2xhc3NOYW1lIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJwIiwiZGVzY3JpcHRpb24iLCJwcmljZUluQ2VudHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/product-item.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/helpers/money.ts":
/*!******************************!*\
  !*** ./src/helpers/money.ts ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});