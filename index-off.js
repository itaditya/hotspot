var util = require('util')
var exec = require('child_process').exec;
var child;
child = exec("netsh wlan stop hostednetwork", function (error, stdout, stderr) {
  util.log('Hotspot stopped');
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
