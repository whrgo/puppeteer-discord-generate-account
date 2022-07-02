const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const tempmailPage = await browser.newPage();
  await tempmailPage.goto("https://temp-mail.org/ko/change");

  let email: string = "";
  while (true) {
    email = await tempmailPage.$eval("#mail", (v) => v.value);
    if (email.startsWith("로딩")) {
      continue;
    } else {
      console.log("Finded");
      break;
    }
  }
  // end of getting email

  tempmailPage.close();
})();
