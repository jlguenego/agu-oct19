const express = require('express');
const serveIndex = require('serve-index');

const app = express();
const port = 8000;

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
