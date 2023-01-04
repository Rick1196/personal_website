import React from "react";
import LeftArrowIcon from "../icons/leftArrowIcon";
import RightArrowIcon from "../icons/rightArrowIcon";
const Carousel: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs: Array<React.RefObject<HTMLDivElement>> = children.map(() => {
    return React.createRef();
  });

  const scrollToImage = (i: number) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current?.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  // Some validation for checking the array length could be added if needed

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= children.length - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(children.length - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  return (
    <>
      <div className="carousel">
        {children.map((child, i) => (
          <div
            className="w-full flex-shrink-0"
            key={`carousel_child_${i}`}
            ref={refs[i]}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="flex flex-row w-full justify-center gap-2">
        <button type="button" onClick={previousImage}>
          <span role="img" aria-label="Arrow left">
            <LeftArrowIcon />
          </span>
        </button>
        <button type="button" onClick={nextImage}>
          <span role="img" aria-label="Arrow right">
            <RightArrowIcon />
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
