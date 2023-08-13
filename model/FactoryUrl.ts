import { Cheerio } from "./Cheerio";
import { Url } from "./Url";

export class FactoryUrl {
    static create(url: string, filters: string = ''): Url {
        const scrapper = new Cheerio();
        return new Url(url, filters, scrapper);
    }
}