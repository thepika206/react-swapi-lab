const baseUrl = "https://swapi.py4e.com/api"

async function getStarships(page) {

  try {
    // Check Local Storage for data first
    let cachedResource = localStorage.getItem(`starship-list-${page}`)
    if (cachedResource != null) {
      return JSON.parse(cachedResource)
    }

    // Make a fetch request for the data
    const res = await fetch(`${baseUrl}/starships/?page=${page}`)

    // parse the response
    const data = await res.json()

    // Store the data in local storage
    localStorage.setItem(`starship-list-${page}`, JSON.stringify(data))

    // return the resource data
    return data
  } catch (error) {
    console.log(error)
    return null
  }

}

async function getResourceDetails(resource, id){

  try {
    // Check Local Storage for data first
    let cachedResource = localStorage.getItem(`${resource}-${id}`)
    if (cachedResource != null) {
      return JSON.parse(cachedResource)
    }
    
    // Make a Fetch request for the data 
    const res = await fetch(`${baseUrl}/${resource}/${id}/`)
    
    // parse the json
    const data = await res.json()
    
    // Store the data in local storage
    localStorage.setItem(`${resource}-${id}`, JSON.stringify(data))

    // return the resource data
    return data
  } catch (error){
    console.log(error)
    return null
  }
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
  getResourceDetails,
  getPeople,
  getRelatedObjects,
}