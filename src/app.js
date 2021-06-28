const express = require('express');
const app = express();
const path = require('path');

console.log(path.resolve(__dirname, "public"));

app.use("/assets/", express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve((__dirname, 'public/test.html')));
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

