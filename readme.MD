
# Api - Boleto

Esse projeto API-boleto é responsavel por receber a 
linha digitavel de um boleto de pagamento e caso 
seja uma sequencia numerica valida é retornado o 
codido de barra o valor a ser pago e a validade do
boleto indenticado na linha digitavel "sequencia numerica".


## Ferramentas utilizada

 - [NodeJS  v18 ou superior](https://nodejs.org/en/)
 - [Yarn](https://yarnpkg.com/)
 - [ExpressJs](https://expressjs.com/)
 - [Nodemon](https://nodemon.io/)


## Instalação


Ja com node instalado em sua maquina

na raiz do projeto
execute o yarn para instalar as ferramentas utilizadas no projeto

```bash
$ yarn

```
ao executar o yarn as dependencias usadas no projeto vão ser instaladas automaticamente
e depois disso é so inciar a aplicação com o comando abaixo.

```bash
$ yarn dev

```
com isso vc recebera um log de sucesso informando que o projeto esta sendo executado.

## Exemplo de uso da API

#### Aplicação com rota Unica  'GET'!!

URL_BASE: http://localhost:8080

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `barcode` | `string` | **Obrigatório**. a sequencia numerica 'codigo do boleto' |

####  Usando a requisição de sucesso!
```http
  GET  URL_BASE/boleto/21290001192110001210904475617405975872000010000

  resposta: 
  Status: 200
  {
	"barCode": "21299758720000100000001121100012100447561740",
	"expirateDate": "2024/6/25",
	"amount": "20.000.100.00"
}

```

####  Usando a requisição com caso de erro!
caso a sua sequencia contenha algum caracter especial ou letra retornará um erro

```http
  GET  URL_BASE/boleto/2f290001192110001210904475617405975872000010000

  resposta: 
  Status: 400
{
	"message": "Only numbers are allowed."
}

```

####  Usando a requisição com outro caso de erro!
caso a sua sequencia contenha menos de 44 caracteres ou mais de 48 retornará erro

```http
  GET  URL_BASE/boleto/23290001192110

  resposta: 
  Status: 400
{
	"message": "Enter a valid code, the default is a numerical string of 44 to 48 characters."
}

```

