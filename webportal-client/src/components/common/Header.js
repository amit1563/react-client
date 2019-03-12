import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/userActions";
class Header extends React.Component {
  logout(){
      this.props.logout()
      window.location.href = "/";
    }
render(){
  const { validToken, user } = this.props.security;
  const userIsAuthenticated = (
      <div >
            <Link className="Header-goto-dashboard-string" to="/dashboard">
              <p>Dashboard</p>
            </Link>

            <Link className="Header-user-name" to="/dashboard">
              Hello {user.fullName}
            </Link>

            <Link
              className="Header-logout-string"
              to="/logout"
              onClick={this.logout.bind(this)}
            >
              Logout
            </Link>
      </div>
    );
     const userIsNotAuthenticated = (
      <div>
        <ul className="Header-signup-string">
            <Link className="Header-signup-string" to="/signUp">
              Sign Up
            </Link>
            <Link className="Header-login-string" to="/login">
              Login
            </Link>
        </ul>
      </div>
    );
     let headerLinks;
     if (validToken && user) {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }
    return (
      <nav className="Header">

         <div className="container">

             <Link className="Header-string" to="/">
                portal tool
             </Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                 <span className="navbar-toggler-icon" />
             </button>
           {headerLinks}
         </div>
     </nav>
    );
}
}
const mapStateToProps = state =>({
              security : state.security
})
Header.propTypes = {
   security : PropTypes.object.isRequired
}
export default connect(
  mapStateToProps,{logout}
) (Header);
