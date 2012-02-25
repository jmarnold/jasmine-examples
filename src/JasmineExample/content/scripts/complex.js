var ComplexModule = (function () {
    var module = function () {
        this.items = [];
    };
    module.prototype = {
        addItem: function (item) {
            this.items.push(item);
        }
    };

    return module;
} ());