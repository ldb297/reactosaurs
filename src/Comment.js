import React, { Component } from 'react'
import Modal from './Modal'
class Comment extends Component {  
    state = {
        content: ['What a great app!', 'This app stinks!', 'What\'s an app?', 'I love React!', 'What\'s JSX?', 'Did I do this correctly?', 'How many comments are there?', 'If you give a mouse a cookie', 'One plus One is...Two?'],
        show: false
    }      

    showModal = e => {
        this.setState({
            show:true
        })
    }

    changeComment = (e) => {
        this.setState({
            content: this.state.content.push(e.target.value)
        })
    }

    render() {    

        let comments = this.state.content.map((comment) =>{
            return <p>{comment}</p>
        })

        return(
            <div>
                    <p>{comments}</p>
                {/* {this.state.content[Math.floor(Math.random()*this.state.content.length)]}<br/> */}
                <button onClick={e=>{
                    this.showModal()
                }}
                > show Modal</button>
                <Modal show={this.state.show}/>
            </div>
        )
    }
}

export default Comment;