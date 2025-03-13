import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
