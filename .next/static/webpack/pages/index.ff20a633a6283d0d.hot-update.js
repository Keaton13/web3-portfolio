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

/***/ "./src/components/AnimationText.js":
/*!*****************************************!*\
  !*** ./src/components/AnimationText.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimationText1\": function() { return /* binding */ AnimationText1; },\n/* harmony export */   \"LoadingTextAnimation\": function() { return /* binding */ LoadingTextAnimation; },\n/* harmony export */   \"RotateTextAnimation\": function() { return /* binding */ RotateTextAnimation; },\n/* harmony export */   \"ZoomTextAnimation\": function() { return /* binding */ ZoomTextAnimation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-type-animation */ \"./node_modules/react-type-animation/dist/index.es.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\nvar AnimationText1 = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_type_animation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            cursor: true,\n            sequence: [\n                \" Designer\",\n                1000,\n                \" Developer\",\n                1000,\n                \" FreLancer\",\n                1000\n            ],\n            wrapper: \"span\",\n            repeat: Infinity\n        }, void 0, false, {\n            fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = AnimationText1;\nvar skills = [\n    \"Web\",\n    \"Blockchain\",\n    \"Full-Stack\"\n];\nvar RotateTextAnimation = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), text = ref[0], setText = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setText(text < skills.length - 1 ? text + 1 : 0);\n            console.log(skills.length - 1, text);\n        }, 5000);\n        return function() {\n            return clearInterval(interval);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"cd-headline rotate-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cd-words-wrapper\",\n                    children: skills.map(function(skill, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            className: text === i ? \"is-visible\" : \"is-hidden\",\n                            children: skill\n                        }, i, false, {\n                            fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                    fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"blc\",\n                    children: \"Developer \"\n                }, void 0, false, {\n                    fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(RotateTextAnimation, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c1 = RotateTextAnimation;\nvar ZoomTextAnimation = function() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), text = ref[0], setText = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setText(text < skills.length - 1 ? text + 1 : 0);\n            console.log(skills.length - 1, text);\n        }, 5000);\n        return function() {\n            return clearInterval(interval);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"cd-headline zoom\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"blc\",\n                    children: \"Creative \"\n                }, void 0, false, {\n                    fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cd-words-wrapper\",\n                    children: skills.map(function(skill, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            className: text === i ? \"is-visible\" : \"is-hidden\",\n                            children: skill\n                        }, i, false, {\n                            fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_s1(ZoomTextAnimation, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c2 = ZoomTextAnimation;\nvar LoadingTextAnimation = function() {\n    _s2();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), text = ref[0], setText = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setText(text < skills.length - 1 ? text + 1 : 0);\n            setLoading(!loading);\n        }, 5000);\n        if (loading == false) {\n            setTimeout(function() {\n                setLoading(true);\n            }, 100);\n        }\n        return function() {\n            return clearInterval(interval);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"cd-headline loading-bar\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"blc\",\n                    children: \"Creative \"\n                }, void 0, false, {\n                    fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cd-words-wrapper \".concat(loading ? \"is-loading\" : \"\"),\n                    children: skills.map(function(skill, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            className: text === i ? \"is-visible\" : \"is-hidden\",\n                            children: skill\n                        }, i, false, {\n                            fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/keatonkrieger/Documents/Dev/cavani_v1.0.0/cavani-react/src/components/AnimationText.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_s2(LoadingTextAnimation, \"oMbw6Jh8YTTD1ip7H6Q9mf1LfXo=\");\n_c3 = LoadingTextAnimation;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"AnimationText1\");\n$RefreshReg$(_c1, \"RotateTextAnimation\");\n$RefreshReg$(_c2, \"ZoomTextAnimation\");\n$RefreshReg$(_c3, \"LoadingTextAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFNO2dCQUNmRCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO1FBQ0QsT0FBTzttQkFBTVYsYUFBYSxDQUFDTCxRQUFRLENBQUM7U0FBQSxDQUFDO0tBQ3RDLENBQUMsQ0FBQztJQUNILHFCQUNFLDhEQUFDZCwyQ0FBUTtrQkFDUCw0RUFBQ29CLE1BQUk7WUFBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7OEJBQ3ZDLDhEQUFDRCxNQUFJO29CQUFDQyxTQUFTLEVBQUMsS0FBSzs4QkFBQyxXQUFTOzs7Ozt5QkFBTzs4QkFDdEMsOERBQUNELE1BQUk7b0JBQUNDLFNBQVMsRUFBRSxtQkFBa0IsQ0FBOEIsT0FBNUJPLE9BQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFFOzhCQUMvRGxCLE1BQU0sQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRUMsQ0FBQzs2Q0FDbkIsOERBQUNDLEdBQUM7NEJBQVNKLFNBQVMsRUFBRVQsSUFBSSxLQUFLWSxDQUFDLEdBQUcsWUFBWSxHQUFHLFdBQVc7c0NBQzFERCxLQUFLOzJCQURBQyxDQUFDOzs7O2lDQUVMO3FCQUNMLENBQUM7Ozs7O3lCQUNHOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0UsQ0FDWDtDQUNILENBQUM7SUE3QldHLG9CQUFvQjtBQUFwQkEsTUFBQUEsb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGlvblRleHQuanM/OTc2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHlwZUFuaW1hdGlvbiBmcm9tIFwicmVhY3QtdHlwZS1hbmltYXRpb25cIjtcclxuZXhwb3J0IGNvbnN0IEFuaW1hdGlvblRleHQxID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxUeXBlQW5pbWF0aW9uXHJcbiAgICAgICAgY3Vyc29yPXt0cnVlfVxyXG4gICAgICAgIHNlcXVlbmNlPXtbXCIgRGVzaWduZXJcIiwgMTAwMCwgXCIgRGV2ZWxvcGVyXCIsIDEwMDAsIFwiIEZyZUxhbmNlclwiLCAxMDAwXX1cclxuICAgICAgICB3cmFwcGVyPVwic3BhblwiXHJcbiAgICAgICAgcmVwZWF0PXtJbmZpbml0eX1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHNraWxscyA9IFtcIldlYlwiLCBcIkJsb2NrY2hhaW5cIiwgXCJGdWxsLVN0YWNrXCJdO1xyXG5leHBvcnQgY29uc3QgUm90YXRlVGV4dEFuaW1hdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldFRleHQodGV4dCA8IHNraWxscy5sZW5ndGggLSAxID8gdGV4dCArIDEgOiAwKTtcclxuICAgICAgY29uc29sZS5sb2coc2tpbGxzLmxlbmd0aCAtIDEsIHRleHQpO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2QtaGVhZGxpbmUgcm90YXRlLTFcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Qtd29yZHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAge3NraWxscy5tYXAoKHNraWxsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxiIGtleT17aX0gY2xhc3NOYW1lPXt0ZXh0ID09PSBpID8gXCJpcy12aXNpYmxlXCIgOiBcImlzLWhpZGRlblwifT5cclxuICAgICAgICAgICAgICB7c2tpbGx9XHJcbiAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxjXCI+RGV2ZWxvcGVyIDwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgWm9vbVRleHRBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRUZXh0KHRleHQgPCBza2lsbHMubGVuZ3RoIC0gMSA/IHRleHQgKyAxIDogMCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNraWxscy5sZW5ndGggLSAxLCB0ZXh0KTtcclxuICAgIH0sIDUwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNkLWhlYWRsaW5lIHpvb21cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibGNcIj5DcmVhdGl2ZSA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Qtd29yZHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAge3NraWxscy5tYXAoKHNraWxsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxiIGtleT17aX0gY2xhc3NOYW1lPXt0ZXh0ID09PSBpID8gXCJpcy12aXNpYmxlXCIgOiBcImlzLWhpZGRlblwifT5cclxuICAgICAgICAgICAgICB7c2tpbGx9XHJcbiAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgTG9hZGluZ1RleHRBbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRUZXh0KHRleHQgPCBza2lsbHMubGVuZ3RoIC0gMSA/IHRleHQgKyAxIDogMCk7XHJcbiAgICAgIHNldExvYWRpbmcoIWxvYWRpbmcpO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgICBpZiAobG9hZGluZyA9PSBmYWxzZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNkLWhlYWRsaW5lIGxvYWRpbmctYmFyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxjXCI+Q3JlYXRpdmUgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGNkLXdvcmRzLXdyYXBwZXIgJHtsb2FkaW5nID8gXCJpcy1sb2FkaW5nXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAge3NraWxscy5tYXAoKHNraWxsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxiIGtleT17aX0gY2xhc3NOYW1lPXt0ZXh0ID09PSBpID8gXCJpcy12aXNpYmxlXCIgOiBcImlzLWhpZGRlblwifT5cclxuICAgICAgICAgICAgICB7c2tpbGx9XHJcbiAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlR5cGVBbmltYXRpb24iLCJBbmltYXRpb25UZXh0MSIsImN1cnNvciIsInNlcXVlbmNlIiwid3JhcHBlciIsInJlcGVhdCIsIkluZmluaXR5Iiwic2tpbGxzIiwiUm90YXRlVGV4dEFuaW1hdGlvbiIsInRleHQiLCJzZXRUZXh0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhckludGVydmFsIiwic3BhbiIsImNsYXNzTmFtZSIsIm1hcCIsInNraWxsIiwiaSIsImIiLCJab29tVGV4dEFuaW1hdGlvbiIsIkxvYWRpbmdUZXh0QW5pbWF0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimationText.js\n"));

/***/ })

});