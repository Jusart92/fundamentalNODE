const sharp = require('sharp');

sharp('./Im.jpg')
  .resize(80)
  .grayscale()
  .toFile('resized.png')