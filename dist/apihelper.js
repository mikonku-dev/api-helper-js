!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.apihelper = t())
    : (e.apihelper = t());
})(this, () => {
  return (
    (e = {
      374: (e, t, r) => {
        const o = r(103);
        e.exports = class {
          constructor(e) {
            this.secret = e;
          }
          generateSignature(e) {
            return o.HmacSHA256(e, this.secret).toString();
          }
        };
      },
      497: (e, t, r) => {
        const o = r(374);
        e.exports = { SignatureGenerator: o };
      },
      103: (e) => {
        "use strict";
        e.exports = require("crypto-js");
      },
    }),
    (t = {}),
    (function r(o) {
      var s = t[o];
      if (void 0 !== s) return s.exports;
      var n = (t[o] = { exports: {} });
      return e[o](n, n.exports, r), n.exports;
    })(497)
  );
  var e, t;
});
