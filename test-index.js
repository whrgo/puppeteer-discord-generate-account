// import { v4 as uuidv4 } from "uuid";

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const tempmailPage = await browser.newPage();
  await tempmailPage.goto("https://temp-mail.org/ko/change");

  let email = "";
  while (true) {
    email = await tempmailPage.$eval("#mail", (v) => v.value);
    if (email.startsWith("로딩")) {
      continue;
    } else {
      console.log(email);
      break;
    }
  }
  // end of getting email

  const registerAccountPage = await browser.newPage();
  await registerAccountPage.goto("https://discord.com/register");

  /* getting EMAIL, USERNAME, PASSWORD, DATE OF BIRTH, CONTINUE element */
  const AccountObject = {
    email: registerAccountPage.$(
      "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div > div > form > div > div > div:nth-child(1) > div > input"
    ),
    username: registerAccountPage.$(
      "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div > div > form > div > div > div:nth-child(2) > div > input"
    ),
    password: registerAccountPage.$(
      "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div > div > form > div > div > div:nth-child(3) > div > input"
    ),
    dob: registerAccountPage.$(
      "#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div > div > form > div > div > div.container-2UAUAG.marginTop20-2T8ZJx > div.inputs-3ELGTz"
    ),
  };

  // type email
  AccountObject.email.then((v) => v.type(email));
  await registerAccountPage.waitForTimeout(1000);

  // type username
  AccountObject.username.then((v) => v.type("sdklfsjldk"));
  await registerAccountPage.waitForTimeout(1000);

  // type password
  AccountObject.password.then(
    (v) =>
      v
        .type("anysdfkljsdflksdjkl")
        .then(() => registerAccountPage.keyboard.press("Tab"))
        .then(() => registerAccountPage.keyboard.down("1"))
        .then(() => registerAccountPage.keyboard.up("1"))
        .then(() => registerAccountPage.keyboard.press("Enter")) // end of pressing month

        .then(() => registerAccountPage.keyboard.press("Tab"))
        .then(() => registerAccountPage.keyboard.down("1"))
        .then(() => registerAccountPage.keyboard.up("1"))
        .then(() => registerAccountPage.keyboard.press("Enter")) // end of pressing day

        .then(() => registerAccountPage.keyboard.press("Tab"))
        .then(() => registerAccountPage.keyboard.down("99"))
        .then(() => registerAccountPage.keyboard.up("99"))
        .then(() => registerAccountPage.keyboard.press("Enter")) // end of pressing year
  );
  await registerAccountPage.waitForTimeout(1000);
  // TODO: uuid값 파일로 저장
})();
