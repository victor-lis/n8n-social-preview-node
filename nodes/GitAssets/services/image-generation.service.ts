import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { fetchFontBuffer } from '../utils/font-manager';
import { fetchImageAsDataUri } from '../utils/image-fetcher';
import { buildModernLayout, TemplateOptions } from '../templates/modern-template';
import { buildTechLayout } from '../templates/tech-template';
import { buildMinimalistLayout } from '../templates/minimalist-template';

export interface ImageGenerationOptions extends TemplateOptions {
	template: 'Modern' | 'Tech' | 'Minimalist';
	fontFamily: string;
}

/**
 * Orchestrates the image generation process:
 * 1. Fetches necessary assets (fonts, images).
 * 2. Builds the HTML layout based on the chosen template.
 * 3. Converts HTML to JSX-like structure for Satori.
 * 4. Generates SVG using Satori.
 * 5. Renders SVG to PNG using Resvg.
 */
export async function generateSocialPreviewImage(options: ImageGenerationOptions): Promise<Buffer> {
	const { template, fontFamily, imageUri, ...templateOptions } = options;

	// 1. Fetch assets in parallel
	const [fontBuffer, avatarDataUri] = await Promise.all([
		fetchFontBuffer(fontFamily),
		imageUri ? fetchImageAsDataUri(imageUri) : Promise.resolve(undefined)
	]);

	// 2. Select and build the layout
	let htmlString = '';
	const finalOptions = { ...templateOptions, imageUri: avatarDataUri };

	switch (template) {
		case 'Tech':
			htmlString = buildTechLayout(finalOptions);
			break;
		case 'Minimalist':
			htmlString = buildMinimalistLayout(finalOptions);
			break;
		case 'Modern':
		default:
			htmlString = buildModernLayout(finalOptions);
			break;
	}

	// 3. Convert HTML string to Satori-friendly structure
	const markup = html(htmlString);

	// 4. Generate SVG via Satori
	const svg = await satori(markup, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: fontFamily,
				data: fontBuffer,
				weight: 400,
				style: 'normal',
			},
		],
	});

	// 5. Render SVG to PNG Buffer via Resvg
	const resvg = new Resvg(svg, {
		background: 'rgba(0,0,0,0)',
		fitTo: {
			mode: 'width',
			value: 1200,
		},
	});

	const pngData = resvg.render();
	return pngData.asPng();
}
