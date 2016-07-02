function POS() {

}

POS.prototype.print = function(jsonData) {
  this.data = jsonData;
  return this.data.reduce(function(sum, item){
    return sum + ' ' + item;
  });
}

POS.prototype.set = function(promotions) {
  this.promotions = promotions;
}

POS.prototype.setInfo = function(info) {
  this.info = info;
}

module.exports = POS;
