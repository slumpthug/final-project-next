import Brands from "@/components/brands/Brands";
import Collection from "@/components/collection/Collection";
import First from "@/components/first/First";
import Header from "@/components/header/Header";


export default function Home() {
  return (
    <main>
      <Header/>
      <First/>
      <Brands/>
      <Collection/>
    </main>
  )
}
