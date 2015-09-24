module.exports = {
    name: 'img-req-width-height',
    on: ['tag'],
    filter: ['img']
};

module.exports.lint = function (element, opts) {
    if (!opts[this.name]) {
        return [];
    }

    var a = element.attribs;
    if (a && 
        a.hasOwnProperty('width') && a.width.value !== '' &&
        a.hasOwnProperty('height') && a.height.value !== '') {
        return [];
    }

    return {
        line: element.openLineCol[0],
        column: element.openLineCol[1],
        code: 'E105',
        data: {}
    };
};
