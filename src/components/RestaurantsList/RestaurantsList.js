import React from 'react';
import './RestaurantsList.css';
import Place from '../Restaurant/Restaurant';

class PlacesList extends React.Component {

  render () {
    if (this.props.places) {
      return (
        <div className="BusinessList">
          {this.props.places.map( place => {
            return <Place key={place.id}
                          place={place} />
          })}
        </div>
      )
    } else {
      return <div className="rejection">Not found</div>
    }
    
  }
}

export default PlacesList;