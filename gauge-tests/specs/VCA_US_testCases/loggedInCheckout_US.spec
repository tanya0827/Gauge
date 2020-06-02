# Logged In User Checkout US locale
This is to check logged in user is able to checkout
Tags: us-all

## Check Checkout is running
* Goto "https://qa-pub-vca.akqa.technology/us/en/home.html"
* Click icon "Profile"
* Confirm that text "SIGN IN" is visible on the right panel
* Enter "testing_15@qa.akqa.com" as "j_username"
* Enter "Test1234" as "j_password"
* Click "Submit"
* Wait for node existence
* Click link "Creations"
* Click link "High Jewellery"
* Click link "Classic High Jewellery"
* Click image "Classic Jewelry&nbsp;Classic Jewelry&nbsp;" for selection of jewellery
* Scroll down and select category
* Scroll down and Click product to add to bag
* Wait for node existence
* Click button "add to bag"
* Wait for node existence
* Click link "Shopping Bag"
* Enter "94105-2000" as zipCode and press enter
* Wait for node existence
* Click "CHOOSE DELIVERY OPTIONS"
* Wait for node existence
* select radiobutton "STDD" as value for delivery type
* select radiobutton "CARD" as value for payment option
* select "expiry-month" value as "08"
* select "expiry-year" value as "2025"
* Enter "4111111111111111" as cardNo and "Test card" as nameOnCard and "123" as cvv and press enter
* Wait for node existence
* Check "Confirmation" exists