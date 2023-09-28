(function () {
    const markdownHighlightText = function (hook, vm) {
        hook.beforeEach(function (markdown) {
            function replaceMatchWithString(source, match, string) {
                const firstHalf = source.substring(0, match.index);
                const secondHalf = source.substring(match.index + match[0].length, source.length);

                return firstHalf + string + secondHalf;
            }

            const regex = /(?!(?:\s`{3}\S?)(?:((?!`{3})[\s\S])*))(==\S(.*?)\S==)(?!(?:((?!`{3})[\s\S])*)(?:`{3}\s))/;
            let match;

            while (match = markdown.match(regex)) {
                const newText = "<mark>" + match[0].replace(/==/g, "") + "</mark>";
                markdown = replaceMatchWithString(markdown, match, newText);
            }

            return markdown;
        });
    };

    // Add plugin to docsify's plugin array
    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], markdownHighlightText);
})();