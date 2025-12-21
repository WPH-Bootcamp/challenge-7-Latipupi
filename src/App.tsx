import Header from "./components/container/Header/Header";
import HeroSection from "./components/container/HeroSection";
import LeadingBrandSection from "./components/container/LeadingBrandSection/LeadingBrandSection";
import EndToEndSection from './components/container/EndToEndSection/EndToEndSection';
import ProcessSection from "./components/container/ProcessSection/ProcessSection";
import { ThemeProvider } from "./context/ThemeContext";
import ITSoultionSection from "./components/container/ITSolutionSection/ITSoultionSection";
import BuiltSection from "./components/container/BuiltSection/BuiltSection";
import ProtoSection from "./components/container/ProtoSection/ProtoSection";
import TestimonialCarousel from "./components/container/TestimonialCarousel/TestimonialCarousel";
import FAQAccordion from "./components/container/FaqAccrodian/FaqAccrodian";
import ContactForm from "./components/container/ContactForm/ContactForm";
import Footer from "./components/container/Footer/Footer";


function App() {
  return (
    <ThemeProvider>
      <Header />
      <HeroSection />
      <LeadingBrandSection />
      <EndToEndSection />
      <ProcessSection />
      <ITSoultionSection />
      <BuiltSection />
      <ProtoSection />
      <TestimonialCarousel />
      <FAQAccordion />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
