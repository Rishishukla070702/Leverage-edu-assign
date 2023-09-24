import React, { useRef, useState, useEffect } from "react";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import "./Imgs.css"; // Include the CSS styles

function Imgs() {
  const images = [
    require('../Img/speaker1.jpeg'),
    require('../Img/speaker2.jpeg'),
    require('../Img/speaker3.jpeg'),
    require('../Img/speaker4.jpeg'),
    require('../Img/speaker5.jpeg'),
    require('../Img/speaker6.jpeg'),
    require('../Img/speaker7.jpeg'),
    require('../Img/speaker8.jpeg'),
   
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [NextImg, setNextImg] = useState(0);

  const containerRef = useRef(null);
  const imageWidth = 150;
  const expandedWidth = 500;
  const imagesPerContainer = 8;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const updateVisibleImages = () => {
    debugger
    const startIndex = Math.floor(scrollPosition / imageWidth);
    const endIndex = startIndex + imagesPerContainer;
    if(startIndex<=2){
        setNextImg(startIndex);
        setVisibleImages(images.slice(startIndex, endIndex));}
  };

  useEffect(() => {
    updateVisibleImages();
  }, [scrollPosition]);

  const handleScroll = (scrollOffset) => {
    const newPosition = scrollPosition + scrollOffset;
    setScrollPosition(newPosition);
  };

  const handleChangeSelectedIndex = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }

    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="hero_globalCitizensImgWrapper">
      <div className="image-container" ref={containerRef}>
        <div
          className="images-wrapper"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            width: `${imageWidth * visibleImages.length}px`,
          }}
        >
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className={`image-item ${
                selectedIndex === index ? "selected" : ""
              } `}
              onClick={() => handleChangeSelectedIndex(index)}
              style={{
                width: `${expandedIndex === index ? expandedWidth : imageWidth}px`,
                height: "500px",
              }}
            >
              <img
                src={img}
                alt="Image"
                className={`image ${expandedIndex === index ? "expanded" : ""}`}
              />
              {expandedIndex === index && (
                <div className="play-button">
                  <BsIcons.BsPlayCircle size="75px" color="white" />
                </div>
              )}
            </div>
          ))}
        </div>
        {scrollPosition > 0 && (
          <div
            className="scroll-button prev"
            onClick={() => handleScroll(-imageWidth)}
          >
            <IoIcons.IoIosArrowDropleftCircle
              color="#CBDCCB "
              size="70px"
            />
          </div>
        )}
        {scrollPosition + containerWidth < imageWidth * images.length && NextImg <1 ?
          (<div
            className="scroll-button next"
            onClick={() => handleScroll(imageWidth)}
          >
            <IoIcons.IoIosArrowDroprightCircle
              color=" #CBDCCB"
              size="70px"
            />
          </div>
        ):""}
      </div>
    </div>
  );
}

export default Imgs;
