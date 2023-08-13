Here is a readme in English about this program:

images-from-url
This program is a software that given a url in the body of the endpoint /image returns a list of urls that are the images of the page in question. This program also allows you to pass filters to make the images more specific, in particular, filters in css language as a string, for example .separator a. This would be the element a that is inside the class separator. Currently it uses cheerio as a scrapper but more scrappers are planned to be added.

Installation
To install this program, you need to have Node.js and npm installed on your system. Then, you can clone this repository and run npm install to install the dependencies.

Usage
To start the program, run npm start or node index.js. This will launch a server on port 3000 by default. You can change the port by setting the PORT environment variable.

To get the images from a url, send a POST request to /image with the url as the body. For example, using curl:

curl -X POST -d "https://www.bing.com" http://localhost:3000/image

This will return a JSON array of image urls from the page. For example:

[
  "https://www.bing.com/th?id=OHR.SnowyOwl_ZH-CN9805076379_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
  "https://www.bing.com/th?id=OHR.SnowyOwl_ZH-CN9805076379_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  "https://www.bing.com/th?id=OHR.SnowyOwl_ZH-CN9805076379_1366x768.jpg&rf=LaDigue_1366x768.jpg&pid=hp",
  ...
]

To apply filters to the images, you can add a query parameter filter with the css selector as the value. For example, to get only the images that are inside an element with class logo, you can use:

curl -X POST -d "https://www.bing.com" ".separator" http://localhost:3000/image

This will return only the image urls that match the filter. For example:

[
  "https://www.bing.com/sa/simg/hpc27.png"
]

License
This program is licensed under the MIT License. See [LICENSE] for more details.