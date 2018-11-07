import { connect } from 'react-redux';


import UserAuthModal from '../../components/UserAuthModal';
import { hideUserAuthModal } from '../../actions/UserAuthModal';
import { makeUserLoginRequest } from '../../actions/UserAuth';


const mapStateToProps = state => (
  {
    show: state.userAuthModal.showModal
  }
);

const mapDispatchToProps = dispatch => (
  {
    onHide: () => dispatch(hideUserAuthModal()),
    userLogin: () => dispatch(makeUserLoginRequest()),
  }
);

const UserAuthModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserAuthModal);

export default UserAuthModalContainer;