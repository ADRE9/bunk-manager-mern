const path = require('path');
const fs = require('fs');

const svgFile = () => {
  const filename = fs.readdirSync(path.join(__dirname, '../assets/svg'));
  const length = filename.length;
  const random = Math.floor((Math.random() * (length-1))+1);
  const randomFilename=filename[random]
  return fs.readFileSync(path.join(__dirname,`../assets/svg/${randomFilename}`));
}

module.exports = svgFile;