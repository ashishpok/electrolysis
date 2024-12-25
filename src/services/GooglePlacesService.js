import googleConfig from '@/data/google-api.json'

const { API_KEY, PLACE_ID } = googleConfig;

export default {
  async initGooglePlaces() {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps && window.google.maps.places) {
        resolve(window.google.maps.places);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        if (window.google && window.google.maps && window.google.maps.places) {
          resolve(window.google.maps.places);
        } else {
          reject(new Error('Google Places failed to load'));
        }
      };
      
      script.onerror = () => {
        reject(new Error('Failed to load Google Places API'));
      };

      document.head.appendChild(script);
    });
  },

  async getBusinessReviews() {
    try {
      const places = await this.initGooglePlaces();
      
      return new Promise((resolve) => {
        const service = new places.PlacesService(document.createElement('div'));
        
        service.getDetails({
          placeId: PLACE_ID,
          fields: ['reviews']
        }, (result, status) => {
          if (status === 'OK' && result && result.reviews) {
            const reviews = result.reviews;
            if (reviews.length > 0) {
              console.log('Total reviews:', reviews.length);
            }
            const formattedReviews = reviews.slice(0, 5).map(review => ({
              author_name: review.author_name,
              rating: review.rating,
              text: review.text,
              time: new Date(review.time * 1000).toLocaleDateString(),
              profile_photo_url: review.profile_photo_url
            }));
            resolve(formattedReviews);
          } else {
            console.error('Places API Error:', status);
            resolve([]);
          }
        });
      });

    } catch (error) {
      console.error('Error in getBusinessReviews:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
      return [];
    }
  }
} 