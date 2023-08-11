function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-routing-module"], {
  /***/
  "./src/app/pages/landing/landing-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/landing/landing-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: LandingRoutingModule */

  /***/
  function srcAppPagesLandingLandingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function () {
      return LandingRoutingModule;
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

    var routes = [{
      path: 'membership-activation',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | membership-activation-index-index-module */
        [__webpack_require__.e("common"), __webpack_require__.e("membership-activation-index-index-module")]).then(__webpack_require__.bind(null,
        /*! ./membership-activation/index/index.module */
        "./src/app/pages/landing/membership-activation/index/index.module.ts")).then(function (m) {
          return m.IndexPageModule;
        });
      }
    }, {
      path: "membership-activation/device-detail",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | membership-activation-device-detail-device-detail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("membership-activation-device-detail-device-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./membership-activation/device-detail/device-detail.module */
        "./src/app/pages/landing/membership-activation/device-detail/device-detail.module.ts")).then(function (m) {
          return m.DeviceDetailPageModule;
        });
      }
    }, {
      path: "membership-activation/device-detail/screen-testing",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | membership-activation-screen-testing-screen-testing-module */
        [__webpack_require__.e("common"), __webpack_require__.e("membership-activation-screen-testing-screen-testing-module")]).then(__webpack_require__.bind(null,
        /*! ./membership-activation/screen-testing/screen-testing.module */
        "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.module.ts")).then(function (m) {
          return m.ScreenTestingPageModule;
        });
      }
    }, {
      path: 'membership-activation/device-detail/screen-testing/device-image',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | membership-activation-device-image-device-image-module */
        [__webpack_require__.e("common"), __webpack_require__.e("membership-activation-device-image-device-image-module")]).then(__webpack_require__.bind(null,
        /*! ./membership-activation/device-image/device-image.module */
        "./src/app/pages/landing/membership-activation/device-image/device-image.module.ts")).then(function (m) {
          return m.DeviceImagePageModule;
        });
      }
    }, {
      path: 'membership-claim/index',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | membership-claim-index-index-module */
        [__webpack_require__.e("common"), __webpack_require__.e("membership-claim-index-index-module")]).then(__webpack_require__.bind(null,
        /*! ./membership-claim/index/index.module */
        "./src/app/pages/landing/membership-claim/index/index.module.ts")).then(function (m) {
          return m.IndexPageModule;
        });
      }
    }, {
      path: 'membership-claim',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | membership-claim-overview-overview-module */
        [__webpack_require__.e("common"), __webpack_require__.e("membership-claim-overview-overview-module")]).then(__webpack_require__.bind(null,
        /*! ./membership-claim/overview/overview.module */
        "./src/app/pages/landing/membership-claim/overview/overview.module.ts")).then(function (m) {
          return m.OverviewPageModule;
        });
      }
    }, {
      path: 'membership-claim/done',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | membership-claim-done-done-module */
        "membership-claim-done-done-module").then(__webpack_require__.bind(null,
        /*! ./membership-claim/done/done.module */
        "./src/app/pages/landing/membership-claim/done/done.module.ts")).then(function (m) {
          return m.DonePageModule;
        });
      }
    }, {
      path: 'membership-claim/riwayat-pengajuan',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | membership-claim-riwayat-pengajuan-riwayat-pengajuan-module */
        [__webpack_require__.e("common"), __webpack_require__.e("membership-claim-riwayat-pengajuan-riwayat-pengajuan-module")]).then(__webpack_require__.bind(null,
        /*! ./membership-claim/riwayat-pengajuan/riwayat-pengajuan.module */
        "./src/app/pages/landing/membership-claim/riwayat-pengajuan/riwayat-pengajuan.module.ts")).then(function (m) {
          return m.RiwayatPengajuanPageModule;
        });
      }
    }, {
      path: 'my-card',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | setting-my-card-my-card-module */
        [__webpack_require__.e("common"), __webpack_require__.e("setting-my-card-my-card-module")]).then(__webpack_require__.bind(null,
        /*! ./setting/my-card/my-card.module */
        "./src/app/pages/landing/setting/my-card/my-card.module.ts")).then(function (m) {
          return m.MyCardPageModule;
        });
      }
    }, {
      path: 'faq',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | setting-faq-faq-module */
        "setting-faq-faq-module").then(__webpack_require__.bind(null,
        /*! ./setting/faq/faq.module */
        "./src/app/pages/landing/setting/faq/faq.module.ts")).then(function (m) {
          return m.FaqPageModule;
        });
      }
    }, {
      path: 'outlet',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | setting-outlet-outlet-module */
        "setting-outlet-outlet-module").then(__webpack_require__.bind(null,
        /*! ./setting/outlet/outlet.module */
        "./src/app/pages/landing/setting/outlet/outlet.module.ts")).then(function (m) {
          return m.OutletPageModule;
        });
      }
    }, {
      path: 'call-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | setting-call-us-call-us-module */
        "setting-call-us-call-us-module").then(__webpack_require__.bind(null,
        /*! ./setting/call-us/call-us.module */
        "./src/app/pages/landing/setting/call-us/call-us.module.ts")).then(function (m) {
          return m.CallUsPageModule;
        });
      }
    }, {
      path: 'privacy-policy',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | setting-privacy-policy-privacy-policy-module */
        "setting-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null,
        /*! ./setting/privacy-policy/privacy-policy.module */
        "./src/app/pages/landing/setting/privacy-policy/privacy-policy.module.ts")).then(function (m) {
          return m.PrivacyPolicyPageModule;
        });
      }
    }, {
      path: 'terms',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | setting-terms-terms-module */
        "setting-terms-terms-module").then(__webpack_require__.bind(null,
        /*! ./setting/terms/terms.module */
        "./src/app/pages/landing/setting/terms/terms.module.ts")).then(function (m) {
          return m.TermsPageModule;
        });
      }
    }, {
      path: 'edit-profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | setting-edit-profile-edit-profile-module */
        [__webpack_require__.e("common"), __webpack_require__.e("setting-edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./setting/edit-profile/edit-profile.module */
        "./src/app/pages/landing/setting/edit-profile/edit-profile.module.ts")).then(function (m) {
          return m.EditProfilePageModule;
        });
      }
    }, {
      path: 'privacy-register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | setting-privacy-register-privacy-register-module */
        "setting-privacy-register-privacy-register-module").then(__webpack_require__.bind(null,
        /*! ./setting/privacy-register/privacy-register.module */
        "./src/app/pages/landing/setting/privacy-register/privacy-register.module.ts")).then(function (m) {
          return m.PrivacyRegisterPageModule;
        });
      }
    }];

    var LandingRoutingModule = function LandingRoutingModule() {
      _classCallCheck(this, LandingRoutingModule);
    };

    LandingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LandingRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-landing-landing-routing-module-es5.js.map