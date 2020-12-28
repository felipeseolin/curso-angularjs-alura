angular
  .module("meusServicos", ["ngResource"])
  .factory("recursoFoto", function ($resource) {
    return $resource("v1/fotos/:fotoId", null, {
      update: { method: "PUT" },
    });
  })
  .factory("cadastroDeFotos", function (recursoFoto, $q, $rootScope) {
    var servico = {};
    var evento = "fotoCadastrada";

    servico.cadastrar = function (foto) {
      return $q(function (resolve, reject) {
        if (foto._id) {
          recursoFoto.update(
            { fotoId: foto._id },
            foto,
            () => {
              $rootScope.$broadcast(evento);
              resolve({
                mensagem: `Foto ${foto.titulo} atualizada com sucesso!`,
                inclusao: false,
              });
            },
            (erro) => {
              console.error(erro);
              reject({
                mensagem: `Não foi possível alterar a foto ${foto.titulo}`,
              });
            }
          );
        } else {
          recursoFoto.save(
            foto,
            () => {
              $rootScope.$broadcast(evento);
              resolve({
                mensagem: `Foto ${foto.titulo} incluida com sucesso`,
                inclusao: true,
              });
            },
            (erro) => {
              console.error(erro);
              reject({
                mensagem: `Não foi possível incluir a foto ${foto.titulo}`,
              });
            }
          );
        }
      });
    };

    return servico;
  });
