module.exports =
	tags: [
		"memos"
	],
	"layout": "memo.njk",
	"permalink": "blog/{{ page.fileSlug | slugify }}/index.html",
	"date": "git Last Modified"
