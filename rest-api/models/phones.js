exports = module.exports = (app, mongoose) => {
	const PhonesSchema = new mongoose.Schema({
		name: { type: String },
        manufacturer: { type: String },
        description: { type: String },
        color: { type: String },
        price: { type: Number },
        imageFileName: { type: String },
        screen: { type: String },
        processor: { type: String },
        ram: { type: Number },
	});
	mongoose.model('phones', PhonesSchema);
};