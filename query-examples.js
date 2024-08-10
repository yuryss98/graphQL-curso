// a query abaixo lista todos os usuarios do sistema com todos os seus produtos
// e tambem lista todos os produtos do sistema, tenho 2 resolvers principais que é "users" e "products" dentro do meu "query"
// e tenho um outro resolver chamado de "products" mas nesse caso é um resolver não do "query" mas sim do "User" que e uma query persinalizada;

// query {
//   users {
//     id
//     name
//     products {
//       id
//       name
//       userId
//     }
//   }
//   products {
//     id
//     name
//     userId
//   }
// }

// **** aliases ***

// aliases: são apelido que damos as querys, por exemplo: o resolver de "users" quando é executado ele retorna algo como:
//   "users": [], mas e se eu quiser chamar por algum motivo 2 vezes na msm consulta esse resolver ?
//   daria problema pois iria dar conflito de chave a final iria tar voltando chaves duplicadas no msm objeto que seria "users"
//   dai entra o "aliases" vc poderia fazer sua query assim:

// query {
//   apelidoUsuario: users {
//     id
//     name
//   }
// }

// retorno disso seria: "apelidoUsuario": [] ao invez de "users": [], ai vc conseguiria fazer duas chamada no msm resolver se assim
// precisasse


// ***** fragment *****

// fragment: e um recurso que permite agrupar os dados de um objeto em uma unica consulta, por exemplo:
// query {
//   users {
//     ...userFields
//   }
// }

// fragment userFields on User {
//   id
//   name
// products {
  //       id
  //       name
  //       userId
  //   }
// }

// dessa forma toda se eu precisar usar os msm dados do usuario em varios resolver é so criar um fragment nesse caso "userFields"
// e passar os dados com spread pra reaproveitar os dados



// ***** Directives *****

// directives: e um recurso que permite adicionar novas regras na sua query, temos duas @include e @skip:

// @include:
// query getUsers($withProducts: Boolean!) {
//   users {
//     id
//     name
//     products @include(if: $withProducts) {
//       id
//       name
//     }
//   }
// }

// no exemplo acima, existe uma variavel chamada "withProducts" que é passada como argumento na query
// e dentro da query eu posso colocar uma regra chamada "include" e dentro dela eu tenho o argumento "if" e o valor da variavel "withProducts"
// ai se a variavel for "true" vai trazer os usuarios com seus produtos, se não vai trazer so os usuarios

// @skip:
// query getUsers($skipProducts: Boolean!) {
//   users {
//     id
//     name
//     products @skip(if: $skipProducts) {
//       id
//       name
//     }
//   }
// }

// no exemplo acima, existe uma variavel chamada "skipProducts" que é passada como argumento na query
// e dentro da query eu posso colocar uma regra chamada "skip" e dentro dela eu tenho o argumento "if" e o valor da variavel "skipProducts"
// ai se a variavel for "true" vai pular os produtos do usuario;

// ou seja @include e @skip são opostos;