const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ dest: './uploads/' }).single('file'));

app.post('/', async (req, res) => {
  const quality = Number(req.body?.quality) || 75;
  // res.send({ body: req.body, quality });
  // return;
  const fileName = req.file.path;
  try {
    const image = await sharp(fileName).webp({ quality }).toBuffer();
    res.end(image, 'binary');
  } catch (error) {
    const message = error.getMessage?.() || 'Something went wrong';
    res.send({ error: message });
  } finally {
    fs.unlinkSync(fileName);
  }
});

app.listen(3000);
