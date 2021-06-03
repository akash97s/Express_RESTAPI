import express from 'express';
import routes from './src/routes/routes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

// mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// body parser setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serve static files
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send(`Node and Express server running on ${port}`);
});

app.listen(port, () => {
  console.log(`Your server is running on ${port}`);
});
