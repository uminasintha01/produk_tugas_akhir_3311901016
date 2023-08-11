(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-outlet-outlet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/outlet/outlet.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/outlet/outlet.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Service Center ZFix</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vl\" style=\"font-family: 'Arial' !important; margin-left: 10px;\">\n      <h2>Service Center ZFix</h2>\n  </div>\n    <ion-text>\n      <p>Kami telah memiliki service center yang tersebar luas di Indonesia.</p>\n    </ion-text>\n\n    <ol>\n      <li>\n        DKI Jakarta\n      </li>\n      <li>\n        Tangerang Selatan\n      </li>\n      <li>\n        Serang\n      </li>\n      <li>\n        Jawa Barat\n        <ol type=\"a\">\n          <li>\n            Bandung\n          </li>\n          <li>\n            Bekasi\n          </li>\n          <li>\n            Bogor\n          </li>\n          <li>\n            Cibinong\n          </li>\n          <li>\n            Cikarang\n          </li>\n          <li>\n            Cilegon\n          </li>\n          <li>\n            Cirebon\n          </li>\n          <li>\n            Depok\n          </li>\n          <li>\n            Karawang\n          </li>\n          <li>\n            Kuningan\n          </li>\n        </ol>\n      </li>\n\n      <li>\n        Jawa Tengah\n      <ol type=\"a\">\n        <li>\n          Boyolali\n        </li>\n        <li>\n          Cilacap\n        </li>\n        <li>\n          Kebumen\n        </li>\n        <li>\n          Magelang\n        </li>\n        <li>\n          Purbalingga\n        </li>\n        <li>\n          Solo\n        </li>\n        <li>\n          Sragen\n        </li>\n      </ol>\n      </li>\n\n      <li>\n        DI Yogyakarta\n      </li>\n      <li>\n        Jawa Timur\n        <ol type=\"a\">\n          <li>\n            Kediri\n          </li>\n          <li>\n            Lumajang\n          </li>\n          <li>\n            Malang\n          </li>\n          <li>\n            Pasuruan\n          </li>\n          <li>\n            Tulungagung\n          </li>\n        </ol>\n      </li>\n\n      <li>\n        Lampung\n      </li>\n      <li>\n        Sumatera Barat\n        <ol type=\"a\">\n          <li>\n            Agam\n          </li>\n          <li>\n            Bukit Tinggi\n          </li>\n          <li>\n            Padang\n          </li>\n          <li>\n            Payahkumbuh\n          </li>\n        </ol>\n      </li>\n\n      <li>\n        Medan\n      </li>\n      <li>\n        Samarinda\n      </li>\n      <li>\n        Pekanbaru\n      </li>\n      <li>\n        Batam\n      </li>\n    </ol>\n    <br>\n    <br>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/landing/setting/outlet/outlet-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/landing/setting/outlet/outlet-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: OutletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageRoutingModule", function() { return OutletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlet.page */ "./src/app/pages/landing/setting/outlet/outlet.page.ts");




const routes = [
    {
        path: '',
        component: _outlet_page__WEBPACK_IMPORTED_MODULE_3__["OutletPage"]
    }
];
let OutletPageRoutingModule = class OutletPageRoutingModule {
};
OutletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutletPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/setting/outlet/outlet.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/landing/setting/outlet/outlet.module.ts ***!
  \***************************************************************/
/*! exports provided: OutletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageModule", function() { return OutletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outlet-routing.module */ "./src/app/pages/landing/setting/outlet/outlet-routing.module.ts");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outlet.page */ "./src/app/pages/landing/setting/outlet/outlet.page.ts");







let OutletPageModule = class OutletPageModule {
};
OutletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletPageRoutingModule"]
        ],
        declarations: [_outlet_page__WEBPACK_IMPORTED_MODULE_6__["OutletPage"]]
    })
], OutletPageModule);



/***/ }),

/***/ "./src/app/pages/landing/setting/outlet/outlet.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/landing/setting/outlet/outlet.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\n.vl {\n  border-left: 6px solid blue;\n  height: 33px;\n}\n\nh2 {\n  padding-left: 10px;\n}\n\np {\n  padding-left: 10px;\n  font-size: 13px;\n}\n\nion-searchbar {\n  --background: #FFF !important;\n  --border-radius: 10px !important;\n  transform: scale(1.1);\n  margin: 0 auto;\n  width: 90%;\n  padding-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL291dGxldC9DOlxcVXNlcnNcXG1hY2FuXFxEb3dubG9hZHNcXHpmaXhfYXBwX2FuZ3VsYXJfaHR0cF9uZXc5XFx6Zml4X2FwcF9hbmd1bGFyX2h0dHBfbmV3OS9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNldHRpbmdcXG91dGxldFxcb3V0bGV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL291dGxldC9vdXRsZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLG1CQUFjO0FDQ2xCOztBREVFO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUNDaEI7O0FERUU7RUFDRSxrQkFBa0I7QUNDdEI7O0FERUU7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtBQ0NyQjs7QURFRTtFQUNFLDZCQUFhO0VBQ2IsZ0NBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtBQ0NyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZy9vdXRsZXQvb3V0bGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnZsIHtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcclxuICAgIGhlaWdodDogMzNweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgcHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICBpb24tc2VhcmNoYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTsgXHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9IiwiaW9uLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnZsIHtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBibHVlO1xuICBoZWlnaHQ6IDMzcHg7XG59XG5cbmgyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5wIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/landing/setting/outlet/outlet.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/landing/setting/outlet/outlet.page.ts ***!
  \*************************************************************/
/*! exports provided: OutletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPage", function() { return OutletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OutletPage = class OutletPage {
    constructor() { }
    ngOnInit() {
    }
};
OutletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outlet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./outlet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/outlet/outlet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./outlet.page.scss */ "./src/app/pages/landing/setting/outlet/outlet.page.scss")).default]
    })
], OutletPage);



/***/ })

}]);
//# sourceMappingURL=setting-outlet-outlet-module-es2015.js.map