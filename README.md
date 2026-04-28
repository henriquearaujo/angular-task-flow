# Angular Task Flow

Uma aplicação simples e eficiente para gerenciamento de tarefas pessoais, desenvolvida com Angular. Permite adicionar, visualizar, alternar o status e remover tarefas, com dados armazenados localmente no navegador.

## Funcionalidades

- **Painel de Controle**: Visualize estatísticas rápidas (total, concluídas e pendentes).
- **Lista de Tarefas**: Gerencie tarefas com título, descrição e status.
- **Persistência Local**: Dados salvos no localStorage do navegador.
- **Interface Responsiva**: Design moderno com Tailwind CSS.

## Tecnologias Utilizadas

- **Angular 21**: Framework principal para construção da aplicação.
- **Tailwind CSS 4**: Estilização utilitária para interface responsiva.
- **TypeScript**: Tipagem estática para maior robustez.
- **RxJS**: Programação reativa para gerenciamento de estado.
- **Vitest**: Testes unitários rápidos e modernos.
- **Prettier**: Formatação automática de código.

## Pré-requisitos

- Node.js (versão 18+)
- pnpm (recomendado) ou npm

## Instalação

1. Clone o repositório e entre na pasta:
   ```bash
   git clone <url-do-repositorio>
   cd angular-task-flow
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

## Uso

### Desenvolvimento
Inicie o servidor local:
```bash
pnpm start
# ou
ng serve
```
Acesse `http://localhost:4200` no navegador.

### Build de Produção
Compile para produção:
```bash
pnpm run build
# ou
ng build
```

### Testes
Execute os testes:
```bash
pnpm test
# ou
ng test
```

## Estrutura do Projeto

- `src/app/`: Código da aplicação
  - `core/`: Serviços e lógica central
  - `features/tasks/`: Funcionalidades relacionadas a tarefas
  - `shared/`: Componentes compartilhados
- `public/`: Assets estáticos
- `src/styles.css`: Estilos globais com Tailwind

## Comandos Úteis

- `ng generate component <nome>`: Criar novo componente
- `ng generate service <nome>`: Criar novo serviço
- `pnpm run watch`: Build em modo watch para desenvolvimento
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
