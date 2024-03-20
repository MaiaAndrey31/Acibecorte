
import Home  from "./pages/Home";
import Services  from "./pages/Serviços";
import Contact from "./pages/Contact";
import GlobalStyles from "./styles/GlobalStyles";
import Company from "./pages/Company";
import ValuesPage from "./pages/Values";
import BtnWhatsPulse from "./components/ButtonWhatsPulse"
import Footer from "./components/Footer";

function App() {


  return (
    <>
    <GlobalStyles />
     <Home />
     <Services />
     <Company />
     <ValuesPage />
     <Contact />
     <Footer />
     <BtnWhatsPulse/>
    </>
  )
}

export default App
