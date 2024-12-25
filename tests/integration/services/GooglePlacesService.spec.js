import googleConfig from '@/data/google-api.json'
import fetch from 'node-fetch'

describe('GooglePlacesService Integration', () => {
  it('verifies Google Places API is accessible and returns reviews', async () => {
    console.log('Starting integration test with Place ID:', googleConfig.PLACE_ID);
    
    try {
      // Make direct API call
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${googleConfig.PLACE_ID}&fields=reviews&key=${googleConfig.API_KEY}`
      );
      
      const data = await response.json();
      console.log('Direct API call response status:', data.status);
      console.log('Number of reviews:', data.result.reviews.length);

      // Verify API response structure
      expect(data.status).toBe('OK');
      expect(data.result).toBeDefined();
      expect(Array.isArray(data.result.reviews)).toBe(true);
      expect(data.result.reviews.length).toBeGreaterThan(0);
      
      // Verify first review structure
      const firstReview = data.result.reviews[0];
      console.log('First review:', JSON.stringify(firstReview, null, 2));

      expect(firstReview).toMatchObject({
        author_name: expect.any(String),
        rating: expect.any(Number),
        text: expect.any(String),
        time: expect.any(Number),
        profile_photo_url: expect.any(String)
      });
      
      console.log('Integration test completed successfully');
      
    } catch (error) {
      console.error('Integration test failed:', error);
      throw error;
    }
  }, 10000);
});