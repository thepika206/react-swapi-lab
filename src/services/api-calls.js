const baseUrl = "https://swapi.dev/api"

async function getStarships(page) {
  const res = await fetch(`${baseUrl}/starships/?page=${page}`)
  return res.json()

}

async function getDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}

export {
  getDetails,
  getStarships,
}