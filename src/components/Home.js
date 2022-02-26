import React from "react"
import LoginImage from "./LoginImage"
import Form from "./Form"
import Welcome from "./Welcome"

import "../styles/Home.css"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin: false
        }
    }
    handleCallBack = (childData) => {
        this.setState({
            showLogin: true
        })
    }
    render() {
        return (
            <div className="home-container">
                {(this.state.showLogin) ? <Welcome/> : <div class="columns">
                    <div class="column-1">
                        <LoginImage />
                    </div>
                    <div class="column-2">
                        <Form parentCallback={this.handleCallBack}/>
                    </div>
                </div>}
            </div>
        )

    }
}

export default Home