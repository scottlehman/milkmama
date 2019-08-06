const parser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(parser.urlencoded({extended:false}));
app.use(express.json())

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port:' + port)
});