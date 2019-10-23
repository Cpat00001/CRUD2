import React from 'react';
import '../style/register.css';
import { Row, Col, Icon,Button } from 'antd';
import Login2 from './Login2';
import Bottom from './Bottom';
import RegisterComponent from './RegisterComponent';

class Login1 extends React.Component {
    constructor(){
        super()

        this.state={
            signin: false
        }

        this.onClickSign = this.onClickSign.bind(this)
    }

    onClickSign(){
        this.setState(state=>({signin:!state.signin}))
        console.log('SIGNIN CLICKED')
    }
    render() {

        const signin = this.state.signin;
        let component;
        let button;
        let welcomeText;

        if(signin === false){
            component = <Login2 />
            button = <Button htmlType="Submit" style={{width:'100%'}} className='registerButton' onClick={this.onClickSign}>Sign in</Button>
            welcomeText = <h5 style={{float:'left', color:'grey'}}>If not registered,register.</h5>
        }else{
            component = <RegisterComponent />
            button = <Button htmlType="Submit" style={{width:'100%'}} className='loginButton2' onClick={this.onClickSign}>Login</Button>
            welcomeText = <h5 style={{float:'left', color:'grey'}}>If registered, just login.</h5>
        }

        return (        
    <div>
        <Row>
            <Col span={24} className='reg1'>
                <Row>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}></Col>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10} className='Register1Logo'>
                        <Row>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} style={{backgroundColor:'grey'}}><img className='Register1Logo2' src='http://blogs.bethel.k12.or.us/imaurer/files/2014/10/square.jpg'/></Col>                                
                            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                            <Row>
                                <Col span={24}><h5 className='Register1Text1'>HubSpace</h5></Col>
                                <Col span={24}><p className='Register1Text2'>your Space && Time</p></Col>
                            </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}></Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col span={24} style={{minHeight:'50px',backgroundColor:'black'}}>
                <Row>
                    <Col span={11}></Col>
                    <Col span={2}><Icon type="crown" style={{color:'white',fontSize:'40px',padding:'5px'}} /></Col>
                    <Col span={11}></Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                {component}
            </Col>
        </Row>
        <Row>
            <Col span={24}>
            <Row className='register2row1'>
                <Col xs={0} sm={0} md={12} lg={12} xl={12}></Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Row>
                        <Col span={24}></Col>
                        <Col span={24} className='register2row2'>
                            {/* wstaw podobne jak login form */}
                            <Row>
                                <Col span={20}>
                                    {/* <h5 style={{float:'left', color:'grey'}}>If not registered,register.</h5> */}
                                    {welcomeText}
                                </Col>
                                <Col span={20} className='RegisterForm'>
                                    {button}
                                    {/* <Button type='primary' htmlType="Submit" style={{width:'100%'}} className='registerButton' onClick={this.onClickSign}>Sign in</Button>     */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Col>
        </Row>
        <Row>
            <Bottom/>
        </Row>
    </div>
        )
    }
}
export default Login1
