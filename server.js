// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Controllers
var BooksController = require('./controllers/BooksController');

// Express
var app = express();

// Express Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.post('/books', BooksController.create);
app.get('/books', BooksController.read);
app.put('/books/:id', BooksController.update);
app.delete('/books/:id', BooksController.delete);

// Connetions
var port = 11331;
var mongoUri = 'mongodb://localhost:27017/mini-mongoose';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
  console.log('listening on port: ', port);
});
