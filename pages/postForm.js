import { useState } from "react"
export default function PostForm({ addPost }) {

    const [name, setName] = useState("")
    const [text, setText] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        let newPost = {
            "name": name,
            "text": text
        }
        addPost(newPost)
    }
    return <div>Post Form!</div>
}