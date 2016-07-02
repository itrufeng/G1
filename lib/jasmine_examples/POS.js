function POS() {

}

POS.prototype.print = function(jsonData) {
  this.data = jsonData;
  return this.data.reduce((prev, curr) => {
    if(prev === ''){
      return this.transCodeToInfo(curr).name;
    }
    return prev + ' ' + this.transCodeToInfo(curr).name;
  }, '');
}

POS.prototype.transCodeToInfo = function(code) {
  var filteredInfoes = this.infoes.filter((info) => {
    return info.barcode === code;
  });
  return filteredInfoes[0];
}

POS.prototype.set = function(promotions) {
  this.promotions = promotions;
}

POS.prototype.setInfoes = function(infoes) {
  this.infoes = infoes;
}

module.exports = POS;
