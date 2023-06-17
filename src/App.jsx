import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import { MealsProvider } from "./context/Meals_context";
import Featured from "./components/Featured"

function App() {

  return (

    <MealsProvider>
      <Navbar />
      <Hero/>
      <Featured/>
      <HowItWorks/>
 
    </MealsProvider>
  
  );
}

export default App
