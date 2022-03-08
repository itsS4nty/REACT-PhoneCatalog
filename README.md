# REACT-PhoneCatalog
## The project
To make this project, I decided to use **ExpressJS** for the server and **MongoDB** to store all the data.
I created 2 routes ('/' and '/admin').
'/' -> We can see all the phones and a lateral menu with filters that we can use.
'/admin' -> Here, we can create new Manufacturers, new phones and we can delete phones too. I didn't have
time to create the update-phone function on the Frontend, but with Postman (or another app) we can update
the phones.
Body example for the request (http://url/update-phone): ```json
{
    "name": "Samsung Galaxy S20 Plus",
    "manufacturer": "Samsung",
    "description": "Lorem Ipsum Samsung Galaxy S20 Plus",
    "color": "Black",
    "price": "1099",
    "imageFileName": "SamsungGalaxyS20Plus/image.jpg",
    "screen": "6.5 Inches AMOLED",
    "processor": "Qualcomm Snapdragon 865",
    "ram": 16,
    "storage": 256
}```
## Run
To run the frontend, you need to go to the front-end folder, and write this commands:
```
npm i
npm start
```
The backend is hosted on my own server, so you don't need to do anything on that. But, in case that
you want to run it in local, you have to go to the rest-api folder and write this commands:
```
npm i
npm run dev
```
In the root folder, you can see a script that creates a database in MongoDB with data.