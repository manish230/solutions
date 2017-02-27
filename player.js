var audioOption={channels:2,bitDepth:16,sampleRate:44100};
 lame=require("lame");
 colors=require('colors')
speaker=require('speaker')
fs=require('fs');
song='song.mp3';
var path=require('path')
 inputstream=fs.createReadStream(process.cwd()+'/'+song);
 decoder= new lame.Decoder(audioOption);
decoder.on('format',function(){
    console.log(colors.red("decoded successfully"));
});
speaker=new speaker(audioOption)
inputstream.pipe(decoder).pipe(speaker);