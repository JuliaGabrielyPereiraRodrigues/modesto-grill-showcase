# Welcome to your Lovable project
<div align="center">

# 🍔 Modesto Grill

### Website de Apresentação para Hamburgueria Artesanal

**Uma experiência digital que combina design, interatividade e animações para apresentar uma hamburgueria artesanal.**

<br>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

<br>

[Sobre](#-sobre-o-projeto) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias-utilizadas) •
[Instalação](#-instalação-e-execução) •
[Estrutura](#-estrutura-do-projeto)

</div>

---

## 📖 Sobre o projeto

O **Modesto Grill** é um projeto de desenvolvimento front-end que apresenta uma landing page moderna e responsiva para uma hamburgueria artesanal.

A aplicação foi construída com foco na experiência do usuário, utilizando elementos visuais, animações e componentes interativos para apresentar a identidade da marca, os produtos e as informações do estabelecimento.

O projeto explora conceitos de **UI/UX Design, componentização, responsividade e animações para interfaces web**, oferecendo uma experiência de navegação dinâmica em diferentes dispositivos.

### 🎯 Objetivos

- Desenvolver uma interface moderna e visualmente atrativa.
- Aplicar conceitos de design responsivo.
- Criar componentes reutilizáveis com React.
- Utilizar animações para melhorar a experiência de navegação.
- Explorar interações e transições utilizando Framer Motion.
- Organizar uma aplicação front-end com TypeScript.

---

## ✨ Funcionalidades

### 🏠 Página inicial

- Seção principal com imagem de destaque.
- Apresentação da identidade visual da hamburgueria.
- Animações de entrada e transições.
- Elementos tipográficos com efeitos visuais.
- Navegação para as demais seções do site.

### 🍔 Apresentação dos produtos

- Exibição de diferentes tamanhos de hambúrgueres.
- Imagens ilustrativas dos produtos.
- Descrições dos tamanhos disponíveis.
- Efeitos interativos ao passar o cursor.
- Layout adaptado para diferentes resoluções.

### 🔥 Destaques do cardápio

- Apresentação de quatro hambúrgueres em destaque.
- Seleção interativa entre os produtos.
- Exibição de imagens e descrições.
- Transições animadas ao trocar o item selecionado.
- Composição visual com elementos circulares.

### 📍 Informações do estabelecimento

- Seção dedicada à localização.
- Integração visual com Google Maps.
- Exibição de endereço e horários.
- Links de navegação para serviços externos.

### 📱 Navegação responsiva

- Menu de navegação adaptado para dispositivos móveis.
- Indicador visual da seção ativa.
- Menu mobile com animações.
- Rolagem suave entre seções.
- Efeitos visuais durante a navegação.

### 🎨 Experiência visual

- Animações baseadas na rolagem da página.
- Transições de opacidade, escala e posição.
- Efeitos de hover em componentes.
- Tipografia personalizada.
- Paleta de cores inspirada em brasas e fogo.
- Layout responsivo utilizando Tailwind CSS.

> O projeto é uma aplicação de apresentação institucional e visual. Não possui sistema próprio de pedidos, pagamentos ou gerenciamento de estoque.

---

## 🛠️ Tecnologias utilizadas

### Desenvolvimento front-end

| Tecnologia | Finalidade |
|:---|:---|
| **React 18** | Construção da interface com componentes |
| **TypeScript** | Tipagem estática e organização do código |
| **Vite** | Ambiente de desenvolvimento e build |
| **Tailwind CSS** | Estilização responsiva |
| **Framer Motion** | Animações e transições |
| **React Router DOM** | Gerenciamento das rotas |
| **Lucide React** | Ícones da interface |

### Bibliotecas e ferramentas

| Tecnologia | Finalidade |
|:---|:---|
| **shadcn/ui** | Componentes reutilizáveis de interface |
| **Radix UI** | Primitivos acessíveis para componentes |
| **TanStack Query** | Infraestrutura disponível para gerenciamento de dados assíncronos |
| **ESLint** | Análise estática e padronização de código |
| **Vitest** | Estrutura para testes automatizados |

> Algumas bibliotecas estão instaladas como parte da estrutura do projeto, mas não são necessariamente utilizadas nas funcionalidades principais da página.

---

## 🏗️ Arquitetura da aplicação

O projeto utiliza uma arquitetura baseada em componentes React, permitindo separar as diferentes áreas da interface.

```text
                    ┌───────────────────┐
                    │      App.tsx      │
                    │  Roteamento Web   │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │     Index.tsx     │
                    │   Página Inicial  │
                    └─────────┬─────────┘
                              │
             ┌────────────────┴────────────────┐
             │                                 │
             ▼                                 ▼
    ┌─────────────────┐               ┌─────────────────┐
    │     Navbar      │               │   HeroSection   │
    │    Navegação    │               │   Apresentação  │
    └─────────────────┘               └─────────────────┘
             │
             ▼
    ┌─────────────────┐
    │  AboutSection   │
    │   Sobre a marca │
    └─────────────────┘
             │
             ▼
    ┌─────────────────┐
    │  SizesSection   │
    │ Tamanhos        │
    └─────────────────┘
             │
             ▼
    ┌─────────────────┐
    │HighlightsSection│
    │ Produtos        │
    └─────────────────┘
             │
             ▼
    ┌─────────────────┐
    │ LocationSection │
    │ Localização     │
    └─────────────────┘
             │
             ▼
    ┌─────────────────┐
    │     Footer      │
    │  Informações    │
    └─────────────────┘
```

Cada seção possui um componente próprio, facilitando a manutenção, a organização e futuras alterações visuais.

---

## 📁 Estrutura do projeto

```text
modesto-grill-showcase/
│
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   │
│   ├── assets/
│   │   ├── logo-modesto.png
│   │   ├── hero-burger.jpg
│   │   ├── about-ambiance.jpg
│   │   ├── about-kitchen.jpg
│   │   ├── burger-destaque-1.jpg
│   │   ├── burger-destaque-2.jpg
│   │   ├── burger-destaque-3.jpg
│   │   └── burger-destaque-4.jpg
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── NavLink.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SizesSection.tsx
│   │   ├── HighlightsSection.tsx
│   │   ├── LocationSection.tsx
│   │   └── Footer.tsx
│   │
│   ├── hooks/
│   ├── lib/
│   │
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   │
│   ├── test/
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.ts
├── vite.config.ts
├── vitest.config.ts
├── tsconfig.json
└── README.md
```

### Organização dos componentes

| Componente | Responsabilidade |
|:---|:---|
| `Navbar.tsx` | Menu de navegação responsivo |
| `HeroSection.tsx` | Seção inicial com animações |
| `AboutSection.tsx` | Apresentação da hamburgueria |
| `SizesSection.tsx` | Exibição dos tamanhos de hambúrgueres |
| `HighlightsSection.tsx` | Apresentação interativa dos produtos |
| `LocationSection.tsx` | Localização e informações do estabelecimento |
| `Footer.tsx` | Rodapé, links externos e informações complementares |

---

## 🚀 Instalação e execução

### Pré-requisitos

Para executar o projeto, é necessário possuir:

- Node.js instalado.
- Gerenciador de pacotes npm.
- Git (opcional, para clonar o repositório).

### 1. Clone o repositório

```bash
git clone https://github.com/JuliaGabrielyPereiraRodrigues/modesto-grill-showcase.git
```

Acesse a pasta do projeto:

```bash
cd modesto-grill-showcase
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local de acesso, normalmente:

```text
http://localhost:5173
```

Abra o endereço indicado no navegador.

### 4. Gere a versão de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados no diretório `dist/`.

### 5. Visualize a versão de produção

```bash
npm run preview
```

---

## 🧪 Testes e qualidade de código

O projeto possui configurações de ESLint e Vitest.

### Executar os testes

```bash
npm run test
```

### Executar o ESLint

```bash
npm run lint
```

### Executar os testes em modo de observação

```bash
npm run test:watch
```

> O repositório contém uma estrutura inicial de testes. Os testes existentes não representam cobertura completa das funcionalidades da interface.

---

## 🎨 Design e experiência do usuário

O desenvolvimento visual foi orientado por uma proposta de identidade relacionada ao universo das hamburguerias artesanais.

### Elementos de design

- **Identidade visual temática:** cores e elementos inspirados no fogo e na brasa.
- **Hierarquia visual:** destaque para títulos, imagens e informações principais.
- **Animações:** transições utilizadas para reforçar a experiência de navegação.
- **Responsividade:** adaptação do layout a diferentes tamanhos de tela.
- **Componentização:** separação dos elementos da interface para facilitar manutenção.
- **Interatividade:** elementos de seleção, navegação e efeitos visuais.

### Framer Motion

As animações são aplicadas em diferentes componentes e incluem:

- Entrada progressiva dos elementos.
- Efeitos de escala e deslocamento.
- Transições de opacidade.
- Animações acionadas pela visualização de seções.
- Efeitos de interação com o cursor.
- Transições entre elementos selecionados.

---

## 📚 Aprendizados

O projeto permite exercitar conhecimentos em:

- Desenvolvimento de aplicações com React e TypeScript.
- Organização de componentes reutilizáveis.
- Criação de páginas responsivas.
- Estilização com Tailwind CSS.
- Desenvolvimento de interfaces com foco em UI/UX.
- Implementação de animações com Framer Motion.
- Navegação entre seções.
- Utilização de assets e recursos visuais.
- Organização de projetos com Vite.
- Estruturação e manutenção de aplicações front-end.

---

## 🔮 Possíveis melhorias

- Adicionar capturas de tela e demonstração em vídeo.
- Disponibilizar uma versão online do projeto.
- Substituir informações e links ilustrativos por dados reais.
- Aprimorar a acessibilidade dos componentes interativos.
- Otimizar carregamento e compressão das imagens.
- Implementar testes de interação.
- Melhorar indicadores de desempenho e SEO.
- Desenvolver integração com cardápio digital.
- Adicionar funcionalidades de pedidos online em uma futura versão.

---

## 📌 Sobre a aplicação

Este repositório contém um projeto de apresentação visual de uma hamburgueria.

Algumas informações comerciais, links e dados de contato utilizados na interface são demonstrativos e devem ser revisados antes de qualquer publicação como site oficial.

---

## 👩‍💻 Autoria

Projeto de desenvolvimento front-end disponibilizado no portfólio de **[Julia Gabriely](https://github.com/JuliaGabrielyPereiraRodrigues)**.

<div align="center">

---

**[⬆ Voltar ao topo](#-modesto-grill)**

</div>

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
