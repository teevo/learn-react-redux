module.exports = function(app) {
	app.get("/", function *() {
		yield this.render("index", {layout: '_layout'});
	});
}
	