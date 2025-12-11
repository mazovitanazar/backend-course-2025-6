const { program } = require('commander'); 
const superagent = require('superagent'); 
const fs = require('fs');
const path = require('path'); 
const http = require('http');


program.requiredOption('-h, --host <ip>','ip-adresa').requiredOption('-p, --port <port>','port').requiredOption('-c, --cache <directions>','direction to file');

program.parse();

const options = program.opts();
const HOST = options.host, PORT = options.port, DIR = path.resolve(options.cache),FILE = path.join(DIR,'data.json'),PHOTOFILE=path.join(DIR,'uploads/');

