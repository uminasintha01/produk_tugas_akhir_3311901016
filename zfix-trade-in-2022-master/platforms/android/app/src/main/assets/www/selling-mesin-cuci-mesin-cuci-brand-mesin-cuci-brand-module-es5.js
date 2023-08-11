function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n  <div class=\"div-h1\">\n    <h1>Your Trade In</h1>\n  </div>\n  <div class=\"content\">\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Merk</ion-label>\n      <ion-select (ionChange) = \"this.brand = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_brand of data_brand\" value=\"{{row_brand.brand}}\" placeholder=\"Pilih..\">{{row_brand.brand}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Type</ion-label>\n      <ion-select (ionChange) = \"this.type= $event.target.value\">  \n        <ion-select-option *ngFor=\"let row_type of data_type\" [value]=\"row_type.type\" placeholder=\"Pilih..\">{{row_type.type}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label class=\"ion-text-wrap\">Tempat anda melakukan Trade In</ion-label>\n      <ion-select (ionChange)=\"this.lokasi_trade = $event.target.value\">\n          <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Mesin Cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"condition\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Nyala</ion-label>\n              <ion-radio slot=\"start\" value=\"Nyala\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Mati Total</ion-label>\n              <ion-radio  slot=\"start\" value=\"Mati Total\"></ion-radio>\n            </ion-item>   \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Fisik Mesin Cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"kondisi_fisik\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Mulus</ion-label>\n              <ion-radio slot=\"start\" value=\"Mulus\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Lecet Parah</ion-label>\n              <ion-radio  slot=\"start\" value=\"Dent,Penyok\"></ion-radio>\n            </ion-item>  \n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Dent,Penyok</ion-label>\n              <ion-radio  slot=\"start\" value=\"Dent,Penyok\"></ion-radio>\n            </ion-item>   \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col > \n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Rubber Pada Kaki mesin cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"rubber\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Normal</ion-label> \n              <ion-radio slot=\"start\" value=\"Normal\"></ion-radio>\n            </ion-item>\n          \n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n              <ion-label class=\"ion-text-wrap\">Tidak Normal</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak Normal\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Tutup pada Mesin Cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"tutup\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n              <ion-radio  slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n            </ion-item>   \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Tombol pada mesin cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"tombol\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Berfungsi Normal</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi Normal\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi Normal</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi Normal\"></ion-radio>\n              </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Pembuangan Air</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"pembuangan\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Tidak berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Spinner/Pengering</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"pengering\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Tidak berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Air Otomatis</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"air_otomatis\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Tidak berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Pemanas</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"pemanas\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Tidak berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n      <div class=\"col\">\n        <ion-button shape=\"round\" fill=\"outline\" style=\" --background:#BCCCF4; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" routerLink=\"/landing/type\">Cancel</ion-button>\n      </div>\n      <div class=\"col\">\n        <ion-button shape=\"round\" style=\"--background:white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" (click)=\"submit()\">Agree</ion-button>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts ***!
    \******************************************************************************************************/

  /*! exports provided: MesinCuciBrandPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPageRoutingModule", function () {
      return MesinCuciBrandPageRoutingModule;
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


    var _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mesin-cuci-brand.page */
    "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts");

    var routes = [{
      path: '',
      component: _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_3__["MesinCuciBrandPage"]
    }];

    var MesinCuciBrandPageRoutingModule = function MesinCuciBrandPageRoutingModule() {
      _classCallCheck(this, MesinCuciBrandPageRoutingModule);
    };

    MesinCuciBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MesinCuciBrandPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: MesinCuciBrandPageModule */

  /***/
  function srcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPageModule", function () {
      return MesinCuciBrandPageModule;
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


    var _mesin_cuci_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mesin-cuci-brand-routing.module */
    "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts");
    /* harmony import */


    var _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mesin-cuci-brand.page */
    "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts");

    var MesinCuciBrandPageModule = function MesinCuciBrandPageModule() {
      _classCallCheck(this, MesinCuciBrandPageModule);
    };

    MesinCuciBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mesin_cuci_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["MesinCuciBrandPageRoutingModule"]],
      declarations: [_mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_6__["MesinCuciBrandPage"]]
    })], MesinCuciBrandPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header.header {\n  --ion-background-color: transparent;\n  border: none;\n}\nion-header.header .icon-b {\n  color: #34549f;\n}\n.bg {\n  background-image: url(/src/assets/images/default/background.png);\n}\n.content {\n  margin-top: 40%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.title-image {\n  width: 35vw;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n.container {\n  height: auto;\n  width: auto;\n}\n.container.bg-white {\n  background-color: white;\n}\n.bg-image {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.bg-image.bottom {\n  bottom: 0px;\n}\nh1 {\n  margin-bottom: -10px;\n  margin-left: 20px;\n  color: #34549f;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  font-size: 20pt;\n}\n.div-h1 {\n  margin: 0;\n  position: absolute;\n  top: 13%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nion-card {\n  text-align: center;\n  width: 80%;\n  height: 90%;\n  background: transparent;\n  text-transform: none;\n  box-shadow: #52657A;\n}\nion-card .icon-a {\n  padding: 10px;\n  font-size: 4em;\n  color: #0099ff;\n}\nion-card h2 {\n  color: #424348;\n}\n.shape {\n  position: relative;\n  bottom: -10%;\n}\n.shape img {\n  width: 100%;\n  height: auto;\n}\n.mb-2 {\n  margin-bottom: 20px;\n}\n.item-a {\n  background: transparent;\n  height: 60px;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  border: 2px solid gainsboro;\n  color: #8c8c8c;\n}\n.text-center {\n  text-align: center;\n}\n.title {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: #3053A4;\n  font-weight: bold;\n  margin-top: 20px;\n}\nion-col {\n  background: none;\n}\nhr {\n  border-bottom: 2px solid #87ABDD;\n}\nhr:after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #87ABDD;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n.row:after {\n  clear: both;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-1 {\n  width: 8.33333%;\n}\n.col-xs-2 {\n  width: 16.66667%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-4 {\n  width: 33.33333%;\n}\n.col-xs-5 {\n  width: 41.66667%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-7 {\n  width: 58.33333%;\n}\n.col-xs-8 {\n  width: 66.66667%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-10 {\n  width: 83.33333%;\n}\n.col-xs-11 {\n  width: 91.66667%;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvbWVzaW4tY3VjaS1icmFuZC9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2VsbGluZy1tZXNpbi1jdWNpXFxtZXNpbi1jdWNpLWJyYW5kXFxtZXNpbi1jdWNpLWJyYW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvbWVzaW4tY3VjaS1icmFuZC9tZXNpbi1jdWNpLWJyYW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDRSxjQUFBO0FDRU47QURFRTtFQUNFLGdFQUFBO0FDQ0o7QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRUo7QURDRTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0UsdUJBQUE7QUNFTjtBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUNDSjtBRENJO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0FDQ0o7QURHSTtFQUNBLFdBQUE7QUNESjtBRE1FO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FETUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSE47QURLSTtFQUVFLGNBQUE7QUNKTjtBRFFHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0FDTEo7QURNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSlI7QURRRTtFQUNBLG1CQUFBO0FDTEY7QURRRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNMTDtBRFFFO0VBQ0Usa0JBQUE7QUNMSjtBRFFFO0VBQ0UsNERBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEUUU7RUFDRSxnQkFBQTtBQ0xKO0FEU0U7RUFDRSxnQ0FBQTtBQ05KO0FEU0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDTko7QURTRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ05KO0FEUUk7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0xKO0FET0k7RUFDQSxXQUFBO0FDSko7QURPSTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9JO0VBQ0EsV0FBQTtBQ0pKO0FET0k7RUFDQSxlQUFBO0FDSko7QURPSTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNBLFVBQUE7QUNKSjtBRE9JO0VBQ0EsZ0JBQUE7QUNKSjtBRE9JO0VBQ0EsZ0JBQUE7QUNKSjtBRE9JO0VBQ0EsVUFBQTtBQ0pKO0FET0k7RUFDQSxnQkFBQTtBQ0pKO0FET0k7RUFDQSxnQkFBQTtBQ0pKO0FET0k7RUFDQSxVQUFBO0FDSko7QURPSTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNBLFdBQUE7QUNKSjtBRE9JO0VBQ0EsV0FBQTtBQ0pKO0FET0k7RUFDQSxlQUFBO0FDSko7QURPSTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNBLFVBQUE7QUNKSjtBRE9JO0VBQ0EsZ0JBQUE7QUNKSjtBRE9JO0VBQ0EsZ0JBQUE7QUNKSjtBRE9JO0VBQ0EsVUFBQTtBQ0pKO0FET0k7RUFDQSxnQkFBQTtBQ0pKO0FET0k7RUFDQSxnQkFBQTtBQ0pKO0FET0k7RUFDQSxVQUFBO0FDSko7QURPSTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNBLFdBQUE7QUNKSjtBRE9JO0VBQ0EsVUFBQTtBQ0pKO0FET0k7RUFDQSxjQUFBO0FDSko7QURPSTtFQUNBLGVBQUE7QUNKSjtBRE9JO0VBQ0EsU0FBQTtBQ0pKO0FET0k7RUFDQSxlQUFBO0FDSko7QURPSTtFQUNBLGVBQUE7QUNKSjtBRE9JO0VBQ0EsU0FBQTtBQ0pKO0FET0k7RUFDQSxlQUFBO0FDSko7QURPSTtFQUNBLGVBQUE7QUNKSjtBRE9JO0VBQ0EsU0FBQTtBQ0pKO0FET0k7RUFDQSxlQUFBO0FDSko7QURPSTtFQUNBLGVBQUE7QUNKSjtBRE9JO0VBQ0EsVUFBQTtBQ0pKO0FET0k7RUFDQSxlQUFBO0FDSko7QURPSTtFQUNBLHFCQUFBO0FDSko7QURPSTtFQUNBLHNCQUFBO0FDSko7QURPSTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNBLHNCQUFBO0FDSko7QURPSTtFQUNBLHNCQUFBO0FDSko7QURPSTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNBLHNCQUFBO0FDSko7QURPSTtFQUNBLHNCQUFBO0FDSko7QURPSTtFQUNBLGdCQUFBO0FDSko7QURPSTtFQUNBLHNCQUFBO0FDSko7QURPSTtFQUNBLHNCQUFBO0FDSko7QURPSTtFQUNBLGlCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctbWVzaW4tY3VjaS9tZXNpbi1jdWNpLWJyYW5kL21lc2luLWN1Y2ktYnJhbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlci5oZWFkZXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC5pY29uLWJ7XHJcbiAgICAgIGNvbG9yOiAjMzQ1NDlmO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICAuYmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9kZWZhdWx0L2JhY2tncm91bmQucG5nKTtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtaW1hZ2V7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICAgIHRvcDogMjIlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICAmLmJnLXdoaXRlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICBcclxuICAgICYudG9wIHtcclxuICAgIHRvcDogIDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLmJvdHRvbSB7XHJcbiAgICBib3R0b206IDBweDtcclxuICBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMzNDU0OWY7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gIH1cclxuICBcclxuICAuZGl2LWgxe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMyU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogIzUyNjU3QTtcclxuICBcclxuICAgIC5pY29uLWF7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICBjb2xvcjogIzAwOTlmZjtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICBjb2xvcjogcmdiKDY2LCA2NywgNzIpO1xyXG4gICAgfSAgXHJcbiAgIH1cclxuICBcclxuICAgLnNoYXBle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgIH1cclxuICBcclxuICAubWItMntcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuaXRlbS1he1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgIGJvcmRlcjoycHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xyXG4gICAgIGNvbG9yOiByZ2IoMTQwLCAxNDAsIDE0MCk7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzMwNTNBNDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGhyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODdBQkREO1xyXG4gIH1cclxuICBcclxuICBocjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4N0FCREQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMnB4OyBcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICAucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgfVxyXG4gICAgLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIH1cclxuICAgIC5yb3c6YWZ0ZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy0xIHtcclxuICAgIHdpZHRoOiA4LjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtMiB7XHJcbiAgICB3aWR0aDogMTYuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy0zIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTQge1xyXG4gICAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtNSB7XHJcbiAgICB3aWR0aDogNDEuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy02IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTcge1xyXG4gICAgd2lkdGg6IDU4LjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtOCB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy05IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTEwIHtcclxuICAgIHdpZHRoOiA4My4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTExIHtcclxuICAgIHdpZHRoOiA5MS42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTAge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtMSB7XHJcbiAgICByaWdodDogOC4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtMiB7XHJcbiAgICByaWdodDogMTYuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTMge1xyXG4gICAgcmlnaHQ6IDI1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC00IHtcclxuICAgIHJpZ2h0OiAzMy4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtNSB7XHJcbiAgICByaWdodDogNDEuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTYge1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC03IHtcclxuICAgIHJpZ2h0OiA1OC4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtOCB7XHJcbiAgICByaWdodDogNjYuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTkge1xyXG4gICAgcmlnaHQ6IDc1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVsbC0xMCB7XHJcbiAgICByaWdodDogODMuMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdWxsLTExIHtcclxuICAgIHJpZ2h0OiA5MS42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1bGwtMTIge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtMCB7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTEge1xyXG4gICAgbGVmdDogOC4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtMiB7XHJcbiAgICBsZWZ0OiAxNi42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtMyB7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtNCB7XHJcbiAgICBsZWZ0OiAzMy4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtNSB7XHJcbiAgICBsZWZ0OiA0MS42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtNiB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtNyB7XHJcbiAgICBsZWZ0OiA1OC4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtOCB7XHJcbiAgICBsZWZ0OiA2Ni42NjY2NyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtOSB7XHJcbiAgICBsZWZ0OiA3NSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLXB1c2gtMTAge1xyXG4gICAgbGVmdDogODMuMzMzMzMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1wdXNoLTExIHtcclxuICAgIGxlZnQ6IDkxLjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtcHVzaC0xMiB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC0xIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2wteHMtb2Zmc2V0LTEwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLXhzLW9mZnNldC0xMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbC14cy1vZmZzZXQtMTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB9IiwiaW9uLWhlYWRlci5oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuaW9uLWhlYWRlci5oZWFkZXIgLmljb24tYiB7XG4gIGNvbG9yOiAjMzQ1NDlmO1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvYmFja2dyb3VuZC5wbmcpO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi50aXRsZS1pbWFnZSB7XG4gIHdpZHRoOiAzNXZ3O1xuICB0b3A6IDIyJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cbi5jb250YWluZXIuYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJnLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uYmctaW1hZ2UudG9wIHtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG59XG4uYmctaW1hZ2UuYm90dG9tIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogIzM0NTQ5ZjtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5kaXYtaDEge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMyU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJveC1zaGFkb3c6ICM1MjY1N0E7XG59XG5pb24tY2FyZCAuaWNvbi1hIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGNvbG9yOiAjMDA5OWZmO1xufVxuaW9uLWNhcmQgaDIge1xuICBjb2xvcjogIzQyNDM0ODtcbn1cblxuLnNoYXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC0xMCU7XG59XG4uc2hhcGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1iLTIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaXRlbS1hIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xuICBjb2xvcjogIzhjOGM4Yztcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tY29sIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg3QUJERDtcbn1cblxuaHI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4N0FCREQ7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sLXhzLTEge1xuICB3aWR0aDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtMiB7XG4gIHdpZHRoOiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtMyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wteHMtNCB7XG4gIHdpZHRoOiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtNSB7XG4gIHdpZHRoOiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wteHMtNyB7XG4gIHdpZHRoOiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtOCB7XG4gIHdpZHRoOiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wteHMtMTAge1xuICB3aWR0aDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy0xMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLXhzLXB1bGwtMCB7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1bGwtMSB7XG4gIHJpZ2h0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTIge1xuICByaWdodDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMyB7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVsbC00IHtcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTUge1xuICByaWdodDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtNiB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVsbC03IHtcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTgge1xuICByaWdodDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtOSB7XG4gIHJpZ2h0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVsbC0xMCB7XG4gIHJpZ2h0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMSB7XG4gIHJpZ2h0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMiB7XG4gIHJpZ2h0OiAxMDAlO1xufVxuXG4uY29sLXhzLXB1c2gtMCB7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVzaC0xIHtcbiAgbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0yIHtcbiAgbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMyB7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdXNoLTQge1xuICBsZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC01IHtcbiAgbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtNiB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdXNoLTcge1xuICBsZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC04IHtcbiAgbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtOSB7XG4gIGxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdXNoLTEwIHtcbiAgbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMTEge1xuICBsZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMiB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTAge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNyB7XG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC05IHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts ***!
    \********************************************************************************************/

  /*! exports provided: MesinCuciBrandPage */

  /***/
  function srcAppPagesLandingSellingMesinCuciMesinCuciBrandMesinCuciBrandPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPage", function () {
      return MesinCuciBrandPage;
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

    var MesinCuciBrandPage = /*#__PURE__*/function () {
      function MesinCuciBrandPage(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController) {
        _classCallCheck(this, MesinCuciBrandPage);

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
        this.data_type = [];
        this.stores = [];
      }

      _createClass(MesinCuciBrandPage, [{
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
              _this.stores = response.data.store;
              console.log(_this.stores);
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
            _this2.sellingApiService.getBrandMesinCuci(token).subscribe(function (response) {
              _this2.data_brand = response.data.brand;
              _this2.data_type = response.data.type;
              console.log(_this2.data_brand);
            }, function (err) {
              _this2.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.brand == null || this.type == null || this.lokasi_trade == null || this.brand.replace(/\s/g, "") == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else if (this.condition == "Mati Total") {
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
                              type: _this3.type,
                              condition: _this3.condition,
                              kondisi_fisik: _this3.kondisi_fisik,
                              rubber: _this3.rubber,
                              tutup: _this3.tutup,
                              tombol: _this3.tombol,
                              pembuangan: _this3.pembuangan,
                              pengering: _this3.pengering,
                              air_otomatis: _this3.air_otomatis,
                              pemanas: _this3.pemanas,
                              lokasi_trade: _this3.lokasi_trade
                            }
                          };

                          _this3.navCtrl.navigateForward(["/landing/mesin-cuci-brand/detail-mesin-cuci"], navigationExtras);
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

      return MesinCuciBrandPage;
    }();

    MesinCuciBrandPage.ctorParameters = function () {
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

    MesinCuciBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mesin-cuci-brand',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mesin-cuci-brand.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mesin-cuci-brand.page.scss */
      "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss"))["default"]]
    })], MesinCuciBrandPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module-es5.js.map