import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { FactoryUrl } from '../model/FactoryUrl';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/api/images', (req: Request, res: Response) => {
  const url = FactoryUrl.create(req.query.url as string, req.query.filters as string);
  url.get_images().then((imageUrls) => {
    res.send(imageUrls);
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});