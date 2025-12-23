import { ListCategories, FooterApp, Footer, Redes } from "@/components";
import { BasicLayout } from "@/layouts";

export default function SupercategoriesPage(props) {
  const { superCategory } = props;

  return (
    <BasicLayout>
       <Redes />
  
        <ListCategories superCategory={superCategory} />

        <FooterApp />
        <Footer /> 

    </BasicLayout>
  );
}
