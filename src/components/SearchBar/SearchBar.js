import React from 'react';
import './SearchBar.css';
import SuggestionExample from '../Autocomplete/Autocomplete';


const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
    'Distance': 'distance'
};

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {term: '',
                    location: '',
                    sortBy: 'best_match'}

      this.handleSortByChange = this.handleSortByChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleAutosuggestChange = this.handleAutosuggestChange.bind(this);
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li 
                  className={this.getSortByClass(sortByOptionValue)} 
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                  >{sortByOption} 
                  </li>
        });
      }

    render() {
      return (
        <div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()}
            </ul>
          </div>
          <div className="SearchBar-fields" >
            <div className="Suggestions">
             <SuggestionExample 
                onChange={this.handleAutosuggestChange}/>
            </div>
              
            <input 
              placeholder="Where?" 
              onChange={this.handleLocationChange}
              onKeyDown={this.handleKeyDown}
              />
         </div>
         
         <div className="SearchBar-submit"
              onClick={this.handleSearch}
              >
           <a>Let's Go</a>
         </div>
        </div>
      )
    }

    getSortByClass (sortByOption) {
      if (this.state.sortBy==sortByOption) {
        return 'active';
      } else {
        return '';
      }
    }

    handleSortByChange (sortByOption, event) {
      this.setState({sortBy: sortByOption}, function (){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)}
      );
      event.preventDefault();
    }

    handleAutosuggestChange(value){
      this.setState({term: value})
    }

    handleLocationChange (event) {
      this.setState({location: event.target.value});
    }

    handleSearch (event) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      event.preventDefault();
    }

    handleKeyDown (event) {
      if (event.key==="Enter"){
        this.handleSearch (event);
      }
    }
}

export default SearchBar;