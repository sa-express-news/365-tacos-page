import { LatLong } from '../types';

// Calculates great-circle distances between two latitude/longitude pairings.
// Stolen from Stack Overflow: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
// And based on the Haversine formula: https://en.wikipedia.org/wiki/Haversine_formula
export const getGreatCircleDistanceInKM = (pointA: LatLong, pointB: LatLong): number => {
    const radiusOfEarthInKM = 6371;
    const distanceLat = degreeToRadian(pointB.latitude - pointA.latitude);
    const distanceLong = degreeToRadian(pointB.longitude - pointA.longitude);
    const a =
        Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
        Math.cos(degreeToRadian(pointA.latitude)) * Math.cos(degreeToRadian(pointB.latitude)) *
        Math.sin(distanceLong / 2) * Math.sin(distanceLong / 2)
        ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = radiusOfEarthInKM * c;
    return d;


    function degreeToRadian(degree: number): number {
        return degree * (Math.PI / 180);
    }
}


// Rounds a floating-point number to x decimal points. Stolen from MDN.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
export const precisionRound = (number: number, precision: number): number => {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}