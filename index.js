#!/usr/bin/env node
var program = require('commander');
var figlet = require('figlet');
figlet('HOTSPOT', function(err, data) {
    if (err) {
        console.log('Something went wrong! Make sure you are running cmd as Administrator');
        console.dir(err);
        return;
    }
    console.log(data);
    if(process.platform != 'win32'){
        console.log('Sorry! currently only windows is supported');
        return;
    }
    program
        .command('on', 'turn hotspot on')
        .command('off', 'turn hotspot off')
        .command('setup', 'set hotspot name and password')
        .command('status', 'check hotspot status and connected people')
        .parse(process.argv);
});
