// @ts-check
const { test } = require("../fixture");
const { expect } = require("@playwright/test");
const percySnapshot = require('@percy/playwright');

test("BstackDemo Add to cart", async ({ page }, testInfo) => {
  try {
    await page.evaluate((_) => {},
    `browserstack_executor: ${JSON.stringify({ action: "setSessionName", arguments: { name: testInfo.project.name } })}`);
    await page.waitForTimeout(5000);

    await page.goto("https://www.bstackdemo.com/", {
      waitUntil: "networkidle",
    });
    await percySnapshot(page, "bstackdemo");

    await page.evaluate((_) => {},
    `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "passed", reason: "Navigated successfully" } })}`);
  } catch (e) {
    console.log(e);
    await page.evaluate((_) => {},
    `browserstack_executor: ${JSON.stringify({ action: "setSessionStatus", arguments: { status: "failed", reason: "Test failed" } })}`);
  }
});
