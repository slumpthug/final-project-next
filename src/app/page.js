import Basket from "@/components/basket/basket";
import Brands from "@/components/brands/Brands";
import Collection from "@/components/collection/Collection";
import Decor from "@/components/decor/Decor";
import First from "@/components/first/First";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Header from "@/components/header/Header";
import Last from "@/components/last/Last";
import Novelties from "@/components/novelties/Novelties";
import Perfumes from "@/components/perfumes/Perfumes";
import Product from "@/components/product/Product";
import Promotion from "@/components/promotion/Promotion";


export default function Home() {
  return (
    <main>
      <First />
      <Brands />
      <Collection />
      <Novelties />
      <Perfumes />
      <Promotion />
      <Last />
      
      <Basket />
      <Decor />
      <Form />
      <Product />
    </main>
  )
}
