import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    
    this.props.fetchWeather(this.state.term);
    // clearing the search input 
    this.setState({ term: ''});
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input 
          className="form-control m-b-3"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Get a five-day forcast in your favorit US cities"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary m-b-3">Search</button>
        </span>
      </form>      
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
