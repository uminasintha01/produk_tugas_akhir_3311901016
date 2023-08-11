function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-type-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingTypeTypePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  \n<!-- <ion-header class=\"header\">\n  <ion-toolbar>\n    \n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  \n  <!-- <div class=\"container bg-white\"> -->\n    <img class=\"bg-image\" src=\"../../../../assets/images/home/bg_home.png\" alt=\"\">\n    <img class=\"title-image\" src=\"../../../../assets/images/home/zfix.png\" alt=\"\">\n    <ion-buttons style=\"margin-top: 50px; margin-left: 10px;\">\n      <!-- <ion-button (click)=\"logout()\">\n        <ion-icon  class=\"icon-b\" style=\"color: #284483; font-size: 30px;\" name=\"log-out\"></ion-icon>\n      </ion-button> -->\n\n      <ion-button id=\"notification-button\" (click)=\"popclick($event)\" style=\"margin-left: 85%;\">\n        <ion-icon name=\"notifications\" style=\" color: #284483; font-size: 100px;\"></ion-icon>\n        <ion-badge *ngIf = \"count_notification != 0\" id=\"notifications-badge\" style=\" font-size: 5px;\">{{count_notification}}</ion-badge> \n      </ion-button>\n\n    </ion-buttons>\n    <div class=\"div-h1\">\n      <h1>Your Trade In</h1>\n    </div>\n    <div class=\"middle\">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 (click)=\"goTo(1)\">\n            <ion-card >\n              <img src=\"../../../../assets/images/home/mobile/mobile_trade.png\" alt=\"\">\n              <!-- <ion-icon class=\"icon-a\" name=\"phone-portrait-outline\"></ion-icon>\n              <h2>Scan Handphone<br>/Tablet </h2>   -->\n            </ion-card>\n          </ion-col>\n          <ion-col col-6 (click)=\"goTo(2)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/television/tv_trade.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"tv-sharp\"></ion-icon>\n              <h2>Scan Television </h2> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6  (click)=\"goTo(3)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/laptop/laptop_trade.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\n              <h2>Scan Laptop</h2> -->\n            </ion-card>\n          </ion-col>\n          <ion-col col-6 (click)=\"goTo(4)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/ps/ps_trade.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\n              <h2>Scan PlayStation</h2> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6  (click)=\"goTo(5)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/kulkas/kulkas.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\n              <h2>Scan Laptop</h2> -->\n            </ion-card>\n          </ion-col>\n          <ion-col col-6 (click)=\"goTo(6)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/mesin_cuci/mesin_cuci.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\n              <h2>Scan PlayStation</h2> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n  \n      </ion-grid>\n    </div>\n\n  <!-- </div> -->\n    \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/type/type-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/landing/type/type-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: TypePageRoutingModule */

  /***/
  function srcAppPagesLandingTypeTypeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypePageRoutingModule", function () {
      return TypePageRoutingModule;
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


    var _type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./type.page */
    "./src/app/pages/landing/type/type.page.ts");

    var routes = [{
      path: '',
      component: _type_page__WEBPACK_IMPORTED_MODULE_3__["TypePage"]
    }];

    var TypePageRoutingModule = function TypePageRoutingModule() {
      _classCallCheck(this, TypePageRoutingModule);
    };

    TypePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TypePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/type/type.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/landing/type/type.module.ts ***!
    \***************************************************/

  /*! exports provided: TypePageModule */

  /***/
  function srcAppPagesLandingTypeTypeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypePageModule", function () {
      return TypePageModule;
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


    var _type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./type-routing.module */
    "./src/app/pages/landing/type/type-routing.module.ts");
    /* harmony import */


    var _type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./type.page */
    "./src/app/pages/landing/type/type.page.ts");

    var TypePageModule = function TypePageModule() {
      _classCallCheck(this, TypePageModule);
    };

    TypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _type_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypePageRoutingModule"]],
      declarations: [_type_page__WEBPACK_IMPORTED_MODULE_6__["TypePage"]]
    })], TypePageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/type/type.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/landing/type/type.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingTypeTypePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header.header {\n  --ion-background-color: transparent;\n  border: none;\n}\nion-header.header .icon-b {\n  color: #34549f;\n}\n.middle {\n  margin-top: 45%;\n  margin-left: 4%;\n  margin-right: 4%;\n}\n.title-image {\n  width: 35vw;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n.container {\n  height: auto;\n  width: auto;\n}\n.container.bg-white {\n  background-color: white;\n}\n.bg-image {\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.bg-image.bottom {\n  bottom: 0px;\n}\nh1 {\n  margin-bottom: -10px;\n  margin-left: 20px;\n  color: #34549f;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  font-size: 15pt;\n}\n.div-h1 {\n  margin: 0;\n  position: absolute;\n  top: 32%;\n  left: 16%;\n  transform: translate(-50%, -50%);\n}\nion-card {\n  text-align: center;\n  width: 80%;\n  height: 90%;\n  background: transparent;\n  text-transform: none;\n  box-shadow: #52657A;\n}\nion-card .icon-a {\n  padding: 10px;\n  font-size: 4em;\n  color: #0099ff;\n}\nion-card h2 {\n  color: #424348;\n}\n.shape {\n  position: relative;\n  bottom: -10%;\n}\n.shape img {\n  width: 100%;\n  height: auto;\n}\n.mb-2 {\n  margin-bottom: 20px;\n}\n#notification-button {\n  position: relative;\n  width: 42px;\n  top: 1px;\n  right: 1px;\n  overflow: visible !important;\n}\n#notifications-badge {\n  background: red;\n  position: absolute;\n  top: 15px;\n  right: -1px;\n  border-radius: 200%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFx0eXBlXFx0eXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL3R5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7QUNFSjtBRElBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDREY7QURLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRkY7QURHRTtFQUNFLHVCQUFBO0FDREo7QURLQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQ0ZGO0FESUU7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7QUNGRjtBRE1FO0VBQ0EsV0FBQTtBQ0pGO0FEU0E7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTkY7QURTQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ05GO0FEUUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNOSjtBRFFFO0VBRUUsY0FBQTtBQ1BKO0FEV0M7RUFDQyxrQkFBQTtFQUNBLFlBQUE7QUNSRjtBRFNFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNQTjtBRFdBO0VBQ0EsbUJBQUE7QUNSQTtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQ1JGO0FEWUE7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3R5cGUvdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyLmhlYWRlcntcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLmljb24tYntcclxuICAgIGNvbG9yOiAjMzQ1NDlmO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4ubWlkZGxlIHtcclxuICBtYXJnaW4tdG9wOiA0NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gIG1hcmdpbi1yaWdodDogNCU7XHJcbn1cclxuXHJcbi50aXRsZS1pbWFnZXtcclxuICB3aWR0aDogMzV2dztcclxuICB0b3A6IDIyJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gICYuYmctd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICAmLnRvcCB7XHJcbiAgdG9wOiAgMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcblxyXG4gIH1cclxuXHJcbiAgJi5ib3R0b20ge1xyXG4gIGJvdHRvbTogMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmgxe1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMzQ1NDlmO1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuLmRpdi1oMXtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzIlO1xyXG4gIGxlZnQ6IDE2JTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGJveC1zaGFkb3c6ICM1MjY1N0E7XHJcblxyXG4gIC5pY29uLWF7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICBjb2xvcjogIzAwOTlmZjtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgY29sb3I6IHJnYig2NiwgNjcsIDcyKTtcclxuICB9ICBcclxuIH1cclxuXHJcbiAuc2hhcGV7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogLTEwJTtcclxuICBpbWd7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgIH1cclxuXHJcbi5tYi0ye1xyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jbm90aWZpY2F0aW9uLWJ1dHRvbiB7ICAgICAgICAgICAgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIHRvcDoxcHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICBvdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4jbm90aWZpY2F0aW9ucy1iYWRnZSB7XHJcbiAgLy8gY29sb3I6IHJlZDtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogLTFweDtcclxuICBib3JkZXItcmFkaXVzOiAyMDAlO1xyXG59IiwiaW9uLWhlYWRlci5oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuaW9uLWhlYWRlci5oZWFkZXIgLmljb24tYiB7XG4gIGNvbG9yOiAjMzQ1NDlmO1xufVxuXG4ubWlkZGxlIHtcbiAgbWFyZ2luLXRvcDogNDUlO1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59XG5cbi50aXRsZS1pbWFnZSB7XG4gIHdpZHRoOiAzNXZ3O1xuICB0b3A6IDIyJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cbi5jb250YWluZXIuYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJnLWltYWdlIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5iZy1pbWFnZS50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cbi5iZy1pbWFnZS5ib3R0b20ge1xuICBib3R0b206IDBweDtcbn1cblxuaDEge1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjMzQ1NDlmO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmRpdi1oMSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMyJTtcbiAgbGVmdDogMTYlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5pb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogIzUyNjU3QTtcbn1cbmlvbi1jYXJkIC5pY29uLWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDRlbTtcbiAgY29sb3I6ICMwMDk5ZmY7XG59XG5pb24tY2FyZCBoMiB7XG4gIGNvbG9yOiAjNDI0MzQ4O1xufVxuXG4uc2hhcGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTEwJTtcbn1cbi5zaGFwZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNub3RpZmljYXRpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDJweDtcbiAgdG9wOiAxcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbiNub3RpZmljYXRpb25zLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/type/type.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/landing/type/type.page.ts ***!
    \*************************************************/

  /*! exports provided: TypePage */

  /***/
  function srcAppPagesLandingTypeTypePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypePage", function () {
      return TypePage;
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


    var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/api/user-api.service */
    "./src/app/services/api/user-api.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/pages/landing/popover/popover.component */
    "./src/app/pages/landing/popover/popover.component.ts");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");

    var TypePage = /*#__PURE__*/function () {
      function TypePage(authService, storage, userApiService, router, faio, popoverController, sellingApiService) {
        _classCallCheck(this, TypePage);

        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.router = router;
        this.faio = faio;
        this.popoverController = popoverController;
        this.sellingApiService = sellingApiService;
        this.brand = [{
          'id': 1,
          'name': 'Handphone'
        }, {
          'id': 2,
          'name': 'Television'
        }, {
          'id': 3,
          'name': 'Laptop'
        }, {
          'id': 4,
          'name': 'Play Station'
        }, {
          'id': 5,
          'name': 'Kulkas'
        }, {
          'id': 4,
          'name': 'Mesin Cuci'
        }];
      }

      _createClass(TypePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setInterval(function () {
            _this.Count();
          }, 3000); //   cordova.plugins.AppReview.requestReview().catch(function() {
          //     return cordova.plugins.AppReview.openStoreScreen();
          //  });
        }
      }, {
        key: "goTo",
        value: function goTo(id) {
          if (id == 1) {
            // this.router.navigate(['landing', 'selling-phone']);
            alert("on progress");
          } else if (id == 2) {
            this.router.navigate(['landing', 'tv-brand']);
          } else if (id == 3) {
            this.router.navigate(['landing', 'laptop-brand']);
          } else if (id == 4) {
            this.router.navigate(['landing', 'ps-brand']);
          } else if (id == 5) {
            this.router.navigate(['landing', 'kulkas-brand']);
          } else if (id == 6) {
            this.router.navigate(['landing', 'mesin-cuci-brand']);
          }
        }
      }, {
        key: "Count",
        value: function Count() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then(function (token) {
            _this2.sellingApiService.getNotification(token).subscribe(function (response) {
              _this2.count_notification = response.count;
              console.log(_this2.count_notification);
            }, function (err) {// this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "popclick",
        value: function popclick(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_9__["PopoverComponent"],
                      event: event
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }]);

      return TypePage;
    }();

    TypePage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__["UserApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__["FingerprintAIO"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_10__["SellingApiService"]
      }];
    };

    TypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-type',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./type.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./type.page.scss */
      "./src/app/pages/landing/type/type.page.scss"))["default"]]
    })], TypePage);
    /***/
  }
}]);
//# sourceMappingURL=type-type-module-es5.js.map