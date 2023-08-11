(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-laptop-detail-unit-detail-unit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n  <div class=\"center\">\n    <img src=\"../../../../assets/images/home/zfix.png\" alt=\"\" style=\"margin-top: 20%;\">\n    <div class=\"middle\">\n      <div class=\"title\">Your Trade In</div>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Merk</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ brand }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Jenis Storage</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ jenis_storage }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Storage</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ storages}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>RAM</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ memory }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Processor</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ processor }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Operating System</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ os }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Ukuran Laptop</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ ukuran_laptop }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Laptop</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ kondisi_laptop}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Jenis Layar Laptop</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ jenis_layar}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Layar Laptop</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ kondisi_layar}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Layar Dalam</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ inner_valueSelected}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Layar Luar</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ outer_valueSelected}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Fisik</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ condition_valueSelected}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Baterai</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ baterai}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Tombol Keyboard</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ keyboard}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Trackpad</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ trackpad}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ port}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Wifi/Bluetooth</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ wifi}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Front Camera</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ camera }}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kondisi Speaker</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ speaker}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kelengkapan</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ addition_valueSelected}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-item text-wrap style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <p>Kelengkapan Tambahan</p>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-textarea value=\"{{ more_addition}}\" readonly></ion-textarea>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-textarea style=\"color: #3053A4; margin-top: 20px;\" value=\"Estimated Price\" readonly></ion-textarea>\n      <button class=\"button round\" style=\"background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">Rp.{{price | number}}</button>\n\n      <div class=\"row\" style=\"margin-top: 60px;\">\n        <div class=\"col\">\n          <button class=\"button oval\" routerLink=\"/landing/type\" style=\" background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Cancel\n          </button>\n        </div>\n        <div class=\"col\">\n          <button class=\"button oval\" (click)=\"submit()\" style=\"background-color: white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Agree\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-laptop/detail-unit/detail-unit-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: DetailUnitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUnitPageRoutingModule", function() { return DetailUnitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_unit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-unit.page */ "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.ts");




const routes = [
    {
        path: '',
        component: _detail_unit_page__WEBPACK_IMPORTED_MODULE_3__["DetailUnitPage"]
    }
];
let DetailUnitPageRoutingModule = class DetailUnitPageRoutingModule {
};
DetailUnitPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailUnitPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.module.ts ***!
  \********************************************************************************/
/*! exports provided: DetailUnitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUnitPageModule", function() { return DetailUnitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_unit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-unit-routing.module */ "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit-routing.module.ts");
/* harmony import */ var _detail_unit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-unit.page */ "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.ts");







let DetailUnitPageModule = class DetailUnitPageModule {
};
DetailUnitPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_unit_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailUnitPageRoutingModule"]
        ],
        declarations: [_detail_unit_page__WEBPACK_IMPORTED_MODULE_6__["DetailUnitPage"]]
    })
], DetailUnitPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15%;\n  margin-bottom: 5%;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.oval {\n  border-radius: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWxhcHRvcC9kZXRhaWwtdW5pdC9DOlxcVXNlcnNcXGhwXFxEb3dubG9hZHNcXHpmaXgtdHJhZGUtaW4tMjAyMi1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLWxhcHRvcFxcZGV0YWlsLXVuaXRcXGRldGFpbC11bml0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWxhcHRvcC9kZXRhaWwtdW5pdC9kZXRhaWwtdW5pdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUNDcEI7O0FERUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7QUNDZDs7QURFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FDQ2Q7O0FERUE7RUFDRSxlQUFlO0VBQ2YsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQ0NuQjs7QURFQTtFQUNFLGVBQWU7RUFDZiw0REFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FDQ3BCOztBREVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUNDbkI7O0FERUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQ0NYOztBREVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0FDQ2pCOztBREVBO0VBQVEsbUJBQW1CO0FDRTNCOztBRERBO0VBQU8sbUJBQW1CO0FDSzFCOztBREhBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FDTWI7O0FESkU7RUFDQSxZQUFZO0VBQ1osY0FBYztBQ09oQjs7QURMRTtFQUNBLFdBQVc7QUNRYjs7QURMRTtFQUNBLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ1FyQjs7QURMRTtFQUNBLFdBQVc7QUNRYjs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxXQUFXO0FDUWI7O0FETEU7RUFDQSxXQUFXO0FDUWI7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsVUFBVTtBQ1FaOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsVUFBVTtBQ1FaOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsVUFBVTtBQ1FaOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0EsV0FBVztBQ1FiOztBRExFO0VBQ0EsVUFBVTtBQ1FaOztBRExFO0VBQ0EsY0FBYztBQ1FoQjs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxTQUFTO0FDUVg7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EsZUFBZTtBQ1FqQjs7QURMRTtFQUNBLFNBQVM7QUNRWDs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EsU0FBUztBQ1FYOztBRExFO0VBQ0EsZUFBZTtBQ1FqQjs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EscUJBQXFCO0FDUXZCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0EsZ0JBQWdCO0FDUWxCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0Esc0JBQXNCO0FDUXhCOztBRExFO0VBQ0EsaUJBQWlCO0FDUW5CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWxhcHRvcC9kZXRhaWwtdW5pdC9kZXRhaWwtdW5pdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZi01IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNraXAge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzA1M0E0O1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uaW5zdHJ1a3NpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWlkZGxlIHsgXG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbmhye1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kIHtib3JkZXItcmFkaXVzOiAxMnB4O31cbi5vdmFsIHtib3JkZXItcmFkaXVzOiAyMHB4O31cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbiAgfVxuICAucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICAucm93OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIH1cblxuICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuXG4gIC5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtMiB7XG4gIHdpZHRoOiAxNi42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xuICB9XG5cbiAgLmNvbC14cy00IHtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtNSB7XG4gIHdpZHRoOiA0MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmNvbC14cy03IHtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtOCB7XG4gIHdpZHRoOiA2Ni42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xuICB9XG5cbiAgLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG4gIH1cblxuICAuY29sLXhzLXB1bGwtMSB7XG4gIHJpZ2h0OiA4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0zIHtcbiAgcmlnaHQ6IDI1JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC00IHtcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC02IHtcbiAgcmlnaHQ6IDUwJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC03IHtcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC05IHtcbiAgcmlnaHQ6IDc1JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0xMCB7XG4gIHJpZ2h0OiA4My4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTEyIHtcbiAgcmlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtMCB7XG4gIGxlZnQ6IGF1dG87XG4gIH1cblxuICAuY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtMyB7XG4gIGxlZnQ6IDI1JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtNiB7XG4gIGxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtOSB7XG4gIGxlZnQ6IDc1JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0xMiB7XG4gIGxlZnQ6IDEwMCU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICB9IiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmYtNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5za2lwIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5pbnN0cnVrc2kge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWlkZGxlIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5vdmFsIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLTIge1xuICB3aWR0aDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTUge1xuICB3aWR0aDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLTgge1xuICB3aWR0aDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy0xMSB7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbn1cblxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuXG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuXG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuXG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cblxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.ts ***!
  \******************************************************************************/
/*! exports provided: DetailUnitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUnitPage", function() { return DetailUnitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");










let DetailUnitPage = class DetailUnitPage {
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
            this.memory = params["memory"];
            this.storages = params["storages"];
            this.inner_valueSelected = params["inner_valueSelected"];
            this.outer_valueSelected = params["outer_valueSelected"];
            this.condition_valueSelected = params["condition_valueSelected"];
            this.addition_valueSelected = params["addition_valueSelected"];
            this.lokasi_trade = params["lokasi_trade"];
            this.jenis_storage = params["jenis_storage"];
            this.kondisi_laptop = params["kondisi_laptop"];
            this.jenis_layar = params["jenis_layar"];
            this.baterai = params["baterai"];
            this.kondisi_layar = params["kondisi_layar"];
            this.keyboard = params["keyboard"];
            this.trackpad = params["trackpad"];
            this.port = params["port"];
            this.wifi = params["wifi"];
            this.camera = params["camera"];
            this.speaker = params["speaker"];
            this.processor = params["processor"];
            this.ukuran_laptop = params["ukuran_laptop"];
            this.os = params["os"];
            this.more_addition = params["more_addition"];
        });
        this.getData();
    }
    getData() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            let data = {
                brand: this.brand,
                memory: this.memory,
                storages: this.storages,
                processor: this.processor,
                jenis_storage: this.jenis_storage,
                ukuran_laptop: this.ukuran_laptop,
                os: this.os,
            };
            // console.log(deviceActivity)
            this.sellingApiService.getLaptopDetail(token, data).subscribe((response) => {
                this.response = response,
                    this.price = this.response.data;
            });
        });
    }
    submit() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            let data = {
                brand: this.brand,
                memory: this.memory,
                storages: this.storages,
                inner_screen: this.inner_valueSelected,
                outer_screen: this.outer_valueSelected,
                condition: this.condition_valueSelected,
                addition: this.addition_valueSelected,
                price: this.price,
                lokasi_trade: this.lokasi_trade,
                jenis_storage: this.jenis_storage,
                kondisi_laptop: this.kondisi_laptop,
                jenis_layar: this.jenis_layar,
                baterai: this.baterai,
                kondisi_layar: this.kondisi_layar,
                keyboard: this.keyboard,
                trackpad: this.trackpad,
                port: this.port,
                wifi: this.wifi,
                camera: this.camera,
                speaker: this.speaker,
                processor: this.processor,
                ukuran_laptop: this.ukuran_laptop,
                os: this.os,
                more_addition: this.more_addition
            };
            this.sellingApiService.sellLaptop(token, data).subscribe((success) => {
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
DetailUnitPage.ctorParameters = () => [
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__["SellingApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_8__["LocalNotifications"] }
];
DetailUnitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-unit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-unit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-unit.page.scss */ "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.page.scss")).default]
    })
], DetailUnitPage);



/***/ })

}]);
//# sourceMappingURL=selling-laptop-detail-unit-detail-unit-module-es2015.js.map