function POS() {

}

POS.prototype.print = function(jsonData) {
  this.data = jsonData;
  return this.data.reduce((prev, curr) => {
    var dealName = '';
    if (this.searchPromotions(curr)) {
      dealName = this.transCodeToInfo(curr).name + '[X]';
    } else {
      dealName = this.transCodeToInfo(curr).name;
    }
    
    if(prev === '') {
      return dealName
    }
    return prev + ' ' + dealName;
  }, '');
}

POS.prototype.searchPromotions = function(code) {
  if(!this.promotions) {
    return false;
  }
  var filteredCode = this.promotions.filter((promotion) => {
    return promotion === code;
  });
  return filteredCode.length != 0;
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
