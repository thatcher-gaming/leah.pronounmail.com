module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy(".well-known");

    eleventyConfig.addShortcode('renderblock', function (name) {
        return (this.page.layoutblock || {})[name] || '';
    });

    eleventyConfig.addPairedShortcode('defblock', function (content, name) {
        if (!this.page.layoutblock) this.page.layoutblock = {};
        this.page.layoutblock[name] = content;
        return '';
    });

    return {
        markdownTemplateEngine: "njk",
    }
};