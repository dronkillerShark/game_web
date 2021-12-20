const express = require('express');
const app = express();
const port = 8080;

app.get('/circleGame', (req, res) => {
    res.sendFile('/Users/jameelgmail.com/Downloads/projects/project7/circleGame.html');
})

app.get('/pingPong', (req, res) => {
  res.sendFile('/Users/jameelgmail.com/Downloads/projects/project7/pingPong.html');
})

app.get('/', (req, res) => {
  res.sendFile('/Users/jameelgmail.com/Downloads/projects/project7/HomePage.html');
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});