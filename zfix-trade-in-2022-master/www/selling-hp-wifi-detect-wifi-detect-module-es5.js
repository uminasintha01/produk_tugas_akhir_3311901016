function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-hp-wifi-detect-wifi-detect-module"], {
  /***/
  "./node_modules/@capacitor/core/dist/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/index.js ***!
    \****************************************************/

  /*! exports provided: Capacitor, CapacitorException, CapacitorPlatforms, ExceptionCode, Plugins, WebPlugin, WebView, addPlatform, registerPlugin, registerWebPlugin, setPlatform */

  /***/
  function node_modulesCapacitorCoreDistIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
      return Capacitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapacitorException", function () {
      return CapacitorException;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapacitorPlatforms", function () {
      return CapacitorPlatforms;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExceptionCode", function () {
      return ExceptionCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Plugins", function () {
      return Plugins;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
      return WebPlugin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebView", function () {
      return WebView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addPlatform", function () {
      return addPlatform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerPlugin", function () {
      return registerPlugin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
      return registerWebPlugin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setPlatform", function () {
      return setPlatform;
    });
    /*! Capacitor: https://capacitorjs.com/ - MIT License */


    var createCapacitorPlatforms = function createCapacitorPlatforms(win) {
      var defaultPlatformMap = new Map();
      defaultPlatformMap.set('web', {
        name: 'web'
      });
      var capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: {
          name: 'web'
        },
        platforms: defaultPlatformMap
      };

      var addPlatform = function addPlatform(name, platform) {
        capPlatforms.platforms.set(name, platform);
      };

      var setPlatform = function setPlatform(name) {
        if (capPlatforms.platforms.has(name)) {
          capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
      };

      capPlatforms.addPlatform = addPlatform;
      capPlatforms.setPlatform = setPlatform;
      return capPlatforms;
    };

    var initPlatforms = function initPlatforms(win) {
      return win.CapacitorPlatforms = createCapacitorPlatforms(win);
    };
    /**
     * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
     */


    var CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
    /**
     * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
     */

    var addPlatform = CapacitorPlatforms.addPlatform;
    /**
     * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
     */

    var setPlatform = CapacitorPlatforms.setPlatform;

    var legacyRegisterWebPlugin = function legacyRegisterWebPlugin(cap, webPlugin) {
      var _a;

      var config = webPlugin.config;
      var Plugins = cap.Plugins;

      if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error("Capacitor WebPlugin is using the deprecated \"registerWebPlugin()\" function, but without the config. Please use \"registerPlugin()\" instead to register this web plugin.\"");
      } // TODO: add link to upgrade guide


      console.warn("Capacitor plugin \"".concat(config.name, "\" is using the deprecated \"registerWebPlugin()\" function"));

      if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
      }
    };

    var ExceptionCode;

    (function (ExceptionCode) {
      /**
       * API is not implemented.
       *
       * This usually means the API can't be used because it is not implemented for
       * the current platform.
       */
      ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
      /**
       * API is not available.
       *
       * This means the API can't be used right now because:
       *   - it is currently missing a prerequisite, such as network connectivity
       *   - it requires a particular platform or browser version
       */

      ExceptionCode["Unavailable"] = "UNAVAILABLE";
    })(ExceptionCode || (ExceptionCode = {}));

    var CapacitorException = /*#__PURE__*/function (_Error) {
      _inherits(CapacitorException, _Error);

      var _super = _createSuper(CapacitorException);

      function CapacitorException(message, code) {
        var _this;

        _classCallCheck(this, CapacitorException);

        _this = _super.call(this, message);
        _this.message = message;
        _this.code = code;
        return _this;
      }

      return CapacitorException;
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    var getPlatformId = function getPlatformId(win) {
      var _a, _b;

      if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
      } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
      } else {
        return 'web';
      }
    };

    var createCapacitor = function createCapacitor(win) {
      var _a, _b, _c, _d, _e;

      var capCustomPlatform = win.CapacitorCustomPlatform || null;
      var cap = win.Capacitor || {};
      var Plugins = cap.Plugins = cap.Plugins || {};
      /**
       * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
       */

      var capPlatforms = win.CapacitorPlatforms;

      var defaultGetPlatform = function defaultGetPlatform() {
        return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
      };

      var getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

      var defaultIsNativePlatform = function defaultIsNativePlatform() {
        return getPlatform() !== 'web';
      };

      var isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

      var defaultIsPluginAvailable = function defaultIsPluginAvailable(pluginName) {
        var plugin = registeredPlugins.get(pluginName);

        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
          // JS implementation available for the current platform.
          return true;
        }

        if (getPluginHeader(pluginName)) {
          // Native implementation available.
          return true;
        }

        return false;
      };

      var isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

      var defaultGetPluginHeader = function defaultGetPluginHeader(pluginName) {
        var _a;

        return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(function (h) {
          return h.name === pluginName;
        });
      };

      var getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

      var handleError = function handleError(err) {
        return win.console.error(err);
      };

      var pluginMethodNoop = function pluginMethodNoop(_target, prop, pluginName) {
        return Promise.reject("".concat(pluginName, " does not have an implementation of \"").concat(prop, "\"."));
      };

      var registeredPlugins = new Map();

      var defaultRegisterPlugin = function defaultRegisterPlugin(pluginName) {
        var jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var registeredPlugin = registeredPlugins.get(pluginName);

        if (registeredPlugin) {
          console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
          return registeredPlugin.proxy;
        }

        var platform = getPlatform();
        var pluginHeader = getPluginHeader(pluginName);
        var jsImplementation;

        var loadPluginImplementation = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(!jsImplementation && platform in jsImplementations)) {
                      _context.next = 11;
                      break;
                    }

                    if (!(typeof jsImplementations[platform] === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return jsImplementations[platform]();

                  case 4:
                    _context.t0 = jsImplementation = _context.sent;
                    _context.next = 8;
                    break;

                  case 7:
                    _context.t0 = jsImplementation = jsImplementations[platform];

                  case 8:
                    jsImplementation = _context.t0;
                    _context.next = 20;
                    break;

                  case 11:
                    if (!(capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations)) {
                      _context.next = 20;
                      break;
                    }

                    if (!(typeof jsImplementations['web'] === 'function')) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 15;
                    return jsImplementations['web']();

                  case 15:
                    _context.t1 = jsImplementation = _context.sent;
                    _context.next = 19;
                    break;

                  case 18:
                    _context.t1 = jsImplementation = jsImplementations['web'];

                  case 19:
                    jsImplementation = _context.t1;

                  case 20:
                    return _context.abrupt("return", jsImplementation);

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function loadPluginImplementation() {
            return _ref.apply(this, arguments);
          };
        }();

        var createPluginMethod = function createPluginMethod(impl, prop) {
          var _a, _b;

          if (pluginHeader) {
            var methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(function (m) {
              return prop === m.name;
            });

            if (methodHeader) {
              if (methodHeader.rtype === 'promise') {
                return function (options) {
                  return cap.nativePromise(pluginName, prop.toString(), options);
                };
              } else {
                return function (options, callback) {
                  return cap.nativeCallback(pluginName, prop.toString(), options, callback);
                };
              }
            } else if (impl) {
              return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
            }
          } else if (impl) {
            return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
          } else {
            throw new CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
          }
        };

        var createPluginMethodWrapper = function createPluginMethodWrapper(prop) {
          var remove;

          var wrapper = function wrapper() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var p = loadPluginImplementation().then(function (impl) {
              var fn = createPluginMethod(impl, prop);

              if (fn) {
                var _p = fn.apply(void 0, args);

                remove = _p === null || _p === void 0 ? void 0 : _p.remove;
                return _p;
              } else {
                throw new CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
              }
            });

            if (prop === 'addListener') {
              p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", remove());

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
            }

            return p;
          }; // Some flair ✨


          wrapper.toString = function () {
            return "".concat(prop.toString(), "() { [capacitor code] }");
          };

          Object.defineProperty(wrapper, 'name', {
            value: prop,
            writable: false,
            configurable: false
          });
          return wrapper;
        };

        var addListener = createPluginMethodWrapper('addListener');
        var removeListener = createPluginMethodWrapper('removeListener');

        var addListenerNative = function addListenerNative(eventName, callback) {
          var call = addListener({
            eventName: eventName
          }, callback);

          var remove = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var callbackId;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return call;

                    case 2:
                      callbackId = _context3.sent;
                      removeListener({
                        eventName: eventName,
                        callbackId: callbackId
                      }, callback);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            return function remove() {
              return _ref3.apply(this, arguments);
            };
          }();

          var p = new Promise(function (resolve) {
            return call.then(function () {
              return resolve({
                remove: remove
              });
            });
          });
          p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.warn("Using addListener() without 'await' is deprecated.");
                    _context4.next = 3;
                    return remove();

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
          return p;
        };

        var proxy = new Proxy({}, {
          get: function get(_, prop) {
            switch (prop) {
              // https://github.com/facebook/react/issues/20030
              case '$$typeof':
                return undefined;

              case 'toJSON':
                return function () {
                  return {};
                };

              case 'addListener':
                return pluginHeader ? addListenerNative : addListener;

              case 'removeListener':
                return removeListener;

              default:
                return createPluginMethodWrapper(prop);
            }
          }
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
          name: pluginName,
          proxy: proxy,
          platforms: new Set([].concat(_toConsumableArray(Object.keys(jsImplementations)), _toConsumableArray(pluginHeader ? [platform] : [])))
        });
        return proxy;
      };

      var registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

      if (!cap.convertFileSrc) {
        cap.convertFileSrc = function (filePath) {
          return filePath;
        };
      }

      cap.getPlatform = getPlatform;
      cap.handleError = handleError;
      cap.isNativePlatform = isNativePlatform;
      cap.isPluginAvailable = isPluginAvailable;
      cap.pluginMethodNoop = pluginMethodNoop;
      cap.registerPlugin = registerPlugin;
      cap.Exception = CapacitorException;
      cap.DEBUG = !!cap.DEBUG;
      cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

      cap.platform = cap.getPlatform();
      cap.isNative = cap.isNativePlatform();
      return cap;
    };

    var initCapacitorGlobal = function initCapacitorGlobal(win) {
      return win.Capacitor = createCapacitor(win);
    };

    var Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
    var registerPlugin = Capacitor.registerPlugin;
    /**
     * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
     * Capacitor v3 plugins should import the plugin directly. This "Plugins"
     * export is deprecated in v3, and will be removed in v4.
     */

    var Plugins = Capacitor.Plugins;
    /**
     * Provided for backwards compatibility. Use the registerPlugin() API
     * instead, and provide the web plugin as the "web" implmenetation.
     * For example
     *
     * export const Example = registerPlugin('Example', {
     *   web: () => import('./web').then(m => new m.Example())
     * })
     *
     * @deprecated Deprecated in v3, will be removed from v4.
     */

    var registerWebPlugin = function registerWebPlugin(plugin) {
      return legacyRegisterWebPlugin(Capacitor, plugin);
    };
    /**
     * Base class web plugins should extend.
     */


    var WebPlugin = /*#__PURE__*/function () {
      function WebPlugin(config) {
        _classCallCheck(this, WebPlugin);

        this.listeners = {};
        this.windowListeners = {};

        if (config) {
          // TODO: add link to upgrade guide
          console.warn("Capacitor WebPlugin \"".concat(config.name, "\" config object was deprecated in v3 and will be removed in v4."));
          this.config = config;
        }
      }

      _createClass(WebPlugin, [{
        key: "addListener",
        value: function addListener(eventName, listenerFunc) {
          var _this2 = this;

          var listeners = this.listeners[eventName];

          if (!listeners) {
            this.listeners[eventName] = [];
          }

          this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
          // go ahead and add it

          var windowListener = this.windowListeners[eventName];

          if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
          }

          var remove = /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", _this2.removeListener(eventName, listenerFunc));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            return function remove() {
              return _ref5.apply(this, arguments);
            };
          }();

          var p = Promise.resolve({
            remove: remove
          });
          Object.defineProperty(p, 'remove', {
            value: function () {
              var _value = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        console.warn("Using addListener() without 'await' is deprecated.");
                        _context6.next = 3;
                        return remove();

                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              function value() {
                return _value.apply(this, arguments);
              }

              return value;
            }()
          });
          return p;
        }
      }, {
        key: "removeAllListeners",
        value: function () {
          var _removeAllListeners = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var listener;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.listeners = {};

                    for (listener in this.windowListeners) {
                      this.removeWindowListener(this.windowListeners[listener]);
                    }

                    this.windowListeners = {};

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function removeAllListeners() {
            return _removeAllListeners.apply(this, arguments);
          }

          return removeAllListeners;
        }()
      }, {
        key: "notifyListeners",
        value: function notifyListeners(eventName, data) {
          var listeners = this.listeners[eventName];

          if (listeners) {
            listeners.forEach(function (listener) {
              return listener(data);
            });
          }
        }
      }, {
        key: "hasListeners",
        value: function hasListeners(eventName) {
          return !!this.listeners[eventName].length;
        }
      }, {
        key: "registerWindowListener",
        value: function registerWindowListener(windowEventName, pluginEventName) {
          var _this3 = this;

          this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function handler(event) {
              _this3.notifyListeners(pluginEventName, event);
            }
          };
        }
      }, {
        key: "unimplemented",
        value: function unimplemented() {
          var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
          return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
        }
      }, {
        key: "unavailable",
        value: function unavailable() {
          var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
          return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
        }
      }, {
        key: "removeListener",
        value: function () {
          var _removeListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(eventName, listenerFunc) {
            var listeners, index;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    listeners = this.listeners[eventName];

                    if (listeners) {
                      _context8.next = 3;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 3:
                    index = listeners.indexOf(listenerFunc);
                    this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
                    // remove the window listener

                    if (!this.listeners[eventName].length) {
                      this.removeWindowListener(this.windowListeners[eventName]);
                    }

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          function removeListener(_x, _x2) {
            return _removeListener.apply(this, arguments);
          }

          return removeListener;
        }()
      }, {
        key: "addWindowListener",
        value: function addWindowListener(handle) {
          window.addEventListener(handle.windowEventName, handle.handler);
          handle.registered = true;
        }
      }, {
        key: "removeWindowListener",
        value: function removeWindowListener(handle) {
          if (!handle) {
            return;
          }

          window.removeEventListener(handle.windowEventName, handle.handler);
          handle.registered = false;
        }
      }]);

      return WebPlugin;
    }();

    var WebView = /*#__PURE__*/registerPlugin('WebView'); //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/network/dist/esm/definitions.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@capacitor/network/dist/esm/definitions.js ***!
    \*****************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesCapacitorNetworkDistEsmDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/network/dist/esm/index.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@capacitor/network/dist/esm/index.js ***!
    \***********************************************************/

  /*! exports provided: Network */

  /***/
  function node_modulesCapacitorNetworkDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return Network;
    });
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");
    /* harmony import */


    var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./definitions */
    "./node_modules/@capacitor/network/dist/esm/definitions.js");
    /* empty/unused harmony star reexport */


    var Network = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Network', {
      web: function web() {
        return __webpack_require__.e(
        /*! import() | web */
        "web").then(__webpack_require__.bind(null,
        /*! ./web */
        "./node_modules/@capacitor/network/dist/esm/web.js")).then(function (m) {
          return new m.NetworkWeb();
        });
      }
    }); //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingHpWifiDetectWifiDetectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content  style=\"--background: #ccc url('../../../../assets/images/phone/camera/BG.png') no-repeat center center / cover;\">\n  <div class=\"center\">\n    <img src=\"../../../../assets/images/phone/camera/logo.png\" alt=\"\" style=\"margin-top: 23%;\">\n    <div class=\"middle\">\n      <img src=\"../../../../assets/images/phone/wifi+finger/wifi.png\" alt=\"\">\n        <div class=\"title\">Silahkah Tes Internet Anda</div>\n        <div class=\"instruksi\">Instruksi</div>\n        <p class=\"f-5\" style=\"margin-top: 20px;\">- Pastikan Anda Terhubung Dengan WIFI</p>\n        <button class=\"button round\" icon-only (click)=\"getNetworkStatus()\" style=\"margin-top: 10%;\">\n          Tap untuk Memulai\n        </button>\n        <div (click)=\"skip()\" style=\"margin-right: 30%; margin-left: 30%; margin-top: 25%;\">\n           <p class=\"skip\">Lewati <a style=\"margin-left: 10px;\">>></a></p> \n           <hr>\n        </div>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: WifiDetectPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingHpWifiDetectWifiDetectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WifiDetectPageRoutingModule", function () {
      return WifiDetectPageRoutingModule;
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


    var _wifi_detect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wifi-detect.page */
    "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.ts");

    var routes = [{
      path: '',
      component: _wifi_detect_page__WEBPACK_IMPORTED_MODULE_3__["WifiDetectPage"]
    }];

    var WifiDetectPageRoutingModule = function WifiDetectPageRoutingModule() {
      _classCallCheck(this, WifiDetectPageRoutingModule);
    };

    WifiDetectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WifiDetectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.module.ts ***!
    \****************************************************************************/

  /*! exports provided: WifiDetectPageModule */

  /***/
  function srcAppPagesLandingSellingHpWifiDetectWifiDetectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WifiDetectPageModule", function () {
      return WifiDetectPageModule;
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


    var _wifi_detect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wifi-detect-routing.module */
    "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect-routing.module.ts");
    /* harmony import */


    var _wifi_detect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wifi-detect.page */
    "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.ts");

    var WifiDetectPageModule = function WifiDetectPageModule() {
      _classCallCheck(this, WifiDetectPageModule);
    };

    WifiDetectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wifi_detect_routing_module__WEBPACK_IMPORTED_MODULE_5__["WifiDetectPageRoutingModule"]],
      declarations: [_wifi_detect_page__WEBPACK_IMPORTED_MODULE_6__["WifiDetectPage"]]
    })], WifiDetectPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingHpWifiDetectWifiDetectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.f-5 {\n  font-size: 15px;\n  margin: 0;\n  color: white;\n}\n\n.skip {\n  font-size: 17px;\n  color: white;\n}\n\n.title {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: white;\n  margin-top: 15%;\n  margin-bottom: 0px;\n}\n\n.instruksi {\n  font-size: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  color: lightgreen;\n  margin-top: 7%;\n  margin-bottom: 0px;\n}\n\n.middle {\n  margin-top: 20%;\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  background-color: white;\n  border-radius: 99px;\n  margin: 0;\n}\n\n.button {\n  border: none;\n  color: #3053A4;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.round {\n  border-radius: 12px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL3dpZmktZGV0ZWN0L0M6XFxVc2Vyc1xcYXJkaW1cXERlc2t0b3BcXGhhbXBpciBzZWxlc2FpXFxOZXcgZm9sZGVyXFxteVRyYWRlX1YzLjAvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxzZWxsaW5nLWhwXFx3aWZpLWRldGVjdFxcd2lmaS1kZXRlY3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NlbGxpbmctaHAvd2lmaS1kZXRlY3Qvd2lmaS1kZXRlY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQVEsbUJBQUE7QUNFUjs7QURBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERFO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNJRjs7QURGRTtFQUNBLFdBQUE7QUNLRjs7QURGRTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNLRjs7QURGRTtFQUNBLFdBQUE7QUNLRjs7QURGRTtFQUNBLGVBQUE7QUNLRjs7QURGRTtFQUNBLGdCQUFBO0FDS0Y7O0FERkU7RUFDQSxVQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLFVBQUE7QUNLRjs7QURGRTtFQUNBLGdCQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsVUFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLGdCQUFBO0FDS0Y7O0FERkU7RUFDQSxXQUFBO0FDS0Y7O0FERkU7RUFDQSxXQUFBO0FDS0Y7O0FERkU7RUFDQSxlQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsVUFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLGdCQUFBO0FDS0Y7O0FERkU7RUFDQSxVQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsZ0JBQUE7QUNLRjs7QURGRTtFQUNBLFVBQUE7QUNLRjs7QURGRTtFQUNBLGdCQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0EsV0FBQTtBQ0tGOztBREZFO0VBQ0EsVUFBQTtBQ0tGOztBREZFO0VBQ0EsY0FBQTtBQ0tGOztBREZFO0VBQ0EsZUFBQTtBQ0tGOztBREZFO0VBQ0EsU0FBQTtBQ0tGOztBREZFO0VBQ0EsZUFBQTtBQ0tGOztBREZFO0VBQ0EsZUFBQTtBQ0tGOztBREZFO0VBQ0EsU0FBQTtBQ0tGOztBREZFO0VBQ0EsZUFBQTtBQ0tGOztBREZFO0VBQ0EsZUFBQTtBQ0tGOztBREZFO0VBQ0EsU0FBQTtBQ0tGOztBREZFO0VBQ0EsZUFBQTtBQ0tGOztBREZFO0VBQ0EsZUFBQTtBQ0tGOztBREZFO0VBQ0EsVUFBQTtBQ0tGOztBREZFO0VBQ0EsZUFBQTtBQ0tGOztBREZFO0VBQ0EscUJBQUE7QUNLRjs7QURGRTtFQUNBLHNCQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0Esc0JBQUE7QUNLRjs7QURGRTtFQUNBLHNCQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0Esc0JBQUE7QUNLRjs7QURGRTtFQUNBLHNCQUFBO0FDS0Y7O0FERkU7RUFDQSxnQkFBQTtBQ0tGOztBREZFO0VBQ0Esc0JBQUE7QUNLRjs7QURGRTtFQUNBLHNCQUFBO0FDS0Y7O0FERkU7RUFDQSxpQkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWhwL3dpZmktZGV0ZWN0L3dpZmktZGV0ZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmYtNSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5za2lwIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmluc3RydWtzaSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBsaWdodGdyZWVuO1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7IFxyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG5ocntcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMzA1M0E0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucm91bmQge2JvcmRlci1yYWRpdXM6IDEycHg7fVxyXG5cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICAucm93OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMSwgLmNvbC1zbS0xLCAuY29sLW1kLTEsIC5jb2wtbGctMSwgLmNvbC14cy0yLCAuY29sLXNtLTIsIC5jb2wtbWQtMiwgLmNvbC1sZy0yLCAuY29sLXhzLTMsIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLWxnLTMsIC5jb2wteHMtNCwgLmNvbC1zbS00LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC14cy01LCAuY29sLXNtLTUsIC5jb2wtbWQtNSwgLmNvbC1sZy01LCAuY29sLXhzLTYsIC5jb2wtc20tNiwgLmNvbC1tZC02LCAuY29sLWxnLTYsIC5jb2wteHMtNywgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wtbGctNywgLmNvbC14cy04LCAuY29sLXNtLTgsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLXhzLTksIC5jb2wtc20tOSwgLmNvbC1tZC05LCAuY29sLWxnLTksIC5jb2wteHMtMTAsIC5jb2wtc20tMTAsIC5jb2wtbWQtMTAsIC5jb2wtbGctMTAsIC5jb2wteHMtMTEsIC5jb2wtc20tMTEsIC5jb2wtbWQtMTEsIC5jb2wtbGctMTEsIC5jb2wteHMtMTIsIC5jb2wtc20tMTIsIC5jb2wtbWQtMTIsIC5jb2wtbGctMTIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMSB7XHJcbiAgd2lkdGg6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0yIHtcclxuICB3aWR0aDogMTYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0zIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy00IHtcclxuICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy01IHtcclxuICB3aWR0aDogNDEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy02IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy03IHtcclxuICB3aWR0aDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy04IHtcclxuICB3aWR0aDogNjYuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy05IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMCB7XHJcbiAgd2lkdGg6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTEge1xyXG4gIHdpZHRoOiA5MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0wIHtcclxuICByaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xIHtcclxuICByaWdodDogOC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMiB7XHJcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0zIHtcclxuICByaWdodDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTQge1xyXG4gIHJpZ2h0OiAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNSB7XHJcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC02IHtcclxuICByaWdodDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTcge1xyXG4gIHJpZ2h0OiA1OC4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtOCB7XHJcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC05IHtcclxuICByaWdodDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTEwIHtcclxuICByaWdodDogODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTExIHtcclxuICByaWdodDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTEyIHtcclxuICByaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0wIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEge1xyXG4gIGxlZnQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTIge1xyXG4gIGxlZnQ6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0zIHtcclxuICBsZWZ0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNCB7XHJcbiAgbGVmdDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTUge1xyXG4gIGxlZnQ6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC02IHtcclxuICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNyB7XHJcbiAgbGVmdDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTgge1xyXG4gIGxlZnQ6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC05IHtcclxuICBsZWZ0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTAge1xyXG4gIGxlZnQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMSB7XHJcbiAgbGVmdDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEyIHtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTMge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC00IHtcclxuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTYge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC03IHtcclxuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtOCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTkge1xyXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTExIHtcclxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIH0iLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZi01IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNraXAge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pbnN0cnVrc2kge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XG4gIG1hcmdpbi10b3A6IDclO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5taWRkbGUge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnJvdzpiZWZvcmUsIC5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC14cy0xIHtcbiAgd2lkdGg6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLTIge1xuICB3aWR0aDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTUge1xuICB3aWR0aDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLTgge1xuICB3aWR0aDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLXhzLTEwIHtcbiAgd2lkdGg6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy0xMSB7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbC14cy1wdWxsLTAge1xuICByaWdodDogYXV0bztcbn1cblxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0yIHtcbiAgcmlnaHQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuXG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC01IHtcbiAgcmlnaHQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuXG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC04IHtcbiAgcmlnaHQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuXG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1bGwtMTEge1xuICByaWdodDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cblxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.ts ***!
    \**************************************************************************/

  /*! exports provided: WifiDetectPage */

  /***/
  function srcAppPagesLandingSellingHpWifiDetectWifiDetectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WifiDetectPage", function () {
      return WifiDetectPage;
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


    var _capacitor_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/network */
    "./node_modules/@capacitor/network/dist/esm/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var WifiDetectPage = /*#__PURE__*/function () {
      function WifiDetectPage(change, activatedRoute, alertController, navCtrl) {
        _classCallCheck(this, WifiDetectPage);

        this.change = change;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.status = "";
        this.connectionType = "";
        this.type = "";
      }

      _createClass(WifiDetectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.type = navigator.connection.effectiveType; // this.getNetworkStatus();

          this.activatedRoute.queryParams.subscribe(function (params) {
            _this4.brand = params["brand"];
            _this4.ram = params["ram"];
            _this4.storages = params["storages"];
            _this4.lokasi_trade = params["lokasi_trade"];
            _this4.screenHasProblem = params["screenHasProblem"];
            _this4.cameraHasProblem = params["cameraHasProblem"];
            console.log(_this4.storages);
            console.log(_this4.ram);
            console.log(_this4.brand);
            console.log("Lokasi Trade" + _this4.lokasi_trade);
            console.log(_this4.screenHasProblem);
            console.log(_this4.cameraHasProblem);
          });
        }
      }, {
        key: "getNetworkStatus",
        value: function getNetworkStatus() {
          var _this5 = this;

          _capacitor_network__WEBPACK_IMPORTED_MODULE_2__["Network"].getStatus().then(function (status) {
            _this5.status = status.connected ? "connected" : "disconnected";
            _this5.connectionType = status.connectionType;

            _this5.onNetworkChanged();

            if (_this5.status == "connected") {
              _this5.presentAlertConfirm();

              console.log("bisa nih!");
            }

            console.log(_this5.status);
          });
        }
      }, {
        key: "onNetworkChanged",
        value: function onNetworkChanged() {
          var _this6 = this;

          _capacitor_network__WEBPACK_IMPORTED_MODULE_2__["Network"].addListener("networkStatusChange", function (status) {
            _this6.status = status.connected ? "connected" : "disconnected";
            _this6.connectionType = status.connectionType;

            _this6.change.detectChanges();
          });
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Koneksi telah berhasil. Lanjut ke tahap selanjutnya?.',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: function handler() {}
                      }, {
                        text: 'Iya',
                        handler: function handler() {
                          var navigationExtras = {
                            queryParams: {
                              brand: _this7.brand,
                              ram: _this7.ram,
                              storages: _this7.storages,
                              lokasi_trade: _this7.lokasi_trade,
                              screenHasProblem: _this7.screenHasProblem,
                              cameraHasProblem: _this7.cameraHasProblem,
                              wifiHasProblem: 0
                            }
                          };

                          _this7.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration"], navigationExtras);
                        }
                      }]
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "skip",
        value: function skip() {
          this.presentSkip();
        }
      }, {
        key: "presentSkip",
        value: function presentSkip() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this8 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Wifi anda memiliki masalah!.',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Coba Lagi',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Continue');
                        }
                      }, {
                        text: 'Lewati',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                            var _this9 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                              while (1) {
                                switch (_context10.prev = _context10.next) {
                                  case 0:
                                    _context10.next = 2;
                                    return this.alertController.create({
                                      header: 'ZFix',
                                      message: 'Jika anda lewati tahap ini, anda memverifikasi bahwa wifi anda memiliki masalah.',
                                      backdropDismiss: false,
                                      buttons: [{
                                        text: 'Lanjut',
                                        role: 'cancel',
                                        handler: function handler() {// console.log('Continue');
                                        }
                                      }, {
                                        text: 'Tetap lewati',
                                        handler: function handler() {
                                          var navigationExtras = {
                                            queryParams: {
                                              brand: _this9.brand,
                                              ram: _this9.ram,
                                              storages: _this9.storages,
                                              lokasi_trade: _this9.lokasi_trade,
                                              screenHasProblem: _this9.screenHasProblem,
                                              cameraHasProblem: _this9.cameraHasProblem,
                                              wifiHasProblem: 1
                                            }
                                          };

                                          _this9.navCtrl.navigateForward(["/landing/selling-phone/screen-testing/camera/wifi-detect/vibration"], navigationExtras);
                                        }
                                      }]
                                    });

                                  case 2:
                                    alert = _context10.sent;
                                    _context10.next = 5;
                                    return alert.present();

                                  case 5:
                                  case "end":
                                    return _context10.stop();
                                }
                              }
                            }, _callee10, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context11.sent;
                    _context11.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return WifiDetectPage;
    }();

    WifiDetectPage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    WifiDetectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wifi-detect',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./wifi-detect.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./wifi-detect.page.scss */
      "./src/app/pages/landing/selling-hp/wifi-detect/wifi-detect.page.scss"))["default"]]
    })], WifiDetectPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-hp-wifi-detect-wifi-detect-module-es5.js.map