import "./App.css";
import Main from "./Components/Body/Main";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Header/Image Gallery/Gallery";
import Navbar from "./Components/Header/Navbar/Navbar";
import Subscribe from "./Components/Subscribe/Subscribe";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
      <Main />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
