const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const URL = "https://www.scrapethissite.com/pages/simple/";

axios.get(URL).then((res) => {
  // 1. Load the response into cheerio
  // 2. Figure out what you are trying to scrape.
  // 3. Break down the items further and save in variables
  // 4. Save scraped data as JSON
});
