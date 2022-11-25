const baseUrl = "https://swapi.dev/api"

async function getStarships(page) {
  const res = await fetch(`${baseUrl}/starships/?page=${page}`)
  return res.json()

}

async function getPeople(page) {
  const res = await fetch(`${baseUrl}/people/?page=${page}`)
  return res.json()

}

async function getPilots(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()))
  const pilotObjects = await Promise.all(promises)
  return pilotObjects
}

async function getDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}

export {
  getDetails,
  getStarships,
  getPeople,
  getPilots,
}