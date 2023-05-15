
## **Tabela Fipe - BEXUP**

## Visão geral:

Esta sistema busca dados relativos a veiculos em: https://deividfortuna.github.io/fipe/

## Estruturas principais:

- [Node.js v14.18.0 LTS](https://nodejs.org/en/blog/release/v14.18.0/)
- [Reactjs](https://react.dev/)
- [PayloadCMS](https://payloadcms.com/docs/getting-started/what-is-payload)
- [Express](https://github.com/expressjs/express)
- [Eslint](https://github.com/eslint/eslint)
- [MongoDB ](https://cloud.mongodb.com/)

### Iniciando o serviço

Antes de iniciar os serviços, certifique-se de que estão instalados na sua maquina o Docker, Node.Js, e o PNPM/YARN/NPM

A utilização do Docker esta facultativa. Pode iniciar testes sem um container. 

1. Inicio rápido

Mude .env.exemplo para .env , lá esta temporariamente uma url para o mongo que pode utilizar para testar. Temos um usuário criado:
(user: daniloit@gmail.com, senha: 123)

```shell
yarn
yarn dev
```

a) http://localhost:3000/api/marcas/load irá carregar dados na fila SQS.

b) http://localhost:3000/api/marcas/subscribe irá lear dados na fila SQS e salvar no Mongo.

c) http://localhost:3000/api/marcas/64629706dc6531bb1525b975/marca você visualiza marca/modelos/anos.

d) Navegar pelo admin (CRUD's gerais, busca, filtros)

2. Opcionalmente Iniciar container Docker, localstack em andamento:

```shell
docker-compose up -d localstack

```
Esse comando irá rodar todas as instancias docker descritas no docker-compose

(Opcional visualizar logs)

```shell
docker logs -f id   
```

