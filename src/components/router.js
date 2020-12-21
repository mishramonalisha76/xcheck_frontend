import React from "react"
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import Submission from "./submission/submission"
import NewsContent from "./newsContent/newsContent"
import Transaction from "./transaction/transaction"
export default function RouterComponent (){

    

      
  
        return (
  
          <Router>
            <Route exact path='/newscontent/:transactionId' render={(props) => {
                    return ( <NewsContent {...props } /> )
                }} />
          <Route exact path="/news/transaction" component={Transaction} />
          <Route exact path='/:newsChannelName' render={(props) => {
                    return ( <Submission {...props } /> )
                }} />
          
      
          </Router>
        )
      
      }
  
    
