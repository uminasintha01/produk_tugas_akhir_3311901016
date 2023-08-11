(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-detail-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/detail/detail.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/detail/detail.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n  <div class=\"center\">\n    <img src=\"../../../../assets/images/home/zfix.png\" alt=\"\" style=\"margin-top: 20%;\">\n    <div class=\"middle\">\n      <div class=\"title\">Your Trade In</div>\n\n      <ion-item style=\"--background: transparant; color: #3053A4; margin-top: 10px;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"Brand\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.brand }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n  \n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"RAM\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.ram }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n      \n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"Storage\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.storages }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-input style=\"color: #3053A4; margin-top: 20px;\" value=\"Estimated Price\" readonly></ion-input>\n      <button class=\"button round\" style=\"background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">Rp.{{price}}</button>\n\n      <div class=\"row\" style=\"margin-top: 60px;\">\n        <div class=\"col\">\n          <button class=\"button oval\" routerLink=\"/landing/type\" style=\" background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Cancel\n          </button>\n        </div>\n        <div class=\"col\">\n          <button class=\"button oval\" (click)=\"submit()\" style=\"background-color: white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Agree\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!-- <div class=\"div-h1\">\n    <h1>Your Trade In</h1>\n  </div>\n\n  <div class=\"content\">\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Brand</ion-label>\n      <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.brand }}\" readonly></ion-input>\n    </ion-item>\n\n    <div class=\"row\">\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"col\" style=\"text-align: left;\">\n          <ion-label>RAM</ion-label>\n        </div>\n        <div class=\"col\" style=\"text-align: right;\">\n          <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.ram }}\" readonly></ion-input>\n        </div>\n      </ion-item>\n    </div>\n    \n    <div class=\"row\">\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"col\" style=\"text-align: left;\">\n          <ion-label>Storage</ion-label>\n        </div>\n        <div class=\"col\" style=\"text-align: right;\">\n          <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.storages }}\" readonly></ion-input>\n        </div>\n      </ion-item>\n    </div>\n\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Lokasi Trade </ion-label>\n      <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.location }}\" readonly></ion-input>\n    </ion-item>\n\n    <div class=\"div-h1\">\n      <h1>Estimated Price</h1>\n    </div>\n\n    <ion-input value=\"{{price}}\" readonly>\n    </ion-input>\n\n    <div class=\"row\" style=\"margin-top: 60px;\">\n      <div class=\"col\">\n        <ion-button shape=\"round\" fill=\"outline\" style=\" --background:#BCCCF4; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" routerLink=\"/landing/type\">Cancel</ion-button>\n      </div>\n      <div class=\"col\">\n        <ion-button shape=\"round\" style=\"--background:white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" (click)=\"submit()\">Next</ion-button>\n      </div>\n    </div>\n\n  </div> -->\n \n</ion-content>\n\n<!-- <ion-header class=\"header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id=\"bg-white\">\n  <div class=\"container bg-white\">\n    <img class=\"bg-image top\" src=\"../../../../assets/images/Lebar_atas.svg\" alt=\"\">\n    \n    <ion-card>\n      <ion-card-content>\n        <h1>Your Trade In</h1>\n\n        <ion-item mb-2>\n          <ion-input class=\"input-1\" *ngFor=\"let x of deviceObj\" value=\"{{x.brand}}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item> \n          <ion-input class=\"input-1\" *ngFor=\"let x of deviceObj\" value=\"{{x.ram}}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item >\n          <ion-input  class=\"input-1\" *ngFor=\"let x of deviceObj\" value=\"{{x.storages}}\" readonly ></ion-input>\n        </ion-item>\n        \n          <h3>Estimated Price</h3>\n          <ion-input value=\"{{price}}\" readonly>\n          </ion-input>\n  \n          <button class=\"btn\" (click)=\"submit()\">Aggree</button>\n          <div class=\"a\">\n            <a href=\"#\" routerLink=\"/landing/type\">Cancel</a>\n          </div>\n       \n      </ion-card-content>\n    </ion-card>\n\n  </div>\n  <div class=\"shape\"><img src=\"../../../assets/images/Lebar_bawah.svg\" alt=\"\"></div>\n \n</ion-content> -->");

/***/ }),

/***/ "./src/app/pages/landing/selling-hp/detail/detail-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/detail/detail-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "./src/app/pages/landing/selling-hp/detail/detail.page.ts");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-hp/detail/detail.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/detail/detail.module.ts ***!
  \******************************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/pages/landing/selling-hp/detail/detail-routing.module.ts");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/pages/landing/selling-hp/detail/detail.page.ts");







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/pages/landing/selling-hp/detail/detail.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/detail/detail.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15%;\n  margin-bottom: 5%;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.oval {\n  border-radius: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL2RldGFpbC9DOlxcVXNlcnNcXGhwXFxEb3dubG9hZHNcXHpmaXgtdHJhZGUtaW4tMjAyMi1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLWhwXFxkZXRhaWxcXGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1ocC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQ0NwQjs7QURFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtBQ0NkOztBREVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUNDZDs7QURFQTtFQUNFLGVBQWU7RUFDZiw0REFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FDQ25COztBREVBO0VBQ0UsZUFBZTtFQUNmLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7QUNDcEI7O0FERUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ0NuQjs7QURFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FDQ1g7O0FERUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7QUNDakI7O0FERUE7RUFBUSxtQkFBbUI7QUNFM0I7O0FEREE7RUFBTyxtQkFBbUI7QUNLMUI7O0FESEE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUNNYjs7QURKRTtFQUNBLFlBQVk7RUFDWixjQUFjO0FDT2hCOztBRExFO0VBQ0EsV0FBVztBQ1FiOztBRExFO0VBQ0Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FDUXJCOztBRExFO0VBQ0EsV0FBVztBQ1FiOztBRExFO0VBQ0EsZUFBZTtBQ1FqQjs7QURMRTtFQUNBLGdCQUFnQjtBQ1FsQjs7QURMRTtFQUNBLFVBQVU7QUNRWjs7QURMRTtFQUNBLGdCQUFnQjtBQ1FsQjs7QURMRTtFQUNBLGdCQUFnQjtBQ1FsQjs7QURMRTtFQUNBLFVBQVU7QUNRWjs7QURMRTtFQUNBLGdCQUFnQjtBQ1FsQjs7QURMRTtFQUNBLGdCQUFnQjtBQ1FsQjs7QURMRTtFQUNBLFVBQVU7QUNRWjs7QURMRTtFQUNBLGdCQUFnQjtBQ1FsQjs7QURMRTtFQUNBLGdCQUFnQjtBQ1FsQjs7QURMRTtFQUNBLFdBQVc7QUNRYjs7QURMRTtFQUNBLFdBQVc7QUNRYjs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxXQUFXO0FDUWI7O0FETEU7RUFDQSxVQUFVO0FDUVo7O0FETEU7RUFDQSxjQUFjO0FDUWhCOztBRExFO0VBQ0EsZUFBZTtBQ1FqQjs7QURMRTtFQUNBLFNBQVM7QUNRWDs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EsU0FBUztBQ1FYOztBRExFO0VBQ0EsZUFBZTtBQ1FqQjs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxTQUFTO0FDUVg7O0FETEU7RUFDQSxlQUFlO0FDUWpCOztBRExFO0VBQ0EsZUFBZTtBQ1FqQjs7QURMRTtFQUNBLFVBQVU7QUNRWjs7QURMRTtFQUNBLGVBQWU7QUNRakI7O0FETEU7RUFDQSxxQkFBcUI7QUNRdkI7O0FETEU7RUFDQSxzQkFBc0I7QUNReEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxzQkFBc0I7QUNReEI7O0FETEU7RUFDQSxzQkFBc0I7QUNReEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxzQkFBc0I7QUNReEI7O0FETEU7RUFDQSxzQkFBc0I7QUNReEI7O0FETEU7RUFDQSxnQkFBZ0I7QUNRbEI7O0FETEU7RUFDQSxzQkFBc0I7QUNReEI7O0FETEU7RUFDQSxzQkFBc0I7QUNReEI7O0FETEU7RUFDQSxpQkFBaUI7QUNRbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZi01IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNraXAge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzA1M0E0O1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uaW5zdHJ1a3NpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWlkZGxlIHsgXG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbmhye1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kIHtib3JkZXItcmFkaXVzOiAxMnB4O31cbi5vdmFsIHtib3JkZXItcmFkaXVzOiAyMHB4O31cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbiAgfVxuICAucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICAucm93OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIH1cblxuICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuXG4gIC5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtMiB7XG4gIHdpZHRoOiAxNi42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xuICB9XG5cbiAgLmNvbC14cy00IHtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtNSB7XG4gIHdpZHRoOiA0MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmNvbC14cy03IHtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtOCB7XG4gIHdpZHRoOiA2Ni42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xuICB9XG5cbiAgLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG4gIH1cblxuICAuY29sLXhzLXB1bGwtMSB7XG4gIHJpZ2h0OiA4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0zIHtcbiAgcmlnaHQ6IDI1JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC00IHtcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC02IHtcbiAgcmlnaHQ6IDUwJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC03IHtcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC05IHtcbiAgcmlnaHQ6IDc1JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0xMCB7XG4gIHJpZ2h0OiA4My4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTEyIHtcbiAgcmlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtMCB7XG4gIGxlZnQ6IGF1dG87XG4gIH1cblxuICAuY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtMyB7XG4gIGxlZnQ6IDI1JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtNiB7XG4gIGxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtOSB7XG4gIGxlZnQ6IDc1JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0xMiB7XG4gIGxlZnQ6IDEwMCU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICB9IiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmYtNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5za2lwIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5pbnN0cnVrc2kge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBsaWdodGdyZWVuO1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWlkZGxlIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5vdmFsIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLTIge1xuICB3aWR0aDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTUge1xuICB3aWR0aDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLTgge1xuICB3aWR0aDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy0xMSB7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbn1cblxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuXG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuXG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuXG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cblxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/selling-hp/detail/detail.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/detail/detail.page.ts ***!
  \****************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");










let DetailPage = class DetailPage {
    constructor(selling, router, storage, sellingApiService, activatedRoute, utilsService) {
        this.selling = selling;
        this.router = router;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.activatedRoute = activatedRoute;
        this.utilsService = utilsService;
        this.response = {};
        this.deviceObj = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["ActivationKey"]).then((data) => {
                let deviceActivity = {
                    brand: data.brand,
                    ram: data.ram,
                    storages: data.storages,
                    location: data.lokasi_trade,
                    screen_has_problem: data.screenHasProblem,
                    camera_has_problem: data.cameraHasProblem,
                    wifi_has_problem: data.wifiHasProblem,
                    fingerprint_has_problem: data.fingerprintHasProblem,
                    button_has_problem: data.buttonHasProblem,
                    lokasi_trade: data.lokasi_trade
                };
                // console.log(deviceActivity)
                this.sellingApiService.getDeviceDetail(token, deviceActivity).subscribe((response) => {
                    this.response = response,
                        this.price = this.response.data;
                });
                this.deviceObj.push(data);
            });
        });
    }
    submit() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["ActivationKey"]).then((data) => {
                let deviceActivity = {
                    brand: data.brand,
                    ram: data.ram,
                    storages: data.storages,
                    location: data.lokasi_trade,
                    screen_has_problem: data.screenHasProblem,
                    camera_has_problem: data.cameraHasProblem,
                    wifi_has_problem: data.wifiHasProblem,
                    finger: data.fingerprintHasProblem,
                    vibration: data.vibrateHasProblem,
                    button_has_problem: data.buttonHasProblem,
                    lokasi_trade: data.lokasi_trade,
                    price: this.price
                };
                this.sellingApiService.sellDevice(token, deviceActivity).subscribe((success) => {
                    this.utilsService.showToast("Permintaan berhasil di ajukan.");
                    this.router.navigate(["landing/type"]);
                }, (err) => {
                    var error = {};
                    error = err.error;
                    this.utilsService.showToast(error.message);
                });
            });
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__["SellingApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] }
];
DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/detail/detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail.page.scss */ "./src/app/pages/landing/selling-hp/detail/detail.page.scss")).default]
    })
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=selling-hp-detail-detail-module-es2015.js.map