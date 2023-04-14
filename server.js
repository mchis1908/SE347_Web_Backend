const express = require('express');
const app = express();

// Định nghĩa tuyến đường cho trang chủ
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});