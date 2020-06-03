# Guest User Checkout US locale
This is to check logged guest user is able to checkout
Tags: us-all

## Check Guest Checkout is running
* Goto "https://qa-pub-vca.akqa.technology/us/en/home.html"
* Click link "Creations"
* Wait for node existence
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
* Enter "testing_16@qa.akqa.com" as guest email address and press enter
* Wait for node existence
* Enter "TestUser" as "shipping.firstname"
* Enter "AKQA" as "shipping.lastname"
* Enter "201" as "shipping.streetnumber"
* Enter "Harrison St" as "shipping.streetname"
* Enter "San Francisco" as "shipping.city"
* Enter "94105-2000" as "shipping.zip"
* Enter "18006545456" as "shipping.phone"
* Scroll down
* Click "CHOOSE DELIVERY OPTIONS"
* Wait for node existence
* Click text "CONFIRM ADDRESS"
* Wait for node existence
* select radiobutton "STDD" as value for delivery type
* select radiobutton "CARD" as value for payment option
* select "expiry-month" value as "08"
* select "expiry-year" value as "2025"
* Enter "4111111111111111" as cardNo and "Test card" as nameOnCard and "123" as cvv and press enter
* Wait for node existence
* Check "Confirmation" exists
