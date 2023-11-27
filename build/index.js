globalThis.html = String.raw

const fs = require('fs')
const path = require('path')
const generateCard = require('./generateCard')
const childProcess = require('child_process')

const templatePath = path.join(__dirname, '../template.html')
const imagesDir = path.join(__dirname, '../media/palestine')

const images = fs.readdirSync(imagesDir)
const template = fs.readFileSync(templatePath, 'utf8')

const htmlCards = images
  .map((url) => generateCard({ url: `/media/palestine/${url}` }))
  .join('\n')
const html = template.replace('<!--CARDS-->', htmlCards)

fs.writeFileSync(path.join(__dirname, '../index.html'), html)
childProcess.execSync('npm run sass:build')
