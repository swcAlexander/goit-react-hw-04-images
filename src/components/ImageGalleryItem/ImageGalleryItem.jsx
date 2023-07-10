import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import styles from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imgUrl, largeImageURL, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <li className={styles.gallery_item} onClick={toggleModal}>
        <img src={imgUrl} alt={alt} className={styles.gallery_images} />
      </li>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img
            src={largeImageURL}
            alt={alt}
            className={styles.modal_gallery_images}
          />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
