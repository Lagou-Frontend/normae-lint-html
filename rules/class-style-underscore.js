module.exports = {
    name: 'class-style-underscore',
    on: ['attr'],
    filter: ['class']
};

module.exports.lint = function(attr, opts) {   
    if (!opts[this.name]) {
        return [];
    }

    var classes = attr.value.split(' ');
    for(var i = 0; i < classes.length; i++) {
        if (classes[i] !== '' && !/^[a-z][a-z\d]*(_[a-z\d]+)*$/.test(classes[i])) {
            return {
                line: attr.valueLineCol[0],
                column: attr.valueLineCol[1],
                code: 'E102',        
                data: {}
            }
        }
    }
    return [];
};
