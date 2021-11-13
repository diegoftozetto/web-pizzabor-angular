/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { MongoClient } from 'mongodb';

import { produtosRouter } from './app/routes/produtos';

MongoClient.connect(
  'mongodb://web-pizzabor-angular_devcontainer_db_1:27017',
).then((client: MongoClient) => {
  app.locals.db = client.db('pizzabor');
  console.log('Conectado ao MongoDB.');
}).catch(err => {
  console.error(err);
});

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/produtos', produtosRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
