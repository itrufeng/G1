describe('POS', function(){
  var POS = require('../../lib/jasmine_examples/POS');

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
