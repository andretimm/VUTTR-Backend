# Very Useful Tools to Remember
---
## Requisitos :
* [Yarn](https://yarnpkg.com/en/)

## Começando
* Clone o repositório e instale as dependências
```sheel
$ git clone https://github.com/andretimm/VUTTR-Backend.git
$ cd VUTTR-Backend && yarn install
```
* Rodar os testes
```shell
$ yarn test
```
* Iniciar servidor local (http:localhost:3000/)
```shell
$ yarn start
```

## Documentação
* Abra o arquivo arquivo `doc.html`, nele contem a documentação da api.
*
Para gerar a documentação novamente instale o aglio de modo global :
`yarn global add aglio`, e em seguida execute o comando :
```shell
$  aglio -i api.apib -o doc.html
```