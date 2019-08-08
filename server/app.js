const newRelic = require('newrelic');
const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

const app = express();
app.use(express.static(path.join(__dirname, '/../public/')));
app.use('/:restaurantID', express.static(path.join(__dirname, '/../public/')));
const serverReservations = 'http://18.217.25.48';
const reviews = 'http://54.153.40.76';
const photos = 'http://13.52.61.135';


app.all('/booking/reserved/:restaurantID', function(req, res) {
  apiProxy.web(req, res, {target: serverReservations});
});

app.all('/booking/count/:restaurantID', function(req, res) {
  apiProxy.web(req, res, {target: serverReservations});
});

app.all('/booking/create/:restaurantID', function(req, res) {
  apiProxy.web(req, res, {target: serverReservations});
});

app.all('/booking/update/:restaurantID', function(req, res) {
  apiProxy.web(req, res, {target: serverReservations});
});

app.all('/booking/cancel/:restaurantID', function(req, res) {
  apiProxy.web(req, res, {target: serverReservations});
});

app.all("/:restaurantID/reviews/reviewListing", function(req, res) {
  console.log('redirecting to reviews api');
  apiProxy.web(req, res, {target: reviews});
});
app.all("/:restaurantID/reviews/restaurantInfo", function(req, res) {
  console.log('redirecting to reviews api');
  apiProxy.web(req, res, {target: reviews});
});

app.all('/:restaurantID/images', function(req, res) {
  apiProxy.web(req, res, {target: photos});
});


module.exports = app;
