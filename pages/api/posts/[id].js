// For testing purposes, hard-coding data
const posts = [
    { id: 1, name: 'Bob', text: 'I <3 Burgers' },
    { id: 2, name: 'Skeletor', text: 'Nyehh!' },
    { id: 3, name: 'Rod', text: 'I like to party' }
]

export default (req, res) => {
    //Parsing out id value from req query parameter
    //Query parameter passed in via URL, as a string
    const { query: { id } } = req;
    //Search within posts constant, locate post matching target ID
    const post = posts.find(post => post.id === parseInt(id))
    //Error handling - if no match found return 404 error
    if (!post) {
        return res.status(404).json({
            status: 404,
            message: 'Post Not Found'
        })
    }
    res.json({
        ...post
    });
}