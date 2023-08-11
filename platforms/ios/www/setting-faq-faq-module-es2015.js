(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-faq-faq-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/faq/faq.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/faq/faq.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">FAQ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vl\" style=\"font-family: 'Arial' !important; margin-left: 10px;\">\n    <h2>Punya Pertanyaan Seputar ZFix?</h2>\n  </div>\n  <ion-text>\n  <p>Berikut merupakan pertanyaan yang paling sering diajukan seputar ZFix dan produknya</p>\n  </ion-text>\n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/setting/faq/faq-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/landing/setting/faq/faq-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/landing/setting/faq/faq.page.ts");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/setting/faq/faq.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/setting/faq/faq.module.ts ***!
  \*********************************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/pages/landing/setting/faq/faq-routing.module.ts");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/landing/setting/faq/faq.page.ts");







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"]
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "./src/app/pages/landing/setting/faq/faq.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/setting/faq/faq.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\n.vl {\n  border-left: 6px solid blue;\n  height: 60px;\n}\n\nh2 {\n  padding-left: 10px;\n}\n\np {\n  padding-left: 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2ZhcS9DOlxcVXNlcnNcXG1hY2FuXFxEb3dubG9hZHNcXHpmaXhfYXBwX2FuZ3VsYXJfaHR0cF9uZXc5XFx6Zml4X2FwcF9hbmd1bGFyX2h0dHBfbmV3OS9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNldHRpbmdcXGZhcVxcZmFxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2ZhcS9mYXEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFjO0FDQ2hCOztBREVBO0VBQ0ksMkJBQTJCO0VBQzNCLFlBQVk7QUNDaEI7O0FERUU7RUFDRSxrQkFBa0I7QUNDdEI7O0FERUU7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtBQ0NyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZy9mYXEvZmFxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi52bCB7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsdWU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH0iLCJpb24tY29udGVudCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsdWU7XG4gIGhlaWdodDogNjBweDtcbn1cblxuaDIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbnAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/setting/faq/faq.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/landing/setting/faq/faq.page.ts ***!
  \*******************************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FaqPage = class FaqPage {
    constructor() { }
    ngOnInit() {
    }
};
FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/faq/faq.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/landing/setting/faq/faq.page.scss")).default]
    })
], FaqPage);



/***/ })

}]);
//# sourceMappingURL=setting-faq-faq-module-es2015.js.map