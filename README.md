# Password Generator
## Description
This project creates a password generator so a user can come up with a random password based on criteria aspecified by the user.  

Having a secure password is becoming more important and with users gaining 
more and more online accounts, coming up with unique passwords for each site
is difficult but very important.  You want unique passwords on each account so if one account has a security breach it does not release your password for other accounts.

The project uses javascipt to prompt the user for the specifications on the
password, receive the responses, validate the responses, then generates a 
random password.

## To Do
- [x] Create prompts for password criteria selection
- [x] Use prompt responses to build password criteria
- [x] Criteria:
    - [x] Password length (8-128)
    - [x] Include lowercase letters
    - [x] Include uppercase letters
    - [x] Include numbers
    - [x] Include special characters
- [x] Validate responses
- [x] Verify tht at least one character type has been selected
- [ ] Generate password based on the criteria
- [ ] Display the password in an alert or on the page

## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
The files included in the repository are sufficient for installing the 
application on your webserver.
## Usage
The website looks like the following when loaded:

![The Password Generator application displays a red button to "Generate Password".](./assets/images/03-javascript-homework-demo.png)

The user presses the red Generate Password button and will be presented with a series of dialog boxes to gather the user's criteria for the password includinghow many characters long ti should be and which data sets it wants to draw from.  Once the criteria has been gathered a response will be provided to echo the criteria and allow a password to be generated.  The user can then copy the password from the webpage for pasting into a password field and/or a password manager.

## Credits
The initial HTML and CSS code was provided by the MSU Full Stack Development Boot Camp.  I added the Javascript to add the functionality.
## License
MIT License

Copyright (c) 2021 Barry St. Pierre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

