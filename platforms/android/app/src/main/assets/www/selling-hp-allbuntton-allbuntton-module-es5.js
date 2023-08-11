function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-allbuntton-allbuntton-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingHpAllbunttonAllbunttonPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content  style=\"--background: #ccc url('../../../../assets/images/phone/camera/BG.png') no-repeat center center / cover;\">\n  <div class=\"center\">\n    <img src=\"../../../../assets/images/phone/camera/logo.png\" alt=\"\" style=\"margin-top: 23%;\">\n    <div class=\"middle\">\n      <img src=\"../../../../assets/images/phone/button/button.png\" alt=\"\">\n        <div class=\"title\">Silahkah Tes Getar Anda</div>\n        <div class=\"instruksi\">Instruksi</div>\n        <div style=\"text-align: left;\">\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen; margin-top: 20px;\"></ion-icon> Silahkan Tekan Tombol Volume Bawah</p>\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen;\"></ion-icon> Silahkan Tekan Tombol Volume Atas</p>\n          <p class=\"f-5\"><ion-icon name=\"radio-button-on\" style=\"color: lightgreen;\"></ion-icon> Silahkan Tekan Tombol Trun-Off</p>\n        </div>\n        <button class=\"button round\" icon-only (click)=\"submit()\" style=\"margin-top: 10%;\">\n          Selesai\n        </button>\n        <div (click)=\"skip()\" style=\"margin-right: 30%; margin-left: 30%; margin-top: 25%;\">\n           <p class=\"skip\">Lewati <a style=\"margin-left: 10px;\">>></a></p> \n           <hr>\n        </div>\n    </div>\n  </div>\n</ion-content>\n\n\n<!-- <ion-content class=\"background\"  [fullscren]=\"true\">\n<ion-card>\n  <ion-card-content>\n\n    <h1>Tes All Button</h1>\n  <h3>*instruksi*</h3>\n  <ul>\n    <li>silahkan tekan tombol volume bawah</li>\n    <li>silahkan tekan tombol volume atas</li>\n    <li>silahkan tekan tombol Trun-off</li>\n  </ul>\n  \n  <button class=\"btn-done\" (click)=\"submit()\" center-block> Done </button>\n</ion-card-content>\n</ion-card>\n<div class=\"bg-image\" ><img  src=\"../../../assets/images/bawah_putih.svg\" alt=\"\"></div>\n</ion-content> -->\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/allbuntton/allbuntton-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: AllbunttonPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingHpAllbunttonAllbunttonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllbunttonPageRoutingModule", function () {
      return AllbunttonPageRoutingModule;
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


    var _allbuntton_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./allbuntton.page */
    "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts");

    var routes = [{
      path: '',
      component: _allbuntton_page__WEBPACK_IMPORTED_MODULE_3__["AllbunttonPage"]
    }];

    var AllbunttonPageRoutingModule = function AllbunttonPageRoutingModule() {
      _classCallCheck(this, AllbunttonPageRoutingModule);
    };

    AllbunttonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AllbunttonPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton.module.ts ***!
    \**************************************************************************/

  /*! exports provided: AllbunttonPageModule */

  /***/
  function srcAppPagesLandingSellingHpAllbunttonAllbunttonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllbunttonPageModule", function () {
      return AllbunttonPageModule;
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


    var _allbuntton_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./allbuntton-routing.module */
    "./src/app/pages/landing/selling-hp/allbuntton/allbuntton-routing.module.ts");
    /* harmony import */


    var _allbuntton_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./allbuntton.page */
    "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts");

    var AllbunttonPageModule = function AllbunttonPageModule() {
      _classCallCheck(this, AllbunttonPageModule);
    };

    AllbunttonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _allbuntton_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllbunttonPageRoutingModule"]],
      declarations: [_allbuntton_page__WEBPACK_IMPORTED_MODULE_6__["AllbunttonPage"]]
    })], AllbunttonPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingHpAllbunttonAllbunttonPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: white;\n  margin-top: 15%;\n  margin-bottom: 0px;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  color: #3053A4;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL2FsbGJ1bnR0b24vQzpcXFVzZXJzXFxocFxcRG93bmxvYWRzXFx6Zml4LXRyYWRlLWluLTIwMjItbWFzdGVyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2VsbGluZy1ocFxcYWxsYnVudHRvblxcYWxsYnVudHRvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1ocC9hbGxidW50dG9uL2FsbGJ1bnR0b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FDQ3BCOztBREVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZO0FDQ2Q7O0FERUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQ0NkOztBREVBO0VBQ0UsZUFBZTtFQUNmLDREQUEyRDtFQUMzRCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUNDcEI7O0FERUE7RUFDRSxlQUFlO0VBQ2YsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQ0NwQjs7QURFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FDQ25COztBREVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUNDWDs7QURFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsNERBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7QUNDakI7O0FERUE7RUFBUSxtQkFBbUI7QUNFM0I7O0FEQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUNHYjs7QURERTtFQUNBLFlBQVk7RUFDWixjQUFjO0FDSWhCOztBREZFO0VBQ0EsV0FBVztBQ0tiOztBREZFO0VBQ0Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FDS3JCOztBREZFO0VBQ0EsV0FBVztBQ0tiOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLGdCQUFnQjtBQ0tsQjs7QURGRTtFQUNBLFdBQVc7QUNLYjs7QURGRTtFQUNBLFdBQVc7QUNLYjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxXQUFXO0FDS2I7O0FERkU7RUFDQSxVQUFVO0FDS1o7O0FERkU7RUFDQSxjQUFjO0FDS2hCOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLFNBQVM7QUNLWDs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsU0FBUztBQ0tYOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxTQUFTO0FDS1g7O0FERkU7RUFDQSxlQUFlO0FDS2pCOztBREZFO0VBQ0EsZUFBZTtBQ0tqQjs7QURGRTtFQUNBLFVBQVU7QUNLWjs7QURGRTtFQUNBLGVBQWU7QUNLakI7O0FERkU7RUFDQSxxQkFBcUI7QUNLdkI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxnQkFBZ0I7QUNLbEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxzQkFBc0I7QUNLeEI7O0FERkU7RUFDQSxpQkFBaUI7QUNLbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvYWxsYnVudHRvbi9hbGxidW50dG9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mLTUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2tpcCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmluc3RydWtzaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogbGlnaHRncmVlbjtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1pZGRsZSB7IFxuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG5ocntcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzMwNTNBNDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm91bmQge2JvcmRlci1yYWRpdXM6IDEycHg7fVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xuICB9XG4gIC5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIC5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgfVxuXG4gIC5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtMyB7XG4gIHdpZHRoOiAyNSU7XG4gIH1cblxuICAuY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtOSB7XG4gIHdpZHRoOiA3NSU7XG4gIH1cblxuICAuY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy0xMiB7XG4gIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0xIHtcbiAgcmlnaHQ6IDguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTIge1xuICByaWdodDogMTYuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTUge1xuICByaWdodDogNDEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTgge1xuICByaWdodDogNjYuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xuICB9XG5cbiAgLmNvbC14cy1wdWxsLTEwIHtcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVsbC0xMSB7XG4gIHJpZ2h0OiA5MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0wIHtcbiAgbGVmdDogYXV0bztcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0xIHtcbiAgbGVmdDogOC4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTQge1xuICBsZWZ0OiAzMy4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTcge1xuICBsZWZ0OiA1OC4zMzMzMyU7XG4gIH1cblxuICAuY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTEwIHtcbiAgbGVmdDogODMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xuICB9XG5cbiAgLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTAge1xuICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xuICB9XG5cbiAgLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG4gIH1cblxuICAuY29sLXhzLW9mZnNldC05IHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gIH0iLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZi01IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNraXAge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaW5zdHJ1a3NpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogbGlnaHRncmVlbjtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1pZGRsZSB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzMwNTNBNDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLTIge1xuICB3aWR0aDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTUge1xuICB3aWR0aDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLTgge1xuICB3aWR0aDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy0xMSB7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbn1cblxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuXG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuXG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuXG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cblxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.ts ***!
    \************************************************************************/

  /*! exports provided: AllbunttonPage */

  /***/
  function srcAppPagesLandingSellingHpAllbunttonAllbunttonPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllbunttonPage", function () {
      return AllbunttonPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/membership.service */
    "./src/app/services/membership.service.ts");

    var AllbunttonPage = /*#__PURE__*/function () {
      function AllbunttonPage(platform, alertController, navCtrl, activatedRoute, selling, router) {
        _classCallCheck(this, AllbunttonPage);

        //   platform.ready().then(() => {    
        //     this.powerbutton();
        this.platform = platform;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.selling = selling;
        this.router = router;
        this.resultPowerButton = false;
        this.resultVolumeUpButton = false;
        this.resultVolumeDownButton = false; // });
      }

      _createClass(AllbunttonPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.volumeup();
          this.volumedown();
          this.powerbutton();
          this.activatedRoute.queryParams.subscribe(function (params) {
            _this.brand = params["brand"];
            _this.ram = params["ram"];
            _this.storages = params["storages"];
            _this.lokasi_trade = params["lokasi_trade"];
            _this.screenHasProblem = params["screenHasProblem"];
            _this.cameraHasProblem = params["cameraHasProblem"];
            _this.wifiHasProblem = params["wifiHasProblem"];
            _this.vibrateHasProblem = params["vibrateHasProblem"];
            _this.fingerprintHasProblem = params["fingerprintHasProblem"];
            console.log('brand', _this.brand);
            console.log('storage', _this.storages);
            console.log('ram', _this.ram);
            console.log('lokasi trade', _this.lokasi_trade);
            console.log('screen', _this.screenHasProblem);
            console.log('camera', _this.cameraHasProblem);
            console.log('wifi', _this.wifiHasProblem);
            console.log('finger', _this.fingerprintHasProblem);
          });
        }
      }, {
        key: "volumeup",
        value: function volumeup() {
          //   document.addEventListener("volumeupbutton", callback, false);  
          //   function callback() { 
          //     alert('Tekan Tombol Volume Bawah');
          //     document.removeEventListener("volumedownbutton",callback, false)
          // }
          document.addEventListener("volumeupbutton", callbackFunction, false);

          function callbackFunction() {
            if (this.resultVolumeUpButton != true) {
              alert('Volume Up Button is pressed!');
            } // console.log(this.resultVolumeUpButton);


            this.resultVolumeUpButton = true;
          }
        }
      }, {
        key: "volumedown",
        value: function volumedown() {
          //   document.addEventListener("volumedownbutton", callback, false);
          //   function callback() {
          //   alert('Tombol Volume anda Normal. Selanjutnya tekan tombol power on/of hp anda');
          //   document.removeEventListener("volumedownbutton",callback, false)
          // }
          document.addEventListener("volumedownbutton", callbackFunction, false);

          function callbackFunction() {
            if (this.resultVolumeDownButton != true) {
              alert('Volume Down Button is pressed!');
            } // console.log(this.resultVolumeDownButton);


            this.resultVolumeDownButton = true;
          }
        }
      }, {
        key: "powerbutton",
        value: function powerbutton() {
          var _this2 = this;

          this.platform.resume.subscribe(function () {
            if (_this2.resultPowerButton != true) {
              alert('Power Button Button is pressed!');
            } // console.log(this.resultPowerButton);


            _this2.resultPowerButton = true; // alert('[INFO] Test button sudah selesai, lanjut ke tahap selanjutnya');
            // this.back();
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.resultPowerButton == true || this.resultVolumeDownButton == true || this.resultVolumeUpButton == true) {
            this.normal();
          } else {
            this.notNormal();
          }
        }
      }, {
        key: "normal",
        value: function normal() {
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
                      message: 'Test button anda telah berhasi. Ingin lanjut?',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: function handler() {}
                      }, {
                        text: 'Iya',
                        handler: function handler() {
                          var data = {
                            brand: _this3.brand,
                            ram: _this3.ram,
                            storages: _this3.storages,
                            lokasi_trade: _this3.lokasi_trade,
                            screenHasProblem: _this3.screenHasProblem,
                            cameraHasProblem: _this3.cameraHasProblem,
                            wifiHasProblem: _this3.wifiHasProblem,
                            vibrateHasProblem: _this3.vibrateHasProblem,
                            fingerprintHasProblem: _this3.fingerprintHasProblem,
                            buttonHasProblem: 0
                          };

                          _this3.selling.SetSelling(data);

                          _this3.router.navigate(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail"]);
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
      }, {
        key: "notNormal",
        value: function notNormal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Ada button yang belum dipencet!. Apa anda ingin melanjutkan?',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: function handler() {}
                      }, {
                        text: 'Iya',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _this5 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return this.alertController.create({
                                      header: 'ZFix',
                                      message: 'Jika anda tekan iya, anda memverifikasi bahwa button anda memiliki masalah.',
                                      backdropDismiss: false,
                                      buttons: [{
                                        text: 'Tidak',
                                        role: 'cancel',
                                        handler: function handler() {}
                                      }, {
                                        text: 'Iya',
                                        handler: function handler() {
                                          var data = {
                                            brand: _this5.brand,
                                            ram: _this5.ram,
                                            storages: _this5.storages,
                                            lokasi_trade: _this5.lokasi_trade,
                                            screenHasProblem: _this5.screenHasProblem,
                                            cameraHasProblem: _this5.cameraHasProblem,
                                            wifiHasProblem: _this5.wifiHasProblem,
                                            fingerprintHasProblem: _this5.fingerprintHasProblem,
                                            buttonHasProblem: 1
                                          };

                                          _this5.selling.SetSelling(data);

                                          _this5.router.navigate(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail"]);
                                        }
                                      }]
                                    });

                                  case 2:
                                    alert = _context2.sent;
                                    _context2.next = 5;
                                    return alert.present();

                                  case 5:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "skip",
        value: function skip() {
          this.presentSkip();
        }
      }, {
        key: "presentSkip",
        value: function presentSkip() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Tombol anda memiliki masalah!.',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Coba Lagi',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Continue');
                        }
                      }, {
                        text: 'Lewati',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            var _this7 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    _context4.next = 2;
                                    return this.alertController.create({
                                      header: 'ZFix',
                                      message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa tombol anda memiliki masalah.',
                                      backdropDismiss: false,
                                      buttons: [{
                                        text: 'Lanjut',
                                        role: 'cancel',
                                        handler: function handler() {// console.log('Continue');
                                        }
                                      }, {
                                        text: 'Tetap lewati',
                                        handler: function handler() {
                                          var data = {
                                            brand: _this7.brand,
                                            ram: _this7.ram,
                                            storages: _this7.storages,
                                            lokasi_trade: _this7.lokasi_trade,
                                            screenHasProblem: _this7.screenHasProblem,
                                            cameraHasProblem: _this7.cameraHasProblem,
                                            wifiHasProblem: _this7.wifiHasProblem,
                                            fingerprintHasProblem: _this7.fingerprintHasProblem,
                                            buttonHasProblem: 1
                                          };

                                          _this7.selling.SetSelling(data);

                                          _this7.router.navigate(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail"]);
                                        }
                                      }]
                                    });

                                  case 2:
                                    alert = _context4.sent;
                                    _context4.next = 5;
                                    return alert.present();

                                  case 5:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return AllbunttonPage;
    }();

    AllbunttonPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_4__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AllbunttonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-allbuntton',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./allbuntton.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./allbuntton.page.scss */
      "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.page.scss"))["default"]]
    })], AllbunttonPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-hp-allbuntton-allbuntton-module-es5.js.map