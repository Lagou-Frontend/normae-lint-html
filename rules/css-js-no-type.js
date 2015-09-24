module.exports = {
    name: 'css-js-no-type',
    on: ['dom', 'tag'],
    filter: ['style', 'script', 'link']
};

module.exports.lint = function(element, opts) {
    if (!opts[this.name]) {
        return [];
    }

    var illegal;
    var a = element.attribs;
    if (element.name === 'link') {
        illegal = a && a.hasOwnProperty('rel') && a.rel.value === 'stylesheet' && a.hasOwnProperty('type');
    } else {
        illegal = a && a.hasOwnProperty('type');
    }

    return illegal ? {
            line: element.openLineCol[0],
            column: element.openLineCol[1],
            code: 'E103',
            data: {}
        } : [];
};
