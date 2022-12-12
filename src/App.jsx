import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import ChatGPT from "./components/ChatGPT";
// import Me from "./components/Me";

function App() {

  // ChatGPT();

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
