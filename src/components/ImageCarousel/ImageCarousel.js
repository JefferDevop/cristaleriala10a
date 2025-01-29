import React from "react";
import { Carousel } from "react-responsive-carousel";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";
const scale = "c_scale,f_auto/";
const upload = "image/upload/";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ImageCarousel.module.scss";
import { CardImg } from "reactstrap";

export function ImageCarousel(props) {
  const { images } = props;
  
  
  
  
  return (
    <Carousel  infiniteLoop={true} showThumbs={false} preventMovementUntilSwipeScrollTolerance={true}>
      {map(images, (image, index) => (
        <div className={styles.carousel}  key={index}>
          <CardImg
          alt="Imagen"
          src={
            image.image
              ? `${BASE_NAME}${upload}${scale}${
                image.image.split(upload)[1]
                }`
              :image.image_alterna
          } />
        </div>
      ))}
    </Carousel>
  );
}
