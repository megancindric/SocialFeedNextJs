// Supports GET and POST requests

import executeQuery from "../../../lib/db";

// For testing purposes, hard-coding data
const posts = [
    { id: 1, name: 'Bob', text: 'I <3 Burgers' },
    { id: 2, name: 'Skeletor', text: 'Nyehh!' },
    { id: 3, name: 'Rod', text: 'I like to party' }
]

export default async (req, res) => {
    try {
        console.log("GET request")
        const result = await executeQuery({
            query: 'SELECT * FROM post'
        })
        console.log("GET result ", result)
    } catch (error) {
        console.log({ error })
    }
}