function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-outlet-outlet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/outlet/outlet.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/outlet/outlet.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingsOutletOutletPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Lokasi Tukar Tambah</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img class=\"bg-image\" src=\"../../../../assets/images/home/bg_home.png\" alt=\"\">\n\n  <div class=\"div-h1\">\n    <div class=\"vl\" style=\"font-family: 'Arial' !important; margin-left: 10px;\">\n        <h2>Lokasi Tukar Tambah</h2>\n    </div>\n    <ion-text>\n      <p>Kami telah memiliki lokasi tukar tambah barang elektronik anda.</p>\n    </ion-text>\n\n    <ion-card *ngFor=\"let item of stores\">\n      <ion-card-header>\n        <ion-card-title>{{item.name}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n       {{item.address}}\n      </ion-card-content>\n    </ion-card>\n\n    \n  </div>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/outlet/outlet-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/landing/settings/outlet/outlet-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: OutletPageRoutingModule */

  /***/
  function srcAppPagesLandingSettingsOutletOutletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutletPageRoutingModule", function () {
      return OutletPageRoutingModule;
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


    var _outlet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./outlet.page */
    "./src/app/pages/landing/settings/outlet/outlet.page.ts");

    var routes = [{
      path: '',
      component: _outlet_page__WEBPACK_IMPORTED_MODULE_3__["OutletPage"]
    }];

    var OutletPageRoutingModule = function OutletPageRoutingModule() {
      _classCallCheck(this, OutletPageRoutingModule);
    };

    OutletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OutletPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/outlet/outlet.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/settings/outlet/outlet.module.ts ***!
    \****************************************************************/

  /*! exports provided: OutletPageModule */

  /***/
  function srcAppPagesLandingSettingsOutletOutletModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutletPageModule", function () {
      return OutletPageModule;
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


    var _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./outlet-routing.module */
    "./src/app/pages/landing/settings/outlet/outlet-routing.module.ts");
    /* harmony import */


    var _outlet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./outlet.page */
    "./src/app/pages/landing/settings/outlet/outlet.page.ts");

    var OutletPageModule = function OutletPageModule() {
      _classCallCheck(this, OutletPageModule);
    };

    OutletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletPageRoutingModule"]],
      declarations: [_outlet_page__WEBPACK_IMPORTED_MODULE_6__["OutletPage"]]
    })], OutletPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/outlet/outlet.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/landing/settings/outlet/outlet.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingsOutletOutletPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div-h1 {\n  position: absolute;\n}\n\n.bg-image {\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n\nion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\n.vl {\n  border-left: 6px solid blue;\n  height: 33px;\n}\n\nh2 {\n  padding-left: 10px;\n}\n\np {\n  padding-left: 10px;\n  font-size: 13px;\n}\n\nion-searchbar {\n  --background: #FFF !important;\n  --border-radius: 10px !important;\n  transform: scale(1.1);\n  margin: 0 auto;\n  width: 90%;\n  padding-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9vdXRsZXQvQzpcXFVzZXJzXFxocFxcRG93bmxvYWRzXFx6Zml4LXRyYWRlLWluLTIwMjItbWFzdGVyL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2V0dGluZ3NcXG91dGxldFxcb3V0bGV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9vdXRsZXQvb3V0bGV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtBQ0N0Qjs7QURFRTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztBQ0NiOztBRFBFO0VBU0UsUUFBUztFQUNULDRCQUE0QjtBQ0VoQzs7QURaRTtFQWVFLFdBQVc7QUNDZjs7QURJRTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBYztBQ0RsQjs7QURJRTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FDRGhCOztBRElFO0VBQ0Usa0JBQWtCO0FDRHRCOztBRElFO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7QUNEckI7O0FESUU7RUFDRSw2QkFBYTtFQUNiLGdDQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7QUNEckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmdzL291dGxldC9vdXRsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1oMXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuYmctaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICBcbiAgICAmLnRvcCB7XG4gICAgdG9wOiAgMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIFxuICAgIH1cbiAgXG4gICAgJi5ib3R0b20ge1xuICAgIGJvdHRvbTogMHB4O1xuICBcbiAgICB9XG4gIH1cblxuICBpb24tY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG5cbiAgLnZsIHtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsdWU7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICB9XG5cbiAgaDIge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBcbiAgcHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA5MCU7IFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9IiwiLmRpdi1oMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJnLWltYWdlIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJnLWltYWdlLnRvcCB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xufVxuXG4uYmctaW1hZ2UuYm90dG9tIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG5oMiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxucCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZGICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/settings/outlet/outlet.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/landing/settings/outlet/outlet.page.ts ***!
    \**************************************************************/

  /*! exports provided: OutletPage */

  /***/
  function srcAppPagesLandingSettingsOutletOutletPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutletPage", function () {
      return OutletPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var OutletPage = /*#__PURE__*/function () {
      function OutletPage(storage, sellingApiService, utilsService) {
        _classCallCheck(this, OutletPage);

        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.utilsService = utilsService;
        this.stores = [];
      }

      _createClass(OutletPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getStore();
        }
      }, {
        key: "getStore",
        value: function getStore() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this.sellingApiService.getStore(token).subscribe(function (response) {
              _this.stores = response.data.store;
              console.log(_this.stores);
            }, function (err) {
              _this.stores = [];

              _this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }]);

      return OutletPage;
    }();

    OutletPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_4__["SellingApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }];
    };

    OutletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-outlet',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./outlet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/outlet/outlet.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./outlet.page.scss */
      "./src/app/pages/landing/settings/outlet/outlet.page.scss"))["default"]]
    })], OutletPage);
    /***/
  }
}]);
//# sourceMappingURL=settings-outlet-outlet-module-es5.js.map