System.register(["angular2/core", "angular2/platform/browser"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, SimpleDirective, HostComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }
        ],
        execute: function () {
            SimpleDirective = /** @class */ (function () {
                function SimpleDirective(elr, renderer) {
                    this.elr = elr;
                    this.renderer = renderer;
                    this.isHidden = false;
                    elr.nativeElement.style.background = 'green';
                }
                SimpleDirective.prototype.handleClick = function () {
                    console.log("I was clicked");
                };
                SimpleDirective.prototype.ngAfterViewInit = function () {
                    this.renderer.setElementProperty(this.elr.nativeElement, 'innerHTML', this.appId);
                };
                __decorate([
                    core_1.Input('aId'),
                    __metadata("design:type", String)
                ], SimpleDirective.prototype, "appId", void 0);
                SimpleDirective = __decorate([
                    core_1.Directive({
                        selector: '[simple-directive]',
                        host: {
                            '(click)': 'handleClick()',
                            '[hidden]': 'isHidden'
                        }
                    }),
                    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
                ], SimpleDirective);
                return SimpleDirective;
            }());
            HostComponent = /** @class */ (function () {
                function HostComponent() {
                    this.name = 'Directive Host';
                    this.appId = 'This is the appId Value';
                }
                HostComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [SimpleDirective],
                        templateUrl: 'templates/app.tpl.html',
                    }),
                    __metadata("design:paramtypes", [])
                ], HostComponent);
                return HostComponent;
            }());
            /**
             * Bootstrap the app with `StarterTemplate`.
             */
            browser_1.bootstrap(HostComponent, []);
        }
    };
});
//# sourceMappingURL=main.js.map