System.register(["angular2/core", "angular2/platform/browser", "angular2/http"], function (exports_1, context_1) {
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
    var core_1, browser_1, http_1, StudentSvc, StarterTemplate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            StudentSvc = /** @class */ (function () {
                function StudentSvc(http) {
                    this.http = http;
                }
                StudentSvc.prototype.getStudents = function () {
                    return this.http.get('https://reqres.in/api/users');
                };
                StudentSvc = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], StudentSvc);
                return StudentSvc;
            }());
            StarterTemplate = /** @class */ (function () {
                function StarterTemplate(studentSvc) {
                    var _this = this;
                    this.name = 'Http Service Example';
                    studentSvc.getStudents().subscribe(function (resp) {
                        _this.students = resp.json().data;
                    });
                }
                StarterTemplate = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                        providers: [http_1.HTTP_PROVIDERS, StudentSvc]
                    }),
                    __metadata("design:paramtypes", [StudentSvc])
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