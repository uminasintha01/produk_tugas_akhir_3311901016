function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-my-plans-my-plans-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-plans/my-plans.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-plans/my-plans.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingMyPlansMyPlansPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">\n      My Plans\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment mode=\"md\" [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"0\">\n        Activated\n      </ion-segment-button>\n\n      <ion-segment-button value=\"1\">\n        Expired\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n   <ion-slides #slides pager=\"false\" [options]=\"sliderOptions\" (ionSlideDidChange)=\"slideShanged(slides)\" (ionSlidesDidLoad)=\"slideShanged(slides)\">\n     <ion-slide>\n      <ion-card *ngFor=\"let data of user.data?.process\">\n        <div *ngIf=\"(data.status == 1 || data.status == 0 )\">\n      <ion-card-header>\n        <ion-card-title>Activated</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content >\n        \n          <ion-item>\n            <ion-label position=\"floating\">Imei:</ion-label>\n            <ion-input value=\"{{ data.imei }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">Type:</ion-label>\n            <ion-input value=\"{{ data.device_type }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">Manufacturer:</ion-label>\n            <ion-input value=\"{{ data.device_manufacturer }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">Model:</ion-label>\n            <ion-input value=\"{{ data.device_model }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">RAM:</ion-label>\n            <ion-input value=\"{{ data.device_ram }}\" readonly></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label position=\"floating\">Storage:</ion-label>\n            <ion-input value=\"{{ data.device_storage }}\" readonly></ion-input>\n          </ion-item>\n          \n          <ion-item *ngIf=\"data.status == 1\">\n            <ion-label position=\"floating\">Activated Date:</ion-label>\n            <ion-input value=\"{{ data.actived_at }}\" readonly></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf=\"data.status == 1\">\n            <ion-label position=\"floating\" >Expired Date:</ion-label>\n            <ion-input value=\"{{ data.expired_at }}\" readonly></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf=\"data.status == 1\">\n            <ion-label position=\"stacked\">Duration</ion-label>\n            <ion-input id=\"countdown\"></ion-input>          \n          </ion-item>\n\n          <ion-item *ngIf=\"data.status == 0\">\n            <ion-label position=\"stacked\">Status</ion-label>\n            <ion-input>Menunggu Verifikasi</ion-input>          \n          </ion-item>\n        \n      </ion-card-content>\n        </div>\n      </ion-card>  \n     </ion-slide>\n\n     <ion-slide>\n     <ion-card *ngFor=\"let data of user.data?.process\">\n      <div *ngIf=\"data.status == -2\">\n    <ion-card-header>\n      <ion-card-title>Expired</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content >\n      \n        <ion-item>\n          <ion-label position=\"floating\">Imei:</ion-label>\n          <ion-input value=\"{{ data.imei }}\" readonly></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label position=\"floating\">Type:</ion-label>\n          <ion-input value=\"{{ data.device_type }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Manufacturer:</ion-label>\n          <ion-input value=\"{{ data.device_manufacturer }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Model:</ion-label>\n          <ion-input value=\"{{ data.device_model }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">RAM:</ion-label>\n          <ion-input value=\"{{ data.device_ram }}\" readonly></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Storage:</ion-label>\n          <ion-input value=\"{{ data.device_storage }}\" readonly></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label position=\"floating\">Expired Date:</ion-label>\n          <ion-input value=\"{{ data.expired_at }}\" readonly></ion-input>\n        </ion-item>\n      \n    </ion-card-content>\n    </div>\n    </ion-card>  \n     </ion-slide>\n   </ion-slides>\n  </ion-content>\n    ";
    /***/
  },

  /***/
  "./src/app/pages/landing/my-plans/my-plans-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/landing/my-plans/my-plans-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: MyPlansPageRoutingModule */

  /***/
  function srcAppPagesLandingMyPlansMyPlansRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPlansPageRoutingModule", function () {
      return MyPlansPageRoutingModule;
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


    var _my_plans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-plans.page */
    "./src/app/pages/landing/my-plans/my-plans.page.ts");

    var routes = [{
      path: '',
      component: _my_plans_page__WEBPACK_IMPORTED_MODULE_3__["MyPlansPage"]
    }];

    var MyPlansPageRoutingModule = function MyPlansPageRoutingModule() {
      _classCallCheck(this, MyPlansPageRoutingModule);
    };

    MyPlansPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyPlansPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/my-plans/my-plans.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/landing/my-plans/my-plans.module.ts ***!
    \***********************************************************/

  /*! exports provided: MyPlansPageModule */

  /***/
  function srcAppPagesLandingMyPlansMyPlansModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPlansPageModule", function () {
      return MyPlansPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _my_plans_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-plans.page */
    "./src/app/pages/landing/my-plans/my-plans.page.ts");
    /* harmony import */


    var _my_plans_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-plans-routing.module */
    "./src/app/pages/landing/my-plans/my-plans-routing.module.ts");

    var MyPlansPageModule = function MyPlansPageModule() {
      _classCallCheck(this, MyPlansPageModule);
    };

    MyPlansPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _my_plans_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyPlansPageRoutingModule"]],
      declarations: [_my_plans_page__WEBPACK_IMPORTED_MODULE_5__["MyPlansPage"]]
    })], MyPlansPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/my-plans/my-plans.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/landing/my-plans/my-plans.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingMyPlansMyPlansPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbXktcGxhbnMvbXktcGxhbnMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/my-plans/my-plans.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/landing/my-plans/my-plans.page.ts ***!
    \*********************************************************/

  /*! exports provided: MyPlansPage */

  /***/
  function srcAppPagesLandingMyPlansMyPlansPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPlansPage", function () {
      return MyPlansPage;
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
    /*! ../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/api/membership-api.service */
    "./src/app/services/api/membership-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var MyPlansPage = /*#__PURE__*/function () {
      function MyPlansPage(storage, MembershipService, utilsService) {
        _classCallCheck(this, MyPlansPage);

        this.storage = storage;
        this.MembershipService = MembershipService;
        this.utilsService = utilsService;
        this.user = [];
        this.segment = 0;
        this.sliderOptions = {
          initialSlide: 0,
          slidePerView: 1,
          speed: 400
        };
      }

      _createClass(MyPlansPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getMyPlan();
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.selectedSlide.slideTo(this.segment);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "slideShanged",
        value: function slideShanged(slides) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.selectedSlide = slides;
                    slides.getActiveIndex().then(function (selectedIndex) {
                      _this.segment = selectedIndex;
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getMyPlan",
        value: function getMyPlan() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this2.MembershipService.myPlan(token).subscribe(function (response) {
              _this2.user = response;
              _this2.rawCountdown = new Date(_this2.user.data.process[0].expired_at).getTime(); // this.now = new Date().getTime();
              // this.countdown = this.rawCountdown -  this.now;

              _this2.x = setInterval(function () {
                _this2.now = new Date().getTime();
                _this2.countdown = _this2.rawCountdown - _this2.now;
                var days = Math.floor(_this2.countdown / (1000 * 60 * 60 * 24));
                document.getElementById("countdown").innerHTML = days + "Hari lagi ";
              }, 1000);
            }, function (err) {
              _this2.user = [];

              _this2.utilsService.showToast("There is a problem.");
            });
          }); // let date = new Date().getTime()
          // console.log(date);
        }
      }]);

      return MyPlansPage;
    }();

    MyPlansPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_4__["MembershipApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }];
    };

    MyPlansPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-plans',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-plans.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/my-plans/my-plans.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-plans.page.scss */
      "./src/app/pages/landing/my-plans/my-plans.page.scss"))["default"]]
    })], MyPlansPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-landing-my-plans-my-plans-module-es5.js.map