export default async function () {
  const url = '/images.json'
  const response = await fetch(url)
  const images = await response.json()
  return images
}
