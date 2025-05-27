import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import "./App.css";
import Team from "./components/Team";
import Info from "./components/Info";
//import Registration from "./components/Registration";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/team" Component={Team} />
        <Route path="/info" Component={Info} />
        {/* <Route path="/registration" Component={Registration} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
