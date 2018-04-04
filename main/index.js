import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import './index.css'
import ClickTracker from '../components/ClickTracker'

function App (){
    return (
        <div className="bordered">
            <ClickTracker buttonText="Click it" /> 
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)