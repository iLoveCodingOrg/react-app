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
        return (
            <button
                onClick={this.handleClick.bind(this)}
                >
                {this.props.buttonText}
                {this.state.clickCounter}
            </button>
        )
    }
}