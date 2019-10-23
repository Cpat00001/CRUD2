import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row,Col} from 'antd';
import '../style/register.css';

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
     }

    render() {
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
                                <Button type='primary' htmlType="Submit" style={{width:'100%'}} className='loginButton'>Login</Button>
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
export default LoginForm;




// nie dzialajacy z ANDT

// import React, { Component } from 'react';
// import { Form, Icon, Input, Button, Row,Column,Col} from 'antd';
// import '../style/register.css';

//  class LoginForm extends Component {
//      constructor(){
//          super()

//          this.state={
//              formLayout:'vertical',
//              username:'',
//              password:''
//          }

//          this.handleSubmit = this.handleSubmit.bind(this)
//      }

//      handleSubmit(event){
//          event.preventDefault();
//          this.props.form.validateFields((err, values) => {
//             if (!err) {
//               console.log('Received values of form: ', this.state);
//             }
//           });

//      }

//     render() {
//         const {formLayout} = this.state;
//         const { getFieldDecorator } = this.props.form;

//         return (
//             <div>
//                 <Row>
//                     <Col span={20} className='RegisterForm'>
//                         <Form layout={formLayout} onSubmit={this.handleSubmit}>
//                             <Form.Item label='Username' className='ant-form label'>
                                
//                             {getFieldDecorator('username', {
//                                 rules: [{ required: true, message: 'Please input your username!' }],
//                             })(

//                                 <Input type='user' placeholder='UserName' className='ant-input'></Input>
//                             )} 

//                             </Form.Item>


//                             <Form.Item label='Password'>

//                             {getFieldDecorator('password', {
//                                 rules: [{ required: true, message: 'Please input your Password!' }],
//                             })(

//                                 <Input type='password' placeholder='Password' className='ant-input'></Input>
                            
//                             )} 
//                             </Form.Item>
//                             <Form.Item>
//                                 <Button type='primary' htmlType="Submit" style={{width:'100%'}}>Login</Button>
//                             </Form.Item>
//                         </Form>
//                     </Col>
//                 </Row>
                
//             </div>
//         )
//     }
// }
// export default LoginForm;
