module.exports = {
    name: 'form-req-method-post',
    filter: ['form'],
    on: ['tag']
};

module.exports.lint = function (element, opts) {
    if (!opts[this.name]) {
        return [];
    }

    var a = element.attribs;
    if (a && a.hasOwnProperty('method') && a.method.value === 'post') {
        return [];
    }

    return {
        line: element.openLineCol[0],
        column: element.openLineCol[1],
        code: 'E107',        
        data: {}
    };
};
