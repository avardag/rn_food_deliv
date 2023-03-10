import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export function restaurantsRequest(location) {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Location not found");
    }
    resolve(mock);
  });
}

export function restaurantsTransform({ results = [] }) {
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  const newResult = camelize(mappedResult);
  // newResult.someKey = "aju";
  return newResult;
}
