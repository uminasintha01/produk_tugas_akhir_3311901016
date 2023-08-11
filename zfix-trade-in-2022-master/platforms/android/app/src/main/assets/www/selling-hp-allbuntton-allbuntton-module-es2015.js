(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-allbuntton-allbuntton-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  style=\"--background: #ccc url('../../../../assets/images/phone/camera/BG.png') no-repeat center center / cover;\">\n  <div class=\"center\">\n    <img src=\"../../../../assets/images/phone/camera/logo.png\" alt=\"\" style=\"margin-top: 23%;\">\n    <div class=\"middle\">\n      <img src=\"../../../../assets/images/phone/button/button.png\" alt=\"\">\n        <div class=\"title\">Silahkah Tes Getar Anda</div>\n        <div class=\"instruksi\">Instruksi</div>\n        <div style=\"text-align: left;\">\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen; margin-top: 20px;\"></ion-icon> Silahkan Tekan Tombol Volume Bawah</p>\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen;\"></ion-icon> Silahkan Tekan Tombol Volume Atas</p>\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen;\"></ion-icon> Silahkan Tekan Tombol Trun-Off</p>\n        </div>\n        <button class=\"button round\" icon-only (click)=\"submit()\" style=\"margin-top: 10%;\">\n          Selesai\n        </button>\n        <div (click)=\"skip()\" style=\"margin-right: 30%; margin-left: 30%; margin-top: 25%;\">\n           <p class=\"skip\">Lewati <a style=\"margin-left: 10px;\">>></a></p> \n           <hr>\n        </div>\n    </div>\n  </div>\n</ion-content>\n\n\n<!-- <ion-content class=\"background\"  [fullscren]=\"true\">\n<ion-card>\n  <ion-card-content>\n\n    <h1>Tes All Button</h1>\n  <h3>*instruksi*</h3>\n  <ul>\n    <li>silahkan tekan tombol volume bawah</li>\n    <li>silahkan tekan tombol volume atas</li>\n    <li>silahkan tekan tombol Trun-off</li>\n  </ul>\n  \n  <button class=\"btn-done\" (click)=\"submit()\" center-block> Done </button>\n</ion-card-content>\n</ion-card>\n<div class=\"bg-image\" ><img  src=\"../../../assets/images/bawah_putih.svg\" alt=\"\"></div>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AllbunttonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbunttonPageRoutingModule", function() { return AllbunttonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _allbuntton_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allbuntton.page */ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts");




const routes = [
    {
        path: '',
        component: _allbuntton_page__WEBPACK_IMPORTED_MODULE_3__["AllbunttonPage"]
    }
];
let AllbunttonPageRoutingModule = class AllbunttonPageRoutingModule {
};
AllbunttonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllbunttonPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton.module.ts ***!
  \**************************************************************************/
/*! exports provided: AllbunttonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbunttonPageModule", function() { return AllbunttonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _allbuntton_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allbuntton-routing.module */ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton-routing.module.ts");
/* harmony import */ var _allbuntton_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allbuntton.page */ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts");







let AllbunttonPageModule = class AllbunttonPageModule {
};
AllbunttonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _allbuntton_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllbunttonPageRoutingModule"]
        ],
        declarations: [_allbuntton_page__WEBPACK_IMPORTED_MODULE_6__["AllbunttonPage"]]
    })
], AllbunttonPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: white;\n  margin-top: 15%;\n  margin-bottom: 0px;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  color: #3053A4;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL2FsbGJ1bnR0b24vQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmctaHBcXGFsbGJ1bnR0b25cXGFsbGJ1bnR0b24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvYWxsYnVudHRvbi9hbGxidW50dG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUFRLG1CQUFBO0FDRVI7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNHRjs7QURERTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDSUY7O0FERkU7RUFDQSxXQUFBO0FDS0Y7O0FERkU7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FERkU7RUFDQSxXQUFBO0FDS0Y7O0FERkU7RUFDQSxlQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsVUFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLGdCQUFBO0FDS0Y7O0FERkU7RUFDQSxVQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLFVBQUE7QUNLRjs7QURGRTtFQUNBLGdCQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsV0FBQTtBQ0tGOztBREZFO0VBQ0EsV0FBQTtBQ0tGOztBREZFO0VBQ0EsZUFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLFVBQUE7QUNLRjs7QURGRTtFQUNBLGdCQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsVUFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLGdCQUFBO0FDS0Y7O0FERkU7RUFDQSxVQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLFdBQUE7QUNLRjs7QURGRTtFQUNBLFVBQUE7QUNLRjs7QURGRTtFQUNBLGNBQUE7QUNLRjs7QURGRTtFQUNBLGVBQUE7QUNLRjs7QURGRTtFQUNBLFNBQUE7QUNLRjs7QURGRTtFQUNBLGVBQUE7QUNLRjs7QURGRTtFQUNBLGVBQUE7QUNLRjs7QURGRTtFQUNBLFNBQUE7QUNLRjs7QURGRTtFQUNBLGVBQUE7QUNLRjs7QURGRTtFQUNBLGVBQUE7QUNLRjs7QURGRTtFQUNBLFNBQUE7QUNLRjs7QURGRTtFQUNBLGVBQUE7QUNLRjs7QURGRTtFQUNBLGVBQUE7QUNLRjs7QURGRTtFQUNBLFVBQUE7QUNLRjs7QURGRTtFQUNBLGVBQUE7QUNLRjs7QURGRTtFQUNBLHFCQUFBO0FDS0Y7O0FERkU7RUFDQSxzQkFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLHNCQUFBO0FDS0Y7O0FERkU7RUFDQSxzQkFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLHNCQUFBO0FDS0Y7O0FERkU7RUFDQSxzQkFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLHNCQUFBO0FDS0Y7O0FERkU7RUFDQSxzQkFBQTtBQ0tGOztBREZFO0VBQ0EsaUJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1ocC9hbGxidW50dG9uL2FsbGJ1bnR0b24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZi01IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNraXAge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uaW5zdHJ1a3NpIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgbWFyZ2luLXRvcDogNyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubWlkZGxlIHsgXHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbmhye1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMzMDUzQTQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yb3VuZCB7Ym9yZGVyLXJhZGl1czogMTJweDt9XHJcblxyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xIHtcclxuICB3aWR0aDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTIge1xyXG4gIHdpZHRoOiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTMge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTQge1xyXG4gIHdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTUge1xyXG4gIHdpZHRoOiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTcge1xyXG4gIHdpZHRoOiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTgge1xyXG4gIHdpZHRoOiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTkge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEwIHtcclxuICB3aWR0aDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMSB7XHJcbiAgd2lkdGg6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTAge1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTEge1xyXG4gIHJpZ2h0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0yIHtcclxuICByaWdodDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTMge1xyXG4gIHJpZ2h0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNCB7XHJcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC01IHtcclxuICByaWdodDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTYge1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNyB7XHJcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC04IHtcclxuICByaWdodDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTkge1xyXG4gIHJpZ2h0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMTAge1xyXG4gIHJpZ2h0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMTEge1xyXG4gIHJpZ2h0OiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMTIge1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTAge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMSB7XHJcbiAgbGVmdDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMiB7XHJcbiAgbGVmdDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTMge1xyXG4gIGxlZnQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC00IHtcclxuICBsZWZ0OiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNSB7XHJcbiAgbGVmdDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTYge1xyXG4gIGxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC03IHtcclxuICBsZWZ0OiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtOCB7XHJcbiAgbGVmdDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTkge1xyXG4gIGxlZnQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMCB7XHJcbiAgbGVmdDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTExIHtcclxuICBsZWZ0OiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTIge1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0wIHtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xIHtcclxuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0yIHtcclxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC01IHtcclxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTcge1xyXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC04IHtcclxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtOSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEwIHtcclxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTEge1xyXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgfSIsIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mLTUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2tpcCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmluc3RydWtzaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogbGlnaHRncmVlbjtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1pZGRsZSB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzMwNTNBNDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sLXhzLTEge1xuICB3aWR0aDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtMiB7XG4gIHdpZHRoOiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtMyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wteHMtNCB7XG4gIHdpZHRoOiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtNSB7XG4gIHdpZHRoOiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wteHMtNyB7XG4gIHdpZHRoOiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtOCB7XG4gIHdpZHRoOiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wteHMtMTAge1xuICB3aWR0aDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy0xMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLXhzLXB1bGwtMCB7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1bGwtMSB7XG4gIHJpZ2h0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTIge1xuICByaWdodDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMyB7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVsbC00IHtcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTUge1xuICByaWdodDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtNiB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVsbC03IHtcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTgge1xuICByaWdodDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtOSB7XG4gIHJpZ2h0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVsbC0xMCB7XG4gIHJpZ2h0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMSB7XG4gIHJpZ2h0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMiB7XG4gIHJpZ2h0OiAxMDAlO1xufVxuXG4uY29sLXhzLXB1c2gtMCB7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVzaC0xIHtcbiAgbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0yIHtcbiAgbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMyB7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdXNoLTQge1xuICBsZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC01IHtcbiAgbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtNiB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdXNoLTcge1xuICBsZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC04IHtcbiAgbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtOSB7XG4gIGxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdXNoLTEwIHtcbiAgbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMTEge1xuICBsZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMiB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTAge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNyB7XG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC05IHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts ***!
  \************************************************************************/
/*! exports provided: AllbunttonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllbunttonPage", function() { return AllbunttonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");








let AllbunttonPage = class AllbunttonPage {
    constructor(platform, alertController, navCtrl, activatedRoute, selling, router) {
        //   platform.ready().then(() => {    
        //     this.powerbutton();
        this.platform = platform;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.selling = selling;
        this.router = router;
        this.resultPowerButton = false;
        this.resultVolumeUpButton = false;
        this.resultVolumeDownButton = false;
        // });
    }
    ngOnInit() {
        this.volumeup();
        this.volumedown();
        this.powerbutton();
        this.activatedRoute.queryParams.subscribe(params => {
            this.brand = params["brand"];
            this.ram = params["ram"];
            this.storages = params["storages"];
            this.lokasi_trade = params["lokasi_trade"];
            this.screenHasProblem = params["screenHasProblem"];
            this.cameraHasProblem = params["cameraHasProblem"];
            this.wifiHasProblem = params["wifiHasProblem"];
            this.vibrateHasProblem = params["vibrateHasProblem"];
            this.fingerprintHasProblem = params["fingerprintHasProblem"];
            console.log('brand', this.brand);
            console.log('storage', this.storages);
            console.log('ram', this.ram);
            console.log('lokasi trade', this.lokasi_trade);
            console.log('screen', this.screenHasProblem);
            console.log('camera', this.cameraHasProblem);
            console.log('wifi', this.wifiHasProblem);
            console.log('finger', this.fingerprintHasProblem);
        });
    }
    volumeup() {
        //   document.addEventListener("volumeupbutton", callback, false);  
        //   function callback() { 
        //     alert('Tekan Tombol Volume Bawah');
        //     document.removeEventListener("volumedownbutton",callback, false)
        // }
        document.addEventListener("volumeupbutton", callbackFunction, false);
        function callbackFunction() {
            if (this.resultVolumeUpButton != true) {
                alert('Volume Up Button is pressed!');
            }
            // console.log(this.resultVolumeUpButton);
            this.resultVolumeUpButton = true;
        }
    }
    volumedown() {
        //   document.addEventListener("volumedownbutton", callback, false);
        //   function callback() {
        //   alert('Tombol Volume anda Normal. Selanjutnya tekan tombol power on/of hp anda');
        //   document.removeEventListener("volumedownbutton",callback, false)
        // }
        document.addEventListener("volumedownbutton", callbackFunction, false);
        function callbackFunction() {
            if (this.resultVolumeDownButton != true) {
                alert('Volume Down Button is pressed!');
            }
            // console.log(this.resultVolumeDownButton);
            this.resultVolumeDownButton = true;
        }
    }
    powerbutton() {
        this.platform.resume.subscribe(() => {
            if (this.resultPowerButton != true) {
                alert('Power Button Button is pressed!');
            }
            // console.log(this.resultPowerButton);
            this.resultPowerButton = true;
            // alert('[INFO] Test button sudah selesai, lanjut ke tahap selanjutnya');
            // this.back();
        });
    }
    submit() {
        if (this.resultPowerButton == true || this.resultVolumeDownButton == true || this.resultVolumeUpButton == true) {
            this.normal();
        }
        else {
            this.notNormal();
        }
    }
    normal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Test button anda telah berhasi. Ingin lanjut?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: () => { }
                    }, {
                        text: 'Iya',
                        handler: () => {
                            let data = {
                                brand: this.brand,
                                ram: this.ram,
                                storages: this.storages,
                                lokasi_trade: this.lokasi_trade,
                                screenHasProblem: this.screenHasProblem,
                                cameraHasProblem: this.cameraHasProblem,
                                wifiHasProblem: this.wifiHasProblem,
                                vibrateHasProblem: this.vibrateHasProblem,
                                fingerprintHasProblem: this.fingerprintHasProblem,
                                buttonHasProblem: 0,
                            };
                            this.selling.SetSelling(data);
                            this.router.navigate([
                                "/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail",
                            ]);
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    notNormal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Ada button yang belum dipencet!. Apa anda ingin melanjutkan?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: () => {
                        }
                    }, {
                        text: 'Iya',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const alert = yield this.alertController.create({
                                header: 'ZFix',
                                message: 'Jika anda tekan iya, anda memverifikasi bahwa button anda memiliki masalah.',
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Tidak',
                                        role: 'cancel',
                                        handler: () => {
                                        }
                                    }, {
                                        text: 'Iya',
                                        handler: () => {
                                            let data = {
                                                brand: this.brand,
                                                ram: this.ram,
                                                storages: this.storages,
                                                lokasi_trade: this.lokasi_trade,
                                                screenHasProblem: this.screenHasProblem,
                                                cameraHasProblem: this.cameraHasProblem,
                                                wifiHasProblem: this.wifiHasProblem,
                                                fingerprintHasProblem: this.fingerprintHasProblem,
                                                buttonHasProblem: 1,
                                            };
                                            this.selling.SetSelling(data);
                                            this.router.navigate([
                                                "/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail",
                                            ]);
                                        }
                                    }
                                ]
                            });
                            yield alert.present();
                        })
                    },
                ]
            });
            yield alert.present();
        });
    }
    skip() {
        this.presentSkip();
    }
    presentSkip() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Tombol anda memiliki masalah!.',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Coba Lagi',
                        role: 'cancel',
                        handler: () => {
                            console.log('Continue');
                        }
                    }, {
                        text: 'Lewati',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const alert = yield this.alertController.create({
                                header: 'ZFix',
                                message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa tombol anda memiliki masalah.',
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Lanjut',
                                        role: 'cancel',
                                        handler: () => {
                                            // console.log('Continue');
                                        }
                                    }, {
                                        text: 'Tetap lewati',
                                        handler: () => {
                                            let data = {
                                                brand: this.brand,
                                                ram: this.ram,
                                                storages: this.storages,
                                                lokasi_trade: this.lokasi_trade,
                                                screenHasProblem: this.screenHasProblem,
                                                cameraHasProblem: this.cameraHasProblem,
                                                wifiHasProblem: this.wifiHasProblem,
                                                fingerprintHasProblem: this.fingerprintHasProblem,
                                                buttonHasProblem: 1,
                                            };
                                            this.selling.SetSelling(data);
                                            this.router.navigate([
                                                "/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail",
                                            ]);
                                        }
                                    }
                                ]
                            });
                            yield alert.present();
                        })
                    },
                ]
            });
            yield alert.present();
        });
    }
};
AllbunttonPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_4__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AllbunttonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-allbuntton',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./allbuntton.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./allbuntton.page.scss */ "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.scss")).default]
    })
], AllbunttonPage);



/***/ })

}]);
//# sourceMappingURL=selling-hp-allbuntton-allbuntton-module-es2015.js.map