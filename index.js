// Just return an instance, yo
var uuid = module.exports = (function () {
  var uuid = new Uuid();

  return function () {
    return uuid.incr();
  }
})();

// Also expose the constructor directly.
uuid.Uuid = Uuid;

function Uuid (opts) {
  opts = opts || {};

  this.count = 0;

  this.chars = opts.chars || '0123456789abcdefghijklmnopqrstuvwxyz';
}

Uuid.prototype.incr = function incr () {
  var n = ++this.count,
      chars = this.chars,
      len = this.chars.length,
      digits = [];

  // Rewrite number in base whatever-the-heck
  while (n > 0) {
    digits.push(n % len); // next least sig. digit/remainder
    n = Math.floor(n/len); // divide out this digit
  }

  return digits.reverse().map(function (k) {
    return chars.substring(k-1, k);
  }).join('');

};  
