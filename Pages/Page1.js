import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLoginUser} from '../actionsFolder/actions';

 class Page1  extends Component {
     constructor(){
         super()

         this.state = {

         }
     }
    render() {
        return (
            <div>
                <h5>Page 1</h5>
                {/* GRAB LOGINED USER DATA AND DISPLAY HERE */}
            </div>
        )
    }
}


Page1.propTypes = {
    getLoginUser: PropTypes.func.isRequired

}

const mapStateToProps =  state =>{
    return{
        user: state.register.user
    }
}

export default connect(mapStateToProps,{getLoginUser}) (Page1)
