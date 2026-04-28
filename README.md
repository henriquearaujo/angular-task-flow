# 🚀 Angular Task Flow

Aplicação moderna de gerenciamento de tarefas desenvolvida com Angular (standalone), focada em arquitetura, experiência do usuário e boas práticas de front-end.

---

## 🧠 Sobre o projeto

O **Angular Task Flow** foi criado como um projeto de estudo avançado com foco em simular um cenário real de desenvolvimento front-end.

Mais do que um CRUD simples, o projeto foi pensado para representar:

- Estrutura escalável
- Separação clara de responsabilidades
- Experiência do usuário refinada
- Código preparado para evolução

---

## ✨ Funcionalidades

- 📊 Dashboard com métricas (total, concluídas, pendentes)
- ➕ Criação de tarefas com título e descrição
- ✏️ Edição de tarefas
- 🔄 Alteração de status (pendente / concluída)
- 🗑️ Remoção de tarefas
- 🔍 Filtros (todas, pendentes, concluídas)
- 💾 Persistência com localStorage
- ⚡ Atualização otimista (optimistic UI)
- ⏳ Simulação de API com loading
- 🔔 Feedback ao usuário com toast contextual

---

## 🧩 Arquitetura

O projeto segue uma organização baseada em **feature-first**, aproximando-se de aplicações reais:

```
App
 ├── TaskForm
 ├── TaskList
 │     └── TaskCard
 └── Services
```

### Princípios aplicados

- Separação de responsabilidades
- Componentização
- Reutilização de código
- Baixo acoplamento
- Organização por domínio (features)

---

## ⚙️ Tecnologias Utilizadas

- **Angular 21 (standalone)**
- **Signals & Computed** (estado reativo moderno)
- **Tailwind CSS 4**
- **TypeScript**
- **Vitest (Testes unitários)**
- **PNPM**

---

## 🧠 Decisões Técnicas

### ✔ Uso de Signals
Escolhido para simplificar o gerenciamento de estado local sem necessidade de bibliotecas externas.

### ✔ Simulação de API
Implementada com async/await e delay artificial para representar chamadas reais.

### ✔ Atualização otimista
No toggle de status, a UI responde instantaneamente antes da persistência — melhorando a experiência do usuário.

### ✔ Componentização
Divisão clara entre:
- UI (components)
- Lógica (services)
- Estado (signals)

---

## 🧪 Testes

O projeto inclui testes unitários utilizando **Vitest**, cobrindo:

- CRUD completo
- Regras de negócio
- Persistência de dados

---

## 🚀 Como rodar o projeto

```bash
git clone https://github.com/henriquearaujo/angular-task-flow
cd angular-task-flow
pnpm install
pnpm start
```

Acesse:

```
http://localhost:4200
```

---

## 🏗️ Build de produção

```bash
pnpm build
```

---

## 🧪 Rodar testes

```bash
pnpm test
```

---

## 📌 Roadmap (Evoluções futuras)

- Integração com API real (Node / NestJS / Firebase)
- Estado global (facade ou store)
- Skeleton loading
- Animações de UI
- Deploy (Vercel / Netlify)

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como parte da evolução contínua como desenvolvedor front-end, com foco em:

- Angular moderno
- Boas práticas de arquitetura
- Experiência do usuário
- Código escalável

---

## 👨‍💻 Autor

**Henrique Araújo**  
Front-end Developer | UI/UX Designer  

📧 Email: henrique.e.araujo@gmail.com  
🔗 LinkedIn: https://www.linkedin.com/in/henriquearaujo  

---

## 💬 Observação

Projeto voltado para fins de estudo e demonstração de habilidades técnicas alinhadas com o mercado atual.
