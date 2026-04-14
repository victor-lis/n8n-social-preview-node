import { TemplateOptions } from './modern-template';

export function buildMinimalistLayout(options: TemplateOptions): string {
	const { title, author, brandColor, theme } = options;
	
	let bgStyle = 'background-color: #ffffff;';
	let textColor = '#000000;';
	
	if (theme === 'Dark') {
		bgStyle = 'background-color: #111111;';
		textColor = '#fefefe;';
	} else if (theme === 'Gradient') {
		bgStyle = `background: linear-gradient(to bottom, #f3f4f6, #e5e7eb); border-top: 10px solid ${brandColor};`;
		textColor = '#111827;';
	}

	return `
		<div style="display: flex; flex-direction: column; width: 1200px; height: 630px; ${bgStyle} padding: 100px; font-family: 'Inter', sans-serif; align-items: center; justify-content: center; text-align: center;">
			<div style="width: 60px; height: 4px; background-color: ${brandColor}; margin-bottom: 40px;"></div>
			
			<h1 style="font-size: 80px; line-height: 1.1; font-weight: 300; color: ${textColor}; margin: 0; max-width: 900px; font-family: 'serif';">
				${title}
			</h1>
			
			<div style="display: flex; flex-direction: column; align-items: center; margin-top: 60px;">
				<span style="font-size: 20px; color: ${brandColor}; font-weight: 700; letter-spacing: 4px; margin-bottom: 8px; text-transform: uppercase;">
					${author || 'BY AUTHOR'}
				</span>
				<div style="width: 100px; height: 1px; background-color: ${textColor}; opacity: 0.2;"></div>
			</div>
		</div>
	`;
}
