const mongoose = require("mongoose");
const PhoneCatalog = mongoose.model("phones");
const fs = require('fs');

exports.findAllPhones = (req, res) => {
  console.log((req.query.manufacturers))
  const query = req.query.all ? {} : { 
    manufacturer: req.query.manufacturers !== '' ? { $in: (req.query.manufacturers).split(',') } : {$exists: true},
    $and: [{ price: { $gte: req.query.minPrice } }, { price: { $lte: req.query.maxPrice } }],
    storage: req.query.storage ? { $gte: req.query.storage } : { $gte: 8 } ,
  };
  console.log(query)
  PhoneCatalog.find(query, ['name', 'price', 'imageFileName'], (err, phones) => {
    if (err) res.send(500, err.message);

    console.log("GET /phones");
    res.status(200).jsonp(phones);
  });
};

exports.findAllPhonesParams = (req, res) => {
  PhoneCatalog.find({}, (err, phones) => {
    if(err) res.send(500, err.message);
    console.log('GET /phone/:params');
    res.status(200).jsonp(phones);
  })
}

exports.findPhoneById = (req, res) => {
  PhoneCatalog.findById(req.params.id, (err, phones) => {
    if (err) res.send(500, err.message);

    console.log(`GET /phone/${req.params.id}`);
    res.status(200).jsonp(phones);
  });
};

exports.createPhone = (req, res) => {
    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram,
    storage } = JSON.parse(req.body.data);
    console.log(req.body)
    const newPhone = new PhoneCatalog({
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName: `${name.replace(/\s/g, '')}/image_${name}.jpg`,
        screen,
        processor,
        ram,
        storage,
    });
    newPhone.save((err, phone) => {
        if(err) return res.status(500).send(err.message);
        console.log('POST /create-phone');
        fs.readdir('./uploads/', (err, files) => {
          files.forEach(file => {
              if(file === `image_${name}.jpg`) {
                if (!fs.existsSync(`./images/${name.replace(/\s/g, '')}`)){
                    fs.mkdirSync(`./images/${name.replace(/\s/g, '')}`);
                }
                fs.renameSync(`./uploads/${file}`, `./images/${name.replace(/\s/g, '')}/${file}`);
              }
          });
      });
        res.status(200).jsonp(phone);
    })
}

exports.updatePhone = (req, res) => {
    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body;
    const updatedPhone = { name, manufacturer, description, color, price, imageFileName, screen, processor, ram };
    PhoneCatalog.findById(req.params.id, (err, phone) => {
        if (err) res.send(500, err.message);
        Object.keys(updatedPhone).forEach(key => phone[key] = updatedPhone[key]);
        phone.save((err) => {
            if(err) return res.status(500).send(err.message);
            console.log(`PUT /phone/${req.params.id}`);
            res.status(200).jsonp(phone);
        })
    });
}

exports.deletePhone = (req, res) => {
    PhoneCatalog.findByIdAndRemove(req.params.id, (err, phone) => {
      if(err) return res.status(500).send(err.message);
      console.log(`DELETE /phone/${req.params.id}`);
      res.status(200).send();
    })
}