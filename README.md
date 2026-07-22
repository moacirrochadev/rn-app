# RN App

Aplicativo mobile desenvolvido com Expo, React Native e TypeScript para gerenciamento local de links por categoria. O projeto utiliza Expo Router para navegação entre telas e AsyncStorage para persistência, mantendo os dados armazenados no dispositivo sem depender de backend.

## Visão geral

O fluxo principal do app cobre cadastro, consulta, filtragem e manutenção de links. A tela inicial exibe os itens salvos por categoria e permite abrir ou remover registros. A tela de inclusão coleta nome, URL e categoria para persistir um novo link localmente.

## Funcionalidades

- Cadastro de links com nome, URL e categoria.
- Listagem e filtragem dos links salvos.
- Abertura do link no navegador padrão.
- Exclusão de registros com confirmação.
- Persistência local com AsyncStorage.

## Tecnologias

- Expo
- React Native
- TypeScript
- Expo Router
- AsyncStorage

## Execução

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

- `src/app`: rotas, telas e composição das páginas.
- `src/components`: componentes reutilizáveis de interface.
- `src/storage`: abstração de persistência local.
- `src/utils`: dados estáticos e auxiliares do domínio.
- `src/styles`: tokens visuais e estilos compartilhados.

## Observação técnica

O projeto não possui backend nem sincronização remota. Toda a informação depende do armazenamento local do dispositivo, então a reinstalação do app ou a limpeza dos dados apaga os registros salvos.