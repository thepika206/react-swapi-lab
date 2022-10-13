const baseUrl = "https://swapi.dev/api"

async function getStarships() {
  const res = await fetch(`${baseUrl}/starships`)
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