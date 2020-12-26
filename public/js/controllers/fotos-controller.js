angular.module("alurapic").controller("FotosController", function ($scope, $http) {
  $scope.fotos = [];
  $scope.filtro = '';
  
//   $http.get('v1/fotos')
//     .then(retorno => $scope.fotos = retorno.data)
//     .catch((error) => console.error(error));

    $http.get('v1/fotos')
    .success((fotos) => $scope.fotos = fotos)
    .error((erro) => console.error(erro));
});
