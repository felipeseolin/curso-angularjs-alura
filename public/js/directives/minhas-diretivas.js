angular.module("minhasDiretivas", []).directive("meuPainel", () => {
  var ddo = {
    restric: "AE",
    scope: {
      titulo: "@",
    },
    transclude: true,
    templateUrl: 'js/directives/meu-painel.html',
    // template: `
    // <div class="panel panel-default">
    //     <div class="panel-heading">
    //         <h3 class="panel-title">{{titulo}}</h3>
    //     </div>
    //     <div class="panel-body" ng-transclude>
    //     </div>
    // </div>
    // `,
  };

  return ddo;
});