import { getResourceDetails } from './api-calls';


export async function starshipDetailsDataLoader(starshipId) {
    const data = await getResourceDetails('starships', starshipId)
    console.log('starship details data loader:', data)
    return data
}