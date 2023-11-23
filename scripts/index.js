import createCart from './createCard.js'
import getImages from './getImages.js'

const gallery = document.querySelector('#gallery')
const cardsContainer = gallery.querySelector('.cards')

;(async () => {
  const images = await getImages()
  images.forEach((url) => {
    cardsContainer.appendChild(createCart(url))
  })
})()
