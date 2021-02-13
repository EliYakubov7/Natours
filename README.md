# NatoursApp
Tours Web App

## Deployed Version

Live demo (Feel free to visit) 👉 : https://eli-natours.herokuapp.com/

## Key Features

* Authentication and Authorization
  - Login and logout
* Tour
  - Manage booking, check tours map, check users' reviews and rating
* User profile
  - Update username, photo, email, and password
* Credit card Payment

### Home

<img src="https://github.com/EliYakubov7/NatoursApp/blob/main/screenshots/home_page.png" width="700">

### Login

<img src="https://github.com/EliYakubov7/NatoursApp/blob/main/screenshots/login.png" width="700">

### Signup

<img src="https://github.com/EliYakubov7/NatoursApp/blob/main/screenshots/signup.png" width="700">

### User Profile

<img src="https://github.com/EliYakubov7/NatoursApp/blob/main/screenshots/user_profile.png" width="700">

### Title Tour

<img src="https://github.com/EliYakubov7/Forkify/blob/main/screenshots/title_tour.png" width="700">

### Information Tour

<img src="https://github.com/EliYakubov7/NatoursApp/blob/main/screenshots/information_tour.png" width="700">

### Map & Pictures

<img src="https://github.com/EliYakubov7/Forkify/blob/main/screenshots/add_recipe.png" width="700">

### Reviews Tour

<img src="https://github.com/EliYakubov7/NatoursApp/blob/main/screenshots/map_and_pictures_tour.png" width="700">

### Book Tour

<img src="https://github.com/EliYakubov7/NatoursApp/blob/main/screenshots/book_tour.png" width="700">

### Payment

<img src="https://github.com/EliYakubov7/NatoursApp/blob/main/screenshots/payment.png" width="700">

### Booked Tour

<img src="https://github.com/EliYakubov7/NatoursApp/blob/main/screenshots/booked_tours.png" width="700">

## How To Use

### Book a tour

* Login to the site
* Search for tours that you want to book
* Book a tour
* Proceed to the payment checkout page
* Enter the card details (Test Mode):
  ```
  - Card No. : 4242 4242 4242 4242
  - Expiry date: 02 / 22
  - CVV: 222
  ```
* Finished!


### Manage your booking

* Check the tour you have booked in "Manage Booking" page in your user settings. You'll be automatically redirected to this
  page after you have completed the booking.

### Update your profile

* You can update your own username, profile photo, email and password.


## API Usage

Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add: 
  ```
  - {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
  - {{password}} with your user password as value.
  ```

Check [Natours API Documentation](https://documenter.getpostman.com/view/8689170/SVmzvwpY?version=latest) for more info.

<b> API Features: </b>

Tours List 👉 https://eli-natours.herokuapp.com/api/v1/tours

Tours State 👉 https://eli-natours.herokuapp.com/api/v1/tours/tour-stats

Get Top 5 Cheap Tours 👉 https://eli-natours.herokuapp.com/api/v1/tours/top-5-cheap

Get Tours Within Radius 👉 https://eli-natours.herokuapp.com/api/v1/tours/tours-within/200/center/34.098453,-118.096327/unit/mi


## Deployment

The website is deployed with git into heroku. Below are the steps taken:
```
git init
git add -A
git commit -m "Commit message"
heroku login
heroku create
heroku config:set CONFIG_KEY=CONFIG_VALUE
parcel build ./public/js/index.js --out-dir ./public/js --out-file bundle.js
git push heroku master
heroku open
```
You can also changed your website url by running this command:
```
heroku apps:rename natours-users
```

## Build With

* [NodeJS](https://nodejs.org/en/) - JS runtime environment
* [Express](http://expressjs.com/) - The web framework used
* [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
* [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
* [JSON Web Token](https://jwt.io/) - Security token
* [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
* [Stripe](https://stripe.com/) - Online payment API
* [Postman](https://www.getpostman.com/) - API testing
* [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
* [Heroku](https://www.heroku.com/) - Cloud platform

## Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies by running
```
$ npm i
set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start:prod (for production)
$ npm run debug (for debug)
$ npm start
Setting up ESLint and Prettier in VS Code 👇
$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```
## Note

Add your data and API Keys for config.env file, mapbox and stripe.

## Author

* **Eliyahu Yakubov** - *Initial work* - [Github](https://github.com/EliYakubov7), [Linkedin](https://www.linkedin.com/in/eli-yakubov-961908173)
