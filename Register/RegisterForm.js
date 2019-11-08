import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Form, Icon, Input, Button, Row,Column,Col} from 'antd';
import '../style/register.css';

import {Link} from 'react-router-dom';

// import actions
import {registerUser} from '../actionsFolder/actions';


 class RegisterForm extends Component {
     constructor(){
         super()
         this.state = {
            formLayout:'vertical',
            firstname:'',
            lastname:'',
            email:'',
            username:'',
            password:'',
            password2:''

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

         const newUser = {
            id:uuid(),
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
         }

         this.props.registerUser(newUser)

         this.setState({
            firstname:'',
            lastname:'',
            username:'',
            email:'',
            password:'',
            password2:''

         })
     }
    render() {
        const {formLayout} = this.state;
        return (
                <div>
                <Row>
                    <Col span={20} className='RegisterForm'>
                        <Form layout={formLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label='First name' className='ant-form label'>
                                <Input type='firstname' placeholder='First name' name='firstname'className='ant-input' value={this.state.firstname} onChange={this.handleChange}></Input>
                            </Form.Item>
                            <Form.Item label='Last name'>
                                <Input type='lastname' placeholder='lastname' name='lastname' className='ant-input' value={this.state.lastname}  onChange={this.handleChange}></Input>
                            </Form.Item >
                            <Form.Item label='email'> 
                            <Input type='email' placeholder='email' name='email' className='ant-input' value={this.state.email} onChange={this.handleChange} ></Input>
                            </Form.Item>
                            <Form.Item label='Username'>
                                <Input type='username' placeholder='Username' name='username' className='ant-input' value={this.state.username} onChange={this.handleChange}></Input>
                            </Form.Item>
                            <Form.Item label='Password'>
                                <Input type='password' placeholder='Password' name='password' className='ant-input' value={this.state.password} onChange={this.handleChange}></Input>
                            </Form.Item>
                            <Form.Item label='Confirm Password'>
                                <Input type='password' placeholder='Confirm password...' name='password2' className='ant-input' value={this.state.password2} onChange={this.handleChange}></Input>
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' htmlType="Submit" style={{width:'100%'}} className='loginButton'>Register</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={20}>
                        <Link to='/Pages/Page3'>Page3</Link>
                    {/* <Button className='registerButton' onClick={this.handleClick}><h5>Sign in</h5></Button> */}
                    </Col>
                </Row>
                
            </div>
        )
    }
}

RegisterForm.propTypes = {
    registerUser: PropTypes.func.isRequired
    
}
const mapStateToProps = state =>({
    //no need to bring data from redux state
})


export default connect(null,{registerUser}) (RegisterForm);
