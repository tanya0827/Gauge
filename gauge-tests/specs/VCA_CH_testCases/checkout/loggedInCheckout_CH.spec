# LoggedIn User Checkout CHINA locale
This is to check logged in user is able to checkout

## Check LoggedIn Checkout is running
* Goto "https://qa-pdg-pub-vca.akqa.technology/cn/zh/collections/jewelry/perlee/vcaro3y600-vcaro3y600---vca-baseline-perlee-signature-ring.html"
* Click icon "Profile"
* Enter "lucy09@qa.akqa.com" above "Forgot Password?"
* click button "Next"
* Enter "Test1234" above "Forgot Password?"
* click button "Log In"
* Wait for node existence
* Click "SELECT YOUR SIZE"
* Click button "add to bag"
* Click link "Shopping Bag"
* Confirm that "CHECKOUT" button exists and press enter
* Click Choose Delivery Option
* select radiobutton "STDD" as value for delivery type
* select radiobutton "CARD" as value for payment option
* Enter "4111111111111111" as cardNo and "Test card" as nameOnCard and "123" as cvv and press enter
 


