import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Restaurant from "../components/Restaurant";
import Menu from "../components/Menu";
import Epicerie from "../components/Epicerie";
import Lifestyle from "../components/Lifestyle";
import Transition from "../components/Transition";
import Footer from "../components/Footer";
import ClientReviews from "../components/ClientReviews";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Restaurant Africain Paris 10 | NoPanik - Cuisine Sénégalaise
        </title>
        <meta
          name="description"
          content="NoPanik est un restaurant africain à Paris 10 proposant une cuisine sénégalaise authentique : mafé, dibi, thieb et plats faits maison."
        />
      </Helmet>
      <Navbar />
      <Hero />
      <p className="sr-only">
        NoPanik est un restaurant africain situé à Paris 10, proposant une
        cuisine sénégalaise authentique avec des plats faits maison et une
        épicerie africaine.
      </p>
      <Transition />
      <Restaurant />
      <Menu />
      <Epicerie />
      <Lifestyle />
      <ClientReviews />
      <Footer />
    </>
  );
}

export default Home;
