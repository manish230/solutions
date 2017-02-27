//run another nodejs program using child process
var exec=require('child_process').exec;
exec('node player.js',function(err,stdout,stderr) {
console.log('we are going to play a song',stdout)
})
