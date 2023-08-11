function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingsHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Daftar Transaksi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n \n        <ion-card-content >\n          <div class=\"center\" style=\"margin-left: 5%;\">\n            <div *ngFor=\"let item of trLaptop\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <ion-card style=\"width: 310px; height: 550px; border-radius: 3%; background: #3053A4;\">\n                    <div *ngIf = \"item.jenis_layanan == 2\">\n                      <div class=\"title-header\">Laptop</div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Brand</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.brand}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Memory</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.memory}} GB</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Storage</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.storages}} GB</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: #FFA95A;\">\n                          <p style=\"font-size: 16px;\">Price</p>\n                        </div>\n                        <div class=\"col\" style=\"background-color: #284483; color: #87ABDD; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Rp.{{item.price | number}}</p>\n                        </div>\n                      </div>\n                      <div *ngIf = \"item.status == 4\" class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"background-color: #284483; color: #fbfbfb; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Transaksi Telah Selesai</p>\n                        </div>\n                      </div>\n                    </div>\n                  </ion-card>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div *ngFor=\"let item of trTV\">\n                <div class=\"col\">\n                  <ion-card style=\"width: 310px; height: 550px; border-radius: 3%; background: #3053A4;\">\n                    <div *ngIf = \"item.jenis_layanan == 3\">\n                      <div class=\"title-header\">TV</div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Brand</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.brand}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Jenis TV</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.jenis_tv}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Inch</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.inch}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: #FFA95A;\">\n                          <p style=\"font-size: 16px;\">Price</p>\n                        </div>\n                        <div class=\"col\" style=\"background-color: #284483; color: #87ABDD; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Rp.{{item.price | number}}</p>\n                        </div>\n                      </div>\n                      <div *ngIf = \"item.status == 4\" class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"background-color: #284483; color: #fbfbfb; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Transaksi Telah Selesai</p>\n                        </div>\n                      </div>\n                    </div>\n                  </ion-card>\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"row\">\n              <div *ngFor=\"let item of trPS\">\n                <div class=\"col\">\n                  <ion-card style=\"width: 310px; height: 550px; border-radius: 3%; background: #3053A4;\">\n                    <div *ngIf = \"item.jenis_layanan == 4\">\n                      <div class=\"title-header\">PS</div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Jenis</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.jenis_ps}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Type</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.type}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Storage</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.storages}} GB</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: #FFA95A;\">\n                          <p style=\"font-size: 16px;\">Price</p>\n                        </div>\n                        <div class=\"col\" style=\"background-color: #284483; color: #87ABDD; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Rp.{{item.price | number}}</p>\n                        </div>\n                      </div>\n                      \n                      <div *ngIf = \"item.status == 4\" class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"background-color: #284483; color: #fbfbfb; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Transaksi Telah Selesai</p>\n                        </div>\n                      </div>\n\n                    </div>\n                  </ion-card>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div *ngFor=\"let item of trKulkas\">\n                <div class=\"col\">\n                  <ion-card style=\"width: 310px; height: 550px; border-radius: 3%; background: #3053A4;\">\n                    <div *ngIf = \"item.jenis_layanan == 5\">\n                      <div class=\"title-header\">Kulkas</div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Merk</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.brand}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Model</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.model}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Type</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.type}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: #FFA95A;\">\n                          <p style=\"font-size: 16px;\">Price</p>\n                        </div>\n                        <div class=\"col\" style=\"background-color: #284483; color: #87ABDD; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Rp.{{item.price | number}}</p>\n                        </div>\n                      </div>\n                      \n                      <div *ngIf = \"item.status == 4\" class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"background-color: #284483; color: #fbfbfb; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Transaksi Telah Selesai</p>\n                        </div>\n                      </div>\n\n                    </div>\n                  </ion-card>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div *ngFor=\"let item of trMesinCuci\">\n                <div class=\"col\">\n                  <ion-card style=\"width: 310px; height: 550px; border-radius: 3%; background: #3053A4;\">\n                    <div *ngIf = \"item.jenis_layanan == 6\">\n                      <div class=\"title-header\">Mesin Cuci</div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Merk</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.brand}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: white; text-align: left; margin-left: 12%;\">\n                          <p style=\"font-size: 16px;\">Type</p>\n                        </div>\n                        <div class=\"col\" style=\"color: #87ABDD; text-align: right; margin-right: 12%;\">\n                          <p style=\"font-size: 16px;\">{{item.type}}</p>\n                        </div>\n                        <div class=\"putus\"></div>\n                      </div>\n                      <div class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"color: #FFA95A;\">\n                          <p style=\"font-size: 16px;\">Price</p>\n                        </div>\n                        <div class=\"col\" style=\"background-color: #284483; color: #87ABDD; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Rp.{{item.price | number}}</p>\n                        </div>\n                      </div>\n                      \n                      <div *ngIf = \"item.status == 4\" class=\"row text-center\" style=\"margin-top: 30px; padding-top: 2%; margin-bottom: 50px;\">\n                        <div class=\"col\" style=\"background-color: #284483; color: #fbfbfb; padding-top: 2%; margin-right: 15%;\">\n                          <p style=\"font-size: 16px;\">Transaksi Telah Selesai</p>\n                        </div>\n                      </div>\n\n                    </div>\n                  </ion-card>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </ion-card-content>\n  </ion-content>\n    ";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/history/history-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/settings/history/history-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: HistoryPageRoutingModule */

  /***/
  function srcAppPagesLandingSettingsHistoryHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function () {
      return HistoryPageRoutingModule;
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


    var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/landing/settings/history/history.page.ts");

    var routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }];

    var HistoryPageRoutingModule = function HistoryPageRoutingModule() {
      _classCallCheck(this, HistoryPageRoutingModule);
    };

    HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/history/history.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/history/history.module.ts ***!
    \******************************************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppPagesLandingSettingsHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
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


    var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./history-routing.module */
    "./src/app/pages/landing/settings/history/history-routing.module.ts");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/landing/settings/history/history.page.ts");

    var HistoryPageModule = function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    };

    HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/history/history.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/history/history.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingsHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "hr {\n  height: 6px;\n  width: 100%;\n  background-color: #3053A4;\n  border-radius: 99px;\n  margin: 7px;\n}\n\n.garis {\n  margin-top: 30px;\n}\n\n.putus {\n  border-top: 3px dashed #87ABDD;\n  width: 100%;\n  margin-top: 0;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\n.title {\n  font-size: 17px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15px;\n  margin-bottom: 0px;\n}\n\n.title-header {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #FFA95A;\n  margin-top: 20px;\n  margin-bottom: 0px;\n}\n\n.middle {\n  width: 52vw;\n  top: 46%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.f-5 {\n  font-size: 17px;\n  margin: 0;\n  color: #3053A4;\n}\n\nhtml, body, .container {\n  height: 100%;\n}\n\n.container {\n  display: -webkit-flexbox;\n  display: flex;\n  -webkit-flex-align: center;\n  align-items: center;\n  justify-content: center;\n}\n\n.test-class > img {\n  width: 2000px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\ntable, td, th {\n  border: 1px solid black;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9oaXN0b3J5L0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nc1xcaGlzdG9yeVxcaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREtBO0VBQ0ksZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURLQTtFQUNJLHdCQUFBO0VBR0EsYUFBQTtFQUNBLDBCQUFBO0VBR0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtBQ0ZKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0k7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRElJO0VBQ0EsV0FBQTtBQ0RKOztBRElJO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElJO0VBQ0EsV0FBQTtBQ0RKOztBRElJO0VBQ0EsZUFBQTtBQ0RKOztBRElJO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLFVBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0EsVUFBQTtBQ0RKOztBRElJO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxVQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLFdBQUE7QUNESjs7QURJSTtFQUNBLFdBQUE7QUNESjs7QURJSTtFQUNBLGVBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxVQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLFVBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxnQkFBQTtBQ0RKOztBRElJO0VBQ0EsVUFBQTtBQ0RKOztBRElJO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxXQUFBO0FDREo7O0FESUk7RUFDQSxVQUFBO0FDREo7O0FESUk7RUFDQSxjQUFBO0FDREo7O0FESUk7RUFDQSxlQUFBO0FDREo7O0FESUk7RUFDQSxTQUFBO0FDREo7O0FESUk7RUFDQSxlQUFBO0FDREo7O0FESUk7RUFDQSxlQUFBO0FDREo7O0FESUk7RUFDQSxTQUFBO0FDREo7O0FESUk7RUFDQSxlQUFBO0FDREo7O0FESUk7RUFDQSxlQUFBO0FDREo7O0FESUk7RUFDQSxTQUFBO0FDREo7O0FESUk7RUFDQSxlQUFBO0FDREo7O0FESUk7RUFDQSxlQUFBO0FDREo7O0FESUk7RUFDQSxVQUFBO0FDREo7O0FESUk7RUFDQSxlQUFBO0FDREo7O0FESUk7RUFDQSxxQkFBQTtBQ0RKOztBRElJO0VBQ0Esc0JBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxzQkFBQTtBQ0RKOztBRElJO0VBQ0Esc0JBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxzQkFBQTtBQ0RKOztBRElJO0VBQ0Esc0JBQUE7QUNESjs7QURJSTtFQUNBLGdCQUFBO0FDREo7O0FESUk7RUFDQSxzQkFBQTtBQ0RKOztBRElJO0VBQ0Esc0JBQUE7QUNESjs7QURJSTtFQUNBLGlCQUFBO0FDREo7O0FESUk7RUFDQSx1QkFBQTtBQ0RKOztBRElJO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDREo7O0FESUk7RUFDSSxrQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHJ7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNTNBNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICBtYXJnaW46IDdweDtcclxufVxyXG5cclxuLmdhcmlze1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnB1dHVze1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IGRhc2hlZCAjODdBQkREO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG4vLyAudGV4dC1jZW50ZXJ7XHJcbi8vIH1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzMDUzQTQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4udGl0bGUtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0ZGQTk1QTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gICAgd2lkdGg6IDUydnc7XHJcbiAgICB0b3A6IDQ2JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uZi01IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjMzA1M0E0O1xyXG59XHJcblxyXG5odG1sLCBib2R5LCAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXN0LWNsYXNzID4gaW1nIHtcclxuICAgIHdpZHRoOiAyMDAwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICAgIC5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB9XHJcbiAgICAucm93OmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtMSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy0yIHtcclxuICAgIHdpZHRoOiAxNi42NjY2NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy0zIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy00IHtcclxuICAgIHdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy01IHtcclxuICAgIHdpZHRoOiA0MS42NjY2NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy02IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy03IHtcclxuICAgIHdpZHRoOiA1OC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy04IHtcclxuICAgIHdpZHRoOiA2Ni42NjY2NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy05IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy0xMCB7XHJcbiAgICB3aWR0aDogODMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtMTEge1xyXG4gICAgd2lkdGg6IDkxLjY2NjY3JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC0wIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC0xIHtcclxuICAgIHJpZ2h0OiA4LjMzMzMzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtMiB7XHJcbiAgICByaWdodDogMTYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC0zIHtcclxuICAgIHJpZ2h0OiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTQge1xyXG4gICAgcmlnaHQ6IDMzLjMzMzMzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtNSB7XHJcbiAgICByaWdodDogNDEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC02IHtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTcge1xyXG4gICAgcmlnaHQ6IDU4LjMzMzMzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1bGwtOCB7XHJcbiAgICByaWdodDogNjYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVsbC05IHtcclxuICAgIHJpZ2h0OiA3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTEwIHtcclxuICAgIHJpZ2h0OiA4My4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTExIHtcclxuICAgIHJpZ2h0OiA5MS42NjY2NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdWxsLTEyIHtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC0wIHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTEge1xyXG4gICAgbGVmdDogOC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTIge1xyXG4gICAgbGVmdDogMTYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC0zIHtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtNCB7XHJcbiAgICBsZWZ0OiAzMy4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTUge1xyXG4gICAgbGVmdDogNDEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC02IHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtNyB7XHJcbiAgICBsZWZ0OiA1OC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTgge1xyXG4gICAgbGVmdDogNjYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC05IHtcclxuICAgIGxlZnQ6IDc1JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLXB1c2gtMTAge1xyXG4gICAgbGVmdDogODMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtcHVzaC0xMSB7XHJcbiAgICBsZWZ0OiA5MS42NjY2NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1wdXNoLTEyIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC00IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC03IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtOCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLXhzLW9mZnNldC0xMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wteHMtb2Zmc2V0LTExIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC14cy1vZmZzZXQtMTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUsIHRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfSIsImhyIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA1M0E0O1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLmdhcmlzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnB1dHVzIHtcbiAgYm9yZGVyLXRvcDogM3B4IGRhc2hlZCAjODdBQkREO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMwNTNBNDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udGl0bGUtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZBOTVBO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5taWRkbGUge1xuICB3aWR0aDogNTJ2dztcbiAgdG9wOiA0NiU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZi01IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMzA1M0E0O1xufVxuXG5odG1sLCBib2R5LCAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4Ym94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRlc3QtY2xhc3MgPiBpbWcge1xuICB3aWR0aDogMjAwMHB4O1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sLXhzLTEge1xuICB3aWR0aDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtMiB7XG4gIHdpZHRoOiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtMyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wteHMtNCB7XG4gIHdpZHRoOiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtNSB7XG4gIHdpZHRoOiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wteHMtNyB7XG4gIHdpZHRoOiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtOCB7XG4gIHdpZHRoOiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wteHMtMTAge1xuICB3aWR0aDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy0xMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLXhzLXB1bGwtMCB7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1bGwtMSB7XG4gIHJpZ2h0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTIge1xuICByaWdodDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMyB7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVsbC00IHtcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTUge1xuICByaWdodDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtNiB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVsbC03IHtcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTgge1xuICByaWdodDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtOSB7XG4gIHJpZ2h0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVsbC0xMCB7XG4gIHJpZ2h0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMSB7XG4gIHJpZ2h0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMiB7XG4gIHJpZ2h0OiAxMDAlO1xufVxuXG4uY29sLXhzLXB1c2gtMCB7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVzaC0xIHtcbiAgbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0yIHtcbiAgbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMyB7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdXNoLTQge1xuICBsZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC01IHtcbiAgbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtNiB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdXNoLTcge1xuICBsZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC04IHtcbiAgbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtOSB7XG4gIGxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdXNoLTEwIHtcbiAgbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMTEge1xuICBsZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMiB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTAge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNyB7XG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC05IHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XG59XG5cbnRhYmxlLCB0ZCwgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/history/history.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/settings/history/history.page.ts ***!
    \****************************************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppPagesLandingSettingsHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
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
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var HistoryPage = /*#__PURE__*/function () {
      function HistoryPage(storage, sellingApiService, utilsService) {
        _classCallCheck(this, HistoryPage);

        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.utilsService = utilsService;
        this.segment = 0;
        this.sliderOptions = {
          initialSlide: 0,
          slidePerView: 1,
          speed: 400
        };
        this.trLaptop = [];
        this.trPS = [];
        this.trTV = [];
        this.trKulkas = [];
        this.trMesinCuci = [];
        this.stores = [];
        this.vouchers = [];
      }

      _createClass(HistoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getTransaction();
        }
      }, {
        key: "getTransaction",
        value: function getTransaction() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this.sellingApiService.getDetailTransaction(token).subscribe(function (response) {
              _this.trLaptop = response.data.data_arr;
              _this.trTV = response.data.data_arr2;
              _this.trPS = response.data.data_arr3;
              _this.trKulkas = response.data.data_arr5;
              _this.trMesinCuci = response.data.data_arr6;
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
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.selectedSlide = slides;
                    slides.getActiveIndex().then(function (selectedIndex) {
                      _this2.segment = selectedIndex;
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

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }];
    };

    HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/history/history.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/pages/landing/settings/history/history.page.scss"))["default"]]
    })], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=settings-history-history-module-es5.js.map