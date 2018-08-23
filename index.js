const puppeteer = require('puppeteer');
var program = require('commander');

puppeteer.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage();
  await page.goto('any website here', {
    waitUntil: 'load',
  });
  console.log(page.url());

  // await page.waitFor(100);
  await page.click('any button');
  await page.waitFor(100);
  await page.click('#cart .checkout');
  // await page.waitFor(100);
  await page.goto('checkout', {
    waitUntil: 'load',
  });
  console.log(page.url());
  await page.waitFor(100);
  await page.click('select name input');
  // await page.waitFor(10);
  await page.keyboard.type('Gabriel Ferguson');

  await page.click('email input');
  // await page.waitFor(10);
  await page.keyboard.type('gabe@google.com');

  await page.click('phone input');
  // await page.waitFor(10);
  await page.keyboard.type('123-123-1234');

  await page.click('address input');
  // await page.waitFor(10);
  await page.keyboard.type('123 main st');

  await page.click('zip input');
  // await page.waitFor(10);
  await page.keyboard.type('33333');

  await page.click('city input');
  // await page.waitFor(10);
  await page.keyboard.type('New York');

  await page.click('state input');
  // await page.waitFor(10);
  await page.keyboard.type('NY');

  await page.screenshot({ path: 'receipt.png' });

  await browser.close();
  console.log('Your order is filled out');
});
