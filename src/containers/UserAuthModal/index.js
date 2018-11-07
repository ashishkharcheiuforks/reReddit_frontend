import { connect } from 'react-redux';


import UserAuthModal from '../../components/UserAuthModal';
import { hideUserAuthModal } from '../../actions/UserAuthModal';


const mapStateToProps = state => (
  {
    show: state.userAuthModal.showModal
  }
);

const mapDispatchToProps = dispatch => (
  {
    onHide: () => dispatch(hideUserAuthModal()),
  }
)

const UserAuthModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserAuthModal);

export default UserAuthModalContainer;