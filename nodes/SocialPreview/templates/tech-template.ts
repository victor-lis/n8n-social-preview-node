import { TemplateOptions } from './modern-template';

export function buildTechLayout(options: TemplateOptions): string {
	const { title, subtitle, author, imageUri, brandColor, theme } = options;
	
	let bgStyle = 'background-color: #0f172a;';
	let textColor = '#38bdf8;';
	let secondaryTextColor = '#94a3b8;';
	const accentColor = brandColor;
	
	if (theme === 'Light') {
		bgStyle = 'background-color: #f8fafc;';
		textColor = '#0284c7;';
		secondaryTextColor = '#64748b;';
	} else if (theme === 'Gradient') {
		bgStyle = `background: radial-gradient(circle at top right, ${brandColor} 0%, #0f172a 100%);`;
		textColor = '#ffffff;';
		secondaryTextColor = '#cbd5e1;';
	}

	return `
		<div style="display: flex; flex-direction: row; width: 1200px; height: 630px; ${bgStyle} padding: 0; font-family: 'Inter', sans-serif; overflow: hidden; position: relative;">
			<!-- Tech accents -->
			<div style="position: absolute; top: 0; left: 0; width: 100%; height: 8px; background-color: ${accentColor};"></div>
			<div style="position: absolute; bottom: 40px; right: 40px; width: 200px; height: 1px; background-color: ${accentColor}; opacity: 0.5;"></div>
			<div style="position: absolute; bottom: 40px; right: 40px; height: 200px; width: 1px; background-color: ${accentColor}; opacity: 0.5;"></div>
			
			<div style="display: flex; flex-direction: column; width: 65%; padding: 80px 60px; justify-content: center; z-index: 10;">
				<div style="display: flex; align-items: center; margin-bottom: 20px;">
					<span style="background-color: ${brandColor}; color: white; padding: 4px 12px; font-size: 14px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">
						Digital Asset
					</span>
				</div>
				<h1 style="font-size: 64px; line-height: 1.2; font-weight: 900; color: ${textColor}; margin: 0; letter-spacing: -1px;">
					${title}
				</h1>
				${subtitle ? `<p style="font-size: 28px; color: ${secondaryTextColor}; margin-top: 30px; line-height: 1.5;">${subtitle}</p>` : ''}
				
				<div style="display: flex; align-items: center; margin-top: 60px;">
					<div style="font-size: 18px; color: ${accentColor}; font-weight: 700; border-bottom: 2px solid ${accentColor}; padding-bottom: 4px;">
						BY ${author?.toUpperCase() || 'SYSTEM'}
					</div>
				</div>
			</div>
			
			<div style="display: flex; width: 35%; background-color: rgba(0,0,0,0.2); align-items: center; justify-content: center; position: relative;">
				${imageUri ? `
					<div style="position: relative;">
						<div style="position: absolute; top: -20px; left: -20px; right: -20px; bottom: -20px; border: 1px solid ${accentColor}; opacity: 0.3;"></div>
						<img src="${imageUri}" style="width: 250px; height: 250px; object-fit: cover; filter: brightness(1.1) contrast(1.1);" />
					</div>
				` : `
					<div style="width: 200px; height: 200px; border: 2px dashed ${accentColor}; opacity: 0.2;"></div>
				`}
			</div>
		</div>
	`;
}
