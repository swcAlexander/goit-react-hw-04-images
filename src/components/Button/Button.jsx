import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Button/Button.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.load_more_button}
      id="modal-button"
    >
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
