export { default } from "./supercategories";
import { Categories } from "@/api/category";


export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  
  const categoriesCtrl = new Categories();
  
  try {
    const responseCategory = await categoriesCtrl.getCategoryBySlug(category)


    if (!responseCategory) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        superCategory: responseCategory,     
      },
    };

  } catch (error) {
    console.error("Error cargando categoría:", error);

    return {
      notFound: true,
    };
  }
  
}
