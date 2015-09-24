module.exports = {
    name: 'button-req-type',
    on: ['tag'],
    filter: ['button']
};

module.exports.lint = function (element, opts) {
    if (!opts[this.name]) {
        return [];
    }

    var a = element.attribs;
    if (a && a.hasOwnProperty('type') && a.type.value !== '') {
        return [];
    }

    return {
        line: element.openLineCol[0],
        column: element.openLineCol[1],
        code: 'E106',
        data: {}
    };
};
