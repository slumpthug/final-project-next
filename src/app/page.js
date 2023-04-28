import Brands from "@/components/brands/Brands";
import Collection from "@/components/collection/Collection";
import First from "@/components/first/First";
import Header from "@/components/header/Header";
import Novelties from "@/components/novelties/Novelties";
import Perfumes from "@/components/perfumes/Perfumes";
import Promotion from "@/components/promotion/Promotion";


export default function Home() {
  return (
    <main>
      <Header/>
      <First/>
      <Brands/>
      <Collection/>
      <Novelties/>
      <Perfumes/>
      <Promotion/>
    </main>
  )
}
