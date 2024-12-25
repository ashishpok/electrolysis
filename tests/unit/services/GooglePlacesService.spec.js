import GooglePlacesService from '@/services/GooglePlacesService'

describe('GooglePlacesService', () => {
  beforeEach(() => {
    // Mock window and document
    global.document = {
      createElement: jest.fn().mockReturnValue({}),
      head: {
        appendChild: jest.fn()
      }
    };

    // Mock window.google.maps.places
    global.google = {
      maps: {
        places: {
          PlacesService: jest.fn().mockImplementation(() => ({
            getDetails: jest.fn().mockImplementation((request, callback) => {
              callback(
                {
                  reviews: [
                    {
                      author_name: "John Doe",
                      rating: 5,
                      text: "Great electrolysis service!",
                      time: 1678901234,
                      profile_photo_url: "https://example.com/photo.jpg"
                    },
                    {
                      author_name: "Jane Smith",
                      rating: 4,
                      text: "Very professional and clean environment",
                      time: 1678901000,
                      profile_photo_url: "https://example.com/photo2.jpg"
                    }
                  ]
                },
                'OK'
              );
            })
          }))
        }
      }
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('successfully fetches reviews', async () => {
    const reviews = await GooglePlacesService.getBusinessReviews();
    
    expect(Array.isArray(reviews)).toBe(true);
    expect(reviews.length).toBe(2);
    
    const firstReview = reviews[0];
    expect(firstReview).toEqual({
      author_name: "John Doe",
      rating: 5,
      text: "Great electrolysis service!",
      time: expect.any(String),
      profile_photo_url: "https://example.com/photo.jpg"
    });
  });

  it('handles API error gracefully', async () => {
    // Override mock to simulate error
    global.google.maps.places.PlacesService = jest.fn().mockImplementation(() => ({
      getDetails: jest.fn().mockImplementation((request, callback) => {
        callback(null, 'ERROR');
      })
    }));

    const reviews = await GooglePlacesService.getBusinessReviews();
    expect(reviews).toEqual([]);
  });

  it('handles empty reviews gracefully', async () => {
    // Override mock to return empty reviews
    global.google.maps.places.PlacesService = jest.fn().mockImplementation(() => ({
      getDetails: jest.fn().mockImplementation((request, callback) => {
        callback({ reviews: [] }, 'OK');
      })
    }));

    const reviews = await GooglePlacesService.getBusinessReviews();
    expect(reviews).toEqual([]);
  });

  it('limits reviews to maximum of 5', async () => {
    // Override mock with more than 5 reviews
    global.google.maps.places.PlacesService = jest.fn().mockImplementation(() => ({
      getDetails: jest.fn().mockImplementation((request, callback) => {
        const manyReviews = Array(8).fill({
          author_name: "Test User",
          rating: 5,
          text: "Test review",
          time: 1678901234,
          profile_photo_url: "https://example.com/photo.jpg"
        });
        callback({ reviews: manyReviews }, 'OK');
      })
    }));

    const reviews = await GooglePlacesService.getBusinessReviews();
    expect(reviews.length).toBe(5);
  });
}); 