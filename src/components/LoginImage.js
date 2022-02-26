import React from "react"
import { Typography  } from 'antd';

import login from "../assets/login.png"
import "../styles/LoginImage.css"

const { Text } = Typography;

class LoginImage extends React.Component {
    render() {
        return (
            <div className="login-image-container">
                <img
                    width={400}
                    src={login}
                />
                <div><Text underline>Create an account</Text></div>
            </div>
        )
    }
}

export default LoginImage