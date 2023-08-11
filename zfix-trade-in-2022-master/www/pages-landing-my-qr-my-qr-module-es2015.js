(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-my-qr-my-qr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n  <ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n    <ion-toolbar style=\"padding-top: 10%; --background: transparant;\">\n      <ion-segment mode=\"md\" [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"0\" style=\" --indicator-height: none;\">\n          Qr Aktif\n          <hr>\n        </ion-segment-button>\n\n      </ion-segment>\n    </ion-toolbar>\n\n\n        <div class=\"center\" style=\"margin-left: 10%;\">\n          <div *ngFor=\"let item of qrLaptop\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 2\">\n                    <div class=\"title\">Laptop</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n                    <ion-card-content >\n                      <ngx-qrcode \n                        [width]=200\n                        value = \"{{item.id}}\">\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\n                        </div>\n                      </div>\n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p> \n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div *ngFor=\"let item of qrTV\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 3\">\n                    <div class=\"title\">TV</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n                    <ion-card-content >\n                      <ngx-qrcode \n                      [width]=200\n                      value = \"{{item.id}}\">\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp. {{item.price | number}}</strong>\n                        </div>\n                      </div>\n                      \n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p>\n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div *ngFor=\"let item of qrPS\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 4\">\n                    <div class=\"title\">PS</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n\n                    <ion-card-content >\n                      <ngx-qrcode \n                      [width]=200\n                      value = \"{{item.id}}\" >\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\n                        </div>\n                      </div>\n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p> \n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div *ngFor=\"let item of qrKulkas\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 5\">\n                    <div class=\"title\">Kulkas</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n\n                    <ion-card-content >\n                      <ngx-qrcode \n                      [width]=200\n                      value = \"{{item.id}}\" >\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\n                        </div>\n                      </div>\n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p> \n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div *ngFor=\"let item of qrMesinCuci\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 6\">\n                    <div class=\"title\">Mesin Cuci</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n\n                    <ion-card-content >\n                      <ngx-qrcode \n                      [width]=200\n                      value = \"{{item.id}}\" >\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\n                        </div>\n                      </div>\n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p> \n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n\n        </div>\n  </ion-content>\n    ");

/***/ }),

/***/ "./src/app/pages/landing/my-qr/my-qr-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/landing/my-qr/my-qr-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MyQrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQrPageRoutingModule", function() { return MyQrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-qr.page */ "./src/app/pages/landing/my-qr/my-qr.page.ts");




const routes = [
    {
        path: '',
        component: _my_qr_page__WEBPACK_IMPORTED_MODULE_3__["MyQrPage"]
    }
];
let MyQrPageRoutingModule = class MyQrPageRoutingModule {
};
MyQrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyQrPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/my-qr/my-qr.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/landing/my-qr/my-qr.module.ts ***!
  \*****************************************************/
/*! exports provided: MyQrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQrPageModule", function() { return MyQrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-qr-routing.module */ "./src/app/pages/landing/my-qr/my-qr-routing.module.ts");
/* harmony import */ var _my_qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-qr.page */ "./src/app/pages/landing/my-qr/my-qr.page.ts");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/techiediaries-ngx-qrcode.js");








let MyQrPageModule = class MyQrPageModule {
};
MyQrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyQrPageRoutingModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"]
        ],
        // schemas: [
        //   CUSTOM_ELEMENTS_SCHEMA
        // ],
        declarations: [_my_qr_page__WEBPACK_IMPORTED_MODULE_6__["MyQrPage"]]
    })
], MyQrPageModule);



/***/ }),

/***/ "./src/app/pages/landing/my-qr/my-qr.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/landing/my-qr/my-qr.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\n  height: 6px;\n  width: 100%;\n  background-color: #3053A4;\n  border-radius: 99px;\n  margin: 7px;\n}\n\n.garis {\n  margin-top: 30px;\n}\n\n.putus {\n  border-top: 3px dashed #87ABDD;\n  width: 100%;\n  margin-top: 0;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\n.title {\n  font-size: 17px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15px;\n  margin-bottom: 0px;\n}\n\n.title-header {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #FFA95A;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.middle {\n  width: 52vw;\n  top: 46%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.f-5 {\n  font-size: 17px;\n  margin: 0;\n  color: #3053A4;\n}\n\nhtml, body, .container {\n  height: 100%;\n}\n\n.container {\n  display: -webkit-flexbox;\n  display: flex;\n  -webkit-flex-align: center;\n  align-items: center;\n  justify-content: center;\n}\n\n.test-class > img {\n  width: 2000px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\ntable, td, th {\n  border: 1px solid black;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.center {\n  text-align: center;\n}\n\n.vertical-center .fixed-content,\n.vertical-center .scroll-content {\n  display: flex;\n  align-items: center;\n}\n\n.vertical-center .fixed-content ion-list,\n.vertical-center .scroll-content ion-list {\n  max-width: 300px;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbXktcXJcXG15LXFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9teS1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURLQTtFQUNJLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0FDRko7O0FES0E7RUFDSSx3QkFBQTtFQUdBLGFBQUE7RUFDQSwwQkFBQTtFQUdBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURNQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0hKOztBREtJO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNGSjs7QURJSTtFQUNBLFdBQUE7QUNESjs7QURJSTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJSTtFQUNBLFdBQUE7QUNESjs7QURJSTtFQUNBLGVBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxVQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLFVBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0EsVUFBQTtBQ0RKOztBRElJO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxXQUFBO0FDREo7O0FESUk7RUFDQSxXQUFBO0FDREo7O0FESUk7RUFDQSxlQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0EsVUFBQTtBQ0RKOztBRElJO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxVQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLFVBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0EsV0FBQTtBQ0RKOztBRElJO0VBQ0EsVUFBQTtBQ0RKOztBRElJO0VBQ0EsY0FBQTtBQ0RKOztBRElJO0VBQ0EsZUFBQTtBQ0RKOztBRElJO0VBQ0EsU0FBQTtBQ0RKOztBRElJO0VBQ0EsZUFBQTtBQ0RKOztBRElJO0VBQ0EsZUFBQTtBQ0RKOztBRElJO0VBQ0EsU0FBQTtBQ0RKOztBRElJO0VBQ0EsZUFBQTtBQ0RKOztBRElJO0VBQ0EsZUFBQTtBQ0RKOztBRElJO0VBQ0EsU0FBQTtBQ0RKOztBRElJO0VBQ0EsZUFBQTtBQ0RKOztBRElJO0VBQ0EsZUFBQTtBQ0RKOztBRElJO0VBQ0EsVUFBQTtBQ0RKOztBRElJO0VBQ0EsZUFBQTtBQ0RKOztBRElJO0VBQ0EscUJBQUE7QUNESjs7QURJSTtFQUNBLHNCQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0Esc0JBQUE7QUNESjs7QURJSTtFQUNBLHNCQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0Esc0JBQUE7QUNESjs7QURJSTtFQUNBLHNCQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0Esc0JBQUE7QUNESjs7QURJSTtFQUNBLHNCQUFBO0FDREo7O0FESUk7RUFDQSxpQkFBQTtBQ0RKOztBRElJO0VBQ0EsdUJBQUE7QUNESjs7QURJSTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0RKOztBRElJO0VBQ0ksa0JBQUE7QUNEUjs7QURLUTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7QUNGWjs7QURJWTs7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL215LXFyL215LXFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhye1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDUzQTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbn1cclxuXHJcbi5nYXJpc3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5wdXR1c3tcclxuICAgIGJvcmRlci10b3A6IDNweCBkYXNoZWQgIzg3QUJERDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxufVxyXG5cclxuLy8gLnRleHQtY2VudGVye1xyXG4vLyB9XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzA1M0E0O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnRpdGxlLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRkE5NUE7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICAgIHdpZHRoOiA1MnZ3O1xyXG4gICAgdG9wOiA0NiU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmYtNSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzMwNTNBNDtcclxufVxyXG5cclxuaHRtbCwgYm9keSwgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGVzdC1jbGFzcyA+IGltZyB7XHJcbiAgICB3aWR0aDogMjAwMHB4O1xyXG4gIH1cclxuICBcclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgICAucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgfVxyXG4gICAgLnJvdzphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLTEge1xyXG4gICAgd2lkdGg6IDguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtMiB7XHJcbiAgICB3aWR0aDogMTYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtNCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtNSB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtNiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtNyB7XHJcbiAgICB3aWR0aDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtOCB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtOSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtMTAge1xyXG4gICAgd2lkdGg6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLTExIHtcclxuICAgIHdpZHRoOiA5MS42NjY2NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtMCB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtMSB7XHJcbiAgICByaWdodDogOC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTIge1xyXG4gICAgcmlnaHQ6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtMyB7XHJcbiAgICByaWdodDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC00IHtcclxuICAgIHJpZ2h0OiAzMy4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTUge1xyXG4gICAgcmlnaHQ6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtNiB7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC03IHtcclxuICAgIHJpZ2h0OiA1OC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTgge1xyXG4gICAgcmlnaHQ6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtOSB7XHJcbiAgICByaWdodDogNzUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC0xMCB7XHJcbiAgICByaWdodDogODMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC0xMSB7XHJcbiAgICByaWdodDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC0xMiB7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtMCB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC0xIHtcclxuICAgIGxlZnQ6IDguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC0yIHtcclxuICAgIGxlZnQ6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtMyB7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTQge1xyXG4gICAgbGVmdDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC01IHtcclxuICAgIGxlZnQ6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtNiB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTcge1xyXG4gICAgbGVmdDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC04IHtcclxuICAgIGxlZnQ6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtOSB7XHJcbiAgICBsZWZ0OiA3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTEwIHtcclxuICAgIGxlZnQ6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtMTEge1xyXG4gICAgbGVmdDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC0xMiB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC0zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtNCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC02IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtNyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC05IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtMTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC0xMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTEyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlLCB0ZCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtY2VudGVyIHtcclxuICAgICAgICAuZml4ZWQtY29udGVudCxcclxuICAgICAgICAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTsgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSIsImhyIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA1M0E0O1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLmdhcmlzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnB1dHVzIHtcbiAgYm9yZGVyLXRvcDogM3B4IGRhc2hlZCAjODdBQkREO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMwNTNBNDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udGl0bGUtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZBOTVBO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5taWRkbGUge1xuICB3aWR0aDogNTJ2dztcbiAgdG9wOiA0NiU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZi01IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMzA1M0E0O1xufVxuXG5odG1sLCBib2R5LCAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4Ym94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRlc3QtY2xhc3MgPiBpbWcge1xuICB3aWR0aDogMjAwMHB4O1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sLXhzLTEge1xuICB3aWR0aDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtMiB7XG4gIHdpZHRoOiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtMyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wteHMtNCB7XG4gIHdpZHRoOiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtNSB7XG4gIHdpZHRoOiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wteHMtNyB7XG4gIHdpZHRoOiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtOCB7XG4gIHdpZHRoOiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wteHMtMTAge1xuICB3aWR0aDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy0xMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLXhzLXB1bGwtMCB7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1bGwtMSB7XG4gIHJpZ2h0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTIge1xuICByaWdodDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMyB7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVsbC00IHtcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTUge1xuICByaWdodDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtNiB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVsbC03IHtcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTgge1xuICByaWdodDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtOSB7XG4gIHJpZ2h0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVsbC0xMCB7XG4gIHJpZ2h0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMSB7XG4gIHJpZ2h0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMiB7XG4gIHJpZ2h0OiAxMDAlO1xufVxuXG4uY29sLXhzLXB1c2gtMCB7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVzaC0xIHtcbiAgbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0yIHtcbiAgbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMyB7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdXNoLTQge1xuICBsZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC01IHtcbiAgbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtNiB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdXNoLTcge1xuICBsZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC04IHtcbiAgbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtOSB7XG4gIGxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdXNoLTEwIHtcbiAgbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMTEge1xuICBsZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMiB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTAge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNyB7XG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC05IHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XG59XG5cbnRhYmxlLCB0ZCwgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZlcnRpY2FsLWNlbnRlciAuZml4ZWQtY29udGVudCxcbi52ZXJ0aWNhbC1jZW50ZXIgLnNjcm9sbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi52ZXJ0aWNhbC1jZW50ZXIgLmZpeGVkLWNvbnRlbnQgaW9uLWxpc3QsXG4udmVydGljYWwtY2VudGVyIC5zY3JvbGwtY29udGVudCBpb24tbGlzdCB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/my-qr/my-qr.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/my-qr/my-qr.page.ts ***!
  \***************************************************/
/*! exports provided: MyQrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQrPage", function() { return MyQrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/utilities.service */ "./src/app/services/utilities.service.ts");






let MyQrPage = class MyQrPage {
    constructor(storage, sellingApiService, utilsService) {
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.utilsService = utilsService;
        this.segment = 0;
        this.sliderOptions = {
            initialSlide: 0,
            slidePerView: 1,
            speed: 400
        };
        this.qrLaptop = [];
        this.qrPS = [];
        this.qrTV = [];
        this.qrKulkas = [];
        this.qrMesinCuci = [];
        this.trLaptop = [];
        this.trPS = [];
        this.trTV = [];
        this.trKulkas = [];
        this.trMesinCuci = [];
        this.stores = [];
        this.vouchers = [];
        this.encoded = '1';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        setInterval(() => {
            this.getQRCODE();
        }, 2000);
        this.getTransaction();
    }
    getQRCODE() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.sellingApiService.getQR(token).subscribe((response) => {
                this.qrLaptop = response.data.arr;
                this.qrTV = response.data.arr2;
                this.qrPS = response.data.arr3;
                this.qrKulkas = response.data.arr5;
                this.qrMesinCuci = response.data.arr6;
                this.stores = response.data.store;
                this.vouchers = response.data.voucher;
                console.log(response.data.arr2);
            }, (err) => {
                // this.utilsService.showToast("There is a problem.");
            });
        });
    }
    getTransaction() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.sellingApiService.getDetailTransaction(token).subscribe((response) => {
                this.trLaptop = response.data.data_arr;
                this.trTV = response.data.data_arr2;
                this.trPS = response.data.data_arr3;
                this.trKulkas = response.data.data_arr5;
                this.trMesinCuci = response.data.data_arr6;
            }, (err) => {
                // this.utilsService.showToast("There is a problem.");
            });
        });
    }
    segmentChanged(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.selectedSlide.slideTo(this.segment);
        });
    }
    slideShanged(slides) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedSlide = slides;
            slides.getActiveIndex().then(selectedIndex => {
                this.segment = selectedIndex;
            });
        });
    }
};
MyQrPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] }
];
MyQrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-qr',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-qr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-qr.page.scss */ "./src/app/pages/landing/my-qr/my-qr.page.scss")).default]
    })
], MyQrPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-my-qr-my-qr-module-es2015.js.map