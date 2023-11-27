const gallery = document.querySelector('#gallery')
const cardsContainer = gallery.querySelector('.cards')
const cards = cardsContainer.querySelectorAll('.card')

cards.forEach((card) => {
  card.onclick = () => {
    const { src } = card.querySelector('img')
    const a = document.createElement('a')

    a.download = 'FreePalestine.' + src.split('.').pop()
    a.href = src
    a.click()
  }
})
