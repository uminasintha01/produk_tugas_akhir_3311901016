(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-mesin-cuci-detail-mesin-cuci-detail-mesin-cuci-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n  <div class=\"center\">\n    <img src=\"../../../../assets/images/home/zfix.png\" alt=\"\" style=\"margin-top: 20%;\">\n    <div class=\"middle\">\n      <div class=\"title\">Your Trade In</div>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Merk</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ brand }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Type</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ type }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Mesin Cuci</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ condition }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Fisik Mesin Cuci</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ kondisi_fisik }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Rubber Pada Kaki Mesin Cuci</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ rubber }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Fungsi Tutup Pada Mesin Cuci</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ tutup }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Fungsi Tombol Pada Mesin Cuci</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ tombol }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Fungsi Pembuangan Air</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ pembuangan }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Fungsi Pengering</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ pengering}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Fungsi Air Otomatis</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ air_otomatis }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Fungsi Pemanas</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ pemanas }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-textarea style=\"color: #3053A4; margin-top: 20px;\" value=\"Estimated Price\" readonly></ion-textarea>\n      <button class=\"button round\" style=\"background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">Rp.{{price | number}}</button>\n\n      <div class=\"row\" style=\"margin-top: 60px;\">\n        <div class=\"col\">\n          <button class=\"button oval\" routerLink=\"/landing/type\" style=\" background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Cancel\n          </button>\n        </div>\n        <div class=\"col\">\n          <button class=\"button oval\" (click)=\"submit()\" style=\"background-color: white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Agree\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: DetailMesinCuciPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMesinCuciPageRoutingModule", function() { return DetailMesinCuciPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_mesin_cuci_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-mesin-cuci.page */ "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.ts");




const routes = [
    {
        path: '',
        component: _detail_mesin_cuci_page__WEBPACK_IMPORTED_MODULE_3__["DetailMesinCuciPage"]
    }
];
let DetailMesinCuciPageRoutingModule = class DetailMesinCuciPageRoutingModule {
};
DetailMesinCuciPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailMesinCuciPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.module.ts ***!
  \************************************************************************************************/
/*! exports provided: DetailMesinCuciPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMesinCuciPageModule", function() { return DetailMesinCuciPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_mesin_cuci_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-mesin-cuci-routing.module */ "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci-routing.module.ts");
/* harmony import */ var _detail_mesin_cuci_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-mesin-cuci.page */ "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.ts");







let DetailMesinCuciPageModule = class DetailMesinCuciPageModule {
};
DetailMesinCuciPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_mesin_cuci_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailMesinCuciPageRoutingModule"]
        ],
        declarations: [_detail_mesin_cuci_page__WEBPACK_IMPORTED_MODULE_6__["DetailMesinCuciPage"]]
    })
], DetailMesinCuciPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15%;\n  margin-bottom: 5%;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.oval {\n  border-radius: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvZGV0YWlsLW1lc2luLWN1Y2kvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmctbWVzaW4tY3VjaVxcZGV0YWlsLW1lc2luLWN1Y2lcXGRldGFpbC1tZXNpbi1jdWNpLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvZGV0YWlsLW1lc2luLWN1Y2kvZGV0YWlsLW1lc2luLWN1Y2kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFBUSxtQkFBQTtBQ0VWOztBRERFO0VBQU8sbUJBQUE7QUNLVDs7QURIRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpJO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNPSjs7QURMSTtFQUNBLFdBQUE7QUNRSjs7QURMSTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNRSjs7QURMSTtFQUNBLFdBQUE7QUNRSjs7QURMSTtFQUNBLGVBQUE7QUNRSjs7QURMSTtFQUNBLGdCQUFBO0FDUUo7O0FETEk7RUFDQSxVQUFBO0FDUUo7O0FETEk7RUFDQSxnQkFBQTtBQ1FKOztBRExJO0VBQ0EsZ0JBQUE7QUNRSjs7QURMSTtFQUNBLFVBQUE7QUNRSjs7QURMSTtFQUNBLGdCQUFBO0FDUUo7O0FETEk7RUFDQSxnQkFBQTtBQ1FKOztBRExJO0VBQ0EsVUFBQTtBQ1FKOztBRExJO0VBQ0EsZ0JBQUE7QUNRSjs7QURMSTtFQUNBLGdCQUFBO0FDUUo7O0FETEk7RUFDQSxXQUFBO0FDUUo7O0FETEk7RUFDQSxXQUFBO0FDUUo7O0FETEk7RUFDQSxlQUFBO0FDUUo7O0FETEk7RUFDQSxnQkFBQTtBQ1FKOztBRExJO0VBQ0EsVUFBQTtBQ1FKOztBRExJO0VBQ0EsZ0JBQUE7QUNRSjs7QURMSTtFQUNBLGdCQUFBO0FDUUo7O0FETEk7RUFDQSxVQUFBO0FDUUo7O0FETEk7RUFDQSxnQkFBQTtBQ1FKOztBRExJO0VBQ0EsZ0JBQUE7QUNRSjs7QURMSTtFQUNBLFVBQUE7QUNRSjs7QURMSTtFQUNBLGdCQUFBO0FDUUo7O0FETEk7RUFDQSxnQkFBQTtBQ1FKOztBRExJO0VBQ0EsV0FBQTtBQ1FKOztBRExJO0VBQ0EsVUFBQTtBQ1FKOztBRExJO0VBQ0EsY0FBQTtBQ1FKOztBRExJO0VBQ0EsZUFBQTtBQ1FKOztBRExJO0VBQ0EsU0FBQTtBQ1FKOztBRExJO0VBQ0EsZUFBQTtBQ1FKOztBRExJO0VBQ0EsZUFBQTtBQ1FKOztBRExJO0VBQ0EsU0FBQTtBQ1FKOztBRExJO0VBQ0EsZUFBQTtBQ1FKOztBRExJO0VBQ0EsZUFBQTtBQ1FKOztBRExJO0VBQ0EsU0FBQTtBQ1FKOztBRExJO0VBQ0EsZUFBQTtBQ1FKOztBRExJO0VBQ0EsZUFBQTtBQ1FKOztBRExJO0VBQ0EsVUFBQTtBQ1FKOztBRExJO0VBQ0EsZUFBQTtBQ1FKOztBRExJO0VBQ0EscUJBQUE7QUNRSjs7QURMSTtFQUNBLHNCQUFBO0FDUUo7O0FETEk7RUFDQSxnQkFBQTtBQ1FKOztBRExJO0VBQ0Esc0JBQUE7QUNRSjs7QURMSTtFQUNBLHNCQUFBO0FDUUo7O0FETEk7RUFDQSxnQkFBQTtBQ1FKOztBRExJO0VBQ0Esc0JBQUE7QUNRSjs7QURMSTtFQUNBLHNCQUFBO0FDUUo7O0FETEk7RUFDQSxnQkFBQTtBQ1FKOztBRExJO0VBQ0Esc0JBQUE7QUNRSjs7QURMSTtFQUNBLHNCQUFBO0FDUUo7O0FETEk7RUFDQSxpQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvZGV0YWlsLW1lc2luLWN1Y2kvZGV0YWlsLW1lc2luLWN1Y2kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mLTUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuc2tpcCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzMDUzQTQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLmluc3RydWtzaSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1pZGRsZSB7IFxyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIH1cclxuICBcclxuICBocntcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kIHtib3JkZXItcmFkaXVzOiAxMnB4O31cclxuICAub3ZhbCB7Ym9yZGVyLXJhZGl1czogMjBweDt9XHJcbiAgXHJcbiAgLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICAgIC5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB9XHJcbiAgICAucm93OmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtMSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTIge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy00IHtcclxuICAgIHdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTUge1xyXG4gICAgd2lkdGg6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtNiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy03IHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTgge1xyXG4gICAgd2lkdGg6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtOSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy0xMCB7XHJcbiAgICB3aWR0aDogODMuMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy0xMSB7XHJcbiAgICB3aWR0aDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC0wIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTEge1xyXG4gICAgcmlnaHQ6IDguMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTIge1xyXG4gICAgcmlnaHQ6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC0zIHtcclxuICAgIHJpZ2h0OiAyNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtNCB7XHJcbiAgICByaWdodDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTUge1xyXG4gICAgcmlnaHQ6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC02IHtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtNyB7XHJcbiAgICByaWdodDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTgge1xyXG4gICAgcmlnaHQ6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC05IHtcclxuICAgIHJpZ2h0OiA3NSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtMTAge1xyXG4gICAgcmlnaHQ6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC0xMSB7XHJcbiAgICByaWdodDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTEyIHtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTAge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC0xIHtcclxuICAgIGxlZnQ6IDguMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTIge1xyXG4gICAgbGVmdDogMTYuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTMge1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTQge1xyXG4gICAgbGVmdDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTUge1xyXG4gICAgbGVmdDogNDEuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTYge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTcge1xyXG4gICAgbGVmdDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTgge1xyXG4gICAgbGVmdDogNjYuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTkge1xyXG4gICAgbGVmdDogNzUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTEwIHtcclxuICAgIGxlZnQ6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC0xMSB7XHJcbiAgICBsZWZ0OiA5MS42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtMTIge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC0yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC0zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC00IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC01IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC02IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC03IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC04IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC05IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC0xMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtMTEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTEyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gICAgfSIsIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mLTUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2tpcCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5pbnN0cnVrc2kge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XG4gIG1hcmdpbi10b3A6IDclO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5taWRkbGUge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4ub3ZhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbC14cy00IHtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC14cy03IHtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy05IHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVsbC0xIHtcbiAgcmlnaHQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMiB7XG4gIHJpZ2h0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0zIHtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtNSB7XG4gIHJpZ2h0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC02IHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtOCB7XG4gIHJpZ2h0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC05IHtcbiAgcmlnaHQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdWxsLTEwIHtcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTExIHtcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTEyIHtcbiAgcmlnaHQ6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVzaC0wIHtcbiAgbGVmdDogYXV0bztcbn1cblxuLmNvbC14cy1wdXNoLTEge1xuICBsZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLXB1c2gtNCB7XG4gIGxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLXB1c2gtNyB7XG4gIGxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLXB1c2gtMTAge1xuICBsZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTIge1xuICBtYXJnaW4tbGVmdDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: DetailMesinCuciPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMesinCuciPage", function() { return DetailMesinCuciPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");










let DetailMesinCuciPage = class DetailMesinCuciPage {
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
            this.type = params["type"];
            this.condition = params["condition"];
            this.kondisi_fisik = params["kondisi_fisik"];
            this.rubber = params["rubber"];
            this.tutup = params["tutup"];
            this.tombol = params["tombol"];
            this.pembuangan = params["pembuangan"];
            this.pengering = params["pengering"];
            this.air_otomatis = params["air_otomatis"];
            this.pemanas = params["pemanas"];
            this.lokasi_trade = params["lokasi_trade"];
        });
        this.getData();
    }
    getData() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            let data = {
                brand: this.brand,
                type: this.type,
            };
            // console.log(deviceActivity)
            this.sellingApiService.getMesinCuciDetail(token, data).subscribe((response) => {
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
                condition: this.condition,
                kondisi_fisik: this.kondisi_fisik,
                rubber: this.rubber,
                tutup: this.tutup,
                tombol: this.tombol,
                pembuangan: this.pembuangan,
                pengering: this.pengering,
                air_otomatis: this.air_otomatis,
                pemanas: this.pemanas,
                lokasi_trade: this.lokasi_trade,
                price: this.price
            };
            this.sellingApiService.sellMesinCuci(token, data).subscribe((success) => {
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
DetailMesinCuciPage.ctorParameters = () => [
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__["SellingApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"] }
];
DetailMesinCuciPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-mesin-cuci',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-mesin-cuci.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-mesin-cuci.page.scss */ "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.page.scss")).default]
    })
], DetailMesinCuciPage);



/***/ })

}]);
//# sourceMappingURL=selling-mesin-cuci-detail-mesin-cuci-detail-mesin-cuci-module-es2015.js.map