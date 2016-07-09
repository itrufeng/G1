function POS() {

}

POS.prototype.print = function(jsonData) {
  this.data = jsonData;
  var barcodeCounts = this.sameBarcodeCount(jsonData);
  return barcodeCounts.reduce((prev, curr) => {
    var dealName = '';
    if (this.searchPromotions(curr.barcode)) {
      dealName = this.transCodeToInfo(curr.barcode).name + ' ' + parseFloat(this.transCodeToInfo(curr.barcode).price).toFixed(2) + '元 ' + curr.count + this.transCodeToInfo(curr.barcode).unit+' [X]';
    } else {
      dealName = this.transCodeToInfo(curr.barcode).name + ' ' + parseFloat(this.transCodeToInfo(curr.barcode).price).toFixed(2) + '元 '+curr.count + this.transCodeToInfo(curr.barcode).unit;
    }

    if(prev === '') {
      return dealName
    }
    return prev + ' ' + dealName;
  }, '');
}

POS.prototype.sameBarcodeCount=function(jsonData){
  var barcodeCounts =[];
  for(var i=0;i<jsonData.length;i++){
    var codeArray = jsonData[i].split('-');
    if(codeArray.length === 1){
      barcodeCounts = this.searchSameBarcode(codeArray[0], barcodeCounts, 1);
    }
    else{
      barcodeCounts = this.searchSameBarcode(codeArray[0], barcodeCounts, parseInt(codeArray[1]));
    }
  }
  return barcodeCounts;
}

POS.prototype.searchSameBarcode = function(code,barcodeCounts, count) {
  for(var j=0;j<barcodeCounts.length;j++){
    if(code === barcodeCounts[j].barcode){
      barcodeCounts[j].count += count;
      break;
    }
  }
  if(j === barcodeCounts.length) {
    barcodeCounts.push({barcode:code,count:count});
  }
  return barcodeCounts;
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
