var SimpleModule = (function () {
    var module = function () { };
    module.prototype = {
        add: function (x, y) {
            return x + y;
        }
    };

    return module;
} ());