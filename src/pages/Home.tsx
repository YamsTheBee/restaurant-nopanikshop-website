import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Restaurant from "../components/Restaurant";
import Menu from "../components/Menu";
import Epicerie from "../components/Epicerie";
import Lifestyle from "../components/Lifestyle";
import Transition from "../components/Transition";
import Footer from "../components/Footer";
import ClientReviews from "../components/ClientReviews";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
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
