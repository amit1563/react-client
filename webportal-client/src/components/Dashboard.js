import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
class Dashboard extends React.Component {

componentDidMount(){

}
  render(){

    return(
            <div className="projects">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4 text-center">Overview of the componenet you want to load --Need to implement</h1>
                <br />
                   options
                <br />
                <br />
                <br />
                {

                }

                <hr />
            </div>
        </div>
    </div>
</div>
);
    }
}
const mapStateToProps = state =>({
          });
  Dashboard.propTypes = {

  }

export default connect(
         mapStateToProps,
             )(Dashboard);
