import React from "react";
import { BASE_NAME } from "@/config/constants";
import { WhatsApp } from "@/components/WhatsApp";
import Link from "next/link";
const scale = "c_scale,f_auto/";
const upload = "image/upload/";



import { CardImg, CardSubtitle, CardTitle, Button } from "reactstrap";

import styles from "./SoldOut.module.scss";

export function SoldOut(props) {
  const { product } = props;

  const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className={styles.list__product}>
      <div className={styles.soldout}>
        <span>AGOTADO</span>
      </div>
      <CardImg
          alt="Imagen"
          src={
            product.productData.images
              ? `${BASE_NAME}${upload}${scale}${
                  product.productData.images.split(upload)[1]
                }`
              : product.productData.image_alterna
          }
        
        />
      <h5>{product.productData.name_extend}</h5>
    </div>
  );
}
