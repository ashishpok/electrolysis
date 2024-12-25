// Mock fetch if it's not available in the test environment
if (typeof fetch === 'undefined') {
  global.fetch = jest.fn();
} 