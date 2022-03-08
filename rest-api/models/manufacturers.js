exports = module.exports = (app, mongoose) => {
	const ManufacturersSchema = new mongoose.Schema({
		name: { type: String },
	});
	mongoose.model('manufacturers', ManufacturersSchema);
};