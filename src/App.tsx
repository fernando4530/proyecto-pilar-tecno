import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage"
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </Layout>
  );
}

export default App;
