import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Restaurant from "../components/Restaurant"
import Menu from "../components/Menu"
import Epicerie from "../components/Epicerie"
import Lifestyle from "../components/Lifestyle"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Restaurant />
      <Menu />
      <Epicerie />
      <Lifestyle />
      <Footer />
    </>
  )
}

export default Home