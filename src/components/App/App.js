import React from 'react';
import PlacesList from '../RestaurantsList/RestaurantsList';
import BigSearchBar from '../BigSearchBar/BigSearchBar';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../fetchApi/fetchApi';

import './App.css';
import '../../fontello/css/fontello.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { places:[],
                   active: 'first' };

    this.searchYelp = this.searchYelp.bind(this);
    this.handleVievChange = this.handleVievChange.bind(this);
  }

  searchYelp(term, location) {
    Yelp.search(term,location)
    .then((places)=>{
      this.setState({places:places})
    })
  }

  handleVievChange () {
    let newActive = this.state.active === 'first' ? 'second' : 'first';
    this.setState( {active: newActive} );
  }

  render () {
    return (
      <div className="App">
        <h1>appetite</h1>
        {this.state.active === 'first' ? (
            <BigSearchBar onSubmit={this.handleVievChange}
                          searchYelp={this.searchYelp} />
          ) : this.state.active === 'second' ? (
            <div>
              <SearchBar searchYelp={this.searchYelp} />
              <PlacesList places={this.state.places} />
              <div className="arrow">
                <i className="icon-left-outline"
                  onClick={this.handleVievChange}></i></div>
            </div>
          ) : null}
      </div>
    );
  }
  
}

export default App;