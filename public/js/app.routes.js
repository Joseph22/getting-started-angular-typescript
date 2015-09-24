/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", { controller: "angularWithTS.controllers.tsDemoController", templateUrl: "/views/playlist.html", controllerAs: "playList" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    angularWithTS.Routes = Routes;
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=app.routes.js.map