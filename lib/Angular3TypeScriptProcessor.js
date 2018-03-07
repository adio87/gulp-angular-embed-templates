var extend = require('./utils').extend;
var Angular1Processor = require('./Angular1Processor');

const TEMPLATE_BEGIN = Buffer('template=\'');
const TEMPLATE_END = Buffer('\'');

var Angular3TypeScriptProcessor = extend(Angular1Processor, {
    /**
     * @override
     */
    getPattern : function() {
        // for typescript: 'templateUrl = "template.html"'
        return 'templateUrl[\\s]*=[\\s]*[\'"`]([^\'"`]+)[\'"`]';
    },

    /**
     * @override
     */
    embedTemplate : function(match, templateBuffer) {
        return {
            start : match.index,
            length: match[0].length,
            replace: [TEMPLATE_BEGIN, templateBuffer, TEMPLATE_END]
        }
    }
});

module.exports = Angular3TypeScriptProcessor;
