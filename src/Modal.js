import React, { Component } from 'react'


class Modal extends Component {

    state = {
      show: false
    }      

    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <div>
                We Did It!
                <form>
                    <input type="text" name="input">
                    </input>
                    <button onClick={this.changeComment}>Add Comment</button>
                </form>
            </div>
        )
    }
}

export default Modal;