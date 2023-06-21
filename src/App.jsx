import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import { MealsProvider } from "./context/Meals_context";
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials";

function App() {

  return (

    <MealsProvider>
      <Navbar />
      <Hero/>
      <Featured/>
      <HowItWorks/>
      <Testimonials/>
      <Footer/>
      
 
    </MealsProvider>
  
  );
}

export default App
