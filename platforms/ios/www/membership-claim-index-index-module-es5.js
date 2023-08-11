function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-claim-index-index-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/index/index.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/index/index.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingMembershipClaimIndexIndexPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Pengajuan Perbaikan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content fullscreen>\n    <div class=\"vl\" style=\"font-family: 'Arial' !important; margin-left: 10px;\">\n      <h2>Isi Informasi Pengajuan Perbaikan</h2>\n    </div>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>My Voucher Key</ion-card-subtitle>\n        <ion-card-title>{{ user.data?.voucher_key }}</ion-card-title>    \n      </ion-card-header>\n      <ion-card-content>\n        <img src=\"\" />\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-item>\n        <ion-label position=\"floating\">IMEI</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"imei\" [readonly]=\"isReadonly()\" (keyup.enter)=\"hideKeyboard()\" readonly></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">No. Telepon Alternatif</ion-label>\n        <ion-input name=\"contact_alternatif\"  [(ngModel)]=\"contact_alternatif\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Tanggal Kerusakan</ion-label>\n        <ion-input name=\"tanggal_kerusakan\" type=\"date\"  [(ngModel)]=\"tanggal_kerusakan\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Waktu Kerusakan</ion-label>\n        <ion-input name=\"waktu_kerusakan\" type=\"time\" [(ngModel)]=\"waktu_kerusakan\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Provinsi</ion-label>\n        <ion-input name=\"provinsi\" [(ngModel)]=\"provinsi\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Kota</ion-label>\n        <ion-input name=\"kota\" [(ngModel)]=\"kota\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Alamat Antar/Penjemputan</ion-label>\n        <ion-input name=\"alamat_penjemputan\" [(ngModel)]=\"alamat_penjemputan\"  (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item line=\"none\">\n        <ion-label position=\"floating\">Kode Pos</ion-label>\n        <ion-input type=\"text\" name=\"kode_pos\" [(ngModel)]=\"kode_pos\" (keyup.enter)=\"hideKeyboard()\" ></ion-input>\n      </ion-item>\n      <ion-item line=\"none\">\n        <ion-label position=\"floating\">Jenis Layanan Perbaikan</ion-label>\n        <ion-select name=\"layanan_perbaikan\" [(ngModel)]=\"layanan_perbaikan\">\n          <ion-select-option value=\"Pickup Service\">Pickup Service</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item line=\"none\">\n        <ion-label position=\"floating\">Kronologis Kerusakan</ion-label>\n        <ion-textarea type=\"text\" name=\"kronologis\" [(ngModel)]=\"kronologis\" (keyup.enter)=\"hideKeyboard()\" ></ion-textarea>\n      </ion-item>\n\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" (click)=\"submit()\"  class=\"ion-margin\">Ajukan Perbaikan\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-card>\n\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-claim/index/index-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/landing/membership-claim/index/index-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: IndexPageRoutingModule */

  /***/
  function srcAppPagesLandingMembershipClaimIndexIndexRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function () {
      return IndexPageRoutingModule;
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


    var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./index.page */
    "./src/app/pages/landing/membership-claim/index/index.page.ts");

    var routes = [{
      path: '',
      component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }];

    var IndexPageRoutingModule = function IndexPageRoutingModule() {
      _classCallCheck(this, IndexPageRoutingModule);
    };

    IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IndexPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-claim/index/index.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/membership-claim/index/index.module.ts ***!
    \**********************************************************************/

  /*! exports provided: IndexPageModule */

  /***/
  function srcAppPagesLandingMembershipClaimIndexIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPageModule", function () {
      return IndexPageModule;
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


    var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index-routing.module */
    "./src/app/pages/landing/membership-claim/index/index-routing.module.ts");
    /* harmony import */


    var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./index.page */
    "./src/app/pages/landing/membership-claim/index/index.page.ts");

    var IndexPageModule = function IndexPageModule() {
      _classCallCheck(this, IndexPageModule);
    };

    IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"]],
      declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })], IndexPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-claim/index/index.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/landing/membership-claim/index/index.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingMembershipClaimIndexIndexPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vl {\n  border-left: 6px solid blue;\n  height: 35px;\n  margin-top: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\nh2 {\n  padding-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWNsYWltL2luZGV4L0M6XFxVc2Vyc1xcbWFjYW5cXERvd25sb2Fkc1xcemZpeF9hcHBfYW5ndWxhcl9odHRwX25ldzlcXHpmaXhfYXBwX2FuZ3VsYXJfaHR0cF9uZXc5L3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbWVtYmVyc2hpcC1jbGFpbVxcaW5kZXhcXGluZGV4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWNsYWltL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNDdkI7O0FERUU7RUFDRSxrQkFBa0I7QUNDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21lbWJlcnNoaXAtY2xhaW0vaW5kZXgvaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZsIHtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH0iLCIudmwge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsdWU7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5oMiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-claim/index/index.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/landing/membership-claim/index/index.page.ts ***!
    \********************************************************************/

  /*! exports provided: IndexPage */

  /***/
  function srcAppPagesLandingMembershipClaimIndexIndexPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPage", function () {
      return IndexPage;
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


    var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/uid/ngx */
    "./node_modules/@ionic-native/uid/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../services/api/membership-api.service */
    "./src/app/services/api/membership-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var IndexPage = /*#__PURE__*/function () {
      function IndexPage(storage, uid, androidPermissions, platform, membershipApiService, utilsService, MembershipService, navCtrl, router) {
        _classCallCheck(this, IndexPage);

        this.storage = storage;
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.membershipApiService = membershipApiService;
        this.utilsService = utilsService;
        this.MembershipService = MembershipService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.imeiEditable = true;
        this.user = {};
        this.data = []; // let platforms = this.platform.platforms();
        // // console.log(platforms[0]);
        // if (platforms[0] == "android") {
        //   this.imei = this.uid.IMEI;
        //   if(this.imei != null){
        //     this.imeiEditable = false
        //   }
        //   this.getPermission();
        // } 
      }

      _createClass(IndexPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getVoucher();
        }
      }, {
        key: "isReadonly",
        value: function isReadonly() {
          return this.isReadonly; //return true/false 
        } // getPermission() {
        //   this.androidPermissions.checkPermission(
        //     this.androidPermissions.PERMISSION.READ_PHONE_STATE
        //   ).then(res => {
        //     if(res.hasPermission){
        //     }
        //     else{
        //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
        //         this.utilsService.restart("Aplikasi akan restart secara otomatis untuk menampilkan IMEI.");
        //       }).catch(error => {
        //         this.utilsService.showAlert(error);
        //       });
        //     }
        //   }).catch(error => {
        //     this.utilsService.showAlert(error);
        //   });
        // }

      }, {
        key: "getVoucher",
        value: function getVoucher() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this.MembershipService.current(token).subscribe(function (response) {
              var _a;

              _this.user = response;
              _this.imei = (_a = _this.user.data) === null || _a === void 0 ? void 0 : _a.process.imei; // console.log(this.imei);
              // console.log("image slides", this.listImageSlides);
            }, function (err) {
              _this.user = [];

              _this.utilsService.showToast("Anda belum memiliki voucher key.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          if (this.contact_alternatif == null || this.imei == null || this.tanggal_kerusakan == null || this.waktu_kerusakan == null || this.provinsi == null || this.kota == null || this.alamat_penjemputan == null || this.kode_pos == null || this.layanan_perbaikan == null || this.kronologis == null || this.tanggal_kerusakan.replace(/\s/g, "") == "" || this.contact_alternatif.replace(/\s/g, "") == "" || this.provinsi.replace(/\s/g, "") == "" || this.kota.replace(/\s/g, "") == "" || this.waktu_kerusakan.replace(/\s/g, "") == "" || this.alamat_penjemputan.replace(/\s/g, "") == "" || this.kode_pos.replace(/\s/g, "") == "" || this.layanan_perbaikan.replace(/\s/g, "") == "" || this.kronologis.replace(/\s/g, "") == "") {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else {
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
              var membershipClaim = {
                request_code: 2,
                imei: _this2.imei,
                contact_alternatif: _this2.contact_alternatif,
                tanggal_kerusakan: _this2.tanggal_kerusakan,
                waktu_kerusakan: _this2.waktu_kerusakan,
                provinsi: _this2.provinsi,
                kota: _this2.kota,
                alamat_penjemputan: _this2.alamat_penjemputan,
                kode_pos: _this2.kode_pos,
                layanan_perbaikan: _this2.layanan_perbaikan,
                kronologis: _this2.kronologis,
                status_claim: 0
              }; // console.log(membershipClaim)

              _this2.membershipApiService.requestForClaim(token, membershipClaim).subscribe(function (response) {
                _this2.router.navigate(["/landing/membership-claim/done"]);
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

      return IndexPage;
    }();

    IndexPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_4__["Uid"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_7__["MembershipApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"]
      }, {
        type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_7__["MembershipApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }];
    };

    IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./index.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/index/index.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./index.page.scss */
      "./src/app/pages/landing/membership-claim/index/index.page.scss"))["default"]]
    })], IndexPage);
    /***/
  }
}]);
//# sourceMappingURL=membership-claim-index-index-module-es5.js.map