require("dotenv").config()
pfs = require "node:fs/promises"
graymatter = require "gray-matter"
glob = require "fast-glob"

memo_path = "memos/*.md"
dir = await glob memo_path

read = (name) ->
    file = await pfs.readFile name, { encoding: "utf8" }
    matter = graymatter(file)
    [matter, name]

files = (await read(name) for name in dir)

instance = new URL process.env.MASTO_INSTANCE
token = process.env.MASTO_TOKEN

###* @param {graymatter.GrayMatterFile<string>} file ###
mastodon = (file) ->
    path = new URL "/api/v1/statuses", instance
    data = new FormData

    data.set "status", file.content
    data.set "visibility", "direct"
    data.set "content_type", "text/markdown"
    
    res = await fetch path,
        method: 'POST',
        body: data
        headers:
            "Authorization": "Bearer #{token}"

    if !res.ok
        throw res.statusText
    
    json = await res.json()
    json.url

###* @param {graymatter.GrayMatterFile<string>} file ###
publish = (file, name) ->
    console.log file.stringify(), name
    file.data.elsewhere =
        mastodon: await mastodon(file)
    
    pfs.writeFile name, file.stringify()
    

(await publish(file, name) for [file, name] in files when !file.data.elsewhere)
