import express from 'express';
import { createConnection } from 'typeorm';
import { Article } from './entities/Article';
import { User } from './entities/User';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

async function start() {
  // DB Connection
  await createConnection({
    type: 'postgres',
    username: 'conduit',
    password: 'conduit',
    database: 'conduit',
    entities: [Article, User],
    synchronize: true,
    logging: true,
    logger: 'advanced-console',
  });

  //  Starting server at port 3232
  app.listen(3232, () => {
    console.log('Server started on http://localhost:3232');
  });
}

start();
