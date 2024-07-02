/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    const entities = {
        '&quot;': '"',
        '&apos;': "'",
        '&amp;': '&',
        '&gt;': '>',
        '&lt;': '<',
        '&frasl;': '/',
    };
    const pattern = /&quot;|&apos;|&amp;|&gt;|&lt;|&frasl;/g;
    const result = text.replace(pattern, (match) => entities[match]);

   return result;
};