
## registrar livro
```bash
curl -X POST http://localhost:3000/biblioteca/newbook \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Produto Exemplo",
    "descricao": "Descrição do produto",
    "preco": 100.50,
    "autor": "Autor Exemplo"
  }'
```
## update livro
```bash
curl -X PUT http://localhost:3000/biblioteca/update/5 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "NovoNomedoProduto",
    "descricao": "Nova descrição do produto",
    "preco": 150.75,
    "autor": "Novo Autor"
  }'
```
## get livros
```bash
curl -X GET http://localhost:3000/biblioteca/getbook

````
## atualizar livros
```bash
curl -X DELETE http://localhost:3000/biblioteca/deletebook/2
```