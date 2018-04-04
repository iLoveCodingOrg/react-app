import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import './index.css'

function App (){
    return (
        <div className="bordered">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)