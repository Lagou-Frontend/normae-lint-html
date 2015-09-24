'use strict';

var lint = require('htmllint');
var bulk = require('bulk-require');
var fs = require('fs');
var util = require("util");
var messages = require('./messages');
var defaultOpts = {
    interrupt: false,
    sets: require('./sets')
}

module.exports = function(content, file, setting) {
    var tempOpts = defaultOpts;
    var opts = fis.util.merge(tempOpts, setting);

    var rules = [];
    var rulesObj = bulk(__dirname, 'rules/*.js').rules;
    Object.keys(rulesObj).forEach(function(ruleName) {
        rules.push(rulesObj[ruleName]);
    });
    lint.use([{ rules: rules }]);

    lint(content, [ 'none', opts.sets ]).then(function(results) {
        results.forEach(function(result) {
            var message = messages.renderMsg(result.code) || 
                lint.messages.renderMsg(result.code, result.data);
            var error = util.inspect({
                path: file.subpath,
                line: result.line,
                column: result.column,
                message: message
            });

            process.stdout.write('\n '+ '[HTML_LINT_ERROR]'.red +' ' + error + '\n');
            if (opts.interrupt) {
                process.exit(1);
            }
        });
    });

    return content;
};
