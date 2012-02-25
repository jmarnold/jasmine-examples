$(document).ready(function() {
    beforeEach(function () {
        this.addMatchers({
            toHaveCount: function (expected) {
                return this.actual.length == expected;
            }
        });
    });
});
