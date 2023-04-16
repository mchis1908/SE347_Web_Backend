const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Kết nối với cơ sở dữ liệu MongoDB
mongoose.connect('mongodb+srv://MinhChis19:<password>@cluster0.xqsjeav.mongodb.net/planB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database!");
}).catch(err => {
  console.log("Connection failed: " + err);
});

// Khai báo các Middleware
app.use(cors());
app.use(bodyParser.json());

// Khai báo các Route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});