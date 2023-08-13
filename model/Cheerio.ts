import * as cheerio from 'cheerio';

export class Cheerio implements IScrapper {
    async get_images(url: string, filters: string = ''): Promise<string[]> {
        const response = await fetch(url);
        const $ = cheerio.load(await response.text());

        const imageUrls: string[] = [];

        $(filters + ' img').each((_, element) => {
            const imageUrl = $(element).attr('src');
            if (imageUrl) {
                imageUrls.push(imageUrl);
            }
        });

        return imageUrls;
    }
}