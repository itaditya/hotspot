var util = require('util')
var exec = require('child_process').exec;
var inquirer = require('inquirer');
inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Name of Hotspot'
}, {
    type: 'password',
    name: 'pass',
    message: 'Password'
}]).then(function (answers) {
    var child;
    child = exec(`netsh wlan set hostednetwork mode=allow ssid="${answers.name}" key="${answers.pass}"`, function (error, stdout, stderr) {
      util.log(stdout);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
});
