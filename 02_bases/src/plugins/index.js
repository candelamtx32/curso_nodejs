const { getUUid } = require('../plugins/get_UUid.plugin.js')
const { getAge } = require('../plugins/get_age.plugin.js')
const { http } = require('./http_client.plugin.js')

module.exports = {
    getUUid,
    getAge,
    http,
}
