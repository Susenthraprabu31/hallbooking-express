import express from 'express';
import router from './src/routes/user.js'
const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());

app.use(router);

app.listen(port, ()=>console.log(`App is listening on ${port}`));