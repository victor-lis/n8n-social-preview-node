export interface TemplateOptions {
	title: string;
	subtitle?: string;
	author?: string;
	imageUri?: string;
	brandColor: string;
	theme: 'Light' | 'Dark' | 'Gradient';
}

export function buildModernLayout(options: TemplateOptions): string {
	const { title, subtitle, author, imageUri, brandColor, theme } = options;
	
	let bgStyle = 'background-color: #ffffff;';
	let textColor = '#111827;';
	let secondaryTextColor = '#4b5563;';
	
	if (theme === 'Dark') {
		bgStyle = 'background-color: #000000;';
		textColor = '#ffffff;';
		secondaryTextColor = '#9ca3af;';
	} else if (theme === 'Gradient') {
		bgStyle = `background: linear-gradient(135deg, #111827 0%, ${brandColor} 100%);`;
		textColor = '#ffffff;';
		secondaryTextColor = '#e5e7eb;';
	}

	return `
		<div style="display: flex; flex-direction: column; width: 1200px; height: 630px; ${bgStyle} padding: 60px; justify-content: space-between; font-family: 'Inter', sans-serif;">
			<div style="display: flex; flex-direction: column;">
				${imageUri ? `<img src="${imageUri}" style="width: 100px; height: 100px; border-radius: 50px; border: 4px solid ${brandColor}; margin-bottom: 24px;" />` : ''}
				<h1 style="font-size: 72px; line-height: 1.1; font-weight: 800; color: ${textColor}; margin: 0; max-width: 900px;">
					${title}
				</h1>
				${subtitle ? `<p style="font-size: 32px; color: ${secondaryTextColor}; margin-top: 24px;">${subtitle}</p>` : ''}
			</div>
			<div style="display: flex; align-items: center; justify-content: space-between;">
				<div style="display: flex; align-items: center;">
					<div style="width: 12px; height: 48px; background-color: ${brandColor}; margin-right: 16px;"></div>
					<span style="font-size: 24px; font-weight: 600; color: ${textColor}; text-transform: uppercase; letter-spacing: 2px;">
						${author || 'Social Preview'}
					</span>
				</div>
				<div style="font-size: 20px; color: ${secondaryTextColor}; opacity: 0.8;">
					Generated with n8n
				</div>
			</div>
		</div>
	`;
}
