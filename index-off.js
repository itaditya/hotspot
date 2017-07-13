var util = require('util')
var exec = require('child_process').exec;
var child;
child = exec("netsh wlan stop hostednetwork", function (error, stdout, stderr) {
  util.log('stdout: ' + stdout);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
