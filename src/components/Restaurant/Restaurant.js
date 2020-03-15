import React from 'react';
import styles from './Restaurant.module.css';

const Place = ( props ) => {
    return(
      <div className={styles.business}>
        <div className={styles.imageContainer}>
          <a href={props.place.url} target="_blanc">
            <img src={props.place.imageSrc} alt=''/>
          </a>
        </div>
        <div className={styles.placeAbout}>
          <div className={styles.rating}>
            {props.rating}
                {/* {showStars().map( (star, index) => {
                  return <i className={star} key={index}></i>
                })} */}
          </div>
          <a href={props.place.url} target="_blanc">
            <h2>{props.place.name}</h2>
          </a>
          <div className={styles.businessInformation}>
            <div className={styles.businessAddress}>
              <p>{props.place.address}</p> 
              <p>{props.place.city}</p>
            </div>
            <div className={styles.businessReviews}>
              <h3>{props.place.category}</h3>
              <h3>{props.place.reviewCount} reviews</h3>
            </div>
          </div>
        </div>
      </div>
    )   
}

const showStars = () => {
  const starsArray = [];

  const full = Math.floor(this.props.place.rating);
  const empty = 5 - Math.ceil(this.props.place.rating);
  const semi = 5 - full - empty;

  for (let i=0; i<full; i++) {
    starsArray.push("icon-star");
  }
  for (let i=0; i<semi; i++) {
    starsArray.push("icon-star-half-alt");
  }
  for (let i=0; i<empty; i++) {
    starsArray.push("icon-star-empty");
  }
  return starsArray;
}

export default Place;