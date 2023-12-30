# Nic - Documentação

### Requisitos obrigatórios

- [**Lerna**](https://lerna.js.org/) na versão **8.0.1**
- [**Node**](https://nodejs.org/en) na versão **20.10.0**
- [**Yarn**](https://classic.yarnpkg.com/en/docs) na versão **1.22.21**

## Instalando as ferramentas

#### 1. Instale a última versão do NVM

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

#### 2. Instale o Node, Lerna e Yarn

```sh
nvm i 20.10.0 && npm i -g yarn@1.22.21 lerna@8.0.1
```

> #### 3. (Opcional) Instale a CLI do Nest.js
>
> ```sh
> npm i -g @nestjs/cli
> ```

## Instalando dependências

#### 1. Instalação de todas as dependências (front-end e back-end)

```sh
yarn bootstrap
```

> **Comando alternativo**: **`lerna run bootstrap`**

#### 2. Instalação de dependências de ambientes separados

```sh
lerna bootstrap:[ambiente]
```

> <details>
>  <summary>Ambientes disponíveis</summary>
>
> |   Front-End   |   Back-End   |
> |---------------|--------------|
> |   **front**   |   **back**   |
></details>

#### 3. Remoção de todas as dependências no Node

```sh
lerna clean -y
```

## Inicializando o back-end para desenvolvimento

#### 1. Navegue até a pasta `backend`

```sh
cd backend
```

#### 2. Inicialize o container do PostgreSQL

```sh
docker compose up postgresql -d
```

> **Opcional**: caso queira utilizar o **pgAdmin**, execute **`docker compose up -d`**

#### 3. Crie um arquivo de variáveis de ambiente baseado no `.env.example`

```sh
cp .env.example .env
```

#### 3.1 Edite o conteúdo do arquivo `.env`

```js
DATABASE_URL="postgresql://[usuário]:[senha]@[host]:5432/[nome do banco]?schema=public"
NODE_ENV="dev"
JWT_SECRET=[token]
```

> **⚠️ Atenção**: as credenciais do endereço de conexão do banco de dados são as **variáveis de ambiente do container do PostgreSQL** presentes no arquivo **`docker-compose.yml`**

> **Obs**: o **<ins>token</ins>** de desenvolvimento está disponível no guia do projeto no Notion

#### 3.2 Crie migrações do PostgreSQL com o Prisma ORM

```sh
npx prisma migrate dev --name [nome da migração]
```

> **Recomendação**: nomeie migrações de desenvolvimento com a palavra "**dev**" para facilitar a identificação

#### 4. Inicialize o servidor com o Nest.js

```sh
yarn nest:dev
```

> **💡 Dica**: caso tenha fechado o terminal e/ou retornado ao diretório raiz, você poderá inicializar o servidor executando **`yarn backend:dev`**

## Inicializando o front-end para desenvolvimento

#### 1. Navegue até a pasta `frontend`

```sh
cd frontend
```

#### 2. Inicialize a prévia do front-end

```sh
yarn nextjs:dev
```

> **🚨 Atenção**: o Next.js disponibilizará o front-end na porta **3000**. Caso prefira uma porta diferente, informe o argumento **`-p [porta]`** (e.g **`yarn nextjs:dev -p 3333`**)

> **💡 Dica**: caso tenha fechado o terminal e/ou retornado ao diretório raiz, você poderá inicializar o servidor executando **`yarn frontend:dev`**
