System.register(["angular2/core", "angular2/platform/browser", "angular2/src/common/pipes"], function (exports_1, context_1) {
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
    var core_1, browser_1, pipes_1, SimplePipe, UnitPipe, StarterTemplate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            }
        ],
        execute: function () {
            SimplePipe = /** @class */ (function () {
                function SimplePipe() {
                }
                SimplePipe.prototype.transform = function (input) {
                    return input + 'px';
                };
                SimplePipe = __decorate([
                    core_1.Pipe({
                        name: 'pixelPipe'
                    })
                ], SimplePipe);
                return SimplePipe;
            }());
            UnitPipe = /** @class */ (function () {
                function UnitPipe() {
                }
                UnitPipe.prototype.transform = function (input, arg1, arg2) {
                    var unit = arg1 || 'px';
                    arg2 = arg2 || '5';
                    return input + unit + arg2;
                };
                UnitPipe = __decorate([
                    core_1.Pipe({
                        name: 'unit'
                    })
                ], UnitPipe);
                return UnitPipe;
            }());
            StarterTemplate = /** @class */ (function () {
                function StarterTemplate() {
                    var unitPipe = new UnitPipe();
                    var datePipe = new pipes_1.DatePipe();
                    this.name = 'Basic Pipe Example';
                    this.value = unitPipe.transform('12', '%', '10');
                    this.today = new Date();
                    this.todayInside = datePipe.transform(new Date(), 'MMMh');
                    this.students = [
                        { id: 1, name: 'Tom' },
                        { id: 2, name: 'Jerry' },
                        { id: 3, name: 'Goofy' },
                        { id: 4, name: 'Flinstone' },
                        { id: 5, name: 'Shabby' }
                    ];
                }
                StarterTemplate = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                        pipes: [SimplePipe, UnitPipe]
                    }),
                    __metadata("design:paramtypes", [])
                ], StarterTemplate);
                return StarterTemplate;
            }());
            /**
             * Bootstrap the app with `StarterTemplate`.
             */
            browser_1.bootstrap(StarterTemplate, []);
        }
    };
});
//# sourceMappingURL=main.js.map