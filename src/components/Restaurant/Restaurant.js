import React from 'react';
import './Restaurant.css';

class Place extends React.Component {
  showStars () {
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

  render() {
    return(
      <div className="Business">
        <div className="image-container">
          <a href={this.props.place.url} target="_blanc">
            <img src={this.props.place.imageSrc} alt=''/>
          </a>
        </div>
        <div className="Place-about">
          <h3 className="rating">
                {this.showStars().map( (star, index) => {
                  return <i className={star} key={index}></i>
                })}
          </h3>
          <a href={this.props.place.url} target="_blanc">
            <h2>{this.props.place.name}</h2>
          </a>
          <div className="Business-information">
            <div className="Business-address">
              <p>{this.props.place.address}</p> 
              <p>{this.props.place.city}</p>
            </div>
            <div className="Business-reviews">
              <h3>{this.props.place.category}</h3>
              <h3>{this.props.place.reviewCount} reviews</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }  


  newMethod() {
    console.log(this.full, this.semi, this.empty);
  }
}

export default Place;