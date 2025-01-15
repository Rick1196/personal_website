import React, { useCallback } from "react";
import LeftArrowIcon from "../icons/leftArrowIcon";
import RightArrowIcon from "../icons/rightArrowIcon";
const Carousel: React.FC<{
  children: React.ReactNode[];
  isDarkModeEnabled: boolean;
}> = ({ children, isDarkModeEnabled }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs: Array<React.RefObject<HTMLDivElement>> = children.map(() => {
    return React.createRef();
  });


  // Some validation for checking the array length could be added if needed

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
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
