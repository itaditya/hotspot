#!/usr/bin/env node
var program = require('commander');
var figlet = require('figlet');
program
    .command('on', 'turn hotspot on')
    .command('off', 'turn hotspot off')
    .command('setup', 'set hotspot name and password')
    .parse(process.argv);
figlet('HOTSPOT', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
