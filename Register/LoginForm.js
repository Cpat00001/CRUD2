import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row,Col} from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../style/register.css';

//import actions
import {loginUser, getLoginUser} from '../actionsFolder/actions';


 class LoginForm extends Component {
     constructor(){
         super()

         this.state={
             formLayout:'vertical',
             username:'',
             password:'',
             registerButton:''
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
         this.handleClick = this.handleClick.bind(this)
     }

     componentDidMount(){

        //bring result if login credentials matches those in State
        this.props.getLoginUser()
        // const loggedUser = this.props.user;
        // console.log('loggedUser',loggedUser)
        //console.log(this.props.getLoginUser())

     }
     componentDidUpdate(prevProps,prevState,snapshot){
        this.props.getLoginUser();
        console.log(this.props)
        console.log(this.props.user)
     }

     handleClick(){
         console.log('CLICKED')
     }
     handleChange(event){
         const target = event.target;
         const value = target.value;
         const name = target.name;

         this.setState({ [name]:value })
     }

     handleSubmit(event){
         event.preventDefault();
         console.log(this.state)
         this.setState({
            username:'',
            password:'',
         }) 

         const loginuserdata = {
             username: this.state.username,
             password:this.state.password
         }
         console.log(loginuserdata)
         this.props.loginUser(loginuserdata)
         this.props.getLoginUser()
         
        //  const timer = setTimeout(function(){ this.props.getLoginUser()},1000) 
     }

    render() {

        const {users} = this.props;
        console.log(users)

        const {formLayout} = this.state;
        return (
            <div>
                <Row>
                    <Col span={20} className='RegisterForm'>
                        <Form layout={formLayout} onSubmit={this.handleSubmit}>
                            <Form.Item label='Username' className='ant-form label'>
                                <Input type='user' placeholder='UserName' name='username' value={this.state.username} className='ant-input' onChange={this.handleChange}></Input>
                            </Form.Item>


                            <Form.Item label='Password'>
                                <Input type='password' placeholder='Password' name='password' value={this.state.password} className='ant-input' onChange={this.handleChange}></Input>
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' type="Submit" style={{width:'100%'}} className='loginButton'>Login</Button>
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

LoginForm.propTypes = {
loginUser: PropTypes.func.isRequired,
getLoginUser: PropTypes.func.isRequired,

}
const mapStateToProps = state =>{
    return{
        users: state.register.users,
        user: state.register.user,
        login:state.register.login
    }
}
export default connect(null,{loginUser,getLoginUser})(LoginForm);


