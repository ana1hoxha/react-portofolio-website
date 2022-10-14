import React from 'react'  //newest versions of react dont need this at all
import ReactDom from 'react-dom'
import App from './App'
import './index.css'

//this is a jsx tag component
ReactDom.render(<App/>, document.querySelector("#root"))