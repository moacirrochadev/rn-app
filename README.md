# RN App

Aplicativo mobile feito com Expo, React Native e TypeScript para salvar, organizar e acessar links de forma simples. O projeto usa navegação com Expo Router e armazenamento local com AsyncStorage, então os dados ficam salvos no próprio dispositivo.

## Sobre o projeto

Este app foi pensado para registrar links por categoria e facilitar a consulta depois. A tela inicial lista os links salvos, permite filtrar por categoria e abrir ou excluir cada item. A tela de cadastro permite adicionar novos links com nome, URL e categoria.

## Funcionalidades

- Cadastro de links com nome, URL e categoria.
- Listagem de links salvos.
- Filtro por categoria.
- Abertura do link no navegador.
- Exclusão de links.
- Persistência local dos dados no dispositivo.

## Tecnologias

- Expo
- React Native
- TypeScript
- Expo Router
- AsyncStorage

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm start
```

3. Se quiser abrir em uma plataforma específica, use um dos scripts disponíveis:

```bash
npm run android
npm run ios
npm run web
```

## Estrutura principal

- `src/app`: telas e rotas do app.
- `src/components`: componentes reutilizáveis da interface.
- `src/storage`: camada de persistência local.
- `src/utils`: dados auxiliares, como categorias.
- `src/styles`: cores e estilos compartilhados.

## Observação

Os links são armazenados apenas localmente no dispositivo. Se o app for reinstalado ou os dados forem limpos, o conteúdo salvo será perdido.