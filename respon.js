'use strict';

exports.ok = function(values, respon) {
    var data = {
        'status': 200,
        'values': values
    };
    respon.json(data);
    respon.end();
};