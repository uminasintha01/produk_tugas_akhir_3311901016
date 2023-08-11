function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-call-us-call-us-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/call-us/call-us.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/call-us/call-us.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingCallUsCallUsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Hubungi Kami</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-content>\n      <p align=\"center\"><ion-img src=\"./assets/images/5.0x/contact_mascot.png\" width=\"128\"></ion-img></p>\n        <!-- <ion-img src=\"./assets/images/5.0x/contact_mascot.png\"></ion-img> -->\n      <div class=\"ion-text-center\">\n        Kami Siap Membantu Anda\n      </div>\n\n      <ion-text>\n        <p align=\"center\">\n          Silahkan menghubungi kami melalui beberapa pilihan opsi di bawah ini. Customer Service\n          kami siap melayani segala pernyataan setiap saat.\n        </p>\n      </ion-text>\n\n      <ion-grid style=\"padding-left: 20px; padding-top: 20px;\">\n        <ion-row> \n          <div class=\"span6\" style=\"padding-right:13px; border-right: 1px solid #ccc;\">\n            <a href=\"tel:+62 822-2999-1919\"><img src=\"./assets/images/3.0x/contact_call_icon.png\" /></a>\n            <!-- <img href=\"tel:555-555-5555\" src=\"./assets/images/3.0x/contact_call_icon.png\"> -->\n            <h3>Call</h3>\n          </div>\n        \n          <div class=\"span6\" style=\"padding-left:13px; padding-right:13px; border-right: 1px solid #ccc;\">\n            <a href=\"https://api.whatsapp.com/send?phone=6282229991919\" ><img src=\"./assets/images/3.0x/contact_chat_icon.png\"></a>\n              <h3>Chat</h3>\n          </div>\n\n          <div class=\"span6\" style=\"padding-left: 13px;\">\n            <a href=\"mailto:cs@zfix.id\" ><img src=\"./assets/images/3.0x/contact_email_icon.png\"></a>\n            <h3>Email</h3>\n          </div>\n\n          <!-- <ion-col>\n            <div>\n              <img src=\"./assets/images/3.0x/contact_call_icon.png\">\n              <h3>Call</h3>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <img src=\"./assets/images/3.0x/contact_chat_icon.png\">\n              <h3>Chat</h3>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <img src=\"./assets/images/3.0x/contact_email_icon.png\">\n              <h3>Email</h3>\n            </div>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/call-us/call-us-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/landing/setting/call-us/call-us-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: CallUsPageRoutingModule */

  /***/
  function srcAppPagesLandingSettingCallUsCallUsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsPageRoutingModule", function () {
      return CallUsPageRoutingModule;
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


    var _call_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./call-us.page */
    "./src/app/pages/landing/setting/call-us/call-us.page.ts");

    var routes = [{
      path: '',
      component: _call_us_page__WEBPACK_IMPORTED_MODULE_3__["CallUsPage"]
    }];

    var CallUsPageRoutingModule = function CallUsPageRoutingModule() {
      _classCallCheck(this, CallUsPageRoutingModule);
    };

    CallUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CallUsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/call-us/call-us.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/landing/setting/call-us/call-us.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CallUsPageModule */

  /***/
  function srcAppPagesLandingSettingCallUsCallUsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsPageModule", function () {
      return CallUsPageModule;
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


    var _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./call-us-routing.module */
    "./src/app/pages/landing/setting/call-us/call-us-routing.module.ts");
    /* harmony import */


    var _call_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./call-us.page */
    "./src/app/pages/landing/setting/call-us/call-us.page.ts");

    var CallUsPageModule = function CallUsPageModule() {
      _classCallCheck(this, CallUsPageModule);
    };

    CallUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallUsPageRoutingModule"]],
      declarations: [_call_us_page__WEBPACK_IMPORTED_MODULE_6__["CallUsPage"]]
    })], CallUsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/call-us/call-us.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/landing/setting/call-us/call-us.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingCallUsCallUsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\nion-card {\n  border-radius: 15px !important;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-top: 20px;\n  padding-right: 20px;\n  display: flex;\n  width: 90% !important;\n  margin: 5% !important;\n}\n\n.ion-text-center {\n  padding-top: 20px;\n  font-weight: bold;\n  color: black;\n}\n\nion-text {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 10px;\n  text-align: center;\n  color: black;\n}\n\nion-img {\n  height: 250px;\n}\n\nimg {\n  width: 55px;\n  height: 55px;\n}\n\nh3 {\n  margin-left: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2NhbGwtdXMvQzpcXFVzZXJzXFxtYWNhblxcRG93bmxvYWRzXFx6Zml4X2FwcF9hbmd1bGFyX2h0dHBfbmV3OVxcemZpeF9hcHBfYW5ndWxhcl9odHRwX25ldzkvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZXR0aW5nXFxjYWxsLXVzXFxjYWxsLXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2NhbGwtdXMvY2FsbC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIsbUJBQWM7QUNDbEI7O0FERUE7RUFDSSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7RUFDckIscUJBQXFCO0FDQ3pCOztBREVBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0FDQ2hCOztBREVBO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUNDaEI7O0FER0U7RUFDRSxhQUFhO0FDQWpCOztBREdBO0VBQ0ksV0FBVztFQUNYLFlBQVk7QUNBaEI7O0FER0E7RUFDSSxpQkFBaUI7QUNBckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmcvY2FsbC11cy9jYWxsLXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbiAgICBcclxuaW9uLWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNSUgIWltcG9ydGFudDtcclxufVxyXG4gICAgXHJcbi5pb24tdGV4dC1jZW50ZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi10ZXh0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuICBpb24taW1ne1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1JSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG5oMyB7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/call-us/call-us.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/landing/setting/call-us/call-us.page.ts ***!
    \***************************************************************/

  /*! exports provided: CallUsPage */

  /***/
  function srcAppPagesLandingSettingCallUsCallUsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallUsPage", function () {
      return CallUsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CallUsPage = /*#__PURE__*/function () {
      function CallUsPage() {
        _classCallCheck(this, CallUsPage);
      }

      _createClass(CallUsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CallUsPage;
    }();

    CallUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-call-us',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./call-us.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/call-us/call-us.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./call-us.page.scss */
      "./src/app/pages/landing/setting/call-us/call-us.page.scss"))["default"]]
    })], CallUsPage);
    /***/
  }
}]);
//# sourceMappingURL=setting-call-us-call-us-module-es5.js.map