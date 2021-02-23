import Comment from './Comment'

function Post(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
            <h5>{props.body}</h5>
            <p><Comment/></p>
        </div>
    )
}

export default Post;