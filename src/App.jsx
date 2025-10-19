import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";

function App() {

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
          </Routes>
        </main>
        <Footer id="footer" /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
