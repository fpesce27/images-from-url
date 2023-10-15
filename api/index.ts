import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Url } from '../model/Url';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.post('/api/images', (req: Request, res: Response) => {
  const url = new Url(req.body.url as string, req.body.filters as string);
  url.get_images().then((imageUrls) => {
    res.send(imageUrls);
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
