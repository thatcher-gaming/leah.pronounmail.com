module.exports = {
	tags: [
		"posts"
	],
	"layout": "post.njk",
	"permalink": "blog/{{ title | slugify }}/index.html",
	"date": "git Last Modified"
};