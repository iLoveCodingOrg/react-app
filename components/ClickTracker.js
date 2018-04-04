import React from 'react'

export default class ClickTracker extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            clickCounter: 0
        }
    }

    handleClick(){
        var count =  this.state.clickCounter + 1;
        this.setState({
            clickCounter: count
        })
    }

    render(){
        // Object Destructuring
        var {buttonText, buttonColor, buttonBorder} = this.props

        // var buttonText = this.props.buttonText
        // var buttonColor = this.props.buttonColor
        // var buttonBorder = this.props.buttonBorder
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