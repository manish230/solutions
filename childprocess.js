//run grep command via child process in your bash history
var exec = require('child_process').exec;
console.log(process.cwd());
exec('grep node ~/.bash_history',function(err,stdout,stderr) {
    console.log(stderr)
    console.log('history contains command related node', stdout)
});
