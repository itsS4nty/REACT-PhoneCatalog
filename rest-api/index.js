const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT;

mongoose.connect('mongodb://localhost/PhoneCatalog', (err, res) => {
    if(err) throw err;
});

const models = require('./models/phones')(app, mongoose);
const PhonesController = require('./controllers/phones');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();
app.use(router)

router.route('/phones').get(PhonesController.findAllPhones);

router.route('/create-phone').post(PhonesController.createPhone);

router.route('/phone/:id')
    .get(PhonesController.findPhoneById)
    .delete(PhonesController.deletePhone)
    .put(PhonesController.updatePhone);

app.use('/api', router);
app.use('/images', express.static('./images/'))

app.listen(PORT, function () {
  console.log(`Node server running on http://localhost:${PORT}`);
});
