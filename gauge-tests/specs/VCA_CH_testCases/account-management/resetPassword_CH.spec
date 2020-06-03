# Reset Password CHINA locale
This is to check user is able to reset password

## Check Reset Password is running
* Goto "https://qa-pdg-pub-vca.akqa.technology/cn/zh/home.html"
* Click icon "Profile"
* Enter "lucy09@qa.akqa.com" above "Forgot Password?"
* click button "Next"
* Enter "Test1234" above "Forgot Password?"
* click button "Log In"
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
* Enter "lucy09@qa.akqa.com" above "Forgot Password?"
* Enter "Test12345" above "Forgot Password?"
* click button "Log In"

