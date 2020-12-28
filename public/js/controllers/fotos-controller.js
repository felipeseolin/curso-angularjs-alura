angular
  .module("alurapic")
  .controller("FotosController", function ($scope, recursoFoto) {
    $scope.fotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    recursoFoto.query(
      (fotos) => {
        $scope.fotos = fotos;
      },
      (erro) => {
        console.error(erro);
      }
    );

    //   $http.get('v1/fotos')
    //     .then(retorno => $scope.fotos = retorno.data)
    //     .catch((error) => console.error(error));

    // $http
    //   .get("v1/fotos")
    //   .success((fotos) => ($scope.fotos = fotos))
    //   .error((erro) => console.error(erro));

    $scope.remover = function (foto) {
      recursoFoto.delete(
        { fotoId: foto._id },
        () => {
          var indiceFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceFoto, 1);
          $scope.mensagem = `Foto ${foto.titulo} foi removida com sucesso`;
        },
        (erro) => {
          console.error(erro);
          $scope.mensagem = "Não foi possível remover a foto " + foto.titulo;
        }
      );

      // $http
      //   .delete(`v1/fotos/${foto._id}`)
      //   .success(function () {
      //     var indiceFoto = $scope.fotos.indexOf(foto);
      //     $scope.fotos.splice(indiceFoto, 1);
      //     $scope.mensagem = `Foto ${foto.titulo} foi removida com sucesso`;
      //   })
      //   .error(function (erro) {
      //     console.error(erro);
      //     $scope.mensagem = "Não foi possível remover a foto " + foto.titulo;
      //   });
    };
  });
