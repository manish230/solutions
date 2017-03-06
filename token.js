const crypto = require('crypto');
function util(){}
util.generatetoken =function (data,crypkey,hmackey) {
    this.tdata=data;
    this.ckey=crypkey;
    this.hkey=hmackey;
    function invalidtokenerror (){
        console.log("there is some error:")
        return err;
    }

    function validity(){


    this.tdata.userid = data.userid;
    this.tdata.scope = data.scope;
    this.tdata.expiry = data.expiry;
    if (typeof this.tdata.userid !== "string") {
        return err;
    }
    if (Array.isArray(this.tdata.scope) == false) {
        return err;
    }
}

function jsondata() {
     //CREATING JSON OF DATA
    let djson = JSON.stringify(this.tdata);
    //CREATING HMAC OF JSONDATA
    let payloadHMAC = crypto.createHmac('sha256', this.hkey.toString());
    payloadHMAC.update(djson);
    let hdigest = payloadHMAC.digest('hex');
    //CONCATINATING
    let payload = djson + "|||" + payloadhmac
    //CONVERTING PAYLOAD IN BASE64
    let payload64 = Buffer.from(payload.toString(), 'base64');
    //CREATING CRPTOKEY
    let cryptkey = crypto.createCipher('aes',this.ckey);
    cipher.update(payload64);
    cryptkeyy = cipher.final('base64');
    //making hmac of cryptokey
    let cHMAC = crypto.createHmac('sha256', this.hkey.toString());
    cHMAC.update(cryptkeyy);
    let CHMAC = cHMAC.digest('hex');
    //generating rawtoken
    let rawtoken = cryptkeyy + "." + this.tdata.userid + "." + CHMAC;
    //encrypting rawtoken using aes
    crypto.createCipher('aes', this.ckey);
    cipher.update(rawtoken);
    let token= cipher.final('base64');

return token;
}
}
module.exports=util();




