const express = require('express');

const app = express();

// http methods

// app.get(route, callback(req, res))

app.get('/', (req, res) => {
  res.send('LOGIN PAGE');
}); //login page

app.get('/profilePage', (req, res) => {
  res.send('PROFILE PAGE');
}); //profile page

app.get('/feedPage', (req, res) => {
  res.send('FEED PAGE');
}); //feed page

app.listen(8000, () => {
  console.log('running 8000');
});

function loginMiddleware(req, res) {
  console.log('i am the login middleware');
}
