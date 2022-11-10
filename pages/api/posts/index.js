// Supports GET and POST requests
// For testing purposes, hard-coding data
const posts = [
    { id: 1, name: 'Bob', text: 'I <3 Burgers' },
    { id: 2, name: 'Skeletor', text: 'Nyehh!' },
    { id: 3, name: 'Rod', text: 'I like to party' }
]

export default (req, res) => {
    // extracts req.method to determine type of HTTP request
    const { method } = req;

    switch (method) {
        case 'GET':
            res.status(200).json(posts);
            break;
        case 'POST':
            const body = req.body
            res.status(200).json({ data: `Username: ${body.name}, Post: ${body.text}` });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}