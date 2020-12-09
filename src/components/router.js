import React from "react"
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import Submission from "./submission/submission"
import NewsContent from "./newsContent/newsContent"
export default function RouterComponent (){

    

      
  
        return (
  
          <Router>
            <Route path='/newscontent/:transactionId' render={(props) => {
                    return ( <NewsContent {...props } /> )
                }} />
          {/* <Route exact path="/submission" component={Submission} /> */}
          <Route path='/:newsChannelName' render={(props) => {
                    return ( <Submission {...props } /> )
                }} />
          
      
          </Router>
        )
      
      }
  
    
