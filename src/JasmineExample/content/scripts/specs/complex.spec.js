describe('Simple Module Tests', function () {
    var theModule;
    beforeEach(function () {
        theModule = new ComplexModule();
    });

    it('should add the item', function () {
        theModule.addItem({});
        expect(theModule.items).toHaveCount(1);
    });
});