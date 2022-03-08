const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const cors = require('cors');
const multer = require('multer');
const PORT = 3030 || process.env.PORT;

mongoose.connect('mongodb://localhost/PhoneCatalog', (err, res) => {
    if(err) throw err;
});

const storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + '.' + mime.extension(file.mimetype));
  }
});
const upload = multer({ storage : storage }).array('userPic');

const phoneModels = require('./models/phones')(app, mongoose);
const manufacturersModels = require('./models/manufacturers')(app, mongoose);
const ManufacturerController = require('./controllers/manufacturers');
const PhonesController = require('./controllers/phones');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

const router = express.Router();
app.use(router)

router.route('/phones').get(PhonesController.findAllPhones);

// router.route('/create-phone').post(PhonesController.createPhone);
router.post('/create-phone', (req, res) => {
  upload(req, res, (err) => {
    console.log(req.files);
  })
})

router.route('/phone/:id')
    .get(PhonesController.findPhoneById)
    .delete(PhonesController.deletePhone)
    .put(PhonesController.updatePhone);

router.route('/manufacturers').get(ManufacturerController.findAllManufacturers);

router.route('/create-manufacturer').post(ManufacturerController.createManufacturer);

app.use('/api', router);
app.use('/images', express.static('./images/'))

app.listen(PORT, function () {
  console.log(`Node server running on http://localhost:${PORT}`);
});
