(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n  <div class=\"div-h1\">\n    <h1>Your Trade In</h1>\n  </div>\n  <div class=\"content\">\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Merk</ion-label>\n      <ion-select (ionChange) = \"this.brand = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_brand of data_brand\" value=\"{{row_brand.brand}}\" placeholder=\"Pilih..\">{{row_brand.brand}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Type</ion-label>\n      <ion-select (ionChange) = \"this.type= $event.target.value\">  \n        <ion-select-option *ngFor=\"let row_type of data_type\" [value]=\"row_type.type\" placeholder=\"Pilih..\">{{row_type.type}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label class=\"ion-text-wrap\">Tempat anda melakukan Trade In</ion-label>\n      <ion-select (ionChange)=\"this.lokasi_trade = $event.target.value\">\n          <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Mesin Cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"condition\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Nyala</ion-label>\n              <ion-radio slot=\"start\" value=\"Nyala\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Mati Total</ion-label>\n              <ion-radio  slot=\"start\" value=\"Mati Total\"></ion-radio>\n            </ion-item>   \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Fisik Mesin Cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"kondisi_fisik\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Mulus</ion-label>\n              <ion-radio slot=\"start\" value=\"Mulus\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Lecet Parah</ion-label>\n              <ion-radio  slot=\"start\" value=\"Dent,Penyok\"></ion-radio>\n            </ion-item>  \n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Dent,Penyok</ion-label>\n              <ion-radio  slot=\"start\" value=\"Dent,Penyok\"></ion-radio>\n            </ion-item>   \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col > \n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Rubber Pada Kaki mesin cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"rubber\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Normal</ion-label> \n              <ion-radio slot=\"start\" value=\"Normal\"></ion-radio>\n            </ion-item>\n          \n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n              <ion-label class=\"ion-text-wrap\">Tidak Normal</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak Normal\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Tutup pada Mesin Cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"tutup\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n              <ion-radio  slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n            </ion-item>   \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Tombol pada mesin cuci</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"tombol\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Berfungsi Normal</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi Normal\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi Normal</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi Normal\"></ion-radio>\n              </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Pembuangan Air</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"pembuangan\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Tidak berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Spinner/Pengering</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"pengering\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Tidak berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Air Otomatis</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"air_otomatis\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Tidak berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Fungsi Pemanas</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"pemanas\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Tidak berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak berfungsi\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n      <div class=\"col\">\n        <ion-button shape=\"round\" fill=\"outline\" style=\" --background:#BCCCF4; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" routerLink=\"/landing/type\">Cancel</ion-button>\n      </div>\n      <div class=\"col\">\n        <ion-button shape=\"round\" style=\"--background:white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" (click)=\"submit()\">Agree</ion-button>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: MesinCuciBrandPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPageRoutingModule", function() { return MesinCuciBrandPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesin-cuci-brand.page */ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts");




const routes = [
    {
        path: '',
        component: _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_3__["MesinCuciBrandPage"]
    }
];
let MesinCuciBrandPageRoutingModule = class MesinCuciBrandPageRoutingModule {
};
MesinCuciBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MesinCuciBrandPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: MesinCuciBrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPageModule", function() { return MesinCuciBrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mesin_cuci_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mesin-cuci-brand-routing.module */ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand-routing.module.ts");
/* harmony import */ var _mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mesin-cuci-brand.page */ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts");







let MesinCuciBrandPageModule = class MesinCuciBrandPageModule {
};
MesinCuciBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mesin_cuci_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["MesinCuciBrandPageRoutingModule"]
        ],
        declarations: [_mesin_cuci_brand_page__WEBPACK_IMPORTED_MODULE_6__["MesinCuciBrandPage"]]
    })
], MesinCuciBrandPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header.header {\n  --ion-background-color: transparent;\n  border: none;\n}\n\nion-header.header .icon-b {\n  color: #34549f;\n}\n\n.bg {\n  background-image: url(/src/assets/images/default/background.png);\n}\n\n.content {\n  margin-top: 40%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.title-image {\n  width: 35vw;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n\n.container {\n  height: auto;\n  width: auto;\n}\n\n.container.bg-white {\n  background-color: white;\n}\n\n.bg-image {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n\nh1 {\n  margin-bottom: -10px;\n  margin-left: 20px;\n  color: #34549f;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  font-size: 20pt;\n}\n\n.div-h1 {\n  margin: 0;\n  position: absolute;\n  top: 13%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nion-card {\n  text-align: center;\n  width: 80%;\n  height: 90%;\n  background: transparent;\n  text-transform: none;\n  box-shadow: #52657A;\n}\n\nion-card .icon-a {\n  padding: 10px;\n  font-size: 4em;\n  color: #0099ff;\n}\n\nion-card h2 {\n  color: #424348;\n}\n\n.shape {\n  position: relative;\n  bottom: -10%;\n}\n\n.shape img {\n  width: 100%;\n  height: auto;\n}\n\n.mb-2 {\n  margin-bottom: 20px;\n}\n\n.item-a {\n  background: transparent;\n  height: 60px;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  border: 2px solid gainsboro;\n  color: #8c8c8c;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.title {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  color: #3053A4;\n  font-weight: bold;\n  margin-top: 20px;\n}\n\nion-col {\n  background: none;\n}\n\nhr {\n  border-bottom: 2px solid #87ABDD;\n}\n\nhr:after {\n  content: '';\n  display: block;\n  border-bottom: 2px solid #87ABDD;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvbWVzaW4tY3VjaS1icmFuZC9DOlxcVXNlcnNcXGhwXFxEb3dubG9hZHNcXHpmaXgtdHJhZGUtaW4tMjAyMi1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLW1lc2luLWN1Y2lcXG1lc2luLWN1Y2ktYnJhbmRcXG1lc2luLWN1Y2ktYnJhbmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctbWVzaW4tY3VjaS9tZXNpbi1jdWNpLWJyYW5kL21lc2luLWN1Y2ktYnJhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQXVCO0VBQ3ZCLFlBQVk7QUNDaEI7O0FESEE7RUFJTSxjQUFjO0FDR3BCOztBRENFO0VBQ0UsZ0VBQWdFO0FDRXBFOztBREFFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUNHckI7O0FEQUU7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FDR3RCOztBRENFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUNFZjs7QURKRTtFQUlJLHVCQUF1QjtBQ0k3Qjs7QURBRTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7QUNHYjs7QURWRTtFQVVFLFFBQVM7RUFDVCw0QkFBNEI7QUNJaEM7O0FEZkU7RUFnQkUsV0FBVztBQ0dmOztBREVFO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixlQUFlO0FDQ25COztBREVFO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQztBQ0NwQzs7QURFRTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsbUJBQW1CO0FDQ3ZCOztBRFBFO0VBU0ksYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0FDRXBCOztBRGJFO0VBZUksY0FBc0I7QUNFNUI7O0FERUc7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWTtBQ0NoQjs7QURIRztFQUlLLFdBQVc7RUFDWCxZQUFZO0FDR3BCOztBRENFO0VBQ0EsbUJBQW1CO0FDRXJCOztBRENFO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUFtQztFQUNuQyxjQUF5QjtBQ0U5Qjs7QURDRTtFQUNFLGtCQUFrQjtBQ0V0Qjs7QURDRTtFQUNFLDREQUEyRDtFQUMzRCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQ0VwQjs7QURDRTtFQUNFLGdCQUFnQjtBQ0VwQjs7QURFRTtFQUNFLGdDQUFnQztBQ0NwQzs7QURFRTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixjQUFjO0FDQ2xCOztBREVFO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FDQ2Y7O0FEQ0k7RUFDQSxZQUFZO0VBQ1osY0FBYztBQ0VsQjs7QURBSTtFQUNBLFdBQVc7QUNHZjs7QURBSTtFQUNBLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ0d2Qjs7QURBSTtFQUNBLFdBQVc7QUNHZjs7QURBSTtFQUNBLGVBQWU7QUNHbkI7O0FEQUk7RUFDQSxnQkFBZ0I7QUNHcEI7O0FEQUk7RUFDQSxVQUFVO0FDR2Q7O0FEQUk7RUFDQSxnQkFBZ0I7QUNHcEI7O0FEQUk7RUFDQSxnQkFBZ0I7QUNHcEI7O0FEQUk7RUFDQSxVQUFVO0FDR2Q7O0FEQUk7RUFDQSxnQkFBZ0I7QUNHcEI7O0FEQUk7RUFDQSxnQkFBZ0I7QUNHcEI7O0FEQUk7RUFDQSxVQUFVO0FDR2Q7O0FEQUk7RUFDQSxnQkFBZ0I7QUNHcEI7O0FEQUk7RUFDQSxnQkFBZ0I7QUNHcEI7O0FEQUk7RUFDQSxXQUFXO0FDR2Y7O0FEQUk7RUFDQSxXQUFXO0FDR2Y7O0FEQUk7RUFDQSxlQUFlO0FDR25COztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsVUFBVTtBQ0dkOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsVUFBVTtBQ0dkOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsVUFBVTtBQ0dkOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0EsV0FBVztBQ0dmOztBREFJO0VBQ0EsVUFBVTtBQ0dkOztBREFJO0VBQ0EsY0FBYztBQ0dsQjs7QURBSTtFQUNBLGVBQWU7QUNHbkI7O0FEQUk7RUFDQSxTQUFTO0FDR2I7O0FEQUk7RUFDQSxlQUFlO0FDR25COztBREFJO0VBQ0EsZUFBZTtBQ0duQjs7QURBSTtFQUNBLFNBQVM7QUNHYjs7QURBSTtFQUNBLGVBQWU7QUNHbkI7O0FEQUk7RUFDQSxlQUFlO0FDR25COztBREFJO0VBQ0EsU0FBUztBQ0diOztBREFJO0VBQ0EsZUFBZTtBQ0duQjs7QURBSTtFQUNBLGVBQWU7QUNHbkI7O0FEQUk7RUFDQSxVQUFVO0FDR2Q7O0FEQUk7RUFDQSxlQUFlO0FDR25COztBREFJO0VBQ0EscUJBQXFCO0FDR3pCOztBREFJO0VBQ0Esc0JBQXNCO0FDRzFCOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0Esc0JBQXNCO0FDRzFCOztBREFJO0VBQ0Esc0JBQXNCO0FDRzFCOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0Esc0JBQXNCO0FDRzFCOztBREFJO0VBQ0Esc0JBQXNCO0FDRzFCOztBREFJO0VBQ0EsZ0JBQWdCO0FDR3BCOztBREFJO0VBQ0Esc0JBQXNCO0FDRzFCOztBREFJO0VBQ0Esc0JBQXNCO0FDRzFCOztBREFJO0VBQ0EsaUJBQWlCO0FDR3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLW1lc2luLWN1Y2kvbWVzaW4tY3VjaS1icmFuZC9tZXNpbi1jdWNpLWJyYW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIuaGVhZGVye1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAuaWNvbi1ie1xuICAgICAgY29sb3I6ICMzNDU0OWY7XG4gICAgfVxuICBcbiAgfVxuICAuYmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC9iYWNrZ3JvdW5kLnBuZyk7XG4gIH1cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICB9XG4gIFxuICAudGl0bGUtaW1hZ2V7XG4gICAgd2lkdGg6IDM1dnc7XG4gICAgdG9wOiAyMiU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICBcbiAgXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICAmLmJnLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbiAgLmJnLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgXG4gICAgJi50b3Age1xuICAgIHRvcDogIDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICBcbiAgICB9XG4gIFxuICAgICYuYm90dG9tIHtcbiAgICBib3R0b206IDBweDtcbiAgXG4gICAgfVxuICB9XG4gIFxuICBoMXtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjb2xvcjogIzM0NTQ5ZjtcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHQ7XG4gIH1cbiAgXG4gIC5kaXYtaDF7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEzJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIFxuICBpb24tY2FyZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAjNTI2NTdBO1xuICBcbiAgICAuaWNvbi1he1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgY29sb3I6ICMwMDk5ZmY7XG4gICAgfVxuICAgIGgye1xuICAgICAgICAgICAgICBcbiAgICAgIGNvbG9yOiByZ2IoNjYsIDY3LCA3Mik7XG4gICAgfSAgXG4gICB9XG4gIFxuICAgLnNoYXBle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC0xMCU7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICB9XG4gIFxuICAubWItMntcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLml0ZW0tYXtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgIGJvcmRlcjoycHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xuICAgICBjb2xvcjogcmdiKDE0MCwgMTQwLCAxNDApO1xuICB9XG4gIFxuICAudGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAudGl0bGV7XG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMDUzQTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgaW9uLWNvbHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIFxuICBcbiAgaHIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODdBQkREO1xuICB9XG4gIFxuICBocjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4N0FCREQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDsgXG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5yb3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuICAgIC5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB9XG4gICAgLnJvdzphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLTEge1xuICAgIHdpZHRoOiA4LjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtMiB7XG4gICAgd2lkdGg6IDE2LjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtMyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtNCB7XG4gICAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtNSB7XG4gICAgd2lkdGg6IDQxLjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtNiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtNyB7XG4gICAgd2lkdGg6IDU4LjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtOCB7XG4gICAgd2lkdGg6IDY2LjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtOSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtMTAge1xuICAgIHdpZHRoOiA4My4zMzMzMyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLTExIHtcbiAgICB3aWR0aDogOTEuNjY2NjclO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy0xMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1bGwtMCB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1bGwtMSB7XG4gICAgcmlnaHQ6IDguMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy1wdWxsLTIge1xuICAgIHJpZ2h0OiAxNi42NjY2NyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1bGwtMyB7XG4gICAgcmlnaHQ6IDI1JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVsbC00IHtcbiAgICByaWdodDogMzMuMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy1wdWxsLTUge1xuICAgIHJpZ2h0OiA0MS42NjY2NyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1bGwtNiB7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVsbC03IHtcbiAgICByaWdodDogNTguMzMzMzMlO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy1wdWxsLTgge1xuICAgIHJpZ2h0OiA2Ni42NjY2NyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1bGwtOSB7XG4gICAgcmlnaHQ6IDc1JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVsbC0xMCB7XG4gICAgcmlnaHQ6IDgzLjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVsbC0xMSB7XG4gICAgcmlnaHQ6IDkxLjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVsbC0xMiB7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1c2gtMCB7XG4gICAgbGVmdDogYXV0bztcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVzaC0xIHtcbiAgICBsZWZ0OiA4LjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVzaC0yIHtcbiAgICBsZWZ0OiAxNi42NjY2NyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1c2gtMyB7XG4gICAgbGVmdDogMjUlO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy1wdXNoLTQge1xuICAgIGxlZnQ6IDMzLjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVzaC01IHtcbiAgICBsZWZ0OiA0MS42NjY2NyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1c2gtNiB7XG4gICAgbGVmdDogNTAlO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy1wdXNoLTcge1xuICAgIGxlZnQ6IDU4LjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVzaC04IHtcbiAgICBsZWZ0OiA2Ni42NjY2NyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1c2gtOSB7XG4gICAgbGVmdDogNzUlO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy1wdXNoLTEwIHtcbiAgICBsZWZ0OiA4My4zMzMzMyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLXB1c2gtMTEge1xuICAgIGxlZnQ6IDkxLjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtcHVzaC0xMiB7XG4gICAgbGVmdDogMTAwJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtb2Zmc2V0LTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtb2Zmc2V0LTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtb2Zmc2V0LTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLW9mZnNldC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy1vZmZzZXQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtb2Zmc2V0LTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLW9mZnNldC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy1vZmZzZXQtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtb2Zmc2V0LTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLW9mZnNldC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICAgIH1cbiAgXG4gICAgLmNvbC14cy1vZmZzZXQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG4gICAgfVxuICBcbiAgICAuY29sLXhzLW9mZnNldC0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbiAgICB9XG4gIFxuICAgIC5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgICB9IiwiaW9uLWhlYWRlci5oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24taGVhZGVyLmhlYWRlciAuaWNvbi1iIHtcbiAgY29sb3I6ICMzNDU0OWY7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC9iYWNrZ3JvdW5kLnBuZyk7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNDAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLnRpdGxlLWltYWdlIHtcbiAgd2lkdGg6IDM1dnc7XG4gIHRvcDogMjIlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uY29udGFpbmVyLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iZy1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uYmctaW1hZ2UudG9wIHtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG59XG5cbi5iZy1pbWFnZS5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuaDEge1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjMzQ1NDlmO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5kaXYtaDEge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMyU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJveC1zaGFkb3c6ICM1MjY1N0E7XG59XG5cbmlvbi1jYXJkIC5pY29uLWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDRlbTtcbiAgY29sb3I6ICMwMDk5ZmY7XG59XG5cbmlvbi1jYXJkIGgyIHtcbiAgY29sb3I6ICM0MjQzNDg7XG59XG5cbi5zaGFwZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtMTAlO1xufVxuXG4uc2hhcGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1iLTIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaXRlbS1hIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xuICBjb2xvcjogIzhjOGM4Yztcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzA1M0E0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWNvbCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4N0FCREQ7XG59XG5cbmhyOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg3QUJERDtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbC14cy00IHtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC14cy03IHtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy05IHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVsbC0xIHtcbiAgcmlnaHQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMiB7XG4gIHJpZ2h0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0zIHtcbiAgcmlnaHQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtNSB7XG4gIHJpZ2h0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC02IHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtOCB7XG4gIHJpZ2h0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC05IHtcbiAgcmlnaHQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdWxsLTEwIHtcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTExIHtcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTEyIHtcbiAgcmlnaHQ6IDEwMCU7XG59XG5cbi5jb2wteHMtcHVzaC0wIHtcbiAgbGVmdDogYXV0bztcbn1cblxuLmNvbC14cy1wdXNoLTEge1xuICBsZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLXB1c2gtNCB7XG4gIGxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLXB1c2gtNyB7XG4gIGxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLXB1c2gtMTAge1xuICBsZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTIge1xuICBtYXJnaW4tbGVmdDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.ts ***!
  \********************************************************************************************/
/*! exports provided: MesinCuciBrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesinCuciBrandPage", function() { return MesinCuciBrandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");














let MesinCuciBrandPage = class MesinCuciBrandPage {
    constructor(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController) {
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
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getStore();
        this.getBrand();
        this.selling.removeSelling();
    }
    getStore() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getStore(token).subscribe((response) => {
                this.stores = response.data.store;
                console.log(this.stores);
            }, (err) => {
                this.stores = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    getBrand() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then((token) => {
            this.sellingApiService.getBrandMesinCuci(token).subscribe((response) => {
                this.data_brand = response.data.brand;
                this.data_type = response.data.type;
                console.log(this.data_brand);
            }, (err) => {
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    submit() {
        if ((this.brand == null || this.type == null || this.lokasi_trade == null) || (this.brand.replace(/\s/g, "") == "")) {
            this.utilsService.showToast("Lengkapi pengisian form.");
        }
        else if ((this.condition == "Mati Total")) {
            alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
        }
        else {
            this.presentAlertConfirm();
        }
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: () => { }
                    }, {
                        text: 'Lanjut',
                        handler: () => {
                            let navigationExtras = {
                                queryParams: {
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
                                    lokasi_trade: this.lokasi_trade
                                }
                            };
                            this.navCtrl.navigateForward(["/landing/mesin-cuci-brand/detail-mesin-cuci"], navigationExtras);
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
};
MesinCuciBrandPage.ctorParameters = () => [
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__["MembershipApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__["SellingApiService"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_8__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
MesinCuciBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mesin-cuci-brand',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mesin-cuci-brand.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mesin-cuci-brand.page.scss */ "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.page.scss")).default]
    })
], MesinCuciBrandPage);



/***/ })

}]);
//# sourceMappingURL=selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module-es2015.js.map