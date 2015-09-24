module.exports = {
    name: 'id-style-camel',
    on: ['attr'],
    filter: ['id']
};

module.exports.lint = function(attr, opts) {
    if (!opts[this.name]) {
        return [];
    }

    return /^[a-zA-Z][a-zA-Z\d]*$/.test(attr.value) ? [] : {
        line: attr.valueLineCol[0],
        column: attr.valueLineCol[1],
        code: 'E101',        
        data: {}
    };
};
