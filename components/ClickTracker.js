import React from 'react'

export default class ClickTracker extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            clickCounter: 0
        }
    }

    handleClick(){
        const count =  this.state.clickCounter + 1;
        this.setState({
            clickCounter: count
        })
    }

    render(){
        // Object Destructuring
        const { buttonText } = this.props

        return (
            <button
                onClick={this.handleClick.bind(this)}
                >
                {buttonText}
                {this.state.clickCounter}
            </button>
        )
    }
}