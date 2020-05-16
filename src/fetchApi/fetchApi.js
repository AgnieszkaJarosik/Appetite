const Yelp = {
  search (term, location, sort, price, openNow=false) {
    const url = `/yelp?term=${term}&location=${location}&sort_by=${sort}&price=${price}&open_now=${openNow}`;

      return fetch(url)
      .then ( response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error('Request failed!');
        } })
      .then ( jsonResponse => {
        if(jsonResponse.businesses) {
          return jsonResponse.businesses.map((place)=>{
            return {
              id: place.id,
              imageSrc: place.image_url,
              name: place.name,
              address: place.location.display_address[0],
              city: place.location.city,
              state: place.location.state,
              zipCode: place.location.zip_code,
              category: place.categories[0].title,
              rating: place.rating,
              reviewCount: place.review_count,
              url: place.url
            }     
          })
        }
      })
      .catch( e => {
        console.log(e);
        return [];
      })
    }
}
    
export default Yelp;