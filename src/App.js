import React, { Fragment } from "react"
import { Router, Route, Switch } from "react-router-dom"
import logo from "./logo.svg"
import MainPage from "./routes/MainPage"
import "./App.css"

function App() {
    return (
        <Fragment>
            <Route path='/' exact render={props => <MainPage {...props} />} />
        </Fragment>
    )
}

export default App
