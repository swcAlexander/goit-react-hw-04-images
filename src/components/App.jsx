import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import fetchGallery from '../Api/ApiServise';
import { Loader } from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { LoadMoreBtn } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      if (searchQuery.trim() === '') {
        return; // Перериваємо виконання функції, якщо searchQuery є порожнім рядком
      }

      try {
        setIsLoading(true);
        const data = await fetchGallery({ searchQuery, currentPage });
        if (data.hits.length === 0) {
          return toast.info('Sorry images not found...');
        }
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotal(data.totalHits);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchImages();
  }, [searchQuery, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleInputChange = searchQuery => {
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setImages([]);
  };

  const totalPages = total / images.length;

  return (
    <div className="container">
      <Searchbar onSubmit={handleInputChange} />
      {isLoading && <Loader />}
      {error && toast.error('Something went wrong...')}
      {images.length > 0 && <ImageGallery images={images} />}
      {totalPages > 1 && !isLoading && images.length >= 12 && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;
