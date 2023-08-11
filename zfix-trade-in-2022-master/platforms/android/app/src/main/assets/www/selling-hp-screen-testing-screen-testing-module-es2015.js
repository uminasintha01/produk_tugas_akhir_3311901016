(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-screen-testing-screen-testing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n\n<ion-content style=\"--background: #ccc url('../../../../assets/images/phone/background.png') no-repeat center center / cover;\">\n  <canvas #screenTest \n  (touchstart)=\"startTouch($event)\" \n  (touchmove)=\"moveTouch($event)\" \n  (touchend)=\"endTouch()\">\n \n</canvas>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/selling-hp/screen-testing/screen-testing-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/screen-testing/screen-testing-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ScreenTestingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTestingPageRoutingModule", function() { return ScreenTestingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _screen_testing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen-testing.page */ "./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.ts");




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

/***/ "./src/app/pages/landing/selling-hp/screen-testing/screen-testing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/screen-testing/screen-testing.module.ts ***!
  \**********************************************************************************/
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
/* harmony import */ var _screen_testing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screen-testing-routing.module */ "./src/app/pages/landing/selling-hp/screen-testing/screen-testing-routing.module.ts");
/* harmony import */ var _screen_testing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen-testing.page */ "./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.ts");







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

/***/ "./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --overflow:hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL3NjcmVlbi10ZXN0aW5nL0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLWhwXFxzY3JlZW4tdGVzdGluZ1xcc2NyZWVuLXRlc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvc2NyZWVuLXRlc3Rpbmcvc2NyZWVuLXRlc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1ocC9zY3JlZW4tdGVzdGluZy9zY3JlZW4tdGVzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tb3ZlcmZsb3c6aGlkZGVuO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OmhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.ts ***!
  \********************************************************************************/
/*! exports provided: ScreenTestingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTestingPage", function() { return ScreenTestingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");










let ScreenTestingPage = class ScreenTestingPage {
    constructor(platform, utility, alertController, navCtrl, utilsService, storage, selling, router, activatedRoute) {
        this.platform = platform;
        this.utility = utility;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.utilsService = utilsService;
        this.storage = storage;
        this.selling = selling;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.lineWidth = 10;
        this.touching = false;
    }
    ngOnInit() {
        // this.getCode();
        this.activatedRoute.queryParams.subscribe(params => {
            this.brand = params["brand"];
            this.ram = params["ram"];
            this.storages = params["storages"];
            this.lokasi_trade = params["lokasi_trade"];
            console.log(this.storages);
            console.log(this.ram);
            console.log(this.brand);
            console.log("lokasi trade" + this.lokasi_trade);
        });
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
                                message: 'Jika anda skip tahap ini, anda memverifikasi bahwa layar anda memiliki masalah.',
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
                                                    brand: this.brand,
                                                    ram: this.ram,
                                                    storages: this.storages,
                                                    lokasi_trade: this.lokasi_trade,
                                                    screenHasProblem: 1,
                                                }
                                            };
                                            this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera"], navigationExtras);
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
                    brand: this.brand,
                    ram: this.ram,
                    storages: this.storages,
                    lokasi_trade: this.lokasi_trade,
                    screenHasProblem: 0,
                }
            };
            this.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera"], navigationExtras);
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_5__["MembershipService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("screenTest", { static: false })
], ScreenTestingPage.prototype, "canvas", void 0);
ScreenTestingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-screen-testing",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./screen-testing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./screen-testing.page.scss */ "./src/app/pages/landing/selling-hp/screen-testing/screen-testing.page.scss")).default]
    })
], ScreenTestingPage);



/***/ })

}]);
//# sourceMappingURL=selling-hp-screen-testing-screen-testing-module-es2015.js.map