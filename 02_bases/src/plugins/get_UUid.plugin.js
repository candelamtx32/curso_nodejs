const { v4: uuid4 } = require('uuid')

// getUUid
const getUUid = () => {
    return uuid4()
}

module.exports = {
    getUUid,
}