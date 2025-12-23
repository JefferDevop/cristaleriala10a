import React, { useEffect, useMemo, useState } from "react";
import { Categories } from "@/api/category";
import { Products } from "@/api/products";

import {
  ListSuperCategories,
  Footer,
  Promotion,
  Exclusive,
  FooterApp,
  Redes,
} from "@/components";

import { BasicLayout } from "../../layouts";

const categoriesCtrl = new Categories();
const productsCtrl = new Products();

/**
 * Construye el árbol final:
 * - Supercategorías con sus categorías
 * - Categorías sueltas SOLO si no pertenecen a ninguna supercategoría
 */
const buildCategoryTree = (superCategories = [], categories = []) => {
  // IDs de categorías que ya pertenecen a una supercategoría
  const embeddedCategoryIds = new Set(
    superCategories.flatMap(sc =>
      sc.categories?.map(cat => cat.id) || []
    )
  );

  // Categorías libres (no asociadas a supercategoría)
  const freeCategories = categories.filter(
    cat => !embeddedCategoryIds.has(cat.id)
  );

  return [
    // Supercategorías
    ...superCategories.map(sc => ({
      id: sc.id,
      name: sc.name,
      slug: sc.slug,
      type: "supercategory",
      image: sc.image,
      image_alterna: sc.image_alterna,
      categories: sc.categories || [],
    })),

    // Categorías sueltas
    ...freeCategories.map(cat => ({
      id: `cat-${cat.id}`,
      name: cat.name,
      slug: cat.slug,
      type: "category",
      image: cat.image,
      image_alterna: cat.image_alterna,
      categories: [],
    })),
  ];
};

export default function HomePage() {
  const [superCategories, setSuperCategories] = useState(null);
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const [superCats, cats, prods] = await Promise.all([
          categoriesCtrl.getAllSuperCategory(),
          categoriesCtrl.getAll(),
          productsCtrl.getProductByOfertAndExclusive(),
        ]);

        setSuperCategories(superCats);
        setCategories(cats);
        setProducts(prods);
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    })();
  }, []);

  const categoriesTree = useMemo(() => {
    if (!superCategories || !categories) return [];
    return buildCategoryTree(superCategories, categories);
  }, [superCategories, categories]);

  return (
    <BasicLayout>
      <Redes />

      <ListSuperCategories categories={categoriesTree} />

      {products && (
        <>
          <Promotion products={products} />
          <hr />
          <Exclusive products={products} />
        </>
      )}

      <FooterApp />
      <Footer />
    </BasicLayout>
  );
}
