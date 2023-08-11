(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-activation-screen-testing-screen-testing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" mode=\"md\">\n  <canvas #screenTest \n  (touchstart)=\"startTouch($event)\" \n  (touchmove)=\"moveTouch($event)\" \n  (touchend)=\"endTouch()\">\n</canvas>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/membership-activation/screen-testing/screen-testing-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/screen-testing/screen-testing-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ScreenTestingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTestingPageRoutingModule", function() { return ScreenTestingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _screen_testing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen-testing.page */ "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.ts");




const routes = [
    {
        path: '',
        component: _screen_testing_page__WEBPACK_IMPORTED_MODULE_3__["ScreenTestingPage"]
    }
];
let ScreenTestingPageRoutingModule = class ScreenTestingPageRoutingModule {
};
ScreenTestingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScreenTestingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/screen-testing/screen-testing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ScreenTestingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTestingPageModule", function() { return ScreenTestingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _screen_testing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screen-testing-routing.module */ "./src/app/pages/landing/membership-activation/screen-testing/screen-testing-routing.module.ts");
/* harmony import */ var _screen_testing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen-testing.page */ "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.ts");







let ScreenTestingPageModule = class ScreenTestingPageModule {
};
ScreenTestingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _screen_testing_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScreenTestingPageRoutingModule"]
        ],
        declarations: [_screen_testing_page__WEBPACK_IMPORTED_MODULE_6__["ScreenTestingPage"]]
    })
], ScreenTestingPageModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWFjdGl2YXRpb24vc2NyZWVuLXRlc3RpbmcvQzpcXFVzZXJzXFxtYWNhblxcRG93bmxvYWRzXFx6Zml4X2FwcF9hbmd1bGFyX2h0dHBfbmV3OVxcemZpeF9hcHBfYW5ndWxhcl9odHRwX25ldzkvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxtZW1iZXJzaGlwLWFjdGl2YXRpb25cXHNjcmVlbi10ZXN0aW5nXFxzY3JlZW4tdGVzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1hY3RpdmF0aW9uL3NjcmVlbi10ZXN0aW5nL3NjcmVlbi10ZXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFXO0FDQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21lbWJlcnNoaXAtYWN0aXZhdGlvbi9zY3JlZW4tdGVzdGluZy9zY3JlZW4tdGVzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: ScreenTestingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTestingPage", function() { return ScreenTestingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");






let ScreenTestingPage = class ScreenTestingPage {
    constructor(platform, utility, alertController, navCtrl) {
        this.platform = platform;
        this.utility = utility;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.lineWidth = 10;
        this.touching = false;
    }
    ionViewWillEnter() {
        this.canvasElement = this.canvas.nativeElement;
        this.canvasElement.width = this.platform.width() + "";
        this.canvasElement.height = this.platform.height() + "";
        let ctx = this.canvasElement.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(10, 10, this.canvasElement.width - 20, this.canvasElement.height - 20);
        this.utility.showToast("Bersihkan layar untuk melanjutkan.");
    }
    startTouch(event) {
        this.touching = true;
        this.test(event);
    }
    moveTouch(event) {
        if (!this.touching)
            return;
        this.test(event);
    }
    endTouch() {
        this.touching = false;
        this.checkCanvas();
    }
    test(event) {
        const canvasPosition = this.canvasElement.getBoundingClientRect();
        let ctx = this.canvasElement.getContext("2d");
        let currentX;
        let currentY;
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
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Jika anda tidak dapat melanjutkan test ini, anda bisa melewati dan lanjut ke tahap selanjutnya dengan konfirmasi bahwa layar memiliki masalah.',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Lanjut',
                        role: 'cancel',
                        handler: () => {
                            console.log('Continue');
                        }
                    }, {
                        text: 'Lewati',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const alert = yield this.alertController.create({
                                header: 'ZFix',
                                message: 'Jika anda skip tahap ini, proses aktivasi tidak dapat dilanjutkan.',
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Lanjut',
                                        role: 'cancel',
                                        handler: () => {
                                            // console.log('Continue');
                                        }
                                    }, {
                                        text: 'Tetap skip',
                                        handler: () => {
                                            let navigationExtras = {
                                                queryParams: {
                                                    screenHasProblem: 1,
                                                }
                                            };
                                            this.navCtrl.navigateForward(["landing", 'home'], navigationExtras);
                                            this.utility.showToast("Layar memiliki masalah.");
                                        }
                                    }
                                ]
                            });
                            yield alert.present();
                        })
                    },
                ]
            });
            yield alert.present();
        });
    }
    isCanvasBlank(canvas) {
        let ctx = this.canvasElement.getContext("2d");
        const pixelBuffer = new Uint32Array(ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer);
        return !pixelBuffer.some((color) => color !== 0);
    }
    checkCanvas() {
        const blank = this.isCanvasBlank(this.canvasElement);
        if (blank) {
            this.utility.showToast("Layar telah bersih.");
            let navigationExtras = {
                queryParams: {
                    screenHasProblem: 0,
                }
            };
            this.navCtrl.navigateForward(["/landing/membership-activation/device-detail/screen-testing/device-image"], navigationExtras);
        }
        else {
            this.utility.showToast("Layar belum dibersihkan.");
            this.presentAlertConfirm();
        }
    }
};
ScreenTestingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("screenTest", { static: false })
], ScreenTestingPage.prototype, "canvas", void 0);
ScreenTestingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-screen-testing",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./screen-testing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./screen-testing.page.scss */ "./src/app/pages/landing/membership-activation/screen-testing/screen-testing.page.scss")).default]
    })
], ScreenTestingPage);



/***/ })

}]);
//# sourceMappingURL=membership-activation-screen-testing-screen-testing-module-es2015.js.map