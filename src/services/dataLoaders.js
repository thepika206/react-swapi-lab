import { getResourceDetails } from './api-calls';


export const starshipDetailsDataLoader = async (starshipId) => await getResourceDetails('starships', starshipId);
