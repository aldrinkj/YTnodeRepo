const path = require('path')
console.log(path.sep)
const filePath = ('/content/', 'subfolder', 'test.txt')
console.log(filePath)
const baseName = path.basename(filePath)
console.log(baseName);
const absoPath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absoPath);