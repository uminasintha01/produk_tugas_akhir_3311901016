(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-kulkas-detail-kulkas-detail-kulkas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n  <div class=\"center\">\n    <img src=\"../../../../assets/images/home/zfix.png\" alt=\"\" style=\"margin-top: 20%;\">\n    <div class=\"middle\">\n      <div class=\"title\">Your Trade In</div>\n\n      <ion-item style=\"--background: transparant; color: #3053A4; margin-top: 10px;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"Merk\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input value=\"{{ brand }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n  \n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"Type\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input value=\"{{ type }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n      \n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"Model\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input value=\"{{ model }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"Kondisi Kulkas\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input value=\"{{ condition }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item style=\"--background: transparant; color: #3053A4;\" class=\"ion-text-wrap\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"Kondisi Fisik Kulkas\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input value=\"{{ kondisi_fisik }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Rubber Kulkas</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input value=\"{{ rubber }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Tutup Freezer</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input value=\"{{ tutup_freezer }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kelengkapan Tray Kulkas</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input value=\"{{ tray }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Fungsi Freezer/Ice Maker/Pendingin</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input value=\"{{ ice_maker }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>     \n\n      <ion-input style=\"color: #3053A4; margin-top: 20px;\" value=\"Estimated Price\" readonly></ion-input>\n      <button class=\"button round\" style=\"background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">Rp.{{price | number}}</button>\n\n      <div class=\"row\" style=\"margin-top: 60px;\">\n        <div class=\"col\">\n          <button class=\"button oval\" routerLink=\"/landing/type\" style=\" background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Cancel\n          </button>\n        </div>\n        <div class=\"col\">\n          <button class=\"button oval\" (click)=\"submit()\" style=\"background-color: white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Agree\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: DetailKulkasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailKulkasPageRoutingModule", function() { return DetailKulkasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_kulkas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-kulkas.page */ "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.ts");




const routes = [
    {
        path: '',
        component: _detail_kulkas_page__WEBPACK_IMPORTED_MODULE_3__["DetailKulkasPage"]
    }
];
let DetailKulkasPageRoutingModule = class DetailKulkasPageRoutingModule {
};
DetailKulkasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailKulkasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.module.ts ***!
  \************************************************************************************/
/*! exports provided: DetailKulkasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailKulkasPageModule", function() { return DetailKulkasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_kulkas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-kulkas-routing.module */ "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas-routing.module.ts");
/* harmony import */ var _detail_kulkas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-kulkas.page */ "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.ts");







let DetailKulkasPageModule = class DetailKulkasPageModule {
};
DetailKulkasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_kulkas_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailKulkasPageRoutingModule"]
        ],
        declarations: [_detail_kulkas_page__WEBPACK_IMPORTED_MODULE_6__["DetailKulkasPage"]]
    })
], DetailKulkasPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15%;\n  margin-bottom: 5%;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.oval {\n  border-radius: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWt1bGthcy9kZXRhaWwta3Vsa2FzL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLWt1bGthc1xcZGV0YWlsLWt1bGthc1xcZGV0YWlsLWt1bGthcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1rdWxrYXMvZGV0YWlsLWt1bGthcy9kZXRhaWwta3Vsa2FzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQVEsbUJBQUE7QUNFUjs7QUREQTtFQUFPLG1CQUFBO0FDS1A7O0FESEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNNRjs7QURKRTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDT0Y7O0FETEU7RUFDQSxXQUFBO0FDUUY7O0FETEU7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUUY7O0FETEU7RUFDQSxXQUFBO0FDUUY7O0FETEU7RUFDQSxlQUFBO0FDUUY7O0FETEU7RUFDQSxnQkFBQTtBQ1FGOztBRExFO0VBQ0EsVUFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxVQUFBO0FDUUY7O0FETEU7RUFDQSxnQkFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLFVBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxnQkFBQTtBQ1FGOztBRExFO0VBQ0EsV0FBQTtBQ1FGOztBRExFO0VBQ0EsV0FBQTtBQ1FGOztBRExFO0VBQ0EsZUFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLFVBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxnQkFBQTtBQ1FGOztBRExFO0VBQ0EsVUFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxVQUFBO0FDUUY7O0FETEU7RUFDQSxnQkFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLFdBQUE7QUNRRjs7QURMRTtFQUNBLFVBQUE7QUNRRjs7QURMRTtFQUNBLGNBQUE7QUNRRjs7QURMRTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNBLFNBQUE7QUNRRjs7QURMRTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNBLFNBQUE7QUNRRjs7QURMRTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNBLFNBQUE7QUNRRjs7QURMRTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNBLFVBQUE7QUNRRjs7QURMRTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNBLHFCQUFBO0FDUUY7O0FETEU7RUFDQSxzQkFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLHNCQUFBO0FDUUY7O0FETEU7RUFDQSxzQkFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLHNCQUFBO0FDUUY7O0FETEU7RUFDQSxzQkFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLHNCQUFBO0FDUUY7O0FETEU7RUFDQSxzQkFBQTtBQ1FGOztBRExFO0VBQ0EsaUJBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1rdWxrYXMvZGV0YWlsLWt1bGthcy9kZXRhaWwta3Vsa2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmYtNSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5za2lwIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzMwNTNBNDtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5pbnN0cnVrc2kge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogbGlnaHRncmVlbjtcclxuICBtYXJnaW4tdG9wOiA3JTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUgeyBcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxufVxyXG5cclxuaHJ7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJvdW5kIHtib3JkZXItcmFkaXVzOiAxMnB4O31cclxuLm92YWwge2JvcmRlci1yYWRpdXM6IDIwcHg7fVxyXG5cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICAucm93OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMSB7XHJcbiAgd2lkdGg6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0yIHtcclxuICB3aWR0aDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0zIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy00IHtcclxuICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy01IHtcclxuICB3aWR0aDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy02IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy03IHtcclxuICB3aWR0aDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy04IHtcclxuICB3aWR0aDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy05IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMCB7XHJcbiAgd2lkdGg6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTEge1xyXG4gIHdpZHRoOiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0wIHtcclxuICByaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xIHtcclxuICByaWdodDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMiB7XHJcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0zIHtcclxuICByaWdodDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTQge1xyXG4gIHJpZ2h0OiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNSB7XHJcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC02IHtcclxuICByaWdodDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTcge1xyXG4gIHJpZ2h0OiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtOCB7XHJcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC05IHtcclxuICByaWdodDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTEwIHtcclxuICByaWdodDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTExIHtcclxuICByaWdodDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTEyIHtcclxuICByaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0wIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEge1xyXG4gIGxlZnQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTIge1xyXG4gIGxlZnQ6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0zIHtcclxuICBsZWZ0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNCB7XHJcbiAgbGVmdDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTUge1xyXG4gIGxlZnQ6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC02IHtcclxuICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNyB7XHJcbiAgbGVmdDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTgge1xyXG4gIGxlZnQ6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC05IHtcclxuICBsZWZ0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTAge1xyXG4gIGxlZnQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMSB7XHJcbiAgbGVmdDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEyIHtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTMge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC00IHtcclxuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTYge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC03IHtcclxuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTkge1xyXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTExIHtcclxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIH0iLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZi01IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNraXAge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzA1M0E0O1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uaW5zdHJ1a3NpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWlkZGxlIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm92YWwge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sLXhzLTEge1xuICB3aWR0aDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtMiB7XG4gIHdpZHRoOiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtMyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wteHMtNCB7XG4gIHdpZHRoOiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtNSB7XG4gIHdpZHRoOiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wteHMtNyB7XG4gIHdpZHRoOiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtOCB7XG4gIHdpZHRoOiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wteHMtMTAge1xuICB3aWR0aDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy0xMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLXhzLXB1bGwtMCB7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1bGwtMSB7XG4gIHJpZ2h0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTIge1xuICByaWdodDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMyB7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVsbC00IHtcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTUge1xuICByaWdodDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtNiB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVsbC03IHtcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTgge1xuICByaWdodDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtOSB7XG4gIHJpZ2h0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVsbC0xMCB7XG4gIHJpZ2h0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMSB7XG4gIHJpZ2h0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMiB7XG4gIHJpZ2h0OiAxMDAlO1xufVxuXG4uY29sLXhzLXB1c2gtMCB7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVzaC0xIHtcbiAgbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0yIHtcbiAgbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMyB7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdXNoLTQge1xuICBsZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC01IHtcbiAgbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtNiB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdXNoLTcge1xuICBsZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC04IHtcbiAgbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtOSB7XG4gIGxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdXNoLTEwIHtcbiAgbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMTEge1xuICBsZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMiB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTAge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNyB7XG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC05IHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.ts ***!
  \**********************************************************************************/
/*! exports provided: DetailKulkasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailKulkasPage", function() { return DetailKulkasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");










let DetailKulkasPage = class DetailKulkasPage {
    constructor(selling, router, storage, sellingApiService, activatedRoute, utilsService, localNotifications) {
        this.selling = selling;
        this.router = router;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.activatedRoute = activatedRoute;
        this.utilsService = utilsService;
        this.localNotifications = localNotifications;
        this.response = {};
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.brand = params["brand"];
            this.model = params["model"];
            this.type = params["type"];
            this.condition = params["condition"];
            this.kondisi_fisik = params["kondisi_fisik"];
            this.rubber = params["rubber"];
            this.tutup_freezer = params["tutup_freezer"];
            this.tray = params["tray"];
            this.ice_maker = params["ice_maker"];
            this.lokasi_trade = params["lokasi_trade"];
        });
        this.getData();
    }
    getData() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            let data = {
                brand: this.brand,
                type: this.type,
                model: this.model,
            };
            // console.log(deviceActivity)
            this.sellingApiService.getKulkasDetail(token, data).subscribe((response) => {
                this.response = response,
                    this.price = this.response.data;
            });
        });
    }
    submit() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            let data = {
                brand: this.brand,
                type: this.type,
                model: this.model,
                condition: this.condition,
                kondisi_fisik: this.kondisi_fisik,
                rubber: this.rubber,
                tutup_freezer: this.tutup_freezer,
                tray: this.tray,
                ice_maker: this.ice_maker,
                lokasi_trade: this.lokasi_trade,
                price: this.price
            };
            this.sellingApiService.sellKulkas(token, data).subscribe((success) => {
                this.storage.get('Reviews').then((result) => {
                    if (result) {
                        this.utilsService.showToast("Permintaan berhasil di ajukan.");
                        this.router.navigate(["landing/type"]);
                    }
                    else {
                        this.utilsService.showToast("Permintaan berhasil di ajukan.");
                        this.router.navigate(["landing/type"]);
                        this.storage.set('Reviews', true);
                        cordova.plugins.AppReview.requestReview().catch(function () {
                            return cordova.plugins.AppReview.openStoreScreen();
                        });
                    }
                });
            }, (err) => {
                var error = {};
                error = err.error;
                this.utilsService.showToast(error.message);
            });
        });
        this.localNotifications.schedule({
            id: 1,
            text: 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih',
            data: { secret: 'secret' }
        });
    }
};
DetailKulkasPage.ctorParameters = () => [
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__["SellingApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"] }
];
DetailKulkasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-kulkas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-kulkas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-kulkas.page.scss */ "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.page.scss")).default]
    })
], DetailKulkasPage);



/***/ })

}]);
//# sourceMappingURL=selling-kulkas-detail-kulkas-detail-kulkas-module-es2015.js.map