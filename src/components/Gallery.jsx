import React from "react";

const Gallery = () => {
  const gallery = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
    "/image5.jpeg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
    "/image9.jpg",
    "/image14.jpg",
    "/image10.jpg",
    "/image11.jpg",
    "/image12.jpg",


  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;