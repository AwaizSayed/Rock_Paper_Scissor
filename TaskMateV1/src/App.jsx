import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "5px", fontSize: "70px" }}>
        TaskMate
      </h1>
      <Home />
      <Footer />
    </>
  );
}

export default App;
