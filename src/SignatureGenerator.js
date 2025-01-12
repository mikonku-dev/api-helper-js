const CryptoJS = require("crypto-js");

class SignatureGenerator {
  constructor(secret) {
    this.secret = secret;
  }

  generateSignature(data) {
    const signature = CryptoJS.HmacSHA256(data, this.secret).toString();
    return signature;
  }
}

module.exports = SignatureGenerator;
