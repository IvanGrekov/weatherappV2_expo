import { IApiError } from '../../types/api.types';
import { IGeoLocation } from '../../types/location.types';
import * as Location from 'expo-location';

const requestLocationPermission = async (): Promise<boolean> => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    return status === 'granted';
};

type TGetMyGeoLocation = () => Promise<IGeoLocation | IApiError>;

type TResolve = (
    value: IGeoLocation | IApiError | PromiseLike<IGeoLocation | IApiError>,
) => void;

export const getMyGeoLocation: TGetMyGeoLocation = () => {
    return new Promise(async (resolve) => {
        const permission = await requestLocationPermission();

        if (!permission) {
            return resolve({ errorMessage: 'Permission denied' });
        }

        const position = await Location.getCurrentPositionAsync({});
        resolve(position.coords);
    });
};
