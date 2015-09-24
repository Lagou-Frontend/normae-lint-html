var errors = {
    E101: 'ids must match the format: camel',
    E102: 'classes must match the format: underscore',
    E103: 'attribute "type" (<link>/<style>/<script>) should not be set',
    E104: 'value of boolean attributes (allowfullscreen, async, autofocus, ...) should not be set',
    E105: '`width` and `height` attributes must be given for `img` tag',
    E106: '`type` attribute must be given for `button` tag',
    E107: '`method` attribute of `form` tag must be set to `post`'
};

module.exports.renderMsg = function (code) {
    return code in errors ? errors[code] : null;
};
