import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class Landing extends React.Component{
  componentDidMount(){
    if(this.props.security.validToken){
      this.props.history.push("/dashboard")
    }
  }
  render () {
    return (
      <div className="landing">
           <div className="light-overlay landing-inner text-dark">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 text-center">
                           <h1 className="display-3 mb-4"> welcome to the portal</h1>
                           <p className="lead">
                               Create your account
                           </p>
                           <hr />
                           <Link to="/signUp" className="btn btn-lg btn-primary mr-2">
                               Sign Up
                           </Link>
                           <Link to="/login" className="btn btn-lg btn-secondary mr-2">
                               Login
                           </Link>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
  }
}
const mapStateToProps = state =>({
  security : state.security
})
Landing.propTypes = {
  security : PropTypes.object.isRequired
}
export default connect(
  mapStateToProps
) (Landing);
