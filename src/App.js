import { Navbar, Nav, NavDropdown, Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OriginOfKashmir from "./pages/OriginOfKashmir";
import OldestSiteInKashmir from "./pages/OldestSiteInKashmir";
import KashmirTheName from "./pages/KashmirTheName";
import KashmiriFoodHistory from "./pages/KashmiriFoodHistory";
import KashmiriPanditCuisine from "./pages/KashmiriPanditCuisine";
import Festival from "./pages/Festival";
import AboutUs from "./pages/AboutUs";
import Event1 from "./pages/Event1";
import Home from "./pages/Home";
import Music from "./pages/Music";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/origin":
        title = "";
        metaDescription = "";
        break;
      case "/oldest-site-in-kashmir":
        title = "";
        metaDescription = "";
        break;
      case "/kashmir-the-name":
        title = "";
        metaDescription = "";
        break;
      case "/food-history":
        title = "";
        metaDescription = "";
        break;
      case "/kashmiri-pandit-cuisine":
        title = "";
        metaDescription = "";
        break;
        case "/festival":
          title = "";
          metaDescription = "";
          break;
        case "/about-us":
          title = "";
          metaDescription = "";
          break;
        case "/":
          title = "";
          metaDescription = "";
          break;
        case "/music":
          title = "";
          metaDescription = "";
          break;
        case "/event":
          title = "";
          metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/origin" element={<OriginOfKashmir />} />
      <Route path="/oldest-site-in-kashmir" element={<OldestSiteInKashmir />} />
      <Route path="/kashmir-the-name" element={<KashmirTheName />} />
      <Route path="/food-history" element={<KashmiriFoodHistory />} />
      <Route path="/kashmiri-pandit-cuisine" element={<KashmiriPanditCuisine />}/>
      <Route path="/festival" element={<Festival />} />
      <Route path="/about-us" element={<Music />}/>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<AboutUs />}/>
      <Route path="/event" element={<Event1 />}/>
    </Routes>
  );
}
export default App;
