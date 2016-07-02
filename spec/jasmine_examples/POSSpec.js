describe('POS', function(){
  var POS = require('../../lib/jasmine_examples/POS');
  var info = [
    {
      barcode: 'ITEM000001',
      name: '可口可乐',
      unit: '瓶',
      category: '食品',
      subCategory: '碳酸饮料',
      price: 3.00
    },{
      barcode: 'ITEM000002',
      name: '脉动',
      unit: '瓶',
      category: '食品',
      subCategory: '功能饮料',
      price: 4.00
    },{
      barcode: 'ITEM000003',
      name: '雪碧',
      unit: '瓶',
      category: '食品',
      subCategory: '碳酸饮料',
      price: 3.00
    },{
      barcode: 'ITEM000004',
      name: '加多宝',
      unit: '罐',
      category: '食品',
      subCategory: '凉茶饮料',
      price: 4.00
    }
  ]

  describe('set', function(){
    it('should has been save promotions', function(){
      var pos = new POS();
      pos.set([
        'ITEM000001',
        'ITEM000005'
      ]);
      expect(pos.promotions.length).toEqual(2);
      expect(pos.promotions[0]).toEqual('ITEM000001');
      expect(pos.promotions[1]).toEqual('ITEM000005');
    });
  });

  describe('print', function(){
    var data = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005'
    ];
    it('should return "ITEM000001 ITEM000005"', function(){
      var pos = new POS();
      pos.set([
        'ITEM000001',
        'ITEM000005'
      ]);
      expect(pos.print(data)).toEqual('ITEM000001 ITEM000001 ITEM000001 ITEM000001 ITEM000001 ITEM000003-2 ITEM000005 ITEM000005 ITEM000005');
    });
  });

});
