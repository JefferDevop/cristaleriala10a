import Link from "next/link";
import { CardImg, CardTitle } from "reactstrap";
import { BASE_NAME } from "@/config/constants";
import styles from "./Retail.module.scss";
import { map } from "lodash";

export function Exclusive(props) {
  const { products } = props;

  const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };


  return (
    <div className={styles.content}>
      <h5>Más populares</h5>

      <div className={styles.listExclusive}>
        {map(
          products,
          (product, index) =>
            product.home && (
              <div key={index}>
                {product.images ? (
                  <Link                   
                    href={`/${product.slug}`}
                    className={styles.list__product}
                  >
                    <CardImg
                      alt="Card image cap"
                      src={BASE_NAME + product.images}
                    />

                    <div className={styles.product}>
                      <CardTitle className={styles.title}>
                        {product.name} {product.name_extend}
                        <h6>$  {format(product.price1)}</h6>
                        <h6>Por mayor $  {format(product.price2)}</h6>

                      </CardTitle>
                    </div>
                  </Link>
                ) : (
                  <Link
                    key={index}
                    href={`/${product.slug}`}
                    className={styles.list__product}
                  >
                    <CardImg alt="Card image cap" src={product.image_alterna} />
                    <div className={styles.product}>
                      <CardTitle className={styles.title}>                     
                          {product.name} {product.name_extend}               
                        <h6>$ {format(product.price1)}</h6>
                        <h6>Por mayor $  {format(product.price2)}</h6>

                      </CardTitle>
                    </div>
                  </Link>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
