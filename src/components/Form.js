import React from "react"
import { Form, Input, Button, Checkbox, Typography, Alert } from "antd"
import { UserOutlined, LockFilled } from '@ant-design/icons';
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import google from "../assets/google.png"

import "../styles/Form.css"

const { Title, Text } = Typography;

class FormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            password: "",
            incorrectCred: false,
            visibleAlert: false
        }
    }
    onFinish = (values) => {
        console.log('Success:', values);
        if (values.username === "Spoorthi" && values.password === "12345" && values.remember) {
            console.log("props", this.props)
            this.props.parentCallback(true)
        
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="form-container">
                <div><Title>Log In</Title></div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}

                    >
                        <Input placeholder="Your Name" prefix={<UserOutlined className="site-form-item-icon" />} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}

                    >
                        <Input.Password placeholder="Password" prefix={<LockFilled className="site-form-item-icon" />} />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <div className="form-or-login">
                    <Text>Or login with</Text>
                    <img src={facebook} style={{ width: '25px', margin: '1%' }} />
                    <img src={twitter} style={{ width: '25px', margin: '1%' }} />
                    <img src={google} style={{ width: '29px' }} />
                </div>
            </div>
        )
    }
}

export default FormComponent