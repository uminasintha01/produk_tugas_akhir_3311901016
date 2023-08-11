function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-edit-profile-edit-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/edit-profile/edit-profile.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/edit-profile/edit-profile.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">EDIT PROFILE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-avatar>\n    <img src=\"./assets/images/on_board_repair.png\">\n  </ion-avatar>\n\n  <ion-card>\n    <ion-item>\n      <ion-label position=\"floating\">Nama</ion-label>\n      <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"user.data?.user.name\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">No. Telepon</ion-label>\n      <ion-input name=\"contact\"  [(ngModel)]=\"user.data?.customer.contact\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Alamat</ion-label>\n      <ion-input name=\"address\"  [(ngModel)]=\"user.data?.customer.address\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">No. KTP(NIK)</ion-label>\n      <ion-input name=\"identity\"  [(ngModel)]=\"user.data?.customer.identity\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Tanggal Lahir</ion-label>\n      <ion-input name=\"birth_date\" type=\"date\" [(ngModel)]=\"user.data?.customer.birth_date\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Gender</ion-label>\n      <ion-select name=\"gender\" [(ngModel)]=\"user.data?.customer.gender\" (keyup.enter)=\"hideKeyboard()\">\n        <ion-select-option value=\"Male\">Male</ion-select-option>\n        <ion-select-option value=\"Female\">Female</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item line=\"none\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" name=\"email\"  [(ngModel)]=\"user.data?.user.email\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n    </ion-item>\n  </ion-card>\n\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" (click)=\"submit()\" class=\"ion-margin\">SUBMIT</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/edit-profile/edit-profile-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/landing/setting/edit-profile/edit-profile-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: EditProfilePageRoutingModule */

  /***/
  function srcAppPagesLandingSettingEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
      return EditProfilePageRoutingModule;
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


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/pages/landing/setting/edit-profile/edit-profile.page.ts");

    var routes = [{
      path: '',
      component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }];

    var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
      _classCallCheck(this, EditProfilePageRoutingModule);
    };

    EditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/edit-profile/edit-profile.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/landing/setting/edit-profile/edit-profile.module.ts ***!
    \***************************************************************************/

  /*! exports provided: EditProfilePageModule */

  /***/
  function srcAppPagesLandingSettingEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
      return EditProfilePageModule;
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


    var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-profile-routing.module */
    "./src/app/pages/landing/setting/edit-profile/edit-profile-routing.module.ts");
    /* harmony import */


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/pages/landing/setting/edit-profile/edit-profile.page.ts");

    var EditProfilePageModule = function EditProfilePageModule() {
      _classCallCheck(this, EditProfilePageModule);
    };

    EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]],
      declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })], EditProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/edit-profile/edit-profile.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/landing/setting/edit-profile/edit-profile.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  justify-content: center;\n  --padding-top: 40px;\n}\n\nimg {\n  height: auto;\n  width: auto;\n}\n\nion-avatar {\n  margin: auto;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\nion-card {\n  border-radius: 15px !important;\n  flex-direction: column;\n  display: flex;\n  width: 90% !important;\n  margin: 5% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2VkaXQtcHJvZmlsZS9DOlxcVXNlcnNcXG1hY2FuXFxEb3dubG9hZHNcXHpmaXhfYXBwX2FuZ3VsYXJfaHR0cF9uZXc5XFx6Zml4X2FwcF9hbmd1bGFyX2h0dHBfbmV3OS9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNldHRpbmdcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLG1CQUFjO0FDQ2xCOztBREVBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7QUNDZjs7QURFQTtFQUNJLFlBQVk7QUNDaEI7O0FERUE7RUFDSSxnQkFBZ0I7QUNDcEI7O0FERUE7RUFDSSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBSXRCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIscUJBQXFCO0FDRnpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC0tcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5pb24tYXZhdGFye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDUlICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtLXBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNSUgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/edit-profile/edit-profile.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/landing/setting/edit-profile/edit-profile.page.ts ***!
    \*************************************************************************/

  /*! exports provided: EditProfilePage */

  /***/
  function srcAppPagesLandingSettingEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
      return EditProfilePage;
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

    var EditProfilePage = /*#__PURE__*/function () {
      function EditProfilePage(authService, storage, userApiService, router, alertCtrl, utilsService) {
        _classCallCheck(this, EditProfilePage);

        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.utilsService = utilsService;
        this.user = {};
        this.credential = {};
      }

      _createClass(EditProfilePage, [{
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

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;

          if (((_a = this.user.data) === null || _a === void 0 ? void 0 : _a.user.name) == null || ((_b = this.user.data) === null || _b === void 0 ? void 0 : _b.customer.address) == null || ((_c = this.user.data) === null || _c === void 0 ? void 0 : _c.customer.contact) == null || ((_d = this.user.data) === null || _d === void 0 ? void 0 : _d.customer.identity) == null || ((_e = this.user.data) === null || _e === void 0 ? void 0 : _e.customer.birth_date) == null || ((_f = this.user.data) === null || _f === void 0 ? void 0 : _f.customer.gender) == null || ((_g = this.user.data) === null || _g === void 0 ? void 0 : _g.user.email.replace(/\s/g, "")) == "" || ((_h = this.user.data) === null || _h === void 0 ? void 0 : _h.user.name.replace(/\s/g, "")) == "" || ((_j = this.user.data) === null || _j === void 0 ? void 0 : _j.customer.contact.replace(/\s/g, "")) == "" || ((_k = this.user.data) === null || _k === void 0 ? void 0 : _k.customer.address.replace(/\s/g, "")) == "" || ((_l = this.user.data) === null || _l === void 0 ? void 0 : _l.customer.identity.replace(/\s/g, "")) == "" || ((_m = this.user.data) === null || _m === void 0 ? void 0 : _m.customer.birth_date.replace(/\s/g, "")) == "" || ((_o = this.user.data) === null || _o === void 0 ? void 0 : _o.customer.gender.replace(/\s/g, "")) == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else {
            this.credential.name = (_p = this.user.data) === null || _p === void 0 ? void 0 : _p.user.name;
            this.credential.email = (_q = this.user.data) === null || _q === void 0 ? void 0 : _q.user.email;
            this.credential.address = (_r = this.user.data) === null || _r === void 0 ? void 0 : _r.customer.address;
            this.credential.contact = (_s = this.user.data) === null || _s === void 0 ? void 0 : _s.customer.contact;
            this.credential.identity = (_t = this.user.data) === null || _t === void 0 ? void 0 : _t.customer.identity;
            this.credential.birth_date = (_u = this.user.data) === null || _u === void 0 ? void 0 : _u.customer.birth_date;
            this.credential.gender = (_v = this.user.data) === null || _v === void 0 ? void 0 : _v.customer.gender;
            console.log(this.credential);
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then(function (token) {
              _this2.userApiService.userEdit(token, _this2.credential).subscribe(function (success) {
                _this2.utilsService.showToast("Update profile berhasil.");

                _this2.router.navigate(["landing/home"]);
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

      return EditProfilePage;
    }();

    EditProfilePage.ctorParameters = function () {
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

    EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-edit-profile",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/edit-profile/edit-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-profile.page.scss */
      "./src/app/pages/landing/setting/edit-profile/edit-profile.page.scss"))["default"]]
    })], EditProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=setting-edit-profile-edit-profile-module-es5.js.map