import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Nav from '../../components/Nav/Nav';
import { Link } from 'react-router-dom';
// import DetailList from './DetailList'

  

const mapStateToProps = state => ({
  user: state.user,
  locations: state.locations
});

class Detail extends Component {
  state={
    location: this.props.location,
    name:this.props.location.name,
    id:this.props.location.id
  }
  getLocationDetails = (location) => {
    // console.log('clicked button', this.state.location);
      this.props.dispatch({ 
        type: 'GET_DETAILS',
        payload: this.state.location
      })
    }
  
//linking home to DetailList page, displaying name/distance of Dom
 //Link in name of each item
  render() {
    // console.log('result',this.props.state.getDetailReducer)
  // console.log(this.state.location.id)
    
    let content = null;
    if (this.props.user.userName) {
      content = (
        <div>
            <strong><h2><Link to='/DetailList'><button value={this.state.location}
             onClick={() => this.getLocationDetails(this.state.location)}>
             {this.props.location.name}</button></Link></h2></strong>
             <h4>{this.props.location.type}</h4>
            <h4>Miles: {Math.floor((this.props.location.distance) * 100)/100}</h4>
        </div>
      ); 
    }

    return (
      <div>
        {/* <Nav /> */}
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Detail);
