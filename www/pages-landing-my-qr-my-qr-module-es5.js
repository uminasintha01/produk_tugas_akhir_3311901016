function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-my-qr-my-qr-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingMyQrMyQrPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n  <ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n    <ion-toolbar style=\"padding-top: 10%; --background: transparant;\">\n      <ion-segment mode=\"md\" [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"0\" style=\" --indicator-height: none;\">\n          Qr Aktif\n          <hr>\n        </ion-segment-button>\n\n      </ion-segment>\n    </ion-toolbar>\n\n\n        <div class=\"center\" style=\"margin-left: 10%;\">\n          <div *ngFor=\"let item of qrLaptop\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 2\">\n                    <div class=\"title\">Laptop</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n                    <ion-card-content >\n                      <ngx-qrcode \n                        [width]=200\n                        value = \"{{item.id}}\">\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\n                        </div>\n                      </div>\n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p> \n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div *ngFor=\"let item of qrTV\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 3\">\n                    <div class=\"title\">TV</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n                    <ion-card-content >\n                      <ngx-qrcode \n                      [width]=200\n                      value = \"{{item.id}}\">\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp. {{item.price | number}}</strong>\n                        </div>\n                      </div>\n                      \n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p>\n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div *ngFor=\"let item of qrPS\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 4\">\n                    <div class=\"title\">PS</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n\n                    <ion-card-content >\n                      <ngx-qrcode \n                      [width]=200\n                      value = \"{{item.id}}\" >\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\n                        </div>\n                      </div>\n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p> \n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div *ngFor=\"let item of qrKulkas\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 5\">\n                    <div class=\"title\">Kulkas</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n\n                    <ion-card-content >\n                      <ngx-qrcode \n                      [width]=200\n                      value = \"{{item.id}}\" >\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\n                        </div>\n                      </div>\n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p> \n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div *ngFor=\"let item of qrMesinCuci\">\n              <div class=\"col\">\n                <ion-card style=\"width: 310px; height: 450px; border-radius: 10%;\">\n                  <img src=\"../../../../assets/images/default/zfix_fade.png\" alt=\"\" style=\"margin-top: 25px;\">\n                  <div *ngIf = \"item.status == 4 && item.jenis_layanan == 6\">\n                    <div class=\"title\">Mesin Cuci</div>\n                    <img class=\"middle\" src=\"../../../../assets/images/default/barcode_sq.png\" alt=\"\">\n\n                    <ion-card-content >\n                      <ngx-qrcode \n                      [width]=200\n                      value = \"{{item.id}}\" >\n                      </ngx-qrcode>\n\n                      <div *ngFor=\"let vou of vouchers\">\n                        <div *ngIf = \"item.voucher_id == vou.id \">\n                           <strong>Voucher Key: {{vou.voucher_key}}</strong>\n                        </div>\n                      </div>\n\n                      <div>\n                        <div>\n                           <strong>Harga: Rp.{{item.price | number}}</strong>\n                        </div>\n                      </div>\n\n                      <img class=\"garis\" src=\"../../../../assets/images/default/Line 32.png\" alt=\"\">\n                      <div *ngFor=\"let loc of stores\">\n                        <div *ngIf = \"item.lokasi_trade == loc.id \">\n                          <p class=\"f-5\" style=\"margin-top: 20px;\">Kunjungi toko <strong>{{loc.name}}</strong></p>\n                          <p class=\"f-5\">dan scan barcode ini</p> \n                        </div>\n                      </div>\n                    </ion-card-content>\n                  </div>\n                </ion-card>\n              </div>\n            </div>\n          </div>\n\n        </div>\n  </ion-content>\n    ";
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: MyQrPageRoutingModule */

  /***/
  function srcAppPagesLandingMyQrMyQrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyQrPageRoutingModule", function () {
      return MyQrPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _my_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-qr.page */
    "./src/app/pages/landing/my-qr/my-qr.page.ts");

    var routes = [{
      path: '',
      component: _my_qr_page__WEBPACK_IMPORTED_MODULE_3__["MyQrPage"]
    }];

    var MyQrPageRoutingModule = function MyQrPageRoutingModule() {
      _classCallCheck(this, MyQrPageRoutingModule);
    };

    MyQrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyQrPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr.module.ts ***!
    \*****************************************************/

  /*! exports provided: MyQrPageModule */

  /***/
  function srcAppPagesLandingMyQrMyQrModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyQrPageModule", function () {
      return MyQrPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-qr-routing.module */
    "./src/app/pages/landing/my-qr/my-qr-routing.module.ts");
    /* harmony import */


    var _my_qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-qr.page */
    "./src/app/pages/landing/my-qr/my-qr.page.ts");
    /* harmony import */


    var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @techiediaries/ngx-qrcode */
    "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/techiediaries-ngx-qrcode.js");

    var MyQrPageModule = function MyQrPageModule() {
      _classCallCheck(this, MyQrPageModule);
    };

    MyQrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyQrPageRoutingModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"]],
      // schemas: [
      //   CUSTOM_ELEMENTS_SCHEMA
      // ],
      declarations: [_my_qr_page__WEBPACK_IMPORTED_MODULE_6__["MyQrPage"]]
    })], MyQrPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingMyQrMyQrPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "hr {\n  height: 6px;\n  width: 100%;\n  background-color: #3053A4;\n  border-radius: 99px;\n  margin: 7px;\n}\n\n.garis {\n  margin-top: 30px;\n}\n\n.putus {\n  border-top: 3px dashed #87ABDD;\n  width: 100%;\n  margin-top: 0;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\n.title {\n  font-size: 17px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15px;\n  margin-bottom: 0px;\n}\n\n.title-header {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #FFA95A;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.middle {\n  width: 52vw;\n  top: 46%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.f-5 {\n  font-size: 17px;\n  margin: 0;\n  color: #3053A4;\n}\n\nhtml, body, .container {\n  height: 100%;\n}\n\n.container {\n  display: -webkit-flexbox;\n  display: flex;\n  -webkit-flex-align: center;\n  align-items: center;\n  justify-content: center;\n}\n\n.test-class > img {\n  width: 2000px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\ntable, td, th {\n  border: 1px solid black;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.center {\n  text-align: center;\n}\n\n.vertical-center .fixed-content,\n.vertical-center .scroll-content {\n  display: flex;\n  align-items: center;\n}\n\n.vertical-center .fixed-content ion-list,\n.vertical-center .scroll-content ion-list {\n  max-width: 300px;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9teS1xci9DOlxcVXNlcnNcXGhwXFxEb3dubG9hZHNcXHpmaXgtdHJhZGUtaW4tMjAyMi1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxteS1xclxcbXktcXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL215LXFyL215LXFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0FDQ2Y7O0FERUE7RUFDSSxnQkFBZ0I7QUNDcEI7O0FERUE7RUFDSSw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FDQ3JCOztBREtBO0VBQ0ksZUFBZTtFQUNmLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNGdEI7O0FES0E7RUFDSSxlQUFlO0VBQ2YsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQ0Z0Qjs7QURLQTtFQUNJLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsb0NBQW9DO0FDRnhDOztBREtBO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxjQUFjO0FDRmxCOztBREtBO0VBQ0ksWUFBWTtBQ0ZoQjs7QURLQTtFQUNJLHdCQUF3QjtFQUd4QixhQUFhO0VBQ2IsMEJBQTBCO0VBRzFCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUNGM0I7O0FES0E7RUFDSSxhQUFhO0FDRmpCOztBRE1BO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FDSGY7O0FES0k7RUFDQSxZQUFZO0VBQ1osY0FBYztBQ0ZsQjs7QURJSTtFQUNBLFdBQVc7QUNEZjs7QURJSTtFQUNBLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ0R2Qjs7QURJSTtFQUNBLFdBQVc7QUNEZjs7QURJSTtFQUNBLGVBQWU7QUNEbkI7O0FESUk7RUFDQSxnQkFBZ0I7QUNEcEI7O0FESUk7RUFDQSxVQUFVO0FDRGQ7O0FESUk7RUFDQSxnQkFBZ0I7QUNEcEI7O0FESUk7RUFDQSxnQkFBZ0I7QUNEcEI7O0FESUk7RUFDQSxVQUFVO0FDRGQ7O0FESUk7RUFDQSxnQkFBZ0I7QUNEcEI7O0FESUk7RUFDQSxnQkFBZ0I7QUNEcEI7O0FESUk7RUFDQSxVQUFVO0FDRGQ7O0FESUk7RUFDQSxnQkFBZ0I7QUNEcEI7O0FESUk7RUFDQSxnQkFBZ0I7QUNEcEI7O0FESUk7RUFDQSxXQUFXO0FDRGY7O0FESUk7RUFDQSxXQUFXO0FDRGY7O0FESUk7RUFDQSxlQUFlO0FDRG5COztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsVUFBVTtBQ0RkOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsVUFBVTtBQ0RkOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsVUFBVTtBQ0RkOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0EsV0FBVztBQ0RmOztBRElJO0VBQ0EsVUFBVTtBQ0RkOztBRElJO0VBQ0EsY0FBYztBQ0RsQjs7QURJSTtFQUNBLGVBQWU7QUNEbkI7O0FESUk7RUFDQSxTQUFTO0FDRGI7O0FESUk7RUFDQSxlQUFlO0FDRG5COztBRElJO0VBQ0EsZUFBZTtBQ0RuQjs7QURJSTtFQUNBLFNBQVM7QUNEYjs7QURJSTtFQUNBLGVBQWU7QUNEbkI7O0FESUk7RUFDQSxlQUFlO0FDRG5COztBRElJO0VBQ0EsU0FBUztBQ0RiOztBRElJO0VBQ0EsZUFBZTtBQ0RuQjs7QURJSTtFQUNBLGVBQWU7QUNEbkI7O0FESUk7RUFDQSxVQUFVO0FDRGQ7O0FESUk7RUFDQSxlQUFlO0FDRG5COztBRElJO0VBQ0EscUJBQXFCO0FDRHpCOztBRElJO0VBQ0Esc0JBQXNCO0FDRDFCOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0Esc0JBQXNCO0FDRDFCOztBRElJO0VBQ0Esc0JBQXNCO0FDRDFCOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0Esc0JBQXNCO0FDRDFCOztBRElJO0VBQ0Esc0JBQXNCO0FDRDFCOztBRElJO0VBQ0EsZ0JBQWdCO0FDRHBCOztBRElJO0VBQ0Esc0JBQXNCO0FDRDFCOztBRElJO0VBQ0Esc0JBQXNCO0FDRDFCOztBRElJO0VBQ0EsaUJBQWlCO0FDRHJCOztBRElJO0VBQ0EsdUJBQXVCO0FDRDNCOztBRElJO0VBQ0EsV0FBVztFQUNYLHlCQUF5QjtBQ0Q3Qjs7QURJSTtFQUNJLGtCQUFrQjtBQ0QxQjs7QURJSTs7RUFHUSxhQUFhO0VBQ2IsbUJBQW1CO0FDRi9COztBREZJOztFQU9ZLGdCQUFnQjtFQUNoQixXQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQ0FsQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbXktcXIvbXktcXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHJ7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNTNBNDtcbiAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICAgIG1hcmdpbjogN3B4O1xufVxuXG4uZ2FyaXN7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnB1dHVze1xuICAgIGJvcmRlci10b3A6IDNweCBkYXNoZWQgIzg3QUJERDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbi8vIC50ZXh0LWNlbnRlcntcbi8vIH1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzMDUzQTQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi50aXRsZS1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0ZGQTk1QTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1pZGRsZSB7XG4gICAgd2lkdGg6IDUydnc7XG4gICAgdG9wOiA0NiU7XG4gICAgbGVmdDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mLTUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMzMDUzQTQ7XG59XG5cbmh0bWwsIGJvZHksIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXN0LWNsYXNzID4gaW1nIHtcbiAgICB3aWR0aDogMjAwMHB4O1xuICB9XG4gIFxuXG4ucm93OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbiAgICAucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgfVxuICAgIC5yb3c6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIH1cblxuICAgIC5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgfVxuXG4gICAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuXG4gICAgLmNvbC14cy0xIHtcbiAgICB3aWR0aDogOC4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy0yIHtcbiAgICB3aWR0aDogMTYuNjY2NjclO1xuICAgIH1cblxuICAgIC5jb2wteHMtMyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICB9XG5cbiAgICAuY29sLXhzLTQge1xuICAgIHdpZHRoOiAzMy4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy01IHtcbiAgICB3aWR0aDogNDEuNjY2NjclO1xuICAgIH1cblxuICAgIC5jb2wteHMtNiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAuY29sLXhzLTcge1xuICAgIHdpZHRoOiA1OC4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy04IHtcbiAgICB3aWR0aDogNjYuNjY2NjclO1xuICAgIH1cblxuICAgIC5jb2wteHMtOSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICB9XG5cbiAgICAuY29sLXhzLTEwIHtcbiAgICB3aWR0aDogODMuMzMzMzMlO1xuICAgIH1cblxuICAgIC5jb2wteHMtMTEge1xuICAgIHdpZHRoOiA5MS42NjY2NyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy0xMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTAge1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5jb2wteHMtcHVsbC0xIHtcbiAgICByaWdodDogOC4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTIge1xuICAgIHJpZ2h0OiAxNi42NjY2NyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTMge1xuICAgIHJpZ2h0OiAyNSU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTQge1xuICAgIHJpZ2h0OiAzMy4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTUge1xuICAgIHJpZ2h0OiA0MS42NjY2NyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTYge1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTcge1xuICAgIHJpZ2h0OiA1OC4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTgge1xuICAgIHJpZ2h0OiA2Ni42NjY2NyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTkge1xuICAgIHJpZ2h0OiA3NSU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdWxsLTEwIHtcbiAgICByaWdodDogODMuMzMzMzMlO1xuICAgIH1cblxuICAgIC5jb2wteHMtcHVsbC0xMSB7XG4gICAgcmlnaHQ6IDkxLjY2NjY3JTtcbiAgICB9XG5cbiAgICAuY29sLXhzLXB1bGwtMTIge1xuICAgIHJpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jb2wteHMtcHVzaC0wIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC5jb2wteHMtcHVzaC0xIHtcbiAgICBsZWZ0OiA4LjMzMzMzJTtcbiAgICB9XG5cbiAgICAuY29sLXhzLXB1c2gtMiB7XG4gICAgbGVmdDogMTYuNjY2NjclO1xuICAgIH1cblxuICAgIC5jb2wteHMtcHVzaC0zIHtcbiAgICBsZWZ0OiAyNSU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdXNoLTQge1xuICAgIGxlZnQ6IDMzLjMzMzMzJTtcbiAgICB9XG5cbiAgICAuY29sLXhzLXB1c2gtNSB7XG4gICAgbGVmdDogNDEuNjY2NjclO1xuICAgIH1cblxuICAgIC5jb2wteHMtcHVzaC02IHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdXNoLTcge1xuICAgIGxlZnQ6IDU4LjMzMzMzJTtcbiAgICB9XG5cbiAgICAuY29sLXhzLXB1c2gtOCB7XG4gICAgbGVmdDogNjYuNjY2NjclO1xuICAgIH1cblxuICAgIC5jb2wteHMtcHVzaC05IHtcbiAgICBsZWZ0OiA3NSU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdXNoLTEwIHtcbiAgICBsZWZ0OiA4My4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdXNoLTExIHtcbiAgICBsZWZ0OiA5MS42NjY2NyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1wdXNoLTEyIHtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jb2wteHMtb2Zmc2V0LTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICB9XG5cbiAgICAuY29sLXhzLW9mZnNldC0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1vZmZzZXQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbiAgICB9XG5cbiAgICAuY29sLXhzLW9mZnNldC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIH1cblxuICAgIC5jb2wteHMtb2Zmc2V0LTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1vZmZzZXQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbiAgICB9XG5cbiAgICAuY29sLXhzLW9mZnNldC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIH1cblxuICAgIC5jb2wteHMtb2Zmc2V0LTcge1xuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG4gICAgfVxuXG4gICAgLmNvbC14cy1vZmZzZXQtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbiAgICB9XG5cbiAgICAuY29sLXhzLW9mZnNldC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICAgIH1cblxuICAgIC5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xuICAgIH1cblxuICAgIC5jb2wteHMtb2Zmc2V0LTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xuICAgIH1cblxuICAgIC5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgICB9XG5cbiAgICB0YWJsZSwgdGQsIHRoIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG5cbiAgICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB9XG5cbiAgICAuY2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC52ZXJ0aWNhbC1jZW50ZXIge1xuICAgICAgICAuZml4ZWQtY29udGVudCxcbiAgICAgICAgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgICAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7IFxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7IFxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bzsgXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSIsImhyIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA1M0E0O1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLmdhcmlzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnB1dHVzIHtcbiAgYm9yZGVyLXRvcDogM3B4IGRhc2hlZCAjODdBQkREO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnRpdGxlLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkE5NUE7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1pZGRsZSB7XG4gIHdpZHRoOiA1MnZ3O1xuICB0b3A6IDQ2JTtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mLTUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMzMDUzQTQ7XG59XG5cbmh0bWwsIGJvZHksIC5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXhib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGVzdC1jbGFzcyA+IGltZyB7XG4gIHdpZHRoOiAyMDAwcHg7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbC14cy00IHtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC14cy03IHtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy05IHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVsbC0xIHtcbiAgcmlnaHQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMiB7XG4gIHJpZ2h0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0zIHtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtNSB7XG4gIHJpZ2h0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC02IHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtOCB7XG4gIHJpZ2h0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC05IHtcbiAgcmlnaHQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdWxsLTEwIHtcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTExIHtcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTEyIHtcbiAgcmlnaHQ6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVzaC0wIHtcbiAgbGVmdDogYXV0bztcbn1cblxuLmNvbC14cy1wdXNoLTEge1xuICBsZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLXB1c2gtNCB7XG4gIGxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLXB1c2gtNyB7XG4gIGxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLXB1c2gtMTAge1xuICBsZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTIge1xuICBtYXJnaW4tbGVmdDogMTAwJTtcbn1cblxudGFibGUsIHRkLCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmVydGljYWwtY2VudGVyIC5maXhlZC1jb250ZW50LFxuLnZlcnRpY2FsLWNlbnRlciAuc2Nyb2xsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udmVydGljYWwtY2VudGVyIC5maXhlZC1jb250ZW50IGlvbi1saXN0LFxuLnZlcnRpY2FsLWNlbnRlciAuc2Nyb2xsLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/my-qr/my-qr.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/landing/my-qr/my-qr.page.ts ***!
    \***************************************************/

  /*! exports provided: MyQrPage */

  /***/
  function srcAppPagesLandingMyQrMyQrPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyQrPage", function () {
      return MyQrPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var MyQrPage = /*#__PURE__*/function () {
      function MyQrPage(storage, sellingApiService, utilsService) {
        _classCallCheck(this, MyQrPage);

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

      _createClass(MyQrPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          setInterval(function () {
            _this.getQRCODE();
          }, 2000);
          this.getTransaction();
        }
      }, {
        key: "getQRCODE",
        value: function getQRCODE() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this2.sellingApiService.getQR(token).subscribe(function (response) {
              _this2.qrLaptop = response.data.arr;
              _this2.qrTV = response.data.arr2;
              _this2.qrPS = response.data.arr3;
              _this2.qrKulkas = response.data.arr5;
              _this2.qrMesinCuci = response.data.arr6;
              _this2.stores = response.data.store;
              _this2.vouchers = response.data.voucher;
              console.log(response.data.arr2);
            }, function (err) {// this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "getTransaction",
        value: function getTransaction() {
          var _this3 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this3.sellingApiService.getDetailTransaction(token).subscribe(function (response) {
              _this3.trLaptop = response.data.data_arr;
              _this3.trTV = response.data.data_arr2;
              _this3.trPS = response.data.data_arr3;
              _this3.trKulkas = response.data.data_arr5;
              _this3.trMesinCuci = response.data.data_arr6;
            }, function (err) {// this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.selectedSlide.slideTo(this.segment);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "slideShanged",
        value: function slideShanged(slides) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.selectedSlide = slides;
                    slides.getActiveIndex().then(function (selectedIndex) {
                      _this4.segment = selectedIndex;
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return MyQrPage;
    }();

    MyQrPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }];
    };

    MyQrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-qr',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-qr.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-qr/my-qr.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-qr.page.scss */
      "./src/app/pages/landing/my-qr/my-qr.page.scss"))["default"]]
    })], MyQrPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-landing-my-qr-my-qr-module-es5.js.map