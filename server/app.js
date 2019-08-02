const newRelic = require('newrelic');
const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

const app = express();
app.use(express.static(path.join(__dirname, '/../public/')));
app.use('/:restaurantID', express.static(path.join(__dirname, '/../public/')));
const serverReservations = 'http://localhost:3005'


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

module.exports = app;
