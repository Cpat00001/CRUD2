import React, { Component } from 'react';
import '../style/register.css';
import LoginForm from './LoginForm';
import { Row, Col, Icon, Button } from 'antd';

 class Login2 extends Component {
    render() {
        return (
            <div>
                <Row className='register2row1'>
                    <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                        <h5>Welcome to /customer name/</h5>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Row>
                            <Col span={24}><h5 style={{float:'left',marginLeft:'10px'}}>Investor Login</h5></Col>
                            <Col span={24} className='register2row2'>
                                <LoginForm/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Login2
