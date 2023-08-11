function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-activation-device-detail-device-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/device-detail/device-detail.page.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/device-detail/device-detail.page.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingMembershipActivationDeviceDetailDeviceDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white\">Device Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"middle-page\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>\n          <h3 class=\"text-align-center\" style=\"text-align: center;\"> Device Details</h3>\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Type:</ion-label>\n          <ion-input value=\"{{ type }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Android Version:</ion-label>\n          <ion-input value=\"{{ version }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Manufacturer:</ion-label>\n          <ion-input value=\"{{ manufacturer }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Model:</ion-label>\n          <ion-input value=\"{{ model }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">RAM:</ion-label>\n          <ion-input value=\"{{ ram }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Storage:</ion-label>\n          <ion-input value=\"{{ storage }}\" readonly></ion-input>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button expand=\"block\" (click)=\"submit()\" class=\"ion-margin\">Uji Layar\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/device-detail/device-detail-routing.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/device-detail/device-detail-routing.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: DeviceDetailPageRoutingModule */

  /***/
  function srcAppPagesLandingMembershipActivationDeviceDetailDeviceDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceDetailPageRoutingModule", function () {
      return DeviceDetailPageRoutingModule;
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


    var _device_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./device-detail.page */
    "./src/app/pages/landing/membership-activation/device-detail/device-detail.page.ts");

    var routes = [{
      path: '',
      component: _device_detail_page__WEBPACK_IMPORTED_MODULE_3__["DeviceDetailPage"]
    }];

    var DeviceDetailPageRoutingModule = function DeviceDetailPageRoutingModule() {
      _classCallCheck(this, DeviceDetailPageRoutingModule);
    };

    DeviceDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeviceDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/device-detail/device-detail.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/device-detail/device-detail.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: DeviceDetailPageModule */

  /***/
  function srcAppPagesLandingMembershipActivationDeviceDetailDeviceDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceDetailPageModule", function () {
      return DeviceDetailPageModule;
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


    var _device_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./device-detail-routing.module */
    "./src/app/pages/landing/membership-activation/device-detail/device-detail-routing.module.ts");
    /* harmony import */


    var _device_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-detail.page */
    "./src/app/pages/landing/membership-activation/device-detail/device-detail.page.ts");

    var DeviceDetailPageModule = function DeviceDetailPageModule() {
      _classCallCheck(this, DeviceDetailPageModule);
    };

    DeviceDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _device_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeviceDetailPageRoutingModule"]],
      declarations: [_device_detail_page__WEBPACK_IMPORTED_MODULE_6__["DeviceDetailPage"]]
    })], DeviceDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/device-detail/device-detail.page.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/device-detail/device-detail.page.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingMembershipActivationDeviceDetailDeviceDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  --text-transform: capitalize;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWFjdGl2YXRpb24vZGV2aWNlLWRldGFpbC9DOlxcVXNlcnNcXG1hY2FuXFxEb3dubG9hZHNcXHpmaXhfYXBwX2FuZ3VsYXJfaHR0cF9uZXc5XFx6Zml4X2FwcF9hbmd1bGFyX2h0dHBfbmV3OS9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXG1lbWJlcnNoaXAtYWN0aXZhdGlvblxcZGV2aWNlLWRldGFpbFxcZGV2aWNlLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1hY3RpdmF0aW9uL2RldmljZS1kZXRhaWwvZGV2aWNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBaUI7QUNDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21lbWJlcnNoaXAtYWN0aXZhdGlvbi9kZXZpY2UtZGV0YWlsL2RldmljZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcclxuICAgIC0tdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuICAgXHJcbiAgICIsImlvbi1pbnB1dCB7XG4gIC0tdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/device-detail/device-detail.page.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/device-detail/device-detail.page.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DeviceDetailPage */

  /***/
  function srcAppPagesLandingMembershipActivationDeviceDetailDeviceDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceDetailPage", function () {
      return DeviceDetailPage;
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


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DeviceDetailPage = /*#__PURE__*/function () {
      function DeviceDetailPage(device, membership, router, activatedRoute) {
        _classCallCheck(this, DeviceDetailPage);

        this.device = device;
        this.membership = membership;
        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(DeviceDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getType();
          this.getManufacturer();
          this.getModel();
          this.getRam();
          this.getStorage();
          this.getVersion();
          this.activatedRoute.queryParams.subscribe(function (params) {
            _this.code = params["code"];
            _this.imei = params["imei"];
            _this.lokasi_beli_voucher = params["lokasi_beli_voucher"];
            console.log(_this.lokasi_beli_voucher);
          });
        }
      }, {
        key: "getType",
        value: function getType() {
          this.type = this.device.platform;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          this.version = this.device.version;
        }
      }, {
        key: "getManufacturer",
        value: function getManufacturer() {
          this.manufacturer = this.device.manufacturer;
        }
      }, {
        key: "getModel",
        value: function getModel() {
          this.model = this.device.model;
        }
      }, {
        key: "getRam",
        value: function getRam() {
          var raw = cordova.plugins['extended-device-information'].memory;
          raw = raw.replace(",", ".");

          if (raw <= 256) {
            this.ram = "256 MB";
          } else if (raw <= 512) {
            this.ram = "512 MB";
          } else if (raw <= 768) {
            this.ram = "768 MB";
          } else if (raw <= 1000) {
            this.ram = "1 GB";
          } else if (raw <= 1500) {
            this.ram = "1.5 GB";
          } else if (raw <= 2000) {
            this.ram = "2 GB";
          } else if (raw <= 3000) {
            this.ram = "3 GB";
          } else if (raw <= 4000) {
            this.ram = "4 GB";
          } else if (raw <= 6000) {
            this.ram = "6 GB";
          } else if (raw <= 8000) {
            this.ram = "8 GB";
          } else if (raw <= 10000) {
            this.ram = "10 GB";
          } else if (raw <= 12000) {
            this.ram = "12 GB";
          } else if (raw <= 14000) {
            this.ram = "14 GB";
          } else if (raw <= 16000) {
            this.ram = "16 GB";
          } else if (raw <= 18000) {
            this.ram = "18 GB";
          } else if (raw <= 20000) {
            this.ram = "20 GB";
          }
        }
      }, {
        key: "getStorage",
        value: function getStorage() {
          var raw = cordova.plugins['extended-device-information'].totalstorage;
          raw = raw.replace(",", ".");

          if (raw <= 1000) {
            this.storage = "1 GB";
          } else if (raw <= 2000) {
            this.storage = "2 GB";
          } else if (raw <= 4000) {
            this.storage = "4 GB";
          } else if (raw <= 8000) {
            this.storage = "8 GB";
          } else if (raw <= 16000) {
            this.storage = "16 GB";
          } else if (raw <= 32000) {
            this.storage = "32 GB";
          } else if (raw <= 64000) {
            this.storage = "64 GB";
          } else if (raw <= 128000) {
            this.storage = "128 GB";
          } else if (raw <= 256000) {
            this.storage = "256 GB";
          } else if (raw <= 512000) {
            this.storage = "512 GB";
          } else if (raw <= 768000) {
            this.storage = "768 GB";
          } else if (raw <= 1000000) {
            this.storage = "1 TB";
          } else if (raw <= 1500000) {
            this.storage = "1.5 TB";
          } else if (raw <= 2000000) {
            this.storage = "2 TB";
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var data = {
            code: this.code,
            imei: this.imei,
            lokasi_beli_voucher: this.lokasi_beli_voucher,
            type: this.type,
            version: this.version,
            manufacturer: this.manufacturer,
            model: this.model,
            ram: this.ram,
            storage: this.storage
          };
          this.membership.setMembershipActivation(data);
          this.router.navigate(["/landing/membership-activation/device-detail/screen-testing"]);
        }
      }]);

      return DeviceDetailPage;
    }();

    DeviceDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__["Device"]
      }, {
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_3__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    DeviceDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-device-detail",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./device-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/device-detail/device-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./device-detail.page.scss */
      "./src/app/pages/landing/membership-activation/device-detail/device-detail.page.scss"))["default"]]
    })], DeviceDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=membership-activation-device-detail-device-detail-module-es5.js.map