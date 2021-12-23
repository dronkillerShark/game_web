const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/public'))

app.get('/circleGame', (req, res) => {
    res.sendFile(__dirname + '/circleGame.html');
})

app.get('/randomX', (req, res) => {
  res.sendFile(__dirname + '/randomX.html');
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/HomePage.html');
})

app.get('*', (req, res) =>{
  res.send("you breaked the internet");
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});