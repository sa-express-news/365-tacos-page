import { LatLong } from '../types';

// Calculates great-circle distances between two latitude/longitude pairings.
// Stolen from Stack Overflow: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
// And based on the Haversine formula: https://en.wikipedia.org/wiki/Haversine_formula


const getGreatCircleDistance = (pointA: LatLong, pointB: LatLong): number => {
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

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}