# use-country-info

## Descrição

Este projeto é uma biblioteca React chamada `use-country-info`, que fornece hooks e componentes para buscar e exibir informações sobre países, como bandeiras, moedas, idiomas, capitais, populações e áreas.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
use-country-info
├── src
│   ├── index.ts
│   └── types
│       └── index.ts
├── examples
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components
│   │   │   ├── CountryCard
│   │   │   │   ├── CountryCard.js
│   │   │   │   └── CountryCard.css
│   │   │   ├── CountryList
│   │   │   │   ├── CountryList.js
│   │   │   │   └── CountryList.css
│   │   │   └── SearchBar
│   │   │       ├── SearchBar.js
│   │   │       └── SearchBar.css
│   │   ├── pages
│   │   │   ├── Home
│   │   │   │   ├── Home.js
│   │   │   │   └── Home.css
│   │   │   └── Examples
│   │   │       ├── Examples.js
│   │   │       └── Examples.css
│   │   └── styles
│   │       └── global.css
│   ├── package.json
│   └── README.md
├── package.json
├── tsconfig.json
└── README.md
```

## Exemplos de Uso

Para ver exemplos de como usar a biblioteca, você pode executar a aplicação de exemplos incluída no projeto. A aplicação demonstra como utilizar os hooks e componentes disponíveis.

### Como Fazer o Deploy no GitHub Pages

1. **Instalar o GitHub Pages**: No diretório da aplicação de exemplos, instale o pacote `gh-pages` como uma dependência de desenvolvimento:
   ```
   npm install gh-pages --save-dev
   ```

2. **Adicionar scripts no package.json**: No `examples/package.json`, adicione os seguintes scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Configurar a homepage**: Adicione a propriedade `homepage` no `examples/package.json` com o link do seu repositório GitHub:
   ```json
   "homepage": "https://<seu-usuario>.github.io/<nome-do-repositorio>"
   ```

4. **Construir a aplicação**: Execute o comando para construir a aplicação:
   ```
   npm run build
   ```

5. **Fazer o deploy**: Execute o comando para fazer o deploy da aplicação:
   ```
   npm run deploy
   ```

6. **Acessar a aplicação**: Após o deploy, a aplicação estará disponível no link especificado na propriedade `homepage`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests no repositório do GitHub.