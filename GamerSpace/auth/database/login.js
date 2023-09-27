const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (row) {
      res.send('Login successful');
    } else {
      res.status(401).send('Login failed');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
