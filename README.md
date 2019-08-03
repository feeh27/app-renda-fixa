# App Renda Fixa

Projeto proposto pelo App Renda Fixa

Desenvolvido com Angular 8.2.* e MDBootstrap 8.1.*

## Requisitos

  * GIT
  * Node + Npm
  * Docker

Instale os programas acima listados. 

## Configuração do repositório e dependências

Utilizando o Git, siga os passos abaixo para configuração desse projeto:

### Clone esse repositório

```bash
git clone https://github.com/feeh27/app-renda-fixa
```

### Instale as dependências com npm

```bash
cd app-renda-fixa
npm install
```

### Inicie o servidor e verifique se está tudo funcionando

**Iniciando o servidor localmente:**
```bash
ng serve --host 0.0.0.0 --port 80 --open
```

**Iniciando o servidor localmente com docker:**
```bash
docker-compose up -d --build
```
**Obs:** Utilizar esse comando no diretório do arquivo `docker-compose.yml`.

#### Resultado esperado

![image](hello-world.png)
