import { ELocationType } from '../../../types/location.types';

export const BASE_URL = 'https://api.locationiq.com/v1/autocomplete';

const KEY = 'pk.893304636ca097849b3a4966542355dd';
const LIMIT = 10;
const TAG = `place:${ELocationType.CITY},place:${ELocationType.TOWN}`;
export const BASE_SEARCH_PARAMS = `?key=${KEY}&limit=${LIMIT}&tag=${TAG}`;
