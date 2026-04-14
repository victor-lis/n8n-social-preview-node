# n8n-nodes-social-preview

This is an n8n community node that allows you to generate dynamic social media preview images (Open Graph) directly within your workflows using the powerful Satori engine and resvg-js.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

![Social Preview Node](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

## Features

- **Programmatic Generation**: No external APIs or expensive subscriptions needed.
- **Satori Engine**: High-fidelity HTML/CSS to SVG conversion (React-like logic).
- **Fast Rendering**: PNG output via `@resvg/resvg-js` (WASM/Native speed).
- **Templates & Themes**: Choose between Modern, Minimalist, and Tech layouts with Light, Dark, or Gradient styles.
- **Dynamic Fonts**: Built-in support for Inter, Roboto, and Open Sans.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

In your n8n instance:
1. Go to **Settings > Community Nodes**.
2. Select **Install a new node**.
3. Enter `n8n-nodes-social-preview`.
4. Agree to the risks and click **Install**.

## Operations

### Generate Preview
- **Template**: Choose the structural layout (Modern, Minimalist, Tech).
- **Theme**: Select the color palette (Light, Dark, Gradient).
- **Brand Color**: Customize the accent colors.
- **Title**: The main text for your preview card.
- **Subtitle**: Additional context or social handle.
- **Author**: Brand or person name.
- **Image URL**: Optional avatar or logo to be embedded.

## Usage

This node is ideal for:
- Automating Open Graph images for blog posts.
- Generating dynamic notifications or reports as images.
- Personalized social media cards from webhook data.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Satori Documentation](https://github.com/vercel/satori)
* [Resvg JS Documentation](https://github.com/yisibl/resvg-js)

## Version history

### 0.1.0
- Initial release with 3 templates and dynamic font support.

## License

[MIT](https://github.com/victor-lis/n8n-social-preview-node/blob/master/LICENSE.md)
