(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-settings-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>index</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <img class=\"bg-image\" src=\"../../../../assets/images/home/bg_home.png\" alt=\"\">\n\n  <ion-item lines=\"none\" class=\"current-user\" color=\"transparent\" routerLink=\"../../profile\">\n    <ion-avatar>\n      <img src=\"./assets/images/z_logo.png\">\n    </ion-avatar>\n    <ion-label class=\"ion-text-nowrap\">\n      <p *ngIf=\"user != {}\">Halo, {{ user.data?.user.name }}</p>\n    </ion-label>\n    <ion-icon name=\"chevron-forward-outline\"></ion-icon> \n  </ion-item>\n\n  <ion-card class=\"welcome-card\">\n    <ion-item routerLink=\"../../history\">\n      <ion-img src=\"./assets/images/setting_menu_cards.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <p>Daftar Transaksi</p>\n      </ion-label>\n    </ion-item> \n\n    <ion-item routerLink=\"../../outlet\">\n      <ion-img src=\"./assets/images/setting_menu_outlets.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <p>Lokasi Tukar Tambah</p>\n      </ion-label>\n    </ion-item> \n    \n    <ion-item routerLink=\"../../call-us\">\n      <ion-img src=\"./assets/images/setting_menu_contact.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <p>Hubungi Kami</p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-item routerLink=\"../../privacy-policy\">\n      <ion-img src=\"./assets/images/setting_menu_privacy.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <p>Kebijakan Privasi</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item routerLink=\"../../terms\">\n      <ion-img src=\"./assets/images/setting_menu_terms.png\" class=\"img-btn\"></ion-img> \n      <ion-label class=\"ion-text-nowrap\">\n        <p>Syarat & Ketentuan</p>\n      </ion-label>\n    </ion-item>\n</ion-card>\n\n<ion-card>\n  <ion-item (click)=\"logout()\">\n    <ion-img src=\"./assets/images/setting_menu_logout.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Logout</p>\n    </ion-label> \n  </ion-item>\n</ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/settings/index/index-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/settings/index/index-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: IndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function() { return IndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/settings/index/index.page.ts");




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/index/index.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing/settings/index/index.module.ts ***!
  \**************************************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/pages/landing/settings/index/index-routing.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/settings/index/index.page.ts");







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"]
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/index/index.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing/settings/index/index.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  width: 15%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n\nion-label p {\n  margin-left: 10px;\n  font-weight: bold;\n}\n\n.img-btn {\n  max-width: 80px;\n}\n\nion-item {\n  padding-right: 20px !important;\n}\n\n.bg-image {\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9pbmRleC9DOlxcVXNlcnNcXGFyZGltXFxEZXNrdG9wXFxoYW1waXIgc2VsZXNhaVxcTmV3IGZvbGRlclxcbXlUcmFkZV9WMy4wL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcc2V0dGluZ3NcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZ3MvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NOOztBREdFO0VBQ0UsZUFBQTtBQ0FKOztBREdFO0VBQ0UsOEJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREVJO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0FDQUo7O0FESUk7RUFDQSxXQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmdzL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG5cclxuICAuaW1nLWJ0biB7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgXHJcbiAgICAmLnRvcCB7XHJcbiAgICB0b3A6ICAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgJi5ib3R0b20ge1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgXHJcbiAgICB9XHJcbn0iLCJpb24taW1nIHtcbiAgd2lkdGg6IDE1JTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG59XG5cbmlvbi1sYWJlbCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1nLWJ0biB7XG4gIG1heC13aWR0aDogODBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1pbWFnZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uYmctaW1hZ2UudG9wIHtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG59XG4uYmctaW1hZ2UuYm90dG9tIHtcbiAgYm90dG9tOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/landing/settings/index/index.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/landing/settings/index/index.page.ts ***!
  \************************************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api/user-api.service */ "./src/app/services/api/user-api.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");







let IndexPage = class IndexPage {
    constructor(authService, storage, userApiService, utilsService) {
        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.utilsService = utilsService;
        this.user = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getUser();
    }
    getUser() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.userApiService.userDetail(token).subscribe((response) => {
                this.user = response;
            }, (err) => {
                this.user = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    logout() {
        this.authService.logout();
    }
};
IndexPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/index/index.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.page.scss */ "./src/app/pages/landing/settings/index/index.page.scss")).default]
    })
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-settings-index-index-module-es2015.js.map