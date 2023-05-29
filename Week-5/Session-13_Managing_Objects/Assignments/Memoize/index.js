const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

const getTemperatureForCity = (() => {
  const cache = {};

  return (city) => {
    if (cache[city]) {
      console.log(`Retrieving temperature for ${city} from cache`);
      return cache[city];
    }

    if (temperatureData.hasOwnProperty(city)) {
      console.log(`Retrieving temperature for ${city} from API`);
      cache[city] = temperatureData[city];
      return cache[city];
    }

    console.log(`Temperature data not available for ${city}`);
    return null;
  };
})();

// Example usage
const temperature1 = getTemperatureForCity("New York");
console.log(temperature1); // 20

const temperature2 = getTemperatureForCity("New York");
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity("London");
console.log(temperature3); // 18

const temperature4 = getTemperatureForCity("London");
console.log(temperature4); // 18 (retrieved from cache)

const temperature5 = getTemperatureForCity("Tokyo");
console.log(temperature5); // 25 (retrieved from API)

const temperature6 = getTemperatureForCity("Sydney");
console.log(temperature6); // 28 (retrieved from API)

const temperature7 = getTemperatureForCity("Berlin");
console.log(temperature7); // Temperature data not available for Berlin
