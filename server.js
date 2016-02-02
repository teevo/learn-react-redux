var koa = require('koa');
if(process.env.NODE_ENV !== 'production') require('dotenv').load();
var app = koa();
var bodyParser = require('koa-bodyparser');
var router = require('koa-router')();
var render = require('koa-ejs');
var path = require('path');
var serve = require('koa-static');
var knex = require('koa-knex');

app.use(bodyParser());

render(app, {
    root: path.join(__dirname, 'views'),
    viewExt: 'ejs',
    template: 'layout',
    locals: {
	    site_title: 'Learn React-Redux',
	    page_css: '',
	    page_title: ''
    },
    cache: false,
    debug: process.env.NODE_ENV !== 'production' ? true : false
});

app.use(serve('public'));

require('./routes/init')(router);
app.use(router.routes());

app.listen(process.env.PORT || 5000);