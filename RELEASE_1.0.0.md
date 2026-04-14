# 💎 Social Preview Node: v1.0.0 "The Genesis"

Temos o prazer de anunciar o lançamento oficial da versão **1.0.0** do Social Preview Node para n8n. Esta versão marca a transição de um experimento técnico para uma ferramenta de produção robusta, projetada para elevar o nível visual das suas automações.

---

## 🌟 O que há de novo na 1.0.0?

### 1. Motor de Renderização de Última Geração
Integramos o **Satori** (vercel) e o **resvg-js**. O que isso significa para você?
- **Fidelidade de CSS Moderno**: Você não está limitado a bitmaps estáticos. O node entende Flexbox e propriedades modernas de CSS.
- **Velocidade Bruta**: A conversão de JSX para SVG e depois para PNG acontece em milissegundos, permitindo escalas massivas de geração de mídia.

### 2. Três Arquétipos de Design
Não comece do zero. Lançamos com três estruturas pré-definidas:
- **Layout Modern**: O padrão ouro para Social Cards. Equilibrado, espaçoso e focado em legibilidade.
- **Layout Tech**: Geometria acentuada e paleta otimizada para desenvolvedores e empresas de tecnologia.
- **Layout Minimalist**: Para quem acredita que "menos é mais". Elegância e foco total no texto.

### 3. Ecossistema de Temas
Cada layout suporta três esquemas de cores:
- **Light**: Limpo e corporativo.
- **Dark**: O queridinho dos desenvolvedores, reduz o cansaço visual e foca no brilho das cores de marca.
- **Gradient**: O toque de mestre. Gera degradês automáticos baseados na sua `Brand Color`, criando um visual único para cada imagem.

### 4. Gestão Inteligente de Assets
- **Font-Manager**: O node baixa e faz cache de fontes do Google Fonts automaticamente, garantindo que suas imagens tenham a tipografia perfeita sem configurar nada no servidor.
- **Image-Fetcher**: Converta URLs de avatares e logos diretamente em Data URIs para inclusão imediata no render.

---

## 💡 Por que criamos este projeto?

No ecossistema n8n, a geração de imagens sempre foi um "gargalo". Ou você usava ferramentas de captura de tela pesadas (Puppeteer), ou se limitava a textos simples.

O **Social Preview Node** resolve isso oferecendo uma solução **Native-First**. É leve o suficiente para rodar em uma Raspberry Pi e poderoso o suficiente para servir milhares de requisições em um servidor Enterprise.

---

## 🛠️ Como começar a usar agora?

Simplesmente instale o pacote `n8n-nodes-social-preview` via interface do n8n e adicione o node ao seu fluxo. Tudo o que você precisa é um título e uma ideia.

---

## 🙏 Agradecimentos

Um agradecimento especial a todos os beta-testers e à comunidade n8n por inspirar a criação de ferramentas mais visuais.

**Siga o projeto no GitHub**: [victor-lis/n8n-social-preview-node](https://github.com/victor-lis/n8n-social-preview-node)

---

> *"Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs*

**Lançado com ❤️ por Victor Lis Bronzo**
