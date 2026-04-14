/**
 * Fetches an image from a URL and converts it to a Data URI.
 * This is necessary because Satori requires image data to be embedded or provided as a buffer/data URI.
 */
export async function fetchImageAsDataUri(url: string): Promise<string | undefined> {
	if (!url) return undefined;

	try {
		const response = await fetch(url);
		
		if (!response.ok) {
			return undefined;
		}

		const arrayBuffer = await response.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		const contentType = response.headers.get('content-type') || 'image/png';
		
		return `data:${contentType};base64,${buffer.toString('base64')}`;
	} catch {
		return undefined;
	}
}
