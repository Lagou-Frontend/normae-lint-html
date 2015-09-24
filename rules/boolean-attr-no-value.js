var booleanAttrs = [
    'allowfullscreen',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'compact',
    'controls',
    'declare',
    'default',
    'defaultchecked',
    'defaultmuted',
    'defaultselected',
    'defer',
    'disabled',
    'draggable',
    'enabled',
    'formnovalidate',
    'hidden',
    'indeterminate',
    'inert',
    'ismap',
    'itemscope',
    'loop',
    'multiple',
    'muted',
    'nohref',
    'noresize',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'pauseonexit',
    'readonly',
    'required',
    'reversed',
    'scoped',
    'seamless',
    'selected',
    'sortable',
    'spellcheck',
    'translate',
    'truespeed',
    'typemustmatch',
    'visible'
];
booleanAttrs.push('script', 'style');

module.exports = {
    name: 'boolean-attr-no-value',
    on: ['dom', 'attr'],
    filter: booleanAttrs
};

module.exports.lint = function(attr, opts) {
    if (!opts[this.name]) {
        return [];
    }

    if (attr.name === 'script' || attr.name === 'style') {
        var attribs = attr.attribs;
        var attrNames = Object.keys(attribs);
        for (var i = 0; i < attrNames.length; i++) {
            var attrName = attrNames[i];
            if (booleanAttrs.indexOf(attrName) > -1 && attribs[attrName].value !== '') {
                return {
                    line: attr.openLineCol[0],
                    column: attr.openLineCol[1],
                    code: 'E104',
                    data: {}
                }
            }
        }

        return [];
    }

    return attr.value === '' ? [] : {
        line: attr.valueLineCol[0],
        column: attr.valueLineCol[1],
        code: 'E104',
        data: {}
    };
};
