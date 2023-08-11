function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingsProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">EDIT PROFILE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" mode=\"md\">\n  <img class=\"bg-image\" src=\"../../../../assets/images/home/bg_home.png\" alt=\"\">\n\n  <ion-avatar style=\"position: relative;\">\n    <img src=\"./assets/images/z_logo.png\">\n  </ion-avatar>\n\n  <ion-card class=\"edit-profle\">\n    <ion-item>\n      <ion-label position=\"floating\">Nama</ion-label>\n      <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"user.data?.user.name\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">No. Telepon</ion-label>\n      <ion-input name=\"contact\"  [(ngModel)]=\"user.data?.user.contact\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Alamat</ion-label>\n      <ion-input name=\"address\"  [(ngModel)]=\"user.data?.user.address\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n    <ion-item line=\"none\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" name=\"email\"  [(ngModel)]=\"user.data?.user.email\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n  </ion-card>\n\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" (click)=\"submit()\" class=\"ion-margin\">SUBMIT</ion-button>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/profile/profile-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/settings/profile/profile-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesLandingSettingsProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/landing/settings/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/profile/profile.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/profile/profile.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesLandingSettingsProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/landing/settings/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/landing/settings/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/profile/profile.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/landing/settings/profile/profile.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingsProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-image {\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n\nion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-content {\n  justify-content: center;\n  --padding-top: 40px;\n}\n\nimg {\n  height: auto;\n  width: auto;\n}\n\nion-avatar {\n  margin: auto;\n}\n\nion-item {\n  margin-bottom: 15px;\n}\n\nion-card {\n  border-radius: 15px !important;\n  flex-direction: column;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: flex;\n  width: 90% !important;\n  margin: 5% !important;\n}\n\nion-item {\n  padding-right: 20px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9wcm9maWxlL0M6XFxVc2Vyc1xcaHBcXERvd25sb2Fkc1xcemZpeC10cmFkZS1pbi0yMDIyLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNldHRpbmdzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0FDQ2I7O0FEUEE7RUFTSSxRQUFTO0VBQ1QsNEJBQTRCO0FDRWhDOztBRFpBO0VBZUksV0FBVztBQ0NmOztBRElBO0VBQ0ksK0JBQW1CO0VBQ25CLHdDQUFpQjtBQ0RyQjs7QURJRTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBYztBQ0RsQjs7QURJQTtFQUNJLFlBQVk7RUFDWixXQUFXO0FDRGY7O0FESUE7RUFDSSxZQUFZO0FDRGhCOztBRElBO0VBQ0ksbUJBQW1CO0FDRHZCOztBRElBO0VBQ0ksOEJBQThCO0VBQzlCLHNCQUFzQjtFQUV0QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBRXBCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIscUJBQXFCO0FDSHpCOztBRE1BO0VBQ0ksOEJBQThCO0FDSGxDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWltYWdlIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgXG4gICAgJi50b3Age1xuICAgIHRvcDogIDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICBcbiAgICB9XG4gIFxuICAgICYuYm90dG9tIHtcbiAgICBib3R0b206IDBweDtcbiAgXG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWNvbnRlbnR7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLS1wYWRkaW5nLXRvcDogNDBweDtcbn1cblxuaW1ne1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbn1cblxuaW9uLWF2YXRhcntcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNSUgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuXG5cbiIsIi5iZy1pbWFnZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG5cbi5iZy1pbWFnZS50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cblxuLmJnLWltYWdlLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC0tcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbmlvbi1hdmF0YXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDUlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/profile/profile.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/settings/profile/profile.page.ts ***!
    \****************************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesLandingSettingsProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/api/user-api.service */
    "./src/app/services/api/user-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(authService, storage, userApiService, router, alertCtrl, utilsService) {
        _classCallCheck(this, ProfilePage);

        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.utilsService = utilsService;
        this.user = {};
        this.credential = {};
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.credential = {};
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then(function (token) {
            _this.userApiService.userDetail(token).subscribe(function (response) {
              _this.user = response;
              console.log(_this.user); // console.log("image slides", this.listImageSlides);
            }, function (err) {
              _this.user = [];

              _this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

          if (((_a = this.user.data) === null || _a === void 0 ? void 0 : _a.user.name) == null || ((_b = this.user.data) === null || _b === void 0 ? void 0 : _b.user.address) == null || ((_c = this.user.data) === null || _c === void 0 ? void 0 : _c.user.contact) == null || ((_d = this.user.data) === null || _d === void 0 ? void 0 : _d.user.email.replace(/\s/g, "")) == "" || ((_e = this.user.data) === null || _e === void 0 ? void 0 : _e.user.name.replace(/\s/g, "")) == "" || ((_f = this.user.data) === null || _f === void 0 ? void 0 : _f.user.contact.replace(/\s/g, "")) == "" || ((_g = this.user.data) === null || _g === void 0 ? void 0 : _g.user.address.replace(/\s/g, "")) == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else {
            this.credential.name = (_h = this.user.data) === null || _h === void 0 ? void 0 : _h.user.name;
            this.credential.email = (_j = this.user.data) === null || _j === void 0 ? void 0 : _j.user.email;
            this.credential.address = (_k = this.user.data) === null || _k === void 0 ? void 0 : _k.user.address;
            this.credential.contact = (_l = this.user.data) === null || _l === void 0 ? void 0 : _l.user.contact;
            console.log(this.credential);
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then(function (token) {
              _this2.userApiService.userEdit(token, _this2.credential).subscribe(function (success) {
                _this2.utilsService.showToast("Update profile berhasil.");

                _this2.router.navigate(["landing/type"]);
              }, function (err) {
                var error = {};
                error = err.error;

                _this2.utilsService.showToast(error.message);
              });
            });
          }
        }
      }, {
        key: "hideKeyboard",
        value: function hideKeyboard() {
          this.utilsService.hideKeyboard();
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/landing/settings/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=settings-profile-profile-module-es5.js.map