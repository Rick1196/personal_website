import React, { useCallback } from "react";
import LeftArrowIcon from "../../icons/leftArrowIcon";
import RightArrowIcon from "../../icons/rightArrowIcon";
const Carousel: React.FC<{
  children: React.ReactNode[];
  isDarkModeEnabled: boolean;
}> = ({ children, isDarkModeEnabled }) => {
  const [currentImage, setCurrentImage] = React.useState(0);


  const nextImage = () => {
    if (currentImage >= children.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(children.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="padding-m flex-columns space-s">
      <div className="carousel padding-m">
        {children.map((child, i) => (
          <div
            className={`card full ${i === currentImage ? 'active' : 'hidden'}`}
            key={`carousel_child_${i}`}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="flex-row flex-align-center-elements flex-justify-center-elments">
        <button className="ghost" type="button" onClick={previousImage}>
          <span role="img" aria-label="Arrow left">
            <LeftArrowIcon color={isDarkModeEnabled ? "white" : "black"} />
          </span>
        </button>
        <button type="button" className="ghost" onClick={nextImage}>
          <span role="img" aria-label="Arrow right">
            <RightArrowIcon color={isDarkModeEnabled ? "white" : "black"} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
