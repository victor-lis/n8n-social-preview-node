# 🖼️ n8n-nodes-social-preview

[![npm version](https://img.shields.io/npm/v/n8n-nodes-social-preview.svg)](https://www.npmjs.com/package/n8n-nodes-social-preview)
[![n8n](https://img.shields.io/badge/n8n-community--node-red.svg)](https://n8n.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Transforme seus dados em impacto visual instantâneo. O **Social Preview Node** é uma ferramenta poderosa para n8n que gera imagens de Open Graph (Social Cards) dinâmicas, de alta fidelidade e com performance nativa, tudo dentro do seu workflow.

---

## 🚀 Por que este Node?

Gerar imagens dinâmicas (Open Graph, convites, notificações) geralmente exige APIs pagas caras ou servidores headless de Chrome instáveis. 

Este node traz o **Satori** (o motor de renderização da Vercel) e o **Resvg** para dentro do n8n:
- **Zero APIs Externas**: Tudo é processado localmente na sua instância.
- **Fidelidade Web**: Use HTML/CSS para desenhar seus layouts (layouts baseados em flexbox).
- **Performance Nativa**: Renderização via Rust/WASM com velocidade impressionante.
- **Segurança**: Sem dependência de bibliotecas pesadas ou navegadores externos.

---

## ✨ Funcionalidades (v1.0.0)

- **3 Templates Premium**: Escolha entre `Modern`, `Tech` e `Minimalist`.
- **Temas Dinâmicos**: Suporte a temas `Light`, `Dark` e o deslumbrante `Gradient`.
- **Customização de Marca**: Aplique suas cores e fontes (Inter, Roboto, Open Sans).
- **Embed de Imagens**: Suporte para Avatar/Logo via URL.
- **Saída Pronta**: Gera um buffer PNG otimizado, pronto para ser enviado via Telegram, Slack, Mailchimp ou salvo no S3.

---

## 🎨 Galeria de Templates

| Modern | Tech | Minimalist |
| :--- | :--- | :--- |
| **Equilibrado e Elegante.** Perfeito para blogs e notícias. Foco na tipografia e no autor. | **Digital e Estruturado.** Ideal para ativos digitais, DevOps, métricas ou anúncios de software. | **Puro e Artístico.** Foco total na mensagem. Minimalismo extremo para citações ou convites. |

---

## 🔧 Instalação

1. Vá em **Settings > Community Nodes** na sua instância n8n.
2. Clique em **Install a new node**.
3. Digite `n8n-nodes-social-preview`.
4. Aceite os termos e pronto!

---

## 🛠️ Exemplo de Uso

1. **Gatilho**: Receba um Webhook com o título de um novo post.
2. **Social Preview**: Configure o node com o título dinâmico, sua cor de marca e o template `Modern`.
3. **Telegram/Slack**: Envie a imagem gerada como uma notificação visual atraente.

---

## 📜 Histórico & Release 1.0.0

Este projeto nasceu para democratizar a geração de mídia programática no n8n. A v1.0.0 marca a estabilidade dos motores de renderização e a inclusão dos primeiros templates universais.

### 1.0.0 - "The Genesis"
- Lançamento oficial.
- Suporte nativo a fontes Google (Inter, Roboto).
- Motor Satori + Resvg integrado.
- 3 layouts e 3 temas fundamentais.

---

## 👨‍💻 Créditos

Desenvolvido por **[Victor Lis Bronzo](mailto:victorlisbronzo1@gmail.com)**.  
Inspirado pela necessidade de automações mais visuais e profissionais.

---

## 📑 Recursos Extras
* [Documentação do n8n](https://docs.n8n.io/)
* [Satori Engine](https://github.com/vercel/satori)
* [Resvg-js](https://github.com/yisibl/resvg-js)
