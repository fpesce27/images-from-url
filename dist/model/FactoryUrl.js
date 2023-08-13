"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryUrl = void 0;
const Cheerio_1 = require("./Cheerio");
const Url_1 = require("./Url");
class FactoryUrl {
    static create(url, filters = '') {
        const scrapper = new Cheerio_1.Cheerio();
        return new Url_1.Url(url, filters, scrapper);
    }
}
exports.FactoryUrl = FactoryUrl;
