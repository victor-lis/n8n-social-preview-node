import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
	NodeOperationError,
} from 'n8n-workflow';
import { generateSocialPreviewImage } from './services/image-generation.service';

export class SocialPreview implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Social Preview',
		name: 'socialPreview',
		icon: 'file:social-preview.svg',
		group: ['transform'],
		version: 1,
		description: 'Generates social media preview images (Open Graph) structures.',
		defaults: {
			name: 'Social Preview',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		properties: [
			{
				displayName: 'Design settings',
				name: 'designSettings',
				type: 'notice',
				default: '',
			},
			{
				displayName: 'Template',
				name: 'template',
				type: 'options',
				options: [
					{ name: 'Modern', value: 'Modern' },
					{ name: 'Tech', value: 'Tech' },
					{ name: 'Minimalist', value: 'Minimalist' },
				],
				default: 'Modern',
			},
			{
				displayName: 'Theme',
				name: 'theme',
				type: 'options',
				options: [
					{ name: 'Light', value: 'Light' },
					{ name: 'Dark', value: 'Dark' },
					{ name: 'Gradient', value: 'Gradient' },
				],
				default: 'Dark',
			},
			{
				displayName: 'Brand Color',
				name: 'brandColor',
				type: 'color',
				default: '#ff0000',
			},
			{
				displayName: 'Font Family',
				name: 'fontFamily',
				type: 'options',
				options: [
					{ name: 'Inter', value: 'Inter' },
					{ name: 'Roboto', value: 'Roboto' },
					{ name: 'Open Sans', value: 'Open Sans' },
				],
				default: 'Inter',
			},
			{
				displayName: 'Content',
				name: 'contentSeparator',
				type: 'notice',
				default: '--------------------------------',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				placeholder: 'Main title of the card',
				required: true,
			},
			{
				displayName: 'Subtitle',
				name: 'subtitle',
				type: 'string',
				default: '',
				placeholder: 'A short description or handle',
			},
			{
				displayName: 'Author Name',
				name: 'author',
				type: 'string',
				default: '',
				placeholder: 'Author of the content',
			},
			{
				displayName: 'Avatar/Logo URL',
				name: 'imageUrl',
				type: 'string',
				default: '',
				placeholder: 'https://...',
			},
		],
		usableAsTool: true,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const template = this.getNodeParameter('template', i) as 'Modern' | 'Tech' | 'Minimalist';
				const theme = this.getNodeParameter('theme', i) as 'Light' | 'Dark' | 'Gradient';
				const brandColor = this.getNodeParameter('brandColor', i) as string;
				const fontFamily = this.getNodeParameter('fontFamily', i) as string;
				
				const title = this.getNodeParameter('title', i) as string;
				const subtitle = this.getNodeParameter('subtitle', i) as string;
				const author = this.getNodeParameter('author', i) as string;
				const imageUrl = this.getNodeParameter('imageUrl', i) as string;

				const pngBuffer = await generateSocialPreviewImage({
					template,
					theme,
					brandColor,
					fontFamily,
					title,
					subtitle,
					author,
					imageUri: imageUrl,
				});

				const binaryData = await this.helpers.prepareBinaryData(
					pngBuffer,
					'social-preview.png',
					'image/png'
				);

				returnData.push({
					json: items[i].json,
					binary: {
						data: binaryData,
					},
					pairedItem: {
						item: i,
					},
				});
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: items[i].json,
						error: error.message,
						pairedItem: {
							item: i,
						},
					});
					continue;
				}
				throw new NodeOperationError(this.getNode(), error, { itemIndex: i });
			}
		}

		return [returnData];
	}
}
