import Navbar from "./components/Navbar"
import { MealsProvider } from "./context/Meals_context";

function App() {

  return (

    <MealsProvider>
      <Navbar />
 
    </MealsProvider>
  
  );
}

export default App
