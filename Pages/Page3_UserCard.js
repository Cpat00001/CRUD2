import React, { Component } from 'react';
import '../style/Page1.css';
import { Row, Col, Icon } from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {deleteUsercrud,getUserToEdit} from '../actionsFolder/actions';

 class Page3_UserCard extends Component {
     constructor(props){
         super(props)
         this.state = {}

         this.deleteUser = this.deleteUser.bind(this)
         this.getUserToEdit = this.getUserToEdit.bind(this)
     }

     deleteUser(id){
         //const id : this.props.user.id
         console.log('DELETE USER CLICKED', id)
         this.props.deleteUsercrud(id)
     }
     getUserToEdit(user){
         this.props.getUserToEdit(user)
         console.log('EDIT USER CLICKED', user)
     }
     

    render() {
        const user = this.props.user;
        const id = this.props.user.id
        return (
            <Row>
                <Col span={24}>
                    <div>
                        <Row>
                            <Col className='div1P3UserCard'>
                                <Row>
                                    <Col span={2}></Col>
                                    <Col span={4}><p>Username:</p></Col>
                                    <Col span={18}></Col>
                                </Row>
                                <Row>
                                    <Col span={16}><p><b>{this.props.user.username}</b></p></Col>
                                    <Col span={2}><Link to={`/Pages/Page3_EditUser/${id}`}><Icon type="edit" className='iconP3UserCard1' onClick={(e) => this.getUserToEdit(user,e)}/></Link></Col>
                                    <Col span={2}></Col>
                                    <Col span={2}><Icon type="close" className='iconP3UserCard2' onClick={(e) => this.deleteUser(id,e) }/></Col>
                                    <Col span={2}></Col>
                                </Row>
                                <Row>
                                    <Col span={16}><p>{this.props.user.lastname}</p></Col>
                                    <Col span={6}></Col>
                                    <Col span={2}></Col>
                                </Row>
                                <Row>
                                    <Col span={16}><p>{this.props.user.email}</p></Col>
                                    <Col span={6}></Col>
                                    <Col span={2}></Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }
}
Page3_UserCard.propTypes = {
    deleteUsercrud: PropTypes.func.isRequired,
    editUserCrud: PropTypes.func.isRequired

}

const mapStateToProps = state =>{}
export default connect(null,{deleteUsercrud,getUserToEdit}) (Page3_UserCard);
