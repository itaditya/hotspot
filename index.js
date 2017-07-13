#!/usr/bin/env node
var program = require('commander');
program
    .command('on', 'turn hotspot on')
    .command('off', 'turn hotspot off')
    .parse(process.argv);
