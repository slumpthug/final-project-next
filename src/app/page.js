import Basket from "@/components/basket/basket";
import Brands from "@/components/brands/Brands";
import Collection from "@/components/collection/Collection";
import Decor from "@/components/decor/Decor";
import First from "@/components/first/First";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Last from "@/components/last/Last";
import Novelties from "@/components/novelties/Novelties";
import Perfumes from "@/components/perfumes/Perfumes";
import Promotion from "@/components/promotion/Promotion";


export default function Home() {
  return (
    <main>
      {/* <Header/>
      <First/>
      <Brands/>
      <Collection/>
      <Novelties/>
      <Perfumes/>
      <Promotion/>
      <Last/>
      <Footer/> */}
      <Basket/>
      <Decor/>
    </main>
  )
}
