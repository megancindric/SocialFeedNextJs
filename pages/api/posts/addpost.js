// Supports GET and POST requests

import executeQuery from "../../../lib/db";

export default async (req, res) => {
    // extracts req.method to determine type of HTTP request
    console.log("req", req)
    const { method } = req;

    try {
        console.log("request", req.body)
        const result = await executeQuery({
            query: 'INSERT INTO post(name,text) VALUES(?,?)',
            values: [req.body.name, req.body.text]
        })
        console.log("POST result ", result)
    } catch (error) {
        console.log({ error })
    }


}