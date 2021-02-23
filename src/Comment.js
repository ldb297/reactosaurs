function Comment(props){        
    let content = ['What a great app!', 'This app stinks!', 'What\'s an app?', 'I love React!', 'What\'s JSX?', 'Did I do this correctly?', 'How many comments are there?', 'If you give a mouse a cookie', 'One plus One is...Two?']
        return(
            <div>
                {content[Math.floor(Math.random()*content.length)]}<br/>
            </div>
        )
}

export default Comment;