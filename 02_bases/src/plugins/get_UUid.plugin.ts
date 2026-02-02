import { v4 as uuid } from 'uuid';

// getUUid
const getUUid = () => {
    return uuid4()
}

module.exports = {
    getUUid,
}