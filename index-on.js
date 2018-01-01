var util = require('util');
var exec = require('child_process').exec;

var scriptPath = __dirname;
var child = exec(`${scriptPath}/elevate.exe netsh wlan start hostednetwork`, function (error, stdout, stderr) {
    util.log("Hotspot started !");
    if (error) {
        console.log(`exec error: ${error}`);
    }
});
