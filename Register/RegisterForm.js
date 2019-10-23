import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row,Column,Col} from 'antd';
import '../style/register.css';


 class RegisterForm extends Component {
     constructor(){
         super()
         this.state = {
            formLayout:'vertical',
            username:'',
            password:'',
            password2:'',

         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this)
     }

     handleChange(event){
         const target = event.target;
         const value = target.value;
         const name = target.name;

         this.setState({ [name]: value})
     }
     handleSubmit(event){
         event.preventDefault()
         console.log(this.state)

     }
    render() {
        const {formLayout} = this.state;
        return (
                <div>
                <Row>
                    <Col span={20} className='RegisterForm'>
                        <Form layout={formLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label='First name' className='ant-form label'>
                                <Input type='firstname' placeholder='First name' name='firstname'className='ant-input' onChange={this.handleChange}></Input>
                            </Form.Item>
                            <Form.Item label='Last name'>
                                <Input type='lastname' placeholder='lastname' name='lastname' className='ant-input' onChange={this.handleChange}></Input>
                            </Form.Item >
                            <Form.Item label='email'> 
                            <Input type='email' placeholder='email' name='lastname' className='ant-input' onChange={this.handleChange} ></Input>
                            </Form.Item>
                            <Form.Item label='Username'>
                                <Input type='username' placeholder='Username' name='username' className='ant-input' onChange={this.handleChange}></Input>
                            </Form.Item>
                            <Form.Item label='Password'>
                                <Input type='password' placeholder='Password' name='password' className='ant-input' onChange={this.handleChange}></Input>
                            </Form.Item>
                            <Form.Item label='Confirm Password'>
                                <Input type='password' placeholder='Confirm password...' name='password2' className='ant-input' onChange={this.handleChange}></Input>
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' htmlType="Submit" style={{width:'100%'}} className='loginButton'>Register</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={20}>
                    {/* <Button className='registerButton' onClick={this.handleClick}><h5>Sign in</h5></Button> */}
                    </Col>
                </Row>
                
            </div>
        )
    }
}
export default RegisterForm;
