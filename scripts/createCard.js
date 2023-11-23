let prevOverlay = 1

export default function (url) {
  const card = document.createElement('div')
  card.classList.add('card')

  const img = document.createElement('img')
  img.classList.add('card-img')
  img.src = url

  const overlay = document.createElement('div')
  overlay.classList.add('card-img-overlay')
  overlay.style.background = `url('/overlay/overlay-${
    prevOverlay === 1 ? ++prevOverlay : --prevOverlay
  }.png'), #00000088`

  card.appendChild(img)
  card.appendChild(overlay)

  card.onclick = () => {
    const a = document.createElement('a')
    a.href = url
    a.download = '#FreePalestine.' + url.split('.').pop()
    a.click()
  }

  return card
}
