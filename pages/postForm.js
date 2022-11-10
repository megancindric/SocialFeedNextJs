import { useState } from "react"
export default function PostForm({ addPost }) {

    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        let newPost = {
            "name": name,
            "text": text
        }
        await addPost(newPost)

        // console.log(newPost)
        // //Converting data to JSON
        // const JSONpost = JSON.stringify(newPost)
        // //Request Options
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSONpost,
        // }

        // let response = await fetch('api/posts', options)
        // let result = await response.json()
        // console.log(result)
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" onChange={(e) => setText(e.target.value)} value={text} />
        <button type="submit">Submit</button>
    </form>
}