import camelize from "camelize";
import { locations } from "./mock/locationMock";

export function locationRequest(searchTerm) {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("City not found");
    }
    resolve(locationMock);
  });
}
//locationResult is the value of chicago, i.e the obj
// chicago: {
//   results: [
//     {geometry: {
//         location: {
//           lng: -87.629799,
//           lat: 41.878113},
//         viewport: {
//           northeast: {
//             lat: 41.88758823029149,
//             lng: -87.6194830697085},
//           southwest: {
//             lat: 41.88489026970849,
//             lng: -87.6221810302915},
//         },
//       },
//     },
//   ],
// },
export function locationTransform(locationResult) {
  const formattedResponse = camelize(locationResult);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lng, lat, viewport: geometry.viewport };
}
