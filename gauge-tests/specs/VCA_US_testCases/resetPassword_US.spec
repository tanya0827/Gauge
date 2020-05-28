# Reset Password US locale
This is to check user is able to reset password

## Check Reset Password is opening up
* Goto "https://qa-pub-vca.akqa.technology/us/en/home.html"
* Click icon "Profile"
* Confirm that text "SIGN IN" is visible on the right panel
* Enter "testing_5@qa.akqa.com" as "j_username" 
* Enter "Test1234" as "j_password"
* Click "Submit"
* Wait for node existence
* Click link "Account Settings"
* Click Password
* Enter "Test1234" as "current_password"
* Enter "Test12345" as "new_password"
* Click button "Submit"
* Click icon "Profile"
* Click link "Logout"
* Wait for node existence
* Click icon "Profile"
* Enter "testing_5@qa.akqa.com" as "j_username" 
* Enter "Test12345" as "j_password"
* Click "Submit"
* Wait for node existence
* Check "ACCOUNT SETTINGS" exists
* Check "ADDRESS" exists
