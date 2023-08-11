function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-detail-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/detail/detail.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/detail/detail.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingHpDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n  <div class=\"center\">\n    <img src=\"../../../../assets/images/home/zfix.png\" alt=\"\" style=\"margin-top: 20%;\">\n    <div class=\"middle\">\n      <div class=\"title\">Your Trade In</div>\n\n      <ion-item style=\"--background: transparant; color: #3053A4; margin-top: 10px;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"Brand\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.brand }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n  \n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"RAM\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.ram }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n      \n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"row\">\n          <div class=\"col\" style=\"text-align: left;\">\n            <ion-input value=\"Storage\" readonly></ion-input>\n          </div>\n          <div class=\"col\" style=\"text-align: right;\">\n            <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.storages }}\" readonly></ion-input>\n          </div>\n        </div>\n      </ion-item>\n\n      <ion-input style=\"color: #3053A4; margin-top: 20px;\" value=\"Estimated Price\" readonly></ion-input>\n      <button class=\"button round\" style=\"background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">Rp.{{price}}</button>\n\n      <div class=\"row\" style=\"margin-top: 60px;\">\n        <div class=\"col\">\n          <button class=\"button oval\" routerLink=\"/landing/type\" style=\" background-color: #7f9ee5; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Cancel\n          </button>\n        </div>\n        <div class=\"col\">\n          <button class=\"button oval\" (click)=\"submit()\" style=\"background-color: white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\">\n            Agree\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!-- <div class=\"div-h1\">\n    <h1>Your Trade In</h1>\n  </div>\n\n  <div class=\"content\">\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Brand</ion-label>\n      <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.brand }}\" readonly></ion-input>\n    </ion-item>\n\n    <div class=\"row\">\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"col\" style=\"text-align: left;\">\n          <ion-label>RAM</ion-label>\n        </div>\n        <div class=\"col\" style=\"text-align: right;\">\n          <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.ram }}\" readonly></ion-input>\n        </div>\n      </ion-item>\n    </div>\n    \n    <div class=\"row\">\n      <ion-item style=\"--background: transparant; color: #3053A4;\">\n        <div class=\"col\" style=\"text-align: left;\">\n          <ion-label>Storage</ion-label>\n        </div>\n        <div class=\"col\" style=\"text-align: right;\">\n          <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.storages }}\" readonly></ion-input>\n        </div>\n      </ion-item>\n    </div>\n\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Lokasi Trade </ion-label>\n      <ion-input *ngFor=\"let x of deviceObj\" value=\"{{ x.location }}\" readonly></ion-input>\n    </ion-item>\n\n    <div class=\"div-h1\">\n      <h1>Estimated Price</h1>\n    </div>\n\n    <ion-input value=\"{{price}}\" readonly>\n    </ion-input>\n\n    <div class=\"row\" style=\"margin-top: 60px;\">\n      <div class=\"col\">\n        <ion-button shape=\"round\" fill=\"outline\" style=\" --background:#BCCCF4; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" routerLink=\"/landing/type\">Cancel</ion-button>\n      </div>\n      <div class=\"col\">\n        <ion-button shape=\"round\" style=\"--background:white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" (click)=\"submit()\">Next</ion-button>\n      </div>\n    </div>\n\n  </div> -->\n \n</ion-content>\n\n<!-- <ion-header class=\"header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id=\"bg-white\">\n  <div class=\"container bg-white\">\n    <img class=\"bg-image top\" src=\"../../../../assets/images/Lebar_atas.svg\" alt=\"\">\n    \n    <ion-card>\n      <ion-card-content>\n        <h1>Your Trade In</h1>\n\n        <ion-item mb-2>\n          <ion-input class=\"input-1\" *ngFor=\"let x of deviceObj\" value=\"{{x.brand}}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item> \n          <ion-input class=\"input-1\" *ngFor=\"let x of deviceObj\" value=\"{{x.ram}}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item >\n          <ion-input  class=\"input-1\" *ngFor=\"let x of deviceObj\" value=\"{{x.storages}}\" readonly ></ion-input>\n        </ion-item>\n        \n          <h3>Estimated Price</h3>\n          <ion-input value=\"{{price}}\" readonly>\n          </ion-input>\n  \n          <button class=\"btn\" (click)=\"submit()\">Aggree</button>\n          <div class=\"a\">\n            <a href=\"#\" routerLink=\"/landing/type\">Cancel</a>\n          </div>\n       \n      </ion-card-content>\n    </ion-card>\n\n  </div>\n  <div class=\"shape\"><img src=\"../../../assets/images/Lebar_bawah.svg\" alt=\"\"></div>\n \n</ion-content> -->";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/detail/detail-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/detail/detail-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: DetailPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingHpDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
      return DetailPageRoutingModule;
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


    var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/pages/landing/selling-hp/detail/detail.page.ts");

    var routes = [{
      path: '',
      component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }];

    var DetailPageRoutingModule = function DetailPageRoutingModule() {
      _classCallCheck(this, DetailPageRoutingModule);
    };

    DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/detail/detail.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/detail/detail.module.ts ***!
    \******************************************************************/

  /*! exports provided: DetailPageModule */

  /***/
  function srcAppPagesLandingSellingHpDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
      return DetailPageModule;
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


    var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-routing.module */
    "./src/app/pages/landing/selling-hp/detail/detail-routing.module.ts");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/pages/landing/selling-hp/detail/detail.page.ts");

    var DetailPageModule = function DetailPageModule() {
      _classCallCheck(this, DetailPageModule);
    };

    DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
      declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })], DetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/detail/detail.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/detail/detail.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingHpDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: #3053A4;\n  margin-top: 15%;\n  margin-bottom: 5%;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.oval {\n  border-radius: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL2RldGFpbC9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2VsbGluZy1ocFxcZGV0YWlsXFxkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUFRLG1CQUFBO0FDRVI7O0FEREE7RUFBTyxtQkFBQTtBQ0tQOztBREhBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTUY7O0FESkU7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ09GOztBRExFO0VBQ0EsV0FBQTtBQ1FGOztBRExFO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1FGOztBRExFO0VBQ0EsV0FBQTtBQ1FGOztBRExFO0VBQ0EsZUFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLFVBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxnQkFBQTtBQ1FGOztBRExFO0VBQ0EsVUFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxVQUFBO0FDUUY7O0FETEU7RUFDQSxnQkFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLFdBQUE7QUNRRjs7QURMRTtFQUNBLFdBQUE7QUNRRjs7QURMRTtFQUNBLGVBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxVQUFBO0FDUUY7O0FETEU7RUFDQSxnQkFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLFVBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxnQkFBQTtBQ1FGOztBRExFO0VBQ0EsVUFBQTtBQ1FGOztBRExFO0VBQ0EsZ0JBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxXQUFBO0FDUUY7O0FETEU7RUFDQSxVQUFBO0FDUUY7O0FETEU7RUFDQSxjQUFBO0FDUUY7O0FETEU7RUFDQSxlQUFBO0FDUUY7O0FETEU7RUFDQSxTQUFBO0FDUUY7O0FETEU7RUFDQSxlQUFBO0FDUUY7O0FETEU7RUFDQSxlQUFBO0FDUUY7O0FETEU7RUFDQSxTQUFBO0FDUUY7O0FETEU7RUFDQSxlQUFBO0FDUUY7O0FETEU7RUFDQSxlQUFBO0FDUUY7O0FETEU7RUFDQSxTQUFBO0FDUUY7O0FETEU7RUFDQSxlQUFBO0FDUUY7O0FETEU7RUFDQSxlQUFBO0FDUUY7O0FETEU7RUFDQSxVQUFBO0FDUUY7O0FETEU7RUFDQSxlQUFBO0FDUUY7O0FETEU7RUFDQSxxQkFBQTtBQ1FGOztBRExFO0VBQ0Esc0JBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxzQkFBQTtBQ1FGOztBRExFO0VBQ0Esc0JBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxzQkFBQTtBQ1FGOztBRExFO0VBQ0Esc0JBQUE7QUNRRjs7QURMRTtFQUNBLGdCQUFBO0FDUUY7O0FETEU7RUFDQSxzQkFBQTtBQ1FGOztBRExFO0VBQ0Esc0JBQUE7QUNRRjs7QURMRTtFQUNBLGlCQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mLTUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2tpcCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMzMDUzQTQ7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uaW5zdHJ1a3NpIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgbWFyZ2luLXRvcDogNyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubWlkZGxlIHsgXHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbmhye1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yb3VuZCB7Ym9yZGVyLXJhZGl1czogMTJweDt9XHJcbi5vdmFsIHtib3JkZXItcmFkaXVzOiAyMHB4O31cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgLnJvdzphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEge1xyXG4gIHdpZHRoOiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMiB7XHJcbiAgd2lkdGg6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMyB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNCB7XHJcbiAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNSB7XHJcbiAgd2lkdGg6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNyB7XHJcbiAgd2lkdGg6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtOCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtOSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTAge1xyXG4gIHdpZHRoOiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTExIHtcclxuICB3aWR0aDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMCB7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMSB7XHJcbiAgcmlnaHQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTIge1xyXG4gIHJpZ2h0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMyB7XHJcbiAgcmlnaHQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC00IHtcclxuICByaWdodDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTUge1xyXG4gIHJpZ2h0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNiB7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC03IHtcclxuICByaWdodDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTgge1xyXG4gIHJpZ2h0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtOSB7XHJcbiAgcmlnaHQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMCB7XHJcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMSB7XHJcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMiB7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMCB7XHJcbiAgbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xIHtcclxuICBsZWZ0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0yIHtcclxuICBsZWZ0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMyB7XHJcbiAgbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTQge1xyXG4gIGxlZnQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC01IHtcclxuICBsZWZ0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNiB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTcge1xyXG4gIGxlZnQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC04IHtcclxuICBsZWZ0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtOSB7XHJcbiAgbGVmdDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEwIHtcclxuICBsZWZ0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTEge1xyXG4gIGxlZnQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMiB7XHJcbiAgbGVmdDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEge1xyXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0zIHtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTUge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC02IHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC05IHtcclxuICBtYXJnaW4tbGVmdDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEyIHtcclxuICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICB9IiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmYtNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5za2lwIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMwNTNBNDtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmluc3RydWtzaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogbGlnaHRncmVlbjtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1pZGRsZSB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5vdmFsIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLTIge1xuICB3aWR0aDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTUge1xuICB3aWR0aDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLTgge1xuICB3aWR0aDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy0xMSB7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbn1cblxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuXG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuXG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuXG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cblxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/detail/detail.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/detail/detail.page.ts ***!
    \****************************************************************/

  /*! exports provided: DetailPage */

  /***/
  function srcAppPagesLandingSellingHpDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
      return DetailPage;
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


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var DetailPage = /*#__PURE__*/function () {
      function DetailPage(selling, router, storage, sellingApiService, activatedRoute, utilsService) {
        _classCallCheck(this, DetailPage);

        this.selling = selling;
        this.router = router;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.activatedRoute = activatedRoute;
        this.utilsService = utilsService;
        this.response = {};
        this.deviceObj = [];
      }

      _createClass(DetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then(function (token) {
            _this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["ActivationKey"]).then(function (data) {
              var deviceActivity = {
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
              }; // console.log(deviceActivity)

              _this.sellingApiService.getDeviceDetail(token, deviceActivity).subscribe(function (response) {
                _this.response = response, _this.price = _this.response.data;
              });

              _this.deviceObj.push(data);
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then(function (token) {
            _this2.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["ActivationKey"]).then(function (data) {
              var deviceActivity = {
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
                price: _this2.price
              };

              _this2.sellingApiService.sellDevice(token, deviceActivity).subscribe(function (success) {
                _this2.utilsService.showToast("Permintaan berhasil di ajukan.");

                _this2.router.navigate(["landing/type"]);
              }, function (err) {
                var error = {};
                error = err.error;

                _this2.utilsService.showToast(error.message);
              });
            });
          });
        }
      }]);

      return DetailPage;
    }();

    DetailPage.ctorParameters = function () {
      return [{
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_6__["SellingApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]
      }];
    };

    DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/detail/detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/pages/landing/selling-hp/detail/detail.page.scss"))["default"]]
    })], DetailPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-hp-detail-detail-module-es5.js.map