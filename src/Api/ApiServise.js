import axios from 'axios';
import { toast } from 'react-toastify';

async function fetchGallery({ searchQuery, currentPage }) {
  const axiosOptions = {
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      key: '35072085-a0b1b3afc3e4ed85b172a35ba',
      q: `${searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${currentPage}`,
      per_page: 12,
    },
  };
  try {
    const response = await axios(axiosOptions);
    return response.data;
  } catch {
    toast.info("We're sorry, but you've reached the end of search results.");
  }
}

export default fetchGallery;
