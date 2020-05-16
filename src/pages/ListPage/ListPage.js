import React, { useState, useEffect } from "react";
import SearchOptions from "./SearchOptions";
import Place from "components/Restaurant/Restaurant";
import Yelp from "fetchApi/fetchApi";

import "fontello/css/fontello.css";
import styles from "./ListPage.module.css";

const ListPage = ( props ) => {
  const [places, setPlaces] = useState([]);
  console.log(places);

  const term = props.location.state.term || 'restauracja';
  const location = props.location.state.location || 'Warszawa';

  useEffect(() => {
    handleSearch ({term, location, sortBy:'best_match', price: '1', openNow: false});
  }, []);

  async function handleSearch ({ term, location, sortBy, price, openNow }) {
    try {
      const placesList = await Yelp.search(term, location, sortBy, price, openNow);
      setPlaces(placesList);
    } catch (err) {
      setPlaces([]);
    }
  }

  return (
    <div className={styles.Container}>
      <SearchOptions onSubmit={handleSearch}
                     ter={term}
                     loc={location} />
      <div className={styles.list}>
        { places ? places.map( place => <Place key={place.id} place={place} />)
                 : <div className={styles.rejection}></div> }
      </div>
    </div>
  );
};

export default ListPage;
