(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-activation-device-image-device-image-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/device-image/device-image.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/device-image/device-image.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-title style=\"color: white\">Device Image</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"middle-page\">\n    <ion-card>\n      <ion-card-content>\n        <form>\n          <div class=\"ion-text-center ion-margin\">\n            <h1>Foto Gadget kamu</h1>\n          </div>\n          <div class=\"ion-text-center ion-margin\">\n            <p>Aktifkan membership kamu dengan foto Gadget kamu secara jelas menggunakan <b>Gadget lain</b></p>\n          </div>\n\n          <h3>Kode Unik</h3>\n\n          <ion-card>\n          <h1>{{code}}</h1>\n          </ion-card>\n\n          <div class=\"ion-text-center ion-margin\">\n            <p>Kode Unik, Stiker dan Kondisi Layar harus terlihat jelas saat foto cek fisik untuk verifikasi</p>\n          </div>\n\n          <div class=\"ion-text-center ion-margin\">\n            <p>Akses link di bawah ini untuk mengupload foto cek fisik untuk verifikasi</p>\n          </div>\n\n          <ion-card>\n            <ion-input [(ngModel)]=\"link\" name=\"link\" readonly></ion-input>\n          </ion-card>\n<!--           \n        <ion-card>\n          <ion-textarea [(ngModel)]=\"CopyText\" name=\"CopyText\"  disabled readonly></ion-textarea>\n        </ion-card> -->\n        <ion-button expand=\"block\" size=\"small\" float-right (click)=\"share()\">Bagikan Link</ion-button>\n\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/membership-activation/device-image/device-image-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/device-image/device-image-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: DeviceImagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceImagePageRoutingModule", function() { return DeviceImagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _device_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-image.page */ "./src/app/pages/landing/membership-activation/device-image/device-image.page.ts");




const routes = [
    {
        path: '',
        component: _device_image_page__WEBPACK_IMPORTED_MODULE_3__["DeviceImagePage"]
    }
];
let DeviceImagePageRoutingModule = class DeviceImagePageRoutingModule {
};
DeviceImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeviceImagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-activation/device-image/device-image.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/device-image/device-image.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DeviceImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceImagePageModule", function() { return DeviceImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _device_image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-image-routing.module */ "./src/app/pages/landing/membership-activation/device-image/device-image-routing.module.ts");
/* harmony import */ var _device_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-image.page */ "./src/app/pages/landing/membership-activation/device-image/device-image.page.ts");







let DeviceImagePageModule = class DeviceImagePageModule {
};
DeviceImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _device_image_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeviceImagePageRoutingModule"]
        ],
        declarations: [_device_image_page__WEBPACK_IMPORTED_MODULE_6__["DeviceImagePage"]]
    })
], DeviceImagePageModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-activation/device-image/device-image.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/device-image/device-image.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: auto;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\nh1 {\n  text-align: center;\n  margin: 0 auto;\n  font-weight: bold;\n  color: black;\n}\n\nh3 {\n  text-align: center;\n  margin: 0 auto;\n}\n\nion-input {\n  text-align: center;\n  margin: 0 auto;\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWFjdGl2YXRpb24vZGV2aWNlLWltYWdlL0M6XFxVc2Vyc1xcbWFjYW5cXERvd25sb2Fkc1xcemZpeF9hcHBfYW5ndWxhcl9odHRwX25ldzlcXHpmaXhfYXBwX2FuZ3VsYXJfaHR0cF9uZXc5L3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbWVtYmVyc2hpcC1hY3RpdmF0aW9uXFxkZXZpY2UtaW1hZ2VcXGRldmljZS1pbWFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1hY3RpdmF0aW9uL2RldmljZS1pbWFnZS9kZXZpY2UtaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQ0NsQjs7QURFQTtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7QUNDaEI7O0FERUE7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztBQ0NsQjs7QURFQTtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbWVtYmVyc2hpcC1hY3RpdmF0aW9uL2RldmljZS1pbWFnZS9kZXZpY2UtaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGNvbG9yOiBibGFjaztcclxufSIsImltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/membership-activation/device-image/device-image.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-activation/device-image/device-image.page.ts ***!
  \***************************************************************************************/
/*! exports provided: DeviceImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceImagePage", function() { return DeviceImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



















let DeviceImagePage = class DeviceImagePage {
    constructor(storage, camera, membershipApiService, utilsService, router, activatedRoute, preview, socialSharing, clipboard, actionSheetController, platform, alertController, navCtrl, location) {
        this.storage = storage;
        this.camera = camera;
        this.membershipApiService = membershipApiService;
        this.utilsService = utilsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.preview = preview;
        this.socialSharing = socialSharing;
        this.clipboard = clipboard;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.location = location;
        this.link = 'https://zfix.id/code/';
        this.response = {};
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.screenHasProblem = params["screenHasProblem"];
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ionViewWillEnter() {
        this.getCode();
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["interval"])(2000).subscribe(x => {
            this.checkCode();
        });
        this.backButton();
    }
    share() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Bagikan Link',
                buttons: [{
                        text: 'Share via Whatsapp',
                        icon: 'logo-whatsapp',
                        cssClass: 'whatsappIcon',
                        handler: () => {
                            this.socialSharing.shareViaWhatsApp(this.link);
                        }
                    }, {
                        text: 'Copy Link',
                        icon: 'copy',
                        cssClass: 'copyIcon',
                        handler: () => {
                            this.clipboard.copy(this.link);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    getCode() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["membershipActivationKey"]).then((data) => {
                let membershipActivation = {
                    voucher_key: data.code,
                    imei: data.imei,
                    device_type: data.type,
                    device_version: data.version,
                    device_manufacturer: data.manufacturer,
                    device_model: data.model,
                    device_ram: data.ram,
                    device_storage: data.storage,
                    lokasi_beli_voucher: data.lokasi_beli_voucher,
                    screen_has_problem: this.screenHasProblem,
                };
                console.log(membershipActivation);
                this.membershipApiService.activation(token, membershipActivation).subscribe((response) => {
                    this.response = response;
                    this.code = this.response.data.code;
                    this.link = this.link + this.code;
                }, (err) => {
                    console.log(err);
                    this.utilsService.showToast(err.error.message);
                    this.router.navigate(['landing', 'home']);
                });
            });
        });
    }
    checkCode() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            let membershipActivation = {
                request_code: -1,
                code: this.code
            };
            var status = {};
            this.membershipApiService.check(token, membershipActivation).subscribe((response) => {
                status = response;
                if (status.received == true)
                    this.utilsService.done("Data sudah diterima dan sedang diproses.");
                this.subscription.unsubscribe();
            }, (err) => {
                // console.log(err)
            });
        });
    }
    backButton() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            if (this.location.isCurrentPathEqualTo('/landing/membership-activation/device-detail/screen-testing/device-image')) {
                this.back();
            }
            else {
                // Navigate to back page
                console.log('Navigate to back page');
                this.location.back();
            }
        });
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Apakah anda yakin ingin kembali ke halaman awal?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: () => {
                        }
                    }, {
                        text: 'Iya',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const alert = yield this.alertController.create({
                                header: 'ZFix',
                                message: 'Jika anda kembali code voucher sudah tidak dapat digunakan kembali.',
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Tidak',
                                        role: 'cancel',
                                        handler: () => {
                                        }
                                    }, {
                                        text: 'Iya',
                                        handler: () => {
                                            this.navCtrl.navigateForward(["landing", 'home']);
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
};
DeviceImagePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_5__["MembershipApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__["CameraPreview"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Clipboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] }
];
DeviceImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./device-image.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/device-image/device-image.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./device-image.page.scss */ "./src/app/pages/landing/membership-activation/device-image/device-image.page.scss")).default]
    })
], DeviceImagePage);

// copyText(){
//   this.clipboard.copy(this.CopyTextAreaText);
// }
// ShareGeneric(parameter){
//   const url = this.link
//   const text = parameter+'\n'
//   this.socialSharing.share(text, 'MEDIUM', null, url)
// }
// ShareWhatsapp(){
//   this.socialSharing.shareViaWhatsApp(this.link)
// }


/***/ })

}]);
//# sourceMappingURL=membership-activation-device-image-device-image-module-es2015.js.map