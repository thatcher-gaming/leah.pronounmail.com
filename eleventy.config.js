import coffeescript from "coffeescript";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { RetrieveGlobals } from "node-retrieve-globals";
import "coffeescript/register.js";
import "dotenv/config";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const colours = require("./assets/colours.json");

const favicon_uri = (colour) => `data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_11_1310)'%3E%3Cpath d='M9.83812 42.2977C8.83551 42.2977 7.89556 41.859 7.01828 40.9817C6.14099 40.1044 5.70235 39.1645 5.70235 38.1619C5.70235 37.0966 6.20366 36.0313 7.1436 35.0914C8.52219 33.7128 10.3394 32.7102 12.5326 31.5822C14.4752 30.5796 16.5431 29.389 18.9243 27.5718C18.423 26.8825 18.047 26.0052 17.859 25.0653C14.9138 25.5039 12.658 26.0679 10.5274 26.7572C8.14621 27.5091 6.20366 28.0731 4.2611 28.0731C1.56658 28.0731 0 26.5065 0 24C0 21.4935 1.56658 19.9269 4.2611 19.9269C6.20366 19.9269 8.14621 20.4909 10.5274 21.2428C12.658 21.9321 14.9138 22.5587 17.9217 22.9974C18.047 22.0574 18.423 21.1802 18.9869 20.4282C16.5431 18.611 14.4752 17.4204 12.5326 16.4178C10.3394 15.2898 8.52219 14.2872 7.1436 12.9086C6.20366 11.9687 5.70235 10.9034 5.70235 9.83812C5.70235 8.83551 6.14099 7.89556 7.01828 7.01828C7.89556 6.14099 8.83551 5.70235 9.83812 5.70235C10.9034 5.70235 11.9687 6.20365 12.9086 7.1436C14.2872 8.52219 15.2898 10.3394 16.4178 12.5326C17.4204 14.4752 18.611 16.5431 20.4282 18.9869C21.1802 18.423 22.0574 18.047 22.9974 17.9217C22.5587 14.9138 21.9321 12.658 21.2428 10.5274C20.4909 8.14621 19.9269 6.20365 19.9269 4.26109C19.9269 1.56658 21.4935 0 24 0C26.5065 0 28.0731 1.56658 28.0731 4.26109C28.0731 6.20365 27.5091 8.14621 26.7572 10.5274C26.0679 12.658 25.5039 14.9138 25.0653 17.859C26.0052 18.047 26.8825 18.423 27.5718 18.9243C29.389 16.5431 30.5796 14.4752 31.5822 12.5326C32.7102 10.3394 33.7128 8.52219 35.0914 7.1436C36.0313 6.20365 37.0966 5.70235 38.1619 5.70235C39.1645 5.70235 40.1044 6.14099 40.9817 7.01828C41.859 7.89556 42.2977 8.83551 42.2977 9.83812C42.2977 10.9034 41.7963 11.9687 40.8564 12.9086C39.4778 14.2872 37.6606 15.2898 35.4674 16.4178C33.5248 17.4204 31.4569 18.611 29.0757 20.4282C29.577 21.1802 29.953 21.9948 30.141 22.9974C33.0862 22.5587 35.342 21.9321 37.4726 21.2428C39.8538 20.4909 41.7963 19.9269 43.7389 19.9269C46.4334 19.9269 48 21.4935 48 24C48 26.5065 46.4334 28.0731 43.7389 28.0731C41.7963 28.0731 39.8538 27.5091 37.4726 26.7572C35.342 26.0679 33.0862 25.5039 30.141 25.0653C29.953 26.0052 29.6397 26.8825 29.0757 27.6345C31.5196 29.389 33.5248 30.5796 35.4674 31.5822C37.6606 32.7102 39.4778 33.7128 40.8564 35.0914C41.7963 36.0313 42.2977 37.0966 42.2977 38.1619C42.2977 39.1645 41.859 40.1044 40.9817 40.9817C40.1044 41.859 39.1645 42.2977 38.1619 42.2977C37.0966 42.2977 36.0313 41.7963 35.0914 40.8564C33.7128 39.4778 32.7102 37.6606 31.5822 35.4674C30.5796 33.5248 29.389 31.5196 27.6345 29.0757C26.8825 29.6397 26.0052 30.0157 25.0653 30.141C25.5039 33.0862 26.0679 35.342 26.7572 37.4726C27.5091 39.8538 28.0731 41.7963 28.0731 43.7389C28.0731 46.4334 26.5065 48 24 48C21.4935 48 19.9269 46.4334 19.9269 43.7389C19.9269 41.7963 20.4909 39.8538 21.2428 37.4726C21.9321 35.342 22.5587 33.0862 22.9974 30.141C22.0574 29.953 21.1802 29.577 20.4282 29.0757C18.611 31.4569 17.4204 33.5248 16.4178 35.4674C15.2898 37.6606 14.2872 39.4778 12.9086 40.8564C11.9687 41.7963 10.9034 42.2977 9.83812 42.2977Z' fill='${colour}'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_11_1310'%3E%3Crect width='48' height='48' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E`

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function (eleventyConfig) {
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

    eleventyConfig.addShortcode('favicon', async function () {
        const theme = this.ctx.theme ?? "aubergine";
        const rgba = colours[theme + (theme == "grey" ? "-800" : "-600")];
        return favicon_uri(rgba);
    });

    eleventyConfig.addDataExtension("coffee", async (contents) => {
        const content = coffeescript['eval'](contents, { bare: true });
        return content instanceof Function ? content() : content;
    });

    eleventyConfig.setFrontMatterParsingOptions({
        engines: {
            coffee: (fr) => {
                const content = coffeescript['eval'](fr, { bare: true });
                return content instanceof Function ? content() : content;
            },
            coffeescript: async (fr) => {
                const content = coffeescript.compile(fr, { bare: true });
                let vm = new RetrieveGlobals(content);

                let data = {};
                return vm.getGlobalContext(data, {
                    reuseGlobal: true,
                    dynamicImport: true,
                });
            }
        }
    });

    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed.xml",
        collection: {
            name: "articles",
            limit: 0,
        },
        metadata: {
            language: "en",
            title: "Leah's Cool Blog",
            subtitle: "i'm awesome",
            base: "https://leah.pronounmail.com/blog/",
            author: {
                name: "Leah Clark",
                email: "leah@pronounmail.com",
            }
        }
    });


    return {
        markdownTemplateEngine: "njk",
    }
};