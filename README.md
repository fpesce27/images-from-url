# Images From URL

**Description:**
Images From URL is a versatile software tool designed to retrieve a list of image URLs from a given webpage. By utilizing the API endpoint `/image` and providing a URL in the request body, the program extracts images from the specified webpage. Moreover, this program offers the flexibility to apply filters to narrow down the selection of images. These filters are defined using CSS selectors, allowing users to target specific elements on the page.

**Features:**
- Extracts image URLs from a provided webpage URL.
- Supports the application of CSS-based filters for precise image selection.
- Utilizes the Cheerio library for web scraping.
- Designed for extensibility with plans to incorporate additional web scraping libraries.

**Usage:**

**Endpoint:** `/image`

**Method:** POST

**Request Body:**
```json
{
  "url": "https://example.com",
  "filter": ".separator a"
}
```
- url (required): The URL of the webpage from which images will be extracted.
- filter (optional): A CSS selector filter to target specific image elements.

**Sample Response:**
```json
{
  "images": [
    "https://example.com/images/image1.jpg",
    "https://example.com/images/image2.jpg",
    "https://example.com/images/image3.jpg"
  ]
}
```

**Getting Started**
1. Ensure you have Node.js installed on your system.
2. Clone the repository: git clone https://github.com/yourusername/images-from-url.git
3. Navigate to the project directory: cd images-from-url
4. Install dependencies: npm install
5. Start the application: npm start

**Future Enhancements**
-Integration of additional web scraping libraries for enhanced versatility.
-Implementation of more advanced filtering options to refine image selection.
-Support for bulk processing of multiple URLs in a single request.

**Contributions**
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, please contact us at francopescee@gmail.com
