# @ts-check

elfetch = require "@11ty/eleventy-fetch"
process = require "node:process"

gh_username = "thatcher-gaming"
github = "https://api.github.com/users/#{gh_username}/repos"

sourcehut = "https://git.sr.ht/query"

opts = { duration: "1h", type: "json" }

###* @typedef {Object} Repository
   * @property {string} name
###

###* @param {string} body ###
###
srht_opts = (body) ->
    fetchOptions:
        method: "POST"
        body: body,
        headers:
            "Authorization": "Bearer #{process.env.SRHT_KEY}"
            "Content-Type": "application/json"
    duration: "1h"
    type: "json"
###

###* @returns {Promise<Repository[]>} ###
###
fetch_srht = () ->
    req = JSON.stringify
        query: """
            query {
                me {
                    repositories {
                        results { 
                            id,
                            name
                        }
                    }
                }
            }
        """

    res = await elfetch sourcehut, srht_opts(req)
    repos = res.data.me.repositories.results

    repos.map (r) ->
        name: r.name
###

# module.exports = () ->
    # repos:
        # github: await elfetch github, opts
        # sourcehut: await fetch_srht()