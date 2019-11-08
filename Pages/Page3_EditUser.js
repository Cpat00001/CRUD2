import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {pullUserFromEdit,updateUserAfterEdit} from '../actionsFolder/actions';

class Page3_EditUser extends Component {
    constructor(props){
        super(props)

        this.handleSubmitToUpdateuser = this.handleSubmitToUpdateuser.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            name:this.props.user[0].username || '',
            firstname:this.props.user[0].firstname,
            email:this.props.user[0].email
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.pullUserFromEdit(id)
    }
    

    handleSubmitToUpdateuser(event){
        event.preventDefault();
        const ovewriteuserdata = {
            username: this.state.name,
            firstname: this.state.firstname,
            email: this.state.email
        }
        this.props.updateUserAfterEdit(ovewriteuserdata)
        console.log(ovewriteuserdata)
        
        
    }
    handleChange(event){
       
        const target = event.target;
        const value = target.value;
        const name = target.name

        this.setState({
            [name]: value
          });
    }

    render() {

        const user = this.props.user[0];
        console.log(user)
        //const {email,username,firstname} = this.props.user[0];

        return (
            <Row>
            <Col span={24}>
                <div>
                    <Row>
                        <Col span={8}></Col>
                        <form onSubmit={this.handleSubmitToUpdateuser}>
                            <Row>
                                <Col span={24}><label>Username:</label> </Col>
                            </Row>
                            <Row>
                                <Col span={24}><input type="text" value={this.state.name} onChange={this.handleChange} name="name" /></Col>
                            </Row>
                            <Row>
                                <Col span={24}><label>FirstName:</label></Col>
                            </Row>
                            <Row>
                                <Col span={24}><input type="text" value={this.state.firstname} onChange={this.handleChange} name="firstname"/></Col>
                            </Row>
                            <Row>
                                <Col span={24}><label>Email:</label></Col>
                            </Row>
                            <Row>
                                <Col span={24}><input type="text" value={this.state.email} onChange={this.handleChange} name="email"/></Col>
                            </Row>
                            <input type="submit" value="Submit" />
                        </form>
                        <Col span={8}></Col>
                    </Row>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}></Col>
                        <Col span={8}><Link to="/Pages/Page3">Go to List of Users</Link></Col>
                    </Row>
                </div>
            </Col>
        </Row>
        )
    }
}
Page3_EditUser.propTypes = {
    user: PropTypes.array.isRequired,
    getUserToEdit:PropTypes.func.isRequired,
    updateUserAfterEdit: PropTypes.func.isRequired
}


const mapStateToProps =  state =>{
    return{
        user: state.register.user 
    }
}
export default connect(mapStateToProps,{pullUserFromEdit,updateUserAfterEdit}) (Page3_EditUser);

