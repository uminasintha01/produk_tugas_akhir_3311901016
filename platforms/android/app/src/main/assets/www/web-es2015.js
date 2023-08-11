(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "./node_modules/@capacitor/network/dist/esm/web.js":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/web.js ***!
  \*********************************************************/
/*! exports provided: NetworkWeb, Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkWeb", function() { return NetworkWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");

function translatedConnection() {
    const connection = window.navigator.connection ||
        window.navigator.mozConnection ||
        window.navigator.webkitConnection;
    let result = 'unknown';
    const type = connection ? connection.type || connection.effectiveType : null;
    if (type && typeof type === 'string') {
        switch (type) {
            // possible type values
            case 'bluetooth':
            case 'cellular':
                result = 'cellular';
                break;
            case 'none':
                result = 'none';
                break;
            case 'ethernet':
            case 'wifi':
            case 'wimax':
                result = 'wifi';
                break;
            case 'other':
            case 'unknown':
                result = 'unknown';
                break;
            // possible effectiveType values
            case 'slow-2g':
            case '2g':
            case '3g':
                result = 'cellular';
                break;
            case '4g':
                result = 'wifi';
                break;
            default:
                break;
        }
    }
    return result;
}
class NetworkWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super();
        this.handleOnline = () => {
            const connectionType = translatedConnection();
            const status = {
                connected: true,
                connectionType: connectionType,
            };
            this.notifyListeners('networkStatusChange', status);
        };
        this.handleOffline = () => {
            const status = {
                connected: false,
                connectionType: 'none',
            };
            this.notifyListeners('networkStatusChange', status);
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('online', this.handleOnline);
            window.addEventListener('offline', this.handleOffline);
        }
    }
    async getStatus() {
        if (!window.navigator) {
            throw this.unavailable('Browser does not support the Network Information API');
        }
        const connected = window.navigator.onLine;
        const connectionType = translatedConnection();
        const status = {
            connected,
            connectionType: connected ? connectionType : 'none',
        };
        return status;
    }
}
const Network = new NetworkWeb();

//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=web-es2015.js.map