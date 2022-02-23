import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";

import { useState } from "react";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./screens/ProfilePage/ProfileScreen";


function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
     
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/profile" component={ProfileScreen} exact />
        <Route path="/mynotes" component={() => <MyNotes/>}  />
      <Footer />
    </Router>
  );
}

export default App;
