const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../dist'));

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Listening on port: ${port}`)); 