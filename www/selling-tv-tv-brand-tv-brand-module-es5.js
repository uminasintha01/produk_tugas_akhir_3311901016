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


    __webpack_exports__["default"] = "<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n    <div class=\"div-h1\">\n      <h1>Your Trade In</h1>\n    </div>\n    <div class=\"content\">\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <ion-label>Merk</ion-label>\n        <ion-select (ionChange) = \"this.brand = $event.target.value\">\n          <ion-select-option *ngFor=\"let row_brand of data_brand\" value=\"{{row_brand.brand}}\" placeholder=\"Pilih..\">{{row_brand.brand}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <ion-label>Jenis TV</ion-label>\n        <ion-select (ionChange) = \"this.jenis= $event.target.value\">  \n          <ion-select-option *ngFor=\"let row_jenis of data_jenis\" [value]=\"row_jenis.jenis_tv\" placeholder=\"Pilih..\">{{row_jenis.jenis_tv}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <ion-label>Ukuran</ion-label>\n        <ion-select (ionChange) = \"this.inch = $event.target.value\">\n          <ion-select-option *ngFor=\"let row_inch of data_inch\" value=\"{{row_inch.inch}}\" placeholder=\"Pilih..\">{{row_inch.inch}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <ion-label class=\"ion-text-wrap\">Tempat anda melakukan Trade In</ion-label>\n        <ion-select (ionChange)=\"this.lokasi_trade = $event.target.value\">\n            <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-grid >\n        <ion-row size=\"auto\">\n          <ion-col >\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Kondisi TV</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"kondisi_tvSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Nyala</ion-label>\n                <ion-radio slot=\"start\" value=\"Nyala\"></ion-radio>\n              </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Mati</ion-label>\n                <ion-radio  slot=\"start\" value=\"Mati\"></ion-radio>\n              </ion-item>   \n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid >\n        <ion-row size=\"auto\">\n          <ion-col >\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Kondisi Layar TV</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"kondisi_layarSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Normal</ion-label>\n                <ion-radio slot=\"start\" value=\"Normal\"></ion-radio>\n              </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Layar Bergaris</ion-label>\n                <ion-radio  slot=\"start\" value=\"Layar Bergaris\"></ion-radio>\n              </ion-item>   \n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Whitespot/Titik hitam</ion-label>\n                <ion-radio  slot=\"start\" value=\"Whitespot/Titik hitam\"></ion-radio>\n              </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Lcd Pecah</ion-label>\n                <ion-radio  slot=\"start\" value=\"Lcd Pecah\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid >\n        <ion-row size=\"auto\">\n          <ion-col > \n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Kondisi layar dalam</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"inner_valueSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Layar berfungsi normal</ion-label> \n                <ion-radio slot=\"start\" value=\"Layar berfungsi normal\"></ion-radio>\n              </ion-item>\n            \n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n                <ion-label class=\"ion-text-wrap\">Layar putih/titik hitam</ion-label>\n                <ion-radio slot=\"start\" value=\"Layar putih/titik hitam\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <ion-grid >\n        <ion-row size=\"auto\">\n          <ion-col >\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Kondisi layar luar</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"outer_valueSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Layar bergores</ion-label>\n                <ion-radio slot=\"start\" value=\"Layar bergores\"></ion-radio>\n              </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Layar tidak bergores</ion-label>\n                <ion-radio  slot=\"start\" value=\"Layar tidak bergores\"></ion-radio>\n              </ion-item>   \n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Kondisi body</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"condition_valueSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n                <ion-label class=\"ion-text-wrap\">tidak bergores/penyok</ion-label>\n                <ion-radio slot=\"start\" value=\"tidak bergores/penyok\"></ion-radio> \n              </ion-item>\n                <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                  <ion-label class=\"ion-text-wrap\">beberapa goresan/penyok</ion-label>\n                  <ion-radio slot=\"start\" value=\"beberapa goresan/penyok\"></ion-radio>\n                </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Banyak goresan/penyok</ion-label>\n                <ion-radio slot=\"start\" value=\"Banyak goresan/penyok\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid *ngIf=\"jenis=='LED'\">\n        <ion-row size=\"auto\">\n          <ion-col > \n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Kondisi Tombol/Port (HDMI,Antenna) Pada TV LED:</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"portSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Berfungsi normal</ion-label> \n                <ion-radio slot=\"start\" value=\"Berfungsi Normal\"></ion-radio>\n              </ion-item>\n            \n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid *ngIf=\"jenis=='Smart TV'\">\n        <ion-row size=\"auto\">\n          <ion-col > \n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Kondisi Tombol/Port (HDMI,Antenna) Pada Smart TV:</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"portSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Berfungsi normal</ion-label> \n                <ion-radio slot=\"start\" value=\"Berfungsi Normal\"></ion-radio>\n              </ion-item>\n            \n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid *ngIf=\"jenis=='Smart TV'\">\n        <ion-row size=\"auto\">\n          <ion-col > \n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Wifi pada Smart TV:</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"wifiSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n                <ion-label class=\"ion-text-wrap\">Berfungsi</ion-label> \n                <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n              </ion-item>\n            \n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Suara Televisi</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"suaraSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n                <ion-label>Normal</ion-label>\n                <ion-radio slot=\"start\" value=\"Normal\"></ion-radio>\n              </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label>Sember</ion-label>\n                <ion-radio slot=\"start\" value=\"Sember\"></ion-radio>\n              </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n                <ion-radio slot=\"start\" value=\"Tidak Ada Suara\"></ion-radio>\n                <ion-label class=\"ion-text-wrap\">Tidak Ada Suara</ion-label>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"title\">\n                  <div>Kelengkapan</div>\n                </div>\n              </div>\n              <div class=\"col\" style=\"padding-top: 18px;\">\n                <hr>\n              </div>\n            </div>\n            <ion-radio-group [(ngModel)]=\"addition_valueSelected\" >\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n                <ion-label>Fullset ( Remote, Kabel Power, Dus)</ion-label>\n                <ion-radio slot=\"start\" value=\"Fullset(Remote, Kabel Power, Dus)\"></ion-radio>\n              </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label>Unit + Remote + Kabel Power</ion-label>\n                <ion-radio slot=\"start\" value=\"Unit + Remote + Kabel Power\"></ion-radio>\n              </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n                <ion-radio slot=\"start\" value=\"Unit Only + Kabel Power\"></ion-radio>\n                <ion-label class=\"ion-text-wrap\">Unit Only + Kabel Power</ion-label>\n              </ion-item>\n            </ion-radio-group>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n        <div class=\"col\">\n          <ion-button shape=\"round\" fill=\"outline\" style=\" --background:#BCCCF4; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" routerLink=\"/landing/type\">Cancel</ion-button>\n        </div>\n        <div class=\"col\">\n          <ion-button shape=\"round\" style=\"--background:white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" (click)=\"submit()\">Agree</ion-button>\n        </div>\n      </div>\n\n    </div>\n  \n  </ion-content>";
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


    __webpack_exports__["default"] = "ion-header.header {\n  --ion-background-color: transparent;\n  border: none;\n}\n\nion-header.header .icon-b {\n  color: #34549f;\n}\n\n.bg {\n  background-image: url(/src/assets/images/default/background.png);\n}\n\n.content {\n  margin-top: 40%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.title-image {\n  width: 35vw;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n\n.container {\n  height: auto;\n  width: auto;\n}\n\n.container.bg-white {\n  background-color: white;\n}\n\n.bg-image {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n\nh1 {\n  margin-bottom: -10px;\n  margin-left: 20px;\n  color: #34549f;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  font-size: 20pt;\n}\n\n.div-h1 {\n  margin: 0;\n  position: absolute;\n  top: 13%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nion-card {\n  text-align: center;\n  width: 80%;\n  height: 90%;\n  background: transparent;\n  text-transform: none;\n  box-shadow: #52657A;\n}\n\nion-card .icon-a {\n  padding: 10px;\n  font-size: 4em;\n  color: #0099ff;\n}\n\nion-card h2 {\n  color: #424348;\n}\n\n.shape {\n  position: relative;\n  bottom: -10%;\n}\n\n.shape img {\n  width: 100%;\n  height: auto;\n}\n\n.mb-2 {\n  margin-bottom: 20px;\n}\n\n.item-a {\n  background: transparent;\n  height: 60px;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  border: 2px solid gainsboro;\n  color: #8c8c8c;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.title {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  color: #3053A4;\n  font-weight: bold;\n  margin-top: 20px;\n}\n\nion-col {\n  background: none;\n}\n\nhr {\n  border-bottom: 2px solid #87ABDD;\n}\n\nhr:after {\n  content: '';\n  display: block;\n  border-bottom: 2px solid #87ABDD;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLXR2L3R2LWJyYW5kL0M6XFxVc2Vyc1xcaHBcXERvd25sb2Fkc1xcemZpeC10cmFkZS1pbi0yMDIyLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmctdHZcXHR2LWJyYW5kXFx0di1icmFuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy10di90di1icmFuZC90di1icmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBdUI7RUFDdkIsWUFBWTtBQ0NkOztBREhBO0VBSUksY0FBYztBQ0dsQjs7QURDQTtFQUNFLGdFQUFnRTtBQ0VsRTs7QURBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FDR25COztBREFBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQ0dwQjs7QURDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FDRWI7O0FESkE7RUFJSSx1QkFBdUI7QUNJM0I7O0FEQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0FDR1g7O0FEVkE7RUFVRSxRQUFTO0VBQ1QsNEJBQTRCO0FDSTlCOztBRGZBO0VBZ0JFLFdBQVc7QUNHYjs7QURFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIsZUFBZTtBQ0NqQjs7QURFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFFVCxnQ0FBZ0M7QUNDbEM7O0FERUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQ0NyQjs7QURQQTtFQVNJLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBYztBQ0VsQjs7QURiQTtFQWVJLGNBQXNCO0FDRTFCOztBREVDO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVk7QUNDZDs7QURIQztFQUlLLFdBQVc7RUFDWCxZQUFZO0FDR2xCOztBRENBO0VBQ0EsbUJBQW1CO0FDRW5COztBRENBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUFtQztFQUNuQyxjQUF5QjtBQ0U1Qjs7QURDQTtFQUNFLGtCQUFrQjtBQ0VwQjs7QURDQTtFQUNFLDREQUEyRDtFQUMzRCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQ0VsQjs7QURDQTtFQUNFLGdCQUFnQjtBQ0VsQjs7QURFQTtFQUNFLGdDQUFnQztBQ0NsQzs7QURFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixjQUFjO0FDQ2hCOztBREVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FDQ2I7O0FEQ0U7RUFDQSxZQUFZO0VBQ1osY0FBYztBQ0VoQjs7QURBRTtFQUNBLFdBQVc7QUNHYjs7QURBRTtFQUNBLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ0dyQjs7QURBRTtFQUNBLFdBQVc7QUNHYjs7QURBRTtFQUNBLGVBQWU7QUNHakI7O0FEQUU7RUFDQSxnQkFBZ0I7QUNHbEI7O0FEQUU7RUFDQSxVQUFVO0FDR1o7O0FEQUU7RUFDQSxnQkFBZ0I7QUNHbEI7O0FEQUU7RUFDQSxnQkFBZ0I7QUNHbEI7O0FEQUU7RUFDQSxVQUFVO0FDR1o7O0FEQUU7RUFDQSxnQkFBZ0I7QUNHbEI7O0FEQUU7RUFDQSxnQkFBZ0I7QUNHbEI7O0FEQUU7RUFDQSxVQUFVO0FDR1o7O0FEQUU7RUFDQSxnQkFBZ0I7QUNHbEI7O0FEQUU7RUFDQSxnQkFBZ0I7QUNHbEI7O0FEQUU7RUFDQSxXQUFXO0FDR2I7O0FEQUU7RUFDQSxXQUFXO0FDR2I7O0FEQUU7RUFDQSxlQUFlO0FDR2pCOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0EsVUFBVTtBQ0daOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0EsVUFBVTtBQ0daOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0EsVUFBVTtBQ0daOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0EsV0FBVztBQ0diOztBREFFO0VBQ0EsVUFBVTtBQ0daOztBREFFO0VBQ0EsY0FBYztBQ0doQjs7QURBRTtFQUNBLGVBQWU7QUNHakI7O0FEQUU7RUFDQSxTQUFTO0FDR1g7O0FEQUU7RUFDQSxlQUFlO0FDR2pCOztBREFFO0VBQ0EsZUFBZTtBQ0dqQjs7QURBRTtFQUNBLFNBQVM7QUNHWDs7QURBRTtFQUNBLGVBQWU7QUNHakI7O0FEQUU7RUFDQSxlQUFlO0FDR2pCOztBREFFO0VBQ0EsU0FBUztBQ0dYOztBREFFO0VBQ0EsZUFBZTtBQ0dqQjs7QURBRTtFQUNBLGVBQWU7QUNHakI7O0FEQUU7RUFDQSxVQUFVO0FDR1o7O0FEQUU7RUFDQSxlQUFlO0FDR2pCOztBREFFO0VBQ0EscUJBQXFCO0FDR3ZCOztBREFFO0VBQ0Esc0JBQXNCO0FDR3hCOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0Esc0JBQXNCO0FDR3hCOztBREFFO0VBQ0Esc0JBQXNCO0FDR3hCOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0Esc0JBQXNCO0FDR3hCOztBREFFO0VBQ0Esc0JBQXNCO0FDR3hCOztBREFFO0VBQ0EsZ0JBQWdCO0FDR2xCOztBREFFO0VBQ0Esc0JBQXNCO0FDR3hCOztBREFFO0VBQ0Esc0JBQXNCO0FDR3hCOztBREFFO0VBQ0EsaUJBQWlCO0FDR25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLXR2L3R2LWJyYW5kL3R2LWJyYW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIuaGVhZGVye1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICAuaWNvbi1ie1xuICAgIGNvbG9yOiAjMzQ1NDlmO1xuICB9XG5cbn1cbi5iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC9iYWNrZ3JvdW5kLnBuZyk7XG59XG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi50aXRsZS1pbWFnZXtcbiAgd2lkdGg6IDM1dnc7XG4gIHRvcDogMjIlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gICYuYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5iZy1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuXG4gICYudG9wIHtcbiAgdG9wOiAgMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuXG4gIH1cblxuICAmLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xuXG4gIH1cbn1cblxuaDF7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6ICMzNDU0OWY7XG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB0O1xufVxuXG4uZGl2LWgxe1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMyU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuaW9uLWNhcmR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogIzUyNjU3QTtcblxuICAuaWNvbi1he1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgY29sb3I6ICMwMDk5ZmY7XG4gIH1cbiAgaDJ7XG4gICAgICAgICAgICBcbiAgICBjb2xvcjogcmdiKDY2LCA2NywgNzIpO1xuICB9ICBcbiB9XG5cbiAuc2hhcGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtMTAlO1xuICBpbWd7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICB9XG5cbi5tYi0ye1xubWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLml0ZW0tYXtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNjBweDtcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjIwLCAyMjAsIDIyMCk7XG4gICBjb2xvcjogcmdiKDE0MCwgMTQwLCAxNDApO1xufVxuXG4udGV4dC1jZW50ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxle1xuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tY29se1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4N0FCREQ7XG59XG5cbmhyOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg3QUJERDtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDsgXG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xuICB9XG4gIC5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIC5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgfVxuXG4gIC5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIH1cblxuICAuY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtOSB7XG4gIHdpZHRoOiA3NSU7XG4gIH1cblxuICAuY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy0xMiB7XG4gIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0xIHtcbiAgcmlnaHQ6IDguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTIge1xuICByaWdodDogMTYuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTUge1xuICByaWdodDogNDEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTgge1xuICByaWdodDogNjYuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTEwIHtcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0xMSB7XG4gIHJpZ2h0OiA5MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0wIHtcbiAgbGVmdDogYXV0bztcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0xIHtcbiAgbGVmdDogOC4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTQge1xuICBsZWZ0OiAzMy4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTcge1xuICBsZWZ0OiA1OC4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTEwIHtcbiAgbGVmdDogODMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTAge1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC05IHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gIH0iLCJpb24taGVhZGVyLmhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1oZWFkZXIuaGVhZGVyIC5pY29uLWIge1xuICBjb2xvcjogIzM0NTQ5Zjtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9kZWZhdWx0L2JhY2tncm91bmQucG5nKTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICB3aWR0aDogMzV2dztcbiAgdG9wOiAyMiU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jb250YWluZXIuYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJnLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG5cbi5iZy1pbWFnZS50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cblxuLmJnLWltYWdlLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6ICMzNDU0OWY7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbn1cblxuLmRpdi1oMSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5pb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogIzUyNjU3QTtcbn1cblxuaW9uLWNhcmQgLmljb24tYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBjb2xvcjogIzAwOTlmZjtcbn1cblxuaW9uLWNhcmQgaDIge1xuICBjb2xvcjogIzQyNDM0ODtcbn1cblxuLnNoYXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC0xMCU7XG59XG5cbi5zaGFwZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pdGVtLWEge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBnYWluc2Jvcm87XG4gIGNvbG9yOiAjOGM4YzhjO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tY29sIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg3QUJERDtcbn1cblxuaHI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODdBQkREO1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLTIge1xuICB3aWR0aDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTUge1xuICB3aWR0aDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLTgge1xuICB3aWR0aDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy0xMSB7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbn1cblxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuXG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuXG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuXG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cblxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufVxuIl19 */";
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