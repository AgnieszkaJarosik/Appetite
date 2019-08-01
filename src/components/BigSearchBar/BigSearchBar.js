import React from 'react';
import './BigSearchBar.css';

class BigSearchBar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {term: '',
                  location: ''}

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

 render() {
    return (
      <div className="BigSearchBar">
        <div className="BigSearchBar-fields">
          <input placeholder="Name of the restaurant, cusine" 
                  onChange={this.handleTermChange} />
          <input placeholder="Where?" 
                  onChange={this.handleLocationChange}
                  onKeyDown={this.handleKeyDown} />
        </div>
        <div className="BigSearchBar-submit"
            onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    )
  }

  handleTermChange (event) {
    this.setState({term: event.target.value});
  }
  
  handleLocationChange (event) {
    this.setState({location: event.target.value});
  }
  
  handleSearch (event) {
    let term = this.state.term;
    let location = this.state.location;
    this.props.searchYelp(this.state.term, this.state.location);
    this.props.onSubmit();
    event.preventDefault();
  }
  
  handleKeyDown (event) {
    if (event.key==="Enter"){
      this.handleSearch (event);
    }
  }
}


export default BigSearchBar;