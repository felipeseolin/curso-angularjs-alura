angular
  .module("minhasDiretivas", [])
  .directive("meuPainel", () => {
    var ddo = {
      restrict: "AE",
      scope: {
        titulo: "@",
      },
      transclude: true,
      templateUrl: "js/directives/meu-painel.html",
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
  })
  .directive("minhaFoto", () => {
    var ddo = {};

    ddo.restrict = "AE";
    ddo.scope = {
      titulo: "@",
      url: "@",
    };
    ddo.templateUrl = "js/directives/minha-foto.html";

    return ddo;
  })
  .directive("meuBotaoPerigo", function () {
    var ddo = {
      restrict: "E",
      scope: {
        nome: "@",
        acao: "&",
      },
      template:
        '<button ng-click="acao()" class="btn btn-danger btn-block">{{nome}}</button>',
    };

    return ddo;
  })
  .directive("meuFocus", function () {
    var ddo = {
      restrict: "A",
      // scope: {
      //   focado: "=",
      // },
      link: function (scope, element) {
        // scope.$watch("focado", function () {
        //   if (scope.focado) {
        //     element[0].focus();
        //     scope.focado = false;
        //   }
        // });
        scope.$on("fotoCadastrada", function () {
          element[0].focus();
        });
      },
    };

    return ddo;
  })
  .directive("meusTitulos", function () {
    var ddo = {
      restrict: "E",
      template: '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>',
      controller: function ($scope, recursoFoto) {
        recursoFoto.query((fotos) => {
          $scope.titulos = fotos.map((foto) => foto.titulo);
        });
      },
    };
    return ddo;
  });
