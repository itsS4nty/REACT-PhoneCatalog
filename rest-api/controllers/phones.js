const mongoose = require("mongoose");
const PhoneCatalog = mongoose.model("phones");

exports.findAllPhones = (req, res) => {
  PhoneCatalog.find({}, ['name', 'price', 'imageFileName'], (err, phones) => {
    if (err) res.send(500, err.message);

    console.log("GET /phones");
    res.status(200).jsonp(phones);
  });
};

exports.findPhoneById = (req, res) => {
  PhoneCatalog.findById(req.params.id, (err, phones) => {
    if (err) res.send(500, err.message);

    console.log(`GET /phone/${req.params.id}`);
    res.status(200).jsonp(phones);
  });
};

exports.createPhone = (req, res) => {
    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body;
    const newPhone = new PhoneCatalog({
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName,
        screen,
        processor,
        ram,
    });
    newPhone.save((err, phone) => {
        if(err) return res.status(500).send(err.message);
        console.log('POST /create-phone');
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