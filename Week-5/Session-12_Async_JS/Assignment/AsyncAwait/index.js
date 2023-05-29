const axios = require("axios");

const BASE_URL = "https://api.exchangerate.host/latest";

async function getExchangeRate(currencyCode) {
  try {
    const response = await axios.get(BASE_URL);

    if (response.status !== 200) {
      throw new Error("Failed to fetch exchange rates");
    }
    const data = response.data;
    const rate = data.rates[currencyCode];
    return rate ? Number(rate.toFixed(4)) : null;
  } catch (error) {
    throw new Error(`Failed to get exchange rate: ${error.message}`);
  }
}

getExchangeRate("KPW")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });
