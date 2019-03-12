import React from 'react'
import PropTypes from 'prop-types'
import {login} from '../../actions/userActions'
import {connect} from 'react-redux';
import classnames from "classnames";


class Login extends React.Component{

  constructor (){
    super();
    this.state = {
      username : "",
      password : "",
      errors: {}
    };
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}
componentDidMount() {
  if (this.props.security.validToken) {
    this.props.history.push("/dashboard");
  }
}
componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
onChange(e){
this.setState({ [e.target.name] : e.target.value })
}
onSubmit(e){
  e.preventDefault();
  const loginRequest = {
    username : this.state.username,
    password : this.state.password
  }
  this.props.login(loginRequest);
}
  render () {
    const { errors } = this.state;
    const errorHandler = (errors)=>{
      if(errors.password) {
        return (
          <div className="invalid-feedback">{errors.password}</div>
        )}
        else if(errors.message){
          return (
            <div className="alert alert-info text-center" role="alert">
                  {errors.message}
                </div>
          )
        }
      }
    return (
      <div className="login">
              <div className="container">
                  <div className="row">
                      <div className="col-md-8 m-auto">
                          <h1 className="display-8 text-center">Log In</h1>
                          <form onSubmit={this.onSubmit}>
                              <div className="form-group">
                                  <input type="text" className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.username
                                        })}
                                  placeholder="Username"
                                  name="username"
                                  value = {this.state.username}
                                  onChange = {this.onChange}
                                  />
                                  {errors.username && (
                                    <div className="invalid-feedback">{errors.username}</div>
                                    )}
                              </div>
                              <div className="form-group">
                                  <input type="password" className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.password
                                            })}
                                  placeholder="Password"
                                  name="password"
                                  value = {this.state.password}
                                  onChange = {this.onChange}
                                   />
                                   {
                                      errorHandler(errors)}
                              </div>
                              <input type="submit" className="btn btn-info btn-block mt-4" />
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    )
  }
}
const mapStateToProps = state =>({
  errors : state.errors,
  security : state.security
})

Login.propTypes = {
  login : PropTypes.func.isRequired,
  errors : PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
}
export default connect(
  mapStateToProps,{login}
) (Login);
