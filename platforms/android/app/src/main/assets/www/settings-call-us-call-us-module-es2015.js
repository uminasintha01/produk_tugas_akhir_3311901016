(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-call-us-call-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Hubungi Kami</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <img class=\"bg-image\" src=\"../../../../assets/images/home/bg_home.png\" alt=\"\">\n  <ion-card>\n    <ion-card-content>\n      <p align=\"center\"><ion-img src=\"./assets/images/contact_mascots.png\" width=\"128\"></ion-img></p>\n        <!-- <ion-img src=\"./assets/images/5.0x/contact_mascot.png\"></ion-img> -->\n      <div class=\"ion-text-center\">\n        Kami Siap Membantu Anda\n      </div>\n\n      <ion-text>\n        <p align=\"center\">\n          Silahkan menghubungi kami melalui beberapa pilihan opsi di bawah ini. Customer Service\n          kami siap melayani segala pernyataan setiap saat.\n        </p>\n      </ion-text>\n\n      <ion-grid style=\"padding-left: 20px; padding-top: 20px;\">\n        <ion-row> \n          <div class=\"span6\" style=\"padding-right:13px; border-right: 1px solid #ccc;\">\n            <a href=\"tel:+62 877-0477-5575\"><img class=\"icon-images\" src=\"./assets/images/3.0x/contact_call_icon.png\" /></a>\n            <!-- <img href=\"tel:555-555-5555\" src=\"./assets/images/3.0x/contact_call_icon.png\"> -->\n            <h3>Call</h3>\n          </div>\n        \n          <div class=\"span6\" style=\"padding-left:13px; padding-right:13px; border-right: 1px solid #ccc;\">\n            <a href=\"https://api.whatsapp.com/send?phone=6287704775575\" ><img class=\"icon-images\" src=\"./assets/images/3.0x/contact_chat_icon.png\"></a>\n              <h3>Chat</h3>\n          </div>\n\n          <div class=\"span6\" style=\"padding-left: 13px;\">\n            <a href=\"mailto:cs@zfix.id\" ><img class=\"icon-images\" src=\"./assets/images/3.0x/contact_email_icon.png\"></a>\n            <h3>Email</h3>\n          </div>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/settings/call-us/call-us-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/settings/call-us/call-us-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CallUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPageRoutingModule", function() { return CallUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _call_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call-us.page */ "./src/app/pages/landing/settings/call-us/call-us.page.ts");




const routes = [
    {
        path: '',
        component: _call_us_page__WEBPACK_IMPORTED_MODULE_3__["CallUsPage"]
    }
];
let CallUsPageRoutingModule = class CallUsPageRoutingModule {
};
CallUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CallUsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/call-us/call-us.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/settings/call-us/call-us.module.ts ***!
  \******************************************************************/
/*! exports provided: CallUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPageModule", function() { return CallUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call-us-routing.module */ "./src/app/pages/landing/settings/call-us/call-us-routing.module.ts");
/* harmony import */ var _call_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call-us.page */ "./src/app/pages/landing/settings/call-us/call-us.page.ts");







let CallUsPageModule = class CallUsPageModule {
};
CallUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallUsPageRoutingModule"]
        ],
        declarations: [_call_us_page__WEBPACK_IMPORTED_MODULE_6__["CallUsPage"]]
    })
], CallUsPageModule);



/***/ }),

/***/ "./src/app/pages/landing/settings/call-us/call-us.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/settings/call-us/call-us.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-image {\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n\nion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\nion-card {\n  border-radius: 15px !important;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-top: 20px;\n  padding-right: 20px;\n  display: flex;\n  width: 90% !important;\n  margin: 5% !important;\n}\n\n.ion-text-center {\n  padding-top: 20px;\n  font-weight: bold;\n  color: black;\n}\n\nion-text {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 10px;\n  text-align: center;\n  color: black;\n}\n\nion-img {\n  height: 250px;\n}\n\n.icon-images {\n  width: 55px;\n  height: 55px;\n}\n\nh3 {\n  margin-left: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9jYWxsLXVzL0M6XFxVc2Vyc1xcaHBcXERvd25sb2Fkc1xcemZpeC10cmFkZS1pbi0yMDIyLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNldHRpbmdzXFxjYWxsLXVzXFxjYWxsLXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9jYWxsLXVzL2NhbGwtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0FDQ2I7O0FEUEE7RUFTSSxRQUFTO0VBQ1QsNEJBQTRCO0FDRWhDOztBRFpBO0VBZUksV0FBVztBQ0NmOztBRElBO0VBQ0ksdUJBQXVCO0VBQ3ZCLG1CQUFjO0FDRGxCOztBRElBO0VBQ0ksOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQ0R6Qjs7QURJQTtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtBQ0RoQjs7QURJQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FDRGhCOztBREtFO0VBQ0UsYUFBYTtBQ0ZqQjs7QURLQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0FDRmhCOztBREtBO0VBQ0ksaUJBQWlCO0FDRnJCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5ncy9jYWxsLXVzL2NhbGwtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWltYWdlIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgXG4gICAgJi50b3Age1xuICAgIHRvcDogIDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICBcbiAgICB9XG4gIFxuICAgICYuYm90dG9tIHtcbiAgICBib3R0b206IDBweDtcbiAgXG4gICAgfVxufVxuXG5pb24tY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xufVxuICAgIFxuaW9uLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1JSAhaW1wb3J0YW50O1xufVxuICAgIFxuLmlvbi10ZXh0LWNlbnRlcntcbiAgICBwYWRkaW5nLXRvcDogMjBweDsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLXRleHR7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG4gIGlvbi1pbWd7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4uaWNvbi1pbWFnZXMge1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogNTVweDtcbn1cblxuaDMge1xuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xufSIsIi5iZy1pbWFnZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG5cbi5iZy1pbWFnZS50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cblxuLmJnLWltYWdlLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDUlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1jZW50ZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWltZyB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5pY29uLWltYWdlcyB7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbmgzIHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/settings/call-us/call-us.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/settings/call-us/call-us.page.ts ***!
  \****************************************************************/
/*! exports provided: CallUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPage", function() { return CallUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CallUsPage = class CallUsPage {
    constructor() { }
    ngOnInit() {
    }
};
CallUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-call-us',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./call-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/settings/call-us/call-us.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./call-us.page.scss */ "./src/app/pages/landing/settings/call-us/call-us.page.scss")).default]
    })
], CallUsPage);



/***/ })

}]);
//# sourceMappingURL=settings-call-us-call-us-module-es2015.js.map