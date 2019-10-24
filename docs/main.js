(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-pad></app-pad>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pad/pad.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pad/pad.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pad\">\n  <div *ngFor=\"let block of blocks;let i = index\" class=\"block\">\n    <div class=\"single-block\" \n    [ngStyle]=\"{'background-color': block.color}\" (click)=\"changeState(i);\">\n      {{ block.note.name }}\n    </div>\n  </div>\n</div>\n\n<button class=\"btn\" (click)=\"play()\">start</button>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pad_pad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pad/pad.component */ "./src/app/pad/pad.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pad_pad_component__WEBPACK_IMPORTED_MODULE_3__["PadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pad/pad.component.css":
/*!***************************************!*\
  !*** ./src/app/pad/pad.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pad {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.single-block {\r\n    flex: auto;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n    display: inline-block;\r\n    border: none;\r\n    margin-right: 5px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    border-color: green;\r\n    border-style: solid;\r\n}\r\n\r\n.btn {\r\n    margin-top: 20px;\r\n    color: black;\r\n    background: #ffffff;\r\n    text-transform: uppercase;\r\n    padding: 20px;\r\n    border: 5px solid black;\r\n    border-radius: 6px;\r\n    display: inline-block;\r\n}\r\n\r\n.btn:hover {\r\n    color: #ffffff;\r\n    background: green;\r\n    transition: all 0.4s ease 0s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFkL3BhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGFkL3BhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5zaW5nbGUtYmxvY2sge1xyXG4gICAgZmxleDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pad/pad.component.ts":
/*!**************************************!*\
  !*** ./src/app/pad/pad.component.ts ***!
  \**************************************/
/*! exports provided: PadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadComponent", function() { return PadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sound.service */ "./src/app/services/sound.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PadComponent = /** @class */ (function () {
    function PadComponent(soundService) {
        this.soundService = soundService;
        this.blocks = [];
        this.blockSize = 13; // sequencer will use 13 notes
        this.noteLength = 1; // duration of the note (1 second)
    }
    PadComponent.prototype.ngOnInit = function () {
        // add default values to the blocks array
        for (var index = 0; index < this.blockSize; index++) {
            this.blocks.push({
                color: 'limegreen',
                state: true,
                note: this.soundService.notes[index]
            });
        }
    };
    /**
     * change the color of the div, and switch its state (on/off)
     * @param index
     */
    PadComponent.prototype.changeState = function (index) {
        this.blocks[index] = (this.blocks[index].color === 'limegreen') ? {
            color: 'tomato',
            state: false,
            note: this.blocks[index].note
        } : {
            color: 'limegreen',
            state: true,
            note: this.blocks[index].note
        };
    };
    /**
     * play the notes that have a true state
     */
    PadComponent.prototype.play = function () {
        var _this = this;
        this.blocks.forEach(function (element, index) {
            if (element.state) {
                var note = _this.soundService.notes[index];
                _this.soundService.play(note.frequency, _this.noteLength, index * _this.noteLength);
            }
            // this is to emulate the progress
            setTimeout(function () {
                element.color = 'lightpink';
                if (index + 1 === _this.blocks.length) {
                    setTimeout(function () {
                        _this.resetColor();
                    }, _this.noteLength * 1000);
                }
            }, _this.noteLength * 1000 * index);
        });
    };
    /**
     * when sequence ends this returns the colors but to limegreen
     */
    PadComponent.prototype.resetColor = function () {
        this.blocks.forEach(function (element) {
            element.color = 'limegreen';
            element.state = true;
        });
    };
    PadComponent.ctorParameters = function () { return [
        { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"] }
    ]; };
    PadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pad',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pad.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pad/pad.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pad.component.css */ "./src/app/pad/pad.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"]])
    ], PadComponent);
    return PadComponent;
}());



/***/ }),

/***/ "./src/app/services/sound.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/sound.service.ts ***!
  \*******************************************/
/*! exports provided: SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SoundService = /** @class */ (function () {
    function SoundService() {
        this.notes = [
            {
                name: 'C',
                altname: null,
                position: 4,
                frequency: 261.63,
                wavelength: 131.87
            }, {
                name: 'C#',
                altname: 'Db',
                position: 4,
                frequency: 277.18,
                wavelength: 124.47
            }, {
                name: 'D',
                altname: null,
                position: 4,
                frequency: 293.66,
                wavelength: 117.48
            }, {
                name: 'D#',
                altname: 'Eb',
                position: 4,
                frequency: 311.13,
                wavelength: 110.89
            }, {
                name: 'E',
                altname: null,
                position: 4,
                frequency: 329.63,
                wavelength: 104.66
            }, {
                name: 'F',
                altname: null,
                position: 4,
                frequency: 349.23,
                wavelength: 98.79
            }, {
                name: 'F#',
                altname: 'Gb',
                position: 4,
                frequency: 369.99,
                wavelength: 93.24
            }, {
                name: 'G',
                altname: null,
                position: 4,
                frequency: 392.00,
                wavelength: 88.01
            }, {
                name: 'G#',
                altname: 'Ab',
                position: 4,
                frequency: 415.30,
                wavelength: 83.07
            }, {
                name: 'A',
                altname: null,
                position: 4,
                frequency: 440.00,
                wavelength: 78.41
            }, {
                name: 'A#',
                altname: 'Bb',
                position: 4,
                frequency: 466.16,
                wavelength: 74.01
            }, {
                name: 'B',
                altname: null,
                position: 4,
                frequency: 493.88,
                wavelength: 69.85
            }, {
                name: 'C',
                altname: null,
                position: 5,
                frequency: 523.25,
                wavelength: 65.93
            }, {
                name: 'C#',
                altname: 'Db',
                position: 5,
                frequency: 554.37,
                wavelength: 62.23
            }, {
                name: 'D',
                altname: null,
                position: 5,
                frequency: 587.33,
                wavelength: 58.74
            }, {
                name: 'D#',
                altname: 'Eb',
                position: 5,
                frequency: 622.25,
                wavelength: 55.44
            }, {
                name: 'E',
                altname: null,
                position: 5,
                frequency: 659.25,
                wavelength: 52.33
            }, {
                name: 'F',
                altname: null,
                position: 5,
                frequency: 698.46,
                wavelength: 49.39
            }, {
                name: 'F#',
                altname: 'Gb',
                position: 5,
                frequency: 739.99,
                wavelength: 46.62
            }, {
                name: 'G',
                altname: null,
                position: 5,
                frequency: 783.99,
                wavelength: 44.01
            }, {
                name: 'G#',
                altname: 'Ab',
                position: 5,
                frequency: 830.61,
                wavelength: 41.54
            }, {
                name: 'A',
                altname: null,
                position: 5,
                frequency: 880.00,
                wavelength: 39.20
            }, {
                name: 'A#',
                altname: 'Bb',
                position: 5,
                frequency: 932.33,
                wavelength: 37.00
            }, {
                name: 'B',
                altname: null,
                position: 5,
                frequency: 987.77,
                wavelength: 34.93
            }
        ];
        this.audioCtx = new (window['AudioContext'] || window['webkitAudioContext'])();
        this.gainNode = this.audioCtx.createGain();
    }
    SoundService.prototype.play = function (freq, time, delay) {
        var oscillator = this.audioCtx.createOscillator();
        oscillator.connect(this.gainNode);
        this.gainNode.connect(this.audioCtx.destination);
        oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
        oscillator.frequency.value = freq; // value in hertz
        oscillator.start(this.audioCtx.currentTime + delay);
        oscillator.stop(this.audioCtx.currentTime + delay + time);
    };
    SoundService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SoundService);
    return SoundService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\stefanos\projects\sequencer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map