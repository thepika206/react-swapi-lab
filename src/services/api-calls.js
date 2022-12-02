const baseUrl = "https://swapi.py4e.com/api"

async function getStarships(page) {
  const res = await fetch(`${baseUrl}/starships/?page=${page}`)
  return res.json()

}

async function getPeople(page) {
  const res = await fetch(`${baseUrl}/people/?page=${page}`)
  return res.json()

}

async function getRelatedObjects(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()))
  const relatedObjects = await Promise.all(promises)
  return relatedObjects
}

async function getDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}

export {
  getDetails,
  getStarships,
  getPeople,
  getRelatedObjects,
}