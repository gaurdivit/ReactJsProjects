import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID otXjDRYLdgvEG8CNyKkjc-S135lMVU4ZKn2wBQ0dyjc'
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;