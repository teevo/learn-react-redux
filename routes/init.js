module.exports = function(app) {
	require('./landing/_routes.js')(app);
	require('./api/_routes.js')(app);
}