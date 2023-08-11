(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-claim-done-done-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/done/done.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/done/done.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-title style=\"color: white;\">Membership Claim</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"middle-page\">\n    <ion-card>\n      <ion-card-header>\n        Pendaftaran pengajuan perbaikan sudah diterima dan sedang diproses. Mohon tunggu konfirmasinya. Terima Kasih\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button expand=\"block\" routerLink=\"/landing\" class=\"ion-margin\">Back to Home</ion-button>\n      </ion-card-content>  \n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/membership-claim/done/done-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/done/done-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DonePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonePageRoutingModule", function() { return DonePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _done_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./done.page */ "./src/app/pages/landing/membership-claim/done/done.page.ts");




const routes = [
    {
        path: '',
        component: _done_page__WEBPACK_IMPORTED_MODULE_3__["DonePage"]
    }
];
let DonePageRoutingModule = class DonePageRoutingModule {
};
DonePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-claim/done/done.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/done/done.module.ts ***!
  \********************************************************************/
/*! exports provided: DonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonePageModule", function() { return DonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _done_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./done-routing.module */ "./src/app/pages/landing/membership-claim/done/done-routing.module.ts");
/* harmony import */ var _done_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./done.page */ "./src/app/pages/landing/membership-claim/done/done.page.ts");







let DonePageModule = class DonePageModule {
};
DonePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _done_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonePageRoutingModule"]
        ],
        declarations: [_done_page__WEBPACK_IMPORTED_MODULE_6__["DonePage"]]
    })
], DonePageModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-claim/done/done.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/done/done.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1jbGFpbS9kb25lL2RvbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/landing/membership-claim/done/done.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/done/done.page.ts ***!
  \******************************************************************/
/*! exports provided: DonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonePage", function() { return DonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DonePage = class DonePage {
    constructor() { }
    ngOnInit() {
    }
};
DonePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-done',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./done.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/done/done.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./done.page.scss */ "./src/app/pages/landing/membership-claim/done/done.page.scss")).default]
    })
], DonePage);



/***/ })

}]);
//# sourceMappingURL=membership-claim-done-done-module-es2015.js.map