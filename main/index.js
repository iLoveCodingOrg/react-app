import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content, { Content2, Content3 } from '../components/Content'
import './index.css'
import ClickTracker from '../components/ClickTracker'

function App (){
    return (
        <div className="bordered">
            <ClickTracker buttonText="Click it" /> 
            <Header />
            <Content2 />
            <Content3 />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)