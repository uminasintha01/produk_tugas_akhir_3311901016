function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"], {
  /***/
  "./node_modules/@capacitor/network/dist/esm/web.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@capacitor/network/dist/esm/web.js ***!
    \*********************************************************/

  /*! exports provided: NetworkWeb, Network */

  /***/
  function node_modulesCapacitorNetworkDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkWeb", function () {
      return NetworkWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return Network;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");

    function translatedConnection() {
      var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
      var result = 'unknown';
      var type = connection ? connection.type || connection.effectiveType : null;

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

    var NetworkWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
      _inherits(NetworkWeb, _capacitor_core__WEBP);

      var _super = _createSuper(NetworkWeb);

      function NetworkWeb() {
        var _this;

        _classCallCheck(this, NetworkWeb);

        _this = _super.call(this);

        _this.handleOnline = function () {
          var connectionType = translatedConnection();
          var status = {
            connected: true,
            connectionType: connectionType
          };

          _this.notifyListeners('networkStatusChange', status);
        };

        _this.handleOffline = function () {
          var status = {
            connected: false,
            connectionType: 'none'
          };

          _this.notifyListeners('networkStatusChange', status);
        };

        if (typeof window !== 'undefined') {
          window.addEventListener('online', _this.handleOnline);
          window.addEventListener('offline', _this.handleOffline);
        }

        return _this;
      }

      _createClass(NetworkWeb, [{
        key: "getStatus",
        value: function () {
          var _getStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var connected, connectionType, status;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (window.navigator) {
                      _context.next = 2;
                      break;
                    }

                    throw this.unavailable('Browser does not support the Network Information API');

                  case 2:
                    connected = window.navigator.onLine;
                    connectionType = translatedConnection();
                    status = {
                      connected: connected,
                      connectionType: connected ? connectionType : 'none'
                    };
                    return _context.abrupt("return", status);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getStatus() {
            return _getStatus.apply(this, arguments);
          }

          return getStatus;
        }()
      }]);

      return NetworkWeb;
    }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

    var Network = new NetworkWeb(); //# sourceMappingURL=web.js.map

    /***/
  }
}]);
//# sourceMappingURL=web-es5.js.map