const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const URL = "https://www.scrapethissite.com/pages/simple/";

axios.get(URL).then((res) => {
  // 1. Load the response into cheerio
  const $ = cheerio.load(res.data);
  // 2. Figure out what you are trying to scrape.
  const countries = $(".country");
  // 3. Break down the items further and save in variables
  const data = countries
    .map((i, el) => {
      const countryName = $(el).find(".country-name").text().trim();
      const capital = $(el).find(".country-capital").text().trim();
      const population = $(el).find(".country-population").text().trim();
      const area = $(el).find(".country-area").text().trim();

      return { countryName, capital, population, area };
    })
    .get();
  // 4. Save scraped data as JSON

  fs.writeFileSync("scrapedData.json", JSON.stringify(data));
});
