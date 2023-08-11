(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \n<!-- <ion-header class=\"header\">\n  <ion-toolbar>\n    \n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  \n  <!-- <div class=\"container bg-white\"> -->\n    <img class=\"bg-image\" src=\"../../../../assets/images/home/bg_home.png\" alt=\"\">\n    <img class=\"title-image\" src=\"../../../../assets/images/home/zfix.png\" alt=\"\">\n    <ion-buttons style=\"margin-top: 50px; margin-left: 10px;\">\n      <!-- <ion-button (click)=\"logout()\">\n        <ion-icon  class=\"icon-b\" style=\"color: #284483; font-size: 30px;\" name=\"log-out\"></ion-icon>\n      </ion-button> -->\n\n      <ion-button id=\"notification-button\" (click)=\"popclick($event)\" style=\"margin-left: 85%;\">\n        <ion-icon name=\"notifications\" style=\" color: #284483; font-size: 100px;\"></ion-icon>\n        <ion-badge *ngIf = \"count_notification != 0\" id=\"notifications-badge\" style=\" font-size: 5px;\">{{count_notification}}</ion-badge> \n      </ion-button>\n\n    </ion-buttons>\n    <div class=\"div-h1\">\n      <h1>Your Trade In</h1>\n    </div>\n    <div class=\"middle\">\n      <ion-grid>\n        <ion-row>\n          <!-- <ion-col col-6 (click)=\"goTo(1)\">\n            <ion-card >\n              <img src=\"../../../../assets/images/home/mobile/mobile_trade.png\" alt=\"\">\n              <ion-icon class=\"icon-a\" name=\"phone-portrait-outline\"></ion-icon>\n              <h2>Scan Handphone<br>/Tablet </h2>  \n            </ion-card>\n          </ion-col> -->\n          <ion-col col-6 (click)=\"goTo(2)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/television/tv_trade.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"tv-sharp\"></ion-icon>\n              <h2>Scan Television </h2> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6  (click)=\"goTo(3)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/laptop/laptop_trade.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\n              <h2>Scan Laptop</h2> -->\n            </ion-card>\n          </ion-col>\n          <ion-col col-6 (click)=\"goTo(4)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/ps/ps_trade.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\n              <h2>Scan PlayStation</h2> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6  (click)=\"goTo(5)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/kulkas/kulkas.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"laptop-outline\"></ion-icon>\n              <h2>Scan Laptop</h2> -->\n            </ion-card>\n          </ion-col>\n          <ion-col col-6 (click)=\"goTo(6)\">\n            <ion-card>\n              <img src=\"../../../../assets/images/home/mesin_cuci/mesin_cuci.png\" alt=\"\">\n              <!-- <ion-icon  class=\"icon-a\" name=\"game-controller-outline\"></ion-icon>\n              <h2>Scan PlayStation</h2> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n  \n      </ion-grid>\n    </div>\n\n  <!-- </div> -->\n    \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/type/type-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/landing/type/type-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePageRoutingModule", function() { return TypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type.page */ "./src/app/pages/landing/type/type.page.ts");




const routes = [
    {
        path: '',
        component: _type_page__WEBPACK_IMPORTED_MODULE_3__["TypePage"]
    }
];
let TypePageRoutingModule = class TypePageRoutingModule {
};
TypePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TypePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/type/type.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/type/type.module.ts ***!
  \***************************************************/
/*! exports provided: TypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePageModule", function() { return TypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type-routing.module */ "./src/app/pages/landing/type/type-routing.module.ts");
/* harmony import */ var _type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./type.page */ "./src/app/pages/landing/type/type.page.ts");







let TypePageModule = class TypePageModule {
};
TypePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _type_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypePageRoutingModule"]
        ],
        declarations: [_type_page__WEBPACK_IMPORTED_MODULE_6__["TypePage"]]
    })
], TypePageModule);



/***/ }),

/***/ "./src/app/pages/landing/type/type.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/type/type.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header.header {\n  --ion-background-color: transparent;\n  border: none;\n}\n\nion-header.header .icon-b {\n  color: #34549f;\n}\n\n.middle {\n  margin-top: 45%;\n  margin-left: 4%;\n  margin-right: 4%;\n}\n\n.title-image {\n  width: 35vw;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n\n.container {\n  height: auto;\n  width: auto;\n}\n\n.container.bg-white {\n  background-color: white;\n}\n\n.bg-image {\n  width: 100vw;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n\n.bg-image.bottom {\n  bottom: 0px;\n}\n\nh1 {\n  margin-bottom: -10px;\n  margin-left: 20px;\n  color: #34549f;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  font-size: 15pt;\n}\n\n.div-h1 {\n  margin: 0;\n  position: absolute;\n  top: 32%;\n  left: 16%;\n  transform: translate(-50%, -50%);\n}\n\nion-card {\n  text-align: center;\n  width: 80%;\n  height: 90%;\n  background: transparent;\n  text-transform: none;\n  box-shadow: #52657A;\n}\n\nion-card .icon-a {\n  padding: 10px;\n  font-size: 4em;\n  color: #0099ff;\n}\n\nion-card h2 {\n  color: #424348;\n}\n\n.shape {\n  position: relative;\n  bottom: -10%;\n}\n\n.shape img {\n  width: 100%;\n  height: auto;\n}\n\n.mb-2 {\n  margin-bottom: 20px;\n}\n\n#notification-button {\n  position: relative;\n  width: 42px;\n  top: 1px;\n  right: 1px;\n  overflow: visible !important;\n}\n\n#notifications-badge {\n  background: red;\n  position: absolute;\n  top: 15px;\n  right: -1px;\n  border-radius: 200%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL0M6XFxVc2Vyc1xcaHBcXERvd25sb2Fkc1xcemZpeC10cmFkZS1pbi0yMDIyLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHR5cGVcXHR5cGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3R5cGUvdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBdUI7RUFDdkIsWUFBWTtBQ0NkOztBREhBO0VBSUksY0FBYztBQ0dsQjs7QURHQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FDQWxCOztBREdBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQ0FwQjs7QURJQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FDRGI7O0FEREE7RUFJSSx1QkFBdUI7QUNDM0I7O0FER0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7QUNBWDs7QUROQTtFQVNFLFFBQVM7RUFDVCw0QkFBNEI7QUNDOUI7O0FEWEE7RUFlRSxXQUFXO0FDQWI7O0FES0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw0REFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGVBQWU7QUNGakI7O0FES0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBRVQsZ0NBQWdDO0FDRmxDOztBREtBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUNGckI7O0FESkE7RUFTSSxhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7QUNEbEI7O0FEVkE7RUFlSSxjQUFzQjtBQ0QxQjs7QURLQztFQUNDLGtCQUFrQjtFQUNsQixZQUFZO0FDRmQ7O0FEQUM7RUFJSyxXQUFXO0VBQ1gsWUFBWTtBQ0FsQjs7QURJQTtFQUNBLG1CQUFtQjtBQ0RuQjs7QURJQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBTztFQUNQLFVBQVU7RUFDViw0QkFBMkI7QUNEN0I7O0FES0E7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0FDSHJCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy90eXBlL3R5cGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlci5oZWFkZXJ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIC5pY29uLWJ7XG4gICAgY29sb3I6ICMzNDU0OWY7XG4gIH1cblxufVxuXG5cbi5taWRkbGUge1xuICBtYXJnaW4tdG9wOiA0NSU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbn1cblxuLnRpdGxlLWltYWdle1xuICB3aWR0aDogMzV2dztcbiAgdG9wOiAyMiU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgJi5iZy13aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmJnLWltYWdlIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcblxuICAmLnRvcCB7XG4gIHRvcDogIDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcblxuICB9XG5cbiAgJi5ib3R0b20ge1xuICBib3R0b206IDBweDtcblxuICB9XG59XG5cbmgxe1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjMzQ1NDlmO1xuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmRpdi1oMXtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzIlO1xuICBsZWZ0OiAxNiU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmlvbi1jYXJke1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJveC1zaGFkb3c6ICM1MjY1N0E7XG5cbiAgLmljb24tYXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGNvbG9yOiAjMDA5OWZmO1xuICB9XG4gIGgye1xuICAgICAgICAgICAgXG4gICAgY29sb3I6IHJnYig2NiwgNjcsIDcyKTtcbiAgfSAgXG4gfVxuXG4gLnNoYXBle1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTEwJTtcbiAgaW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgfVxuXG4ubWItMntcbm1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNub3RpZmljYXRpb24tYnV0dG9uIHsgICAgICAgICAgICBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDJweDtcbiAgdG9wOjFweDtcbiAgcmlnaHQ6IDFweDtcbiAgb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xufVxuXG5cbiNub3RpZmljYXRpb25zLWJhZGdlIHtcbiAgLy8gY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwMCU7XG59IiwiaW9uLWhlYWRlci5oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24taGVhZGVyLmhlYWRlciAuaWNvbi1iIHtcbiAgY29sb3I6ICMzNDU0OWY7XG59XG5cbi5taWRkbGUge1xuICBtYXJnaW4tdG9wOiA0NSU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbn1cblxuLnRpdGxlLWltYWdlIHtcbiAgd2lkdGg6IDM1dnc7XG4gIHRvcDogMjIlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uY29udGFpbmVyLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iZy1pbWFnZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG5cbi5iZy1pbWFnZS50b3Age1xuICB0b3A6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbn1cblxuLmJnLWltYWdlLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6ICMzNDU0OWY7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbn1cblxuLmRpdi1oMSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMyJTtcbiAgbGVmdDogMTYlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5pb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogIzUyNjU3QTtcbn1cblxuaW9uLWNhcmQgLmljb24tYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBjb2xvcjogIzAwOTlmZjtcbn1cblxuaW9uLWNhcmQgaDIge1xuICBjb2xvcjogIzQyNDM0ODtcbn1cblxuLnNoYXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC0xMCU7XG59XG5cbi5zaGFwZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNub3RpZmljYXRpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDJweDtcbiAgdG9wOiAxcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbiNub3RpZmljYXRpb25zLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/type/type.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/type/type.page.ts ***!
  \*************************************************/
/*! exports provided: TypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePage", function() { return TypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/user-api.service */ "./src/app/services/api/user-api.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/landing/popover/popover.component */ "./src/app/pages/landing/popover/popover.component.ts");
/* harmony import */ var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/api/selling-api.service */ "./src/app/services/api/selling-api.service.ts");











let TypePage = class TypePage {
    constructor(authService, storage, userApiService, router, faio, popoverController, sellingApiService) {
        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.router = router;
        this.faio = faio;
        this.popoverController = popoverController;
        this.sellingApiService = sellingApiService;
        this.brand = [
            {
                'id': 1,
                'name': 'Handphone'
            },
            {
                'id': 2,
                'name': 'Television'
            },
            {
                'id': 3,
                'name': 'Laptop'
            },
            {
                'id': 4,
                'name': 'Play Station'
            },
            {
                'id': 5,
                'name': 'Kulkas'
            },
            {
                'id': 4,
                'name': 'Mesin Cuci'
            },
        ];
    }
    ngOnInit() {
        setInterval(() => {
            this.Count();
        }, 3000);
        //   cordova.plugins.AppReview.requestReview().catch(function() {
        //     return cordova.plugins.AppReview.openStoreScreen();
        //  });
    }
    goTo(id) {
        if (id == 1) {
            this.router.navigate(['landing', 'selling-phone']);
            // alert("on progress")
        }
        else if (id == 2) {
            this.router.navigate(['landing', 'tv-brand']);
        }
        else if (id == 3) {
            this.router.navigate(['landing', 'laptop-brand']);
        }
        else if (id == 4) {
            this.router.navigate(['landing', 'ps-brand']);
        }
        else if (id == 5) {
            this.router.navigate(['landing', 'kulkas-brand']);
        }
        else if (id == 6) {
            this.router.navigate(['landing', 'mesin-cuci-brand']);
        }
    }
    Count() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["tokenKey"]).then((token) => {
            this.sellingApiService.getNotification(token).subscribe((response) => {
                this.count_notification = response.count;
                console.log(this.count_notification);
            }, (err) => {
                // this.utilsService.showToast("There is a problem.");
            });
        });
    }
    popclick(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_pages_landing_popover_popover_component__WEBPACK_IMPORTED_MODULE_9__["PopoverComponent"],
                event
            });
            return yield popover.present();
        });
    }
    logout() {
        this.authService.logout();
    }
};
TypePage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__["UserApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_7__["FingerprintAIO"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_10__["SellingApiService"] }
];
TypePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./type.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/type/type.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./type.page.scss */ "./src/app/pages/landing/type/type.page.scss")).default]
    })
], TypePage);



/***/ })

}]);
//# sourceMappingURL=type-type-module-es2015.js.map