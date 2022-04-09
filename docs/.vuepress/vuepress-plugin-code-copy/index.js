/**
 * filename index.js
 * @author lichongbing
 * @decrib index.js
 * @time 2022 04  09 15 18 01
 * @email lichongbing@antu.com.cn
 * @qqemail 873610008@qq.com
 * @phone 17778479306
 */

const path = require('path');

module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-code-copy',
        define: {
            copybuttonText: options.copybuttonText || 'copy',
            copiedButtonText: options.copiedButtonText || "copied!"
        },
        clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
    }
}
