"use strict";
const {$ ,above,openBrowser, closeBrowser, clear, image ,dropDown, evaluate, goto, scrollDown, click, checkBox, link, radioButton, waitFor, text, screenshot, focus, textBox, write, press, currentURL, below, button} = require("taiko");
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === "true";


beforeSuite(async () => {
    await openBrowser({args:['--no-sandbox', '--disable-setuid-sandbox'], headless: headless })
    //await openBrowser()
});

afterSuite(async () => {
    await closeBrowser();
});

step("Goto homepage", async function() {
    await goto("https://qa-pub-vca.akqa.technology/us/en/home.html", {navigationTimeout: 300000});
});

step("Click login icon", async function() {
    await waitFor(5000)
    await click(link({ title: "Profile" }));
   // await screenshot();
});

step("Confirm that text <arg0> is visible on the right panel", async function(arg0) {
    await text(arg0).exists();
    await waitFor(5000);
   // await screenshot();
});

step("Enter <arg0> as username and <arg1> as password and press enter", async function(arg0, arg1) {
    await focus(textBox({ name: "j_username" }));
    await write(arg0);
    await focus(textBox({ name: "j_password" }));
    await write(arg1);
    await click(button("Submit"));
    await currentURL();
    await waitFor(3000);
});

step("click text <arg0>", async function(arg0) {
    await text(arg0).exists(
        {timeout: 0}
    );
    await click(arg0);
});


step("Enter <arg0> as firstname and <arg1> as lastname", async function(arg0, arg1) {
    await focus(textBox({ name: "first_name1" }));
    await write(arg0);
    await focus(textBox({ name: "last_name1" }));
    await write(arg1);
});

step("Enter <arg0> in username and <arg1> in password", async function(arg0, arg1) {
	await focus(textBox({ name: "email_address" }));
    await write(arg0);
    await focus(textBox({ name: "password" }));
    await write(arg1);
});

step("click  button <arg0>", async function(arg0) {
    await click(button({type : "submit"}));
    await currentURL();
    await waitFor(10000);
});

step("select dropdown value as <arg0>", async function(arg0) {
    await dropDown({name: "website_ country"}).select(arg0);
});

step("select radiobutton <arg0> as value", async function(arg0) {
    await radioButton({name: "salutation"}).select()
});

step("Click forgot password link", async function() {
    await click(link({ title: "Forgot Password?" }));
});

step("Enter <arg0> in email and press enter", async function(arg0) {
    await focus($("#forgot-password-form_email"));
    await write(arg0);
    await click(button("Submit"));
    await currentURL();
    await waitFor(10000);
});

step("Click Account Settings", async function() {
    await waitFor(9000);
    await click(link({title: "Account Settings"},{navigationTimeout: 300000}));
});

step("Click Personal Information", async function() {
	await click(link({title: "Personal Information"}, {navigationTimeout: 30000}));
});

step("Clear and enter <arg0> as birth date", async function(arg0) {
    await focus(textBox({name: "birth_date"}));
    await clear(textBox({name: "birth_date"}));
    await write(arg0);
});

step("Clear and enter <arg0> as last_name1", async function(arg0) {
    await focus(textBox({name: "last_name1"}));
    await clear(textBox({name: "last_name1"}));
    await write(arg0);
});

step("Enter <arg0> as confirmation mail and press enter", async function(arg0) {
    await focus(textBox({name :"confirm-email_address"}));
    await write(arg0);
    await click("Submit");
    await currentURL();
    await waitFor(5000);
});

step("Click Password", async function() {
	await click(link({title: "Password"}, {navigationTimeout: 300000}));
});

step("Enter <arg0> as password and <arg1> as new password and press enter", async function(arg0, arg1) {
    await waitFor(5000);
	await focus(textBox({name :"current_password"},{navigationTimeout: 3000000}));
    await write(arg0);
    await focus(textBox({name :"new_password"}));
    await write(arg1);
    await click("Submit");
    await currentURL();
    await waitFor(5000);
});

step("Click logout", async function() {
    await click(link({title: "Logout"}, {navigationTimeout: 300000}));
    await currentURL();
    await waitFor(5000);
});

step("Click Address", async function() {
    await waitFor(9000);
	await click(link({title: "Address"}, {navigationTimeout: 30000}));
});

step("Click to add address", async function() {
    await waitFor(9000);
	await click(link({title: "Add an address"}, {navigationTimeout: 300000}));
});

step("Enter <arg0> as firstName and <arg1> as lastName and <arg2> as streetNumber and <arg3> as streetName and <arg4> as city", async function(arg0, arg1, arg2, arg3, arg4) {
	await focus(textBox({name :"shipping.firstname"}));
    await write(arg0);
    await focus(textBox({name :"shipping.lastname"}));
    await write(arg1);
    await focus(textBox({name :"shipping.streetnumber"}));
    await write(arg2);
    await focus(textBox({name :"shipping.streetname"}));
    await write(arg3);
    await focus(textBox({name :"shipping.city"}));
    await write(arg4);
});

step("Enter <arg0> as zipCode and <arg1> as phoneNumber and press enter", async function(arg0, arg1) {
	await focus(textBox({name :"shipping.zip"}));
    await write(arg0);
    await focus(textBox({name :"shipping.phone"}));
    await write(arg1);
    await evaluate((text("Submit")), ele => ele.click()); 
    await waitFor(10000);
});


step("Click Creations", async function() {
  //  await link({title: "Creations"}).exists;
    //waitFor(async () => !(await link({title: "Logout"}).exists()));
   // await link({title: "Logout"}).exists;
    await evaluate(link({title: "Creations"}), ele => ele.click()); 
   // waitFor(async () => (await ({title: "Creations"}).exists()));
    //await focus(link({title: "Creations"}));
	//await click(link({title: "Creations"}, {navigationTimeout: 30000}));
});


step("Click High Jewellery", async function() {
  //  await waitFor(1000);
   // await click(link({title: "High Jewellery"}, {navigationTimeout: 30000}));
    await evaluate(link({ title: "High Jewellery"}), ele => ele.click()); 
});


step("Click Classic High Jewellery", async function() {
    //await waitFor(1000);
    //await click(link({ title: "Classic High Jewellery"}));
    await evaluate(link({ title: "Classic High Jewellery"}), ele => ele.click()); 
});

step("Click image for selection of jewellery", async function() {
    //await focus(image("Classic Jewelry&nbsp;Classic Jewelry&nbsp;"));
    //await click(image("Classic Jewelry&nbsp;Classic Jewelry&nbsp;"),{navigationTimeout: 300000});
    await evaluate(image("Classic Jewelry&nbsp;Classic Jewelry&nbsp;",{navigationTimeout: 3000000}), ele => ele.click()); 
});

step("Scroll down and Click product to add to bag", async function() {
    await scrollDown(1200,{navigationTimeout: 3000000});
    await waitFor(1500, {navigationTimeout: 3000000});
    await focus(($("#result_0", {navigationTimeout: 3000000}))); 
    await click(($("#result_0", {navigationTimeout: 3000000}))); 
   // await $("#result_1").exists;
   // await evaluate((button("Submit")), ele => ele.click()); 
   // await click(button("Submit"));
});


step("Click add to bag button", async function() {
	await evaluate((button("Submit")), ele => ele.click()); 
});

step("Click shopping bag", async function() {
    await waitFor(1500);
    await click(link({ title: "Shopping Bag"}));
});

step("Enter <arg0> as zipCode and press enter", async function(arg0) {
    await textBox({ name: "zipcode" }).exists();
	await focus(textBox({ name: "zipcode" }));
    await write(arg0);
    await waitFor(100);
    await click(button({ title: "Checkout"}));
});

step("Click Choose Delivery Option", async function() {
    await click(button("Submit"));
});

step("select radiobutton <arg0> as value for delivery type", async function(arg0) {
    await focus(radioButton({name: "shippingMethod"})).exists();
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
    await evaluate((text("Submit")), ele => ele.click()); 
});

step("Click close button to close popup", async function() {
    await focus(button({ role: "close" }));
});

step("Click text <arg0>", async function(arg0) {
    await evaluate((text(arg0)), ele => ele.click()); 
});


step("Wait for node existence", async function() {
    await waitFor(10000);
});



// For China locale
step("Goto product page", async function() {
    await goto("https://qa-pdg-pub-vca.akqa.technology/cn/zh/collections/jewelry/perlee/vcaro3y600-vcaro3y600---vca-baseline-perlee-signature-ring.html", {navigationTimeout: 300000});
});

step("Click <arg0>", async function(arg0) {
    await waitFor (3000);
	await click(text(arg0));
});

step("Confirm that <arg0> button exists and press enter", async function(arg0) {
    await click(button({ title: "Checkout"})).exists();
    await click(button({ title: "Checkout"}));
});

step("goto page <arg0>", async function(arg0) {
	await goto(arg0,{navigationTimeout:60000});
});

step("Click profile icon", async function() {
    await waitFor(6000)
    await click(link({ title: "Profile" }));
});

step("Enter <arg0> above <arg1>", async function(arg0, arg1) {
    await focus(textBox(above(arg1)))
    await write(arg0);
});

step("click button <arg0>", async function(arg0) {
    await button(arg0).exists();
    await click(button(arg0));
});

step("Enter <arg0> as firstName and <arg1> as lastName", async function(arg0, arg1) {
    await waitFor(2000);
	await focus(textBox({name :"shipping.firstName2"}));
    await write(arg0);
    await focus(textBox({name :"shipping.lastName2"}));
    await write(arg1);
});

step("select <arg0> value as <arg1>", async function(arg0, arg1) {
    await dropDown({name: arg0}).select(arg1);
});


step("enter <arg0> as address and enter <arg1> as phoneNumber and press enter", async function(arg0, arg1) {
    await focus(textBox({name :"shipping.address"}));
    await write(arg0);
    await focus(textBox({name :"shipping.phone"}));
    await write(arg1);
    await evaluate((text("Submit")), ele => ele.click()); 
    await waitFor(10000);
});

step("Click button <arg0>", async function(arg0) {
    await evaluate((text("Submit")), ele => ele.click()); 
    await waitFor(10000);
});

step("Click Address and check if address is updated", async function() {
    await waitFor(9000);
    await click(link({title: "Address"}, {navigationTimeout: 30000}));
    await waitFor(10000);
});