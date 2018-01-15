import { getGreatCircleDistanceInKM, precisionRound } from './index';

import { LatLong } from '../types';



it('returns correct values for many test lat/long pairings', () => {
    // Calculations tested against using the same lat/long on this site:
    // http://www.onlineconversion.com/map_greatcircle_distance.htm

    const tests: [LatLong, LatLong, number][] = [
        [
            {
                latitude: 29.420786,
                longitude: -98.536921
            },
            {
                latitude: 29.4101,
                longitude: -98.486713
            },
            5.0061968504296885
        ],
        [
            {
                latitude: 29.4101,
                longitude: -98.486713
            },
            {
                latitude: 29.452638,
                longitude: -98.485099
            },
            4.732591739381467
        ],
        [
            {
                latitude: 29.452638,
                longitude: -98.485099
            },
            {
                latitude: 29.498184,
                longitude: -98.623376
            },
            14.311625670961376
        ],
        [
            {
                latitude: 29.452638,
                longitude: -98.485099
            },
            {
                latitude: 29.452638,
                longitude: -98.485099
            },
            0
        ],
    ]

    tests.forEach((test: [LatLong, LatLong, number]) => {
        const result = getGreatCircleDistanceInKM(test[0], test[1]);
        const roundedResult = precisionRound(result, 4);
        expect(roundedResult).toEqual(precisionRound(test[2], 4));
    });
});
