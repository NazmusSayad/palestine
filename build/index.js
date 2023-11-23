const fs = require('fs')
const path = require('path')

const imagesJSONPath = path.join(__dirname, '../images.json')
const imagesDir = path.join(__dirname, '../images')

const images = fs.readdirSync(imagesDir).map((img) => `/images/${img}`)
fs.writeFileSync(imagesJSONPath, JSON.stringify(images), 'utf-8')
