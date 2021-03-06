import axios from 'axios'

const GROUP_ROUTE = (process.env.NODE_ENV !== 'development') ? '' : 'http://localhost:3007'

async function loadWords() {
    const res = await axios.get(`${GROUP_ROUTE}/fetch-tweets`)
    return res.data
}

async function query() {
    const res = await axios.get(`${GROUP_ROUTE}/tweet-report`)
    let isEmpty = res.data.reduce((acc, val) => {
        if (val.length) acc = false
        return acc
    }, true)
    if (isEmpty) throw new Error
    return res.data
}

export default {
    loadWords,
    query,
}