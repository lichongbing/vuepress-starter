const path = require('path');

module.exports = (options, ctx) => {

    return {
        name: 'vuepress-plugin-code-style-mac',
        define: {
            copybuttonText: options.copybuttonText || 'copy',
            copiedButtonText: options.copiedButtonText || "copied!"
        },
        clientRootMixin: path.resolve(__dirname, 'markdown.js')
    }


}
