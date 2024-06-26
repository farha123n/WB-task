import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ImageSlider.css';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [images, interval]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default ImageSlider;
