interface IScrapper {
    get_images(url: string, filters: string): Promise<string[]>;
}