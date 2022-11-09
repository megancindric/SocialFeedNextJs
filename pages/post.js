export default function Post({ post }) {
    return (<>
        <h3>{post.name}</h3>
        <p>{post.text}</p></>
    )
}