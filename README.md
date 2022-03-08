# REACT-PhoneCatalog
## The project
To make this project, I decided to use **ExpressJS** for the server and **MongoDB** to store all the data.<br />
I created 2 routes ('**/**' and '**/admin**'). <br />
'**/**' -> We can see all the phones and a lateral menu with filters that we can use. <br />
'**/admin**' -> Here, we can *create* new **manufacturers**, new **phones** and we can *delete* **phones** too. I didn't have
time to *create* the **update-phone** function on the Frontend, but with Postman (or another app) you can *update*
the **phones**. <br />
**Body example for the request (http://url/update-phone):**
```json 
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
}
```
## Run options
### Run it remotelly
To run the frontend, you need to go to the ***front-end folder***, and write this commands:
```
npm i
npm start
```
The backend is hosted on my own server, so you don't need to do anything on that. 
### Run it in local
In case that you want to run it in local, you have to go to the ***rest-api folder*** and write this commands:
```
npm i
npm run dev
```
In the root folder, you can see a folder that contains data for the database. <br />
To restore this data, you should write this commands:
```
cd PhoneCatalog
mongorestore -d PhoneCatalog .
```
**IMPORTANT!**<br />
If you run the server in local, you have to edit the Axios default URL. Go to **front-end/src/App.js** and modify this line
```
axios.defaults.baseURL = 'http://ip:3030/';
```
And change it to look like this 
```
axios.defaults.baseURL = 'http://localhost:3030/';
```