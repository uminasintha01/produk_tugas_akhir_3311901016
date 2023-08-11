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
      path: 'type',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | type-type-module */
        [__webpack_require__.e("common"), __webpack_require__.e("type-type-module")]).then(__webpack_require__.bind(null,
        /*! ./type/type.module */
        "./src/app/pages/landing/type/type.module.ts")).then(function (m) {
          return m.TypePageModule;
        });
      }
    }, {
      path: 'selling-phone',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-hp-brand2-brand2-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-hp-brand2-brand2-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-hp/brand2/brand2.module */
        "./src/app/pages/landing/selling-hp/brand2/brand2.module.ts")).then(function (m) {
          return m.Brand2PageModule;
        });
      }
    }, {
      path: 'selling-phone/screen-testing',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-hp-screen-testing-screen-testing-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-hp-screen-testing-screen-testing-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-hp/screen-testing/screen-testing.module */
        "./src/app/pages/landing/selling-hp/screen-testing/screen-testing.module.ts")).then(function (m) {
          return m.ScreenTestingPageModule;
        });
      }
    }, {
      path: 'selling-phone/screen-testing/camera',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-hp-camera-camera-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-hp-camera-camera-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-hp/camera/camera.module */
        "./src/app/pages/landing/selling-hp/camera/camera.module.ts")).then(function (m) {
          return m.CameraPageModule;
        });
      }
    }, {
      path: 'selling-phone/screen-testing/camera/wifi-detect',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | selling-hp-wifi-detect-wifi-detect-module */
        "selling-hp-wifi-detect-wifi-detect-module").then(__webpack_require__.bind(null,
        /*! ./selling-hp/wifi-detect/wifi-detect.module */
        "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.module.ts")).then(function (m) {
          return m.WifiDetectPageModule;
        });
      }
    }, {
      path: 'selling-phone/screen-testing/camera/wifi-detect/vibration',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | selling-hp-vibration-vibration-module */
        "selling-hp-vibration-vibration-module").then(__webpack_require__.bind(null,
        /*! ./selling-hp/vibration/vibration.module */
        "./src/app/pages/landing/selling-hp/vibration/vibration.module.ts")).then(function (m) {
          return m.VibrationPageModule;
        });
      }
    }, {
      path: 'selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | selling-hp-fingerprint-fingerprint-module */
        "selling-hp-fingerprint-fingerprint-module").then(__webpack_require__.bind(null,
        /*! ./selling-hp/fingerprint/fingerprint.module */
        "./src/app/pages/landing/selling-hp/fingerprint/fingerprint.module.ts")).then(function (m) {
          return m.FingerprintPageModule;
        });
      }
    }, {
      path: 'selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-hp-allbuntton-allbuntton-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-hp-allbuntton-allbuntton-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-hp/allbuntton/allbuntton.module */
        "./src/app/pages/landing/selling-hp/allbuntton/allbuntton.module.ts")).then(function (m) {
          return m.AllbunttonPageModule;
        });
      }
    }, {
      path: 'selling-phone/screen-testing/camera/wifi-detect/vibration/fingerprint/allbutton/detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-hp-detail-detail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-hp-detail-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-hp/detail/detail.module */
        "./src/app/pages/landing/selling-hp/detail/detail.module.ts")).then(function (m) {
          return m.DetailPageModule;
        });
      }
    }, {
      path: 'laptop-brand',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-laptop-laptop-brand-laptop-brand-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-laptop-laptop-brand-laptop-brand-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-laptop/laptop-brand/laptop-brand.module */
        "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts")).then(function (m) {
          return m.LaptopBrandPageModule;
        });
      }
    }, {
      path: 'laptop-brand/detail-unit',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-laptop-detail-unit-detail-unit-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-laptop-detail-unit-detail-unit-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-laptop/detail-unit/detail-unit.module */
        "./src/app/pages/landing/selling-laptop/detail-unit/detail-unit.module.ts")).then(function (m) {
          return m.DetailUnitPageModule;
        });
      }
    }, {
      path: 'ps-brand',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-ps-ps-brand-ps-brand-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-ps-ps-brand-ps-brand-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-ps/ps-brand/ps-brand.module */
        "./src/app/pages/landing/selling-ps/ps-brand/ps-brand.module.ts")).then(function (m) {
          return m.PsBrandPageModule;
        });
      }
    }, {
      path: 'ps-brand/detail-unit-ps',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-ps-detail-unit-ps-detail-unit-ps-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-ps-detail-unit-ps-detail-unit-ps-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-ps/detail-unit-ps/detail-unit-ps.module */
        "./src/app/pages/landing/selling-ps/detail-unit-ps/detail-unit-ps.module.ts")).then(function (m) {
          return m.DetailUnitPsPageModule;
        });
      }
    }, {
      path: 'tv-brand',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-tv-tv-brand-tv-brand-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-tv-tv-brand-tv-brand-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-tv/tv-brand/tv-brand.module */
        "./src/app/pages/landing/selling-tv/tv-brand/tv-brand.module.ts")).then(function (m) {
          return m.TvBrandPageModule;
        });
      }
    }, {
      path: 'tv-brand/detail-tv',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-tv-detail-tv-detail-tv-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-tv-detail-tv-detail-tv-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-tv/detail-tv/detail-tv.module */
        "./src/app/pages/landing/selling-tv/detail-tv/detail-tv.module.ts")).then(function (m) {
          return m.DetailTvPageModule;
        });
      }
    }, {
      path: 'kulkas-brand',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-kulkas-kulkas-brand-kulkas-brand-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-kulkas-kulkas-brand-kulkas-brand-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-kulkas/kulkas-brand/kulkas-brand.module */
        "./src/app/pages/landing/selling-kulkas/kulkas-brand/kulkas-brand.module.ts")).then(function (m) {
          return m.KulkasBrandPageModule;
        });
      }
    }, {
      path: 'kulkas-brand/detail-kulkas',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-kulkas-detail-kulkas-detail-kulkas-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-kulkas-detail-kulkas-detail-kulkas-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-kulkas/detail-kulkas/detail-kulkas.module */
        "./src/app/pages/landing/selling-kulkas/detail-kulkas/detail-kulkas.module.ts")).then(function (m) {
          return m.DetailKulkasPageModule;
        });
      }
    }, {
      path: 'mesin-cuci-brand',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-mesin-cuci-mesin-cuci-brand-mesin-cuci-brand-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module */
        "./src/app/pages/landing/selling-mesin-cuci/mesin-cuci-brand/mesin-cuci-brand.module.ts")).then(function (m) {
          return m.MesinCuciBrandPageModule;
        });
      }
    }, {
      path: 'mesin-cuci-brand/detail-mesin-cuci',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | selling-mesin-cuci-detail-mesin-cuci-detail-mesin-cuci-module */
        [__webpack_require__.e("common"), __webpack_require__.e("selling-mesin-cuci-detail-mesin-cuci-detail-mesin-cuci-module")]).then(__webpack_require__.bind(null,
        /*! ./selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.module */
        "./src/app/pages/landing/selling-mesin-cuci/detail-mesin-cuci/detail-mesin-cuci.module.ts")).then(function (m) {
          return m.DetailMesinCuciPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | settings-profile-profile-module */
        [__webpack_require__.e("common"), __webpack_require__.e("settings-profile-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./settings/profile/profile.module */
        "./src/app/pages/landing/settings/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'outlet',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-outlet-outlet-module */
        "settings-outlet-outlet-module").then(__webpack_require__.bind(null,
        /*! ./settings/outlet/outlet.module */
        "./src/app/pages/landing/settings/outlet/outlet.module.ts")).then(function (m) {
          return m.OutletPageModule;
        });
      }
    }, {
      path: 'call-us',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-call-us-call-us-module */
        "settings-call-us-call-us-module").then(__webpack_require__.bind(null,
        /*! ./settings/call-us/call-us.module */
        "./src/app/pages/landing/settings/call-us/call-us.module.ts")).then(function (m) {
          return m.CallUsPageModule;
        });
      }
    }, {
      path: 'privacy-policy',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-privacy-policy-privacy-policy-module */
        "settings-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null,
        /*! ./settings/privacy-policy/privacy-policy.module */
        "./src/app/pages/landing/settings/privacy-policy/privacy-policy.module.ts")).then(function (m) {
          return m.PrivacyPolicyPageModule;
        });
      }
    }, {
      path: 'terms',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-terms-terms-module */
        "settings-terms-terms-module").then(__webpack_require__.bind(null,
        /*! ./settings/terms/terms.module */
        "./src/app/pages/landing/settings/terms/terms.module.ts")).then(function (m) {
          return m.TermsPageModule;
        });
      }
    }, {
      path: 'history',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-history-history-module */
        "settings-history-history-module").then(__webpack_require__.bind(null,
        /*! ./settings/history/history.module */
        "./src/app/pages/landing/settings/history/history.module.ts")).then(function (m) {
          return m.HistoryPageModule;
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