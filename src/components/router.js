import React, { Component } from "react"
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import Submission from "./submission/submission"

export default class RouterComponent extends Component{

    
    render() {
      
  
        return (
  
          <Router>
          <Route exact path="/submission" component={Submission} />
          </Router>
        )}
  
    
}