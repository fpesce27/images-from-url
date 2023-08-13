import { Cheerio } from "./Cheerio";

export class Url {
    url: string;
    filters: string;
    scrapper: IScrapper;

    constructor(url: string, filters: string = '', scrapper: IScrapper = new Cheerio()) {
        this.url = url;
        this.filters = filters
        this.scrapper = scrapper;
    }

    async get_images(): Promise<string[]>{
        return await this.scrapper.get_images(this.url, this.filters);
    }

    set_scrapper(scrapper: IScrapper){
        this.scrapper = scrapper;
    }
}