angular
  .module("alurapic")
  .controller("FotoController", function ($scope, $routeParams, recursoFoto) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.fotoId) {
      recursoFoto.get(
        { fotoId: $routeParams.fotoId },
        (foto) => {
          $scope.foto = foto;
        },
        (erro) => {
          console.error(erro);
          $scope.mensagem = "Não foi possível obter a foto";
        }
      );
      // $http
      //   .get("v1/fotos/" + $routeParams.fotoId)
      //   .success(function (foto) {
      //     $scope.foto = foto;
      //   })
      //   .error(function (erro) {
      //     console.error(erro);
      //     $scope.mensagem = "Não foi possível obter a foto";
      //   });
    }

    $scope.submeter = function () {
      if ($scope.formulario.$invalid) {
        return;
      }

      if ($scope.foto._id) {
        recursoFoto.update(
          { fotoId: $scope.foto._id },
          $scope.foto,
          () => {
            $scope.mensagem = "Foto " + $scope.foto.titulo + " com sucesso";
          },
          (erro) => {
            console.error(erro);
            $scope.mensagem =
              "Não foi possível alterar a foto " + $scope.foto.titulo;
          }
        );
        // $http
        //   .put("v1/fotos/" + $scope.foto._id, $scope.foto)
        //   .success(function () {
        //     $scope.mensagem = "Foto " + $scope.foto.titulo + " com sucesso";
        //   })
        //   .error(function () {
        //     console.log("Erro");
        //     $scope.mensagem =
        //       "Não foi possível alterar a foto " + $scope.foto.titulo;
        //   });
      } else {
        recursoFoto.save(
          $scope.foto,
          () => {
            $scope.foto = {};
            $scope.mensagem = "Foto incluída com sucesso";
          },
          (erro) => {
            console.error(erro);
            $scope.mensagem = "Não foi possível incluir a foto";
          }
        );
        // $http
        //   .post("v1/fotos", $scope.foto)
        //   .success(function () {
        //     $scope.foto = {};
        //     $scope.mensagem = "Foto incluída com sucesso";
        //   })
        //   .error(function () {
        //     console.log("Erro");
        //     $scope.mensagem = "Não foi possível incluir a foto";
        //   });
      }
    };
  });
