const apiKey = process.env.REACT_APP_API_KEY;

const Yelp = {
  search (term, location, sort, price, openNow=false) {
    console.log(term, location, sort, price, openNow);
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort}&price=${price}&open_now=${openNow}`
    return fetch(url, {headers: {Authorization: `Bearer ${apiKey}`} })
      .then ( response => {
        if (response.ok) {
          return response.json();
        } else if (!apiKey) {
          throw Error('No API key!');
        } else {
          throw Error('Request failed!');
        } })
      .then ((jsonResponse)=>{
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