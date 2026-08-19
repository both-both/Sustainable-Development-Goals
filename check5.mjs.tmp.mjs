import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } });
await page.goto("http://localhost:5174/", { waitUntil: "networkidle" });
await page.waitForSelector("h1");
const css = await page.evaluate(() => {
  let out = [];
  for (const sheet of document.styleSheets) {
    try { for (const rule of sheet.cssRules) { out.push(rule.cssText); } } catch(e) {}
  }
  return out;
});
console.log(css.join("\n"));
