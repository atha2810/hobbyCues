import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../src/components/MyNavbar.jsx";
import Features from "../src/components/Features.jsx";
import HomeScreen from "../src/components/HomeScreen.jsx";
import AddPage from "../src/components/AddPage.jsx";
import Testimonials from "../src/components/Testimonials.jsx";
import End from "../src/components/End.jsx";
import Footer from "../src/components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HomeScreen />
      <Features />
      <AddPage />
      <Testimonials />
      <End />
      <Footer />
    </div>
  );
}

export default App;
