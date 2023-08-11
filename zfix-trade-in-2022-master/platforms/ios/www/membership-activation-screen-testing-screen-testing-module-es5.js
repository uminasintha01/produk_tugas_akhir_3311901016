function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-activation-screen-testing-screen-testing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingMembershipActivationScreenTestingScreenTestingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" mode=\"md\">\n  <canvas #screenTest \n  (touchstart)=\"startTouch($event)\" \n  (touchmove)=\"moveTouch($event)\" \n  (touchend)=\"endTouch()\">\n</canvas>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/screen-testing/screen-testing-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/screen-testing/screen-testing-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ScreenTestingPageRoutingModule */

  /***/
  function srcAppPagesLandingMembershipActivationScreenTestingScreenTestingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreenTestingPageRoutingModule", function () {
      return ScreenTestingPageRoutingModule;
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


    var _screen_testing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./screen-testing.page */
    "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.ts");

    var routes = [{
      path: '',
      component: _screen_testing_page__WEBPACK_IMPORTED_MODULE_3__["ScreenTestingPage"]
    }];

    var ScreenTestingPageRoutingModule = function ScreenTestingPageRoutingModule() {
      _classCallCheck(this, ScreenTestingPageRoutingModule);
    };

    ScreenTestingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ScreenTestingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/screen-testing/screen-testing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ScreenTestingPageModule */

  /***/
  function srcAppPagesLandingMembershipActivationScreenTestingScreenTestingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreenTestingPageModule", function () {
      return ScreenTestingPageModule;
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


    var _screen_testing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./screen-testing-routing.module */
    "./src/app/pages/landing/membership-activation/screen-testing/screen-testing-routing.module.ts");
    /* harmony import */


    var _screen_testing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./screen-testing.page */
    "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.ts");

    var ScreenTestingPageModule = function ScreenTestingPageModule() {
      _classCallCheck(this, ScreenTestingPageModule);
    };

    ScreenTestingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _screen_testing_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScreenTestingPageRoutingModule"]],
      declarations: [_screen_testing_page__WEBPACK_IMPORTED_MODULE_6__["ScreenTestingPage"]]
    })], ScreenTestingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingMembershipActivationScreenTestingScreenTestingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWFjdGl2YXRpb24vc2NyZWVuLXRlc3RpbmcvQzpcXFVzZXJzXFxtYWNhblxcRG93bmxvYWRzXFx6Zml4X2FwcF9hbmd1bGFyX2h0dHBfbmV3OVxcemZpeF9hcHBfYW5ndWxhcl9odHRwX25ldzkvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxtZW1iZXJzaGlwLWFjdGl2YXRpb25cXHNjcmVlbi10ZXN0aW5nXFxzY3JlZW4tdGVzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1hY3RpdmF0aW9uL3NjcmVlbi10ZXN0aW5nL3NjcmVlbi10ZXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFXO0FDQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21lbWJlcnNoaXAtYWN0aXZhdGlvbi9zY3JlZW4tdGVzdGluZy9zY3JlZW4tdGVzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ScreenTestingPage */

  /***/
  function srcAppPagesLandingMembershipActivationScreenTestingScreenTestingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreenTestingPage", function () {
      return ScreenTestingPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");

    var ScreenTestingPage = /*#__PURE__*/function () {
      function ScreenTestingPage(platform, utility, alertController, navCtrl) {
        _classCallCheck(this, ScreenTestingPage);

        this.platform = platform;
        this.utility = utility;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.lineWidth = 10;
        this.touching = false;
      }

      _createClass(ScreenTestingPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.canvasElement = this.canvas.nativeElement;
          this.canvasElement.width = this.platform.width() + "";
          this.canvasElement.height = this.platform.height() + "";
          var ctx = this.canvasElement.getContext("2d");
          ctx.fillStyle = "blue";
          ctx.fillRect(10, 10, this.canvasElement.width - 20, this.canvasElement.height - 20);
          this.utility.showToast("Bersihkan layar untuk melanjutkan.");
        }
      }, {
        key: "startTouch",
        value: function startTouch(event) {
          this.touching = true;
          this.test(event);
        }
      }, {
        key: "moveTouch",
        value: function moveTouch(event) {
          if (!this.touching) return;
          this.test(event);
        }
      }, {
        key: "endTouch",
        value: function endTouch() {
          this.touching = false;
          this.checkCanvas();
        }
      }, {
        key: "test",
        value: function test(event) {
          var canvasPosition = this.canvasElement.getBoundingClientRect();
          var ctx = this.canvasElement.getContext("2d");
          var currentX;
          var currentY;
          var i;

          for (i = 0; i < event.changedTouches.length; i++) {
            currentX = event.changedTouches[i].pageX - canvasPosition.x;
            currentY = event.changedTouches[i].pageY - canvasPosition.y;
          }

          ctx.beginPath();
          ctx.globalCompositeOperation = "destination-out";
          ctx.arc(currentX, currentY, 42, 0, Math.PI * 2, false);
          ctx.fill();
          this.saveX = currentX;
          this.saveY = currentY;
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Jika anda tidak dapat melanjutkan test ini, anda bisa melewati dan lanjut ke tahap selanjutnya dengan konfirmasi bahwa layar memiliki masalah.',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Lanjut',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Continue');
                        }
                      }, {
                        text: 'Lewati',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var _this2 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return this.alertController.create({
                                      header: 'ZFix',
                                      message: 'Jika anda skip tahap ini, proses aktivasi tidak dapat dilanjutkan.',
                                      backdropDismiss: false,
                                      buttons: [{
                                        text: 'Lanjut',
                                        role: 'cancel',
                                        handler: function handler() {// console.log('Continue');
                                        }
                                      }, {
                                        text: 'Tetap skip',
                                        handler: function handler() {
                                          var navigationExtras = {
                                            queryParams: {
                                              screenHasProblem: 1
                                            }
                                          };

                                          _this2.navCtrl.navigateForward(["landing", 'home'], navigationExtras);

                                          _this2.utility.showToast("Layar memiliki masalah.");
                                        }
                                      }]
                                    });

                                  case 2:
                                    alert = _context.sent;
                                    _context.next = 5;
                                    return alert.present();

                                  case 5:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "isCanvasBlank",
        value: function isCanvasBlank(canvas) {
          var ctx = this.canvasElement.getContext("2d");
          var pixelBuffer = new Uint32Array(ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer);
          return !pixelBuffer.some(function (color) {
            return color !== 0;
          });
        }
      }, {
        key: "checkCanvas",
        value: function checkCanvas() {
          var blank = this.isCanvasBlank(this.canvasElement);

          if (blank) {
            this.utility.showToast("Layar telah bersih.");
            var navigationExtras = {
              queryParams: {
                screenHasProblem: 0
              }
            };
            this.navCtrl.navigateForward(["/landing/membership-activation/device-detail/screen-testing/device-image"], navigationExtras);
          } else {
            this.utility.showToast("Layar belum dibersihkan.");
            this.presentAlertConfirm();
          }
        }
      }]);

      return ScreenTestingPage;
    }();

    ScreenTestingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("screenTest", {
      "static": false
    })], ScreenTestingPage.prototype, "canvas", void 0);
    ScreenTestingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-screen-testing",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./screen-testing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./screen-testing.page.scss */
      "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.scss"))["default"]]
    })], ScreenTestingPage);
    /***/
  }
}]);
//# sourceMappingURL=membership-activation-screen-testing-screen-testing-module-es5.js.map