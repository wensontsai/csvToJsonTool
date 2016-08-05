#!/usr/bin/env node

var fs = require('fs');
var util = require('util');

var Converter = require("csvtojson").Converter;
var csvConverter = new Converter({constructResult:false}); // The parameter false will turn off final result construction. It can avoid huge memory consumption while parsing. The trade off is final result will not be populated to end_parsed event.

var fileName = process.argv.slice(2)[0];

var readStream = fs.createReadStream(fileName);
var writeStream = fs.createWriteStream(fileName.split('.')[0] + '.json');

readStream.pipe(csvConverter).pipe(writeStream);