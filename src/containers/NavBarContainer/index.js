import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import {
  showUserAuthModal,
} from '../../actions/UserAuthModal';


const mapDispatchToProps = dispatch => (
  {
    showModal: () => dispatch(showUserAuthModal("login")),
  }
);

const NavBarContainer = connect(
  null,
  mapDispatchToProps,
  null,
  {pure: false},
)(NavBar)

export default NavBarContainer;

