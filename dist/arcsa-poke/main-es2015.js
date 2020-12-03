(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_poke_detail_poke_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/poke-detail/poke-detail.component */ "./src/app/components/poke-detail/poke-detail.component.ts");
/* harmony import */ var _components_poke_table_poke_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/poke-table/poke-table.component */ "./src/app/components/poke-table/poke-table.component.ts");
/* harmony import */ var _components_poke_favo_poke_favo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/poke-favo/poke-favo.component */ "./src/app/components/poke-favo/poke-favo.component.ts");







const routes = [
    { path: 'home', component: _components_poke_table_poke_table_component__WEBPACK_IMPORTED_MODULE_3__["PokeTableComponent"] },
    { path: 'favoritos', component: _components_poke_favo_poke_favo_component__WEBPACK_IMPORTED_MODULE_4__["PokeFavoComponent"] },
    { path: 'pokeDetail/:id', component: _components_poke_detail_poke_detail_component__WEBPACK_IMPORTED_MODULE_2__["PokeDetailComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'arcsa-poke';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_poke_table_poke_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/poke-table/poke-table.component */ "./src/app/components/poke-table/poke-table.component.ts");
/* harmony import */ var _components_poke_detail_poke_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/poke-detail/poke-detail.component */ "./src/app/components/poke-detail/poke-detail.component.ts");
/* harmony import */ var _components_poke_favo_poke_favo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/poke-favo/poke-favo.component */ "./src/app/components/poke-favo/poke-favo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_poke_table_poke_table_component__WEBPACK_IMPORTED_MODULE_7__["PokeTableComponent"],
        _components_poke_detail_poke_detail_component__WEBPACK_IMPORTED_MODULE_8__["PokeDetailComponent"],
        _components_poke_favo_poke_favo_component__WEBPACK_IMPORTED_MODULE_9__["PokeFavoComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _components_poke_table_poke_table_component__WEBPACK_IMPORTED_MODULE_7__["PokeTableComponent"],
                    _components_poke_detail_poke_detail_component__WEBPACK_IMPORTED_MODULE_8__["PokeDetailComponent"],
                    _components_poke_favo_poke_favo_component__WEBPACK_IMPORTED_MODULE_9__["PokeFavoComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Prueba tecnica Jorge Chavez Barrera\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  color: white;\n  position: fixed;\n  bottom: 0px;\n  background: gray;\n  width: 100vw;\n  padding-top: 20px;\n  padding-left: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvcmdlL0RvY3VtZW50b3MvcG9rZWRleC9hcmNzYXBva2Uvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjNweDtcbn0iLCJmb290ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICB3aWR0aDogMTAwdnc7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIzcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    home() {
        this.router.navigateByUrl('/home');
    }
    favoritos() {
        this.router.navigateByUrl('/favoritos');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 0, consts: [[1, "tolbar"], [3, "click"], ["src", "../../../assets/images/pokedex.png", "alt", "pokedex", "width", "20", "height", "20"], ["src", "../../../assets/images/fav.jpeg", "alt", "pokedex", "width", "20", "height", "20", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_2_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " LISTADO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_5_listener() { return ctx.favoritos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_6_listener() { return ctx.favoritos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " FAVORITOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin-top: 100px !important;\n}\n\n.tolbar[_ngcontent-%COMP%] {\n  height: 50px;\n  display: block;\n  background-color: #ccc;\n  font-size: 25px;\n  top: 0px;\n  position: fixed;\n  width: 100vw;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  margin-top: 15px;\n}\n\nli[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: 15px;\n  cursor: pointer;\n}\n\nli[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvcmdlL0RvY3VtZW50b3MvcG9rZWRleC9hcmNzYXBva2Uvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWc6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuYm9keXtcbiAgICBtYXJnaW4tdG9wOiAxMDBweCAhaW1wb3J0YW50OyAgIFxufVxuLnRvbGJhcntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbnVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5saXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5saTpob3ZlcntcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn0iLCJpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkge1xuICBtYXJnaW4tdG9wOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9sYmFyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0b3A6IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5saSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/poke-detail/poke-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/poke-detail/poke-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PokeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeDetailComponent", function() { return PokeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pokemon.service */ "./src/app/services/pokemon.service.ts");




class PokeDetailComponent {
    constructor(activatedRouter, pokemonService) {
        this.activatedRouter = activatedRouter;
        this.pokemonService = pokemonService;
        this.pokemon = '';
        this.pokemonImg = '';
        this.pokemonType = [];
        this.activatedRouter.params.subscribe(params => {
            this.getPokemon(params['id']);
        });
    }
    ngOnInit() {
    }
    getPokemon(id) {
        this.pokemonService.getPokemons(id).subscribe(res => {
            console.log(res);
            this.pokemon = res;
            this.pokemonImg = this.pokemon.sprites.front_default;
            this.pokemonType = res.types[0].type.name;
        }, err => {
            console.log(err);
        });
    }
}
PokeDetailComponent.ɵfac = function PokeDetailComponent_Factory(t) { return new (t || PokeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"])); };
PokeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokeDetailComponent, selectors: [["app-poke-detail"]], decls: 16, vars: 7, consts: [[1, "card"], ["CLASS", "headtitle"], [1, "header-imageico", 3, "src"], [1, "title"], [1, "subtitle"], ["alt", "pokemon", 1, "principal", 3, "src"]], template: function PokeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pokemonImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("N\u00BA ", ctx.pokemon.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.pokemonImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Type: ", ctx.pokemonType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Height: ", ctx.pokemon.height, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weight: ", ctx.pokemon.weight, "");
    } }, styles: ["@charset \"UTF-8\";\n.card[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: auto;\n  margin-top: 20px;\n  background-color: gray;\n}\n.header-imageico[_ngcontent-%COMP%] {\n  background-size: cover;\n  float: left;\n}\n.headtitle[_ngcontent-%COMP%] {\n  background-color: white;\n  display: block;\n  height: 100px;\n  font-size: 30px;\n}\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: black;\n  display: inline-block;\n  margin-top: 40px;\n  margin-right: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: black;\n  display: inline-block;\n  font-size: 20px;\n  margin-top: 5px;\n}\n.principal[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  \u00A0-moz-animation: spinHorizontal 10s infinite linear;\n  -webkit-animation: spinHorizontal 10s infinite linear;\n  animation: spinHorizontal 10s infinite linear;\n}\n@-webkit-keyframes spinHorizontal {\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n@keyframes spinHorizontal {\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlLWRldGFpbC9wb2tlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2pvcmdlL0RvY3VtZW50b3MvcG9rZWRleC9hcmNzYXBva2Uvc3JjL2FwcC9jb21wb25lbnRzL3Bva2UtZGV0YWlsL3Bva2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvam9yZ2UvRG9jdW1lbnRvcy9wb2tlZGV4L2FyY3NhcG9rZS9zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QURBSjtBQ0dBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FEQUo7QUNHQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FEQUo7QUNHQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtBRERKO0FDSUE7RUFDSSxZQzlCSTtFRCtCSixxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FEREo7QUNHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0UsbURBQUE7RUFFRixxREFBQTtFQUNBLDZDQUFBO0FEQUo7QUNHQTtFQUNJO0lBQUssd0JBQUE7RURDUDtFQ0FFO0lBQU0sMEJBQUE7RURHUjtFQ0ZFO0lBQU8sMEJBQUE7RURLVDtBQUNGO0FDVEE7RUFDSTtJQUFLLHdCQUFBO0VEQ1A7RUNBRTtJQUFNLDBCQUFBO0VER1I7RUNGRTtJQUFPLDBCQUFBO0VES1Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZS1kZXRhaWwvcG9rZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2FyZCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4uaGVhZGVyLWltYWdlaWNvIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5oZWFkdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucHJpbmNpcGFsIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICDCoC1tb3otYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxMHMgaW5maW5pdGUgbGluZWFyO1xuICAtby1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxMHMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uY2FyZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi5oZWFkZXItaW1hZ2VpY28ge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5oZWFkdGl0bGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbi50aXRsZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnN1YnRpdGxle1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJpbmNpcGFse1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4OyAgXG4gICAgICDCoC1tb3otYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxMHMgaW5maW5pdGUgbGluZWFyO1xuICAgIC1vLWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMTBzIGluZmluaXRlIGxpbmVhcjsgICAgXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxMHMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW5Ib3Jpem9udGFsIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxuICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpOyB9XG59IiwiJHJlZDogI2JkMzczNjtcbiRibGFjazogYmxhY2s7XG4kd2hpdGU6ICNmY2ZjZmM7XG4keWVsbG93OiAjRkZEOTI0OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poke-detail',
                templateUrl: './poke-detail.component.html',
                styleUrls: ['./poke-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__["PokemonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/poke-favo/poke-favo.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/poke-favo/poke-favo.component.ts ***!
  \*************************************************************/
/*! exports provided: PokeFavoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeFavoComponent", function() { return PokeFavoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function PokeFavoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ELIMINADO CORRECTAMENTE DE FAVORITOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokeFavoComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokeFavoComponent_a_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const p_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getRow(p_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokeFavoComponent_a_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const p_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removefavo(p_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "quitar favorito ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", p_r2.position, "");
} }
class PokeFavoComponent {
    constructor(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.displayedColumns = ['id', 'image', 'name'];
        this.data = [];
        this.pokemons = [];
        this.alert = false;
    }
    ngOnInit() {
        this.getPokemons();
    }
    getPokemons() {
        this.data = [];
        let pokemonData;
        var saveData = JSON.parse(localStorage.getItem('saveData') || "[]") || [];
        for (let i = 0; i <= saveData.length; i++) {
            this.pokemonService.getPokemons(saveData[i]).subscribe(res => {
                pokemonData = {
                    position: i,
                    id: res.id,
                    image: res.sprites.front_default,
                    name: res.name
                };
                this.data.push(pokemonData);
            }, err => {
                console.log(err);
            });
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
    }
    getRow(row) {
        //console.log(row);
        this.router.navigateByUrl(`/pokeDetail/${row.id}`);
    }
    removefavo(row) {
        var saveData = JSON.parse(localStorage.getItem('saveData') || "[]") || [];
        saveData.splice(saveData.indexOf(row.id), 1);
        localStorage.setItem('saveData', JSON.stringify(saveData));
        localStorage.saveData = JSON.stringify(saveData);
        this.getPokemons();
        this.alert = true;
        window.setTimeout(() => {
            this.alert = false;
        }, 2000);
    }
}
PokeFavoComponent.ɵfac = function PokeFavoComponent_Factory(t) { return new (t || PokeFavoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PokeFavoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokeFavoComponent, selectors: [["app-poke-favo"]], decls: 4, vars: 2, consts: [["class", "alerta", 4, "ngIf"], [1, "container"], ["class", "card--media", 4, "ngFor", "ngForOf"], [1, "alerta"], [1, "card--media"], [1, "card--media__content", 3, "click"], [1, "pokename"], ["alt", "pokemon", "width", "100", "height", "100", 3, "src"], [1, "pokenum"], [3, "click"], ["src", "../../../assets/images/favremove.png", "alt", "pokedex", "width", "20", "height", "20"]], template: function PokeFavoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PokeFavoComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokeFavoComponent_a_3_Template, 10, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  text-align: center;\n  height: 82vh;\n  overflow: auto;\n}\n\n.alerta[_ngcontent-%COMP%] {\n  background-color: aqua;\n  color: black;\n  font-size: 16px;\n  height: 70px;\n  width: 200px;\n  position: fixed;\n  right: 15px;\n  top: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pokenum[_ngcontent-%COMP%] {\n  display: block;\n  background: black;\n}\n\n.card--media[_ngcontent-%COMP%] {\n  float: left;\n  box-shadow: inset 1px;\n  width: 180px;\n  height: 180px;\n  background-color: gray;\n  color: white;\n  font-size: 14px;\n  border-radius: 10px;\n  margin: 5px;\n  padding: 10px;\n}\n\n.card--media[_ngcontent-%COMP%]   img.principal[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.pokename[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n\n .mat-form-field-label {\n  color: #fcfcfc !important;\n}\n\n .mat-for m-field-underline {\n  background-color: #fcfcfc !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  color: #fcfcfc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvcmdlL0RvY3VtZW50b3MvcG9rZWRleC9hcmNzYXBva2Uvc3JjL2FwcC9jb21wb25lbnRzL3Bva2UtZmF2by9wb2tlLWZhdm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZS1mYXZvL3Bva2UtZmF2by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNESjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFFSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDSUo7O0FEREE7RUFDSSx5QkFBQTtBQ0lKOztBREZBO0VBRUksb0NBQUE7QUNJSjs7QUREQTtFQUNJLHlCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bva2UtZmF2by9wb2tlLWZhdm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogODJ2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5hbGVydGF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyIDtcbn1cbmJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuYnV0dG9uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbn1cbi5wb2tlbnVte1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuLmNhcmQtLW1lZGlhXG57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjo1cHg7XG4gICAgcGFkZGluZzoxMHB4O1xufVxuLmNhcmQtLW1lZGlhIGltZy5wcmluY2lwYWx7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG4ucG9rZW5hbWV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwLm1hdC1mb3Jcbm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgydmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uYWxlcnRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBva2VudW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5jYXJkLS1tZWRpYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3gtc2hhZG93OiBpbnNldCAxcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZC0tbWVkaWEgaW1nLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnBva2VuYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjZmNmY2ZjICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9yIG0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYyAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gIGNvbG9yOiAjZmNmY2ZjICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeFavoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poke-favo',
                templateUrl: './poke-favo.component.html',
                styleUrls: ['./poke-favo.component.scss']
            }]
    }], function () { return [{ type: src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/poke-table/poke-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/poke-table/poke-table.component.ts ***!
  \***************************************************************/
/*! exports provided: PokeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeTableComponent", function() { return PokeTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function PokeTableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " AGREGADO CORRECTAMENTE A FAVORITOS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PokeTableComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokeTableComponent_a_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const p_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getRow(p_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokeTableComponent_a_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const p_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setfavo(p_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " favorito ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", p_r2.position, "");
} }
class PokeTableComponent {
    constructor(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.displayedColumns = ['id', 'image', 'name'];
        this.data = [];
        this.alert = false;
        this.pokemons = [];
    }
    ngOnInit() {
        this.getPokemons();
    }
    getPokemons() {
        let pokemonData;
        for (let i = 1; i <= 150; i++) {
            this.pokemonService.getPokemons(i).subscribe(res => {
                pokemonData = {
                    position: i,
                    id: res.id,
                    image: res.sprites.front_default,
                    name: res.name
                };
                this.data.push(pokemonData);
            }, err => {
                console.log(err);
            });
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
    }
    getRow(row) {
        //console.log(row);
        this.router.navigateByUrl(`/pokeDetail/${row.id}`);
    }
    setfavo(row) {
        console.log(row);
        let datas = localStorage.getItem('saveData');
        var saveData = JSON.parse(localStorage.getItem('saveData') || "[]") || [];
        saveData.push(row.id);
        localStorage.setItem('saveData', JSON.stringify(saveData));
        localStorage.saveData = JSON.stringify(saveData);
        this.alert = true;
        window.setTimeout(() => {
            this.alert = false;
        }, 2000);
    }
}
PokeTableComponent.ɵfac = function PokeTableComponent_Factory(t) { return new (t || PokeTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PokeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokeTableComponent, selectors: [["app-poke-table"]], decls: 4, vars: 2, consts: [["class", "alerta", 4, "ngIf"], [1, "container"], ["class", "card--media", 4, "ngFor", "ngForOf"], [1, "alerta"], [1, "card--media"], [1, "card--media__content", 3, "click"], [1, "pokename"], ["alt", "pokemon", "width", "100", "height", "100", 1, "principal", 3, "src"], [1, "pokenum"], [3, "click"], ["src", "../../../assets/images/addfav.jpg", "alt", "pokedex", "width", "20", "height", "20"]], template: function PokeTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PokeTableComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokeTableComponent_a_3_Template, 10, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  text-align: center;\n  height: 82vh;\n  overflow: auto;\n}\n.alerta[_ngcontent-%COMP%] {\n  background-color: aqua;\n  color: black;\n  font-size: 16px;\n  height: 70px;\n  width: 200px;\n  position: fixed;\n  right: 15px;\n  top: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n}\nbutton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.pokenum[_ngcontent-%COMP%] {\n  display: block;\n  background: black;\n}\n.card--media[_ngcontent-%COMP%] {\n  float: left;\n  box-shadow: inset 1px;\n  width: 220px;\n  height: 220px;\n  background-color: gray;\n  color: white;\n  font-size: 14px;\n  border-radius: 10px;\n  margin: 5px;\n  padding: 10px;\n}\n.card--media[_ngcontent-%COMP%]   img.principal[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  \u00A0-moz-animation: spinHorizontal 10s infinite linear;\n  -webkit-animation: spinHorizontal 10s infinite linear;\n  animation: spinHorizontal 10s infinite linear;\n}\n.pokename[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n .mat-form-field-label {\n  color: #fcfcfc !important;\n}\n .mat-for m-field-underline {\n  background-color: #fcfcfc !important;\n}\ninput[_ngcontent-%COMP%] {\n  color: #fcfcfc !important;\n}\n@-webkit-keyframes spinHorizontal {\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n@keyframes spinHorizontal {\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlLXRhYmxlL3Bva2UtdGFibGUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9qb3JnZS9Eb2N1bWVudG9zL3Bva2VkZXgvYXJjc2Fwb2tlL3NyYy9hcHAvY29tcG9uZW50cy9wb2tlLXRhYmxlL3Bva2UtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBREFKO0FDRUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRENKO0FDQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBREVKO0FDQUE7RUFDSSxlQUFBO0FER0o7QUNBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBREdKO0FDREE7RUFFSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FER0o7QUNEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7RUFFQSxxREFBQTtFQUNBLDZDQUFBO0FESUo7QUNGQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBREtKO0FDRkE7RUFDSSx5QkFBQTtBREtKO0FDSEE7RUFFSSxvQ0FBQTtBREtKO0FDRkE7RUFDSSx5QkFBQTtBREtKO0FDRkE7RUFDSTtJQUFLLHdCQUFBO0VETVA7RUNMRTtJQUFNLDBCQUFBO0VEUVI7RUNQRTtJQUFPLDBCQUFBO0VEVVQ7QUFDRjtBQ2RBO0VBQ0k7SUFBSyx3QkFBQTtFRE1QO0VDTEU7SUFBTSwwQkFBQTtFRFFSO0VDUEU7SUFBTywwQkFBQTtFRFVUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bva2UtdGFibGUvcG9rZS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDgydmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uYWxlcnRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBva2VudW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5jYXJkLS1tZWRpYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3gtc2hhZG93OiBpbnNldCAxcHg7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZC0tbWVkaWEgaW1nLnByaW5jaXBhbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgwqAtbW96LWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMTBzIGluZmluaXRlIGxpbmVhcjtcbiAgLW8tYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxMHMgaW5maW5pdGUgbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMTBzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxMHMgaW5maW5pdGUgbGluZWFyO1xufVxuXG4ucG9rZW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICNmY2ZjZmMgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3IgbS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgY29sb3I6ICNmY2ZjZmMgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBzcGluSG9yaXpvbnRhbCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MnZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLmFsZXJ0YXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xufVxuYnV0dG9uIGltZ3tcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5idXR0b246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxufVxuLnBva2VudW17XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG4uY2FyZC0tbWVkaWFcbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOjVweDtcbiAgICBwYWRkaW5nOjEwcHg7XG59XG4uY2FyZC0tbWVkaWEgaW1nLnByaW5jaXBhbHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICDCoC1tb3otYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxMHMgaW5maW5pdGUgbGluZWFyO1xuICAgIC1vLWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMTBzIGluZmluaXRlIGxpbmVhcjsgICAgXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxMHMgaW5maW5pdGUgbGluZWFyO1xufVxuLnBva2VuYW1le1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcC5tYXQtZm9yXG5tLWZpZWxkLXVuZGVybGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWwge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB9XG4gICAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7IH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poke-table',
                templateUrl: './poke-table.component.html',
                styleUrls: ['./poke-table.component.scss']
            }]
    }], function () { return [{ type: src_app_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PokemonService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    //Obtiene pokemon
    getPokemons(index) {
        return this.http.get(`${this.baseUrl}/pokemon/${index}`);
    }
}
PokemonService.ɵfac = function PokemonService_Factory(t) { return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonService, factory: PokemonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://pokeapi.co/api/v2'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jorge/Documentos/pokedex/arcsapoke/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map