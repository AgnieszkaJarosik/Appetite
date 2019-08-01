const apiKey = process.env.REACT_APP_API_KEY;

const Yelp = {
  search (term, location) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`
    return fetch(url, {headers: {Authorization: `Bearer ${apiKey}`} 
            }).then ( response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Request failed!');
              }, networkError => {
                console.log(networkError.message);   
              }).then ((jsonResponse)=>{
              if(jsonResponse.businesses) {
                 return jsonResponse.businesses.map((business)=>{
                  return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.display_address[0],
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    url: business.url
                  };
                      
                })
              }
            })
  }
}
    
export default Yelp;