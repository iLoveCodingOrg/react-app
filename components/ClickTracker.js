import React from 'react'

export default class ClickTracker extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            clickCounter: 0
        }
    }

    handleClick(){
        const count = this.state.clickCounter + 1;
        this.setState({
            clickCounter: count
        })
    }

    render(){
        // Object Destructuring
        const { buttonText } = this.props
        const fullText = `${buttonText} ${this.state.clickCounter}`
        return (
            <button
                onClick={this.handleClick.bind(this)}
                >
                {fullText}
            </button>
        )
    }
}