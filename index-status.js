var util = require('util')
var exec = require('child_process').exec;
var child;
child = exec("netsh wlan show hostednetwork", function (error, stdout, stderr) {
  util.log(stdout);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
