import React from 'react';
import './SearchBar.css';
import '../../fontello/css/fontello.css';

class SearchBar extends React.Component {
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
      <div className="SearchBar">
        <div className="SmallSearchBar">
          <div className="SearchBar-fields">
            <input placeholder="Search Restaurants"
                    onChange={this.handleTermChange} />
            <input placeholder="Where?"
                  onChange={this.handleLocationChange}
                  onKeyDown={this.handleKeyDown} />
          </div>
          <div className="SearchBar-submit" 
                onClick={this.handleSearch}>
            <a><i className="icon-search-1"></i></a>
          </div>
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
    event.preventDefault();
  }
  
  handleKeyDown (event) {
    if (event.key==="Enter"){
      this.handleSearch (event);
    }
  }
}

export default SearchBar;