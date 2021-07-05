const express = require('express');
const app = new express();
const path = require('path');

const public = console.log(path.resolve(__dirname, "public"));

app.use('/public', express.static(path.resolve(__dirname, "public")))

app.get('/', (req, res) => {
  const toFile = path.resolve(__dirname, 'public', 'test.html')
  res.sendFile(path.resolve(__dirname, 'public', '808.html'));
  // res.send("hello world");
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));