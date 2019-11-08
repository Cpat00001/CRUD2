import React, { Component } from 'react';
import {connect}  from 'react-redux';
import PropTypes from 'prop-types';
import {getAllUsers} from '../actionsFolder/actions';
import { Row, Col } from 'antd';

import Page3_UserCard from './Page3_UserCard';

import {Link} from 'react-router-dom'


class Page3 extends Component {
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        this.props.getAllUsers()
    }


    render() {
        const {users} = this.props
        console.log(users)
        return (
            <div>
                <Row>
                    <Col span={24} style={{'height':'200px'}}>Page_3</Col>
                </Row>
                    <Row style={{'minHeight':'700px'}}>
                        <Col span={2}></Col>
                        <Col span={6}>
                            {/* inserted subComponent Page3_UserCard */}
                            {users.map((user)=> {return <Page3_UserCard user={user} key={user.id}/>})}
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}></Col>
                    </Row>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}></Col>
                        <Col span={8}><Link to='/'>Go to Register</Link></Col>
                    </Row>       
            </div>
        )
    }
}
Page3.propTypes = {
    users : PropTypes.array.isRequired,
    getAllUsers: PropTypes.func.isRequired
}

const mapStateToProps = state =>{
    return{
        users: state.register.users 
    }
}   

export default connect(mapStateToProps,{getAllUsers}) (Page3) 
