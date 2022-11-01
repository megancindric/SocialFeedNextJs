import Post from "./post"

export default function Feed({ allPosts }) {
    return (<div>
        <h4>Main Feed</h4>
        {allPosts.map((post, index) => {
            return (<Post key={index} post={post} />)
        })}
    </div>)
}