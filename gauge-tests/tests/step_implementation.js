"use strict";
const {$ ,above,openBrowser, closeBrowser, clear, image ,dropDown, evaluate, goto, scrollDown, click, link, radioButton, waitFor, text, focus, textBox, write, currentURL, button} = require("taiko");
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === "true";


beforeSuite(async () => {
    //await openBrowser({args:['--no-sandbox', '--disable-setuid-sandbox'], headless: headless })
    //await openBrowser()
});

afterSuite(async () => {
    //await closeBrowser();
});

beforeSpec(async () => {
    await openBrowser({args:['--no-sandbox', '--disable-setuid-sandbox'], headless: headless })
});

afterSpec(async () => {
    await closeBrowser();
});

step("Goto <arg0>", async function(arg0) {
    await goto(arg0, {navigationTimeout: 3000000});
});

step("Confirm that text <arg0> is visible on the right panel", async function(arg0) {
    await text(arg0).exists();
    await waitFor(5000);
});

step("click text <arg0>", async function(arg0) {
    await text(arg0).exists( {timeout: 0});
    await click(arg0);
});

step("click  button <arg0>", async function(arg0) {
    await click(button({type : "submit"}));
    await currentURL();
    await waitFor(10000);
});;

step("select radiobutton <arg0> as value", async function(arg0) {
    await radioButton({name: "salutation"}).select()
});


step("Enter <arg0> in email and press enter", async function(arg0) {
    await focus($("#forgot-password-form_email"));
    await write(arg0);
    await click(button("Submit"));
    await currentURL();
    await waitFor(10000);
});


step("Clear and enter <arg0> as birth_date", async function(arg0) {
    await focus(textBox({name : "birth_date"}));
    await clear(textBox({name : "birth_date"}));
    await write(arg0);
});

step("Click Password", async function() {
	await click(link({title: "Password"}, {navigationTimeout: 3000000}));
});


step("Scroll down and Click product to add to bag", async function() {
    await scrollDown(100,{navigationTimeout: 3000000});
    await waitFor(1500, {navigationTimeout: 3000000});
    await focus(($("#result_0", {navigationTimeout: 3000000}))); 
    await click(($("#result_0", {navigationTimeout: 3000000}))); 
});

step("Enter <arg0> as zipCode and press enter", async function(arg0) {
    await textBox({ name: "zipcode" }).exists();
	await focus(textBox({ name: "zipcode" }));
    await write(arg0);
    await waitFor(100);
    await click(button({ title: "Checkout"}));
});

step("Click Choose Delivery Option", async function() {
    await waitFor(4000)
    await click(button("Submit"));
});

step("select radiobutton <arg0> as value for delivery type", async function(arg0) {
    await focus(radioButton({name: "shippingMethod"}));
	await radioButton({name: "shippingMethod"}).select(arg0);
});

step("select radiobutton <arg0> as value for payment option", async function(arg0) {
	await radioButton({name: "payment-option"}).select(arg0);
});

step("Enter <arg0> as cardNo and <arg1> as nameOnCard and <arg2> as cvv and press enter", async function(arg0, arg1, arg2) {
	await focus($("#paymetric-credit-card-payment-form_creditcard-card-number"));
	await write(arg0);
	await focus($("#paymetric-credit-card-payment-form_creditcard-card-holder-name"));
	await write(arg1);
	await focus($("#paymetric-credit-card-payment-form_creditcard-cvv"));
	await write(arg2);
	await click(button("Submit"));
});


step("Enter <arg0> as guest email address and press enter", async function(arg0) {
    await waitFor(10000);
    //await textBox({ name: "guestEmailId" },{navigationTimeout: 3000000}).exists();
    await focus(textBox({ name: "guestEmailId"},{navigationTimeout: 3000000}));
    await write(arg0);
    await waitFor(3000);
    await focus(text("CONTINUE AS GUEST"));
    await click(text("CONTINUE AS GUEST"),{navigationTimeout:300000}); 
});

step("Click text <arg0>", async function(arg0) {
    await click(text(arg0),{navigationTimeout:300000}); 
});


step("Wait for node existence", async function() {
    await waitFor(20000);
});

step("Click <arg0>", async function(arg0) {
    await waitFor(3000);
	await click(text(arg0));
});

step("Confirm that <arg0> button exists and press enter", async function(arg0) {
    await click(button({ title: "Checkout"})).exists();
    await click(button({ title: "Checkout"}));
});

step("Enter <arg0> above <arg1>", async function(arg0, arg1) {
    await focus(textBox(above(arg1)))
    await write(arg0);
});

step("click button <arg0>", async function(arg0) {
    await button(arg0).exists();
    await click(button(arg0));
});

step("select <arg0> value as <arg1>", async function(arg0, arg1) {
    await dropDown({name: arg0}).select(arg1);
});


step("Click button <arg0>", async function(arg0) {
    await evaluate((text(arg0)), ele => ele.click()); 
    await waitFor(10000);
});

step("Click icon <arg0>", async function(arg0) {
    await waitFor(5000);
    await click(link({ title: arg0 },{navigationTimeout:3000000}));
});


step("Click link <arg0>", async function(arg0) {
	await click(link({title: arg0},{navigationTimeout: 30000000}));
});

step("Click image <arg0> for selection of jewellery", async function(arg0) {
    await evaluate(image(arg0,{navigationTimeout: 3000000}), ele => ele.click()); 
});

step("Enter <arg0> as <arg1>", async function(arg0, arg1) {
	await focus(textBox({name : arg1}));
    await write(arg0);
});

step("Check <arg0> exists", async function(arg0) {
    assert.ok(await text(arg0).exists());
});


step("Scroll down and select category", async function() {
    await scrollDown(800,{navigationTimeout: 3000000});
    await waitFor(1500, {navigationTimeout: 3000000});
    await focus(($("#tab-earrings", {navigationTimeout: 3000000}))); 
    await click(($("#tab-earrings", {navigationTimeout: 3000000}))); 
});

step("Scroll down", async function() {
	await scrollDown(500);
});