import express from  'express';
import cors from 'cors';

import sessionServices from './session.services';

import bodyParser from 'body-parser';

const app = express();
const PORT = 8083;

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");

  next();
});

sessionServices(app);
//gameServices(app);

app.get('/', (req,res) => res.send('Express + TypeScript Server + acho First'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});