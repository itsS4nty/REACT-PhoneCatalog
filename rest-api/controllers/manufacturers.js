const mongoose = require("mongoose");
const Manufacturers = mongoose.model("manufacturers");

exports.findAllManufacturers = (req, res) => {
  Manufacturers.find({}, (err, manufacturers) => {
    if (err) res.send(500, err.message);

    console.log("GET /manufacturers");
    res.status(200).jsonp(manufacturers);
  });
};

exports.createManufacturer = (req, res) => {
    const { name } = req.body;
    const newManufacturer = new Manufacturers({
        name,
    });
    newManufacturer.save((err, manufacturer) => {
        if(err) return res.status(500).send(err.message);
        console.log('POST /create-manufacturer');
        res.status(200).jsonp(manufacturer);
    })
}

exports.deleteManufacturer = (req, res) => {
    Manufacturers.findByIdAndRemove(req.params.id, (err, manufacturer) => {
      if(err) return res.status(500).send(err.message);
      console.log(`DELETE /manufacturer/${req.params.id}`);
      res.status(200).send();
    })
}