import { BasicLayout } from "@/layouts";
import { DetailProduct, FooterApp, Redes, Separator } from "@/components";
import { Footer } from "@/components";
import styles from "./Detail.module.scss";

export default function ProductPage(props) {
  const { product, relate, gallery } = props;


  return (
    <div className={styles.detail}>
      
   
        <DetailProduct product={product} relate={relate} gallery= {gallery} />
        <FooterApp />
        <Footer />

    </div>
  );
}
