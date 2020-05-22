"use strict";
const {$ ,openBrowser, closeBrowser, clear, image ,dropDown, evaluate, goto, scrollDown, click, checkBox, link, radioButton, waitFor, text, screenshot, focus, textBox, write, press, currentURL, below, button} = require("taiko");
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === "true";


beforeSuite(async () => {
    await openBrowser({args:['--no-sandbox', '--disable-setuid-sandbox'], headless: headless })
    //await openBrowser()
});

afterSuite(async () => {
    await closeBrowser();
});

step("Go to homepage", async function() {
    await goto("https://qa-pdg-pub-vca.akqa.technology/cn/zh/home.html", {navigationTimeout: 300000});
});

step("Click profile icon", async function() {
    await waitFor(5000)
    await click(link({ title: "Profile" }));
});

step("Confirm that text <arg0> is visible", async function(arg0) {
	await text(arg0).exists();
    await waitFor(5000);
});

step("Enter <arg0> as mobileNo", async function(arg0) {
	await focus(textBox({name: "email"}));
    await write(arg0);
});

step("Confirm that text <arg0> is present and press enter", async function(arg0) {
    await text(arg0).exists();
    await waitFor(5000);
    await click(text(arg0));
});