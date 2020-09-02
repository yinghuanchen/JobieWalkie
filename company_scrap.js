const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const delay = function (s) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, s);
  });
};

const options = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
  },
};

const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const Company = require("./models/Company");

async function main() {
  const browser = await puppeteer.launch({
    headless: false,
    //executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome ',
    devtools: true,
  });
  const page = await browser.newPage();
  // await page.goto(
  //   "https://www.linkedin.com/login/zh?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
  // );
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
  );
  await page.goto(
    `https://www.linkedin.com/search/results/companies/?keywords=software%20engineer&origin=SWITCH_SEARCH_VERTICAL&page=10`
  );
  await delay(20000);
 
 

  for(let i = 80; i < 101; i++) {
    await page.goto(
      `https://www.linkedin.com/search/results/companies/?keywords=software%20engineer&origin=SWITCH_SEARCH_VERTICAL&page=${i}`
    );
  
    await delay(5000);
    console.log('page ',i); 
    //  await page.waitForNavigation();
     await delay(5000);
     const htmlContent = await page.content();
     const $ = cheerio.load(htmlContent);
    await delay(5000);
     const spanList = $(".entity-result__title-text.t-16");
     console.log(spanList.length);
    await delay(5000);
     const imgList = $('.ivm-view-attr__img--centered.lazy-image.ember-view.EntityPhoto-square-3');
     //const linkArray = [];
     //const nameArray = [];
    if (spanList.length === imgList.length)  {
      console.log('start');
      for (let i = 0; i < spanList.length; i++) {
        element = $(spanList[i]).children().first(); 
        img = $(imgList[i]).attr('src');
        const newCompany = new Company({
          name: $(element)
            .text()
            .replace(/[\n\t\r]/g, "")
            .trim(),
          companyLink: $(element).attr("href"),
          companyImg: img, 
        });
        newCompany.save().then(() => console.log("success")).catch(err => console.log(err));

      }
    }
    //  Array.apply(null, spanList).forEach((span) => {
    //    element = $(span).children().first(); //(".app-aware-link.ember-view"); first(">:first-child")
     
  
    //  });
    //  console.log(linkArray);
    //  console.log(nameArray); 
  }
  browser.close();

}

main();
