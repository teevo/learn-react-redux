module.exports = function(app) {
  app.get("/api/test", function *() {
  	this.response.body = { success: true }
  });
}