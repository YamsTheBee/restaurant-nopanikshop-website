import "./styles/global.css";
import Home from "./pages/Home";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Restaurant africain Paris 10 | NoPanik Strasbourg Saint-Denis
        </title>

        <meta
          name="description"
          content="NoPanik, restaurant africain à Paris 10 près de Strasbourg Saint-Denis. Découvrez une cuisine sénégalaise authentique : thieboudienne, mafé et plats maison dans une ambiance chaleureuse."
        />

        <meta
          name="keywords"
          content="restaurant africain Paris 10, restaurant sénégalais Paris, Strasbourg Saint-Denis restaurant, cuisine africaine Paris"
        />

        {/* Open Graph (partage réseaux sociaux) */}
        <meta
          property="og:title"
          content="NoPanik - Restaurant africain Paris 10"
        />
        <meta
          property="og:description"
          content="Cuisine sénégalaise authentique à Paris 10 près de Strasbourg Saint-Denis."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://restaurantnopanik.fr" />

        {/* Responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Home />
    </HelmetProvider>
  );
}

export default App;
