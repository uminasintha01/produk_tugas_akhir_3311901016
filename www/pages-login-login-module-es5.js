function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"background\" [fullscreen]=\"true\">\n  <ion-card>\n    <img src=\"../../../assets/images/zfix_logo.png\" alt=\"\" class=\"zfix\">\n    <ion-card-header>\n       <ion-card-title>\n         ALL U CAN TRADE\n       </ion-card-title>\n       <ion-card-subtitle>\n         Aplikasi Trade In Terpecaya\n       </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      \n      <ion-item>\n        <ion-input placeholder=\"Email\"  name=\"email\" type=\"email\" [(ngModel)]=\"credential.email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"Password\" name=\"password\" type=\"password\" [(ngModel)]=\"credential.password\" minlength=\"8\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\n      </ion-item>\n      <div class=\"botton-section\">\n        <ion-button (click)=\"login() \" routerLink=\"/login\">Sign In</ion-button>\n      </div>\n      <a routerLink=\"/forgot-password\">Forgot Password?</a>\n    \n      <div class=\"button-sigup\">\n        <ion-button class=\"btn_signup\" routerLink=\"/register\">Sign Up</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"bg-image\" ><img  src=\"../../../assets/images/Lebar_bawah.svg\" alt=\"\"></div>\n \n \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"background\">\n    <ion-title><a href=\"#\" class=\"condition\"> Term and Condition</a></ion-title>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.background {\n  --ion-background-color:linear-gradient(#0f4ed8,#0099ff,rgb(184, 202, 250));\n}\n\nion-content.background ion-card {\n  margin-top: 70px;\n  background: transparent;\n  box-shadow: none;\n  text-align: center;\n}\n\nion-content.background ion-card .zfix {\n  height: 40px;\n}\n\nion-content.background ion-card ion-card-title {\n  margin-top: 26px;\n  font-size: 30px;\n  color: #ffffff;\n}\n\nion-content.background ion-card ion-card-subtitle {\n  font-size: 14px;\n  color: #ffffff;\n}\n\nion-content.background ion-card ion-card-content {\n  margin-top: 30px;\n}\n\nion-content.background ion-card ion-card-content ion-item {\n  --ion-item-background:transparent;\n  --border--width:0;\n  --inner-border-width:0;\n}\n\nion-content.background ion-card ion-card-content ion-item ion-input {\n  border: 1px;\n  font-size: 14px;\n  font-weight: 300;\n  color: #fff;\n  --padding-start:20px\n                                ;\n}\n\nion-content.background ion-card ion-card-content a {\n  text-decoration: none;\n  color: #fff;\n  font-weight: 300;\n  font-size: 13px;\n  text-align: center;\n}\n\nion-content.background ion-card ion-card-content ion-button {\n  margin-top: 20px;\n  height: 40px;\n  width: 150px;\n  font-size: 20px;\n  text-transform: none;\n  font-weight: 300;\n  --background: rgb(255, 255, 255);\n  --border-radius:20px !important;\n  color: #B6B6B6;\n  font-weight: bold;\n}\n\nion-content.background ion-card ion-card-content ion-button .botton-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-content.background ion-card ion-card-content ion-button.btn_signup {\n  height: 40px;\n  width: 150px;\n  font-size: 20px;\n  border: 1px solid #fff;\n  text-transform: none;\n  font-weight: 300;\n  --background:transparent;\n  border-radius: 20px !important;\n  color: #ffffff;\n  font-weight: bold;\n  box-shadow: transparent;\n}\n\nion-content.background ion-card ion-card-content ion-button.btn_signup .button-sigup {\n  margin-top: 19px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: none;\n}\n\nion-content.background .bg-image {\n  position: relative;\n  bottom: -10%;\n}\n\nion-content.background .bg-image img {\n  width: 100%;\n  height: auto;\n}\n\nion-toolbar.background {\n  text-align: center;\n  position: relative;\n  --ion-background-color:   rgb(53,123,203);\n}\n\nion-toolbar.background .condition {\n  color: #fff;\n  text-align: center;\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxocFxcRG93bmxvYWRzXFx6Zml4LXRyYWRlLWluLTIwMjItbWFzdGVyL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEVBQXVCO0FDQ3pCOztBREZBO0VBSXNCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQ0V4Qzs7QURUQTtFQVV3QixZQUFZO0FDR3BDOztBRGJBO0VBaUJ3QixnQkFBZ0I7RUFDZCxlQUFjO0VBQ2QsY0FBYztBQ0F4Qzs7QURuQkE7RUF1QjBCLGVBQWM7RUFDZCxjQUFjO0FDQXhDOztBRHhCQTtFQTJCd0IsZ0JBQWU7QUNDdkM7O0FENUJBO0VBOEIwQixpQ0FBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtBQ0UvQzs7QURsQ0E7RUFtQzRCLFdBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWDtnQ0FBZ0I7QUNJNUM7O0FEM0NBO0VBMkMwQixxQkFBcUI7RUFDckIsV0FBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FDSTVDOztBRG5EQTtFQWtENEIsZ0JBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdDQUFhO0VBQ2IsK0JBQWdCO0VBQ2hCLGNBQWE7RUFDYixpQkFBaUI7QUNLN0M7O0FEaEVBO0VBK0Q4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQ0tqRDs7QUR0RUE7RUF5RTBCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHdCQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLGNBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0FDQ2pEOztBRHBGQTtFQXFGMEIsZ0JBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUNHMUM7O0FENUZBO0VBcUdzQixrQkFBa0I7RUFDbEIsWUFBWTtBQ0xsQzs7QURqR0E7RUEwR3NCLFdBQVc7RUFDWCxZQUFZO0FDTGxDOztBRGFFO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5Q0FBdUI7QUNWM0I7O0FET0U7RUFNSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUNUckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgjMGY0ZWQ4LCMwMDk5ZmYscmdiKDE4NCwgMjAyLCAyNTApKTtcbiAgXG4gICAgICAgICAgICAgIGlvbi1jYXJke1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLnpmaXh7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gICBmaWx0ZXI6IGRyb3Atc2hhZG93KC0xcHggLTFweCAycHggcmdiYSgyNTUsMjU1LDI1NTAuNSkgKVxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgZHJvcC1zaGFkb3coNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjIpKVxuICAgICAgICAgICAgICAgICAgICAgIC8vICA7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAgICAgICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MzBweDtcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci0td2lkdGg6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6MDtcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OjIwcHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6MjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNCNkI2QjY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYm90dG9uLXNlY3Rpb257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1idXR0b24uYnRuX3NpZ251cHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24tc2lndXB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5iZy1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTEwJTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5iZy1pbWFnZSBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gIH1cbiAgXG4gXG4gIGlvbi10b29sYmFyLmJhY2tncm91bmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogICByZ2IoNTMsMTIzLDIwMyk7XG4gICAgXG4gICAgLmNvbmRpdGlvbntcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgfVxuICAiLCJpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQoIzBmNGVkOCwjMDA5OWZmLHJnYigxODQsIDIwMiwgMjUwKSk7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIC56Zml4IHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjZweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCBpb24tY2FyZCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItLXdpZHRoOjA7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOjA7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSBpb24taW5wdXQge1xuICBib3JkZXI6IDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgLS1wYWRkaW5nLXN0YXJ0OjIwcHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1ib3JkZXItcmFkaXVzOjIwcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNCNkI2QjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbiAuYm90dG9uLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbi5idG5fc2lnbnVwIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbi5idG5fc2lnbnVwIC5idXR0b24tc2lndXAge1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIC5iZy1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtMTAlO1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIC5iZy1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pb24tdG9vbGJhci5iYWNrZ3JvdW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICAgcmdiKDUzLDEyMywyMDMpO1xufVxuXG5pb24tdG9vbGJhci5iYWNrZ3JvdW5kIC5jb25kaXRpb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _services_api_authentication_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api/authentication-api.service */
    "./src/app/services/api/authentication-api.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(authApiService, authService, utilsService) {
        _classCallCheck(this, LoginPage);

        this.authApiService = authApiService;
        this.authService = authService;
        this.utilsService = utilsService;
        this.credential = {};
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.credential = {};
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          if (this.credential.email == null || this.credential.password == null || this.credential.email.replace(/\s/g, "") == "" || this.credential.password.replace(/\s/g, "") == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else {
            this.utilsService.showToast("Tunggu sebentar.");
            this.authApiService.login(this.credential).subscribe(function (response) {
              var raw = response;

              _this.authService.login(raw.data.access_token);
            }, function (err) {
              var error = {};
              error = err.error;

              _this.utilsService.showToast(error.message);
            });
          }
        }
      }, {
        key: "hideKeyboard",
        value: function hideKeyboard() {
          this.utilsService.hideKeyboard();
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _services_api_authentication_api_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationApiService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map