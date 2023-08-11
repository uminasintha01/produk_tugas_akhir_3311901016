function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-tv-tv-brand-tv-brand-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingTvTvBrandTvBrandPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\r\n    <div class=\"div-h1\">\r\n      <h1>Your Trade In</h1>\r\n    </div>\r\n    <div class=\"content\">\r\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n        <ion-label>Merk</ion-label>\r\n        <ion-select (ionChange) = \"this.brand = $event.target.value\">\r\n          <ion-select-option *ngFor=\"let row_brand of data_brand\" value=\"{{row_brand.brand}}\" placeholder=\"Pilih..\">{{row_brand.brand}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n        <ion-label>Jenis TV</ion-label>\r\n        <ion-select (ionChange) = \"this.jenis= $event.target.value\">  \r\n          <ion-select-option *ngFor=\"let row_jenis of data_jenis\" [value]=\"row_jenis.jenis_tv\" placeholder=\"Pilih..\">{{row_jenis.jenis_tv}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n        <ion-label>Ukuran</ion-label>\r\n        <ion-select (ionChange) = \"this.inch = $event.target.value\">\r\n          <ion-select-option *ngFor=\"let row_inch of data_inch\" value=\"{{row_inch.inch}}\" placeholder=\"Pilih..\">{{row_inch.inch}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\r\n        <ion-label class=\"ion-text-wrap\">Tempat anda melakukan Trade In</ion-label>\r\n        <ion-select (ionChange)=\"this.lokasi_trade = $event.target.value\">\r\n            <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-grid >\r\n        <ion-row size=\"auto\">\r\n          <ion-col >\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Kondisi TV</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"kondisi_tvSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Nyala</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Nyala\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Mati</ion-label>\r\n                <ion-radio  slot=\"start\" value=\"Mati\"></ion-radio>\r\n              </ion-item>   \r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid >\r\n        <ion-row size=\"auto\">\r\n          <ion-col >\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Kondisi Layar TV</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"kondisi_layarSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Normal</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Normal\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Layar Bergaris</ion-label>\r\n                <ion-radio  slot=\"start\" value=\"Layar Bergaris\"></ion-radio>\r\n              </ion-item>   \r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Whitespot/Titik hitam</ion-label>\r\n                <ion-radio  slot=\"start\" value=\"Whitespot/Titik hitam\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Lcd Pecah</ion-label>\r\n                <ion-radio  slot=\"start\" value=\"Lcd Pecah\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid >\r\n        <ion-row size=\"auto\">\r\n          <ion-col > \r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Kondisi layar dalam</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"inner_valueSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Layar berfungsi normal</ion-label> \r\n                <ion-radio slot=\"start\" value=\"Layar berfungsi normal\"></ion-radio>\r\n              </ion-item>\r\n            \r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\r\n                <ion-label class=\"ion-text-wrap\">Layar putih/titik hitam</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Layar putih/titik hitam\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n      <ion-grid >\r\n        <ion-row size=\"auto\">\r\n          <ion-col >\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Kondisi layar luar</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"outer_valueSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Layar bergores</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Layar bergores\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Layar tidak bergores</ion-label>\r\n                <ion-radio  slot=\"start\" value=\"Layar tidak bergores\"></ion-radio>\r\n              </ion-item>   \r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col >\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Kondisi body</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"condition_valueSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \r\n                <ion-label class=\"ion-text-wrap\">tidak bergores/penyok</ion-label>\r\n                <ion-radio slot=\"start\" value=\"tidak bergores/penyok\"></ion-radio> \r\n              </ion-item>\r\n                <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \r\n                  <ion-label class=\"ion-text-wrap\">beberapa goresan/penyok</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"beberapa goresan/penyok\"></ion-radio>\r\n                </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \r\n                <ion-label class=\"ion-text-wrap\">Banyak goresan/penyok</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Banyak goresan/penyok\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid *ngIf=\"jenis=='LED'\">\r\n        <ion-row size=\"auto\">\r\n          <ion-col > \r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Kondisi Tombol/Port (HDMI,Antenna) Pada TV LED:</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"portSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Berfungsi normal</ion-label> \r\n                <ion-radio slot=\"start\" value=\"Berfungsi Normal\"></ion-radio>\r\n              </ion-item>\r\n            \r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\r\n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid *ngIf=\"jenis=='Smart TV'\">\r\n        <ion-row size=\"auto\">\r\n          <ion-col > \r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Kondisi Tombol/Port (HDMI,Antenna) Pada Smart TV:</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"portSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Berfungsi normal</ion-label> \r\n                <ion-radio slot=\"start\" value=\"Berfungsi Normal\"></ion-radio>\r\n              </ion-item>\r\n            \r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\r\n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid *ngIf=\"jenis=='Smart TV'\">\r\n        <ion-row size=\"auto\">\r\n          <ion-col > \r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Wifi pada Smart TV:</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"wifiSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \r\n                <ion-label class=\"ion-text-wrap\">Berfungsi</ion-label> \r\n                <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\r\n              </ion-item>\r\n            \r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\r\n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col >\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Suara Televisi</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"suaraSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \r\n                <ion-label>Normal</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Normal\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \r\n                <ion-label>Sember</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Sember\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\r\n                <ion-radio slot=\"start\" value=\"Tidak Ada Suara\"></ion-radio>\r\n                <ion-label class=\"ion-text-wrap\">Tidak Ada Suara</ion-label>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col >\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"title\">\r\n                  <div>Kelengkapan</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\" style=\"padding-top: 18px;\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <ion-radio-group [(ngModel)]=\"addition_valueSelected\" >\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \r\n                <ion-label>Fullset ( Remote, Kabel Power, Dus)</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Fullset(Remote, Kabel Power, Dus)\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \r\n                <ion-label>Unit + Remote + Kabel Power</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Unit + Remote + Kabel Power\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\r\n                <ion-radio slot=\"start\" value=\"Unit Only + Kabel Power\"></ion-radio>\r\n                <ion-label class=\"ion-text-wrap\">Unit Only + Kabel Power</ion-label>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\r\n        <div class=\"col\">\r\n          <ion-button shape=\"round\" fill=\"outline\" style=\" --background:#BCCCF4; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" routerLink=\"/landing/type\">Cancel</ion-button>\r\n        </div>\r\n        <div class=\"col\">\r\n          <ion-button shape=\"round\" style=\"--background:white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" (click)=\"submit()\">Agree</ion-button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  \r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-tv/tv-brand/tv-brand-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/landing/selling-tv/tv-brand/tv-brand-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: TvBrandPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingTvTvBrandTvBrandRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvBrandPageRoutingModule", function () {
      return TvBrandPageRoutingModule;
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


    var _tv_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tv-brand.page */
    "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.ts");

    var routes = [{
      path: '',
      component: _tv_brand_page__WEBPACK_IMPORTED_MODULE_3__["TvBrandPage"]
    }];

    var TvBrandPageRoutingModule = function TvBrandPageRoutingModule() {
      _classCallCheck(this, TvBrandPageRoutingModule);
    };

    TvBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TvBrandPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/selling-tv/tv-brand/tv-brand.module.ts ***!
    \**********************************************************************/

  /*! exports provided: TvBrandPageModule */

  /***/
  function srcAppPagesLandingSellingTvTvBrandTvBrandModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvBrandPageModule", function () {
      return TvBrandPageModule;
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


    var _tv_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tv-brand-routing.module */
    "./src/app/pages/landing/selling-tv/tv-brand/tv-brand-routing.module.ts");
    /* harmony import */


    var _tv_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tv-brand.page */
    "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.ts");

    var TvBrandPageModule = function TvBrandPageModule() {
      _classCallCheck(this, TvBrandPageModule);
    };

    TvBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tv_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["TvBrandPageRoutingModule"]],
      declarations: [_tv_brand_page__WEBPACK_IMPORTED_MODULE_6__["TvBrandPage"]]
    })], TvBrandPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingTvTvBrandTvBrandPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header.header {\n  --ion-background-color: transparent;\n  border: none;\n}\nion-header.header .icon-b {\n  color: #34549f;\n}\n.bg {\n  background-image: url(/src/assets/images/default/background.png);\n}\n.content {\n  margin-top: 40%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.title-image {\n  width: 35vw;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n.container {\n  height: auto;\n  width: auto;\n}\n.container.bg-white {\n  background-color: white;\n}\n.bg-image {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.bg-image.bottom {\n  bottom: 0px;\n}\nh1 {\n  margin-bottom: -10px;\n  margin-left: 20px;\n  color: #34549f;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  font-size: 20pt;\n}\n.div-h1 {\n  margin: 0;\n  position: absolute;\n  top: 13%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nion-card {\n  text-align: center;\n  width: 80%;\n  height: 90%;\n  background: transparent;\n  text-transform: none;\n  box-shadow: #52657A;\n}\nion-card .icon-a {\n  padding: 10px;\n  font-size: 4em;\n  color: #0099ff;\n}\nion-card h2 {\n  color: #424348;\n}\n.shape {\n  position: relative;\n  bottom: -10%;\n}\n.shape img {\n  width: 100%;\n  height: auto;\n}\n.mb-2 {\n  margin-bottom: 20px;\n}\n.item-a {\n  background: transparent;\n  height: 60px;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  border: 2px solid gainsboro;\n  color: #8c8c8c;\n}\n.text-center {\n  text-align: center;\n}\n.title {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: #3053A4;\n  font-weight: bold;\n  margin-top: 20px;\n}\nion-col {\n  background: none;\n}\nhr {\n  border-bottom: 2px solid #87ABDD;\n}\nhr:after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #87ABDD;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n.row:after {\n  clear: both;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-1 {\n  width: 8.33333%;\n}\n.col-xs-2 {\n  width: 16.66667%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-4 {\n  width: 33.33333%;\n}\n.col-xs-5 {\n  width: 41.66667%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-7 {\n  width: 58.33333%;\n}\n.col-xs-8 {\n  width: 66.66667%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-10 {\n  width: 83.33333%;\n}\n.col-xs-11 {\n  width: 91.66667%;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLXR2L3R2LWJyYW5kL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLXR2XFx0di1icmFuZFxcdHYtYnJhbmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctdHYvdHYtYnJhbmQvdHYtYnJhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7QUNFSjtBREVBO0VBQ0UsZ0VBQUE7QUNDRjtBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjtBRENBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0VGO0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQUU7RUFDRSx1QkFBQTtBQ0VKO0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQ0U7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREdFO0VBQ0EsV0FBQTtBQ0RGO0FETUE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSEY7QURNQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0hGO0FES0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNISjtBREtFO0VBRUUsY0FBQTtBQ0pKO0FEUUM7RUFDQyxrQkFBQTtFQUNBLFlBQUE7QUNMRjtBRE1FO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNKTjtBRFFBO0VBQ0EsbUJBQUE7QUNMQTtBRFFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0xIO0FEUUE7RUFDRSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSw0REFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLGdCQUFBO0FDTEY7QURTQTtFQUNFLGdDQUFBO0FDTkY7QURTQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNORjtBRFNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTkY7QURRRTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTEY7QURPRTtFQUNBLFdBQUE7QUNKRjtBRE9FO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGO0FET0U7RUFDQSxXQUFBO0FDSkY7QURPRTtFQUNBLGVBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsVUFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxVQUFBO0FDSkY7QURPRTtFQUNBLGdCQUFBO0FDSkY7QURPRTtFQUNBLGdCQUFBO0FDSkY7QURPRTtFQUNBLFVBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsV0FBQTtBQ0pGO0FET0U7RUFDQSxXQUFBO0FDSkY7QURPRTtFQUNBLGVBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsVUFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxVQUFBO0FDSkY7QURPRTtFQUNBLGdCQUFBO0FDSkY7QURPRTtFQUNBLGdCQUFBO0FDSkY7QURPRTtFQUNBLFVBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsV0FBQTtBQ0pGO0FET0U7RUFDQSxVQUFBO0FDSkY7QURPRTtFQUNBLGNBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxTQUFBO0FDSkY7QURPRTtFQUNBLGVBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxTQUFBO0FDSkY7QURPRTtFQUNBLGVBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxTQUFBO0FDSkY7QURPRTtFQUNBLGVBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxVQUFBO0FDSkY7QURPRTtFQUNBLGVBQUE7QUNKRjtBRE9FO0VBQ0EscUJBQUE7QUNKRjtBRE9FO0VBQ0Esc0JBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0Esc0JBQUE7QUNKRjtBRE9FO0VBQ0Esc0JBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0Esc0JBQUE7QUNKRjtBRE9FO0VBQ0Esc0JBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0Esc0JBQUE7QUNKRjtBRE9FO0VBQ0Esc0JBQUE7QUNKRjtBRE9FO0VBQ0EsaUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy10di90di1icmFuZC90di1icmFuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyLmhlYWRlcntcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLmljb24tYntcclxuICAgIGNvbG9yOiAjMzQ1NDlmO1xyXG4gIH1cclxuXHJcbn1cclxuLmJnIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvYmFja2dyb3VuZC5wbmcpO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLnRpdGxlLWltYWdle1xyXG4gIHdpZHRoOiAzNXZ3O1xyXG4gIHRvcDogMjIlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgJi5iZy13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5iZy1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gICYudG9wIHtcclxuICB0b3A6ICAwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuXHJcbiAgfVxyXG5cclxuICAmLmJvdHRvbSB7XHJcbiAgYm90dG9tOiAwcHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuaDF7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6ICMzNDU0OWY7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG59XHJcblxyXG4uZGl2LWgxe1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMyU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogIzUyNjU3QTtcclxuXHJcbiAgLmljb24tYXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICAgIGNvbG9yOiAjMDA5OWZmO1xyXG4gIH1cclxuICBoMntcclxuICAgICAgICAgICAgXHJcbiAgICBjb2xvcjogcmdiKDY2LCA2NywgNzIpO1xyXG4gIH0gIFxyXG4gfVxyXG5cclxuIC5zaGFwZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAtMTAlO1xyXG4gIGltZ3tcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgfVxyXG5cclxuLm1iLTJ7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pdGVtLWF7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICBib3JkZXI6MnB4IHNvbGlkIHJnYigyMjAsIDIyMCwgMjIwKTtcclxuICAgY29sb3I6IHJnYigxNDAsIDE0MCwgMTQwKTtcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzA1M0E0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1jb2x7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuXHJcbmhyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg3QUJERDtcclxufVxyXG5cclxuaHI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODdBQkREO1xyXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7IFxyXG4gIG1heC13aWR0aDogNTAlO1xyXG59XHJcblxyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICAucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xIHtcclxuICB3aWR0aDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTIge1xyXG4gIHdpZHRoOiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTMge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTQge1xyXG4gIHdpZHRoOiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTUge1xyXG4gIHdpZHRoOiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTcge1xyXG4gIHdpZHRoOiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTgge1xyXG4gIHdpZHRoOiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTkge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEwIHtcclxuICB3aWR0aDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMSB7XHJcbiAgd2lkdGg6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTAge1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTEge1xyXG4gIHJpZ2h0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0yIHtcclxuICByaWdodDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTMge1xyXG4gIHJpZ2h0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNCB7XHJcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC01IHtcclxuICByaWdodDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTYge1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNyB7XHJcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC04IHtcclxuICByaWdodDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTkge1xyXG4gIHJpZ2h0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMTAge1xyXG4gIHJpZ2h0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMTEge1xyXG4gIHJpZ2h0OiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMTIge1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTAge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMSB7XHJcbiAgbGVmdDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMiB7XHJcbiAgbGVmdDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTMge1xyXG4gIGxlZnQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC00IHtcclxuICBsZWZ0OiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNSB7XHJcbiAgbGVmdDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTYge1xyXG4gIGxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC03IHtcclxuICBsZWZ0OiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtOCB7XHJcbiAgbGVmdDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTkge1xyXG4gIGxlZnQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMCB7XHJcbiAgbGVmdDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTExIHtcclxuICBsZWZ0OiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTIge1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0wIHtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xIHtcclxuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0yIHtcclxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC01IHtcclxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTcge1xyXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC04IHtcclxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtOSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEwIHtcclxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTEge1xyXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgfSIsImlvbi1oZWFkZXIuaGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmlvbi1oZWFkZXIuaGVhZGVyIC5pY29uLWIge1xuICBjb2xvcjogIzM0NTQ5Zjtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9kZWZhdWx0L2JhY2tncm91bmQucG5nKTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICB3aWR0aDogMzV2dztcbiAgdG9wOiAyMiU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG4uY29udGFpbmVyLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iZy1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmJnLWltYWdlLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuLmJnLWltYWdlLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6ICMzNDU0OWY7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB0O1xufVxuXG4uZGl2LWgxIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMlO1xuICBsZWZ0OiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3gtc2hhZG93OiAjNTI2NTdBO1xufVxuaW9uLWNhcmQgLmljb24tYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBjb2xvcjogIzAwOTlmZjtcbn1cbmlvbi1jYXJkIGgyIHtcbiAgY29sb3I6ICM0MjQzNDg7XG59XG5cbi5zaGFwZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtMTAlO1xufVxuLnNoYXBlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tYi0yIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLml0ZW0tYSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdhaW5zYm9ybztcbiAgY29sb3I6ICM4YzhjOGM7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzA1M0E0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWNvbCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4N0FCREQ7XG59XG5cbmhyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODdBQkREO1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLTIge1xuICB3aWR0aDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTUge1xuICB3aWR0aDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLTgge1xuICB3aWR0aDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy0xMSB7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbn1cblxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuXG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuXG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuXG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cblxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.ts ***!
    \********************************************************************/

  /*! exports provided: TvBrandPage */

  /***/
  function srcAppPagesLandingSellingTvTvBrandTvBrandPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TvBrandPage", function () {
      return TvBrandPage;
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


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../services/api/membership-api.service */
    "./src/app/services/api/membership-api.service.ts");

    var TvBrandPage = /*#__PURE__*/function () {
      function TvBrandPage(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController) {
        _classCallCheck(this, TvBrandPage);

        this.membershipApiService = membershipApiService;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.helper = helper;
        this.device = device;
        this.utilsService = utilsService;
        this.navCtrl = navCtrl;
        this.selling = selling;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.data_brand = [];
        this.data_inch = [];
        this.data_jenis = [];
        this.stores = [];
        this.searchedStores = [];
      }

      _createClass(TvBrandPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getStore();
          this.getBrand();
          this.selling.removeSelling();
        }
      }, {
        key: "getStore",
        value: function getStore() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then(function (token) {
            _this.sellingApiService.getStore(token).subscribe(function (response) {
              _this.stores = response.data.store; //  console.log(this.stores)
            }, function (err) {
              _this.stores = [];

              _this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "getBrand",
        value: function getBrand() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then(function (token) {
            _this2.sellingApiService.getBrand(token).subscribe(function (response) {
              _this2.data_brand = response.data.brand;
              _this2.data_inch = response.data.inch;
              _this2.data_jenis = response.data.jenis_tv;
              console.log(_this2.data_brand);
            }, function (err) {
              _this2.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.brand == null || this.jenis == null || this.lokasi_trade == null || this.inch == null || this.inner_valueSelected == null || this.outer_valueSelected == null || this.condition_valueSelected == null || this.addition_valueSelected == null || this.brand.replace(/\s/g, "") == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else if (this.kondisi_tvSelected == "Mati") {
            alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
          } else {
            this.presentAlertConfirm();
          }
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: function handler() {}
                      }, {
                        text: 'Lanjut',
                        handler: function handler() {
                          var navigationExtras = {
                            queryParams: {
                              brand: _this3.brand,
                              jenis: _this3.jenis,
                              lokasi_trade: _this3.lokasi_trade,
                              inner_valueSelected: _this3.inner_valueSelected,
                              outer_valueSelected: _this3.outer_valueSelected,
                              condition_valueSelected: _this3.condition_valueSelected,
                              addition_valueSelected: _this3.addition_valueSelected,
                              port: _this3.portSelected,
                              wifi: _this3.wifiSelected,
                              suara: _this3.suaraSelected,
                              kondisi_tv: _this3.kondisi_tvSelected,
                              kondisi_layar: _this3.kondisi_layarSelected,
                              inch: _this3.inch
                            }
                          };

                          _this3.navCtrl.navigateForward(["/landing/tv-brand/detail-tv"], navigationExtras);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return TvBrandPage;
    }();

    TvBrandPage.ctorParameters = function () {
      return [{
        type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__["MembershipApiService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__["SellingApiService"]
      }, {
        type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_8__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    TvBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tv-brand',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tv-brand.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tv-brand.page.scss */
      "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.page.scss"))["default"]]
    })], TvBrandPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-tv-tv-brand-tv-brand-module-es5.js.map