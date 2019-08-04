import React from 'react';
import './RestaurantsList.css';
import Place from '../Restaurant/Restaurant';

class PlacesList extends React.Component {

  render () {
    if (this.props.places!=='Request failed!' && this.props.places!=='No API key!') {
      return (
        <div className="BusinessList">
          {this.props.places.map( place => {
            return <Place key={place.id}
                          place={place} />
          })}
        </div>
      )
    } else {
      return <div className="rejection">{this.props.places}</div>
    }
    
  }
}

export default PlacesList;