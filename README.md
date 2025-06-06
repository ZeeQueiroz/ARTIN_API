
## PROJETO API

API feita para a disciplina de backend, com cadastro de clientes, produtos, categorias, vendas, login e registro.

## Tecnologias usadas

- Node.js
- Express
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- BcryptJS
- Dotenv
- Cors
- Testado no Insomnia

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Crie um arquivo chamado `.env` na raiz do projeto e adicione suas informações

```env
MONGO_URL=sua_string_de_conexao_do_mongo
```

### 4. Rode o projeto

```bash
node index.js
```

ou, se tiver o nodemon instalado:

```bash
npx nodemon index.js
```

Se aparecer no terminal:

```
Servidor online na porta 3000
Conectado ao MongoDB com sucesso
```

Está funcionando!

## Rotas

### Autenticação

- POST `/api/registrar` → Registrar usuário
- POST `/api/login` → Login

### Clientes

- GET `/api/clientes` → Lista todos
- GET `/api/clientes/:id` → Busca por ID
- GET `/api/clientes?nome=` → Busca por nome
- POST `/api/clientes` → Cadastrar cliente
- PUT `/api/clientes/:id` → Atualizar cliente
- DELETE `/api/clientes/:id` → Remover cliente

### Produtos

- GET `/api/produtos` → Lista todos
- GET `/api/produtos/:id` → Busca por ID
- GET `/api/produtos?nome=` → Busca por nome
- POST `/api/produtos` → Cadastrar produto
- PUT `/api/produtos/:id` → Atualizar produto
- DELETE `/api/produtos/:id` → Remover produto

### Categorias

- GET `/api/categorias` → Lista todas
- GET `/api/categorias/:id` → Busca por ID
- GET `/api/categorias?descricao=` → Busca por descrição
- POST `/api/categorias` → Cadastrar categoria
- PUT `/api/categorias/:id` → Atualizar categoria
- DELETE `/api/categorias/:id` → Remover categoria

### Vendas

- GET `/api/vendas` → Lista todas
- GET `/api/vendas/:id` → Busca por ID
- POST `/api/vendas` → Cadastrar venda
- PUT `/api/vendas/:id` → Atualizar venda
- DELETE `/api/vendas/:id` → Remover venda

## Autenticação

As rotas são protegidas por autenticação. Após realizar o login, é necessário enviar o token no header:

```
Authorization: Bearer seu_token
```
