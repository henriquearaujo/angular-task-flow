# Angular Task Flow

Este projeto é uma aplicação de gerenciamento de tarefas desenvolvida com Angular. Permite criar, editar, visualizar e organizar tarefas de forma eficiente, utilizando uma arquitetura modular com componentes, serviços e páginas dedicadas.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Angular CLI](https://angular.dev/tools/cli) (versão 21.2.8 ou superior)
- Gerenciador de pacotes: [pnpm](https://pnpm.io/) (recomendado) ou npm

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd angular-task-flow
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

## Executando o Servidor de Desenvolvimento

Para iniciar o servidor local de desenvolvimento, execute:
```bash
ng serve
```

Abra o navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar os arquivos fonte.

## Geração de Código

O Angular CLI oferece ferramentas poderosas para geração de código. Para criar um novo componente, execute:
```bash
ng generate component nome-do-componente
```

Para ver a lista complete de esquemas disponíveis (como componentes, diretivas ou pipes), execute:
```bash
ng generate --help
```

## Build

Para compilar o projeto, execute:
```bash
ng build
```

Isso compilará o projeto e armazenará os artefatos de build no diretório `dist/`. Por padrão, o build de produção otimiza a aplicação para performance e velocidade.

## Executando Testes Unitários

Para executar testes unitários com o [Vitest](https://vitest.dev/), use:
```bash
ng test
```

## Executando Testes End-to-End

Para testes end-to-end (e2e), execute:
```bash
ng e2e
```

O Angular CLI não vem com um framework de teste e2e por padrão. Escolha um que atenda às suas necessidades.

## Estrutura do Projeto

- `src/app/core/`: Lógica central da aplicação
- `src/app/features/tasks/`: Funcionalidades relacionadas a tarefas (componentes, páginas, serviços, modelos)
- `src/app/shared/`: Componentes e utilitários compartilhados

## Recursos Adicionais

Para mais informações sobre o uso do Angular CLI, incluindo referências detalhadas de comandos, visite a [Visão Geral e Referência de Comandos do Angular CLI](https://angular.dev/tools/cli).
