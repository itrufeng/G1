function POS() {

}

POS.prototype.print = function(jsonData) {
  this.data = jsonData
  return this.data.reduce(function(sum, item){
    return sum + ' ' + item
  });
}

POS.prototype.set = function(promotions) {
  this.promotions = promotions
}

module.exports = POS;
