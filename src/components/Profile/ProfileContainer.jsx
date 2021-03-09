import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile} from '../../redux/profile-reducer'



class ProfileContainer extends React.Component {

    componentDidMount(){
        
        this.props.getProfile(this.props.match.params.userId);
      
 }

    render () {
        
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile}) (WithUrlDataContainerComponent);