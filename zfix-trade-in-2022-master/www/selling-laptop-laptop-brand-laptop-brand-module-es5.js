function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selling-laptop-laptop-brand-laptop-brand-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"--background: #ccc url('../../../../assets/images/default/background.png') no-repeat center center / cover;\">\n  <div class=\"div-h1\">\n    <h1>Your Trade In</h1>\n  </div>\n\n  <div class=\"content\">\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Merk</ion-label>\n      <ion-select (ionChange) = \"this.brand = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_brand of data_brand\" value=\"{{row_brand.brand}}\" placeholder=\"Pilih..\">{{row_brand.brand}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Jenis Storage</ion-label>\n      <ion-select (ionChange) = \"this.jenis_storage = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_jenis_storage of data_jenis_storage\" value=\"{{row_jenis_storage}}\" placeholder=\"Pilih..\">{{row_jenis_storage}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Storage</ion-label>\n      <ion-select *ngIf=\"jenis_storage=='HDD/SATA'\" (ionChange) = \"this.storages = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_storage of data_storage_hdd_sata\" value=\"{{row_storage}}\" placeholder=\"Pilih..\">{{row_storage}}</ion-select-option>\n      </ion-select>\n      <ion-select *ngIf=\"jenis_storage=='SSD'\" (ionChange) = \"this.storages = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_storage of data_storage_ssd\" value=\"{{row_storage}}\" placeholder=\"Pilih..\">{{row_storage}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>RAM</ion-label>\n      <ion-select (ionChange) = \"this.memory = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_memory of data_memory\" value=\"{{row_memory.memory}}\" placeholder=\"Pilih..\">{{row_memory.memory}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Processor</ion-label>\n      <ion-select (ionChange) = \"this.processor = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_processor of data_processor\" value=\"{{row_processor.processor}}\" placeholder=\"Pilih..\">{{row_processor.processor}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Operating System</ion-label>\n      <ion-select (ionChange) = \"this.os = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_os of data_os\" value=\"{{row_os}}\" placeholder=\"Pilih..\">{{row_os}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label>Ukuran Laptop</ion-label>\n      <ion-select (ionChange) = \"this.ukuran_laptop = $event.target.value\">\n        <ion-select-option *ngFor=\"let row_ukuran_laptop of data_ukuran_laptop\" value=\"{{row_ukuran_laptop}}\" placeholder=\"Pilih..\">{{row_ukuran_laptop}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"--background: transparant; color: #3053A4;\">\n      <ion-label class=\"ion-text-wrap\">Tempat anda melakukan Trade In</ion-label>\n      <ion-select (ionChange)=\"this.lokasi_trade = $event.target.value\">\n          <ion-select-option *ngFor=\"let item of stores\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col > \n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Laptop</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"kondisi_laptop\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label  class=\"ion-text-wrap\" >Nyala</ion-label> \n              <ion-radio slot=\"start\" value=\"Nyala\"></ion-radio>\n            </ion-item>\n          \n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n              <ion-label class=\"ion-text-wrap\">Mati Total</ion-label>\n              <ion-radio slot=\"start\" value=\"Mati Total\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col > \n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Jenis Layar Laptop</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"jenis_layar\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label  class=\"ion-text-wrap\" >Touchscreen</ion-label> \n              <ion-radio slot=\"start\" value=\"Touchscreen\"></ion-radio>\n            </ion-item>\n          \n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n              <ion-label class=\"ion-text-wrap\">Non Touchscreen</ion-label>\n              <ion-radio slot=\"start\" value=\"Non Touchscreen\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col > \n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Layar Laptop</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"kondisi_layar\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label  class=\"ion-text-wrap\" >Normal</ion-label> \n              <ion-radio slot=\"start\" value=\"Normal\"></ion-radio>\n            </ion-item>\n          \n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n              <ion-label class=\"ion-text-wrap\">Whitespot/Blackspot</ion-label>\n              <ion-radio slot=\"start\" value=\"Whitespot/Blackspot\"></ion-radio>\n            </ion-item>\n\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label  class=\"ion-text-wrap\" >Layar bergaris</ion-label> \n              <ion-radio slot=\"start\" value=\"Layar bergaris\"></ion-radio>\n            </ion-item>\n\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label  class=\"ion-text-wrap\" >LCD Pecah/Dead Pixel</ion-label> \n              <ion-radio slot=\"start\" value=\"LCD Pecah/Dead Pixel\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col > \n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi layar dalam</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"inner_valueSelected\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label  class=\"ion-text-wrap\" >Layar berfungsi normal</ion-label> \n              <ion-radio slot=\"start\" value=\"Layar berfungsi normal\"></ion-radio>\n            </ion-item>\n          \n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n              <ion-label class=\"ion-text-wrap\">Layar putih/titik hitam</ion-label>\n              <ion-radio slot=\"start\" value=\"Layar putih/titik hitam\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid >\n      <ion-row size=\"auto\">\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi layar luar</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"outer_valueSelected\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Layar bergores</ion-label>\n              <ion-radio slot=\"start\" value=\"Layar bergores\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">   \n              <ion-label class=\"ion-text-wrap\">Layar tidak bergores</ion-label>\n              <ion-radio  slot=\"start\" value=\"Layar tidak bergores\"></ion-radio>\n            </ion-item>   \n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Fisik</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"condition_valueSelected\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Mulus</ion-label>\n              <ion-radio slot=\"start\" value=\"Mulus\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Lecet</ion-label>\n                <ion-radio slot=\"start\" value=\"Lecet\"></ion-radio>\n              </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label class=\"ion-text-wrap\">Dent atau Penyok Body</ion-label>\n              <ion-radio slot=\"start\" value=\"Dent atau Penyok Body\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Baterai</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"baterai\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Normal</ion-label>\n              <ion-radio slot=\"start\" value=\"Normal\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label class=\"ion-text-wrap\">Bocor</ion-label>\n              <ion-radio slot=\"start\" value=\"Bocor\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Tombol Keyboard</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"keyboard\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Berfungsi Normal+Lengkap</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi Normal+Lengkap\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Trackpad</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"trackpad\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Berfungsi Normal</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi Normal\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi PORT USB/HDMI/LAN/DVI</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"port\">\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Wifi/Bluetooth</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"wifi\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Front Camera</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"camera\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kondisi Speaker</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"speaker\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">                 \n              <ion-label class=\"ion-text-wrap\">Berfungsi</ion-label>\n              <ion-radio slot=\"start\" value=\"Berfungsi\"></ion-radio> \n            </ion-item>\n              <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n                <ion-label class=\"ion-text-wrap\">Tidak Berfungsi</ion-label>\n                <ion-radio slot=\"start\" value=\"Tidak Berfungsi\"></ion-radio>\n              </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kelengkapan</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"addition_valueSelected\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Fullset</ion-label>\n              <ion-radio slot=\"start\" value=\"Fullset\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Unit Only + Charger</ion-label>\n              <ion-radio slot=\"start\" value=\"Unit Only + Charger\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">\n              <ion-radio slot=\"start\" value=\"Unit Only\"></ion-radio>\n              <ion-label class=\"ion-text-wrap\">Unit Only</ion-label>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col >\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"title\">\n                <div>Kelengkapan Tambahan</div>\n              </div>\n            </div>\n            <div class=\"col\" style=\"padding-top: 18px;\">\n              <hr>\n            </div>\n          </div>\n          <ion-radio-group [(ngModel)]=\"more_addition\" >\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\"> \n              <ion-label>Pen</ion-label>\n              <ion-radio slot=\"start\" value=\"Pen\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" style=\"--background: transparant; --color: #3053A4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; margin: 5px 0 0 0;\">  \n              <ion-label>Tidak ada</ion-label>\n              <ion-radio slot=\"start\" value=\"Tidak ada\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"row text-center\" style=\"margin-top: 30px; margin-bottom: 50px;\">\n      <div class=\"col\">\n        <ion-button shape=\"round\" fill=\"outline\" style=\" --background:#BCCCF4; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" routerLink=\"/landing/type\">Cancel</ion-button>\n      </div>\n      <div class=\"col\">\n        <ion-button shape=\"round\" style=\"--background:white; color: #3053A4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\" (click)=\"submit()\">Agree</ion-button>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: LaptopBrandPageRoutingModule */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopBrandPageRoutingModule", function () {
      return LaptopBrandPageRoutingModule;
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


    var _laptop_brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./laptop-brand.page */
    "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts");

    var routes = [{
      path: '',
      component: _laptop_brand_page__WEBPACK_IMPORTED_MODULE_3__["LaptopBrandPage"]
    }];

    var LaptopBrandPageRoutingModule = function LaptopBrandPageRoutingModule() {
      _classCallCheck(this, LaptopBrandPageRoutingModule);
    };

    LaptopBrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LaptopBrandPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: LaptopBrandPageModule */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopBrandPageModule", function () {
      return LaptopBrandPageModule;
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


    var _laptop_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./laptop-brand-routing.module */
    "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand-routing.module.ts");
    /* harmony import */


    var _laptop_brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./laptop-brand.page */
    "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts");

    var LaptopBrandPageModule = function LaptopBrandPageModule() {
      _classCallCheck(this, LaptopBrandPageModule);
    };

    LaptopBrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _laptop_brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaptopBrandPageRoutingModule"]],
      declarations: [_laptop_brand_page__WEBPACK_IMPORTED_MODULE_6__["LaptopBrandPage"]]
    })], LaptopBrandPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header.header {\n  --ion-background-color: transparent;\n  border: none;\n}\nion-header.header .icon-b {\n  color: #34549f;\n}\n.bg {\n  background-image: url(/src/assets/images/default/background.png);\n}\n.content {\n  margin-top: 40%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.title-image {\n  width: 35vw;\n  top: 22%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n}\n.container {\n  height: auto;\n  width: auto;\n}\n.container.bg-white {\n  background-color: white;\n}\n.bg-image {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.bg-image.top {\n  top: 0px;\n  transform: translateY(-30px);\n}\n.bg-image.bottom {\n  bottom: 0px;\n}\nh1 {\n  margin-bottom: -10px;\n  margin-left: 20px;\n  color: #34549f;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  font-size: 20pt;\n}\n.div-h1 {\n  margin: 0;\n  position: absolute;\n  top: 13%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nion-card {\n  text-align: center;\n  width: 80%;\n  height: 90%;\n  background: transparent;\n  text-transform: none;\n  box-shadow: #52657A;\n}\nion-card .icon-a {\n  padding: 10px;\n  font-size: 4em;\n  color: #0099ff;\n}\nion-card h2 {\n  color: #424348;\n}\n.shape {\n  position: relative;\n  bottom: -10%;\n}\n.shape img {\n  width: 100%;\n  height: auto;\n}\n.mb-2 {\n  margin-bottom: 20px;\n}\n.item-a {\n  background: transparent;\n  height: 60px;\n  margin-bottom: 20px;\n  border-radius: 20px;\n  border: 2px solid gainsboro;\n  color: #8c8c8c;\n}\n.text-center {\n  text-align: center;\n}\n.title {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: #3053A4;\n  font-weight: bold;\n  margin-top: 20px;\n}\nion-col {\n  background: none;\n}\nhr {\n  border-bottom: 2px solid #87ABDD;\n}\nhr:after {\n  content: \"\";\n  display: block;\n  border-bottom: 2px solid #87ABDD;\n  margin-bottom: -2px;\n  max-width: 50%;\n}\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.row:before, .row:after {\n  content: \" \";\n  display: table;\n}\n.row:after {\n  clear: both;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-1 {\n  width: 8.33333%;\n}\n.col-xs-2 {\n  width: 16.66667%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-4 {\n  width: 33.33333%;\n}\n.col-xs-5 {\n  width: 41.66667%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-7 {\n  width: 58.33333%;\n}\n.col-xs-8 {\n  width: 66.66667%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-10 {\n  width: 83.33333%;\n}\n.col-xs-11 {\n  width: 91.66667%;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWxhcHRvcC9sYXB0b3AtYnJhbmQvQzpcXFVzZXJzXFxhcmRpbVxcRGVza3RvcFxcaGFtcGlyIHNlbGVzYWlcXE5ldyBmb2xkZXJcXG15VHJhZGVfVjMuMC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXHNlbGxpbmctbGFwdG9wXFxsYXB0b3AtYnJhbmRcXGxhcHRvcC1icmFuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2VsbGluZy1sYXB0b3AvbGFwdG9wLWJyYW5kL2xhcHRvcC1icmFuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0UsY0FBQTtBQ0VKO0FERUE7RUFDRSxnRUFBQTtBQ0NGO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VGO0FEQ0E7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDRUY7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7QURBRTtFQUNFLHVCQUFBO0FDRUo7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtBQ0NGO0FER0U7RUFDQSxXQUFBO0FDREY7QURNQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNIRjtBRE1BO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDSEY7QURLRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0hKO0FES0U7RUFFRSxjQUFBO0FDSko7QURRQztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtBQ0xGO0FETUU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0pOO0FEUUE7RUFDQSxtQkFBQTtBQ0xBO0FEUUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDTEg7QURRQTtFQUNFLGtCQUFBO0FDTEY7QURRQTtFQUNFLDREQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7QUNMRjtBRFNBO0VBQ0UsZ0NBQUE7QUNORjtBRFNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ05GO0FEU0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNORjtBRFFFO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNMRjtBRE9FO0VBQ0EsV0FBQTtBQ0pGO0FET0U7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7QURPRTtFQUNBLFdBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxVQUFBO0FDSkY7QURPRTtFQUNBLGdCQUFBO0FDSkY7QURPRTtFQUNBLGdCQUFBO0FDSkY7QURPRTtFQUNBLFVBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsVUFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxXQUFBO0FDSkY7QURPRTtFQUNBLFdBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxVQUFBO0FDSkY7QURPRTtFQUNBLGdCQUFBO0FDSkY7QURPRTtFQUNBLGdCQUFBO0FDSkY7QURPRTtFQUNBLFVBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsZ0JBQUE7QUNKRjtBRE9FO0VBQ0EsVUFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxXQUFBO0FDSkY7QURPRTtFQUNBLFVBQUE7QUNKRjtBRE9FO0VBQ0EsY0FBQTtBQ0pGO0FET0U7RUFDQSxlQUFBO0FDSkY7QURPRTtFQUNBLFNBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxlQUFBO0FDSkY7QURPRTtFQUNBLFNBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxlQUFBO0FDSkY7QURPRTtFQUNBLFNBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxlQUFBO0FDSkY7QURPRTtFQUNBLFVBQUE7QUNKRjtBRE9FO0VBQ0EsZUFBQTtBQ0pGO0FET0U7RUFDQSxxQkFBQTtBQ0pGO0FET0U7RUFDQSxzQkFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxzQkFBQTtBQ0pGO0FET0U7RUFDQSxzQkFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxzQkFBQTtBQ0pGO0FET0U7RUFDQSxzQkFBQTtBQ0pGO0FET0U7RUFDQSxnQkFBQTtBQ0pGO0FET0U7RUFDQSxzQkFBQTtBQ0pGO0FET0U7RUFDQSxzQkFBQTtBQ0pGO0FET0U7RUFDQSxpQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZWxsaW5nLWxhcHRvcC9sYXB0b3AtYnJhbmQvbGFwdG9wLWJyYW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIuaGVhZGVye1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAuaWNvbi1ie1xyXG4gICAgY29sb3I6ICMzNDU0OWY7XHJcbiAgfVxyXG5cclxufVxyXG4uYmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC9iYWNrZ3JvdW5kLnBuZyk7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDQwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4udGl0bGUtaW1hZ2V7XHJcbiAgd2lkdGg6IDM1dnc7XHJcbiAgdG9wOiAyMiU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICAmLmJnLXdoaXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgJi50b3Age1xyXG4gIHRvcDogIDBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xyXG5cclxuICB9XHJcblxyXG4gICYuYm90dG9tIHtcclxuICBib3R0b206IDBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5oMXtcclxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBjb2xvcjogIzM0NTQ5ZjtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbn1cclxuXHJcbi5kaXYtaDF7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEzJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBib3gtc2hhZG93OiAjNTI2NTdBO1xyXG5cclxuICAuaWNvbi1he1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgY29sb3I6ICMwMDk5ZmY7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgICAgICAgICBcclxuICAgIGNvbG9yOiByZ2IoNjYsIDY3LCA3Mik7XHJcbiAgfSAgXHJcbiB9XHJcblxyXG4gLnNoYXBle1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IC0xMCU7XHJcbiAgaW1ne1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICB9XHJcblxyXG4ubWItMntcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLml0ZW0tYXtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgIGJvcmRlcjoycHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xyXG4gICBjb2xvcjogcmdiKDE0MCwgMTQwLCAxNDApO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMzMDUzQTQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG5cclxuaHIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjODdBQkREO1xyXG59XHJcblxyXG5ocjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4N0FCREQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJweDsgXHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5yb3c6YmVmb3JlLCAucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgLnJvdzphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTEge1xyXG4gIHdpZHRoOiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMiB7XHJcbiAgd2lkdGg6IDE2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMyB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNCB7XHJcbiAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNSB7XHJcbiAgd2lkdGg6IDQxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtNyB7XHJcbiAgd2lkdGg6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtOCB7XHJcbiAgd2lkdGg6IDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtOSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtMTAge1xyXG4gIHdpZHRoOiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLTExIHtcclxuICB3aWR0aDogOTEuNjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy0xMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMCB7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMSB7XHJcbiAgcmlnaHQ6IDguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTIge1xyXG4gIHJpZ2h0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtMyB7XHJcbiAgcmlnaHQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC00IHtcclxuICByaWdodDogMzMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTUge1xyXG4gIHJpZ2h0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtNiB7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC03IHtcclxuICByaWdodDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdWxsLTgge1xyXG4gIHJpZ2h0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1bGwtOSB7XHJcbiAgcmlnaHQ6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMCB7XHJcbiAgcmlnaHQ6IDgzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMSB7XHJcbiAgcmlnaHQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVsbC0xMiB7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMCB7XHJcbiAgbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xIHtcclxuICBsZWZ0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0yIHtcclxuICBsZWZ0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMyB7XHJcbiAgbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTQge1xyXG4gIGxlZnQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC01IHtcclxuICBsZWZ0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtNiB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTcge1xyXG4gIGxlZnQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC04IHtcclxuICBsZWZ0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtOSB7XHJcbiAgbGVmdDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1wdXNoLTEwIHtcclxuICBsZWZ0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLXB1c2gtMTEge1xyXG4gIGxlZnQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtcHVzaC0xMiB7XHJcbiAgbGVmdDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEge1xyXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0zIHtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTUge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC02IHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtNyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC05IHtcclxuICBtYXJnaW4tbGVmdDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14cy1vZmZzZXQtMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhzLW9mZnNldC0xMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wteHMtb2Zmc2V0LTEyIHtcclxuICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICB9IiwiaW9uLWhlYWRlci5oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuaW9uLWhlYWRlci5oZWFkZXIgLmljb24tYiB7XG4gIGNvbG9yOiAjMzQ1NDlmO1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvaW1hZ2VzL2RlZmF1bHQvYmFja2dyb3VuZC5wbmcpO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi50aXRsZS1pbWFnZSB7XG4gIHdpZHRoOiAzNXZ3O1xuICB0b3A6IDIyJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cbi5jb250YWluZXIuYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJnLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uYmctaW1hZ2UudG9wIHtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG59XG4uYmctaW1hZ2UuYm90dG9tIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogIzM0NTQ5ZjtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5kaXYtaDEge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMyU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJveC1zaGFkb3c6ICM1MjY1N0E7XG59XG5pb24tY2FyZCAuaWNvbi1hIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGNvbG9yOiAjMDA5OWZmO1xufVxuaW9uLWNhcmQgaDIge1xuICBjb2xvcjogIzQyNDM0ODtcbn1cblxuLnNoYXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC0xMCU7XG59XG4uc2hhcGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1iLTIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaXRlbS1hIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xuICBjb2xvcjogIzhjOGM4Yztcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMDUzQTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tY29sIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg3QUJERDtcbn1cblxuaHI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4N0FCREQ7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucm93OmJlZm9yZSwgLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnJvdzphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmNvbC14cy0xLCAuY29sLXhzLTIsIC5jb2wteHMtMywgLmNvbC14cy00LCAuY29sLXhzLTUsIC5jb2wteHMtNiwgLmNvbC14cy03LCAuY29sLXhzLTgsIC5jb2wteHMtOSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29sLXhzLTEge1xuICB3aWR0aDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtMiB7XG4gIHdpZHRoOiAxNi42NjY2NyU7XG59XG5cbi5jb2wteHMtMyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wteHMtNCB7XG4gIHdpZHRoOiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtNSB7XG4gIHdpZHRoOiA0MS42NjY2NyU7XG59XG5cbi5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wteHMtNyB7XG4gIHdpZHRoOiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtOCB7XG4gIHdpZHRoOiA2Ni42NjY2NyU7XG59XG5cbi5jb2wteHMtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wteHMtMTAge1xuICB3aWR0aDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY3JTtcbn1cblxuLmNvbC14cy0xMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLXhzLXB1bGwtMCB7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4uY29sLXhzLXB1bGwtMSB7XG4gIHJpZ2h0OiA4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTIge1xuICByaWdodDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtMyB7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbi5jb2wteHMtcHVsbC00IHtcbiAgcmlnaHQ6IDMzLjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTUge1xuICByaWdodDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtNiB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi5jb2wteHMtcHVsbC03IHtcbiAgcmlnaHQ6IDU4LjMzMzMzJTtcbn1cblxuLmNvbC14cy1wdWxsLTgge1xuICByaWdodDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1bGwtOSB7XG4gIHJpZ2h0OiA3NSU7XG59XG5cbi5jb2wteHMtcHVsbC0xMCB7XG4gIHJpZ2h0OiA4My4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMSB7XG4gIHJpZ2h0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVsbC0xMiB7XG4gIHJpZ2h0OiAxMDAlO1xufVxuXG4uY29sLXhzLXB1c2gtMCB7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5jb2wteHMtcHVzaC0xIHtcbiAgbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC0yIHtcbiAgbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtMyB7XG4gIGxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1wdXNoLTQge1xuICBsZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC01IHtcbiAgbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtNiB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1wdXNoLTcge1xuICBsZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtcHVzaC04IHtcbiAgbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLXB1c2gtOSB7XG4gIGxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1wdXNoLTEwIHtcbiAgbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLXB1c2gtMTEge1xuICBsZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtcHVzaC0xMiB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTAge1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLmNvbC14cy1vZmZzZXQtNyB7XG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sLXhzLW9mZnNldC05IHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLmNvbC14cy1vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xufVxuXG4uY29sLXhzLW9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG59XG5cbi5jb2wteHMtb2Zmc2V0LTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.ts ***!
    \********************************************************************************/

  /*! exports provided: LaptopBrandPage */

  /***/
  function srcAppPagesLandingSellingLaptopLaptopBrandLaptopBrandPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopBrandPage", function () {
      return LaptopBrandPage;
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


    var _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/api/selling-api.service */
    "./src/app/services/api/selling-api.service.ts");
    /* harmony import */


    var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../services/api/membership-api.service */
    "./src/app/services/api/membership-api.service.ts");

    var LaptopBrandPage = /*#__PURE__*/function () {
      function LaptopBrandPage(membershipApiService, storage, sellingApiService, helper, device, utilsService, navCtrl, selling, router, activatedRoute, alertController) {
        _classCallCheck(this, LaptopBrandPage);

        this.membershipApiService = membershipApiService;
        this.storage = storage;
        this.sellingApiService = sellingApiService;
        this.helper = helper;
        this.device = device;
        this.utilsService = utilsService;
        this.navCtrl = navCtrl;
        this.selling = selling;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.stores = [];
        this.searchedStores = [];
        this.data_brand = [];
        this.data_storage = [];
        this.data_memory = [];
        this.data_processor = [];
        this.data_jenis_storage = ['HDD/SATA', 'SSD'];
        this.data_storage_ssd = ['128GB', '256GB', '500GB', '512GB', '1TB'];
        this.data_storage_hdd_sata = ['250GB', '500GB', '1TB'];
        this.data_ukuran_laptop = ['10" - 12"inch', '13" - 15"inch'];
        this.data_os = ['Windows', 'MacOs', 'Non Operating System'];
      }

      _createClass(LaptopBrandPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getStore();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getStore();
          this.selling.removeSelling();
          this.getBrand();
        }
      }, {
        key: "getStore",
        value: function getStore() {
          var _this = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then(function (token) {
            _this.sellingApiService.getStore(token).subscribe(function (response) {
              _this.stores = response.data.store;
              console.log(_this.stores);
            }, function (err) {
              _this.stores = [];

              _this.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "getBrand",
        value: function getBrand() {
          var _this2 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_10__["tokenKey"]).then(function (token) {
            _this2.sellingApiService.getBrandLaptop(token).subscribe(function (response) {
              _this2.data_brand = response.data.brand;
              _this2.data_storage = response.data.storages;
              _this2.data_memory = response.data.memory;
              _this2.data_processor = response.data.processor; //  console.log(this.data_brand)
            }, function (err) {
              _this2.utilsService.showToast("There is a problem.");
            });
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.brand == null || this.memory == null || this.storages == null || this.lokasi_trade == null) {
            this.utilsService.showToast("Lengkapi pengisian form.");
          } else if (this.kondisi_laptop == "Mati Total") {
            alert("Mohon maaf, Anda belum bisa melanjutkan proses ini dikarenakan kondisi unit dalam keadaan mati");
          } else {
            this.presentAlertConfirm();
          }
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Apakah data yang di pilih sudah sesuai dengan kondisi yang sebenarnya?',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: function handler() {}
                      }, {
                        text: 'Lanjut',
                        handler: function handler() {
                          var navigationExtras = {
                            queryParams: {
                              brand: _this3.brand,
                              memory: _this3.memory,
                              storages: _this3.storages,
                              lokasi_trade: _this3.lokasi_trade,
                              inner_valueSelected: _this3.inner_valueSelected,
                              outer_valueSelected: _this3.outer_valueSelected,
                              condition_valueSelected: _this3.condition_valueSelected,
                              addition_valueSelected: _this3.addition_valueSelected,
                              jenis_storage: _this3.jenis_storage,
                              kondisi_laptop: _this3.kondisi_laptop,
                              jenis_layar: _this3.jenis_layar,
                              baterai: _this3.baterai,
                              kondisi_layar: _this3.kondisi_layar,
                              keyboard: _this3.keyboard,
                              trackpad: _this3.trackpad,
                              port: _this3.port,
                              wifi: _this3.wifi,
                              camera: _this3.camera,
                              speaker: _this3.speaker,
                              processor: _this3.processor,
                              ukuran_laptop: _this3.ukuran_laptop,
                              os: _this3.os,
                              more_addition: _this3.more_addition
                            }
                          };

                          _this3.navCtrl.navigateForward(["/landing/laptop-brand/detail-unit"], navigationExtras);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return LaptopBrandPage;
    }();

    LaptopBrandPage.ctorParameters = function () {
      return [{
        type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_11__["MembershipApiService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }, {
        type: _services_api_selling_api_service__WEBPACK_IMPORTED_MODULE_2__["SellingApiService"]
      }, {
        type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _services_membership_service__WEBPACK_IMPORTED_MODULE_8__["MembershipService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    LaptopBrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-laptop-brand',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./laptop-brand.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./laptop-brand.page.scss */
      "./src/app/pages/landing/selling-laptop/laptop-brand/laptop-brand.page.scss"))["default"]]
    })], LaptopBrandPage);
    /***/
  }
}]);
//# sourceMappingURL=selling-laptop-laptop-brand-laptop-brand-module-es5.js.map